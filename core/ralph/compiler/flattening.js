{
var B2228;
false;
B2228 = require("ralph/core")}
{
var B2230;
false;
B2230 = require("ralph/compiler/utilities")}
{
var Mmake_function__2232 = B2228["%make-function"],
reduce1__2233 = B2228.reduce1,
concatenate__2234 = B2228.concatenate,
map__2235 = B2228.map,
beginQ__2236 = B2230["begin?"],
rest__2237 = B2228.rest,
flatten_statementsN__2238,
flatten_begins__2239;
false;
flatten_begins__2239 = Mmake_function__2232("flatten_begins", function flatten_begins__2240 (exps__2241)
{return reduce1__2233(concatenate__2234, map__2235(function B2231__2242 (exp__2243)
{
var flattened__2244 = flatten_statementsN__2238(exp__2243);
if ($T(beginQ__2236(flattened__2244)))
{return rest__2237(flattened__2244)}
else
return [flattened__2244]}, exps__2241))}, false)}
{
var reduce__2247 = B2228.reduce,
varQ__2248 = B2230["var?"],
do__2249 = B2228["do"],
push_last__2250 = B2228["push-last"],
last__2251 = B2228.last,
binaryEE__2252 = B2228["binary=="],
first__2253 = B2228.first,
second_setter__2254 = B2228["second-setter"],
third__2255 = B2228.third,
second__2256 = B2228.second,
setQ__2257 = B2230["set?"],
not__2258 = B2228.not,
emptyQ__2259 = B2228["empty?"],
flatten_varsN__2260;
false;
flatten_varsN__2260 = Mmake_function__2232("flatten_varsN", function flatten_varsN__2261 (exps__2262)
{return reduce__2247(function B2245__2263 (result__2264, exp__2265)
{
var previous__2266;
if ($T(not__2258(emptyQ__2259(result__2264))))
{previous__2266 = last__2251(result__2264)}
else
previous__2266 = false;
var previous_varQ__2267;
if ($T(previous__2266))
{previous_varQ__2267 = varQ__2248(previous__2266)}
else
previous_varQ__2267 = false;
var B2273;
if ($T(previous_varQ__2267))
{B2273 = varQ__2248(exp__2265)}
else
B2273 = false;
if ($T(B2273))
{
do__2249(function B2246__2268 (binding__2269)
{return push_last__2250(last__2251(result__2264), binding__2269)}, rest__2237(exp__2265));
return result__2264}
else
{
var mergeQ__2270;
if ($T(previous_varQ__2267))
{mergeQ__2270 = setQ__2257(exp__2265)}
else
mergeQ__2270 = false;
var binding__2271;
if ($T(mergeQ__2270))
{binding__2271 = last__2251(last__2251(result__2264))}
else
binding__2271 = false;
var identifier__2272;
if ($T(mergeQ__2270))
{identifier__2272 = second__2256(exp__2265)}
else
identifier__2272 = false;
if ($T(binaryEE__2252(first__2253(binding__2271), identifier__2272)))
{
second_setter__2254(binding__2271, third__2255(exp__2265));
return result__2264}
else
return concatenate__2234(result__2264, [exp__2265])}}, [], exps__2262)}, false)}
{
var B2294 = $S("%begin", "ralph/core"),
B2295 = $S("%var", "ralph/core"),
instanceQ__2277 = B2228["instance?"],
LarrayG__2278 = B2228["<array>"],
last_setter__2279 = B2228["last-setter"],
maybe_begin__2280 = B2230["maybe-begin"],
third_setter__2281 = B2228["third-setter"],
symbol_name__2282 = B2228["symbol-name"];
false;
flatten_statementsN__2238 = Mmake_function__2232("flatten_statementsN", function flatten_statementsN__2283 (exp__2284)
{B2296:while(true){
if ($T(instanceQ__2277(exp__2284, LarrayG__2278)))
{
var B2274__2285 = symbol_name__2282(first__2253(exp__2284)),
B2275__2286 = binaryEE__2252(B2274__2285, "%method"),
B2293;
if ($T(B2275__2286))
{B2293 = B2275__2286}
else
{
var B2276__2287 = binaryEE__2252(B2274__2285, "%while");
if ($T(B2276__2287))
{B2293 = B2276__2287}
else
B2293 = binaryEE__2252(B2274__2285, "%set")};
if ($T(B2293))
{
last_setter__2279(exp__2284, flatten_statementsN__2283(last__2251(exp__2284)));
return exp__2284}
else
if ($T(binaryEE__2252(B2274__2285, "%begin")))
{
var ____2288 = exp__2284[0],
exps__2289 = $SL.call(exp__2284, 1);
return maybe_begin__2280(flatten_varsN__2260(flatten_begins__2239(exps__2289)))}
else
if ($T(binaryEE__2252(B2274__2285, "%bind")))
{
var ____2290 = exp__2284[0],
binding__2291 = exp__2284[1],
body__2292 = exp__2284[2];
arguments = [[B2294, [B2295, binding__2291], body__2292]];
exp__2284 = arguments[0];
continue B2296}
else
if ($T(binaryEE__2252(B2274__2285, "%if")))
{
third_setter__2281(exp__2284, flatten_statementsN__2283(third__2255(exp__2284)));
last_setter__2279(exp__2284, flatten_statementsN__2283(last__2251(exp__2284)));
return exp__2284}
else
if ($T(binaryEE__2252(B2274__2285, "%try")))
{
second_setter__2254(exp__2284, flatten_statementsN__2283(second__2256(exp__2284)));
last_setter__2279(exp__2284, flatten_statementsN__2283(last__2251(exp__2284)));
return exp__2284}
else
return map__2235(flatten_statementsN__2283, exp__2284)}
else
return exp__2284;
break}}, false);
exports["flatten-statements!"] = flatten_statementsN__2238}
