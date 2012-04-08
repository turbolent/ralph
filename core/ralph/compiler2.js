(function _12__lambda (_4, _5) {
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
expression_W_ = _PE_makeFunction("expression_W_", function __method__ (form) {
return ((true_W_(Array.isArray(form)) && !true_W_(empty_W_(form))) ? instance_W_(form[0], _CL_symbol) : false)
}, ((typeof (expression_W_) !== 'undefined') && expression_W_), false, "(expression? <object>)");
SPECIALFORMS = {};
specialFormDefinition = _PE_makeFunction("specialFormDefinition", function __method__ (form, env) {
return (_4 = SPECIALFORMS, _5 = symbolName(form[0]), (_4 && _4.hasOwnProperty(_5) && _4[_5]))
}, ((typeof (specialFormDefinition) !== 'undefined') && specialFormDefinition), false, "(special-form-definition <object> <object>)");
false;
SPECIALFORMS["%method"] = function _13__lambda (env, name, _arguments) {
var body = [].slice.call(arguments, 3);
return concatenate([symbol("%method"), name, _arguments], map(rcurry(macroexpandAll, env), body))
};
SPECIALFORMS["%set"] = function _14__lambda (env, name, value) {
return [symbol("%set"), name, macroexpandAll(value, env)]
};
DEFAULTMACROS = {};
false;
DEFAULTMACROS.begin = function _15__lambda (__) {
var expressions = [].slice.call(arguments, 1);
return (true_W_(binary_GT_((_4 = expressions, ((true_W_(_4) && _4.length) || 0)), 1)) ? concatenate([symbol("%begin")], expressions) : expressions[0])
};
DEFAULTMACROS.bind = function _16__lambda (__, bindings) {
var body = [].slice.call(arguments, 2);
return (true_W_(empty_W_(bindings)) ? concatenate([symbol("begin")], body) : (function _17__lambda (binding) {
binding = bindings[0];
return apply(function _18__lambda (_var, value) {
return [[symbol("%method"), false, [_var], concatenate([symbol("bind"), bindings.slice(1)], body)], value]
}, binding)
})())
};
DEFAULTMACROS.cond = function _19__lambda (__) {
var cases = [].slice.call(arguments, 1);
return (!true_W_(empty_W_(cases)) ? apply(function _20__lambda (test) {
var then = [].slice.call(arguments, 1);
return (function _21__lambda (then) {
then = concatenate([symbol("begin")], then);
return (true_W_((test === _k('else'))) ? then : [symbol("if"), test, then, concatenate([symbol("cond")], cases.slice(1))])
})(((typeof (then) !== 'undefined') && then))
}, cases[0]) : false)
};
_CL_environment = exports._CL_environment = _PE_makeClass("_CL_environment", _CL_object, {"macros":function _22__lambda () {
return DEFAULTMACROS
}});
macroDefinition = _PE_makeFunction("macroDefinition", function __method__ (form, env) {
return get(env, "macros", symbolName(form[0]))
}, ((typeof (macroDefinition) !== 'undefined') && macroDefinition), false, "(macro-definition <object> <object>)");
macroexpand1 = exports.macroexpand1 = _PE_makeFunction("macroexpand1", function __method__ (form, env) {
return (function _23__lambda (_8) {
_8 = ((true_W_(expression_W_(form))) ? macroDefinition(form, env) : false);
return (true_W_(_8) ? (function _24__lambda (macro) {
macro = _8;
return apply(macro, env, form.slice(1))
})() : form)
})()
}, ((typeof (macroexpand1) !== 'undefined') && macroexpand1), false, "(macroexpand-1 <object> <object>)");
macroexpand = exports.macroexpand = _PE_makeFunction("macroexpand", function __method__ (form, env) {
return (function _25__lambda (expanded) {
expanded = macroexpand1(form, env);
return (true_W_((expanded === form)) ? form : macroexpand(expanded, env))
})()
}, ((typeof (macroexpand) !== 'undefined') && macroexpand), false, "(macroexpand <object> <object>)");
macroexpandAll = exports.macroexpandAll = _PE_makeFunction("macroexpandAll", function __method__ (form, env) {
return (function _26__lambda () {
var _9 = form;
var _10 = instance_W_;
return (true_W_((_4 = _10(_9, _CL_array), (true_W_(_4) ? _4 : false))) ? (true_W_(macroDefinition(form, env)) ? macroexpandAll(macroexpand(form, env), env) : (function _27__lambda (_11) {
_11 = specialFormDefinition(form, env);
return (true_W_(_11) ? (function _28__lambda (expander) {
expander = _11;
return apply(expander, env, form.slice(1))
})() : map(rcurry(macroexpandAll, env), form))
})()) : form)
})()
}, ((typeof (macroexpandAll) !== 'undefined') && macroexpandAll), false, "(macroexpand-all <object> <object>)")
})()