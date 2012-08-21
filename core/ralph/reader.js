var B200 = require("ralph/core")
{
var B237,
B238,
B239;
B237 = require("ralph/stream");
B238 = require("ralph/format");
B239 = require("ralph/regexp")}
var B245 = $K("ignore-case?"),
B246 = $K("pattern"),
B240 = B200.map,
B241 = B200.curry,
B242 = B200.make,
B243 = B239["<regexp>"],
B244 = B240(B241(B242, B243, B245, true, B246), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var B247 = B242(B243, B246, "(.*)[\n\r]?")
var B248 = "\t\n\r\v\f\u00a0\ufeff "
var B249 = B200.concatenate,
B250 = B242(B243, B246, B249("[", B248, "]*"))
var B251 = B242(B243, B246, B249("[^\\[\\]();`,", B248, "]+"))
var B253 = B200["%make-function"],
B254 = B237["stream-read"],
B255 = B200.size,
B256 = B200.first,
B257 = B239.match,
B258 = B237["stream-remaining-contents"],
B259 = B253("match_stream", function match_stream__260 (regexp__261, stream__262)
{
var regexp__267 = regexp__261,
string__268 = B258(stream__262),
B263 = string__268.match(regexp__267);
if ($T(B263))
{
var result__264 = B263;
B254(stream__262, B255(B256(result__264)));
return result__264}}, false)
var B269 = B253("read_line", function read_line__270 (stream__271)
{return B259(B247, stream__271)}, false)
var B272 = B253("read_whitespace", function read_whitespace__273 (stream__274)
{return B259(B250, stream__274)}, false)
var B291 = $KEY,
B292 = $REST,
B277 = B200["binary=="],
B278 = B200["as-number"],
B279 = B200.last,
B280 = B200.keyword,
B281 = B200["but-last"],
B282 = B200.symbol,
B283 = B200["any?"],
B284 = B200.rcurry,
B285 = B253("make_atom", function make_atom__286 (value__287)
{
var B288 = value__287;
if ($T(B277(B288, "#t")))
return true
else
if ($T(B277(B288, "#f")))
return false
else
if ($T(B277(B288, "#key")))
return B291
else
if ($T(B277(B288, "#rest")))
return B292
else
{
var B289 = B283(B284(B257, value__287), B244);
if ($T(B289))
{
var number__290 = B289;
return B278(B256(number__290))}
else
if ($T(B277(B279(value__287), ":")))
return B280(B281(value__287))
else
return B282(value__287)}}, false)
var B310 = $K("radix"),
B294 = B200.not,
B295 = B237["stream-at-end?"],
B296 = B200.signal,
B297 = B237["stream-write"],
B298 = B200["code-char"],
B299 = B200["parse-integer"],
B300 = B237["stream-read-element"],
B301 = B237["stream-contents"],
B302 = B237["<string-stream>"],
B303 = B253("read_string", function read_string__304 (stream__305)
{
var result__306 = B242(B302),
char__307 = B300(stream__305);
while ($T(B294(B277(char__307, "\""))))
{
if ($T(B295(stream__305)))
B296("missing end of string");
var B309;
if ($T(B277(char__307, "\\")))
{
var B308 = B300(stream__305);
if ($T(B277(B308, "\"")))
B309 = "\""
else
if ($T(B277(B308, "\\")))
B309 = "\\"
else
if ($T(B277(B308, "b")))
B309 = "\b"
else
if ($T(B277(B308, "f")))
B309 = "\f"
else
if ($T(B277(B308, "n")))
B309 = "\n"
else
if ($T(B277(B308, "r")))
B309 = "\r"
else
if ($T(B277(B308, "t")))
B309 = "\t"
else
if ($T(B277(B308, "v")))
B309 = "\v"
else
if ($T(B277(B308, "u")))
B309 = B298(B299(B254(stream__305, 4), B310, 16))
else
B309 = B296("bad escape sequence")}
else
B309 = char__307;
B297(result__306, B309);
char__307 = B300(stream__305)};
return B301(result__306)}, false)
var B311 = ["%backquote", "%comma"]
{
var B346 = $S("%backquote"),
B347 = $S("%comma"),
B348 = $S("%array"),
B317 = B200["push-last"],
B318 = B200["member?"],
B319 = B200["symbol-name"],
B320 = B200["pop-last"],
B321 = B238["format-to-string"],
B322 = B237["stream-unread-element"],
B323 = B200["empty?"],
B324 = B200["%keys"],
B325 = B253("read", function read__326 (stream__327)
{
var B328 = $SL.call(arguments, 1),
B329 = B324(B328, {"eof-error?":true,
"eof-value":false}),
eof_errorQ__330 = B329["eof-error?"],
eof_value__331 = B329["eof-value"],
stack__332 = [[]],
ends__333 = [],
add_to_stackN__334,
add_lastN__335;
add_to_stackN__334 = function add_to_stackN__336 (value__337)
{
B317(B279(stack__332), value__337);
if ($T(B318(B319(B256(B279(stack__332))), B311)))
return add_lastN__335()};
add_lastN__335 = function add_lastN__338 ()
{
var value__339 = B320(stack__332);
return add_to_stackN__334(value__339)};
while ($T(B294(B295(stream__327))))
{
B272(stream__327);
var char__340 = B300(stream__327),
B341 = char__340;
if ($T(B277(B341, ";")))
B269(stream__327)
else
if ($T(B277(B341, "`")))
B317(stack__332, [B346])
else
if ($T(B277(B341, ",")))
B317(stack__332, [B347])
else
if ($T(B277(B341, "(")))
{
B317(ends__333, ")");
B317(stack__332, [])}
else
if ($T(B277(B341, "[")))
{
B317(ends__333, "]");
B317(stack__332, [B348])}
else
if ($T(B277(B341, B279(ends__333))))
{
B320(ends__333);
add_lastN__335()}
else
{
var B342 = B277(B341, ")"),
B345;
if ($T(B342))
B345 = B342
else
B345 = B277(B341, "]");
if ($T(B345))
B296(B321("too many closings: %=", char__340))
else
if ($T(B277(B341, "\"")))
add_to_stackN__334(B303(stream__327))
else
{
B322(stream__327);
add_to_stackN__334(B285(B256(B259(B251, stream__327))))}};
B272(stream__327)};
if ($T(B323(ends__333)))
{
var value__343 = B256(B279(stack__332)),
B344 = value__343;
if ($T(B344))
return B344
else
if ($T(eof_errorQ__330))
return B296("no object")
else
return eof_value__331}
else
return B296(B321("missing closings: %=", ends__333))}, false);
exports.read = B325}
