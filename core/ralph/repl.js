(function _6__lambda (_4, _5) {
var MODULE = this;
var _3 = ["ralph/core", "readline"];
for (var _2 = 0; (_2 < 2); _2 = (_2 + 1)) {
var _1 = require(_3[_2]);
for (var _0 in _1) {
if (_1.hasOwnProperty(_0)) {
MODULE[_0] = _1[_0]
}
}
};
PROMPT = "> ";
quit = _PE_makeFunction("quit", function __method__ () {
return .exit(process, 0)
}, ((typeof (quit) !== 'undefined') && quit), false, "(quit)");
repl = _PE_makeFunction("repl", function __method__ () {
return (function _7__lambda (_interface) {
_interface = createInterface((_4 = process, _5 = "stdin", (_4 && _4.hasOwnProperty(_5) && _4[_5])), (_4 = process, _5 = "stdout", (_4 && _4.hasOwnProperty(_5) && _4[_5])));
return (function _8__lambda () {
while (true_W_(true)) {
.question(_interface, PROMPT, function _9__lambda (line) {
return .log(console, line)
})
};
return false
})()
})()
}, ((typeof (repl) !== 'undefined') && repl), false, "(repl)")
})()