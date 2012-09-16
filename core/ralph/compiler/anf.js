{
var B2062;
false;
B2062 = require("ralph/core")}
{
var B2064;
false;
B2064 = require("ralph/compiler/utilities")}
{
var Mmake_function__2065 = B2062["%make-function"],
anyQ__2066 = B2062["any?"],
curry__2067 = B2062.curry,
instanceQ__2068 = B2062["instance?"],
LnumberG__2069 = B2062["<number>"],
LbooleanG__2070 = B2062["<boolean>"],
LstringG__2071 = B2062["<string>"],
LsymbolG__2072 = B2062["<symbol>"],
LkeywordG__2073 = B2062["<keyword>"],
atomicQ__2074;
false;
atomicQ__2074 = Mmake_function__2065("atomicQ", function atomicQ__2075 (expression__2076)
{return anyQ__2066(curry__2067(instanceQ__2068, expression__2076), [LnumberG__2069, LbooleanG__2070, LstringG__2071, LsymbolG__2072, LkeywordG__2073])}, false)}
{
var LarrayG__2082 = B2062["<array>"],
not__2083 = B2062.not,
emptyQ__2084 = B2062["empty?"],
binaryEE__2085 = B2062["binary=="],
last__2086 = B2062.last,
symbol_name__2087 = B2062["symbol-name"],
first__2088 = B2062.first,
contains_statementsQ__2089;
false;
contains_statementsQ__2089 = Mmake_function__2065("contains_statementsQ", function contains_statementsQ__2090 (exp__2091)
{B2099:while(true){
var B2097;
if ($T(instanceQ__2068(exp__2091, LarrayG__2082)))
{B2097 = not__2083(emptyQ__2084(exp__2091))}
else
B2097 = false;
if ($T(B2097))
{
var B2077__2092 = symbol_name__2087(first__2088(exp__2091)),
B2078__2093 = binaryEE__2085(B2077__2092, "%begin"),
B2098;
if ($T(B2078__2093))
{B2098 = B2078__2093}
else
{
var B2079__2094 = binaryEE__2085(B2077__2092, "%if");
if ($T(B2079__2094))
{B2098 = B2079__2094}
else
{
var B2080__2095 = binaryEE__2085(B2077__2092, "%while");
if ($T(B2080__2095))
{B2098 = B2080__2095}
else
{
var B2081__2096 = binaryEE__2085(B2077__2092, "%bind");
if ($T(B2081__2096))
{B2098 = B2081__2096}
else
B2098 = binaryEE__2085(B2077__2092, "%try")}}};
if ($T(B2098))
{return true}
else
if ($T(binaryEE__2085(B2077__2092, "%set")))
{
arguments = [last__2086(exp__2091)];
exp__2091 = arguments[0];
continue B2099}
else
if ($T(binaryEE__2085(B2077__2092, "%method")))
{return false}
else
return anyQ__2066(contains_statementsQ__2090, exp__2091)};
break}}, false)}
{
var normalize__2100,
identity__2101 = B2062.identity,
normalize_term__2102;
false;
normalize_term__2102 = Mmake_function__2065("normalize_term", function normalize_term__2103 (expression__2104, env__2105)
{return normalize__2100(expression__2104, env__2105, identity__2101)}, false);
exports["normalize-term"] = normalize_term__2102}
{
var B2166 = $S("%method", "ralph/core"),
B2167 = $S("%begin", "ralph/core"),
B2168 = $S("%bind", "ralph/core"),
B2169 = $S("%if", "ralph/core"),
B2170 = $S("%while", "ralph/core"),
B2171 = $S("%native", "ralph/core"),
B2172 = $S("%try", "ralph/core"),
B2173 = $S("%set", "ralph/core"),
B2174 = $S("%array", "ralph/core"),
B2175 = $S("%object", "ralph/core"),
B2176 = $S("%get-property", "ralph/core"),
B2177 = $S("%infix", "ralph/core"),
B2178 = $S("%native-call", "ralph/core"),
B2179 = $S("%native-name", "ralph/compiler/anf"),
B2180 = $S("%plus", "ralph/core"),
B2181 = $S("%minus", "ralph/core"),
B2182 = $S("%times", "ralph/core"),
B2183 = $S("%divide", "ralph/core"),
concatenate__2113 = B2062.concatenate,
normalize_value__2114,
normalize_all__2115,
expressionQ__2116 = B2064["expression?"],
memberQ__2117 = B2062["member?"],
cons__2118 = B2062.cons,
map__2119 = B2062.map,
rcurry__2120 = B2062.rcurry,
rest__2121 = B2062.rest;
false;
normalize__2100 = Mmake_function__2065("normalize", function normalize__2122 (exp__2123, env__2124, k__2125)
{B2184:while(true){
var B2162;
if ($T(instanceQ__2068(exp__2123, LarrayG__2082)))
{B2162 = not__2083(emptyQ__2084(exp__2123))}
else
B2162 = false;
if ($T(B2162))
{
var B2106__2126 = symbol_name__2087(first__2088(exp__2123));
if ($T(binaryEE__2085(B2106__2126, "%method")))
{
var ____2127 = exp__2123[0],
name__2128 = exp__2123[1],
arguments__2129 = exp__2123[2],
body__2130 = exp__2123[3];
return k__2125([B2166, name__2128, arguments__2129, normalize_term__2102(body__2130, env__2124)])}
else
if ($T(binaryEE__2085(B2106__2126, "%begin")))
{
var ____2131 = exp__2123[0],
exp1__2132 = exp__2123[1],
eT__2133 = $SL.call(exp__2123, 2);
if ($T(emptyQ__2084(eT__2133)))
{
arguments = [exp1__2132, env__2124, k__2125];
exp__2123 = arguments[0];
env__2124 = arguments[1];
k__2125 = arguments[2];
continue B2184}
else
{
arguments = [exp1__2132, env__2124, (function B2185 (B2167, normalize__2122, concatenate__2113, eT__2133, env__2124, k__2125)
{return function B2107__2134 (aexp1__2135)
{return [B2167, aexp1__2135, normalize__2122(concatenate__2113([B2167], eT__2133), env__2124, k__2125)]}})(B2167, normalize__2122, concatenate__2113, eT__2133, env__2124, k__2125)];
exp__2123 = arguments[0];
env__2124 = arguments[1];
k__2125 = arguments[2];
continue B2184}}
else
if ($T(binaryEE__2085(B2106__2126, "%bind")))
{
var ____2136 = exp__2123[0],
B2108__2137 = exp__2123[1],
var__2138 = B2108__2137[0],
value__2139 = B2108__2137[1],
body__2140 = exp__2123[2];
arguments = [value__2139, env__2124, (function B2186 (B2168, var__2138, normalize__2122, body__2140, env__2124, k__2125)
{return function B2109__2141 (avalue__2142)
{return [B2168, [var__2138, avalue__2142], normalize__2122(body__2140, env__2124, k__2125)]}})(B2168, var__2138, normalize__2122, body__2140, env__2124, k__2125)];
exp__2123 = arguments[0];
env__2124 = arguments[1];
k__2125 = arguments[2];
continue B2184}
else
if ($T(binaryEE__2085(B2106__2126, "%if")))
{
var ____2143 = exp__2123[0],
test__2144 = exp__2123[1],
then__2145 = exp__2123[2],
else__2146 = exp__2123[3];
return normalize_value__2114(test__2144, env__2124, function B2110__2147 (atest__2148)
{return k__2125([B2169, atest__2148, normalize_term__2102(then__2145, env__2124), normalize_term__2102(else__2146, env__2124)])})}
else
if ($T(binaryEE__2085(B2106__2126, "%while")))
{
var ____2149 = exp__2123[0],
test__2150 = exp__2123[1],
body__2151 = exp__2123[2],
B2163;
if ($T(contains_statementsQ__2089(test__2150)))
{B2163 = [B2170, true, [B2167, normalize_term__2102([B2169, test__2150, normalize_term__2102(body__2151), [B2171, "break"], false], env__2124)]]}
else
B2163 = [B2170, normalize_term__2102(test__2150, env__2124), normalize_term__2102(body__2151, env__2124)];
return k__2125(B2163)}
else
if ($T(binaryEE__2085(B2106__2126, "%try")))
{
var ____2152 = exp__2123[0],
body__2153 = exp__2123[1],
var__2154 = exp__2123[2],
catch__2155 = exp__2123[3];
return k__2125([B2172, normalize_term__2102(body__2153, env__2124), var__2154, normalize_term__2102(catch__2155, env__2124)])}
else
if ($T(binaryEE__2085(B2106__2126, "%set")))
{
var ____2156 = exp__2123[0],
var__2157 = exp__2123[1],
value__2158 = exp__2123[2];
return normalize_value__2114(value__2158, env__2124, function B2111__2159 (avalue__2160)
{return k__2125([B2173, var__2157, avalue__2160])})}
else
{
var B2112__2161 = binaryEE__2085(B2106__2126, "%define"),
B2164;
if ($T(B2112__2161))
{B2164 = B2112__2161}
else
B2164 = binaryEE__2085(B2106__2126, "%symbol");
if ($T(B2164))
{return k__2125(exp__2123)}
else
if ($T(contains_statementsQ__2089(exp__2123)))
{return normalize_all__2115(exp__2123, env__2124, k__2125)}
else
{
var B2165;
if ($T(expressionQ__2116(exp__2123)))
{B2165 = memberQ__2117(first__2088(exp__2123), [B2174, B2175, B2176, B2177, B2171, B2178, B2179, B2180, B2181, B2182, B2183])}
else
B2165 = false;
if ($T(B2165))
{return k__2125(cons__2118(first__2088(exp__2123), map__2119(rcurry__2120(normalize_term__2102, env__2124), rest__2121(exp__2123))))}
else
return k__2125(map__2119(rcurry__2120(normalize_term__2102, env__2124), exp__2123))}}}
else
return k__2125(exp__2123);
break}}, false)}
{
var normalizeT__2187;
false;
normalize_value__2114 = Mmake_function__2065("normalize_value", function normalize_value__2188 (exp__2189, env__2190, k__2191)
{if ($T(contains_statementsQ__2089(exp__2189)))
{return normalizeT__2187(exp__2189, env__2190, k__2191)}
else
{
var B2192;
if ($T(instanceQ__2068(exp__2189, LarrayG__2082)))
{B2192 = map__2119(rcurry__2120(normalize_term__2102, env__2190), exp__2189)}
else
B2192 = exp__2189;
return k__2191(B2192)}}, false)}
{
var generate_symbol__2194 = B2064["generate-symbol"];
false;
normalizeT__2187 = Mmake_function__2065("normalizeT", function normalizeT__2195 (exp__2196, env__2197, k__2198)
{return normalize__2100(exp__2196, env__2197, function B2193__2199 (aexp__2200)
{if ($T(atomicQ__2074(aexp__2200)))
{return k__2198(aexp__2200)}
else
{
var t__2201 = generate_symbol__2194(env__2197);
return [B2168, [t__2201, aexp__2200], k__2198(t__2201)]}})}, false)}
{
var normalizeTT__2202;
false;
normalizeTT__2202 = Mmake_function__2065("normalizeTT", function normalizeTT__2203 (expT__2204, env__2205, k__2206)
{if ($T(emptyQ__2084(expT__2204)))
{return k__2206([])}
else
return normalize_all__2115(expT__2204, env__2205, k__2206)}, false)}
{
false;
normalize_all__2115 = Mmake_function__2065("normalize_all", function normalize_all__2209 (exp__2210, env__2211, k__2212)
{return normalizeT__2187(first__2088(exp__2210), env__2211, function B2207__2213 (t__2214)
{return normalizeTT__2202(rest__2121(exp__2210), env__2211, function B2208__2215 (tT__2216)
{return k__2212(cons__2118(t__2214, tT__2216))})})}, false)}
