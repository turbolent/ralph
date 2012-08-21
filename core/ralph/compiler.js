var B2 = require("ralph/core")
{
var B1498,
B1499,
B1500,
B1501,
B1502,
B1503,
B1504,
B1505,
B1506,
B1507,
B1508,
B1509,
B1510;
B1498 = require("ralph/stream");
B1499 = require("ralph/format");
B1500 = require("ralph/reader");
B1501 = require("ralph/file-system");
B1502 = require("ralph/compiler/utilities");
B1503 = require("ralph/compiler/alpha");
B1504 = require("ralph/compiler/define-lifting");
B1505 = require("ralph/compiler/free-variables");
B1506 = require("ralph/compiler/anf");
B1507 = require("ralph/compiler/statements");
B1508 = require("ralph/compiler/tco");
B1509 = require("ralph/compiler/flattening");
B1510 = require("ralph/compiler/javascript")}
var B1511 = B2["make-object"],
B1512 = B1511()
{
var B1517 = B2["%make-class"],
B1518 = B2["<object>"],
B1519 = B1517(B1518, {name:false,
"native?":false,
exports:function B1520 ()
{return []},
imports:function B1521 ()
{return []},
dependencies:function B1522 ()
{return []},
inline:function B1523 ()
{return []}});
exports["<module>"] = B1519}
{
var B1530 = B2["make-plain-object"],
B1531 = B1517(B1518, {module:false,
macros:function B1532 ()
{return B1530()},
"symbol-macros":function B1533 ()
{return B1530()},
identifiers:function B1534 ()
{return B1511()},
"defined?":function B1535 ()
{return B1511()},
lifted:function B1536 ()
{return B1511()},
"import-identifiers":function B1537 ()
{return B1530()}});
exports["<environment>"] = B1531}
var B1538 = B2["%make-function"],
B1539 = B2["get-setter"],
B1540 = B2["symbol-name"],
B1541 = B1538("bindN", function bindN__1542 (env__1543, identifier__1544)
{return B1539(env__1543, "bound?", B1540(identifier__1544), true)}, false)
var B1545 = B1538("unbindN", function unbindN__1546 (env__1547, identifier__1548)
{return B1539(env__1547, "bound?", B1540(identifier__1548), false)}, false)
var B1549 = B1511()
var B1550 = B1502["expression?"],
B1551 = B2.get,
B1552 = B2.first,
B1553 = B1538("find_special_form", function find_special_form__1554 (form__1555, env__1556)
{if ($T(B1550(form__1555)))
return B1551(B1549, B1540(B1552(form__1555)))}, false)
{
var B1567 = $S("%method"),
B1558 = B2["do"],
B1559 = B2.curry,
B1560;
B1549["%method"] = function B1561 (env__1562, name__1563, arguments__1564, body__1565)
{
B1558(B1559(B1541, env__1562), arguments__1564);
var expanded_body__1566 = B1560(body__1565, env__1562);
B1558(B1559(B1545, env__1562), arguments__1564);
return [B1567, name__1563, arguments__1564, expanded_body__1566]}}
{
var B1573 = $S("%set");
B1549["%set"] = function B1569 (env__1570, identifier__1571, value__1572)
{return [B1573, identifier__1571, B1560(value__1572, env__1570)]}}
{
var B1579 = $S("define");
B1549.define = function B1575 (env__1576, identifier__1577, value__1578)
{
B1541(env__1576, identifier__1577);
return [B1579, identifier__1577, B1560(value__1578, env__1576)]}}
{
var B1589 = $S("%bind");
B1549["%bind"] = function B1581 (env__1582, binding__1583, body__1584)
{
var var__1585 = binding__1583[0],
value__1586 = binding__1583[1],
expanded_value__1587 = B1560(value__1586, env__1582);
B1541(env__1582, var__1585);
var result__1588 = [B1589, [var__1585, expanded_value__1587], B1560(body__1584, env__1582)];
B1545(env__1582, var__1585);
return result__1588}}
{
var B1590 = B1511();
exports["*core-macros*"] = B1590}
{
var B1613 = $REST,
B1614 = $KEY,
B1615 = $K("end"),
B1616 = $K("start"),
B1593 = B2["find-key"],
B1594 = B2["="],
B1595 = B2["copy-sequence"],
B1596 = B2.size,
B1597 = B2.element,
B1598 = B2.inc,
B1599 = B1538("analyze_lambda_list", function analyze_lambda_list__1600 (list__1601)
{
var position__1602 = function position__1603 (symbol__1604)
{return B1593(list__1601, B1559(B1594, symbol__1604))},
rest__1605 = position__1602(B1613),
key__1606 = position__1602(B1614),
B1607 = rest__1605,
B1609;
if ($T(B1607))
B1609 = B1607
else
{
var B1608 = key__1606;
if ($T(B1608))
B1609 = B1608
else
B1609 = B1596(list__1601)};
var B1610 = B1595(list__1601, B1615, B1609),
B1611;
if ($T(rest__1605))
B1611 = B1597(list__1601, B1598(rest__1605))
else
B1611 = false;
var B1612;
if ($T(key__1606))
B1612 = B1595(list__1601, B1616, B1598(key__1606))
else
B1612 = false;
return [B1610, B1611, B1612]}, false);
exports["analyze-lambda-list"] = B1599}
var B1618 = B2.reduce,
B1619 = B1538("wrap", function wrap__1620 (form__1621)
{
var wrappers__1622 = $SL.call(arguments, 1);
return B1618(function B1623 (result__1624, wrapper__1625)
{return wrapper__1625(result__1624)}, form__1621, wrappers__1622)}, false)
var B1663 = $S("bind-properties"),
B1664 = $S("%keys"),
B1665 = $S("%object"),
B1666 = $S("bind"),
B1667 = $S("%native-call"),
B1632 = B2["empty?"],
B1633 = B2.map,
B1634 = B2.concatenate,
B1635 = B2.reduce1,
B1636 = B2["instance?"],
B1637 = B2["<array>"],
B1638 = B2.not,
B1639 = B1502["generate-symbol"],
B1640 = B1538("wrap_restSkeys", function wrap_restSkeys__1641 (body__1642, all__1643, required__1644, rest__1645, key__1646)
{
var restQ__1647 = rest__1645,
B1648 = rest__1645,
rest__1649;
if ($T(B1648))
rest__1649 = B1648
else
if ($T(B1638(B1632(key__1646))))
rest__1649 = B1639()
else
rest__1649 = false;
return B1619(body__1642, function B1650 (body__1651)
{if ($T(B1632(key__1646)))
return body__1651
else
{
var key_values__1654 = B1633(function B1652 (binding__1653)
{if ($T(B1636(binding__1653, B1637)))
return binding__1653
else
return [binding__1653, false]}, key__1646);
return [B1663, B1633(B1552, key_values__1654), [B1664, rest__1649, B1634([B1665], B1635(B1634, B1633(function B1655 (key_value__1656)
{
var key__1657 = key_value__1656[0],
value__1658 = key_value__1656[1];
return [B1540(key__1657), value__1658]}, key_values__1654)))], body__1651]}}, function B1659 (body__1660)
{
var B1661 = restQ__1647,
B1662;
if ($T(B1661))
B1662 = B1661
else
B1662 = B1638(B1632(key__1646));
if ($T(B1662))
return [B1666, [[rest__1649, [B1667, "$SL.call", all__1643, B1596(required__1644)]]], body__1660]
else
return body__1660})}, false)
{
var B1669 = B1502["maybe-begin"];
B1590.begin = function B1670 (____1671)
{
var expressions__1672 = $SL.call(arguments, 1);
return B1669(expressions__1672)}}
var B1683 = $S("%all-arguments"),
B1674 = B1538("named_method", function named_method__1675 (name__1676, arguments__1677, body__1678)
{
var B1679 = B1599(arguments__1677),
required__1680 = B1679[0],
rest__1681 = B1679[1],
key__1682 = B1679[2];
return [B1567, name__1676, required__1680, B1640(body__1678, B1683, required__1680, rest__1681, key__1682)]}, false)
B1590.method = function B1685 (____1686, arguments__1687)
{
var body__1688 = $SL.call(arguments, 2);
return B1674(B1639(), arguments__1687, B1669(body__1688))}
{
var B1691 = B2["<symbol>"],
B1692 = B2.reverse;
B1590.bind = function B1693 (____1694, bindings__1695)
{
var body__1696 = $SL.call(arguments, 2);
if ($T(B1632(bindings__1695)))
return B1669(body__1696)
else
return B1618(function B1697 (body__1698, binding__1699)
{
var B1700 = B1589,
B1701;
if ($T(B1636(binding__1699, B1691)))
B1701 = [binding__1699, false]
else
B1701 = binding__1699;
return [B1700, B1701, body__1698]}, B1669(body__1696), B1692(bindings__1695))}}
{
var B1708 = $S("%if");
B1590["if"] = function B1703 (____1704, test__1705, then__1706, else__1707)
{return [B1708, test__1705, then__1706, else__1707]}}
{
var B1718 = $S("%get-property"),
B1710 = B2["binary=="],
B1711 = B1502["transform-setter-identifier"],
B1712 = B2.rest;
B1590["set!"] = function B1713 (____1714, place__1715)
{
var values__1716 = $SL.call(arguments, 2),
B1717;
if ($T(B1636(place__1715, B1637)))
B1717 = B1638(B1710(B1552(place__1715), B1718))
else
B1717 = false;
if ($T(B1717))
return B1634([B1711(B1552(place__1715))], B1712(place__1715), values__1716)
else
return [B1573, place__1715, B1552(values__1716)]}}
{
var B1726 = $S("set!"),
B1727 = $S("parallel-set!");
B1590["parallel-set!"] = function B1720 (____1721, var__1722, value__1723)
{
var clauses__1724 = $SL.call(arguments, 3);
if ($T(B1632(clauses__1724)))
return [B1726, var__1722, value__1723]
else
{
var temp__1725 = B1639();
return [B1666, [[temp__1725, value__1723]], B1634([B1727], clauses__1724), [B1726, var__1722, temp__1725]]}}}
{
var B1737 = $K("else"),
B1738 = $S("if"),
B1739 = $S("cond");
B1590.cond = function B1730 (____1731)
{
var cases__1732 = $SL.call(arguments, 1);
if ($T(B1638(B1632(cases__1732))))
{
var B1733 = B1552(cases__1732),
test__1734 = B1733[0],
then__1735 = $SL.call(B1733, 1),
then__1736 = B1669(then__1735);
if ($T(B1710(test__1734, B1737)))
return then__1736
else
return [B1738, test__1734, then__1736, B1634([B1739], B1712(cases__1732))]}}}
B1590.when = function B1741 (____1742, test__1743)
{
var body__1744 = $SL.call(arguments, 2);
return [B1738, test__1743, B1669(body__1744), false]}
{
var B1750 = $S("not");
B1590.unless = function B1746 (____1747, test__1748)
{
var body__1749 = $SL.call(arguments, 2);
return [B1738, [B1750, test__1748], B1669(body__1749), false]}}
{
var B1757 = $S("when"),
B1758 = $S("and");
B1590.and = function B1753 (____1754)
{
var values__1755 = $SL.call(arguments, 1),
B1756 = B1596(values__1755);
if ($T(B1710(B1756, 0)))
return true
else
if ($T(B1710(B1756, 1)))
return B1552(values__1755)
else
return [B1757, B1552(values__1755), B1634([B1758], B1712(values__1755))]}}
{
var B1766 = $S("or");
B1590.or = function B1761 (____1762)
{
var values__1763 = $SL.call(arguments, 1),
B1764 = B1596(values__1763);
if ($T(B1710(B1764, 0)))
return false
else
if ($T(B1710(B1764, 1)))
return B1552(values__1763)
else
{
var value__1765 = B1639();
return [B1666, [[value__1765, B1552(values__1763)]], [B1738, value__1765, value__1765, B1634([B1766], B1712(values__1763))]]}}}
B1590["if-bind"] = function B1768 (____1769, binding__1770, then__1771, else__1772)
{
var var__1773 = binding__1770[0],
value__1774 = binding__1770[1],
temp__1775 = B1639();
return [B1666, [[temp__1775, value__1774]], [B1738, temp__1775, [B1666, [[var__1773, temp__1775]], then__1771], else__1772]]}
{
var B1781 = $S("%while");
B1590["while"] = function B1777 (____1778, test__1779)
{
var body__1780 = $SL.call(arguments, 2);
return [B1781, test__1779, B1669(body__1780)]}}
{
var B1787 = $S("while");
B1590.until = function B1783 (____1784, test__1785)
{
var body__1786 = $SL.call(arguments, 2);
return B1634([B1787, [B1750, test__1785]], body__1786)}}
{
var B1808 = $S("for"),
B1809 = $S("+"),
B1810 = $S(">=");
B1590.dotimes = function B1790 (____1791, binding__1792)
{
var body__1793 = $SL.call(arguments, 2),
temp__1794 = B1639(),
var__1795 = binding__1792[0],
count__1796 = binding__1792[1],
result__1797 = binding__1792[2],
B1799 = B1666,
B1800 = [[temp__1794, count__1796]],
B1801 = B1808,
B1802 = [[var__1795, 0, [B1809, var__1795, 1]]],
B1803 = [B1810, var__1795, temp__1794],
B1798 = result__1797,
B1804;
if ($T(B1798))
B1804 = B1798
else
B1804 = false;
var B1805 = [B1803, B1804],
B1806 = [B1801, B1802, B1805],
B1807 = B1634(B1806, body__1793);
return [B1799, B1800, B1807]}}
{
var B1850 = $S("method"),
B1851 = $S("begin"),
B1819 = B2["any?"],
B1820 = B2["push-last"],
B1821 = B2.slice,
B1822 = B2.third;
B1590["for"] = function B1823 (____1824, clauses__1825, end__1826)
{
var body__1827 = $SL.call(arguments, 3),
init_clauses__1828 = [],
next_clauses__1829 = [],
vars__1830 = B1633(B1552, clauses__1825),
B1831 = clauses__1825,
B1832,
B1833,
B1834 = [B1831];
while (true)
{
var B1835 = B1832,
B1840;
if ($T(B1835))
B1840 = B1835
else
B1840 = B1819(B1632, B1834);
var B1841 = B1638(B1840);
if ($T(B1841))
{
var clause__1836 = B1552(B1831);
(function B1837 (clause__1838)
{
B1820(init_clauses__1828, B1821(clause__1838, 0, 2));
B1820(next_clauses__1829, B1552(clause__1838));
return B1820(next_clauses__1829, B1822(clause__1838))})(clause__1836);
B1831 = B1712(B1831);
B1834 = [B1831]}
else
break};
B1833;
var B1842 = B1666,
B1843 = B1787,
B1839 = B1632(end__1826),
B1844;
if ($T(B1839))
B1844 = B1839
else
B1844 = [B1750, B1552(end__1826)];
var B1845 = B1634([B1634([B1850, vars__1830], body__1827)], vars__1830),
B1846 = B1634([B1727], next_clauses__1829),
B1847 = [B1843, B1844, B1845, B1846],
B1848 = B1634(B1847),
B1849;
if ($T(B1638(B1632(B1712(end__1826)))))
B1849 = B1634([B1851], B1712(end__1826))
else
B1849 = false;
return [B1842, init_clauses__1828, B1848, B1849]}}
{
var B1909 = $S("rest"),
B1910 = $S("%array"),
B1911 = $S("until"),
B1912 = $S("any?"),
B1913 = $S("empty?"),
B1914 = $S("first"),
B1858 = B2.second;
B1590["for-each"] = function B1859 (____1860, clauses__1861, end__1862)
{
var body__1863 = $SL.call(arguments, 3),
clauses__1866 = B1633(function B1864 (clause__1865)
{return B1634([B1639()], clause__1865)}, clauses__1861),
endQ__1867 = B1639(),
values__1868 = B1639(),
result__1869 = B1639(),
B1887 = B1851,
vars__1870 = B1633(B1858, clauses__1866),
B1888 = B1634([B1634([B1850, vars__1870], body__1863)], vars__1870),
B1889 = [B1887, B1888],
B1890 = B1633(function B1871 (clause__1872)
{return [B1726, B1552(clause__1872), [B1909, B1552(clause__1872)]]}, clauses__1866),
B1891 = [[B1726, values__1868, B1634([B1910], B1633(B1552, clauses__1866))]],
body__1873 = B1634(B1889, B1890, B1891),
B1892 = B1666,
B1893 = B1634(B1633(function B1874 (clause__1875)
{
var temp__1876 = clause__1875[0],
var__1877 = clause__1875[1],
values__1878 = clause__1875[2];
return [temp__1876, values__1878]}, clauses__1866), [[endQ__1867, false], [result__1869, false], [values__1868, B1634([B1910], B1633(B1552, clauses__1866))]]),
B1894 = B1911,
B1895 = [B1766, endQ__1867, [B1912, B1913, values__1868]],
B1896 = B1666,
B1897 = B1633(function B1879 (clause__1880)
{
var temp__1881 = clause__1880[0],
var__1882 = clause__1880[1],
values__1883 = clause__1880[2];
return [var__1882, [B1914, temp__1881]]}, clauses__1866),
B1884 = B1552(end__1862),
B1906;
if ($T(B1884))
{
var end_test__1885 = B1884,
B1898 = B1738,
B1899 = B1851,
B1900 = B1726,
results__1886 = B1712(end__1862),
B1901;
if ($T(B1632(results__1886)))
B1901 = [false]
else
B1901 = results__1886;
var B1902 = B1669(B1901),
B1903 = [B1900, result__1869, B1902],
B1904 = [B1726, endQ__1867, true],
B1905 = [B1899, B1903, B1904];
B1906 = [B1898, end_test__1885, B1905, body__1873]}
else
B1906 = body__1873;
var B1907 = [B1896, B1897, B1906],
B1908 = [B1894, B1895, B1907];
return [B1892, B1893, B1908, result__1869]}}
B1590["bind-properties"] = function B1917 (____1918, properties__1919, object__1920)
{
var body__1921 = $SL.call(arguments, 3),
objectT__1922 = B1639();
return B1634([B1666, B1634([[objectT__1922, object__1920]], B1633(function B1923 (property__1924)
{return [property__1924, [B1718, objectT__1922, B1540(property__1924)]]}, properties__1919))], body__1921)}
B1590.select = function B1927 (____1928, value__1929, test__1930)
{
var cases__1931 = $SL.call(arguments, 3),
valueT__1932 = B1639(),
testT__1933;
if ($T(B1636(test__1930, B1691)))
testT__1933 = test__1930
else
testT__1933 = B1639();
var test_expression__1934 = function test_expression__1935 (test_value__1936)
{return [testT__1933, valueT__1932, test_value__1936]},
B1941 = B1666,
B1942 = [[valueT__1932, value__1929]],
B1943;
if ($T(B1636(test__1930, B1691)))
B1943 = []
else
B1943 = [[testT__1933, test__1930]];
var B1944 = B1634(B1942, B1943),
B1945 = B1634([B1739], B1633(function B1937 (case__1938)
{
var tests__1939 = case__1938[0],
then__1940 = $SL.call(case__1938, 1);
if ($T(B1710(tests__1939, B1737)))
return case__1938
else
return B1634([B1634([B1766], B1633(test_expression__1934, tests__1939))], then__1940)}, cases__1931));
return [B1941, B1944, B1945]}
var destructure__1949,
B1948 = B1538("destructure", function destructure__1949 (bindings__1950, values__1951, body__1952)
{if ($T(B1636(values__1951, B1691)))
{
var B1953 = B1599(bindings__1950),
required__1954 = B1953[0],
rest__1955 = B1953[1],
key__1956 = B1953[2],
i__1957 = B1596(required__1954);
return B1618(function B1958 (body__1959, binding__1960)
{
i__1957 = (i__1957 - 1);
if ($T(B1636(binding__1960, B1691)))
return [B1666, [[binding__1960, [B1718, values__1951, i__1957]]], body__1959]
else
return destructure__1949(binding__1960, [B1718, values__1951, i__1957], body__1959)}, B1640(body__1952, values__1951, required__1954, rest__1955, key__1956), B1692(required__1954))}
else
{
var var__1961 = B1639();
return [B1666, [[var__1961, values__1951]], destructure__1949(bindings__1950, var__1961, body__1952)]}}, false)
B1590["destructuring-bind"] = function B1963 (____1964, bindings__1965, values__1966)
{
var body__1967 = $SL.call(arguments, 3);
return B1948(bindings__1965, values__1966, B1634([B1851], body__1967))}
B1590["bind-methods"] = function B1970 (____1971, bindings__1972)
{
var body__1973 = $SL.call(arguments, 2);
return B1634([B1666, B1633(B1552, bindings__1972)], B1633(function B1974 (binding__1975)
{
var identifier__1976 = binding__1975[0],
arguments__1977 = binding__1975[1],
body__1978 = $SL.call(binding__1975, 2);
return [B1726, identifier__1976, B1674(identifier__1976, arguments__1977, B1669(body__1978))]}, bindings__1972), body__1973)}
B1590["inc!"] = function B1981 (____1982, object__1983, value__1984)
{
var B1986 = B1726,
B1987 = B1809,
B1985 = value__1984,
B1988;
if ($T(B1985))
B1988 = B1985
else
B1988 = 1;
var B1989 = [B1987, object__1983, B1988];
return [B1986, object__1983, B1989]}
{
var B2001 = $S("-");
B1590["dec!"] = function B1992 (____1993, object__1994, value__1995)
{
var B1997 = B1726,
B1998 = B2001,
B1996 = value__1995,
B1999;
if ($T(B1996))
B1999 = B1996
else
B1999 = 1;
var B2000 = [B1998, object__1994, B1999];
return [B1997, object__1994, B2000]}}
{
var B2006 = $S("%plus");
B1590["+"] = function B2003 (____2004)
{
var values__2005 = $SL.call(arguments, 1);
if ($T(B1632(values__2005)))
return 0
else
return B1634([B2006], values__2005)}}
{
var B2012 = $S("%minus");
B1590["-"] = function B2008 (____2009, minuend__2010)
{
var subtrahends__2011 = $SL.call(arguments, 2);
if ($T(B1632(subtrahends__2011)))
return [B1667, "-", minuend__2010]
else
return B1634([B2012, minuend__2010], subtrahends__2011)}}
{
var B2017 = $S("%times");
B1590["*"] = function B2014 (____2015)
{
var values__2016 = $SL.call(arguments, 1);
if ($T(B1632(values__2016)))
return 1
else
return B1634([B2017], values__2016)}}
{
var B2023 = $S("%divide");
B1590["/"] = function B2019 (____2020, numerator__2021)
{
var denominators__2022 = $SL.call(arguments, 2);
if ($T(B1632(denominators__2022)))
return [B2023, 1, numerator__2021]
else
return B1634([B2023, numerator__2021], denominators__2022)}}
{
var B2027 = $S("next-method"),
B2028 = $S("%native");
B1590["call-next-method"] = function B2025 (____2026)
{return [[B1718, B2027, "apply"], [B2028, "null"], B1683]}}
var B2033 = $S("%symbol"),
transform_quoted__2030,
B2029 = B1538("transform_quoted", function transform_quoted__2030 (form__2031)
{if ($T(B1636(form__2031, B1637)))
{
var B2032;
if ($T(B1638(B1632(form__2031))))
B2032 = B1710(B1540(B1552(form__2031)), "%comma")
else
B2032 = false;
if ($T(B2032))
return B1858(form__2031)
else
return B1634([B1910], B1633(transform_quoted__2030, form__2031))}
else
if ($T(B1636(form__2031, B1691)))
return [B2033, B1540(form__2031)]
else
return form__2031}, false)
B1590["%backquote"] = function B2035 (____2036, exp__2037)
{return B2029(exp__2037)}
{
var B2045 = $K("message"),
B2039 = B2.signal,
B2040 = B2.make,
B2041 = B2["<error>"];
B1590["%comma"] = function B2042 (____2043, value__2044)
{return B2039(B2040(B2041, B2045, "comma not inside backquote"))}}
var B2046 = B2040(B2041, B2045, "unsupported name for call in dot")
{
var B2050 = B2["<string>"];
B1590["."] = function B2051 (____2052, value__2053)
{
var calls__2054 = $SL.call(arguments, 2);
return B1618(function B2055 (value__2056, call__2057)
{
var property__2058 = call__2057[0],
arguments__2059 = $SL.call(call__2057, 1),
B2061 = B1718,
B2060 = property__2058,
B2062;
if ($T(B1636(B2060, B2050)))
B2062 = property__2058
else
if ($T(B1636(B2060, B1691)))
B2062 = B1540(property__2058)
else
B2062 = B2039(B2046);
var B2063 = [B2061, value__2056, B2062],
B2064 = [B2063];
return B1634(B2064, arguments__2059)}, value__2053, calls__2054)}}
var B2067 = B1538("simplify_arguments", function simplify_arguments__2068 (arguments__2069)
{
var B2070 = B1599(arguments__2069),
required__2071 = B2070[0],
rest__2072 = B2070[1],
key__2073 = B2070[2],
required__2076 = B1633(function B2074 (argument__2075)
{if ($T(B1636(argument__2075, B1637)))
return B1552(argument__2075)
else
return argument__2075}, required__2071),
B2077;
if ($T(rest__2072))
B2077 = B1634([B1613], rest__2072)
else
B2077 = [];
var B2078;
if ($T(key__2073))
B2078 = B1634([B1614], key__2073)
else
B2078 = [];
return B1634(required__2076, B2077, B2078)}, false)
var B2121 = $S("%native-name"),
B2122 = $S("<object>"),
B2084 = B2.symbol,
B2085 = B2[">"],
B2086 = B1502["setter-identifier?"],
B2087 = B2["%keys"],
B2088 = B1538("make_function_definer", function make_function_definer__2089 (macro_name__2090, definer_name__2091)
{
var B2092 = $SL.call(arguments, 2),
B2093 = B2087(B2092, {"name?":false,
"type/existing?":false,
"record?":false}),
nameQ__2094 = B2093["name?"],
typeSexistingQ__2095 = B2093["type/existing?"],
recordQ__2096 = B2093["record?"];
return function B2097 (env__2098, identifier__2099, arguments__2100)
{
var body__2101 = $SL.call(arguments, 3),
B2102;
if ($T(B2086(identifier__2099)))
B2102 = [true, B1711(B1858(identifier__2099))]
else
B2102 = [false, identifier__2099];
var setterQ__2103 = B2102[0],
identifier__2104 = B2102[1],
B2105 = B1636(identifier__2104, B1691),
B2109;
if ($T(B2105))
B2109 = B2105
else
B2109 = setterQ__2103;
var B2110 = B1638(B2109);
if ($T(B2110))
B2039(B2040(B2041, B2045, B1634(macro_name__2090, ": ", "name not <var> or (setter <var>)")));
var B2111;
if ($T(typeSexistingQ__2095))
B2111 = B1632(arguments__2100)
else
B2111 = false;
if ($T(B2111))
B2039(B2040(B2041, B2045, B1634(macro_name__2090, ": ", "method has no arguments")));
var simplified_arguments__2106 = B2067(arguments__2100),
B2112;
if ($T(nameQ__2094))
B2112 = identifier__2104
else
B2112 = B1639();
var B2113 = B1669(body__2101),
B2114 = B1674(B2112, simplified_arguments__2106, B2113),
method_definition__2107 = B1560(B2114, env__2098);
if ($T(recordQ__2096))
B1539(env__2098, "module", "functions", B1540(identifier__2104), method_definition__2107);
var B2115 = B1579,
B2116 = [B2084(definer_name__2091), [B2121, B1540(identifier__2104)], method_definition__2107, setterQ__2103],
B2119;
if ($T(typeSexistingQ__2095))
{
var head__2108 = B1552(arguments__2100),
B2117;
if ($T(B1636(head__2108, B1637)))
B2117 = B2085(B1596(head__2108), 1)
else
B2117 = false;
var B2118;
if ($T(B2117))
B2118 = B1858(head__2108)
else
B2118 = B2122;
B2119 = [B2118, identifier__2104]}
else
B2119 = [];
var B2120 = B1634(B2116, B2119);
return [B2115, identifier__2104, B2120]}}, false)
{
var B2140 = $K("record?"),
B2141 = $K("name?"),
B2142 = $K("type/existing?"),
B2129 = B2.apply,
B2130 = [["define-function", "%make-function", B2140, true, B2141, true], ["define-method", "%make-method", B2142, true]],
B2131,
B2132,
B2133 = [B2130];
while (true)
{
var B2134 = B2131,
B2138;
if ($T(B2134))
B2138 = B2134
else
B2138 = B1819(B1632, B2133);
var B2139 = B1638(B2138);
if ($T(B2139))
{
var arguments__2135 = B1552(B2130);
(function B2136 (arguments__2137)
{return B1590[B1552(arguments__2137)] = B2129(B2088, arguments__2137)})(arguments__2135);
B2130 = B1712(B2130);
B2133 = [B2130]}
else
break};
B2132}
{
var B2148 = $S("%make-generic");
B1590["define-generic"] = function B2144 (____2145, identifier__2146, arguments__2147)
{return [B1579, identifier__2146, [B2148, [B2121, B1540(identifier__2146)]]]}}
{
var B2176 = $S("%make-class");
B1590["define-class"] = function B2156 (____2157, identifier__2158, superclass__2159)
{
var properties__2160 = $SL.call(arguments, 3),
object__2161 = [B1665],
B2162 = properties__2160,
B2163,
B2164,
B2165 = [B2162];
while (true)
{
var B2166 = B2163,
B2170;
if ($T(B2166))
B2170 = B2166
else
B2170 = B1819(B1632, B2165);
var B2171 = B1638(B2170);
if ($T(B2171))
{
var property__2167 = B1552(B2162);
(function B2168 (property__2169)
{if ($T(B1636(property__2169, B1637)))
{
B1820(object__2161, B1540(B1552(property__2169)));
return B1820(object__2161, [B1850, [], B1858(property__2169)])}
else
{
B1820(object__2161, B1540(property__2169));
return B1820(object__2161, false)}})(property__2167);
B2162 = B1712(B2162);
B2165 = [B2162]}
else
break};
B2164;
var B2172 = B1579,
B2173 = B2176,
B2174;
if ($T(B1638(B1632(superclass__2159))))
B2174 = B1552(superclass__2159)
else
B2174 = false;
var B2175 = [B2173, B2174, object__2161];
return [B2172, identifier__2158, B2175]}}
var B2177 = B1538("get_import_module_nameSoptions", function get_import_module_nameSoptions__2178 (import__2179)
{
var B2180;
if ($T(B1636(import__2179, B1637)))
B2180 = B1552(import__2179)
else
B2180 = import__2179;
var B2181 = B1540(B2180),
B2182;
if ($T(B1636(import__2179, B1637)))
B2182 = B1712(import__2179)
else
B2182 = [];
return [B2181, B2182]}, false)
{
var B2190 = B1502["identifier-name"],
B2191,
B2192,
B2193;
B1590["define-module"] = function B2194 (env__2195, ____2196)
{
var B2197 = $SL.call(arguments, 2),
B2198 = B2087(B2197, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}),
import__2199 = B2198["import"],
export__2200 = B2198["export"],
compile_time_import__2201 = B2198["compile-time-import"],
inline__2202 = B2198.inline;
B1539(env__2195, "module", "exports", B1633(B2190, export__2200));
B1558(function B2203 (import__2204)
{
var B2205 = B2177(import__2204),
module_name__2206 = B2205[0],
options__2207 = B2205[1];
return B2129(B2191, env__2195, module_name__2206, options__2207)}, compile_time_import__2201);
B1539(env__2195, "module", "inline", B1633(B2190, inline__2202));
return B1669(B1633(function B2208 (import__2209)
{
var B2210 = B2177(import__2209),
module_name__2211 = B2210[0],
options__2212 = B2210[1];
B2129(B2192, B1551(env__2195, "module"), module_name__2211, options__2212);
return B2193(module_name__2211, env__2195)}, import__2199))}}
B2193 = B1538("make_import_definition", function make_import_definition__2213 (module_name__2214, env__2215)
{
var identifier__2216 = B1639();
B1539(env__2215, "import-identifiers", module_name__2214, identifier__2216);
return [B1579, identifier__2216, [[B2028, "require"], module_name__2214]]}, false)
{
var B2223 = $S("define-function");
B1590["define-macro"] = function B2218 (env__2219, identifier__2220, arguments__2221)
{
var body__2222 = $SL.call(arguments, 3);
return [B1851, B1634([B2223, identifier__2220, B1634([B1639()], arguments__2221)], body__2222), [B1726, [B1718, identifier__2220, "%macro?"], true]]}}
B1590["define-symbol-macro"] = function B2225 (env__2226, identifier__2227, arguments__2228)
{
var body__2229 = $SL.call(arguments, 3);
return [B1851, B1634([B2223, identifier__2227, []], body__2229), [B1726, [B1718, identifier__2227, "%symbol-macro?"], true]]}
{
var B2250 = $S("%try"),
B2251 = $S("instance?");
B1590["handler-case"] = function B2235 (____2236, body__2237)
{
var cases__2238 = $SL.call(arguments, 2),
condition_var__2239 = B1639();
return [B2250, body__2237, condition_var__2239, B1634([B1739], B1633(function B2240 (case__2241)
{
var B2242 = case__2241[0],
type__2243 = B2242[0],
B2244 = $SL.call(B2242, 1),
B2245 = B2087(B2244, {condition:false}),
condition__2246 = B2245.condition,
body__2247 = $SL.call(case__2241, 1),
B2248 = [[B2251, condition_var__2239, type__2243]],
B2249;
if ($T(condition__2246))
B2249 = [B1634([B1666, [[condition__2246, condition_var__2239]]], body__2247)]
else
B2249 = body__2247;
return B1634(B2248, B2249)}, cases__2238))]}}
{
var B2258 = $S("%call"),
B2259 = $S("get-setter");
B1590["get-setter"] = function B2253 (____2254, object__2255, property__2256)
{
var propertiesSvalue__2257 = $SL.call(arguments, 3);
if ($T(B1710(B1596(propertiesSvalue__2257), 1)))
return [B1573, [B1718, object__2255, property__2256], B1552(propertiesSvalue__2257)]
else
return B1634([B2258, B2259, object__2255, property__2256], propertiesSvalue__2257)}}
{
var B2264 = $S("symbol");
B1590.symbol = function B2261 (____2262, name__2263)
{if ($T(B1636(name__2263, B2050)))
return [B2033, name__2263]
else
return [B2258, B2264, name__2263]}}
{
var B2272 = $S("binary=="),
B2273 = $S("=="),
B2266;
B1590["=="] = function B2267 (____2268, object1__2269, object2__2270)
{
var objects__2271 = $SL.call(arguments, 3);
if ($T(B1632(B2266)))
return [B2272, object1__2269, object2__2270]
else
return B1634([B2258, B2273, object1__2269, object2__2270], objects__2271)}}
{
var B2274 = B1511();
exports["*core-symbol-macros*"] = B2274}
{
var B2278 = $S("%next-method"),
B2279 = $S("%this-method");
B2274["next-method"] = function B2276 (____2277)
{return [B2278, B2279]}}
var B2281 = B1538("find_macro_definition", function find_macro_definition__2282 (form__2283, env__2284)
{
var B2285 = form__2283;
if ($T(B1636(B2285, B1637)))
{
if ($T(B1632(form__2283)))
B2039("Empty form");
var name__2286 = B1540(B1552(form__2283));
if ($T(B1638(B1551(env__2284, "bound?", name__2286))))
return env__2284.macros[name__2286]}
else
if ($T(B1636(B2285, B1691)))
{
var name__2287 = B1540(form__2283);
if ($T(B1638(B1551(env__2284, "bound?", name__2287))))
return env__2284["symbol-macros"][name__2287]}}, false)
{
var B2289 = B1538("macroexpand_1", function macroexpand_1__2290 (form__2291, env__2292)
{
var B2293 = B2281(form__2291, env__2292);
if ($T(B2293))
{
var macro__2294 = B2293,
B2295;
if ($T(B1636(form__2291, B1637)))
B2295 = B1712(form__2291)
else
B2295 = form__2291;
return B2129(macro__2294, env__2292, B2295)}
else
return form__2291}, false);
exports["macroexpand-1"] = B2289}
{
var B2296 = B1538("macroexpand", function macroexpand__2297 (form__2298, env__2299)
{
var doneQ__2300;
while ($T(B1638(doneQ__2300)))
{
var expanded__2301 = B2289(form__2298, env__2299);
doneQ__2300 = B1710(expanded__2301, form__2298);
form__2298 = expanded__2301};
return form__2298}, false);
exports.macroexpand = B2296}
{
var macroexpand_all__2306,
B2304,
B2305 = B2.rcurry;
B1560 = B1538("macroexpand_all", function macroexpand_all__2306 (form__2307, env__2308)
{B2312:while(true){
var B2309 = form__2307;
if ($T(B1636(B2309, B1637)))
if ($T(B2281(form__2307, env__2308)))
return B2304(macroexpand_all__2306(B2296(form__2307, env__2308), env__2308))
else
{
var B2310 = B1553(form__2307, env__2308);
if ($T(B2310))
{
var expander__2311 = B2310;
return B2129(expander__2311, env__2308, B1712(form__2307))}
else
return B1633(B2305(macroexpand_all__2306, env__2308), form__2307)}
else
if ($T(B1636(B2309, B1691)))
if ($T(B2281(form__2307, env__2308)))
{
arguments = [B2296(form__2307, env__2308), env__2308];
form__2307 = arguments[0];
env__2308 = arguments[1];
continue B2312}
else
return form__2307
else
return form__2307;
break}}, false);
exports["macroexpand-all"] = B1560}
B2304 = B1538("maybe_call", function maybe_call__2313 (exp__2314)
{
var B2315;
if ($T(B1550(exp__2314, B1637)))
B2315 = B1710(B1552(exp__2314), B2258)
else
B2315 = false;
if ($T(B2315))
return B1712(exp__2314)
else
return exp__2314}, false)
var B2319 = B1538("find_moduleSimport_name", function find_moduleSimport_name__2320 (definition_name__2321, env__2322)
{return B1819(function B2323 (import__2324)
{
var module__2325 = import__2324[0],
names__2326 = import__2324[1];
return B1819(function B2327 (name__2328)
{
var B2329;
if ($T(B1636(name__2328, B1637)))
B2329 = name__2328
else
B2329 = [name__2328, name__2328];
var import_name__2330 = B2329[0],
new_name__2331 = B2329[1];
if ($T(B1710(definition_name__2321, new_name__2331)))
return [module__2325, import_name__2330]}, names__2326)}, B1551(env__2322, "module", "imports"))}, false)
var B2332 = B1538("find_import_identifier", function find_import_identifier__2333 (module__2334, env__2335)
{return B1551(env__2335, "import-identifiers", B1551(module__2334, "name"))}, false)
{
var B2356 = $S("%begin"),
B2357 = $S("%define"),
B2337 = B2["set-subtract!"],
B2338 = B1505["find-free-variables"],
B2339 = B1502["environment-definitions"],
B2340 = B1502["*defined*"],
B2341 = B1538("define_free_variables", function define_free_variables__2342 (exp__2343, env__2344)
{
var variables__2345 = B1618(B2337, B2338(exp__2343), [B2339(env__2344), B2340]);
if ($T(B1632(variables__2345)))
return exp__2343
else
return B1634([B2356], B1633(function B2346 (variable__2347)
{
var name__2348 = B1540(variable__2347);
B1539(env__2344, "defined?", name__2348, true);
var B2353 = [[B2357, variable__2347]],
moduleSimport_name__2349 = B2319(name__2348, env__2344),
B2354;
if ($T(moduleSimport_name__2349))
{
var module__2350 = moduleSimport_name__2349[0],
import_name__2351 = moduleSimport_name__2349[1],
import_identifier__2352 = B2332(module__2350, env__2344);
B2354 = [[B1573, variable__2347, [B1718, import_identifier__2352, import_name__2351]]]}
else
B2354 = [];
var B2355 = B1634(B2353, B2354);
return B1669(B2355)}, variables__2345), [exp__2343])}, false);
exports["define-free-variables"] = B2341}
var B2360 = B2.choose,
B2361 = B2["has?"],
B2362 = B1538("define_free_variables2", function define_free_variables2__2363 (exp__2364, env__2365)
{
var free__2366 = B2337(B2338(exp__2364), B2340),
variables__2369 = B2360(function B2367 (variable__2368)
{return B1638(B2361(B1551(env__2365, "definition-names"), B1540(variable__2368)))}, free__2366);
if ($T(B1632(variables__2369)))
return exp__2364
else
return B1634([B2356], B1633(function B2370 (variable__2371)
{
var name__2372 = B1540(variable__2371);
B1539(env__2365, "defined?", name__2372, true);
var B2378 = [[B2357, variable__2371]],
moduleSimport_name__2373 = B2319(name__2372, env__2365),
B2379;
if ($T(moduleSimport_name__2373))
{
var module__2374 = moduleSimport_name__2373[0],
import_name__2375 = moduleSimport_name__2373[1],
old_import_identifier__2376 = B2332(module__2374, env__2365),
import_identifier__2377 = B1551(env__2365, "new-identifiers", B1540(old_import_identifier__2376));
B2379 = [[B1573, variable__2371, [B1718, import_identifier__2377, import_name__2375]]]}
else
B2379 = [];
var B2380 = B1634(B2378, B2379);
return B1669(B2380)}, variables__2369), [exp__2364])}, false)
var inline__2405,
B2399 = B2["last-setter"],
B2400 = B2.last,
B2401 = B2["second-setter"],
B2402,
B2403,
B2404 = B1538("inline", function inline__2405 (form__2406, env__2407)
{
var B2439;
if ($T(B1636(form__2406, B1637)))
B2439 = B1638(B1632(form__2406))
else
B2439 = false;
if ($T(B2439))
if ($T(B1636(B1552(form__2406), B1691)))
{
var B2408 = B1540(B1552(form__2406)),
B2409 = B1710(B2408, "%method"),
B2440;
if ($T(B2409))
B2440 = B2409
else
B2440 = B1710(B2408, "%set");
if ($T(B2440))
{
B2399(form__2406, inline__2405(B2400(form__2406), env__2407));
return form__2406}
else
if ($T(B1710(B2408, "%bind")))
{
var ____2410 = form__2406[0],
binding__2411 = form__2406[1],
body__2412 = form__2406[2];
B2401(binding__2411, inline__2405(B1858(binding__2411), env__2407));
B2399(form__2406, inline__2405(body__2412, env__2407));
return form__2406}
else
if ($T(B1710(B2408, "%try")))
{
var ____2413 = form__2406[0],
body__2414 = form__2406[1],
var__2415 = form__2406[2],
catch__2416 = form__2406[3];
B2401(form__2406, inline__2405(body__2414, env__2407));
B2399(form__2406, inline__2405(catch__2416, env__2407));
return form__2406}
else
{
var B2417 = B1710(B2408, "%begin"),
B2441;
if ($T(B2417))
B2441 = B2417
else
{
var B2418 = B1710(B2408, "%if");
if ($T(B2418))
B2441 = B2418
else
{
var B2419 = B1710(B2408, "%while");
if ($T(B2419))
B2441 = B2419
else
{
var B2420 = B1710(B2408, "%array");
if ($T(B2420))
B2441 = B2420
else
{
var B2421 = B1710(B2408, "%object");
if ($T(B2421))
B2441 = B2421
else
{
var B2422 = B1710(B2408, "%get-property");
if ($T(B2422))
B2441 = B2422
else
{
var B2423 = B1710(B2408, "%native-call");
if ($T(B2423))
B2441 = B2423
else
{
var B2424 = B1710(B2408, "%infix");
if ($T(B2424))
B2441 = B2424
else
{
var B2425 = B1710(B2408, "%plus");
if ($T(B2425))
B2441 = B2425
else
{
var B2426 = B1710(B2408, "%minus");
if ($T(B2426))
B2441 = B2426
else
{
var B2427 = B1710(B2408, "%times");
if ($T(B2427))
B2441 = B2427
else
B2441 = B1710(B2408, "%divide")}}}}}}}}}};
if ($T(B2441))
return B1634([B1552(form__2406)], B1633(B2305(inline__2405, env__2407), B1712(form__2406)))
else
{
var B2428 = B1710(B2408, "%native"),
B2442;
if ($T(B2428))
B2442 = B2428
else
{
var B2429 = B1710(B2408, "%native-name");
if ($T(B2429))
B2442 = B2429
else
B2442 = B1710(B2408, "%define")};
if ($T(B2442))
return form__2406
else
{
var name__2430 = B1540(B1552(form__2406)),
B2431 = B1551(env__2407, "definition-names", name__2430),
definition_name__2432;
if ($T(B2431))
definition_name__2432 = B2431
else
definition_name__2432 = name__2430;
var B2433;
if ($T(B2403(B1551(env__2407, "module"), definition_name__2432)))
B2433 = B1551(env__2407, "module", "functions", definition_name__2432)
else
B2433 = false;
var definition__2438;
if ($T(B2433))
definition__2438 = B2433
else
{
var B2434 = B2319(definition_name__2432, env__2407);
if ($T(B2434))
{
var moduleSimport_name__2435 = B2434,
module__2436 = moduleSimport_name__2435[0],
import_name__2437 = moduleSimport_name__2435[1];
if ($T(B2403(module__2436, import_name__2437)))
definition__2438 = B1551(module__2436, "functions", import_name__2437)
else
definition__2438 = false}
else
definition__2438 = false};
if ($T(definition__2438))
return B2402(definition__2438, B1712(form__2406), env__2407)
else
return B1633(B2305(inline__2405, env__2407), form__2406)}}}}
else
return B1633(B2305(inline__2405, env__2407), form__2406)
else
return form__2406}, false)
{
var B2443 = B2["=="];
B2403 = B1538("inlineQ", function inlineQ__2444 (module__2445, name__2446)
{return B1819(B1559(B2443, name__2446), B1551(module__2445, "inline"))}, false)}
{
var B2451 = B2[">="],
B2452 = B1503["ensure-naming-structure"],
B2453 = B2.push,
B2454 = B1502["get-module-name/name"],
B2455 = B1503["restore-identifiers"],
B2456 = B1503["alpha-convert"];
B2402 = B1538("inline_definition", function inline_definition__2457 (definition__2458, values__2459, env__2460)
{
var ____2461 = definition__2458[0],
name__2462 = definition__2458[1],
arguments__2463 = definition__2458[2],
body__2464 = definition__2458[3],
body__2468 = B1618(function B2465 (body__2466, argument__2467)
{return [B1589, [argument__2467, argument__2467], body__2466]}, body__2464, B1692(arguments__2463)),
inlined__2469 = B2404(body__2468, env__2460),
prepared__2470 = B2456(inlined__2469, env__2460),
B2471 = B1596(arguments__2463),
i__2472 = 0;
while ($T(B1638(B2451(i__2472, B2471))))
{
(function B2473 (i__2474)
{
var argument__2475 = B1597(arguments__2463, i__2474),
value__2476 = B1597(values__2459, i__2474),
B2477 = B2454(argument__2475),
module_name__2478 = B2477[0],
name__2479 = B2477[1];
B2452(env__2460, module_name__2478, name__2479);
var B2481 = B1551(env__2460, "identifiers", module_name__2478, name__2479),
B2482;
if ($T(value__2476))
B2482 = B2404(value__2476, env__2460)
else
B2482 = [B2028, "undefined"];
return B2453(B2481, B2482)})(i__2472);
i__2472 = (i__2472 + 1)};
false;
var result__2480 = B2456(body__2468, env__2460);
B2455(arguments__2463, env__2460);
return result__2480}, false)}
{
var B2483,
B2484 = B2.identity,
B2485 = B1538("lift_symbols", function lift_symbols__2486 (exp__2487, env__2488)
{return B2483(exp__2487, env__2488, B2484)}, false);
exports["lift-symbols"] = B2485}
{
var lift_symbol__2516,
B2511,
B2512,
B2513,
B2514 = B2["<keyword>"],
B2515 = B2["<hash-symbol>"];
B2483 = B1538("lift_symbol", function lift_symbol__2516 (exp__2517, env__2518, k__2519)
{B2577:while(true){
var B2575;
if ($T(B1636(exp__2517, B1637)))
B2575 = B1638(B1632(exp__2517))
else
B2575 = false;
if ($T(B2575))
{
var B2520 = B1540(B1552(exp__2517));
if ($T(B1710(B2520, "%bind")))
{
var ____2521 = exp__2517[0],
B2522 = exp__2517[1],
var__2523 = B2522[0],
value__2524 = B2522[1],
body__2525 = exp__2517[2];
arguments = [value__2524, env__2518, (function B2578 (body__2525, k__2519, B1589, var__2523)
{return function B2526 (lvalue__2527, env__2528)
{return lift_symbol__2516(body__2525, env__2528, function B2529 (lbody__2530, env__2531)
{return k__2519([B1589, [var__2523, lvalue__2527], lbody__2530], env__2531)})}})(body__2525, k__2519, B1589, var__2523)];
exp__2517 = arguments[0];
env__2518 = arguments[1];
k__2519 = arguments[2];
continue B2577}
else
if ($T(B1710(B2520, "%set")))
{
var ____2532 = exp__2517[0],
e1__2533 = exp__2517[1],
e2__2534 = exp__2517[2];
arguments = [e2__2534, env__2518, (function B2579 (k__2519, B1573, e1__2533)
{return function B2535 (le2__2536, env__2537)
{return k__2519([B1573, e1__2533, le2__2536], env__2537)}})(k__2519, B1573, e1__2533)];
exp__2517 = arguments[0];
env__2518 = arguments[1];
k__2519 = arguments[2];
continue B2577}
else
if ($T(B1710(B2520, "%method")))
{
var ____2538 = exp__2517[0],
name__2539 = exp__2517[1],
arguments__2540 = exp__2517[2],
body__2541 = exp__2517[3];
arguments = [body__2541, env__2518, (function B2580 (k__2519, B1567, name__2539, arguments__2540)
{return function B2542 (lbody__2543, env__2544)
{return k__2519([B1567, name__2539, arguments__2540, lbody__2543], env__2544)}})(k__2519, B1567, name__2539, arguments__2540)];
exp__2517 = arguments[0];
env__2518 = arguments[1];
k__2519 = arguments[2];
continue B2577}
else
{
var B2545 = B1710(B2520, "%begin"),
B2576;
if ($T(B2545))
B2576 = B2545
else
{
var B2546 = B1710(B2520, "%if");
if ($T(B2546))
B2576 = B2546
else
{
var B2547 = B1710(B2520, "%while");
if ($T(B2547))
B2576 = B2547
else
{
var B2548 = B1710(B2520, "%array");
if ($T(B2548))
B2576 = B2548
else
{
var B2549 = B1710(B2520, "%object");
if ($T(B2549))
B2576 = B2549
else
{
var B2550 = B1710(B2520, "%get-property");
if ($T(B2550))
B2576 = B2550
else
{
var B2551 = B1710(B2520, "%infix");
if ($T(B2551))
B2576 = B2551
else
{
var B2552 = B1710(B2520, "%native");
if ($T(B2552))
B2576 = B2552
else
{
var B2553 = B1710(B2520, "%native-name");
if ($T(B2553))
B2576 = B2553
else
{
var B2554 = B1710(B2520, "%native-call");
if ($T(B2554))
B2576 = B2554
else
{
var B2555 = B1710(B2520, "%plus");
if ($T(B2555))
B2576 = B2555
else
{
var B2556 = B1710(B2520, "%minus");
if ($T(B2556))
B2576 = B2556
else
{
var B2557 = B1710(B2520, "%times");
if ($T(B2557))
B2576 = B2557
else
B2576 = B1710(B2520, "%divide")}}}}}}}}}}}};
if ($T(B2576))
{
var m__2558 = exp__2517[0],
eT__2559 = $SL.call(exp__2517, 1);
return B2511(eT__2559, env__2518, function B2560 (leT__2561, env__2562)
{return k__2519(B1634([m__2558], leT__2561), env__2562)})}
else
if ($T(B1710(B2520, "%try")))
{
var ____2563 = exp__2517[0],
e1__2564 = exp__2517[1],
v__2565 = exp__2517[2],
e2__2566 = exp__2517[3];
return B2511([e1__2564, e2__2566], env__2518, function B2567 (leT__2568, env__2569)
{
var le1__2570 = leT__2568[0],
le2__2571 = leT__2568[1];
return k__2519([B2250, le1__2570, v__2565, le2__2571], env__2569)})}
else
if ($T(B1710(B2520, "%symbol")))
{
var ____2572 = exp__2517[0],
name__2573 = exp__2517[1];
return B2512(name__2573, exp__2517, "symbol", env__2518, k__2519)}
else
return B2513(exp__2517, env__2518, k__2519)}}
else
{
var B2574 = exp__2517;
if ($T(B1636(B2574, B2514)))
return B2512(B1540(exp__2517), exp__2517, "keyword", env__2518, k__2519)
else
if ($T(B1636(B2574, B2515)))
return B2512(B1540(exp__2517), exp__2517, "hash", env__2518, k__2519)
else
return k__2519(exp__2517, env__2518)};
break}}, false)}
B2512 = B1538("lift_value", function lift_value__2582 (name__2583, value__2584, type__2585, env__2586, k__2587)
{
var B2588 = B1551(env__2586, "lifted", type__2585, name__2583);
if ($T(B2588))
{
var t__2589 = B2588;
return k__2587(t__2589, env__2586)}
else
{
var t__2590 = B1539(env__2586, "lifted", type__2585, name__2583, B1639());
return [B1589, [t__2590, value__2584], k__2587(t__2590, env__2586)]}}, false)
B2511 = B1538("lift_symbolT", function lift_symbolT__2591 (expT__2592, env__2593, k__2594)
{if ($T(B1632(expT__2592)))
return k__2594([], env__2593)
else
return B2513(expT__2592, env__2593, k__2594)}, false)
B2513 = B1538("lift_symbolTT", function lift_symbolTT__2597 (exp__2598, env__2599, k__2600)
{return B2483(B1552(exp__2598), env__2599, function B2601 (t__2602, env__2603)
{return B2511(B1712(exp__2598), env__2603, function B2604 (tT__2605, env__2606)
{return k__2600(B1634([t__2602], tT__2605), env__2606)})})}, false)
var B2612 = $K("string"),
B2607 = B1500.read,
B2608 = B1498["<string-stream>"],
B2609 = B1538("read_program", function read_program__2610 (source__2611)
{return B2607(B2040(B2608, B2612, B1634("(", source__2611, "\n)")))}, false)
{
var B2615 = B1504["lift-defines"],
B2616 = B1506["normalize-term"],
B2617 = B1507["transform-statements!"],
B2618 = B1508["optimize-tail-calls!"],
B2619 = B1509["flatten-statements!"],
B2620 = B1510["compile-js"],
B2621 = B1538("compile_expression", function compile_expression__2622 (exp__2623, env__2624)
{return B1618(function B2625 (result__2626, nameSfn__2627)
{
var name__2628 = nameSfn__2627[0],
fn__2629 = nameSfn__2627[1],
result__2630 = fn__2629(result__2626);
return result__2630}, exp__2623, [["source", B2484], ["macroexpanded", B2305(B1560, env__2624)], ["lifted defines", B2305(B2615, env__2624)], ["defined free variables", B2305(B2341, env__2624)], ["alpha-converted", B2305(B2456, env__2624)], ["inline", B2305(B2404, env__2624)], ["defined free variables after inline", B2305(B2362, env__2624)], ["ANF", B2616], ["lifted symbols", B2305(B2485, env__2624)], ["statements", B2305(B2617, env__2624)], ["TCO", function B2631 (exp__2632)
{return B2618(exp__2632, env__2624)}], ["flattened", B2619], ["compiled", B2305(B2620, env__2624)]])}, false);
exports["compile-expression"] = B2621}
var B2633 = B1501["resolve-path"],
B2634 = B1538("executable_path", function executable_path__2635 (module_name__2636)
{return B2633("build", B1634(module_name__2636, ".js"))}, false)
var B2637 = B1538("module_path", function module_path__2638 (base_path__2639, module_name__2640)
{return B2633(base_path__2639, B1634(module_name__2640, ".rm"))}, false)
var B2641 = B1538("source_path", function source_path__2642 (module_name__2643)
{return B2633("src", B1634(module_name__2643, ".ralph"))}, false)
var B2645 = B2["<"],
B2646 = B1501["file-properties"],
B2647 = B1501["file-exists?"],
B2648 = B1538("recompileQ", function recompileQ__2649 (module_name__2650)
{if ($T(B1638(B1551(B1512, module_name__2650, "native?"))))
{
var path__2651 = B2634(module_name__2650),
B2652 = B1638(B2647(path__2651));
if ($T(B2652))
return B2652
else
{
var path2__2653 = B2641(module_name__2650);
return B2645(B1551(B2646(path__2651), "modification-date"), B1551(B2646(path2__2653), "modification-date"))}}}, false)
{
var B2658 = B2["chain-object"],
B2659,
B2660,
B2661 = B2["object-properties"];
B2191 = B1538("compile_time_import_module", function compile_time_import_module__2662 (env__2663, module_name__2664)
{
var B2665 = $SL.call(arguments, 2),
B2666 = B2087(B2665, {options:false}),
options__2667 = B2666.options,
B2674;
if ($T(B1710(module_name__2664, "ralph/core")))
B2674 = [B1590, B2274]
else
{
B2659(module_name__2664);
var definitions__2668 = require(module_name__2664),
macros__2669 = B1530(),
symbol_macros__2670 = B1530();
B1558(function B2671 (name__2672)
{
var definition__2673 = B1551(definitions__2668, name__2672);
if ($T(B1551(definition__2673, "%macro?")))
return macros__2669[name__2672] = definition__2673
else
if ($T(B1551(definition__2673, "%symbol-macro?")))
return symbol_macros__2670[name__2672] = definition__2673}, B2129(B2660, B2661(definitions__2668), options__2667));
B2674 = [macros__2669, symbol_macros__2670]};
var macros__2675 = B2674[0],
symbol_macros__2676 = B2674[1];
B2658(B1551(env__2663, "macros"), macros__2675);
return B2658(B1551(env__2663, "symbol-macros"), symbol_macros__2676)}, false)}
{
var B2682 = B2["remove!"],
B2683 = B2["set-union!"],
B2684 = B2["as-object"],
B2685 = B2["as-set"];
B2660 = B1538("process_names", function process_names__2686 (all__2687)
{
var B2688 = $SL.call(arguments, 1),
B2689 = B2087(B2688, {only:false,
exclude:false,
prefix:false,
rename:false}),
only__2690 = B2689.only,
exclude__2691 = B2689.exclude,
prefix__2692 = B2689.prefix,
rename__2693 = B2689.rename,
resolve__2694 = function resolve__2695 (exp__2696)
{if ($T(B1636(exp__2696, B2050)))
return exp__2696
else
return B2190(exp__2696)},
B2704;
if ($T(B1636(only__2690, B1637)))
B2704 = B1633(resolve__2694, only__2690)
else
B2704 = all__2687;
var names__2697 = B2685(B2704),
B2698 = rename__2693,
B2705;
if ($T(B2698))
B2705 = B2698
else
B2705 = [];
var B2706 = B1633(resolve__2694, B2705),
renamings__2699 = B2684(B2706);
B1558(B1559(B2682, names__2697), B1633(resolve__2694, exclude__2691));
B2683(names__2697, B2661(renamings__2699));
return B1633(function B2700 (name__2701)
{
var B2702 = B1551(renamings__2699, name__2701);
if ($T(B2702))
{
var renaming__2703 = B2702;
return [name__2701, renaming__2703]}
else
if ($T(B1636(prefix__2692, B2050)))
return [name__2701, B1634(prefix__2692, name__2701)]
else
return name__2701}, names__2697)}, false)}
{
var B2708;
B2192 = B1538("import_module", function import_module__2709 (module__2710, module_name__2711)
{
var options__2712 = $SL.call(arguments, 2),
B2713 = B2708(module_name__2711);
if ($T(B2713))
{
var other_module__2714 = B2713;
B2453(B1551(module__2710, "imports"), [other_module__2714, B2129(B2660, B1551(other_module__2714, "exports"), options__2712)]);
B2453(B1551(module__2710, "dependencies"), module_name__2711);
return other_module__2714}
else
return B2039(B1634("unable to import module '", module_name__2711, "'"))}, false)}
{
var B2718;
B2708 = B1538("find_module", function find_module__2719 (module_name__2720)
{
var B2721 = B2659(module_name__2720);
if ($T(B2721))
return B2721
else
{
var B2722 = B1551(B1512, module_name__2720);
if ($T(B2722))
return B2722
else
{
var B2723 = B2718("build", module_name__2720);
if ($T(B2723))
return B2723
else
return B2718("src", module_name__2720)}}}, false)}
{
var B2729 = $K("name"),
B2724 = B1501["read-file"];
B2718 = B1538("read_module", function read_module__2725 (base_path__2726, module_name__2727)
{
var path__2728 = B2637(base_path__2726, module_name__2727);
if ($T(B2647(path__2728)))
return B2129(B1559(B2040, B1519, B2729), B2607(B2040(B2608, B2612, B2724(path__2728))))}, false)}
{
var B2746 = $K("module"),
B2747 = $K("exports"),
B2748 = $K("inline"),
B2749 = $K("dependencies"),
B2732 = B1501["write-file"],
B2733 = B2.description;
B2659 = B1538("compile_module", function compile_module__2734 (module_name__2735)
{
if ($T(B1638(B2361(B1512, module_name__2735))))
{
var B2736 = B2718("src", module_name__2735);
if ($T(B2736))
{
var module__2737 = B2736;
B1512[module_name__2735] = module__2737}};
if ($T(B2648(module_name__2735)))
{
if ($T(B1638(B2647(B2641(module_name__2735)))))
B2039(B1634("unable to compile module '", module_name__2735, "'"));
var module__2738 = B2040(B1519, B2729, module_name__2735),
env__2739 = B2040(B1531, B2746, module__2738),
source__2740 = B2724(B2641(module_name__2735)),
program__2741 = B2609(source__2740),
result__2742 = "";
B1512[module_name__2735] = module__2738;
B2191(env__2739, "ralph/core");
if ($T(B1638(B1710(module_name__2735, "ralph/core"))))
{
B2192(module__2738, "ralph/core");
B2453(program__2741, B2193("ralph/core", env__2739))};
B1558(function B2743 (expression__2744)
{
var code__2745 = B2621(expression__2744, env__2739);
return result__2742 = B1634(result__2742, code__2745, "\n")}, program__2741);
B2732(B2634(module_name__2735), result__2742);
B2732(B2637("build", module_name__2735), B2733([module_name__2735, B2747, B1551(module__2738, "exports"), B2748, B1551(module__2738, "inline"), B2749, B1551(module__2738, "dependencies")]));
return module__2738}}, false);
exports["compile-module"] = B2659}
{
var analyze_dependencies__2756,
B2754 = B2["member?"],
B2755 = B1538("analyze_dependencies", function analyze_dependencies__2756 (module_name__2757)
{
var B2758 = B2708(module_name__2757);
if ($T(B2758))
{
var module__2759 = B2758;
B1512[module_name__2757] = module__2759;
var B2760 = module__2759,
dependencies__2761 = B2760.dependencies,
result__2762 = B1595(dependencies__2761);
B1558(function B2763 (dependency__2764)
{return B1558(function B2765 (sub_dependency__2766)
{
if ($T(B2754(sub_dependency__2766, result__2762)))
B2682(result__2762, sub_dependency__2766);
return B2453(result__2762, sub_dependency__2766)}, analyze_dependencies__2756(dependency__2764))}, dependencies__2761);
return result__2762}
else
return B2039(B1634("unable to find-module '", module_name__2757, "'"))}, false);
exports["analyze-dependencies"] = B2755}
