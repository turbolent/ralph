// $ gcc -DDEBUG  `pkg-config --cflags --libs javascriptcoregtk-3.0` engine.c -o engine

// latest JavaScriptCore:
// $ gcc -DDEBUG -I/usr/include/webkit-3.0 -c engine.c -o engine.o
// $ gcc -lQtCore -L/usr/lib64 -L/usr/lib64/qt4 \
//   -LWebKit/WebKitBuild/Release/Source/JavaScriptCore/release \
//   -LWebKit/WebKitBuild/Release/Source/WTF/release \
//   -Wl,-whole-archive -lJavaScriptCore \
//   -Wl,-whole-archive -lWTF \
//   -Wl,-no-whole-archive -pthread \
//   engine.o -o engine


#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <JavaScriptCore/JavaScript.h>

#ifdef DEBUG
#define DLOG(fmt, args...) fprintf(stderr, "DEBUG: %s:%d: "fmt,__FILE__,__LINE__,args)
#else
#define DLOG(fmt, args...)
#endif

// TODO: handle errors


char *path;
int ARGC;
char **ARGV;

enum type { FUNCTION, VALUE };

typedef struct {
  char *name;
  enum type type;
  union {
    JSValueRef value;
    JSObjectCallAsFunctionCallback function;
  } value;
} entry;


typedef struct {
  char *name;
  JSContextRef context;
} contextEntry;

contextEntry *contexts = NULL;
int contextsCount = 0;
int contextsSize = 0;


int addContextEntry (contextEntry entry) {
  // realloc needed?
  if (contextsCount == contextsSize) {
    if (contextsSize == 0)
      contextsSize = 10;
    else
      contextsSize *= 2;

    void *tmp = realloc(contexts, contextsSize * sizeof(contextEntry));
    if (!tmp) {
      perror("Failed to reallocate memory");
      return;
    }
    contexts = (contextEntry*)tmp;
  }
  // add entry
  contexts[contextsCount] = entry;
  return ++contextsCount;
}


static char *readFile (const char *name) {
  FILE *file;
  long size;
  char *buffer;
  size_t result;

  file = fopen(name, "r");
  if (file == NULL)
    return NULL;

  fseek(file, 0, SEEK_END);
  size = ftell(file);
  rewind(file);

  buffer = (char *)calloc(sizeof(char), size);
  if (buffer == NULL)
    return NULL;

  result = fread(buffer, 1, size, file);
  if (result != size)
    return NULL;

  fclose(file);
  return buffer;
}


static char* JSStringToCString (JSStringRef string) {
  size_t size = JSStringGetMaximumUTF8CStringSize(string);
  char *buffer = (char *)calloc(sizeof(char), size);
  JSStringGetUTF8CString(string, buffer, size);
  return buffer;
}


static char* JSValueToCString (JSContextRef context, JSValueRef value,
                               JSValueRef *exception)
{
  JSStringRef string = JSValueToStringCopy(context, value, exception);
  char *result = JSStringToCString(string);
  JSStringRelease(string);
  return result;
}





static void dumpException (JSContextRef context, JSValueRef exception) {
  // description
  char *description = JSValueToCString(context, exception, NULL);
  fprintf(stderr, "%s", description);
  free(description);

  // line
  JSStringRef lineProperty = JSStringCreateWithUTF8CString("line");
  JSValueRef lineValue =
    JSObjectGetProperty(context, (JSObjectRef)exception, lineProperty, NULL);
  int line = JSValueToNumber(context, lineValue, NULL);
  fprintf(stderr, " on line %d", line);
  JSStringRelease(lineProperty);

  // source
  JSStringRef sourceProperty = JSStringCreateWithUTF8CString("sourceURL");
  if (JSObjectGetProperty(context, (JSObjectRef)exception, sourceProperty, NULL)) {
    JSValueRef sourceValue =
      JSObjectGetProperty(context, (JSObjectRef)exception, sourceProperty, NULL);
    char *sourceString = JSValueToCString(context, sourceValue, NULL);
    fprintf(stderr, " in %s", sourceString);
    free(sourceString);
  }
  JSStringRelease(sourceProperty);

  JSStringRef stackProperty = JSStringCreateWithUTF8CString("stack");
  if (JSObjectGetProperty(context, (JSObjectRef)exception, stackProperty, NULL)) {
    fprintf(stderr, ":\n");
    JSValueRef stackValue =
      JSObjectGetProperty(context, (JSObjectRef)exception, stackProperty, NULL);
    char *stack = JSValueToCString(context, stackValue, NULL);
    char *line = strtok(stack, "\n");
    while (line != NULL) {
      if (line[0] == '(')
        fprintf(stderr, "%s\n", line);
      line = strtok(NULL, "\n");
    }
  } else {
    fprintf(stderr, "\n");
  }
  JSStringRelease(stackProperty);
}


void defineGlobals (JSContextRef context, entry globals[]) {
  JSObjectRef g = JSContextGetGlobalObject(context);
  int i = 0;
  while (1) {
    entry global = globals[i++];
    if (global.name == NULL)
      break;
    JSStringRef name = JSStringCreateWithUTF8CString(global.name);
    JSValueRef value;
    if (global.type == FUNCTION)
      value = JSObjectMakeFunctionWithCallback(context, name,
                                               global.value.function);
    else
      value = global.value.value;

    JSObjectSetProperty(context, g, name, value,
                        kJSPropertyAttributeNone, NULL);
    JSStringRelease(name);
  }
}


static JSValueRef evaluate (JSContextRef context, char *source, char *name) {
  DLOG("Evaluating '%s'\n", name);

  JSStringRef sourceString = JSStringCreateWithUTF8CString(source);
  JSStringRef nameString = JSStringCreateWithUTF8CString(name);
  JSValueRef exception = NULL;
  JSValueRef value =
    JSEvaluateScript(context, sourceString, NULL,
                     nameString, 0, &exception);
  JSStringRelease(sourceString);
  JSStringRelease(nameString);
  if (exception) {
    dumpException(context, exception);
    return JSValueMakeUndefined(context);
  } else
    return value;
}


static JSValueRef writeFunc (JSContextRef context, JSObjectRef function,
                             JSObjectRef this, size_t argc,
                             const JSValueRef argv[], JSValueRef* exception)
{
  int i = 0;
  for (; i < argc; i++) {
    char *string = JSValueToCString(context, argv[i], exception);
    printf("%s", string);
    free(string);
  }
  return JSValueMakeUndefined(context);
}

static JSValueRef readFunc (JSContextRef context, JSObjectRef function,
                            JSObjectRef this, size_t argc,
                            const JSValueRef argv[], JSValueRef* exception)
{
  const size_t size = 1024;
  char buffer[size];
  size_t length = 1;
  char *content = malloc(sizeof(char) * size);
  if (content == NULL) {
    perror("Failed to allocate memory");
    return JSValueMakeUndefined(context);
  }

  content[0] = '\0';
  while (fgets(buffer, size, stdin)) {
    char *old = content;
    length += strlen(buffer);
    content = realloc(content, length);
    if (content == NULL) {
      perror("Failed to reallocate memory");
      free(old);
      return JSValueMakeUndefined(context);
    }
    strcat(content, buffer);
  }

  if (ferror(stdin)) {
    free(content);
    perror("Failed to read from stdin");
    return JSValueMakeUndefined(context);
  }

  JSStringRef string = JSStringCreateWithUTF8CString(content);
  return JSValueMakeString(context, string);
}


void initialize (JSContextRef context);


char *resolve (char *name) {
  int length =  strlen(path) + 1 + strlen(name) + 3;
  char *result = (char *)calloc(sizeof(char), length);
  sprintf(result, "%s/%s.js", path, name);
  return result;
}


JSContextRef createModuleContext (JSContextRef context) {
  JSContextRef moduleContext =
    JSGlobalContextCreateInGroup(JSContextGetGroup(context), NULL);
  initialize(moduleContext);
  return moduleContext;
}


JSContextRef createSystemModule (JSContextRef context) {
    JSValueRef arguments[ARGC];
    int i = 0;
    for (; i < ARGC; i++) {
      JSStringRef argument =
        JSStringCreateWithUTF8CString(ARGV[i]);
      arguments[i] = JSValueMakeString(context, argument);
    }
    JSObjectRef args =
      JSObjectMakeArray(context, ARGC, arguments, NULL);

    JSContextRef moduleContext = createModuleContext(context);
    entry globals[] = {{ "write", FUNCTION, .value.function = writeFunc },
                       { "read", FUNCTION, .value.function = readFunc },
                       { "args", VALUE, args },
                       {}};
    defineGlobals(moduleContext, globals);
    evaluate(moduleContext,
             "exports.stdout = {write: write};" \
             "exports.stdin = {read: read};" \
             "exports.args = args",
             "system");
    return moduleContext;
}


JSContextRef loadModule (JSContextRef context, char *name) {
  DLOG("Loading module '%s'\n", name);
  JSContextRef moduleContext = createModuleContext(context);
  char *filename = resolve(name);
  char *contents = readFile(filename);

  DLOG("Read '%s'\n", filename);
  free(filename);
  if (contents == NULL)
    return NULL;
  evaluate(moduleContext, contents, name);
  free(contents);
  return moduleContext;
}

JSContextRef findModule (char *name) {
  int i = 0;
  for (; i < contextsCount; i++) {
    contextEntry entry = contexts[i];
    if (strcmp(entry.name, name) == 0)
      return entry.context;
  }
  return NULL;
}

JSValueRef getExports (JSContextRef context) {
  JSObjectRef global = JSContextGetGlobalObject(context);
  JSStringRef propertyName = JSStringCreateWithUTF8CString("exports");
  JSValueRef exports =
    JSObjectGetProperty(context, global, propertyName, NULL);
  JSStringRelease(propertyName);
  return exports;
}


JSObjectRef getBuiltinPrototype (JSContextRef context, const char *builtin) {
  JSStringRef builtinName = JSStringCreateWithUTF8CString(builtin);
  JSStringRef prototypeName = JSStringCreateWithUTF8CString("prototype");
  JSObjectRef global = JSContextGetGlobalObject(context);
  JSValueRef builtinValue =
    JSObjectGetProperty(context, global, builtinName, NULL);
  JSObjectRef builtinObject =
    JSValueToObject(context, builtinValue, NULL);
  JSValueRef prototypeValue =
    JSObjectGetProperty(context, builtinObject,
                        prototypeName, NULL);
  JSObjectRef prototypeObject =
    JSValueToObject(context, prototypeValue, NULL);

  JSStringRelease(prototypeName);
  JSStringRelease(builtinName);

  return prototypeObject;
}

void copyBuiltinProperties (JSContextRef targetContext,
                            JSContextRef sourceContext)
{
  static const char* builtins[] =
    { "Object", "Function", "Array", "String", "Boolean", "Number",
      "Date", "RegExp", "Error", "EvalError", "RangeError",
      "ReferenceError", "SyntaxError", "TypeError", "URIError",
      NULL };

  // TODO: warn when redefining


  // copy properties of built-ins
  int i = 0;
  while (1) {
    const char *builtin = builtins[i++];
    if (builtin == NULL)
      break;

    JSObjectRef targetProto = getBuiltinPrototype(targetContext, builtin);
    JSObjectRef sourceProto = getBuiltinPrototype(sourceContext, builtin);

    JSPropertyNameArrayRef properties =
      JSObjectCopyPropertyNames(sourceContext, sourceProto);
    size_t n = JSPropertyNameArrayGetCount(properties);
    size_t i = 0;
    for (; i < n; i++) {
      JSStringRef propertyName = JSPropertyNameArrayGetNameAtIndex(properties, i);
      JSValueRef property =
        JSObjectGetProperty(sourceContext, sourceProto, propertyName, NULL);
      JSObjectSetProperty(targetContext, targetProto, propertyName, property,
                          kJSPropertyAttributeNone, NULL);
    }
    JSPropertyNameArrayRelease(properties);
  }
}


JSValueRef require (JSContextRef context, JSObjectRef function,
                    JSObjectRef this, size_t argc,
                    const JSValueRef argv[], JSValueRef* exception)
{
  JSValueRef undefined = JSValueMakeUndefined(context);
  if (argc > 0) {

    char *name = JSValueToCString(context, argv[0], exception);

    JSContextRef moduleContext = findModule(name);
    if (moduleContext == NULL) {
      if (strcmp(name, "system") == 0) {
        moduleContext = createSystemModule(context);
      } else {
        moduleContext = loadModule(context, name);
      }
      contextEntry entry = {
        .name = strdup(name),
        .context = moduleContext
      };
      addContextEntry(entry);
    }

    copyBuiltinProperties(context, moduleContext);
    JSValueRef exports = getExports(moduleContext);
    free(name);
    return exports;
  }
  return undefined;
}


void initialize (JSContextRef context) {
  JSObjectRef global = JSContextGetGlobalObject(context);

  entry globals[] = {{ "require", FUNCTION, .value.function = require }, {}};
  defineGlobals(context, globals);

  // exports
  JSStringRef propertyName = JSStringCreateWithUTF8CString("exports");
  JSObjectRef exports = JSObjectMake(context, NULL, NULL);
  JSObjectSetProperty(context, global, propertyName, exports,
                      kJSPropertyAttributeNone, NULL);
  JSStringRelease(propertyName);
}


void dump (JSContextRef context, JSValueRef value) {
  JSValueRef exception = NULL;
  JSStringRef json =
    JSValueCreateJSONString(context, value, 2, &exception);
  if (exception)
    dump(context, exception);
  else {
    char *string = JSStringToCString(json);
    fprintf(stderr, "%s\n", string);
    free(string);
  }
  JSStringRelease(json);
}

int main (int argc, char *argv[]) {
  if (argc <= 1)
    return EXIT_FAILURE;

  ARGC = argc;
  ARGV = argv;

  path = getenv("MODULE_PATH");
  if (path == NULL)
    path = getcwd(NULL, 0);

  char *name = argv[1];
  char *contents = readFile(name);
  if (contents != NULL) {
    JSGlobalContextRef context =
      JSGlobalContextCreate(NULL);
    initialize(context);

    evaluate(context, contents, name);

    JSGlobalContextRelease(context);
    free(contents);
  }
  return EXIT_SUCCESS;
}
