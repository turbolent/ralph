var require = (function () {
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

    function resolve (name) {
        var path = "file://" + root + '/' + name + '.js';
        print(path);
        var uri = IO.newURI(path, null, null);
        var channel = IO.newChannelFromURI(uri);
        try {
            channel.open().close();
        } catch (e) {
            if (e.result == Cr.NS_ERROR_FILE_NOT_FOUND)
                return null;
        }
        return uri.spec;
    }

    var system = {write: print};

    return function require (name) {
        print("REQUIRE " + name)
        if (name == "system")
            return system;

        var exports = modules[name];
        if (exports)
            return exports;

        var sandbox = new Cu.Sandbox("http://localhost/");
        sandboxes[name] = sandbox;
        sandbox.require = require;
        sandbox.print = print;
        Cu.evalInSandbox("var exports = {};",
                         sandbox, "1.5", name, 1);
        modules[name] = exports = sandbox.exports;
        var path = resolve(name);
        print("== " + path);
        var code = read(path);
        if (path) {
            Cu.evalInSandbox(code, sandbox, "1.5", name, 1)
            return exports;
        }
    }
})();