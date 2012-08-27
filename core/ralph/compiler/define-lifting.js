var B2811 = require("ralph/core")
var B2813 = require("ralph/compiler/utilities")
{
var B2814 = B2811["%make-function"],
B2815,
B2816 = B2811.identity,
B2817 = B2814("lift_defines", function lift_defines__2818 (exp__2819, env__2820)
{return B2815(exp__2819, env__2820, B2816)}, false);
exports["lift-defines"] = B2817}
{
var B3014 = $S("%bind"),
B3015 = $S("%set"),
B3016 = $S("%method"),
B3017 = $S("%begin"),
B3018 = $S("%define"),
lift_define__2853,
B2843 = B2813["expression?"],
B2844 = B2811["binary=="],
B2845,
B2846 = B2811.concatenate,
B2847 = B2811["has?"],
B2848 = B2811.get,
B2849 = B2811["get-setter"],
B2850 = B2811["symbol-name"],
B2851,
B2852 = B2811.first;
B2815 = B2814("lift_define", function lift_define__2853 (exp__2854, env__2855, k__2856)
{B3019:while(true){
if ($T(B2843(exp__2854)))
{
var sequence__2916 = exp__2854,
B3005 = sequence__2916[0],
B2857 = B2850(B3005),
object1__2919 = B2857,
object2__2920 = "%bind",
B3006 = (object1__2919 === object2__2920);
if ($T(B3006))
{
var ____2858 = exp__2854[0],
B2859 = exp__2854[1],
var__2860 = B2859[0],
value__2861 = B2859[1],
body__2862 = exp__2854[2];
arguments = [value__2861, env__2855, (function B3020 (body__2862, k__2856, B3014, var__2860)
{return function B2863 (lvalue__2864, env__2865)
{return lift_define__2853(body__2862, env__2865, function B2866 (lbody__2867, env__2868)
{return k__2856([B3014, [var__2860, lvalue__2864], lbody__2867], env__2868)})}})(body__2862, k__2856, B3014, var__2860)];
exp__2854 = arguments[0];
env__2855 = arguments[1];
k__2856 = arguments[2];
continue B3019}
else
{
var object1__2923 = B2857,
object2__2924 = "%try",
B3007 = (object1__2923 === object2__2924);
if ($T(B3007))
{
var m__2869 = exp__2854[0],
e1__2870 = exp__2854[1],
v__2871 = exp__2854[2],
e2__2872 = exp__2854[3];
return B2845([e1__2870, e2__2872], env__2855, function B2873 (leT__2874, env__2875)
{
var le1__2876 = leT__2874[0],
le2__2877 = leT__2874[1];
return k__2856([m__2869, le1__2876, v__2871, le2__2877], env__2875)})}
else
{
var object1__2927 = B2857,
object2__2928 = "%set",
B3008 = (object1__2927 === object2__2928);
if ($T(B3008))
{
var ____2878 = exp__2854[0],
e1__2879 = exp__2854[1],
e2__2880 = exp__2854[2];
arguments = [e2__2880, env__2855, (function B3021 (k__2856, B3015, e1__2879)
{return function B2881 (le2__2882, env__2883)
{return k__2856([B3015, e1__2879, le2__2882], env__2883)}})(k__2856, B3015, e1__2879)];
exp__2854 = arguments[0];
env__2855 = arguments[1];
k__2856 = arguments[2];
continue B3019}
else
{
var object1__2931 = B2857,
object2__2932 = "%method",
B3009 = (object1__2931 === object2__2932);
if ($T(B3009))
{
var ____2884 = exp__2854[0],
name__2885 = exp__2854[1],
arguments__2886 = exp__2854[2],
body__2887 = exp__2854[3];
arguments = [body__2887, env__2855, (function B3022 (k__2856, B3016, name__2885, arguments__2886)
{return function B2888 (lbody__2889, env__2890)
{return k__2856([B3016, name__2885, arguments__2886, lbody__2889], env__2890)}})(k__2856, B3016, name__2885, arguments__2886)];
exp__2854 = arguments[0];
env__2855 = arguments[1];
k__2856 = arguments[2];
continue B3019}
else
{
var object1__2935 = B2857,
object2__2936 = "%begin",
B2891 = (object1__2935 === object2__2936),
B3010;
if ($T(B2891))
B3010 = B2891
else
{
var object1__2939 = B2857,
object2__2940 = "%if",
B2892 = (object1__2939 === object2__2940);
if ($T(B2892))
B3010 = B2892
else
{
var object1__2943 = B2857,
object2__2944 = "%while",
B2893 = (object1__2943 === object2__2944);
if ($T(B2893))
B3010 = B2893
else
{
var object1__2947 = B2857,
object2__2948 = "%array",
B2894 = (object1__2947 === object2__2948);
if ($T(B2894))
B3010 = B2894
else
{
var object1__2951 = B2857,
object2__2952 = "%object",
B2895 = (object1__2951 === object2__2952);
if ($T(B2895))
B3010 = B2895
else
{
var object1__2955 = B2857,
object2__2956 = "%get-property",
B2896 = (object1__2955 === object2__2956);
if ($T(B2896))
B3010 = B2896
else
{
var object1__2959 = B2857,
object2__2960 = "%infix",
B2897 = (object1__2959 === object2__2960);
if ($T(B2897))
B3010 = B2897
else
{
var object1__2963 = B2857,
object2__2964 = "%native",
B2898 = (object1__2963 === object2__2964);
if ($T(B2898))
B3010 = B2898
else
{
var object1__2967 = B2857,
object2__2968 = "%native-name",
B2899 = (object1__2967 === object2__2968);
if ($T(B2899))
B3010 = B2899
else
{
var object1__2971 = B2857,
object2__2972 = "%native-call",
B2900 = (object1__2971 === object2__2972);
if ($T(B2900))
B3010 = B2900
else
{
var object1__2975 = B2857,
object2__2976 = "%plus",
B2901 = (object1__2975 === object2__2976);
if ($T(B2901))
B3010 = B2901
else
{
var object1__2979 = B2857,
object2__2980 = "%minus",
B2902 = (object1__2979 === object2__2980);
if ($T(B2902))
B3010 = B2902
else
{
var object1__2983 = B2857,
object2__2984 = "%times",
B2903 = (object1__2983 === object2__2984);
if ($T(B2903))
B3010 = B2903
else
{
var object1__2987 = B2857,
object2__2988 = "%divide";
B3010 = (object1__2987 === object2__2988)}}}}}}}}}}}}};
if ($T(B3010))
{
var m__2904 = exp__2854[0],
eT__2905 = $SL.call(exp__2854, 1);
return B2845(eT__2905, env__2855, function B2906 (leT__2907, env__2908)
{return k__2856(B2846([m__2904], leT__2907), env__2908)})}
else
{
var object1__2991 = B2857,
object2__2992 = "%define",
B2909 = (object1__2991 === object2__2992),
B3011;
if ($T(B2909))
B3011 = B2909
else
{
var object1__2995 = B2857,
object2__2996 = "%symbol";
B3011 = (object1__2995 === object2__2996)};
if ($T(B3011))
return k__2856(exp__2854)
else
{
var object1__2999 = B2857,
object2__3000 = "define",
B3012 = (object1__2999 === object2__3000);
if ($T(B3012))
{
var ____2910 = exp__2854[0],
var__2911 = exp__2854[1],
value__2912 = exp__2854[2],
exportQ__2913 = exp__2854[3],
name__2914 = B2850(var__2911),
object__3003 = B2848(env__2855, "defined?"),
property__3004 = name__2914,
B3013 = $HP.call(object__3003,property__3004);
if ($T(B3013))
return k__2856([B3015, var__2911, value__2912], env__2855)
else
{
B2849(env__2855, "defined?", name__2914, true);
return [B3017, [B3018, var__2911], k__2856([B3015, var__2911, value__2912], env__2855)]}}
else
return B2851(exp__2854, env__2855, k__2856)}}}}}}}
else
return k__2856(exp__2854, env__2855);
break}}, false)}
{
var B3023 = B2811["empty?"];
B2845 = B2814("lift_defineT", function lift_defineT__3024 (expT__3025, env__3026, k__3027)
{
var sequence__3038 = expT__3025,
B3039 = sequence__3038,
B3040 = ((B3039 || false).length || 0),
B3041 = 0,
B3042 = (B3040 === B3041);
if ($T(B3042))
return k__3027([], env__3026)
else
return B2851(expT__3025, env__3026, k__3027)}, false)}
{
var B3045 = B2811.rest;
B2851 = B2814("lift_defineTT", function lift_defineTT__3046 (exp__3047, env__3048, k__3049)
{
var sequence__3057 = exp__3047,
B3060 = sequence__3057[0],
B3063 = function B3050 (t__3051, env__3052)
{
var sequence__3059 = exp__3047,
B3061 = sequence__3059.slice(1),
B3062 = function B3053 (tT__3054, env__3055)
{return k__3049(B2846([t__3051], tT__3054), env__3055)};
return B2845(B3061, env__3052, B3062)};
return B2815(B3060, env__3048, B3063)}, false)}
