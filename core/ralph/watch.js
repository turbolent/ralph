(function _6__lambda (_4, _5) {
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
watch = exports.watch = _PE_makeFunction("watch", function __method__ (_object, property, handler) {
if (true_W_(Object.prototype.watch)) {
_object.watch(property, handler)
} else {
(function _7__lambda (oldValue, currentValue) {
oldValue = (_4 = _object, _5 = property, (_4 && _4.hasOwnProperty(_5) && _4[_5]));
currentValue = oldValue;
return (function _8__lambda (getter, setter) {
getter = function getter () {
return currentValue
};
setter = function setter (value) {
oldValue = currentValue;
currentValue = value;
handler(property, oldValue, currentValue);
return currentValue
};
return (true_W_((delete (_object[property]))) ? (true_W_(Object.defineProperty) ? Object.defineProperty(_object, property, {"get":getter,
"set":setter}) : (true_W_(((true_W_(Object.prototype.__defineGetter__)) ? js_C_idenfifier("Object.prototype.__defineSetter__") : false)) ? (_object.__defineGetter__(property, getter), _object.__defineSetter__(property, setter)) : false)) : false)
})(((typeof (getter) !== 'undefined') && getter), ((typeof (setter) !== 'undefined') && setter))
})()
};
return _object
}, ((typeof (watch) !== 'undefined') && watch), false, "(watch <object> <object> <object>)");
unwatch = exports.unwatch = _PE_makeFunction("unwatch", function __method__ (_object, property) {
if (true_W_(Object.prototype.unwatch)) {
_object.unwatch(property)
} else {
(function _9__lambda (value) {
value = _object[property];
(delete (_object[property]));
return _object[property] = value
})()
};
return _object
}, ((typeof (unwatch) !== 'undefined') && unwatch), false, "(unwatch <object> <object>)")
})()