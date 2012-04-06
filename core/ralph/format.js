(function _7__lambda (_5, _6) {
var MODULE = this;
var _3 = ["ralph/core", "ralph/stream"];
for (var _2 = 0; (_2 < 2); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
formatInteger = _PE_makeFunction("formatInteger", function __method__ (_number) {
return ("" + _number)
}, ((typeof (formatInteger) !== 'undefined') && formatInteger), false, "(format-integer <number>)");
formatOut = exports.formatOut = _PE_makeFunction("formatOut", function __method__ (controlString) {
var args = [].slice.call(arguments, 1);
return apply(format, STANDARDOUT, controlString, args)
}, ((typeof (formatOut) !== 'undefined') && formatOut), false, "(format-out <string> #rest args)");
formatToString = exports.formatToString = _PE_makeFunction("formatToString", function __method__ (controlString) {
var args = [].slice.call(arguments, 1);
return (function _8__lambda (stream) {
stream = make(_CL_stringStream);
apply(format, stream, controlString, args);
return streamContents(stream)
})()
}, ((typeof (formatToString) !== 'undefined') && formatToString), false, "(format-to-string <string> #rest args)");
format = exports.format = _PE_makeFunction("format", function __method__ (stream, controlString) {
var args = [].slice.call(arguments, 2);
return (function _9__lambda (dispatch) {
dispatch = function dispatch (_char, arg) {
return (function _10__lambda () {
var _4 = asLowercase(_char);
return (true_W_((_5 = (_4 === "s"), (true_W_(_5) ? _5 : (_5 = (_4 === "c"), (true_W_(_5) ? _5 : false))))) ? arg : (true_W_((_5 = (_4 === "="), (true_W_(_5) ? _5 : false))) ? (_5 = description(arg), (true_W_(_5) ? _5 : (_5 = "", (true_W_(_5) ? _5 : false)))) : (true_W_((_5 = (_4 === "b"), (true_W_(_5) ? _5 : false))) ? formatInteger(arg, 2) : (true_W_((_5 = (_4 === "o"), (true_W_(_5) ? _5 : false))) ? formatInteger(arg, 8) : (true_W_((_5 = (_4 === "d"), (true_W_(_5) ? _5 : false))) ? formatInteger(arg, 10) : (true_W_((_5 = (_4 === "x"), (true_W_(_5) ? _5 : false))) ? formatInteger(arg, 16) : (true_W_((_5 = (_4 === "m"), (true_W_(_5) ? _5 : false))) ? (arg(stream), "") : signal(make(_CL_error, _k('message'), ("Unknown format dispatch character " + _char))))))))))
})()
};
return (function _11__lambda (index) {
index = 0;
return (function _12__lambda () {
while (!true_W_(empty_W_(controlString))) {
(function _13__lambda (nextDispatch) {
nextDispatch = position(controlString, "%");
return (true_W_(binary_GT_(nextDispatch, 0)) ? (streamWrite(stream, controlString.slice(0, nextDispatch)), controlString = controlString.slice(nextDispatch)) : (true_W_(nextDispatch) ? (function _14__lambda (arg, _char, percent) {
arg = (_5 = args, _6 = index, (_5 && _5.hasOwnProperty(_6) && _5[_6]));
_char = controlString[1];
percent = (_char === "%");
streamWrite(stream, (true_W_(percent) ? "%" : dispatch(_char, arg)));
controlString = controlString.slice(2);
return (!true_W_(percent) ? (index += 1) : false)
})() : (streamWrite(stream, controlString), controlString = "")))
})()
};
return false
})()
})()
})(((typeof (dispatch) !== 'undefined') && dispatch))
}, ((typeof (format) !== 'undefined') && format), false, "(format <stream> <string> #rest args)")
})()