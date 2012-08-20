var B3343 = require("ralph/core")
var B3345 = require("ralph/compiler/utilities")
var B3455 = $S("%begin"), dec = B3343.dec, size = B3343.size, B3348 = B3343["%make-function"], B3349 = B3343["instance?"], B3350 = B3343["<array>"], B3351 = B3343["binary=="], B3352 = B3343["last-setter"], B3353 = B3343.last, B3354 = B3343["third-setter"], B3355 = B3343.third, B3356 = B3343["second-setter"], B3357 = B3343.second, B3358 = B3343.concatenate, B3359 = B3343["symbol-name"], B3360 = B3343.first, B3361 = B3348("wrap_valueN", function B3456 (exp__3362, wrapper__3363)
{if ($T(B3349(exp__3362, B3350)))
{var sequence__3367 = exp__3362, B3442 = sequence__3367[0], B3364 = B3359(B3442), object1__3370 = B3364, object2__3371 = "%begin", B3365 = (object1__3370 === object2__3371), B3443;
if ($T(B3365))
B3443 = B3365
else {var object1__3374 = B3364, object2__3375 = "%bind";
B3443 = (object1__3374 === object2__3375)};
if ($T(B3443))
{var array__3388 = exp__3362, array__3385 = exp__3362, B3386 = array__3385, B3387 = ((B3386 || false).length || 0), B3444 = (B3387 - 1), B3445 = array__3385[B3444], value__3389 = B3361(B3445, wrapper__3363);
array__3388[dec(size(array__3388), 1)] = value__3389;
return exp__3362}
else {var object1__3392 = B3364, object2__3393 = "%if", B3446 = (object1__3392 === object2__3393);
if ($T(B3446))
{var array__3398 = exp__3362, sequence__3397 = exp__3362, B3447 = sequence__3397[2], value__3399 = B3361(B3447, wrapper__3363);
array__3398[2] = value__3399;
var array__3412 = exp__3362, array__3409 = exp__3362, B3410 = array__3409, B3411 = ((B3410 || false).length || 0), B3448 = (B3411 - 1), B3449 = array__3409[B3448], value__3413 = B3361(B3449, wrapper__3363);
array__3412[dec(size(array__3412), 1)] = value__3413;
return exp__3362}
else {var object1__3416 = B3364, object2__3417 = "%while", B3450 = (object1__3416 === object2__3417);
if ($T(B3450))
return [B3455, exp__3362, B3361(false, wrapper__3363)]
else {var object1__3420 = B3364, object2__3421 = "%try", B3451 = (object1__3420 === object2__3421);
if ($T(B3451))
{var array__3426 = exp__3362, sequence__3425 = exp__3362, B3452 = sequence__3425[1], value__3427 = B3361(B3452, wrapper__3363);
array__3426[1] = value__3427;
var array__3440 = exp__3362, array__3437 = exp__3362, B3438 = array__3437, B3439 = ((B3438 || false).length || 0), B3453 = (B3439 - 1), B3454 = array__3437[B3453], value__3441 = B3361(B3454, wrapper__3363);
array__3440[dec(size(array__3440), 1)] = value__3441;
return exp__3362}
else return B3358(wrapper__3363, [exp__3362])}}}}
else return B3358(wrapper__3363, [exp__3362])}, false)
var B3459 = $S("%return"), B3457 = B3348("add_explicit_return", function B3460 (exp__3458)
{return B3361(exp__3458, [B3459])}, false)
var B3487 = $S("%if"), B3488 = $S("%while"), B3489 = $S("%bind"), B3490 = $S("%try"), trueQ = B3343["true?"], B3461 = B3343.not, B3462 = B3343["empty?"], B3463 = B3343["member?"], B3464 = B3348("statementQ", function B3491 (exp__3465)
{if ($T(B3349(exp__3465, B3350)))
{var sequence__3477 = exp__3465, B3478 = sequence__3477, B3479 = ((B3478 || false).length || 0), B3480 = 0, value__3481 = (B3479 === B3480), B3484 = !(trueQ(value__3481));
if ($T(B3484))
{var sequence__3483 = exp__3465, B3485 = sequence__3483[0], B3486 = [B3487, B3488, B3455, B3489, B3490];
return B3463(B3485, B3486)}}}, false)
var B3495 = $S("%native"), trueQ = B3343["true?"], B3492 = B3343["<boolean>"], B3493 = B3348("add_explicit_true", function B3496 (exp__3494)
{if ($T(B3349(exp__3494, B3492)))
return trueQ(exp__3494)
else return [[B3495, "$T"], exp__3494]}, false)
{var B3652 = $S("%set"), B3653 = $S("%get-property"), B3654 = $S("%var"), dec = B3343.dec, size = B3343.size, B3499 = B3345["maybe-begin"], B3500 = B3343.map, B3501 = B3343.rcurry, B3502 = B3343.get, B3503 = B3343["first-setter"], B3504 = B3348("transform_statementsN", function B3655 (exp__3505, env__3506)
{if ($T(B3349(exp__3505, B3350)))
{var sequence__3525 = exp__3505, B3630 = sequence__3525[0], B3507 = B3359(B3630), object1__3528 = B3507, object2__3529 = "%method", B3631 = (object1__3528 === object2__3529);
if ($T(B3631))
{var array__3542 = exp__3505, array__3539 = exp__3505, B3540 = array__3539, B3541 = ((B3540 || false).length || 0), B3632 = (B3541 - 1), B3633 = array__3539[B3632], B3634 = B3504(B3633, env__3506), value__3543 = B3457(B3634);
array__3542[dec(size(array__3542), 1)] = value__3543;
return exp__3505}
else {var object1__3546 = B3507, object2__3547 = "%begin", B3635 = (object1__3546 === object2__3547);
if ($T(B3635))
{var ____3508 = exp__3505[0], exps__3509 = $SL.call(exp__3505, 1);
return B3499(B3500(B3501(B3504, env__3506), exps__3509))}
else {var object1__3550 = B3507, object2__3551 = "%bind", B3636 = (object1__3550 === object2__3551);
if ($T(B3636))
{var ____3510 = exp__3505[0], B3511 = exp__3505[1], var__3512 = B3511[0], value__3513 = B3511[1], body__3514 = exp__3505[2];
if ($T(B3464(value__3513)))
return [B3489, [var__3512, false], [B3455, B3361(B3504(value__3513, env__3506), [B3652, var__3512]), B3504(body__3514, env__3506)]]
else return [B3489, [var__3512, B3504(value__3513, env__3506)], B3504(body__3514, env__3506)]}
else {var object1__3554 = B3507, object2__3555 = "%if", B3637 = (object1__3554 === object2__3555);
if ($T(B3637))
{var ____3515 = exp__3505[0], test__3516 = exp__3505[1], then__3517 = exp__3505[2], else__3518 = exp__3505[3];
return [B3487, B3493(test__3516), B3504(then__3517, env__3506), B3504(else__3518, env__3506)]}
else {var object1__3558 = B3507, object2__3559 = "%while", B3638 = (object1__3558 === object2__3559);
if ($T(B3638))
{var array__3564 = exp__3505, sequence__3563 = exp__3505, B3639 = sequence__3563[1], value__3565 = B3493(B3639);
array__3564[1] = value__3565;
var array__3570 = exp__3505, sequence__3569 = exp__3505, B3640 = sequence__3569[2], value__3571 = B3504(B3640, env__3506);
array__3570[2] = value__3571;
return exp__3505}
else {var object1__3574 = B3507, object2__3575 = "%try", B3641 = (object1__3574 === object2__3575);
if ($T(B3641))
{var array__3580 = exp__3505, sequence__3579 = exp__3505, B3642 = sequence__3579[1], value__3581 = B3504(B3642, exp__3505);
array__3580[1] = value__3581;
var array__3594 = exp__3505, array__3591 = exp__3505, B3592 = array__3591, B3593 = ((B3592 || false).length || 0), B3643 = (B3593 - 1), B3644 = array__3591[B3643], value__3595 = B3504(B3644, env__3506);
array__3594[dec(size(array__3594), 1)] = value__3595;
return exp__3505}
else {var object1__3598 = B3507, object2__3599 = "%set", B3645 = (object1__3598 === object2__3599);
if ($T(B3645))
{var ____3519 = exp__3505[0], identifier__3520 = exp__3505[1], value__3521 = exp__3505[2], valueT__3522 = B3504(value__3521, env__3506), definition_name__3523 = B3502(env__3506, "definition-names", B3359(identifier__3520)), B3646;
if ($T(definition_name__3523))
B3646 = B3463(definition_name__3523, B3502(env__3506, "module", "exports"))
else B3646 = false;
if ($T(B3646))
{var array__3602 = exp__3505, value__3603 = B3455;
array__3602[0] = value__3603;
var array__3606 = exp__3505, value__3607 = [B3652, identifier__3520, valueT__3522];
array__3606[1] = value__3607;
var array__3610 = exp__3505, value__3611 = [B3652, [B3653, [B3495, "exports"], definition_name__3523], identifier__3520];
array__3610[2] = value__3611}
else {var array__3614 = exp__3505, value__3615 = valueT__3522;
array__3614[2] = value__3615};
return exp__3505}
else {var object1__3618 = B3507, object2__3619 = "%define", B3647 = (object1__3618 === object2__3619);
if ($T(B3647))
{var B3648 = B3654, array__3627 = exp__3505, B3628 = array__3627, B3629 = ((B3628 || false).length || 0), B3649 = (B3629 - 1), B3650 = array__3627[B3649], B3651 = [B3650, false];
return [B3648, B3651]}
else return B3500(B3501(B3504, env__3506), exp__3505)}}}}}}}}
else return exp__3505}, false);
exports["transform-statements!"] = B3504}
