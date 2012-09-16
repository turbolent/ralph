{
var B1244;
false;
B1244 = require("ralph/core")}
false
{
var LdateG__1245;
false;
LdateG__1245 = Date;
exports["<date>"] = LdateG__1245}
{
var TsettersT__1246;
false;
TsettersT__1246 = [["timestamp", "setTime"], ["day", "setDate"], ["month", "setMonth"], ["year", "setYear"], ["minutes", "setMinutes"], ["seconds", "setSeconds"], ["hours", "setHours"], ["milliseconds", "setMilliseconds"]]}
{
var Mmake_method__1255 = B1244["%make-method"],
not__1256 = B1244.not,
anyQ__1257 = B1244["any?"],
emptyQ__1258 = B1244["empty?"],
get__1259 = B1244.get,
rest__1260 = B1244.rest,
first__1261 = B1244.first,
as_object__1262 = B1244["as-object"],
initialize__1263;
false;
initialize__1263 = Mmake_method__1255("initialize", function B1247__1264 (date__1265)
{
var options__1266 = $SL.call(arguments, 1),
arguments__1267 = as_object__1262(options__1266),
B1248__1268 = TsettersT__1246,
B1249__1269,
B1251__1270,
B1250__1271 = [B1248__1268];
while (true)
{
var B1252__1272 = B1249__1269,
B1280;
if ($T(B1252__1272))
{B1280 = B1252__1272}
else
B1280 = anyQ__1257(emptyQ__1258, B1250__1271);
var B1281 = not__1256(B1280);
if ($T(B1281))
{
var setter__1273 = first__1261(B1248__1268);
(function B1253__1274 (setter__1275)
{
var keyword__1276 = setter__1275[0],
function__1277 = setter__1275[1],
B1254__1278 = get__1259(arguments__1267, keyword__1276);
if ($T(B1254__1278))
{
var value__1279 = B1254__1278;
return date__1265[function__1277](value__1279)}})(setter__1273);
B1248__1268 = rest__1260(B1248__1268);
B1250__1271 = [B1248__1268]}
else
break};
return B1251__1270}, false, LdateG__1245, initialize__1263)}
{
var Mmake_function__1283 = B1244["%make-function"],
locale_time_string__1284;
false;
locale_time_string__1284 = Mmake_function__1283("locale_time_string", function locale_time_string__1285 (date__1286)
{
var B1282__1287 = date__1286;
return B1282__1287.toLocaleTimeString()}, false);
exports["locale-time-string"] = locale_time_string__1284}
