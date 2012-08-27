var B3066 = require("ralph/core")
var B3068 = require("ralph/compiler/utilities")
{
var B3296 = $S("%define"),
trueQ = B3066["true?"],
find_free_variables__3108,
B3087 = B3066["%make-function"],
B3088 = B3066["instance?"],
B3089 = B3066["<array>"],
B3090 = B3066.not,
B3091 = B3066["empty?"],
B3092 = B3066["binary=="],
B3093 = B3066["set-subtract!"],
B3094 = B3066["as-set"],
B3095 = B3066["set-union!"],
B3096 = B3066.reduce,
B3097 = B3066.concatenate,
B3098 = B3068["expression?"],
B3099 = B3066.first,
B3100 = B3066["push-last"],
B3101 = B3066.second,
B3102 = B3066.rest,
B3103 = B3066.map,
B3104 = B3066.reduce1,
B3105 = B3066["<symbol>"],
B3106 = B3066["symbol-name"],
B3107 = B3087("find_free_variables", function find_free_variables__3108 (exp__3109)
{
var B3275;
if ($T(B3088(exp__3109, B3089)))
{
var sequence__3156 = exp__3109,
B3157 = sequence__3156,
B3158 = ((B3157 || false).length || 0),
B3159 = 0,
value__3160 = (B3158 === B3159);
B3275 = !(trueQ(value__3160))}
else
B3275 = false;
if ($T(B3275))
{
var sequence__3162 = exp__3109,
head__3110 = sequence__3162[0],
name__3111;
if ($T(B3088(head__3110, B3105)))
name__3111 = B3106(head__3110)
else
name__3111 = false;
var B3112 = name__3111,
object1__3165 = B3112,
object2__3166 = "%method",
B3276 = (object1__3165 === object2__3166);
if ($T(B3276))
{
var ____3113 = exp__3109[0],
name__3114 = exp__3109[1],
arguments__3115 = exp__3109[2],
body__3116 = exp__3109[3];
return B3093(find_free_variables__3108(body__3116), B3094(arguments__3115))}
else
{
var object1__3169 = B3112,
object2__3170 = "%bind",
B3277 = (object1__3169 === object2__3170);
if ($T(B3277))
{
var ____3117 = exp__3109[0],
B3118 = exp__3109[1],
var__3119 = B3118[0],
value__3120 = B3118[1],
body__3121 = exp__3109[2];
return B3095(B3093(find_free_variables__3108(body__3121), B3094([var__3119])), find_free_variables__3108(value__3120))}
else
{
var object1__3173 = B3112,
object2__3174 = "%begin",
B3278 = (object1__3173 === object2__3174);
if ($T(B3278))
{
var definitions__3122 = [],
B3281 = function B3123 (result__3124, e__3125)
{
var B3279;
if ($T(B3098(e__3125)))
{
var sequence__3178 = e__3125,
object1__3179 = sequence__3178[0],
object2__3180 = B3296;
B3279 = (object1__3179 === object2__3180)}
else
B3279 = false;
var B3280;
if ($T(B3279))
{
var array__3185 = definitions__3122,
sequence__3184 = e__3125,
value__3186 = sequence__3184[1];
array__3185.push(value__3186);
array__3185;
B3280 = []}
else
B3280 = find_free_variables__3108(e__3125);
return B3097(result__3124, B3280)},
B3282 = [],
sequence__3188 = exp__3109,
B3283 = sequence__3188.slice(1),
B3284 = B3096(B3281, B3282, B3283),
B3285 = B3094(B3284),
B3286 = B3094(definitions__3122);
return B3093(B3285, B3286)}
else
{
var object1__3191 = B3112,
object2__3192 = "%try",
B3287 = (object1__3191 === object2__3192);
if ($T(B3287))
{
var ____3126 = exp__3109[0],
e1__3127 = exp__3109[1],
v__3128 = exp__3109[2],
e2__3129 = exp__3109[3];
return B3093(B3095(B3094(find_free_variables__3108(e1__3127)), B3094(find_free_variables__3108(e2__3129))), B3094([v__3128]))}
else
{
var object1__3195 = B3112,
object2__3196 = "%set",
B3130 = (object1__3195 === object2__3196),
B3288;
if ($T(B3130))
B3288 = B3130
else
{
var object1__3199 = B3112,
object2__3200 = "%if",
B3131 = (object1__3199 === object2__3200);
if ($T(B3131))
B3288 = B3131
else
{
var object1__3203 = B3112,
object2__3204 = "%while",
B3132 = (object1__3203 === object2__3204);
if ($T(B3132))
B3288 = B3132
else
{
var object1__3207 = B3112,
object2__3208 = "%array",
B3133 = (object1__3207 === object2__3208);
if ($T(B3133))
B3288 = B3133
else
{
var object1__3211 = B3112,
object2__3212 = "%object",
B3134 = (object1__3211 === object2__3212);
if ($T(B3134))
B3288 = B3134
else
{
var object1__3215 = B3112,
object2__3216 = "%infix",
B3135 = (object1__3215 === object2__3216);
if ($T(B3135))
B3288 = B3135
else
{
var object1__3219 = B3112,
object2__3220 = "%get-property",
B3136 = (object1__3219 === object2__3220);
if ($T(B3136))
B3288 = B3136
else
{
var object1__3223 = B3112,
object2__3224 = "%native-call",
B3137 = (object1__3223 === object2__3224);
if ($T(B3137))
B3288 = B3137
else
{
var object1__3227 = B3112,
object2__3228 = "%return",
B3138 = (object1__3227 === object2__3228);
if ($T(B3138))
B3288 = B3138
else
{
var object1__3231 = B3112,
object2__3232 = "%plus",
B3139 = (object1__3231 === object2__3232);
if ($T(B3139))
B3288 = B3139
else
{
var object1__3235 = B3112,
object2__3236 = "%minus",
B3140 = (object1__3235 === object2__3236);
if ($T(B3140))
B3288 = B3140
else
{
var object1__3239 = B3112,
object2__3240 = "%times",
B3141 = (object1__3239 === object2__3240);
if ($T(B3141))
B3288 = B3141
else
{
var object1__3243 = B3112,
object2__3244 = "%divide";
B3288 = (object1__3243 === object2__3244)}}}}}}}}}}}};
if ($T(B3288))
{
var B3289 = [],
sequence__3246 = exp__3109,
B3290 = sequence__3246.slice(1),
B3291 = B3103(find_free_variables__3108, B3290),
B3292 = B3096(B3097, B3289, B3291);
return B3094(B3292)}
else
{
var object1__3249 = B3112,
object2__3250 = "%native",
B3142 = (object1__3249 === object2__3250),
B3293;
if ($T(B3142))
B3293 = B3142
else
{
var object1__3253 = B3112,
object2__3254 = "%native-name",
B3143 = (object1__3253 === object2__3254);
if ($T(B3143))
B3293 = B3143
else
{
var object1__3257 = B3112,
object2__3258 = "%define",
B3144 = (object1__3257 === object2__3258);
if ($T(B3144))
B3293 = B3144
else
{
var object1__3261 = B3112,
object2__3262 = "%symbol";
B3293 = (object1__3261 === object2__3262)}}};
if ($T(B3293))
return B3094([])
else
{
var function__3271 = B3095,
values__3272 = B3103(find_free_variables__3108, exp__3109),
B3273 = values__3272,
B3294 = B3273[0],
B3274 = values__3272,
B3295 = B3274.slice(1);
return B3096(function__3271, B3294, B3295)}}}}}}}
else
if ($T(B3088(exp__3109, B3105)))
return B3094([exp__3109])
else
return B3094([])}, false);
exports["find-free-variables"] = B3107}
