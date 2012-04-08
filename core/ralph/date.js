(function _10__lambda (_7, _9) {
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
_CL_date = exports._CL_date = Date;
initialize = _PE_makeMethod("initialize", function __method__ (date) {
var rest = [].slice.call(arguments, 1);
return (function _11__lambda (_arguments) {
_arguments = asObject(rest);
return (function _12__lambda (_5, _6) {
_5 = [["timestamp", "setTime"], ["day", "setDate"], ["month", "setMonth"], ["year", "setYear"], ["minutes", "setMinutes"], ["seconds", "setSeconds"], ["hours", "setHours"], ["milliseconds", "setMilliseconds"]];
_6 = (_7 = _5, ((true_W_(_7) && _7.length) || 0));
return (function(){
for (var _4 = 0; (_4 < _6); _4 = (_4 + 1)) {
var setter = _5[_4];
(function _13__lambda (setter) {
apply(function _14__lambda (keyword, _function) {
return (function _15__lambda (_8) {
_8 = (_7 = _arguments, _9 = keyword, (_7 && _7.hasOwnProperty(_9) && _7[_9]));
return (true_W_(_8) ? (function _16__lambda (value) {
value = _8;
return date[_function](value)
})() : false)
})()
}, setter)
})(setter)
}
})()
})(((typeof (_5) !== 'undefined') && _5), false)
})()
}, _CL_date, ((typeof (initialize) !== 'undefined') && initialize), false, "(initialize <date> #rest rest)");
localeTimeString = _PE_makeFunction("localeTimeString", function __method__ (date) {
return date.toLocaleTimeString()
}, ((typeof (localeTimeString) !== 'undefined') && localeTimeString), false, "(locale-time-string <object>)")
})()