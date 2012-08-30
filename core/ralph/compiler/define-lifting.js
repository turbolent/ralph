{
var B1597;
false;
B1597 = require("ralph/core")}
{
var B1599;
false;
B1599 = require("ralph/compiler/utilities")}
{
var Mmake_function__1600 = B1597["%make-function"],
lift_define__1601,
identity__1602 = B1597.identity,
lift_defines__1603;
false;
lift_defines__1603 = Mmake_function__1600("lift_defines", function lift_defines__1604 (exp__1605, env__1606)
{return lift_define__1601(exp__1605, env__1606, identity__1602)}, false);
exports["lift-defines"] = lift_defines__1603}
{
var expressionQ__1628 = B1599["expression?"],
binaryEE__1629 = B1597["binary=="],
lift_defineT__1630,
concatenate__1631 = B1597.concatenate,
get__1632 = B1597.get,
get_setter__1633 = B1597["get-setter"],
symbol_name__1634 = B1597["symbol-name"],
second__1635 = B1597.second,
lift_defineTT__1636,
first__1637 = B1597.first;
false;
lift_define__1601 = Mmake_function__1600("lift_define", function lift_define__1638 (exp__1639, env__1640, k__1641)
{if ($T(expressionQ__1628(exp__1639)))
{
var B1642 = symbol_name__1634(first__1637(exp__1639));
if ($T(binaryEE__1629(B1642, "%bind")))
{
var ____1643 = exp__1639[0],
B1644 = exp__1639[1],
var__1645 = B1644[0],
value__1646 = B1644[1],
body__1647 = exp__1639[2];
return lift_define__1638(value__1646, env__1640, function B1648 (lvalue__1649, env__1650)
{return lift_define__1638(body__1647, env__1650, function B1651 (lbody__1652, env__1653)
{return k__1641([$S("%bind", "ralph/core"), [var__1645, lvalue__1649], lbody__1652], env__1653)})})}
else
if ($T(binaryEE__1629(B1642, "%try")))
{
var m__1654 = exp__1639[0],
e1__1655 = exp__1639[1],
v__1656 = exp__1639[2],
e2__1657 = exp__1639[3];
return lift_defineT__1630([e1__1655, e2__1657], env__1640, function B1658 (leT__1659, env__1660)
{
var le1__1661 = leT__1659[0],
le2__1662 = leT__1659[1];
return k__1641([m__1654, le1__1661, v__1656, le2__1662], env__1660)})}
else
if ($T(binaryEE__1629(B1642, "%set")))
{
var ____1663 = exp__1639[0],
e1__1664 = exp__1639[1],
e2__1665 = exp__1639[2];
return lift_define__1638(e2__1665, env__1640, function B1666 (le2__1667, env__1668)
{return k__1641([$S("%set", "ralph/core"), e1__1664, le2__1667], env__1668)})}
else
if ($T(binaryEE__1629(B1642, "%method")))
{
var ____1669 = exp__1639[0],
name__1670 = exp__1639[1],
arguments__1671 = exp__1639[2],
body__1672 = exp__1639[3];
return lift_define__1638(body__1672, env__1640, function B1673 (lbody__1674, env__1675)
{return k__1641([$S("%method", "ralph/core"), name__1670, arguments__1671, lbody__1674], env__1675)})}
else
{
var B1676 = binaryEE__1629(B1642, "%begin"),
B1696;
if ($T(B1676))
{B1696 = B1676}
else
{
var B1677 = binaryEE__1629(B1642, "%if");
if ($T(B1677))
{B1696 = B1677}
else
{
var B1678 = binaryEE__1629(B1642, "%while");
if ($T(B1678))
{B1696 = B1678}
else
{
var B1679 = binaryEE__1629(B1642, "%array");
if ($T(B1679))
{B1696 = B1679}
else
{
var B1680 = binaryEE__1629(B1642, "%object");
if ($T(B1680))
{B1696 = B1680}
else
{
var B1681 = binaryEE__1629(B1642, "%get-property");
if ($T(B1681))
{B1696 = B1681}
else
{
var B1682 = binaryEE__1629(B1642, "%infix");
if ($T(B1682))
{B1696 = B1682}
else
{
var B1683 = binaryEE__1629(B1642, "%native");
if ($T(B1683))
{B1696 = B1683}
else
{
var B1684 = binaryEE__1629(B1642, "%native-name");
if ($T(B1684))
{B1696 = B1684}
else
{
var B1685 = binaryEE__1629(B1642, "%native-call");
if ($T(B1685))
{B1696 = B1685}
else
{
var B1686 = binaryEE__1629(B1642, "%plus");
if ($T(B1686))
{B1696 = B1686}
else
{
var B1687 = binaryEE__1629(B1642, "%minus");
if ($T(B1687))
{B1696 = B1687}
else
{
var B1688 = binaryEE__1629(B1642, "%times");
if ($T(B1688))
{B1696 = B1688}
else
B1696 = binaryEE__1629(B1642, "%divide")}}}}}}}}}}}};
if ($T(B1696))
{
var m__1689 = exp__1639[0],
eT__1690 = $SL.call(exp__1639, 1);
return lift_defineT__1630(eT__1690, env__1640, function B1691 (leT__1692, env__1693)
{return k__1641(concatenate__1631([m__1689], leT__1692), env__1693)})}
else
if ($T(binaryEE__1629(B1642, "%symbol")))
{return k__1641(exp__1639)}
else
if ($T(binaryEE__1629(B1642, "%define")))
{
var identifier__1694 = second__1635(exp__1639),
name__1695 = symbol_name__1634(identifier__1694);
if ($T(get__1632(env__1640, "defined?", name__1695)))
{return k__1641(false, env__1640)}
else
{
get_setter__1633(env__1640, "defined?", name__1695, true);
return [$S("%begin", "ralph/core"), [$S("%define", "ralph/core"), identifier__1694], k__1641(false, env__1640)]}}
else
return lift_defineTT__1636(exp__1639, env__1640, k__1641)}}
else
return k__1641(exp__1639, env__1640)}, false)}
{
var emptyQ__1697 = B1597["empty?"];
false;
lift_defineT__1630 = Mmake_function__1600("lift_defineT", function lift_defineT__1698 (expT__1699, env__1700, k__1701)
{if ($T(emptyQ__1697(expT__1699)))
{return k__1701([], env__1700)}
else
return lift_defineTT__1636(expT__1699, env__1700, k__1701)}, false)}
{
var rest__1704 = B1597.rest;
false;
lift_defineTT__1636 = Mmake_function__1600("lift_defineTT", function lift_defineTT__1705 (exp__1706, env__1707, k__1708)
{return lift_define__1601(first__1637(exp__1706), env__1707, function B1709 (t__1710, env__1711)
{return lift_defineT__1630(rest__1704(exp__1706), env__1711, function B1712 (tT__1713, env__1714)
{return k__1708(concatenate__1631([t__1710], tT__1713), env__1714)})})}, false)}
