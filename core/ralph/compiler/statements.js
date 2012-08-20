var B2900 = require("ralph/core")
var B2902 = require("ralph/compiler/utilities")
var B2989 = $S("%begin"), dec = B2900.dec, size = B2900.size, B2905 = B2900["%make-function"], B2906 = B2900["instance?"], B2907 = B2900["<array>"], B2908 = B2900["=="], B2909 = B2900["last-setter"], B2910 = B2900.last, B2911 = B2900["third-setter"], B2912 = B2900.third, B2913 = B2900["second-setter"], B2914 = B2900.second, B2915 = B2900.concatenate, B2916 = B2900["symbol-name"], B2917 = B2900.first, B2918 = B2905("wrap_valueN", function B2990 (exp__2919, wrapper__2920)
{if ($T(B2906(exp__2919, B2907)))
{var sequence__2924 = exp__2919, B2979 = sequence__2924[0], B2921 = B2916(B2979), B2922 = B2908(B2921, "%begin"), B2980;
if ($T(B2922))
B2980 = B2922
else B2980 = B2908(B2921, "%bind");
if ($T(B2980))
{var array__2937 = exp__2919, array__2934 = exp__2919, B2935 = array__2934, B2936 = ((B2935 || false).length || 0), B2981 = (B2936 - 1), B2982 = array__2934[B2981], value__2938 = B2918(B2982, wrapper__2920);
array__2937[dec(size(array__2937), 1)] = value__2938;
return exp__2919}
else if ($T(B2908(B2921, "%if")))
{var array__2943 = exp__2919, sequence__2942 = exp__2919, B2983 = sequence__2942[2], value__2944 = B2918(B2983, wrapper__2920);
array__2943[2] = value__2944;
var array__2957 = exp__2919, array__2954 = exp__2919, B2955 = array__2954, B2956 = ((B2955 || false).length || 0), B2984 = (B2956 - 1), B2985 = array__2954[B2984], value__2958 = B2918(B2985, wrapper__2920);
array__2957[dec(size(array__2957), 1)] = value__2958;
return exp__2919}
else if ($T(B2908(B2921, "%while")))
return [B2989, exp__2919, B2918(false, wrapper__2920)]
else if ($T(B2908(B2921, "%try")))
{var array__2963 = exp__2919, sequence__2962 = exp__2919, B2986 = sequence__2962[1], value__2964 = B2918(B2986, wrapper__2920);
array__2963[1] = value__2964;
var array__2977 = exp__2919, array__2974 = exp__2919, B2975 = array__2974, B2976 = ((B2975 || false).length || 0), B2987 = (B2976 - 1), B2988 = array__2974[B2987], value__2978 = B2918(B2988, wrapper__2920);
array__2977[dec(size(array__2977), 1)] = value__2978;
return exp__2919}
else return B2915(wrapper__2920, [exp__2919])}
else return B2915(wrapper__2920, [exp__2919])}, false)
var B2993 = $S("%return"), B2991 = B2905("add_explicit_return", function B2994 (exp__2992)
{return B2918(exp__2992, [B2993])}, false)
var B3021 = $S("%if"), B3022 = $S("%while"), B3023 = $S("%bind"), B3024 = $S("%try"), trueQ = B2900["true?"], B2995 = B2900.not, B2996 = B2900["empty?"], B2997 = B2900["member?"], B2998 = B2905("statementQ", function B3025 (exp__2999)
{if ($T(B2906(exp__2999, B2907)))
{var sequence__3011 = exp__2999, B3012 = sequence__3011, B3013 = ((B3012 || false).length || 0), B3014 = 0, value__3015 = (B3013 === B3014), B3018 = !(trueQ(value__3015));
if ($T(B3018))
{var sequence__3017 = exp__2999, B3019 = sequence__3017[0], B3020 = [B3021, B3022, B2989, B3023, B3024];
return B2997(B3019, B3020)}}}, false)
var B3028 = $S("%native"), B3026 = B2905("add_explicit_true", function B3029 (exp__3027)
{return [[B3028, "$T"], exp__3027]}, false)
{var B3145 = $S("%set"), B3146 = $S("%get-property"), B3147 = $S("%var"), dec = B2900.dec, size = B2900.size, B3032 = B2902["maybe-begin"], B3033 = B2900.map, B3034 = B2900.rcurry, B3035 = B2900.get, B3036 = B2900["first-setter"], B3037 = B2905("transform_statementsN", function B3148 (exp__3038, env__3039)
{if ($T(B2906(exp__3038, B2907)))
{var sequence__3058 = exp__3038, B3131 = sequence__3058[0], B3040 = B2916(B3131);
if ($T(B2908(B3040, "%method")))
{var array__3071 = exp__3038, array__3068 = exp__3038, B3069 = array__3068, B3070 = ((B3069 || false).length || 0), B3132 = (B3070 - 1), B3133 = array__3068[B3132], B3134 = B3037(B3133, env__3039), value__3072 = B2991(B3134);
array__3071[dec(size(array__3071), 1)] = value__3072;
return exp__3038}
else if ($T(B2908(B3040, "%begin")))
{var ____3041 = exp__3038[0], exps__3042 = $SL.call(exp__3038, 1);
return B3032(B3033(B3034(B3037, env__3039), exps__3042))}
else if ($T(B2908(B3040, "%bind")))
{var ____3043 = exp__3038[0], B3044 = exp__3038[1], var__3045 = B3044[0], value__3046 = B3044[1], body__3047 = exp__3038[2];
if ($T(B2998(value__3046)))
return [B3023, [var__3045, false], [B2989, B2918(B3037(value__3046, env__3039), [B3145, var__3045]), B3037(body__3047, env__3039)]]
else return [B3023, [var__3045, B3037(value__3046, env__3039)], B3037(body__3047, env__3039)]}
else if ($T(B2908(B3040, "%if")))
{var ____3048 = exp__3038[0], test__3049 = exp__3038[1], then__3050 = exp__3038[2], else__3051 = exp__3038[3];
return [B3021, B3026(test__3049), B3037(then__3050, env__3039), B3037(else__3051, env__3039)]}
else if ($T(B2908(B3040, "%while")))
{var array__3077 = exp__3038, sequence__3076 = exp__3038, B3135 = sequence__3076[1], value__3078 = B3026(B3135);
array__3077[1] = value__3078;
var array__3083 = exp__3038, sequence__3082 = exp__3038, B3136 = sequence__3082[2], value__3084 = B3037(B3136, env__3039);
array__3083[2] = value__3084;
return exp__3038}
else if ($T(B2908(B3040, "%try")))
{var array__3089 = exp__3038, sequence__3088 = exp__3038, B3137 = sequence__3088[1], value__3090 = B3037(B3137, exp__3038);
array__3089[1] = value__3090;
var array__3103 = exp__3038, array__3100 = exp__3038, B3101 = array__3100, B3102 = ((B3101 || false).length || 0), B3138 = (B3102 - 1), B3139 = array__3100[B3138], value__3104 = B3037(B3139, env__3039);
array__3103[dec(size(array__3103), 1)] = value__3104;
return exp__3038}
else if ($T(B2908(B3040, "%set")))
{var ____3052 = exp__3038[0], identifier__3053 = exp__3038[1], value__3054 = exp__3038[2], valueT__3055 = B3037(value__3054, env__3039), definition_name__3056 = B3035(env__3039, "definition-names", B2916(identifier__3053)), B3140;
if ($T(definition_name__3056))
B3140 = B2997(definition_name__3056, B3035(env__3039, "module", "exports"))
else B3140 = false;
if ($T(B3140))
{var array__3107 = exp__3038, value__3108 = B2989;
array__3107[0] = value__3108;
var array__3111 = exp__3038, value__3112 = [B3145, identifier__3053, valueT__3055];
array__3111[1] = value__3112;
var array__3115 = exp__3038, value__3116 = [B3145, [B3146, [B3028, "exports"], definition_name__3056], identifier__3053];
array__3115[2] = value__3116}
else {var array__3119 = exp__3038, value__3120 = valueT__3055;
array__3119[2] = value__3120};
return exp__3038}
else if ($T(B2908(B3040, "%define")))
{var B3141 = B3147, array__3128 = exp__3038, B3129 = array__3128, B3130 = ((B3129 || false).length || 0), B3142 = (B3130 - 1), B3143 = array__3128[B3142], B3144 = [B3143, false];
return [B3141, B3144]}
else return B3033(B3034(B3037, env__3039), exp__3038)}
else return exp__3038}, false);
exports["transform-statements!"] = B3037}
