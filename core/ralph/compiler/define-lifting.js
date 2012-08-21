var B2805 = require("ralph/core")
var B2807 = require("ralph/compiler/utilities")
{
var B2808 = B2805["%make-function"],
B2809,
B2810 = B2805.identity,
B2811 = B2808("lift_defines", function lift_defines__2812 (exp__2813, env__2814)
{return B2809(exp__2813, env__2814, B2810)}, false);
exports["lift-defines"] = B2811}
{
var B3008 = $S("%bind"),
B3009 = $S("%set"),
B3010 = $S("%method"),
B3011 = $S("%begin"),
B3012 = $S("%define"),
lift_define__2847,
B2837 = B2807["expression?"],
B2838 = B2805["binary=="],
B2839,
B2840 = B2805.concatenate,
B2841 = B2805["has?"],
B2842 = B2805.get,
B2843 = B2805["get-setter"],
B2844 = B2805["symbol-name"],
B2845,
B2846 = B2805.first;
B2809 = B2808("lift_define", function lift_define__2847 (exp__2848, env__2849, k__2850)
{B3013:while(true){
if ($T(B2837(exp__2848)))
{
var sequence__2910 = exp__2848,
B2999 = sequence__2910[0],
B2851 = B2844(B2999),
object1__2913 = B2851,
object2__2914 = "%bind",
B3000 = (object1__2913 === object2__2914);
if ($T(B3000))
{
var ____2852 = exp__2848[0],
B2853 = exp__2848[1],
var__2854 = B2853[0],
value__2855 = B2853[1],
body__2856 = exp__2848[2];
arguments = [value__2855, env__2849, (function B3014 (body__2856, k__2850, B3008, var__2854)
{return function B2857 (lvalue__2858, env__2859)
{return lift_define__2847(body__2856, env__2859, function B2860 (lbody__2861, env__2862)
{return k__2850([B3008, [var__2854, lvalue__2858], lbody__2861], env__2862)})}})(body__2856, k__2850, B3008, var__2854)];
exp__2848 = arguments[0];
env__2849 = arguments[1];
k__2850 = arguments[2];
continue B3013}
else
{
var object1__2917 = B2851,
object2__2918 = "%try",
B3001 = (object1__2917 === object2__2918);
if ($T(B3001))
{
var m__2863 = exp__2848[0],
e1__2864 = exp__2848[1],
v__2865 = exp__2848[2],
e2__2866 = exp__2848[3];
return B2839([e1__2864, e2__2866], env__2849, function B2867 (leT__2868, env__2869)
{
var le1__2870 = leT__2868[0],
le2__2871 = leT__2868[1];
return k__2850([m__2863, le1__2870, v__2865, le2__2871], env__2869)})}
else
{
var object1__2921 = B2851,
object2__2922 = "%set",
B3002 = (object1__2921 === object2__2922);
if ($T(B3002))
{
var ____2872 = exp__2848[0],
e1__2873 = exp__2848[1],
e2__2874 = exp__2848[2];
arguments = [e2__2874, env__2849, (function B3015 (k__2850, B3009, e1__2873)
{return function B2875 (le2__2876, env__2877)
{return k__2850([B3009, e1__2873, le2__2876], env__2877)}})(k__2850, B3009, e1__2873)];
exp__2848 = arguments[0];
env__2849 = arguments[1];
k__2850 = arguments[2];
continue B3013}
else
{
var object1__2925 = B2851,
object2__2926 = "%method",
B3003 = (object1__2925 === object2__2926);
if ($T(B3003))
{
var ____2878 = exp__2848[0],
name__2879 = exp__2848[1],
arguments__2880 = exp__2848[2],
body__2881 = exp__2848[3];
arguments = [body__2881, env__2849, (function B3016 (k__2850, B3010, name__2879, arguments__2880)
{return function B2882 (lbody__2883, env__2884)
{return k__2850([B3010, name__2879, arguments__2880, lbody__2883], env__2884)}})(k__2850, B3010, name__2879, arguments__2880)];
exp__2848 = arguments[0];
env__2849 = arguments[1];
k__2850 = arguments[2];
continue B3013}
else
{
var object1__2929 = B2851,
object2__2930 = "%begin",
B2885 = (object1__2929 === object2__2930),
B3004;
if ($T(B2885))
B3004 = B2885
else
{
var object1__2933 = B2851,
object2__2934 = "%if",
B2886 = (object1__2933 === object2__2934);
if ($T(B2886))
B3004 = B2886
else
{
var object1__2937 = B2851,
object2__2938 = "%while",
B2887 = (object1__2937 === object2__2938);
if ($T(B2887))
B3004 = B2887
else
{
var object1__2941 = B2851,
object2__2942 = "%array",
B2888 = (object1__2941 === object2__2942);
if ($T(B2888))
B3004 = B2888
else
{
var object1__2945 = B2851,
object2__2946 = "%object",
B2889 = (object1__2945 === object2__2946);
if ($T(B2889))
B3004 = B2889
else
{
var object1__2949 = B2851,
object2__2950 = "%get-property",
B2890 = (object1__2949 === object2__2950);
if ($T(B2890))
B3004 = B2890
else
{
var object1__2953 = B2851,
object2__2954 = "%infix",
B2891 = (object1__2953 === object2__2954);
if ($T(B2891))
B3004 = B2891
else
{
var object1__2957 = B2851,
object2__2958 = "%native",
B2892 = (object1__2957 === object2__2958);
if ($T(B2892))
B3004 = B2892
else
{
var object1__2961 = B2851,
object2__2962 = "%native-name",
B2893 = (object1__2961 === object2__2962);
if ($T(B2893))
B3004 = B2893
else
{
var object1__2965 = B2851,
object2__2966 = "%native-call",
B2894 = (object1__2965 === object2__2966);
if ($T(B2894))
B3004 = B2894
else
{
var object1__2969 = B2851,
object2__2970 = "%plus",
B2895 = (object1__2969 === object2__2970);
if ($T(B2895))
B3004 = B2895
else
{
var object1__2973 = B2851,
object2__2974 = "%minus",
B2896 = (object1__2973 === object2__2974);
if ($T(B2896))
B3004 = B2896
else
{
var object1__2977 = B2851,
object2__2978 = "%times",
B2897 = (object1__2977 === object2__2978);
if ($T(B2897))
B3004 = B2897
else
{
var object1__2981 = B2851,
object2__2982 = "%divide";
B3004 = (object1__2981 === object2__2982)}}}}}}}}}}}}};
if ($T(B3004))
{
var m__2898 = exp__2848[0],
eT__2899 = $SL.call(exp__2848, 1);
return B2839(eT__2899, env__2849, function B2900 (leT__2901, env__2902)
{return k__2850(B2840([m__2898], leT__2901), env__2902)})}
else
{
var object1__2985 = B2851,
object2__2986 = "%define",
B2903 = (object1__2985 === object2__2986),
B3005;
if ($T(B2903))
B3005 = B2903
else
{
var object1__2989 = B2851,
object2__2990 = "%symbol";
B3005 = (object1__2989 === object2__2990)};
if ($T(B3005))
return k__2850(exp__2848)
else
{
var object1__2993 = B2851,
object2__2994 = "define",
B3006 = (object1__2993 === object2__2994);
if ($T(B3006))
{
var ____2904 = exp__2848[0],
var__2905 = exp__2848[1],
value__2906 = exp__2848[2],
exportQ__2907 = exp__2848[3],
name__2908 = B2844(var__2905),
object__2997 = B2842(env__2849, "defined?"),
property__2998 = name__2908,
B3007 = $HP.call(object__2997,property__2998);
if ($T(B3007))
return k__2850([B3009, var__2905, value__2906], env__2849)
else
{
B2843(env__2849, "defined?", name__2908, true);
return [B3011, [B3012, var__2905], k__2850([B3009, var__2905, value__2906], env__2849)]}}
else
return B2845(exp__2848, env__2849, k__2850)}}}}}}}
else
return k__2850(exp__2848, env__2849);
break}}, false)}
{
var B3017 = B2805["empty?"];
B2839 = B2808("lift_defineT", function lift_defineT__3018 (expT__3019, env__3020, k__3021)
{
var sequence__3032 = expT__3019,
B3033 = sequence__3032,
B3034 = ((B3033 || false).length || 0),
B3035 = 0,
B3036 = (B3034 === B3035);
if ($T(B3036))
return k__3021([], env__3020)
else
return B2845(expT__3019, env__3020, k__3021)}, false)}
{
var B3039 = B2805.rest;
B2845 = B2808("lift_defineTT", function lift_defineTT__3040 (exp__3041, env__3042, k__3043)
{
var sequence__3051 = exp__3041,
B3054 = sequence__3051[0],
B3057 = function B3044 (t__3045, env__3046)
{
var sequence__3053 = exp__3041,
B3055 = sequence__3053.slice(1),
B3056 = function B3047 (tT__3048, env__3049)
{return k__3043(B2840([t__3045], tT__3048), env__3049)};
return B2839(B3055, env__3046, B3056)};
return B2809(B3054, env__3042, B3057)}, false)}
