(function _7__lambda (_4, _5) {
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
streamClose = exports.streamClose = _PE_makeGeneric("streamClose", "(stream-close <stream>)");
streamOpen_W_ = exports.streamOpen_W_ = _PE_makeGeneric("streamOpen_W_", "(stream-open? <stream>)");
streamAtEnd_W_ = exports.streamAtEnd_W_ = _PE_makeGeneric("streamAtEnd_W_", "(stream-at-end? <stream>)");
streamPeek = exports.streamPeek = _PE_makeGeneric("streamPeek", "(stream-peek <stream>)");
streamRead = exports.streamRead = _PE_makeGeneric("streamRead", "(stream-read <stream> <number>)");
streamReadElement = exports.streamReadElement = _PE_makeGeneric("streamReadElement", "(stream-read-element <stream>)");
streamReadToEnd = exports.streamReadToEnd = _PE_makeGeneric("streamReadToEnd", "(stream-read-to-end <stream>)");
streamReadThrough = exports.streamReadThrough = _PE_makeGeneric("streamReadThrough", "(stream-read-through <stream> <string>)");
streamUnreadElement = exports.streamUnreadElement = _PE_makeGeneric("streamUnreadElement", "(stream-unread-element <stream>)");
streamWrite = exports.streamWrite = _PE_makeGeneric("streamWrite", "(stream-write <stream> <string>)");
streamContents = exports.streamContents = _PE_makeGeneric("streamContents", "(stream-contents <stream>)");
streamRemainingContents = exports.streamRemainingContents = _PE_makeGeneric("streamRemainingContents", "(stream-remaining-contents <stream>)");
_CL_stringStream = exports._CL_stringStream = _PE_makeClass("_CL_stringStream", _CL_stream, {"string":function _8__lambda () {
return ""
},
"index":function _9__lambda () {
return 0
},
"length":function _10__lambda () {
return 0
}});
initialize = _PE_makeMethod("initialize", function __method__ (stream) {
var rest = [].slice.call(arguments, 1);
apply(_PE_nextMethod(__method__), stream, rest);
return stream.length = (_4 = (_4 = stream, _5 = "string", (_4 && _4.hasOwnProperty(_5) && _4[_5])), ((true_W_(_4) && _4.length) || 0))
}, _CL_stringStream, ((typeof (initialize) !== 'undefined') && initialize), false, "(initialize <string-stream> #rest rest)");
streamAtEnd_W_ = exports.streamAtEnd_W_ = _PE_makeMethod("streamAtEnd_W_", function __method__ (stream) {
return ((_4 = stream, _5 = "index", (_4 && _4.hasOwnProperty(_5) && _4[_5])) === (_4 = stream, _5 = "length", (_4 && _4.hasOwnProperty(_5) && _4[_5])))
}, _CL_stringStream, ((typeof (streamAtEnd_W_) !== 'undefined') && streamAtEnd_W_), false, "(stream-at-end? <string-stream>)");
streamPeek = exports.streamPeek = _PE_makeMethod("streamPeek", function __method__ (stream) {
return element((_4 = stream, _5 = "string", (_4 && _4.hasOwnProperty(_5) && _4[_5])), (_4 = stream, _5 = "index", (_4 && _4.hasOwnProperty(_5) && _4[_5])))
}, _CL_stringStream, ((typeof (streamPeek) !== 'undefined') && streamPeek), false, "(stream-peek <string-stream>)");
streamReadElement = exports.streamReadElement = _PE_makeMethod("streamReadElement", function __method__ (stream) {
return (!true_W_(streamAtEnd_W_(stream)) ? (function _11__lambda (element) {
element = streamPeek(stream);
(stream.index += 1);
return element
})() : false)
}, _CL_stringStream, ((typeof (streamReadElement) !== 'undefined') && streamReadElement), false, "(stream-read-element <string-stream>)");
streamRead = exports.streamRead = _PE_makeMethod("streamRead", function __method__ (stream, n) {
return (function _12__lambda (result) {
result = "";
return (function _13__lambda (i) {
i = 0;
while (!true_W_((_4 = streamAtEnd_W_(stream), (true_W_(_4) ? _4 : (_4 = binary_GT__E_(i, n), (true_W_(_4) ? _4 : false)))))) {
(function _14__lambda (i) {
return result = concatenate(result, streamReadElement(stream))
})(i);
i = (i + 1)
};
return result
})()
})()
}, _CL_stringStream, ((typeof (streamRead) !== 'undefined') && streamRead), false, "(stream-read <string-stream> <number>)");
streamReadThrough = exports.streamReadThrough = _PE_makeMethod("streamReadThrough", function __method__ (stream, element) {
return (function _15__lambda (found_W_) {
found_W_ = false;
return (function _16__lambda () {
while (!true_W_((_4 = streamAtEnd_W_(stream), (true_W_(_4) ? _4 : (_4 = found_W_, (true_W_(_4) ? _4 : false)))))) {
found_W_ = (streamReadElement(stream) === element)
};
return false
})()
})()
}, _CL_stringStream, ((typeof (streamReadThrough) !== 'undefined') && streamReadThrough), false, "(stream-read-through <string-stream> <string>)");
streamUnreadElement = exports.streamUnreadElement = _PE_makeMethod("streamUnreadElement", function __method__ (stream) {
return stream.index = max(0, ((_4 = stream, _5 = "index", (_4 && _4.hasOwnProperty(_5) && _4[_5])) - 1))
}, _CL_stringStream, ((typeof (streamUnreadElement) !== 'undefined') && streamUnreadElement), false, "(stream-unread-element <string-stream>)");
streamWrite = exports.streamWrite = _PE_makeMethod("streamWrite", function __method__ (stream, _string) {
(function _17__lambda (_6) {
var index = _6.index;
return (function _18__lambda (length, end) {
length = (_4 = _string, ((true_W_(_4) && _4.length) || 0));
end = (index + length);
stream.string = replaceSubsequence((_4 = stream, _5 = "string", (_4 && _4.hasOwnProperty(_5) && _4[_5])), _string, _k('start'), index, _k('end'), end);
stream.length = max(end, (_4 = stream, _5 = "length", (_4 && _4.hasOwnProperty(_5) && _4[_5])));
return (stream.index += length)
})()
})(stream);
return _string
}, _CL_stringStream, ((typeof (streamWrite) !== 'undefined') && streamWrite), false, "(stream-write <string-stream> <string>)");
streamContents = exports.streamContents = _PE_makeMethod("streamContents", function __method__ (stream) {
return (_4 = stream, _5 = "string", (_4 && _4.hasOwnProperty(_5) && _4[_5]))
}, _CL_stringStream, ((typeof (streamContents) !== 'undefined') && streamContents), false, "(stream-contents <string-stream>)");
streamRemainingContents = exports.streamRemainingContents = _PE_makeMethod("streamRemainingContents", function __method__ (stream) {
return (_4 = stream, _5 = "string", (_4 && _4.hasOwnProperty(_5) && _4[_5])).slice((_4 = stream, _5 = "index", (_4 && _4.hasOwnProperty(_5) && _4[_5])))
}, _CL_stringStream, ((typeof (streamRemainingContents) !== 'undefined') && streamRemainingContents), false, "(stream-remaining-contents <string-stream>)");
_CL_fileStream = exports._CL_fileStream = _PE_makeClass("_CL_fileStream", _CL_stream, {"file":false});
streamWrite = exports.streamWrite = _PE_makeMethod("streamWrite", function __method__ (stream, _string) {
return stream.file.write(_string)
}, _CL_fileStream, ((typeof (streamWrite) !== 'undefined') && streamWrite), false, "(stream-write <file-stream> <string>)");
STANDARDOUT = exports.STANDARDOUT = (true_W_((ENVIRONMENT === "browser")) ? make(_CL_documentStream) : (function _19__lambda (_object) {
_object = (true_W_((ENVIRONMENT === "commonjs")) ? require("system") : process);
return make(_CL_fileStream, _k('file'), _object.stdout)
})())
})()