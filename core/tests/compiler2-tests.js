var MODULE = this;
var _3 = ["ralph/core", "ralph/test", "ralph/stream", "ralph/reader", "ralph/compiler2"];
for (var _2 = 0; (_2 < 5); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
ENVIRONMENT = make(_CL_environment);
_SET_get(ENVIRONMENT, "macros", "alpha", function _4__lambda (__, x, y) {
return [symbol("beta"), x, y]
});
_SET_get(ENVIRONMENT, "macros", "beta", function _5__lambda (__, x, y) {
return [symbol("gamma"), x, y]
});
checkEqual("macroexpand-1: alpha", [symbol("beta"), 1, 2], macroexpand1([symbol("alpha"), 1, 2], ENVIRONMENT));
checkEqual("macroexpand: alpha", [symbol("gamma"), 1, 2], macroexpand([symbol("alpha"), 1, 2], ENVIRONMENT));
checkEqual("macroexpand: bind", [[symbol("%method"), false, [symbol("a")], [symbol("bind"), [[symbol("b"), [symbol("+"), symbol("a"), 1]]], symbol("b")]], 1], macroexpand([symbol("bind"), [[symbol("a"), 1], [symbol("b"), [symbol("+"), symbol("a"), 1]]], symbol("b")], ENVIRONMENT));
checkEqual("macroexpand: cond", [symbol("if"), [symbol("a")], [symbol("begin"), 1, 2], [symbol("cond"), [symbol("b"), 3], [_k('else'), 4, 5]]], macroexpand([symbol("cond"), [[symbol("a")], 1, 2], [symbol("b"), 3], [_k('else'), 4, 5]], ENVIRONMENT));
checkEqual("macroexpand: prevent expansion of sepcial forms", [[symbol("%method"), false, [symbol("cond")], [symbol("bind"), [], symbol("d")]], [[symbol("a")], symbol("b")]], macroexpand([symbol("bind"), [[symbol("cond"), [[symbol("a")], symbol("b")], [_k('else'), symbol("c")]]], symbol("d")], ENVIRONMENT));
checkEqual("macroexpand-all: bind b", symbol("b"), macroexpandAll([symbol("bind"), [], symbol("b")], ENVIRONMENT));
checkEqual("macroexpand-all: bind b", [[symbol("%method"), false, [symbol("b")], symbol("b")], [symbol("+"), symbol("a"), 1]], macroexpandAll([symbol("bind"), [[symbol("b"), [symbol("+"), symbol("a"), 1]]], symbol("b")], ENVIRONMENT));
checkEqual("macroexpand-all: bind a, b", [[symbol("%method"), false, [symbol("a")], [[symbol("%method"), false, [symbol("b")], symbol("b")], [symbol("+"), symbol("a"), 1]]], 1], macroexpandAll([symbol("bind"), [[symbol("a"), 1], [symbol("b"), [symbol("+"), symbol("a"), 1]]], symbol("b")], ENVIRONMENT));
checkEqual("macroexpand-all: cond", [symbol("if"), [symbol("a")], [symbol("%begin"), 1, 2], [symbol("if"), symbol("b"), 3, [symbol("%begin"), 4, 5]]], macroexpandAll([symbol("cond"), [[symbol("a")], 1, 2], [symbol("b"), 3], [_k('else'), 4, 5]], ENVIRONMENT))