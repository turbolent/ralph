var B3276 = require("ralph/core")
{var B3279, B3280;
B3279 = require("ralph/regexp");
B3280 = require("ralph/compiler/utilities")}
var B3281 = B3276["make-object"], B3282 = B3281("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var B3283 = B3276["%make-function"], B3284 = B3276.concatenate, B3285 = B3276.slice, B3286 = B3276.size, B3287 = B3283("fill_zeros", function B3299 (string__3288)
{var array__3294 = "0000", start__3295 = 0, object__3293 = string__3288, B3297 = ((object__3293 || false).length || 0), end__3296 = (4 - B3297), B3298 = array__3294.slice(start__3295, end__3296);
return B3284(B3298, string__3288)}, false)
var B3301 = B3276.join, B3302 = B3276.map, B3303 = B3276["<"], B3304 = B3276["as-hex-string"], B3305 = B3276["char-code"], B3306 = B3276.get, B3307 = B3276["as-array"], B3308 = B3283("escape_string", function B3327 (string__3309)
{var B3324 = function B3328 (char__3310)
{var B3311 = B3306(B3282, char__3310);
if ($T(B3311))
{var escaped__3312 = B3311;
return B3284("\\", escaped__3312)}
else {var char__3315 = char__3310, code__3313 = char__3315.charCodeAt(0);
if ($T(B3303(31, code__3313, 127)))
return char__3310
else {var number__3317 = code__3313, B3322 = number__3317.toString(16), B3323 = B3287(B3322);
return B3284("\\u", B3323)}}}, arguments__3320 = string__3309, skip__3321 = undefined, B3325 = $SL.call(arguments__3320, (skip__3321 || 0)), B3326 = B3302(B3324, B3325);
return B3301(B3326, "")}, false)
var B3329 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var B3330 = B3281("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
var B3331 = B3276["member?"], B3332 = B3276["has?"], B3333 = B3279.match, B3334 = B3276["as-string"], B3335 = B3283("escape_name", function B3359 (name__3336)
{if ($T(B3331(name__3336, B3329)))
return B3284("R", name__3336)
else {var B3357 = function B3360 (char__3337)
{var object__3341 = B3330, property__3342 = char__3337, B3353 = $HP.call(object__3341,property__3342);
if ($T(B3353))
return B3306(B3330, char__3337)
else {var regexp__3345 = "\\w", string__3346 = char__3337, B3354 = string__3346.match(regexp__3345);
if ($T(B3354))
return char__3337
else {var char__3348 = char__3337, B3355 = char__3348.charCodeAt(0), B3356 = B3334(B3355);
return B3284("Z", B3356)}}}, arguments__3351 = name__3336, skip__3352 = undefined, B3358 = $SL.call(arguments__3351, (skip__3352 || 0)), chars__3338 = B3302(B3357, B3358);
return B3301(chars__3338, "")}}, false)
var trueQ = B3276["true?"], B3361 = B3276.not, B3362 = B3283("valid_js_nameQ", function B3371 (identifier__3363)
{var value__3365 = B3331(identifier__3363, B3329), B3370 = !(trueQ(value__3365));
if ($T(B3370))
{var regexp__3368 = "^\\w+$", string__3369 = identifier__3363;
return string__3369.match(regexp__3368)}}, false)
{var B3417 = $K("message"), B3374 = B3276["instance?"], B3375 = B3276["<array>"], B3376 = B3276["empty?"], B3377 = B3276.signal, B3378 = B3276.make, B3379 = B3276["<error>"], B3380, B3381 = B3276["<number>"], B3382 = B3276["<boolean>"], B3383 = B3276["<string>"], B3384 = B3276["<hash-symbol>"], B3385 = B3276["as-uppercase"], B3386 = B3276["symbol-name"], B3387 = B3276["<keyword>"], B3388 = B3276["<symbol>"], B3389 = B3276["=="], B3390 = B3276.symbol, B3391 = B3276.description, B3392 = B3283("compile_js", function B3418 (exp__3393, env__3394)
{var B3395 = exp__3393;
if ($T(B3374(B3395, B3375)))
{var sequence__3407 = exp__3393, B3408 = sequence__3407, B3409 = ((B3408 || false).length || 0), B3410 = 0, B3415 = (B3409 === B3410);
if ($T(B3415))
{var error__3412 = B3378(B3379, B3417, "empty expression");
throw(error__3412);
return false}
else return B3380(exp__3393, env__3394)}
else if ($T(B3374(B3395, B3381)))
return B3334(exp__3393)
else if ($T(B3374(B3395, B3382)))
if ($T(exp__3393))
return "true"
else return "false"
else if ($T(B3374(B3395, B3383)))
return B3284("\"", B3308(exp__3393), "\"")
else if ($T(B3374(B3395, B3384)))
{var string__3414 = B3386(exp__3393), B3416 = string__3414.toUpperCase();
return B3284("$", B3416)}
else if ($T(B3374(B3395, B3387)))
return B3284("$K(\"", B3386(exp__3393), "\")")
else if ($T(B3374(B3395, B3388)))
{var B3396 = exp__3393;
if ($T(B3389(B3396, B3390("%this-method"))))
return B3392(B3306(env__3394, "current-method"), env__3394)
else if ($T(B3389(B3396, B3390("%all-arguments"))))
return "arguments"
else return B3335(B3386(exp__3393))}
else return B3391(exp__3393)}, false);
exports["compile-js"] = B3392}
{var B3581 = $S("%infix"), B3582 = $S("%return"), trueQ = B3276["true?"], B3426, B3427 = B3276.rcurry, B3428 = B3276.rest, B3429 = B3276[">="], B3430 = B3276["push-last"], B3431 = B3276.element, B3432 = B3276["="], B3433 = B3276.second, B3434 = B3276["get-setter"], B3435 = B3280["expression?"], B3436 = B3276.first, B3437 = B3280["generate-symbol"], B3438 = B3276.reduce1, B3439 = B3276.reduce, B3440 = B3280["method?"];
B3380 = B3283("compile_js_exp", function B3583 (exp__3441, env__3442)
{var sequence__3499 = exp__3441, B3538 = sequence__3499[0], name__3443 = B3386(B3538), B3444 = name__3443;
if ($T(B3389(B3444, "%native-call")))
{var ____3445 = exp__3441[0], operator__3446 = exp__3441[1], values__3447 = $SL.call(exp__3441, 2);
return B3284(operator__3446, B3426(values__3447, env__3442))}
else if ($T(B3389(B3444, "%infix")))
{var ____3448 = exp__3441[0], operator__3449 = exp__3441[1], values__3450 = $SL.call(exp__3441, 2);
return B3284("(", B3301(B3302(B3427(B3392, env__3442), values__3450), B3284(" ", operator__3449, " ")), ")")}
else {var B3451 = B3389(B3444, "%plus"), B3539;
if ($T(B3451))
B3539 = B3451
else {var B3452 = B3389(B3444, "%minus");
if ($T(B3452))
B3539 = B3452
else {var B3453 = B3389(B3444, "%times");
if ($T(B3453))
B3539 = B3453
else B3539 = B3389(B3444, "%divide")}};
if ($T(B3539))
{var B3540 = B3581, B3454 = name__3443, B3541;
if ($T(B3389(B3454, "%plus")))
B3541 = "+"
else if ($T(B3389(B3454, "%minus")))
B3541 = "-"
else if ($T(B3389(B3454, "%times")))
B3541 = "*"
else if ($T(B3389(B3454, "%divide")))
B3541 = "/"
else B3541 = false;
var B3542 = [B3540, B3541], sequence__3501 = exp__3441, B3543 = sequence__3501.slice(1), B3544 = B3284(B3542, B3543);
return B3380(B3544, env__3442)}
else if ($T(B3389(B3444, "%array")))
{var ____3455 = exp__3441[0], elements__3456 = $SL.call(exp__3441, 1);
return B3284("[", B3301(B3302(B3427(B3392, env__3442), elements__3456), ", "), "]")}
else if ($T(B3389(B3444, "%object")))
{var sequence__3503 = exp__3441, key_values__3457 = sequence__3503.slice(1), entries__3458 = [], object__3505 = key_values__3457, B3545 = ((object__3505 || false).length || 0), B3459 = (B3545 / 2), i__3460 = 0;
while ($T(true))
{var value__3507 = B3429(i__3460, B3459), B3548 = !(trueQ(value__3507));
if ($T(B3548))
{(function B3584 (i__3461)
{var array__3510 = entries__3458, name__3462 = B3431(key_values__3457, (i__3461 * 2)), B3546;
if ($T(B3362(name__3462)))
B3546 = name__3462
else B3546 = B3392(name__3462, env__3442);
var B3547 = B3392(B3431(key_values__3457, ((i__3461 * 2) + 1)), env__3442), value__3511 = B3284(B3546, ":", B3547);
array__3510.push(value__3511);
return array__3510})(i__3460);
i__3460 = (i__3460 + 1)}
else break};
false;
return B3284("{", B3301(entries__3458, ",\n"), "}")}
else if ($T(B3389(B3444, "%if")))
{var ____3463 = exp__3441[0], test__3464 = exp__3441[1], then__3465 = exp__3441[2], else__3466 = exp__3441[3], B3549 = B3392(test__3464, env__3442), B3550 = B3392(then__3465, env__3442), B3551;
if ($T(else__3466))
{var value__3513 = B3432(else__3466, [B3582, false]);
B3551 = !(trueQ(value__3513))}
else B3551 = false;
var B3552;
if ($T(B3551))
B3552 = B3284("\nelse ", B3392(else__3466, env__3442))
else B3552 = "";
return B3284("if (", B3549, ")\n", B3550, B3552)}
else if ($T(B3389(B3444, "%while")))
{var ____3467 = exp__3441[0], test__3468 = exp__3441[1], body__3469 = exp__3441[2];
return B3284("while (", B3392(test__3468, env__3442), ")\n", B3392(body__3469, env__3442))}
else if ($T(B3389(B3444, "%try")))
{var ____3470 = exp__3441[0], body__3471 = exp__3441[1], var__3472 = exp__3441[2], catch__3473 = exp__3441[3];
return B3284("try {", B3392(body__3471, env__3442), "}\n", "catch (", B3392(var__3472, env__3442), ")\n", "{", B3392(catch__3473, env__3442), "}")}
else if ($T(B3389(B3444, "%return")))
{var sequence__3515 = exp__3441, B3553 = sequence__3515[1], B3554 = B3392(B3553, env__3442);
return B3284("return ", B3554)}
else if ($T(B3389(B3444, "%begin")))
{var B3555 = B3427(B3392, env__3442), sequence__3517 = exp__3441, B3556 = sequence__3517.slice(1), B3557 = B3302(B3555, B3556), B3558 = B3301(B3557, ";\n");
return B3284("{", B3558, "}")}
else if ($T(B3389(B3444, "%set")))
{var ____3474 = exp__3441[0], var__3475 = exp__3441[1], value__3476 = exp__3441[2];
return B3284(B3392(var__3475, env__3442), " = ", B3392(value__3476, env__3442))}
else if ($T(B3389(B3444, "%method")))
{var ____3477 = exp__3441[0], arguments__3478 = exp__3441[1], body__3479 = exp__3441[2], name__3480 = B3437(), previous_method__3481 = B3306(env__3442, "current-method"), B3559 = B3392(name__3480, env__3442), B3560 = B3301(B3302(B3427(B3392, env__3442), arguments__3478), ", ");
B3434(env__3442, "current-method", name__3480);
var bodyT__3482 = B3392(body__3479, env__3442);
B3434(env__3442, "current-method", previous_method__3481);
var B3563;
if ($T(B3435(body__3479)))
{var sequence__3519 = body__3479, B3561 = sequence__3519[0], B3562 = B3390("%begin");
B3563 = B3389(B3561, B3562)}
else B3563 = false;
var B3564;
if ($T(B3563))
B3564 = bodyT__3482
else B3564 = B3284("{", bodyT__3482, "}");
return B3284("function ", B3559, " (", B3560, ")\n", B3564)}
else if ($T(B3389(B3444, "%var")))
{var ____3483 = exp__3441[0], bindings__3484 = $SL.call(exp__3441, 1);
return B3284("var ", B3301(B3302(function B3585 (binding__3485)
{var B3486;
if ($T(B3374(binding__3485, B3375)))
B3486 = binding__3485
else B3486 = [binding__3485, false];
var var__3487 = B3486[0], value__3488 = B3486[1], B3565 = B3392(var__3487, env__3442), B3566;
if ($T(value__3488))
B3566 = B3284(" = ", B3392(value__3488, env__3442))
else B3566 = "";
return B3284(B3565, B3566)}, bindings__3484), ", "))}
else if ($T(B3389(B3444, "%native")))
{var function__3530 = B3284, B3567 = function B3586 (e__3489)
{if ($T(B3374(e__3489, B3388)))
return B3392(e__3489)
else return B3334(e__3489)}, sequence__3529 = exp__3441, B3568 = sequence__3529.slice(1), values__3531 = B3302(B3567, B3568), B3532 = values__3531, B3569 = B3532[0], B3533 = values__3531, B3570 = B3533.slice(1);
return B3439(function__3530, B3569, B3570)}
else if ($T(B3389(B3444, "%native-name")))
{var sequence__3535 = exp__3441, B3571 = sequence__3535[1], B3572 = B3335(B3571);
return B3284("\"", B3572, "\"")}
else if ($T(B3389(B3444, "%get-property")))
{var ____3490 = exp__3441[0], object__3491 = exp__3441[1], properties__3492 = $SL.call(exp__3441, 2), B3573;
if ($T(B3374(object__3491, B3381)))
B3573 = B3284("(", B3392(object__3491, env__3442), ")")
else B3573 = B3392(object__3491, env__3442);
var B3576 = B3439(function B3587 (result__3493, property__3494)
{var B3574;
if ($T(B3374(property__3494, B3383)))
B3574 = B3362(property__3494)
else B3574 = false;
var B3575;
if ($T(B3574))
B3575 = B3284(".", property__3494)
else B3575 = B3284("[", B3392(property__3494, env__3442), "]");
return B3284(result__3493, B3575)}, "", properties__3492);
return B3284(B3573, B3576)}
else if ($T(B3389(B3444, "%symbol")))
{var sequence__3537 = exp__3441, B3577 = sequence__3537.slice(1), B3578 = B3426(B3577, env__3442);
return B3284("$S", B3578)}
else {var function__3495 = exp__3441[0], values__3496 = $SL.call(exp__3441, 1), functionT__3497 = B3392(function__3495, env__3442), B3579;
if ($T(B3440(function__3495)))
B3579 = B3284("(", functionT__3497, ")")
else B3579 = functionT__3497;
var B3580 = B3426(values__3496, env__3442);
return B3284(B3579, B3580)}}}, false)}
B3426 = B3283("compile_js_call", function B3590 (values__3588, env__3589)
{return B3284("(", B3301(B3302(B3427(B3392, env__3589), values__3588), ", "), ")")}, false)
