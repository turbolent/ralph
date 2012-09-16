{
var B1294;
false;
B1294 = require("ralph/core")}
false
{
var LregexpG__1295;
false;
LregexpG__1295 = RegExp;
exports["<regexp>"] = LregexpG__1295}
{
var Mmake_method__1301 = B1294["%make-method"],
concatenate__1302 = B1294.concatenate,
Mkeys__1303 = B1294["%keys"],
initialize__1304;
false;
initialize__1304 = Mmake_method__1301("initialize", function B1296__1305 (regexp__1306)
{
var B1297__1307 = $SL.call(arguments, 1),
B1298__1308 = Mkeys__1303(B1297__1307, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}),
pattern__1309 = B1298__1308.pattern,
globalQ__1310 = B1298__1308["global?"],
ignore_caseQ__1311 = B1298__1308["ignore-case?"],
multilineQ__1312 = B1298__1308["multiline?"];
if ($T(pattern__1309))
{
var B1316;
if ($T(globalQ__1310))
{B1316 = "g"}
else
B1316 = "";
var B1317;
if ($T(ignore_caseQ__1311))
{B1317 = "i"}
else
B1317 = "";
var B1318;
if ($T(multilineQ__1312))
{B1318 = "m"}
else
B1318 = "";
var flags__1313 = concatenate__1302(B1316, B1317, B1318),
B1300__1314 = regexp__1306,
B1299__1315 = pattern__1309;
return B1300__1314.compile(B1299__1315)}}, false, LregexpG__1295, initialize__1304)}
{
var Mmake_function__1321 = B1294["%make-function"],
G__1322 = B1294[">"],
find__1323;
false;
find__1323 = Mmake_function__1321("find", function find__1324 (regexp__1325, string__1326)
{
var B1320__1327 = string__1326,
B1319__1328 = regexp__1325,
position__1329 = B1320__1327.search(B1319__1328);
if ($T(G__1322(position__1329, -1)))
{return position__1329}}, false)}
{
var match__1332;
false;
match__1332 = Mmake_function__1321("match", function match__1333 (regexp__1334, string__1335)
{
var B1331__1336 = string__1335,
B1330__1337 = regexp__1334;
return B1331__1336.match(B1330__1337)}, false);
exports.match = match__1332}
