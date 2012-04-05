(function _10__lambda (_9) {
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
_CL_regexp = exports._CL_regexp = RegExp;
initialize = _PE_makeMethod("initialize", function __method__ (regexp) {
var _4 = [].slice.call(arguments, 1);
var pattern;
var global_W_;
var ignoreCase_W_;
var multiline_W_;
for (var _7 = 0; (_7 < _4.length); _7 = (_7 + 2)) {
var _5 = _4[_7];
var _6 = _4[(_7 + 1)];
if (true_W_(keyword_W_(_5))) {
(function _11__lambda () {
var _8 = _5;
return (true_W_((_9 = (_8 == _k('pattern')), (true_W_(_9) ? _9 : false))) ? pattern = _6 : (true_W_((_9 = (_8 == _k('global?')), (true_W_(_9) ? _9 : false))) ? global_W_ = _6 : (true_W_((_9 = (_8 == _k('ignore-case?')), (true_W_(_9) ? _9 : false))) ? ignoreCase_W_ = _6 : (true_W_((_9 = (_8 == _k('multiline?')), (true_W_(_9) ? _9 : false))) ? multiline_W_ = _6 : false))))
})()
}
};
return (true_W_(pattern) ? regexp.compile(pattern, concatenate((true_W_(global_W_) ? "g" : ""), (true_W_(ignoreCase_W_) ? "i" : ""), (true_W_(multiline_W_) ? "m" : ""))) : false)
}, _CL_regexp, ((typeof (initialize) !== 'undefined') && initialize), false, "(initialize <regexp> #key pattern global? ignore-case? multiline?)");
find = _PE_makeFunction("find", function __method__ (regexp, _string) {
return (function _12__lambda (position) {
position = _string.search(regexp);
return (true_W_(binary_GT_(position, -1)) ? position : false)
})()
}, ((typeof (find) !== 'undefined') && find), false, "(find <regexp> <string>)");
match = exports.match = _PE_makeFunction("match", function __method__ (regexp, _string) {
return _string.match(regexp)
}, ((typeof (match) !== 'undefined') && match), false, "(match <regexp> <string>)")
})()