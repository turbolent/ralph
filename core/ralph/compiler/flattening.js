var B1217 = require("ralph/core")
var B1219 = require("ralph/compiler/utilities")
var B1240 = $S("%begin"),
B1221 = B1217["%make-function"],
B1222 = B1217.reduce1,
B1223 = B1217.concatenate,
B1224 = B1217.map,
B1225 = B1217["instance?"],
B1226 = B1217["<array>"],
B1227 = B1217.not,
B1228 = B1217["empty?"],
B1229 = B1217["binary=="],
B1230 = B1217.first,
B1231 = B1217.rest,
B1232,
B1233 = B1221("flatten_begins", function flatten_begins__1234 (exps__1235)
{return B1222(B1223, B1224(function B1236 (exp__1237)
{
var flattened__1238 = B1232(exp__1237),
B1239;
if ($T(B1225(flattened__1238, B1226)))
if ($T(B1227(B1228(flattened__1238))))
B1239 = B1229(B1230(flattened__1238), B1240)
else
B1239 = false
else
B1239 = false;
if ($T(B1239))
return B1231(flattened__1238)
else
return [flattened__1238]}, exps__1235))}, false)
var B1243 = B1217.reduce,
B1244 = B1219["var?"],
B1245 = B1217["do"],
B1246 = B1217["push-last"],
B1247 = B1217.last,
B1248 = B1217["second-setter"],
B1249 = B1217.third,
B1250 = B1217.second,
B1251 = B1219["set?"],
B1252 = B1221("flatten_varsN", function flatten_varsN__1253 (exps__1254)
{return B1243(function B1255 (result__1256, exp__1257)
{
var previous__1258;
if ($T(B1227(B1228(result__1256))))
previous__1258 = B1247(result__1256)
else
previous__1258 = false;
var previous_varQ__1259;
if ($T(previous__1258))
previous_varQ__1259 = B1244(previous__1258)
else
previous_varQ__1259 = false;
var B1265;
if ($T(previous_varQ__1259))
B1265 = B1244(exp__1257)
else
B1265 = false;
if ($T(B1265))
{
B1245(function B1260 (binding__1261)
{return B1246(B1247(result__1256), binding__1261)}, B1231(exp__1257));
return result__1256}
else
{
var mergeQ__1262;
if ($T(previous_varQ__1259))
mergeQ__1262 = B1251(exp__1257)
else
mergeQ__1262 = false;
var binding__1263;
if ($T(mergeQ__1262))
binding__1263 = B1247(B1247(result__1256))
else
binding__1263 = false;
var identifier__1264;
if ($T(mergeQ__1262))
identifier__1264 = B1250(exp__1257)
else
identifier__1264 = false;
if ($T(B1229(B1230(binding__1263), identifier__1264)))
{
B1248(binding__1263, B1249(exp__1257));
return result__1256}
else
return B1223(result__1256, [exp__1257])}}, [], exps__1254)}, false)
{
var B1284 = $S("%var"),
flatten_statementsN__1273,
B1269 = B1217["last-setter"],
B1270 = B1219["maybe-begin"],
B1271 = B1217["third-setter"],
B1272 = B1217["symbol-name"];
B1232 = B1221("flatten_statementsN", function flatten_statementsN__1273 (exp__1274)
{B1285:while(true){
if ($T(B1225(exp__1274, B1226)))
{
var B1275 = B1272(B1230(exp__1274)),
B1276 = B1229(B1275, "%method"),
B1283;
if ($T(B1276))
B1283 = B1276
else
{
var B1277 = B1229(B1275, "%while");
if ($T(B1277))
B1283 = B1277
else
B1283 = B1229(B1275, "%set")};
if ($T(B1283))
{
B1269(exp__1274, flatten_statementsN__1273(B1247(exp__1274)));
return exp__1274}
else
if ($T(B1229(B1275, "%begin")))
{
var ____1278 = exp__1274[0],
exps__1279 = $SL.call(exp__1274, 1);
return B1270(B1252(B1233(exps__1279)))}
else
if ($T(B1229(B1275, "%bind")))
{
var ____1280 = exp__1274[0],
binding__1281 = exp__1274[1],
body__1282 = exp__1274[2];
arguments = [[B1240, [B1284, binding__1281], body__1282]];
exp__1274 = arguments[0];
continue B1285}
else
if ($T(B1229(B1275, "%if")))
{
B1271(exp__1274, flatten_statementsN__1273(B1249(exp__1274)));
B1269(exp__1274, flatten_statementsN__1273(B1247(exp__1274)));
return exp__1274}
else
if ($T(B1229(B1275, "%try")))
{
B1248(exp__1274, flatten_statementsN__1273(B1250(exp__1274)));
B1269(exp__1274, flatten_statementsN__1273(B1247(exp__1274)));
return exp__1274}
else
return B1224(flatten_statementsN__1273, exp__1274)}
else
return exp__1274;
break}}, false);
exports["flatten-statements!"] = B1232}
