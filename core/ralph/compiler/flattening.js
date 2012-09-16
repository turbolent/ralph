{
var B2394;
false;
B2394 = require("ralph/core")}
{
var B2396;
false;
B2396 = require("ralph/compiler/utilities")}
{
var Mmake_function__2398 = B2394["%make-function"],
reduce1__2399 = B2394.reduce1,
concatenate__2400 = B2394.concatenate,
map__2401 = B2394.map,
beginQ__2402 = B2396["begin?"],
rest__2403 = B2394.rest,
flatten_statementsN__2404,
flatten_begins__2405;
false;
flatten_begins__2405 = Mmake_function__2398("flatten_begins", function flatten_begins__2406 (exps__2407)
{return reduce1__2399(concatenate__2400, map__2401(function B2397__2408 (exp__2409)
{
var flattened__2410 = flatten_statementsN__2404(exp__2409);
if ($T(beginQ__2402(flattened__2410)))
{return rest__2403(flattened__2410)}
else
return [flattened__2410]}, exps__2407))}, false)}
{
var reduce__2413 = B2394.reduce,
varQ__2414 = B2396["var?"],
do__2415 = B2394["do"],
push_last__2416 = B2394["push-last"],
last__2417 = B2394.last,
binaryEE__2418 = B2394["binary=="],
first__2419 = B2394.first,
second_setter__2420 = B2394["second-setter"],
third__2421 = B2394.third,
second__2422 = B2394.second,
setQ__2423 = B2396["set?"],
not__2424 = B2394.not,
emptyQ__2425 = B2394["empty?"],
flatten_varsN__2426;
false;
flatten_varsN__2426 = Mmake_function__2398("flatten_varsN", function flatten_varsN__2427 (exps__2428)
{return reduce__2413(function B2411__2429 (result__2430, exp__2431)
{
var previous__2432;
if ($T(not__2424(emptyQ__2425(result__2430))))
{previous__2432 = last__2417(result__2430)}
else
previous__2432 = false;
var previous_varQ__2433;
if ($T(previous__2432))
{previous_varQ__2433 = varQ__2414(previous__2432)}
else
previous_varQ__2433 = false;
var B2439;
if ($T(previous_varQ__2433))
{B2439 = varQ__2414(exp__2431)}
else
B2439 = false;
if ($T(B2439))
{
do__2415(function B2412__2434 (binding__2435)
{return push_last__2416(last__2417(result__2430), binding__2435)}, rest__2403(exp__2431));
return result__2430}
else
{
var mergeQ__2436;
if ($T(previous_varQ__2433))
{mergeQ__2436 = setQ__2423(exp__2431)}
else
mergeQ__2436 = false;
var binding__2437;
if ($T(mergeQ__2436))
{binding__2437 = last__2417(last__2417(result__2430))}
else
binding__2437 = false;
var identifier__2438;
if ($T(mergeQ__2436))
{identifier__2438 = second__2422(exp__2431)}
else
identifier__2438 = false;
if ($T(binaryEE__2418(first__2419(binding__2437), identifier__2438)))
{
second_setter__2420(binding__2437, third__2421(exp__2431));
return result__2430}
else
return concatenate__2400(result__2430, [exp__2431])}}, [], exps__2428)}, false)}
{
var B2460 = $S("%begin", "ralph/core"),
B2461 = $S("%var", "ralph/core"),
instanceQ__2443 = B2394["instance?"],
LarrayG__2444 = B2394["<array>"],
last_setter__2445 = B2394["last-setter"],
maybe_begin__2446 = B2396["maybe-begin"],
third_setter__2447 = B2394["third-setter"],
symbol_name__2448 = B2394["symbol-name"];
false;
flatten_statementsN__2404 = Mmake_function__2398("flatten_statementsN", function flatten_statementsN__2449 (exp__2450)
{B2462:while(true){
if ($T(instanceQ__2443(exp__2450, LarrayG__2444)))
{
var B2440__2451 = symbol_name__2448(first__2419(exp__2450)),
B2441__2452 = binaryEE__2418(B2440__2451, "%method"),
B2459;
if ($T(B2441__2452))
{B2459 = B2441__2452}
else
{
var B2442__2453 = binaryEE__2418(B2440__2451, "%while");
if ($T(B2442__2453))
{B2459 = B2442__2453}
else
B2459 = binaryEE__2418(B2440__2451, "%set")};
if ($T(B2459))
{
last_setter__2445(exp__2450, flatten_statementsN__2449(last__2417(exp__2450)));
return exp__2450}
else
if ($T(binaryEE__2418(B2440__2451, "%begin")))
{
var ____2454 = exp__2450[0],
exps__2455 = $SL.call(exp__2450, 1);
return maybe_begin__2446(flatten_varsN__2426(flatten_begins__2405(exps__2455)))}
else
if ($T(binaryEE__2418(B2440__2451, "%bind")))
{
var ____2456 = exp__2450[0],
binding__2457 = exp__2450[1],
body__2458 = exp__2450[2];
arguments = [[B2460, [B2461, binding__2457], body__2458]];
exp__2450 = arguments[0];
continue B2462}
else
if ($T(binaryEE__2418(B2440__2451, "%if")))
{
third_setter__2447(exp__2450, flatten_statementsN__2449(third__2421(exp__2450)));
last_setter__2445(exp__2450, flatten_statementsN__2449(last__2417(exp__2450)));
return exp__2450}
else
if ($T(binaryEE__2418(B2440__2451, "%try")))
{
second_setter__2420(exp__2450, flatten_statementsN__2449(second__2422(exp__2450)));
last_setter__2445(exp__2450, flatten_statementsN__2449(last__2417(exp__2450)));
return exp__2450}
else
return map__2401(flatten_statementsN__2449, exp__2450)}
else
return exp__2450;
break}}, false);
exports["flatten-statements!"] = flatten_statementsN__2404}
