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
    var result = path.replace(/\/[^\/]*$/, '');
    return (result == path) ? "" : result;
}

var bootstrapCompiler = require('./src/bootstrap/compiler');
var core, stream, reader, compiler;

var async = false;
var buildPath = "build";
var srcPath = "src";

function compileFile (path, bootstrap) {
    if (!bootstrap && !compiler) {
        core = require("core");
        stream = require("stream");
        reader = require("reader");
        compiler = require("compiler");
    }

    var sourcePath = srcPath + '/' + path;
    var targetDirectory = buildPath + '/' + dirname(path) + '/';
    var targetPath = targetDirectory + basename(path, '.ralph') + '.js';

    if (!fs.isDirectory(targetDirectory))
        fs.makeTree(targetDirectory);

    var source = openRead(sourcePath);
    var target = openWrite(targetPath);
    var code = read(source);
    var compiled;
    if (bootstrap)
        compiled = bootstrapCompiler.compile(code, async);
    else {
        var sourceStream = core.make(stream._CL_stringStream,
                                     core._k("string"), "(begin\n" + code + "\n)");
        var form = reader.read(sourceStream);
        if (async)
            form = compiler.transformAsynchronous(compiler.macroexpand(form));
        compiled = compiler.compile(form, core._k('statements?'), true);
    }
    target.write("(function () {\n" + compiled + '\n})();\n');
    source.close();
    target.close();
}

function compileDirectories (directories, bootstrap) {
    directories
        .forEach(function (directory) {
                     print((bootstrap ? "Bootstrapping" : "Compiling")
                           + " '" + directory + "'");
                     var root = "./" + srcPath + '/' + directory + "/";
                     fs.list(root)
                         .forEach(function (path) {
                                      path = directory + '/' + path;
                                      if (extension(path) == '.ralph' &&
                                          basename(path)[0] != '.')
                                      {
                                          print(' - ' + path);
                                          compileFile(path, bootstrap);
                                      }
                                  });
                 });
}

function compileFiles (files, bootstrap) {
    print(bootstrap ? "Bootstrapping" : "Compiling");
    files.forEach(function (file) {
                      if (extension(file) == '.ralph') {
                          print(' - ' + file);
                          compileFile(file, bootstrap);
                      }
                  });
}

var commands = {
    'async': function () {
        async = true;
    },
    'src': function (path) {
        srcPath = path;
    },
    'build': function (path) {
        buildPath = path;
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
        compileDirectories(Array.prototype.slice.call(arguments), false);
    },
    'bootstrapDirectories': function () {
        compileDirectories(Array.prototype.slice.call(arguments), true);
    },

    'compile': function () {
        compileFiles(Array.prototype.slice.call(arguments), false);
    },
    'bootstrap': function () {
        compileFiles(Array.prototype.slice.call(arguments), true);
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