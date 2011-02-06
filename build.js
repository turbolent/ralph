var system = require('system');
var fs = require('fs-base');

function extension (path) {
    var dot = path.lastIndexOf('.');
    if (dot != -1)
	return path.substring(dot);
    else
	return "";
}

function basename (path) {
    var base = path.substring(path.lastIndexOf('/') + 1);
    if (base.lastIndexOf(".") != -1)
	base = base.substring(0, base.lastIndexOf("."));
    return base;
}

function dirname (path) {
    return path.replace(/\/[^\/]*$/, '');
}

var compiler = require('./bootstrap/compiler');

var async = false;

function compileFile (path) {
    var source = fs.openRaw(path, 'r');
    var target = fs.openRaw((dirname(path) + '/'
			   + basename(path) + '.js'),
			  'w');
    var code = source.readWhole();
    target.write("(function () {\n"
		 + compiler.compile(code, async)
		 + '\n})();\n');
    source.close();
    target.close();
}

var commands = {
    '--async': function () {
	async = true;
    },
    clean: function () {
	commands.cleanRuntime();
	commands.cleanTests();
    },
    cleanRuntime: function () {
	print('Cleaning runtime ...');
	fs.list('./runtime/').forEach(function (path) {
	    path = './runtime/' + path;
	    if (extension(path) == '.js') {
		print(' - ' + path);
		fs.remove(path);
	    }
	});
    },
    cleanTests: function () {
	print('Cleaning tests ...');
	try {
	    fs.remove('./tests.js');
	} catch (e) {};
    },
    bootstrapRuntime: function () {
	print('Bootstraping runtime ...');
	fs.list('./runtime/').forEach(function (path) {
	    path = './runtime/' + path;
	    if (extension(path) == '.ralph' &&
		basename(path)[0] != '.')
	    {
		print(' - ' + path);
		compileFile(path);
	    }
	});
    },
    compileTests: function () {
	print('Compiling tests ...');
	compileFile('./tests.ralph');
    }
}

system.args.slice(1)
    .forEach(function (argument) {
		 if (commands.hasOwnProperty(argument))
		     commands[argument]();
	     });