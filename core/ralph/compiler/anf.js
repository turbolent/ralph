var B3293 = require("ralph/core")
var B3295 = require("ralph/compiler/utilities")
var B3296 = B3293["%make-function"],
B3297 = B3293["any?"],
B3298 = B3293.curry,
B3299 = B3293["instance?"],
B3300 = B3293["<number>"],
B3301 = B3293["<boolean>"],
B3302 = B3293["<string>"],
B3303 = B3293["<symbol>"],
B3304 = B3293["<keyword>"],
B3305 = B3296("atomicQ", function atomicQ__3306 (expression__3307)
{return B3297(B3298(B3299, expression__3307), [B3300, B3301, B3302, B3303, B3304])}, false)
var trueQ = B3293["true?"],
contains_statementsQ__3321,
B3313 = B3293["<array>"],
B3314 = B3293.not,
B3315 = B3293["empty?"],
B3316 = B3293["binary=="],
B3317 = B3293.last,
B3318 = B3293["symbol-name"],
B3319 = B3293.first,
B3320 = B3296("contains_statementsQ", function contains_statementsQ__3321 (exp__3322)
{B3391:while(true){
var B3384;
if ($T(B3299(exp__3322, B3313)))
{
var sequence__3339 = exp__3322,
B3340 = sequence__3339,
B3341 = ((B3340 || false).length || 0),
B3342 = 0,
value__3343 = (B3341 === B3342);
B3384 = !(trueQ(value__3343))}
else
B3384 = false;
if ($T(B3384))
{
var sequence__3345 = exp__3322,
B3385 = sequence__3345[0],
B3323 = B3318(B3385),
object1__3348 = B3323,
object2__3349 = "%begin",
B3324 = (object1__3348 === object2__3349),
B3386;
if ($T(B3324))
B3386 = B3324
else
{
var object1__3352 = B3323,
object2__3353 = "%if",
B3325 = (object1__3352 === object2__3353);
if ($T(B3325))
B3386 = B3325
else
{
var object1__3356 = B3323,
object2__3357 = "%while",
B3326 = (object1__3356 === object2__3357);
if ($T(B3326))
B3386 = B3326
else
{
var object1__3360 = B3323,
object2__3361 = "%bind",
B3327 = (object1__3360 === object2__3361);
if ($T(B3327))
B3386 = B3327
else
{
var object1__3364 = B3323,
object2__3365 = "%try";
B3386 = (object1__3364 === object2__3365)}}}};
if ($T(B3386))
return true
else
{
var object1__3368 = B3323,
object2__3369 = "%set",
B3387 = (object1__3368 === object2__3369);
if ($T(B3387))
{
var array__3377 = exp__3322,
B3378 = array__3377,
B3379 = ((B3378 || false).length || 0),
B3388 = (B3379 - 1),
B3389 = array__3377[B3388];
arguments = [B3389];
exp__3322 = arguments[0];
continue B3391}
else
{
var object1__3382 = B3323,
object2__3383 = "%method",
B3390 = (object1__3382 === object2__3383);
if ($T(B3390))
return false
else
return B3297(contains_statementsQ__3321, exp__3322)}}};
break}}, false)
{
var B3392,
B3393 = B3293.identity,
B3394 = B3296("normalize_term", function normalize_term__3395 (expression__3396)
{return B3392(expression__3396, B3393)}, false);
exports["normalize-term"] = B3394}
{
var B3544 = $S("%method"),
B3545 = $S("%begin"),
B3546 = $S("%bind"),
B3547 = $S("%if"),
B3548 = $S("%while"),
B3549 = $S("%native"),
B3550 = $S("%try"),
B3551 = $S("%set"),
B3552 = $S("%array"),
B3553 = $S("%object"),
B3554 = $S("%get-property"),
B3555 = $S("%infix"),
B3556 = $S("%native-call"),
B3557 = $S("%native-name"),
B3558 = $S("%plus"),
B3559 = $S("%minus"),
B3560 = $S("%times"),
B3561 = $S("%divide"),
trueQ = B3293["true?"],
normalize__3411,
B3404 = B3293.concatenate,
B3405,
B3406,
B3407 = B3295["expression?"],
B3408 = B3293["member?"],
B3409 = B3293.map,
B3410 = B3293.rest;
B3392 = B3296("normalize", function normalize__3411 (exp__3412, k__3413)
{B3562:while(true){
var B3524;
if ($T(B3299(exp__3412, B3313)))
{
var sequence__3461 = exp__3412,
B3462 = sequence__3461,
B3463 = ((B3462 || false).length || 0),
B3464 = 0,
value__3465 = (B3463 === B3464);
B3524 = !(trueQ(value__3465))}
else
B3524 = false;
if ($T(B3524))
{
var sequence__3467 = exp__3412,
B3525 = sequence__3467[0],
B3414 = B3318(B3525),
object1__3470 = B3414,
object2__3471 = "%method",
B3526 = (object1__3470 === object2__3471);
if ($T(B3526))
{
var ____3415 = exp__3412[0],
name__3416 = exp__3412[1],
arguments__3417 = exp__3412[2],
body__3418 = exp__3412[3];
return k__3413([B3544, name__3416, arguments__3417, B3394(body__3418)])}
else
{
var object1__3474 = B3414,
object2__3475 = "%begin",
B3527 = (object1__3474 === object2__3475);
if ($T(B3527))
{
var ____3419 = exp__3412[0],
exp1__3420 = exp__3412[1],
eT__3421 = $SL.call(exp__3412, 2),
sequence__3486 = eT__3421,
B3487 = sequence__3486,
B3488 = ((B3487 || false).length || 0),
B3489 = 0,
B3528 = (B3488 === B3489);
if ($T(B3528))
{
arguments = [exp1__3420, k__3413];
exp__3412 = arguments[0];
k__3413 = arguments[1];
continue B3562}
else
{
arguments = [exp1__3420, (function B3563 (B3545, B3404, eT__3421, k__3413)
{return function B3422 (aexp1__3423)
{return [B3545, aexp1__3423, normalize__3411(B3404([B3545], eT__3421), k__3413)]}})(B3545, B3404, eT__3421, k__3413)];
exp__3412 = arguments[0];
k__3413 = arguments[1];
continue B3562}}
else
{
var object1__3492 = B3414,
object2__3493 = "%bind",
B3529 = (object1__3492 === object2__3493);
if ($T(B3529))
{
var ____3424 = exp__3412[0],
B3425 = exp__3412[1],
var__3426 = B3425[0],
value__3427 = B3425[1],
body__3428 = exp__3412[2];
arguments = [value__3427, (function B3564 (B3546, var__3426, body__3428, k__3413)
{return function B3429 (avalue__3430)
{return [B3546, [var__3426, avalue__3430], normalize__3411(body__3428, k__3413)]}})(B3546, var__3426, body__3428, k__3413)];
exp__3412 = arguments[0];
k__3413 = arguments[1];
continue B3562}
else
{
var object1__3496 = B3414,
object2__3497 = "%if",
B3530 = (object1__3496 === object2__3497);
if ($T(B3530))
{
var ____3431 = exp__3412[0],
test__3432 = exp__3412[1],
then__3433 = exp__3412[2],
else__3434 = exp__3412[3];
return B3405(test__3432, function B3435 (atest__3436)
{return k__3413([B3547, atest__3436, B3394(then__3433), B3394(else__3434)])})}
else
{
var object1__3500 = B3414,
object2__3501 = "%while",
B3531 = (object1__3500 === object2__3501);
if ($T(B3531))
{
var ____3437 = exp__3412[0],
test__3438 = exp__3412[1],
body__3439 = exp__3412[2],
B3532;
if ($T(B3320(test__3438)))
B3532 = [B3548, true, [B3545, B3394([B3547, test__3438, B3394(body__3439), [B3549, "break"], false])]]
else
B3532 = [B3548, B3394(test__3438), B3394(body__3439)];
return k__3413(B3532)}
else
{
var object1__3504 = B3414,
object2__3505 = "%try",
B3533 = (object1__3504 === object2__3505);
if ($T(B3533))
{
var ____3440 = exp__3412[0],
body__3441 = exp__3412[1],
var__3442 = exp__3412[2],
catch__3443 = exp__3412[3];
return k__3413([B3550, B3394(body__3441), var__3442, B3394(catch__3443)])}
else
{
var object1__3508 = B3414,
object2__3509 = "%set",
B3534 = (object1__3508 === object2__3509);
if ($T(B3534))
{
var ____3444 = exp__3412[0],
var__3445 = exp__3412[1],
value__3446 = exp__3412[2];
return B3405(value__3446, function B3447 (avalue__3448)
{return k__3413([B3551, var__3445, avalue__3448])})}
else
{
var object1__3512 = B3414,
object2__3513 = "%define",
B3449 = (object1__3512 === object2__3513),
B3535;
if ($T(B3449))
B3535 = B3449
else
{
var object1__3516 = B3414,
object2__3517 = "%symbol";
B3535 = (object1__3516 === object2__3517)};
if ($T(B3535))
return k__3413(exp__3412)
else
if ($T(B3320(exp__3412)))
return B3406(exp__3412, k__3413)
else
{
var B3538;
if ($T(B3407(exp__3412)))
{
var sequence__3519 = exp__3412,
B3536 = sequence__3519[0],
B3537 = [B3552, B3553, B3554, B3555, B3549, B3556, B3557, B3558, B3559, B3560, B3561];
B3538 = B3408(B3536, B3537)}
else
B3538 = false;
if ($T(B3538))
{
var sequence__3521 = exp__3412,
B3539 = sequence__3521[0],
B3540 = [B3539],
sequence__3523 = exp__3412,
B3541 = sequence__3523.slice(1),
B3542 = B3409(B3394, B3541),
B3543 = B3404(B3540, B3542);
return k__3413(B3543)}
else
return k__3413(B3409(B3394, exp__3412))}}}}}}}}}
else
return k__3413(exp__3412);
break}}, false)}
{
var B3565;
B3405 = B3296("normalize_value", function normalize_value__3566 (exp__3567, k__3568)
{if ($T(B3320(exp__3567)))
return B3565(exp__3567, k__3568)
else
{
var B3569;
if ($T(B3299(exp__3567, B3313)))
B3569 = B3409(B3394, exp__3567)
else
B3569 = exp__3567;
return k__3568(B3569)}}, false)}
{
var B3571 = B3295["generate-symbol"];
B3565 = B3296("normalizeT", function normalizeT__3572 (exp__3573, k__3574)
{return B3392(exp__3573, function B3575 (aexp__3576)
{if ($T(B3305(aexp__3576)))
return k__3574(aexp__3576)
else
{
var t__3577 = B3571();
return [B3546, [t__3577, aexp__3576], k__3574(t__3577)]}})}, false)}
var B3578 = B3296("normalizeTT", function normalizeTT__3579 (expT__3580, k__3581)
{
var sequence__3592 = expT__3580,
B3593 = sequence__3592,
B3594 = ((B3593 || false).length || 0),
B3595 = 0,
B3596 = (B3594 === B3595);
if ($T(B3596))
return k__3581([])
else
return B3406(expT__3580, k__3581)}, false)
B3406 = B3296("normalize_all", function normalize_all__3599 (exp__3600, k__3601)
{
var sequence__3607 = exp__3600,
B3610 = sequence__3607[0],
B3613 = function B3602 (t__3603)
{
var sequence__3609 = exp__3600,
B3611 = sequence__3609.slice(1),
B3612 = function B3604 (tT__3605)
{return k__3601(B3404([t__3603], tT__3605))};
return B3578(B3611, B3612)};
return B3565(B3610, B3613)}, false)
