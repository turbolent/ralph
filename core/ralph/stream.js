(function _10__lambda (_4) {
var MODULE = this;
var _3 = ["ralph/core"];
for (var _2 = 0; (_2 < 1); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
_CL_stream = exports._CL_stream = _PE_makeClass("_CL_stream", _CL_object, {});
atEnd_W_ = exports.atEnd_W_ = _PE_makeGeneric("atEnd_W_", "(at-end? <stream>)");
peekChar = exports.peekChar = _PE_makeGeneric("peekChar", "(peek-char <stream>)");
readChar = exports.readChar = _PE_makeGeneric("readChar", "(read-char <stream>)");
write = exports.write = _PE_makeGeneric("write", "(write <stream>)");
advance = exports.advance = _PE_makeGeneric("advance", "(advance <stream>)");
contents = exports.contents = _PE_makeGeneric("contents", "(contents <stream>)");
remainingContents = exports.remainingContents = _PE_makeGeneric("remainingContents", "(remaining-contents <stream>)");
_CL_stringStream = exports._CL_stringStream = _PE_makeClass("_CL_stringStream", _CL_stream, {"string":function _11__lambda () {
return ""
},
"index":function _12__lambda () {
return 0
}});
atEnd_W_ = exports.atEnd_W_ = _PE_makeMethod("atEnd_W_", function __method__ (stream) {
return (stream.index >= ((_4 = stream.string, ((true_W_(_4) && _4.length) || 0)) - 1))
}, _CL_stringStream, ((typeof (atEnd_W_) !== 'undefined') && atEnd_W_), false, "(at-end? <string-stream>)");
peekChar = exports.peekChar = _PE_makeMethod("peekChar", function __method__ (stream) {
return stream.string[stream.index]
}, _CL_stringStream, ((typeof (peekChar) !== 'undefined') && peekChar), false, "(peek-char <string-stream>)");
readChar = exports.readChar = _PE_makeMethod("readChar", function __method__ (stream) {
var _char = peekChar(stream);
(stream.index += 1);
return _char
}, _CL_stringStream, ((typeof (readChar) !== 'undefined') && readChar), false, "(read-char <string-stream>)");
write = exports.write = _PE_makeMethod("write", function __method__ (stream, _object) {
return (function _13__lambda (_string, position, contents, length) {
_string = _object.toString();
position = stream.index;
contents = stream.string;
length = (_4 = _string, ((true_W_(_4) && _4.length) || 0));
stream.string = replaceSubsequence(contents, _string, _k('start'), position, _k('end'), (position + length));
return advance(stream, _k('count'), length)
})()
}, _CL_stringStream, ((typeof (write) !== 'undefined') && write), false, "(write <string-stream> <object>)");
advance = exports.advance = _PE_makeMethod("advance", function __method__ (stream) {
var _5 = [].slice.call(arguments, 1);
var count = 1;
for (var _8 = 0; (_8 < _5.length); _8 = (_8 + 2)) {
var _6 = _5[_8];
var _7 = _5[(_8 + 1)];
if (true_W_(keyword_W_(_6))) {
(function _14__lambda () {
var _9 = _6;
return (true_W_((_4 = (_9 == _k('count')), (true_W_(_4) ? _4 : false))) ? count = _7 : false)
})()
}
};
return (stream.index += count)
}, _CL_stringStream, ((typeof (advance) !== 'undefined') && advance), false, "(advance <string-stream> #key count)");
contents = exports.contents = _PE_makeMethod("contents", function __method__ (stream) {
return stream.string
}, _CL_stringStream, ((typeof (contents) !== 'undefined') && contents), false, "(contents <string-stream>)");
remainingContents = exports.remainingContents = _PE_makeMethod("remainingContents", function __method__ (stream) {
return stream.string.substring(stream.index)
}, _CL_stringStream, ((typeof (remainingContents) !== 'undefined') && remainingContents), false, "(remaining-contents <string-stream>)");
_CL_fileStream = _PE_makeClass("_CL_fileStream", _CL_stream, {"file":false});
write = exports.write = _PE_makeMethod("write", function __method__ (stream, _object) {
return stream.file.write(_object)
}, _CL_fileStream, ((typeof (write) !== 'undefined') && write), false, "(write <file-stream> <object>)");
_CL_documentStream = _PE_makeClass("_CL_documentStream", _CL_stream, {});
write = exports.write = _PE_makeMethod("write", function __method__ (stream, _object) {
return document.write(_object)
}, _CL_documentStream, ((typeof (write) !== 'undefined') && write), false, "(write <document-stream> <object>)");
STANDARDOUT = exports.STANDARDOUT = (true_W_((ENVIRONMENT === "browser")) ? make(_CL_documentStream) : (function _15__lambda (_object) {
_object = (true_W_((ENVIRONMENT === "commonjs")) ? require("system") : process);
return make(_CL_fileStream, _k('file'), _object.stdout)
})())
})()