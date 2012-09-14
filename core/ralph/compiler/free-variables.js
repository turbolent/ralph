{
var B1814;
false;
B1814 = require("ralph/core")}
{
var B1816;
false;
B1816 = require("ralph/compiler/utilities")}
{
var Mmake_function__1834 = B1814["%make-function"],
instanceQ__1835 = B1814["instance?"],
LarrayG__1836 = B1814["<array>"],
not__1837 = B1814.not,
emptyQ__1838 = B1814["empty?"],
binaryEE__1839 = B1814["binary=="],
set_subtractN__1840 = B1814["set-subtract!"],
as_set__1841 = B1814["as-set"],
cons__1842 = B1814.cons,
set_unionN__1843 = B1814["set-union!"],
reduce1__1844 = B1814.reduce1,
map__1845 = B1814.map,
rcurry__1846 = B1814.rcurry,
rest__1847 = B1814.rest,
reduce__1848 = B1814.reduce,
concatenate__1849 = B1814.concatenate,
LsymbolG__1850 = B1814["<symbol>"],
symbol_name__1851 = B1814["symbol-name"],
first__1852 = B1814.first;
false;
var get__1853 = B1814.get,
signal__1854 = B1814.signal,
description__1855 = B1814.description,
find_free_variables__1856;
false;
find_free_variables__1856 = Mmake_function__1834("find_free_variables", function find_free_variables__1857 (exp__1858, env__1859)
{
var B1891;
if ($T(instanceQ__1835(exp__1858, LarrayG__1836)))
{B1891 = not__1837(emptyQ__1838(exp__1858))}
else
B1891 = false;
if ($T(B1891))
{
var head__1860 = first__1852(exp__1858),
name__1861;
if ($T(instanceQ__1835(head__1860, LsymbolG__1850)))
{name__1861 = symbol_name__1851(head__1860)}
else
name__1861 = false;
var B1817__1862 = name__1861;
if ($T(binaryEE__1839(B1817__1862, "%method")))
{
var ____1863 = exp__1858[0],
name__1864 = exp__1858[1],
arguments__1865 = exp__1858[2],
body__1866 = exp__1858[3];
return set_subtractN__1840(find_free_variables__1857(body__1866, env__1859), as_set__1841(cons__1842(name__1864, arguments__1865)))}
else
if ($T(binaryEE__1839(B1817__1862, "%bind")))
{
var ____1867 = exp__1858[0],
B1818__1868 = exp__1858[1],
var__1869 = B1818__1868[0],
value__1870 = B1818__1868[1],
body__1871 = exp__1858[2];
return set_unionN__1843(set_subtractN__1840(find_free_variables__1857(body__1871, env__1859), as_set__1841([var__1869])), find_free_variables__1857(value__1870, env__1859))}
else
if ($T(binaryEE__1839(B1817__1862, "%begin")))
{return reduce1__1844(set_unionN__1843, map__1845(rcurry__1846(find_free_variables__1857, env__1859), rest__1847(exp__1858)))}
else
if ($T(binaryEE__1839(B1817__1862, "%try")))
{
var ____1872 = exp__1858[0],
e1__1873 = exp__1858[1],
v__1874 = exp__1858[2],
e2__1875 = exp__1858[3];
return set_subtractN__1840(set_unionN__1843(as_set__1841(find_free_variables__1857(e1__1873, env__1859)), as_set__1841(find_free_variables__1857(e2__1875, env__1859))), as_set__1841([v__1874]))}
else
{
var B1819__1876 = binaryEE__1839(B1817__1862, "%set"),
B1892;
if ($T(B1819__1876))
{B1892 = B1819__1876}
else
{
var B1820__1877 = binaryEE__1839(B1817__1862, "%if");
if ($T(B1820__1877))
{B1892 = B1820__1877}
else
{
var B1821__1878 = binaryEE__1839(B1817__1862, "%while");
if ($T(B1821__1878))
{B1892 = B1821__1878}
else
{
var B1822__1879 = binaryEE__1839(B1817__1862, "%array");
if ($T(B1822__1879))
{B1892 = B1822__1879}
else
{
var B1823__1880 = binaryEE__1839(B1817__1862, "%object");
if ($T(B1823__1880))
{B1892 = B1823__1880}
else
{
var B1824__1881 = binaryEE__1839(B1817__1862, "%infix");
if ($T(B1824__1881))
{B1892 = B1824__1881}
else
{
var B1825__1882 = binaryEE__1839(B1817__1862, "%get-property");
if ($T(B1825__1882))
{B1892 = B1825__1882}
else
{
var B1826__1883 = binaryEE__1839(B1817__1862, "%native-call");
if ($T(B1826__1883))
{B1892 = B1826__1883}
else
{
var B1827__1884 = binaryEE__1839(B1817__1862, "%return");
if ($T(B1827__1884))
{B1892 = B1827__1884}
else
{
var B1828__1885 = binaryEE__1839(B1817__1862, "%plus");
if ($T(B1828__1885))
{B1892 = B1828__1885}
else
{
var B1829__1886 = binaryEE__1839(B1817__1862, "%minus");
if ($T(B1829__1886))
{B1892 = B1829__1886}
else
{
var B1830__1887 = binaryEE__1839(B1817__1862, "%times");
if ($T(B1830__1887))
{B1892 = B1830__1887}
else
B1892 = binaryEE__1839(B1817__1862, "%divide")}}}}}}}}}}};
if ($T(B1892))
{return as_set__1841(reduce__1848(concatenate__1849, [], map__1845(rcurry__1846(find_free_variables__1857, env__1859), rest__1847(exp__1858))))}
else
{
var B1831__1888 = binaryEE__1839(B1817__1862, "%native"),
B1893;
if ($T(B1831__1888))
{B1893 = B1831__1888}
else
{
var B1832__1889 = binaryEE__1839(B1817__1862, "%native-name");
if ($T(B1832__1889))
{B1893 = B1832__1889}
else
{
var B1833__1890 = binaryEE__1839(B1817__1862, "%define");
if ($T(B1833__1890))
{B1893 = B1833__1890}
else
B1893 = binaryEE__1839(B1817__1862, "%symbol")}};
if ($T(B1893))
{return as_set__1841([])}
else
return reduce1__1844(set_unionN__1843, map__1845(rcurry__1846(find_free_variables__1857, env__1859), exp__1858))}}}
else
if ($T(instanceQ__1835(exp__1858, LsymbolG__1850)))
{
if ($T(not__1837(get__1853(exp__1858, "module"))))
{signal__1854(concatenate__1849("NOT QUALIFIED: ", description__1855(exp__1858)))};
return as_set__1841([exp__1858])}
else
return as_set__1841([])}, false);
exports["find-free-variables"] = find_free_variables__1856}
