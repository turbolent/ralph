{
var B2133;
false;
B2133 = require("ralph/core")}
{
var B2136,
B2137;
false;
B2136 = require("ralph/compiler/utilities");
false;
B2137 = require("ralph/compiler/free-variables")}
{
var B2210 = $S("%if", "ralph/core"),
B2211 = $S("%native", "ralph/core"),
B2212 = $S("%begin", "ralph/core"),
B2213 = $S("%set", "ralph/core"),
B2214 = $S("%get-property", "ralph/core"),
B2215 = $S("%all-arguments"),
B2216 = $S("%array", "ralph/core"),
Mmake_function__2146 = B2133["%make-function"],
instanceQ__2147 = B2133["instance?"],
LarrayG__2148 = B2133["<array>"],
binaryEE__2149 = B2133["binary=="],
last_setter__2150 = B2133["last-setter"],
identity__2151 = B2133.identity,
get__2152 = B2133.get,
symbol_name__2153 = B2133["symbol-name"],
second__2154 = B2133.second,
last__2155 = B2133.last,
second_setter__2156 = B2133["second-setter"],
cons__2157 = B2133.cons,
first__2158 = B2133.first,
map__2159 = B2133.map,
rcurry__2160 = B2133.rcurry,
rest__2161 = B2133.rest,
expressionQ__2162 = B2136["expression?"],
not__2163 = B2133.not,
get_setter__2164 = B2133["get-setter"],
GE__2165 = B2133[">="],
push_last__2166 = B2133["push-last"],
element__2167 = B2133.element,
size__2168 = B2133.size,
concatenate__2169 = B2133.concatenate,
close_free_variables__2170,
generate_symbol__2171 = B2136["generate-symbol"],
optimize_tail_callsN__2172;
false;
optimize_tail_callsN__2172 = Mmake_function__2146("optimize_tail_callsN", function optimize_tail_callsN__2173 (exp__2174, env__2175)
{if ($T(instanceQ__2147(exp__2174, LarrayG__2148)))
{
var B2138__2176 = symbol_name__2153(first__2158(exp__2174));
if ($T(binaryEE__2149(B2138__2176, "%method")))
{
var last_method__2177 = get__2152(env__2175, "current-method");
env__2175["current-method"] = exp__2174;
var result__2178 = optimize_tail_callsN__2173(last__2155(exp__2174), env__2175),
name__2179 = symbol_name__2153(second__2154(exp__2174)),
B2139__2180 = get__2152(env__2175, "tco-wrappers", name__2179),
wrapper__2181;
if ($T(B2139__2180))
{wrapper__2181 = B2139__2180}
else
wrapper__2181 = identity__2151;
last_setter__2150(exp__2174, wrapper__2181(result__2178));
env__2175["current-method"] = last_method__2177;
return exp__2174}
else
if ($T(binaryEE__2149(B2138__2176, "%bind")))
{
var ____2182 = exp__2174[0],
binding__2183 = exp__2174[1],
body__2184 = exp__2174[2];
second_setter__2156(binding__2183, optimize_tail_callsN__2173(second__2154(binding__2183), env__2175));
last_setter__2150(exp__2174, optimize_tail_callsN__2173(body__2184, env__2175));
return exp__2174}
else
{
var B2140__2185 = binaryEE__2149(B2138__2176, "%begin"),
B2208;
if ($T(B2140__2185))
{B2208 = B2140__2185}
else
B2208 = binaryEE__2149(B2138__2176, "%while");
if ($T(B2208))
{return cons__2157(first__2158(exp__2174), map__2159(rcurry__2160(optimize_tail_callsN__2173, env__2175), rest__2161(exp__2174)))}
else
if ($T(binaryEE__2149(B2138__2176, "%set")))
{
last_setter__2150(exp__2174, optimize_tail_callsN__2173(last__2155(exp__2174), env__2175));
return exp__2174}
else
if ($T(binaryEE__2149(B2138__2176, "%if")))
{
var ____2186 = exp__2174[0],
test__2187 = exp__2174[1],
then__2188 = exp__2174[2],
else__2189 = exp__2174[3];
return [B2210, test__2187, optimize_tail_callsN__2173(then__2188, env__2175), optimize_tail_callsN__2173(else__2189, env__2175)]}
else
if ($T(binaryEE__2149(B2138__2176, "%try")))
{
second_setter__2156(exp__2174, optimize_tail_callsN__2173(second__2154(exp__2174), env__2175));
last_setter__2150(exp__2174, optimize_tail_callsN__2173(last__2155(exp__2174), env__2175));
return exp__2174}
else
if ($T(binaryEE__2149(B2138__2176, "%return")))
{
var B2141__2190 = env__2175,
current_method__2191 = B2141__2190["current-method"],
____2192 = current_method__2191[0],
method_name__2193 = current_method__2191[1],
arguments__2194 = current_method__2191[2],
body__2195 = current_method__2191[3],
value__2196 = second__2154(exp__2174),
name__2197 = symbol_name__2153(method_name__2193),
B2209;
if ($T(expressionQ__2162(value__2196)))
{B2209 = binaryEE__2149(first__2158(value__2196), method_name__2193)}
else
B2209 = false;
if ($T(B2209))
{
var B2142__2198 = get__2152(env__2175, "tco-labels", name__2197),
label__2199;
if ($T(B2142__2198))
{label__2199 = B2142__2198}
else
label__2199 = get_setter__2164(env__2175, "tco-labels", name__2197, generate_symbol__2171(env__2175));
var new_values__2200 = rest__2161(value__2196);
if ($T(not__2163(get__2152(env__2175, "tco-wrappers", name__2197))))
{get_setter__2164(env__2175, "tco-wrappers", name__2197, function B2143__2201 (exp__2202)
{return [B2211, label__2199, ":while(true)", [B2212, exp__2202, [B2211, "break"]]]})};
var assignments__2203 = [],
B2144__2204 = size__2168(arguments__2194),
i__2205 = 0;
while ($T(not__2163(GE__2165(i__2205, B2144__2204))))
{
(function B2145__2206 (i__2207)
{return push_last__2166(assignments__2203, [B2213, element__2167(arguments__2194, i__2207), [B2214, B2215, i__2207]])})(i__2205);
i__2205 = (i__2205 + 1)};
false;
return concatenate__2169([B2212, [B2213, B2215, close_free_variables__2170(concatenate__2169([B2216], new_values__2200), env__2175)]], assignments__2203, [[B2211, "continue ", label__2199]])}
else
{
last_setter__2150(exp__2174, optimize_tail_callsN__2173(last__2155(exp__2174), env__2175));
return exp__2174}}
else
return map__2159(rcurry__2160(optimize_tail_callsN__2173, env__2175), exp__2174)}}
else
return exp__2174}, false);
exports["optimize-tail-calls!"] = optimize_tail_callsN__2172}
{
var B2224 = $S("%method", "ralph/core"),
B2225 = $S("%return", "ralph/core"),
methodQ__2217 = B2136["method?"],
remove_defined_identifiers__2218 = B2136["remove-defined-identifiers"],
find_free_variables__2219 = B2137["find-free-variables"];
false;
close_free_variables__2170 = Mmake_function__2146("close_free_variables", function close_free_variables__2220 (exp__2221, env__2222)
{if ($T(instanceQ__2147(exp__2221, LarrayG__2148)))
{if ($T(methodQ__2217(exp__2221)))
{
var variables__2223 = remove_defined_identifiers__2218(find_free_variables__2219(exp__2221, env__2222), env__2222);
return concatenate__2169([[B2224, generate_symbol__2171(), variables__2223, [B2225, exp__2221]]], variables__2223)}
else
return map__2159(rcurry__2160(close_free_variables__2220, env__2222), exp__2221)}
else
return exp__2221}, false)}
