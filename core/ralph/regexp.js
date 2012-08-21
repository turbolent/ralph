var B204 = require("ralph/core")
false
{
var B205 = RegExp;
exports["<regexp>"] = B205}
var B209 = B204["%make-method"],
B210 = B204.concatenate,
B211 = B204["%keys"],
B212 = B209("initialize", function B213 (regexp__214)
{
var B215 = $SL.call(arguments, 1),
B216 = B211(B215, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}),
pattern__217 = B216.pattern,
globalQ__218 = B216["global?"],
ignore_caseQ__219 = B216["ignore-case?"],
multilineQ__220 = B216["multiline?"];
if ($T(pattern__217))
{
var B222;
if ($T(globalQ__218))
B222 = "g"
else
B222 = "";
var B223;
if ($T(ignore_caseQ__219))
B223 = "i"
else
B223 = "";
var B224;
if ($T(multilineQ__220))
B224 = "m"
else
B224 = "";
var flags__221 = B210(B222, B223, B224);
return regexp__214.compile(pattern__217)}}, false, B205, B212)
var B225 = B204["%make-function"],
B226 = B204[">"],
B227 = B225("find", function find__228 (regexp__229, string__230)
{
var position__231 = string__230.search(regexp__229);
if ($T(B226(position__231, -1)))
return position__231}, false)
{
var B232 = B225("match", function match__233 (regexp__234, string__235)
{return string__235.match(regexp__234)}, false);
exports.match = B232}
