var MODULE = this;
var _3 = ["ralph/core", "ralph/format"];
for (var _2 = 0; (_2 < 2); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
reportSuccess = _PE_makeFunction("reportSuccess", function __method__ (description, explanation) {
return formatOut((true_W_((ENVIRONMENT === "browser")) ? " <span style=\"color:green\">✓</span> %s: %s<br/>" : " \033[32m✓\033[0m %s: %s\n"), description, explanation)
}, ((typeof (reportSuccess) !== 'undefined') && reportSuccess), false, "(report-success <string> <string>)");
reportFailure = _PE_makeFunction("reportFailure", function __method__ (description, explanation) {
return formatOut((true_W_((ENVIRONMENT === "browser")) ? " <span style=\"color:red\">✘</span> %s: %s<br/>" : " \033[31m✘\033[0m %s: %s\n"), description, explanation)
}, ((typeof (reportFailure) !== 'undefined') && reportFailure), false, "(report-failure <string> <string>)");
checkEqual = exports.checkEqual = _PE_makeFunction("checkEqual", function __method__ (description, expectedValue, testValue) {
return (true_W_(binary_E_(expectedValue, testValue)) ? reportSuccess(description, formatToString("Values are equal: %=, %=", expectedValue, testValue)) : reportFailure(description, formatToString("Values should be equal: %=, %=", expectedValue, testValue)))
}, ((typeof (checkEqual) !== 'undefined') && checkEqual), false, "(check-equal <string> <object> <object>)");
checkUnequal = _PE_makeFunction("checkUnequal", function __method__ (description, expectedValue, testValue) {
return (!true_W_(binary_E_(expectedValue, testValue)) ? reportSuccess(description, formatToString("Values aren't equal: %=, %=", expectedValue, testValue)) : reportFailure(description, formatToString("Values shouldn't be equal: %=, %=", expectedValue, testValue)))
}, ((typeof (checkUnequal) !== 'undefined') && checkUnequal), false, "(check-unequal <string> <object> <object>)");
checkTrue = exports.checkTrue = _PE_makeFunction("checkTrue", function __method__ (description, expression) {
return (true_W_(expression) ? reportSuccess(description, formatToString("Expression is true: %=", expression)) : reportFailure(description, formatToString("Expression should be true: %=", expression)))
}, ((typeof (checkTrue) !== 'undefined') && checkTrue), false, "(check-true <string> <object>)");
checkFalse = exports.checkFalse = _PE_makeFunction("checkFalse", function __method__ (description, expression) {
return (!true_W_(expression) ? reportSuccess(description, formatToString("Expression is false: %=", expression)) : reportFailure(description, formatToString("Expression should be false: %=", expression)))
}, ((typeof (checkFalse) !== 'undefined') && checkFalse), false, "(check-false <string> <object>)");
checkCondition = exports.checkCondition = _PE_makeFunction("checkCondition", function __method__ (description, conditionClass, _function) {
return (function _6__lambda () {
try {
return (_function(), reportFailure(description, formatToString("Condition %= should have been signaled.", conditionClass)))
} catch (_4) {
if (true_W_(instance_W_(_4, conditionClass))) {
return reportSuccess(description, formatToString("Condition %= was signaled.", conditionClass))
}
}
})()
}, ((typeof (checkCondition) !== 'undefined') && checkCondition), false, "(check-condition <string> <class> <function>)");
checkNoError = exports.checkNoError = _PE_makeFunction("checkNoError", function __method__ (description, _function) {
return (function _7__lambda () {
try {
return (_function(), reportSuccess(description, "No error was signaled."))
} catch (_5) {
if (true_W_((_5 instanceof Error))) {
var condition = _5;
return reportFailure(description, formatToString("Condition %= shouldn't have been signaled.", condition))
}
}
})()
}, ((typeof (checkNoError) !== 'undefined') && checkNoError), false, "(check-no-error <string> <function>)");
checkInstance_W_ = exports.checkInstance_W_ = _PE_makeFunction("checkInstance_W_", function __method__ (description, valueType, value) {
return (true_W_(instance_W_(value, valueType)) ? reportSuccess(description, formatToString("Value is of instance %=: %=", valueType, value)) : reportFailure(description, formatToString("Value should be of instance %=: %=", valueType, value)))
}, ((typeof (checkInstance_W_) !== 'undefined') && checkInstance_W_), false, "(check-instance? <string> <class> <object>)")