
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

var environments = {};

var currentEnvironment;

function makeEnvironment(name) {
	var env = compile['make-module-environment'](name);
	env['persistent?'] = false;
	// TODO: actually use module description, maybe compile,
	//       so it is available at runtime
	if (name !== 'ralph/core') {
		var coreExports = [];
		for (var exp in core) {
			if (exp !== '%eval') {
				coreExports.push(exp);
			}
		}
		env.module.imports.unshift([$S('ralph/core'), coreExports]);
	}
	return env;
}

function inModule(name) {
	var environment = environments[name];
	if (!environment) {
		environment = makeEnvironment(name);
		try {
			// exisiting module
			var exports = require(name);
			environment.eval = exports['%eval'];
		} catch (e) {
			// new module
			var prologue = compile['compile-to-string'](module['*module-prologue*'],
				environment);
			environment.eval = evalInContext("(function () { " + prologue
				+ "; return ($module)['%eval']; })()");
		}
	}
	currentEnvironment = environment;
}

var builtinLibs = ['assert', 'buffer', 'child_process', 'cluster',
  'crypto', 'dgram', 'dns', 'domain', 'events', 'fs', 'http', 'https', 'net',
  'os', 'path', 'punycode', 'querystring', 'readline', 'stream',
  'string_decoder', 'tls', 'tty', 'url', 'util', 'vm', 'zlib', 'smalloc',
  'tracing'];

function createContext() {
  	var context = vm.createContext({'$inModule': inModule});
	for (var i in global) {
		context[i] = global[i];
	}
	context.console = new Console(output);
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

function evalInContext(code) {
	return vm.runInContext(code, context, {
  		displayErrors: false
	});
}

function setModulePrompt() {
	rl.setPrompt(currentEnvironment.module.name + '> ');
}

var output = process.stdout;

var context = createContext();
evalInContext("require('ralph/core');"
	+ "$moduleRoot['%in-module'] = $inModule");

inModule('user');

var currentLine = '';
var incomplete = new Object();
var outputStream = core['make'](fileStream['<file-stream>'],
	   			 				$K('file'), output);

var rl = readline.createInterface({
	input: process.stdin,
	output: output
});
setModulePrompt();
rl.prompt();
rl.on('line', function (line) {
	currentLine += " " + line;
	var s = core['make'](stream['<string-stream>'],
			 			 $K('string'), currentLine);
	var exp = reader['read'](s, currentEnvironment,
							 $K('eof-error?'), false,
							 $K('eof-value'), incomplete,
							 $K('if-incomplete'), incomplete);
	if (exp == incomplete) {
		rl.setPrompt('... ');
	} else {
		try {
			// format['format'](outputStream, "READ: %=\n", result);
			var code = compile['compile-to-string'](exp, currentEnvironment);
			// format['format'](outputStream, "COMPILED: %=\n", code);
			var result = currentEnvironment.eval(code);
			format['format'](outputStream, "%=\n", result);
		} catch (e) {
			console.log('' + e.stack);
		}
		setModulePrompt();
		currentLine = '';
	}
 	rl.prompt();
});

rl.on('close', function() {
 	console.log('\nBye!');
  	process.exit(0);
});
