var B2382 = require("ralph/core")
false
{var trueQ = B2382["true?"], B2383 = B2382["%make-function"], B2384 = B2382["instance?"], B2385 = B2382["<array>"], B2386 = B2382.not, B2387 = B2382["empty?"], B2388 = B2382.first, B2389 = B2382["<symbol>"], B2390 = B2383("expressionQ", function B2412 (form__2391)
{if ($T(B2384(form__2391, B2385)))
{var sequence__2403 = form__2391, B2404 = sequence__2403, B2405 = ((B2404 || false).length || 0), B2406 = 0, value__2407 = (B2405 === B2406), B2410 = !(trueQ(value__2407));
if ($T(B2410))
{var sequence__2409 = form__2391, B2411 = sequence__2409[0];
return B2384(B2411, B2389)}}}, false);
exports["expression?"] = B2390}
{var B2422 = $S("%var"), B2413 = B2382["binary=="], B2414 = B2383("varQ", function B2423 (exp__2415)
{if ($T(B2390(exp__2415)))
{var sequence__2419 = exp__2415, object1__2420 = sequence__2419[0], object2__2421 = B2422;
return (object1__2420 === object2__2421)}}, false);
exports["var?"] = B2414}
{var B2432 = $S("%set"), B2424 = B2383("setQ", function B2433 (exp__2425)
{if ($T(B2390(exp__2425)))
{var sequence__2429 = exp__2425, object1__2430 = sequence__2429[0], object2__2431 = B2432;
return (object1__2430 === object2__2431)}}, false);
exports["set?"] = B2424}
{var B2442 = $S("%method"), B2434 = B2383("methodQ", function B2443 (exp__2435)
{if ($T(B2390(exp__2435)))
{var sequence__2439 = exp__2435, object1__2440 = sequence__2439[0], object2__2441 = B2442;
return (object1__2440 === object2__2441)}}, false);
exports["method?"] = B2434}
{var B2444 = B2382.symbol, B2445 = B2382.concatenate, B2446 = B2382["symbol-name"], B2447 = B2383("transform_setter_identifier", function B2449 (identifier__2448)
{return B2444(B2445(B2446(identifier__2448), "-setter"))}, false);
exports["transform-setter-identifier"] = B2447}
{var B2450 = B2382.size, B2451 = B2382["every?"], B2452 = B2382.rcurry, B2453 = B2383("setter_identifierQ", function B2469 (form__2454)
{if ($T(B2384(form__2454, B2385)))
{var object__2458 = form__2454, object1__2459 = ((object__2458 || false).length || 0), object2__2460 = 2, B2467 = (object1__2459 === object2__2460);
if ($T(B2467))
if ($T(B2451(B2452(B2384, B2389), form__2454)))
{var sequence__2464 = form__2454, B2468 = sequence__2464[0], object1__2465 = B2446(B2468), object2__2466 = "setter";
return (object1__2465 === object2__2466)}}}, false);
exports["setter-identifier?"] = B2453}
{var B2470 = B2382.second, B2471 = B2383("identifier_name", function B2477 (identifier__2472)
{var B2476;
if ($T(B2453(identifier__2472)))
{var sequence__2474 = identifier__2472, B2475 = sequence__2474[1];
B2476 = B2447(B2475)}
else B2476 = identifier__2472;
return B2446(B2476)}, false);
exports["identifier-name"] = B2471}
var B2478 = 0
{var B2479 = B2383("reset_symbol_counterN", function B2480 ()
{return B2478 = 0}, false);
exports["reset-symbol-counter!"] = B2479}
{var B2481 = B2382["as-string"], B2482 = B2383("generate_symbol", function B2488 (prefix__2483)
{var B2486;
if ($T(prefix__2483))
B2486 = B2445(prefix__2483, "_")
else B2486 = "$";
var B2487 = B2481(B2478 = (B2478 + 1)), name__2484 = B2445(B2486, B2487), result__2485 = B2444(name__2484);
result__2485["generated?"] = true;
return result__2485}, false);
exports["generate-symbol"] = B2482}
{var B2507 = $S("%begin"), B2490 = B2383("maybe_begin", function B2508 (expressions__2491)
{var object__2494 = expressions__2491, B2492 = ((object__2494 || false).length || 0), object1__2497 = B2492, object2__2498 = 0, B2505 = (object1__2497 === object2__2498);
if ($T(B2505))
return false
else {var object1__2501 = B2492, object2__2502 = 1, B2506 = (object1__2501 === object2__2502);
if ($T(B2506))
{var sequence__2504 = expressions__2491;
return sequence__2504[0]}
else return B2445([B2507], expressions__2491)}}, false);
exports["maybe-begin"] = B2490}
{var B2510 = B2382.get, B2511 = B2383("get_module_nameSname", function B2516 (identifier__2512)
{var B2513 = B2510(identifier__2512, "module"), B2514;
if ($T(B2513))
B2514 = B2513
else B2514 = "";
var B2515 = B2446(identifier__2512);
return [B2514, B2515]}, false);
exports["get-module-name/name"] = B2511}
