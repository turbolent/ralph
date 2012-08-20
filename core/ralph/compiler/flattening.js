var B3151 = require("ralph/core")
var B3153 = require("ralph/compiler/utilities")
var B3208 = $S("%begin"), reduce = B3151.reduce, trueQ = B3151["true?"], B3154 = B3151["%make-function"], B3155 = B3151.reduce1, B3156 = B3151.concatenate, B3157 = B3151.map, B3158 = B3151["instance?"], B3159 = B3151["<array>"], B3160 = B3151.not, B3161 = B3151["empty?"], B3162 = B3151["=="], B3163 = B3151.first, B3164 = B3151.rest, B3165, B3166 = B3154("flatten_begins", function B3209 (exps__3167)
{var function__3198 = B3156, values__3199 = B3157(function B3210 (exp__3168)
{var flattened__3169 = B3165(exp__3168), B3205;
if ($T(B3158(flattened__3169, B3159)))
{var sequence__3189 = flattened__3169, B3190 = sequence__3189, B3191 = ((B3190 || false).length || 0), B3192 = 0, value__3193 = (B3191 === B3192), B3202 = !(trueQ(value__3193));
if ($T(B3202))
{var sequence__3195 = flattened__3169, B3203 = sequence__3195[0], B3204 = B3208;
B3205 = B3162(B3203, B3204)}
else B3205 = false}
else B3205 = false;
if ($T(B3205))
{var sequence__3197 = flattened__3169;
return sequence__3197.slice(1)}
else return [flattened__3169]}, exps__3167), B3200 = values__3199, B3206 = B3200[0], B3201 = values__3199, B3207 = B3201.slice(1);
return reduce(function__3198, B3206, B3207)}, false)
var reduce = B3151.reduce, trueQ = B3151["true?"], B3211 = B3153["var?"], B3212 = B3151["do"], B3213 = B3151["push-last"], B3214 = B3151.last, B3215 = B3151["second-setter"], B3216 = B3151.third, B3217 = B3151.second, B3218 = B3153["set?"], B3219 = B3154("flatten_varsN", function B3311 (exps__3220)
{return reduce(function B3312 (result__3221, exp__3222)
{var sequence__3240 = result__3221, B3241 = sequence__3240, B3242 = ((B3241 || false).length || 0), B3243 = 0, value__3244 = (B3242 === B3243), B3301 = !(trueQ(value__3244)), previous__3223;
if ($T(B3301))
{var array__3252 = result__3221, B3253 = array__3252, B3254 = ((B3253 || false).length || 0), B3302 = (B3254 - 1);
previous__3223 = array__3252[B3302]}
else previous__3223 = false;
var previous_varQ__3224;
if ($T(previous__3223))
previous_varQ__3224 = B3211(previous__3223)
else previous_varQ__3224 = false;
var B3303;
if ($T(previous_varQ__3224))
B3303 = B3211(exp__3222)
else B3303 = false;
if ($T(B3303))
{var B3305 = function B3313 (binding__3225)
{var array__3264 = result__3221, B3265 = array__3264, B3266 = ((B3265 || false).length || 0), B3304 = (B3266 - 1), array__3267 = array__3264[B3304], value__3268 = binding__3225;
array__3267.push(value__3268);
return array__3267}, sequence__3270 = exp__3222, B3306 = sequence__3270.slice(1);
B3212(B3305, B3306);
return result__3221}
else {var mergeQ__3226;
if ($T(previous_varQ__3224))
mergeQ__3226 = B3218(exp__3222)
else mergeQ__3226 = false;
var binding__3227;
if ($T(mergeQ__3226))
{var array__3285 = result__3221, B3286 = array__3285, B3287 = ((B3286 || false).length || 0), B3307 = (B3287 - 1), array__3288 = array__3285[B3307], B3289 = array__3288, B3290 = ((B3289 || false).length || 0), B3308 = (B3290 - 1);
binding__3227 = array__3288[B3308]}
else binding__3227 = false;
var identifier__3228;
if ($T(mergeQ__3226))
{var sequence__3292 = exp__3222;
identifier__3228 = sequence__3292[1]}
else identifier__3228 = false;
var sequence__3294 = binding__3227, B3309 = sequence__3294[0], B3310 = B3162(B3309, identifier__3228);
if ($T(B3310))
{var array__3299 = binding__3227, sequence__3298 = exp__3222, value__3300 = sequence__3298[2];
array__3299[1] = value__3300;
return result__3221}
else return B3156(result__3221, [exp__3222])}}, [], exps__3220)}, false)
{var B3396 = $S("%var"), dec = B3151.dec, size = B3151.size, B3317 = B3151["last-setter"], B3318 = B3153["maybe-begin"], B3319 = B3151["third-setter"], B3320 = B3151["symbol-name"];
B3165 = B3154("flatten_statementsN", function B3397 (exp__3321)
{if ($T(B3158(exp__3321, B3159)))
{var sequence__3331 = exp__3321, B3386 = sequence__3331[0], B3322 = B3320(B3386), B3323 = B3162(B3322, "%method"), B3387;
if ($T(B3323))
B3387 = B3323
else {var B3324 = B3162(B3322, "%while");
if ($T(B3324))
B3387 = B3324
else B3387 = B3162(B3322, "%set")};
if ($T(B3387))
{var array__3344 = exp__3321, array__3341 = exp__3321, B3342 = array__3341, B3343 = ((B3342 || false).length || 0), B3388 = (B3343 - 1), B3389 = array__3341[B3388], value__3345 = B3165(B3389);
array__3344[dec(size(array__3344), 1)] = value__3345;
return exp__3321}
else if ($T(B3162(B3322, "%begin")))
{var ____3325 = exp__3321[0], exps__3326 = $SL.call(exp__3321, 1);
return B3318(B3219(B3166(exps__3326)))}
else if ($T(B3162(B3322, "%bind")))
{var ____3327 = exp__3321[0], binding__3328 = exp__3321[1], body__3329 = exp__3321[2];
return B3165([B3208, [B3396, binding__3328], body__3329])}
else if ($T(B3162(B3322, "%if")))
{var array__3350 = exp__3321, sequence__3349 = exp__3321, B3390 = sequence__3349[2], value__3351 = B3165(B3390);
array__3350[2] = value__3351;
var array__3364 = exp__3321, array__3361 = exp__3321, B3362 = array__3361, B3363 = ((B3362 || false).length || 0), B3391 = (B3363 - 1), B3392 = array__3361[B3391], value__3365 = B3165(B3392);
array__3364[dec(size(array__3364), 1)] = value__3365;
return exp__3321}
else if ($T(B3162(B3322, "%try")))
{var array__3370 = exp__3321, sequence__3369 = exp__3321, B3393 = sequence__3369[1], value__3371 = B3165(B3393);
array__3370[1] = value__3371;
var array__3384 = exp__3321, array__3381 = exp__3321, B3382 = array__3381, B3383 = ((B3382 || false).length || 0), B3394 = (B3383 - 1), B3395 = array__3381[B3394], value__3385 = B3165(B3395);
array__3384[dec(size(array__3384), 1)] = value__3385;
return exp__3321}
else return B3157(B3165, exp__3321)}
else return exp__3321}, false);
exports["flatten-statements!"] = B3165}
