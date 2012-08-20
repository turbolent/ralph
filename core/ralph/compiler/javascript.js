var B3400 = require("ralph/core")
{var B3403, B3404;
B3403 = require("ralph/regexp");
B3404 = require("ralph/compiler/utilities")}
var B3405 = B3400["make-object"], B3406 = B3405("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var B3407 = B3400["%make-function"], B3408 = B3400.concatenate, B3409 = B3400.slice, B3410 = B3400.size, B3411 = B3407("fill_zeros", function B3423 (string__3412)
{var array__3418 = "0000", start__3419 = 0, object__3417 = string__3412, B3421 = ((object__3417 || false).length || 0), end__3420 = (4 - B3421), B3422 = array__3418.slice(start__3419, end__3420);
return B3408(B3422, string__3412)}, false)
var B3425 = B3400.join, B3426 = B3400.map, B3427 = B3400["<"], B3428 = B3400["as-hex-string"], B3429 = B3400["char-code"], B3430 = B3400.get, B3431 = B3400["as-array"], B3432 = B3407("escape_string", function B3451 (string__3433)
{var B3448 = function B3452 (char__3434)
{var B3435 = B3430(B3406, char__3434);
if ($T(B3435))
{var escaped__3436 = B3435;
return B3408("\\", escaped__3436)}
else {var char__3439 = char__3434, code__3437 = char__3439.charCodeAt(0);
if ($T(B3427(31, code__3437, 127)))
return char__3434
else {var number__3441 = code__3437, B3446 = number__3441.toString(16), B3447 = B3411(B3446);
return B3408("\\u", B3447)}}}, arguments__3444 = string__3433, skip__3445 = undefined, B3449 = $SL.call(arguments__3444, (skip__3445 || 0)), B3450 = B3426(B3448, B3449);
return B3425(B3450, "")}, false)
var B3453 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var B3454 = B3405("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
var B3455 = B3400["member?"], B3456 = B3400["has?"], B3457 = B3403.match, B3458 = B3400["as-string"], B3459 = B3407("escape_name", function B3483 (name__3460)
{if ($T(B3455(name__3460, B3453)))
return B3408("R", name__3460)
else {var B3481 = function B3484 (char__3461)
{var object__3465 = B3454, property__3466 = char__3461, B3477 = $HP.call(object__3465,property__3466);
if ($T(B3477))
return B3430(B3454, char__3461)
else {var regexp__3469 = "\\w", string__3470 = char__3461, B3478 = string__3470.match(regexp__3469);
if ($T(B3478))
return char__3461
else {var char__3472 = char__3461, B3479 = char__3472.charCodeAt(0), B3480 = B3458(B3479);
return B3408("Z", B3480)}}}, arguments__3475 = name__3460, skip__3476 = undefined, B3482 = $SL.call(arguments__3475, (skip__3476 || 0)), chars__3462 = B3426(B3481, B3482);
return B3425(chars__3462, "")}}, false)
var trueQ = B3400["true?"], B3485 = B3400.not, B3486 = B3407("valid_js_nameQ", function B3495 (identifier__3487)
{var value__3489 = B3455(identifier__3487, B3453), B3494 = !(trueQ(value__3489));
if ($T(B3494))
{var regexp__3492 = "^\\w+$", string__3493 = identifier__3487;
return string__3493.match(regexp__3492)}}, false)
{var B3540 = $K("message"), B3541 = $S("%this-method"), B3542 = $S("%all-arguments"), B3498 = B3400["instance?"], B3499 = B3400["<array>"], B3500 = B3400["empty?"], B3501 = B3400.signal, B3502 = B3400.make, B3503 = B3400["<error>"], B3504, B3505 = B3400["<number>"], B3506 = B3400["<boolean>"], B3507 = B3400["<string>"], B3508 = B3400["<hash-symbol>"], B3509 = B3400["as-uppercase"], B3510 = B3400["symbol-name"], B3511 = B3400["<keyword>"], B3512 = B3400["<symbol>"], B3513 = B3400["=="], B3514 = B3400.description, B3515 = B3407("compile_js", function B3543 (exp__3516, env__3517)
{var B3518 = exp__3516;
if ($T(B3498(B3518, B3499)))
{var sequence__3530 = exp__3516, B3531 = sequence__3530, B3532 = ((B3531 || false).length || 0), B3533 = 0, B3538 = (B3532 === B3533);
if ($T(B3538))
{var error__3535 = B3502(B3503, B3540, "empty expression");
throw(error__3535);
return false}
else return B3504(exp__3516, env__3517)}
else if ($T(B3498(B3518, B3505)))
return B3458(exp__3516)
else if ($T(B3498(B3518, B3506)))
if ($T(exp__3516))
return "true"
else return "false"
else if ($T(B3498(B3518, B3507)))
return B3408("\"", B3432(exp__3516), "\"")
else if ($T(B3498(B3518, B3508)))
{var string__3537 = B3510(exp__3516), B3539 = string__3537.toUpperCase();
return B3408("$", B3539)}
else if ($T(B3498(B3518, B3511)))
return B3408("$K(\"", B3510(exp__3516), "\")")
else if ($T(B3498(B3518, B3512)))
{var B3519 = exp__3516;
if ($T(B3513(B3519, B3541)))
return B3515(B3430(env__3517, "current-method"), env__3517)
else if ($T(B3513(B3519, B3542)))
return "arguments"
else return B3459(B3510(exp__3516))}
else return B3514(exp__3516)}, false);
exports["compile-js"] = B3515}
{var B3705 = $S("%infix"), B3706 = $S("%return"), B3707 = $S("%begin"), trueQ = B3400["true?"], B3551, B3552 = B3400.rcurry, B3553 = B3400.rest, B3554 = B3400[">="], B3555 = B3400["push-last"], B3556 = B3400.element, B3557 = B3400["="], B3558 = B3400.second, B3559 = B3404["expression?"], B3560 = B3400.first, B3561 = B3404["generate-symbol"], B3562 = B3400.reduce1, B3563 = B3400.reduce, B3564 = B3404["method?"];
B3504 = B3407("compile_js_exp", function B3708 (exp__3565, env__3566)
{var sequence__3623 = exp__3565, B3662 = sequence__3623[0], name__3567 = B3510(B3662), B3568 = name__3567;
if ($T(B3513(B3568, "%native-call")))
{var ____3569 = exp__3565[0], operator__3570 = exp__3565[1], values__3571 = $SL.call(exp__3565, 2);
return B3408(operator__3570, B3551(values__3571, env__3566))}
else if ($T(B3513(B3568, "%infix")))
{var ____3572 = exp__3565[0], operator__3573 = exp__3565[1], values__3574 = $SL.call(exp__3565, 2);
return B3408("(", B3425(B3426(B3552(B3515, env__3566), values__3574), B3408(" ", operator__3573, " ")), ")")}
else {var B3575 = B3513(B3568, "%plus"), B3663;
if ($T(B3575))
B3663 = B3575
else {var B3576 = B3513(B3568, "%minus");
if ($T(B3576))
B3663 = B3576
else {var B3577 = B3513(B3568, "%times");
if ($T(B3577))
B3663 = B3577
else B3663 = B3513(B3568, "%divide")}};
if ($T(B3663))
{var B3664 = B3705, B3578 = name__3567, B3665;
if ($T(B3513(B3578, "%plus")))
B3665 = "+"
else if ($T(B3513(B3578, "%minus")))
B3665 = "-"
else if ($T(B3513(B3578, "%times")))
B3665 = "*"
else if ($T(B3513(B3578, "%divide")))
B3665 = "/"
else B3665 = false;
var B3666 = [B3664, B3665], sequence__3625 = exp__3565, B3667 = sequence__3625.slice(1), B3668 = B3408(B3666, B3667);
return B3504(B3668, env__3566)}
else if ($T(B3513(B3568, "%array")))
{var ____3579 = exp__3565[0], elements__3580 = $SL.call(exp__3565, 1);
return B3408("[", B3425(B3426(B3552(B3515, env__3566), elements__3580), ", "), "]")}
else if ($T(B3513(B3568, "%object")))
{var sequence__3627 = exp__3565, key_values__3581 = sequence__3627.slice(1), entries__3582 = [], object__3629 = key_values__3581, B3669 = ((object__3629 || false).length || 0), B3583 = (B3669 / 2), i__3584 = 0;
while ($T(true))
{var value__3631 = B3554(i__3584, B3583), B3672 = !(trueQ(value__3631));
if ($T(B3672))
{(function B3709 (i__3585)
{var array__3634 = entries__3582, name__3586 = B3556(key_values__3581, (i__3585 * 2)), B3670;
if ($T(B3486(name__3586)))
B3670 = name__3586
else B3670 = B3515(name__3586, env__3566);
var B3671 = B3515(B3556(key_values__3581, ((i__3585 * 2) + 1)), env__3566), value__3635 = B3408(B3670, ":", B3671);
array__3634.push(value__3635);
return array__3634})(i__3584);
i__3584 = (i__3584 + 1)}
else break};
false;
return B3408("{", B3425(entries__3582, ",\n"), "}")}
else if ($T(B3513(B3568, "%if")))
{var ____3587 = exp__3565[0], test__3588 = exp__3565[1], then__3589 = exp__3565[2], else__3590 = exp__3565[3], B3673 = B3515(test__3588, env__3566), B3674 = B3515(then__3589, env__3566), B3675;
if ($T(else__3590))
{var value__3637 = B3557(else__3590, [B3706, false]);
B3675 = !(trueQ(value__3637))}
else B3675 = false;
var B3676;
if ($T(B3675))
B3676 = B3408("\nelse ", B3515(else__3590, env__3566))
else B3676 = "";
return B3408("if (", B3673, ")\n", B3674, B3676)}
else if ($T(B3513(B3568, "%while")))
{var ____3591 = exp__3565[0], test__3592 = exp__3565[1], body__3593 = exp__3565[2];
return B3408("while (", B3515(test__3592, env__3566), ")\n", B3515(body__3593, env__3566))}
else if ($T(B3513(B3568, "%try")))
{var ____3594 = exp__3565[0], body__3595 = exp__3565[1], var__3596 = exp__3565[2], catch__3597 = exp__3565[3];
return B3408("try {", B3515(body__3595, env__3566), "}\n", "catch (", B3515(var__3596, env__3566), ")\n", "{", B3515(catch__3597, env__3566), "}")}
else if ($T(B3513(B3568, "%return")))
{var sequence__3639 = exp__3565, B3677 = sequence__3639[1], B3678 = B3515(B3677, env__3566);
return B3408("return ", B3678)}
else if ($T(B3513(B3568, "%begin")))
{var B3679 = B3552(B3515, env__3566), sequence__3641 = exp__3565, B3680 = sequence__3641.slice(1), B3681 = B3426(B3679, B3680), B3682 = B3425(B3681, ";\n");
return B3408("{", B3682, "}")}
else if ($T(B3513(B3568, "%set")))
{var ____3598 = exp__3565[0], var__3599 = exp__3565[1], value__3600 = exp__3565[2];
return B3408(B3515(var__3599, env__3566), " = ", B3515(value__3600, env__3566))}
else if ($T(B3513(B3568, "%method")))
{var ____3601 = exp__3565[0], arguments__3602 = exp__3565[1], body__3603 = exp__3565[2], name__3604 = B3561(), previous_method__3605 = B3430(env__3566, "current-method"), B3683 = B3515(name__3604, env__3566), B3684 = B3425(B3426(B3552(B3515, env__3566), arguments__3602), ", ");
env__3566["current-method"] = name__3604;
var bodyT__3606 = B3515(body__3603, env__3566);
env__3566["current-method"] = previous_method__3605;
var B3687;
if ($T(B3559(body__3603)))
{var sequence__3643 = body__3603, B3685 = sequence__3643[0], B3686 = B3707;
B3687 = B3513(B3685, B3686)}
else B3687 = false;
var B3688;
if ($T(B3687))
B3688 = bodyT__3606
else B3688 = B3408("{", bodyT__3606, "}");
return B3408("function ", B3683, " (", B3684, ")\n", B3688)}
else if ($T(B3513(B3568, "%var")))
{var ____3607 = exp__3565[0], bindings__3608 = $SL.call(exp__3565, 1);
return B3408("var ", B3425(B3426(function B3710 (binding__3609)
{var B3610;
if ($T(B3498(binding__3609, B3499)))
B3610 = binding__3609
else B3610 = [binding__3609, false];
var var__3611 = B3610[0], value__3612 = B3610[1], B3689 = B3515(var__3611, env__3566), B3690;
if ($T(value__3612))
B3690 = B3408(" = ", B3515(value__3612, env__3566))
else B3690 = "";
return B3408(B3689, B3690)}, bindings__3608), ", "))}
else if ($T(B3513(B3568, "%native")))
{var function__3654 = B3408, B3691 = function B3711 (e__3613)
{if ($T(B3498(e__3613, B3512)))
return B3515(e__3613)
else return B3458(e__3613)}, sequence__3653 = exp__3565, B3692 = sequence__3653.slice(1), values__3655 = B3426(B3691, B3692), B3656 = values__3655, B3693 = B3656[0], B3657 = values__3655, B3694 = B3657.slice(1);
return B3563(function__3654, B3693, B3694)}
else if ($T(B3513(B3568, "%native-name")))
{var sequence__3659 = exp__3565, B3695 = sequence__3659[1], B3696 = B3459(B3695);
return B3408("\"", B3696, "\"")}
else if ($T(B3513(B3568, "%get-property")))
{var ____3614 = exp__3565[0], object__3615 = exp__3565[1], properties__3616 = $SL.call(exp__3565, 2), B3697;
if ($T(B3498(object__3615, B3505)))
B3697 = B3408("(", B3515(object__3615, env__3566), ")")
else B3697 = B3515(object__3615, env__3566);
var B3700 = B3563(function B3712 (result__3617, property__3618)
{var B3698;
if ($T(B3498(property__3618, B3507)))
B3698 = B3486(property__3618)
else B3698 = false;
var B3699;
if ($T(B3698))
B3699 = B3408(".", property__3618)
else B3699 = B3408("[", B3515(property__3618, env__3566), "]");
return B3408(result__3617, B3699)}, "", properties__3616);
return B3408(B3697, B3700)}
else if ($T(B3513(B3568, "%symbol")))
{var sequence__3661 = exp__3565, B3701 = sequence__3661.slice(1), B3702 = B3551(B3701, env__3566);
return B3408("$S", B3702)}
else {var function__3619 = exp__3565[0], values__3620 = $SL.call(exp__3565, 1), functionT__3621 = B3515(function__3619, env__3566), B3703;
if ($T(B3564(function__3619)))
B3703 = B3408("(", functionT__3621, ")")
else B3703 = functionT__3621;
var B3704 = B3551(values__3620, env__3566);
return B3408(B3703, B3704)}}}, false)}
B3551 = B3407("compile_js_call", function B3715 (values__3713, env__3714)
{return B3408("(", B3425(B3426(B3552(B3515, env__3714), values__3713), ", "), ")")}, false)
