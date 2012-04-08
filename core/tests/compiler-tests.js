var MODULE = this;
var _3 = ["ralph/core", "ralph/test", "ralph/stream", "ralph/format", "ralph/reader", "ralph/compiler"];
for (var _2 = 0; (_2 < 6); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
var fs = require("fs");
readFile = _PE_makeFunction("readFile", function __method__ (path) {
return (function _4__lambda (file, result) {
file = fs.open(path, {"read":true});
result = file.read();
file.close();
return result
})(((typeof (file) !== 'undefined') && file), false)
}, ((typeof (readFile) !== 'undefined') && readFile), false, "(read-file <object>)");
(function _5__lambda (source, stream, startTime, form, readTime, compiled, compileTime) {
source = readFile("./tests/runtime-tests.ralph");
stream = make(_CL_stringStream, _k('string'), ("(begin\n" + source + "\n)"));
startTime = new Date ();
form = read(stream);
readTime = new Date ();
compiled = compile(form, _k('statements?'), true);
compileTime = new Date ();
print(compiled);
print("READ TIME:", (readTime - startTime));
return print("COMPILE TIME:", (compileTime - readTime))
})(((typeof (source) !== 'undefined') && source), ((typeof (stream) !== 'undefined') && stream), false, ((typeof (form) !== 'undefined') && form), false, false, false)