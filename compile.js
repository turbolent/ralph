try {
	var system = require('system');
	var code = system.stdin.read(),
        stdout = system.stdout,
        args = system.args;
} catch (x) {
    var fs = require('fs');
    var code =  fs.readFileSync('/dev/stdin').toString(),
        stdout = process.stdout,
        args = process.argv.slice(1);
}

var bootstrap = (args.indexOf('--bootstrap') >= 0);
var async = (args.indexOf('--async') >= 0);

if (bootstrap)
    var bootstrapCompiler = require('bootstrap/compiler');
else {
    var core = require("ralph/core"),
        stream = require("ralph/stream"),
        reader = require("ralph/reader"),
        compiler = require("ralph/compiler");
}

var compiled;
if (bootstrap)
    compiled = bootstrapCompiler.compile(code);
else {
    var sourceStream = core.make(stream._CL_stringStream, core._k("string"),
                                 "(begin " + code + ")");
    sourceStream.line = 1;
    var form = reader.read(sourceStream);
    compiled = compiler.compile(form,
                                core._k('statements?'), true,
                                core._k('asynchronous?'), async);
}

(typeof process === "undefined" ? system : process).stdout.write(compiled);

