{
var B1683;
false;
B1683 = require("ralph/core")}
{
var B1686,
B1687;
false;
B1686 = require("ralph/compiler/utilities");
false;
B1687 = require("ralph/format")}
{
var Mmake_function__1688 = B1683["%make-function"],
not__1689 = B1683.not,
get__1690 = B1683.get,
get_setter__1691 = B1683["get-setter"],
make_object__1692 = B1683["make-object"],
ensure_naming_structure__1693;
false;
ensure_naming_structure__1693 = Mmake_function__1688("ensure_naming_structure", function ensure_naming_structure__1694 (env__1695, module_name__1696, name__1697)
{
if ($T(not__1689(get__1690(env__1695, "identifiers", module_name__1696))))
{get_setter__1691(env__1695, "identifiers", module_name__1696, make_object__1692())};
var module_renamings__1698 = get__1690(env__1695, "identifiers", module_name__1696);
if ($T(not__1689(get__1690(module_renamings__1698, name__1697))))
{module_renamings__1698[name__1697] = []};
return env__1695}, false);
exports["ensure-naming-structure"] = ensure_naming_structure__1693}
{
var map__1701 = B1683.map,
signal__1702 = B1683.signal,
concatenate__1703 = B1683.concatenate,
description__1704 = B1683.description,
push__1705 = B1683.push,
generate_symbol__1706 = B1686["generate-symbol"],
destructure_symbol__1707 = B1686["destructure-symbol"],
rename_identifiers__1708;
false;
rename_identifiers__1708 = Mmake_function__1688("rename_identifiers", function rename_identifiers__1709 (identifiers__1710, env__1711)
{return map__1701(function B1699__1712 (identifier__1713)
{
var B1700__1714 = destructure_symbol__1707(identifier__1713),
name__1715 = B1700__1714[0],
module_name__1716 = B1700__1714[1];
if ($T(not__1689(module_name__1716)))
{signal__1702(concatenate__1703("NOT QUALIFIED: ", description__1704(identifier__1713)))};
var B1718;
if ($T(not__1689(get__1690(identifier__1713, "generated?"))))
{B1718 = name__1715}
else
B1718 = false;
var new_identifier__1717 = generate_symbol__1706(env__1711, B1718);
ensure_naming_structure__1693(env__1711, module_name__1716, name__1715);
push__1705(get__1690(env__1711, "identifiers", module_name__1716, name__1715), new_identifier__1717);
return new_identifier__1717}, identifiers__1710)}, false);
exports["rename-identifiers"] = rename_identifiers__1708}
{
var anyQ__1726 = B1683["any?"],
emptyQ__1727 = B1683["empty?"],
pop__1728 = B1683.pop,
rest__1729 = B1683.rest,
first__1730 = B1683.first,
restore_identifiers__1731;
false;
restore_identifiers__1731 = Mmake_function__1688("restore_identifiers", function restore_identifiers__1732 (identifiers__1733, env__1734)
{
var B1719__1735 = identifiers__1733,
B1720__1736,
B1722__1737,
B1721__1738 = [B1719__1735];
while (true)
{
var B1723__1739 = B1720__1736,
B1746;
if ($T(B1723__1739))
{B1746 = B1723__1739}
else
B1746 = anyQ__1726(emptyQ__1727, B1721__1738);
var B1747 = not__1689(B1746);
if ($T(B1747))
{
var identifier__1740 = first__1730(B1719__1735);
(function B1724__1741 (identifier__1742)
{
var B1725__1743 = destructure_symbol__1707(identifier__1742),
name__1744 = B1725__1743[0],
module_name__1745 = B1725__1743[1];
if ($T(not__1689(module_name__1745)))
{signal__1702(concatenate__1703("NOT QUALIFIED: ", description__1704(identifier__1742)))};
return pop__1728(get__1690(env__1734, "identifiers", module_name__1745, name__1744))})(identifier__1740);
B1719__1735 = rest__1729(B1719__1735);
B1721__1738 = [B1719__1735]}
else
break};
return B1722__1737}, false);
exports["restore-identifiers"] = restore_identifiers__1731}
{
var Tnot_foundT__1748;
false;
Tnot_foundT__1748 = make_object__1692()}
{
var find_identifier__1750;
false;
find_identifier__1750 = Mmake_function__1688("find_identifier", function find_identifier__1751 (identifier__1752, env__1753)
{
var B1749__1754 = destructure_symbol__1707(identifier__1752),
name__1755 = B1749__1754[0],
module_name__1756 = B1749__1754[1];
if ($T(not__1689(module_name__1756)))
{signal__1702(concatenate__1703("NOT QUALIFIED: ", description__1704(identifier__1752)))};
var renamings__1757 = get__1690(env__1753, "identifiers", module_name__1756, name__1755),
B1758;
if ($T(renamings__1757))
{B1758 = not__1689(emptyQ__1727(renamings__1757))}
else
B1758 = false;
if ($T(B1758))
{return first__1730(renamings__1757)}
else
return Tnot_foundT__1748}, false);
exports["find-identifier"] = find_identifier__1750}
{
var B1841 = $S("%method", "ralph/core"),
B1842 = $S("%bind", "ralph/core"),
B1843 = $S("%try", "ralph/core"),
B1844 = $S("%define", "ralph/core"),
instanceQ__1779 = B1683["instance?"],
LarrayG__1780 = B1683["<array>"],
binaryEE__1781 = B1683["binary=="],
cons__1782 = B1683.cons,
symbol_name__1783 = B1683["symbol-name"],
rcurry__1784 = B1683.rcurry,
LsymbolG__1785 = B1683["<symbol>"],
alpha_convert__1786;
false;
alpha_convert__1786 = Mmake_function__1688("alpha_convert", function alpha_convert__1787 (form__1788, env__1789)
{
var B1759__1790 = form__1788;
if ($T(instanceQ__1779(B1759__1790, LarrayG__1780)))
{
var B1760__1791 = symbol_name__1783(first__1730(form__1788));
if ($T(binaryEE__1781(B1760__1791, "%method")))
{
var ____1792 = form__1788[0],
name__1793 = form__1788[1],
arguments__1794 = form__1788[2],
body__1795 = form__1788[3],
identifiers__1796 = cons__1782(name__1793, arguments__1794),
new_identifiers__1797 = rename_identifiers__1708(identifiers__1796, env__1789),
new_body__1798 = alpha_convert__1787(body__1795, env__1789),
new_name__1799 = new_identifiers__1797[0],
new_arguments__1800 = $SL.call(new_identifiers__1797, 1),
result__1801 = [B1841, new_name__1799, new_arguments__1800, new_body__1798];
restore_identifiers__1731(identifiers__1796, env__1789);
return result__1801}
else
if ($T(binaryEE__1781(B1760__1791, "%bind")))
{
var ____1802 = form__1788[0],
B1761__1803 = form__1788[1],
var__1804 = B1761__1803[0],
value__1805 = B1761__1803[1],
body__1806 = form__1788[2],
new_value__1807 = alpha_convert__1787(value__1805, env__1789),
B1762__1808 = rename_identifiers__1708([var__1804], env__1789),
new_var__1809 = B1762__1808[0],
result__1810 = [B1842, [new_var__1809, new_value__1807], alpha_convert__1787(body__1806, env__1789)];
restore_identifiers__1731([var__1804], env__1789);
return result__1810}
else
if ($T(binaryEE__1781(B1760__1791, "%try")))
{
var ____1811 = form__1788[0],
body__1812 = form__1788[1],
var__1813 = form__1788[2],
catch__1814 = form__1788[3],
new_body__1815 = alpha_convert__1787(body__1812, env__1789),
B1763__1816 = rename_identifiers__1708([var__1813], env__1789),
new_var__1817 = B1763__1816[0],
result__1818 = [B1843, new_body__1815, new_var__1817, alpha_convert__1787(catch__1814, env__1789)];
restore_identifiers__1731([var__1813], env__1789);
return result__1818}
else
if ($T(binaryEE__1781(B1760__1791, "%define")))
{
var ____1819 = form__1788[0],
identifier__1820 = form__1788[1],
name__1821 = symbol_name__1783(identifier__1820),
B1764__1822 = rename_identifiers__1708([identifier__1820], env__1789),
new_identifier__1823 = B1764__1822[0];
get_setter__1691(env__1789, "original-identifier", symbol_name__1783(new_identifier__1823), identifier__1820);
return [B1844, new_identifier__1823]}
else
{
var B1765__1824 = binaryEE__1781(B1760__1791, "%if"),
B1839;
if ($T(B1765__1824))
{B1839 = B1765__1824}
else
{
var B1766__1825 = binaryEE__1781(B1760__1791, "%while");
if ($T(B1766__1825))
{B1839 = B1766__1825}
else
{
var B1767__1826 = binaryEE__1781(B1760__1791, "%set");
if ($T(B1767__1826))
{B1839 = B1767__1826}
else
{
var B1768__1827 = binaryEE__1781(B1760__1791, "%begin");
if ($T(B1768__1827))
{B1839 = B1768__1827}
else
{
var B1769__1828 = binaryEE__1781(B1760__1791, "%get-property");
if ($T(B1769__1828))
{B1839 = B1769__1828}
else
{
var B1770__1829 = binaryEE__1781(B1760__1791, "%object");
if ($T(B1770__1829))
{B1839 = B1770__1829}
else
{
var B1771__1830 = binaryEE__1781(B1760__1791, "%array");
if ($T(B1771__1830))
{B1839 = B1771__1830}
else
{
var B1772__1831 = binaryEE__1781(B1760__1791, "%native");
if ($T(B1772__1831))
{B1839 = B1772__1831}
else
{
var B1773__1832 = binaryEE__1781(B1760__1791, "%native-call");
if ($T(B1773__1832))
{B1839 = B1773__1832}
else
{
var B1774__1833 = binaryEE__1781(B1760__1791, "%infix");
if ($T(B1774__1833))
{B1839 = B1774__1833}
else
{
var B1775__1834 = binaryEE__1781(B1760__1791, "%minus");
if ($T(B1775__1834))
{B1839 = B1775__1834}
else
{
var B1776__1835 = binaryEE__1781(B1760__1791, "%plus");
if ($T(B1776__1835))
{B1839 = B1776__1835}
else
{
var B1777__1836 = binaryEE__1781(B1760__1791, "%times");
if ($T(B1777__1836))
{B1839 = B1777__1836}
else
B1839 = binaryEE__1781(B1760__1791, "%divide")}}}}}}}}}}}};
if ($T(B1839))
{return cons__1782(first__1730(form__1788), map__1701(rcurry__1784(alpha_convert__1787, env__1789), rest__1729(form__1788)))}
else
{
var B1778__1837 = binaryEE__1781(B1760__1791, "%native-name"),
B1840;
if ($T(B1778__1837))
{B1840 = B1778__1837}
else
B1840 = binaryEE__1781(B1760__1791, "%symbol");
if ($T(B1840))
{return form__1788}
else
return map__1701(rcurry__1784(alpha_convert__1787, env__1789), form__1788)}}}
else
if ($T(instanceQ__1779(B1759__1790, LsymbolG__1785)))
{
var value__1838 = find_identifier__1750(form__1788, env__1789);
if ($T(binaryEE__1781(value__1838, Tnot_foundT__1748)))
{return form__1788}
else
return value__1838}
else
return form__1788}, false);
exports["alpha-convert"] = alpha_convert__1786}
