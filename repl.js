
var repl = require("repl");
var vm = require("vm");
var readline = require("readline");
var Console = require('console').Console;

var core = require('ralph/core');
var compile = require('ralph/compiler/compile');
var reader = require('ralph/compiler/reader');
var module = require('ralph/compiler/module');
var stream = require('ralph/stream');
var format = require('ralph/format');
var fileStream = require('ralph/file-stream');


var builtinLibs = ['assert', 'buffer', 'child_process', 'cluster',
  'crypto', 'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'net',
  'os', 'path', 'punycode', 'querystring', 'readline', 'stream',
  'string_decoder', 'tls', 'tty', 'url', 'util', 'vm', 'zlib', 'smalloc',
  'tracing'];

function createContext(outputStream) {
  	var context = vm.createContext();
	for (var i in global) {
		context[i] = global[i];
	}
	context.console = new Console(outputStream);
	context.global = context;
	context.global.global = context;

	context.module = module;
	context.require = require;
	context.exports = Object.create(null);

	// make built-in modules available directly
	// (loaded lazily)
	builtinLibs.forEach(function(name) {
		Object.defineProperty(context, name, {
			get: function() {
				var lib = require(name);
				context._ = context[name] = lib;
				return lib;
			},
			// allow the creation of other globals with this name
			set: function(val) {
				delete context[name];
				context[name] = val;
			},
			configurable: true
		});
	});

	return context;
}

function evalInContext(context, code) {
  var script = vm.createScript(code, {
    displayErrors: false
  });
  return script.runInContext(context, {
  	displayErrors: false
  });
}

function makeEnvironment(name) {
	var env = compile['make-module-environment'](name);
	var coreExports = [];
	for (var exp in core) {
		if (exp !== '%eval') {
			coreExports.push(exp);
		}
	}
	env.module.imports.unshift([$S('ralph/core'), coreExports]);
	return env;
}

var output = process.stdout;

// prepare module
var context = createContext(output);
var env = makeEnvironment('user');
var prologue = compile['compile-to-string'](module['*module-prologue*'], env)
evalInContext(context, prologue);


var rl = readline.createInterface({
	input: process.stdin,
	output: output
});
var currentLine = '';
var incomplete = new Object();
var outputStream = core['make'](fileStream['<file-stream>'],
	   			 				$K('file'), output);

rl.setPrompt('user> ');
rl.prompt();
rl.on('line', function (line) {
	currentLine += " " + line;
	var s = core['make'](stream['<string-stream>'],
			 			 $K('string'), currentLine);
	var exp = reader['read'](s, env, $K('if-incomplete'), incomplete);
	if (exp == incomplete) {
		rl.setPrompt('... ');
	} else {
		// format['format'](outputStream, "READ: %=\n", result);
		var code = compile['compile-to-string'](exp, env);
		// format['format'](outputStream, "COMPILED: %=\n", code);
		try {
			var result = evalInContext(context, code);
			format['format'](outputStream, "%=\n", result);
		} catch (e) {
			console.log('' + e);
		}
		rl.setPrompt('user> ');
		currentLine = '';
	}
 	rl.prompt();
});

rl.on('close', function() {
 	console.log('\nBye!');
  	process.exit(0);
});
