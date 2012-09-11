{
var B1903;
false;
B1903 = require("ralph/core")}
{
var B1906,
B1907;
false;
B1906 = require("ralph/compiler/utilities");
false;
B1907 = require("ralph/format")}
{
var ralphScoreCCtrueQ = B1903["true?"],
Mmake_function__1908 = B1903["%make-function"],
not__1909 = B1903.not,
get__1910 = B1903.get,
get_setter__1911 = B1903["get-setter"],
make_object__1912 = B1903["make-object"],
ensure_naming_structure__1913;
false;
ensure_naming_structure__1913 = Mmake_function__1908("ensure_naming_structure", function ensure_naming_structure__1914 (env__1915, module_name__1916, name__1917)
{
var value__1919 = get__1910(env__1915, "identifiers", module_name__1916),
B1921 = !(ralphScoreCCtrueQ(value__1919));
if ($T(B1921))
{get_setter__1911(env__1915, "identifiers", module_name__1916, make_object__1912())};
var module_renamings__1918 = get__1910(env__1915, "identifiers", module_name__1916),
value__1920 = get__1910(module_renamings__1918, name__1917),
B1922 = !(ralphScoreCCtrueQ(value__1920));
if ($T(B1922))
{module_renamings__1918[name__1917] = []};
return env__1915}, false);
exports["ensure-naming-structure"] = ensure_naming_structure__1913}
{
var map__1925 = B1903.map,
signal__1926 = B1903.signal,
concatenate__1927 = B1903.concatenate,
description__1928 = B1903.description,
push__1929 = B1903.push,
generate_symbol__1930 = B1906["generate-symbol"],
module_nameSname__1931 = B1906["module-name/name"],
rename_identifiers__1932;
false;
rename_identifiers__1932 = Mmake_function__1908("rename_identifiers", function rename_identifiers__1933 (identifiers__1934, env__1935)
{return map__1925(function B1923__1936 (identifier__1937)
{
var B1924__1938 = module_nameSname__1931(identifier__1937),
module_name__1939 = B1924__1938[0],
name__1940 = B1924__1938[1],
value__1942 = module_name__1939,
B1947 = !(ralphScoreCCtrueQ(value__1942));
if ($T(B1947))
{
var error__1943 = concatenate__1927("NOT QUALIFIED: ", description__1928(identifier__1937));
throw(error__1943);
false};
var value__1944 = get__1910(identifier__1937, "generated?"),
B1948 = !(ralphScoreCCtrueQ(value__1944)),
B1949;
if ($T(B1948))
{B1949 = name__1940}
else
B1949 = false;
var new_identifier__1941 = generate_symbol__1930(env__1935, B1949);
ensure_naming_structure__1913(env__1935, module_name__1939, name__1940);
var value__1946 = new_identifier__1941,
array__1945 = get__1910(env__1935, "identifiers", module_name__1939, name__1940);
array__1945.unshift(value__1946);
array__1945;
return new_identifier__1941}, identifiers__1934)}, false);
exports["rename-identifiers"] = rename_identifiers__1932}
{
var anyQ__1957 = B1903["any?"],
emptyQ__1958 = B1903["empty?"],
pop__1959 = B1903.pop,
rest__1960 = B1903.rest,
first__1961 = B1903.first,
restore_identifiers__1962;
false;
restore_identifiers__1962 = Mmake_function__1908("restore_identifiers", function restore_identifiers__1963 (identifiers__1964, env__1965)
{
var B1950__1966 = identifiers__1964,
B1951__1967,
B1953__1968,
B1952__1969 = [B1950__1966];
while (true)
{
var B1954__1970 = B1951__1967,
value__1977;
if ($T(B1954__1970))
{value__1977 = B1954__1970}
else
value__1977 = anyQ__1957(emptyQ__1958, B1952__1969);
var B1985 = !(ralphScoreCCtrueQ(value__1977));
if ($T(B1985))
{
var sequence__1978 = B1950__1966,
identifier__1971 = sequence__1978[0];
(function B1955__1972 (identifier__1973)
{
var B1956__1974 = module_nameSname__1931(identifier__1973),
module_name__1975 = B1956__1974[0],
name__1976 = B1956__1974[1],
value__1979 = module_name__1975,
B1983 = !(ralphScoreCCtrueQ(value__1979));
if ($T(B1983))
{
var error__1980 = concatenate__1927("NOT QUALIFIED: ", description__1928(identifier__1973));
throw(error__1980);
false};
var array__1981 = get__1910(env__1965, "identifiers", module_name__1975, name__1976);
return array__1981.shift()})(identifier__1971);
var sequence__1982 = B1950__1966,
B1984 = sequence__1982.slice(1);
B1950__1966 = B1984;
B1952__1969 = [B1950__1966]}
else
break};
return B1953__1968}, false);
exports["restore-identifiers"] = restore_identifiers__1962}
{
var Tnot_foundT__1986;
false;
Tnot_foundT__1986 = make_object__1912()}
{
var find_identifier__1988;
false;
find_identifier__1988 = Mmake_function__1908("find_identifier", function find_identifier__1989 (identifier__1990, env__1991)
{
var B1987__1992 = module_nameSname__1931(identifier__1990),
module_name__1993 = B1987__1992[0],
name__1994 = B1987__1992[1],
value__1996 = module_name__1993,
B2000 = !(ralphScoreCCtrueQ(value__1996));
if ($T(B2000))
{
var error__1997 = concatenate__1927("NOT QUALIFIED: ", description__1928(identifier__1990));
throw(error__1997);
false};
var renamings__1995 = get__1910(env__1991, "identifiers", module_name__1993, name__1994),
B2001;
if ($T(renamings__1995))
{
var value__1998 = emptyQ__1958(renamings__1995);
B2001 = !(ralphScoreCCtrueQ(value__1998))}
else
B2001 = false;
if ($T(B2001))
{
var sequence__1999 = renamings__1995;
return sequence__1999[0]}
else
return Tnot_foundT__1986}, false);
exports["find-identifier"] = find_identifier__1988}
{
var B2139 = $S("%method", "ralph/core"),
B2140 = $S("%bind", "ralph/core"),
B2141 = $S("%try", "ralph/core"),
B2142 = $S("%define", "ralph/core"),
instanceQ__2022 = B1903["instance?"],
LarrayG__2023 = B1903["<array>"],
binaryEE__2024 = B1903["binary=="],
symbol_name__2025 = B1903["symbol-name"],
rcurry__2026 = B1903.rcurry,
LsymbolG__2027 = B1903["<symbol>"],
alpha_convert__2028;
false;
alpha_convert__2028 = Mmake_function__1908("alpha_convert", function alpha_convert__2029 (form__2030, env__2031)
{
var B2002__2032 = form__2030;
if ($T(instanceQ__2022(B2002__2032, LarrayG__2023)))
{
var sequence__2081 = form__2030,
B2126 = sequence__2081[0],
B2003__2033 = symbol_name__2025(B2126),
object2__2083 = "%method",
object1__2082 = B2003__2033,
B2127 = (object1__2082 === object2__2083);
if ($T(B2127))
{
var ____2034 = form__2030[0],
name__2035 = form__2030[1],
arguments__2036 = form__2030[2],
body__2037 = form__2030[3],
identifiers__2038 = concatenate__1927([name__2035], arguments__2036),
new_identifiers__2039 = rename_identifiers__1932(identifiers__2038, env__2031),
new_body__2040 = alpha_convert__2029(body__2037, env__2031),
new_name__2041 = new_identifiers__2039[0],
new_arguments__2042 = $SL.call(new_identifiers__2039, 1),
result__2043 = [B2139, new_name__2041, new_arguments__2042, new_body__2040];
restore_identifiers__1962(identifiers__2038, env__2031);
return result__2043}
else
{
var object2__2085 = "%bind",
object1__2084 = B2003__2033,
B2128 = (object1__2084 === object2__2085);
if ($T(B2128))
{
var ____2044 = form__2030[0],
B2004__2045 = form__2030[1],
var__2046 = B2004__2045[0],
value__2047 = B2004__2045[1],
body__2048 = form__2030[2],
new_value__2049 = alpha_convert__2029(value__2047, env__2031),
B2005__2050 = rename_identifiers__1932([var__2046], env__2031),
new_var__2051 = B2005__2050[0],
result__2052 = [B2140, [new_var__2051, new_value__2049], alpha_convert__2029(body__2048, env__2031)];
restore_identifiers__1962([var__2046], env__2031);
return result__2052}
else
{
var object2__2087 = "%try",
object1__2086 = B2003__2033,
B2129 = (object1__2086 === object2__2087);
if ($T(B2129))
{
var ____2053 = form__2030[0],
body__2054 = form__2030[1],
var__2055 = form__2030[2],
catch__2056 = form__2030[3],
new_body__2057 = alpha_convert__2029(body__2054, env__2031),
B2006__2058 = rename_identifiers__1932([var__2055], env__2031),
new_var__2059 = B2006__2058[0],
result__2060 = [B2141, new_body__2057, new_var__2059, alpha_convert__2029(catch__2056, env__2031)];
restore_identifiers__1962([var__2055], env__2031);
return result__2060}
else
{
var object2__2089 = "%define",
object1__2088 = B2003__2033,
B2130 = (object1__2088 === object2__2089);
if ($T(B2130))
{
var ____2061 = form__2030[0],
identifier__2062 = form__2030[1],
name__2063 = symbol_name__2025(identifier__2062),
B2007__2064 = rename_identifiers__1932([identifier__2062], env__2031),
new_identifier__2065 = B2007__2064[0];
get_setter__1911(env__2031, "original-identifier", symbol_name__2025(new_identifier__2065), identifier__2062);
return [B2142, new_identifier__2065]}
else
{
var object2__2091 = "%if",
object1__2090 = B2003__2033,
B2008__2066 = (object1__2090 === object2__2091),
B2131;
if ($T(B2008__2066))
{B2131 = B2008__2066}
else
{
var object2__2093 = "%while",
object1__2092 = B2003__2033,
B2009__2067 = (object1__2092 === object2__2093);
if ($T(B2009__2067))
{B2131 = B2009__2067}
else
{
var object2__2095 = "%set",
object1__2094 = B2003__2033,
B2010__2068 = (object1__2094 === object2__2095);
if ($T(B2010__2068))
{B2131 = B2010__2068}
else
{
var object2__2097 = "%begin",
object1__2096 = B2003__2033,
B2011__2069 = (object1__2096 === object2__2097);
if ($T(B2011__2069))
{B2131 = B2011__2069}
else
{
var object2__2099 = "%get-property",
object1__2098 = B2003__2033,
B2012__2070 = (object1__2098 === object2__2099);
if ($T(B2012__2070))
{B2131 = B2012__2070}
else
{
var object2__2101 = "%object",
object1__2100 = B2003__2033,
B2013__2071 = (object1__2100 === object2__2101);
if ($T(B2013__2071))
{B2131 = B2013__2071}
else
{
var object2__2103 = "%array",
object1__2102 = B2003__2033,
B2014__2072 = (object1__2102 === object2__2103);
if ($T(B2014__2072))
{B2131 = B2014__2072}
else
{
var object2__2105 = "%native",
object1__2104 = B2003__2033,
B2015__2073 = (object1__2104 === object2__2105);
if ($T(B2015__2073))
{B2131 = B2015__2073}
else
{
var object2__2107 = "%native-call",
object1__2106 = B2003__2033,
B2016__2074 = (object1__2106 === object2__2107);
if ($T(B2016__2074))
{B2131 = B2016__2074}
else
{
var object2__2109 = "%infix",
object1__2108 = B2003__2033,
B2017__2075 = (object1__2108 === object2__2109);
if ($T(B2017__2075))
{B2131 = B2017__2075}
else
{
var object2__2111 = "%minus",
object1__2110 = B2003__2033,
B2018__2076 = (object1__2110 === object2__2111);
if ($T(B2018__2076))
{B2131 = B2018__2076}
else
{
var object2__2113 = "%plus",
object1__2112 = B2003__2033,
B2019__2077 = (object1__2112 === object2__2113);
if ($T(B2019__2077))
{B2131 = B2019__2077}
else
{
var object2__2115 = "%times",
object1__2114 = B2003__2033,
B2020__2078 = (object1__2114 === object2__2115);
if ($T(B2020__2078))
{B2131 = B2020__2078}
else
{
var object2__2117 = "%divide",
object1__2116 = B2003__2033;
B2131 = (object1__2116 === object2__2117)}}}}}}}}}}}}};
if ($T(B2131))
{
var sequence__2118 = form__2030,
B2132 = sequence__2118[0],
B2133 = [B2132],
B2134 = rcurry__2026(alpha_convert__2029, env__2031),
sequence__2119 = form__2030,
B2135 = sequence__2119.slice(1),
B2136 = map__1925(B2134, B2135);
return concatenate__1927(B2133, B2136)}
else
{
var object2__2121 = "%native-name",
object1__2120 = B2003__2033,
B2021__2079 = (object1__2120 === object2__2121),
B2137;
if ($T(B2021__2079))
{B2137 = B2021__2079}
else
{
var object2__2123 = "%symbol",
object1__2122 = B2003__2033;
B2137 = (object1__2122 === object2__2123)};
if ($T(B2137))
{return form__2030}
else
return map__1925(rcurry__2026(alpha_convert__2029, env__2031), form__2030)}}}}}}
else
if ($T(instanceQ__2022(B2002__2032, LsymbolG__2027)))
{
var value__2080 = find_identifier__1988(form__2030, env__2031),
object2__2125 = Tnot_foundT__1986,
object1__2124 = value__2080,
B2138 = (object1__2124 === object2__2125);
if ($T(B2138))
{return form__2030}
else
return value__2080}
else
return form__2030}, false);
exports["alpha-convert"] = alpha_convert__2028}
