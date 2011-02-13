// flusspferd, ringojs
var system = require('system');
try {
    // flusspferd
    var fs = require('fs-base');

    function extension (path) {
        var dot = path.lastIndexOf('.');
        if (dot != -1)
            return path.substring(dot);
        else
            return "";
    }

    function basename (path, ext) {
        var base = path.substring(path.lastIndexOf('/') + 1);
        if (ext && base.lastIndexOf(ext) != -1)
            base = base.substring(0, base.lastIndexOf(ext));
        return base;
    }

    function openRead (path) {
        return fs.openRaw(path, 'r');
    }

    function read (stream) {
        return stream.readWhole();
    }

    function openWrite (path) {
        return fs.openRaw(path, 'w');
    }

} catch (x) {
    // ringojs
    var fs = require('fs');
    var extension = fs.extension;
    var basename = fs.base;

    function openRead (path) {
        return fs.open(path, {read: true});
    }

    function read (stream) {
        return stream.read();
    }

    function openWrite (path) {
        return fs.openRaw(path, {write: true});
    }
}

function dirname (path) {
    return path.replace(/\/[^\/]*$/, '');
}

var compiler = require('./bootstrap/compiler');

var async = false;

function compileFile (path) {
    var source = openRead(path);
    var target = openWrite((dirname(path) + '/'
                            + basename(path, '.ralph') + '.js'));
    var code = read(source);
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
};

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