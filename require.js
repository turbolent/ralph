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

function read (path) {
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
              stdout: {write: print},
              stdin: {read: function () {
                  return read('file:///dev/stdin');
              }}};

function createSandbox () {
    var sandbox = new Cu.Sandbox("http://localhost/");
    sandbox.require = require;
    sandbox.print = print;
    Cu.evalInSandbox("var exports = {};",
                     sandbox, "1.5", "", 1);
    return sandbox;
}

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
        var code = read(path);
        Cu.evalInSandbox(code, sandbox, "1.5", name, 1);
        return exports;
    }
}

if (arguments.length) {
    var path = arguments[0];
    var uri = IO.newURI(path, null, null);
    if (exists(uri)) {
        var sandbox = createSandbox();
        var code = read(uri.spec);
        Cu.evalInSandbox(code, sandbox, "1.5", path, 1);
    }
}
