var B1288 = require("ralph/core")
{
var B1291,
B1292;
B1291 = require("ralph/regexp");
B1292 = require("ralph/compiler/utilities")}
var B1293 = B1288["make-object"],
B1294 = B1293("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var B1295 = B1288["%make-function"],
B1296 = B1288.concatenate,
B1297 = B1288.slice,
B1298 = B1288.size,
B1299 = B1295("fill_zeros", function fill_zeros__1300 (string__1301)
{return B1296(B1297("0000", 0, (4 - B1298(string__1301))), string__1301)}, false)
var B1304 = B1288.join,
B1305 = B1288.map,
B1306 = B1288["<"],
B1307 = B1288["as-hex-string"],
B1308 = B1288["char-code"],
B1309 = B1288.get,
B1310 = B1288["as-array"],
B1311 = B1295("escape_string", function escape_string__1312 (string__1313)
{return B1304(B1305(function B1314 (char__1315)
{
var B1316 = B1309(B1294, char__1315);
if ($T(B1316))
{
var escaped__1317 = B1316;
return B1296("\\", escaped__1317)}
else
{
var code__1318 = B1308(char__1315);
if ($T(B1306(31, code__1318, 127)))
return char__1315
else
return B1296("\\u", B1299(B1307(code__1318)))}}, B1310(string__1313)), "")}, false)
var B1319 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var B1320 = B1293("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
var B1322 = B1288["member?"],
B1323 = B1288["has?"],
B1324 = B1291.match,
B1325 = B1288["as-string"],
B1326 = B1295("escape_name", function escape_name__1327 (name__1328)
{if ($T(B1322(name__1328, B1319)))
return B1296("R", name__1328)
else
{
var chars__1331 = B1305(function B1329 (char__1330)
{if ($T(B1323(B1320, char__1330)))
return B1309(B1320, char__1330)
else
{
var regexp__1334 = "\\w",
string__1335 = char__1330,
B1336 = string__1335.match(regexp__1334);
if ($T(B1336))
return char__1330
else
return B1296("Z", B1325(B1308(char__1330)))}}, B1310(name__1328));
return B1304(chars__1331, "")}}, false)
var B1337 = B1288.not,
B1338 = B1295("valid_js_nameQ", function valid_js_nameQ__1339 (identifier__1340)
{if ($T(B1337(B1322(identifier__1340, B1319))))
{
var regexp__1343 = "^\\w+$",
string__1344 = identifier__1340;
return string__1344.match(regexp__1343)}}, false)
{
var B1370 = $K("message"),
B1371 = $S("%this-method"),
B1372 = $S("%all-arguments"),
compile_js__1365,
B1347 = B1288["instance?"],
B1348 = B1288["<array>"],
B1349 = B1288["empty?"],
B1350 = B1288.signal,
B1351 = B1288.make,
B1352 = B1288["<error>"],
B1353,
B1354 = B1288["<number>"],
B1355 = B1288["<boolean>"],
B1356 = B1288["<string>"],
B1357 = B1288["<hash-symbol>"],
B1358 = B1288["as-uppercase"],
B1359 = B1288["symbol-name"],
B1360 = B1288["<keyword>"],
B1361 = B1288["<symbol>"],
B1362 = B1288["binary=="],
B1363 = B1288.description,
B1364 = B1295("compile_js", function compile_js__1365 (exp__1366, env__1367)
{B1373:while(true){
var B1368 = exp__1366;
if ($T(B1347(B1368, B1348)))
if ($T(B1349(exp__1366)))
return B1350(B1351(B1352, B1370, "empty expression"))
else
return B1353(exp__1366, env__1367)
else
if ($T(B1347(B1368, B1354)))
return B1325(exp__1366)
else
if ($T(B1347(B1368, B1355)))
if ($T(exp__1366))
return "true"
else
return "false"
else
if ($T(B1347(B1368, B1356)))
return B1296("\"", B1311(exp__1366), "\"")
else
if ($T(B1347(B1368, B1357)))
return B1296("$", B1358(B1359(exp__1366)))
else
if ($T(B1347(B1368, B1360)))
return B1296("$K(\"", B1359(exp__1366), "\")")
else
if ($T(B1347(B1368, B1361)))
{
var B1369 = exp__1366;
if ($T(B1362(B1369, B1371)))
{
arguments = [B1309(env__1367, "current-method"), env__1367];
exp__1366 = arguments[0];
env__1367 = arguments[1];
continue B1373}
else
if ($T(B1362(B1369, B1372)))
return "arguments"
else
return B1326(B1359(exp__1366))}
else
return B1363(exp__1366);
break}}, false);
exports["compile-js"] = B1364}
{
var B1490 = $S("%infix"),
B1491 = $S("%return"),
B1492 = $S("%begin"),
compile_js_exp__1400,
B1387,
B1388 = B1288.rcurry,
B1389 = B1288.rest,
B1390 = B1288[">="],
B1391 = B1288["push-last"],
B1392 = B1288.element,
B1393 = B1288["="],
B1394 = B1288.second,
B1395 = B1292["expression?"],
B1396 = B1288.first,
B1397 = B1288.reduce1,
B1398 = B1288.reduce,
B1399 = B1292["method?"];
B1353 = B1295("compile_js_exp", function compile_js_exp__1400 (exp__1401, env__1402)
{B1493:while(true){
var name__1403 = B1359(B1396(exp__1401)),
B1404 = name__1403;
if ($T(B1362(B1404, "%native-call")))
{
var ____1405 = exp__1401[0],
operator__1406 = exp__1401[1],
values__1407 = $SL.call(exp__1401, 2);
return B1296(operator__1406, B1387(values__1407, env__1402))}
else
if ($T(B1362(B1404, "%infix")))
{
var ____1408 = exp__1401[0],
operator__1409 = exp__1401[1],
values__1410 = $SL.call(exp__1401, 2);
return B1296("(", B1304(B1305(B1388(B1364, env__1402), values__1410), B1296(" ", operator__1409, " ")), ")")}
else
{
var B1411 = B1362(B1404, "%plus"),
B1464;
if ($T(B1411))
B1464 = B1411
else
{
var B1412 = B1362(B1404, "%minus");
if ($T(B1412))
B1464 = B1412
else
{
var B1413 = B1362(B1404, "%times");
if ($T(B1413))
B1464 = B1413
else
B1464 = B1362(B1404, "%divide")}};
if ($T(B1464))
{
var B1465 = B1490,
B1414 = name__1403,
B1466;
if ($T(B1362(B1414, "%plus")))
B1466 = "+"
else
if ($T(B1362(B1414, "%minus")))
B1466 = "-"
else
if ($T(B1362(B1414, "%times")))
B1466 = "*"
else
if ($T(B1362(B1414, "%divide")))
B1466 = "/"
else
B1466 = false;
var B1467 = [B1465, B1466],
B1468 = B1389(exp__1401),
B1469 = B1296(B1467, B1468);
arguments = [B1469, env__1402];
exp__1401 = arguments[0];
env__1402 = arguments[1];
continue B1493}
else
if ($T(B1362(B1404, "%array")))
{
var ____1415 = exp__1401[0],
elements__1416 = $SL.call(exp__1401, 1);
return B1296("[", B1304(B1305(B1388(B1364, env__1402), elements__1416), ", "), "]")}
else
if ($T(B1362(B1404, "%object")))
{
var key_values__1417 = B1389(exp__1401),
entries__1418 = [],
B1419 = (B1298(key_values__1417) / 2),
i__1420 = 0;
while ($T(B1337(B1390(i__1420, B1419))))
{
(function B1421 (i__1422)
{
var name__1423 = B1392(key_values__1417, (i__1422 * 2)),
B1470;
if ($T(B1338(name__1423)))
B1470 = name__1423
else
B1470 = B1364(name__1423, env__1402);
var B1471 = B1364(B1392(key_values__1417, ((i__1422 * 2) + 1)), env__1402),
B1472 = B1296(B1470, ":", B1471);
return B1391(entries__1418, B1472)})(i__1420);
i__1420 = (i__1420 + 1)};
false;
return B1296("{", B1304(entries__1418, ",\n"), "}")}
else
if ($T(B1362(B1404, "%if")))
{
var ____1424 = exp__1401[0],
test__1425 = exp__1401[1],
then__1426 = exp__1401[2],
else__1427 = exp__1401[3],
B1473 = B1364(test__1425, env__1402),
B1474 = B1364(then__1426, env__1402),
B1475;
if ($T(else__1427))
B1475 = B1337(B1393(else__1427, [B1491, false]))
else
B1475 = false;
var B1476;
if ($T(B1475))
B1476 = B1296("\nelse\n", B1364(else__1427, env__1402))
else
B1476 = "";
return B1296("if (", B1473, ")\n", B1474, B1476)}
else
if ($T(B1362(B1404, "%while")))
{
var ____1428 = exp__1401[0],
test__1429 = exp__1401[1],
body__1430 = exp__1401[2];
return B1296("while (", B1364(test__1429, env__1402), ")\n", B1364(body__1430, env__1402))}
else
if ($T(B1362(B1404, "%try")))
{
var ____1431 = exp__1401[0],
body__1432 = exp__1401[1],
var__1433 = exp__1401[2],
catch__1434 = exp__1401[3];
return B1296("try {", B1364(body__1432, env__1402), "}\n", "catch (", B1364(var__1433, env__1402), ")\n", "{", B1364(catch__1434, env__1402), "}")}
else
if ($T(B1362(B1404, "%return")))
return B1296("return ", B1364(B1394(exp__1401), env__1402))
else
if ($T(B1362(B1404, "%begin")))
return B1296("{\n", B1304(B1305(B1388(B1364, env__1402), B1389(exp__1401)), ";\n"), "}")
else
if ($T(B1362(B1404, "%set")))
{
var ____1435 = exp__1401[0],
var__1436 = exp__1401[1],
value__1437 = exp__1401[2];
return B1296(B1364(var__1436, env__1402), " = ", B1364(value__1437, env__1402))}
else
if ($T(B1362(B1404, "%method")))
{
var ____1438 = exp__1401[0],
name__1439 = exp__1401[1],
arguments__1440 = exp__1401[2],
body__1441 = exp__1401[3],
previous_method__1442 = B1309(env__1402, "current-method"),
B1477 = B1364(name__1439, env__1402),
B1478 = B1304(B1305(B1388(B1364, env__1402), arguments__1440), ", ");
env__1402["current-method"] = name__1439;
var bodyT__1443 = B1364(body__1441, env__1402);
env__1402["current-method"] = previous_method__1442;
var B1479;
if ($T(B1395(body__1441)))
B1479 = B1362(B1396(body__1441), B1492)
else
B1479 = false;
var B1480;
if ($T(B1479))
B1480 = bodyT__1443
else
B1480 = B1296("{", bodyT__1443, "}");
return B1296("function ", B1477, " (", B1478, ")\n", B1480)}
else
if ($T(B1362(B1404, "%var")))
{
var ____1444 = exp__1401[0],
bindings__1445 = $SL.call(exp__1401, 1);
return B1296("var ", B1304(B1305(function B1446 (binding__1447)
{
var B1448;
if ($T(B1347(binding__1447, B1348)))
B1448 = binding__1447
else
B1448 = [binding__1447, false];
var var__1449 = B1448[0],
value__1450 = B1448[1],
B1481 = B1364(var__1449, env__1402),
B1482;
if ($T(value__1450))
B1482 = B1296(" = ", B1364(value__1450, env__1402))
else
B1482 = "";
return B1296(B1481, B1482)}, bindings__1445), ",\n"))}
else
if ($T(B1362(B1404, "%native")))
return B1397(B1296, B1305(function B1451 (e__1452)
{
var B1453 = e__1452,
B1454 = B1347(B1453, B1361),
B1483;
if ($T(B1454))
B1483 = B1454
else
B1483 = B1347(B1453, B1348);
if ($T(B1483))
return B1364(e__1452, env__1402)
else
return B1325(e__1452)}, B1389(exp__1401)))
else
if ($T(B1362(B1404, "%native-name")))
return B1296("\"", B1326(B1394(exp__1401)), "\"")
else
if ($T(B1362(B1404, "%get-property")))
{
var ____1455 = exp__1401[0],
object__1456 = exp__1401[1],
properties__1457 = $SL.call(exp__1401, 2),
B1484;
if ($T(B1347(object__1456, B1354)))
B1484 = B1296("(", B1364(object__1456, env__1402), ")")
else
B1484 = B1364(object__1456, env__1402);
var B1487 = B1398(function B1458 (result__1459, property__1460)
{
var B1485;
if ($T(B1347(property__1460, B1356)))
B1485 = B1338(property__1460)
else
B1485 = false;
var B1486;
if ($T(B1485))
B1486 = B1296(".", property__1460)
else
B1486 = B1296("[", B1364(property__1460, env__1402), "]");
return B1296(result__1459, B1486)}, "", properties__1457);
return B1296(B1484, B1487)}
else
if ($T(B1362(B1404, "%symbol")))
return B1296("$S", B1387(B1389(exp__1401), env__1402))
else
{
var function__1461 = exp__1401[0],
values__1462 = $SL.call(exp__1401, 1),
functionT__1463 = B1364(function__1461, env__1402),
B1488;
if ($T(B1399(function__1461)))
B1488 = B1296("(", functionT__1463, ")")
else
B1488 = functionT__1463;
var B1489 = B1387(values__1462, env__1402);
return B1296(B1488, B1489)}};
break}}, false)}
B1387 = B1295("compile_js_call", function compile_js_call__1494 (values__1495, env__1496)
{return B1296("(", B1304(B1305(B1388(B1364, env__1496), values__1495), ", "), ")")}, false)
