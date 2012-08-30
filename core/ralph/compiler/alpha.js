{
var B1430;
false;
B1430 = require("ralph/core")}
{
var B1433,
B1434;
false;
B1433 = require("ralph/compiler/utilities");
false;
B1434 = require("ralph/format")}
{
var Mmake_function__1435 = B1430["%make-function"],
not__1436 = B1430.not,
get__1437 = B1430.get,
get_setter__1438 = B1430["get-setter"],
make_object__1439 = B1430["make-object"],
ensure_naming_structure__1440;
false;
ensure_naming_structure__1440 = Mmake_function__1435("ensure_naming_structure", function ensure_naming_structure__1441 (env__1442, module_name__1443, name__1444)
{
if ($T(not__1436(get__1437(env__1442, "identifiers", module_name__1443))))
{get_setter__1438(env__1442, "identifiers", module_name__1443, make_object__1439())};
var module_renamings__1445 = get__1437(env__1442, "identifiers", module_name__1443);
if ($T(not__1436(get__1437(module_renamings__1445, name__1444))))
{module_renamings__1445[name__1444] = []};
return env__1442}, false);
exports["ensure-naming-structure"] = ensure_naming_structure__1440}
{
var map__1448 = B1430.map,
push__1449 = B1430.push,
generate_symbol__1450 = B1433["generate-symbol"],
module_nameSname__1451 = B1433["module-name/name"],
rename_identifiers__1452;
false;
rename_identifiers__1452 = Mmake_function__1435("rename_identifiers", function rename_identifiers__1453 (identifiers__1454, env__1455)
{return map__1448(function B1456 (identifier__1457)
{
var B1458 = module_nameSname__1451(identifier__1457, env__1455),
module_name__1459 = B1458[0],
name__1460 = B1458[1];
if ($T(not__1436(module_name__1459)))
{module_name__1459 = get__1437(env__1455, "module", "name")};
var B1462;
if ($T(not__1436(get__1437(identifier__1457, "generated?"))))
{B1462 = name__1460}
else
B1462 = false;
var new_identifier__1461 = generate_symbol__1450(B1462);
ensure_naming_structure__1440(env__1455, module_name__1459, name__1460);
push__1449(get__1437(env__1455, "identifiers", module_name__1459, name__1460), new_identifier__1461);
return new_identifier__1461}, identifiers__1454)}, false);
exports["rename-identifiers"] = rename_identifiers__1452}
{
var anyQ__1470 = B1430["any?"],
emptyQ__1471 = B1430["empty?"],
pop__1472 = B1430.pop,
rest__1473 = B1430.rest,
first__1474 = B1430.first,
restore_identifiers__1475;
false;
restore_identifiers__1475 = Mmake_function__1435("restore_identifiers", function restore_identifiers__1476 (identifiers__1477, env__1478)
{
var B1479 = identifiers__1477,
B1480,
B1481,
B1482 = [B1479];
while (true)
{
var B1483 = B1480,
B1490;
if ($T(B1483))
{B1490 = B1483}
else
B1490 = anyQ__1470(emptyQ__1471, B1482);
var B1491 = not__1436(B1490);
if ($T(B1491))
{
var identifier__1484 = first__1474(B1479);
(function B1485 (identifier__1486)
{
var B1487 = module_nameSname__1451(identifier__1486, env__1478),
module_name__1488 = B1487[0],
name__1489 = B1487[1];
if ($T(not__1436(module_name__1488)))
{module_name__1488 = get__1437(env__1478, "module", "name")};
return pop__1472(get__1437(env__1478, "identifiers", module_name__1488, name__1489))})(identifier__1484);
B1479 = rest__1473(B1479);
B1482 = [B1479]}
else
break};
return B1481}, false);
exports["restore-identifiers"] = restore_identifiers__1475}
{
var Tnot_foundT__1492;
false;
Tnot_foundT__1492 = make_object__1439()}
{
var first__1495 = first__1474,
find_identifier__1496;
false;
find_identifier__1496 = Mmake_function__1435("find_identifier", function find_identifier__1497 (identifier__1498, env__1499)
{
var B1500 = module_nameSname__1451(identifier__1498, env__1499),
module_name__1501 = B1500[0],
name__1502 = B1500[1];
if ($T(not__1436(module_name__1501)))
{module_name__1501 = get__1437(env__1499, "module", "name")};
var B1503 = get__1437(env__1499, "identifiers", module_name__1501, name__1502);
if ($T(B1503))
{
var renamings__1504 = B1503;
return first__1495(renamings__1504)}
else
return Tnot_foundT__1492}, false);
exports["find-identifier"] = find_identifier__1496}
{
var instanceQ__1525 = B1430["instance?"],
LarrayG__1526 = B1430["<array>"],
binaryEE__1527 = B1430["binary=="],
concatenate__1528 = B1430.concatenate,
symbol_name__1529 = B1430["symbol-name"],
first__1530 = first__1474,
rcurry__1531 = B1430.rcurry,
rest__1532 = rest__1473,
LsymbolG__1533 = B1430["<symbol>"],
memberQ__1534 = B1430["member?"],
TdefinedT__1535 = B1433["*defined*"],
signal__1536 = B1430.signal,
make__1537 = B1430.make,
LerrorG__1538 = B1430["<error>"],
format_to_string__1539 = B1434["format-to-string"],
alpha_convert__1540;
false;
alpha_convert__1540 = Mmake_function__1435("alpha_convert", function alpha_convert__1541 (form__1542, env__1543)
{
var B1544 = form__1542;
if ($T(instanceQ__1525(B1544, LarrayG__1526)))
{
var B1545 = symbol_name__1529(first__1530(form__1542));
if ($T(binaryEE__1527(B1545, "%method")))
{
var ____1546 = form__1542[0],
name__1547 = form__1542[1],
arguments__1548 = form__1542[2],
body__1549 = form__1542[3],
identifiers__1550 = concatenate__1528([name__1547], arguments__1548),
new_identifiers__1551 = rename_identifiers__1452(identifiers__1550, env__1543),
new_body__1552 = alpha_convert__1541(body__1549, env__1543),
new_name__1553 = new_identifiers__1551[0],
new_arguments__1554 = $SL.call(new_identifiers__1551, 1),
result__1555 = [$S("%method", "ralph/core"), new_name__1553, new_arguments__1554, new_body__1552];
restore_identifiers__1475(identifiers__1550, env__1543);
return result__1555}
else
if ($T(binaryEE__1527(B1545, "%bind")))
{
var ____1556 = form__1542[0],
B1557 = form__1542[1],
var__1558 = B1557[0],
value__1559 = B1557[1],
body__1560 = form__1542[2],
new_value__1561 = alpha_convert__1541(value__1559, env__1543),
B1562 = rename_identifiers__1452([var__1558], env__1543),
new_var__1563 = B1562[0],
result__1564 = [$S("%bind", "ralph/core"), [new_var__1563, new_value__1561], alpha_convert__1541(body__1560, env__1543)];
restore_identifiers__1475([var__1558], env__1543);
return result__1564}
else
if ($T(binaryEE__1527(B1545, "%try")))
{
var ____1565 = form__1542[0],
body__1566 = form__1542[1],
var__1567 = form__1542[2],
catch__1568 = form__1542[3],
new_body__1569 = alpha_convert__1541(body__1566, env__1543),
B1570 = rename_identifiers__1452([var__1567], env__1543),
new_var__1571 = B1570[0],
result__1572 = [$S("%try", "ralph/core"), new_body__1569, new_var__1571, alpha_convert__1541(catch__1568, env__1543)];
restore_identifiers__1475([var__1567], env__1543);
return result__1572}
else
if ($T(binaryEE__1527(B1545, "%define")))
{
var ____1573 = form__1542[0],
identifier__1574 = form__1542[1],
name__1575 = symbol_name__1529(identifier__1574),
B1576 = rename_identifiers__1452([identifier__1574], env__1543),
new_identifier__1577 = B1576[0];
get_setter__1438(env__1543, "definition-names", symbol_name__1529(new_identifier__1577), name__1575);
get_setter__1438(env__1543, "new-identifiers", name__1575, new_identifier__1577);
return [$S("%define", "ralph/core"), new_identifier__1577]}
else
{
var B1578 = binaryEE__1527(B1545, "%if"),
B1593;
if ($T(B1578))
{B1593 = B1578}
else
{
var B1579 = binaryEE__1527(B1545, "%while");
if ($T(B1579))
{B1593 = B1579}
else
{
var B1580 = binaryEE__1527(B1545, "%set");
if ($T(B1580))
{B1593 = B1580}
else
{
var B1581 = binaryEE__1527(B1545, "%begin");
if ($T(B1581))
{B1593 = B1581}
else
{
var B1582 = binaryEE__1527(B1545, "%get-property");
if ($T(B1582))
{B1593 = B1582}
else
{
var B1583 = binaryEE__1527(B1545, "%object");
if ($T(B1583))
{B1593 = B1583}
else
{
var B1584 = binaryEE__1527(B1545, "%array");
if ($T(B1584))
{B1593 = B1584}
else
{
var B1585 = binaryEE__1527(B1545, "%native");
if ($T(B1585))
{B1593 = B1585}
else
{
var B1586 = binaryEE__1527(B1545, "%native-call");
if ($T(B1586))
{B1593 = B1586}
else
{
var B1587 = binaryEE__1527(B1545, "%infix");
if ($T(B1587))
{B1593 = B1587}
else
{
var B1588 = binaryEE__1527(B1545, "%minus");
if ($T(B1588))
{B1593 = B1588}
else
{
var B1589 = binaryEE__1527(B1545, "%plus");
if ($T(B1589))
{B1593 = B1589}
else
{
var B1590 = binaryEE__1527(B1545, "%times");
if ($T(B1590))
{B1593 = B1590}
else
B1593 = binaryEE__1527(B1545, "%divide")}}}}}}}}}}}};
if ($T(B1593))
{return concatenate__1528([first__1530(form__1542)], map__1448(rcurry__1531(alpha_convert__1541, env__1543), rest__1532(form__1542)))}
else
{
var B1591 = binaryEE__1527(B1545, "%native-name"),
B1594;
if ($T(B1591))
{B1594 = B1591}
else
B1594 = binaryEE__1527(B1545, "%symbol");
if ($T(B1594))
{return form__1542}
else
return map__1448(rcurry__1531(alpha_convert__1541, env__1543), form__1542)}}}
else
if ($T(instanceQ__1525(B1544, LsymbolG__1533)))
{if ($T(memberQ__1534(form__1542, TdefinedT__1535)))
{return form__1542}
else
{
var value__1592 = find_identifier__1496(form__1542, env__1543);
if ($T(binaryEE__1527(value__1592, Tnot_foundT__1492)))
{return signal__1536(make__1537(LerrorG__1538, $K("message"), format_to_string__1539("ALPHA: NOT FOUND: %=", form__1542)))}
else
return value__1592}}
else
return form__1542}, false);
exports["alpha-convert"] = alpha_convert__1540}
