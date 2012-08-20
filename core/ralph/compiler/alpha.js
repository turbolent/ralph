var B2322 = require("ralph/core")
var B2324 = require("ralph/compiler/utilities")
{var trueQ = B2322["true?"], B2325 = B2322["%make-function"], B2326 = B2322.not, B2327 = B2322.get, B2328 = B2322["get-setter"], B2329 = B2322["make-object"], B2330 = B2325("ensure_naming_structure", function B2341 (env__2331, module_name__2332, name__2333)
{var value__2336 = B2327(env__2331, "identifiers", module_name__2332), B2339 = !(trueQ(value__2336));
if ($T(B2339))
B2328(env__2331, "identifiers", module_name__2332, B2329());
var module_renamings__2334 = B2327(env__2331, "identifiers", module_name__2332), value__2338 = B2327(module_renamings__2334, name__2333), B2340 = !(trueQ(value__2338));
if ($T(B2340))
module_renamings__2334[name__2333] = [];
return env__2331}, false);
exports["ensure-naming-structure"] = B2330}
{var trueQ = B2322["true?"], B2343 = B2322.map, B2344 = B2322.push, B2345 = B2324["generate-symbol"], B2346 = B2324["get-module-name/name"], B2347 = B2325("rename_identifiers", function B2363 (identifiers__2348, env__2349)
{return B2343(function B2364 (identifier__2350)
{var B2351 = B2346(identifier__2350), module_name__2352 = B2351[0], name__2353 = B2351[1], value__2356 = B2327(identifier__2350, "generated?"), B2361 = !(trueQ(value__2356)), B2362;
if ($T(B2361))
B2362 = name__2353
else B2362 = false;
var new_identifier__2354 = B2345(B2362);
B2330(env__2349, module_name__2352, name__2353);
var array__2359 = B2327(env__2349, "identifiers", module_name__2352, name__2353), value__2360 = new_identifier__2354;
array__2359.unshift(value__2360);
array__2359;
return new_identifier__2354}, identifiers__2348)}, false);
exports["rename-identifiers"] = B2347}
{var trueQ = B2322["true?"], B2371 = B2322["any?"], B2372 = B2322["empty?"], B2373 = B2322.pop, B2374 = B2322.rest, B2375 = B2322.first, B2376 = B2325("restore_identifiers", function B2399 (identifiers__2377, env__2378)
{var B2379 = identifiers__2377, B2380, B2381, B2382 = [B2379];
while ($T(true))
{var B2383 = B2380, value__2390;
if ($T(B2383))
value__2390 = B2383
else value__2390 = B2371(B2372, B2382);
var B2398 = !(trueQ(value__2390));
if ($T(B2398))
{var sequence__2392 = B2379, identifier__2384 = sequence__2392[0];
(function B2400 (identifier__2385)
{var B2386 = B2346(identifier__2385), module_name__2387 = B2386[0], name__2388 = B2386[1], array__2394 = B2327(env__2378, "identifiers", module_name__2387, name__2388);
return array__2394.shift()})(identifier__2384);
var sequence__2396 = B2379, B2397 = sequence__2396.slice(1);
B2379 = B2397;
B2382 = [B2379]}
else break};
return B2381}, false);
exports["restore-identifiers"] = B2376}
var B2401 = B2329()
{var B2404 = B2325("find_identifier", function B2414 (identifier__2405, env__2406)
{var B2407 = B2346(identifier__2405), module_name__2408 = B2407[0], name__2409 = B2407[1], B2410 = B2327(env__2406, "identifiers", module_name__2408, name__2409);
if ($T(B2410))
{var renamings__2411 = B2410, sequence__2413 = renamings__2411;
return sequence__2413[0]}
else return B2401}, false);
exports["find-identifier"] = B2404}
{var B2507 = $S("%bind"), B2508 = $S("%try"), B2509 = $S("%define"), B2434 = B2322["instance?"], B2435 = B2322["<array>"], B2436 = B2322["=="], B2437 = B2322["push-last"], B2438 = B2322["symbol-name"], B2439 = B2322.concatenate, B2440 = B2322.rcurry, B2441 = B2322["<symbol>"], B2442 = B2325("alpha_convert", function B2510 (form__2443, env__2444)
{var B2445 = form__2443;
if ($T(B2434(B2445, B2435)))
{var sequence__2491 = form__2443, B2500 = sequence__2491[0], B2446 = B2438(B2500);
if ($T(B2436(B2446, "%method")))
{var ____2447 = form__2443[0], arguments__2448 = form__2443[1], body__2449 = form__2443[2], new_arguments__2450 = B2347(arguments__2448, env__2444), new_body__2451 = B2442(body__2449, env__2444), result__2452 = [____2447, new_arguments__2450, new_body__2451];
B2376(arguments__2448, env__2444);
return result__2452}
else if ($T(B2436(B2446, "%bind")))
{var ____2453 = form__2443[0], B2454 = form__2443[1], var__2455 = B2454[0], value__2456 = B2454[1], body__2457 = form__2443[2], new_value__2458 = B2442(value__2456, env__2444), B2459 = B2347([var__2455], env__2444), new_var__2460 = B2459[0], result__2461 = [B2507, [new_var__2460, new_value__2458], B2442(body__2457, env__2444)];
B2376([var__2455], env__2444);
return result__2461}
else if ($T(B2436(B2446, "%try")))
{var ____2462 = form__2443[0], body__2463 = form__2443[1], var__2464 = form__2443[2], catch__2465 = form__2443[3], new_body__2466 = B2442(body__2463, env__2444), B2467 = B2347([var__2464], env__2444), new_var__2468 = B2467[0], result__2469 = [B2508, new_body__2466, new_var__2468, B2442(catch__2465, env__2444)];
B2376([var__2464], env__2444);
return result__2469}
else if ($T(B2436(B2446, "%define")))
{var ____2470 = form__2443[0], identifier__2471 = form__2443[1], B2472 = B2346(identifier__2471), module_name__2473 = B2472[0], name__2474 = B2472[1], new_identifier__2475 = B2345();
B2330(env__2444, module_name__2473, name__2474);
var array__2494 = B2327(env__2444, "identifiers", module_name__2473, name__2474), value__2495 = new_identifier__2475;
array__2494.push(value__2495);
array__2494;
B2328(env__2444, "definition-names", B2438(new_identifier__2475), name__2474);
B2328(env__2444, "new-identifiers", name__2474, new_identifier__2475);
return [B2509, new_identifier__2475]}
else {var B2476 = B2436(B2446, "%if"), B2501;
if ($T(B2476))
B2501 = B2476
else {var B2477 = B2436(B2446, "%while");
if ($T(B2477))
B2501 = B2477
else {var B2478 = B2436(B2446, "%set");
if ($T(B2478))
B2501 = B2478
else {var B2479 = B2436(B2446, "%begin");
if ($T(B2479))
B2501 = B2479
else {var B2480 = B2436(B2446, "%get-property");
if ($T(B2480))
B2501 = B2480
else {var B2481 = B2436(B2446, "%object");
if ($T(B2481))
B2501 = B2481
else {var B2482 = B2436(B2446, "%array");
if ($T(B2482))
B2501 = B2482
else {var B2483 = B2436(B2446, "%native");
if ($T(B2483))
B2501 = B2483
else {var B2484 = B2436(B2446, "%native-call");
if ($T(B2484))
B2501 = B2484
else {var B2485 = B2436(B2446, "%infix");
if ($T(B2485))
B2501 = B2485
else {var B2486 = B2436(B2446, "%minus");
if ($T(B2486))
B2501 = B2486
else {var B2487 = B2436(B2446, "%plus");
if ($T(B2487))
B2501 = B2487
else {var B2488 = B2436(B2446, "%times");
if ($T(B2488))
B2501 = B2488
else B2501 = B2436(B2446, "%divide")}}}}}}}}}}}};
if ($T(B2501))
{var sequence__2497 = form__2443, B2502 = sequence__2497[0], B2503 = [B2502], B2504 = B2440(B2442, env__2444), sequence__2499 = form__2443, B2505 = sequence__2499.slice(1), B2506 = B2343(B2504, B2505);
return B2439(B2503, B2506)}
else if ($T(B2436(B2446, "%native-name")))
return form__2443
else return B2343(B2440(B2442, env__2444), form__2443)}}
else if ($T(B2434(B2445, B2441)))
{var value__2489 = B2404(form__2443, env__2444);
if ($T(B2436(value__2489, B2401)))
return form__2443
else return value__2489}
else return form__2443}, false);
exports["alpha-convert"] = B2442}
