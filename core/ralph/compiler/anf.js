var B3299 = require("ralph/core")
var B3301 = require("ralph/compiler/utilities")
var B3302 = B3299["%make-function"],
B3303 = B3299["any?"],
B3304 = B3299.curry,
B3305 = B3299["instance?"],
B3306 = B3299["<number>"],
B3307 = B3299["<boolean>"],
B3308 = B3299["<string>"],
B3309 = B3299["<symbol>"],
B3310 = B3299["<keyword>"],
B3311 = B3302("atomicQ", function atomicQ__3312 (expression__3313)
{return B3303(B3304(B3305, expression__3313), [B3306, B3307, B3308, B3309, B3310])}, false)
var trueQ = B3299["true?"],
contains_statementsQ__3327,
B3319 = B3299["<array>"],
B3320 = B3299.not,
B3321 = B3299["empty?"],
B3322 = B3299["binary=="],
B3323 = B3299.last,
B3324 = B3299["symbol-name"],
B3325 = B3299.first,
B3326 = B3302("contains_statementsQ", function contains_statementsQ__3327 (exp__3328)
{B3397:while(true){
var B3390;
if ($T(B3305(exp__3328, B3319)))
{
var sequence__3345 = exp__3328,
B3346 = sequence__3345,
B3347 = ((B3346 || false).length || 0),
B3348 = 0,
value__3349 = (B3347 === B3348);
B3390 = !(trueQ(value__3349))}
else
B3390 = false;
if ($T(B3390))
{
var sequence__3351 = exp__3328,
B3391 = sequence__3351[0],
B3329 = B3324(B3391),
object1__3354 = B3329,
object2__3355 = "%begin",
B3330 = (object1__3354 === object2__3355),
B3392;
if ($T(B3330))
B3392 = B3330
else
{
var object1__3358 = B3329,
object2__3359 = "%if",
B3331 = (object1__3358 === object2__3359);
if ($T(B3331))
B3392 = B3331
else
{
var object1__3362 = B3329,
object2__3363 = "%while",
B3332 = (object1__3362 === object2__3363);
if ($T(B3332))
B3392 = B3332
else
{
var object1__3366 = B3329,
object2__3367 = "%bind",
B3333 = (object1__3366 === object2__3367);
if ($T(B3333))
B3392 = B3333
else
{
var object1__3370 = B3329,
object2__3371 = "%try";
B3392 = (object1__3370 === object2__3371)}}}};
if ($T(B3392))
return true
else
{
var object1__3374 = B3329,
object2__3375 = "%set",
B3393 = (object1__3374 === object2__3375);
if ($T(B3393))
{
var array__3383 = exp__3328,
B3384 = array__3383,
B3385 = ((B3384 || false).length || 0),
B3394 = (B3385 - 1),
B3395 = array__3383[B3394];
arguments = [B3395];
exp__3328 = arguments[0];
continue B3397}
else
{
var object1__3388 = B3329,
object2__3389 = "%method",
B3396 = (object1__3388 === object2__3389);
if ($T(B3396))
return false
else
return B3303(contains_statementsQ__3327, exp__3328)}}};
break}}, false)
{
var B3398,
B3399 = B3299.identity,
B3400 = B3302("normalize_term", function normalize_term__3401 (expression__3402)
{return B3398(expression__3402, B3399)}, false);
exports["normalize-term"] = B3400}
{
var B3550 = $S("%method"),
B3551 = $S("%begin"),
B3552 = $S("%bind"),
B3553 = $S("%if"),
B3554 = $S("%while"),
B3555 = $S("%native"),
B3556 = $S("%try"),
B3557 = $S("%set"),
B3558 = $S("%array"),
B3559 = $S("%object"),
B3560 = $S("%get-property"),
B3561 = $S("%infix"),
B3562 = $S("%native-call"),
B3563 = $S("%native-name"),
B3564 = $S("%plus"),
B3565 = $S("%minus"),
B3566 = $S("%times"),
B3567 = $S("%divide"),
trueQ = B3299["true?"],
normalize__3417,
B3410 = B3299.concatenate,
B3411,
B3412,
B3413 = B3301["expression?"],
B3414 = B3299["member?"],
B3415 = B3299.map,
B3416 = B3299.rest;
B3398 = B3302("normalize", function normalize__3417 (exp__3418, k__3419)
{B3568:while(true){
var B3530;
if ($T(B3305(exp__3418, B3319)))
{
var sequence__3467 = exp__3418,
B3468 = sequence__3467,
B3469 = ((B3468 || false).length || 0),
B3470 = 0,
value__3471 = (B3469 === B3470);
B3530 = !(trueQ(value__3471))}
else
B3530 = false;
if ($T(B3530))
{
var sequence__3473 = exp__3418,
B3531 = sequence__3473[0],
B3420 = B3324(B3531),
object1__3476 = B3420,
object2__3477 = "%method",
B3532 = (object1__3476 === object2__3477);
if ($T(B3532))
{
var ____3421 = exp__3418[0],
name__3422 = exp__3418[1],
arguments__3423 = exp__3418[2],
body__3424 = exp__3418[3];
return k__3419([B3550, name__3422, arguments__3423, B3400(body__3424)])}
else
{
var object1__3480 = B3420,
object2__3481 = "%begin",
B3533 = (object1__3480 === object2__3481);
if ($T(B3533))
{
var ____3425 = exp__3418[0],
exp1__3426 = exp__3418[1],
eT__3427 = $SL.call(exp__3418, 2),
sequence__3492 = eT__3427,
B3493 = sequence__3492,
B3494 = ((B3493 || false).length || 0),
B3495 = 0,
B3534 = (B3494 === B3495);
if ($T(B3534))
{
arguments = [exp1__3426, k__3419];
exp__3418 = arguments[0];
k__3419 = arguments[1];
continue B3568}
else
{
arguments = [exp1__3426, (function B3569 (B3551, B3410, eT__3427, k__3419)
{return function B3428 (aexp1__3429)
{return [B3551, aexp1__3429, normalize__3417(B3410([B3551], eT__3427), k__3419)]}})(B3551, B3410, eT__3427, k__3419)];
exp__3418 = arguments[0];
k__3419 = arguments[1];
continue B3568}}
else
{
var object1__3498 = B3420,
object2__3499 = "%bind",
B3535 = (object1__3498 === object2__3499);
if ($T(B3535))
{
var ____3430 = exp__3418[0],
B3431 = exp__3418[1],
var__3432 = B3431[0],
value__3433 = B3431[1],
body__3434 = exp__3418[2];
arguments = [value__3433, (function B3570 (B3552, var__3432, body__3434, k__3419)
{return function B3435 (avalue__3436)
{return [B3552, [var__3432, avalue__3436], normalize__3417(body__3434, k__3419)]}})(B3552, var__3432, body__3434, k__3419)];
exp__3418 = arguments[0];
k__3419 = arguments[1];
continue B3568}
else
{
var object1__3502 = B3420,
object2__3503 = "%if",
B3536 = (object1__3502 === object2__3503);
if ($T(B3536))
{
var ____3437 = exp__3418[0],
test__3438 = exp__3418[1],
then__3439 = exp__3418[2],
else__3440 = exp__3418[3];
return B3411(test__3438, function B3441 (atest__3442)
{return k__3419([B3553, atest__3442, B3400(then__3439), B3400(else__3440)])})}
else
{
var object1__3506 = B3420,
object2__3507 = "%while",
B3537 = (object1__3506 === object2__3507);
if ($T(B3537))
{
var ____3443 = exp__3418[0],
test__3444 = exp__3418[1],
body__3445 = exp__3418[2],
B3538;
if ($T(B3326(test__3444)))
B3538 = [B3554, true, [B3551, B3400([B3553, test__3444, B3400(body__3445), [B3555, "break"], false])]]
else
B3538 = [B3554, B3400(test__3444), B3400(body__3445)];
return k__3419(B3538)}
else
{
var object1__3510 = B3420,
object2__3511 = "%try",
B3539 = (object1__3510 === object2__3511);
if ($T(B3539))
{
var ____3446 = exp__3418[0],
body__3447 = exp__3418[1],
var__3448 = exp__3418[2],
catch__3449 = exp__3418[3];
return k__3419([B3556, B3400(body__3447), var__3448, B3400(catch__3449)])}
else
{
var object1__3514 = B3420,
object2__3515 = "%set",
B3540 = (object1__3514 === object2__3515);
if ($T(B3540))
{
var ____3450 = exp__3418[0],
var__3451 = exp__3418[1],
value__3452 = exp__3418[2];
return B3411(value__3452, function B3453 (avalue__3454)
{return k__3419([B3557, var__3451, avalue__3454])})}
else
{
var object1__3518 = B3420,
object2__3519 = "%define",
B3455 = (object1__3518 === object2__3519),
B3541;
if ($T(B3455))
B3541 = B3455
else
{
var object1__3522 = B3420,
object2__3523 = "%symbol";
B3541 = (object1__3522 === object2__3523)};
if ($T(B3541))
return k__3419(exp__3418)
else
if ($T(B3326(exp__3418)))
return B3412(exp__3418, k__3419)
else
{
var B3544;
if ($T(B3413(exp__3418)))
{
var sequence__3525 = exp__3418,
B3542 = sequence__3525[0],
B3543 = [B3558, B3559, B3560, B3561, B3555, B3562, B3563, B3564, B3565, B3566, B3567];
B3544 = B3414(B3542, B3543)}
else
B3544 = false;
if ($T(B3544))
{
var sequence__3527 = exp__3418,
B3545 = sequence__3527[0],
B3546 = [B3545],
sequence__3529 = exp__3418,
B3547 = sequence__3529.slice(1),
B3548 = B3415(B3400, B3547),
B3549 = B3410(B3546, B3548);
return k__3419(B3549)}
else
return k__3419(B3415(B3400, exp__3418))}}}}}}}}}
else
return k__3419(exp__3418);
break}}, false)}
{
var B3571;
B3411 = B3302("normalize_value", function normalize_value__3572 (exp__3573, k__3574)
{if ($T(B3326(exp__3573)))
return B3571(exp__3573, k__3574)
else
{
var B3575;
if ($T(B3305(exp__3573, B3319)))
B3575 = B3415(B3400, exp__3573)
else
B3575 = exp__3573;
return k__3574(B3575)}}, false)}
{
var B3577 = B3301["generate-symbol"];
B3571 = B3302("normalizeT", function normalizeT__3578 (exp__3579, k__3580)
{return B3398(exp__3579, function B3581 (aexp__3582)
{if ($T(B3311(aexp__3582)))
return k__3580(aexp__3582)
else
{
var t__3583 = B3577();
return [B3552, [t__3583, aexp__3582], k__3580(t__3583)]}})}, false)}
var B3584 = B3302("normalizeTT", function normalizeTT__3585 (expT__3586, k__3587)
{
var sequence__3598 = expT__3586,
B3599 = sequence__3598,
B3600 = ((B3599 || false).length || 0),
B3601 = 0,
B3602 = (B3600 === B3601);
if ($T(B3602))
return k__3587([])
else
return B3412(expT__3586, k__3587)}, false)
B3412 = B3302("normalize_all", function normalize_all__3605 (exp__3606, k__3607)
{
var sequence__3613 = exp__3606,
B3616 = sequence__3613[0],
B3619 = function B3608 (t__3609)
{
var sequence__3615 = exp__3606,
B3617 = sequence__3615.slice(1),
B3618 = function B3610 (tT__3611)
{return k__3607(B3410([t__3609], tT__3611))};
return B3584(B3617, B3618)};
return B3571(B3616, B3619)}, false)
