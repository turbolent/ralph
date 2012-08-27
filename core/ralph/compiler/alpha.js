var B2527 = require("ralph/core")
var B2529 = require("ralph/compiler/utilities")
{
var trueQ = B2527["true?"],
B2530 = B2527["%make-function"],
B2531 = B2527.not,
B2532 = B2527.get,
B2533 = B2527["get-setter"],
B2534 = B2527["make-object"],
B2535 = B2530("ensure_naming_structure", function ensure_naming_structure__2536 (env__2537, module_name__2538, name__2539)
{
var value__2542 = B2532(env__2537, "identifiers", module_name__2538),
B2545 = !(trueQ(value__2542));
if ($T(B2545))
B2533(env__2537, "identifiers", module_name__2538, B2534());
var module_renamings__2540 = B2532(env__2537, "identifiers", module_name__2538),
value__2544 = B2532(module_renamings__2540, name__2539),
B2546 = !(trueQ(value__2544));
if ($T(B2546))
module_renamings__2540[name__2539] = [];
return env__2537}, false);
exports["ensure-naming-structure"] = B2535}
{
var trueQ = B2527["true?"],
B2549 = B2527.map,
B2550 = B2527.push,
B2551 = B2529["generate-symbol"],
B2552 = B2529["get-module-name/name"],
B2553 = B2530("rename_identifiers", function rename_identifiers__2554 (identifiers__2555, env__2556)
{return B2549(function B2557 (identifier__2558)
{
var B2559 = B2552(identifier__2558),
module_name__2560 = B2559[0],
name__2561 = B2559[1],
value__2564 = B2532(identifier__2558, "generated?"),
B2569 = !(trueQ(value__2564)),
B2570;
if ($T(B2569))
B2570 = name__2561
else
B2570 = false;
var new_identifier__2562 = B2551(B2570);
B2535(env__2556, module_name__2560, name__2561);
var array__2567 = B2532(env__2556, "identifiers", module_name__2560, name__2561),
value__2568 = new_identifier__2562;
array__2567.unshift(value__2568);
array__2567;
return new_identifier__2562}, identifiers__2555)}, false);
exports["rename-identifiers"] = B2553}
{
var trueQ = B2527["true?"],
B2578 = B2527["any?"],
B2579 = B2527["empty?"],
B2580 = B2527.pop,
B2581 = B2527.rest,
B2582 = B2527.first,
B2583 = B2530("restore_identifiers", function restore_identifiers__2584 (identifiers__2585, env__2586)
{
var B2587 = identifiers__2585,
B2588,
B2589,
B2590 = [B2587];
while (true)
{
var B2591 = B2588,
value__2599;
if ($T(B2591))
value__2599 = B2591
else
value__2599 = B2578(B2579, B2590);
var B2607 = !(trueQ(value__2599));
if ($T(B2607))
{
var sequence__2601 = B2587,
identifier__2592 = sequence__2601[0];
(function B2593 (identifier__2594)
{
var B2595 = B2552(identifier__2594),
module_name__2596 = B2595[0],
name__2597 = B2595[1],
array__2603 = B2532(env__2586, "identifiers", module_name__2596, name__2597);
return array__2603.shift()})(identifier__2592);
var sequence__2605 = B2587,
B2606 = sequence__2605.slice(1);
B2587 = B2606;
B2590 = [B2587]}
else
break};
return B2589}, false);
exports["restore-identifiers"] = B2583}
var B2608 = B2534()
{
var B2611 = B2530("find_identifier", function find_identifier__2612 (identifier__2613, env__2614)
{
var B2615 = B2552(identifier__2613),
module_name__2616 = B2615[0],
name__2617 = B2615[1],
B2618 = B2532(env__2614, "identifiers", module_name__2616, name__2617);
if ($T(B2618))
{
var renamings__2619 = B2618,
sequence__2621 = renamings__2619;
return sequence__2621[0]}
else
return B2608}, false);
exports["find-identifier"] = B2611}
{
var B2805 = $S("%method"),
B2806 = $S("%bind"),
B2807 = $S("%try"),
B2808 = $S("%define"),
alpha_convert__2650,
B2641 = B2527["instance?"],
B2642 = B2527["<array>"],
B2643 = B2527["binary=="],
B2644 = B2527.concatenate,
B2645 = B2527["push-last"],
B2646 = B2527["symbol-name"],
B2647 = B2527.rcurry,
B2648 = B2527["<symbol>"],
B2649 = B2530("alpha_convert", function alpha_convert__2650 (form__2651, env__2652)
{
var B2653 = form__2651;
if ($T(B2641(B2653, B2642)))
{
var sequence__2703 = form__2651,
B2792 = sequence__2703[0],
B2654 = B2646(B2792),
object1__2706 = B2654,
object2__2707 = "%method",
B2793 = (object1__2706 === object2__2707);
if ($T(B2793))
{
var ____2655 = form__2651[0],
name__2656 = form__2651[1],
arguments__2657 = form__2651[2],
body__2658 = form__2651[3],
identifiers__2659 = B2644([name__2656], arguments__2657),
new_identifiers__2660 = B2553(identifiers__2659, env__2652),
new_body__2661 = alpha_convert__2650(body__2658, env__2652),
new_name__2662 = new_identifiers__2660[0],
new_arguments__2663 = $SL.call(new_identifiers__2660, 1),
result__2664 = [B2805, new_name__2662, new_arguments__2663, new_body__2661];
B2583(identifiers__2659, env__2652);
return result__2664}
else
{
var object1__2710 = B2654,
object2__2711 = "%bind",
B2794 = (object1__2710 === object2__2711);
if ($T(B2794))
{
var ____2665 = form__2651[0],
B2666 = form__2651[1],
var__2667 = B2666[0],
value__2668 = B2666[1],
body__2669 = form__2651[2],
new_value__2670 = alpha_convert__2650(value__2668, env__2652),
B2671 = B2553([var__2667], env__2652),
new_var__2672 = B2671[0],
result__2673 = [B2806, [new_var__2672, new_value__2670], alpha_convert__2650(body__2669, env__2652)];
B2583([var__2667], env__2652);
return result__2673}
else
{
var object1__2714 = B2654,
object2__2715 = "%try",
B2795 = (object1__2714 === object2__2715);
if ($T(B2795))
{
var ____2674 = form__2651[0],
body__2675 = form__2651[1],
var__2676 = form__2651[2],
catch__2677 = form__2651[3],
new_body__2678 = alpha_convert__2650(body__2675, env__2652),
B2679 = B2553([var__2676], env__2652),
new_var__2680 = B2679[0],
result__2681 = [B2807, new_body__2678, new_var__2680, alpha_convert__2650(catch__2677, env__2652)];
B2583([var__2676], env__2652);
return result__2681}
else
{
var object1__2718 = B2654,
object2__2719 = "%define",
B2796 = (object1__2718 === object2__2719);
if ($T(B2796))
{
var ____2682 = form__2651[0],
identifier__2683 = form__2651[1],
B2684 = B2552(identifier__2683),
module_name__2685 = B2684[0],
name__2686 = B2684[1],
new_identifier__2687 = B2551();
B2535(env__2652, module_name__2685, name__2686);
var array__2722 = B2532(env__2652, "identifiers", module_name__2685, name__2686),
value__2723 = new_identifier__2687;
array__2722.push(value__2723);
array__2722;
B2533(env__2652, "definition-names", B2646(new_identifier__2687), name__2686);
B2533(env__2652, "new-identifiers", name__2686, new_identifier__2687);
return [B2808, new_identifier__2687]}
else
{
var object1__2726 = B2654,
object2__2727 = "%if",
B2688 = (object1__2726 === object2__2727),
B2797;
if ($T(B2688))
B2797 = B2688
else
{
var object1__2730 = B2654,
object2__2731 = "%while",
B2689 = (object1__2730 === object2__2731);
if ($T(B2689))
B2797 = B2689
else
{
var object1__2734 = B2654,
object2__2735 = "%set",
B2690 = (object1__2734 === object2__2735);
if ($T(B2690))
B2797 = B2690
else
{
var object1__2738 = B2654,
object2__2739 = "%begin",
B2691 = (object1__2738 === object2__2739);
if ($T(B2691))
B2797 = B2691
else
{
var object1__2742 = B2654,
object2__2743 = "%get-property",
B2692 = (object1__2742 === object2__2743);
if ($T(B2692))
B2797 = B2692
else
{
var object1__2746 = B2654,
object2__2747 = "%object",
B2693 = (object1__2746 === object2__2747);
if ($T(B2693))
B2797 = B2693
else
{
var object1__2750 = B2654,
object2__2751 = "%array",
B2694 = (object1__2750 === object2__2751);
if ($T(B2694))
B2797 = B2694
else
{
var object1__2754 = B2654,
object2__2755 = "%native",
B2695 = (object1__2754 === object2__2755);
if ($T(B2695))
B2797 = B2695
else
{
var object1__2758 = B2654,
object2__2759 = "%native-call",
B2696 = (object1__2758 === object2__2759);
if ($T(B2696))
B2797 = B2696
else
{
var object1__2762 = B2654,
object2__2763 = "%infix",
B2697 = (object1__2762 === object2__2763);
if ($T(B2697))
B2797 = B2697
else
{
var object1__2766 = B2654,
object2__2767 = "%minus",
B2698 = (object1__2766 === object2__2767);
if ($T(B2698))
B2797 = B2698
else
{
var object1__2770 = B2654,
object2__2771 = "%plus",
B2699 = (object1__2770 === object2__2771);
if ($T(B2699))
B2797 = B2699
else
{
var object1__2774 = B2654,
object2__2775 = "%times",
B2700 = (object1__2774 === object2__2775);
if ($T(B2700))
B2797 = B2700
else
{
var object1__2778 = B2654,
object2__2779 = "%divide";
B2797 = (object1__2778 === object2__2779)}}}}}}}}}}}}};
if ($T(B2797))
{
var sequence__2781 = form__2651,
B2798 = sequence__2781[0],
B2799 = [B2798],
B2800 = B2647(alpha_convert__2650, env__2652),
sequence__2783 = form__2651,
B2801 = sequence__2783.slice(1),
B2802 = B2549(B2800, B2801);
return B2644(B2799, B2802)}
else
{
var object1__2786 = B2654,
object2__2787 = "%native-name",
B2803 = (object1__2786 === object2__2787);
if ($T(B2803))
return form__2651
else
return B2549(B2647(alpha_convert__2650, env__2652), form__2651)}}}}}}
else
if ($T(B2641(B2653, B2648)))
{
var value__2701 = B2611(form__2651, env__2652),
object1__2790 = value__2701,
object2__2791 = B2608,
B2804 = (object1__2790 === object2__2791);
if ($T(B2804))
return form__2651
else
return value__2701}
else
return form__2651}, false);
exports["alpha-convert"] = B2649}
