var system = require('system');
var fs = require('fs');

var compiler = require('./bootstrap/compiler');

function compileFile (path) {
    fs.write((fs.directory(path) + '/' +
	      fs.base(path, '.ralph') + '.js'),
	     compiler.compile(fs.read(path)) + '\n');
}

var commands = {
    clean: function () {
	commands.cleanRuntime();
	commands.cleanTests();
    },
    cleanRuntime: function () {
	system.print('Cleaning runtime ...');
	fs.listTree('./runtime/').forEach(function (path) {
	    var path = './runtime/' + path;
	    if (fs.extension(path) == '.js') {
		system.print(' - ' + path);
		fs.removeTree(path);
	    }
	});
    },
    cleanTests: function () {
	system.print('Cleaning tests ...');
	try {
	    fs.removeTree('./tests.js');
	} catch (e) {};
    },
    bootstrapRuntime: function () {
	system.print('Bootstraping runtime ...');
	fs.listTree('./runtime/').forEach(function (path) {
	    var path = './runtime/' + path;
	    if (fs.extension(path) == '.ralph' &&
		fs.base(path, '.ralph')[0] != '.')
	    {
		system.print(' - ' + path);
		compileFile(path);
	    }
	});
    },
    compileTests: function () {
	system.print('Compiling tests ...');
	compileFile('./tests.ralph');
    }
}

system.args.slice(1).forEach(function (command) {
    if (commands.hasOwnProperty(command))
	commands[command]();
});
