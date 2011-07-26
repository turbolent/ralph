var Cc = Components.classes;
var Ci = Components.interfaces;
var Cu = Components.utils;
var Cr = Components.results;

var ENV = Cc["@mozilla.org/process/environment;1"]
    .getService(Ci.nsIEnvironment);
var IO = Cc['@mozilla.org/network/io-service;1']
    .getService(Ci.nsIIOService);

var systemPrincipal = Cc["@mozilla.org/systemprincipal;1"]
    .createInstance(Ci.nsIPrincipal);
var root = ENV.get("PWD");
if (ENV.exists("MODULE_PATH")) {
    var path = ENV.get("MODULE_PATH");
    if (path.length > 0)
        root = path.charAt(0) == '/' ? path : root + '/' + path;
}

var modules = {};
var sandboxes = {};

function readPath (path) {
    var channel = IO.newChannel(path, null, null);
    var iStream = channel.open();
    var ciStream = Cc["@mozilla.org/intl/converter-input-stream;1"].
        createInstance(Ci.nsIConverterInputStream);
    var bufLen = 0x8000;
    ciStream.init(iStream, "UTF-8", bufLen,
                  Ci.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER);
    var chunk = {};
    var data = "";
    while (ciStream.readString(bufLen, chunk) > 0)
        data += chunk.value;
    ciStream.close();
    iStream.close();
    return data;
}

function exists (uri) {
    var channel = IO.newChannelFromURI(uri);
    try {
        channel.open().close();
        return true;
    } catch (e) {
        if (e.result == Cr.NS_ERROR_FILE_NOT_FOUND)
            return null;
    }
}

function resolve (name) {
    var path = "file://" + root + '/' + name + '.js';
    var uri = IO.newURI(path, null, null);
    if (exists(uri))
        return uri.spec;
}


var system = {args: [].slice.call(arguments),
              stdout: {write: (function () {
                  var file = Cc["@mozilla.org/file/local;1"]
                      .createInstance(Ci.nsILocalFile);
                  file.initWithPath('/dev/stdout');
                  var foStream = Cc["@mozilla.org/network/file-output-stream;1"]
                      .createInstance(Ci.nsIFileOutputStream);
                  foStream.init(file, -1, -1, 0);
                  var coStream = Cc["@mozilla.org/intl/converter-output-stream;1"]
                      .createInstance(Ci.nsIConverterOutputStream);
                  var bufLen = 0x8000;
                  coStream.init(foStream, "UTF-8", bufLen,
                                Ci.nsIConverterOutputStream.DEFAULT_REPLACEMENT_CHARACTER);
                  return function write (string) {
                      coStream.writeString(string);
                  }
              })()},
              stdin: {read: function read () {
                  return readPath('file:///dev/stdin');
              }}};

// NB:
// direct sharing of prefined constructors (Object, Array, ...)
// between sandboxes is not possible: literals will always use
// prefined object, ie. there's no global lookup. Also, redefinition
// of built-ins is not defined in the specification.

function createSandbox () {
    var sandbox = new Cu.Sandbox("http://localhost/");
    sandbox.require = require;
    sandbox.print = print;
    Cu.evalInSandbox("var exports = {};",
                     sandbox, "1.5", "", 1);
    return sandbox;
}

var rootSandbox = createSandbox();

var predefined = ["Object", "Array", "Boolean", "Date",
                  "Function", "Number", "RegExp", "String"];

function require (name) {
    if (name == "system")
        return system;

    var exports = modules[name];
    if (exports)
        return exports;

    var sandbox = sandboxes[name] = createSandbox();
    modules[name] = exports = sandbox.exports;

    var path = resolve(name);
    if (path) {
        var code = readPath(path);
        Cu.evalInSandbox(code, sandbox, "1.5", name, 1);

        for (var i = 0; i < predefined.length; i++) {
            var name = predefined[i];
            var rsp = rootSandbox[name].prototype
            var sp = sandbox[name].prototype;
            for (var property in sp) {
                if (sp.hasOwnProperty(property))
                    rsp[property] = sp[property];
            }
        }

        return exports;
    }
}

if (arguments.length) {
    var path = arguments[0];
    var uri = IO.newURI(path, null, null);
    if (exists(uri)) {
        var code = readPath(uri.spec);
        Cu.evalInSandbox(code, rootSandbox, "1.5", path, 1);
    }
}
