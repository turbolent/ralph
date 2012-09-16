{
var B2219;
false;
B2219 = require("ralph/core")}
{
var B2221;
false;
B2221 = require("ralph/compiler/utilities")}
{
var B2244 = $S("%begin", "ralph/core"),
Mmake_function__2224 = B2219["%make-function"],
instanceQ__2225 = B2219["instance?"],
LarrayG__2226 = B2219["<array>"],
binaryEE__2227 = B2219["binary=="],
last_setter__2228 = B2219["last-setter"],
last__2229 = B2219.last,
third_setter__2230 = B2219["third-setter"],
third__2231 = B2219.third,
second_setter__2232 = B2219["second-setter"],
second__2233 = B2219.second,
concatenate__2234 = B2219.concatenate,
symbol_name__2235 = B2219["symbol-name"],
first__2236 = B2219.first,
wrap_valueN__2237;
false;
wrap_valueN__2237 = Mmake_function__2224("wrap_valueN", function wrap_valueN__2238 (exp__2239, wrapper__2240)
{if ($T(instanceQ__2225(exp__2239, LarrayG__2226)))
{
var B2222__2241 = symbol_name__2235(first__2236(exp__2239)),
B2223__2242 = binaryEE__2227(B2222__2241, "%begin"),
B2243;
if ($T(B2223__2242))
{B2243 = B2223__2242}
else
B2243 = binaryEE__2227(B2222__2241, "%bind");
if ($T(B2243))
{
last_setter__2228(exp__2239, wrap_valueN__2238(last__2229(exp__2239), wrapper__2240));
return exp__2239}
else
if ($T(binaryEE__2227(B2222__2241, "%if")))
{
third_setter__2230(exp__2239, wrap_valueN__2238(third__2231(exp__2239), wrapper__2240));
last_setter__2228(exp__2239, wrap_valueN__2238(last__2229(exp__2239), wrapper__2240));
return exp__2239}
else
if ($T(binaryEE__2227(B2222__2241, "%while")))
{return [B2244, exp__2239, wrap_valueN__2238(false, wrapper__2240)]}
else
if ($T(binaryEE__2227(B2222__2241, "%try")))
{
second_setter__2232(exp__2239, wrap_valueN__2238(second__2233(exp__2239), wrapper__2240));
last_setter__2228(exp__2239, wrap_valueN__2238(last__2229(exp__2239), wrapper__2240));
return exp__2239}
else
return concatenate__2234(wrapper__2240, [exp__2239])}
else
return concatenate__2234(wrapper__2240, [exp__2239])}, false)}
{
var B2248 = $S("%return", "ralph/core"),
add_explicit_return__2245;
false;
add_explicit_return__2245 = Mmake_function__2224("add_explicit_return", function add_explicit_return__2246 (exp__2247)
{return wrap_valueN__2237(exp__2247, [B2248])}, false)}
{
var B2255 = $S("%if", "ralph/core"),
B2256 = $S("%while", "ralph/core"),
B2257 = $S("%bind", "ralph/core"),
B2258 = $S("%try", "ralph/core"),
not__2249 = B2219.not,
emptyQ__2250 = B2219["empty?"],
memberQ__2251 = B2219["member?"],
statementQ__2252;
false;
statementQ__2252 = Mmake_function__2224("statementQ", function statementQ__2253 (exp__2254)
{if ($T(instanceQ__2225(exp__2254, LarrayG__2226)))
{if ($T(not__2249(emptyQ__2250(exp__2254))))
{return memberQ__2251(first__2236(exp__2254), [B2255, B2256, B2244, B2257, B2258])}}}, false)}
{
var B2264 = $S("%native", "ralph/core"),
LbooleanG__2259 = B2219["<boolean>"],
trueQ__2260 = B2219["true?"],
add_explicit_true__2261;
false;
add_explicit_true__2261 = Mmake_function__2224("add_explicit_true", function add_explicit_true__2262 (exp__2263)
{if ($T(instanceQ__2225(exp__2263, LbooleanG__2259)))
{return trueQ__2260(exp__2263)}
else
return [[B2264, "$T"], exp__2263]}, false)}
{
var B2294 = $S("%set", "ralph/core"),
B2295 = $S("%get-property", "ralph/core"),
B2296 = $S("%var", "ralph/core"),
maybe_begin__2267 = B2221["maybe-begin"],
map__2268 = B2219.map,
rcurry__2269 = B2219.rcurry,
get__2270 = B2219.get,
first_setter__2271 = B2219["first-setter"],
transform_statementsN__2272;
false;
transform_statementsN__2272 = Mmake_function__2224("transform_statementsN", function transform_statementsN__2273 (exp__2274, env__2275)
{if ($T(instanceQ__2225(exp__2274, LarrayG__2226)))
{
var B2265__2276 = symbol_name__2235(first__2236(exp__2274));
if ($T(binaryEE__2227(B2265__2276, "%method")))
{
last_setter__2228(exp__2274, add_explicit_return__2245(transform_statementsN__2273(last__2229(exp__2274), env__2275)));
return exp__2274}
else
if ($T(binaryEE__2227(B2265__2276, "%begin")))
{
var ____2277 = exp__2274[0],
exps__2278 = $SL.call(exp__2274, 1);
return maybe_begin__2267(map__2268(rcurry__2269(transform_statementsN__2273, env__2275), exps__2278))}
else
if ($T(binaryEE__2227(B2265__2276, "%bind")))
{
var ____2279 = exp__2274[0],
B2266__2280 = exp__2274[1],
var__2281 = B2266__2280[0],
value__2282 = B2266__2280[1],
body__2283 = exp__2274[2];
if ($T(statementQ__2252(value__2282)))
{return [B2257, [var__2281, false], [B2244, wrap_valueN__2237(transform_statementsN__2273(value__2282, env__2275), [B2294, var__2281]), transform_statementsN__2273(body__2283, env__2275)]]}
else
return [B2257, [var__2281, transform_statementsN__2273(value__2282, env__2275)], transform_statementsN__2273(body__2283, env__2275)]}
else
if ($T(binaryEE__2227(B2265__2276, "%if")))
{
var ____2284 = exp__2274[0],
test__2285 = exp__2274[1],
then__2286 = exp__2274[2],
else__2287 = exp__2274[3];
return [B2255, add_explicit_true__2261(test__2285), transform_statementsN__2273(then__2286, env__2275), transform_statementsN__2273(else__2287, env__2275)]}
else
if ($T(binaryEE__2227(B2265__2276, "%while")))
{
second_setter__2232(exp__2274, add_explicit_true__2261(second__2233(exp__2274)));
third_setter__2230(exp__2274, transform_statementsN__2273(third__2231(exp__2274), env__2275));
return exp__2274}
else
if ($T(binaryEE__2227(B2265__2276, "%try")))
{
second_setter__2232(exp__2274, transform_statementsN__2273(second__2233(exp__2274), exp__2274));
last_setter__2228(exp__2274, transform_statementsN__2273(last__2229(exp__2274), env__2275));
return exp__2274}
else
if ($T(binaryEE__2227(B2265__2276, "%set")))
{
var ____2288 = exp__2274[0],
identifier__2289 = exp__2274[1],
value__2290 = exp__2274[2],
valueT__2291 = transform_statementsN__2273(value__2290, env__2275),
definition_name__2292 = symbol_name__2235(get__2270(env__2275, "original-identifier", symbol_name__2235(identifier__2289))),
B2293;
if ($T(definition_name__2292))
{B2293 = memberQ__2251(definition_name__2292, get__2270(env__2275, "module", "exports"))}
else
B2293 = false;
if ($T(B2293))
{
first_setter__2271(exp__2274, B2244);
second_setter__2232(exp__2274, [B2294, identifier__2289, valueT__2291]);
third_setter__2230(exp__2274, [B2294, [B2295, [B2264, "exports"], definition_name__2292], identifier__2289])}
else
third_setter__2230(exp__2274, valueT__2291);
return exp__2274}
else
if ($T(binaryEE__2227(B2265__2276, "%define")))
{return [B2296, [last__2229(exp__2274), false]]}
else
return map__2268(rcurry__2269(transform_statementsN__2273, env__2275), exp__2274)}
else
return exp__2274}, false);
exports["transform-statements!"] = transform_statementsN__2272}
