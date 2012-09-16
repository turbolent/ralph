{
var B1847;
false;
B1847 = require("ralph/core")}
{
var B1849;
false;
B1849 = require("ralph/compiler/utilities")}
{
var Mmake_function__1850 = B1847["%make-function"],
lift_define__1851,
identity__1852 = B1847.identity,
lift_defines__1853;
false;
lift_defines__1853 = Mmake_function__1850("lift_defines", function lift_defines__1854 (exp__1855, env__1856)
{return lift_define__1851(exp__1855, env__1856, identity__1852)}, false);
exports["lift-defines"] = lift_defines__1853}
{
var B1951 = $S("%bind", "ralph/core"),
B1952 = $S("%set", "ralph/core"),
B1953 = $S("%method", "ralph/core"),
B1954 = $S("%begin", "ralph/core"),
B1955 = $S("%define", "ralph/core"),
expressionQ__1879 = B1849["expression?"],
binaryEE__1880 = B1847["binary=="],
lift_defineT__1881,
cons__1882 = B1847.cons,
get__1883 = B1847.get,
get_setter__1884 = B1847["get-setter"],
destructure_symbol__1885 = B1849["destructure-symbol"],
second__1886 = B1847.second,
lift_defineTT__1887,
symbol_name__1888 = B1847["symbol-name"],
first__1889 = B1847.first;
false;
lift_define__1851 = Mmake_function__1850("lift_define", function lift_define__1890 (exp__1891, env__1892, k__1893)
{B1956:while(true){
if ($T(expressionQ__1879(exp__1891)))
{
var B1857__1894 = symbol_name__1888(first__1889(exp__1891));
if ($T(binaryEE__1880(B1857__1894, "%bind")))
{
var ____1895 = exp__1891[0],
B1858__1896 = exp__1891[1],
var__1897 = B1858__1896[0],
value__1898 = B1858__1896[1],
body__1899 = exp__1891[2];
arguments = [value__1898, env__1892, (function B1957 (lift_define__1890, body__1899, k__1893, B1951, var__1897)
{return function B1859__1900 (lvalue__1901, env__1902)
{return lift_define__1890(body__1899, env__1902, function B1860__1903 (lbody__1904, env__1905)
{return k__1893([B1951, [var__1897, lvalue__1901], lbody__1904], env__1905)})}})(lift_define__1890, body__1899, k__1893, B1951, var__1897)];
exp__1891 = arguments[0];
env__1892 = arguments[1];
k__1893 = arguments[2];
continue B1956}
else
if ($T(binaryEE__1880(B1857__1894, "%try")))
{
var m__1906 = exp__1891[0],
e1__1907 = exp__1891[1],
v__1908 = exp__1891[2],
e2__1909 = exp__1891[3];
return lift_defineT__1881([e1__1907, e2__1909], env__1892, function B1861__1910 (leT__1911, env__1912)
{
var le1__1913 = leT__1911[0],
le2__1914 = leT__1911[1];
return k__1893([m__1906, le1__1913, v__1908, le2__1914], env__1912)})}
else
if ($T(binaryEE__1880(B1857__1894, "%set")))
{
var ____1915 = exp__1891[0],
e1__1916 = exp__1891[1],
e2__1917 = exp__1891[2];
arguments = [e2__1917, env__1892, (function B1958 (k__1893, B1952, e1__1916)
{return function B1862__1918 (le2__1919, env__1920)
{return k__1893([B1952, e1__1916, le2__1919], env__1920)}})(k__1893, B1952, e1__1916)];
exp__1891 = arguments[0];
env__1892 = arguments[1];
k__1893 = arguments[2];
continue B1956}
else
if ($T(binaryEE__1880(B1857__1894, "%method")))
{
var ____1921 = exp__1891[0],
name__1922 = exp__1891[1],
arguments__1923 = exp__1891[2],
body__1924 = exp__1891[3];
arguments = [body__1924, env__1892, (function B1959 (k__1893, B1953, name__1922, arguments__1923)
{return function B1863__1925 (lbody__1926, env__1927)
{return k__1893([B1953, name__1922, arguments__1923, lbody__1926], env__1927)}})(k__1893, B1953, name__1922, arguments__1923)];
exp__1891 = arguments[0];
env__1892 = arguments[1];
k__1893 = arguments[2];
continue B1956}
else
{
var B1864__1928 = binaryEE__1880(B1857__1894, "%begin"),
B1950;
if ($T(B1864__1928))
{B1950 = B1864__1928}
else
{
var B1865__1929 = binaryEE__1880(B1857__1894, "%if");
if ($T(B1865__1929))
{B1950 = B1865__1929}
else
{
var B1866__1930 = binaryEE__1880(B1857__1894, "%while");
if ($T(B1866__1930))
{B1950 = B1866__1930}
else
{
var B1867__1931 = binaryEE__1880(B1857__1894, "%array");
if ($T(B1867__1931))
{B1950 = B1867__1931}
else
{
var B1868__1932 = binaryEE__1880(B1857__1894, "%object");
if ($T(B1868__1932))
{B1950 = B1868__1932}
else
{
var B1869__1933 = binaryEE__1880(B1857__1894, "%get-property");
if ($T(B1869__1933))
{B1950 = B1869__1933}
else
{
var B1870__1934 = binaryEE__1880(B1857__1894, "%infix");
if ($T(B1870__1934))
{B1950 = B1870__1934}
else
{
var B1871__1935 = binaryEE__1880(B1857__1894, "%native");
if ($T(B1871__1935))
{B1950 = B1871__1935}
else
{
var B1872__1936 = binaryEE__1880(B1857__1894, "%native-name");
if ($T(B1872__1936))
{B1950 = B1872__1936}
else
{
var B1873__1937 = binaryEE__1880(B1857__1894, "%native-call");
if ($T(B1873__1937))
{B1950 = B1873__1937}
else
{
var B1874__1938 = binaryEE__1880(B1857__1894, "%plus");
if ($T(B1874__1938))
{B1950 = B1874__1938}
else
{
var B1875__1939 = binaryEE__1880(B1857__1894, "%minus");
if ($T(B1875__1939))
{B1950 = B1875__1939}
else
{
var B1876__1940 = binaryEE__1880(B1857__1894, "%times");
if ($T(B1876__1940))
{B1950 = B1876__1940}
else
B1950 = binaryEE__1880(B1857__1894, "%divide")}}}}}}}}}}}};
if ($T(B1950))
{
var m__1941 = exp__1891[0],
eT__1942 = $SL.call(exp__1891, 1);
return lift_defineT__1881(eT__1942, env__1892, function B1877__1943 (leT__1944, env__1945)
{return k__1893(cons__1882(m__1941, leT__1944), env__1945)})}
else
if ($T(binaryEE__1880(B1857__1894, "%symbol")))
{return k__1893(exp__1891)}
else
if ($T(binaryEE__1880(B1857__1894, "%define")))
{
var identifier__1946 = second__1886(exp__1891),
B1878__1947 = destructure_symbol__1885(identifier__1946),
name__1948 = B1878__1947[0],
module_name__1949 = B1878__1947[1];
if ($T(get__1883(env__1892, "defined?", module_name__1949, name__1948)))
{return k__1893(false, env__1892)}
else
{
get_setter__1884(env__1892, "defined?", module_name__1949, name__1948, true);
return [B1954, [B1955, identifier__1946], k__1893(false, env__1892)]}}
else
return lift_defineTT__1887(exp__1891, env__1892, k__1893)}}
else
return k__1893(exp__1891, env__1892);
break}}, false)}
{
var emptyQ__1960 = B1847["empty?"];
false;
lift_defineT__1881 = Mmake_function__1850("lift_defineT", function lift_defineT__1961 (expT__1962, env__1963, k__1964)
{if ($T(emptyQ__1960(expT__1962)))
{return k__1964([], env__1963)}
else
return lift_defineTT__1887(expT__1962, env__1963, k__1964)}, false)}
{
var rest__1967 = B1847.rest;
false;
lift_defineTT__1887 = Mmake_function__1850("lift_defineTT", function lift_defineTT__1968 (exp__1969, env__1970, k__1971)
{return lift_define__1851(first__1889(exp__1969), env__1970, function B1965__1972 (t__1973, env__1974)
{return lift_defineT__1881(rest__1967(exp__1969), env__1974, function B1966__1975 (tT__1976, env__1977)
{return k__1971(cons__1882(t__1973, tT__1976), env__1977)})})}, false)}
