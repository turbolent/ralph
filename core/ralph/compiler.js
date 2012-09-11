{
var B1157;
false;
B1157 = require("ralph/core")}
{
var B3465,
B3466,
B3467,
B3468,
B3469,
B3470,
B3471,
B3472,
B3473,
B3474,
B3475,
B3476,
B3477;
false;
B3465 = require("ralph/stream");
false;
B3466 = require("ralph/format");
false;
B3467 = require("ralph/reader");
false;
B3468 = require("ralph/file-system");
false;
B3469 = require("ralph/compiler/utilities");
false;
B3470 = require("ralph/compiler/alpha");
false;
B3471 = require("ralph/compiler/define-lifting");
false;
B3472 = require("ralph/compiler/free-variables");
false;
B3473 = require("ralph/compiler/anf");
false;
B3474 = require("ralph/compiler/statements");
false;
B3475 = require("ralph/compiler/tco");
false;
B3476 = require("ralph/compiler/flattening");
false;
B3477 = require("ralph/compiler/javascript")}
{
var Mmake_function__3478 = B1157["%make-function"],
symbol__3479 = B1157.symbol,
concatenate__3480 = B1157.concatenate,
symbol_name__3481 = B1157["symbol-name"],
transform_setter_identifier__3482;
false;
transform_setter_identifier__3482 = Mmake_function__3478("transform_setter_identifier", function transform_setter_identifier__3483 (identifier__3484)
{return symbol__3479(concatenate__3480(symbol_name__3481(identifier__3484), "-setter"), false)}, false)}
{
var setter_identifierQ__3485 = B3469["setter-identifier?"],
second__3486 = B1157.second,
identifier_name__3487;
false;
identifier_name__3487 = Mmake_function__3478("identifier_name", function identifier_name__3488 (identifier__3489)
{
var B3492;
if ($T(setter_identifierQ__3485(identifier__3489)))
{
var sequence__3490 = identifier__3489,
B3491 = sequence__3490[1];
B3492 = transform_setter_identifier__3482(B3491)}
else
B3492 = identifier__3489;
return symbol_name__3481(B3492)}, false)}
{
var make_object__3493 = B1157["make-object"],
TmodulesT__3494;
false;
TmodulesT__3494 = make_object__3493()}
{
var Mmake_class__3499 = B1157["%make-class"],
LobjectG__3500 = B1157["<object>"],
LmoduleG__3501;
false;
LmoduleG__3501 = Mmake_class__3499(LobjectG__3500, {name:false,
"native?":false,
exports:function B3495__3502 ()
{return []},
imports:function B3496__3503 ()
{return []},
dependencies:function B3497__3504 ()
{return []},
inline:function B3498__3505 ()
{return []}});
exports["<module>"] = LmoduleG__3501}
{
var make_plain_object__3512 = B1157["make-plain-object"],
LenvironmentG__3513;
false;
LenvironmentG__3513 = Mmake_class__3499(LobjectG__3500, {module:false,
macros:function B3506__3514 ()
{return make_plain_object__3512()},
"symbol-macros":function B3507__3515 ()
{return make_plain_object__3512()},
identifiers:function B3508__3516 ()
{return make_object__3493()},
"defined?":function B3509__3517 ()
{return make_object__3493()},
lifted:function B3510__3518 ()
{return make_object__3493()},
"import-identifiers":function B3511__3519 ()
{return make_plain_object__3512()}});
exports["<environment>"] = LenvironmentG__3513}
{
var Mmake_method__3523 = B1157["%make-method"],
apply__3524 = B1157.apply,
Mnext_method__3525 = B1157["%next-method"],
do__3526 = B1157["do"],
get_setter__3527 = B1157["get-setter"],
get__3528 = B1157.get,
Mkeys__3529 = B1157["%keys"],
initialize__3530;
false;
initialize__3530 = Mmake_method__3523("initialize", function B3520__3531 (env__3532)
{
var rest__3533 = $SL.call(arguments, 1),
B3521__3534 = Mkeys__3529(rest__3533, {module:false}),
module__3535 = B3521__3534.module;
apply__3524(Mnext_method__3525(B3520__3531), env__3532, rest__3533);
return do__3526(function B3522__3536 (name__3537)
{return get_setter__3527(env__3532, "defined?", get__3528(module__3535, "name"), name__3537, true)}, ["%all-arguments", "%this-method"])}, false, LenvironmentG__3513, initialize__3530)}
{
var Tspecial_formsT__3538;
false;
Tspecial_formsT__3538 = make_object__3493()}
{
var expressionQ__3539 = B3469["expression?"],
first__3540 = B1157.first,
find_special_form__3541;
false;
find_special_form__3541 = Mmake_function__3478("find_special_form", function find_special_form__3542 (form__3543, env__3544)
{if ($T(expressionQ__3539(form__3543)))
{
var sequence__3545 = form__3543,
B3546 = sequence__3545[0],
B3547 = symbol_name__3481(B3546);
return get__3528(Tspecial_formsT__3538, B3547)}}, false)}
{
var B3576 = $K("message"),
B3577 = $S("%method", "ralph/core"),
ralphScoreCCtrueQ = B1157["true?"],
not__3550 = B1157.not,
binaryEE__3551 = B1157["binary=="],
signal__3552 = B1157.signal,
make__3553 = B1157.make,
LerrorG__3554 = B1157["<error>"],
curry__3555 = B1157.curry,
bindN__3556 = B3469["bind!"],
unbindN__3557 = B3469["unbind!"],
macroexpand_all__3558,
map__3559 = B1157.map,
rcurry__3560 = B1157.rcurry,
localize__3561 = B3469.localize;
Tspecial_formsT__3538["%method"] = function B3548__3562 (env__3563, name__3564, arguments__3565, body__3566)
{
var identifiersT__3567 = map__3559(rcurry__3560(localize__3561, env__3563), concatenate__3480([name__3564], arguments__3565));
do__3526(function B3549__3568 (identifierT__3569)
{
var value__3573 = binaryEE__3551(get__3528(identifierT__3569, "module"), get__3528(env__3563, "module", "name")),
B3575 = !(ralphScoreCCtrueQ(value__3573));
if ($T(B3575))
{
var error__3574 = make__3553(LerrorG__3554, B3576, "Can't create method using identifier with external qualifier");
throw(error__3574);
return false}}, identifiersT__3567);
do__3526(curry__3555(bindN__3556, env__3563), identifiersT__3567);
var bodyT__3570 = macroexpand_all__3558(body__3566, env__3563);
do__3526(curry__3555(unbindN__3557, env__3563), identifiersT__3567);
var nameT__3571 = identifiersT__3567[0],
argumentsT__3572 = $SL.call(identifiersT__3567, 1);
return [B3577, nameT__3571, argumentsT__3572, bodyT__3570]}}
{
var B3584 = $S("%set", "ralph/core"),
qualify__3579;
Tspecial_formsT__3538["%set"] = function B3578__3580 (env__3581, identifier__3582, value__3583)
{return [B3584, qualify__3579(identifier__3582, env__3581), macroexpand_all__3558(value__3583, env__3581)]}}
{
var B3598 = $S("%bind", "ralph/core");
Tspecial_formsT__3538["%bind"] = function B3585__3586 (env__3587, binding__3588, body__3589)
{
var var__3590 = binding__3588[0],
value__3591 = binding__3588[1];
bindN__3556(env__3587, var__3590);
var varT__3592 = localize__3561(var__3590, env__3587),
valueT__3593 = macroexpand_all__3558(value__3591, env__3587),
value__3595 = binaryEE__3551(get__3528(varT__3592, "module"), get__3528(env__3587, "module", "name")),
B3597 = !(ralphScoreCCtrueQ(value__3595));
if ($T(B3597))
{
var error__3596 = make__3553(LerrorG__3554, B3576, "Can't bind using identifier with external qualifier");
throw(error__3596);
false};
var result__3594 = [B3598, [varT__3592, valueT__3593], macroexpand_all__3558(body__3589, env__3587)];
unbindN__3557(env__3587, var__3590);
return result__3594}}
{
var Tcore_macrosT__3599;
false;
Tcore_macrosT__3599 = make_object__3493();
exports["*core-macros*"] = Tcore_macrosT__3599}
{
var B3627 = $REST,
B3628 = $KEY,
B3629 = $K("end"),
B3630 = $K("start"),
find_key__3602 = B1157["find-key"],
E__3603 = B1157["="],
copy_sequence__3604 = B1157["copy-sequence"],
size__3605 = B1157.size,
element__3606 = B1157.element,
inc__3607 = B1157.inc,
analyze_lambda_list__3608;
false;
analyze_lambda_list__3608 = Mmake_function__3478("analyze_lambda_list", function analyze_lambda_list__3609 (list__3610)
{
var position__3611 = function position__3612 (symbol__3613)
{return find_key__3602(list__3610, curry__3555(E__3603, symbol__3613))},
rest__3614 = position__3611(B3627),
key__3615 = position__3611(B3628),
B3600__3616 = rest__3614,
B3621;
if ($T(B3600__3616))
{B3621 = B3600__3616}
else
{
var B3601__3617 = key__3615;
if ($T(B3601__3617))
{B3621 = B3601__3617}
else
{
var object__3618 = list__3610;
B3621 = ((object__3618 || false).length || 0)}};
var B3622 = copy_sequence__3604(list__3610, B3629, B3621),
B3624;
if ($T(rest__3614))
{
var number__3619 = rest__3614,
B3623 = (number__3619 + 1);
B3624 = element__3606(list__3610, B3623)}
else
B3624 = false;
var B3626;
if ($T(key__3615))
{
var number__3620 = key__3615,
B3625 = (number__3620 + 1);
B3626 = copy_sequence__3604(list__3610, B3630, B3625)}
else
B3626 = false;
return [B3622, B3624, B3626]}, false);
exports["analyze-lambda-list"] = analyze_lambda_list__3608}
{
var reduce__3632 = B1157.reduce,
wrap__3633;
false;
wrap__3633 = Mmake_function__3478("wrap", function wrap__3634 (form__3635)
{
var wrappers__3636 = $SL.call(arguments, 1);
return reduce__3632(function B3631__3637 (result__3638, wrapper__3639)
{return wrapper__3639(result__3638)}, form__3635, wrappers__3636)}, false)}
{
var B3695 = $S("bind-properties", "ralph/core"),
B3696 = $S("%keys", "ralph/core"),
B3697 = $S("%object", "ralph/core"),
B3698 = $S("bind", "ralph/core"),
B3699 = $S("%native-call", "ralph/core"),
ralphScoreCCrest = B1157.rest,
emptyQ__3646 = B1157["empty?"],
reduce1__3647 = B1157.reduce1,
instanceQ__3648 = B1157["instance?"],
LarrayG__3649 = B1157["<array>"],
generate_symbol__3650 = B3469["generate-symbol"],
wrap_restSkeys__3651;
false;
wrap_restSkeys__3651 = Mmake_function__3478("wrap_restSkeys", function wrap_restSkeys__3652 (body__3653, all__3654, required__3655, rest__3656, key__3657)
{
var restQ__3658 = rest__3656,
B3640__3659 = rest__3656,
rest__3660;
if ($T(B3640__3659))
{rest__3660 = B3640__3659}
else
{
var value__3673 = emptyQ__3646(key__3657),
B3679 = !(ralphScoreCCtrueQ(value__3673));
if ($T(B3679))
{rest__3660 = generate_symbol__3650()}
else
rest__3660 = false};
return wrap__3633(body__3653, function B3641__3661 (body__3662)
{
var sequence__3674 = key__3657,
B3680 = binaryEE__3551(size__3605(sequence__3674), 0);
if ($T(B3680))
{return body__3662}
else
{
var key_values__3665 = map__3559(function B3642__3663 (binding__3664)
{if ($T(instanceQ__3648(binding__3664, LarrayG__3649)))
{return binding__3664}
else
return [binding__3664, false]}, key__3657),
B3681 = B3695,
B3682 = map__3559(first__3540, key_values__3665),
B3683 = B3696,
B3684 = [B3697],
values__3676 = map__3559(function B3643__3666 (key_value__3667)
{
var key__3668 = key_value__3667[0],
value__3669 = key_value__3667[1];
return [symbol_name__3481(key__3668), value__3669]}, key_values__3665),
function__3675 = concatenate__3480,
B3685 = reduce__3632(function__3675, first__3540(values__3676), ralphScoreCCrest(values__3676)),
B3686 = concatenate__3480(B3684, B3685),
B3687 = [B3683, rest__3660, B3686];
return [B3681, B3682, B3687, body__3662]}}, function B3644__3670 (body__3671)
{
var B3645__3672 = restQ__3658,
B3688;
if ($T(B3645__3672))
{B3688 = B3645__3672}
else
{
var value__3677 = emptyQ__3646(key__3657);
B3688 = !(ralphScoreCCtrueQ(value__3677))};
if ($T(B3688))
{
var B3689 = B3698,
B3690 = B3699,
object__3678 = required__3655,
B3691 = ((object__3678 || false).length || 0),
B3692 = [B3690, "$SL.call", all__3654, B3691],
B3693 = [rest__3660, B3692],
B3694 = [B3693];
return [B3689, B3694, body__3671]}
else
return body__3671})}, false)}
{
var maybe_begin__3701 = B3469["maybe-begin"];
Tcore_macrosT__3599.begin = function B3700__3702 (____3703)
{
var expressions__3704 = $SL.call(arguments, 1);
return maybe_begin__3701(expressions__3704)}}
{
var B3715 = $S("%all-arguments"),
named_method__3706;
false;
named_method__3706 = Mmake_function__3478("named_method", function named_method__3707 (name__3708, arguments__3709, body__3710)
{
var B3705__3711 = analyze_lambda_list__3608(arguments__3709),
required__3712 = B3705__3711[0],
rest__3713 = B3705__3711[1],
key__3714 = B3705__3711[2];
return [B3577, name__3708, required__3712, wrap_restSkeys__3651(body__3710, B3715, required__3712, rest__3713, key__3714)]}, false)}
Tcore_macrosT__3599.method = function B3716__3717 (____3718, arguments__3719)
{
var body__3720 = $SL.call(arguments, 2);
return named_method__3706(generate_symbol__3650(), arguments__3719, maybe_begin__3701(body__3720))}
{
var LsymbolG__3723 = B1157["<symbol>"],
reverse__3724 = B1157.reverse;
Tcore_macrosT__3599.bind = function B3721__3725 (____3726, bindings__3727)
{
var body__3728 = $SL.call(arguments, 2),
sequence__3732 = bindings__3727,
B3733 = binaryEE__3551(size__3605(sequence__3732), 0);
if ($T(B3733))
{return maybe_begin__3701(body__3728)}
else
return reduce__3632(function B3722__3729 (body__3730, binding__3731)
{
var B3734 = B3598,
B3735;
if ($T(instanceQ__3648(binding__3731, LsymbolG__3723)))
{B3735 = [binding__3731, false]}
else
B3735 = binding__3731;
return [B3734, B3735, body__3730]}, maybe_begin__3701(body__3728), reverse__3724(bindings__3727))}}
{
var B3742 = $S("%if", "ralph/core");
Tcore_macrosT__3599["if"] = function B3736__3737 (____3738, test__3739, then__3740, else__3741)
{return [B3742, test__3739, then__3740, else__3741]}}
Tcore_macrosT__3599["set!"] = function B3743__3744 (____3745, place__3746)
{
var values__3747 = $SL.call(arguments, 2),
B3751;
if ($T(instanceQ__3648(place__3746, LarrayG__3649)))
{
var value__3748 = binaryEE__3551(symbol_name__3481(first__3540(place__3746)), "%get-property");
B3751 = !(ralphScoreCCtrueQ(value__3748))}
else
B3751 = false;
if ($T(B3751))
{
var sequence__3749 = place__3746,
B3752 = sequence__3749[0],
B3753 = transform_setter_identifier__3482(B3752),
B3754 = [B3753],
B3755 = ralphScoreCCrest(place__3746);
return concatenate__3480(B3754, B3755, values__3747)}
else
{
var B3756 = B3584,
sequence__3750 = values__3747,
B3757 = sequence__3750[0];
return [B3756, place__3746, B3757]}}
{
var B3767 = $S("set!", "ralph/core"),
B3768 = $S("parallel-set!", "ralph/core");
Tcore_macrosT__3599["parallel-set!"] = function B3758__3759 (____3760, var__3761, value__3762)
{
var clauses__3763 = $SL.call(arguments, 3),
sequence__3765 = clauses__3763,
B3766 = binaryEE__3551(size__3605(sequence__3765), 0);
if ($T(B3766))
{return [B3767, var__3761, value__3762]}
else
{
var temp__3764 = generate_symbol__3650();
return [B3698, [[temp__3764, value__3762]], concatenate__3480([B3768], clauses__3763), [B3767, var__3761, temp__3764]]}}}
{
var B3784 = $K("else"),
B3785 = $S("if", "ralph/core"),
B3786 = $S("cond", "ralph/core");
Tcore_macrosT__3599.cond = function B3769__3771 (____3772)
{
var cases__3773 = $SL.call(arguments, 1),
value__3778 = emptyQ__3646(cases__3773),
B3782 = !(ralphScoreCCtrueQ(value__3778));
if ($T(B3782))
{
var sequence__3779 = cases__3773,
B3770__3774 = sequence__3779[0],
test__3775 = B3770__3774[0],
then__3776 = $SL.call(B3770__3774, 1),
then__3777 = maybe_begin__3701(then__3776),
object2__3781 = B3784,
object1__3780 = test__3775,
B3783 = (object1__3780 === object2__3781);
if ($T(B3783))
{return then__3777}
else
return [B3785, test__3775, then__3777, concatenate__3480([B3786], ralphScoreCCrest(cases__3773))]}}}
Tcore_macrosT__3599.when = function B3787__3788 (____3789, test__3790)
{
var body__3791 = $SL.call(arguments, 2);
return [B3785, test__3790, maybe_begin__3701(body__3791), false]}
{
var B3797 = $S("not", "ralph/core");
Tcore_macrosT__3599.unless = function B3792__3793 (____3794, test__3795)
{
var body__3796 = $SL.call(arguments, 2);
return [B3785, [B3797, test__3795], maybe_begin__3701(body__3796), false]}}
{
var B3816 = $S("when", "ralph/core"),
B3817 = $S("and", "ralph/core");
Tcore_macrosT__3599.and = function B3798__3800 (____3801)
{
var values__3802 = $SL.call(arguments, 1),
object__3804 = values__3802,
B3799__3803 = ((object__3804 || false).length || 0),
object2__3806 = 0,
object1__3805 = B3799__3803,
B3811 = (object1__3805 === object2__3806);
if ($T(B3811))
{return true}
else
{
var object2__3808 = 1,
object1__3807 = B3799__3803,
B3812 = (object1__3807 === object2__3808);
if ($T(B3812))
{
var sequence__3809 = values__3802;
return sequence__3809[0]}
else
{
var B3813 = B3816,
sequence__3810 = values__3802,
B3814 = sequence__3810[0],
B3815 = concatenate__3480([B3817], ralphScoreCCrest(values__3802));
return [B3813, B3814, B3815]}}}}
{
var B3839 = $S("or", "ralph/core");
Tcore_macrosT__3599.or = function B3818__3820 (____3821)
{
var values__3822 = $SL.call(arguments, 1),
object__3825 = values__3822,
B3819__3823 = ((object__3825 || false).length || 0),
object2__3827 = 0,
object1__3826 = B3819__3823,
B3832 = (object1__3826 === object2__3827);
if ($T(B3832))
{return false}
else
{
var object2__3829 = 1,
object1__3828 = B3819__3823,
B3833 = (object1__3828 === object2__3829);
if ($T(B3833))
{
var sequence__3830 = values__3822;
return sequence__3830[0]}
else
{
var value__3824 = generate_symbol__3650(),
B3834 = B3698,
sequence__3831 = values__3822,
B3835 = sequence__3831[0],
B3836 = [value__3824, B3835],
B3837 = [B3836],
B3838 = [B3785, value__3824, value__3824, concatenate__3480([B3839], ralphScoreCCrest(values__3822))];
return [B3834, B3837, B3838]}}}}
Tcore_macrosT__3599["if-bind"] = function B3840__3841 (____3842, binding__3843, then__3844, else__3845)
{
var var__3846 = binding__3843[0],
value__3847 = binding__3843[1],
temp__3848 = generate_symbol__3650();
return [B3698, [[temp__3848, value__3847]], [B3785, temp__3848, [B3698, [[var__3846, temp__3848]], then__3844], else__3845]]}
{
var B3854 = $S("%while", "ralph/core");
Tcore_macrosT__3599["while"] = function B3849__3850 (____3851, test__3852)
{
var body__3853 = $SL.call(arguments, 2);
return [B3854, test__3852, maybe_begin__3701(body__3853)]}}
{
var B3860 = $S("while", "ralph/core");
Tcore_macrosT__3599.until = function B3855__3856 (____3857, test__3858)
{
var body__3859 = $SL.call(arguments, 2);
return concatenate__3480([B3860, [B3797, test__3858]], body__3859)}}
{
var B3881 = $S("for", "ralph/core"),
B3882 = $S("+", "ralph/core"),
B3883 = $S(">=", "ralph/core");
Tcore_macrosT__3599.dotimes = function B3861__3863 (____3864, binding__3865)
{
var body__3866 = $SL.call(arguments, 2),
temp__3867 = generate_symbol__3650(),
var__3868 = binding__3865[0],
count__3869 = binding__3865[1],
result__3870 = binding__3865[2],
B3872 = B3698,
B3873 = [[temp__3867, count__3869]],
B3874 = B3881,
B3875 = [[var__3868, 0, [B3882, var__3868, 1]]],
B3876 = [B3883, var__3868, temp__3867],
B3862__3871 = result__3870,
B3877;
if ($T(B3862__3871))
{B3877 = B3862__3871}
else
B3877 = false;
var B3878 = [B3876, B3877],
B3879 = [B3874, B3875, B3878],
B3880 = concatenate__3480(B3879, body__3866);
return [B3872, B3873, B3880]}}
{
var B3936 = $S("method", "ralph/core"),
B3937 = $S("begin", "ralph/core"),
anyQ__3892 = B1157["any?"],
push_last__3893 = B1157["push-last"],
slice__3894 = B1157.slice,
third__3895 = B1157.third;
Tcore_macrosT__3599["for"] = function B3884__3896 (____3897, clauses__3898, end__3899)
{
var body__3900 = $SL.call(arguments, 3),
init_clauses__3901 = [],
next_clauses__3902 = [],
vars__3903 = map__3559(first__3540, clauses__3898),
B3885__3904 = clauses__3898,
B3886__3905,
B3888__3906,
B3887__3907 = [B3885__3904];
while (true)
{
var B3889__3908 = B3886__3905,
value__3913;
if ($T(B3889__3908))
{value__3913 = B3889__3908}
else
value__3913 = anyQ__3892(emptyQ__3646, B3887__3907);
var B3924 = !(ralphScoreCCtrueQ(value__3913));
if ($T(B3924))
{
var sequence__3914 = B3885__3904,
clause__3909 = sequence__3914[0];
(function B3890__3910 (clause__3911)
{
var value__3916 = slice__3894(clause__3911, 0, 2),
array__3915 = init_clauses__3901;
array__3915.push(value__3916);
array__3915;
var value__3918 = first__3540(clause__3911),
array__3917 = next_clauses__3902;
array__3917.push(value__3918);
array__3917;
var value__3920 = third__3895(clause__3911),
array__3919 = next_clauses__3902;
array__3919.push(value__3920);
return array__3919})(clause__3909);
B3885__3904 = ralphScoreCCrest(B3885__3904);
B3887__3907 = [B3885__3904]}
else
break};
B3888__3906;
var B3925 = B3698,
B3926 = B3860,
sequence__3921 = end__3899,
B3891__3912 = binaryEE__3551(size__3605(sequence__3921), 0),
B3929;
if ($T(B3891__3912))
{B3929 = B3891__3912}
else
{
var B3927 = B3797,
sequence__3922 = end__3899,
B3928 = sequence__3922[0];
B3929 = [B3927, B3928]};
var B3930 = concatenate__3480([concatenate__3480([B3936, vars__3903], body__3900)], vars__3903),
B3931 = concatenate__3480([B3768], next_clauses__3902),
B3932 = [B3926, B3929, B3930, B3931],
B3933 = concatenate__3480(B3932),
value__3923 = emptyQ__3646(ralphScoreCCrest(end__3899)),
B3934 = !(ralphScoreCCtrueQ(value__3923)),
B3935;
if ($T(B3934))
{B3935 = concatenate__3480([B3937], ralphScoreCCrest(end__3899))}
else
B3935 = false;
return [B3925, init_clauses__3901, B3933, B3935]}}
{
var B4004 = $S("rest", "ralph/core"),
B4005 = $S("%array", "ralph/core"),
B4006 = $S("until", "ralph/compiler"),
B4007 = $S("any?", "ralph/core"),
B4008 = $S("empty?", "ralph/core"),
B4009 = $S("first", "ralph/core");
Tcore_macrosT__3599["for-each"] = function B3938__3944 (____3945, clauses__3946, end__3947)
{
var body__3948 = $SL.call(arguments, 3),
clauses__3951 = map__3559(function B3939__3949 (clause__3950)
{return concatenate__3480([generate_symbol__3650()], clause__3950)}, clauses__3946),
endQ__3952 = generate_symbol__3650(),
values__3953 = generate_symbol__3650(),
result__3954 = generate_symbol__3650(),
B3976 = B3937,
vars__3955 = map__3559(second__3486, clauses__3951),
B3977 = concatenate__3480([concatenate__3480([B3936, vars__3955], body__3948)], vars__3955),
B3978 = [B3976, B3977],
B3984 = map__3559(function B3940__3956 (clause__3957)
{
var B3979 = B3767,
sequence__3972 = clause__3957,
B3980 = sequence__3972[0],
B3981 = B4004,
sequence__3973 = clause__3957,
B3982 = sequence__3973[0],
B3983 = [B3981, B3982];
return [B3979, B3980, B3983]}, clauses__3951),
B3985 = [[B3767, values__3953, concatenate__3480([B4005], map__3559(first__3540, clauses__3951))]],
body__3958 = concatenate__3480(B3978, B3984, B3985),
B3986 = B3698,
B3987 = concatenate__3480(map__3559(function B3941__3959 (clause__3960)
{
var temp__3961 = clause__3960[0],
var__3962 = clause__3960[1],
values__3963 = clause__3960[2];
return [temp__3961, values__3963]}, clauses__3951), [[endQ__3952, false], [result__3954, false], [values__3953, concatenate__3480([B4005], map__3559(first__3540, clauses__3951))]]),
B3988 = B4006,
B3989 = [B3839, endQ__3952, [B4007, B4008, values__3953]],
B3990 = B3698,
B3991 = map__3559(function B3942__3964 (clause__3965)
{
var temp__3966 = clause__3965[0],
var__3967 = clause__3965[1],
values__3968 = clause__3965[2];
return [var__3967, [B4009, temp__3966]]}, clauses__3951),
sequence__3974 = end__3947,
B3943__3969 = sequence__3974[0],
B4001;
if ($T(B3943__3969))
{
var end_test__3970 = B3943__3969,
B3992 = B3785,
B3993 = B3937,
B3994 = B3767,
results__3971 = ralphScoreCCrest(end__3947),
sequence__3975 = results__3971,
B3995 = binaryEE__3551(size__3605(sequence__3975), 0),
B3996;
if ($T(B3995))
{B3996 = [false]}
else
B3996 = results__3971;
var B3997 = maybe_begin__3701(B3996),
B3998 = [B3994, result__3954, B3997],
B3999 = [B3767, endQ__3952, true],
B4000 = [B3993, B3998, B3999];
B4001 = [B3992, end_test__3970, B4000, body__3958]}
else
B4001 = body__3958;
var B4002 = [B3990, B3991, B4001],
B4003 = [B3988, B3989, B4002];
return [B3986, B3987, B4003, result__3954]}}
{
var B4020 = $S("%get-property", "ralph/core");
Tcore_macrosT__3599["bind-properties"] = function B4010__4012 (____4013, properties__4014, object__4015)
{
var body__4016 = $SL.call(arguments, 3),
objectT__4017 = generate_symbol__3650();
return concatenate__3480([B3698, concatenate__3480([[objectT__4017, object__4015]], map__3559(function B4011__4018 (property__4019)
{return [property__4019, [B4020, objectT__4017, symbol_name__3481(property__4019)]]}, properties__4014))], body__4016)}}
Tcore_macrosT__3599.select = function B4021__4023 (____4024, value__4025, test__4026)
{
var cases__4027 = $SL.call(arguments, 3),
valueT__4028 = generate_symbol__3650(),
testT__4029;
if ($T(instanceQ__3648(test__4026, LsymbolG__3723)))
{testT__4029 = test__4026}
else
testT__4029 = generate_symbol__3650();
var test_expression__4030 = function test_expression__4031 (test_value__4032)
{return [testT__4029, valueT__4028, test_value__4032]},
B4039 = B3698,
B4040 = [[valueT__4028, value__4025]],
B4041;
if ($T(instanceQ__3648(test__4026, LsymbolG__3723)))
{B4041 = []}
else
B4041 = [[testT__4029, test__4026]];
var B4042 = concatenate__3480(B4040, B4041),
B4044 = concatenate__3480([B3786], map__3559(function B4022__4033 (case__4034)
{
var tests__4035 = case__4034[0],
then__4036 = $SL.call(case__4034, 1),
object2__4038 = B3784,
object1__4037 = tests__4035,
B4043 = (object1__4037 === object2__4038);
if ($T(B4043))
{return case__4034}
else
return concatenate__3480([concatenate__3480([B3839], map__3559(test_expression__4030, tests__4035))], then__4036)}, cases__4027));
return [B4039, B4042, B4044]}
{
var destructure__4047;
false;
destructure__4047 = Mmake_function__3478("destructure", function destructure__4048 (bindings__4049, values__4050, body__4051)
{if ($T(instanceQ__3648(values__4050, LsymbolG__3723)))
{
var B4045__4052 = analyze_lambda_list__3608(bindings__4049),
required__4053 = B4045__4052[0],
rest__4054 = B4045__4052[1],
key__4055 = B4045__4052[2],
object__4061 = required__4053,
i__4056 = ((object__4061 || false).length || 0);
return reduce__3632(function B4046__4057 (body__4058, binding__4059)
{
i__4056 = (i__4056 - 1);
if ($T(instanceQ__3648(binding__4059, LsymbolG__3723)))
{return [B3698, [[binding__4059, [B4020, values__4050, i__4056]]], body__4058]}
else
return destructure__4048(binding__4059, [B4020, values__4050, i__4056], body__4058)}, wrap_restSkeys__3651(body__4051, values__4050, required__4053, rest__4054, key__4055), reverse__3724(required__4053))}
else
{
var var__4060 = generate_symbol__3650();
return [B3698, [[var__4060, values__4050]], destructure__4048(bindings__4049, var__4060, body__4051)]}}, false)}
Tcore_macrosT__3599["destructuring-bind"] = function B4062__4063 (____4064, bindings__4065, values__4066)
{
var body__4067 = $SL.call(arguments, 3);
return destructure__4047(bindings__4065, values__4066, concatenate__3480([B3937], body__4067))}
Tcore_macrosT__3599["bind-methods"] = function B4068__4070 (____4071, bindings__4072)
{
var body__4073 = $SL.call(arguments, 2);
return concatenate__3480([B3698, map__3559(first__3540, bindings__4072)], map__3559(function B4069__4074 (binding__4075)
{
var identifier__4076 = binding__4075[0],
arguments__4077 = binding__4075[1],
body__4078 = $SL.call(binding__4075, 2);
return [B3767, identifier__4076, named_method__3706(identifier__4076, arguments__4077, maybe_begin__3701(body__4078))]}, bindings__4072), body__4073)}
Tcore_macrosT__3599["inc!"] = function B4079__4081 (____4082, object__4083, value__4084)
{
var B4086 = B3767,
B4087 = B3882,
B4080__4085 = value__4084,
B4088;
if ($T(B4080__4085))
{B4088 = B4080__4085}
else
B4088 = 1;
var B4089 = [B4087, object__4083, B4088];
return [B4086, object__4083, B4089]}
{
var B4101 = $S("-", "ralph/core");
Tcore_macrosT__3599["dec!"] = function B4090__4092 (____4093, object__4094, value__4095)
{
var B4097 = B3767,
B4098 = B4101,
B4091__4096 = value__4095,
B4099;
if ($T(B4091__4096))
{B4099 = B4091__4096}
else
B4099 = 1;
var B4100 = [B4098, object__4094, B4099];
return [B4097, object__4094, B4100]}}
{
var B4108 = $S("%plus", "ralph/core");
Tcore_macrosT__3599["+"] = function B4102__4103 (____4104)
{
var values__4105 = $SL.call(arguments, 1),
sequence__4106 = values__4105,
B4107 = binaryEE__3551(size__3605(sequence__4106), 0);
if ($T(B4107))
{return 0}
else
return concatenate__3480([B4108], values__4105)}}
{
var B4116 = $S("%minus", "ralph/core");
Tcore_macrosT__3599["-"] = function B4109__4110 (____4111, minuend__4112)
{
var subtrahends__4113 = $SL.call(arguments, 2),
sequence__4114 = subtrahends__4113,
B4115 = binaryEE__3551(size__3605(sequence__4114), 0);
if ($T(B4115))
{return [B3699, "-", minuend__4112]}
else
return concatenate__3480([B4116, minuend__4112], subtrahends__4113)}}
{
var B4123 = $S("%times", "ralph/core");
Tcore_macrosT__3599["*"] = function B4117__4118 (____4119)
{
var values__4120 = $SL.call(arguments, 1),
sequence__4121 = values__4120,
B4122 = binaryEE__3551(size__3605(sequence__4121), 0);
if ($T(B4122))
{return 1}
else
return concatenate__3480([B4123], values__4120)}}
{
var B4131 = $S("%divide", "ralph/core");
Tcore_macrosT__3599["/"] = function B4124__4125 (____4126, numerator__4127)
{
var denominators__4128 = $SL.call(arguments, 2),
sequence__4129 = denominators__4128,
B4130 = binaryEE__3551(size__3605(sequence__4129), 0);
if ($T(B4130))
{return [B4131, 1, numerator__4127]}
else
return concatenate__3480([B4131, numerator__4127], denominators__4128)}}
{
var B4135 = $S("next-method", "ralph/compiler"),
B4136 = $S("%native", "ralph/core");
Tcore_macrosT__3599["call-next-method"] = function B4132__4133 (____4134)
{return [[B4020, B4135, "apply"], [B4136, "null"], B3715]}}
{
var B4140 = $S("%symbol", "ralph/core"),
transform_quoted__4137;
false;
transform_quoted__4137 = Mmake_function__3478("transform_quoted", function transform_quoted__4138 (form__4139)
{if ($T(instanceQ__3648(form__4139, LarrayG__3649)))
{return concatenate__3480([B4005], map__3559(transform_quoted__4138, form__4139))}
else
if ($T(instanceQ__3648(form__4139, LsymbolG__3723)))
{return [B4140, symbol_name__3481(form__4139)]}
else
return form__4139}, false)}
Tcore_macrosT__3599.quote = function B4141__4142 (____4143, exp__4144)
{return transform_quoted__4137(exp__4144)}
{
var boundQ__4147 = B3469["bound?"],
find_moduleSimport_name__4148,
transform_backquoted__4149;
false;
transform_backquoted__4149 = Mmake_function__3478("transform_backquoted", function transform_backquoted__4150 (form__4151, env__4152)
{
var B4145__4153 = form__4151;
if ($T(instanceQ__3648(B4145__4153, LarrayG__3649)))
{
var value__4158 = emptyQ__3646(form__4151),
B4164 = !(ralphScoreCCtrueQ(value__4158)),
B4165;
if ($T(B4164))
{
var object2__4160 = "%comma",
object1__4159 = symbol_name__3481(first__3540(form__4151));
B4165 = (object1__4159 === object2__4160)}
else
B4165 = false;
if ($T(B4165))
{
var sequence__4161 = form__4151;
return sequence__4161[1]}
else
return concatenate__3480([B4005], map__3559(rcurry__3560(transform_backquoted__4150, env__4152), form__4151))}
else
if ($T(instanceQ__3648(B4145__4153, LsymbolG__3723)))
{
var name__4154 = symbol_name__3481(form__4151),
value__4162 = boundQ__4147(env__4152, form__4151),
B4166 = !(ralphScoreCCtrueQ(value__4162)),
B4146__4155;
if ($T(B4166))
{B4146__4155 = find_moduleSimport_name__4148(name__4154, env__4152)}
else
B4146__4155 = false;
var module__4157;
if ($T(B4146__4155))
{
var moduleSimport_name__4156 = B4146__4155,
sequence__4163 = moduleSimport_name__4156;
module__4157 = sequence__4163[0]}
else
module__4157 = get__3528(env__4152, "module");
return [B4140, name__4154, get__3528(module__4157, "name")]}
else
return form__4151}, false)}
Tcore_macrosT__3599["%backquote"] = function B4167__4168 (env__4169, exp__4170)
{return transform_backquoted__4149(exp__4170, env__4169)}
Tcore_macrosT__3599["%comma"] = function B4171__4172 (____4173, value__4174)
{
var error__4175 = make__3553(LerrorG__3554, B3576, "comma not inside backquote");
throw(error__4175);
return false}
{
var Tdot_name_errorT__4176;
false;
Tdot_name_errorT__4176 = make__3553(LerrorG__3554, B3576, "unsupported name for call in dot")}
{
var LstringG__4180 = B1157["<string>"];
Tcore_macrosT__3599["."] = function B4177__4181 (____4182, value__4183)
{
var calls__4184 = $SL.call(arguments, 2);
return reduce__3632(function B4178__4185 (value__4186, call__4187)
{
var property__4188 = call__4187[0],
arguments__4189 = $SL.call(call__4187, 1),
B4192 = B4020,
B4179__4190 = property__4188,
B4193;
if ($T(instanceQ__3648(B4179__4190, LstringG__4180)))
{B4193 = property__4188}
else
if ($T(instanceQ__3648(B4179__4190, LsymbolG__3723)))
{B4193 = symbol_name__3481(property__4188)}
else
{
var error__4191 = Tdot_name_errorT__4176;
throw(error__4191);
B4193 = false};
var B4194 = [B4192, value__4186, B4193],
B4195 = [B4194];
return concatenate__3480(B4195, arguments__4189)}, value__4183, calls__4184)}}
{
var simplify_arguments__4198;
false;
simplify_arguments__4198 = Mmake_function__3478("simplify_arguments", function simplify_arguments__4199 (arguments__4200)
{
var B4196__4201 = analyze_lambda_list__3608(arguments__4200),
required__4202 = B4196__4201[0],
rest__4203 = B4196__4201[1],
key__4204 = B4196__4201[2],
B4208 = map__3559(function B4197__4205 (argument__4206)
{if ($T(instanceQ__3648(argument__4206, LarrayG__3649)))
{
var sequence__4207 = argument__4206;
return sequence__4207[0]}
else
return argument__4206}, required__4202),
B4209;
if ($T(rest__4203))
{B4209 = concatenate__3480([B3627], rest__4203)}
else
B4209 = [];
var B4210;
if ($T(key__4204))
{B4210 = concatenate__3480([B3628], key__4204)}
else
B4210 = [];
return concatenate__3480(B4208, B4209, B4210)}, false)}
{
var B4260 = $S("define", "ralph/core"),
B4261 = $S("%native-name", "ralph/compiler"),
B4262 = $S("<object>", "ralph/core"),
G__4216 = B1157[">"],
make_function_definer__4217;
false;
make_function_definer__4217 = Mmake_function__3478("make_function_definer", function make_function_definer__4218 (macro_name__4219, definer__4220)
{
var B4211__4221 = $SL.call(arguments, 2),
B4212__4222 = Mkeys__3529(B4211__4221, {"name?":false,
"type/existing?":false,
"record?":false}),
nameQ__4223 = B4212__4222["name?"],
typeSexistingQ__4224 = B4212__4222["type/existing?"],
recordQ__4225 = B4212__4222["record?"];
return function B4213__4226 (env__4227, identifier__4228, arguments__4229)
{
var body__4230 = $SL.call(arguments, 3),
B4214__4231;
if ($T(setter_identifierQ__3485(identifier__4228)))
{
var sequence__4238 = identifier__4228,
B4246 = sequence__4238[1],
B4247 = transform_setter_identifier__3482(B4246);
B4214__4231 = [true, B4247]}
else
B4214__4231 = [false, identifier__4228];
var setterQ__4232 = B4214__4231[0],
identifier__4233 = B4214__4231[1],
B4215__4234 = instanceQ__3648(identifier__4233, LsymbolG__3723),
value__4239;
if ($T(B4215__4234))
{value__4239 = B4215__4234}
else
value__4239 = setterQ__4232;
var B4248 = !(ralphScoreCCtrueQ(value__4239));
if ($T(B4248))
{
var error__4240 = make__3553(LerrorG__3554, B3576, concatenate__3480(macro_name__4219, ": ", "name not <var> or (setter <var>)"));
throw(error__4240);
false};
var B4249;
if ($T(typeSexistingQ__4224))
{
var sequence__4241 = arguments__4229;
B4249 = binaryEE__3551(size__3605(sequence__4241), 0)}
else
B4249 = false;
if ($T(B4249))
{
var error__4242 = make__3553(LerrorG__3554, B3576, concatenate__3480(macro_name__4219, ": ", "method has no arguments"));
throw(error__4242);
false};
var simplified_arguments__4235 = simplify_arguments__4198(arguments__4229),
B4250;
if ($T(nameQ__4223))
{B4250 = identifier__4233}
else
B4250 = generate_symbol__3650();
var B4251 = maybe_begin__3701(body__4230),
B4252 = named_method__3706(B4250, simplified_arguments__4235, B4251),
method_definition__4236 = macroexpand_all__3558(B4252, env__4227);
if ($T(recordQ__4225))
{get_setter__3527(env__4227, "module", "functions", symbol_name__3481(identifier__4233), method_definition__4236)};
var B4253 = B4260,
B4254 = [definer__4220, [B4261, symbol_name__3481(identifier__4233)], method_definition__4236, setterQ__4232],
B4258;
if ($T(typeSexistingQ__4224))
{
var sequence__4243 = arguments__4229,
head__4237 = sequence__4243[0],
B4256;
if ($T(instanceQ__3648(head__4237, LarrayG__3649)))
{
var object__4244 = head__4237,
B4255 = ((object__4244 || false).length || 0);
B4256 = G__4216(B4255, 1)}
else
B4256 = false;
var B4257;
if ($T(B4256))
{
var sequence__4245 = head__4237;
B4257 = sequence__4245[1]}
else
B4257 = B4262;
B4258 = [B4257, identifier__4233]}
else
B4258 = [];
var B4259 = concatenate__3480(B4254, B4258);
return [B4253, identifier__4233, B4259]}}, false)}
{
var B4280 = $S("%make-function", "ralph/core"),
B4281 = $K("record?"),
B4282 = $K("name?"),
B4283 = $S("%make-method", "ralph/core"),
B4284 = $K("type/existing?"),
B4263__4269 = [["define-function", B4280, B4281, true, B4282, true], ["define-method", B4283, B4284, true]],
B4264__4270,
B4266__4271,
B4265__4272 = [B4263__4269];
while (true)
{
var B4267__4273 = B4264__4270,
value__4277;
if ($T(B4267__4273))
{value__4277 = B4267__4273}
else
value__4277 = anyQ__3892(emptyQ__3646, B4265__4272);
var B4279 = !(ralphScoreCCtrueQ(value__4277));
if ($T(B4279))
{
var sequence__4278 = B4263__4269,
arguments__4274 = sequence__4278[0];
(function B4268__4275 (arguments__4276)
{return Tcore_macrosT__3599[first__3540(arguments__4276)] = apply__3524(make_function_definer__4217, arguments__4276)})(arguments__4274);
B4263__4269 = ralphScoreCCrest(B4263__4269);
B4265__4272 = [B4263__4269]}
else
break};
B4266__4271}
{
var B4294 = $S("%define", "ralph/core");
Tcore_macrosT__3599.define = function B4285__4286 (env__4287, identifier__4288, value__4289)
{
var identifierT__4290 = localize__3561(identifier__4288, env__4287),
value__4291 = binaryEE__3551(get__3528(identifierT__4290, "module"), get__3528(env__4287, "module", "name")),
B4293 = !(ralphScoreCCtrueQ(value__4291));
if ($T(B4293))
{
var error__4292 = make__3553(LerrorG__3554, B3576, "Can't define using identifier with external qualifier");
throw(error__4292);
false};
bindN__3556(env__4287, identifier__4288);
return [B3937, [B4294, identifierT__4290], [B3584, identifierT__4290, value__4289]]}}
{
var B4300 = $S("%make-generic", "ralph/core");
Tcore_macrosT__3599["define-generic"] = function B4295__4296 (____4297, identifier__4298, arguments__4299)
{return [B4260, identifier__4298, [B4300, [B4261, symbol_name__3481(identifier__4298)]]]}}
{
var B4340 = $S("%make-class", "ralph/core");
Tcore_macrosT__3599["define-class"] = function B4301__4308 (____4309, identifier__4310, superclass__4311)
{
var properties__4312 = $SL.call(arguments, 3),
object__4313 = [B3697],
B4302__4314 = properties__4312,
B4303__4315,
B4305__4316,
B4304__4317 = [B4302__4314];
while (true)
{
var B4306__4318 = B4303__4315,
value__4322;
if ($T(B4306__4318))
{value__4322 = B4306__4318}
else
value__4322 = anyQ__3892(emptyQ__3646, B4304__4317);
var B4334 = !(ralphScoreCCtrueQ(value__4322));
if ($T(B4334))
{
var sequence__4323 = B4302__4314,
property__4319 = sequence__4323[0];
(function B4307__4320 (property__4321)
{if ($T(instanceQ__3648(property__4321, LarrayG__3649)))
{
var value__4325 = symbol_name__3481(first__3540(property__4321)),
array__4324 = object__4313;
array__4324.push(value__4325);
array__4324;
var value__4327 = [B3936, [], second__3486(property__4321)],
array__4326 = object__4313;
array__4326.push(value__4327);
return array__4326}
else
{
var value__4329 = symbol_name__3481(property__4321),
array__4328 = object__4313;
array__4328.push(value__4329);
array__4328;
var value__4331,
array__4330 = object__4313;
array__4330.push(value__4331);
return array__4330}})(property__4319);
B4302__4314 = ralphScoreCCrest(B4302__4314);
B4304__4317 = [B4302__4314]}
else
break};
B4305__4316;
var B4335 = B4260,
B4336 = B4340,
value__4332 = emptyQ__3646(superclass__4311),
B4337 = !(ralphScoreCCtrueQ(value__4332)),
B4338;
if ($T(B4337))
{
var sequence__4333 = superclass__4311;
B4338 = sequence__4333[0]}
else
B4338 = false;
var B4339 = [B4336, B4338, object__4313];
return [B4335, identifier__4310, B4339]}}
{
var get_import_module_nameSoptions__4341;
false;
get_import_module_nameSoptions__4341 = Mmake_function__3478("get_import_module_nameSoptions", function get_import_module_nameSoptions__4342 (import__4343)
{
var B4345;
if ($T(instanceQ__3648(import__4343, LarrayG__3649)))
{
var sequence__4344 = import__4343;
B4345 = sequence__4344[0]}
else
B4345 = import__4343;
var B4346 = symbol_name__3481(B4345),
B4347;
if ($T(instanceQ__3648(import__4343, LarrayG__3649)))
{B4347 = ralphScoreCCrest(import__4343)}
else
B4347 = [];
return [B4346, B4347]}, false)}
{
var compile_time_import_module__4355,
import_module__4356,
make_import_definition__4357;
Tcore_macrosT__3599["define-module"] = function B4348__4358 (env__4359, ____4360)
{
var B4349__4361 = $SL.call(arguments, 2),
B4350__4362 = Mkeys__3529(B4349__4361, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}),
import__4363 = B4350__4362["import"],
export__4364 = B4350__4362["export"],
compile_time_import__4365 = B4350__4362["compile-time-import"],
inline__4366 = B4350__4362.inline;
get_setter__3527(env__4359, "module", "exports", map__3559(identifier_name__3487, export__4364));
do__3526(function B4351__4367 (import__4368)
{
var B4352__4369 = get_import_module_nameSoptions__4341(import__4368),
module_name__4370 = B4352__4369[0],
options__4371 = B4352__4369[1];
return apply__3524(compile_time_import_module__4355, env__4359, module_name__4370, options__4371)}, compile_time_import__4365);
get_setter__3527(env__4359, "module", "inline", map__3559(identifier_name__3487, inline__4366));
return maybe_begin__3701(map__3559(function B4353__4372 (import__4373)
{
var B4354__4374 = get_import_module_nameSoptions__4341(import__4373),
module_name__4375 = B4354__4374[0],
options__4376 = B4354__4374[1];
apply__3524(import_module__4356, get__3528(env__4359, "module"), module_name__4375, options__4376);
return make_import_definition__4357(module_name__4375, env__4359)}, import__4363))}}
{
var B4381 = $S("%begin", "ralph/core");
false;
make_import_definition__4357 = Mmake_function__3478("make_import_definition", function make_import_definition__4377 (module_name__4378, env__4379)
{
var identifier__4380 = generate_symbol__3650(env__4379);
get_setter__3527(env__4379, "import-identifiers", module_name__4378, identifier__4380);
return [B4381, [B4294, identifier__4380], [B3584, identifier__4380, [[B4136, "require"], module_name__4378]]]}, false)}
{
var B4388 = $S("define-function", "ralph/core");
Tcore_macrosT__3599["define-macro"] = function B4382__4383 (env__4384, identifier__4385, arguments__4386)
{
var body__4387 = $SL.call(arguments, 3);
return [B3937, concatenate__3480([B4388, identifier__4385, concatenate__3480([generate_symbol__3650()], arguments__4386)], body__4387), [B3767, [B4020, identifier__4385, "%macro?"], true]]}}
Tcore_macrosT__3599["define-symbol-macro"] = function B4389__4390 (env__4391, identifier__4392, arguments__4393)
{
var body__4394 = $SL.call(arguments, 3);
return [B3937, concatenate__3480([B4388, identifier__4392, []], body__4394), [B3767, [B4020, identifier__4392, "%symbol-macro?"], true]]}
{
var B4415 = $S("%try", "ralph/core"),
B4416 = $S("instance?", "ralph/core");
Tcore_macrosT__3599["handler-case"] = function B4395__4400 (____4401, body__4402)
{
var cases__4403 = $SL.call(arguments, 2),
condition_var__4404 = generate_symbol__3650();
return [B4415, body__4402, condition_var__4404, concatenate__3480([B3786], map__3559(function B4396__4405 (case__4406)
{
var B4397__4407 = case__4406[0],
type__4408 = B4397__4407[0],
B4398__4409 = $SL.call(B4397__4407, 1),
B4399__4410 = Mkeys__3529(B4398__4409, {condition:false}),
condition__4411 = B4399__4410.condition,
body__4412 = $SL.call(case__4406, 1),
B4413 = [[B4416, condition_var__4404, type__4408]],
B4414;
if ($T(condition__4411))
{B4414 = [concatenate__3480([B3698, [[condition__4411, condition_var__4404]]], body__4412)]}
else
B4414 = body__4412;
return concatenate__3480(B4413, B4414)}, cases__4403))]}}
{
var B4430 = $S("%call", "ralph/core"),
B4431 = $S("get-setter", "ralph/core");
Tcore_macrosT__3599["get-setter"] = function B4417__4418 (____4419, object__4420, property__4421)
{
var propertiesSvalue__4422 = $SL.call(arguments, 3),
object2__4424 = 1,
object1__4423 = size__3605(propertiesSvalue__4422),
B4426 = (object1__4423 === object2__4424);
if ($T(B4426))
{
var B4427 = B3584,
B4428 = [B4020, object__4420, property__4421],
sequence__4425 = propertiesSvalue__4422,
B4429 = sequence__4425[0];
return [B4427, B4428, B4429]}
else
return concatenate__3480([B4430, B4431, object__4420, property__4421], propertiesSvalue__4422)}}
{
var B4437 = $S("symbol", "ralph/core");
Tcore_macrosT__3599.symbol = function B4432__4433 (____4434, name__4435, module__4436)
{if ($T(instanceQ__3648(name__4435, LstringG__4180)))
{if ($T(instanceQ__3648(module__4436, LstringG__4180)))
{return [B4140, name__4435, module__4436]}
else
return [B4140, name__4435]}
else
return [B4430, B4437, name__4435, module__4436]}}
{
var B4447 = $S("binary==", "ralph/core"),
B4448 = $S("==", "ralph/core"),
opbjects__4439;
Tcore_macrosT__3599["=="] = function B4438__4440 (____4441, object1__4442, object2__4443)
{
var objects__4444 = $SL.call(arguments, 3),
sequence__4445 = opbjects__4439,
B4446 = binaryEE__3551(size__3605(sequence__4445), 0);
if ($T(B4446))
{return [B4447, object1__4442, object2__4443]}
else
return concatenate__3480([B4430, B4448, object1__4442, object2__4443], objects__4444)}}
{
var Tcore_symbol_macrosT__4449;
false;
Tcore_symbol_macrosT__4449 = make_object__3493();
exports["*core-symbol-macros*"] = Tcore_symbol_macrosT__4449}
{
var B4453 = $S("%next-method", "ralph/core"),
B4454 = $S("%this-method");
Tcore_symbol_macrosT__4449["next-method"] = function B4450__4451 (____4452)
{return [B4453, B4454]}}
{
var Texternal_symbolsT__4455;
false;
Texternal_symbolsT__4455 = {}}
{
var B4462 = $K("name"),
B4463 = $K("module"),
external_symbol__4457;
false;
external_symbol__4457 = Mmake_function__3478("external_symbol", function external_symbol__4458 (name__4459, module__4460)
{
var B4456__4461 = get__3528(Texternal_symbolsT__4455, module__4460, name__4459);
if ($T(B4456__4461))
{return B4456__4461}
else
return get_setter__3527(Texternal_symbolsT__4455, module__4460, name__4459, make__3553(LsymbolG__3723, B4462, name__4459, B4463, module__4460))}, false)}
{
var module_nameSname__4467 = B3469["module-name/name"];
false;
qualify__3579 = Mmake_function__3478("qualify", function qualify__4468 (form__4469, env__4470)
{
var B4464__4471 = form__4469;
if ($T(instanceQ__3648(B4464__4471, LarrayG__3649)))
{return map__3559(rcurry__3560(qualify__4468, env__4470), form__4469)}
else
if ($T(instanceQ__3648(B4464__4471, LsymbolG__3723)))
{
var B4465__4472 = module_nameSname__4467(form__4469),
module_name__4473 = B4465__4472[0],
name__4474 = B4465__4472[1];
if ($T(module_name__4473))
{return form__4469}
else
{
var value__4479 = boundQ__4147(env__4470, form__4469),
B4480 = !(ralphScoreCCtrueQ(value__4479)),
B4466__4475;
if ($T(B4480))
{B4466__4475 = find_moduleSimport_name__4148(name__4474, env__4470)}
else
B4466__4475 = false;
if ($T(B4466__4475))
{
var moduleSimport_name__4476 = B4466__4475,
module__4477 = moduleSimport_name__4476[0],
import_name__4478 = moduleSimport_name__4476[1];
return external_symbol__4457(import_name__4478, get__3528(module__4477, "name"))}
else
return symbol__3479(name__4474, get__3528(env__4470, "module", "name"))}}
else
return form__4469}, false)}
{
var find_macro_definition__4482;
false;
find_macro_definition__4482 = Mmake_function__3478("find_macro_definition", function find_macro_definition__4483 (form__4484, env__4485)
{
var B4481__4486 = form__4484;
if ($T(instanceQ__3648(B4481__4486, LarrayG__3649)))
{
var sequence__4490 = form__4484,
B4495 = binaryEE__3551(size__3605(sequence__4490), 0);
if ($T(B4495))
{
var error__4491 = "Empty form";
throw(error__4491);
false};
var sequence__4492 = form__4484,
identifier__4487 = sequence__4492[0],
name__4488 = symbol_name__3481(identifier__4487),
value__4493 = boundQ__4147(env__4485, identifier__4487),
B4496 = !(ralphScoreCCtrueQ(value__4493));
if ($T(B4496))
{return env__4485.macros[name__4488]}}
else
if ($T(instanceQ__3648(B4481__4486, LsymbolG__3723)))
{
var name__4489 = symbol_name__3481(form__4484),
value__4494 = boundQ__4147(env__4485, form__4484),
B4497 = !(ralphScoreCCtrueQ(value__4494));
if ($T(B4497))
{return env__4485["symbol-macros"][name__4489]}}}, false)}
{
var macroexpand_1__4499;
false;
macroexpand_1__4499 = Mmake_function__3478("macroexpand_1", function macroexpand_1__4500 (form__4501, env__4502)
{
var B4498__4503 = find_macro_definition__4482(form__4501, env__4502);
if ($T(B4498__4503))
{
var macro__4504 = B4498__4503,
B4505;
if ($T(instanceQ__3648(form__4501, LarrayG__3649)))
{B4505 = ralphScoreCCrest(form__4501)}
else
B4505 = form__4501;
return apply__3524(macro__4504, env__4502, B4505)}
else
return form__4501}, false);
exports["macroexpand-1"] = macroexpand_1__4499}
{
var macroexpand__4506;
false;
macroexpand__4506 = Mmake_function__3478("macroexpand", function macroexpand__4507 (form__4508, env__4509)
{
var doneQ__4510;
while (true)
{
var value__4512 = doneQ__4510,
B4516 = !(ralphScoreCCtrueQ(value__4512));
if ($T(B4516))
{
var expanded__4511 = macroexpand_1__4499(form__4508, env__4509),
object2__4514 = form__4508,
object1__4513 = expanded__4511,
B4515 = (object1__4513 === object2__4514);
doneQ__4510 = B4515;
form__4508 = expanded__4511}
else
break};
return form__4508}, false);
exports.macroexpand = macroexpand__4506}
{
var simplify_call__4519;
false;
macroexpand_all__3558 = Mmake_function__3478("macroexpand_all", function macroexpand_all__4520 (form__4521, env__4522)
{B4526:while(true){
var B4517__4523 = form__4521;
if ($T(instanceQ__3648(B4517__4523, LarrayG__3649)))
{if ($T(find_macro_definition__4482(form__4521, env__4522)))
{return simplify_call__4519(macroexpand_all__4520(macroexpand__4506(form__4521, env__4522), env__4522))}
else
{
var B4518__4524 = find_special_form__3541(form__4521, env__4522);
if ($T(B4518__4524))
{
var expander__4525 = B4518__4524;
return apply__3524(expander__4525, env__4522, ralphScoreCCrest(form__4521))}
else
return map__3559(rcurry__3560(macroexpand_all__4520, env__4522), form__4521)}}
else
if ($T(instanceQ__3648(B4517__4523, LsymbolG__3723)))
{if ($T(find_macro_definition__4482(form__4521, env__4522)))
{
arguments = [macroexpand__4506(form__4521, env__4522), env__4522];
form__4521 = arguments[0];
env__4522 = arguments[1];
continue B4526}
else
return qualify__3579(form__4521, env__4522)}
else
return form__4521;
break}}, false);
exports["macroexpand-all"] = macroexpand_all__3558}
{
false;
simplify_call__4519 = Mmake_function__3478("simplify_call", function simplify_call__4527 (exp__4528)
{
var B4531;
if ($T(expressionQ__3539(exp__4528, LarrayG__3649)))
{
var object2__4530 = "%call",
object1__4529 = symbol_name__3481(first__3540(exp__4528));
B4531 = (object1__4529 === object2__4530)}
else
B4531 = false;
if ($T(B4531))
{return ralphScoreCCrest(exp__4528)}
else
return exp__4528}, false)}
{
false;
find_moduleSimport_name__4148 = Mmake_function__3478("find_moduleSimport_name", function find_moduleSimport_name__4535 (definition_name__4536, env__4537)
{return anyQ__3892(function B4532__4538 (import__4539)
{
var module__4540 = import__4539[0],
names__4541 = import__4539[1];
return anyQ__3892(function B4533__4542 (name__4543)
{
var B4534__4544;
if ($T(instanceQ__3648(name__4543, LarrayG__3649)))
{B4534__4544 = name__4543}
else
B4534__4544 = [name__4543, name__4543];
var import_name__4545 = B4534__4544[0],
new_name__4546 = B4534__4544[1],
object2__4548 = new_name__4546,
object1__4547 = definition_name__4536,
B4549 = (object1__4547 === object2__4548);
if ($T(B4549))
{return [module__4540, import_name__4545]}}, names__4541)}, get__3528(env__4537, "module", "imports"))}, false)}
{
var find_import_identifier__4550;
false;
find_import_identifier__4550 = Mmake_function__3478("find_import_identifier", function find_import_identifier__4551 (module__4552, env__4553)
{return get__3528(env__4553, "import-identifiers", get__3528(module__4552, "name"))}, false)}
{
var external_definition__4555;
false;
external_definition__4555 = Mmake_function__3478("external_definition", function external_definition__4556 (variable__4557, import_identifier__4558, import_name__4559, env__4560)
{
var B4554__4561 = module_nameSname__4467(variable__4557),
module_name__4562 = B4554__4561[0],
name__4563 = B4554__4561[1],
value__4564 = get__3528(env__4560, "defined?", module_name__4562, name__4563),
B4565 = !(ralphScoreCCtrueQ(value__4564));
if ($T(B4565))
{
get_setter__3527(env__4560, "defined?", module_name__4562, name__4563, true);
return [B4381, [B4294, variable__4557], [B3584, variable__4557, [B4020, import_identifier__4558, import_name__4559]]]}}, false)}
{
var description__4577 = B1157.description,
alpha_convert__4578 = B3470["alpha-convert"],
find_module__4579,
remove_defined_identifiers__4580 = B3469["remove-defined-identifiers"],
find_free_variables__4581 = B3472["find-free-variables"],
identity__4582 = B1157.identity,
define_free_variables__4583;
false;
define_free_variables__4583 = Mmake_function__3478("define_free_variables", function define_free_variables__4584 (exp__4585, env__4586)
{
var B4566__4587 = $SL.call(arguments, 2),
B4567__4588 = Mkeys__3529(B4566__4587, {filter:identity__4582}),
filter__4589 = B4567__4588.filter,
variables__4590 = filter__4589(remove_defined_identifiers__4580(find_free_variables__4581(exp__4585, env__4586), env__4586)),
result__4591 = [],
B4568__4592 = variables__4590,
B4569__4593,
B4571__4594,
B4570__4595 = [B4568__4592];
while (true)
{
var B4572__4596 = B4569__4593,
value__4613;
if ($T(B4572__4596))
{value__4613 = B4572__4596}
else
value__4613 = anyQ__3892(emptyQ__3646, B4570__4595);
var B4633 = !(ralphScoreCCtrueQ(value__4613));
if ($T(B4633))
{
var sequence__4614 = B4568__4592,
variable__4597 = sequence__4614[0];
(function B4573__4598 (variable__4599)
{
var B4574__4600 = module_nameSname__4467(variable__4599),
module_name__4601 = B4574__4600[0],
name__4602 = B4574__4600[1],
import_name__4603,
value__4615 = module_name__4601,
B4630 = !(ralphScoreCCtrueQ(value__4615));
if ($T(B4630))
{
var error__4616 = concatenate__3480("NOT QUALIFIED: ", description__4577(variable__4599));
throw(error__4616);
false};
var object2__4618 = get__3528(env__4586, "module", "name"),
object1__4617 = module_name__4601,
B4631 = (object1__4617 === object2__4618);
if ($T(B4631))
{
get_setter__3527(env__4586, "defined?", module_name__4601, name__4602, true);
var value__4620 = [B4294, variable__4599],
array__4619 = result__4591;
array__4619.push(value__4620);
array__4619;
var B4575__4604 = find_moduleSimport_name__4148(name__4602, env__4586);
if ($T(B4575__4604))
{
var moduleSimport_name__4605 = B4575__4604,
module__4606 = moduleSimport_name__4605[0],
import_name__4607 = moduleSimport_name__4605[1],
external_variable__4608 = symbol__3479(import_name__4607, get__3528(module__4606, "name")),
B4576__4609 = external_definition__4555(external_variable__4608, alpha_convert__4578(find_import_identifier__4550(module__4606, env__4586), env__4586), import_name__4607, env__4586);
if ($T(B4576__4609))
{
var definition__4610 = B4576__4609,
value__4622 = definition__4610,
array__4621 = result__4591;
array__4621.push(value__4622);
array__4621};
var value__4624,
array__4623 = [B3584, variable__4599, external_variable__4608];
array__4623.push(value__4624);
return array__4623}}
else
{
var module__4611 = find_module__4579(module_name__4601),
import_identifier__4612 = find_import_identifier__4550(module__4611, env__4586),
value__4625 = import_identifier__4612,
B4632 = !(ralphScoreCCtrueQ(value__4625));
if ($T(B4632))
{
var value__4627 = make_import_definition__4357(module_name__4601, env__4586),
array__4626 = result__4591;
array__4626.push(value__4627);
array__4626;
import_identifier__4612 = find_import_identifier__4550(module__4611, env__4586)};
var value__4629 = external_definition__4555(variable__4599, alpha_convert__4578(import_identifier__4612, env__4586), name__4602, env__4586),
array__4628 = result__4591;
array__4628.push(value__4629);
return array__4628}})(variable__4597);
B4568__4592 = ralphScoreCCrest(B4568__4592);
B4570__4595 = [B4568__4592]}
else
break};
B4571__4594;
return concatenate__3480([B4381], result__4591, [exp__4585])}, false);
exports["define-free-variables"] = define_free_variables__4583}
{
var ralphScoreCCdec = B1157.dec,
last_setter__4654 = B1157["last-setter"],
last__4655 = B1157.last,
second_setter__4656 = B1157["second-setter"],
inline_definition__4657,
inlineQ__4658,
inline__4659;
false;
inline__4659 = Mmake_function__3478("inline", function inline__4660 (form__4661, env__4662)
{
var B4755;
if ($T(instanceQ__3648(form__4661, LarrayG__3649)))
{
var value__4699 = emptyQ__3646(form__4661);
B4755 = !(ralphScoreCCtrueQ(value__4699))}
else
B4755 = false;
if ($T(B4755))
{
var sequence__4700 = form__4661,
B4756 = sequence__4700[0],
B4757 = instanceQ__3648(B4756, LsymbolG__3723);
if ($T(B4757))
{
var sequence__4701 = form__4661,
B4758 = sequence__4701[0],
B4634__4663 = symbol_name__3481(B4758),
object2__4703 = "%method",
object1__4702 = B4634__4663,
B4635__4664 = (object1__4702 === object2__4703),
B4759;
if ($T(B4635__4664))
{B4759 = B4635__4664}
else
{
var object2__4705 = "%set",
object1__4704 = B4634__4663;
B4759 = (object1__4704 === object2__4705)};
if ($T(B4759))
{
var value__4707 = inline__4660(last__4655(form__4661), env__4662),
array__4706 = form__4661;
array__4706[ralphScoreCCdec(size__3605(array__4706), 1)] = value__4707;
return form__4661}
else
{
var object2__4709 = "%bind",
object1__4708 = B4634__4663,
B4760 = (object1__4708 === object2__4709);
if ($T(B4760))
{
var ____4665 = form__4661[0],
binding__4666 = form__4661[1],
body__4667 = form__4661[2],
value__4711 = inline__4660(second__3486(binding__4666), env__4662),
array__4710 = binding__4666;
array__4710[1] = value__4711;
var value__4713 = inline__4660(body__4667, env__4662),
array__4712 = form__4661;
array__4712[ralphScoreCCdec(size__3605(array__4712), 1)] = value__4713;
return form__4661}
else
{
var object2__4715 = "%try",
object1__4714 = B4634__4663,
B4761 = (object1__4714 === object2__4715);
if ($T(B4761))
{
var ____4668 = form__4661[0],
body__4669 = form__4661[1],
var__4670 = form__4661[2],
catch__4671 = form__4661[3],
value__4717 = inline__4660(body__4669, env__4662),
array__4716 = form__4661;
array__4716[1] = value__4717;
var value__4719 = inline__4660(catch__4671, env__4662),
array__4718 = form__4661;
array__4718[ralphScoreCCdec(size__3605(array__4718), 1)] = value__4719;
return form__4661}
else
{
var object2__4721 = "%begin",
object1__4720 = B4634__4663,
B4636__4672 = (object1__4720 === object2__4721),
B4762;
if ($T(B4636__4672))
{B4762 = B4636__4672}
else
{
var object2__4723 = "%if",
object1__4722 = B4634__4663,
B4637__4673 = (object1__4722 === object2__4723);
if ($T(B4637__4673))
{B4762 = B4637__4673}
else
{
var object2__4725 = "%while",
object1__4724 = B4634__4663,
B4638__4674 = (object1__4724 === object2__4725);
if ($T(B4638__4674))
{B4762 = B4638__4674}
else
{
var object2__4727 = "%array",
object1__4726 = B4634__4663,
B4639__4675 = (object1__4726 === object2__4727);
if ($T(B4639__4675))
{B4762 = B4639__4675}
else
{
var object2__4729 = "%object",
object1__4728 = B4634__4663,
B4640__4676 = (object1__4728 === object2__4729);
if ($T(B4640__4676))
{B4762 = B4640__4676}
else
{
var object2__4731 = "%get-property",
object1__4730 = B4634__4663,
B4641__4677 = (object1__4730 === object2__4731);
if ($T(B4641__4677))
{B4762 = B4641__4677}
else
{
var object2__4733 = "%native-call",
object1__4732 = B4634__4663,
B4642__4678 = (object1__4732 === object2__4733);
if ($T(B4642__4678))
{B4762 = B4642__4678}
else
{
var object2__4735 = "%infix",
object1__4734 = B4634__4663,
B4643__4679 = (object1__4734 === object2__4735);
if ($T(B4643__4679))
{B4762 = B4643__4679}
else
{
var object2__4737 = "%plus",
object1__4736 = B4634__4663,
B4644__4680 = (object1__4736 === object2__4737);
if ($T(B4644__4680))
{B4762 = B4644__4680}
else
{
var object2__4739 = "%minus",
object1__4738 = B4634__4663,
B4645__4681 = (object1__4738 === object2__4739);
if ($T(B4645__4681))
{B4762 = B4645__4681}
else
{
var object2__4741 = "%times",
object1__4740 = B4634__4663,
B4646__4682 = (object1__4740 === object2__4741);
if ($T(B4646__4682))
{B4762 = B4646__4682}
else
{
var object2__4743 = "%divide",
object1__4742 = B4634__4663;
B4762 = (object1__4742 === object2__4743)}}}}}}}}}}};
if ($T(B4762))
{
var sequence__4744 = form__4661,
B4763 = sequence__4744[0],
B4764 = [B4763],
B4765 = map__3559(rcurry__3560(inline__4660, env__4662), ralphScoreCCrest(form__4661));
return concatenate__3480(B4764, B4765)}
else
{
var object2__4746 = "%native",
object1__4745 = B4634__4663,
B4647__4683 = (object1__4745 === object2__4746),
B4766;
if ($T(B4647__4683))
{B4766 = B4647__4683}
else
{
var object2__4748 = "%native-name",
object1__4747 = B4634__4663,
B4648__4684 = (object1__4747 === object2__4748);
if ($T(B4648__4684))
{B4766 = B4648__4684}
else
{
var object2__4750 = "%define",
object1__4749 = B4634__4663,
B4649__4685 = (object1__4749 === object2__4750);
if ($T(B4649__4685))
{B4766 = B4649__4685}
else
{
var object2__4752 = "%symbol",
object1__4751 = B4634__4663;
B4766 = (object1__4751 === object2__4752)}}};
if ($T(B4766))
{return form__4661}
else
{
var identifier__4686 = form__4661[0],
values__4687 = $SL.call(form__4661, 1),
B4650__4688 = module_nameSname__4467(identifier__4686),
module_name__4689 = B4650__4688[0],
name__4690 = B4650__4688[1],
B4651__4691 = get__3528(env__4662, "original-identifier", name__4690);
if ($T(B4651__4691))
{
var original_identifier__4692 = B4651__4691,
B4652__4693 = module_nameSname__4467(original_identifier__4692),
module_name__4694 = B4652__4693[0],
name__4695 = B4652__4693[1],
object2__4754 = get__3528(env__4662, "module", "name"),
object1__4753 = module_name__4694,
B4767 = (object1__4753 === object2__4754),
module__4696;
if ($T(B4767))
{module__4696 = get__3528(env__4662, "module")}
else
module__4696 = find_module__4579(module_name__4694);
var B4653__4697;
if ($T(inlineQ__4658(module__4696, name__4695)))
{B4653__4697 = get__3528(module__4696, "functions", name__4695)}
else
B4653__4697 = false;
if ($T(B4653__4697))
{
var definition__4698 = B4653__4697;
return inline_definition__4657(definition__4698, values__4687, env__4662)}
else
return map__3559(rcurry__3560(inline__4660, env__4662), form__4661)}
else
return map__3559(rcurry__3560(inline__4660, env__4662), form__4661)}}}}}}
else
return map__3559(rcurry__3560(inline__4660, env__4662), form__4661)}
else
return form__4661}, false)}
{
var EE__4768 = B1157["=="];
false;
inlineQ__4658 = Mmake_function__3478("inlineQ", function inlineQ__4769 (module__4770, name__4771)
{return anyQ__3892(curry__3555(EE__4768, name__4771), get__3528(module__4770, "inline"))}, false)}
{
var GE__4774 = B1157[">="],
restore_identifiers__4775 = B3470["restore-identifiers"],
rename_identifiers__4776 = B3470["rename-identifiers"];
false;
inline_definition__4657 = Mmake_function__3478("inline_definition", function inline_definition__4777 (definition__4778, values__4779, env__4780)
{
var ____4781 = definition__4778[0],
name__4782 = definition__4778[1],
arguments__4783 = definition__4778[2],
body__4784 = definition__4778[3],
argumentsT__4785 = rename_identifiers__4776(arguments__4783, env__4780),
bodyT__4786 = alpha_convert__4578(body__4784, env__4780),
object__4794 = arguments__4783,
B4772__4787 = ((object__4794 || false).length || 0),
i__4788 = 0;
while (true)
{
var value__4795 = GE__4774(i__4788, B4772__4787),
B4796 = !(ralphScoreCCtrueQ(value__4795));
if ($T(B4796))
{
(function B4773__4789 (i__4790)
{
var argumentT__4791 = element__3606(argumentsT__4785, i__4790),
value__4792 = element__3606(values__4779, i__4790),
valueT__4793 = value__4792;
return bodyT__4786 = [B3598, [argumentT__4791, valueT__4793], bodyT__4786]})(i__4788);
i__4788 = (i__4788 + 1)}
else
break};
false;
restore_identifiers__4775(arguments__4783, env__4780);
return bodyT__4786}, false)}
{
var lift_symbol__4797,
lift_symbols__4798;
false;
lift_symbols__4798 = Mmake_function__3478("lift_symbols", function lift_symbols__4799 (exp__4800, env__4801)
{return lift_symbol__4797(exp__4800, env__4801, identity__4582)}, false);
exports["lift-symbols"] = lift_symbols__4798}
{
var lift_symbolT__4824,
lift_value__4825,
lift_symbolTT__4826,
LkeywordG__4827 = B1157["<keyword>"],
Lhash_symbolG__4828 = B1157["<hash-symbol>"];
false;
lift_symbol__4797 = Mmake_function__3478("lift_symbol", function lift_symbol__4829 (exp__4830, env__4831, k__4832)
{B4937:while(true){
var B4929;
if ($T(instanceQ__3648(exp__4830, LarrayG__3649)))
{
var value__4889 = emptyQ__3646(exp__4830);
B4929 = !(ralphScoreCCtrueQ(value__4889))}
else
B4929 = false;
if ($T(B4929))
{
var sequence__4890 = exp__4830,
B4930 = sequence__4890[0],
B4802__4833 = symbol_name__3481(B4930),
object2__4892 = "%bind",
object1__4891 = B4802__4833,
B4931 = (object1__4891 === object2__4892);
if ($T(B4931))
{
var ____4834 = exp__4830[0],
B4803__4835 = exp__4830[1],
var__4836 = B4803__4835[0],
value__4837 = B4803__4835[1],
body__4838 = exp__4830[2];
arguments = [value__4837, env__4831, (function B4938 (lift_symbol__4829, body__4838, k__4832, B3598, var__4836)
{return function B4804__4839 (lvalue__4840, env__4841)
{return lift_symbol__4829(body__4838, env__4841, function B4805__4842 (lbody__4843, env__4844)
{return k__4832([B3598, [var__4836, lvalue__4840], lbody__4843], env__4844)})}})(lift_symbol__4829, body__4838, k__4832, B3598, var__4836)];
exp__4830 = arguments[0];
env__4831 = arguments[1];
k__4832 = arguments[2];
continue B4937}
else
{
var object2__4894 = "%set",
object1__4893 = B4802__4833,
B4932 = (object1__4893 === object2__4894);
if ($T(B4932))
{
var ____4845 = exp__4830[0],
e1__4846 = exp__4830[1],
e2__4847 = exp__4830[2];
arguments = [e2__4847, env__4831, (function B4939 (k__4832, B3584, e1__4846)
{return function B4806__4848 (le2__4849, env__4850)
{return k__4832([B3584, e1__4846, le2__4849], env__4850)}})(k__4832, B3584, e1__4846)];
exp__4830 = arguments[0];
env__4831 = arguments[1];
k__4832 = arguments[2];
continue B4937}
else
{
var object2__4896 = "%method",
object1__4895 = B4802__4833,
B4933 = (object1__4895 === object2__4896);
if ($T(B4933))
{
var ____4851 = exp__4830[0],
name__4852 = exp__4830[1],
arguments__4853 = exp__4830[2],
body__4854 = exp__4830[3];
arguments = [body__4854, env__4831, (function B4940 (k__4832, B3577, name__4852, arguments__4853)
{return function B4807__4855 (lbody__4856, env__4857)
{return k__4832([B3577, name__4852, arguments__4853, lbody__4856], env__4857)}})(k__4832, B3577, name__4852, arguments__4853)];
exp__4830 = arguments[0];
env__4831 = arguments[1];
k__4832 = arguments[2];
continue B4937}
else
{
var object2__4898 = "%begin",
object1__4897 = B4802__4833,
B4808__4858 = (object1__4897 === object2__4898),
B4934;
if ($T(B4808__4858))
{B4934 = B4808__4858}
else
{
var object2__4900 = "%if",
object1__4899 = B4802__4833,
B4809__4859 = (object1__4899 === object2__4900);
if ($T(B4809__4859))
{B4934 = B4809__4859}
else
{
var object2__4902 = "%while",
object1__4901 = B4802__4833,
B4810__4860 = (object1__4901 === object2__4902);
if ($T(B4810__4860))
{B4934 = B4810__4860}
else
{
var object2__4904 = "%array",
object1__4903 = B4802__4833,
B4811__4861 = (object1__4903 === object2__4904);
if ($T(B4811__4861))
{B4934 = B4811__4861}
else
{
var object2__4906 = "%object",
object1__4905 = B4802__4833,
B4812__4862 = (object1__4905 === object2__4906);
if ($T(B4812__4862))
{B4934 = B4812__4862}
else
{
var object2__4908 = "%get-property",
object1__4907 = B4802__4833,
B4813__4863 = (object1__4907 === object2__4908);
if ($T(B4813__4863))
{B4934 = B4813__4863}
else
{
var object2__4910 = "%infix",
object1__4909 = B4802__4833,
B4814__4864 = (object1__4909 === object2__4910);
if ($T(B4814__4864))
{B4934 = B4814__4864}
else
{
var object2__4912 = "%native",
object1__4911 = B4802__4833,
B4815__4865 = (object1__4911 === object2__4912);
if ($T(B4815__4865))
{B4934 = B4815__4865}
else
{
var object2__4914 = "%native-name",
object1__4913 = B4802__4833,
B4816__4866 = (object1__4913 === object2__4914);
if ($T(B4816__4866))
{B4934 = B4816__4866}
else
{
var object2__4916 = "%native-call",
object1__4915 = B4802__4833,
B4817__4867 = (object1__4915 === object2__4916);
if ($T(B4817__4867))
{B4934 = B4817__4867}
else
{
var object2__4918 = "%plus",
object1__4917 = B4802__4833,
B4818__4868 = (object1__4917 === object2__4918);
if ($T(B4818__4868))
{B4934 = B4818__4868}
else
{
var object2__4920 = "%minus",
object1__4919 = B4802__4833,
B4819__4869 = (object1__4919 === object2__4920);
if ($T(B4819__4869))
{B4934 = B4819__4869}
else
{
var object2__4922 = "%times",
object1__4921 = B4802__4833,
B4820__4870 = (object1__4921 === object2__4922);
if ($T(B4820__4870))
{B4934 = B4820__4870}
else
{
var object2__4924 = "%divide",
object1__4923 = B4802__4833;
B4934 = (object1__4923 === object2__4924)}}}}}}}}}}}}};
if ($T(B4934))
{
var m__4871 = exp__4830[0],
eT__4872 = $SL.call(exp__4830, 1);
return lift_symbolT__4824(eT__4872, env__4831, function B4821__4873 (leT__4874, env__4875)
{return k__4832(concatenate__3480([m__4871], leT__4874), env__4875)})}
else
{
var object2__4926 = "%try",
object1__4925 = B4802__4833,
B4935 = (object1__4925 === object2__4926);
if ($T(B4935))
{
var ____4876 = exp__4830[0],
e1__4877 = exp__4830[1],
v__4878 = exp__4830[2],
e2__4879 = exp__4830[3];
return lift_symbolT__4824([e1__4877, e2__4879], env__4831, function B4822__4880 (leT__4881, env__4882)
{
var le1__4883 = leT__4881[0],
le2__4884 = leT__4881[1];
return k__4832([B4415, le1__4883, v__4878, le2__4884], env__4882)})}
else
{
var object2__4928 = "%symbol",
object1__4927 = B4802__4833,
B4936 = (object1__4927 === object2__4928);
if ($T(B4936))
{
var ____4885 = exp__4830[0],
name__4886 = exp__4830[1],
module__4887 = exp__4830[2];
return lift_value__4825(name__4886, exp__4830, "symbol", env__4831, k__4832, B4463, module__4887)}
else
return lift_symbolTT__4826(exp__4830, env__4831, k__4832)}}}}}}
else
{
var B4823__4888 = exp__4830;
if ($T(instanceQ__3648(B4823__4888, LkeywordG__4827)))
{return lift_value__4825(symbol_name__3481(exp__4830), exp__4830, "keyword", env__4831, k__4832)}
else
if ($T(instanceQ__3648(B4823__4888, Lhash_symbolG__4828)))
{return lift_value__4825(symbol_name__3481(exp__4830), exp__4830, "hash", env__4831, k__4832)}
else
return k__4832(exp__4830, env__4831)};
break}}, false)}
{
false;
lift_value__4825 = Mmake_function__3478("lift_value", function lift_value__4944 (name__4945, value__4946, type__4947, env__4948, k__4949)
{
var B4941__4950 = $SL.call(arguments, 5),
B4942__4951 = Mkeys__3529(B4941__4950, {module:""}),
module__4952 = B4942__4951.module,
B4943__4953 = get__3528(env__4948, "lifted", type__4947, module__4952, name__4945);
if ($T(B4943__4953))
{
var t__4954 = B4943__4953;
return k__4949(t__4954, env__4948)}
else
{
var t__4955 = get_setter__3527(env__4948, "lifted", type__4947, module__4952, name__4945, generate_symbol__3650(env__4948));
return [B3598, [t__4955, value__4946], k__4949(t__4955, env__4948)]}}, false)}
{
false;
lift_symbolT__4824 = Mmake_function__3478("lift_symbolT", function lift_symbolT__4956 (expT__4957, env__4958, k__4959)
{
var sequence__4960 = expT__4957,
B4961 = binaryEE__3551(size__3605(sequence__4960), 0);
if ($T(B4961))
{return k__4959([], env__4958)}
else
return lift_symbolTT__4826(expT__4957, env__4958, k__4959)}, false)}
{
false;
lift_symbolTT__4826 = Mmake_function__3478("lift_symbolTT", function lift_symbolTT__4964 (exp__4965, env__4966, k__4967)
{
var sequence__4974 = exp__4965,
B4975 = sequence__4974[0],
B4976 = function B4962__4968 (t__4969, env__4970)
{return lift_symbolT__4824(ralphScoreCCrest(exp__4965), env__4970, function B4963__4971 (tT__4972, env__4973)
{return k__4967(concatenate__3480([t__4969], tT__4972), env__4973)})};
return lift_symbol__4797(B4975, env__4966, B4976)}, false)}
{
var B4982 = $K("string"),
read__4977 = B3467.read,
Lstring_streamG__4978 = B3465["<string-stream>"],
read_program__4979;
false;
read_program__4979 = Mmake_function__3478("read_program", function read_program__4980 (source__4981)
{return read__4977(make__3553(Lstring_streamG__4978, B4982, concatenate__3480("(", source__4981, "\n)")))}, false)}
{
var B5009 = $K("filter"),
lift_defines__4986 = B3471["lift-defines"],
choose__4987 = B1157.choose,
hasQ__4988 = B1157["has?"],
normalize_term__4989 = B3473["normalize-term"],
transform_statementsN__4990 = B3474["transform-statements!"],
optimize_tail_callsN__4991 = B3475["optimize-tail-calls!"],
flatten_statementsN__4992 = B3476["flatten-statements!"],
compile_js__4993 = B3477["compile-js"],
compile_expression__4994;
false;
compile_expression__4994 = Mmake_function__3478("compile_expression", function compile_expression__4995 (exp__4996, env__4997)
{return reduce__3632(function B4983__4998 (result__4999, nameSfn__5000)
{
var name__5001 = nameSfn__5000[0],
fn__5002 = nameSfn__5000[1],
result__5003 = fn__5002(result__4999);
return result__5003}, exp__4996, [["source", identity__4582], ["macroexpanded", rcurry__3560(macroexpand_all__3558, env__4997)], ["lifted defines", rcurry__3560(lift_defines__4986, env__4997)], ["defined free variables", rcurry__3560(define_free_variables__4583, env__4997)], ["alpha-converted", rcurry__3560(alpha_convert__4578, env__4997)], ["inline", rcurry__3560(inline__4659, env__4997)], ["defined free variables after inline", rcurry__3560(define_free_variables__4583, env__4997, B5009, curry__3555(choose__4987, function B4984__5004 (variable__5005)
{
var value__5008 = hasQ__4988(get__3528(env__4997, "original-identifier"), symbol_name__3481(variable__5005));
return !(ralphScoreCCtrueQ(value__5008))}))], ["ANF", rcurry__3560(normalize_term__4989, env__4997)], ["lifted symbols", rcurry__3560(lift_symbols__4798, env__4997)], ["statements", rcurry__3560(transform_statementsN__4990, env__4997)], ["TCO", function B4985__5006 (exp__5007)
{return optimize_tail_callsN__4991(exp__5007, env__4997)}], ["flattened", flatten_statementsN__4992], ["compiled", rcurry__3560(compile_js__4993, env__4997)]])}, false);
exports["compile-expression"] = compile_expression__4994}
{
var resolve_path__5010 = B3468["resolve-path"],
executable_path__5011;
false;
executable_path__5011 = Mmake_function__3478("executable_path", function executable_path__5012 (module_name__5013)
{return resolve_path__5010("build", concatenate__3480(module_name__5013, ".js"))}, false)}
{
var module_path__5014;
false;
module_path__5014 = Mmake_function__3478("module_path", function module_path__5015 (base_path__5016, module_name__5017)
{return resolve_path__5010(base_path__5016, concatenate__3480(module_name__5017, ".rm"))}, false)}
{
var source_path__5018;
false;
source_path__5018 = Mmake_function__3478("source_path", function source_path__5019 (module_name__5020)
{return resolve_path__5010("src", concatenate__3480(module_name__5020, ".ralph"))}, false)}
{
var L__5022 = B1157["<"],
file_properties__5023 = B3468["file-properties"],
file_existsQ__5024 = B3468["file-exists?"],
recompileQ__5025;
false;
recompileQ__5025 = Mmake_function__3478("recompileQ", function recompileQ__5026 (module_name__5027)
{
var value__5031 = get__3528(TmodulesT__3494, module_name__5027, "native?"),
B5033 = !(ralphScoreCCtrueQ(value__5031));
if ($T(B5033))
{
var path__5028 = executable_path__5011(module_name__5027),
value__5032 = file_existsQ__5024(path__5028),
B5021__5029 = !(ralphScoreCCtrueQ(value__5032));
if ($T(B5021__5029))
{return B5021__5029}
else
{
var path2__5030 = source_path__5018(module_name__5027);
return L__5022(get__3528(file_properties__5023(path__5028), "modification-date"), get__3528(file_properties__5023(path2__5030), "modification-date"))}}}, false)}
{
var chain_object__5038 = B1157["chain-object"],
compile_module__5039,
process_names__5040,
object_properties__5041 = B1157["object-properties"];
false;
compile_time_import_module__4355 = Mmake_function__3478("compile_time_import_module", function compile_time_import_module__5042 (env__5043, module_name__5044)
{
var B5034__5045 = $SL.call(arguments, 2),
B5035__5046 = Mkeys__3529(B5034__5045, {options:false}),
options__5047 = B5035__5046.options,
object2__5058 = "ralph/core",
object1__5057 = module_name__5044,
B5059 = (object1__5057 === object2__5058),
B5036__5054;
if ($T(B5059))
{B5036__5054 = [Tcore_macrosT__3599, Tcore_symbol_macrosT__4449]}
else
{
compile_module__5039(module_name__5044);
var definitions__5048 = require(module_name__5044),
macros__5049 = make_plain_object__3512(),
symbol_macros__5050 = make_plain_object__3512();
do__3526(function B5037__5051 (name__5052)
{
var definition__5053 = get__3528(definitions__5048, name__5052);
if ($T(get__3528(definition__5053, "%macro?")))
{return macros__5049[name__5052] = definition__5053}
else
if ($T(get__3528(definition__5053, "%symbol-macro?")))
{return symbol_macros__5050[name__5052] = definition__5053}}, apply__3524(process_names__5040, object_properties__5041(definitions__5048), options__5047));
B5036__5054 = [macros__5049, symbol_macros__5050]};
var macros__5055 = B5036__5054[0],
symbol_macros__5056 = B5036__5054[1];
chain_object__5038(get__3528(env__5043, "macros"), macros__5055);
return chain_object__5038(get__3528(env__5043, "symbol-macros"), symbol_macros__5056)}, false)}
{
var removeN__5065 = B1157["remove!"],
set_unionN__5066 = B1157["set-union!"],
as_object__5067 = B1157["as-object"],
as_set__5068 = B1157["as-set"];
false;
process_names__5040 = Mmake_function__3478("process_names", function process_names__5069 (all__5070)
{
var B5060__5071 = $SL.call(arguments, 1),
B5061__5072 = Mkeys__3529(B5060__5071, {only:false,
exclude:false,
prefix:false,
rename:false}),
only__5073 = B5061__5072.only,
exclude__5074 = B5061__5072.exclude,
prefix__5075 = B5061__5072.prefix,
rename__5076 = B5061__5072.rename,
resolve__5077 = function resolve__5078 (exp__5079)
{if ($T(instanceQ__3648(exp__5079, LstringG__4180)))
{return exp__5079}
else
return identifier_name__3487(exp__5079)},
B5087;
if ($T(instanceQ__3648(only__5073, LarrayG__3649)))
{B5087 = map__3559(resolve__5077, only__5073)}
else
B5087 = all__5070;
var names__5080 = as_set__5068(B5087),
B5062__5081 = rename__5076,
B5088;
if ($T(B5062__5081))
{B5088 = B5062__5081}
else
B5088 = [];
var B5089 = map__3559(resolve__5077, B5088),
renamings__5082 = as_object__5067(B5089);
do__3526(curry__3555(removeN__5065, names__5080), map__3559(resolve__5077, exclude__5074));
set_unionN__5066(names__5080, object_properties__5041(renamings__5082));
return map__3559(function B5063__5083 (name__5084)
{
var B5064__5085 = get__3528(renamings__5082, name__5084);
if ($T(B5064__5085))
{
var renaming__5086 = B5064__5085;
return [name__5084, renaming__5086]}
else
if ($T(instanceQ__3648(prefix__5075, LstringG__4180)))
{return [name__5084, concatenate__3480(prefix__5075, name__5084)]}
else
return name__5084}, names__5080)}, false)}
{
var push__5091 = B1157.push;
false;
import_module__4356 = Mmake_function__3478("import_module", function import_module__5092 (module__5093, module_name__5094)
{
var options__5095 = $SL.call(arguments, 2),
B5090__5096 = find_module__4579(module_name__5094);
if ($T(B5090__5096))
{
var other_module__5097 = B5090__5096,
value__5099 = [other_module__5097, apply__3524(process_names__5040, get__3528(other_module__5097, "exports"), options__5095)],
array__5098 = get__3528(module__5093, "imports");
array__5098.unshift(value__5099);
array__5098;
var value__5101 = module_name__5094,
array__5100 = get__3528(module__5093, "dependencies");
array__5100.unshift(value__5101);
array__5100;
return other_module__5097}
else
{
var error__5102 = concatenate__3480("unable to import module '", module_name__5094, "'");
throw(error__5102);
return false}}, false)}
{
var read_module__5106;
false;
find_module__4579 = Mmake_function__3478("find_module", function find_module__5107 (module_name__5108)
{
var B5103__5109 = compile_module__5039(module_name__5108);
if ($T(B5103__5109))
{return B5103__5109}
else
{
var B5104__5110 = get__3528(TmodulesT__3494, module_name__5108);
if ($T(B5104__5110))
{return B5104__5110}
else
{
var B5105__5111 = read_module__5106("build", module_name__5108);
if ($T(B5105__5111))
{return B5105__5111}
else
return read_module__5106("src", module_name__5108)}}}, false)}
{
var read_file__5112 = B3468["read-file"];
false;
read_module__5106 = Mmake_function__3478("read_module", function read_module__5113 (base_path__5114, module_name__5115)
{
var path__5116 = module_path__5014(base_path__5114, module_name__5115);
if ($T(file_existsQ__5024(path__5116)))
{return apply__3524(curry__3555(make__3553, LmoduleG__3501, B4462), read__4977(make__3553(Lstring_streamG__4978, B4982, read_file__5112(path__5116))))}}, false)}
{
var B5141 = $K("exports"),
B5142 = $K("inline"),
B5143 = $K("dependencies"),
write_file__5119 = B3468["write-file"];
false;
compile_module__5039 = Mmake_function__3478("compile_module", function compile_module__5120 (module_name__5121)
{
var value__5132 = hasQ__4988(TmodulesT__3494, module_name__5121),
B5138 = !(ralphScoreCCtrueQ(value__5132));
if ($T(B5138))
{
var B5117__5122 = read_module__5106("src", module_name__5121);
if ($T(B5117__5122))
{
var module__5123 = B5117__5122;
TmodulesT__3494[module_name__5121] = module__5123}};
if ($T(recompileQ__5025(module_name__5121)))
{
var value__5133 = file_existsQ__5024(source_path__5018(module_name__5121)),
B5139 = !(ralphScoreCCtrueQ(value__5133));
if ($T(B5139))
{
var error__5134 = concatenate__3480("unable to compile module '", module_name__5121, "'");
throw(error__5134);
false};
var module__5124 = make__3553(LmoduleG__3501, B4462, module_name__5121),
env__5125 = make__3553(LenvironmentG__3513, B4463, module__5124),
source__5126 = read_file__5112(source_path__5018(module_name__5121)),
program__5127 = read_program__4979(source__5126),
result__5128 = "";
TmodulesT__3494[module_name__5121] = module__5124;
compile_time_import_module__4355(env__5125, "ralph/core");
var value__5135 = binaryEE__3551(module_name__5121, "ralph/core"),
B5140 = !(ralphScoreCCtrueQ(value__5135));
if ($T(B5140))
{
import_module__4356(module__5124, "ralph/core");
var value__5137 = make_import_definition__4357("ralph/core", env__5125),
array__5136 = program__5127;
array__5136.unshift(value__5137);
array__5136};
do__3526(function B5118__5129 (expression__5130)
{
var code__5131 = compile_expression__4994(expression__5130, env__5125);
return result__5128 = concatenate__3480(result__5128, code__5131, "\n")}, program__5127);
write_file__5119(executable_path__5011(module_name__5121), result__5128);
write_file__5119(module_path__5014("build", module_name__5121), description__4577([module_name__5121, B5141, get__3528(module__5124, "exports"), B5142, get__3528(module__5124, "inline"), B5143, get__3528(module__5124, "dependencies")]));
return module__5124}}, false);
exports["compile-module"] = compile_module__5039}
{
var memberQ__5148 = B1157["member?"],
analyze_dependencies__5149;
false;
analyze_dependencies__5149 = Mmake_function__3478("analyze_dependencies", function analyze_dependencies__5150 (module_name__5151)
{
var B5144__5152 = find_module__4579(module_name__5151);
if ($T(B5144__5152))
{
var module__5153 = B5144__5152;
TmodulesT__3494[module_name__5151] = module__5153;
var B5145__5154 = module__5153,
dependencies__5155 = B5145__5154.dependencies,
result__5156 = copy_sequence__3604(dependencies__5155);
do__3526(function B5146__5157 (dependency__5158)
{return do__3526(function B5147__5159 (sub_dependency__5160)
{
if ($T(memberQ__5148(sub_dependency__5160, result__5156)))
{removeN__5065(result__5156, sub_dependency__5160)};
var value__5162 = sub_dependency__5160,
array__5161 = result__5156;
array__5161.unshift(value__5162);
return array__5161}, analyze_dependencies__5150(dependency__5158))}, dependencies__5155);
return result__5156}
else
{
var error__5163 = concatenate__3480("unable to find-module '", module_name__5151, "'");
throw(error__5163);
return false}}, false);
exports["analyze-dependencies"] = analyze_dependencies__5149}
