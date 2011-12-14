#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <string.h>
#include <JavaScriptCore/JavaScript.h>

#define SYSTEM "exports.stdout = {write: write}"

char *path;

typedef struct {
  char *name;
  JSObjectCallAsFunctionCallback function;
} functionEntry;


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

  fprintf(stderr, "\n");

}

static JSValueRef evaluate (JSContextRef context, char *source, char *name) {
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
    JSValueMakeUndefined(context);
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

void initialize (JSContextRef context);

char *resolve (char *name) {
  int length =  strlen(path) + 1 + strlen(name) + 3;
  char *result = (char *)calloc(sizeof(char), length);
  sprintf(result, "%s/%s.js", path, name);
  return result;
}

const char* predefined[] =
  { "Object", "Array", "Boolean", "Date",
    "Function", "Number", "RegExp", "String",
    NULL };

JSValueRef require (JSContextRef context, JSObjectRef function,
                           JSObjectRef this, size_t argc,
                           const JSValueRef argv[], JSValueRef* exception)
{
  JSValueRef undefined = JSValueMakeUndefined(context);
  if (argc > 0) {
    JSObjectRef global = JSContextGetGlobalObject(context);
    char *name = JSValueToCString(context, argv[0], exception);
    char *contents;
    int freeContents = 0;
    // TODO: cache modules
    JSContextRef context2 =
      JSGlobalContextCreateInGroup(JSContextGetGroup(context), NULL);
    JSObjectRef global2 = JSContextGetGlobalObject(context2);
    initialize(context2);
    if (strcmp(name, "system") == 0) {
      contents = SYSTEM;
      functionEntry globals[] = {{ "write", writeFunc }, {}};
      defineGlobals(context2, globals);
    } else {
      char *filename = resolve(name);
      contents = readFile(filename);
      freeContents = 1;
      free(filename);
    }
    if (contents == NULL)
      return undefined;
    evaluate(context2, contents, name);
    JSStringRef propertyName = JSStringCreateWithUTF8CString("exports");
    JSValueRef exports =
      JSObjectGetProperty(context2, global2, propertyName, exception);
    JSStringRelease(propertyName);
    free(name);
    if (freeContents)
      free(contents);

    // copy properties of built-ins
    int i = 0;
    while (1) {
      const char *preString = predefined[i++];
      if (preString == NULL)
        break;
      JSStringRef preName = JSStringCreateWithUTF8CString(preString);
      JSValueRef pre = JSObjectGetProperty(context, global, preName, NULL);
      JSValueRef pre2 = JSObjectGetProperty(context2, global2, preName, NULL);
      JSStringRelease(preName);

      JSStringRef prototypeName = JSStringCreateWithUTF8CString("prototype");
      JSObjectRef proto = JSObjectGetProperty(context, JSValueToObject(context, pre, NULL),
                                              prototypeName, NULL);
      JSObjectRef proto2 = JSObjectGetProperty(context2, JSValueToObject(context2, pre2, NULL),
                                               prototypeName, NULL);
      JSStringRelease(prototypeName);

      JSPropertyNameArrayRef properties = JSObjectCopyPropertyNames(context2, proto2);
      size_t n = JSPropertyNameArrayGetCount(properties);
      size_t i = 0;
      for (; i < n; i++) {
        JSStringRef propertyName = JSPropertyNameArrayGetNameAtIndex(properties, i);
        JSValueRef property = JSObjectGetProperty(context2, proto2, propertyName, NULL);

        JSObjectSetProperty(context, proto, propertyName, property,
                            kJSPropertyAttributeNone, NULL);
      }
      JSPropertyNameArrayRelease(properties);
    }

    return exports;
  }
  return undefined;
}


void defineGlobals (JSContextRef context, functionEntry globals[]) {
  JSObjectRef global = JSContextGetGlobalObject(context);
  int i = 0;
  while (1) {
    functionEntry entry = globals[i++];
    if (entry.name == NULL)
      break;
    JSStringRef name = JSStringCreateWithUTF8CString(entry.name);
    JSObjectRef function =
      JSObjectMakeFunctionWithCallback(context, name, entry.function);
    JSObjectSetProperty(context, global, name, function,
                        kJSPropertyAttributeNone, NULL);
    JSStringRelease(name);
  }
}


void initialize (JSContextRef context) {
  JSObjectRef global = JSContextGetGlobalObject(context);

  functionEntry globals[] = {{ "require", require }, {}};
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
