var B3026 = require("ralph/core")
var B3028 = require("ralph/compiler/utilities")
var reduce = B3026.reduce, trueQ = B3026["true?"], B3029 = B3026["%make-function"], B3030 = B3026.reduce1, B3031 = B3026.concatenate, B3032 = B3026.map, B3033 = B3026["instance?"], B3034 = B3026["<array>"], B3035 = B3026.not, B3036 = B3026["empty?"], B3037 = B3026["=="], B3038 = B3026.first, B3039 = B3026.symbol, B3040 = B3026.rest, B3041, B3042 = B3029("flatten_begins", function B3084 (exps__3043)
{var function__3074 = B3031, values__3075 = B3032(function B3085 (exp__3044)
{var flattened__3045 = B3041(exp__3044), B3081;
if ($T(B3033(flattened__3045, B3034)))
{var sequence__3065 = flattened__3045, B3066 = sequence__3065, B3067 = ((B3066 || false).length || 0), B3068 = 0, value__3069 = (B3067 === B3068), B3078 = !(trueQ(value__3069));
if ($T(B3078))
{var sequence__3071 = flattened__3045, B3079 = sequence__3071[0], B3080 = B3039("%begin");
B3081 = B3037(B3079, B3080)}
else B3081 = false}
else B3081 = false;
if ($T(B3081))
{var sequence__3073 = flattened__3045;
return sequence__3073.slice(1)}
else return [flattened__3045]}, exps__3043), B3076 = values__3075, B3082 = B3076[0], B3077 = values__3075, B3083 = B3077.slice(1);
return reduce(function__3074, B3082, B3083)}, false)
var reduce = B3026.reduce, trueQ = B3026["true?"], B3086 = B3028["var?"], B3087 = B3026["do"], B3088 = B3026["push-last"], B3089 = B3026.last, B3090 = B3026["second-setter"], B3091 = B3026.third, B3092 = B3026.second, B3093 = B3028["set?"], B3094 = B3029("flatten_varsN", function B3186 (exps__3095)
{return reduce(function B3187 (result__3096, exp__3097)
{var sequence__3115 = result__3096, B3116 = sequence__3115, B3117 = ((B3116 || false).length || 0), B3118 = 0, value__3119 = (B3117 === B3118), B3176 = !(trueQ(value__3119)), previous__3098;
if ($T(B3176))
{var array__3127 = result__3096, B3128 = array__3127, B3129 = ((B3128 || false).length || 0), B3177 = (B3129 - 1);
previous__3098 = array__3127[B3177]}
else previous__3098 = false;
var previous_varQ__3099;
if ($T(previous__3098))
previous_varQ__3099 = B3086(previous__3098)
else previous_varQ__3099 = false;
var B3178;
if ($T(previous_varQ__3099))
B3178 = B3086(exp__3097)
else B3178 = false;
if ($T(B3178))
{var B3180 = function B3188 (binding__3100)
{var array__3139 = result__3096, B3140 = array__3139, B3141 = ((B3140 || false).length || 0), B3179 = (B3141 - 1), array__3142 = array__3139[B3179], value__3143 = binding__3100;
array__3142.push(value__3143);
return array__3142}, sequence__3145 = exp__3097, B3181 = sequence__3145.slice(1);
B3087(B3180, B3181);
return result__3096}
else {var mergeQ__3101;
if ($T(previous_varQ__3099))
mergeQ__3101 = B3093(exp__3097)
else mergeQ__3101 = false;
var binding__3102;
if ($T(mergeQ__3101))
{var array__3160 = result__3096, B3161 = array__3160, B3162 = ((B3161 || false).length || 0), B3182 = (B3162 - 1), array__3163 = array__3160[B3182], B3164 = array__3163, B3165 = ((B3164 || false).length || 0), B3183 = (B3165 - 1);
binding__3102 = array__3163[B3183]}
else binding__3102 = false;
var identifier__3103;
if ($T(mergeQ__3101))
{var sequence__3167 = exp__3097;
identifier__3103 = sequence__3167[1]}
else identifier__3103 = false;
var sequence__3169 = binding__3102, B3184 = sequence__3169[0], B3185 = B3037(B3184, identifier__3103);
if ($T(B3185))
{var array__3174 = binding__3102, sequence__3173 = exp__3097, value__3175 = sequence__3173[2];
array__3174[1] = value__3175;
return result__3096}
else return B3031(result__3096, [exp__3097])}}, [], exps__3095)}, false)
{var B3271 = $S("%begin"), B3272 = $S("%var"), dec = B3026.dec, size = B3026.size, B3192 = B3026["last-setter"], B3193 = B3028["maybe-begin"], B3194 = B3026["third-setter"], B3195 = B3026["symbol-name"];
B3041 = B3029("flatten_statementsN", function B3273 (exp__3196)
{if ($T(B3033(exp__3196, B3034)))
{var sequence__3206 = exp__3196, B3261 = sequence__3206[0], B3197 = B3195(B3261), B3198 = B3037(B3197, "%method"), B3262;
if ($T(B3198))
B3262 = B3198
else {var B3199 = B3037(B3197, "%while");
if ($T(B3199))
B3262 = B3199
else B3262 = B3037(B3197, "%set")};
if ($T(B3262))
{var array__3219 = exp__3196, array__3216 = exp__3196, B3217 = array__3216, B3218 = ((B3217 || false).length || 0), B3263 = (B3218 - 1), B3264 = array__3216[B3263], value__3220 = B3041(B3264);
array__3219[dec(size(array__3219), 1)] = value__3220;
return exp__3196}
else if ($T(B3037(B3197, "%begin")))
{var ____3200 = exp__3196[0], exps__3201 = $SL.call(exp__3196, 1);
return B3193(B3094(B3042(exps__3201)))}
else if ($T(B3037(B3197, "%bind")))
{var ____3202 = exp__3196[0], binding__3203 = exp__3196[1], body__3204 = exp__3196[2];
return B3041([B3271, [B3272, binding__3203], body__3204])}
else if ($T(B3037(B3197, "%if")))
{var array__3225 = exp__3196, sequence__3224 = exp__3196, B3265 = sequence__3224[2], value__3226 = B3041(B3265);
array__3225[2] = value__3226;
var array__3239 = exp__3196, array__3236 = exp__3196, B3237 = array__3236, B3238 = ((B3237 || false).length || 0), B3266 = (B3238 - 1), B3267 = array__3236[B3266], value__3240 = B3041(B3267);
array__3239[dec(size(array__3239), 1)] = value__3240;
return exp__3196}
else if ($T(B3037(B3197, "%try")))
{var array__3245 = exp__3196, sequence__3244 = exp__3196, B3268 = sequence__3244[1], value__3246 = B3041(B3268);
array__3245[1] = value__3246;
var array__3259 = exp__3196, array__3256 = exp__3196, B3257 = array__3256, B3258 = ((B3257 || false).length || 0), B3269 = (B3258 - 1), B3270 = array__3256[B3269], value__3260 = B3041(B3270);
array__3259[dec(size(array__3259), 1)] = value__3260;
return exp__3196}
else return B3032(B3041, exp__3196)}
else return exp__3196}, false);
exports["flatten-statements!"] = B3041}
