var B2382 = require("ralph/core")
false
{
var trueQ = B2382["true?"],
B2383 = B2382["%make-function"],
B2384 = B2382["instance?"],
B2385 = B2382["<array>"],
B2386 = B2382.not,
B2387 = B2382["empty?"],
B2388 = B2382.first,
B2389 = B2382["<symbol>"],
B2390 = B2383("expressionQ", function expressionQ__2391 (form__2392)
{if ($T(B2384(form__2392, B2385)))
{
var sequence__2404 = form__2392,
B2405 = sequence__2404,
B2406 = ((B2405 || false).length || 0),
B2407 = 0,
value__2408 = (B2406 === B2407),
B2411 = !(trueQ(value__2408));
if ($T(B2411))
{
var sequence__2410 = form__2392,
B2412 = sequence__2410[0];
return B2384(B2412, B2389)}}}, false);
exports["expression?"] = B2390}
{
var B2413 = B2382["binary=="],
B2414 = B2382["symbol-name"],
B2415 = B2383("varQ", function varQ__2416 (exp__2417)
{if ($T(B2390(exp__2417)))
{
var sequence__2421 = exp__2417,
B2424 = sequence__2421[0],
object1__2422 = B2414(B2424),
object2__2423 = "%var";
return (object1__2422 === object2__2423)}}, false);
exports["var?"] = B2415}
{
var B2425 = B2383("setQ", function setQ__2426 (exp__2427)
{if ($T(B2390(exp__2427)))
{
var sequence__2431 = exp__2427,
B2434 = sequence__2431[0],
object1__2432 = B2414(B2434),
object2__2433 = "%set";
return (object1__2432 === object2__2433)}}, false);
exports["set?"] = B2425}
{
var B2435 = B2383("methodQ", function methodQ__2436 (exp__2437)
{if ($T(B2390(exp__2437)))
{
var sequence__2441 = exp__2437,
B2444 = sequence__2441[0],
object1__2442 = B2414(B2444),
object2__2443 = "%method";
return (object1__2442 === object2__2443)}}, false);
exports["method?"] = B2435}
{
var B2445 = B2383("beginQ", function beginQ__2446 (exp__2447)
{if ($T(B2390(exp__2447)))
{
var sequence__2451 = exp__2447,
B2454 = sequence__2451[0],
object1__2452 = B2414(B2454),
object2__2453 = "%begin";
return (object1__2452 === object2__2453)}}, false);
exports["begin?"] = B2445}
{
var B2455 = B2382.size,
B2456 = B2382["every?"],
B2457 = B2382.rcurry,
B2458 = B2383("setter_identifierQ", function setter_identifierQ__2459 (form__2460)
{if ($T(B2384(form__2460, B2385)))
{
var object__2464 = form__2460,
object1__2465 = ((object__2464 || false).length || 0),
object2__2466 = 2,
B2473 = (object1__2465 === object2__2466);
if ($T(B2473))
if ($T(B2456(B2457(B2384, B2389), form__2460)))
{
var sequence__2470 = form__2460,
B2474 = sequence__2470[0],
object1__2471 = B2414(B2474),
object2__2472 = "setter";
return (object1__2471 === object2__2472)}}}, false);
exports["setter-identifier?"] = B2458}
var B2475 = 0
{
var B2476 = B2383("reset_symbol_counterN", function reset_symbol_counterN__2477 ()
{return B2475 = 0}, false);
exports["reset-symbol-counter!"] = B2476}
{
var B2478 = B2382.symbol,
B2479 = B2382.concatenate,
B2480 = B2382["as-string"],
B2481 = B2383("generate_symbol", function generate_symbol__2482 (prefix__2483)
{
var B2486;
if ($T(prefix__2483))
B2486 = B2479(prefix__2483, "_")
else
B2486 = "$";
var B2487 = B2480(B2475 = (B2475 + 1)),
name__2484 = B2479(B2486, B2487),
result__2485 = B2478(name__2484, false);
result__2485["generated?"] = true;
return result__2485}, false);
exports["generate-symbol"] = B2481}
{
var B2507 = $S("%begin"),
B2489 = B2383("maybe_begin", function maybe_begin__2490 (expressions__2491)
{
var object__2494 = expressions__2491,
B2492 = ((object__2494 || false).length || 0),
object1__2497 = B2492,
object2__2498 = 0,
B2505 = (object1__2497 === object2__2498);
if ($T(B2505))
return false
else
{
var object1__2501 = B2492,
object2__2502 = 1,
B2506 = (object1__2501 === object2__2502);
if ($T(B2506))
{
var sequence__2504 = expressions__2491;
return sequence__2504[0]}
else
return B2479([B2507], expressions__2491)}}, false);
exports["maybe-begin"] = B2489}
{
var B2509 = B2382.get,
B2510 = B2383("get_module_nameSname", function get_module_nameSname__2511 (identifier__2512)
{
var B2513 = B2509(identifier__2512, "module"),
B2514;
if ($T(B2513))
B2514 = B2513
else
B2514 = "";
var B2515 = B2414(identifier__2512);
return [B2514, B2515]}, false);
exports["get-module-name/name"] = B2510}
{
var B2517 = $S("%all-arguments"),
B2518 = $S("%this-method"),
B2516 = [B2517, B2518];
exports["*defined*"] = B2516}
{
var B2519 = B2382["as-set"],
B2520 = B2382.map,
B2521 = B2382["object-properties"],
B2522 = B2383("environment_definitions", function environment_definitions__2523 (env__2524)
{return B2519(B2520(B2478, B2521(B2509(env__2524, "defined?"))))}, false);
exports["environment-definitions"] = B2522}
