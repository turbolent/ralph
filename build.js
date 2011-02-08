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
    'async': function () {
	async = true;
    },
    'cleanDirectories': function () {
	Array.prototype.slice.call(arguments)
	    .forEach(function (directory) {
			 print("Cleaning '" + directory + "'");
			 var root = "./" + directory + "/";
			 fs.list(root)
			     .forEach(function (path) {
					  path = root + path;
					  if (extension(path) == '.js') {
					      print(' - ' + path);
					      fs.remove(path);
					  }
				      });
		     });
    },
    'compileDirectories': function () {
	Array.prototype.slice.call(arguments)
	    .forEach(function (directory) {
			 print("Compiling '" + directory + "'");
			 var root = "./" + directory + "/";
			 fs.list(root)
			     .forEach(function (path) {
					  path = root + path;
					  if (extension(path) == '.ralph' &&
					      basename(path)[0] != '.')
					  {
					      print(' - ' + path);
					      compileFile(path);
					  }
				      });

		     });
    }
}

var actions = [];
var options;
system.args.slice(1)
    .forEach(function (argument) {
		 if (argument.substr(0, 2) == "--") {
		     options = [];
		     actions.push([argument.substr(2),
				   options]);
		 } else
		     options.push(argument);
	     });
actions.forEach(function (action) {
		    commands[action[0]].apply(null, action[1]);
		});