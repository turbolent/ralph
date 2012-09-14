{
var B1423;
false;
B1423 = require("ralph/core")}
false
{
var Mmake_function__1424 = B1423["%make-function"],
instanceQ__1425 = B1423["instance?"],
LarrayG__1426 = B1423["<array>"],
not__1427 = B1423.not,
emptyQ__1428 = B1423["empty?"],
first__1429 = B1423.first,
LsymbolG__1430 = B1423["<symbol>"],
expressionQ__1431;
false;
expressionQ__1431 = Mmake_function__1424("expressionQ", function expressionQ__1432 (form__1433)
{if ($T(instanceQ__1425(form__1433, LarrayG__1426)))
{if ($T(not__1427(emptyQ__1428(form__1433))))
{return instanceQ__1425(first__1429(form__1433), LsymbolG__1430)}}}, false);
exports["expression?"] = expressionQ__1431}
{
var binaryEE__1434 = B1423["binary=="],
symbol_name__1435 = B1423["symbol-name"],
varQ__1436;
false;
varQ__1436 = Mmake_function__1424("varQ", function varQ__1437 (exp__1438)
{if ($T(expressionQ__1431(exp__1438)))
{return binaryEE__1434(symbol_name__1435(first__1429(exp__1438)), "%var")}}, false);
exports["var?"] = varQ__1436}
{
var setQ__1439;
false;
setQ__1439 = Mmake_function__1424("setQ", function setQ__1440 (exp__1441)
{if ($T(expressionQ__1431(exp__1441)))
{return binaryEE__1434(symbol_name__1435(first__1429(exp__1441)), "%set")}}, false);
exports["set?"] = setQ__1439}
{
var defineQ__1442;
false;
defineQ__1442 = Mmake_function__1424("defineQ", function defineQ__1443 (exp__1444)
{if ($T(expressionQ__1431(exp__1444)))
{return binaryEE__1434(symbol_name__1435(first__1429(exp__1444)), "%define")}}, false);
exports["define?"] = defineQ__1442}
{
var methodQ__1445;
false;
methodQ__1445 = Mmake_function__1424("methodQ", function methodQ__1446 (exp__1447)
{if ($T(expressionQ__1431(exp__1447)))
{return binaryEE__1434(symbol_name__1435(first__1429(exp__1447)), "%method")}}, false);
exports["method?"] = methodQ__1445}
{
var beginQ__1448;
false;
beginQ__1448 = Mmake_function__1424("beginQ", function beginQ__1449 (exp__1450)
{if ($T(expressionQ__1431(exp__1450)))
{return binaryEE__1434(symbol_name__1435(first__1429(exp__1450)), "%begin")}}, false);
exports["begin?"] = beginQ__1448}
{
var size__1451 = B1423.size,
everyQ__1452 = B1423["every?"],
rcurry__1453 = B1423.rcurry,
setter_identifierQ__1454;
false;
setter_identifierQ__1454 = Mmake_function__1424("setter_identifierQ", function setter_identifierQ__1455 (form__1456)
{if ($T(instanceQ__1425(form__1456, LarrayG__1426)))
{if ($T(binaryEE__1434(size__1451(form__1456), 2)))
{if ($T(everyQ__1452(rcurry__1453(instanceQ__1425, LsymbolG__1430), form__1456)))
{return binaryEE__1434(symbol_name__1435(first__1429(form__1456)), "setter")}}}}, false);
exports["setter-identifier?"] = setter_identifierQ__1454}
{
var Tsymbol_countT__1457;
false;
Tsymbol_countT__1457 = 0}
{
var reset_symbol_counterN__1458;
false;
reset_symbol_counterN__1458 = Mmake_function__1424("reset_symbol_counterN", function reset_symbol_counterN__1459 ()
{return Tsymbol_countT__1457 = 0}, false);
exports["reset-symbol-counter!"] = reset_symbol_counterN__1458}
{
var symbol__1460 = B1423.symbol,
get__1461 = B1423.get,
concatenate__1462 = B1423.concatenate,
as_string__1463 = B1423["as-string"],
generate_symbol__1464;
false;
generate_symbol__1464 = Mmake_function__1424("generate_symbol", function generate_symbol__1465 (env__1466, prefix__1467)
{
var B1470;
if ($T(prefix__1467))
{B1470 = concatenate__1462(prefix__1467, "_")}
else
B1470 = "$";
var B1471 = as_string__1463(Tsymbol_countT__1457 = (Tsymbol_countT__1457 + 1)),
name__1468 = concatenate__1462(B1470, B1471),
B1472;
if ($T(env__1466))
{B1472 = get__1461(env__1466, "module", "name")}
else
B1472 = false;
var result__1469 = symbol__1460(name__1468, B1472);
result__1469["generated?"] = true;
return result__1469}, false);
exports["generate-symbol"] = generate_symbol__1464}
{
var B1478 = $S("%begin", "ralph/core"),
maybe_begin__1474;
false;
maybe_begin__1474 = Mmake_function__1424("maybe_begin", function maybe_begin__1475 (expressions__1476)
{
var B1473__1477 = size__1451(expressions__1476);
if ($T(binaryEE__1434(B1473__1477, 0)))
{return false}
else
if ($T(binaryEE__1434(B1473__1477, 1)))
{return first__1429(expressions__1476)}
else
return concatenate__1462([B1478], expressions__1476)}, false);
exports["maybe-begin"] = maybe_begin__1474}
{
var destructure_symbol__1479;
false;
destructure_symbol__1479 = Mmake_function__1424("destructure_symbol", function destructure_symbol__1480 (identifier__1481)
{return [get__1461(identifier__1481, "name"), get__1461(identifier__1481, "module")]}, false);
exports["destructure-symbol"] = destructure_symbol__1479}
{
var localize__1482;
false;
localize__1482 = Mmake_function__1424("localize", function localize__1483 (identifier__1484, env__1485)
{if ($T(get__1461(identifier__1484, "module")))
{return identifier__1484}
else
return symbol__1460(symbol_name__1435(identifier__1484), get__1461(env__1485, "module", "name"))}, false);
exports.localize = localize__1482}
{
var get_setter__1486 = B1423["get-setter"],
bindN__1487;
false;
bindN__1487 = Mmake_function__1424("bindN", function bindN__1488 (env__1489, identifier__1490)
{return get_setter__1486(env__1489, "binding-count", symbol_name__1435(identifier__1490), (get__1461(env__1489, "binding-count", symbol_name__1435(identifier__1490)) + 1))}, false);
exports["bind!"] = bindN__1487}
{
var G__1492 = B1423[">"],
boundQ__1493;
false;
boundQ__1493 = Mmake_function__1424("boundQ", function boundQ__1494 (env__1495, identifier__1496)
{
var B1491__1497 = get__1461(env__1495, "binding-count", symbol_name__1435(identifier__1496));
if ($T(B1491__1497))
{
var count__1498 = B1491__1497;
return G__1492(count__1498, 0)}}, false);
exports["bound?"] = boundQ__1493}
{
var unbindN__1499;
false;
unbindN__1499 = Mmake_function__1424("unbindN", function unbindN__1500 (env__1501, identifier__1502)
{return get_setter__1486(env__1501, "binding-count", symbol_name__1435(identifier__1502), (get__1461(env__1501, "binding-count", symbol_name__1435(identifier__1502)) - 1))}, false);
exports["unbind!"] = unbindN__1499}
{
var choose__1505 = B1423.choose,
remove_defined_identifiers__1506;
false;
remove_defined_identifiers__1506 = Mmake_function__1424("remove_defined_identifiers", function remove_defined_identifiers__1507 (identifiers__1508, env__1509)
{return choose__1505(function B1503__1510 (identifier__1511)
{
var B1504__1512 = destructure_symbol__1479(identifier__1511),
name__1513 = B1504__1512[0],
module_name__1514 = B1504__1512[1];
return not__1427(get__1461(env__1509, "defined?", module_name__1514, name__1513))}, identifiers__1508)}, false);
exports["remove-defined-identifiers"] = remove_defined_identifiers__1506}
