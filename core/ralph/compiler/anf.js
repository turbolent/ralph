var B2662 = require("ralph/core")
var B2664 = require("ralph/compiler/utilities")
var B2665 = B2662["%make-function"], B2666 = B2662["any?"], B2667 = B2662.curry, B2668 = B2662["instance?"], B2669 = B2662["<number>"], B2670 = B2662["<boolean>"], B2671 = B2662["<string>"], B2672 = B2662["<symbol>"], B2673 = B2662["<keyword>"], B2674 = B2665("atomicQ", function B2676 (expression__2675)
{return B2666(B2667(B2668, expression__2675), [B2669, B2670, B2671, B2672, B2673])}, false)
var trueQ = B2662["true?"], B2682 = B2662["<array>"], B2683 = B2662.not, B2684 = B2662["empty?"], B2685 = B2662["=="], B2686 = B2662.last, B2687 = B2662["symbol-name"], B2688 = B2662.first, B2689 = B2665("contains_statementsQ", function B2729 (exp__2690)
{var B2724;
if ($T(B2668(exp__2690, B2682)))
{var sequence__2707 = exp__2690, B2708 = sequence__2707, B2709 = ((B2708 || false).length || 0), B2710 = 0, value__2711 = (B2709 === B2710);
B2724 = !(trueQ(value__2711))}
else B2724 = false;
if ($T(B2724))
{var sequence__2713 = exp__2690, B2725 = sequence__2713[0], B2691 = B2687(B2725), B2692 = B2685(B2691, "%begin"), B2726;
if ($T(B2692))
B2726 = B2692
else {var B2693 = B2685(B2691, "%if");
if ($T(B2693))
B2726 = B2693
else {var B2694 = B2685(B2691, "%while");
if ($T(B2694))
B2726 = B2694
else {var B2695 = B2685(B2691, "%bind");
if ($T(B2695))
B2726 = B2695
else B2726 = B2685(B2691, "%try")}}};
if ($T(B2726))
return true
else if ($T(B2685(B2691, "%set")))
{var array__2721 = exp__2690, B2722 = array__2721, B2723 = ((B2722 || false).length || 0), B2727 = (B2723 - 1), B2728 = array__2721[B2727];
return B2689(B2728)}
else if ($T(B2685(B2691, "%method")))
return false
else return B2666(B2689, exp__2690)}}, false)
{var B2730, B2731 = B2662.identity, B2732 = B2665("normalize_term", function B2734 (expression__2733)
{return B2730(expression__2733, B2731)}, false);
exports["normalize-term"] = B2732}
{var B2829 = $S("%method"), B2830 = $S("%begin"), B2831 = $S("%bind"), B2832 = $S("%if"), B2833 = $S("%while"), B2834 = $S("%native"), B2835 = $S("%try"), B2836 = $S("%set"), B2837 = $S("%array"), B2838 = $S("%object"), B2839 = $S("%get-property"), B2840 = $S("%infix"), B2841 = $S("%native-call"), B2842 = $S("%native-name"), B2843 = $S("%plus"), B2844 = $S("%minus"), B2845 = $S("%times"), B2846 = $S("%divide"), trueQ = B2662["true?"], B2738 = B2662.concatenate, B2739, B2740, B2741 = B2664["expression?"], B2742 = B2662["member?"], B2743 = B2662.map, B2744 = B2662.rest;
B2730 = B2665("normalize", function B2847 (exp__2745, k__2746)
{var B2816;
if ($T(B2668(exp__2745, B2682)))
{var sequence__2789 = exp__2745, B2790 = sequence__2789, B2791 = ((B2790 || false).length || 0), B2792 = 0, value__2793 = (B2791 === B2792);
B2816 = !(trueQ(value__2793))}
else B2816 = false;
if ($T(B2816))
{var sequence__2795 = exp__2745, B2817 = sequence__2795[0], B2747 = B2687(B2817);
if ($T(B2685(B2747, "%method")))
{var ____2748 = exp__2745[0], arguments__2749 = exp__2745[1], body__2750 = exp__2745[2];
return k__2746([B2829, arguments__2749, B2732(body__2750)])}
else if ($T(B2685(B2747, "%begin")))
{var ____2751 = exp__2745[0], exp1__2752 = exp__2745[1], eT__2753 = $SL.call(exp__2745, 2), sequence__2806 = eT__2753, B2807 = sequence__2806, B2808 = ((B2807 || false).length || 0), B2809 = 0, B2818 = (B2808 === B2809);
if ($T(B2818))
return B2730(exp1__2752, k__2746)
else return B2730(exp1__2752, function B2848 (aexp1__2754)
{return [B2830, aexp1__2754, B2730(B2738([B2830], eT__2753), k__2746)]})}
else if ($T(B2685(B2747, "%bind")))
{var ____2755 = exp__2745[0], B2756 = exp__2745[1], var__2757 = B2756[0], value__2758 = B2756[1], body__2759 = exp__2745[2];
return B2730(value__2758, function B2849 (avalue__2760)
{return [B2831, [var__2757, avalue__2760], B2730(body__2759, k__2746)]})}
else if ($T(B2685(B2747, "%if")))
{var ____2761 = exp__2745[0], test__2762 = exp__2745[1], then__2763 = exp__2745[2], else__2764 = exp__2745[3];
return B2739(test__2762, function B2850 (atest__2765)
{return k__2746([B2832, atest__2765, B2732(then__2763), B2732(else__2764)])})}
else if ($T(B2685(B2747, "%while")))
{var ____2766 = exp__2745[0], test__2767 = exp__2745[1], body__2768 = exp__2745[2], B2819;
if ($T(B2689(test__2767)))
B2819 = [B2833, true, [B2830, B2732([B2832, test__2767, B2732(body__2768), [B2834, "break"], false])]]
else B2819 = [B2833, B2732(test__2767), B2732(body__2768)];
return k__2746(B2819)}
else if ($T(B2685(B2747, "%try")))
{var ____2769 = exp__2745[0], body__2770 = exp__2745[1], var__2771 = exp__2745[2], catch__2772 = exp__2745[3];
return k__2746([B2835, B2732(body__2770), var__2771, B2732(catch__2772)])}
else if ($T(B2685(B2747, "%set")))
{var ____2773 = exp__2745[0], var__2774 = exp__2745[1], value__2775 = exp__2745[2];
return B2739(value__2775, function B2851 (avalue__2776)
{return k__2746([B2836, var__2774, avalue__2776])})}
else {var B2777 = B2685(B2747, "%define"), B2820;
if ($T(B2777))
B2820 = B2777
else B2820 = B2685(B2747, "%symbol");
if ($T(B2820))
return k__2746(exp__2745)
else if ($T(B2689(exp__2745)))
return B2740(exp__2745, k__2746)
else {var B2823;
if ($T(B2741(exp__2745)))
{var sequence__2811 = exp__2745, B2821 = sequence__2811[0], B2822 = [B2837, B2838, B2839, B2840, B2834, B2841, B2842, B2843, B2844, B2845, B2846];
B2823 = B2742(B2821, B2822)}
else B2823 = false;
if ($T(B2823))
{var sequence__2813 = exp__2745, B2824 = sequence__2813[0], B2825 = [B2824], sequence__2815 = exp__2745, B2826 = sequence__2815.slice(1), B2827 = B2743(B2732, B2826), B2828 = B2738(B2825, B2827);
return k__2746(B2828)}
else return k__2746(B2743(B2732, exp__2745))}}}
else return k__2746(exp__2745)}, false)}
{var B2852;
B2739 = B2665("normalize_value", function B2856 (exp__2853, k__2854)
{if ($T(B2689(exp__2853)))
return B2852(exp__2853, k__2854)
else {var B2855;
if ($T(B2668(exp__2853, B2682)))
B2855 = B2743(B2732, exp__2853)
else B2855 = exp__2853;
return k__2854(B2855)}}, false)}
{var B2857 = B2664["generate-symbol"];
B2852 = B2665("normalizeT", function B2862 (exp__2858, k__2859)
{return B2730(exp__2858, function B2863 (aexp__2860)
{if ($T(B2674(aexp__2860)))
return k__2859(aexp__2860)
else {var t__2861 = B2857();
return [B2831, [t__2861, aexp__2860], k__2859(t__2861)]}})}, false)}
var B2864 = B2665("normalizeTT", function B2882 (expT__2865, k__2866)
{var sequence__2877 = expT__2865, B2878 = sequence__2877, B2879 = ((B2878 || false).length || 0), B2880 = 0, B2881 = (B2879 === B2880);
if ($T(B2881))
return k__2866([])
else return B2740(expT__2865, k__2866)}, false)
B2740 = B2665("normalize_all", function B2895 (exp__2883, k__2884)
{var sequence__2888 = exp__2883, B2891 = sequence__2888[0], B2894 = function B2896 (t__2885)
{var sequence__2890 = exp__2883, B2892 = sequence__2890.slice(1), B2893 = function B2897 (tT__2886)
{return k__2884(B2738([t__2885], tT__2886))};
return B2864(B2892, B2893)};
return B2852(B2891, B2894)}, false)
