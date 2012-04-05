(function _22__lambda (_5, _15) {
var MODULE = this;
var _3 = ["ralph/core", "ralph/stream", "ralph/format", "ralph/regexp"];
for (var _2 = 0; (_2 < 4); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
WHITESPACEPATTERN = make(_CL_regexp, _k('pattern'), "[\t\n\r ]*");
NONWHITESPACEPATTERN = make(_CL_regexp, _k('pattern'), "[^\\[\\]()\n\r\t ]+");
LINEPATTERN = make(_CL_regexp, _k('pattern'), "(.*)[\n\r]");
NUMBERPATTERNS = map(curry(make, _CL_regexp, _k('ignore-case?'), true, _k('pattern')), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"]);
matchStream = _PE_makeFunction("matchStream", function __method__ (regexp, stream) {
return (function _23__lambda (_4) {
_4 = match(regexp, remainingContents(stream));
return (true_W_(_4) ? (function _24__lambda (result) {
result = _4;
return (advance(stream, _k('count'), (_5 = result[0], ((true_W_(_5) && _5.length) || 0))), result)
})() : false)
})()
}, ((typeof (matchStream) !== 'undefined') && matchStream), false, "(match-stream <regexp> <stream>)");
readString = _PE_makeFunction("readString", function __method__ (stream) {
readChar(stream);
return (function _25__lambda (result, _char) {
result = make(_CL_stringStream);
_char = readChar(stream);
(function _26__lambda () {
while (!true_W_((_char === "\""))) {
write(result, (function _27__lambda () {
var _6 = _char;
var _7 = _E_;
return (true_W_((_5 = _7(_6, "\\"), (true_W_(_5) ? _5 : false))) ? (write(result, "\\"), readChar(stream)) : (true_W_((_5 = _7(_6, "\n"), (true_W_(_5) ? _5 : false))) ? "\\n\\\n" : _char))
})());
_char = readChar(stream)
};
return false
})();
return makeString(contents(result))
})()
}, ((typeof (readString) !== 'undefined') && readString), false, "(read-string <stream>)");
readSymbol = _PE_makeFunction("readSymbol", function __method__ (stream) {
return (function _28__lambda (value) {
value = matchStream(NONWHITESPACEPATTERN, stream)[0];
return (function _29__lambda () {
var _8 = value;
var _9 = _E_;
return (true_W_((_5 = _9(_8, "#t"), (true_W_(_5) ? _5 : false))) ? makeBoolean(true) : (true_W_((_5 = _9(_8, "#f"), (true_W_(_5) ? _5 : false))) ? makeBoolean(false) : (true_W_((_5 = _9(_8, "#key"), (true_W_(_5) ? _5 : false))) ? _key : (true_W_((_5 = _9(_8, "#rest"), (true_W_(_5) ? _5 : false))) ? _rest : (true_W_((last(value) === ":")) ? keyword(value.slice(0, -1)) : symbol(value))))))
})()
})()
}, ((typeof (readSymbol) !== 'undefined') && readSymbol), false, "(read-symbol <stream>)");
readLineAux = _PE_makeFunction("readLineAux", function __method__ (stream, pattern) {
return (function _30__lambda (_10) {
_10 = matchStream(pattern, stream);
return (true_W_(_10) ? (function _31__lambda (result) {
result = _10;
return (function _32__lambda (_string) {
_string = result[0];
(function _33__lambda (_12, _13) {
_12 = _string;
_13 = (_5 = _12, ((true_W_(_5) && _5.length) || 0));
return (function(){
for (var _11 = 0; (_11 < _13); _11 = (_11 + 1)) {
var _char = _12[_11];
(function _34__lambda (_char) {
if (true_W_((_char === "\n"))) {
(stream.line += 1)
}
})(_char)
}
})()
})();
(function _35__lambda (_14) {
_14 = lastPosition(_string, "\n");
return (true_W_(_14) ? (function _36__lambda (lineOffset) {
lineOffset = _14;
return stream["line-index"] = ((_5 = stream, _15 = "index", (_5 && _5.hasOwnProperty(_15) && _5[_15])) - ((_5 = _string, ((true_W_(_5) && _5.length) || 0)) - lineOffset - 1))
})() : false)
})();
return result
})()
})() : false)
})()
}, ((typeof (readLineAux) !== 'undefined') && readLineAux), false, "(read-line-aux <object> <object>)");
readLine = _PE_makeFunction("readLine", function __method__ (stream) {
return readLineAux(stream, LINEPATTERN)
}, ((typeof (readLine) !== 'undefined') && readLine), false, "(read-line <stream>)");
readWhitespace = _PE_makeFunction("readWhitespace", function __method__ (stream) {
return readLineAux(stream, WHITESPACEPATTERN)
}, ((typeof (readWhitespace) !== 'undefined') && readWhitespace), false, "(read-whitespace <stream>)");
readList = _PE_makeFunction("readList", function __method__ (stream, end) {
return (function _37__lambda (result) {
result = [];
readChar(stream);
return (function _38__lambda (parens) {
parens = stream.parens = (_5 = (_5 = stream, _15 = "parens", (_5 && _5.hasOwnProperty(_15) && _5[_15])), (true_W_(_5) ? _5 : (_5 = [], (true_W_(_5) ? _5 : false))));
apply(function _39__lambda (__, line, column) {
return (parens.push([line, column]), parens)
}, index_SL_line_SL_column(stream));
readWhitespace(stream);
(function _40__lambda () {
while (!true_W_((_5 = (peekChar(stream) === end), (true_W_(_5) ? _5 : (_5 = atEnd_W_(stream), (true_W_(_5) ? _5 : false)))))) {
if (true_W_((peekChar(stream) === ";"))) {
readLine(stream)
} else {
result.push(read(stream));
result
};
readWhitespace(stream)
};
return false
})();
readChar(stream);
(function _41__lambda (position) {
position = parens.pop();
if (true_W_(((true_W_(empty_W_((_5 = stream, _15 = "parens", (_5 && _5.hasOwnProperty(_15) && _5[_15]))))) ? !true_W_(atEnd_W_(stream)) : false))) {
apply(function _42__lambda (__, line, column) {
return signal(make(_CL_error, _k('message'), formatToString("Too many closing parens at %d:%d", line, column)))
}, index_SL_line_SL_column(stream))
};
return (true_W_(((true_W_(atEnd_W_(stream))) ? !true_W_(empty_W_((_5 = stream, _15 = "parens", (_5 && _5.hasOwnProperty(_15) && _5[_15])))) : false)) ? apply(function _43__lambda (line, column) {
return signal(make(_CL_error, _k('message'), formatToString("Missing closing paren for %d:%d", line, column)))
}, position) : false)
})();
return result
})()
})()
}, ((typeof (readList) !== 'undefined') && readList), false, "(read-list <stream> <object>)");
index_SL_line_SL_column = _PE_makeFunction("index_SL_line_SL_column", function __method__ (stream) {
return (function _44__lambda (_16) {
var index = _16.index;
var line = _16.line;
var lineIndex = _16["line-index"];
return [index, line, (true_W_(lineIndex) ? (index - lineIndex) : index)]
})(stream)
}, ((typeof (index_SL_line_SL_column) !== 'undefined') && index_SL_line_SL_column), false, "(index/line/column <stream>)");
read = exports.read = _PE_makeFunction("read", function __method__ (stream) {
readWhitespace(stream);
return (!true_W_(atEnd_W_(stream)) ? (function _45__lambda (start, result, end) {
start = index_SL_line_SL_column(stream);
result = (function _46__lambda () {
var _17 = peekChar(stream);
var _18 = _E__E_;
return (true_W_((_5 = _18(_17, ";"), (true_W_(_5) ? _5 : false))) ? (readLine(stream), start = index_SL_line_SL_column(stream), read(stream)) : (true_W_((_5 = _18(_17, "\""), (true_W_(_5) ? _5 : false))) ? readString(stream) : (true_W_((_5 = _18(_17, "("), (true_W_(_5) ? _5 : false))) ? readList(stream, ")") : (true_W_((_5 = _18(_17, "["), (true_W_(_5) ? _5 : false))) ? concatenate([symbol("js:array")], readList(stream, "]")) : (true_W_((_5 = _18(_17, "`"), (true_W_(_5) ? _5 : false))) ? (readChar(stream), [symbol("%backquote"), read(stream)]) : (true_W_((_5 = _18(_17, ","), (true_W_(_5) ? _5 : false))) ? (readChar(stream), [symbol("%comma"), read(stream)]) : (function _47__lambda (_19) {
_19 = any_W_(rcurry(matchStream, stream), NUMBERPATTERNS);
return (true_W_(_19) ? (function _48__lambda (_number) {
_number = _19;
return makeNumber(_number[0])
})() : readSymbol(stream))
})()))))))
})();
end = index_SL_line_SL_column(stream);
(function _49__lambda () {
var property;
var value;
var _20 = ["start-index", "start-line", "start-column", "end-index", "end-line", "end-column", "source"];
var _21 = concatenate(start, end, [(_5 = stream, _15 = "string", (_5 && _5.hasOwnProperty(_15) && _5[_15]))]);
while (true) {
if (any_W_(empty_W_, [_20, _21])) {
return false
};
property = _20[0];
value = _21[0];
(function _50__lambda (property, value) {
result[property] = value
})(property, value);
_20 = _20.slice(1);
_21 = _21.slice(1)
}
})();
return result
})() : false)
}, ((typeof (read) !== 'undefined') && read), false, "(read <stream>)")
})()