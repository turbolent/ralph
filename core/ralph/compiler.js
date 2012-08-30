{
var B938;
false;
B938 = require("ralph/core")}
{
var B2343,
B2344,
B2345,
B2346,
B2347,
B2348,
B2349,
B2350,
B2351,
B2352,
B2353,
B2354,
B2355;
false;
B2343 = require("ralph/stream");
false;
B2344 = require("ralph/format");
false;
B2345 = require("ralph/reader");
false;
B2346 = require("ralph/file-system");
false;
B2347 = require("ralph/compiler/utilities");
false;
B2348 = require("ralph/compiler/alpha");
false;
B2349 = require("ralph/compiler/define-lifting");
false;
B2350 = require("ralph/compiler/free-variables");
false;
B2351 = require("ralph/compiler/anf");
false;
B2352 = require("ralph/compiler/statements");
false;
B2353 = require("ralph/compiler/tco");
false;
B2354 = require("ralph/compiler/flattening");
false;
B2355 = require("ralph/compiler/javascript")}
{
var Mmake_function__2356 = B938["%make-function"],
symbol__2357 = B938.symbol,
concatenate__2358 = B938.concatenate,
symbol_name__2359 = B938["symbol-name"],
transform_setter_identifier__2360;
false;
transform_setter_identifier__2360 = Mmake_function__2356("transform_setter_identifier", function transform_setter_identifier__2361 (identifier__2362)
{return symbol__2357(concatenate__2358(symbol_name__2359(identifier__2362), "-setter"), false)}, false)}
{
var setter_identifierQ__2363 = B2347["setter-identifier?"],
second__2364 = B938.second,
identifier_name__2365;
false;
identifier_name__2365 = Mmake_function__2356("identifier_name", function identifier_name__2366 (identifier__2367)
{
var B2368;
if ($T(setter_identifierQ__2363(identifier__2367)))
{B2368 = transform_setter_identifier__2360(second__2364(identifier__2367))}
else
B2368 = identifier__2367;
return symbol_name__2359(B2368)}, false)}
{
var make_object__2369 = B938["make-object"],
TmodulesT__2370;
false;
TmodulesT__2370 = make_object__2369()}
{
var Mmake_class__2375 = B938["%make-class"],
LobjectG__2376 = B938["<object>"],
LmoduleG__2377;
false;
LmoduleG__2377 = Mmake_class__2375(LobjectG__2376, {name:false,
"native?":false,
exports:function B2378 ()
{return []},
imports:function B2379 ()
{return []},
dependencies:function B2380 ()
{return []},
inline:function B2381 ()
{return []}});
exports["<module>"] = LmoduleG__2377}
{
var make_plain_object__2388 = B938["make-plain-object"],
LenvironmentG__2389;
false;
LenvironmentG__2389 = Mmake_class__2375(LobjectG__2376, {module:false,
macros:function B2390 ()
{return make_plain_object__2388()},
"symbol-macros":function B2391 ()
{return make_plain_object__2388()},
identifiers:function B2392 ()
{return make_object__2369()},
"defined?":function B2393 ()
{return make_object__2369()},
lifted:function B2394 ()
{return make_object__2369()},
"import-identifiers":function B2395 ()
{return make_plain_object__2388()}});
exports["<environment>"] = LenvironmentG__2389}
{
var Tspecial_formsT__2396;
false;
Tspecial_formsT__2396 = make_object__2369()}
{
var expressionQ__2397 = B2347["expression?"],
get__2398 = B938.get,
first__2399 = B938.first,
find_special_form__2400;
false;
find_special_form__2400 = Mmake_function__2356("find_special_form", function find_special_form__2401 (form__2402, env__2403)
{if ($T(expressionQ__2397(form__2402)))
{return get__2398(Tspecial_formsT__2396, symbol_name__2359(first__2399(form__2402)))}}, false)}
{
var do__2406 = B938["do"],
signal__2407 = B938.signal,
make__2408 = B938.make,
LerrorG__2409 = B938["<error>"],
curry__2410 = B938.curry,
bindN__2411 = B2347["bind!"],
unbindN__2412 = B2347["unbind!"],
macroexpand_all__2413,
map__2414 = B938.map,
rcurry__2415 = B938.rcurry,
localize__2416 = B2347.localize;
Tspecial_formsT__2396["%method"] = function B2417 (env__2418, name__2419, arguments__2420, body__2421)
{
var identifiersT__2422 = map__2414(rcurry__2415(localize__2416, env__2418), concatenate__2358([name__2419], arguments__2420));
do__2406(function B2423 (identifierT__2424)
{if ($T(get__2398(identifierT__2424, "module")))
{return signal__2407(make__2408(LerrorG__2409, $K("message"), "Can't create method using identifier with external qualifier"))}}, identifiersT__2422);
do__2406(curry__2410(bindN__2411, env__2418), identifiersT__2422);
var bodyT__2425 = macroexpand_all__2413(body__2421, env__2418);
do__2406(curry__2410(unbindN__2412, env__2418), identifiersT__2422);
var nameT__2426 = identifiersT__2422[0],
argumentsT__2427 = $SL.call(identifiersT__2422, 1);
return [$S("%method", "ralph/core"), nameT__2426, argumentsT__2427, bodyT__2425]}}
Tspecial_formsT__2396["%set"] = function B2429 (env__2430, identifier__2431, value__2432)
{return [$S("%set", "ralph/core"), identifier__2431, macroexpand_all__2413(value__2432, env__2430)]}
Tspecial_formsT__2396["%bind"] = function B2434 (env__2435, binding__2436, body__2437)
{
var var__2438 = binding__2436[0],
value__2439 = binding__2436[1];
bindN__2411(env__2435, var__2438);
var varT__2440 = localize__2416(var__2438, env__2435),
valueT__2441 = macroexpand_all__2413(value__2439, env__2435);
if ($T(get__2398(varT__2440, "module")))
{signal__2407(make__2408(LerrorG__2409, $K("message"), "Can't bind using identifier with external qualifier"))};
var result__2442 = [$S("%bind", "ralph/core"), [varT__2440, valueT__2441], macroexpand_all__2413(body__2437, env__2435)];
unbindN__2412(env__2435, var__2438);
return result__2442}
{
var Tcore_macrosT__2443;
false;
Tcore_macrosT__2443 = make_object__2369();
exports["*core-macros*"] = Tcore_macrosT__2443}
{
var find_key__2446 = B938["find-key"],
E__2447 = B938["="],
copy_sequence__2448 = B938["copy-sequence"],
size__2449 = B938.size,
element__2450 = B938.element,
inc__2451 = B938.inc,
analyze_lambda_list__2452;
false;
analyze_lambda_list__2452 = Mmake_function__2356("analyze_lambda_list", function analyze_lambda_list__2453 (list__2454)
{
var position__2455 = function position__2456 (symbol__2457)
{return find_key__2446(list__2454, curry__2410(E__2447, symbol__2457))},
rest__2458 = position__2455($REST),
key__2459 = position__2455($KEY),
B2460 = rest__2458,
B2462;
if ($T(B2460))
{B2462 = B2460}
else
{
var B2461 = key__2459;
if ($T(B2461))
{B2462 = B2461}
else
B2462 = size__2449(list__2454)};
var B2463 = copy_sequence__2448(list__2454, $K("end"), B2462),
B2464;
if ($T(rest__2458))
{B2464 = element__2450(list__2454, inc__2451(rest__2458))}
else
B2464 = false;
var B2465;
if ($T(key__2459))
{B2465 = copy_sequence__2448(list__2454, $K("start"), inc__2451(key__2459))}
else
B2465 = false;
return [B2463, B2464, B2465]}, false);
exports["analyze-lambda-list"] = analyze_lambda_list__2452}
{
var reduce__2467 = B938.reduce,
wrap__2468;
false;
wrap__2468 = Mmake_function__2356("wrap", function wrap__2469 (form__2470)
{
var wrappers__2471 = $SL.call(arguments, 1);
return reduce__2467(function B2472 (result__2473, wrapper__2474)
{return wrapper__2474(result__2473)}, form__2470, wrappers__2471)}, false)}
{
var emptyQ__2481 = B938["empty?"],
reduce1__2482 = B938.reduce1,
instanceQ__2483 = B938["instance?"],
LarrayG__2484 = B938["<array>"],
not__2485 = B938.not,
not__2486 = not__2485,
generate_symbol__2487 = B2347["generate-symbol"],
wrap_restSkeys__2488;
false;
wrap_restSkeys__2488 = Mmake_function__2356("wrap_restSkeys", function wrap_restSkeys__2489 (body__2490, all__2491, required__2492, rest__2493, key__2494)
{
var restQ__2495 = rest__2493,
B2496 = rest__2493,
rest__2497;
if ($T(B2496))
{rest__2497 = B2496}
else
if ($T(not__2486(emptyQ__2481(key__2494))))
{rest__2497 = generate_symbol__2487()}
else
rest__2497 = false;
return wrap__2468(body__2490, function B2498 (body__2499)
{if ($T(emptyQ__2481(key__2494)))
{return body__2499}
else
{
var key_values__2502 = map__2414(function B2500 (binding__2501)
{if ($T(instanceQ__2483(binding__2501, LarrayG__2484)))
{return binding__2501}
else
return [binding__2501, false]}, key__2494);
return [$S("bind-properties", "ralph/core"), map__2414(first__2399, key_values__2502), [$S("%keys", "ralph/core"), rest__2497, concatenate__2358([$S("%object", "ralph/core")], reduce1__2482(concatenate__2358, map__2414(function B2503 (key_value__2504)
{
var key__2505 = key_value__2504[0],
value__2506 = key_value__2504[1];
return [symbol_name__2359(key__2505), value__2506]}, key_values__2502)))], body__2499]}}, function B2507 (body__2508)
{
var B2509 = restQ__2495,
B2510;
if ($T(B2509))
{B2510 = B2509}
else
B2510 = not__2485(emptyQ__2481(key__2494));
if ($T(B2510))
{return [$S("bind", "ralph/core"), [[rest__2497, [$S("%native-call", "ralph/core"), "$SL.call", all__2491, size__2449(required__2492)]]], body__2508]}
else
return body__2508})}, false)}
{
var maybe_begin__2512 = B2347["maybe-begin"];
Tcore_macrosT__2443.begin = function B2513 (____2514)
{
var expressions__2515 = $SL.call(arguments, 1);
return maybe_begin__2512(expressions__2515)}}
{
var named_method__2517;
false;
named_method__2517 = Mmake_function__2356("named_method", function named_method__2518 (name__2519, arguments__2520, body__2521)
{
var B2522 = analyze_lambda_list__2452(arguments__2520),
required__2523 = B2522[0],
rest__2524 = B2522[1],
key__2525 = B2522[2];
return [$S("%method", "ralph/core"), name__2519, required__2523, wrap_restSkeys__2488(body__2521, $S("%all-arguments"), required__2523, rest__2524, key__2525)]}, false)}
Tcore_macrosT__2443.method = function B2527 (____2528, arguments__2529)
{
var body__2530 = $SL.call(arguments, 2);
return named_method__2517(generate_symbol__2487(), arguments__2529, maybe_begin__2512(body__2530))}
{
var LsymbolG__2533 = B938["<symbol>"],
reverse__2534 = B938.reverse;
Tcore_macrosT__2443.bind = function B2535 (____2536, bindings__2537)
{
var body__2538 = $SL.call(arguments, 2);
if ($T(emptyQ__2481(bindings__2537)))
{return maybe_begin__2512(body__2538)}
else
return reduce__2467(function B2539 (body__2540, binding__2541)
{
var B2542 = $S("%bind", "ralph/core"),
B2543;
if ($T(instanceQ__2483(binding__2541, LsymbolG__2533)))
{B2543 = [binding__2541, false]}
else
B2543 = binding__2541;
return [B2542, B2543, body__2540]}, maybe_begin__2512(body__2538), reverse__2534(bindings__2537))}}
Tcore_macrosT__2443["if"] = function B2545 (____2546, test__2547, then__2548, else__2549)
{return [$S("%if", "ralph/core"), test__2547, then__2548, else__2549]}
{
var binaryEE__2551 = B938["binary=="],
rest__2552 = B938.rest;
Tcore_macrosT__2443["set!"] = function B2553 (____2554, place__2555)
{
var values__2556 = $SL.call(arguments, 2),
B2557;
if ($T(instanceQ__2483(place__2555, LarrayG__2484)))
{B2557 = not__2485(binaryEE__2551(symbol_name__2359(first__2399(place__2555)), "%get-property"))}
else
B2557 = false;
if ($T(B2557))
{return concatenate__2358([transform_setter_identifier__2360(first__2399(place__2555))], rest__2552(place__2555), values__2556)}
else
return [$S("%set", "ralph/core"), place__2555, first__2399(values__2556)]}}
Tcore_macrosT__2443["parallel-set!"] = function B2559 (____2560, var__2561, value__2562)
{
var clauses__2563 = $SL.call(arguments, 3);
if ($T(emptyQ__2481(clauses__2563)))
{return [$S("set!", "ralph/core"), var__2561, value__2562]}
else
{
var temp__2564 = generate_symbol__2487();
return [$S("bind", "ralph/core"), [[temp__2564, value__2562]], concatenate__2358([$S("parallel-set!", "ralph/core")], clauses__2563), [$S("set!", "ralph/core"), var__2561, temp__2564]]}}
{
var not__2567 = not__2485;
Tcore_macrosT__2443.cond = function B2568 (____2569)
{
var cases__2570 = $SL.call(arguments, 1);
if ($T(not__2567(emptyQ__2481(cases__2570))))
{
var B2571 = first__2399(cases__2570),
test__2572 = B2571[0],
then__2573 = $SL.call(B2571, 1),
then__2574 = maybe_begin__2512(then__2573);
if ($T(binaryEE__2551(test__2572, $K("else"))))
{return then__2574}
else
return [$S("if", "ralph/core"), test__2572, then__2574, concatenate__2358([$S("cond", "ralph/core")], rest__2552(cases__2570))]}}}
Tcore_macrosT__2443.when = function B2576 (____2577, test__2578)
{
var body__2579 = $SL.call(arguments, 2);
return [$S("if", "ralph/core"), test__2578, maybe_begin__2512(body__2579), false]}
Tcore_macrosT__2443.unless = function B2581 (____2582, test__2583)
{
var body__2584 = $SL.call(arguments, 2);
return [$S("if", "ralph/core"), [$S("not", "ralph/core"), test__2583], maybe_begin__2512(body__2584), false]}
Tcore_macrosT__2443.and = function B2587 (____2588)
{
var values__2589 = $SL.call(arguments, 1),
B2590 = size__2449(values__2589);
if ($T(binaryEE__2551(B2590, 0)))
{return true}
else
if ($T(binaryEE__2551(B2590, 1)))
{return first__2399(values__2589)}
else
return [$S("when", "ralph/core"), first__2399(values__2589), concatenate__2358([$S("and", "ralph/core")], rest__2552(values__2589))]}
Tcore_macrosT__2443.or = function B2593 (____2594)
{
var values__2595 = $SL.call(arguments, 1),
B2596 = size__2449(values__2595);
if ($T(binaryEE__2551(B2596, 0)))
{return false}
else
if ($T(binaryEE__2551(B2596, 1)))
{return first__2399(values__2595)}
else
{
var value__2597 = generate_symbol__2487();
return [$S("bind", "ralph/core"), [[value__2597, first__2399(values__2595)]], [$S("if", "ralph/core"), value__2597, value__2597, concatenate__2358([$S("or", "ralph/core")], rest__2552(values__2595))]]}}
Tcore_macrosT__2443["if-bind"] = function B2599 (____2600, binding__2601, then__2602, else__2603)
{
var var__2604 = binding__2601[0],
value__2605 = binding__2601[1],
temp__2606 = generate_symbol__2487();
return [$S("bind", "ralph/core"), [[temp__2606, value__2605]], [$S("if", "ralph/core"), temp__2606, [$S("bind", "ralph/core"), [[var__2604, temp__2606]], then__2602], else__2603]]}
Tcore_macrosT__2443["while"] = function B2608 (____2609, test__2610)
{
var body__2611 = $SL.call(arguments, 2);
return [$S("%while", "ralph/core"), test__2610, maybe_begin__2512(body__2611)]}
Tcore_macrosT__2443.until = function B2613 (____2614, test__2615)
{
var body__2616 = $SL.call(arguments, 2);
return concatenate__2358([$S("while", "ralph/core"), [$S("not", "ralph/core"), test__2615]], body__2616)}
Tcore_macrosT__2443.dotimes = function B2619 (____2620, binding__2621)
{
var body__2622 = $SL.call(arguments, 2),
temp__2623 = generate_symbol__2487(),
var__2624 = binding__2621[0],
count__2625 = binding__2621[1],
result__2626 = binding__2621[2],
B2628 = $S("bind", "ralph/core"),
B2629 = [[temp__2623, count__2625]],
B2630 = $S("for", "ralph/core"),
B2631 = [[var__2624, 0, [$S("+", "ralph/core"), var__2624, 1]]],
B2632 = [$S(">=", "ralph/core"), var__2624, temp__2623],
B2627 = result__2626,
B2633;
if ($T(B2627))
{B2633 = B2627}
else
B2633 = false;
var B2634 = [B2632, B2633],
B2635 = [B2630, B2631, B2634],
B2636 = concatenate__2358(B2635, body__2622);
return [B2628, B2629, B2636]}
{
var not__2645 = not__2485,
anyQ__2646 = B938["any?"],
emptyQ__2647 = emptyQ__2481,
push_last__2648 = B938["push-last"],
slice__2649 = B938.slice,
third__2650 = B938.third,
rest__2651 = rest__2552,
first__2652 = first__2399;
Tcore_macrosT__2443["for"] = function B2653 (____2654, clauses__2655, end__2656)
{
var body__2657 = $SL.call(arguments, 3),
init_clauses__2658 = [],
next_clauses__2659 = [],
vars__2660 = map__2414(first__2399, clauses__2655),
B2661 = clauses__2655,
B2662,
B2663,
B2664 = [B2661];
while (true)
{
var B2665 = B2662,
B2670;
if ($T(B2665))
{B2670 = B2665}
else
B2670 = anyQ__2646(emptyQ__2647, B2664);
var B2671 = not__2645(B2670);
if ($T(B2671))
{
var clause__2666 = first__2652(B2661);
(function B2667 (clause__2668)
{
push_last__2648(init_clauses__2658, slice__2649(clause__2668, 0, 2));
push_last__2648(next_clauses__2659, first__2399(clause__2668));
return push_last__2648(next_clauses__2659, third__2650(clause__2668))})(clause__2666);
B2661 = rest__2651(B2661);
B2664 = [B2661]}
else
break};
B2663;
var B2672 = $S("bind", "ralph/core"),
B2673 = $S("while", "ralph/core"),
B2669 = emptyQ__2481(end__2656),
B2674;
if ($T(B2669))
{B2674 = B2669}
else
B2674 = [$S("not", "ralph/core"), first__2399(end__2656)];
var B2675 = concatenate__2358([concatenate__2358([$S("method", "ralph/core"), vars__2660], body__2657)], vars__2660),
B2676 = concatenate__2358([$S("parallel-set!", "ralph/core")], next_clauses__2659),
B2677 = [B2673, B2674, B2675, B2676],
B2678 = concatenate__2358(B2677),
B2679;
if ($T(not__2645(emptyQ__2481(rest__2552(end__2656)))))
{B2679 = concatenate__2358([$S("begin", "ralph/core")], rest__2552(end__2656))}
else
B2679 = false;
return [B2672, init_clauses__2658, B2678, B2679]}}
Tcore_macrosT__2443["for-each"] = function B2686 (____2687, clauses__2688, end__2689)
{
var body__2690 = $SL.call(arguments, 3),
clauses__2693 = map__2414(function B2691 (clause__2692)
{return concatenate__2358([generate_symbol__2487()], clause__2692)}, clauses__2688),
endQ__2694 = generate_symbol__2487(),
values__2695 = generate_symbol__2487(),
result__2696 = generate_symbol__2487(),
B2714 = $S("begin", "ralph/core"),
vars__2697 = map__2414(second__2364, clauses__2693),
B2715 = concatenate__2358([concatenate__2358([$S("method", "ralph/core"), vars__2697], body__2690)], vars__2697),
B2716 = [B2714, B2715],
B2717 = map__2414(function B2698 (clause__2699)
{return [$S("set!", "ralph/core"), first__2399(clause__2699), [$S("rest", "ralph/core"), first__2399(clause__2699)]]}, clauses__2693),
B2718 = [[$S("set!", "ralph/core"), values__2695, concatenate__2358([$S("%array", "ralph/core")], map__2414(first__2399, clauses__2693))]],
body__2700 = concatenate__2358(B2716, B2717, B2718),
B2719 = $S("bind", "ralph/core"),
B2720 = concatenate__2358(map__2414(function B2701 (clause__2702)
{
var temp__2703 = clause__2702[0],
var__2704 = clause__2702[1],
values__2705 = clause__2702[2];
return [temp__2703, values__2705]}, clauses__2693), [[endQ__2694, false], [result__2696, false], [values__2695, concatenate__2358([$S("%array", "ralph/core")], map__2414(first__2399, clauses__2693))]]),
B2721 = $S("until", "ralph/compiler"),
B2722 = [$S("or", "ralph/core"), endQ__2694, [$S("any?", "ralph/core"), $S("empty?", "ralph/core"), values__2695]],
B2723 = $S("bind", "ralph/core"),
B2724 = map__2414(function B2706 (clause__2707)
{
var temp__2708 = clause__2707[0],
var__2709 = clause__2707[1],
values__2710 = clause__2707[2];
return [var__2709, [$S("first", "ralph/core"), temp__2708]]}, clauses__2693),
B2711 = first__2399(end__2689),
B2733;
if ($T(B2711))
{
var end_test__2712 = B2711,
B2725 = $S("if", "ralph/core"),
B2726 = $S("begin", "ralph/core"),
B2727 = $S("set!", "ralph/core"),
results__2713 = rest__2552(end__2689),
B2728;
if ($T(emptyQ__2481(results__2713)))
{B2728 = [false]}
else
B2728 = results__2713;
var B2729 = maybe_begin__2512(B2728),
B2730 = [B2727, result__2696, B2729],
B2731 = [$S("set!", "ralph/core"), endQ__2694, true],
B2732 = [B2726, B2730, B2731];
B2733 = [B2725, end_test__2712, B2732, body__2700]}
else
B2733 = body__2700;
var B2734 = [B2723, B2724, B2733],
B2735 = [B2721, B2722, B2734];
return [B2719, B2720, B2735, result__2696]}
Tcore_macrosT__2443["bind-properties"] = function B2738 (____2739, properties__2740, object__2741)
{
var body__2742 = $SL.call(arguments, 3),
objectT__2743 = generate_symbol__2487();
return concatenate__2358([$S("bind", "ralph/core"), concatenate__2358([[objectT__2743, object__2741]], map__2414(function B2744 (property__2745)
{return [property__2745, [$S("%get-property", "ralph/core"), objectT__2743, symbol_name__2359(property__2745)]]}, properties__2740))], body__2742)}
Tcore_macrosT__2443.select = function B2748 (____2749, value__2750, test__2751)
{
var cases__2752 = $SL.call(arguments, 3),
valueT__2753 = generate_symbol__2487(),
testT__2754;
if ($T(instanceQ__2483(test__2751, LsymbolG__2533)))
{testT__2754 = test__2751}
else
testT__2754 = generate_symbol__2487();
var test_expression__2755 = function test_expression__2756 (test_value__2757)
{return [testT__2754, valueT__2753, test_value__2757]},
B2762 = $S("bind", "ralph/core"),
B2763 = [[valueT__2753, value__2750]],
B2764;
if ($T(instanceQ__2483(test__2751, LsymbolG__2533)))
{B2764 = []}
else
B2764 = [[testT__2754, test__2751]];
var B2765 = concatenate__2358(B2763, B2764),
B2766 = concatenate__2358([$S("cond", "ralph/core")], map__2414(function B2758 (case__2759)
{
var tests__2760 = case__2759[0],
then__2761 = $SL.call(case__2759, 1);
if ($T(binaryEE__2551(tests__2760, $K("else"))))
{return case__2759}
else
return concatenate__2358([concatenate__2358([$S("or", "ralph/core")], map__2414(test_expression__2755, tests__2760))], then__2761)}, cases__2752));
return [B2762, B2765, B2766]}
{
var destructure__2769;
false;
destructure__2769 = Mmake_function__2356("destructure", function destructure__2770 (bindings__2771, values__2772, body__2773)
{if ($T(instanceQ__2483(values__2772, LsymbolG__2533)))
{
var B2774 = analyze_lambda_list__2452(bindings__2771),
required__2775 = B2774[0],
rest__2776 = B2774[1],
key__2777 = B2774[2],
i__2778 = size__2449(required__2775);
return reduce__2467(function B2779 (body__2780, binding__2781)
{
i__2778 = (i__2778 - 1);
if ($T(instanceQ__2483(binding__2781, LsymbolG__2533)))
{return [$S("bind", "ralph/core"), [[binding__2781, [$S("%get-property", "ralph/core"), values__2772, i__2778]]], body__2780]}
else
return destructure__2770(binding__2781, [$S("%get-property", "ralph/core"), values__2772, i__2778], body__2780)}, wrap_restSkeys__2488(body__2773, values__2772, required__2775, rest__2776, key__2777), reverse__2534(required__2775))}
else
{
var var__2782 = generate_symbol__2487();
return [$S("bind", "ralph/core"), [[var__2782, values__2772]], destructure__2770(bindings__2771, var__2782, body__2773)]}}, false)}
Tcore_macrosT__2443["destructuring-bind"] = function B2784 (____2785, bindings__2786, values__2787)
{
var body__2788 = $SL.call(arguments, 3);
return destructure__2769(bindings__2786, values__2787, concatenate__2358([$S("begin", "ralph/core")], body__2788))}
Tcore_macrosT__2443["bind-methods"] = function B2791 (____2792, bindings__2793)
{
var body__2794 = $SL.call(arguments, 2);
return concatenate__2358([$S("bind", "ralph/core"), map__2414(first__2399, bindings__2793)], map__2414(function B2795 (binding__2796)
{
var identifier__2797 = binding__2796[0],
arguments__2798 = binding__2796[1],
body__2799 = $SL.call(binding__2796, 2);
return [$S("set!", "ralph/core"), identifier__2797, named_method__2517(identifier__2797, arguments__2798, maybe_begin__2512(body__2799))]}, bindings__2793), body__2794)}
Tcore_macrosT__2443["inc!"] = function B2802 (____2803, object__2804, value__2805)
{
var B2807 = $S("set!", "ralph/core"),
B2808 = $S("+", "ralph/core"),
B2806 = value__2805,
B2809;
if ($T(B2806))
{B2809 = B2806}
else
B2809 = 1;
var B2810 = [B2808, object__2804, B2809];
return [B2807, object__2804, B2810]}
Tcore_macrosT__2443["dec!"] = function B2813 (____2814, object__2815, value__2816)
{
var B2818 = $S("set!", "ralph/core"),
B2819 = $S("-", "ralph/core"),
B2817 = value__2816,
B2820;
if ($T(B2817))
{B2820 = B2817}
else
B2820 = 1;
var B2821 = [B2819, object__2815, B2820];
return [B2818, object__2815, B2821]}
Tcore_macrosT__2443["+"] = function B2823 (____2824)
{
var values__2825 = $SL.call(arguments, 1);
if ($T(emptyQ__2481(values__2825)))
{return 0}
else
return concatenate__2358([$S("%plus", "ralph/core")], values__2825)}
Tcore_macrosT__2443["-"] = function B2827 (____2828, minuend__2829)
{
var subtrahends__2830 = $SL.call(arguments, 2);
if ($T(emptyQ__2481(subtrahends__2830)))
{return [$S("%native-call", "ralph/core"), "-", minuend__2829]}
else
return concatenate__2358([$S("%minus", "ralph/core"), minuend__2829], subtrahends__2830)}
Tcore_macrosT__2443["*"] = function B2832 (____2833)
{
var values__2834 = $SL.call(arguments, 1);
if ($T(emptyQ__2481(values__2834)))
{return 1}
else
return concatenate__2358([$S("%times", "ralph/core")], values__2834)}
Tcore_macrosT__2443["/"] = function B2836 (____2837, numerator__2838)
{
var denominators__2839 = $SL.call(arguments, 2);
if ($T(emptyQ__2481(denominators__2839)))
{return [$S("%divide", "ralph/core"), 1, numerator__2838]}
else
return concatenate__2358([$S("%divide", "ralph/core"), numerator__2838], denominators__2839)}
Tcore_macrosT__2443["call-next-method"] = function B2841 (____2842)
{return [[$S("%get-property", "ralph/core"), $S("next-method", "ralph/compiler"), "apply"], [$S("%native", "ralph/core"), "null"], $S("%all-arguments")]}
{
var transform_quoted__2843;
false;
transform_quoted__2843 = Mmake_function__2356("transform_quoted", function transform_quoted__2844 (form__2845)
{if ($T(instanceQ__2483(form__2845, LarrayG__2484)))
{return concatenate__2358([$S("%array", "ralph/core")], map__2414(transform_quoted__2844, form__2845))}
else
if ($T(instanceQ__2483(form__2845, LsymbolG__2533)))
{return [$S("%symbol", "ralph/core"), symbol_name__2359(form__2845)]}
else
return form__2845}, false)}
Tcore_macrosT__2443.quote = function B2847 (____2848, exp__2849)
{return transform_quoted__2843(exp__2849)}
{
var not__2851 = not__2485,
boundQ__2852 = B2347["bound?"],
find_moduleSimport_name__2853,
transform_backquoted__2854;
false;
transform_backquoted__2854 = Mmake_function__2356("transform_backquoted", function transform_backquoted__2855 (form__2856, env__2857)
{if ($T(instanceQ__2483(form__2856, LarrayG__2484)))
{
var B2862;
if ($T(not__2485(emptyQ__2481(form__2856))))
{B2862 = binaryEE__2551(symbol_name__2359(first__2399(form__2856)), "%comma")}
else
B2862 = false;
if ($T(B2862))
{return second__2364(form__2856)}
else
return concatenate__2358([$S("%array", "ralph/core")], map__2414(rcurry__2415(transform_backquoted__2855, env__2857), form__2856))}
else
if ($T(instanceQ__2483(form__2856, LsymbolG__2533)))
{
var name__2858 = symbol_name__2359(form__2856),
B2859;
if ($T(not__2851(boundQ__2852(env__2857, form__2856))))
{B2859 = find_moduleSimport_name__2853(name__2858, env__2857)}
else
B2859 = false;
var module__2861;
if ($T(B2859))
{
var moduleSimport_name__2860 = B2859;
module__2861 = first__2399(moduleSimport_name__2860)}
else
module__2861 = get__2398(env__2857, "module");
return [$S("%symbol", "ralph/core"), name__2858, get__2398(module__2861, "name")]}
else
return form__2856}, false)}
Tcore_macrosT__2443["%backquote"] = function B2864 (env__2865, exp__2866)
{return transform_backquoted__2854(exp__2866, env__2865)}
Tcore_macrosT__2443["%comma"] = function B2868 (____2869, value__2870)
{return signal__2407(make__2408(LerrorG__2409, $K("message"), "comma not inside backquote"))}
{
var Tdot_name_errorT__2871;
false;
Tdot_name_errorT__2871 = make__2408(LerrorG__2409, $K("message"), "unsupported name for call in dot")}
{
var LstringG__2875 = B938["<string>"];
Tcore_macrosT__2443["."] = function B2876 (____2877, value__2878)
{
var calls__2879 = $SL.call(arguments, 2);
return reduce__2467(function B2880 (value__2881, call__2882)
{
var property__2883 = call__2882[0],
arguments__2884 = $SL.call(call__2882, 1),
B2886 = $S("%get-property", "ralph/core"),
B2885 = property__2883,
B2887;
if ($T(instanceQ__2483(B2885, LstringG__2875)))
{B2887 = property__2883}
else
if ($T(instanceQ__2483(B2885, LsymbolG__2533)))
{B2887 = symbol_name__2359(property__2883)}
else
B2887 = signal__2407(Tdot_name_errorT__2871);
var B2888 = [B2886, value__2881, B2887],
B2889 = [B2888];
return concatenate__2358(B2889, arguments__2884)}, value__2878, calls__2879)}}
{
var simplify_arguments__2892;
false;
simplify_arguments__2892 = Mmake_function__2356("simplify_arguments", function simplify_arguments__2893 (arguments__2894)
{
var B2895 = analyze_lambda_list__2452(arguments__2894),
required__2896 = B2895[0],
rest__2897 = B2895[1],
key__2898 = B2895[2],
B2901 = map__2414(function B2899 (argument__2900)
{if ($T(instanceQ__2483(argument__2900, LarrayG__2484)))
{return first__2399(argument__2900)}
else
return argument__2900}, required__2896),
B2902;
if ($T(rest__2897))
{B2902 = concatenate__2358([$REST], rest__2897)}
else
B2902 = [];
var B2903;
if ($T(key__2898))
{B2903 = concatenate__2358([$KEY], key__2898)}
else
B2903 = [];
return concatenate__2358(B2901, B2902, B2903)}, false)}
{
var not__2909 = not__2485,
get_setter__2910 = B938["get-setter"],
G__2911 = B938[">"],
Mkeys__2912 = B938["%keys"],
make_function_definer__2913;
false;
make_function_definer__2913 = Mmake_function__2356("make_function_definer", function make_function_definer__2914 (macro_name__2915, definer__2916)
{
var B2917 = $SL.call(arguments, 2),
B2918 = Mkeys__2912(B2917, {"name?":false,
"type/existing?":false,
"record?":false}),
nameQ__2919 = B2918["name?"],
typeSexistingQ__2920 = B2918["type/existing?"],
recordQ__2921 = B2918["record?"];
return function B2922 (env__2923, identifier__2924, arguments__2925)
{
var body__2926 = $SL.call(arguments, 3),
B2927;
if ($T(setter_identifierQ__2363(identifier__2924)))
{B2927 = [true, transform_setter_identifier__2360(second__2364(identifier__2924))]}
else
B2927 = [false, identifier__2924];
var setterQ__2928 = B2927[0],
identifier__2929 = B2927[1],
B2930 = instanceQ__2483(identifier__2929, LsymbolG__2533),
B2934;
if ($T(B2930))
{B2934 = B2930}
else
B2934 = setterQ__2928;
var B2935 = not__2909(B2934);
if ($T(B2935))
{signal__2407(make__2408(LerrorG__2409, $K("message"), concatenate__2358(macro_name__2915, ": ", "name not <var> or (setter <var>)")))};
var B2936;
if ($T(typeSexistingQ__2920))
{B2936 = emptyQ__2481(arguments__2925)}
else
B2936 = false;
if ($T(B2936))
{signal__2407(make__2408(LerrorG__2409, $K("message"), concatenate__2358(macro_name__2915, ": ", "method has no arguments")))};
var simplified_arguments__2931 = simplify_arguments__2892(arguments__2925),
B2937;
if ($T(nameQ__2919))
{B2937 = identifier__2929}
else
B2937 = generate_symbol__2487();
var B2938 = maybe_begin__2512(body__2926),
B2939 = named_method__2517(B2937, simplified_arguments__2931, B2938),
method_definition__2932 = macroexpand_all__2413(B2939, env__2923);
if ($T(recordQ__2921))
{get_setter__2910(env__2923, "module", "functions", symbol_name__2359(identifier__2929), method_definition__2932)};
var B2940 = $S("define", "ralph/core"),
B2941 = [definer__2916, [$S("%native-name", "ralph/compiler"), symbol_name__2359(identifier__2929)], method_definition__2932, setterQ__2928],
B2944;
if ($T(typeSexistingQ__2920))
{
var head__2933 = first__2399(arguments__2925),
B2942;
if ($T(instanceQ__2483(head__2933, LarrayG__2484)))
{B2942 = G__2911(size__2449(head__2933), 1)}
else
B2942 = false;
var B2943;
if ($T(B2942))
{B2943 = second__2364(head__2933)}
else
B2943 = $S("<object>", "ralph/core");
B2944 = [B2943, identifier__2929]}
else
B2944 = [];
var B2945 = concatenate__2358(B2941, B2944);
return [B2940, identifier__2929, B2945]}}, false)}
{
var not__2952 = not__2485,
emptyQ__2953 = emptyQ__2481,
apply__2954 = B938.apply,
rest__2955 = rest__2552,
first__2956 = first__2399,
B2957 = [["define-function", $S("%make-function", "ralph/core"), $K("record?"), true, $K("name?"), true], ["define-method", $S("%make-method", "ralph/core"), $K("type/existing?"), true]],
B2958,
B2959,
B2960 = [B2957];
while (true)
{
var B2961 = B2958,
B2965;
if ($T(B2961))
{B2965 = B2961}
else
B2965 = anyQ__2646(emptyQ__2953, B2960);
var B2966 = not__2952(B2965);
if ($T(B2966))
{
var arguments__2962 = first__2956(B2957);
(function B2963 (arguments__2964)
{return Tcore_macrosT__2443[first__2399(arguments__2964)] = apply__2954(make_function_definer__2913, arguments__2964)})(arguments__2962);
B2957 = rest__2955(B2957);
B2960 = [B2957]}
else
break};
B2959}
Tcore_macrosT__2443.define = function B2968 (env__2969, identifier__2970, value__2971)
{
var identifierT__2972 = localize__2416(identifier__2970, env__2969);
if ($T(get__2398(identifierT__2972, "module")))
{signal__2407(make__2408(LerrorG__2409, $K("message"), "Can't define using identifier with external qualifier"))};
bindN__2411(env__2969, identifier__2970);
return [$S("begin", "ralph/core"), [$S("%define", "ralph/core"), identifierT__2972], [$S("%set", "ralph/core"), identifierT__2972, value__2971]]}
Tcore_macrosT__2443["define-generic"] = function B2974 (____2975, identifier__2976, arguments__2977)
{return [$S("define", "ralph/core"), identifier__2976, [$S("%make-generic", "ralph/core"), [$S("%native-name", "ralph/compiler"), symbol_name__2359(identifier__2976)]]]}
{
var not__2985 = not__2485,
emptyQ__2986 = emptyQ__2481,
rest__2987 = rest__2552,
first__2988 = first__2399;
Tcore_macrosT__2443["define-class"] = function B2989 (____2990, identifier__2991, superclass__2992)
{
var properties__2993 = $SL.call(arguments, 3),
object__2994 = [$S("%object", "ralph/core")],
B2995 = properties__2993,
B2996,
B2997,
B2998 = [B2995];
while (true)
{
var B2999 = B2996,
B3003;
if ($T(B2999))
{B3003 = B2999}
else
B3003 = anyQ__2646(emptyQ__2986, B2998);
var B3004 = not__2985(B3003);
if ($T(B3004))
{
var property__3000 = first__2988(B2995);
(function B3001 (property__3002)
{if ($T(instanceQ__2483(property__3002, LarrayG__2484)))
{
push_last__2648(object__2994, symbol_name__2359(first__2399(property__3002)));
return push_last__2648(object__2994, [$S("method", "ralph/core"), [], second__2364(property__3002)])}
else
{
push_last__2648(object__2994, symbol_name__2359(property__3002));
return push_last__2648(object__2994, false)}})(property__3000);
B2995 = rest__2987(B2995);
B2998 = [B2995]}
else
break};
B2997;
var B3005 = $S("define", "ralph/core"),
B3006 = $S("%make-class", "ralph/core"),
B3007;
if ($T(not__2985(emptyQ__2481(superclass__2992))))
{B3007 = first__2399(superclass__2992)}
else
B3007 = false;
var B3008 = [B3006, B3007, object__2994];
return [B3005, identifier__2991, B3008]}}
{
var get_import_module_nameSoptions__3009;
false;
get_import_module_nameSoptions__3009 = Mmake_function__2356("get_import_module_nameSoptions", function get_import_module_nameSoptions__3010 (import__3011)
{
var B3012;
if ($T(instanceQ__2483(import__3011, LarrayG__2484)))
{B3012 = first__2399(import__3011)}
else
B3012 = import__3011;
var B3013 = symbol_name__2359(B3012),
B3014;
if ($T(instanceQ__2483(import__3011, LarrayG__2484)))
{B3014 = rest__2552(import__3011)}
else
B3014 = [];
return [B3013, B3014]}, false)}
{
var compile_time_import_module__3022,
import_module__3023,
make_import_definition__3024;
Tcore_macrosT__2443["define-module"] = function B3025 (env__3026, ____3027)
{
var B3028 = $SL.call(arguments, 2),
B3029 = Mkeys__2912(B3028, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}),
import__3030 = B3029["import"],
export__3031 = B3029["export"],
compile_time_import__3032 = B3029["compile-time-import"],
inline__3033 = B3029.inline;
get_setter__2910(env__3026, "module", "exports", map__2414(identifier_name__2365, export__3031));
do__2406(function B3034 (import__3035)
{
var B3036 = get_import_module_nameSoptions__3009(import__3035),
module_name__3037 = B3036[0],
options__3038 = B3036[1];
return apply__2954(compile_time_import_module__3022, env__3026, module_name__3037, options__3038)}, compile_time_import__3032);
get_setter__2910(env__3026, "module", "inline", map__2414(identifier_name__2365, inline__3033));
return maybe_begin__2512(map__2414(function B3039 (import__3040)
{
var B3041 = get_import_module_nameSoptions__3009(import__3040),
module_name__3042 = B3041[0],
options__3043 = B3041[1];
apply__2954(import_module__3023, get__2398(env__3026, "module"), module_name__3042, options__3043);
return make_import_definition__3024(module_name__3042, env__3026)}, import__3030))}}
{
false;
make_import_definition__3024 = Mmake_function__2356("make_import_definition", function make_import_definition__3044 (module_name__3045, env__3046)
{
var identifier__3047 = generate_symbol__2487();
get_setter__2910(env__3046, "import-identifiers", module_name__3045, identifier__3047);
return [$S("%begin", "ralph/core"), [$S("%define", "ralph/core"), identifier__3047], [$S("%set", "ralph/core"), identifier__3047, [[$S("%native", "ralph/core"), "require"], module_name__3045]]]}, false)}
Tcore_macrosT__2443["define-macro"] = function B3049 (env__3050, identifier__3051, arguments__3052)
{
var body__3053 = $SL.call(arguments, 3);
return [$S("begin", "ralph/core"), concatenate__2358([$S("define-function", "ralph/core"), identifier__3051, concatenate__2358([generate_symbol__2487()], arguments__3052)], body__3053), [$S("set!", "ralph/core"), [$S("%get-property", "ralph/core"), identifier__3051, "%macro?"], true]]}
Tcore_macrosT__2443["define-symbol-macro"] = function B3055 (env__3056, identifier__3057, arguments__3058)
{
var body__3059 = $SL.call(arguments, 3);
return [$S("begin", "ralph/core"), concatenate__2358([$S("define-function", "ralph/core"), identifier__3057, []], body__3059), [$S("set!", "ralph/core"), [$S("%get-property", "ralph/core"), identifier__3057, "%symbol-macro?"], true]]}
Tcore_macrosT__2443["handler-case"] = function B3065 (____3066, body__3067)
{
var cases__3068 = $SL.call(arguments, 2),
condition_var__3069 = generate_symbol__2487();
return [$S("%try", "ralph/core"), body__3067, condition_var__3069, concatenate__2358([$S("cond", "ralph/core")], map__2414(function B3070 (case__3071)
{
var B3072 = case__3071[0],
type__3073 = B3072[0],
B3074 = $SL.call(B3072, 1),
B3075 = Mkeys__2912(B3074, {condition:false}),
condition__3076 = B3075.condition,
body__3077 = $SL.call(case__3071, 1),
B3078 = [[$S("instance?", "ralph/core"), condition_var__3069, type__3073]],
B3079;
if ($T(condition__3076))
{B3079 = [concatenate__2358([$S("bind", "ralph/core"), [[condition__3076, condition_var__3069]]], body__3077)]}
else
B3079 = body__3077;
return concatenate__2358(B3078, B3079)}, cases__3068))]}
Tcore_macrosT__2443["get-setter"] = function B3081 (____3082, object__3083, property__3084)
{
var propertiesSvalue__3085 = $SL.call(arguments, 3);
if ($T(binaryEE__2551(size__2449(propertiesSvalue__3085), 1)))
{return [$S("%set", "ralph/core"), [$S("%get-property", "ralph/core"), object__3083, property__3084], first__2399(propertiesSvalue__3085)]}
else
return concatenate__2358([$S("%call", "ralph/core"), $S("get-setter", "ralph/core"), object__3083, property__3084], propertiesSvalue__3085)}
Tcore_macrosT__2443.symbol = function B3087 (____3088, name__3089, module__3090)
{if ($T(instanceQ__2483(name__3089, LstringG__2875)))
{if ($T(instanceQ__2483(module__3090, LstringG__2875)))
{return [$S("%symbol", "ralph/core"), name__3089, module__3090]}
else
return [$S("%symbol", "ralph/core"), name__3089]}
else
return [$S("%call", "ralph/core"), $S("symbol", "ralph/core"), name__3089, module__3090]}
{
var opbjects__3092;
Tcore_macrosT__2443["=="] = function B3093 (____3094, object1__3095, object2__3096)
{
var objects__3097 = $SL.call(arguments, 3);
if ($T(emptyQ__2481(opbjects__3092)))
{return [$S("binary==", "ralph/core"), object1__3095, object2__3096]}
else
return concatenate__2358([$S("%call", "ralph/core"), $S("==", "ralph/core"), object1__3095, object2__3096], objects__3097)}}
{
var Tcore_symbol_macrosT__3098;
false;
Tcore_symbol_macrosT__3098 = make_object__2369();
exports["*core-symbol-macros*"] = Tcore_symbol_macrosT__3098}
Tcore_symbol_macrosT__3098["next-method"] = function B3100 (____3101)
{return [$S("%next-method", "ralph/core"), $S("%this-method")]}
{
var not__3103 = not__2485,
find_macro_definition__3104;
false;
find_macro_definition__3104 = Mmake_function__2356("find_macro_definition", function find_macro_definition__3105 (form__3106, env__3107)
{
var B3108 = form__3106;
if ($T(instanceQ__2483(B3108, LarrayG__2484)))
{
if ($T(emptyQ__2481(form__3106)))
{signal__2407("Empty form")};
var identifier__3109 = first__2399(form__3106),
name__3110 = symbol_name__2359(identifier__3109);
if ($T(not__3103(boundQ__2852(env__3107, identifier__3109))))
{return env__3107.macros[name__3110]}}
else
if ($T(instanceQ__2483(B3108, LsymbolG__2533)))
{
var name__3111 = symbol_name__2359(form__3106);
if ($T(not__3103(boundQ__2852(env__3107, form__3106))))
{return env__3107["symbol-macros"][name__3111]}}}, false)}
{
var macroexpand_1__3113;
false;
macroexpand_1__3113 = Mmake_function__2356("macroexpand_1", function macroexpand_1__3114 (form__3115, env__3116)
{
var B3117 = find_macro_definition__3104(form__3115, env__3116);
if ($T(B3117))
{
var macro__3118 = B3117,
B3119;
if ($T(instanceQ__2483(form__3115, LarrayG__2484)))
{B3119 = rest__2552(form__3115)}
else
B3119 = form__3115;
return apply__2954(macro__3118, env__3116, B3119)}
else
return form__3115}, false);
exports["macroexpand-1"] = macroexpand_1__3113}
{
var not__3120 = not__2485,
macroexpand__3121;
false;
macroexpand__3121 = Mmake_function__2356("macroexpand", function macroexpand__3122 (form__3123, env__3124)
{
var doneQ__3125;
while ($T(not__3120(doneQ__3125)))
{
var expanded__3126 = macroexpand_1__3113(form__3123, env__3124);
doneQ__3125 = binaryEE__2551(expanded__3126, form__3123);
form__3123 = expanded__3126};
return form__3123}, false);
exports.macroexpand = macroexpand__3121}
{
var maybe_call__3129;
false;
macroexpand_all__2413 = Mmake_function__2356("macroexpand_all", function macroexpand_all__3130 (form__3131, env__3132)
{
var B3133 = form__3131;
if ($T(instanceQ__2483(B3133, LarrayG__2484)))
{if ($T(find_macro_definition__3104(form__3131, env__3132)))
{return maybe_call__3129(macroexpand_all__3130(macroexpand__3121(form__3131, env__3132), env__3132))}
else
{
var B3134 = find_special_form__2400(form__3131, env__3132);
if ($T(B3134))
{
var expander__3135 = B3134;
return apply__2954(expander__3135, env__3132, rest__2552(form__3131))}
else
return map__2414(rcurry__2415(macroexpand_all__3130, env__3132), form__3131)}}
else
if ($T(instanceQ__2483(B3133, LsymbolG__2533)))
{if ($T(find_macro_definition__3104(form__3131, env__3132)))
{return macroexpand_all__3130(macroexpand__3121(form__3131, env__3132), env__3132)}
else
return form__3131}
else
return form__3131}, false);
exports["macroexpand-all"] = macroexpand_all__2413}
{
false;
maybe_call__3129 = Mmake_function__2356("maybe_call", function maybe_call__3136 (exp__3137)
{
var B3138;
if ($T(expressionQ__2397(exp__3137, LarrayG__2484)))
{B3138 = binaryEE__2551(symbol_name__2359(first__2399(exp__3137)), "%call")}
else
B3138 = false;
if ($T(B3138))
{return rest__2552(exp__3137)}
else
return exp__3137}, false)}
{
var anyQ__3142 = anyQ__2646;
false;
find_moduleSimport_name__2853 = Mmake_function__2356("find_moduleSimport_name", function find_moduleSimport_name__3143 (definition_name__3144, env__3145)
{return anyQ__3142(function B3146 (import__3147)
{
var module__3148 = import__3147[0],
names__3149 = import__3147[1];
return anyQ__3142(function B3150 (name__3151)
{
var B3152;
if ($T(instanceQ__2483(name__3151, LarrayG__2484)))
{B3152 = name__3151}
else
B3152 = [name__3151, name__3151];
var import_name__3153 = B3152[0],
new_name__3154 = B3152[1];
if ($T(binaryEE__2551(definition_name__3144, new_name__3154)))
{return [module__3148, import_name__3153]}}, names__3149)}, get__2398(env__3145, "module", "imports"))}, false)}
{
var find_import_identifier__3155;
false;
find_import_identifier__3155 = Mmake_function__2356("find_import_identifier", function find_import_identifier__3156 (module__3157, env__3158)
{return get__2398(env__3158, "import-identifiers", get__2398(module__3157, "name"))}, false)}
{
var not__3170 = not__2485,
emptyQ__3171 = emptyQ__2481,
find_module__3172,
module_nameSname__3173 = B2347["module-name/name"],
rest__3174 = rest__2552,
first__3175 = first__2399,
set_subtractN__3176 = B938["set-subtract!"],
find_free_variables__3177 = B2350["find-free-variables"],
TdefinedT__3178 = B2347["*defined*"],
define_free_variables__3179;
false;
define_free_variables__3179 = Mmake_function__2356("define_free_variables", function define_free_variables__3180 (exp__3181, env__3182)
{
var variables__3183 = set_subtractN__3176(find_free_variables__3177(exp__3181, env__3182), TdefinedT__3178),
result__3184 = [],
B3185 = variables__3183,
B3186,
B3187,
B3188 = [B3185];
while (true)
{
var B3189 = B3186,
B3214;
if ($T(B3189))
{B3214 = B3189}
else
B3214 = anyQ__2646(emptyQ__3171, B3188);
var B3215 = not__3170(B3214);
if ($T(B3215))
{
var variable__3190 = first__3175(B3185);
(function B3191 (variable__3192)
{
var B3193 = module_nameSname__3173(variable__3192, env__3182),
module_name__3194 = B3193[0],
name__3195 = B3193[1],
import_name__3196,
B3197 = module_name__3194,
B3207;
if ($T(B3197))
{B3207 = B3197}
else
B3207 = get__2398(env__3182, "defined?", name__3195);
var B3208 = not__3170(B3207);
if ($T(B3208))
{
var B3198 = find_moduleSimport_name__2853(name__3195, env__3182);
if ($T(B3198))
{
var moduleSimport_name__3199 = B3198,
module__3200 = moduleSimport_name__3199[0],
import_nameT__3201 = moduleSimport_name__3199[1];
module_name__3194 = get__2398(module__3200, "name");
import_name__3196 = import_nameT__3201}
else
{
get_setter__2910(env__3182, "defined?", name__3195, true);
push_last__2648(result__3184, [$S("%define", "ralph/core"), variable__3192])}};
if ($T(module_name__3194))
{
var B3202 = get__2398(env__3182, "external-identifier", module_name__3194, name__3195);
if ($T(B3202))
{
var reference__3203 = B3202;
true;
if ($T(not__3170(binaryEE__2551(get__2398(variable__3192, "module"), get__2398(reference__3203, "module")))))
{
push_last__2648(result__3184, [$S("%define", "ralph/core"), variable__3192]);
return push_last__2648(result__3184, [$S("%set", "ralph/core"), variable__3192, reference__3203])}}
else
{
get_setter__2910(env__3182, "external-identifier", module_name__3194, name__3195, variable__3192);
var module__3204 = find_module__3172(module_name__3194),
import_identifier__3205 = find_import_identifier__3155(module__3204, env__3182);
if ($T(not__3170(import_identifier__3205)))
{
push_last__2648(result__3184, make_import_definition__3024(module_name__3194, env__3182));
import_identifier__3205 = find_import_identifier__3155(module__3204, env__3182)};
push_last__2648(result__3184, [$S("%define", "ralph/core"), variable__3192]);
var B3209 = $S("%set", "ralph/core"),
B3210 = $S("%get-property", "ralph/core"),
B3206 = import_name__3196,
B3211;
if ($T(B3206))
{B3211 = B3206}
else
B3211 = name__3195;
var B3212 = [B3210, import_identifier__3205, B3211],
B3213 = [B3209, variable__3192, B3212];
return push_last__2648(result__3184, B3213)}}})(variable__3190);
B3185 = rest__3174(B3185);
B3188 = [B3185]}
else
break};
B3187;
return concatenate__2358([$S("%begin", "ralph/core")], result__3184, [exp__3181])}, false);
exports["define-free-variables"] = define_free_variables__3179}
{
var define_free_variables2__3216;
false;
define_free_variables2__3216 = Mmake_function__2356("define_free_variables2", function define_free_variables2__3217 (exp__3218, env__3219)
{return exp__3218}, false)}
{
var inline__3220;
false;
inline__3220 = Mmake_function__2356("inline", function inline__3221 (form__3222, env__3223)
{return form__3222}, false)}
{
var lift_symbol__3224,
identity__3225 = B938.identity,
lift_symbols__3226;
false;
lift_symbols__3226 = Mmake_function__2356("lift_symbols", function lift_symbols__3227 (exp__3228, env__3229)
{return lift_symbol__3224(exp__3228, env__3229, identity__3225)}, false);
exports["lift-symbols"] = lift_symbols__3226}
{
var lift_symbolT__3252,
lift_value__3253,
lift_symbolTT__3254,
LkeywordG__3255 = B938["<keyword>"],
Lhash_symbolG__3256 = B938["<hash-symbol>"];
false;
lift_symbol__3224 = Mmake_function__2356("lift_symbol", function lift_symbol__3257 (exp__3258, env__3259, k__3260)
{
var B3317;
if ($T(instanceQ__2483(exp__3258, LarrayG__2484)))
{B3317 = not__2485(emptyQ__2481(exp__3258))}
else
B3317 = false;
if ($T(B3317))
{
var B3261 = symbol_name__2359(first__2399(exp__3258));
if ($T(binaryEE__2551(B3261, "%bind")))
{
var ____3262 = exp__3258[0],
B3263 = exp__3258[1],
var__3264 = B3263[0],
value__3265 = B3263[1],
body__3266 = exp__3258[2];
return lift_symbol__3257(value__3265, env__3259, function B3267 (lvalue__3268, env__3269)
{return lift_symbol__3257(body__3266, env__3269, function B3270 (lbody__3271, env__3272)
{return k__3260([$S("%bind", "ralph/core"), [var__3264, lvalue__3268], lbody__3271], env__3272)})})}
else
if ($T(binaryEE__2551(B3261, "%set")))
{
var ____3273 = exp__3258[0],
e1__3274 = exp__3258[1],
e2__3275 = exp__3258[2];
return lift_symbol__3257(e2__3275, env__3259, function B3276 (le2__3277, env__3278)
{return k__3260([$S("%set", "ralph/core"), e1__3274, le2__3277], env__3278)})}
else
if ($T(binaryEE__2551(B3261, "%method")))
{
var ____3279 = exp__3258[0],
name__3280 = exp__3258[1],
arguments__3281 = exp__3258[2],
body__3282 = exp__3258[3];
return lift_symbol__3257(body__3282, env__3259, function B3283 (lbody__3284, env__3285)
{return k__3260([$S("%method", "ralph/core"), name__3280, arguments__3281, lbody__3284], env__3285)})}
else
{
var B3286 = binaryEE__2551(B3261, "%begin"),
B3318;
if ($T(B3286))
{B3318 = B3286}
else
{
var B3287 = binaryEE__2551(B3261, "%if");
if ($T(B3287))
{B3318 = B3287}
else
{
var B3288 = binaryEE__2551(B3261, "%while");
if ($T(B3288))
{B3318 = B3288}
else
{
var B3289 = binaryEE__2551(B3261, "%array");
if ($T(B3289))
{B3318 = B3289}
else
{
var B3290 = binaryEE__2551(B3261, "%object");
if ($T(B3290))
{B3318 = B3290}
else
{
var B3291 = binaryEE__2551(B3261, "%get-property");
if ($T(B3291))
{B3318 = B3291}
else
{
var B3292 = binaryEE__2551(B3261, "%infix");
if ($T(B3292))
{B3318 = B3292}
else
{
var B3293 = binaryEE__2551(B3261, "%native");
if ($T(B3293))
{B3318 = B3293}
else
{
var B3294 = binaryEE__2551(B3261, "%native-name");
if ($T(B3294))
{B3318 = B3294}
else
{
var B3295 = binaryEE__2551(B3261, "%native-call");
if ($T(B3295))
{B3318 = B3295}
else
{
var B3296 = binaryEE__2551(B3261, "%plus");
if ($T(B3296))
{B3318 = B3296}
else
{
var B3297 = binaryEE__2551(B3261, "%minus");
if ($T(B3297))
{B3318 = B3297}
else
{
var B3298 = binaryEE__2551(B3261, "%times");
if ($T(B3298))
{B3318 = B3298}
else
B3318 = binaryEE__2551(B3261, "%divide")}}}}}}}}}}}};
if ($T(B3318))
{
var m__3299 = exp__3258[0],
eT__3300 = $SL.call(exp__3258, 1);
return lift_symbolT__3252(eT__3300, env__3259, function B3301 (leT__3302, env__3303)
{return k__3260(concatenate__2358([m__3299], leT__3302), env__3303)})}
else
if ($T(binaryEE__2551(B3261, "%try")))
{
var ____3304 = exp__3258[0],
e1__3305 = exp__3258[1],
v__3306 = exp__3258[2],
e2__3307 = exp__3258[3];
return lift_symbolT__3252([e1__3305, e2__3307], env__3259, function B3308 (leT__3309, env__3310)
{
var le1__3311 = leT__3309[0],
le2__3312 = leT__3309[1];
return k__3260([$S("%try", "ralph/core"), le1__3311, v__3306, le2__3312], env__3310)})}
else
if ($T(binaryEE__2551(B3261, "%symbol")))
{
var ____3313 = exp__3258[0],
name__3314 = exp__3258[1],
module__3315 = exp__3258[2];
return lift_value__3253(name__3314, exp__3258, "symbol", env__3259, k__3260, $K("module"), module__3315)}
else
return lift_symbolTT__3254(exp__3258, env__3259, k__3260)}}
else
{
var B3316 = exp__3258;
if ($T(instanceQ__2483(B3316, LkeywordG__3255)))
{return lift_value__3253(symbol_name__2359(exp__3258), exp__3258, "keyword", env__3259, k__3260)}
else
if ($T(instanceQ__2483(B3316, Lhash_symbolG__3256)))
{return lift_value__3253(symbol_name__2359(exp__3258), exp__3258, "hash", env__3259, k__3260)}
else
return k__3260(exp__3258, env__3259)}}, false)}
{
false;
lift_value__3253 = Mmake_function__2356("lift_value", function lift_value__3322 (name__3323, value__3324, type__3325, env__3326, k__3327)
{
var B3328 = $SL.call(arguments, 5),
B3329 = Mkeys__2912(B3328, {module:""}),
module__3330 = B3329.module,
B3331 = get__2398(env__3326, "lifted", type__3325, module__3330, name__3323);
if ($T(B3331))
{
var t__3332 = B3331;
return k__3327(t__3332, env__3326)}
else
{
var t__3333 = get_setter__2910(env__3326, "lifted", type__3325, module__3330, name__3323, generate_symbol__2487());
return [$S("%bind", "ralph/core"), [t__3333, value__3324], k__3327(t__3333, env__3326)]}}, false)}
{
false;
lift_symbolT__3252 = Mmake_function__2356("lift_symbolT", function lift_symbolT__3334 (expT__3335, env__3336, k__3337)
{if ($T(emptyQ__2481(expT__3335)))
{return k__3337([], env__3336)}
else
return lift_symbolTT__3254(expT__3335, env__3336, k__3337)}, false)}
{
false;
lift_symbolTT__3254 = Mmake_function__2356("lift_symbolTT", function lift_symbolTT__3340 (exp__3341, env__3342, k__3343)
{return lift_symbol__3224(first__2399(exp__3341), env__3342, function B3344 (t__3345, env__3346)
{return lift_symbolT__3252(rest__2552(exp__3341), env__3346, function B3347 (tT__3348, env__3349)
{return k__3343(concatenate__2358([t__3345], tT__3348), env__3349)})})}, false)}
{
var read__3350 = B2345.read,
Lstring_streamG__3351 = B2343["<string-stream>"],
read_program__3352;
false;
read_program__3352 = Mmake_function__2356("read_program", function read_program__3353 (source__3354)
{return read__3350(make__2408(Lstring_streamG__3351, $K("string"), concatenate__2358("(", source__3354, "\n)")))}, false)}
{
var format_out__3356 = B2344["format-out"],
lift_defines__3357 = B2349["lift-defines"],
alpha_convert__3358 = B2348["alpha-convert"],
normalize_term__3359 = B2351["normalize-term"],
transform_statementsN__3360 = B2352["transform-statements!"],
flatten_statementsN__3361 = B2354["flatten-statements!"],
compile_js__3362 = B2355["compile-js"],
compile_expression__3363;
false;
compile_expression__3363 = Mmake_function__2356("compile_expression", function compile_expression__3364 (exp__3365, env__3366)
{return reduce__2467(function B3367 (result__3368, nameSfn__3369)
{
var name__3370 = nameSfn__3369[0],
fn__3371 = nameSfn__3369[1];
format_out__3356("### %s:\n", name__3370);
var result__3372 = fn__3371(result__3368);
format_out__3356("%=\n", result__3372);
return result__3372}, exp__3365, [["source", identity__3225], ["macroexpanded", rcurry__2415(macroexpand_all__2413, env__3366)], ["lifted defines", rcurry__2415(lift_defines__3357, env__3366)], ["defined free variables", rcurry__2415(define_free_variables__3179, env__3366)], ["alpha-converted", rcurry__2415(alpha_convert__3358, env__3366)], ["ANF", normalize_term__3359], ["statements", rcurry__2415(transform_statementsN__3360, env__3366)], ["flattened", flatten_statementsN__3361], ["compiled", rcurry__2415(compile_js__3362, env__3366)]])}, false);
exports["compile-expression"] = compile_expression__3363}
{
var resolve_path__3373 = B2346["resolve-path"],
executable_path__3374;
false;
executable_path__3374 = Mmake_function__2356("executable_path", function executable_path__3375 (module_name__3376)
{return resolve_path__3373("build", concatenate__2358(module_name__3376, ".js"))}, false)}
{
var module_path__3377;
false;
module_path__3377 = Mmake_function__2356("module_path", function module_path__3378 (base_path__3379, module_name__3380)
{return resolve_path__3373(base_path__3379, concatenate__2358(module_name__3380, ".rm"))}, false)}
{
var source_path__3381;
false;
source_path__3381 = Mmake_function__2356("source_path", function source_path__3382 (module_name__3383)
{return resolve_path__3373("src", concatenate__2358(module_name__3383, ".ralph"))}, false)}
{
var L__3385 = B938["<"],
file_properties__3386 = B2346["file-properties"],
file_existsQ__3387 = B2346["file-exists?"],
recompileQ__3388;
false;
recompileQ__3388 = Mmake_function__2356("recompileQ", function recompileQ__3389 (module_name__3390)
{if ($T(not__2485(get__2398(TmodulesT__2370, module_name__3390, "native?"))))
{
var path__3391 = executable_path__3374(module_name__3390),
B3392 = not__2485(file_existsQ__3387(path__3391));
if ($T(B3392))
{return B3392}
else
{
var path2__3393 = source_path__3381(module_name__3390);
return L__3385(get__2398(file_properties__3386(path__3391), "modification-date"), get__2398(file_properties__3386(path2__3393), "modification-date"))}}}, false)}
{
var chain_object__3398 = B938["chain-object"],
compile_module__3399,
process_names__3400,
object_properties__3401 = B938["object-properties"];
false;
compile_time_import_module__3022 = Mmake_function__2356("compile_time_import_module", function compile_time_import_module__3402 (env__3403, module_name__3404)
{
var B3405 = $SL.call(arguments, 2),
B3406 = Mkeys__2912(B3405, {options:false}),
options__3407 = B3406.options,
B3414;
if ($T(binaryEE__2551(module_name__3404, "ralph/core")))
{B3414 = [Tcore_macrosT__2443, Tcore_symbol_macrosT__3098]}
else
{
compile_module__3399(module_name__3404);
var definitions__3408 = require(module_name__3404),
macros__3409 = make_plain_object__2388(),
symbol_macros__3410 = make_plain_object__2388();
do__2406(function B3411 (name__3412)
{
var definition__3413 = get__2398(definitions__3408, name__3412);
if ($T(get__2398(definition__3413, "%macro?")))
{return macros__3409[name__3412] = definition__3413}
else
if ($T(get__2398(definition__3413, "%symbol-macro?")))
{return symbol_macros__3410[name__3412] = definition__3413}}, apply__2954(process_names__3400, object_properties__3401(definitions__3408), options__3407));
B3414 = [macros__3409, symbol_macros__3410]};
var macros__3415 = B3414[0],
symbol_macros__3416 = B3414[1];
chain_object__3398(get__2398(env__3403, "macros"), macros__3415);
return chain_object__3398(get__2398(env__3403, "symbol-macros"), symbol_macros__3416)}, false)}
{
var removeN__3422 = B938["remove!"],
set_unionN__3423 = B938["set-union!"],
as_object__3424 = B938["as-object"],
as_set__3425 = B938["as-set"];
false;
process_names__3400 = Mmake_function__2356("process_names", function process_names__3426 (all__3427)
{
var B3428 = $SL.call(arguments, 1),
B3429 = Mkeys__2912(B3428, {only:false,
exclude:false,
prefix:false,
rename:false}),
only__3430 = B3429.only,
exclude__3431 = B3429.exclude,
prefix__3432 = B3429.prefix,
rename__3433 = B3429.rename,
resolve__3434 = function resolve__3435 (exp__3436)
{if ($T(instanceQ__2483(exp__3436, LstringG__2875)))
{return exp__3436}
else
return identifier_name__2365(exp__3436)},
B3444;
if ($T(instanceQ__2483(only__3430, LarrayG__2484)))
{B3444 = map__2414(resolve__3434, only__3430)}
else
B3444 = all__3427;
var names__3437 = as_set__3425(B3444),
B3438 = rename__3433,
B3445;
if ($T(B3438))
{B3445 = B3438}
else
B3445 = [];
var B3446 = map__2414(resolve__3434, B3445),
renamings__3439 = as_object__3424(B3446);
do__2406(curry__2410(removeN__3422, names__3437), map__2414(resolve__3434, exclude__3431));
set_unionN__3423(names__3437, object_properties__3401(renamings__3439));
return map__2414(function B3440 (name__3441)
{
var B3442 = get__2398(renamings__3439, name__3441);
if ($T(B3442))
{
var renaming__3443 = B3442;
return [name__3441, renaming__3443]}
else
if ($T(instanceQ__2483(prefix__3432, LstringG__2875)))
{return [name__3441, concatenate__2358(prefix__3432, name__3441)]}
else
return name__3441}, names__3437)}, false)}
{
var push__3448 = B938.push;
false;
import_module__3023 = Mmake_function__2356("import_module", function import_module__3449 (module__3450, module_name__3451)
{
var options__3452 = $SL.call(arguments, 2),
B3453 = find_module__3172(module_name__3451);
if ($T(B3453))
{
var other_module__3454 = B3453;
push__3448(get__2398(module__3450, "imports"), [other_module__3454, apply__2954(process_names__3400, get__2398(other_module__3454, "exports"), options__3452)]);
push__3448(get__2398(module__3450, "dependencies"), module_name__3451);
return other_module__3454}
else
return signal__2407(concatenate__2358("unable to import module '", module_name__3451, "'"))}, false)}
{
var read_module__3458;
false;
find_module__3172 = Mmake_function__2356("find_module", function find_module__3459 (module_name__3460)
{
var B3461 = compile_module__3399(module_name__3460);
if ($T(B3461))
{return B3461}
else
{
var B3462 = get__2398(TmodulesT__2370, module_name__3460);
if ($T(B3462))
{return B3462}
else
{
var B3463 = read_module__3458("build", module_name__3460);
if ($T(B3463))
{return B3463}
else
return read_module__3458("src", module_name__3460)}}}, false)}
{
var read_file__3464 = B2346["read-file"];
false;
read_module__3458 = Mmake_function__2356("read_module", function read_module__3465 (base_path__3466, module_name__3467)
{
var path__3468 = module_path__3377(base_path__3466, module_name__3467);
if ($T(file_existsQ__3387(path__3468)))
{return apply__2954(curry__2410(make__2408, LmoduleG__2377, $K("name")), read__3350(make__2408(Lstring_streamG__3351, $K("string"), read_file__3464(path__3468))))}}, false)}
{
var not__3471 = not__2485,
hasQ__3472 = B938["has?"],
write_file__3473 = B2346["write-file"],
description__3474 = B938.description;
false;
compile_module__3399 = Mmake_function__2356("compile_module", function compile_module__3475 (module_name__3476)
{
if ($T(not__3471(hasQ__3472(TmodulesT__2370, module_name__3476))))
{
var B3477 = read_module__3458("src", module_name__3476);
if ($T(B3477))
{
var module__3478 = B3477;
TmodulesT__2370[module_name__3476] = module__3478}};
if ($T(recompileQ__3388(module_name__3476)))
{
if ($T(not__3471(file_existsQ__3387(source_path__3381(module_name__3476)))))
{signal__2407(concatenate__2358("unable to compile module '", module_name__3476, "'"))};
var module__3479 = make__2408(LmoduleG__2377, $K("name"), module_name__3476),
env__3480 = make__2408(LenvironmentG__2389, $K("module"), module__3479),
source__3481 = read_file__3464(source_path__3381(module_name__3476)),
program__3482 = read_program__3352(source__3481),
result__3483 = "";
TmodulesT__2370[module_name__3476] = module__3479;
compile_time_import_module__3022(env__3480, "ralph/core");
if ($T(not__3471(binaryEE__2551(module_name__3476, "ralph/core"))))
{
import_module__3023(module__3479, "ralph/core");
push__3448(program__3482, make_import_definition__3024("ralph/core", env__3480))};
do__2406(function B3484 (expression__3485)
{
var code__3486 = compile_expression__3363(expression__3485, env__3480);
return result__3483 = concatenate__2358(result__3483, code__3486, "\n")}, program__3482);
write_file__3473(executable_path__3374(module_name__3476), result__3483);
write_file__3473(module_path__3377("build", module_name__3476), description__3474([module_name__3476, $K("exports"), get__2398(module__3479, "exports"), $K("inline"), get__2398(module__3479, "inline"), $K("dependencies"), get__2398(module__3479, "dependencies")]));
return module__3479}}, false);
exports["compile-module"] = compile_module__3399}
{
var memberQ__3491 = B938["member?"],
analyze_dependencies__3492;
false;
analyze_dependencies__3492 = Mmake_function__2356("analyze_dependencies", function analyze_dependencies__3493 (module_name__3494)
{
var B3495 = find_module__3172(module_name__3494);
if ($T(B3495))
{
var module__3496 = B3495;
TmodulesT__2370[module_name__3494] = module__3496;
var B3497 = module__3496,
dependencies__3498 = B3497.dependencies,
result__3499 = copy_sequence__2448(dependencies__3498);
do__2406(function B3500 (dependency__3501)
{return do__2406(function B3502 (sub_dependency__3503)
{
if ($T(memberQ__3491(sub_dependency__3503, result__3499)))
{removeN__3422(result__3499, sub_dependency__3503)};
return push__3448(result__3499, sub_dependency__3503)}, analyze_dependencies__3493(dependency__3501))}, dependencies__3498);
return result__3499}
else
return signal__2407(concatenate__2358("unable to find-module '", module_name__3494, "'"))}, false);
exports["analyze-dependencies"] = analyze_dependencies__3492}
