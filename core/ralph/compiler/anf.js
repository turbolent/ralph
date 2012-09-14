{
var B1896;
false;
B1896 = require("ralph/core")}
{
var B1898;
false;
B1898 = require("ralph/compiler/utilities")}
{
var Mmake_function__1899 = B1896["%make-function"],
anyQ__1900 = B1896["any?"],
curry__1901 = B1896.curry,
instanceQ__1902 = B1896["instance?"],
LnumberG__1903 = B1896["<number>"],
LbooleanG__1904 = B1896["<boolean>"],
LstringG__1905 = B1896["<string>"],
LsymbolG__1906 = B1896["<symbol>"],
LkeywordG__1907 = B1896["<keyword>"],
atomicQ__1908;
false;
atomicQ__1908 = Mmake_function__1899("atomicQ", function atomicQ__1909 (expression__1910)
{return anyQ__1900(curry__1901(instanceQ__1902, expression__1910), [LnumberG__1903, LbooleanG__1904, LstringG__1905, LsymbolG__1906, LkeywordG__1907])}, false)}
{
var LarrayG__1916 = B1896["<array>"],
not__1917 = B1896.not,
emptyQ__1918 = B1896["empty?"],
binaryEE__1919 = B1896["binary=="],
last__1920 = B1896.last,
symbol_name__1921 = B1896["symbol-name"],
first__1922 = B1896.first,
contains_statementsQ__1923;
false;
contains_statementsQ__1923 = Mmake_function__1899("contains_statementsQ", function contains_statementsQ__1924 (exp__1925)
{B1933:while(true){
var B1931;
if ($T(instanceQ__1902(exp__1925, LarrayG__1916)))
{B1931 = not__1917(emptyQ__1918(exp__1925))}
else
B1931 = false;
if ($T(B1931))
{
var B1911__1926 = symbol_name__1921(first__1922(exp__1925)),
B1912__1927 = binaryEE__1919(B1911__1926, "%begin"),
B1932;
if ($T(B1912__1927))
{B1932 = B1912__1927}
else
{
var B1913__1928 = binaryEE__1919(B1911__1926, "%if");
if ($T(B1913__1928))
{B1932 = B1913__1928}
else
{
var B1914__1929 = binaryEE__1919(B1911__1926, "%while");
if ($T(B1914__1929))
{B1932 = B1914__1929}
else
{
var B1915__1930 = binaryEE__1919(B1911__1926, "%bind");
if ($T(B1915__1930))
{B1932 = B1915__1930}
else
B1932 = binaryEE__1919(B1911__1926, "%try")}}};
if ($T(B1932))
{return true}
else
if ($T(binaryEE__1919(B1911__1926, "%set")))
{
arguments = [last__1920(exp__1925)];
exp__1925 = arguments[0];
continue B1933}
else
if ($T(binaryEE__1919(B1911__1926, "%method")))
{return false}
else
return anyQ__1900(contains_statementsQ__1924, exp__1925)};
break}}, false)}
{
var normalize__1934,
identity__1935 = B1896.identity,
normalize_term__1936;
false;
normalize_term__1936 = Mmake_function__1899("normalize_term", function normalize_term__1937 (expression__1938, env__1939)
{return normalize__1934(expression__1938, env__1939, identity__1935)}, false);
exports["normalize-term"] = normalize_term__1936}
{
var B2000 = $S("%method", "ralph/core"),
B2001 = $S("%begin", "ralph/core"),
B2002 = $S("%bind", "ralph/core"),
B2003 = $S("%if", "ralph/core"),
B2004 = $S("%while", "ralph/core"),
B2005 = $S("%native", "ralph/core"),
B2006 = $S("%try", "ralph/core"),
B2007 = $S("%set", "ralph/core"),
B2008 = $S("%array", "ralph/core"),
B2009 = $S("%object", "ralph/core"),
B2010 = $S("%get-property", "ralph/core"),
B2011 = $S("%infix", "ralph/core"),
B2012 = $S("%native-call", "ralph/core"),
B2013 = $S("%native-name", "ralph/compiler/anf"),
B2014 = $S("%plus", "ralph/core"),
B2015 = $S("%minus", "ralph/core"),
B2016 = $S("%times", "ralph/core"),
B2017 = $S("%divide", "ralph/core"),
concatenate__1947 = B1896.concatenate,
normalize_value__1948,
normalize_all__1949,
expressionQ__1950 = B1898["expression?"],
memberQ__1951 = B1896["member?"],
cons__1952 = B1896.cons,
map__1953 = B1896.map,
rcurry__1954 = B1896.rcurry,
rest__1955 = B1896.rest;
false;
normalize__1934 = Mmake_function__1899("normalize", function normalize__1956 (exp__1957, env__1958, k__1959)
{B2018:while(true){
var B1996;
if ($T(instanceQ__1902(exp__1957, LarrayG__1916)))
{B1996 = not__1917(emptyQ__1918(exp__1957))}
else
B1996 = false;
if ($T(B1996))
{
var B1940__1960 = symbol_name__1921(first__1922(exp__1957));
if ($T(binaryEE__1919(B1940__1960, "%method")))
{
var ____1961 = exp__1957[0],
name__1962 = exp__1957[1],
arguments__1963 = exp__1957[2],
body__1964 = exp__1957[3];
return k__1959([B2000, name__1962, arguments__1963, normalize_term__1936(body__1964, env__1958)])}
else
if ($T(binaryEE__1919(B1940__1960, "%begin")))
{
var ____1965 = exp__1957[0],
exp1__1966 = exp__1957[1],
eT__1967 = $SL.call(exp__1957, 2);
if ($T(emptyQ__1918(eT__1967)))
{
arguments = [exp1__1966, env__1958, k__1959];
exp__1957 = arguments[0];
env__1958 = arguments[1];
k__1959 = arguments[2];
continue B2018}
else
{
arguments = [exp1__1966, env__1958, (function B2019 (B2001, normalize__1956, concatenate__1947, eT__1967, env__1958, k__1959)
{return function B1941__1968 (aexp1__1969)
{return [B2001, aexp1__1969, normalize__1956(concatenate__1947([B2001], eT__1967), env__1958, k__1959)]}})(B2001, normalize__1956, concatenate__1947, eT__1967, env__1958, k__1959)];
exp__1957 = arguments[0];
env__1958 = arguments[1];
k__1959 = arguments[2];
continue B2018}}
else
if ($T(binaryEE__1919(B1940__1960, "%bind")))
{
var ____1970 = exp__1957[0],
B1942__1971 = exp__1957[1],
var__1972 = B1942__1971[0],
value__1973 = B1942__1971[1],
body__1974 = exp__1957[2];
arguments = [value__1973, env__1958, (function B2020 (B2002, var__1972, normalize__1956, body__1974, env__1958, k__1959)
{return function B1943__1975 (avalue__1976)
{return [B2002, [var__1972, avalue__1976], normalize__1956(body__1974, env__1958, k__1959)]}})(B2002, var__1972, normalize__1956, body__1974, env__1958, k__1959)];
exp__1957 = arguments[0];
env__1958 = arguments[1];
k__1959 = arguments[2];
continue B2018}
else
if ($T(binaryEE__1919(B1940__1960, "%if")))
{
var ____1977 = exp__1957[0],
test__1978 = exp__1957[1],
then__1979 = exp__1957[2],
else__1980 = exp__1957[3];
return normalize_value__1948(test__1978, env__1958, function B1944__1981 (atest__1982)
{return k__1959([B2003, atest__1982, normalize_term__1936(then__1979, env__1958), normalize_term__1936(else__1980, env__1958)])})}
else
if ($T(binaryEE__1919(B1940__1960, "%while")))
{
var ____1983 = exp__1957[0],
test__1984 = exp__1957[1],
body__1985 = exp__1957[2],
B1997;
if ($T(contains_statementsQ__1923(test__1984)))
{B1997 = [B2004, true, [B2001, normalize_term__1936([B2003, test__1984, normalize_term__1936(body__1985), [B2005, "break"], false], env__1958)]]}
else
B1997 = [B2004, normalize_term__1936(test__1984, env__1958), normalize_term__1936(body__1985, env__1958)];
return k__1959(B1997)}
else
if ($T(binaryEE__1919(B1940__1960, "%try")))
{
var ____1986 = exp__1957[0],
body__1987 = exp__1957[1],
var__1988 = exp__1957[2],
catch__1989 = exp__1957[3];
return k__1959([B2006, normalize_term__1936(body__1987, env__1958), var__1988, normalize_term__1936(catch__1989, env__1958)])}
else
if ($T(binaryEE__1919(B1940__1960, "%set")))
{
var ____1990 = exp__1957[0],
var__1991 = exp__1957[1],
value__1992 = exp__1957[2];
return normalize_value__1948(value__1992, env__1958, function B1945__1993 (avalue__1994)
{return k__1959([B2007, var__1991, avalue__1994])})}
else
{
var B1946__1995 = binaryEE__1919(B1940__1960, "%define"),
B1998;
if ($T(B1946__1995))
{B1998 = B1946__1995}
else
B1998 = binaryEE__1919(B1940__1960, "%symbol");
if ($T(B1998))
{return k__1959(exp__1957)}
else
if ($T(contains_statementsQ__1923(exp__1957)))
{return normalize_all__1949(exp__1957, env__1958, k__1959)}
else
{
var B1999;
if ($T(expressionQ__1950(exp__1957)))
{B1999 = memberQ__1951(first__1922(exp__1957), [B2008, B2009, B2010, B2011, B2005, B2012, B2013, B2014, B2015, B2016, B2017])}
else
B1999 = false;
if ($T(B1999))
{return k__1959(cons__1952(first__1922(exp__1957), map__1953(rcurry__1954(normalize_term__1936, env__1958), rest__1955(exp__1957))))}
else
return k__1959(map__1953(rcurry__1954(normalize_term__1936, env__1958), exp__1957))}}}
else
return k__1959(exp__1957);
break}}, false)}
{
var normalizeT__2021;
false;
normalize_value__1948 = Mmake_function__1899("normalize_value", function normalize_value__2022 (exp__2023, env__2024, k__2025)
{if ($T(contains_statementsQ__1923(exp__2023)))
{return normalizeT__2021(exp__2023, env__2024, k__2025)}
else
{
var B2026;
if ($T(instanceQ__1902(exp__2023, LarrayG__1916)))
{B2026 = map__1953(rcurry__1954(normalize_term__1936, env__2024), exp__2023)}
else
B2026 = exp__2023;
return k__2025(B2026)}}, false)}
{
var generate_symbol__2028 = B1898["generate-symbol"];
false;
normalizeT__2021 = Mmake_function__1899("normalizeT", function normalizeT__2029 (exp__2030, env__2031, k__2032)
{return normalize__1934(exp__2030, env__2031, function B2027__2033 (aexp__2034)
{if ($T(atomicQ__1908(aexp__2034)))
{return k__2032(aexp__2034)}
else
{
var t__2035 = generate_symbol__2028(env__2031);
return [B2002, [t__2035, aexp__2034], k__2032(t__2035)]}})}, false)}
{
var normalizeTT__2036;
false;
normalizeTT__2036 = Mmake_function__1899("normalizeTT", function normalizeTT__2037 (expT__2038, env__2039, k__2040)
{if ($T(emptyQ__1918(expT__2038)))
{return k__2040([])}
else
return normalize_all__1949(expT__2038, env__2039, k__2040)}, false)}
{
false;
normalize_all__1949 = Mmake_function__1899("normalize_all", function normalize_all__2043 (exp__2044, env__2045, k__2046)
{return normalizeT__2021(first__1922(exp__2044), env__2045, function B2041__2047 (t__2048)
{return normalizeTT__2036(rest__1955(exp__2044), env__2045, function B2042__2049 (tT__2050)
{return k__2046(cons__1952(t__2048, tT__2050))})})}, false)}
