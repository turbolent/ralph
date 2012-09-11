{
var B1312;
false;
B1312 = require("ralph/core")}
{
var B1314;
false;
B1314 = require("ralph/stream")}
{
var Mmake_function__1315 = B1312["%make-function"],
as_string__1316 = B1312["as-string"],
format_integer__1317;
false;
format_integer__1317 = Mmake_function__1315("format_integer", function format_integer__1318 (number__1319)
{return as_string__1316(number__1319)}, false)}
{
var B1400 = $K("message"),
ralphScoreCCtrueQ = B1312["true?"],
binaryEE__1323 = B1312["binary=="],
description__1324 = B1312.description,
signal__1325 = B1312.signal,
make__1326 = B1312.make,
LerrorG__1327 = B1312["<error>"],
concatenate__1328 = B1312.concatenate,
as_lowercase__1329 = B1312["as-lowercase"],
not__1330 = B1312.not,
emptyQ__1331 = B1312["empty?"],
G__1332 = B1312[">"],
stream_write__1333 = B1314["stream-write"],
slice__1334 = B1312.slice;
false;
var second__1335 = B1312.second,
element__1336 = B1312.element,
position__1337 = B1312.position,
format__1338;
false;
format__1338 = Mmake_function__1315("format", function format__1339 (stream__1340, control_string__1341)
{
var args__1342 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1343 = function dispatch__1344 (char__1345, arg__1346)
{
var string__1355 = char__1345,
B1320__1347 = string__1355.toLowerCase(),
object2__1357 = "s",
object1__1356 = B1320__1347,
B1321__1348 = (object1__1356 === object2__1357),
B1387;
if ($T(B1321__1348))
{B1387 = B1321__1348}
else
{
var object2__1359 = "c",
object1__1358 = B1320__1347;
B1387 = (object1__1358 === object2__1359)};
if ($T(B1387))
{return arg__1346}
else
{
var object2__1361 = "=",
object1__1360 = B1320__1347,
B1388 = (object1__1360 === object2__1361);
if ($T(B1388))
{
var B1322__1349 = description__1324(arg__1346);
if ($T(B1322__1349))
{return B1322__1349}
else
return ""}
else
{
var object2__1363 = "b",
object1__1362 = B1320__1347,
B1389 = (object1__1362 === object2__1363);
if ($T(B1389))
{return format_integer__1317(arg__1346, 2)}
else
{
var object2__1365 = "o",
object1__1364 = B1320__1347,
B1390 = (object1__1364 === object2__1365);
if ($T(B1390))
{return format_integer__1317(arg__1346, 8)}
else
{
var object2__1367 = "d",
object1__1366 = B1320__1347,
B1391 = (object1__1366 === object2__1367);
if ($T(B1391))
{return format_integer__1317(arg__1346, 10)}
else
{
var object2__1369 = "x",
object1__1368 = B1320__1347,
B1392 = (object1__1368 === object2__1369);
if ($T(B1392))
{return format_integer__1317(arg__1346, 16)}
else
{
var object2__1371 = "m",
object1__1370 = B1320__1347,
B1393 = (object1__1370 === object2__1371);
if ($T(B1393))
{
arg__1346(stream__1340);
return ""}
else
{
var error__1372 = make__1326(LerrorG__1327, B1400, concatenate__1328("Unknown format dispatch character ", char__1345));
throw(error__1372);
return false}}}}}}}},
index__1350 = 0;
while (true)
{
var value__1373 = emptyQ__1331(control_string__1341),
B1399 = !(ralphScoreCCtrueQ(value__1373));
if ($T(B1399))
{
var next_dispatch__1351 = position__1337(control_string__1341, "%");
if ($T(G__1332(next_dispatch__1351, 0)))
{
var end__1376 = next_dispatch__1351,
start__1375 = 0,
array__1374 = control_string__1341,
B1394 = array__1374.slice(start__1375, end__1376);
stream_write__1333(stream__1340, B1394);
var end__1379,
start__1378 = next_dispatch__1351,
array__1377 = control_string__1341,
B1395 = array__1377.slice(start__1378, end__1379);
control_string__1341 = B1395}
else
if ($T(next_dispatch__1351))
{
var arg__1352 = element__1336(args__1342, index__1350),
sequence__1380 = control_string__1341,
char__1353 = sequence__1380[1],
object2__1382 = "%",
object1__1381 = char__1353,
percent__1354 = (object1__1381 === object2__1382),
B1396;
if ($T(percent__1354))
{B1396 = "%"}
else
B1396 = dispatch__1343(char__1353, arg__1352);
stream_write__1333(stream__1340, B1396);
var end__1385,
start__1384 = 2,
array__1383 = control_string__1341,
B1397 = array__1383.slice(start__1384, end__1385);
control_string__1341 = B1397;
var value__1386 = percent__1354,
B1398 = !(ralphScoreCCtrueQ(value__1386));
if ($T(B1398))
{index__1350 = (index__1350 + 1)}}
else
{
stream_write__1333(stream__1340, control_string__1341);
control_string__1341 = ""}}
else
break};
return false}, false);
exports.format = format__1338}
{
var apply__1401 = B1312.apply,
Tstandard_outT__1402 = B1314["*standard-out*"],
format_out__1403;
false;
format_out__1403 = Mmake_function__1315("format_out", function format_out__1404 (control_string__1405)
{
var args__1406 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return apply__1401(format__1338, Tstandard_outT__1402, control_string__1405, args__1406)}, false);
exports["format-out"] = format_out__1403}
{
var stream_contents__1407 = B1314["stream-contents"],
Lstring_streamG__1408 = B1314["<string-stream>"],
format_to_string__1409;
false;
format_to_string__1409 = Mmake_function__1315("format_to_string", function format_to_string__1410 (control_string__1411)
{
var args__1412 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1413 = make__1326(Lstring_streamG__1408);
apply__1401(format__1338, stream__1413, control_string__1411, args__1412);
return stream_contents__1407(stream__1413)}, false);
exports["format-to-string"] = format_to_string__1409}
