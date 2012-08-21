var B3060 = require("ralph/core")
var B3062 = require("ralph/compiler/utilities")
{
var B3290 = $S("%define"),
trueQ = B3060["true?"],
find_free_variables__3102,
B3081 = B3060["%make-function"],
B3082 = B3060["instance?"],
B3083 = B3060["<array>"],
B3084 = B3060.not,
B3085 = B3060["empty?"],
B3086 = B3060["binary=="],
B3087 = B3060["set-subtract!"],
B3088 = B3060["as-set"],
B3089 = B3060["set-union!"],
B3090 = B3060.reduce,
B3091 = B3060.concatenate,
B3092 = B3062["expression?"],
B3093 = B3060.first,
B3094 = B3060["push-last"],
B3095 = B3060.second,
B3096 = B3060.rest,
B3097 = B3060.map,
B3098 = B3060.reduce1,
B3099 = B3060["<symbol>"],
B3100 = B3060["symbol-name"],
B3101 = B3081("find_free_variables", function find_free_variables__3102 (exp__3103)
{
var B3269;
if ($T(B3082(exp__3103, B3083)))
{
var sequence__3150 = exp__3103,
B3151 = sequence__3150,
B3152 = ((B3151 || false).length || 0),
B3153 = 0,
value__3154 = (B3152 === B3153);
B3269 = !(trueQ(value__3154))}
else
B3269 = false;
if ($T(B3269))
{
var sequence__3156 = exp__3103,
head__3104 = sequence__3156[0],
name__3105;
if ($T(B3082(head__3104, B3099)))
name__3105 = B3100(head__3104)
else
name__3105 = false;
var B3106 = name__3105,
object1__3159 = B3106,
object2__3160 = "%method",
B3270 = (object1__3159 === object2__3160);
if ($T(B3270))
{
var ____3107 = exp__3103[0],
name__3108 = exp__3103[1],
arguments__3109 = exp__3103[2],
body__3110 = exp__3103[3];
return B3087(find_free_variables__3102(body__3110), B3088(arguments__3109))}
else
{
var object1__3163 = B3106,
object2__3164 = "%bind",
B3271 = (object1__3163 === object2__3164);
if ($T(B3271))
{
var ____3111 = exp__3103[0],
B3112 = exp__3103[1],
var__3113 = B3112[0],
value__3114 = B3112[1],
body__3115 = exp__3103[2];
return B3089(B3087(find_free_variables__3102(body__3115), B3088([var__3113])), find_free_variables__3102(value__3114))}
else
{
var object1__3167 = B3106,
object2__3168 = "%begin",
B3272 = (object1__3167 === object2__3168);
if ($T(B3272))
{
var definitions__3116 = [],
B3275 = function B3117 (result__3118, e__3119)
{
var B3273;
if ($T(B3092(e__3119)))
{
var sequence__3172 = e__3119,
object1__3173 = sequence__3172[0],
object2__3174 = B3290;
B3273 = (object1__3173 === object2__3174)}
else
B3273 = false;
var B3274;
if ($T(B3273))
{
var array__3179 = definitions__3116,
sequence__3178 = e__3119,
value__3180 = sequence__3178[1];
array__3179.push(value__3180);
array__3179;
B3274 = []}
else
B3274 = find_free_variables__3102(e__3119);
return B3091(result__3118, B3274)},
B3276 = [],
sequence__3182 = exp__3103,
B3277 = sequence__3182.slice(1),
B3278 = B3090(B3275, B3276, B3277),
B3279 = B3088(B3278),
B3280 = B3088(definitions__3116);
return B3087(B3279, B3280)}
else
{
var object1__3185 = B3106,
object2__3186 = "%try",
B3281 = (object1__3185 === object2__3186);
if ($T(B3281))
{
var ____3120 = exp__3103[0],
e1__3121 = exp__3103[1],
v__3122 = exp__3103[2],
e2__3123 = exp__3103[3];
return B3087(B3089(B3088(find_free_variables__3102(e1__3121)), B3088(find_free_variables__3102(e2__3123))), B3088([v__3122]))}
else
{
var object1__3189 = B3106,
object2__3190 = "%set",
B3124 = (object1__3189 === object2__3190),
B3282;
if ($T(B3124))
B3282 = B3124
else
{
var object1__3193 = B3106,
object2__3194 = "%if",
B3125 = (object1__3193 === object2__3194);
if ($T(B3125))
B3282 = B3125
else
{
var object1__3197 = B3106,
object2__3198 = "%while",
B3126 = (object1__3197 === object2__3198);
if ($T(B3126))
B3282 = B3126
else
{
var object1__3201 = B3106,
object2__3202 = "%array",
B3127 = (object1__3201 === object2__3202);
if ($T(B3127))
B3282 = B3127
else
{
var object1__3205 = B3106,
object2__3206 = "%object",
B3128 = (object1__3205 === object2__3206);
if ($T(B3128))
B3282 = B3128
else
{
var object1__3209 = B3106,
object2__3210 = "%infix",
B3129 = (object1__3209 === object2__3210);
if ($T(B3129))
B3282 = B3129
else
{
var object1__3213 = B3106,
object2__3214 = "%get-property",
B3130 = (object1__3213 === object2__3214);
if ($T(B3130))
B3282 = B3130
else
{
var object1__3217 = B3106,
object2__3218 = "%native-call",
B3131 = (object1__3217 === object2__3218);
if ($T(B3131))
B3282 = B3131
else
{
var object1__3221 = B3106,
object2__3222 = "%return",
B3132 = (object1__3221 === object2__3222);
if ($T(B3132))
B3282 = B3132
else
{
var object1__3225 = B3106,
object2__3226 = "%plus",
B3133 = (object1__3225 === object2__3226);
if ($T(B3133))
B3282 = B3133
else
{
var object1__3229 = B3106,
object2__3230 = "%minus",
B3134 = (object1__3229 === object2__3230);
if ($T(B3134))
B3282 = B3134
else
{
var object1__3233 = B3106,
object2__3234 = "%times",
B3135 = (object1__3233 === object2__3234);
if ($T(B3135))
B3282 = B3135
else
{
var object1__3237 = B3106,
object2__3238 = "%divide";
B3282 = (object1__3237 === object2__3238)}}}}}}}}}}}};
if ($T(B3282))
{
var B3283 = [],
sequence__3240 = exp__3103,
B3284 = sequence__3240.slice(1),
B3285 = B3097(find_free_variables__3102, B3284),
B3286 = B3090(B3091, B3283, B3285);
return B3088(B3286)}
else
{
var object1__3243 = B3106,
object2__3244 = "%native",
B3136 = (object1__3243 === object2__3244),
B3287;
if ($T(B3136))
B3287 = B3136
else
{
var object1__3247 = B3106,
object2__3248 = "%native-name",
B3137 = (object1__3247 === object2__3248);
if ($T(B3137))
B3287 = B3137
else
{
var object1__3251 = B3106,
object2__3252 = "%define",
B3138 = (object1__3251 === object2__3252);
if ($T(B3138))
B3287 = B3138
else
{
var object1__3255 = B3106,
object2__3256 = "%symbol";
B3287 = (object1__3255 === object2__3256)}}};
if ($T(B3287))
return B3088([])
else
{
var function__3265 = B3089,
values__3266 = B3097(find_free_variables__3102, exp__3103),
B3267 = values__3266,
B3288 = B3267[0],
B3268 = values__3266,
B3289 = B3268.slice(1);
return B3090(function__3265, B3288, B3289)}}}}}}}
else
if ($T(B3082(exp__3103, B3099)))
return B3088([exp__3103])
else
return B3088([])}, false);
exports["find-free-variables"] = B3101}
