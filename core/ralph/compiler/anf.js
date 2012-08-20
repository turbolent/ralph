var B3032 = require("ralph/core")
var B3034 = require("ralph/compiler/utilities")
var B3035 = B3032["%make-function"], B3036 = B3032["any?"], B3037 = B3032.curry, B3038 = B3032["instance?"], B3039 = B3032["<number>"], B3040 = B3032["<boolean>"], B3041 = B3032["<string>"], B3042 = B3032["<symbol>"], B3043 = B3032["<keyword>"], B3044 = B3035("atomicQ", function B3046 (expression__3045)
{return B3036(B3037(B3038, expression__3045), [B3039, B3040, B3041, B3042, B3043])}, false)
var trueQ = B3032["true?"], B3052 = B3032["<array>"], B3053 = B3032.not, B3054 = B3032["empty?"], B3055 = B3032["binary=="], B3056 = B3032.last, B3057 = B3032["symbol-name"], B3058 = B3032.first, B3059 = B3035("contains_statementsQ", function B3129 (exp__3060)
{var B3122;
if ($T(B3038(exp__3060, B3052)))
{var sequence__3077 = exp__3060, B3078 = sequence__3077, B3079 = ((B3078 || false).length || 0), B3080 = 0, value__3081 = (B3079 === B3080);
B3122 = !(trueQ(value__3081))}
else B3122 = false;
if ($T(B3122))
{var sequence__3083 = exp__3060, B3123 = sequence__3083[0], B3061 = B3057(B3123), object1__3086 = B3061, object2__3087 = "%begin", B3062 = (object1__3086 === object2__3087), B3124;
if ($T(B3062))
B3124 = B3062
else {var object1__3090 = B3061, object2__3091 = "%if", B3063 = (object1__3090 === object2__3091);
if ($T(B3063))
B3124 = B3063
else {var object1__3094 = B3061, object2__3095 = "%while", B3064 = (object1__3094 === object2__3095);
if ($T(B3064))
B3124 = B3064
else {var object1__3098 = B3061, object2__3099 = "%bind", B3065 = (object1__3098 === object2__3099);
if ($T(B3065))
B3124 = B3065
else {var object1__3102 = B3061, object2__3103 = "%try";
B3124 = (object1__3102 === object2__3103)}}}};
if ($T(B3124))
return true
else {var object1__3106 = B3061, object2__3107 = "%set", B3125 = (object1__3106 === object2__3107);
if ($T(B3125))
{var array__3115 = exp__3060, B3116 = array__3115, B3117 = ((B3116 || false).length || 0), B3126 = (B3117 - 1), B3127 = array__3115[B3126];
return B3059(B3127)}
else {var object1__3120 = B3061, object2__3121 = "%method", B3128 = (object1__3120 === object2__3121);
if ($T(B3128))
return false
else return B3036(B3059, exp__3060)}}}}, false)
{var B3130, B3131 = B3032.identity, B3132 = B3035("normalize_term", function B3134 (expression__3133)
{return B3130(expression__3133, B3131)}, false);
exports["normalize-term"] = B3132}
{var B3272 = $S("%method"), B3273 = $S("%begin"), B3274 = $S("%bind"), B3275 = $S("%if"), B3276 = $S("%while"), B3277 = $S("%native"), B3278 = $S("%try"), B3279 = $S("%set"), B3280 = $S("%array"), B3281 = $S("%object"), B3282 = $S("%get-property"), B3283 = $S("%infix"), B3284 = $S("%native-call"), B3285 = $S("%native-name"), B3286 = $S("%plus"), B3287 = $S("%minus"), B3288 = $S("%times"), B3289 = $S("%divide"), trueQ = B3032["true?"], B3138 = B3032.concatenate, B3139, B3140, B3141 = B3034["expression?"], B3142 = B3032["member?"], B3143 = B3032.map, B3144 = B3032.rest;
B3130 = B3035("normalize", function B3290 (exp__3145, k__3146)
{var B3252;
if ($T(B3038(exp__3145, B3052)))
{var sequence__3189 = exp__3145, B3190 = sequence__3189, B3191 = ((B3190 || false).length || 0), B3192 = 0, value__3193 = (B3191 === B3192);
B3252 = !(trueQ(value__3193))}
else B3252 = false;
if ($T(B3252))
{var sequence__3195 = exp__3145, B3253 = sequence__3195[0], B3147 = B3057(B3253), object1__3198 = B3147, object2__3199 = "%method", B3254 = (object1__3198 === object2__3199);
if ($T(B3254))
{var ____3148 = exp__3145[0], arguments__3149 = exp__3145[1], body__3150 = exp__3145[2];
return k__3146([B3272, arguments__3149, B3132(body__3150)])}
else {var object1__3202 = B3147, object2__3203 = "%begin", B3255 = (object1__3202 === object2__3203);
if ($T(B3255))
{var ____3151 = exp__3145[0], exp1__3152 = exp__3145[1], eT__3153 = $SL.call(exp__3145, 2), sequence__3214 = eT__3153, B3215 = sequence__3214, B3216 = ((B3215 || false).length || 0), B3217 = 0, B3256 = (B3216 === B3217);
if ($T(B3256))
return B3130(exp1__3152, k__3146)
else return B3130(exp1__3152, function B3291 (aexp1__3154)
{return [B3273, aexp1__3154, B3130(B3138([B3273], eT__3153), k__3146)]})}
else {var object1__3220 = B3147, object2__3221 = "%bind", B3257 = (object1__3220 === object2__3221);
if ($T(B3257))
{var ____3155 = exp__3145[0], B3156 = exp__3145[1], var__3157 = B3156[0], value__3158 = B3156[1], body__3159 = exp__3145[2];
return B3130(value__3158, function B3292 (avalue__3160)
{return [B3274, [var__3157, avalue__3160], B3130(body__3159, k__3146)]})}
else {var object1__3224 = B3147, object2__3225 = "%if", B3258 = (object1__3224 === object2__3225);
if ($T(B3258))
{var ____3161 = exp__3145[0], test__3162 = exp__3145[1], then__3163 = exp__3145[2], else__3164 = exp__3145[3];
return B3139(test__3162, function B3293 (atest__3165)
{return k__3146([B3275, atest__3165, B3132(then__3163), B3132(else__3164)])})}
else {var object1__3228 = B3147, object2__3229 = "%while", B3259 = (object1__3228 === object2__3229);
if ($T(B3259))
{var ____3166 = exp__3145[0], test__3167 = exp__3145[1], body__3168 = exp__3145[2], B3260;
if ($T(B3059(test__3167)))
B3260 = [B3276, true, [B3273, B3132([B3275, test__3167, B3132(body__3168), [B3277, "break"], false])]]
else B3260 = [B3276, B3132(test__3167), B3132(body__3168)];
return k__3146(B3260)}
else {var object1__3232 = B3147, object2__3233 = "%try", B3261 = (object1__3232 === object2__3233);
if ($T(B3261))
{var ____3169 = exp__3145[0], body__3170 = exp__3145[1], var__3171 = exp__3145[2], catch__3172 = exp__3145[3];
return k__3146([B3278, B3132(body__3170), var__3171, B3132(catch__3172)])}
else {var object1__3236 = B3147, object2__3237 = "%set", B3262 = (object1__3236 === object2__3237);
if ($T(B3262))
{var ____3173 = exp__3145[0], var__3174 = exp__3145[1], value__3175 = exp__3145[2];
return B3139(value__3175, function B3294 (avalue__3176)
{return k__3146([B3279, var__3174, avalue__3176])})}
else {var object1__3240 = B3147, object2__3241 = "%define", B3177 = (object1__3240 === object2__3241), B3263;
if ($T(B3177))
B3263 = B3177
else {var object1__3244 = B3147, object2__3245 = "%symbol";
B3263 = (object1__3244 === object2__3245)};
if ($T(B3263))
return k__3146(exp__3145)
else if ($T(B3059(exp__3145)))
return B3140(exp__3145, k__3146)
else {var B3266;
if ($T(B3141(exp__3145)))
{var sequence__3247 = exp__3145, B3264 = sequence__3247[0], B3265 = [B3280, B3281, B3282, B3283, B3277, B3284, B3285, B3286, B3287, B3288, B3289];
B3266 = B3142(B3264, B3265)}
else B3266 = false;
if ($T(B3266))
{var sequence__3249 = exp__3145, B3267 = sequence__3249[0], B3268 = [B3267], sequence__3251 = exp__3145, B3269 = sequence__3251.slice(1), B3270 = B3143(B3132, B3269), B3271 = B3138(B3268, B3270);
return k__3146(B3271)}
else return k__3146(B3143(B3132, exp__3145))}}}}}}}}}
else return k__3146(exp__3145)}, false)}
{var B3295;
B3139 = B3035("normalize_value", function B3299 (exp__3296, k__3297)
{if ($T(B3059(exp__3296)))
return B3295(exp__3296, k__3297)
else {var B3298;
if ($T(B3038(exp__3296, B3052)))
B3298 = B3143(B3132, exp__3296)
else B3298 = exp__3296;
return k__3297(B3298)}}, false)}
{var B3300 = B3034["generate-symbol"];
B3295 = B3035("normalizeT", function B3305 (exp__3301, k__3302)
{return B3130(exp__3301, function B3306 (aexp__3303)
{if ($T(B3044(aexp__3303)))
return k__3302(aexp__3303)
else {var t__3304 = B3300();
return [B3274, [t__3304, aexp__3303], k__3302(t__3304)]}})}, false)}
var B3307 = B3035("normalizeTT", function B3325 (expT__3308, k__3309)
{var sequence__3320 = expT__3308, B3321 = sequence__3320, B3322 = ((B3321 || false).length || 0), B3323 = 0, B3324 = (B3322 === B3323);
if ($T(B3324))
return k__3309([])
else return B3140(expT__3308, k__3309)}, false)
B3140 = B3035("normalize_all", function B3338 (exp__3326, k__3327)
{var sequence__3331 = exp__3326, B3334 = sequence__3331[0], B3337 = function B3339 (t__3328)
{var sequence__3333 = exp__3326, B3335 = sequence__3333.slice(1), B3336 = function B3340 (tT__3329)
{return k__3327(B3138([t__3328], tT__3329))};
return B3307(B3335, B3336)};
return B3295(B3334, B3337)}, false)
