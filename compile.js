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
	var bootstrapCompiler = require('./src/bootstrap/compiler');
else {
	var core = require("runtime/core"),
	stream = require("runtime/stream"),
	reader = require("compiler/reader"),
	compiler = require("compiler/compiler");
}

var compiled;
if (bootstrap)
    compiled = bootstrapCompiler.compile(code, async);
else {
    var sourceStream = core.make(stream._CL_stringStream, core._k("string"),
								 "(begin\n" + code + "\n)");
    var form = reader.read(sourceStream);
    if (async)
        form = compiler.transformAsynchronous(compiler.macroexpand(form));
    compiled = compiler.compile(form, core._k('statements?'), true);
}

var result = "(function(){\n" + compiled + "\n})();\n";
(typeof process === "undefined" ? system : process).stdout.write(result);
	
