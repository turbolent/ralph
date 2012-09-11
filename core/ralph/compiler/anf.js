{
var B2477;
false;
B2477 = require("ralph/core")}
{
var B2479;
false;
B2479 = require("ralph/compiler/utilities")}
{
var Mmake_function__2480 = B2477["%make-function"],
anyQ__2481 = B2477["any?"],
curry__2482 = B2477.curry,
instanceQ__2483 = B2477["instance?"],
LnumberG__2484 = B2477["<number>"],
LbooleanG__2485 = B2477["<boolean>"],
LstringG__2486 = B2477["<string>"],
LsymbolG__2487 = B2477["<symbol>"],
LkeywordG__2488 = B2477["<keyword>"],
atomicQ__2489;
false;
atomicQ__2489 = Mmake_function__2480("atomicQ", function atomicQ__2490 (expression__2491)
{return anyQ__2481(curry__2482(instanceQ__2483, expression__2491), [LnumberG__2484, LbooleanG__2485, LstringG__2486, LsymbolG__2487, LkeywordG__2488])}, false)}
{
var ralphScoreCCtrueQ = B2477["true?"],
ralphScoreCCdec = B2477.dec,
ralphScoreCCsize = B2477.size,
LarrayG__2497 = B2477["<array>"],
not__2498 = B2477.not,
emptyQ__2499 = B2477["empty?"],
binaryEE__2500 = B2477["binary=="],
last__2501 = B2477.last,
symbol_name__2502 = B2477["symbol-name"],
first__2503 = B2477.first,
contains_statementsQ__2504;
false;
contains_statementsQ__2504 = Mmake_function__2480("contains_statementsQ", function contains_statementsQ__2505 (exp__2506)
{B2535:while(true){
var B2529;
if ($T(instanceQ__2483(exp__2506, LarrayG__2497)))
{
var value__2512 = emptyQ__2499(exp__2506);
B2529 = !(ralphScoreCCtrueQ(value__2512))}
else
B2529 = false;
if ($T(B2529))
{
var sequence__2513 = exp__2506,
B2530 = sequence__2513[0],
B2492__2507 = symbol_name__2502(B2530),
object2__2515 = "%begin",
object1__2514 = B2492__2507,
B2493__2508 = (object1__2514 === object2__2515),
B2531;
if ($T(B2493__2508))
{B2531 = B2493__2508}
else
{
var object2__2517 = "%if",
object1__2516 = B2492__2507,
B2494__2509 = (object1__2516 === object2__2517);
if ($T(B2494__2509))
{B2531 = B2494__2509}
else
{
var object2__2519 = "%while",
object1__2518 = B2492__2507,
B2495__2510 = (object1__2518 === object2__2519);
if ($T(B2495__2510))
{B2531 = B2495__2510}
else
{
var object2__2521 = "%bind",
object1__2520 = B2492__2507,
B2496__2511 = (object1__2520 === object2__2521);
if ($T(B2496__2511))
{B2531 = B2496__2511}
else
{
var object2__2523 = "%try",
object1__2522 = B2492__2507;
B2531 = (object1__2522 === object2__2523)}}}};
if ($T(B2531))
{return true}
else
{
var object2__2525 = "%set",
object1__2524 = B2492__2507,
B2532 = (object1__2524 === object2__2525);
if ($T(B2532))
{
var array__2526 = exp__2506,
B2533 = array__2526[ralphScoreCCdec(ralphScoreCCsize(array__2526), 1)];
arguments = [B2533];
exp__2506 = arguments[0];
continue B2535}
else
{
var object2__2528 = "%method",
object1__2527 = B2492__2507,
B2534 = (object1__2527 === object2__2528);
if ($T(B2534))
{return false}
else
return anyQ__2481(contains_statementsQ__2505, exp__2506)}}};
break}}, false)}
{
var normalize__2536,
identity__2537 = B2477.identity,
normalize_term__2538;
false;
normalize_term__2538 = Mmake_function__2480("normalize_term", function normalize_term__2539 (expression__2540, env__2541)
{return normalize__2536(expression__2540, env__2541, identity__2537)}, false);
exports["normalize-term"] = normalize_term__2538}
{
var B2642 = $S("%method", "ralph/core"),
B2643 = $S("%begin", "ralph/core"),
B2644 = $S("%bind", "ralph/core"),
B2645 = $S("%if", "ralph/core"),
B2646 = $S("%while", "ralph/core"),
B2647 = $S("%native", "ralph/core"),
B2648 = $S("%try", "ralph/core"),
B2649 = $S("%set", "ralph/core"),
B2650 = $S("%array", "ralph/core"),
B2651 = $S("%object", "ralph/core"),
B2652 = $S("%get-property", "ralph/core"),
B2653 = $S("%infix", "ralph/core"),
B2654 = $S("%native-call", "ralph/core"),
B2655 = $S("%native-name", "ralph/compiler/anf"),
B2656 = $S("%plus", "ralph/core"),
B2657 = $S("%minus", "ralph/core"),
B2658 = $S("%times", "ralph/core"),
B2659 = $S("%divide", "ralph/core"),
concatenate__2549 = B2477.concatenate,
normalize_value__2550,
normalize_all__2551,
expressionQ__2552 = B2479["expression?"],
memberQ__2553 = B2477["member?"],
map__2554 = B2477.map,
rcurry__2555 = B2477.rcurry,
rest__2556 = B2477.rest;
false;
normalize__2536 = Mmake_function__2480("normalize", function normalize__2557 (exp__2558, env__2559, k__2560)
{B2660:while(true){
var B2621;
if ($T(instanceQ__2483(exp__2558, LarrayG__2497)))
{
var value__2597 = emptyQ__2499(exp__2558);
B2621 = !(ralphScoreCCtrueQ(value__2597))}
else
B2621 = false;
if ($T(B2621))
{
var sequence__2598 = exp__2558,
B2622 = sequence__2598[0],
B2542__2561 = symbol_name__2502(B2622),
object2__2600 = "%method",
object1__2599 = B2542__2561,
B2623 = (object1__2599 === object2__2600);
if ($T(B2623))
{
var ____2562 = exp__2558[0],
name__2563 = exp__2558[1],
arguments__2564 = exp__2558[2],
body__2565 = exp__2558[3];
return k__2560([B2642, name__2563, arguments__2564, normalize_term__2538(body__2565, env__2559)])}
else
{
var object2__2602 = "%begin",
object1__2601 = B2542__2561,
B2624 = (object1__2601 === object2__2602);
if ($T(B2624))
{
var ____2566 = exp__2558[0],
exp1__2567 = exp__2558[1],
eT__2568 = $SL.call(exp__2558, 2),
sequence__2603 = eT__2568,
B2625 = binaryEE__2500(ralphScoreCCsize(sequence__2603), 0);
if ($T(B2625))
{
arguments = [exp1__2567, env__2559, k__2560];
exp__2558 = arguments[0];
env__2559 = arguments[1];
k__2560 = arguments[2];
continue B2660}
else
{
arguments = [exp1__2567, env__2559, (function B2661 (B2643, normalize__2557, concatenate__2549, eT__2568, env__2559, k__2560)
{return function B2543__2569 (aexp1__2570)
{return [B2643, aexp1__2570, normalize__2557(concatenate__2549([B2643], eT__2568), env__2559, k__2560)]}})(B2643, normalize__2557, concatenate__2549, eT__2568, env__2559, k__2560)];
exp__2558 = arguments[0];
env__2559 = arguments[1];
k__2560 = arguments[2];
continue B2660}}
else
{
var object2__2605 = "%bind",
object1__2604 = B2542__2561,
B2626 = (object1__2604 === object2__2605);
if ($T(B2626))
{
var ____2571 = exp__2558[0],
B2544__2572 = exp__2558[1],
var__2573 = B2544__2572[0],
value__2574 = B2544__2572[1],
body__2575 = exp__2558[2];
arguments = [value__2574, env__2559, (function B2662 (B2644, var__2573, normalize__2557, body__2575, env__2559, k__2560)
{return function B2545__2576 (avalue__2577)
{return [B2644, [var__2573, avalue__2577], normalize__2557(body__2575, env__2559, k__2560)]}})(B2644, var__2573, normalize__2557, body__2575, env__2559, k__2560)];
exp__2558 = arguments[0];
env__2559 = arguments[1];
k__2560 = arguments[2];
continue B2660}
else
{
var object2__2607 = "%if",
object1__2606 = B2542__2561,
B2627 = (object1__2606 === object2__2607);
if ($T(B2627))
{
var ____2578 = exp__2558[0],
test__2579 = exp__2558[1],
then__2580 = exp__2558[2],
else__2581 = exp__2558[3];
return normalize_value__2550(test__2579, env__2559, function B2546__2582 (atest__2583)
{return k__2560([B2645, atest__2583, normalize_term__2538(then__2580, env__2559), normalize_term__2538(else__2581, env__2559)])})}
else
{
var object2__2609 = "%while",
object1__2608 = B2542__2561,
B2628 = (object1__2608 === object2__2609);
if ($T(B2628))
{
var ____2584 = exp__2558[0],
test__2585 = exp__2558[1],
body__2586 = exp__2558[2],
B2629;
if ($T(contains_statementsQ__2504(test__2585)))
{B2629 = [B2646, true, [B2643, normalize_term__2538([B2645, test__2585, normalize_term__2538(body__2586), [B2647, "break"], false], env__2559)]]}
else
B2629 = [B2646, normalize_term__2538(test__2585, env__2559), normalize_term__2538(body__2586, env__2559)];
return k__2560(B2629)}
else
{
var object2__2611 = "%try",
object1__2610 = B2542__2561,
B2630 = (object1__2610 === object2__2611);
if ($T(B2630))
{
var ____2587 = exp__2558[0],
body__2588 = exp__2558[1],
var__2589 = exp__2558[2],
catch__2590 = exp__2558[3];
return k__2560([B2648, normalize_term__2538(body__2588, env__2559), var__2589, normalize_term__2538(catch__2590, env__2559)])}
else
{
var object2__2613 = "%set",
object1__2612 = B2542__2561,
B2631 = (object1__2612 === object2__2613);
if ($T(B2631))
{
var ____2591 = exp__2558[0],
var__2592 = exp__2558[1],
value__2593 = exp__2558[2];
return normalize_value__2550(value__2593, env__2559, function B2547__2594 (avalue__2595)
{return k__2560([B2649, var__2592, avalue__2595])})}
else
{
var object2__2615 = "%define",
object1__2614 = B2542__2561,
B2548__2596 = (object1__2614 === object2__2615),
B2632;
if ($T(B2548__2596))
{B2632 = B2548__2596}
else
{
var object2__2617 = "%symbol",
object1__2616 = B2542__2561;
B2632 = (object1__2616 === object2__2617)};
if ($T(B2632))
{return k__2560(exp__2558)}
else
if ($T(contains_statementsQ__2504(exp__2558)))
{return normalize_all__2551(exp__2558, env__2559, k__2560)}
else
{
var B2635;
if ($T(expressionQ__2552(exp__2558)))
{
var sequence__2618 = exp__2558,
B2633 = sequence__2618[0],
B2634 = [B2650, B2651, B2652, B2653, B2647, B2654, B2655, B2656, B2657, B2658, B2659];
B2635 = memberQ__2553(B2633, B2634)}
else
B2635 = false;
if ($T(B2635))
{
var sequence__2619 = exp__2558,
B2636 = sequence__2619[0],
B2637 = [B2636],
B2638 = rcurry__2555(normalize_term__2538, env__2559),
sequence__2620 = exp__2558,
B2639 = sequence__2620.slice(1),
B2640 = map__2554(B2638, B2639),
B2641 = concatenate__2549(B2637, B2640);
return k__2560(B2641)}
else
return k__2560(map__2554(rcurry__2555(normalize_term__2538, env__2559), exp__2558))}}}}}}}}}
else
return k__2560(exp__2558);
break}}, false)}
{
var normalizeT__2663;
false;
normalize_value__2550 = Mmake_function__2480("normalize_value", function normalize_value__2664 (exp__2665, env__2666, k__2667)
{if ($T(contains_statementsQ__2504(exp__2665)))
{return normalizeT__2663(exp__2665, env__2666, k__2667)}
else
{
var B2668;
if ($T(instanceQ__2483(exp__2665, LarrayG__2497)))
{B2668 = map__2554(rcurry__2555(normalize_term__2538, env__2666), exp__2665)}
else
B2668 = exp__2665;
return k__2667(B2668)}}, false)}
{
var generate_symbol__2670 = B2479["generate-symbol"];
false;
normalizeT__2663 = Mmake_function__2480("normalizeT", function normalizeT__2671 (exp__2672, env__2673, k__2674)
{return normalize__2536(exp__2672, env__2673, function B2669__2675 (aexp__2676)
{if ($T(atomicQ__2489(aexp__2676)))
{return k__2674(aexp__2676)}
else
{
var t__2677 = generate_symbol__2670(env__2673);
return [B2644, [t__2677, aexp__2676], k__2674(t__2677)]}})}, false)}
{
var normalizeTT__2678;
false;
normalizeTT__2678 = Mmake_function__2480("normalizeTT", function normalizeTT__2679 (expT__2680, env__2681, k__2682)
{
var sequence__2683 = expT__2680,
B2684 = binaryEE__2500(ralphScoreCCsize(sequence__2683), 0);
if ($T(B2684))
{return k__2682([])}
else
return normalize_all__2551(expT__2680, env__2681, k__2682)}, false)}
{
false;
normalize_all__2551 = Mmake_function__2480("normalize_all", function normalize_all__2687 (exp__2688, env__2689, k__2690)
{
var sequence__2695 = exp__2688,
B2697 = sequence__2695[0],
B2700 = function B2685__2691 (t__2692)
{
var sequence__2696 = exp__2688,
B2698 = sequence__2696.slice(1),
B2699 = function B2686__2693 (tT__2694)
{return k__2690(concatenate__2549([t__2692], tT__2694))};
return normalizeTT__2678(B2698, env__2689, B2699)};
return normalizeT__2663(B2697, env__2689, B2700)}, false)}
