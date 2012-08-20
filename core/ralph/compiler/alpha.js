var B2519 = require("ralph/core")
var B2521 = require("ralph/compiler/utilities")
{var trueQ = B2519["true?"], B2522 = B2519["%make-function"], B2523 = B2519.not, B2524 = B2519.get, B2525 = B2519["get-setter"], B2526 = B2519["make-object"], B2527 = B2522("ensure_naming_structure", function B2538 (env__2528, module_name__2529, name__2530)
{var value__2533 = B2524(env__2528, "identifiers", module_name__2529), B2536 = !(trueQ(value__2533));
if ($T(B2536))
B2525(env__2528, "identifiers", module_name__2529, B2526());
var module_renamings__2531 = B2524(env__2528, "identifiers", module_name__2529), value__2535 = B2524(module_renamings__2531, name__2530), B2537 = !(trueQ(value__2535));
if ($T(B2537))
module_renamings__2531[name__2530] = [];
return env__2528}, false);
exports["ensure-naming-structure"] = B2527}
{var trueQ = B2519["true?"], B2540 = B2519.map, B2541 = B2519.push, B2542 = B2521["generate-symbol"], B2543 = B2521["get-module-name/name"], B2544 = B2522("rename_identifiers", function B2560 (identifiers__2545, env__2546)
{return B2540(function B2561 (identifier__2547)
{var B2548 = B2543(identifier__2547), module_name__2549 = B2548[0], name__2550 = B2548[1], value__2553 = B2524(identifier__2547, "generated?"), B2558 = !(trueQ(value__2553)), B2559;
if ($T(B2558))
B2559 = name__2550
else B2559 = false;
var new_identifier__2551 = B2542(B2559);
B2527(env__2546, module_name__2549, name__2550);
var array__2556 = B2524(env__2546, "identifiers", module_name__2549, name__2550), value__2557 = new_identifier__2551;
array__2556.unshift(value__2557);
array__2556;
return new_identifier__2551}, identifiers__2545)}, false);
exports["rename-identifiers"] = B2544}
{var trueQ = B2519["true?"], B2568 = B2519["any?"], B2569 = B2519["empty?"], B2570 = B2519.pop, B2571 = B2519.rest, B2572 = B2519.first, B2573 = B2522("restore_identifiers", function B2596 (identifiers__2574, env__2575)
{var B2576 = identifiers__2574, B2577, B2578, B2579 = [B2576];
while (true)
{var B2580 = B2577, value__2587;
if ($T(B2580))
value__2587 = B2580
else value__2587 = B2568(B2569, B2579);
var B2595 = !(trueQ(value__2587));
if ($T(B2595))
{var sequence__2589 = B2576, identifier__2581 = sequence__2589[0];
(function B2597 (identifier__2582)
{var B2583 = B2543(identifier__2582), module_name__2584 = B2583[0], name__2585 = B2583[1], array__2591 = B2524(env__2575, "identifiers", module_name__2584, name__2585);
return array__2591.shift()})(identifier__2581);
var sequence__2593 = B2576, B2594 = sequence__2593.slice(1);
B2576 = B2594;
B2579 = [B2576]}
else break};
return B2578}, false);
exports["restore-identifiers"] = B2573}
var B2598 = B2526()
{var B2601 = B2522("find_identifier", function B2611 (identifier__2602, env__2603)
{var B2604 = B2543(identifier__2602), module_name__2605 = B2604[0], name__2606 = B2604[1], B2607 = B2524(env__2603, "identifiers", module_name__2605, name__2606);
if ($T(B2607))
{var renamings__2608 = B2607, sequence__2610 = renamings__2608;
return sequence__2610[0]}
else return B2598}, false);
exports["find-identifier"] = B2601}
{var B2790 = $S("%bind"), B2791 = $S("%try"), B2792 = $S("%define"), B2631 = B2519["instance?"], B2632 = B2519["<array>"], B2633 = B2519["binary=="], B2634 = B2519["push-last"], B2635 = B2519["symbol-name"], B2636 = B2519.concatenate, B2637 = B2519.rcurry, B2638 = B2519["<symbol>"], B2639 = B2522("alpha_convert", function B2793 (form__2640, env__2641)
{var B2642 = form__2640;
if ($T(B2631(B2642, B2632)))
{var sequence__2688 = form__2640, B2777 = sequence__2688[0], B2643 = B2635(B2777), object1__2691 = B2643, object2__2692 = "%method", B2778 = (object1__2691 === object2__2692);
if ($T(B2778))
{var ____2644 = form__2640[0], arguments__2645 = form__2640[1], body__2646 = form__2640[2], new_arguments__2647 = B2544(arguments__2645, env__2641), new_body__2648 = B2639(body__2646, env__2641), result__2649 = [____2644, new_arguments__2647, new_body__2648];
B2573(arguments__2645, env__2641);
return result__2649}
else {var object1__2695 = B2643, object2__2696 = "%bind", B2779 = (object1__2695 === object2__2696);
if ($T(B2779))
{var ____2650 = form__2640[0], B2651 = form__2640[1], var__2652 = B2651[0], value__2653 = B2651[1], body__2654 = form__2640[2], new_value__2655 = B2639(value__2653, env__2641), B2656 = B2544([var__2652], env__2641), new_var__2657 = B2656[0], result__2658 = [B2790, [new_var__2657, new_value__2655], B2639(body__2654, env__2641)];
B2573([var__2652], env__2641);
return result__2658}
else {var object1__2699 = B2643, object2__2700 = "%try", B2780 = (object1__2699 === object2__2700);
if ($T(B2780))
{var ____2659 = form__2640[0], body__2660 = form__2640[1], var__2661 = form__2640[2], catch__2662 = form__2640[3], new_body__2663 = B2639(body__2660, env__2641), B2664 = B2544([var__2661], env__2641), new_var__2665 = B2664[0], result__2666 = [B2791, new_body__2663, new_var__2665, B2639(catch__2662, env__2641)];
B2573([var__2661], env__2641);
return result__2666}
else {var object1__2703 = B2643, object2__2704 = "%define", B2781 = (object1__2703 === object2__2704);
if ($T(B2781))
{var ____2667 = form__2640[0], identifier__2668 = form__2640[1], B2669 = B2543(identifier__2668), module_name__2670 = B2669[0], name__2671 = B2669[1], new_identifier__2672 = B2542();
B2527(env__2641, module_name__2670, name__2671);
var array__2707 = B2524(env__2641, "identifiers", module_name__2670, name__2671), value__2708 = new_identifier__2672;
array__2707.push(value__2708);
array__2707;
B2525(env__2641, "definition-names", B2635(new_identifier__2672), name__2671);
B2525(env__2641, "new-identifiers", name__2671, new_identifier__2672);
return [B2792, new_identifier__2672]}
else {var object1__2711 = B2643, object2__2712 = "%if", B2673 = (object1__2711 === object2__2712), B2782;
if ($T(B2673))
B2782 = B2673
else {var object1__2715 = B2643, object2__2716 = "%while", B2674 = (object1__2715 === object2__2716);
if ($T(B2674))
B2782 = B2674
else {var object1__2719 = B2643, object2__2720 = "%set", B2675 = (object1__2719 === object2__2720);
if ($T(B2675))
B2782 = B2675
else {var object1__2723 = B2643, object2__2724 = "%begin", B2676 = (object1__2723 === object2__2724);
if ($T(B2676))
B2782 = B2676
else {var object1__2727 = B2643, object2__2728 = "%get-property", B2677 = (object1__2727 === object2__2728);
if ($T(B2677))
B2782 = B2677
else {var object1__2731 = B2643, object2__2732 = "%object", B2678 = (object1__2731 === object2__2732);
if ($T(B2678))
B2782 = B2678
else {var object1__2735 = B2643, object2__2736 = "%array", B2679 = (object1__2735 === object2__2736);
if ($T(B2679))
B2782 = B2679
else {var object1__2739 = B2643, object2__2740 = "%native", B2680 = (object1__2739 === object2__2740);
if ($T(B2680))
B2782 = B2680
else {var object1__2743 = B2643, object2__2744 = "%native-call", B2681 = (object1__2743 === object2__2744);
if ($T(B2681))
B2782 = B2681
else {var object1__2747 = B2643, object2__2748 = "%infix", B2682 = (object1__2747 === object2__2748);
if ($T(B2682))
B2782 = B2682
else {var object1__2751 = B2643, object2__2752 = "%minus", B2683 = (object1__2751 === object2__2752);
if ($T(B2683))
B2782 = B2683
else {var object1__2755 = B2643, object2__2756 = "%plus", B2684 = (object1__2755 === object2__2756);
if ($T(B2684))
B2782 = B2684
else {var object1__2759 = B2643, object2__2760 = "%times", B2685 = (object1__2759 === object2__2760);
if ($T(B2685))
B2782 = B2685
else {var object1__2763 = B2643, object2__2764 = "%divide";
B2782 = (object1__2763 === object2__2764)}}}}}}}}}}}}};
if ($T(B2782))
{var sequence__2766 = form__2640, B2783 = sequence__2766[0], B2784 = [B2783], B2785 = B2637(B2639, env__2641), sequence__2768 = form__2640, B2786 = sequence__2768.slice(1), B2787 = B2540(B2785, B2786);
return B2636(B2784, B2787)}
else {var object1__2771 = B2643, object2__2772 = "%native-name", B2788 = (object1__2771 === object2__2772);
if ($T(B2788))
return form__2640
else return B2540(B2637(B2639, env__2641), form__2640)}}}}}}
else if ($T(B2631(B2642, B2638)))
{var value__2686 = B2601(form__2640, env__2641), object1__2775 = value__2686, object2__2776 = B2598, B2789 = (object1__2775 === object2__2776);
if ($T(B2789))
return form__2640
else return value__2686}
else return form__2640}, false);
exports["alpha-convert"] = B2639}
