{
var B2299;
false;
B2299 = require("ralph/core")}
{
var B2302,
B2303;
false;
B2302 = require("ralph/compiler/utilities");
false;
B2303 = require("ralph/compiler/free-variables")}
{
var B2376 = $S("%if", "ralph/core"),
B2377 = $S("%native", "ralph/core"),
B2378 = $S("%begin", "ralph/core"),
B2379 = $S("%set", "ralph/core"),
B2380 = $S("%get-property", "ralph/core"),
B2381 = $S("%all-arguments", false),
B2382 = $S("%array", "ralph/core"),
Mmake_function__2312 = B2299["%make-function"],
instanceQ__2313 = B2299["instance?"],
LarrayG__2314 = B2299["<array>"],
binaryEE__2315 = B2299["binary=="],
last_setter__2316 = B2299["last-setter"],
identity__2317 = B2299.identity,
get__2318 = B2299.get,
symbol_name__2319 = B2299["symbol-name"],
second__2320 = B2299.second,
last__2321 = B2299.last,
second_setter__2322 = B2299["second-setter"],
cons__2323 = B2299.cons,
first__2324 = B2299.first,
map__2325 = B2299.map,
rcurry__2326 = B2299.rcurry,
rest__2327 = B2299.rest,
expressionQ__2328 = B2302["expression?"],
not__2329 = B2299.not,
get_setter__2330 = B2299["get-setter"],
GE__2331 = B2299[">="],
push_last__2332 = B2299["push-last"],
element__2333 = B2299.element,
size__2334 = B2299.size,
concatenate__2335 = B2299.concatenate,
close_free_variables__2336,
generate_symbol__2337 = B2302["generate-symbol"],
optimize_tail_callsN__2338;
false;
optimize_tail_callsN__2338 = Mmake_function__2312("optimize_tail_callsN", function optimize_tail_callsN__2339 (exp__2340, env__2341)
{if ($T(instanceQ__2313(exp__2340, LarrayG__2314)))
{
var B2304__2342 = symbol_name__2319(first__2324(exp__2340));
if ($T(binaryEE__2315(B2304__2342, "%method")))
{
var last_method__2343 = get__2318(env__2341, "current-method");
env__2341["current-method"] = exp__2340;
var result__2344 = optimize_tail_callsN__2339(last__2321(exp__2340), env__2341),
name__2345 = symbol_name__2319(second__2320(exp__2340)),
B2305__2346 = get__2318(env__2341, "tco-wrappers", name__2345),
wrapper__2347;
if ($T(B2305__2346))
{wrapper__2347 = B2305__2346}
else
wrapper__2347 = identity__2317;
last_setter__2316(exp__2340, wrapper__2347(result__2344));
env__2341["current-method"] = last_method__2343;
return exp__2340}
else
if ($T(binaryEE__2315(B2304__2342, "%bind")))
{
var ____2348 = exp__2340[0],
binding__2349 = exp__2340[1],
body__2350 = exp__2340[2];
second_setter__2322(binding__2349, optimize_tail_callsN__2339(second__2320(binding__2349), env__2341));
last_setter__2316(exp__2340, optimize_tail_callsN__2339(body__2350, env__2341));
return exp__2340}
else
{
var B2306__2351 = binaryEE__2315(B2304__2342, "%begin"),
B2374;
if ($T(B2306__2351))
{B2374 = B2306__2351}
else
B2374 = binaryEE__2315(B2304__2342, "%while");
if ($T(B2374))
{return cons__2323(first__2324(exp__2340), map__2325(rcurry__2326(optimize_tail_callsN__2339, env__2341), rest__2327(exp__2340)))}
else
if ($T(binaryEE__2315(B2304__2342, "%set")))
{
last_setter__2316(exp__2340, optimize_tail_callsN__2339(last__2321(exp__2340), env__2341));
return exp__2340}
else
if ($T(binaryEE__2315(B2304__2342, "%if")))
{
var ____2352 = exp__2340[0],
test__2353 = exp__2340[1],
then__2354 = exp__2340[2],
else__2355 = exp__2340[3];
return [B2376, test__2353, optimize_tail_callsN__2339(then__2354, env__2341), optimize_tail_callsN__2339(else__2355, env__2341)]}
else
if ($T(binaryEE__2315(B2304__2342, "%try")))
{
second_setter__2322(exp__2340, optimize_tail_callsN__2339(second__2320(exp__2340), env__2341));
last_setter__2316(exp__2340, optimize_tail_callsN__2339(last__2321(exp__2340), env__2341));
return exp__2340}
else
if ($T(binaryEE__2315(B2304__2342, "%return")))
{
var B2307__2356 = env__2341,
current_method__2357 = B2307__2356["current-method"],
____2358 = current_method__2357[0],
method_name__2359 = current_method__2357[1],
arguments__2360 = current_method__2357[2],
body__2361 = current_method__2357[3],
value__2362 = second__2320(exp__2340),
name__2363 = symbol_name__2319(method_name__2359),
B2375;
if ($T(expressionQ__2328(value__2362)))
{B2375 = binaryEE__2315(first__2324(value__2362), method_name__2359)}
else
B2375 = false;
if ($T(B2375))
{
var B2308__2364 = get__2318(env__2341, "tco-labels", name__2363),
label__2365;
if ($T(B2308__2364))
{label__2365 = B2308__2364}
else
label__2365 = get_setter__2330(env__2341, "tco-labels", name__2363, generate_symbol__2337(env__2341));
var new_values__2366 = rest__2327(value__2362);
if ($T(not__2329(get__2318(env__2341, "tco-wrappers", name__2363))))
{get_setter__2330(env__2341, "tco-wrappers", name__2363, function B2309__2367 (exp__2368)
{return [B2377, label__2365, ":while(true)", [B2378, exp__2368, [B2377, "break"]]]})};
var assignments__2369 = [],
B2310__2370 = size__2334(arguments__2360),
i__2371 = 0;
while ($T(not__2329(GE__2331(i__2371, B2310__2370))))
{
(function B2311__2372 (i__2373)
{return push_last__2332(assignments__2369, [B2379, element__2333(arguments__2360, i__2373), [B2380, B2381, i__2373]])})(i__2371);
i__2371 = (i__2371 + 1)};
false;
return concatenate__2335([B2378, [B2379, B2381, close_free_variables__2336(concatenate__2335([B2382], new_values__2366), env__2341)]], assignments__2369, [[B2377, "continue ", label__2365]])}
else
{
last_setter__2316(exp__2340, optimize_tail_callsN__2339(last__2321(exp__2340), env__2341));
return exp__2340}}
else
return map__2325(rcurry__2326(optimize_tail_callsN__2339, env__2341), exp__2340)}}
else
return exp__2340}, false);
exports["optimize-tail-calls!"] = optimize_tail_callsN__2338}
{
var B2390 = $S("%method", "ralph/core"),
B2391 = $S("%return", "ralph/core"),
methodQ__2383 = B2302["method?"],
remove_defined_identifiers__2384 = B2302["remove-defined-identifiers"],
find_free_variables__2385 = B2303["find-free-variables"];
false;
close_free_variables__2336 = Mmake_function__2312("close_free_variables", function close_free_variables__2386 (exp__2387, env__2388)
{if ($T(instanceQ__2313(exp__2387, LarrayG__2314)))
{if ($T(methodQ__2383(exp__2387)))
{
var variables__2389 = remove_defined_identifiers__2384(find_free_variables__2385(exp__2387, env__2388), env__2388);
return concatenate__2335([[B2390, generate_symbol__2337(), variables__2389, [B2391, exp__2387]]], variables__2389)}
else
return map__2325(rcurry__2326(close_free_variables__2386, env__2388), exp__2387)}
else
return exp__2387}, false)}
