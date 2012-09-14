{
var B1681;
false;
B1681 = require("ralph/core")}
{
var B1683;
false;
B1683 = require("ralph/compiler/utilities")}
{
var Mmake_function__1684 = B1681["%make-function"],
lift_define__1685,
identity__1686 = B1681.identity,
lift_defines__1687;
false;
lift_defines__1687 = Mmake_function__1684("lift_defines", function lift_defines__1688 (exp__1689, env__1690)
{return lift_define__1685(exp__1689, env__1690, identity__1686)}, false);
exports["lift-defines"] = lift_defines__1687}
{
var B1785 = $S("%bind", "ralph/core"),
B1786 = $S("%set", "ralph/core"),
B1787 = $S("%method", "ralph/core"),
B1788 = $S("%begin", "ralph/core"),
B1789 = $S("%define", "ralph/core"),
expressionQ__1713 = B1683["expression?"],
binaryEE__1714 = B1681["binary=="],
lift_defineT__1715,
cons__1716 = B1681.cons,
get__1717 = B1681.get,
get_setter__1718 = B1681["get-setter"],
destructure_symbol__1719 = B1683["destructure-symbol"],
second__1720 = B1681.second,
lift_defineTT__1721,
symbol_name__1722 = B1681["symbol-name"],
first__1723 = B1681.first;
false;
lift_define__1685 = Mmake_function__1684("lift_define", function lift_define__1724 (exp__1725, env__1726, k__1727)
{B1790:while(true){
if ($T(expressionQ__1713(exp__1725)))
{
var B1691__1728 = symbol_name__1722(first__1723(exp__1725));
if ($T(binaryEE__1714(B1691__1728, "%bind")))
{
var ____1729 = exp__1725[0],
B1692__1730 = exp__1725[1],
var__1731 = B1692__1730[0],
value__1732 = B1692__1730[1],
body__1733 = exp__1725[2];
arguments = [value__1732, env__1726, (function B1791 (lift_define__1724, body__1733, k__1727, B1785, var__1731)
{return function B1693__1734 (lvalue__1735, env__1736)
{return lift_define__1724(body__1733, env__1736, function B1694__1737 (lbody__1738, env__1739)
{return k__1727([B1785, [var__1731, lvalue__1735], lbody__1738], env__1739)})}})(lift_define__1724, body__1733, k__1727, B1785, var__1731)];
exp__1725 = arguments[0];
env__1726 = arguments[1];
k__1727 = arguments[2];
continue B1790}
else
if ($T(binaryEE__1714(B1691__1728, "%try")))
{
var m__1740 = exp__1725[0],
e1__1741 = exp__1725[1],
v__1742 = exp__1725[2],
e2__1743 = exp__1725[3];
return lift_defineT__1715([e1__1741, e2__1743], env__1726, function B1695__1744 (leT__1745, env__1746)
{
var le1__1747 = leT__1745[0],
le2__1748 = leT__1745[1];
return k__1727([m__1740, le1__1747, v__1742, le2__1748], env__1746)})}
else
if ($T(binaryEE__1714(B1691__1728, "%set")))
{
var ____1749 = exp__1725[0],
e1__1750 = exp__1725[1],
e2__1751 = exp__1725[2];
arguments = [e2__1751, env__1726, (function B1792 (k__1727, B1786, e1__1750)
{return function B1696__1752 (le2__1753, env__1754)
{return k__1727([B1786, e1__1750, le2__1753], env__1754)}})(k__1727, B1786, e1__1750)];
exp__1725 = arguments[0];
env__1726 = arguments[1];
k__1727 = arguments[2];
continue B1790}
else
if ($T(binaryEE__1714(B1691__1728, "%method")))
{
var ____1755 = exp__1725[0],
name__1756 = exp__1725[1],
arguments__1757 = exp__1725[2],
body__1758 = exp__1725[3];
arguments = [body__1758, env__1726, (function B1793 (k__1727, B1787, name__1756, arguments__1757)
{return function B1697__1759 (lbody__1760, env__1761)
{return k__1727([B1787, name__1756, arguments__1757, lbody__1760], env__1761)}})(k__1727, B1787, name__1756, arguments__1757)];
exp__1725 = arguments[0];
env__1726 = arguments[1];
k__1727 = arguments[2];
continue B1790}
else
{
var B1698__1762 = binaryEE__1714(B1691__1728, "%begin"),
B1784;
if ($T(B1698__1762))
{B1784 = B1698__1762}
else
{
var B1699__1763 = binaryEE__1714(B1691__1728, "%if");
if ($T(B1699__1763))
{B1784 = B1699__1763}
else
{
var B1700__1764 = binaryEE__1714(B1691__1728, "%while");
if ($T(B1700__1764))
{B1784 = B1700__1764}
else
{
var B1701__1765 = binaryEE__1714(B1691__1728, "%array");
if ($T(B1701__1765))
{B1784 = B1701__1765}
else
{
var B1702__1766 = binaryEE__1714(B1691__1728, "%object");
if ($T(B1702__1766))
{B1784 = B1702__1766}
else
{
var B1703__1767 = binaryEE__1714(B1691__1728, "%get-property");
if ($T(B1703__1767))
{B1784 = B1703__1767}
else
{
var B1704__1768 = binaryEE__1714(B1691__1728, "%infix");
if ($T(B1704__1768))
{B1784 = B1704__1768}
else
{
var B1705__1769 = binaryEE__1714(B1691__1728, "%native");
if ($T(B1705__1769))
{B1784 = B1705__1769}
else
{
var B1706__1770 = binaryEE__1714(B1691__1728, "%native-name");
if ($T(B1706__1770))
{B1784 = B1706__1770}
else
{
var B1707__1771 = binaryEE__1714(B1691__1728, "%native-call");
if ($T(B1707__1771))
{B1784 = B1707__1771}
else
{
var B1708__1772 = binaryEE__1714(B1691__1728, "%plus");
if ($T(B1708__1772))
{B1784 = B1708__1772}
else
{
var B1709__1773 = binaryEE__1714(B1691__1728, "%minus");
if ($T(B1709__1773))
{B1784 = B1709__1773}
else
{
var B1710__1774 = binaryEE__1714(B1691__1728, "%times");
if ($T(B1710__1774))
{B1784 = B1710__1774}
else
B1784 = binaryEE__1714(B1691__1728, "%divide")}}}}}}}}}}}};
if ($T(B1784))
{
var m__1775 = exp__1725[0],
eT__1776 = $SL.call(exp__1725, 1);
return lift_defineT__1715(eT__1776, env__1726, function B1711__1777 (leT__1778, env__1779)
{return k__1727(cons__1716(m__1775, leT__1778), env__1779)})}
else
if ($T(binaryEE__1714(B1691__1728, "%symbol")))
{return k__1727(exp__1725)}
else
if ($T(binaryEE__1714(B1691__1728, "%define")))
{
var identifier__1780 = second__1720(exp__1725),
B1712__1781 = destructure_symbol__1719(identifier__1780),
name__1782 = B1712__1781[0],
module_name__1783 = B1712__1781[1];
if ($T(get__1717(env__1726, "defined?", module_name__1783, name__1782)))
{return k__1727(false, env__1726)}
else
{
get_setter__1718(env__1726, "defined?", module_name__1783, name__1782, true);
return [B1788, [B1789, identifier__1780], k__1727(false, env__1726)]}}
else
return lift_defineTT__1721(exp__1725, env__1726, k__1727)}}
else
return k__1727(exp__1725, env__1726);
break}}, false)}
{
var emptyQ__1794 = B1681["empty?"];
false;
lift_defineT__1715 = Mmake_function__1684("lift_defineT", function lift_defineT__1795 (expT__1796, env__1797, k__1798)
{if ($T(emptyQ__1794(expT__1796)))
{return k__1798([], env__1797)}
else
return lift_defineTT__1721(expT__1796, env__1797, k__1798)}, false)}
{
var rest__1801 = B1681.rest;
false;
lift_defineTT__1721 = Mmake_function__1684("lift_defineTT", function lift_defineTT__1802 (exp__1803, env__1804, k__1805)
{return lift_define__1685(first__1723(exp__1803), env__1804, function B1799__1806 (t__1807, env__1808)
{return lift_defineT__1715(rest__1801(exp__1803), env__1808, function B1800__1809 (tT__1810, env__1811)
{return k__1805(cons__1716(t__1807, tT__1810), env__1811)})})}, false)}
