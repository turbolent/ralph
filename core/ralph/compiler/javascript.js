{
var B3128;
false;
B3128 = require("ralph/core")}
{
var B3131,
B3132;
false;
B3131 = require("ralph/regexp");
false;
B3132 = require("ralph/compiler/utilities")}
{
var make_object__3133 = B3128["make-object"],
TescapedT__3134;
false;
TescapedT__3134 = make_object__3133("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")}
{
var Mmake_function__3135 = B3128["%make-function"],
concatenate__3136 = B3128.concatenate,
slice__3137 = B3128.slice,
size__3138 = B3128.size,
fill_zeros__3139;
false;
fill_zeros__3139 = Mmake_function__3135("fill_zeros", function fill_zeros__3140 (string__3141)
{
var end__3144 = (4 - size__3138(string__3141)),
start__3143 = 0,
array__3142 = "0000",
B3145 = array__3142.slice(start__3143, end__3144);
return concatenate__3136(B3145, string__3141)}, false)}
{
var join__3148 = B3128.join,
map__3149 = B3128.map,
L__3150 = B3128["<"],
as_hex_string__3151 = B3128["as-hex-string"],
char_code__3152 = B3128["char-code"],
get__3153 = B3128.get,
as_array__3154 = B3128["as-array"],
escape_string__3155;
false;
escape_string__3155 = Mmake_function__3135("escape_string", function escape_string__3156 (string__3157)
{
var B3169 = function B3146__3158 (char__3159)
{
var B3147__3160 = get__3153(TescapedT__3134, char__3159);
if ($T(B3147__3160))
{
var escaped__3161 = B3147__3160;
return concatenate__3136("\\", escaped__3161)}
else
{
var char__3163 = char__3159,
code__3162 = char__3163.charCodeAt(0);
if ($T(L__3150(31, code__3162, 127)))
{return char__3159}
else
{
var number__3164 = code__3162,
B3167 = number__3164.toString(16),
B3168 = fill_zeros__3139(B3167);
return concatenate__3136("\\u", B3168)}}},
skip__3166,
arguments__3165 = string__3157,
B3170 = $SL.call(arguments__3165, (skip__3166 || 0)),
B3171 = map__3149(B3169, B3170);
return join__3148(B3171, "")}, false)}
{
var TreservedT__3172;
false;
TreservedT__3172 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]}
{
var Tsymbol_escapesT__3173;
false;
Tsymbol_escapesT__3173 = make_object__3133("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")}
{
var memberQ__3175 = B3128["member?"],
hasQ__3176 = B3128["has?"],
match__3177 = B3131.match,
as_string__3178 = B3128["as-string"],
escape_name__3179;
false;
escape_name__3179 = Mmake_function__3135("escape_name", function escape_name__3180 (name__3181)
{if ($T(memberQ__3175(name__3181, TreservedT__3172)))
{return concatenate__3136("R", name__3181)}
else
{
var B3196 = function B3174__3182 (char__3183)
{
var property__3186 = char__3183,
object__3185 = Tsymbol_escapesT__3173,
B3192 = $HP.call(object__3185,property__3186);
if ($T(B3192))
{return get__3153(Tsymbol_escapesT__3173, char__3183)}
else
{
var string__3188 = char__3183,
regexp__3187 = "\\w",
B3193 = string__3188.match(regexp__3187);
if ($T(B3193))
{return char__3183}
else
{
var char__3189 = char__3183,
B3194 = char__3189.charCodeAt(0),
B3195 = as_string__3178(B3194);
return concatenate__3136("Z", B3195)}}},
skip__3191,
arguments__3190 = name__3181,
B3197 = $SL.call(arguments__3190, (skip__3191 || 0)),
chars__3184 = map__3149(B3196, B3197);
return join__3148(chars__3184, "")}}, false)}
{
var ralphScoreCCtrueQ = B3128["true?"],
not__3198 = B3128.not,
valid_js_nameQ__3199;
false;
valid_js_nameQ__3199 = Mmake_function__3135("valid_js_nameQ", function valid_js_nameQ__3200 (identifier__3201)
{
var value__3202 = memberQ__3175(identifier__3201, TreservedT__3172),
B3205 = !(ralphScoreCCtrueQ(value__3202));
if ($T(B3205))
{
var string__3204 = identifier__3201,
regexp__3203 = "^\\w+$";
return string__3204.match(regexp__3203)}}, false)}
{
var B3246 = $K("message"),
instanceQ__3208 = B3128["instance?"],
LarrayG__3209 = B3128["<array>"],
emptyQ__3210 = B3128["empty?"],
signal__3211 = B3128.signal,
make__3212 = B3128.make,
LerrorG__3213 = B3128["<error>"],
compile_js_exp__3214,
LnumberG__3215 = B3128["<number>"],
LbooleanG__3216 = B3128["<boolean>"],
LstringG__3217 = B3128["<string>"],
Lhash_symbolG__3218 = B3128["<hash-symbol>"],
as_uppercase__3219 = B3128["as-uppercase"],
symbol_name__3220 = B3128["symbol-name"],
LkeywordG__3221 = B3128["<keyword>"],
LsymbolG__3222 = B3128["<symbol>"],
binaryEE__3223 = B3128["binary=="],
description__3224 = B3128.description,
compile_js__3225;
false;
compile_js__3225 = Mmake_function__3135("compile_js", function compile_js__3226 (exp__3227, env__3228)
{B3247:while(true){
var B3206__3229 = exp__3227;
if ($T(instanceQ__3208(B3206__3229, LarrayG__3209)))
{
var sequence__3231 = exp__3227,
B3240 = binaryEE__3223(size__3138(sequence__3231), 0);
if ($T(B3240))
{
var error__3232 = make__3212(LerrorG__3213, B3246, "empty expression");
throw(error__3232);
return false}
else
return compile_js_exp__3214(exp__3227, env__3228)}
else
if ($T(instanceQ__3208(B3206__3229, LnumberG__3215)))
{return as_string__3178(exp__3227)}
else
if ($T(instanceQ__3208(B3206__3229, LbooleanG__3216)))
{if ($T(exp__3227))
{return "true"}
else
return "false"}
else
if ($T(instanceQ__3208(B3206__3229, LstringG__3217)))
{return concatenate__3136("\"", escape_string__3155(exp__3227), "\"")}
else
if ($T(instanceQ__3208(B3206__3229, Lhash_symbolG__3218)))
{
var string__3233 = symbol_name__3220(exp__3227),
B3241 = string__3233.toUpperCase();
return concatenate__3136("$", B3241)}
else
if ($T(instanceQ__3208(B3206__3229, LkeywordG__3221)))
{return concatenate__3136("$K(\"", symbol_name__3220(exp__3227), "\")")}
else
if ($T(instanceQ__3208(B3206__3229, LsymbolG__3222)))
{
var B3207__3230 = symbol_name__3220(exp__3227),
object2__3235 = "%this-method",
object1__3234 = B3207__3230,
B3242 = (object1__3234 === object2__3235);
if ($T(B3242))
{
arguments = [get__3153(env__3228, "current-method"), env__3228];
exp__3227 = arguments[0];
env__3228 = arguments[1];
continue B3247}
else
{
var object2__3237 = "%all-arguments",
object1__3236 = B3207__3230,
B3243 = (object1__3236 === object2__3237);
if ($T(B3243))
{return "arguments"}
else
{
var object2__3239 = get__3153(env__3228, "module", "name"),
object1__3238 = get__3153(exp__3227, "module"),
B3244 = (object1__3238 === object2__3239),
B3245;
if ($T(B3244))
{B3245 = symbol_name__3220(exp__3227)}
else
B3245 = description__3224(exp__3227);
return escape_name__3179(B3245)}}}
else
return description__3224(exp__3227);
break}}, false);
exports["compile-js"] = compile_js__3225}
{
var B3458 = $S("%infix", "ralph/core"),
B3459 = $S("%return", "ralph/core"),
compile_js_call__3261,
rcurry__3262 = B3128.rcurry,
rest__3263 = B3128.rest,
GE__3264 = B3128[">="],
push_last__3265 = B3128["push-last"],
element__3266 = B3128.element,
beginQ__3267 = B3132["begin?"],
E__3268 = B3128["="],
second__3269 = B3128.second,
reduce1__3270 = B3128.reduce1,
reduce__3271 = B3128.reduce,
methodQ__3272 = B3132["method?"],
first__3273 = B3128.first;
false;
compile_js_exp__3214 = Mmake_function__3135("compile_js_exp", function compile_js_exp__3274 (exp__3275, env__3276)
{B3460:while(true){
var sequence__3339 = exp__3275,
B3401 = sequence__3339[0],
name__3277 = symbol_name__3220(B3401),
B3248__3278 = name__3277,
object2__3341 = "%native-call",
object1__3340 = B3248__3278,
B3402 = (object1__3340 === object2__3341);
if ($T(B3402))
{
var ____3279 = exp__3275[0],
operator__3280 = exp__3275[1],
values__3281 = $SL.call(exp__3275, 2);
return concatenate__3136(operator__3280, compile_js_call__3261(values__3281, env__3276))}
else
{
var object2__3343 = "%infix",
object1__3342 = B3248__3278,
B3403 = (object1__3342 === object2__3343);
if ($T(B3403))
{
var ____3282 = exp__3275[0],
operator__3283 = exp__3275[1],
values__3284 = $SL.call(exp__3275, 2);
return concatenate__3136("(", join__3148(map__3149(rcurry__3262(compile_js__3225, env__3276), values__3284), concatenate__3136(" ", operator__3283, " ")), ")")}
else
{
var object2__3345 = "%plus",
object1__3344 = B3248__3278,
B3249__3285 = (object1__3344 === object2__3345),
B3404;
if ($T(B3249__3285))
{B3404 = B3249__3285}
else
{
var object2__3347 = "%minus",
object1__3346 = B3248__3278,
B3250__3286 = (object1__3346 === object2__3347);
if ($T(B3250__3286))
{B3404 = B3250__3286}
else
{
var object2__3349 = "%times",
object1__3348 = B3248__3278,
B3251__3287 = (object1__3348 === object2__3349);
if ($T(B3251__3287))
{B3404 = B3251__3287}
else
{
var object2__3351 = "%divide",
object1__3350 = B3248__3278;
B3404 = (object1__3350 === object2__3351)}}};
if ($T(B3404))
{
var B3405 = B3458,
B3252__3288 = name__3277,
object2__3353 = "%plus",
object1__3352 = B3252__3288,
B3406 = (object1__3352 === object2__3353),
B3410;
if ($T(B3406))
{B3410 = "+"}
else
{
var object2__3355 = "%minus",
object1__3354 = B3252__3288,
B3407 = (object1__3354 === object2__3355);
if ($T(B3407))
{B3410 = "-"}
else
{
var object2__3357 = "%times",
object1__3356 = B3252__3288,
B3408 = (object1__3356 === object2__3357);
if ($T(B3408))
{B3410 = "*"}
else
{
var object2__3359 = "%divide",
object1__3358 = B3252__3288,
B3409 = (object1__3358 === object2__3359);
if ($T(B3409))
{B3410 = "/"}
else
B3410 = false}}};
var B3411 = [B3405, B3410],
sequence__3360 = exp__3275,
B3412 = sequence__3360.slice(1),
B3413 = concatenate__3136(B3411, B3412);
arguments = [B3413, env__3276];
exp__3275 = arguments[0];
env__3276 = arguments[1];
continue B3460}
else
{
var object2__3362 = "%array",
object1__3361 = B3248__3278,
B3414 = (object1__3361 === object2__3362);
if ($T(B3414))
{
var ____3289 = exp__3275[0],
elements__3290 = $SL.call(exp__3275, 1);
return concatenate__3136("[", join__3148(map__3149(rcurry__3262(compile_js__3225, env__3276), elements__3290), ", "), "]")}
else
{
var object2__3364 = "%object",
object1__3363 = B3248__3278,
B3415 = (object1__3363 === object2__3364);
if ($T(B3415))
{
var sequence__3365 = exp__3275,
key_values__3291 = sequence__3365.slice(1),
entries__3292 = [],
object__3366 = key_values__3291,
B3416 = ((object__3366 || false).length || 0),
B3253__3293 = (B3416 / 2),
i__3294 = 0;
while (true)
{
var value__3367 = GE__3264(i__3294, B3253__3293),
B3419 = !(ralphScoreCCtrueQ(value__3367));
if ($T(B3419))
{
(function B3254__3295 (i__3296)
{
var name__3297 = element__3266(key_values__3291, (i__3296 * 2)),
B3417;
if ($T(valid_js_nameQ__3199(name__3297)))
{B3417 = name__3297}
else
B3417 = compile_js__3225(name__3297, env__3276);
var B3418 = compile_js__3225(element__3266(key_values__3291, ((i__3296 * 2) + 1)), env__3276),
value__3369 = concatenate__3136(B3417, ":", B3418),
array__3368 = entries__3292;
array__3368.push(value__3369);
return array__3368})(i__3294);
i__3294 = (i__3294 + 1)}
else
break};
false;
return concatenate__3136("{", join__3148(entries__3292, ",\n"), "}")}
else
{
var object2__3371 = "%if",
object1__3370 = B3248__3278,
B3420 = (object1__3370 === object2__3371);
if ($T(B3420))
{
var ____3298 = exp__3275[0],
test__3299 = exp__3275[1],
then__3300 = exp__3275[2],
else__3301 = exp__3275[3],
thenT__3302 = compile_js__3225(then__3300, env__3276),
B3421 = compile_js__3225(test__3299, env__3276),
B3422;
if ($T(beginQ__3267(then__3300)))
{B3422 = thenT__3302}
else
B3422 = concatenate__3136("{", thenT__3302, "}");
var B3423;
if ($T(else__3301))
{
var value__3372 = E__3268(else__3301, [B3459, false]);
B3423 = !(ralphScoreCCtrueQ(value__3372))}
else
B3423 = false;
var B3424;
if ($T(B3423))
{B3424 = concatenate__3136("\nelse\n", compile_js__3225(else__3301, env__3276))}
else
B3424 = "";
return concatenate__3136("if (", B3421, ")\n", B3422, B3424)}
else
{
var object2__3374 = "%while",
object1__3373 = B3248__3278,
B3425 = (object1__3373 === object2__3374);
if ($T(B3425))
{
var ____3303 = exp__3275[0],
test__3304 = exp__3275[1],
body__3305 = exp__3275[2];
return concatenate__3136("while (", compile_js__3225(test__3304, env__3276), ")\n", compile_js__3225(body__3305, env__3276))}
else
{
var object2__3376 = "%try",
object1__3375 = B3248__3278,
B3426 = (object1__3375 === object2__3376);
if ($T(B3426))
{
var ____3306 = exp__3275[0],
body__3307 = exp__3275[1],
var__3308 = exp__3275[2],
catch__3309 = exp__3275[3];
return concatenate__3136("try {", compile_js__3225(body__3307, env__3276), "}\n", "catch (", compile_js__3225(var__3308, env__3276), ")\n", "{", compile_js__3225(catch__3309, env__3276), "}")}
else
{
var object2__3378 = "%return",
object1__3377 = B3248__3278,
B3427 = (object1__3377 === object2__3378);
if ($T(B3427))
{
var sequence__3379 = exp__3275,
B3428 = sequence__3379[1],
B3429 = compile_js__3225(B3428, env__3276);
return concatenate__3136("return ", B3429)}
else
{
var object2__3381 = "%begin",
object1__3380 = B3248__3278,
B3430 = (object1__3380 === object2__3381);
if ($T(B3430))
{
var B3431 = rcurry__3262(compile_js__3225, env__3276),
sequence__3382 = exp__3275,
B3432 = sequence__3382.slice(1),
B3433 = map__3149(B3431, B3432),
B3434 = join__3148(B3433, ";\n");
return concatenate__3136("{\n", B3434, "}")}
else
{
var object2__3384 = "%set",
object1__3383 = B3248__3278,
B3435 = (object1__3383 === object2__3384);
if ($T(B3435))
{
var ____3310 = exp__3275[0],
var__3311 = exp__3275[1],
value__3312 = exp__3275[2];
return concatenate__3136(compile_js__3225(var__3311, env__3276), " = ", compile_js__3225(value__3312, env__3276))}
else
{
var object2__3386 = "%method",
object1__3385 = B3248__3278,
B3436 = (object1__3385 === object2__3386);
if ($T(B3436))
{
var ____3313 = exp__3275[0],
name__3314 = exp__3275[1],
arguments__3315 = exp__3275[2],
body__3316 = exp__3275[3],
previous_method__3317 = get__3153(env__3276, "current-method"),
B3437 = compile_js__3225(name__3314, env__3276),
B3438 = join__3148(map__3149(rcurry__3262(compile_js__3225, env__3276), arguments__3315), ", ");
env__3276["current-method"] = name__3314;
var bodyT__3318 = compile_js__3225(body__3316, env__3276);
env__3276["current-method"] = previous_method__3317;
var B3439;
if ($T(beginQ__3267(body__3316)))
{B3439 = bodyT__3318}
else
B3439 = concatenate__3136("{", bodyT__3318, "}");
return concatenate__3136("function ", B3437, " (", B3438, ")\n", B3439)}
else
{
var object2__3388 = "%var",
object1__3387 = B3248__3278,
B3440 = (object1__3387 === object2__3388);
if ($T(B3440))
{
var ____3319 = exp__3275[0],
bindings__3320 = $SL.call(exp__3275, 1);
return concatenate__3136("var ", join__3148(map__3149(function B3255__3321 (binding__3322)
{
var B3256__3323;
if ($T(instanceQ__3208(binding__3322, LarrayG__3209)))
{B3256__3323 = binding__3322}
else
B3256__3323 = [binding__3322, false];
var var__3324 = B3256__3323[0],
value__3325 = B3256__3323[1],
B3441 = compile_js__3225(var__3324, env__3276),
B3442;
if ($T(value__3325))
{B3442 = concatenate__3136(" = ", compile_js__3225(value__3325, env__3276))}
else
B3442 = "";
return concatenate__3136(B3441, B3442)}, bindings__3320), ",\n"))}
else
{
var object2__3390 = "%native",
object1__3389 = B3248__3278,
B3443 = (object1__3389 === object2__3390);
if ($T(B3443))
{
var values__3392 = map__3149(function B3257__3326 (e__3327)
{
var B3258__3328 = e__3327,
B3259__3329 = instanceQ__3208(B3258__3328, LsymbolG__3222),
B3444;
if ($T(B3259__3329))
{B3444 = B3259__3329}
else
B3444 = instanceQ__3208(B3258__3328, LarrayG__3209);
if ($T(B3444))
{return compile_js__3225(e__3327, env__3276)}
else
return as_string__3178(e__3327)}, rest__3263(exp__3275)),
function__3391 = concatenate__3136;
return reduce__3271(function__3391, first__3273(values__3392), rest__3263(values__3392))}
else
{
var object2__3394 = "%native-name",
object1__3393 = B3248__3278,
B3445 = (object1__3393 === object2__3394);
if ($T(B3445))
{
var sequence__3395 = exp__3275,
B3446 = sequence__3395[1],
B3447 = escape_name__3179(B3446);
return concatenate__3136("\"", B3447, "\"")}
else
{
var object2__3397 = "%get-property",
object1__3396 = B3248__3278,
B3448 = (object1__3396 === object2__3397);
if ($T(B3448))
{
var ____3330 = exp__3275[0],
object__3331 = exp__3275[1],
properties__3332 = $SL.call(exp__3275, 2),
B3449;
if ($T(instanceQ__3208(object__3331, LnumberG__3215)))
{B3449 = concatenate__3136("(", compile_js__3225(object__3331, env__3276), ")")}
else
B3449 = compile_js__3225(object__3331, env__3276);
var B3452 = reduce__3271(function B3260__3333 (result__3334, property__3335)
{
var B3450;
if ($T(instanceQ__3208(property__3335, LstringG__3217)))
{B3450 = valid_js_nameQ__3199(property__3335)}
else
B3450 = false;
var B3451;
if ($T(B3450))
{B3451 = concatenate__3136(".", property__3335)}
else
B3451 = concatenate__3136("[", compile_js__3225(property__3335, env__3276), "]");
return concatenate__3136(result__3334, B3451)}, "", properties__3332);
return concatenate__3136(B3449, B3452)}
else
{
var object2__3399 = "%symbol",
object1__3398 = B3248__3278,
B3453 = (object1__3398 === object2__3399);
if ($T(B3453))
{
var sequence__3400 = exp__3275,
B3454 = sequence__3400.slice(1),
B3455 = compile_js_call__3261(B3454, env__3276);
return concatenate__3136("$S", B3455)}
else
{
var function__3336 = exp__3275[0],
values__3337 = $SL.call(exp__3275, 1),
functionT__3338 = compile_js__3225(function__3336, env__3276),
B3456;
if ($T(methodQ__3272(function__3336)))
{B3456 = concatenate__3136("(", functionT__3338, ")")}
else
B3456 = functionT__3338;
var B3457 = compile_js_call__3261(values__3337, env__3276);
return concatenate__3136(B3456, B3457)}}}}}}}}}}}}}}}}};
break}}, false)}
{
false;
compile_js_call__3261 = Mmake_function__3135("compile_js_call", function compile_js_call__3461 (values__3462, env__3463)
{return concatenate__3136("(", join__3148(map__3149(rcurry__3262(compile_js__3225, env__3463), values__3462), ", "), ")")}, false)}
