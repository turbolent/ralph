(function _46__lambda (_4, _26) {
var MODULE = this;
var _3 = ["ralph/core", "ralph/test", "ralph/format", "ralph/stream", "ralph/watch"];
for (var _2 = 0; (_2 < 5); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
foo = _PE_makeFunction("foo", function __method__ (_if) {
return 23
}, ((typeof (foo) !== 'undefined') && foo), false, "(foo <object>)");
checkEqual("macroexpansion: (if .. ) mustn't be expanded", 23, foo(23));
checkFalse("true?: null isn't true", true_W_(null));
checkFalse("true?: undefined isn't true", true_W_(undefined));
checkTrue("true?: 0 is true", true_W_(0));
checkTrue("true?: \"0\" is true", true_W_("0"));
checkTrue("true?: \"\" is true", true_W_(""));
checkFalse("equality: 0 not false", binary_E_(0, false));
checkTrue("equality: 1 and 1 are equal", _E_(1, 1, 1));
checkFalse("equality: 1 and 2 are unequal", _E_(1, 2, 1));
checkFalse("equality: #f and 0 are unequal", _E_(false, false, 0));
checkTrue("equality: array with same contents", binary_E_([1, 3, 4, 2], [1, 3, 4, 2]));
checkFalse("equality: array with different contents", binary_E_([1, 3, 4, 2], [4, 2, 1, 3]));
checkFalse("equality: undefined and #t", binary_E_(undefined, true));
checkTrue("equality: undefined and #f", binary_E_(undefined, false));
checkFalse("equality: object and undefined", binary_E_({}, undefined));
checkFalse("equality: 0 and undefined", binary_E_(0, undefined));
checkEqual("or: \"\" is true", "", (_4 = "", (true_W_(_4) ? _4 : (_4 = 1, (true_W_(_4) ? _4 : false)))));
checkEqual("or: \"0\" is true", "0", (_4 = "0", (true_W_(_4) ? _4 : (_4 = 1, (true_W_(_4) ? _4 : false)))));
checkEqual("or: 0 is true", 0, (_4 = 0, (true_W_(_4) ? _4 : (_4 = 1, (true_W_(_4) ? _4 : false)))));
checkFalse("and: #f is false", ((true_W_(false)) ? 1 : false));
checkEqual("and: \"\" is true", 1, ((true_W_("")) ? 1 : false));
checkEqual("and: \"\" is true", 1, ((true_W_("0")) ? 1 : false));
checkEqual("and: \"\" is true", "", ((true_W_(true)) ? "" : false));
checkEqual("and: \"0\" is true", "0", ((true_W_(true)) ? "0" : false));
checkEqual("and: 0 is true", 0, ((true_W_(true)) ? 0 : false));
checkFalse("and: #f is false", ((true_W_(true)) ? false : false));
checkTrue("and: #t is true", ((true_W_(true)) ? true : false));
checkTrue("and: 0 and 0", ((true_W_(0)) ? 0 : false));
checkTrue("when: and of \"\", \"0\" and 0 is true", (true_W_(((true_W_("") && true_W_("0")) ? 0 : false)) ? true : false));
checkEqual("#rest: #1", 1, (1));
checkEqual("#rest: #2", 3, (1 + 2));
checkEqual("#rest: #3", 10, (1 + 2 + 3 + 4));
checkEqual("keywords: equality", _k('test'), _k('test'));
foobar = _PE_makeFunction("foobar", function __method__ () {
var _5 = [].slice.call(arguments, 0);
var test = 2;
for (var _8 = 0; (_8 < _5.length); _8 = (_8 + 2)) {
var _6 = _5[_8];
var _7 = _5[(_8 + 1)];
if (true_W_(keyword_W_(_6))) {
(function _47__lambda () {
var _9 = _6;
return (true_W_((_4 = (_9 == _k('test')), (true_W_(_4) ? _4 : false))) ? test = _7 : false)
})()
}
};
return test
}, ((typeof (foobar) !== 'undefined') && foobar), false, "(foobar #key test)");
checkEqual("keyword arguments: default value", 2, foobar());
checkEqual("keyword arguments: passed value", 3, foobar(_k('test'), 3));
checkEqual("bind: nested", 2, (function _48__lambda (x, y) {
x = 0;
y = (x + 1);
return (function _49__lambda (y) {
y = (y + 1);
return y
})(((typeof (y) !== 'undefined') && y))
})());
(function _50__lambda (i, v) {
i = 0;
v = 0;
var _10 = 1;
var _11 = (i + 1);
i = _10;
v = _11;
checkEqual("%parallel-set: i = 0 set to 1", 1, i);
return checkEqual("%parallel-set: v = 0 set to incremented i still 1", 1, v)
})();
checkTrue("block: without non-local-exit function", true);
checkTrue("block: with non-local-exit function", (function(){
try {
return (function _51__lambda (_return) {
_return = _PE_makeNonLocalExitFunction("return");
_return(true);
return false
})()
} catch (_12) {
if (true_W_(((true_W_(_PE_nonLocalExit_W_(_12))) ? (_12.name === "return") : false))) {
return _12.value
} else {
throw _12
}
}
})());
checkEqual("block: invoke non-local-exit function with value", 2, (function(){
try {
return (function _52__lambda (foo) {
foo = _PE_makeNonLocalExitFunction("foo");
1;
foo(2);
return 3
})()
} catch (_13) {
if (true_W_(((true_W_(_PE_nonLocalExit_W_(_13))) ? (_13.name === "foo") : false))) {
return _13.value
} else {
throw _13
}
}
})());
checkCondition("signal <error>", _CL_error, function _53__lambda () {
signal(make(_CL_error, _k('message'), "!"));
return false
});
checkTrue("binary<: 0 < 1", binary_LT_(0, 1));
checkTrue("<: 1 < 2 < 3 < 4", _LT_(1, 2, 3, 4));
checkFalse("<: 2 > 1", _LT_(2, 1, 3, 4));
checkFalse("<: 3 > 2", _LT_(3, 2, 1, 4));
checkFalse("<: 4 > 3", _LT_(4, 3, 2, 1));
checkTrue(">: 1 > 0", binary_GT_(1, 0));
checkFalse(">: 1 = 1", binary_GT_(1, 1));
checkFalse(">: 2 < 3", _GT_(2, 3, 4));
checkTrue(">: 4 > 3", _GT_(4, 3, 2));
checkTrue("<=: 1 <= 1", binary_LT__E_(1, 1));
checkTrue("<=: 1 <= 2", binary_LT__E_(1, 2));
checkFalse("<=: 2 > 1", binary_LT__E_(2, 1));
checkTrue(">=: 1 <= 1", binary_GT__E_(1, 1));
checkTrue(">=: 2 >= 1", binary_GT__E_(2, 1));
checkFalse(">=: 1 < 2", binary_GT__E_(1, 2));
checkEqual("reduce: + on 1, 2, 3, 4, 5", 15, reduce1(_PL_, [1, 2, 3, 4, 5]));
checkEqual("reduce1: + with 1 on 2, 3, 4, 5", 15, reduce(_PL_, 1, [2, 3, 4, 5]));
checkEqual("apply: + with 1 and 2, 3, 4, 5", 15, apply(_PL_, 1, [2, 3, 4, 5]));
checkEqual("apply: + with 1, 2, 3 and 4, 5", 15, apply(_PL_, 1, 2, 3, [4, 5]));
checkTrue("complement: binary<", complement(binary_LT_)(1, 0));
checkFalse("complement: and", complement(function _54__lambda (a, b) {
return ((true_W_(a)) ? b : false)
})(true, true));
checkEqual("for: increment until i = 0 > 10", 11, (function _55__lambda (i) {
i = 0;
while (!true_W_(binary_GT_(i, 10))) {
(function _56__lambda (i) {
return false
})(i);
i = (i + 1)
};
return i
})());
checkEqual("for: 10!", 3628800, (function _57__lambda (i, v) {
i = 10;
v = 1;
while (!true_W_(binary_LT__E_(i, 0))) {
(function _58__lambda (i, v) {
return false
})(i, v);
var _14 = (i - 1);
var _15 = (v * i);
i = _14;
v = _15
};
return v
})());
checkEqual("element: 1st element is 1", 1, element([1, 2, 3], 0));
checkEqual("element: 2nd element is 2", 2, element([1, 2, 3], 1));
checkEqual("but-last: second last element of 1, 2, 3 is 2", 2, last([1, 2, 3].slice(0, -1)));
checkEqual("but-last: third last element of 1, 2, 3, 4 is 2", 2, last([1, 2, 3, 4].slice(0, -2)));
(function _59__lambda (i) {
i = 0;
return checkEqual("repeatedly: number generation", repeatedly(function _60__lambda () {
return (i += 1)
}, 5), [1, 2, 3, 4, 5])
})();
checkEqual("max:", max(4, 2, -1, 6, 3), 6);
checkEqual("min:", min(4, 2, -1, 6, 3), -1);
checkTrue("instance?: \"test\" is a String", instance_W_("test", String));
checkTrue("instance?: 1 is a Number", instance_W_(1, Number));
checkTrue("instance?: \"test\" is a <string>", instance_W_("test", _CL_string));
checkTrue("instance?: 1 is a <number>", instance_W_(1, _CL_number));
checkTrue("instance?: [1, 2] is a <array>", Array.isArray([1, 2]));
checkTrue("instance?: \"test\" is a <string>", apply(instance_W_, "test", [_CL_string]));
checkTrue("instance?: 1 is a <number>", apply(instance_W_, 1, [_CL_number]));
checkTrue("instance?: [1, 2] is a <array>", apply(instance_W_, [1, 2], [_CL_array]));
checkTrue("instance?: a: is a <keyword>", instance_W_(_k('a'), _CL_keyword));
checkTrue("instance?: #t is a <boolean>", instance_W_(true, _CL_boolean));
checkTrue("instance?: #f is a <boolean>", instance_W_(false, _CL_boolean));
_CL_a = _PE_makeClass("_CL_a", _CL_object, {});
_CL_b = _PE_makeClass("_CL_b", _CL_a, {});
_CL_c = _PE_makeClass("_CL_c", _CL_b, {});
checkTrue("instance?: <a> 1", instance_W_(make(_CL_a), _CL_a));
checkTrue("instance?: <a> 2", instance_W_(make(_CL_b), _CL_a));
checkTrue("instance?: <a> 3", instance_W_(make(_CL_c), _CL_a));
checkFalse("instance?: subclass 1", instance_W_(make(_CL_a), _CL_b));
checkFalse("instance?: subclass 2", instance_W_(make(_CL_a), _CL_c));
checkEqual("type: js:null is <boolean>", type(null), _CL_boolean);
checkEqual("type: js:undefined is <boolean>", type(undefined), _CL_boolean);
_SET_foo = _PE_makeFunction("_SET_foo", function __method__ (_object, newValue) {
return _object.foo = newValue
}, ((typeof (_SET_foo) !== 'undefined') && _SET_foo), true, "((setter foo) <object> <object>)");
foo = _PE_makeFunction("foo", function __method__ (_object) {
return _object.foo
}, ((typeof (foo) !== 'undefined') && foo), false, "(foo <object>)");
(function _61__lambda (bar) {
bar = make(_CL_object);
_SET_foo(bar, 1);
return checkEqual("function: setter before getter", 1, foo(bar))
})();
checkEqual("rcurry: (element x 1) on 0, 1, 2", 1, rcurry(element, 1)([0, 1, 2]));
checkTrue("any? and rcurry: x > 2 on 1, 2, 3, 4", any_W_(rcurry(_GT_, 2), [1, 2, 3, 4]));
checkEqual("size: array [1 2 3]", 3, (_4 = [1, 2, 3], ((true_W_(_4) && _4.length) || 0)));
checkEqual("size: object", 0, (_4 = {}, ((true_W_(_4) && _4.length) || 0)));
checkEqual("size: #f", 0, (_4 = false, ((true_W_(_4) && _4.length) || 0)));
(function _62__lambda (elements, fns) {
elements = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
fns = [];
(function _63__lambda (i) {
i = 0;
while (!true_W_(binary_GT__E_(i, (_4 = elements, ((true_W_(_4) && _4.length) || 0))))) {
(function _64__lambda (i) {
return (function _65__lambda (el) {
el = element(elements, i);
return (fns.push(function _66__lambda () {
return el
}), fns)
})()
})(i);
i = (i + 1)
};
return false
})();
return checkEqual("scope: bind in for loop builds closures", 2, element(fns, 2)())
})();
checkEqual("dotimes: count form only evaluated at beginning", 9, last((function _67__lambda (numbers) {
numbers = make(_CL_array);
return (function _68__lambda (i, _16) {
i = 0;
_16 = (10 - (_4 = numbers, ((true_W_(_4) && _4.length) || 0)));
while (!true_W_((i >= _16))) {
(function _69__lambda (i, _16) {
return (numbers.push(i), numbers)
})(i, _16);
var _17 = (i + 1);
var _18 = _16;
i = _17;
_16 = _18
};
return numbers
})()
})()));
(function _70__lambda (_array) {
_array = [0, 0, 0, 1, 0, 0, 1, 0, 0];
checkEqual("find-key: from start: first element > 0", 3, findKey(_array, rcurry(_GT_, 0)));
checkEqual("find-key: from start: second element > 0", 6, findKey(_array, rcurry(_GT_, 0), _k('skip'), 1));
checkFalse("find-key: from start: no third element > 0", findKey(_array, rcurry(_GT_, 0), _k('skip'), 2));
checkEqual("find-key: from end: first element > 0", 6, findKey(_array, rcurry(_GT_, 0), _k('from-end?'), true));
checkEqual("find-key: from end: second element > 0", 3, findKey(_array, rcurry(_GT_, 0), _k('from-end?'), true, _k('skip'), 1));
return checkFalse("find-key: from end: no third element > 0", findKey(_array, rcurry(_GT_, 0), _k('from-end?'), true, _k('skip'), 2))
})();
(function _71__lambda (_array, xs) {
_array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
xs = ["X", "X", "X"];
checkEqual("replace-subsequence: array: 2..4", xs, copySequence(replaceSubsequence(_array, xs, _k('start'), 2, _k('end'), 4), _k('start'), 2, _k('end'), 5));
checkEqual("replace-subsequence: array: 2..", xs, copySequence(replaceSubsequence(_array, xs, _k('start'), 2), _k('start'), 2));
checkEqual("replace-subsequence: array: ..2", xs, copySequence(replaceSubsequence(_array, xs, _k('end'), 2), _k('end'), 3));
checkEqual("replace-subsequence: array: insert at 2", xs, copySequence(replaceSubsequence(_array, xs, _k('start'), 2, _k('end'), 2), _k('start'), 2, _k('end'), 5));
return checkEqual("replace-subsequence: string", "XXX", copySequence(replaceSubsequence("ABCDEFG", "XXX", _k('start'), 5, _k('end'), 8), _k('start'), 5))
})();
(function _72__lambda (generateArray, xs) {
generateArray = function _73__lambda () {
return [0, 1, 2, 3, 4, 5]
};
xs = ["X", "X", "X"];
(function _74__lambda (x) {
x = generateArray();
replaceSubsequence_B_(x, xs, _k('start'), 2);
return checkEqual("replace-subsequence!", [0, 1, "X", "X", "X", 2, 3, 4, 5], x)
})();
return (function _75__lambda (x) {
x = generateArray();
replaceSubsequence_B_(x, xs, _k('start'), 2, _k('end'), 4);
return checkEqual("replace-subsequence!", [0, 1, "X", "X", "X", 4, 5], x)
})()
})();
apply(function _76__lambda (a, _19, d, _20) {
return apply(function _77__lambda (b, c) {
return apply(function _78__lambda (_21, g) {
return apply(function _79__lambda (e, f) {
return checkTrue("destructuring-bind: nested", ((true_W_((a === 1)) && true_W_((b === 2)) && true_W_((c === 3)) && true_W_((d === 4)) && true_W_((e === 5)) && true_W_((f === 6))) ? (g === 7) : false))
}, _21)
}, _20)
}, _19)
}, [1, [2, 3], 4, [[5, 6], 7]]);
checkTrue("every?", every_W_(function _80__lambda (x) {
return binary_GT_(x, 0)
}, [1, 2, 3, 4]));
checkTrue("every? true", every_W_(true_W_, [true, true, true, true]));
checkFalse("every? false", every_W_(true_W_, [true, true, true, false]));
checkTrue("any? true", any_W_(true_W_, [false, true, true, false]));
checkFalse("any? false", any_W_(true_W_, [false, false, false, false]));
(function _81__lambda (test1, test2) {
test1 = function test1 (a) {
return (a + 1)
};
test2 = function test2 (b) {
return (b + 2)
};
checkEqual("bind-methods: 1", 2, test1(1));
return checkEqual("bind-methods: 2", 3, test2(1))
})(((typeof (test1) !== 'undefined') && test1), ((typeof (test2) !== 'undefined') && test2));
(function _82__lambda (x) {
x = make(_CL_object);
_SET_get(x, "1", "2", "3", 4);
return checkEqual("get: '1' -> '2' -> '3' = 4", 4, get(x, "1", "2", "3"))
})();
checkTrue("if-bind: test is true, shouldn't be visible in then", (function _83__lambda (_22) {
_22 = true;
return (true_W_(_22) ? (function _84__lambda (a) {
a = _22;
return a
})() : (function _85__lambda () {
try {
return (a, false)
} catch (_23) {
if (true_W_((_23 instanceof Error))) {
var condition = _23;
return false
}
}
})())
})());
checkTrue("if-bind: test is false, shouldn't be visible in then (ignore if optimized)", (function _86__lambda (_24) {
_24 = false;
return (true_W_(_24) ? (function _87__lambda (a) {
a = _24;
return a
})() : (function _88__lambda () {
try {
return (a, false)
} catch (_25) {
if (true_W_((_25 instanceof Error))) {
var condition = _25;
return true
}
}
})())
})());
test = _PE_makeGeneric("test", "(test <object>)");
test = _PE_makeMethod("test", function __method__ (_string) {
return 1
}, _CL_string, ((typeof (test) !== 'undefined') && test), false, "(test <string>)");
test = _PE_makeMethod("test", function __method__ (_number) {
return 2
}, _CL_number, ((typeof (test) !== 'undefined') && test), false, "(test <number>)");
_SET_test = _PE_makeMethod("_SET_test", function __method__ (_object, newValue) {
return 4
}, _CL_object, ((typeof (_SET_test) !== 'undefined') && _SET_test), true, "((setter test) <object> <object>)");
test = _PE_makeMethod("test", function __method__ (_object) {
return 3
}, _CL_object, ((typeof (test) !== 'undefined') && test), false, "(test <object>)");
checkEqual("generic: specialized on <string>", 1, test("test"));
checkEqual("generic: specialized on <number>", 2, test(1));
(function _89__lambda (x) {
x = make(_CL_object);
checkEqual("generic: setter before getter, get", 3, test(x));
return checkEqual("generic: setter before getter, set", 4, _SET_test(x, 0))
})();
(function _90__lambda (x) {
x = make(_CL_object);
x.y = 0;
(x.y += 1);
return checkEqual("inc!: 0 -> 1", 1, (_4 = x, _26 = "y", (_4 && _4.hasOwnProperty(_26) && _4[_26])))
})();
checkEqual("position: find 2 in (1 2 3)", 1, position([1, 2, 3], 2));
(function _91__lambda (stream) {
stream = make(_CL_stringStream, _k('string'), "test");
checkFalse("<string-stream>: not at end when starting", streamAtEnd_W_(stream));
checkTrue("<string-stream>: peeking doesn't advance the stream", ((true_W_(("t" === streamPeek(stream)))) ? ("t" === streamPeek(stream)) : false));
checkTrue("<string-stream>: reading advances the stream", ((true_W_(("t" === streamReadElement(stream)))) ? ("e" === streamReadElement(stream)) : false));
streamReadElement(stream);
streamReadElement(stream);
return checkTrue("<string-stream>: at end when done", streamAtEnd_W_(stream))
})();
(function _92__lambda (stream) {
stream = make(_CL_stringStream);
checkEqual("<string-stream>: empty contents when starting", "", streamContents(stream));
streamWrite(stream, "FOO");
checkEqual("<string-stream>: simple write", "FOO", streamContents(stream));
checkTrue("<string-stream>: writing advances, always at end", streamAtEnd_W_(stream));
streamWrite(stream, "BAR");
checkEqual("<string-stream>: another write, check contents", "FOOBAR", streamContents(stream));
streamUnreadElement(stream);
checkEqual("<string-stream>: stream-unread-element", "R", streamReadElement(stream));
streamUnreadElement(stream);
streamUnreadElement(stream);
checkEqual("<string-stream>: stream-remaining-contents", "AR", streamRemainingContents(stream));
streamUnreadElement(stream);
streamReadThrough(stream, "A");
return checkEqual("<string-stream>: stream-read-through", "R", streamReadElement(stream))
})();
checkEqual("format-to-string: numbers and escaping", "1%2", formatToString("%d%%%d", 1, 2));
checkEqual("format-to-string: method", "x%test%x", formatToString("x%mx", function _93__lambda (stream) {
return streamWrite(stream, "%test%")
}));
checkEqual("format-to-string: description of <string>", "\"TEST\"", formatToString("%=", "TEST"));
foo = _PE_makeGeneric("foo", "(foo <object>)");
_CL_a = _PE_makeClass("_CL_a", false, {});
_CL_b = _PE_makeClass("_CL_b", _CL_a, {});
_CL_c = _PE_makeClass("_CL_c", _CL_b, {});
_CL_d = _PE_makeClass("_CL_d", _CL_c, {});
_CL_e = _PE_makeClass("_CL_e", _CL_d, {});
foo = _PE_makeMethod("foo", function __method__ (_object) {
return 1
}, _CL_a, ((typeof (foo) !== 'undefined') && foo), false, "(foo <a>)");
foo = _PE_makeMethod("foo", function __method__ (_object) {
return 2
}, _CL_b, ((typeof (foo) !== 'undefined') && foo), false, "(foo <b>)");
checkEqual("classes: <b> inherits <a>: foo on <a>", 1, foo(make(_CL_a)));
checkEqual("classes: <b> inherits <a>: foo on <b>", 2, foo(make(_CL_b)));
checkEqual("classes: <c> inherits <b>: foo on <c>", 2, foo(make(_CL_c)));
bar = _PE_makeGeneric("bar", "(bar <object> <object>)");
bar = _PE_makeMethod("bar", function __method__ (_object, a) {
_object.next = _PE_nextMethod(__method__);
return _object.a = a
}, _CL_a, ((typeof (bar) !== 'undefined') && bar), false, "(bar <a> <object>)");
bar = _PE_makeMethod("bar", function __method__ (_object, b) {
_PE_nextMethod(__method__)(_object, "a");
return _object.b = b
}, _CL_b, ((typeof (bar) !== 'undefined') && bar), false, "(bar <b> <object>)");
bar = _PE_makeMethod("bar", function __method__ (_object, d) {
_PE_nextMethod(__method__)(_object, "b");
return _object.d = d
}, _CL_d, ((typeof (bar) !== 'undefined') && bar), false, "(bar <d> <object>)");
bar = _PE_makeMethod("bar", function __method__ (_object) {
return _PE_nextMethod(__method__).apply(null, arguments)()
}, _CL_e, ((typeof (bar) !== 'undefined') && bar), false, "(bar <e>)");
(function _94__lambda (e) {
e = make(_CL_e);
bar(e, "d");
checkFalse("next-method: last method shouldn't have a next", (_4 = e, _26 = "next", (_4 && _4.hasOwnProperty(_26) && _4[_26])));
return checkTrue("next-method: all methods visited", ((true_W_(((_4 = e, _26 = "d", (_4 && _4.hasOwnProperty(_26) && _4[_26])) === "d")) && true_W_(((_4 = e, _26 = "b", (_4 && _4.hasOwnProperty(_26) && _4[_26])) === "b"))) ? ((_4 = e, _26 = "a", (_4 && _4.hasOwnProperty(_26) && _4[_26])) === "a") : false))
})();
_SET_bar = _PE_makeMethod("_SET_bar", function __method__ (a, value) {
return a.value = value
}, _CL_a, ((typeof (_SET_bar) !== 'undefined') && _SET_bar), true, "((setter bar) <a> <object>)");
_SET_bar = _PE_makeMethod("_SET_bar", function __method__ (c, value) {
return _PE_nextMethod(__method__)(c, 1)
}, _CL_c, ((typeof (_SET_bar) !== 'undefined') && _SET_bar), true, "((setter bar) <c> <object>)");
(function _95__lambda (d) {
d = make(_CL_d);
_SET_bar(d, 2);
return checkEqual("next-method: setter", 1, (_4 = d, _26 = "value", (_4 && _4.hasOwnProperty(_26) && _4[_26])))
})();
_SET_specialFoo = _PE_makeFunction("_SET_specialFoo", function __method__ (_object, value) {
var _27 = [].slice.call(arguments, 2);
var test;
for (var _30 = 0; (_30 < _27.length); _30 = (_30 + 2)) {
var _28 = _27[_30];
var _29 = _27[(_30 + 1)];
if (true_W_(keyword_W_(_28))) {
(function _96__lambda () {
var _31 = _28;
return (true_W_((_4 = (_31 == _k('test')), (true_W_(_4) ? _4 : false))) ? test = _29 : false)
})()
}
};
return ((true_W_((value === "a"))) ? (test === "b") : false)
}, ((typeof (_SET_specialFoo) !== 'undefined') && _SET_specialFoo), true, "((setter special-foo) <object> <object> #key test)");
checkTrue("setters: keyword arguments", _SET_specialFoo(false, "a", _k('test'), "b"));
(function _97__lambda (_array) {
_array = [1, 2, 3];
remove_B_(_array, 2);
return checkEqual("remove!: 2 from (1 2 3)", [1, 3], _array)
})();
checkEqual("remove: 2 from (1 2 3)", [1, 3], remove([1, 2, 3], 2));
(function _98__lambda (fired_W_, foo) {
fired_W_ = false;
foo = {"a":1};
watch(foo, "a", function _99__lambda (property, oldValue, newValue) {
checkEqual("watch: old-value", 1, oldValue);
checkEqual("watch: new-value", 2, newValue);
checkEqual("watch: property", "a", property);
return fired_W_ = true
});
foo.a = 2;
return checkTrue("watch: handler should be called", fired_W_)
})();
_CL_x = _PE_makeClass("_CL_x", false, {"x":false,
"a":function _100__lambda () {
return 1
}});
_CL_y = _PE_makeClass("_CL_y", _CL_x, {});
_CL_z = _PE_makeClass("_CL_z", _CL_y, {"z":false,
"c":function _101__lambda () {
return 3
}});
initialize = _PE_makeMethod("initialize", function __method__ (_object) {
var rest = [].slice.call(arguments, 1);
return apply(_PE_nextMethod(__method__), _object, rest)
}, _CL_z, ((typeof (initialize) !== 'undefined') && initialize), false, "(initialize <z> #rest rest)");
(function _102__lambda (z, x) {
z = make(_CL_z, _k('x'), 1, _k('z'), 2);
x = make(_CL_x);
checkEqual("slots: keyword initializer (1)", 1, (_4 = z, _26 = "x", (_4 && _4.hasOwnProperty(_26) && _4[_26])));
checkEqual("slots: keyword initializer (2)", 2, (_4 = z, _26 = "z", (_4 && _4.hasOwnProperty(_26) && _4[_26])));
checkEqual("slots: default value (1)", 1, (_4 = x, _26 = "a", (_4 && _4.hasOwnProperty(_26) && _4[_26])));
return checkEqual("slots: default value (2)", 3, (_4 = z, _26 = "c", (_4 && _4.hasOwnProperty(_26) && _4[_26])))
})();
_CL_test = _PE_makeClass("_CL_test", _CL_object, {"foo":false,
"bar":false,
"baz":function _103__lambda () {
return 3
},
"blub":false});
initialize = _PE_makeMethod("initialize", function __method__ (test) {
var rest = [].slice.call(arguments, 1);
apply(_PE_nextMethod(__method__), test, rest);
return test.blub = 4
}, _CL_test, ((typeof (initialize) !== 'undefined') && initialize), false, "(initialize <test> #rest rest)");
(function _104__lambda (test) {
test = make(_CL_test, _k('foo'), 1, _k('bar'), 2);
checkEqual("type: default initializer for slot 1", 1, (_4 = test, _26 = "foo", (_4 && _4.hasOwnProperty(_26) && _4[_26])));
checkEqual("type: default initializer for slot 2", 2, (_4 = test, _26 = "bar", (_4 && _4.hasOwnProperty(_26) && _4[_26])));
checkEqual("type: default initializer for slot 3", 3, (_4 = test, _26 = "baz", (_4 && _4.hasOwnProperty(_26) && _4[_26])));
return checkEqual("type: default initializer for slot 4", 4, (_4 = test, _26 = "blub", (_4 && _4.hasOwnProperty(_26) && _4[_26])))
})();
(function _105__lambda (_object) {
_object = {"a":4,
"b":3,
"c":2,
"d":1};
(function _106__lambda (_32) {
var a = _32.a;
var d = _32.d;
checkEqual("bind-properties: a = 4", a, 4);
return checkEqual("bind-properties: d = 4", d, 1)
})(_object);
checkEqual("as-property-list: strings", asPropertyList(_object), ["a", 4, "b", 3, "c", 2, "d", 1]);
checkEqual("as-property-list: keywords", asPropertyList(_object, _k('keywords?'), true), [_k('a'), 4, _k('b'), 3, _k('c'), 2, _k('d'), 1]);
checkEqual("as-association-list: strings", asAssociationList(_object), [["a", 4], ["b", 3], ["c", 2], ["d", 1]]);
checkEqual("as-association-list: keywords", asAssociationList(_object, _k('keywords?'), true), [[_k('a'), 4], [_k('b'), 3], [_k('c'), 2], [_k('d'), 1]]);
checkEqual("extend!: return extended object", _object, extend_B_(_object, {"b":8,
"d":0}));
checkEqual("extend!: a = 4", (_4 = _object, _26 = "a", (_4 && _4.hasOwnProperty(_26) && _4[_26])), 4);
checkEqual("extend!: b = 8", (_4 = _object, _26 = "b", (_4 && _4.hasOwnProperty(_26) && _4[_26])), 8);
checkEqual("extend!: c = 2", (_4 = _object, _26 = "c", (_4 && _4.hasOwnProperty(_26) && _4[_26])), 2);
return checkEqual("extend!: d = 0", (_4 = _object, _26 = "d", (_4 && _4.hasOwnProperty(_26) && _4[_26])), 0)
})();
(function _107__lambda (_object) {
_object = asObject([_k('b'), 2, _k('a'), 1]);
checkEqual("as-object: a = 1", (_4 = _object, _26 = "a", (_4 && _4.hasOwnProperty(_26) && _4[_26])), 1);
return checkEqual("as-object: b = 2", (_4 = _object, _26 = "b", (_4 && _4.hasOwnProperty(_26) && _4[_26])), 2)
})();
(function _108__lambda (_string, prefix1, prefix2, prefix3) {
_string = "this is a test";
prefix1 = "this";
prefix2 = "thus";
prefix3 = "foo";
checkTrue("starts-with?: 1", startsWith_W_(_string, prefix1));
checkFalse("starts-with?: 2", startsWith_W_(_string, prefix2));
return checkFalse("starts-with?: 3", startsWith_W_(_string, prefix3))
})();
checkTrue("select: test expression", (function _109__lambda () {
var _33 = 1;
var _34 = function _110__lambda (a, b) {
return ("a" === b)
};
return (true_W_((_4 = _34(_33, 1), (true_W_(_4) ? _4 : false))) ? false : (true_W_((_4 = _34(_33, "a"), (true_W_(_4) ? _4 : false))) ? true : false))
})());
(function _111__lambda (_object) {
_object = {};
return checkTrue("select: primitive test", (function _112__lambda () {
var _35 = _object;
return (true_W_((_4 = (_35 === {}), (true_W_(_4) ? _4 : false))) ? false : (true_W_((_4 = (_35 === _object), (true_W_(_4) ? _4 : false))) ? true : false))
})())
})();
(function _113__lambda (a, b) {
a = [1, 2, 3];
b = [];
(function _114__lambda (_37, _38) {
_37 = a;
_38 = (_4 = _37, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _36 = 0; (_36 < _38); _36 = (_36 + 1)) {
var item = _37[_36];
(function _115__lambda (item) {
b.unshift(item);
b
})(item)
}
})()
})();
return checkEqual("for-each: simple without condition", [3, 2, 1], b)
})();
(function _116__lambda (a, b) {
a = [1, 2, 3];
b = [];
(function _117__lambda (_40, _41) {
_40 = a;
_41 = (_4 = _40, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _39 = 0; (_39 < _41); _39 = (_39 + 1)) {
var item = _40[_39];
(function _118__lambda (item) {
b.unshift(function _119__lambda () {
return item
});
b
})(item)
}
})()
})();
return checkEqual("for-each: simple without condition and closure", [3, 2, 1], map(apply, b))
})();
(function _120__lambda (s, uneven) {
s = [5, 7, 9, 10];
uneven = [];
checkEqual("for-each: find even? in [5 7 9 10]", 10, (function _121__lambda () {
var _number;
var _42 = s;
while (true) {
if (any_W_(empty_W_, [_42])) {
return false
};
_number = _42[0];
if (even_W_(_number)) {
return _number
} else {
(function _122__lambda (_number) {
uneven.push(_number);
uneven
})(_number)
};
_42 = _42.slice(1)
}
})());
return checkEqual("for-each: uneven are [5 7 9]", [5, 7, 9], uneven)
})();
(function _123__lambda (s, uneven) {
s = [5, 7, 9, 10];
uneven = [];
checkEqual("for-each: find even? in [5 7 9 10]", 10, (function _124__lambda () {
var _number;
var _43 = s;
while (true) {
if (any_W_(empty_W_, [_43])) {
return false
};
_number = _43[0];
if (even_W_(_number)) {
return _number
} else {
(function _125__lambda (_number) {
uneven.push(function _126__lambda () {
return _number
});
uneven
})(_number)
};
_43 = _43.slice(1)
}
})());
return checkEqual("for-each: uneven are [5 7 9]", [5, 7, 9], map(apply, uneven))
})();
(function _127__lambda (_object, x) {
_object = {"a":{"b":23}};
x = [];
return checkEqual("inlining: temporaries", 23, (_4 = (_4 = ((_4 = false, (true_W_(_4) ? _4 : (_4 = true, (true_W_(_4) ? _4 : false)))), (x.push(1), x), _object), _26 = "a", (_4 && _4.hasOwnProperty(_26) && _4[_26])), _26 = "b", (_4 && _4.hasOwnProperty(_26) && _4[_26])))
})();
(function _128__lambda (result) {
result = [];
(function _129__lambda () {
var a;
var b;
var _44 = [1, 2, 3];
var _45 = [4, 5, 6];
while (true) {
if (any_W_(empty_W_, [_44, _45])) {
return false
};
a = _44[0];
b = _45[0];
(function _130__lambda (a, b) {
result.push((a + b));
result
})(a, b);
_44 = _44.slice(1);
_45 = _45.slice(1)
}
})();
return checkEqual("for-each: two sequences, no end test", [5, 7, 9], result)
})();
(function _131__lambda (x) {
x = [[_k('a'), 3], [_k('b'), 1], [_k('c'), 4], [_k('d'), 2]];
checkEqual("sort: key", [[_k('b'), 1], [_k('d'), 2], [_k('a'), 3], [_k('c'), 4]], sort(x, _k('key'), second));
return checkEqual("sort: key and test", [[_k('c'), 4], [_k('a'), 3], [_k('d'), 2], [_k('b'), 1]], sort(x, _k('test'), _GT_, _k('key'), second))
})();
checkEqual("group-by", ["1", ["a"], "2", ["as", "aa"], "3", ["asd"]], asPropertyList(groupBy(size, ["a", "as", "asd", "aa"])));
checkEqual("compose", 3, compose(size, rest)([1, 2, 3, 4]))
})()