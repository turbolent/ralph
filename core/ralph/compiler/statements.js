{
var B2703;
false;
B2703 = require("ralph/core")}
{
var B2705;
false;
B2705 = require("ralph/compiler/utilities")}
{
var B2753 = $S("%begin", "ralph/core"),
ralphScoreCCdec = B2703.dec,
ralphScoreCCsize = B2703.size,
Mmake_function__2708 = B2703["%make-function"],
instanceQ__2709 = B2703["instance?"],
LarrayG__2710 = B2703["<array>"],
binaryEE__2711 = B2703["binary=="],
last_setter__2712 = B2703["last-setter"],
last__2713 = B2703.last,
third_setter__2714 = B2703["third-setter"],
third__2715 = B2703.third,
second_setter__2716 = B2703["second-setter"],
second__2717 = B2703.second,
concatenate__2718 = B2703.concatenate,
symbol_name__2719 = B2703["symbol-name"],
first__2720 = B2703.first,
wrap_valueN__2721;
false;
wrap_valueN__2721 = Mmake_function__2708("wrap_valueN", function wrap_valueN__2722 (exp__2723, wrapper__2724)
{if ($T(instanceQ__2709(exp__2723, LarrayG__2710)))
{
var sequence__2727 = exp__2723,
B2748 = sequence__2727[0],
B2706__2725 = symbol_name__2719(B2748),
object2__2729 = "%begin",
object1__2728 = B2706__2725,
B2707__2726 = (object1__2728 === object2__2729),
B2749;
if ($T(B2707__2726))
{B2749 = B2707__2726}
else
{
var object2__2731 = "%bind",
object1__2730 = B2706__2725;
B2749 = (object1__2730 === object2__2731)};
if ($T(B2749))
{
var value__2733 = wrap_valueN__2722(last__2713(exp__2723), wrapper__2724),
array__2732 = exp__2723;
array__2732[ralphScoreCCdec(ralphScoreCCsize(array__2732), 1)] = value__2733;
return exp__2723}
else
{
var object2__2735 = "%if",
object1__2734 = B2706__2725,
B2750 = (object1__2734 === object2__2735);
if ($T(B2750))
{
var value__2737 = wrap_valueN__2722(third__2715(exp__2723), wrapper__2724),
array__2736 = exp__2723;
array__2736[2] = value__2737;
var value__2739 = wrap_valueN__2722(last__2713(exp__2723), wrapper__2724),
array__2738 = exp__2723;
array__2738[ralphScoreCCdec(ralphScoreCCsize(array__2738), 1)] = value__2739;
return exp__2723}
else
{
var object2__2741 = "%while",
object1__2740 = B2706__2725,
B2751 = (object1__2740 === object2__2741);
if ($T(B2751))
{return [B2753, exp__2723, wrap_valueN__2722(false, wrapper__2724)]}
else
{
var object2__2743 = "%try",
object1__2742 = B2706__2725,
B2752 = (object1__2742 === object2__2743);
if ($T(B2752))
{
var value__2745 = wrap_valueN__2722(second__2717(exp__2723), wrapper__2724),
array__2744 = exp__2723;
array__2744[1] = value__2745;
var value__2747 = wrap_valueN__2722(last__2713(exp__2723), wrapper__2724),
array__2746 = exp__2723;
array__2746[ralphScoreCCdec(ralphScoreCCsize(array__2746), 1)] = value__2747;
return exp__2723}
else
return concatenate__2718(wrapper__2724, [exp__2723])}}}}
else
return concatenate__2718(wrapper__2724, [exp__2723])}, false)}
{
var B2757 = $S("%return", "ralph/core"),
add_explicit_return__2754;
false;
add_explicit_return__2754 = Mmake_function__2708("add_explicit_return", function add_explicit_return__2755 (exp__2756)
{return wrap_valueN__2721(exp__2756, [B2757])}, false)}
{
var B2769 = $S("%if", "ralph/core"),
B2770 = $S("%while", "ralph/core"),
B2771 = $S("%bind", "ralph/core"),
B2772 = $S("%try", "ralph/core"),
ralphScoreCCtrueQ = B2703["true?"],
not__2758 = B2703.not,
emptyQ__2759 = B2703["empty?"],
memberQ__2760 = B2703["member?"],
statementQ__2761;
false;
statementQ__2761 = Mmake_function__2708("statementQ", function statementQ__2762 (exp__2763)
{if ($T(instanceQ__2709(exp__2763, LarrayG__2710)))
{
var value__2764 = emptyQ__2759(exp__2763),
B2766 = !(ralphScoreCCtrueQ(value__2764));
if ($T(B2766))
{
var sequence__2765 = exp__2763,
B2767 = sequence__2765[0],
B2768 = [B2769, B2770, B2753, B2771, B2772];
return memberQ__2760(B2767, B2768)}}}, false)}
{
var B2777 = $S("%native", "ralph/core"),
LbooleanG__2773 = B2703["<boolean>"],
add_explicit_true__2774;
false;
add_explicit_true__2774 = Mmake_function__2708("add_explicit_true", function add_explicit_true__2775 (exp__2776)
{if ($T(instanceQ__2709(exp__2776, LbooleanG__2773)))
{return ralphScoreCCtrueQ(exp__2776)}
else
return [[B2777, "$T"], exp__2776]}, false)}
{
var B2855 = $S("%set", "ralph/core"),
B2856 = $S("%get-property", "ralph/core"),
B2857 = $S("%var", "ralph/core"),
maybe_begin__2780 = B2705["maybe-begin"],
map__2781 = B2703.map,
rcurry__2782 = B2703.rcurry,
get__2783 = B2703.get,
first_setter__2784 = B2703["first-setter"],
transform_statementsN__2785;
false;
transform_statementsN__2785 = Mmake_function__2708("transform_statementsN", function transform_statementsN__2786 (exp__2787, env__2788)
{if ($T(instanceQ__2709(exp__2787, LarrayG__2710)))
{
var sequence__2806 = exp__2787,
B2842 = sequence__2806[0],
B2778__2789 = symbol_name__2719(B2842),
object2__2808 = "%method",
object1__2807 = B2778__2789,
B2843 = (object1__2807 === object2__2808);
if ($T(B2843))
{
var value__2810 = add_explicit_return__2754(transform_statementsN__2786(last__2713(exp__2787), env__2788)),
array__2809 = exp__2787;
array__2809[ralphScoreCCdec(ralphScoreCCsize(array__2809), 1)] = value__2810;
return exp__2787}
else
{
var object2__2812 = "%begin",
object1__2811 = B2778__2789,
B2844 = (object1__2811 === object2__2812);
if ($T(B2844))
{
var ____2790 = exp__2787[0],
exps__2791 = $SL.call(exp__2787, 1);
return maybe_begin__2780(map__2781(rcurry__2782(transform_statementsN__2786, env__2788), exps__2791))}
else
{
var object2__2814 = "%bind",
object1__2813 = B2778__2789,
B2845 = (object1__2813 === object2__2814);
if ($T(B2845))
{
var ____2792 = exp__2787[0],
B2779__2793 = exp__2787[1],
var__2794 = B2779__2793[0],
value__2795 = B2779__2793[1],
body__2796 = exp__2787[2];
if ($T(statementQ__2761(value__2795)))
{return [B2771, [var__2794, false], [B2753, wrap_valueN__2721(transform_statementsN__2786(value__2795, env__2788), [B2855, var__2794]), transform_statementsN__2786(body__2796, env__2788)]]}
else
return [B2771, [var__2794, transform_statementsN__2786(value__2795, env__2788)], transform_statementsN__2786(body__2796, env__2788)]}
else
{
var object2__2816 = "%if",
object1__2815 = B2778__2789,
B2846 = (object1__2815 === object2__2816);
if ($T(B2846))
{
var ____2797 = exp__2787[0],
test__2798 = exp__2787[1],
then__2799 = exp__2787[2],
else__2800 = exp__2787[3];
return [B2769, add_explicit_true__2774(test__2798), transform_statementsN__2786(then__2799, env__2788), transform_statementsN__2786(else__2800, env__2788)]}
else
{
var object2__2818 = "%while",
object1__2817 = B2778__2789,
B2847 = (object1__2817 === object2__2818);
if ($T(B2847))
{
var value__2820 = add_explicit_true__2774(second__2717(exp__2787)),
array__2819 = exp__2787;
array__2819[1] = value__2820;
var value__2822 = transform_statementsN__2786(third__2715(exp__2787), env__2788),
array__2821 = exp__2787;
array__2821[2] = value__2822;
return exp__2787}
else
{
var object2__2824 = "%try",
object1__2823 = B2778__2789,
B2848 = (object1__2823 === object2__2824);
if ($T(B2848))
{
var value__2826 = transform_statementsN__2786(second__2717(exp__2787), exp__2787),
array__2825 = exp__2787;
array__2825[1] = value__2826;
var value__2828 = transform_statementsN__2786(last__2713(exp__2787), env__2788),
array__2827 = exp__2787;
array__2827[ralphScoreCCdec(ralphScoreCCsize(array__2827), 1)] = value__2828;
return exp__2787}
else
{
var object2__2830 = "%set",
object1__2829 = B2778__2789,
B2849 = (object1__2829 === object2__2830);
if ($T(B2849))
{
var ____2801 = exp__2787[0],
identifier__2802 = exp__2787[1],
value__2803 = exp__2787[2],
valueT__2804 = transform_statementsN__2786(value__2803, env__2788),
definition_name__2805 = symbol_name__2719(get__2783(env__2788, "original-identifier", symbol_name__2719(identifier__2802))),
B2850;
if ($T(definition_name__2805))
{B2850 = memberQ__2760(definition_name__2805, get__2783(env__2788, "module", "exports"))}
else
B2850 = false;
if ($T(B2850))
{
var value__2832 = B2753,
array__2831 = exp__2787;
array__2831[0] = value__2832;
var value__2834 = [B2855, identifier__2802, valueT__2804],
array__2833 = exp__2787;
array__2833[1] = value__2834;
var value__2836 = [B2855, [B2856, [B2777, "exports"], definition_name__2805], identifier__2802],
array__2835 = exp__2787;
array__2835[2] = value__2836}
else
{
var value__2838 = valueT__2804,
array__2837 = exp__2787;
array__2837[2] = value__2838};
return exp__2787}
else
{
var object2__2840 = "%define",
object1__2839 = B2778__2789,
B2851 = (object1__2839 === object2__2840);
if ($T(B2851))
{
var B2852 = B2857,
array__2841 = exp__2787,
B2853 = array__2841[ralphScoreCCdec(ralphScoreCCsize(array__2841), 1)],
B2854 = [B2853, false];
return [B2852, B2854]}
else
return map__2781(rcurry__2782(transform_statementsN__2786, env__2788), exp__2787)}}}}}}}}
else
return exp__2787}, false);
exports["transform-statements!"] = transform_statementsN__2785}
