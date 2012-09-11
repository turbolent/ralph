{
var B1420;
false;
B1420 = require("ralph/core")}
false
{
var LregexpG__1421;
false;
LregexpG__1421 = RegExp;
exports["<regexp>"] = LregexpG__1421}
{
var Mmake_method__1425 = B1420["%make-method"],
concatenate__1426 = B1420.concatenate,
Mkeys__1427 = B1420["%keys"],
initialize__1428;
false;
initialize__1428 = Mmake_method__1425("initialize", function B1422__1429 (regexp__1430)
{
var B1423__1431 = $SL.call(arguments, 1),
B1424__1432 = Mkeys__1427(B1423__1431, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}),
pattern__1433 = B1424__1432.pattern,
globalQ__1434 = B1424__1432["global?"],
ignore_caseQ__1435 = B1424__1432["ignore-case?"],
multilineQ__1436 = B1424__1432["multiline?"];
if ($T(pattern__1433))
{
var B1438;
if ($T(globalQ__1434))
{B1438 = "g"}
else
B1438 = "";
var B1439;
if ($T(ignore_caseQ__1435))
{B1439 = "i"}
else
B1439 = "";
var B1440;
if ($T(multilineQ__1436))
{B1440 = "m"}
else
B1440 = "";
var flags__1437 = concatenate__1426(B1438, B1439, B1440);
return regexp__1430.compile(pattern__1433)}}, false, LregexpG__1421, initialize__1428)}
{
var Mmake_function__1441 = B1420["%make-function"],
G__1442 = B1420[">"],
find__1443;
false;
find__1443 = Mmake_function__1441("find", function find__1444 (regexp__1445, string__1446)
{
var position__1447 = string__1446.search(regexp__1445);
if ($T(G__1442(position__1447, -1)))
{return position__1447}}, false)}
{
var match__1448;
false;
match__1448 = Mmake_function__1441("match", function match__1449 (regexp__1450, string__1451)
{return string__1451.match(regexp__1450)}, false);
exports.match = match__1448}
