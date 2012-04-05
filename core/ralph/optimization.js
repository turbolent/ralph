(function _14__lambda (_4, _6) {
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
addToClasspath("../../lib/closure-compiler.jar");
jscomp = com.google.javascript.jscomp;
_do(function _15__lambda (name) {
return importClass(jscomp[name])
}, ["Compiler", "CompilerOptions", "CheckLevel", "JSSourceFile", "VariableRenamingPolicy", "PropertyRenamingPolicy"]);
asJavaArray = _PE_makeFunction("asJavaArray", function __method__ (_array, type) {
return (function _16__lambda (result) {
result = java.lang.reflect.Array.newInstance(type, (_4 = _array, ((true_W_(_4) && _4.length) || 0)));
(function _17__lambda (i, _5) {
i = 0;
_5 = (_4 = _array, ((true_W_(_4) && _4.length) || 0));
(function _18__lambda () {
while (!true_W_((i >= _5))) {
result[i] = (_4 = _array, _6 = i, (_4 && _4.hasOwnProperty(_6) && _4[_6]));
var _7 = (i + 1);
var _8 = _5;
i = _7;
_5 = _8
};
return false
})();
return false
})();
return result
})()
}, ((typeof (asJavaArray) !== 'undefined') && asJavaArray), false, "(as-java-array <object> <object>)");
BOOLEANSETTINGS = ["closurePass", "foldConstants", "coalesceVariableNames", "deadAssignmentElimination", "collapseVariableDeclarations", "rewriteFunctionExpressions", "labelRenaming", "removeDeadCode", "optimizeArgumentsArray", "collapseObjectLiterals", "removeClosureAsserts", "collapseAnonymousFunctions", "rewriteFunctionExpressions", "inlineConstantVars", "inlineGetters", "optimizeParameters", "optimizeReturns", "optimizeCalls"];
VALUESETTINGS = {};
FUNCTIONSETTINGS = {"setInlineFunctions":[CompilerOptions.Reach.ALL],
"setInlineVariables":[CompilerOptions.Reach.ALL],
"setRemoveUnusedVariable":[CompilerOptions.Reach.ALL]};
applySettings = _PE_makeFunction("applySettings", function __method__ (options) {
_do(function _19__lambda (name) {
return options[name] = true
}, BOOLEANSETTINGS);
_do(function _20__lambda (name) {
return options[name] = (_4 = VALUESETTINGS, _6 = name, (_4 && _4.hasOwnProperty(_6) && _4[_6]))
}, keys(VALUESETTINGS));
return _do(function _21__lambda (name) {
return options[name].apply(options, (_4 = FUNCTIONSETTINGS, _6 = name, (_4 && _4.hasOwnProperty(_6) && _4[_6])))
}, keys(FUNCTIONSETTINGS))
}, ((typeof (applySettings) !== 'undefined') && applySettings), false, "(apply-settings <object>)");
asSourceFile = _PE_makeFunction("asSourceFile", function __method__ (source) {
return (function _22__lambda (code) {
code = new java.lang.String (source);
return JSSourceFile.fromInputStream("-", new java.io.ByteArrayInputStream (code.getBytes("UTF-8")))
})()
}, ((typeof (asSourceFile) !== 'undefined') && asSourceFile), false, "(as-source-file <object>)");
optimize = exports.optimize = _PE_makeFunction("optimize", function __method__ (source) {
var _9 = [].slice.call(arguments, 1);
var prettyPrint_W_;
var minimize_W_ = true;
for (var _12 = 0; (_12 < _9.length); _12 = (_12 + 2)) {
var _10 = _9[_12];
var _11 = _9[(_12 + 1)];
if (true_W_(keyword_W_(_10))) {
(function _23__lambda () {
var _13 = _10;
return (true_W_((_4 = (_13 == _k('pretty-print?')), (true_W_(_4) ? _4 : false))) ? prettyPrint_W_ = _11 : (true_W_((_4 = (_13 == _k('minimize?')), (true_W_(_4) ? _4 : false))) ? minimize_W_ = _11 : false))
})()
}
};
Compiler.setLoggingLevel(java.util.logging.Level.WARNING);
return (function _24__lambda (options, compiler, sources) {
options = new CompilerOptions ();
compiler = new Compiler ();
sources = asJavaArray([asSourceFile(source)], JSSourceFile);
options.prettyPrint = prettyPrint_W_;
if (true_W_(minimize_W_)) {
options.setRenamingPolicy(VariableRenamingPolicy.ALL, PropertyRenamingPolicy.OFF)
};
applySettings(options);
return (function _25__lambda (result) {
result = compiler.compile([], sources, options);
return (true_W_(result.success) ? compiler.toSource() : false)
})()
})()
}, ((typeof (optimize) !== 'undefined') && optimize), false, "(optimize <object> #key pretty-print? minimize?)")
})()