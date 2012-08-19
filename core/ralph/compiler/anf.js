var B2565 = require("ralph/core")
var B2567 = require("ralph/compiler/utilities")
var B2568 = B2565["%make-function"], B2569 = B2565["any?"], B2570 = B2565.curry, B2571 = B2565["instance?"], B2572 = B2565["<number>"], B2573 = B2565["<boolean>"], B2574 = B2565["<string>"], B2575 = B2565["<symbol>"], B2576 = B2565["<keyword>"], B2577 = B2568("atomicQ", function B2579 (expression__2578)
{return B2569(B2570(B2571, expression__2578), [B2572, B2573, B2574, B2575, B2576])}, false)
var trueQ = B2565["true?"], B2585 = B2565["<array>"], B2586 = B2565.not, B2587 = B2565["empty?"], B2588 = B2565["=="], B2589 = B2565.last, B2590 = B2565["symbol-name"], B2591 = B2565.first, B2592 = B2568("contains_statementsQ", function B2632 (exp__2593)
{var B2627;
if ($T(B2571(exp__2593, B2585)))
{var sequence__2610 = exp__2593, B2611 = sequence__2610, B2612 = ((B2611 || false).length || 0), B2613 = 0, value__2614 = (B2612 === B2613);
B2627 = !(trueQ(value__2614))}
else B2627 = false;
if ($T(B2627))
{var sequence__2616 = exp__2593, B2628 = sequence__2616[0], B2594 = B2590(B2628), B2595 = B2588(B2594, "%begin"), B2629;
if ($T(B2595))
B2629 = B2595
else {var B2596 = B2588(B2594, "%if");
if ($T(B2596))
B2629 = B2596
else {var B2597 = B2588(B2594, "%while");
if ($T(B2597))
B2629 = B2597
else {var B2598 = B2588(B2594, "%bind");
if ($T(B2598))
B2629 = B2598
else B2629 = B2588(B2594, "%try")}}};
if ($T(B2629))
return true
else if ($T(B2588(B2594, "%set")))
{var array__2624 = exp__2593, B2625 = array__2624, B2626 = ((B2625 || false).length || 0), B2630 = (B2626 - 1), B2631 = array__2624[B2630];
return B2592(B2631)}
else if ($T(B2588(B2594, "%method")))
return false
else return B2569(B2592, exp__2593)}}, false)
{var B2633, B2634 = B2565.identity, B2635 = B2568("normalize_term", function B2637 (expression__2636)
{return B2633(expression__2636, B2634)}, false);
exports["normalize-term"] = B2635}
{var B2712 = $S("%method"), B2713 = $S("%begin"), B2714 = $S("%bind"), B2715 = $S("%if"), B2716 = $S("%while"), B2717 = $S("%native"), B2718 = $S("%try"), B2719 = $S("%set"), trueQ = B2565["true?"], B2640 = B2565.concatenate, B2641, B2642, B2643 = B2565.map;
B2633 = B2568("normalize", function B2720 (exp__2644, k__2645)
{var B2708;
if ($T(B2571(exp__2644, B2585)))
{var sequence__2687 = exp__2644, B2688 = sequence__2687, B2689 = ((B2688 || false).length || 0), B2690 = 0, value__2691 = (B2689 === B2690);
B2708 = !(trueQ(value__2691))}
else B2708 = false;
if ($T(B2708))
{var sequence__2693 = exp__2644, B2709 = sequence__2693[0], B2646 = B2590(B2709);
if ($T(B2588(B2646, "%method")))
{var ____2647 = exp__2644[0], arguments__2648 = exp__2644[1], body__2649 = exp__2644[2];
return k__2645([B2712, arguments__2648, B2635(body__2649)])}
else if ($T(B2588(B2646, "%begin")))
{var ____2650 = exp__2644[0], exp1__2651 = exp__2644[1], eT__2652 = $SL.call(exp__2644, 2), sequence__2704 = eT__2652, B2705 = sequence__2704, B2706 = ((B2705 || false).length || 0), B2707 = 0, B2710 = (B2706 === B2707);
if ($T(B2710))
return B2633(exp1__2651, k__2645)
else return B2633(exp1__2651, function B2721 (aexp1__2653)
{return [B2713, aexp1__2653, B2633(B2640([B2713], eT__2652), k__2645)]})}
else if ($T(B2588(B2646, "%bind")))
{var ____2654 = exp__2644[0], B2655 = exp__2644[1], var__2656 = B2655[0], value__2657 = B2655[1], body__2658 = exp__2644[2];
return B2633(value__2657, function B2722 (avalue__2659)
{return [B2714, [var__2656, avalue__2659], B2633(body__2658, k__2645)]})}
else if ($T(B2588(B2646, "%if")))
{var ____2660 = exp__2644[0], test__2661 = exp__2644[1], then__2662 = exp__2644[2], else__2663 = exp__2644[3];
return B2641(test__2661, function B2723 (atest__2664)
{return k__2645([B2715, atest__2664, B2635(then__2662), B2635(else__2663)])})}
else if ($T(B2588(B2646, "%while")))
{var ____2665 = exp__2644[0], test__2666 = exp__2644[1], body__2667 = exp__2644[2], B2711;
if ($T(B2592(test__2666)))
B2711 = [B2716, true, [B2713, B2635([B2715, test__2666, B2635(body__2667), [B2717, "break"], false])]]
else B2711 = [B2716, B2635(test__2666), B2635(body__2667)];
return k__2645(B2711)}
else if ($T(B2588(B2646, "%try")))
{var ____2668 = exp__2644[0], body__2669 = exp__2644[1], var__2670 = exp__2644[2], catch__2671 = exp__2644[3];
return k__2645([B2718, B2635(body__2669), var__2670, B2635(catch__2671)])}
else if ($T(B2588(B2646, "%set")))
{var ____2672 = exp__2644[0], var__2673 = exp__2644[1], value__2674 = exp__2644[2];
return B2641(value__2674, function B2724 (avalue__2675)
{return k__2645([B2719, var__2673, avalue__2675])})}
else if ($T(B2592(exp__2644)))
return B2642(exp__2644, k__2645)
else return k__2645(B2643(B2635, exp__2644))}
else return k__2645(exp__2644)}, false)}
{var B2725;
B2641 = B2568("normalize_value", function B2729 (exp__2726, k__2727)
{if ($T(B2592(exp__2726)))
return B2725(exp__2726, k__2727)
else {var B2728;
if ($T(B2571(exp__2726, B2585)))
B2728 = B2643(B2635, exp__2726)
else B2728 = exp__2726;
return k__2727(B2728)}}, false)}
{var B2730 = B2567["generate-symbol"];
B2725 = B2568("normalizeT", function B2735 (exp__2731, k__2732)
{return B2633(exp__2731, function B2736 (aexp__2733)
{if ($T(B2577(aexp__2733)))
return k__2732(aexp__2733)
else {var t__2734 = B2730();
return [B2714, [t__2734, aexp__2733], k__2732(t__2734)]}})}, false)}
var B2737 = B2568("normalizeTT", function B2755 (expT__2738, k__2739)
{var sequence__2750 = expT__2738, B2751 = sequence__2750, B2752 = ((B2751 || false).length || 0), B2753 = 0, B2754 = (B2752 === B2753);
if ($T(B2754))
return k__2739([])
else return B2642(expT__2738, k__2739)}, false)
{var B2756 = B2565.rest;
B2642 = B2568("normalize_all", function B2769 (exp__2757, k__2758)
{var sequence__2762 = exp__2757, B2765 = sequence__2762[0], B2768 = function B2770 (t__2759)
{var sequence__2764 = exp__2757, B2766 = sequence__2764.slice(1), B2767 = function B2771 (tT__2760)
{return k__2758(B2640([t__2759], tT__2760))};
return B2737(B2766, B2767)};
return B2725(B2765, B2768)}, false)}
