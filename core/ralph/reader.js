(function _18__lambda (_5) {
var MODULE = this;
var _3 = ["ralph/core", "ralph/stream", "ralph/regexp"];
for (var _2 = 0; (_2 < 3); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
NUMBERPATTERNS = map(curry(make, _CL_regexp, _k('ignore-case?'), true, _k('pattern')), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"]);
LINEPATTERN = make(_CL_regexp, _k('pattern'), "(.*)[\n\r]");
WHITESPACESUBPATTERN = "\t\n\r\v\f\u00a0\ufeff ";
WHITESPACEPATTERN = make(_CL_regexp, _k('pattern'), ("[" + WHITESPACESUBPATTERN + "]*"));
ATOMPATTERN = make(_CL_regexp, _k('pattern'), ("[^\\[\\]();`," + WHITESPACESUBPATTERN + "]+"));
matchStream = _PE_makeFunction("matchStream", function __method__ (regexp, stream) {
return (function _19__lambda (_4) {
_4 = match(regexp, streamRemainingContents(stream));
return (true_W_(_4) ? (function _20__lambda (result) {
result = _4;
return (streamRead(stream, (_5 = result[0], ((true_W_(_5) && _5.length) || 0))), result)
})() : false)
})()
}, ((typeof (matchStream) !== 'undefined') && matchStream), false, "(match-stream <regexp> <stream>)");
readLine = _PE_makeFunction("readLine", function __method__ (stream) {
return matchStream(LINEPATTERN, stream)
}, ((typeof (readLine) !== 'undefined') && readLine), false, "(read-line <stream>)");
readWhitespace = _PE_makeFunction("readWhitespace", function __method__ (stream) {
return matchStream(WHITESPACEPATTERN, stream)
}, ((typeof (readWhitespace) !== 'undefined') && readWhitespace), false, "(read-whitespace <stream>)");
makeAtom = _PE_makeFunction("makeAtom", function __method__ (value) {
return (function _21__lambda () {
var _6 = value;
var _7 = _E__E_;
return (true_W_((_5 = _7(_6, "#t"), (true_W_(_5) ? _5 : false))) ? makeBoolean(true) : (true_W_((_5 = _7(_6, "#f"), (true_W_(_5) ? _5 : false))) ? makeBoolean(false) : (true_W_((_5 = _7(_6, "#key"), (true_W_(_5) ? _5 : false))) ? _key : (true_W_((_5 = _7(_6, "#rest"), (true_W_(_5) ? _5 : false))) ? _rest : (function _22__lambda (_8) {
_8 = any_W_(rcurry(match, value), NUMBERPATTERNS);
return (true_W_(_8) ? (function _23__lambda (_number) {
_number = _8;
return makeNumber(_number[0])
})() : (true_W_((last(value) === ":")) ? keyword(value.slice(0, -1)) : symbol(value)))
})()))))
})()
}, ((typeof (makeAtom) !== 'undefined') && makeAtom), false, "(make-atom <object>)");
readString = _PE_makeFunction("readString", function __method__ (stream) {
return (function _24__lambda (result, _char) {
result = make(_CL_stringStream);
_char = streamReadElement(stream);
(function _25__lambda () {
while (!true_W_((_char === "\""))) {
if (true_W_(streamAtEnd_W_(stream))) {
signal("missing end of string")
};
streamWrite(result, (true_W_((_char === "\\")) ? (function _26__lambda () {
var _9 = streamReadElement(stream);
var _10 = _E__E_;
return (true_W_((_5 = _10(_9, "\""), (true_W_(_5) ? _5 : false))) ? "\"" : (true_W_((_5 = _10(_9, "\\"), (true_W_(_5) ? _5 : false))) ? "\\" : (true_W_((_5 = _10(_9, "b"), (true_W_(_5) ? _5 : false))) ? "\b" : (true_W_((_5 = _10(_9, "f"), (true_W_(_5) ? _5 : false))) ? "\f" : (true_W_((_5 = _10(_9, "n"), (true_W_(_5) ? _5 : false))) ? "\n" : (true_W_((_5 = _10(_9, "r"), (true_W_(_5) ? _5 : false))) ? "\r" : (true_W_((_5 = _10(_9, "t"), (true_W_(_5) ? _5 : false))) ? "\t" : (true_W_((_5 = _10(_9, "v"), (true_W_(_5) ? _5 : false))) ? "\v" : (true_W_((_5 = _10(_9, "u"), (true_W_(_5) ? _5 : false))) ? codeChar(parseInteger(streamRead(stream, 4), _k('radix'), 16)) : signal("bad escape sequence"))))))))))
})() : _char));
_char = streamReadElement(stream)
};
return false
})();
return makeString(streamContents(result))
})()
}, ((typeof (readString) !== 'undefined') && readString), false, "(read-string <stream>)");
WRAPPERSYMBOLS = ["%backquote", "%comma"];
read = exports.read = _PE_makeFunction("read", function __method__ (stream) {
var _11 = [].slice.call(arguments, 1);
var eofError_W_ = true;
var eofValue;
for (var _14 = 0; (_14 < _11.length); _14 = (_14 + 2)) {
var _12 = _11[_14];
var _13 = _11[(_14 + 1)];
if (true_W_(keyword_W_(_12))) {
(function _27__lambda () {
var _15 = _12;
return (true_W_((_5 = (_15 == _k('eof-error?')), (true_W_(_5) ? _5 : false))) ? eofError_W_ = _13 : (true_W_((_5 = (_15 == _k('eof-value')), (true_W_(_5) ? _5 : false))) ? eofValue = _13 : false))
})()
}
};
return (function _28__lambda (stack, ends) {
stack = [[]];
ends = [];
return (function _29__lambda (addToStack_B_, addLast_B_) {
addToStack_B_ = function addToStack_B_ (value) {
_5 = last(stack);
_5.push(value);
_5;
return (true_W_(member_W_(symbolName(last(stack)[0]), WRAPPERSYMBOLS)) ? addLast_B_() : false)
};
addLast_B_ = function addLast_B_ () {
return (function _30__lambda (value) {
value = stack.pop();
return addToStack_B_(value)
})()
};
(function _31__lambda () {
while (!true_W_(streamAtEnd_W_(stream))) {
readWhitespace(stream);
(function _32__lambda (_char) {
_char = streamReadElement(stream);
return (function _33__lambda () {
var _16 = _char;
var _17 = _E__E_;
return (true_W_((_5 = _17(_16, ";"), (true_W_(_5) ? _5 : false))) ? readLine(stream) : (true_W_((_5 = _17(_16, "`"), (true_W_(_5) ? _5 : false))) ? (stack.push([symbol("%backquote")]), stack) : (true_W_((_5 = _17(_16, ","), (true_W_(_5) ? _5 : false))) ? (stack.push([symbol("%comma")]), stack) : (true_W_((_5 = _17(_16, "("), (true_W_(_5) ? _5 : false))) ? ((ends.push(")"), ends), (stack.push([]), stack)) : (true_W_((_5 = _17(_16, "["), (true_W_(_5) ? _5 : false))) ? ((ends.push("]"), ends), (stack.push([symbol("js:array")]), stack)) : (true_W_((_5 = _17(_16, last(ends)), (true_W_(_5) ? _5 : false))) ? (ends.pop(), addLast_B_()) : (true_W_((_5 = _17(_16, ")"), (true_W_(_5) ? _5 : (_5 = _17(_16, "]"), (true_W_(_5) ? _5 : false))))) ? signal(formatToString("too many closings: %=", _char)) : (true_W_((_5 = _17(_16, "\""), (true_W_(_5) ? _5 : false))) ? addToStack_B_(readString(stream)) : (streamUnreadElement(stream), addToStack_B_(makeAtom(matchStream(ATOMPATTERN, stream)[0])))))))))))
})()
})();
readWhitespace(stream)
};
return false
})();
return (true_W_(empty_W_(ends)) ? (function _34__lambda (value) {
value = last(stack)[0];
return (_5 = value, (true_W_(_5) ? _5 : (_5 = (true_W_(eofError_W_) ? signal("no object") : eofValue), (true_W_(_5) ? _5 : false))))
})() : signal(formatToString("missing closings: %=", ends)))
})(((typeof (addToStack_B_) !== 'undefined') && addToStack_B_), ((typeof (addLast_B_) !== 'undefined') && addLast_B_))
})()
}, ((typeof (read) !== 'undefined') && read), false, "(read <stream> #key eof-error? eof-value)")
})()