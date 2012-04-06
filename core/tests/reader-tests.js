var MODULE = this;
var _3 = ["ralph/core", "ralph/test", "ralph/stream", "ralph/reader"];
for (var _2 = 0; (_2 < 4); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
(function _4__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "((a (key: (b #t [1 2] \"c\" #f d #key) 2)) () #rest)");
return checkEqual("expressions", [[symbol("a"), [_k('key'), [symbol("b"), true, [symbol("js:array"), 1, 2], "c", false, symbol("d"), _key], 2]], [], _rest], read(stream))
})();
(function _5__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "(((a 1)))");
return checkEqual("parens", [[[symbol("a"), 1]]], read(stream))
})();
(function _6__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), " #rest  ");
return checkEqual("special", _rest, read(stream))
})();
(function _7__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "() ");
return checkEqual("one list", [], read(stream))
})();
(function _8__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "");
return checkEqual("empty, no eof-error, default eof-value", false, read(stream, _k('eof-error?'), false))
})();
(function _9__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "");
return checkEqual("empty, no eof-error, eof-value", 42, read(stream, _k('eof-error?'), false, _k('eof-value'), 42))
})();
(function _10__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "");
return checkCondition("empty, eof-error", _CL_string, function _11__lambda () {
return read(stream, _k('eof-value'), 42)
})
})();
(function _12__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "\"quoted: \\\" \"");
return checkEqual("quoted", "quoted: \" ", read(stream))
})();
(function _13__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "\"bla\" \"  ");
return checkCondition("missing end of string", _CL_string, function _14__lambda () {
return read(stream)
})
})();
(function _15__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "(this; asdasd\n isnt ; asdasd \n; asdasd\n a comment)");
return checkEqual("comments", [symbol("this"), symbol("isnt"), symbol("a"), symbol("comment")], read(stream))
})();
(function _16__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "(a `(x ,(y z)) `(,b))");
return checkEqual("backquote and comma", [symbol("a"), [symbol("%backquote"), [symbol("x"), [symbol("%comma"), [symbol("y"), symbol("z")]]]], [symbol("%backquote"), [[symbol("%comma"), symbol("b")]]]], read(stream))
})();
(function _17__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "(a (1)))");
return checkCondition("too many closing", _CL_string, function _18__lambda () {
return read(stream)
})
})();
(function _19__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "(a (1");
return checkCondition("missing closing", _CL_string, function _20__lambda () {
return read(stream)
})
})()