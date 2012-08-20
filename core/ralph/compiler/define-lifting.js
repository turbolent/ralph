var B2796 = require("ralph/core")
var B2798 = require("ralph/compiler/utilities")
{var B2799 = B2796["%make-function"], B2800, B2801 = B2796.identity, B2802 = B2799("lift_defines", function B2805 (exp__2803, env__2804)
{return B2800(exp__2803, env__2804, B2801)}, false);
exports["lift-defines"] = B2802}
{var B2981 = $S("%bind"), B2982 = $S("%set"), B2983 = $S("%begin"), B2984 = $S("%define"), B2823 = B2798["expression?"], B2824 = B2796["binary=="], B2825, B2826 = B2796.concatenate, B2827 = B2796["has?"], B2828 = B2796.get, B2829 = B2796["get-setter"], B2830 = B2796["symbol-name"], B2831, B2832 = B2796.first;
B2800 = B2799("lift_define", function B2985 (exp__2833, env__2834, k__2835)
{if ($T(B2823(exp__2833)))
{var sequence__2884 = exp__2833, B2973 = sequence__2884[0], B2836 = B2830(B2973), object1__2887 = B2836, object2__2888 = "%bind", B2974 = (object1__2887 === object2__2888);
if ($T(B2974))
{var ____2837 = exp__2833[0], B2838 = exp__2833[1], var__2839 = B2838[0], value__2840 = B2838[1], body__2841 = exp__2833[2];
return B2800(value__2840, env__2834, function B2986 (lvalue__2842, env__2843)
{return B2800(body__2841, env__2843, function B2987 (lbody__2844, env__2845)
{return k__2835([B2981, [var__2839, lvalue__2842], lbody__2844], env__2845)})})}
else {var object1__2891 = B2836, object2__2892 = "%try", B2975 = (object1__2891 === object2__2892);
if ($T(B2975))
{var m__2846 = exp__2833[0], e1__2847 = exp__2833[1], v__2848 = exp__2833[2], e2__2849 = exp__2833[3];
return B2825([e1__2847, e2__2849], env__2834, function B2988 (leT__2850, env__2851)
{var le1__2852 = leT__2850[0], le2__2853 = leT__2850[1];
return k__2835([m__2846, le1__2852, v__2848, le2__2853], env__2851)})}
else {var object1__2895 = B2836, object2__2896 = "%method", B2854 = (object1__2895 === object2__2896), B2976;
if ($T(B2854))
B2976 = B2854
else {var object1__2899 = B2836, object2__2900 = "%set";
B2976 = (object1__2899 === object2__2900)};
if ($T(B2976))
{var m__2855 = exp__2833[0], e1__2856 = exp__2833[1], e2__2857 = exp__2833[2];
return B2800(e2__2857, env__2834, function B2989 (le2__2858, env__2859)
{return k__2835([m__2855, e1__2856, le2__2858], env__2859)})}
else {var object1__2903 = B2836, object2__2904 = "%begin", B2860 = (object1__2903 === object2__2904), B2977;
if ($T(B2860))
B2977 = B2860
else {var object1__2907 = B2836, object2__2908 = "%if", B2861 = (object1__2907 === object2__2908);
if ($T(B2861))
B2977 = B2861
else {var object1__2911 = B2836, object2__2912 = "%while", B2862 = (object1__2911 === object2__2912);
if ($T(B2862))
B2977 = B2862
else {var object1__2915 = B2836, object2__2916 = "%array", B2863 = (object1__2915 === object2__2916);
if ($T(B2863))
B2977 = B2863
else {var object1__2919 = B2836, object2__2920 = "%object", B2864 = (object1__2919 === object2__2920);
if ($T(B2864))
B2977 = B2864
else {var object1__2923 = B2836, object2__2924 = "%get-property", B2865 = (object1__2923 === object2__2924);
if ($T(B2865))
B2977 = B2865
else {var object1__2927 = B2836, object2__2928 = "%infix", B2866 = (object1__2927 === object2__2928);
if ($T(B2866))
B2977 = B2866
else {var object1__2931 = B2836, object2__2932 = "%native", B2867 = (object1__2931 === object2__2932);
if ($T(B2867))
B2977 = B2867
else {var object1__2935 = B2836, object2__2936 = "%native-name", B2868 = (object1__2935 === object2__2936);
if ($T(B2868))
B2977 = B2868
else {var object1__2939 = B2836, object2__2940 = "%native-call", B2869 = (object1__2939 === object2__2940);
if ($T(B2869))
B2977 = B2869
else {var object1__2943 = B2836, object2__2944 = "%plus", B2870 = (object1__2943 === object2__2944);
if ($T(B2870))
B2977 = B2870
else {var object1__2947 = B2836, object2__2948 = "%minus", B2871 = (object1__2947 === object2__2948);
if ($T(B2871))
B2977 = B2871
else {var object1__2951 = B2836, object2__2952 = "%times", B2872 = (object1__2951 === object2__2952);
if ($T(B2872))
B2977 = B2872
else {var object1__2955 = B2836, object2__2956 = "%divide";
B2977 = (object1__2955 === object2__2956)}}}}}}}}}}}}};
if ($T(B2977))
{var m__2873 = exp__2833[0], eT__2874 = $SL.call(exp__2833, 1);
return B2825(eT__2874, env__2834, function B2990 (leT__2875, env__2876)
{return k__2835(B2826([m__2873], leT__2875), env__2876)})}
else {var object1__2959 = B2836, object2__2960 = "%define", B2877 = (object1__2959 === object2__2960), B2978;
if ($T(B2877))
B2978 = B2877
else {var object1__2963 = B2836, object2__2964 = "%symbol";
B2978 = (object1__2963 === object2__2964)};
if ($T(B2978))
return k__2835(exp__2833)
else {var object1__2967 = B2836, object2__2968 = "define", B2979 = (object1__2967 === object2__2968);
if ($T(B2979))
{var ____2878 = exp__2833[0], var__2879 = exp__2833[1], value__2880 = exp__2833[2], exportQ__2881 = exp__2833[3], name__2882 = B2830(var__2879), object__2971 = B2828(env__2834, "defined?"), property__2972 = name__2882, B2980 = $HP.call(object__2971,property__2972);
if ($T(B2980))
return k__2835([B2982, var__2879, value__2880], env__2834)
else {B2829(env__2834, "defined?", name__2882, true);
return [B2983, [B2984, var__2879], k__2835([B2982, var__2879, value__2880], env__2834)]}}
else return B2831(exp__2833, env__2834, k__2835)}}}}}}
else return k__2835(exp__2833, env__2834)}, false)}
{var B2991 = B2796["empty?"];
B2825 = B2799("lift_defineT", function B3010 (expT__2992, env__2993, k__2994)
{var sequence__3005 = expT__2992, B3006 = sequence__3005, B3007 = ((B3006 || false).length || 0), B3008 = 0, B3009 = (B3007 === B3008);
if ($T(B3009))
return k__2994([], env__2993)
else return B2831(expT__2992, env__2993, k__2994)}, false)}
{var B3011 = B2796.rest;
B2831 = B2799("lift_defineTT", function B3027 (exp__3012, env__3013, k__3014)
{var sequence__3020 = exp__3012, B3023 = sequence__3020[0], B3026 = function B3028 (t__3015, env__3016)
{var sequence__3022 = exp__3012, B3024 = sequence__3022.slice(1), B3025 = function B3029 (tT__3017, env__3018)
{return k__3014(B2826([t__3015], tT__3017), env__3018)};
return B2825(B3024, env__3016, B3025)};
return B2800(B3023, env__3013, B3026)}, false)}
