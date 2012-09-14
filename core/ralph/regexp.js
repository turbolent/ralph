{
var B1194;
false;
B1194 = require("ralph/core")}
false
{
var LregexpG__1195;
false;
LregexpG__1195 = RegExp;
exports["<regexp>"] = LregexpG__1195}
{
var Mmake_method__1199 = B1194["%make-method"],
concatenate__1200 = B1194.concatenate,
Mkeys__1201 = B1194["%keys"],
initialize__1202;
false;
initialize__1202 = Mmake_method__1199("initialize", function B1196__1203 (regexp__1204)
{
var B1197__1205 = $SL.call(arguments, 1),
B1198__1206 = Mkeys__1201(B1197__1205, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}),
pattern__1207 = B1198__1206.pattern,
globalQ__1208 = B1198__1206["global?"],
ignore_caseQ__1209 = B1198__1206["ignore-case?"],
multilineQ__1210 = B1198__1206["multiline?"];
if ($T(pattern__1207))
{
var B1212;
if ($T(globalQ__1208))
{B1212 = "g"}
else
B1212 = "";
var B1213;
if ($T(ignore_caseQ__1209))
{B1213 = "i"}
else
B1213 = "";
var B1214;
if ($T(multilineQ__1210))
{B1214 = "m"}
else
B1214 = "";
var flags__1211 = concatenate__1200(B1212, B1213, B1214);
return regexp__1204.compile(pattern__1207)}}, false, LregexpG__1195, initialize__1202)}
{
var Mmake_function__1215 = B1194["%make-function"],
G__1216 = B1194[">"],
find__1217;
false;
find__1217 = Mmake_function__1215("find", function find__1218 (regexp__1219, string__1220)
{
var position__1221 = string__1220.search(regexp__1219);
if ($T(G__1216(position__1221, -1)))
{return position__1221}}, false)}
{
var match__1222;
false;
match__1222 = Mmake_function__1215("match", function match__1223 (regexp__1224, string__1225)
{return string__1225.match(regexp__1224)}, false);
exports.match = match__1222}
