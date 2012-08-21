var B2521 = require("ralph/core")
var B2523 = require("ralph/compiler/utilities")
{
var trueQ = B2521["true?"],
B2524 = B2521["%make-function"],
B2525 = B2521.not,
B2526 = B2521.get,
B2527 = B2521["get-setter"],
B2528 = B2521["make-object"],
B2529 = B2524("ensure_naming_structure", function ensure_naming_structure__2530 (env__2531, module_name__2532, name__2533)
{
var value__2536 = B2526(env__2531, "identifiers", module_name__2532),
B2539 = !(trueQ(value__2536));
if ($T(B2539))
B2527(env__2531, "identifiers", module_name__2532, B2528());
var module_renamings__2534 = B2526(env__2531, "identifiers", module_name__2532),
value__2538 = B2526(module_renamings__2534, name__2533),
B2540 = !(trueQ(value__2538));
if ($T(B2540))
module_renamings__2534[name__2533] = [];
return env__2531}, false);
exports["ensure-naming-structure"] = B2529}
{
var trueQ = B2521["true?"],
B2543 = B2521.map,
B2544 = B2521.push,
B2545 = B2523["generate-symbol"],
B2546 = B2523["get-module-name/name"],
B2547 = B2524("rename_identifiers", function rename_identifiers__2548 (identifiers__2549, env__2550)
{return B2543(function B2551 (identifier__2552)
{
var B2553 = B2546(identifier__2552),
module_name__2554 = B2553[0],
name__2555 = B2553[1],
value__2558 = B2526(identifier__2552, "generated?"),
B2563 = !(trueQ(value__2558)),
B2564;
if ($T(B2563))
B2564 = name__2555
else
B2564 = false;
var new_identifier__2556 = B2545(B2564);
B2529(env__2550, module_name__2554, name__2555);
var array__2561 = B2526(env__2550, "identifiers", module_name__2554, name__2555),
value__2562 = new_identifier__2556;
array__2561.unshift(value__2562);
array__2561;
return new_identifier__2556}, identifiers__2549)}, false);
exports["rename-identifiers"] = B2547}
{
var trueQ = B2521["true?"],
B2572 = B2521["any?"],
B2573 = B2521["empty?"],
B2574 = B2521.pop,
B2575 = B2521.rest,
B2576 = B2521.first,
B2577 = B2524("restore_identifiers", function restore_identifiers__2578 (identifiers__2579, env__2580)
{
var B2581 = identifiers__2579,
B2582,
B2583,
B2584 = [B2581];
while (true)
{
var B2585 = B2582,
value__2593;
if ($T(B2585))
value__2593 = B2585
else
value__2593 = B2572(B2573, B2584);
var B2601 = !(trueQ(value__2593));
if ($T(B2601))
{
var sequence__2595 = B2581,
identifier__2586 = sequence__2595[0];
(function B2587 (identifier__2588)
{
var B2589 = B2546(identifier__2588),
module_name__2590 = B2589[0],
name__2591 = B2589[1],
array__2597 = B2526(env__2580, "identifiers", module_name__2590, name__2591);
return array__2597.shift()})(identifier__2586);
var sequence__2599 = B2581,
B2600 = sequence__2599.slice(1);
B2581 = B2600;
B2584 = [B2581]}
else
break};
return B2583}, false);
exports["restore-identifiers"] = B2577}
var B2602 = B2528()
{
var B2605 = B2524("find_identifier", function find_identifier__2606 (identifier__2607, env__2608)
{
var B2609 = B2546(identifier__2607),
module_name__2610 = B2609[0],
name__2611 = B2609[1],
B2612 = B2526(env__2608, "identifiers", module_name__2610, name__2611);
if ($T(B2612))
{
var renamings__2613 = B2612,
sequence__2615 = renamings__2613;
return sequence__2615[0]}
else
return B2602}, false);
exports["find-identifier"] = B2605}
{
var B2799 = $S("%method"),
B2800 = $S("%bind"),
B2801 = $S("%try"),
B2802 = $S("%define"),
alpha_convert__2644,
B2635 = B2521["instance?"],
B2636 = B2521["<array>"],
B2637 = B2521["binary=="],
B2638 = B2521.concatenate,
B2639 = B2521["push-last"],
B2640 = B2521["symbol-name"],
B2641 = B2521.rcurry,
B2642 = B2521["<symbol>"],
B2643 = B2524("alpha_convert", function alpha_convert__2644 (form__2645, env__2646)
{
var B2647 = form__2645;
if ($T(B2635(B2647, B2636)))
{
var sequence__2697 = form__2645,
B2786 = sequence__2697[0],
B2648 = B2640(B2786),
object1__2700 = B2648,
object2__2701 = "%method",
B2787 = (object1__2700 === object2__2701);
if ($T(B2787))
{
var ____2649 = form__2645[0],
name__2650 = form__2645[1],
arguments__2651 = form__2645[2],
body__2652 = form__2645[3],
identifiers__2653 = B2638([name__2650], arguments__2651),
new_identifiers__2654 = B2547(identifiers__2653, env__2646),
new_body__2655 = alpha_convert__2644(body__2652, env__2646),
new_name__2656 = new_identifiers__2654[0],
new_arguments__2657 = $SL.call(new_identifiers__2654, 1),
result__2658 = [B2799, new_name__2656, new_arguments__2657, new_body__2655];
B2577(identifiers__2653, env__2646);
return result__2658}
else
{
var object1__2704 = B2648,
object2__2705 = "%bind",
B2788 = (object1__2704 === object2__2705);
if ($T(B2788))
{
var ____2659 = form__2645[0],
B2660 = form__2645[1],
var__2661 = B2660[0],
value__2662 = B2660[1],
body__2663 = form__2645[2],
new_value__2664 = alpha_convert__2644(value__2662, env__2646),
B2665 = B2547([var__2661], env__2646),
new_var__2666 = B2665[0],
result__2667 = [B2800, [new_var__2666, new_value__2664], alpha_convert__2644(body__2663, env__2646)];
B2577([var__2661], env__2646);
return result__2667}
else
{
var object1__2708 = B2648,
object2__2709 = "%try",
B2789 = (object1__2708 === object2__2709);
if ($T(B2789))
{
var ____2668 = form__2645[0],
body__2669 = form__2645[1],
var__2670 = form__2645[2],
catch__2671 = form__2645[3],
new_body__2672 = alpha_convert__2644(body__2669, env__2646),
B2673 = B2547([var__2670], env__2646),
new_var__2674 = B2673[0],
result__2675 = [B2801, new_body__2672, new_var__2674, alpha_convert__2644(catch__2671, env__2646)];
B2577([var__2670], env__2646);
return result__2675}
else
{
var object1__2712 = B2648,
object2__2713 = "%define",
B2790 = (object1__2712 === object2__2713);
if ($T(B2790))
{
var ____2676 = form__2645[0],
identifier__2677 = form__2645[1],
B2678 = B2546(identifier__2677),
module_name__2679 = B2678[0],
name__2680 = B2678[1],
new_identifier__2681 = B2545();
B2529(env__2646, module_name__2679, name__2680);
var array__2716 = B2526(env__2646, "identifiers", module_name__2679, name__2680),
value__2717 = new_identifier__2681;
array__2716.push(value__2717);
array__2716;
B2527(env__2646, "definition-names", B2640(new_identifier__2681), name__2680);
B2527(env__2646, "new-identifiers", name__2680, new_identifier__2681);
return [B2802, new_identifier__2681]}
else
{
var object1__2720 = B2648,
object2__2721 = "%if",
B2682 = (object1__2720 === object2__2721),
B2791;
if ($T(B2682))
B2791 = B2682
else
{
var object1__2724 = B2648,
object2__2725 = "%while",
B2683 = (object1__2724 === object2__2725);
if ($T(B2683))
B2791 = B2683
else
{
var object1__2728 = B2648,
object2__2729 = "%set",
B2684 = (object1__2728 === object2__2729);
if ($T(B2684))
B2791 = B2684
else
{
var object1__2732 = B2648,
object2__2733 = "%begin",
B2685 = (object1__2732 === object2__2733);
if ($T(B2685))
B2791 = B2685
else
{
var object1__2736 = B2648,
object2__2737 = "%get-property",
B2686 = (object1__2736 === object2__2737);
if ($T(B2686))
B2791 = B2686
else
{
var object1__2740 = B2648,
object2__2741 = "%object",
B2687 = (object1__2740 === object2__2741);
if ($T(B2687))
B2791 = B2687
else
{
var object1__2744 = B2648,
object2__2745 = "%array",
B2688 = (object1__2744 === object2__2745);
if ($T(B2688))
B2791 = B2688
else
{
var object1__2748 = B2648,
object2__2749 = "%native",
B2689 = (object1__2748 === object2__2749);
if ($T(B2689))
B2791 = B2689
else
{
var object1__2752 = B2648,
object2__2753 = "%native-call",
B2690 = (object1__2752 === object2__2753);
if ($T(B2690))
B2791 = B2690
else
{
var object1__2756 = B2648,
object2__2757 = "%infix",
B2691 = (object1__2756 === object2__2757);
if ($T(B2691))
B2791 = B2691
else
{
var object1__2760 = B2648,
object2__2761 = "%minus",
B2692 = (object1__2760 === object2__2761);
if ($T(B2692))
B2791 = B2692
else
{
var object1__2764 = B2648,
object2__2765 = "%plus",
B2693 = (object1__2764 === object2__2765);
if ($T(B2693))
B2791 = B2693
else
{
var object1__2768 = B2648,
object2__2769 = "%times",
B2694 = (object1__2768 === object2__2769);
if ($T(B2694))
B2791 = B2694
else
{
var object1__2772 = B2648,
object2__2773 = "%divide";
B2791 = (object1__2772 === object2__2773)}}}}}}}}}}}}};
if ($T(B2791))
{
var sequence__2775 = form__2645,
B2792 = sequence__2775[0],
B2793 = [B2792],
B2794 = B2641(alpha_convert__2644, env__2646),
sequence__2777 = form__2645,
B2795 = sequence__2777.slice(1),
B2796 = B2543(B2794, B2795);
return B2638(B2793, B2796)}
else
{
var object1__2780 = B2648,
object2__2781 = "%native-name",
B2797 = (object1__2780 === object2__2781);
if ($T(B2797))
return form__2645
else
return B2543(B2641(alpha_convert__2644, env__2646), form__2645)}}}}}}
else
if ($T(B2635(B2647, B2642)))
{
var value__2695 = B2605(form__2645, env__2646),
object1__2784 = value__2695,
object2__2785 = B2602,
B2798 = (object1__2784 === object2__2785);
if ($T(B2798))
return form__2645
else
return value__2695}
else
return form__2645}, false);
exports["alpha-convert"] = B2643}
