(function _95__lambda (_4, _5) {
var MODULE = this;
_PE_getProperty = exports._PE_getProperty = function _96__lambda (_object, name) {
return (_object && _object.hasOwnProperty(name) && _object[name])
};
true_W_ = exports.true_W_ = function _97__lambda (value) {
return (!(value === null) && !(value === undefined) && !(value.valueOf() === false))
};
true_W_.displayName = "(true? <object>)";
not = exports.not = function _98__lambda (value) {
return !true_W_(value)
};
not.displayName = "(not <object>)";
_PE_makeClass = exports._PE_makeClass = function _99__lambda (name, superclass, slots) {
var _class = function _100__lambda () {};
_class["%name"] = name;
_class["%slots"] = slots;
if (superclass) {
_PE_inherit(_class, superclass);
slots.__proto__ = superclass["%slots"]
};
return _class
};
_PE_makeFunction = exports._PE_makeFunction = function _101__lambda (name, _function, existing, setter_W_, displayName) {
_function["%name"] = name;
_function.displayName = displayName;
_function["%setter?"] = setter_W_;
return _function
};
_PE_makeMethod = exports._PE_makeMethod = _PE_makeFunction("_PE_makeMethod", function __method__ (name, _function, type, existing, setter_W_, displayName) {
return (function _102__lambda (prototype, existingMethod, generic_W_) {
prototype = type.prototype;
existingMethod = (_4 = prototype, _5 = name, (_4 && _4.hasOwnProperty(_5) && _4[_5]));
generic_W_ = (existing && (_4 = existing, _5 = "%generic?", (_4 && _4.hasOwnProperty(_5) && _4[_5])));
_function["%name"] = name;
_function.displayName = displayName;
_function["%setter?"] = setter_W_;
_function["%type"] = type;
prototype[name] = _function;
return (generic_W_ ? existing : _PE_makeGeneric(name, displayName))
})(((typeof (prototype) !== 'undefined') && prototype), false, false)
}, ((typeof (_PE_makeMethod) !== 'undefined') && _PE_makeMethod), false, "(%make-method <object> <object> <object> <object> <object> <object>)");
_PE_makeGeneric = exports._PE_makeGeneric = _PE_makeFunction("_PE_makeGeneric", function __method__ (functionName, displayName) {
function dispatcher (_object) {
var _function = ((typeof (_object) !== 'undefined') && _object[functionName]);
return (_function && _function.apply(_object, arguments))
};
dispatcher["%generic?"] = true;
dispatcher["%name"] = functionName;
dispatcher.displayName = displayName;
return dispatcher
}, ((typeof (_PE_makeGeneric) !== 'undefined') && _PE_makeGeneric), false, "(%make-generic <object> <object>)");
_PE_nextMethod = exports._PE_nextMethod = _PE_makeFunction("_PE_nextMethod", function __method__ (_function) {
var name = _function["%name"];
var proto = _function["%type"].prototype.__proto__;
return proto[name]
}, ((typeof (_PE_nextMethod) !== 'undefined') && _PE_nextMethod), false, "(%next-method <object>)");
make = exports.make = _PE_makeFunction("make", function __method__ (type) {
var _arguments = [].slice.call(arguments, 1);
var _object = new type ();
apply(initialize, _object, _arguments);
return _object
}, ((typeof (make) !== 'undefined') && make), false, "(make <object> #rest arguments)");
_PE_inherit = exports._PE_inherit = _PE_makeFunction("_PE_inherit", function __method__ (_class, superclass) {
_class.prototype.__proto__ = superclass.prototype;
_class.prototype.__super__ = superclass;
return _class
}, ((typeof (_PE_inherit) !== 'undefined') && _PE_inherit), false, "(%inherit <object> <object>)");
superclass = exports.superclass = _PE_makeFunction("superclass", function __method__ (_class) {
return _class.prototype.__super__
}, ((typeof (superclass) !== 'undefined') && superclass), false, "(superclass <object>)");
_PE_keywords = {};
_CL_keyword = exports._CL_keyword = _PE_makeClass("_CL_keyword", false, {"name":false});
keyword_W_ = exports.keyword_W_ = _PE_makeFunction("keyword_W_", function __method__ (keyword) {
return instance_W_(keyword, _CL_keyword)
}, ((typeof (keyword_W_) !== 'undefined') && keyword_W_), false, "(keyword? <object>)");
keyword = exports.keyword = _PE_makeFunction("keyword", function __method__ (name) {
var keyword = null;
name = name.toLowerCase(name);
return (_PE_keywords.hasOwnProperty(name) ? _PE_keywords[name] : (keyword = new _CL_keyword (), keyword.name = name, _PE_keywords[name] = keyword, keyword))
}, ((typeof (keyword) !== 'undefined') && keyword), false, "(keyword <object>)");
_k = exports._k = keyword;
_CL_nonLocalExit = exports._CL_nonLocalExit = function _103__lambda (name, value) {
this.name = name;
this.value = value;
return this
};
_PE_nonLocalExit_W_ = exports._PE_nonLocalExit_W_ = _PE_makeFunction("_PE_nonLocalExit_W_", function __method__ (condition) {
return instance_W_(condition, _CL_nonLocalExit)
}, ((typeof (_PE_nonLocalExit_W_) !== 'undefined') && _PE_nonLocalExit_W_), false, "(%non-local-exit? <object>)");
_PE_makeNonLocalExitFunction = exports._PE_makeNonLocalExitFunction = _PE_makeFunction("_PE_makeNonLocalExitFunction", function __method__ (name) {
return function _104__lambda (value) {
return (function(){
throw new _CL_nonLocalExit (name, value)
})()
}
}, ((typeof (_PE_makeNonLocalExitFunction) !== 'undefined') && _PE_makeNonLocalExitFunction), false, "(%make-non-local-exit-function <object>)");
asString = exports.asString = String;
asNumber = exports.asNumber = Number;
parseNumber = exports.parseNumber = parseFloat;
parseInteger = exports.parseInteger = _PE_makeFunction("parseInteger", function __method__ (value) {
var _6 = [].slice.call(arguments, 1);
var radix = 10;
for (var _9 = 0; (_9 < _6.length); _9 = (_9 + 2)) {
var _7 = _6[_9];
var _8 = _6[(_9 + 1)];
if (true_W_(keyword_W_(_7))) {
(function _105__lambda () {
var _10 = _7;
return (true_W_((_4 = (_10 == _k('radix')), (true_W_(_4) ? _4 : false))) ? radix = _8 : false)
})()
}
};
return parseInt(value, radix)
}, ((typeof (parseInteger) !== 'undefined') && parseInteger), false, "(parse-integer <object> #key radix)");
charCode = exports.charCode = _PE_makeFunction("charCode", function __method__ (_char) {
return _char.charCodeAt(0)
}, ((typeof (charCode) !== 'undefined') && charCode), false, "(char-code <object>)");
codeChar = exports.codeChar = String.fromCharCode;
makeString = exports.makeString = _PE_makeFunction("makeString", function __method__ (value) {
return new String (value)
}, ((typeof (makeString) !== 'undefined') && makeString), false, "(make-string <object>)");
makeNumber = exports.makeNumber = _PE_makeFunction("makeNumber", function __method__ (value) {
return new Number (value)
}, ((typeof (makeNumber) !== 'undefined') && makeNumber), false, "(make-number <object>)");
makeBoolean = exports.makeBoolean = _PE_makeFunction("makeBoolean", function __method__ (value) {
return new Boolean (value)
}, ((typeof (makeBoolean) !== 'undefined') && makeBoolean), false, "(make-boolean <object>)");
asArray = exports.asArray = _PE_makeFunction("asArray", function __method__ (_arguments, skip) {
return [].slice.call(_arguments, (skip || 0))
}, ((typeof (asArray) !== 'undefined') && asArray), false, "(as-array <object> <object>)");
has_W_ = _PE_makeFunction("has_W_", function __method__ (_object, property) {
return _object.hasOwnProperty(property)
}, ((typeof (has_W_) !== 'undefined') && has_W_), false, "(has? <object> <object>)");
get = exports.get = _PE_makeFunction("get", function __method__ (_object) {
var keys = [].slice.call(arguments, 1);
var result;
while (!empty_W_(keys)) {
var key = keys[0];
if (_object.hasOwnProperty(key)) {
result = _object[key];
_object = result;
keys = keys.slice(1)
} else {
return false
}
};
return result
}, ((typeof (get) !== 'undefined') && get), false, "(get <object> #rest keys)");
_SET_get = exports._SET_get = _PE_makeFunction("_SET_get", function __method__ (_object) {
var properties_SL_value = [].slice.call(arguments, 1);
var property;
var object2;
return (((_4 = properties_SL_value, ((true_W_(_4) && _4.length) || 0)) <= 2) ? _object[properties_SL_value[0]] = properties_SL_value[1] : (property = properties_SL_value[0], object2 = (_object.hasOwnProperty(property) ? (_4 = _object, _5 = property, (_4 && _4.hasOwnProperty(_5) && _4[_5])) : _object[property] = {}), apply(__method__, object2, properties_SL_value.slice(1))))
}, ((typeof (_SET_get) !== 'undefined') && _SET_get), true, "((setter get) <object> #rest properties/value)");
ENVIRONMENT = exports.ENVIRONMENT = (true_W_((typeof (window) !== 'undefined')) ? "browser" : (true_W_((typeof (process) !== 'undefined')) ? "nodejs" : "commonjs"));
symbolName = exports.symbolName = _PE_makeFunction("symbolName", function __method__ (symbol) {
return (_4 = symbol, _5 = "name", (_4 && _4.hasOwnProperty(_5) && _4[_5]))
}, ((typeof (symbolName) !== 'undefined') && symbolName), false, "(symbol-name <object>)");
asObject = exports.asObject = _PE_makeFunction("asObject", function __method__ (propertyList) {
var list = propertyList.slice();
var result = {};
var key;
var value;
while (((_4 = list, ((true_W_(_4) && _4.length) || 0)) > 0)) {
key = list.shift();
value = list.shift();
result[(instance_W_(key, _CL_keyword) ? symbolName(key) : key.toString())] = value
};
return result
}, ((typeof (asObject) !== 'undefined') && asObject), false, "(as-object <object>)");
_CL_object = exports._CL_object = Object;
_CL_string = exports._CL_string = String;
_CL_number = exports._CL_number = Number;
_CL_array = exports._CL_array = Array;
_CL_boolean = exports._CL_boolean = Boolean;
_CL_function = exports._CL_function = Function;
_CL_error = exports._CL_error = Error;
size = exports.size = _PE_makeFunction("size", function __method__ (_object) {
return ((true_W_(_object) && _object.length) || 0)
}, ((typeof (size) !== 'undefined') && size), false, "(size <object>)");
slice = exports.slice = _PE_makeFunction("slice", function __method__ (_array, start, end) {
return ((typeof (end) !== 'undefined') ? _array.slice(start, end) : _array.slice(start))
}, ((typeof (slice) !== 'undefined') && slice), false, "(slice <object> <object> <object>)");
copySequence = exports.copySequence = _PE_makeFunction("copySequence", function __method__ (_array) {
var _11 = [].slice.call(arguments, 1);
var start = 0;
var end = (_4 = _array, ((true_W_(_4) && _4.length) || 0));
for (var _14 = 0; (_14 < _11.length); _14 = (_14 + 2)) {
var _12 = _11[_14];
var _13 = _11[(_14 + 1)];
if (true_W_(keyword_W_(_12))) {
(function _106__lambda () {
var _15 = _12;
return (true_W_((_4 = (_15 == _k('start')), (true_W_(_4) ? _4 : false))) ? start = _13 : (true_W_((_4 = (_15 == _k('end')), (true_W_(_4) ? _4 : false))) ? end = _13 : false))
})()
}
};
return _array.slice(start, end)
}, ((typeof (copySequence) !== 'undefined') && copySequence), false, "(copy-sequence <array> #key start end)");
inc = exports.inc = _PE_makeFunction("inc", function __method__ (_number) {
return (_number + 1)
}, ((typeof (inc) !== 'undefined') && inc), false, "(inc <number>)");
dec = exports.dec = _PE_makeFunction("dec", function __method__ (_number) {
return (_number - 1)
}, ((typeof (dec) !== 'undefined') && dec), false, "(dec <number>)");
_PL_ = exports._PL_ = _PE_makeFunction("_PL_", function __method__ (_number) {
var moreNumbers = [].slice.call(arguments, 1);
return reduce(function _107__lambda (number1, number2) {
return (number1 + number2)
}, _number, moreNumbers)
}, ((typeof (_PL_) !== 'undefined') && _PL_), false, "(+ <number> #rest more-numbers)");
_M_ = exports._M_ = _PE_makeFunction("_M_", function __method__ (_number) {
var moreNumbers = [].slice.call(arguments, 1);
return (empty_W_(moreNumbers) ? (- _number) : reduce(function _108__lambda (number1, number2) {
return (number1 - number2)
}, _number, moreNumbers))
}, ((typeof (_M_) !== 'undefined') && _M_), false, "(- <number> #rest more-numbers)");
_ST_ = exports._ST_ = _PE_makeFunction("_ST_", function __method__ (number1, number2) {
var moreNumbers = [].slice.call(arguments, 2);
return reduce1(function _109__lambda (number1, number2) {
return (number1 * number2)
}, [number1, number2].concat(moreNumbers))
}, ((typeof (_ST_) !== 'undefined') && _ST_), false, "(* <number> <number> #rest more-numbers)");
_SL_ = exports._SL_ = _PE_makeFunction("_SL_", function __method__ (number1, number2) {
var moreNumbers = [].slice.call(arguments, 2);
return reduce1(function _110__lambda (number1, number2) {
return (number1 / number2)
}, [number1, number2].concat(moreNumbers))
}, ((typeof (_SL_) !== 'undefined') && _SL_), false, "(/ <number> <number> #rest more-numbers)");
keys = exports.keys = _PE_makeFunction("keys", function __method__ (_object) {
var keys = [];
return (Array.isArray(_object) ? (function _111__lambda (i) {
i = 0;
while (!true_W_(binary_GT__E_(i, (_4 = _object, ((true_W_(_4) && _4.length) || 0))))) {
(function _112__lambda (i) {
return (keys.push(i), keys)
})(i);
i = (i + 1)
};
return keys
})() : ((function(){
for (var key in _object) {
if (_object.hasOwnProperty(key)) {
keys.push(key);
keys
}
}
})(), keys))
}, ((typeof (keys) !== 'undefined') && keys), false, "(keys <object>)");
values = exports.values = _PE_makeFunction("values", function __method__ (_object) {
var values = [];
for (var key in _object) {
if (_object.hasOwnProperty(key)) {
values.push(_object[key]);
values
}
};
return values
}, ((typeof (values) !== 'undefined') && values), false, "(values <object>)");
makeArray = exports.makeArray = _PE_makeFunction("makeArray", function __method__ () {
var elements = [].slice.call(arguments, 0);
return elements
}, ((typeof (makeArray) !== 'undefined') && makeArray), false, "(make-array #rest elements)");
push = exports.push = _PE_makeFunction("push", function __method__ (_array, newValue) {
_array.unshift(newValue);
return _array
}, ((typeof (push) !== 'undefined') && push), false, "(push <array> <object>)");
pushLast = exports.pushLast = _PE_makeFunction("pushLast", function __method__ (_array, newValue) {
_array.push(newValue);
return _array
}, ((typeof (pushLast) !== 'undefined') && pushLast), false, "(push-last <array> <object>)");
pop = exports.pop = _PE_makeFunction("pop", function __method__ (_array) {
return _array.shift()
}, ((typeof (pop) !== 'undefined') && pop), false, "(pop <array>)");
popLast = exports.popLast = _PE_makeFunction("popLast", function __method__ (_array) {
return _array.pop()
}, ((typeof (popLast) !== 'undefined') && popLast), false, "(pop-last <array>)");
add_B_ = _PE_makeFunction("add_B_", function __method__ (_array, newValue) {
return (_array.unshift(newValue), _array)
}, ((typeof (add_B_) !== 'undefined') && add_B_), false, "(add! <array> <object>)");
_PE_concat = _PE_makeFunction("_PE_concat", function __method__ (array1, array2) {
return array1.concat(array2)
}, ((typeof (_PE_concat) !== 'undefined') && _PE_concat), false, "(%concat <object> <object>)");
reverse_B_ = exports.reverse_B_ = _PE_makeFunction("reverse_B_", function __method__ (_array) {
return _array.reverse()
}, ((typeof (reverse_B_) !== 'undefined') && reverse_B_), false, "(reverse! <array>)");
reverse = exports.reverse = _PE_makeFunction("reverse", function __method__ (_array) {
return _array.slice().reverse()
}, ((typeof (reverse) !== 'undefined') && reverse), false, "(reverse <array>)");
sort_B_ = exports.sort_B_ = _PE_makeFunction("sort_B_", function __method__ (_array) {
var _16 = [].slice.call(arguments, 1);
var test = _LT_;
var key = identity;
for (var _19 = 0; (_19 < _16.length); _19 = (_19 + 2)) {
var _17 = _16[_19];
var _18 = _16[(_19 + 1)];
if (true_W_(keyword_W_(_17))) {
(function _113__lambda () {
var _20 = _17;
return (true_W_((_4 = (_20 == _k('test')), (true_W_(_4) ? _4 : false))) ? test = _18 : (true_W_((_4 = (_20 == _k('key')), (true_W_(_4) ? _4 : false))) ? key = _18 : false))
})()
}
};
return _array.sort(function _114__lambda (a, b) {
return (true_W_(test(key(a), key(b))) ? -1 : 1)
})
}, ((typeof (sort_B_) !== 'undefined') && sort_B_), false, "(sort! <array> #key test key)");
sort = exports.sort = _PE_makeFunction("sort", function __method__ (_array) {
var _21 = [].slice.call(arguments, 1);
var test = _LT_;
var key = identity;
for (var _24 = 0; (_24 < _21.length); _24 = (_24 + 2)) {
var _22 = _21[_24];
var _23 = _21[(_24 + 1)];
if (true_W_(keyword_W_(_22))) {
(function _115__lambda () {
var _25 = _22;
return (true_W_((_4 = (_25 == _k('test')), (true_W_(_4) ? _4 : false))) ? test = _23 : (true_W_((_4 = (_25 == _k('key')), (true_W_(_4) ? _4 : false))) ? key = _23 : false))
})()
}
};
return sort_B_(_array.slice(), _k('test'), test, _k('key'), key)
}, ((typeof (sort) !== 'undefined') && sort), false, "(sort <array> #key test key)");
element = exports.element = _PE_makeFunction("element", function __method__ (_array, key) {
var _26 = [].slice.call(arguments, 2);
var _default;
for (var _29 = 0; (_29 < _26.length); _29 = (_29 + 2)) {
var _27 = _26[_29];
var _28 = _26[(_29 + 1)];
if (true_W_(keyword_W_(_27))) {
(function _116__lambda () {
var _30 = _27;
return (true_W_((_4 = (_30 == _k('default')), (true_W_(_4) ? _4 : false))) ? _default = _28 : false)
})()
}
};
return (_4 = _array[key], (true_W_(_4) ? _4 : (_4 = _default, (true_W_(_4) ? _4 : false))))
}, ((typeof (element) !== 'undefined') && element), false, "(element <array> <object> #key default)");
_SET_element = exports._SET_element = _PE_makeFunction("_SET_element", function __method__ (_array, key, newValue) {
return _array[key] = newValue
}, ((typeof (_SET_element) !== 'undefined') && _SET_element), true, "((setter element) <array> <object> <object>)");
empty_W_ = exports.empty_W_ = _PE_makeFunction("empty_W_", function __method__ (sequence) {
return ((Array.isArray(sequence) || (typeof(sequence) === "string")) ? ((_4 = sequence, ((true_W_(_4) && _4.length) || 0)) === 0) : true)
}, ((typeof (empty_W_) !== 'undefined') && empty_W_), false, "(empty? <object>)");
map = exports.map = _PE_makeFunction("map", function __method__ (_function, _array) {
var res = [];
var len = _array.length;
for (var i = 0; (i < len); i = (i + 1)) {
res.push(_function(_array[i]));
res
};
return res
}, ((typeof (map) !== 'undefined') && map), false, "(map <function> <array>)");
_do = exports._do = _PE_makeFunction("_do", function __method__ (_function, _array) {
var len = _array.length;
for (var i = 0; (i < len); i = (i + 1)) {
_function(_array[i])
};
return false
}, ((typeof (_do) !== 'undefined') && _do), false, "(do <function> <array>)");
reduce1 = exports.reduce1 = _PE_makeFunction("reduce1", function __method__ (_function, _array) {
var _31 = [].slice.call(arguments, 2);
var fromEnd_W_;
for (var _34 = 0; (_34 < _31.length); _34 = (_34 + 2)) {
var _32 = _31[_34];
var _33 = _31[(_34 + 1)];
if (true_W_(keyword_W_(_32))) {
(function _117__lambda () {
var _35 = _32;
return (true_W_((_4 = (_35 == _k('from-end?')), (true_W_(_4) ? _4 : false))) ? fromEnd_W_ = _33 : false)
})()
}
};
return _array[(true_W_(fromEnd_W_) ? "reduceRight" : "reduce")](function _118__lambda (previous, current) {
return _function(previous, current)
})
}, ((typeof (reduce1) !== 'undefined') && reduce1), false, "(reduce1 <function> <array> #key from-end?)");
reduce = exports.reduce = _PE_makeFunction("reduce", function __method__ (_function, initialValue, _array) {
var _36 = [].slice.call(arguments, 3);
var fromEnd_W_;
for (var _39 = 0; (_39 < _36.length); _39 = (_39 + 2)) {
var _37 = _36[_39];
var _38 = _36[(_39 + 1)];
if (true_W_(keyword_W_(_37))) {
(function _119__lambda () {
var _40 = _37;
return (true_W_((_4 = (_40 == _k('from-end?')), (true_W_(_4) ? _4 : false))) ? fromEnd_W_ = _38 : false)
})()
}
};
return _array[(true_W_(fromEnd_W_) ? "reduceRight" : "reduce")](function _120__lambda (previous, current) {
return _function(previous, current)
}, initialValue)
}, ((typeof (reduce) !== 'undefined') && reduce), false, "(reduce <function> <object> <array> #key from-end?)");
every_W_ = exports.every_W_ = _PE_makeFunction("every_W_", function __method__ (_function, _array) {
return _array.every(function _121__lambda (element) {
return true_W_(_function(element))
})
}, ((typeof (every_W_) !== 'undefined') && every_W_), false, "(every? <function> <array>)");
choose = exports.choose = _PE_makeFunction("choose", function __method__ (_function, _array) {
return _array.filter(function _122__lambda (element) {
return true_W_(_function(element))
})
}, ((typeof (choose) !== 'undefined') && choose), false, "(choose <function> <array>)");
_PE_notFound = {};
findKey = exports.findKey = _PE_makeFunction("findKey", function __method__ (_array, predicate) {
var _41 = [].slice.call(arguments, 2);
var skip = 0;
var failure;
var fromEnd_W_;
for (var _44 = 0; (_44 < _41.length); _44 = (_44 + 2)) {
var _42 = _41[_44];
var _43 = _41[(_44 + 1)];
if (true_W_(keyword_W_(_42))) {
(function _123__lambda () {
var _45 = _42;
return (true_W_((_4 = (_45 == _k('skip')), (true_W_(_4) ? _4 : false))) ? skip = _43 : (true_W_((_4 = (_45 == _k('failure')), (true_W_(_4) ? _4 : false))) ? failure = _43 : (true_W_((_4 = (_45 == _k('from-end?')), (true_W_(_4) ? _4 : false))) ? fromEnd_W_ = _43 : false)))
})()
}
};
return (function _124__lambda (keys, satisfyingKeys) {
keys = keys(_array);
satisfyingKeys = choose(function _125__lambda (index) {
return predicate(element(_array, index))
}, (true_W_(fromEnd_W_) ? reverse(keys) : keys));
return (_4 = element(satisfyingKeys, skip), (true_W_(_4) ? _4 : (_4 = failure, (true_W_(_4) ? _4 : false))))
})(((typeof (keys) !== 'undefined') && keys), false)
}, ((typeof (findKey) !== 'undefined') && findKey), false, "(find-key <array> <function> #key skip failure from-end?)");
position = exports.position = _PE_makeFunction("position", function __method__ (_array, element) {
var position = _array.indexOf(element);
return ((position > -1) ? position : false)
}, ((typeof (position) !== 'undefined') && position), false, "(position <array> <object>)");
lastPosition = exports.lastPosition = _PE_makeFunction("lastPosition", function __method__ (_array, element) {
var position = _array.lastIndexOf(element);
return ((position > -1) ? position : false)
}, ((typeof (lastPosition) !== 'undefined') && lastPosition), false, "(last-position <array> <object>)");
any_W_ = exports.any_W_ = _PE_makeFunction("any_W_", function __method__ (_function, _array) {
var match;
var found_W_ = _array.some(function _126__lambda (element) {
var result = _function(element);
match = result;
return result
});
return (found_W_ ? match : false)
}, ((typeof (any_W_) !== 'undefined') && any_W_), false, "(any? <function> <array>)");
member_W_ = exports.member_W_ = _PE_makeFunction("member_W_", function __method__ (value, _array) {
var _46 = [].slice.call(arguments, 2);
var test = _E__E_;
for (var _49 = 0; (_49 < _46.length); _49 = (_49 + 2)) {
var _47 = _46[_49];
var _48 = _46[(_49 + 1)];
if (true_W_(keyword_W_(_47))) {
(function _127__lambda () {
var _50 = _47;
return (true_W_((_4 = (_50 == _k('test')), (true_W_(_4) ? _4 : false))) ? test = _48 : false)
})()
}
};
return any_W_(function _128__lambda (otherValue) {
return test(value, otherValue)
}, _array)
}, ((typeof (member_W_) !== 'undefined') && member_W_), false, "(member? <object> <array> #key test)");
chooseBy = exports.chooseBy = _PE_makeFunction("chooseBy", function __method__ (predicate, testArray, valueArray) {
return (function _129__lambda (testKeys) {
testKeys = choose(function _130__lambda (testKey) {
return predicate(element(testArray, testKey))
}, keys(testArray));
return map(curry(element, valueArray), testArray)
})()
}, ((typeof (chooseBy) !== 'undefined') && chooseBy), false, "(choose-by <function> <array> <array>)");
first = exports.first = _PE_makeFunction("first", function __method__ (_array) {
return _array[0]
}, ((typeof (first) !== 'undefined') && first), false, "(first <array>)");
_SET_first = exports._SET_first = _PE_makeFunction("_SET_first", function __method__ (_array, value) {
return _array[0] = value
}, ((typeof (_SET_first) !== 'undefined') && _SET_first), true, "((setter first) <array> <object>)");
second = exports.second = _PE_makeFunction("second", function __method__ (_array) {
return _array[1]
}, ((typeof (second) !== 'undefined') && second), false, "(second <array>)");
_SET_second = exports._SET_second = _PE_makeFunction("_SET_second", function __method__ (_array, value) {
return _array[1] = value
}, ((typeof (_SET_second) !== 'undefined') && _SET_second), true, "((setter second) <array> <object>)");
third = exports.third = _PE_makeFunction("third", function __method__ (_array) {
return _array[2]
}, ((typeof (third) !== 'undefined') && third), false, "(third <array>)");
_SET_third = exports._SET_third = _PE_makeFunction("_SET_third", function __method__ (_array, value) {
return _array[2] = value
}, ((typeof (_SET_third) !== 'undefined') && _SET_third), true, "((setter third) <array> <object>)");
last = exports.last = _PE_makeFunction("last", function __method__ (_array) {
return _array[((_4 = _array, ((true_W_(_4) && _4.length) || 0)) - 1)]
}, ((typeof (last) !== 'undefined') && last), false, "(last <array>)");
_SET_last = exports._SET_last = _PE_makeFunction("_SET_last", function __method__ (_array, value) {
return _array[((_4 = _array, ((true_W_(_4) && _4.length) || 0)) - 1)] = value
}, ((typeof (_SET_last) !== 'undefined') && _SET_last), true, "((setter last) <array> <object>)");
rest = exports.rest = _PE_makeFunction("rest", function __method__ (_array) {
return _array.slice(1)
}, ((typeof (rest) !== 'undefined') && rest), false, "(rest <array>)");
butLast = exports.butLast = _PE_makeFunction("butLast", function __method__ (_array, n) {
return _array.slice(0, ((n || 1) * -1))
}, ((typeof (butLast) !== 'undefined') && butLast), false, "(but-last <array> <object>)");
replaceSubsequence = exports.replaceSubsequence = _PE_makeFunction("replaceSubsequence", function __method__ (targetArray, insertArray) {
var _51 = [].slice.call(arguments, 2);
var start = 0;
var end = (_4 = targetArray, ((true_W_(_4) && _4.length) || 0));
for (var _54 = 0; (_54 < _51.length); _54 = (_54 + 2)) {
var _52 = _51[_54];
var _53 = _51[(_54 + 1)];
if (true_W_(keyword_W_(_52))) {
(function _131__lambda () {
var _55 = _52;
return (true_W_((_4 = (_55 == _k('start')), (true_W_(_4) ? _4 : false))) ? start = _53 : (true_W_((_4 = (_55 == _k('end')), (true_W_(_4) ? _4 : false))) ? end = _53 : false))
})()
}
};
return concatenate(targetArray.slice(0, start), insertArray, targetArray.slice(end))
}, ((typeof (replaceSubsequence) !== 'undefined') && replaceSubsequence), false, "(replace-subsequence <array> <array> #key start end)");
replaceSubsequence_B_ = exports.replaceSubsequence_B_ = _PE_makeFunction("replaceSubsequence_B_", function __method__ (targetArray, insertArray) {
var _56 = [].slice.call(arguments, 2);
var start = 0;
var end;
for (var _59 = 0; (_59 < _56.length); _59 = (_59 + 2)) {
var _57 = _56[_59];
var _58 = _56[(_59 + 1)];
if (true_W_(keyword_W_(_57))) {
(function _132__lambda () {
var _60 = _57;
return (true_W_((_4 = (_60 == _k('start')), (true_W_(_4) ? _4 : false))) ? start = _58 : (true_W_((_4 = (_60 == _k('end')), (true_W_(_4) ? _4 : false))) ? end = _58 : false))
})()
}
};
[].splice.apply(targetArray, [start, ((_4 = end, (true_W_(_4) ? _4 : (_4 = start, (true_W_(_4) ? _4 : false)))) - start)].concat(insertArray));
return targetArray
}, ((typeof (replaceSubsequence_B_) !== 'undefined') && replaceSubsequence_B_), false, "(replace-subsequence! <array> <array> #key start end)");
interpose = exports.interpose = _PE_makeFunction("interpose", function __method__ (separator, _array) {
return reduce1(function _133__lambda (a, b) {
return concatenate([a, separator], b)
}, _array)
}, ((typeof (interpose) !== 'undefined') && interpose), false, "(interpose <object> <array)");
asUppercase = exports.asUppercase = _PE_makeFunction("asUppercase", function __method__ (_string) {
return _string.toUpperCase()
}, ((typeof (asUppercase) !== 'undefined') && asUppercase), false, "(as-uppercase <string>)");
asLowercase = exports.asLowercase = _PE_makeFunction("asLowercase", function __method__ (_string) {
return _string.toLowerCase()
}, ((typeof (asLowercase) !== 'undefined') && asLowercase), false, "(as-lowercase <string>)");
join = exports.join = _PE_makeFunction("join", function __method__ (_array, _string) {
return _array.join(_string)
}, ((typeof (join) !== 'undefined') && join), false, "(join <array> <string>)");
trim = exports.trim = _PE_makeFunction("trim", function __method__ (_string) {
return _string.trim()
}, ((typeof (trim) !== 'undefined') && trim), false, "(trim <string>)");
replace = exports.replace = _PE_makeFunction("replace", function __method__ (_string, pattern, replacement) {
return _string.replace(pattern, replacement)
}, ((typeof (replace) !== 'undefined') && replace), false, "(replace <string> <object> <object>)");
apply = exports.apply = _PE_makeFunction("apply", function __method__ (_function) {
var actual = [].slice.call(arguments, 1, -1);
var last = arguments[((_4 = arguments, ((true_W_(_4) && _4.length) || 0)) - 1)];
return _function.apply(null, ((last === _function) ? actual : actual.concat(last)))
}, ((typeof (apply) !== 'undefined') && apply), false, "(apply <function>)");
curry = exports.curry = _PE_makeFunction("curry", function __method__ (_function) {
var curriedArgs = [].slice.call(arguments, 1);
return function _134__lambda () {
var args = [].slice.call(arguments, 0);
return apply(_function, curriedArgs.concat(args))
}
}, ((typeof (curry) !== 'undefined') && curry), false, "(curry <function> #rest curried-args)");
rcurry = exports.rcurry = _PE_makeFunction("rcurry", function __method__ (_function) {
var curriedArgs = [].slice.call(arguments, 1);
return function _135__lambda () {
var args = [].slice.call(arguments, 0);
return apply(_function, args.concat(curriedArgs))
}
}, ((typeof (rcurry) !== 'undefined') && rcurry), false, "(rcurry <function> #rest curried-args)");
always = _PE_makeFunction("always", function __method__ (value) {
return function _136__lambda () {
return value
}
}, ((typeof (always) !== 'undefined') && always), false, "(always <object>)");
complement = exports.complement = _PE_makeFunction("complement", function __method__ (_function) {
return function _137__lambda () {
var _arguments = [].slice.call(arguments, 0);
return !true_W_(apply(_function, _arguments))
}
}, ((typeof (complement) !== 'undefined') && complement), false, "(complement <function>)");
compose = exports.compose = _PE_makeFunction("compose", function __method__ () {
var functions = [].slice.call(arguments, 0);
return (true_W_(empty_W_(functions)) ? identity : function _138__lambda () {
var _arguments = [].slice.call(arguments, 0);
return reduce(function _139__lambda (value, _function) {
return _function(value)
}, apply(last(functions), _arguments), functions.slice(0, -1), _k('from-end?'), true)
})
}, ((typeof (compose) !== 'undefined') && compose), false, "(compose #rest functions)");
type = exports.type = _PE_makeFunction("type", function __method__ (_object) {
var type;
var ralphType;
return (((_object === undefined) || (_object === null)) ? _CL_boolean : _object.constructor)
}, ((typeof (type) !== 'undefined') && type), false, "(type <object>)");
instance_W_ = exports.instance_W_ = _PE_makeFunction("instance_W_", function __method__ (_object, type) {
var ctor;
return (true_W_(_object) ? (ctor = _object.constructor, ((ctor === type) || (_object instanceof type) || (!type.hasOwnProperty("%name") && type.hasOwnProperty("name") && (ctor.name === type.name)))) : (type === _CL_boolean))
}, ((typeof (instance_W_) !== 'undefined') && instance_W_), false, "(instance? <object> <object>)");
initialize = exports.initialize = _PE_makeGeneric("initialize", "(initialize <object> #rest)");
initialize = exports.initialize = _PE_makeMethod("initialize", function __method__ (_object) {
var slots = type(_object)["%slots"];
var _arguments = asObject([].slice.call(arguments, 0).slice(1));
var value;
return (slots ? (function(){
for (var key in slots) {
if ((!true_W_(Object.prototype.hasOwnProperty(key)) && !true_W_((typeof (_object[key]) !== 'undefined')))) {
_object[key] = (_arguments.hasOwnProperty(key) ? _arguments[key] : (value = slots[key], ((value === false) ? value : value())))
}
}
})() : false)
}, _CL_object, ((typeof (initialize) !== 'undefined') && initialize), false, "(initialize <object>)");
concatenate = exports.concatenate = _PE_makeFunction("concatenate", function __method__ (_object) {
var rest = [].slice.call(arguments, 1);
return (Array.isArray(_object) ? reduce(_PE_concat, _object, rest) : reduce(function _140__lambda (current, next) {
return (current + next)
}, _object, rest))
}, ((typeof (concatenate) !== 'undefined') && concatenate), false, "(concatenate <object> #rest rest)");
description = exports.description = _PE_makeGeneric("description", "(description <object>)");
description = exports.description = _PE_makeMethod("description", function __method__ (_number) {
return ("" + _number)
}, _CL_number, ((typeof (description) !== 'undefined') && description), false, "(description <number>)");
description = exports.description = _PE_makeMethod("description", function __method__ (_string) {
var escaped = _string.replace("\"", "\\\"", "g");
return ("\"" + escaped + "\"")
}, _CL_string, ((typeof (description) !== 'undefined') && description), false, "(description <string>)");
description = exports.description = _PE_makeMethod("description", function __method__ (_array) {
return ("(" + join(map(description, _array), " ") + ")")
}, _CL_array, ((typeof (description) !== 'undefined') && description), false, "(description <array>)");
description = exports.description = _PE_makeMethod("description", function __method__ (value) {
return (true_W_(value) ? "#t" : "#f")
}, _CL_boolean, ((typeof (description) !== 'undefined') && description), false, "(description <boolean>)");
signal = exports.signal = _PE_makeFunction("signal", function __method__ (error) {
return (function(){
throw error
})()
}, ((typeof (signal) !== 'undefined') && signal), false, "(signal <error>)");
_E__E_ = exports._E__E_ = _PE_makeFunction("_E__E_", function __method__ (object1, object2) {
var moreObjects = [].slice.call(arguments, 2);
return compare(function _141__lambda (object1, object2) {
return (object1 === object2)
}, object1, object2, moreObjects)
}, ((typeof (_E__E_) !== 'undefined') && _E__E_), false, "(== <object> <object> #rest more-objects)");
compare = _PE_makeFunction("compare", function __method__ (_function, object1, object2, moreObjects) {
var _object = object1;
var remaining = [object2].concat(moreObjects);
while (!empty_W_(remaining)) {
var next = remaining[0];
if (!_function(_object, next)) {
return false
};
_object = next;
remaining = remaining.slice(1)
};
return true
}, ((typeof (compare) !== 'undefined') && compare), false, "(compare <function> <object> <object> <object>)");
binary_E_ = exports.binary_E_ = _PE_makeGeneric("binary_E_", "(binary= <object> <object>)");
binary_LT_ = exports.binary_LT_ = _PE_makeGeneric("binary_LT_", "(binary< <object> <object>)");
binary_E_ = exports.binary_E_ = _PE_makeMethod("binary_E_", function __method__ (object1, object2) {
return ((type(object1) === type(object2)) && (typeof (object2) !== 'undefined') && (object1.valueOf() === object2.valueOf()))
}, Object, ((typeof (binary_E_) !== 'undefined') && binary_E_), false, "(binary= <object> <object>)");
var binary_E_Dispatcher = binary_E_;
binary_E_ = exports.binary_E_ = _PE_makeFunction("binary_E_", function __method__ (object1, object2) {
return ((!true_W_(object1) && !true_W_(object2)) || binary_E_Dispatcher(object1, object2))
}, ((typeof (binary_E_) !== 'undefined') && binary_E_), false, "(binary= <object> <object>)");
binary_E_["%generic?"] = true;
binary_E_["%name"] = binary_E_Dispatcher["%name"];
binary_E_.displayName = binary_E_Dispatcher.displayName;
binary_LT_ = exports.binary_LT_ = _PE_makeMethod("binary_LT_", function __method__ (object1, object2) {
return ((type(object1) === type(object2)) && (object1 < object2))
}, Object, ((typeof (binary_LT_) !== 'undefined') && binary_LT_), false, "(binary< <object> <object>)");
binary_E_ = exports.binary_E_ = _PE_makeMethod("binary_E_", function __method__ (array1, array2) {
return (((_4 = array1, ((true_W_(_4) && _4.length) || 0)) === (_4 = array2, ((true_W_(_4) && _4.length) || 0))) && !(function _142__lambda () {
var item1;
var item2;
var _61 = array1;
var _62 = array2;
while (true) {
if (any_W_(empty_W_, [_61, _62])) {
return false
};
item1 = _61[0];
item2 = _62[0];
if (!binary_E_(item1, item2)) {
return true
};
_61 = _61.slice(1);
_62 = _62.slice(1)
}
})())
}, _CL_array, ((typeof (binary_E_) !== 'undefined') && binary_E_), false, "(binary= <array> <array>)");
_E_ = exports._E_ = _PE_makeFunction("_E_", function __method__ (object1, object2) {
var moreObjects = [].slice.call(arguments, 2);
return compare(binary_E_, object1, object2, moreObjects)
}, ((typeof (_E_) !== 'undefined') && _E_), false, "(= <object> <object> #rest more-objects)");
_LT_ = exports._LT_ = _PE_makeFunction("_LT_", function __method__ (object1, object2) {
var moreObjects = [].slice.call(arguments, 2);
return compare(binary_LT_, object1, object2, moreObjects)
}, ((typeof (_LT_) !== 'undefined') && _LT_), false, "(< <object> <object> #rest more-objects)");
binary_LT__E_ = exports.binary_LT__E_ = _PE_makeFunction("binary_LT__E_", function __method__ (object1, object2) {
return (binary_LT_(object1, object2) || binary_E_(object1, object2))
}, ((typeof (binary_LT__E_) !== 'undefined') && binary_LT__E_), false, "(binary<= <object> <object>)");
_LT__E_ = exports._LT__E_ = _PE_makeFunction("_LT__E_", function __method__ (object1, object2) {
var moreObjects = [].slice.call(arguments, 2);
return compare(binary_LT__E_, object1, object2, moreObjects)
}, ((typeof (_LT__E_) !== 'undefined') && _LT__E_), false, "(<= <object> <object> #rest more-objects)");
binary_GT_ = exports.binary_GT_ = _PE_makeFunction("binary_GT_", function __method__ (object1, object2) {
return ((true_W_(object1) && true_W_(object2)) ? (!binary_LT_(object1, object2) && !binary_E_(object1, object2)) : false)
}, ((typeof (binary_GT_) !== 'undefined') && binary_GT_), false, "(binary> <object> <object>)");
_GT_ = exports._GT_ = _PE_makeFunction("_GT_", function __method__ (object1, object2) {
var moreObjects = [].slice.call(arguments, 2);
return compare(binary_GT_, object1, object2, moreObjects)
}, ((typeof (_GT_) !== 'undefined') && _GT_), false, "(> <object> <object> #rest more-objects)");
binary_GT__E_ = exports.binary_GT__E_ = _PE_makeFunction("binary_GT__E_", function __method__ (object1, object2) {
return (!binary_LT_(object1, object2) || binary_E_(object1, object2))
}, ((typeof (binary_GT__E_) !== 'undefined') && binary_GT__E_), false, "(binary>= <object> <object>)");
_GT__E_ = exports._GT__E_ = _PE_makeFunction("_GT__E_", function __method__ (object1, object2) {
var moreObjects = [].slice.call(arguments, 2);
return compare(binary_GT__E_, object1, object2, moreObjects)
}, ((typeof (_GT__E_) !== 'undefined') && _GT__E_), false, "(>= <object> <object> #rest more-objects)");
makeObject = exports.makeObject = _PE_makeFunction("makeObject", function __method__ () {
var keyVals = [].slice.call(arguments, 0);
return (function _143__lambda (_object) {
_object = {};
return (function _144__lambda (i) {
i = 0;
while (!true_W_(binary_GT__E_(i, (_4 = keyVals, ((true_W_(_4) && _4.length) || 0))))) {
(function _145__lambda (i) {
return _object[(_4 = keyVals, _5 = i, (_4 && _4.hasOwnProperty(_5) && _4[_5]))] = (_4 = keyVals, _5 = (i + 1), (_4 && _4.hasOwnProperty(_5) && _4[_5]))
})(i);
i = (i + 2)
};
return _object
})()
})()
}, ((typeof (makeObject) !== 'undefined') && makeObject), false, "(make-object #rest key-vals)");
_CL_hashSymbol = exports._CL_hashSymbol = _PE_makeClass("_CL_hashSymbol", false, {"name":false});
_key = exports._key = make(_CL_hashSymbol, _k('name'), "key");
_rest = exports._rest = make(_CL_hashSymbol, _k('name'), "rest");
_CL_symbol = exports._CL_symbol = _PE_makeClass("_CL_symbol", false, {"name":false});
_PE_symbols = {};
symbol = exports.symbol = _PE_makeFunction("symbol", function __method__ (name) {
return (function _146__lambda (name) {
name = asLowercase(name);
return (_4 = (_4 = _PE_symbols, _5 = name, (_4 && _4.hasOwnProperty(_5) && _4[_5])), (true_W_(_4) ? _4 : (_4 = _PE_symbols[name] = make(_CL_symbol, _k('name'), name), (true_W_(_4) ? _4 : false))))
})(((typeof (name) !== 'undefined') && name))
}, ((typeof (symbol) !== 'undefined') && symbol), false, "(symbol <object>)");
_s = exports._s = symbol;
description = exports.description = _PE_makeMethod("description", function __method__ (symbol) {
return (_4 = symbol, _5 = "name", (_4 && _4.hasOwnProperty(_5) && _4[_5]))
}, _CL_symbol, ((typeof (description) !== 'undefined') && description), false, "(description <symbol>)");
description = exports.description = _PE_makeMethod("description", function __method__ (keyword) {
return (symbolName(keyword) + ":")
}, _CL_keyword, ((typeof (description) !== 'undefined') && description), false, "(description <keyword>)");
description = exports.description = _PE_makeMethod("description", function __method__ (symbol) {
return ("#" + symbolName(symbol))
}, _CL_hashSymbol, ((typeof (description) !== 'undefined') && description), false, "(description <hash-symbol>)");
identity = exports.identity = _PE_makeFunction("identity", function __method__ (value) {
return value
}, ((typeof (identity) !== 'undefined') && identity), false, "(identity <object>)");
repeatedly = exports.repeatedly = _PE_makeFunction("repeatedly", function __method__ (_function, count) {
return (function _147__lambda (result) {
result = [];
return (function _148__lambda (i, _63) {
i = 0;
_63 = count;
while (!true_W_((i >= _63))) {
(function _149__lambda (i, _63) {
return (result.push(_function()), result)
})(i, _63);
var _64 = (i + 1);
var _65 = _63;
i = _64;
_63 = _65
};
return result
})()
})()
}, ((typeof (repeatedly) !== 'undefined') && repeatedly), false, "(repeatedly <function> <integer>)");
min = exports.min = Math.min;
max = exports.max = Math.max;
abs = exports.abs = Math.abs;
round = exports.round = Math.round;
floor = exports.floor = Math.floor;
ceil = exports.ceil = Math.ceil;
sin = exports.sin = Math.sin;
cos = exports.cos = Math.cos;
atan2 = exports.atan2 = Math.atan2;
expt = exports.expt = Math.pow;
sqrt = exports.sqrt = Math.sqrt;
mod = exports.mod = _PE_makeFunction("mod", function __method__ (number1, number2) {
return (number1 % number2)
}, ((typeof (mod) !== 'undefined') && mod), false, "(mod <object> <object>)");
PI = exports.PI = Math.PI;
asRadiant = exports.asRadiant = _PE_makeFunction("asRadiant", function __method__ (_number) {
return (_number * (PI / 180))
}, ((typeof (asRadiant) !== 'undefined') && asRadiant), false, "(as-radiant <object>)");
remove_B_ = exports.remove_B_ = _PE_makeFunction("remove_B_", function __method__ (_array, value) {
var _66 = [].slice.call(arguments, 2);
var test = _E__E_;
for (var _69 = 0; (_69 < _66.length); _69 = (_69 + 2)) {
var _67 = _66[_69];
var _68 = _66[(_69 + 1)];
if (true_W_(keyword_W_(_67))) {
(function _150__lambda () {
var _70 = _67;
return (true_W_((_4 = (_70 == _k('test')), (true_W_(_4) ? _4 : false))) ? test = _68 : false)
})()
}
};
var key = findKey(_array, curry(test, value));
if (true_W_(key)) {
_array.splice(key, 1)
};
return _array
}, ((typeof (remove_B_) !== 'undefined') && remove_B_), false, "(remove! <array> <object> #key test)");
remove = exports.remove = _PE_makeFunction("remove", function __method__ (_array, value) {
var _71 = [].slice.call(arguments, 2);
var test = _E__E_;
for (var _74 = 0; (_74 < _71.length); _74 = (_74 + 2)) {
var _72 = _71[_74];
var _73 = _71[(_74 + 1)];
if (true_W_(keyword_W_(_72))) {
(function _151__lambda () {
var _75 = _72;
return (true_W_((_4 = (_75 == _k('test')), (true_W_(_4) ? _4 : false))) ? test = _73 : false)
})()
}
};
return remove_B_(_array.slice(), value, _k('test'), test)
}, ((typeof (remove) !== 'undefined') && remove), false, "(remove <array> <object> #key test)");
extend_B_ = exports.extend_B_ = _PE_makeFunction("extend_B_", function __method__ (object1, object2) {
(function _152__lambda (_77, _78) {
_77 = keys(object2);
_78 = (_4 = _77, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _76 = 0; (_76 < _78); _76 = (_76 + 1)) {
var key = _77[_76];
(function _153__lambda (key) {
object1[key] = (_4 = object2, _5 = key, (_4 && _4.hasOwnProperty(_5) && _4[_5]))
})(key)
}
})()
})(((typeof (_77) !== 'undefined') && _77), false);
return object1
}, ((typeof (extend_B_) !== 'undefined') && extend_B_), false, "(extend! <object> <object>)");
asPropertyList = exports.asPropertyList = _PE_makeFunction("asPropertyList", function __method__ (_object) {
var _79 = [].slice.call(arguments, 1);
var keywords_W_;
for (var _82 = 0; (_82 < _79.length); _82 = (_82 + 2)) {
var _80 = _79[_82];
var _81 = _79[(_82 + 1)];
if (true_W_(keyword_W_(_80))) {
(function _154__lambda () {
var _83 = _80;
return (true_W_((_4 = (_83 == _k('keywords?')), (true_W_(_4) ? _4 : false))) ? keywords_W_ = _81 : false)
})()
}
};
var result = [];
(function _155__lambda (_85, _86) {
_85 = keys(_object);
_86 = (_4 = _85, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _84 = 0; (_84 < _86); _84 = (_84 + 1)) {
var key = _85[_84];
(function _156__lambda (key) {
result.push((true_W_(keywords_W_) ? keyword(key.toString()) : key));
result;
result.push((_4 = _object, _5 = key, (_4 && _4.hasOwnProperty(_5) && _4[_5])));
result
})(key)
}
})()
})(((typeof (_85) !== 'undefined') && _85), false);
return result
}, ((typeof (asPropertyList) !== 'undefined') && asPropertyList), false, "(as-property-list <object> #key keywords?)");
asAssociationList = exports.asAssociationList = _PE_makeFunction("asAssociationList", function __method__ (_object) {
var _87 = [].slice.call(arguments, 1);
var keywords_W_;
for (var _90 = 0; (_90 < _87.length); _90 = (_90 + 2)) {
var _88 = _87[_90];
var _89 = _87[(_90 + 1)];
if (true_W_(keyword_W_(_88))) {
(function _157__lambda () {
var _91 = _88;
return (true_W_((_4 = (_91 == _k('keywords?')), (true_W_(_4) ? _4 : false))) ? keywords_W_ = _89 : false)
})()
}
};
var result = [];
(function _158__lambda (_93, _94) {
_93 = keys(_object);
_94 = (_4 = _93, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _92 = 0; (_92 < _94); _92 = (_92 + 1)) {
var key = _93[_92];
(function _159__lambda (key) {
result.push([(true_W_(keywords_W_) ? keyword(key.toString()) : key), (_4 = _object, _5 = key, (_4 && _4.hasOwnProperty(_5) && _4[_5]))]);
result
})(key)
}
})()
})(((typeof (_93) !== 'undefined') && _93), false);
return result
}, ((typeof (asAssociationList) !== 'undefined') && asAssociationList), false, "(as-association-list <object> #key keywords?)");
startsWith_W_ = exports.startsWith_W_ = _PE_makeFunction("startsWith_W_", function __method__ (_string, prefix) {
return (_string.indexOf(prefix) === 0)
}, ((typeof (startsWith_W_) !== 'undefined') && startsWith_W_), false, "(starts-with? <string> <string>)");
even_W_ = exports.even_W_ = _PE_makeFunction("even_W_", function __method__ (_number) {
return ((_number % 2) === 0)
}, ((typeof (even_W_) !== 'undefined') && even_W_), false, "(even? <object>)");
odd_W_ = exports.odd_W_ = _PE_makeFunction("odd_W_", function __method__ (_number) {
return ((_number % 2) === 1)
}, ((typeof (odd_W_) !== 'undefined') && odd_W_), false, "(odd? <object>)");
groupBy = exports.groupBy = _PE_makeFunction("groupBy", function __method__ (predicate, items) {
return reduce(function _160__lambda (result, item) {
(function _161__lambda (key) {
key = predicate(item);
return (true_W_(result.hasOwnProperty(key)) ? (_4 = (_4 = result, _5 = key, (_4 && _4.hasOwnProperty(_5) && _4[_5])), _4.push(item), _4) : result[key] = [item])
})();
return result
}, {}, items)
}, ((typeof (groupBy) !== 'undefined') && groupBy), false, "(group-by <object> <object>)");
wrapObject = exports.wrapObject = _PE_makeFunction("wrapObject", function __method__ (_object) {
var rest = [].slice.call(arguments, 1);
return (function _162__lambda (result) {
result = Object.create(_object);
extend_B_(result, asObject(rest));
return result
})()
}, ((typeof (wrapObject) !== 'undefined') && wrapObject), false, "(wrap-object <object> #rest rest)");
unwrapObject = exports.unwrapObject = _PE_makeFunction("unwrapObject", function __method__ (_object) {
return _object.__proto__
}, ((typeof (unwrapObject) !== 'undefined') && unwrapObject), false, "(unwrap-object <object>)")
})()