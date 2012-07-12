(function _85__lambda (_4, _18) {
var MODULE = this;
var _3 = ["ralph/core", "ralph/format", "ralph/regexp", "ralph/reader"];
for (var _2 = 0; (_2 < 4); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
s = symbol;
TYPENAME_GT_CONSTRUCTORNAME = {"<string>":"String",
"<number>":"Number",
"<boolean>":"Boolean"};
setterName_W_ = _PE_makeFunction("setterName_W_", function __method__ (name) {
return ((true_W_(Array.isArray(name)) && true_W_(((_4 = name, ((true_W_(_4) && _4.length) || 0)) === 2))) ? (name[0] === s("setter")) : false)
}, ((typeof (setterName_W_) !== 'undefined') && setterName_W_), false, "(setter-name? <object>)");
source = _PE_makeFunction("source", function __method__ (form) {
return (function _86__lambda (_5) {
var source = _5.source;
var startIndex = _5["start-index"];
var endIndex = _5["end-index"];
return source.slice(startIndex, endIndex)
})(form)
}, ((typeof (source) !== 'undefined') && source), false, "(source <object>)");
prependReturn = _PE_makeFunction("prependReturn", function __method__ (forms) {
return concatenate(forms.slice(0, -1), [(function _87__lambda (tail) {
tail = last(forms);
return (true_W_(((true_W_(tail)) ? (tail[0] === s("js:return")) : false)) ? last(forms) : [symbol("js:return"), tail])
})()])
}, ((typeof (prependReturn) !== 'undefined') && prependReturn), false, "(prepend-return <object>)");
argumentNames = _PE_makeFunction("argumentNames", function __method__ (_arguments) {
return map(function _88__lambda (argument) {
return (true_W_(Array.isArray(argument)) ? argument[0] : argument)
}, _arguments)
}, ((typeof (argumentNames) !== 'undefined') && argumentNames), false, "(argument-names <object>)");
requiredArguments = _PE_makeFunction("requiredArguments", function __method__ (_arguments) {
return (function _89__lambda (length) {
length = (_4 = _arguments, ((true_W_(_4) && _4.length) || 0));
return (function _90__lambda (position) {
position = function position (hashSymbol) {
return findKey(_arguments, curry(_E_, hashSymbol), _k('failure'), length)
};
return _arguments.slice(0, apply(min, length, map(position, [_key, _rest])))
})(((typeof (position) !== 'undefined') && position))
})()
}, ((typeof (requiredArguments) !== 'undefined') && requiredArguments), false, "(required-arguments <object>)");
uses_W_ = _PE_makeFunction("uses_W_", function __method__ (form, symbol) {
return (true_W_(Array.isArray(form)) ? any_W_(rcurry(uses_W_, symbol), form) : (form === symbol))
}, ((typeof (uses_W_) !== 'undefined') && uses_W_), false, "(uses? <object> <object>)");
functionDeclaration = _PE_makeFunction("functionDeclaration", function __method__ (name, _arguments, body) {
return (function _91__lambda (position) {
position = function position (symbol) {
return findKey(_arguments, curry(_E_, symbol))
};
return (function _92__lambda (required, body, restPosition, keyPosition, rest_SL_keyCode) {
required = requiredArguments(_arguments);
body = (true_W_(((true_W_(binary_GT_((_4 = body, ((true_W_(_4) && _4.length) || 0)), 1))) ? instance_W_(body[0], _CL_string) : false)) ? body.slice(1) : body);
restPosition = position(_rest);
keyPosition = position(_key);
rest_SL_keyCode = [];
if (true_W_((_4 = restPosition, (true_W_(_4) ? _4 : (_4 = keyPosition, (true_W_(_4) ? _4 : false)))))) {
(function _93__lambda (restVar) {
restVar = (true_W_(restPosition) ? element(_arguments, (restPosition + 1)) : generateSymbol());
rest_SL_keyCode.push([symbol("js:var"), restVar, [symbol("as-array"), symbol("js:arguments"), (_4 = required, ((true_W_(_4) && _4.length) || 0))]]);
rest_SL_keyCode;
return (true_W_(keyPosition) ? ((true_W_(((true_W_(restPosition)) ? binary_LT_(keyPosition, restPosition) : false)) ? signal(make(_CL_error, _k('message'), "#key should appear after #rest")) : false), apply(function _94__lambda (keyVar, valueVar, indexVar) {
return (function _95__lambda (setterCode) {
setterCode = [symbol("select"), keyVar, symbol("js:==")];
(function _96__lambda (_7, _8) {
_7 = _arguments.slice((keyPosition + 1));
_8 = (_4 = _7, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _6 = 0; (_6 < _8); _6 = (_6 + 1)) {
var key = _7[_6];
(function _97__lambda (key) {
apply(function _98__lambda (name, _default) {
rest_SL_keyCode.push([symbol("js:var"), name, _default]);
rest_SL_keyCode;
return (setterCode.push([[keyword(symbolName(name))], [symbol("js:set"), name, valueVar]]), setterCode)
}, (true_W_(Array.isArray(key)) ? key : [key, false]))
})(key)
}
})()
})(((typeof (_7) !== 'undefined') && _7), false);
return (rest_SL_keyCode.push([symbol("js:for"), [[[indexVar, 0], [symbol("js:<"), indexVar, [symbol("js:get-property"), restVar, "length"]], [symbol("js:+"), indexVar, 2]]], [symbol("js:var"), keyVar, [symbol("js:get-property"), restVar, indexVar]], [symbol("js:var"), valueVar, [symbol("js:get-property"), restVar, [symbol("js:+"), indexVar, 1]]], [symbol("when"), [symbol("keyword?"), keyVar], setterCode]]), rest_SL_keyCode)
})()
}, repeatedly(generateSymbol, 3))) : false)
})()
};
return [symbol("js:function"), (_4 = name, (true_W_(_4) ? _4 : (_4 = s("js:null"), (true_W_(_4) ? _4 : false)))), argumentNames(required), concatenate([symbol("begin")], rest_SL_keyCode, prependReturn(body))]
})(false, ((typeof (body) !== 'undefined') && body), false, false, false)
})(((typeof (position) !== 'undefined') && position))
}, ((typeof (functionDeclaration) !== 'undefined') && functionDeclaration), false, "(function-declaration <object> <object> <object>)");
displayName = _PE_makeFunction("displayName", function __method__ (name, _arguments) {
var _9 = [].slice.call(arguments, 2);
var setter_W_;
for (var _12 = 0; (_12 < _9.length); _12 = (_12 + 2)) {
var _10 = _9[_12];
var _11 = _9[(_12 + 1)];
if (true_W_(keyword_W_(_10))) {
(function _99__lambda () {
var _13 = _10;
return (true_W_((_4 = (_13 == _k('setter?')), (true_W_(_4) ? _4 : false))) ? setter_W_ = _11 : false)
})()
}
};
return ("(" + (true_W_(setter_W_) ? ("(setter " + symbolName(name) + ")") : symbolName(name)) + (function _100__lambda (specializers_W_) {
specializers_W_ = true;
return join(map(function _101__lambda (argument) {
return (" " + (true_W_(specializers_W_) ? (true_W_((_4 = (argument === _key), (true_W_(_4) ? _4 : (_4 = (argument === _rest), (true_W_(_4) ? _4 : false))))) ? (specializers_W_ = false, ("#" + symbolName(argument))) : (true_W_(Array.isArray(argument)) ? symbolName(argument[1]) : "<object>")) : symbolName((true_W_(Array.isArray(argument)) ? argument[0] : argument))))
}, _arguments), "")
})() + ")")
}, ((typeof (displayName) !== 'undefined') && displayName), false, "(display-name <object> <object> #key setter?)");
setterSymbol = _PE_makeFunction("setterSymbol", function __method__ (symbol) {
return (function _102__lambda (result) {
result = make(_CL_symbol, _k('name'), ("_SET_" + escapeSymbol(symbol)));
result["generated?"] = true;
return result
})()
}, ((typeof (setterSymbol) !== 'undefined') && setterSymbol), false, "(setter-symbol <object>)");
requestTemporaries = _PE_makeFunction("requestTemporaries", function __method__ (environment, count) {
return (function _103__lambda (_14) {
var temporaries = _14.temporaries;
var postProcessors = _14["post-processors"];
if (true_W_(empty_W_(temporaries))) {
postProcessors.unshift(function _104__lambda (form) {
return [[symbol("js:function"), symbol("js:null"), temporaries, form]]
});
postProcessors
};
if (true_W_(binary_LT_((_4 = temporaries, ((true_W_(_4) && _4.length) || 0)), count))) {
(function _105__lambda (__, _15) {
__ = 0;
_15 = (count - (_4 = temporaries, ((true_W_(_4) && _4.length) || 0)));
while (!true_W_((__ >= _15))) {
(function _106__lambda (__, _15) {
return (temporaries.push(generateSymbol()), temporaries)
})(__, _15);
var _16 = (__ + 1);
var _17 = _15;
__ = _16;
_15 = _17
};
return false
})()
};
return temporaries
})(environment)
}, ((typeof (requestTemporaries) !== 'undefined') && requestTemporaries), false, "(request-temporaries <object> <object>)");
MACROS = {"define-macro":function _107__lambda (environment, name, _arguments) {
var body = [].slice.call(arguments, 3);
(function _108__lambda (compiled) {
compiled = compile(concatenate([symbol("method"), concatenate([s("*environment*")], _arguments)], body));
return _SET_get(environment, "macros", symbolName(name), eval(("(" + compiled + ")")))
})();
return false
},
"%backquote":function _109__lambda (__, form) {
return (function _110__lambda (transform) {
transform = function transform (form) {
return (true_W_(((true_W_(Array.isArray(form))) ? !true_W_(empty_W_(form)) : false)) ? (true_W_((symbolName(form[0]) === "%comma")) ? form[1] : concatenate([symbol("make-array")], map(transform, form))) : (true_W_(instance_W_(form, _CL_symbol)) ? [symbol("symbol"), symbolName(form)] : form))
};
return transform(form)
})(((typeof (transform) !== 'undefined') && transform))
},
"%comma":function _111__lambda (__, value) {
console.error("COMMA", value);
return signal(make(_CL_error, _k('message'), formatToString("comma not inside backquote: %d:%d", (_4 = value, _18 = "start-line", (_4 && _4.hasOwnProperty(_18) && _4[_18])), (_4 = value, _18 = "start-column", (_4 && _4.hasOwnProperty(_18) && _4[_18])))))
},
"%array":function _112__lambda (__) {
var values = [].slice.call(arguments, 1);
return concatenate([symbol("js:array")], values)
},
"%parallel-set":function _113__lambda (__) {
var clauses = [].slice.call(arguments, 1);
return (function _114__lambda (tempClauses, setClauses) {
tempClauses = [];
setClauses = [];
return (true_W_(binary_GT_((_4 = clauses, ((true_W_(_4) && _4.length) || 0)), 2)) ? ((function _115__lambda (i) {
i = 0;
while (!true_W_(binary_GT__E_(i, (_4 = clauses, ((true_W_(_4) && _4.length) || 0))))) {
(function _116__lambda (i) {
return (function _117__lambda (temp) {
temp = generateSymbol();
tempClauses.push([symbol("js:var"), temp, element(clauses, (i + 1))]);
tempClauses;
return (setClauses.push([symbol("js:set"), element(clauses, i), temp]), setClauses)
})()
})(i);
i = (i + 2)
};
return false
})(), concatenate([symbol("begin")], tempClauses, setClauses)) : concatenate([symbol("js:set")], clauses))
})()
},
"define":function _118__lambda (environment, name, value) {
return (function _119__lambda (escaped, inlined) {
escaped = (true_W_(instance_W_(name, _CL_symbol)) ? escapeSymbol(name) : name);
inlined = (true_W_(instance_W_(name, _CL_string)) ? [symbol("js:inline"), name] : name);
(function _120__lambda (_19) {
var definitions = _19.definitions;
return (!true_W_(member_W_(inlined, definitions)) ? (definitions.push(inlined), definitions) : false)
})(environment);
return [symbol("js:set"), inlined, (true_W_(member_W_(escaped, (_4 = environment, _18 = "exports", (_4 && _4.hasOwnProperty(_18) && _4[_18])), _k('test'), _E_)) ? [symbol("set!"), [symbol("js:get-property"), symbol("exports"), escaped], value] : value)]
})()
},
"if":function _121__lambda (__, test, then, _else) {
return [symbol("js:if"), [symbol("true?"), test], then, _else]
},
"when":function _122__lambda (__, test) {
var body = [].slice.call(arguments, 2);
return [symbol("if"), test, concatenate([symbol("begin")], body), false]
},
"unless":function _123__lambda (__, test) {
var body = [].slice.call(arguments, 2);
return [symbol("js:if"), [symbol("js:not"), [symbol("true?"), test]], concatenate([symbol("begin")], body), false]
},
"bind":function _124__lambda (__, bindings) {
var body = [].slice.call(arguments, 2);
return (function _125__lambda (vars) {
vars = map(first, bindings);
return concatenate([[symbol("js:function"), symbol("js:null"), vars, concatenate([symbol("begin")], map(function _126__lambda (binding) {
return apply(function _127__lambda (_var, value) {
return [symbol("js:set"), _var, value]
}, binding)
}, bindings), prependReturn(body))]], (function _128__lambda (_arguments) {
_arguments = map(function _129__lambda (binding) {
return apply(function _130__lambda (_var, value) {
return (true_W_(any_W_(rcurry(uses_W_, _var), map(second, bindings))) ? [symbol("js:and"), [symbol("js:defined"), _var], _var] : false)
}, binding)
}, bindings);
return (true_W_(every_W_(not, _arguments)) ? [] : _arguments)
})())
})()
},
"if-bind":function _131__lambda (__, binding, then, _else) {
return apply(function _132__lambda (_var, value) {
return (function _133__lambda (temp) {
temp = generateSymbol();
return [symbol("bind"), [[temp, value]], [symbol("if"), temp, [symbol("bind"), [[_var, temp]], then], _else]]
})()
}, binding)
},
"set!":function _134__lambda (__, expression) {
var valueRest = [].slice.call(arguments, 2);
return (true_W_(Array.isArray(expression)) ? (true_W_((expression[0] === s("js:get-property"))) ? [symbol("js:set"), expression, valueRest[0]] : (true_W_(((true_W_((expression[0] === s("get")))) ? ((_4 = expression, ((true_W_(_4) && _4.length) || 0)) === 3) : false)) ? [symbol("js:set"), concatenate([symbol("js:get-property")], expression.slice(1)), valueRest[0]] : concatenate([setterSymbol(expression[0])], expression.slice(1), valueRest))) : [symbol("js:set"), expression, valueRest[0]])
},
"get":function _135__lambda (__, _object) {
var keys = [].slice.call(arguments, 2);
return (true_W_(((_4 = keys, ((true_W_(_4) && _4.length) || 0)) === 1)) ? [symbol("%get-property"), _object, keys[0]] : concatenate([symbol("js:call"), symbol("get"), _object], keys))
},
"%get-property":function _136__lambda (environment, _object, name) {
return apply(function _137__lambda (temp1, temp2) {
return [symbol("begin"), [symbol("set!"), temp1, _object], [symbol("set!"), temp2, name], [symbol("js:and"), temp1, [symbol("has?"), temp1, temp2], [symbol("js:get-property"), temp1, temp2]]]
}, requestTemporaries(environment, 2))
},
"while":function _138__lambda (__, test) {
var body = [].slice.call(arguments, 2);
return [[symbol("js:function"), symbol("js:null"), [], concatenate([symbol("begin")], [concatenate([symbol("js:while"), [symbol("true?"), test]], body), [symbol("js:return"), false]])]]
},
"until":function _139__lambda (__, test) {
var body = [].slice.call(arguments, 2);
return concatenate([symbol("while"), [symbol("not"), test]], body)
},
"define-generic":function _140__lambda (__, name, _arguments) {
return [symbol("define"), name, [symbol("%make-generic"), [symbol("js:escape"), name], displayName(name, _arguments)]]
},
".":function _141__lambda (__, value) {
var calls = [].slice.call(arguments, 2);
return reduce(function _142__lambda (value, call) {
return apply(function _143__lambda (name) {
var _arguments = [].slice.call(arguments, 1);
return concatenate([[symbol("js:get-property"), value, (function _144__lambda () {
var _20 = name;
var _21 = instance_W_;
return (true_W_((_4 = _21(_20, _CL_string), (true_W_(_4) ? _4 : false))) ? name : (true_W_((_4 = _21(_20, _CL_symbol), (true_W_(_4) ? _4 : false))) ? symbolName(name) : signal("DOT")))
})()]], _arguments)
}, call)
}, value, calls)
},
"not":function _145__lambda (__, value) {
return [symbol("js:not"), [symbol("true?"), value]]
},
"true?":function _146__lambda (__, value) {
return (true_W_(((true_W_(Array.isArray(value))) ? any_W_(curry(_E__E_, value[0]), [s("not"), s("js:not")]) : false)) ? value : [symbol("js:call"), symbol("true?"), value])
},
"and":function _147__lambda (__) {
var expressions = [].slice.call(arguments, 1);
return (_4 = empty_W_(expressions), (true_W_(_4) ? _4 : (_4 = [symbol("js:if"), concatenate([symbol("js:and")], map(function _148__lambda (expression) {
return [symbol("true?"), expression]
}, expressions.slice(0, -1))), last(expressions), false], (true_W_(_4) ? _4 : false))))
},
"or":function _149__lambda (environment) {
var expressions = [].slice.call(arguments, 1);
return apply(function _150__lambda (temp) {
return (function _151__lambda (test) {
test = function test (expressions) {
return (true_W_(empty_W_(expressions)) ? false : [symbol("begin"), [symbol("set!"), temp, expressions[0]], [symbol("js:if"), [symbol("true?"), temp], temp, test(expressions.slice(1))]])
};
return test(expressions)
})(((typeof (test) !== 'undefined') && test))
}, requestTemporaries(environment, 1))
},
"inc":function _152__lambda (__, _object) {
return [symbol("js:+"), _object, 1]
},
"dec":function _153__lambda (__, _object) {
return [symbol("js:-"), _object, 1]
},
"dotimes":function _154__lambda (environment, binding) {
var body = [].slice.call(arguments, 2);
return (function _155__lambda (temp) {
temp = generateSymbol();
return apply(function _156__lambda (_var, count, result) {
return concatenate([symbol("for"), [[_var, 0, [symbol("js:+"), _var, 1]], [temp, count, temp]], [[symbol("js:>="), _var, temp], (_4 = result, (true_W_(_4) ? _4 : (_4 = false, (true_W_(_4) ? _4 : false))))]], body)
}, binding)
})()
},
"for":function _157__lambda (__, clauses, end) {
var body = [].slice.call(arguments, 3);
return (function _158__lambda (initClauses, nextClauses) {
initClauses = [];
nextClauses = [];
(function _159__lambda (_23, _24) {
_23 = clauses;
_24 = (_4 = _23, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _22 = 0; (_22 < _24); _22 = (_22 + 1)) {
var clause = _23[_22];
(function _160__lambda (clause) {
initClauses.push(clause.slice(0, 2));
initClauses;
nextClauses.push(clause[0]);
nextClauses;
nextClauses.push(clause[2]);
nextClauses
})(clause)
}
})()
})(((typeof (_23) !== 'undefined') && _23), false);
return [symbol("bind"), initClauses, concatenate([symbol("js:while"), [symbol("not"), end[0]]], (function _161__lambda (vars) {
vars = map(first, clauses);
return [concatenate([concatenate([symbol("method"), vars], body)], vars)]
})(), [concatenate([symbol("%parallel-set")], nextClauses)]), (true_W_(empty_W_(end.slice(1))) ? false : concatenate([symbol("begin")], end.slice(1)))]
})()
},
"method":function _162__lambda (__, _arguments) {
var body = [].slice.call(arguments, 2);
return functionDeclaration(s("js:null"), _arguments, body)
},
"cond":function _163__lambda (__) {
var cases = [].slice.call(arguments, 1);
return (true_W_(empty_W_(cases)) ? false : apply(function _164__lambda (test) {
var then = [].slice.call(arguments, 1);
return (function _165__lambda (then) {
then = concatenate([symbol("begin")], then);
return (true_W_((test === _k('else'))) ? then : [symbol("if"), test, then, concatenate([symbol("cond")], cases.slice(1))])
})(((typeof (then) !== 'undefined') && then))
}, cases[0]))
},
"select":function _166__lambda (__, value, test) {
var cases = [].slice.call(arguments, 3);
return (function _167__lambda (valueVar, infix_W_, testVar) {
valueVar = generateSymbol();
infix_W_ = ((true_W_(instance_W_(test, _CL_symbol))) ? INFIX.hasOwnProperty(symbolName(test)) : false);
testVar = (true_W_(infix_W_) ? test : generateSymbol());
return (function _168__lambda (testExpression) {
testExpression = function testExpression (testValue) {
return [testVar, valueVar, testValue]
};
return [[symbol("js:function"), symbol("js:null"), [], concatenate([symbol("begin"), [symbol("js:var"), valueVar, value]], (true_W_(infix_W_) ? [] : [[symbol("js:var"), testVar, test]]), [[symbol("js:return"), concatenate([symbol("cond")], map(function _169__lambda (_case) {
return apply(function _170__lambda (tests) {
var then = [].slice.call(arguments, 1);
return (true_W_((tests === _k('else'))) ? _case : concatenate([concatenate([symbol("or")], map(testExpression, tests))], then))
}, _case)
}, cases))]])]]
})(((typeof (testExpression) !== 'undefined') && testExpression))
})(false, ((typeof (infix_W_) !== 'undefined') && infix_W_), false)
},
"handler-case":function _171__lambda (__, body) {
var conditions = [].slice.call(arguments, 2);
return (function _172__lambda (conditionVar) {
conditionVar = generateSymbol();
return [[symbol("js:function"), symbol("js:null"), [], [symbol("begin"), [symbol("js:try"), [symbol("js:return"), body], conditionVar, concatenate([symbol("cond")], map(function _173__lambda (condition) {
return apply(function _174__lambda (_25) {
var body = [].slice.call(arguments, 1);
return apply(function _175__lambda (type) {
var _arguments = [].slice.call(arguments, 1);
return concatenate([[symbol("instance?"), conditionVar, type]], apply(function _176__lambda () {
var _26 = [].slice.call(arguments, 0);
var condition;
for (var _29 = 0; (_29 < _26.length); _29 = (_29 + 2)) {
var _27 = _26[_29];
var _28 = _26[(_29 + 1)];
if (true_W_(keyword_W_(_27))) {
(function _177__lambda () {
var _30 = _27;
return (true_W_((_4 = (_30 == _k('condition')), (true_W_(_4) ? _4 : false))) ? condition = _28 : false)
})()
}
};
return (true_W_(condition) ? [[symbol("js:var"), condition, conditionVar]] : [])
}, _arguments), prependReturn(body))
}, _25)
}, condition)
}, conditions))]]]]
})()
},
"define-class":function _178__lambda (__, _class, superclass) {
var slots = [].slice.call(arguments, 3);
return [symbol("define"), _class, [symbol("%make-class"), [symbol("js:escape"), _class], superclass[0], (function _179__lambda (_object) {
_object = [symbol("make-object")];
(function _180__lambda (_32, _33) {
_32 = slots;
_33 = (_4 = _32, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _31 = 0; (_31 < _33); _31 = (_31 + 1)) {
var slot = _32[_31];
(function _181__lambda (slot) {
if (true_W_(Array.isArray(slot))) {
_object.push(symbolName(slot[0]));
_object;
_object.push([symbol("method"), [], slot[1]]);
_object
} else {
_object.push(symbolName(slot));
_object;
_object.push(false);
_object
}
})(slot)
}
})()
})(((typeof (_32) !== 'undefined') && _32), false);
return _object
})()]]
},
"define-module":function _182__lambda (environment, name) {
var _34 = [].slice.call(arguments, 2);
var _import = [];
var _export = [];
for (var _37 = 0; (_37 < _34.length); _37 = (_37 + 2)) {
var _35 = _34[_37];
var _36 = _34[(_37 + 1)];
if (true_W_(keyword_W_(_35))) {
(function _183__lambda () {
var _38 = _35;
return (true_W_((_4 = (_38 == _k('import')), (true_W_(_4) ? _4 : false))) ? _import = _36 : (true_W_((_4 = (_38 == _k('export')), (true_W_(_4) ? _4 : false))) ? _export = _36 : false))
})()
}
};
environment.exports = map(function _184__lambda (name) {
return (true_W_(instance_W_(name, _CL_symbol)) ? escapeSymbol(name) : (true_W_(setterName_W_(name)) ? escapeSymbol(setterSymbol(name[1])) : name))
}, _export);
return concatenate([symbol("begin"), [symbol("js:var"), symbol("*module*"), symbol("js:this")]], (true_W_((_4 = environment, _18 = "asynchronous?", (_4 && _4.hasOwnProperty(_18) && _4[_18]))) ? ((_4 = (_4 = environment, _18 = "post-processors", (_4 && _4.hasOwnProperty(_18) && _4[_18])), _4.unshift((function _185__lambda (moduleName) {
moduleName = symbolName(name);
return function _186__lambda (form) {
return [symbol("begin"), [symbol("js:comment"), ("@ sourceURL=" + moduleName)], [[symbol("js:inline"), "parent.define"], moduleName, concatenate([symbol("js:array")], map(symbolName, _import)), [symbol("js:function"), symbol("js:null"), [symbol("exports")], form]]]
}
})()), _4), []) : (function _187__lambda (property, module, i, modules) {
property = generateSymbol();
module = generateSymbol();
i = generateSymbol();
modules = generateSymbol();
return concatenate((true_W_(empty_W_(_import)) ? [] : [[symbol("js:var"), modules, concatenate([symbol("js:array")], map(symbolName, _import))], [symbol("js:for"), [[[i, 0], [symbol("js:<"), i, (_4 = _import, ((true_W_(_4) && _4.length) || 0))], [symbol("js:+"), i, 1]]], [symbol("js:var"), module, [symbol("require"), [symbol("js:get-property"), modules, i]]], [symbol("js:for-in"), [property, module], [symbol("js:if"), [[symbol("js:get-property"), module, "hasOwnProperty"], property], [symbol("js:set"), [symbol("js:get-property"), symbol("*module*"), property], [symbol("js:get-property"), module, property]]]]]]))
})()))
},
"block":function _188__lambda (__, argument) {
var body = [].slice.call(arguments, 2);
return apply(function _189__lambda (_39) {
return apply(function _190__lambda (name) {
return (true_W_(name) ? (function _191__lambda (condition) {
condition = generateSymbol();
return [symbol("js:try"), [symbol("js:return"), concatenate([symbol("bind"), [[name, [symbol("%make-non-local-exit-function"), symbolName(name)]]]], body)], condition, [symbol("if"), [symbol("and"), [symbol("%non-local-exit?"), condition], [symbol("js:==="), [symbol("js:get-property"), condition, "name"], symbolName(name)]], [symbol("js:return"), [symbol("js:get-property"), condition, "value"]], [symbol("js:throw"), condition]]]
})() : concatenate([symbol("begin")], body))
}, _39)
}, argument)
},
"for-each":function _192__lambda (__, clauses, end) {
var body = [].slice.call(arguments, 3);
return (true_W_(((true_W_(((_4 = clauses, ((true_W_(_4) && _4.length) || 0)) === 1))) ? empty_W_(end) : false)) ? apply(function _193__lambda (item, x) {
return (function _194__lambda (index, _array, length) {
index = generateSymbol();
_array = generateSymbol();
length = generateSymbol();
return [symbol("bind"), [[_array, x], [length, [symbol("size"), _array]]], concatenate([symbol("js:for"), [[[index, 0], [symbol("js:<"), index, length], [symbol("js:+"), index, 1]]], [symbol("js:var"), item, [symbol("js:get-property"), _array, index]]], [[[symbol("js:function"), symbol("js:null"), [item], concatenate([symbol("begin")], body)], item]])]
})()
}, clauses[0]) : (function _195__lambda (temporaries) {
temporaries = map(function _196__lambda (clause) {
return concatenate([generateSymbol()], clause)
}, clauses);
return [[symbol("js:function"), symbol("js:null"), [], concatenate([symbol("begin")], map(function _197__lambda (clause) {
return [symbol("js:var"), clause[0]]
}, clauses), map(function _198__lambda (temporary) {
return [symbol("js:var"), temporary[0], temporary[2]]
}, temporaries), [concatenate([symbol("js:while"), true, [symbol("js:if"), [symbol("any?"), symbol("empty?"), concatenate([symbol("js:array")], map(first, temporaries))], [symbol("js:return"), false]]], map(function _199__lambda (temporary) {
return [symbol("set!"), temporary[1], [symbol("first"), temporary[0]]]
}, temporaries), (function _200__lambda (vars, realBody) {
vars = map(first, clauses);
realBody = (!true_W_(empty_W_(body)) ? concatenate([[symbol("js:function"), symbol("js:null"), vars, concatenate([symbol("begin")], body)]], vars) : false);
return (true_W_(empty_W_(end)) ? [realBody] : [[symbol("js:if"), end[0], [symbol("js:return"), (true_W_(empty_W_(end.slice(1))) ? false : concatenate([symbol("begin")], end.slice(1)))], realBody]])
})(((typeof (vars) !== 'undefined') && vars), false), map(function _201__lambda (temporary) {
return [symbol("set!"), temporary[0], [symbol("rest"), temporary[0]]]
}, temporaries))])]]
})())
},
"bind-methods":function _202__lambda (__, bindings) {
var body = [].slice.call(arguments, 2);
return concatenate([symbol("bind"), map(function _203__lambda (binding) {
return apply(function _204__lambda (name, _arguments) {
var body = [].slice.call(arguments, 2);
return [name, functionDeclaration(name, _arguments, body)]
}, binding)
}, bindings)], body)
},
"destructuring-bind":function _205__lambda (__, pattern, value) {
var body = [].slice.call(arguments, 3);
return (function _206__lambda (target) {
target = false;
return (function _207__lambda (destructure) {
destructure = function destructure (pattern, value) {
return (function _208__lambda (nested, inner, wrapper) {
nested = [];
inner = [symbol("method"), map(function _209__lambda (_var) {
return (true_W_(Array.isArray(_var)) ? (function _210__lambda (temp) {
temp = generateSymbol();
nested.push([_var, temp]);
nested;
return temp
})() : _var)
}, pattern)];
wrapper = [symbol("apply"), inner, value];
target = inner;
(function _211__lambda (_41, _42) {
_41 = nested;
_42 = (_4 = _41, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _40 = 0; (_40 < _42); _40 = (_40 + 1)) {
var n = _41[_40];
(function _212__lambda (n) {
(function _213__lambda (subWrapper) {
subWrapper = apply(destructure, n);
inner.push(subWrapper);
inner;
return inner = subWrapper[1]
})()
})(n)
}
})()
})(((typeof (_41) !== 'undefined') && _41), false);
return wrapper
})(((typeof (nested) !== 'undefined') && nested), ((typeof (inner) !== 'undefined') && inner), false)
};
return (function _214__lambda (wrapping) {
wrapping = destructure(pattern, value);
replaceSubsequence_B_(target, body, _k('start'), (_4 = target, ((true_W_(_4) && _4.length) || 0)));
return wrapping
})()
})(((typeof (destructure) !== 'undefined') && destructure))
})()
},
"bind-properties":function _215__lambda (__, properties, _object) {
var body = [].slice.call(arguments, 3);
return (function _216__lambda (object_ST_) {
object_ST_ = generateSymbol();
return [[symbol("js:function"), symbol("js:null"), [object_ST_], concatenate([symbol("begin")], map(function _217__lambda (property) {
return [symbol("js:var"), property, [symbol("js:get-property"), object_ST_, symbolName(property)]]
}, properties), prependReturn(body))], _object]
})()
},
"call-next-method":function _218__lambda (__) {
return [[symbol("js:get-property"), symbol("next-method"), "apply"], symbol("js:null"), symbol("js:arguments")]
},
"instance?":function _219__lambda (__, _object, type) {
return (function _220__lambda () {
var _43 = type;
var _44 = _E__E_;
return (true_W_((_4 = _44(_43, s("<array>")), (true_W_(_4) ? _4 : false))) ? [[symbol("js:inline"), "Array.isArray"], _object] : (true_W_((_4 = _44(_43, s("<error>")), (true_W_(_4) ? _4 : false))) ? [symbol("js:instanceof"), _object, [symbol("js:inline"), "Error"]] : [symbol("js:call"), symbol("instance?"), _object, type]))
})()
},
"make-array":function _221__lambda (__) {
var elements = [].slice.call(arguments, 1);
return concatenate([symbol("js:array")], elements)
},
"first":function _222__lambda (environment, expression) {
return [symbol("js:get-property"), expression, 0]
},
"second":function _223__lambda (environment, expression) {
return [symbol("js:get-property"), expression, 1]
},
"third":function _224__lambda (environment, expression) {
return [symbol("js:get-property"), expression, 2]
},
"slice":function _225__lambda (__, _array, start, end) {
return concatenate([[symbol("js:get-property"), _array, "slice"]], (true_W_(start) ? [start] : []), (true_W_(end) ? [end] : []))
},
"rest":function _226__lambda (__, _array) {
return [symbol("slice"), _array, 1]
},
"as-array":function _227__lambda (__, _arguments, skip) {
return [[symbol("js:get-property"), [symbol("%array")], "slice", "call"], _arguments, (skip || 0)]
},
"size":function _228__lambda (environment, _object) {
return apply(function _229__lambda (temp) {
return [symbol("begin"), [symbol("set!"), temp, _object], [symbol("js:or"), [symbol("js:and"), [symbol("true?"), temp], [symbol("js:get-property"), temp, "length"]], 0]]
}, requestTemporaries(environment, 1))
},
"has?":function _230__lambda (__, _object, property) {
return [[symbol("js:inline"), "Object.hasOwnProperty.call"], _object, property]
},
"but-last":function _231__lambda (__, _array, n) {
return (function _232__lambda (n) {
n = (_4 = n, (true_W_(_4) ? _4 : (_4 = 1, (true_W_(_4) ? _4 : false))));
return [symbol("slice"), _array, 0, (true_W_(instance_W_(n, _CL_number)) ? (n * -1) : [symbol("js:*"), n, -1])]
})(((typeof (n) !== 'undefined') && n))
},
"push-last":function _233__lambda (environment, _array, value) {
return (true_W_(instance_W_(_array, _CL_symbol)) ? [symbol("begin"), [[symbol("js:get-property"), _array, "push"], value], _array] : apply(function _234__lambda (temp) {
return [symbol("begin"), [symbol("set!"), temp, _array], [[symbol("js:get-property"), temp, "push"], value], temp]
}, requestTemporaries(environment, 1)))
},
"push":function _235__lambda (environment, _array, value) {
return (true_W_(instance_W_(_array, _CL_symbol)) ? [symbol("begin"), [[symbol("js:get-property"), _array, "unshift"], value], _array] : apply(function _236__lambda (temp) {
return [symbol("begin"), [symbol("set!"), temp, _array], [[symbol("js:get-property"), temp, "unshift"], value], temp]
}, requestTemporaries(environment, 1)))
},
"pop":function _237__lambda (__, _array) {
return [[symbol("js:get-property"), _array, "shift"]]
},
"pop-last":function _238__lambda (__, _array) {
return [[symbol("js:get-property"), _array, "pop"]]
},
"reverse!":function _239__lambda (__, _array) {
return [[symbol("js:get-property"), _array, "reverse"]]
},
"as-string":function _240__lambda (__, _object) {
return [[symbol("js:get-property"), _object, "toString"]]
},
"as-number":function _241__lambda (__, _object) {
return [[symbol("js:inline"), "Number"], _object]
},
"%concat":function _242__lambda (__, array1, array2) {
return [[symbol("js:get-property"), array1, "concat"], array2]
},
"concatenate":function _243__lambda (__, _object) {
var rest = [].slice.call(arguments, 2);
return concatenate((true_W_(instance_W_(_object, _CL_string)) ? [symbol("js:+"), _object] : [symbol("js:call"), symbol("concatenate"), _object]), rest)
},
"==":function _244__lambda (__) {
var _arguments = [].slice.call(arguments, 1);
return concatenate((true_W_(((_4 = _arguments, ((true_W_(_4) && _4.length) || 0)) === 2)) ? [symbol("js:===")] : [symbol("js:call"), symbol("==")]), _arguments)
}};
functionDefiner = _PE_makeFunction("functionDefiner", function __method__ (macroName, definerName) {
var _45 = [].slice.call(arguments, 2);
var type_W_;
for (var _48 = 0; (_48 < _45.length); _48 = (_48 + 2)) {
var _46 = _45[_48];
var _47 = _45[(_48 + 1)];
if (true_W_(keyword_W_(_46))) {
(function _245__lambda () {
var _49 = _46;
return (true_W_((_4 = (_49 == _k('type?')), (true_W_(_4) ? _4 : false))) ? type_W_ = _47 : false)
})()
}
};
return function _246__lambda (__, functionName, _arguments) {
var body = [].slice.call(arguments, 3);
return apply(function _247__lambda (setter_W_, name) {
if (!true_W_((_4 = instance_W_(name, _CL_symbol), (true_W_(_4) ? _4 : (_4 = setter_W_, (true_W_(_4) ? _4 : false)))))) {
signal(make(_CL_error, _k('message'), concatenate(macroName, ": name => symbol or (setter name)")))
};
return [symbol("define"), name, concatenate([s(definerName), [symbol("js:escape"), name], functionDeclaration([symbol("js:inline"), "__method__"], _arguments, body)], (true_W_(type_W_) ? [[symbol("js:inline"), (true_W_(empty_W_(_arguments)) ? "null" : (function _248__lambda (head) {
head = _arguments[0];
return (true_W_(((true_W_(Array.isArray(head))) ? binary_GT_((_4 = head, ((true_W_(_4) && _4.length) || 0)), 1) : false)) ? escapeSymbol(head[1]) : "Object")
})())]] : []), [[symbol("js:and"), [symbol("js:defined"), name], name], setter_W_, displayName((true_W_(setter_W_) ? functionName[1] : functionName), _arguments, _k('setter?'), setter_W_)])]
}, (true_W_(setterName_W_(functionName)) ? [true, setterSymbol(functionName[1])] : [false, functionName]))
}
}, ((typeof (functionDefiner) !== 'undefined') && functionDefiner), false, "(function-definer <object> <object> #key type?)");
(function _249__lambda (_51, _52) {
_51 = [["define-function", "%make-function"], ["define-method", "%make-method", _k('type?'), true]];
_52 = (_4 = _51, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _50 = 0; (_50 < _52); _50 = (_50 + 1)) {
var _arguments = _51[_50];
(function _250__lambda (_arguments) {
MACROS[_arguments[0]] = apply(functionDefiner, _arguments)
})(_arguments)
}
})()
})(((typeof (_51) !== 'undefined') && _51), false);
(function _251__lambda (_54, _55) {
_54 = ["=", "<", ">", "<=", ">="];
_55 = (_4 = _54, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _53 = 0; (_53 < _55); _53 = (_53 + 1)) {
var comparison = _54[_53];
(function _252__lambda (comparison) {
MACROS[comparison] = function _253__lambda (__) {
var _arguments = [].slice.call(arguments, 1);
return concatenate((true_W_(((_4 = _arguments, ((true_W_(_4) && _4.length) || 0)) === 2)) ? [s(("binary" + comparison))] : [symbol("js:call"), s(comparison)]), _arguments)
}
})(comparison)
}
})()
})(((typeof (_54) !== 'undefined') && _54), false);
(function _254__lambda (_57, _58) {
_57 = ["-", "+", "*", "/"];
_58 = (_4 = _57, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _56 = 0; (_56 < _58); _56 = (_56 + 1)) {
var op = _57[_56];
(function _255__lambda (op) {
MACROS[op] = function _256__lambda (__) {
var _arguments = [].slice.call(arguments, 1);
return concatenate([s(("js:" + op))], _arguments)
}
})(op)
}
})()
})(((typeof (_57) !== 'undefined') && _57), false);
(function _257__lambda (_60, _61) {
_60 = [["inc!", "+"], ["dec!", "-"]];
_61 = (_4 = _60, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _59 = 0; (_59 < _61); _59 = (_59 + 1)) {
var name_SL_op = _60[_59];
(function _258__lambda (name_SL_op) {
apply(function _259__lambda (name, op) {
return MACROS[name] = function _260__lambda (__, _object, value) {
return (true_W_((_4 = !true_W_(Array.isArray(_object)), (true_W_(_4) ? _4 : (_4 = ((true_W_(Array.isArray(_object))) ? (_4 = (_object[0] === s("js:get-property")), (true_W_(_4) ? _4 : (_4 = ((true_W_((_object[0] === s("get")))) ? ((_4 = _object, ((true_W_(_4) && _4.length) || 0)) === 3) : false), (true_W_(_4) ? _4 : false)))) : false), (true_W_(_4) ? _4 : false))))) ? [s(("js:" + op + "=")), (true_W_(((true_W_(Array.isArray(_object))) ? (_object[0] === s("get")) : false)) ? concatenate([symbol("js:get-property")], _object.slice(1)) : _object), (_4 = value, (true_W_(_4) ? _4 : (_4 = 1, (true_W_(_4) ? _4 : false))))] : [symbol("set!"), _object, [s(("js:" + op)), _object, (_4 = value, (true_W_(_4) ? _4 : (_4 = 1, (true_W_(_4) ? _4 : false))))]])
}
}, name_SL_op)
})(name_SL_op)
}
})()
})(((typeof (_60) !== 'undefined') && _60), false);
SYMBOLMACROS = {"this-method":function _261__lambda (__) {
return [symbol("js:inline"), "__method__"]
},
"next-method":function _262__lambda (__) {
return [symbol("%next-method"), symbol("this-method")]
}};
SPECIALFORMS = {"js:new":1,
"js:var":1,
"js:for-in":1,
"js:function":2,
"js:escape":false,
"js:inline":false,
"js:for":function _263__lambda (environment, clauses) {
var body = [].slice.call(arguments, 2);
return concatenate([symbol("js:for"), map(function _264__lambda (clause) {
return apply(function _265__lambda (_62) {
var rest = [].slice.call(arguments, 1);
return apply(function _266__lambda (_var, value) {
return concatenate([[_var, macroexpand(environment, value)]], map(curry(macroexpand, environment), rest))
}, _62)
}, clause)
}, clauses)], macroexpand(environment, body))
},
"js:try":function _267__lambda (environment, body, _var, _catch, _finally) {
return [symbol("js:try"), macroexpand(environment, body), _var, macroexpand(environment, _catch), macroexpand(environment, _finally)]
}};
UNARY = {"js:-":"-"};
INFIX = {"js:and":"&&",
"js:or":"||",
"js:+":"+",
"js:+=":"+=",
"js:-":"-",
"js:-=":"-=",
"js:*":"*",
"js:/":"/",
"js:%":"%",
"js:>":">",
"js:<":"<",
"js:>=":">=",
"js:<=":"<=",
"js:==":"==",
"js:===":"===",
"js:instanceof":"instanceof",
"js:&":"&",
"js:|":"|"};
SYMBOLS = {"js:null":"null",
"js:this":"this",
"js:undefined":"undefined",
"js:arguments":"arguments",
"js:typeof":"typeof"};
SYMBOLESCAPES = {"-":"_M_",
"+":"_PL_",
"!":"_B_",
"?":"_W_",
"%":"_PE_",
"#":"_H_",
"@":"_A_",
"*":"_ST_",
"/":"_SL_",
"=":"_E_",
":":"_C_",
"<":"_LT_",
">":"_GT_",
"_":"__",
"[":"_SO_",
"]":"_SC_",
"{":"_BO_",
"}":"_BC_"};
RESERVED = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array"];
SYMBOLCOUNT = 0;
generateSymbol = _PE_makeFunction("generateSymbol", function __method__ () {
return (function _268__lambda (symbol) {
symbol = make(_CL_symbol, _k('name'), ("_" + SYMBOLCOUNT.toString()));
(SYMBOLCOUNT += 1);
symbol["generated?"] = true;
return symbol
})()
}, ((typeof (generateSymbol) !== 'undefined') && generateSymbol), false, "(generate-symbol)");
HYPHENPATTERN = make(_CL_regexp, _k('pattern'), "-(.)", _k('global?'), true);
escape = _PE_makeFunction("escape", function __method__ (name) {
return (true_W_(binary_E_(name, "-")) ? (_4 = SYMBOLESCAPES, _18 = name, (_4 && _4.hasOwnProperty(_18) && _4[_18])) : (function _269__lambda (upcase_W_, result) {
upcase_W_ = false;
result = "";
(function _270__lambda (_64, _65) {
_64 = [].slice.call(name, 0);
_65 = (_4 = _64, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _63 = 0; (_63 < _65); _63 = (_63 + 1)) {
var _char = _64[_63];
(function _271__lambda (_char) {
if (true_W_(binary_E_(_char, "-"))) {
upcase_W_ = true
} else {
(function _272__lambda (_char) {
_char = (true_W_(upcase_W_) ? asUppercase(_char) : _char);
(result += (function _273__lambda (_66) {
_66 = (_4 = SYMBOLESCAPES, _18 = _char, (_4 && _4.hasOwnProperty(_18) && _4[_18]));
return (true_W_(_66) ? (function _274__lambda (replacement) {
replacement = _66;
return replacement
})() : _char)
})());
return upcase_W_ = false
})(((typeof (_char) !== 'undefined') && _char))
}
})(_char)
}
})()
})(((typeof (_64) !== 'undefined') && _64), false);
return result
})())
}, ((typeof (escape) !== 'undefined') && escape), false, "(escape <object>)");
escapeSymbol = _PE_makeFunction("escapeSymbol", function __method__ (symbol) {
return (function _275__lambda (name) {
name = symbolName(symbol);
return (true_W_((_4 = symbol, _18 = "generated?", (_4 && _4.hasOwnProperty(_18) && _4[_18]))) ? name : (true_W_(member_W_(name, RESERVED)) ? ("_" + name) : (true_W_(((true_W_(binary_E_(name[0], "<")) && true_W_(binary_E_(last(name), ">"))) ? binary_GT_((_4 = name, ((true_W_(_4) && _4.length) || 0)), 2) : false)) ? ("_CL_" + escape(name.slice(1).slice(0, -1))) : (true_W_(((true_W_(binary_E_(name[0], "*")) && true_W_(binary_E_(last(name), "*"))) ? binary_GT_((_4 = name, ((true_W_(_4) && _4.length) || 0)), 2) : false)) ? asUppercase(escape(name.slice(1).slice(0, -1))) : escape(name)))))
})()
}, ((typeof (escapeSymbol) !== 'undefined') && escapeSymbol), false, "(escape-symbol <object>)");
wrapBlock = _PE_makeFunction("wrapBlock", function __method__ (code) {
return ("(function(){\n" + code + "\n})()")
}, ((typeof (wrapBlock) !== 'undefined') && wrapBlock), false, "(wrap-block <object>)");
writeBody = _PE_makeFunction("writeBody", function __method__ (body) {
return writeStatements(concatenate([symbol("begin")], body))
}, ((typeof (writeBody) !== 'undefined') && writeBody), false, "(write-body <object>)");
PROPERTYPATTERN = make(_CL_regexp, _k('pattern'), "^[a-z_]+[a-z0-9]*$", _k('ignore-case?'), true);
WRITERS = {"js:call":function _276__lambda (__, head) {
var tail = [].slice.call(arguments, 2);
return concatenate((true_W_(((true_W_(Array.isArray(head)) && true_W_(instance_W_(head[0], _CL_symbol))) ? (head[0] === s("js:function")) : false)) ? ("(" + writeExpressions(head) + ")") : writeExpressions(head)), "(", join(map(writeForm, tail), ", "), ")")
},
"js:negative":function _277__lambda (__, _object) {
return ("(- " + writeExpressions(_object) + ")")
},
"js:not":function _278__lambda (__, expression) {
return ("!" + writeExpressions(expression))
},
"begin":function _279__lambda (statements_W_) {
var forms = [].slice.call(arguments, 1);
return (true_W_(statements_W_) ? (true_W_(binary_GT_((_4 = forms, ((true_W_(_4) && _4.length) || 0)), 1)) ? join(concatenate(map(function _280__lambda (form) {
return concatenate(writeStatements(form), (true_W_(((true_W_(Array.isArray(form))) ? (form[0] === s("js:comment")) : false)) ? "" : ";"))
}, forms.slice(0, -1)), writeStatements(last(forms))), "\n") : writeStatements(forms[0])) : (true_W_(binary_GT_((_4 = forms, ((true_W_(_4) && _4.length) || 0)), 1)) ? ("(" + join(map(writeForm, forms), ", ") + ")") : writeExpressions(forms[0])))
},
"js:if":function _281__lambda (statements_W_, test, then, _else) {
return (true_W_(statements_W_) ? ("if (" + writeExpressions(test) + ") {\n" + writeStatements(then) + "\n}" + (true_W_(_else) ? (" else {\n" + writeStatements(_else) + "\n}") : "")) : ("(" + writeExpressions(test) + " ? " + writeExpressions(then) + " : " + writeExpressions(_else) + ")"))
},
"js:array":function _282__lambda (__) {
var elements = [].slice.call(arguments, 1);
return ("[" + join(map(writeForm, elements), ", ") + "]")
},
"js:defined":function _283__lambda (__, expression) {
return ("(typeof (" + writeExpressions(expression) + ") !== 'undefined')")
},
"js:delete":function _284__lambda (__, expression) {
return ("(delete (" + writeExpressions(expression) + "))")
},
"js:try":function _285__lambda (statements_W_, body, condition, _catch, _finally) {
return (function _286__lambda (result) {
result = ("try {\n" + writeStatements(body) + "\n} catch (" + writeExpressions(condition) + ") {\n" + (true_W_(_catch) ? writeStatements(_catch) : "") + "\n}" + (true_W_(_finally) ? (" finally {\n" + writeStatements(_finally) + "\n}") : ""));
return (true_W_(statements_W_) ? result : wrapBlock(result))
})()
},
"js:for-in":function _287__lambda (statements_W_, variable_SL_expression) {
var body = [].slice.call(arguments, 2);
return apply(function _288__lambda (variable, expression) {
return (function _289__lambda (result) {
result = ("for (var " + writeExpressions(variable) + " in " + writeExpressions(expression) + ") {\n" + writeBody(body) + "\n}");
return (true_W_(statements_W_) ? result : wrapBlock(result))
})()
}, variable_SL_expression)
},
"js:for":function _290__lambda (statements_W_, clauses) {
var body = [].slice.call(arguments, 2);
return (function _291__lambda (inits, tests, nexts) {
inits = [];
tests = [];
nexts = [];
_do(function _292__lambda (clause) {
return apply(function _293__lambda (_67, test, next) {
return apply(function _294__lambda (_var, value) {
return (function _295__lambda (set) {
set = s("js:set");
inits.push(writeExpressions([set, _var, value]));
inits;
tests.push(writeExpressions(test));
tests;
return (nexts.push(writeExpressions([set, _var, next])), nexts)
})()
}, _67)
}, clause)
}, clauses);
return (function _296__lambda (result) {
result = ("for (var " + join(map(function _297__lambda (parts) {
return join(parts, ", ")
}, [inits, tests, nexts]), "; ") + ") {\n" + writeBody(body) + "\n}");
return (true_W_(statements_W_) ? result : wrapBlock(result))
})()
})()
},
"js:while":function _298__lambda (statements_W_, test) {
var body = [].slice.call(arguments, 2);
return (function _299__lambda (result) {
result = ("while (" + writeExpressions(test) + ") {\n" + writeBody(body) + "\n}");
return (true_W_(statements_W_) ? result : wrapBlock(result))
})()
},
"js:inline":function _300__lambda (__, identifier) {
return identifier.toString()
},
"js:get-property":function _301__lambda (__, _object) {
var elements = [].slice.call(arguments, 2);
return concatenate((true_W_(instance_W_(_object, _CL_number)) ? ("(" + writeExpressions(_object) + ")") : writeExpressions(_object)), apply(concatenate, map(function _302__lambda (element) {
return (true_W_(((true_W_(instance_W_(element, _CL_string)) && true_W_(match(PROPERTYPATTERN, element))) ? !true_W_(member_W_(element, RESERVED)) : false)) ? ("." + element) : ("[" + writeExpressions(element) + "]"))
}, elements)))
},
"js:new":function _303__lambda (__, name) {
var _arguments = [].slice.call(arguments, 2);
return ("new " + writeExpressions(name) + " (" + join(map(writeForm, _arguments), ", ") + ")")
},
"js:var":function _304__lambda (__, name, value) {
return ("var " + writeExpressions(name) + (true_W_(((true_W_(value)) ? !true_W_((value === s("js:undefined"))) : false)) ? (" = " + writeExpressions(value)) : ""))
},
"js:set":function _305__lambda (__, name, value) {
return concatenate(writeExpressions(name), " = ", writeExpressions(value))
},
"js:return":function _306__lambda (__, body) {
return ("return " + writeExpressions(body))
},
"js:function":function _307__lambda (__, name, _arguments, body) {
return ("function " + (true_W_(((true_W_(name)) ? !true_W_((name === s("js:null"))) : false)) ? (true_W_(Array.isArray(name)) ? writeExpressions(name) : escapeSymbol(name)) : concatenate(escapeSymbol(generateSymbol()), "__lambda")) + " (" + join(map(writeForm, _arguments), ", ") + ") {" + (true_W_(body) ? ("\n" + writeStatements(body) + "\n") : "") + "}")
},
"js:escape":function _308__lambda (__, symbol) {
return writeExpressions(escapeSymbol(symbol))
},
"js:throw":function _309__lambda (statements_W_, error) {
return (function _310__lambda (result) {
result = ("throw " + writeExpressions(error));
return (true_W_(statements_W_) ? result : wrapBlock(result))
})()
},
"js:comment":function _311__lambda (__, comment) {
return (true_W_(position(comment, "\n")) ? ("/*" + comment + "*/") : ("//" + comment))
},
"make-object":function _312__lambda (__) {
var keyValues = [].slice.call(arguments, 1);
return (function _313__lambda (entries) {
entries = [];
(function _314__lambda (i) {
i = 0;
while (!true_W_(binary_GT__E_(i, (_4 = keyValues, ((true_W_(_4) && _4.length) || 0))))) {
(function _315__lambda (i) {
return (entries.push(concatenate(writeExpressions(element(keyValues, i)), ":", writeExpressions(element(keyValues, (i + 1))))), entries)
})(i);
i = (i + 2)
};
return false
})();
return ("{" + join(entries, ",\n") + "}")
})()
}};
compile = exports.compile = _PE_makeFunction("compile", function __method__ (form) {
var _68 = [].slice.call(arguments, 1);
var statements_W_;
var asynchronous_W_;
for (var _71 = 0; (_71 < _68.length); _71 = (_71 + 2)) {
var _69 = _68[_71];
var _70 = _68[(_71 + 1)];
if (true_W_(keyword_W_(_69))) {
(function _316__lambda () {
var _72 = _69;
return (true_W_((_4 = (_72 == _k('statements?')), (true_W_(_4) ? _4 : false))) ? statements_W_ = _70 : (true_W_((_4 = (_72 == _k('asynchronous?')), (true_W_(_4) ? _4 : false))) ? asynchronous_W_ = _70 : false))
})()
}
};
return (function _317__lambda (postProcessors, temporaries, environment, expanded) {
postProcessors = [];
temporaries = [];
environment = {"definitions":[],
"macros":{},
"temporaries":temporaries,
"post-processors":postProcessors,
"asynchronous?":asynchronous_W_};
expanded = macroexpand(environment, form);
if (!true_W_(empty_W_(postProcessors))) {
(function _318__lambda (_74, _75) {
_74 = postProcessors;
_75 = (_4 = _74, ((true_W_(_4) && _4.length) || 0));
return (function(){
for (var _73 = 0; (_73 < _75); _73 = (_73 + 1)) {
var processor = _74[_73];
(function _319__lambda (processor) {
expanded = processor(expanded)
})(processor)
}
})()
})(((typeof (_74) !== 'undefined') && _74), false)
};
return writeForm(expanded, statements_W_)
})(((typeof (postProcessors) !== 'undefined') && postProcessors), ((typeof (temporaries) !== 'undefined') && temporaries), ((typeof (environment) !== 'undefined') && environment), false)
}, ((typeof (compile) !== 'undefined') && compile), false, "(compile <object> #key statements? asynchronous?)");
ESCAPED = {"\"":"\"",
"\\":"\\",
"\b":"b",
"\f":"f",
"\n":"n",
"\r":"r",
"\v":"v",
"\t":"t"};
fillZeros = _PE_makeFunction("fillZeros", function __method__ (_string) {
return concatenate("0000".slice(0, (4 - (_4 = _string, ((true_W_(_4) && _4.length) || 0)))), _string)
}, ((typeof (fillZeros) !== 'undefined') && fillZeros), false, "(fill-zeros <object>)");
hex = _PE_makeFunction("hex", function __method__ (code) {
return fillZeros(code.toString(16))
}, ((typeof (hex) !== 'undefined') && hex), false, "(hex <object>)");
escapeString = _PE_makeFunction("escapeString", function __method__ (_string) {
return join(map(function _320__lambda (_char) {
return (function _321__lambda (_76) {
_76 = (_4 = ESCAPED, _18 = _char, (_4 && _4.hasOwnProperty(_18) && _4[_18]));
return (true_W_(_76) ? (function _322__lambda (escaped) {
escaped = _76;
return ("\\" + escaped)
})() : (function _323__lambda (code) {
code = charCode(_char);
return (true_W_(_LT_(31, code, 127)) ? _char : ("\\u" + hex(code)))
})())
})()
}, [].slice.call(_string, 0)), "")
}, ((typeof (escapeString) !== 'undefined') && escapeString), false, "(escape-string <object>)");
macroexpand = exports.macroexpand = _PE_makeFunction("macroexpand", function __method__ (environment, form) {
return (function _324__lambda () {
var _77 = form;
var _78 = instance_W_;
return (true_W_((_4 = _78(_77, _CL_array), (true_W_(_4) ? _4 : false))) ? ((function _325__lambda () {
while (true_W_(((true_W_(Array.isArray(form)) && true_W_(instance_W_(form[0], _CL_symbol))) ? (_4 = MACROS.hasOwnProperty(symbolName(form[0])), (true_W_(_4) ? _4 : (_4 = (_4 = environment, _18 = "macros", (_4 && _4.hasOwnProperty(_18) && _4[_18])).hasOwnProperty(symbolName(form[0])), (true_W_(_4) ? _4 : false)))) : false))) {
(function _326__lambda (macro) {
macro = (_4 = (_4 = MACROS, _18 = symbolName(form[0]), (_4 && _4.hasOwnProperty(_18) && _4[_18])), (true_W_(_4) ? _4 : (_4 = get(environment, "macros", symbolName(form[0])), (true_W_(_4) ? _4 : false))));
return form = apply(macro, environment, form.slice(1))
})()
};
return false
})(), (true_W_(Array.isArray(form)) ? (function _327__lambda (head) {
head = form[0];
return (true_W_(((true_W_(instance_W_(head, _CL_symbol))) ? SPECIALFORMS.hasOwnProperty(symbolName(head)) : false)) ? (function _328__lambda (expander) {
expander = (_4 = SPECIALFORMS, _18 = symbolName(head), (_4 && _4.hasOwnProperty(_18) && _4[_18]));
return (function _329__lambda () {
var _79 = expander;
var _80 = instance_W_;
return (true_W_((_4 = _80(_79, _CL_number), (true_W_(_4) ? _4 : false))) ? concatenate(form.slice(0, (expander + 1)), map(curry(macroexpand, environment), form.slice((expander + 1)))) : (true_W_((_4 = _80(_79, _CL_function), (true_W_(_4) ? _4 : false))) ? apply(expander, environment, form.slice(1)) : form))
})()
})() : map(curry(macroexpand, environment), form))
})() : macroexpand(environment, form))) : (true_W_((_4 = _78(_77, _CL_symbol), (true_W_(_4) ? _4 : false))) ? (function _330__lambda (_81) {
_81 = (_4 = SYMBOLMACROS, _18 = symbolName(form), (_4 && _4.hasOwnProperty(_18) && _4[_18]));
return (true_W_(_81) ? (function _331__lambda (symbolMacro) {
symbolMacro = _81;
return macroexpand(environment, apply(symbolMacro, environment))
})() : form)
})() : form))
})()
}, ((typeof (macroexpand) !== 'undefined') && macroexpand), false, "(macroexpand <object> <object>)");
writeForm = _PE_makeFunction("writeForm", function __method__ (form, statements_W_) {
return (function _332__lambda () {
var _82 = form;
var _83 = instance_W_;
return (true_W_((_4 = _83(_82, _CL_array), (true_W_(_4) ? _4 : false))) ? (function _333__lambda (head, headName, tail) {
head = form[0];
headName = ((true_W_(head)) ? symbolName(head) : false);
tail = form.slice(1);
return (true_W_(((true_W_(instance_W_(head, _CL_symbol)) && true_W_(UNARY.hasOwnProperty(headName))) ? ((_4 = form, ((true_W_(_4) && _4.length) || 0)) === 2) : false)) ? ("(" + (_4 = UNARY, _18 = headName, (_4 && _4.hasOwnProperty(_18) && _4[_18])) + " " + writeExpressions(form[1]) + ")") : (true_W_(((true_W_(instance_W_(head, _CL_symbol))) ? INFIX.hasOwnProperty(headName) : false)) ? (function _334__lambda (infix, inside) {
infix = (_4 = INFIX, _18 = headName, (_4 && _4.hasOwnProperty(_18) && _4[_18]));
inside = join(map(writeForm, tail), (" " + infix + " "));
return ("(" + inside + ")")
})(((typeof (infix) !== 'undefined') && infix), false) : (true_W_(((true_W_(instance_W_(head, _CL_symbol))) ? WRITERS.hasOwnProperty(headName) : false)) ? apply((_4 = WRITERS, _18 = headName, (_4 && _4.hasOwnProperty(_18) && _4[_18])), statements_W_, tail) : (true_W_(head) ? apply((_4 = WRITERS, _18 = "js:call", (_4 && _4.hasOwnProperty(_18) && _4[_18])), statements_W_, head, tail) : "[]"))))
})(((typeof (head) !== 'undefined') && head), false, false) : (true_W_((_4 = _83(_82, _CL_symbol), (true_W_(_4) ? _4 : false))) ? (function _335__lambda (_84) {
_84 = (_4 = SYMBOLS, _18 = symbolName(form), (_4 && _4.hasOwnProperty(_18) && _4[_18]));
return (true_W_(_84) ? (function _336__lambda (symbol) {
symbol = _84;
return symbol
})() : escapeSymbol(form))
})() : (true_W_((_4 = _83(_82, _CL_hashSymbol), (true_W_(_4) ? _4 : false))) ? ("_" + symbolName(form)) : (true_W_((_4 = _83(_82, _CL_keyword), (true_W_(_4) ? _4 : false))) ? ("_k('" + symbolName(form) + "')") : (true_W_((_4 = _83(_82, _CL_boolean), (true_W_(_4) ? _4 : false))) ? (true_W_(form) ? "true" : "false") : (true_W_((_4 = _83(_82, _CL_string), (true_W_(_4) ? _4 : false))) ? ("\"" + escapeString(form) + "\"") : (true_W_((_4 = _83(_82, _CL_number), (true_W_(_4) ? _4 : false))) ? form.toString() : description(form))))))))
})()
}, ((typeof (writeForm) !== 'undefined') && writeForm), false, "(write-form <object> <object>)");
writeStatements = rcurry(writeForm, true);
writeExpressions = rcurry(writeForm, false)
})()