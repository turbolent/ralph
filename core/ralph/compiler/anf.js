{
var B1796;
false;
B1796 = require("ralph/core")}
{
var B1798;
false;
B1798 = require("ralph/compiler/utilities")}
{
var Mmake_function__1799 = B1796["%make-function"],
anyQ__1800 = B1796["any?"],
curry__1801 = B1796.curry,
instanceQ__1802 = B1796["instance?"],
LnumberG__1803 = B1796["<number>"],
LbooleanG__1804 = B1796["<boolean>"],
LstringG__1805 = B1796["<string>"],
LsymbolG__1806 = B1796["<symbol>"],
LkeywordG__1807 = B1796["<keyword>"],
atomicQ__1808;
false;
atomicQ__1808 = Mmake_function__1799("atomicQ", function atomicQ__1809 (expression__1810)
{return anyQ__1800(curry__1801(instanceQ__1802, expression__1810), [LnumberG__1803, LbooleanG__1804, LstringG__1805, LsymbolG__1806, LkeywordG__1807])}, false)}
{
var LarrayG__1816 = B1796["<array>"],
not__1817 = B1796.not,
emptyQ__1818 = B1796["empty?"],
binaryEE__1819 = B1796["binary=="],
last__1820 = B1796.last,
symbol_name__1821 = B1796["symbol-name"],
first__1822 = B1796.first,
contains_statementsQ__1823;
false;
contains_statementsQ__1823 = Mmake_function__1799("contains_statementsQ", function contains_statementsQ__1824 (exp__1825)
{
var B1831;
if ($T(instanceQ__1802(exp__1825, LarrayG__1816)))
{B1831 = not__1817(emptyQ__1818(exp__1825))}
else
B1831 = false;
if ($T(B1831))
{
var B1826 = symbol_name__1821(first__1822(exp__1825)),
B1827 = binaryEE__1819(B1826, "%begin"),
B1832;
if ($T(B1827))
{B1832 = B1827}
else
{
var B1828 = binaryEE__1819(B1826, "%if");
if ($T(B1828))
{B1832 = B1828}
else
{
var B1829 = binaryEE__1819(B1826, "%while");
if ($T(B1829))
{B1832 = B1829}
else
{
var B1830 = binaryEE__1819(B1826, "%bind");
if ($T(B1830))
{B1832 = B1830}
else
B1832 = binaryEE__1819(B1826, "%try")}}};
if ($T(B1832))
{return true}
else
if ($T(binaryEE__1819(B1826, "%set")))
{return contains_statementsQ__1824(last__1820(exp__1825))}
else
if ($T(binaryEE__1819(B1826, "%method")))
{return false}
else
return anyQ__1800(contains_statementsQ__1824, exp__1825)}}, false)}
{
var normalize__1833,
identity__1834 = B1796.identity,
normalize_term__1835;
false;
normalize_term__1835 = Mmake_function__1799("normalize_term", function normalize_term__1836 (expression__1837)
{return normalize__1833(expression__1837, identity__1834)}, false);
exports["normalize-term"] = normalize_term__1835}
{
var concatenate__1845 = B1796.concatenate,
normalize_value__1846,
normalize_all__1847,
expressionQ__1848 = B1798["expression?"],
memberQ__1849 = B1796["member?"],
map__1850 = B1796.map,
rest__1851 = B1796.rest;
false;
normalize__1833 = Mmake_function__1799("normalize", function normalize__1852 (exp__1853, k__1854)
{
var B1891;
if ($T(instanceQ__1802(exp__1853, LarrayG__1816)))
{B1891 = not__1817(emptyQ__1818(exp__1853))}
else
B1891 = false;
if ($T(B1891))
{
var B1855 = symbol_name__1821(first__1822(exp__1853));
if ($T(binaryEE__1819(B1855, "%method")))
{
var ____1856 = exp__1853[0],
name__1857 = exp__1853[1],
arguments__1858 = exp__1853[2],
body__1859 = exp__1853[3];
return k__1854([$S("%method", "ralph/core"), name__1857, arguments__1858, normalize_term__1835(body__1859)])}
else
if ($T(binaryEE__1819(B1855, "%begin")))
{
var ____1860 = exp__1853[0],
exp1__1861 = exp__1853[1],
eT__1862 = $SL.call(exp__1853, 2);
if ($T(emptyQ__1818(eT__1862)))
{return normalize__1852(exp1__1861, k__1854)}
else
return normalize__1852(exp1__1861, function B1863 (aexp1__1864)
{return [$S("%begin", "ralph/core"), aexp1__1864, normalize__1852(concatenate__1845([$S("%begin", "ralph/core")], eT__1862), k__1854)]})}
else
if ($T(binaryEE__1819(B1855, "%bind")))
{
var ____1865 = exp__1853[0],
B1866 = exp__1853[1],
var__1867 = B1866[0],
value__1868 = B1866[1],
body__1869 = exp__1853[2];
return normalize__1852(value__1868, function B1870 (avalue__1871)
{return [$S("%bind", "ralph/core"), [var__1867, avalue__1871], normalize__1852(body__1869, k__1854)]})}
else
if ($T(binaryEE__1819(B1855, "%if")))
{
var ____1872 = exp__1853[0],
test__1873 = exp__1853[1],
then__1874 = exp__1853[2],
else__1875 = exp__1853[3];
return normalize_value__1846(test__1873, function B1876 (atest__1877)
{return k__1854([$S("%if", "ralph/core"), atest__1877, normalize_term__1835(then__1874), normalize_term__1835(else__1875)])})}
else
if ($T(binaryEE__1819(B1855, "%while")))
{
var ____1878 = exp__1853[0],
test__1879 = exp__1853[1],
body__1880 = exp__1853[2],
B1892;
if ($T(contains_statementsQ__1823(test__1879)))
{B1892 = [$S("%while", "ralph/core"), true, [$S("%begin", "ralph/core"), normalize_term__1835([$S("%if", "ralph/core"), test__1879, normalize_term__1835(body__1880), [$S("%native", "ralph/core"), "break"], false])]]}
else
B1892 = [$S("%while", "ralph/core"), normalize_term__1835(test__1879), normalize_term__1835(body__1880)];
return k__1854(B1892)}
else
if ($T(binaryEE__1819(B1855, "%try")))
{
var ____1881 = exp__1853[0],
body__1882 = exp__1853[1],
var__1883 = exp__1853[2],
catch__1884 = exp__1853[3];
return k__1854([$S("%try", "ralph/core"), normalize_term__1835(body__1882), var__1883, normalize_term__1835(catch__1884)])}
else
if ($T(binaryEE__1819(B1855, "%set")))
{
var ____1885 = exp__1853[0],
var__1886 = exp__1853[1],
value__1887 = exp__1853[2];
return normalize_value__1846(value__1887, function B1888 (avalue__1889)
{return k__1854([$S("%set", "ralph/core"), var__1886, avalue__1889])})}
else
{
var B1890 = binaryEE__1819(B1855, "%define"),
B1893;
if ($T(B1890))
{B1893 = B1890}
else
B1893 = binaryEE__1819(B1855, "%symbol");
if ($T(B1893))
{return k__1854(exp__1853)}
else
if ($T(contains_statementsQ__1823(exp__1853)))
{return normalize_all__1847(exp__1853, k__1854)}
else
{
var B1894;
if ($T(expressionQ__1848(exp__1853)))
{B1894 = memberQ__1849(first__1822(exp__1853), [$S("%array", "ralph/core"), $S("%object", "ralph/core"), $S("%get-property", "ralph/core"), $S("%infix", "ralph/core"), $S("%native", "ralph/core"), $S("%native-call", "ralph/core"), $S("%native-name", "ralph/compiler/anf"), $S("%plus", "ralph/core"), $S("%minus", "ralph/core"), $S("%times", "ralph/core"), $S("%divide", "ralph/core")])}
else
B1894 = false;
if ($T(B1894))
{return k__1854(concatenate__1845([first__1822(exp__1853)], map__1850(normalize_term__1835, rest__1851(exp__1853))))}
else
return k__1854(map__1850(normalize_term__1835, exp__1853))}}}
else
return k__1854(exp__1853)}, false)}
{
var normalizeT__1895;
false;
normalize_value__1846 = Mmake_function__1799("normalize_value", function normalize_value__1896 (exp__1897, k__1898)
{if ($T(contains_statementsQ__1823(exp__1897)))
{return normalizeT__1895(exp__1897, k__1898)}
else
{
var B1899;
if ($T(instanceQ__1802(exp__1897, LarrayG__1816)))
{B1899 = map__1850(normalize_term__1835, exp__1897)}
else
B1899 = exp__1897;
return k__1898(B1899)}}, false)}
{
var generate_symbol__1901 = B1798["generate-symbol"];
false;
normalizeT__1895 = Mmake_function__1799("normalizeT", function normalizeT__1902 (exp__1903, k__1904)
{return normalize__1833(exp__1903, function B1905 (aexp__1906)
{if ($T(atomicQ__1808(aexp__1906)))
{return k__1904(aexp__1906)}
else
{
var t__1907 = generate_symbol__1901();
return [$S("%bind", "ralph/core"), [t__1907, aexp__1906], k__1904(t__1907)]}})}, false)}
{
var normalizeTT__1908;
false;
normalizeTT__1908 = Mmake_function__1799("normalizeTT", function normalizeTT__1909 (expT__1910, k__1911)
{if ($T(emptyQ__1818(expT__1910)))
{return k__1911([])}
else
return normalize_all__1847(expT__1910, k__1911)}, false)}
{
false;
normalize_all__1847 = Mmake_function__1799("normalize_all", function normalize_all__1914 (exp__1915, k__1916)
{return normalizeT__1895(first__1822(exp__1915), function B1917 (t__1918)
{return normalizeTT__1908(rest__1851(exp__1915), function B1919 (tT__1920)
{return k__1916(concatenate__1845([t__1918], tT__1920))})})}, false)}
