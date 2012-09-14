{
var B1517;
false;
B1517 = require("ralph/core")}
{
var B1520,
B1521;
false;
B1520 = require("ralph/compiler/utilities");
false;
B1521 = require("ralph/format")}
{
var Mmake_function__1522 = B1517["%make-function"],
not__1523 = B1517.not,
get__1524 = B1517.get,
get_setter__1525 = B1517["get-setter"],
make_object__1526 = B1517["make-object"],
ensure_naming_structure__1527;
false;
ensure_naming_structure__1527 = Mmake_function__1522("ensure_naming_structure", function ensure_naming_structure__1528 (env__1529, module_name__1530, name__1531)
{
if ($T(not__1523(get__1524(env__1529, "identifiers", module_name__1530))))
{get_setter__1525(env__1529, "identifiers", module_name__1530, make_object__1526())};
var module_renamings__1532 = get__1524(env__1529, "identifiers", module_name__1530);
if ($T(not__1523(get__1524(module_renamings__1532, name__1531))))
{module_renamings__1532[name__1531] = []};
return env__1529}, false);
exports["ensure-naming-structure"] = ensure_naming_structure__1527}
{
var map__1535 = B1517.map,
signal__1536 = B1517.signal,
concatenate__1537 = B1517.concatenate,
description__1538 = B1517.description,
push__1539 = B1517.push,
generate_symbol__1540 = B1520["generate-symbol"],
destructure_symbol__1541 = B1520["destructure-symbol"],
rename_identifiers__1542;
false;
rename_identifiers__1542 = Mmake_function__1522("rename_identifiers", function rename_identifiers__1543 (identifiers__1544, env__1545)
{return map__1535(function B1533__1546 (identifier__1547)
{
var B1534__1548 = destructure_symbol__1541(identifier__1547),
name__1549 = B1534__1548[0],
module_name__1550 = B1534__1548[1];
if ($T(not__1523(module_name__1550)))
{signal__1536(concatenate__1537("NOT QUALIFIED: ", description__1538(identifier__1547)))};
var B1552;
if ($T(not__1523(get__1524(identifier__1547, "generated?"))))
{B1552 = name__1549}
else
B1552 = false;
var new_identifier__1551 = generate_symbol__1540(env__1545, B1552);
ensure_naming_structure__1527(env__1545, module_name__1550, name__1549);
push__1539(get__1524(env__1545, "identifiers", module_name__1550, name__1549), new_identifier__1551);
return new_identifier__1551}, identifiers__1544)}, false);
exports["rename-identifiers"] = rename_identifiers__1542}
{
var anyQ__1560 = B1517["any?"],
emptyQ__1561 = B1517["empty?"],
pop__1562 = B1517.pop,
rest__1563 = B1517.rest,
first__1564 = B1517.first,
restore_identifiers__1565;
false;
restore_identifiers__1565 = Mmake_function__1522("restore_identifiers", function restore_identifiers__1566 (identifiers__1567, env__1568)
{
var B1553__1569 = identifiers__1567,
B1554__1570,
B1556__1571,
B1555__1572 = [B1553__1569];
while (true)
{
var B1557__1573 = B1554__1570,
B1580;
if ($T(B1557__1573))
{B1580 = B1557__1573}
else
B1580 = anyQ__1560(emptyQ__1561, B1555__1572);
var B1581 = not__1523(B1580);
if ($T(B1581))
{
var identifier__1574 = first__1564(B1553__1569);
(function B1558__1575 (identifier__1576)
{
var B1559__1577 = destructure_symbol__1541(identifier__1576),
name__1578 = B1559__1577[0],
module_name__1579 = B1559__1577[1];
if ($T(not__1523(module_name__1579)))
{signal__1536(concatenate__1537("NOT QUALIFIED: ", description__1538(identifier__1576)))};
return pop__1562(get__1524(env__1568, "identifiers", module_name__1579, name__1578))})(identifier__1574);
B1553__1569 = rest__1563(B1553__1569);
B1555__1572 = [B1553__1569]}
else
break};
return B1556__1571}, false);
exports["restore-identifiers"] = restore_identifiers__1565}
{
var Tnot_foundT__1582;
false;
Tnot_foundT__1582 = make_object__1526()}
{
var find_identifier__1584;
false;
find_identifier__1584 = Mmake_function__1522("find_identifier", function find_identifier__1585 (identifier__1586, env__1587)
{
var B1583__1588 = destructure_symbol__1541(identifier__1586),
name__1589 = B1583__1588[0],
module_name__1590 = B1583__1588[1];
if ($T(not__1523(module_name__1590)))
{signal__1536(concatenate__1537("NOT QUALIFIED: ", description__1538(identifier__1586)))};
var renamings__1591 = get__1524(env__1587, "identifiers", module_name__1590, name__1589),
B1592;
if ($T(renamings__1591))
{B1592 = not__1523(emptyQ__1561(renamings__1591))}
else
B1592 = false;
if ($T(B1592))
{return first__1564(renamings__1591)}
else
return Tnot_foundT__1582}, false);
exports["find-identifier"] = find_identifier__1584}
{
var B1675 = $S("%method", "ralph/core"),
B1676 = $S("%bind", "ralph/core"),
B1677 = $S("%try", "ralph/core"),
B1678 = $S("%define", "ralph/core"),
instanceQ__1613 = B1517["instance?"],
LarrayG__1614 = B1517["<array>"],
binaryEE__1615 = B1517["binary=="],
cons__1616 = B1517.cons,
symbol_name__1617 = B1517["symbol-name"],
rcurry__1618 = B1517.rcurry,
LsymbolG__1619 = B1517["<symbol>"],
alpha_convert__1620;
false;
alpha_convert__1620 = Mmake_function__1522("alpha_convert", function alpha_convert__1621 (form__1622, env__1623)
{
var B1593__1624 = form__1622;
if ($T(instanceQ__1613(B1593__1624, LarrayG__1614)))
{
var B1594__1625 = symbol_name__1617(first__1564(form__1622));
if ($T(binaryEE__1615(B1594__1625, "%method")))
{
var ____1626 = form__1622[0],
name__1627 = form__1622[1],
arguments__1628 = form__1622[2],
body__1629 = form__1622[3],
identifiers__1630 = cons__1616(name__1627, arguments__1628),
new_identifiers__1631 = rename_identifiers__1542(identifiers__1630, env__1623),
new_body__1632 = alpha_convert__1621(body__1629, env__1623),
new_name__1633 = new_identifiers__1631[0],
new_arguments__1634 = $SL.call(new_identifiers__1631, 1),
result__1635 = [B1675, new_name__1633, new_arguments__1634, new_body__1632];
restore_identifiers__1565(identifiers__1630, env__1623);
return result__1635}
else
if ($T(binaryEE__1615(B1594__1625, "%bind")))
{
var ____1636 = form__1622[0],
B1595__1637 = form__1622[1],
var__1638 = B1595__1637[0],
value__1639 = B1595__1637[1],
body__1640 = form__1622[2],
new_value__1641 = alpha_convert__1621(value__1639, env__1623),
B1596__1642 = rename_identifiers__1542([var__1638], env__1623),
new_var__1643 = B1596__1642[0],
result__1644 = [B1676, [new_var__1643, new_value__1641], alpha_convert__1621(body__1640, env__1623)];
restore_identifiers__1565([var__1638], env__1623);
return result__1644}
else
if ($T(binaryEE__1615(B1594__1625, "%try")))
{
var ____1645 = form__1622[0],
body__1646 = form__1622[1],
var__1647 = form__1622[2],
catch__1648 = form__1622[3],
new_body__1649 = alpha_convert__1621(body__1646, env__1623),
B1597__1650 = rename_identifiers__1542([var__1647], env__1623),
new_var__1651 = B1597__1650[0],
result__1652 = [B1677, new_body__1649, new_var__1651, alpha_convert__1621(catch__1648, env__1623)];
restore_identifiers__1565([var__1647], env__1623);
return result__1652}
else
if ($T(binaryEE__1615(B1594__1625, "%define")))
{
var ____1653 = form__1622[0],
identifier__1654 = form__1622[1],
name__1655 = symbol_name__1617(identifier__1654),
B1598__1656 = rename_identifiers__1542([identifier__1654], env__1623),
new_identifier__1657 = B1598__1656[0];
get_setter__1525(env__1623, "original-identifier", symbol_name__1617(new_identifier__1657), identifier__1654);
return [B1678, new_identifier__1657]}
else
{
var B1599__1658 = binaryEE__1615(B1594__1625, "%if"),
B1673;
if ($T(B1599__1658))
{B1673 = B1599__1658}
else
{
var B1600__1659 = binaryEE__1615(B1594__1625, "%while");
if ($T(B1600__1659))
{B1673 = B1600__1659}
else
{
var B1601__1660 = binaryEE__1615(B1594__1625, "%set");
if ($T(B1601__1660))
{B1673 = B1601__1660}
else
{
var B1602__1661 = binaryEE__1615(B1594__1625, "%begin");
if ($T(B1602__1661))
{B1673 = B1602__1661}
else
{
var B1603__1662 = binaryEE__1615(B1594__1625, "%get-property");
if ($T(B1603__1662))
{B1673 = B1603__1662}
else
{
var B1604__1663 = binaryEE__1615(B1594__1625, "%object");
if ($T(B1604__1663))
{B1673 = B1604__1663}
else
{
var B1605__1664 = binaryEE__1615(B1594__1625, "%array");
if ($T(B1605__1664))
{B1673 = B1605__1664}
else
{
var B1606__1665 = binaryEE__1615(B1594__1625, "%native");
if ($T(B1606__1665))
{B1673 = B1606__1665}
else
{
var B1607__1666 = binaryEE__1615(B1594__1625, "%native-call");
if ($T(B1607__1666))
{B1673 = B1607__1666}
else
{
var B1608__1667 = binaryEE__1615(B1594__1625, "%infix");
if ($T(B1608__1667))
{B1673 = B1608__1667}
else
{
var B1609__1668 = binaryEE__1615(B1594__1625, "%minus");
if ($T(B1609__1668))
{B1673 = B1609__1668}
else
{
var B1610__1669 = binaryEE__1615(B1594__1625, "%plus");
if ($T(B1610__1669))
{B1673 = B1610__1669}
else
{
var B1611__1670 = binaryEE__1615(B1594__1625, "%times");
if ($T(B1611__1670))
{B1673 = B1611__1670}
else
B1673 = binaryEE__1615(B1594__1625, "%divide")}}}}}}}}}}}};
if ($T(B1673))
{return cons__1616(first__1564(form__1622), map__1535(rcurry__1618(alpha_convert__1621, env__1623), rest__1563(form__1622)))}
else
{
var B1612__1671 = binaryEE__1615(B1594__1625, "%native-name"),
B1674;
if ($T(B1612__1671))
{B1674 = B1612__1671}
else
B1674 = binaryEE__1615(B1594__1625, "%symbol");
if ($T(B1674))
{return form__1622}
else
return map__1535(rcurry__1618(alpha_convert__1621, env__1623), form__1622)}}}
else
if ($T(instanceQ__1613(B1593__1624, LsymbolG__1619)))
{
var value__1672 = find_identifier__1584(form__1622, env__1623);
if ($T(binaryEE__1615(value__1672, Tnot_foundT__1582)))
{return form__1622}
else
return value__1672}
else
return form__1622}, false);
exports["alpha-convert"] = alpha_convert__1620}
