var B1464 = require("ralph/core")
{var B3592, B3593, B3594, B3595, B3596, B3597, B3598, B3599, B3600, B3601, B3602;
B3592 = require("ralph/stream");
B3593 = require("ralph/format");
B3594 = require("ralph/reader");
B3595 = require("ralph/file-system");
B3596 = require("ralph/compiler/utilities");
B3597 = require("ralph/compiler/alpha");
B3598 = require("ralph/compiler/define-lifting");
B3599 = require("ralph/compiler/anf");
B3600 = require("ralph/compiler/statements");
B3601 = require("ralph/compiler/flattening");
B3602 = require("ralph/compiler/javascript")}
var B3603 = B1464["make-object"], B3604 = B3603()
{var B3605 = B1464["%make-class"], B3606 = B1464["<object>"], B3607 = B3605(B3606, {name:false,
"native?":false,
exports:function B3608 ()
{return []},
imports:function B3609 ()
{return []},
dependencies:function B3610 ()
{return []},
inline:function B3611 ()
{return []}});
exports["<module>"] = B3607}
var B3613 = $S("%all-arguments"), B3614 = $S("%this-method"), B3612 = [B3613, B3614]
{var B3615 = B1464["make-plain-object"], B3616 = B3605(B3606, {module:false,
macros:function B3617 ()
{return B3615()},
"symbol-macros":function B3618 ()
{return B3615()},
identifiers:function B3619 ()
{return B3603()},
"defined?":function B3620 ()
{return B3603()},
lifted:function B3621 ()
{return B3603()},
"import-identifiers":function B3622 ()
{return B3615()}});
exports["<environment>"] = B3616}
var B3623 = B1464["%make-function"], B3624 = B1464["get-setter"], B3625 = B1464["symbol-name"], B3626 = B3623("bindN", function B3629 (env__3627, identifier__3628)
{return B3624(env__3627, "bound?", B3625(identifier__3628), true)}, false)
var B3630 = B3623("unbindN", function B3633 (env__3631, identifier__3632)
{return B3624(env__3631, "bound?", B3625(identifier__3632), false)}, false)
var B3634 = B3603()
var B3635 = B3596["expression?"], B3636 = B1464.get, B3637 = B1464.first, B3638 = B3623("find_special_form", function B3645 (form__3639, env__3640)
{if ($T(B3635(form__3639)))
{var sequence__3642 = form__3639, B3643 = sequence__3642[0], B3644 = B3625(B3643);
return B3636(B3634, B3644)}}, false)
{var B3653 = $S("%method"), B3646 = B1464["do"], B3647 = B1464.curry, B3648;
B3624(B3634, "%method", function B3654 (env__3649, arguments__3650, body__3651)
{B3646(B3647(B3626, env__3649), arguments__3650);
var expanded_body__3652 = B3648(body__3651, env__3649);
B3646(B3647(B3630, env__3649), arguments__3650);
return [B3653, arguments__3650, expanded_body__3652]})}
{var B3658 = $S("%set");
B3624(B3634, "%set", function B3659 (env__3655, identifier__3656, value__3657)
{return [B3658, identifier__3656, B3648(value__3657, env__3655)]})}
{var B3663 = $S("define");
B3624(B3634, "define", function B3664 (env__3660, identifier__3661, value__3662)
{B3626(env__3660, identifier__3661);
return [B3663, identifier__3661, B3648(value__3662, env__3660)]})}
{var B3672 = $S("%bind");
B3624(B3634, "%bind", function B3673 (env__3665, binding__3666, body__3667)
{var var__3668 = binding__3666[0], value__3669 = binding__3666[1], expanded_value__3670 = B3648(value__3669, env__3665);
B3626(env__3665, var__3668);
var result__3671 = [B3672, [var__3668, expanded_value__3670], B3648(body__3667, env__3665)];
B3630(env__3665, var__3668);
return result__3671})}
{var B3674 = B3603();
exports["*core-macros*"] = B3674}
{var B3703 = $REST, B3704 = $KEY, B3705 = $K("end"), B3706 = $K("start"), B3677 = B1464["find-key"], B3678 = B1464["="], B3679 = B1464["copy-sequence"], B3680 = B1464.size, B3681 = B1464.element, B3682 = B1464.inc, B3683 = B3623("analyze_lambda_list", function B3707 (list__3684)
{var position__3685 = function B3708 (symbol__3686)
{return B3677(list__3684, B3647(B3678, symbol__3686))}, rest__3687 = position__3685(B3703), key__3688 = position__3685(B3704), B3689 = rest__3687, B3697;
if ($T(B3689))
B3697 = B3689
else {var B3690 = key__3688;
if ($T(B3690))
B3697 = B3690
else {var object__3692 = list__3684;
B3697 = ((object__3692 || false).length || 0)}};
var B3698 = B3679(list__3684, B3705, B3697), B3700;
if ($T(rest__3687))
{var number__3694 = rest__3687, B3699 = (number__3694 + 1);
B3700 = B3681(list__3684, B3699)}
else B3700 = false;
var B3702;
if ($T(key__3688))
{var number__3696 = key__3688, B3701 = (number__3696 + 1);
B3702 = B3679(list__3684, B3706, B3701)}
else B3702 = false;
return [B3698, B3700, B3702]}, false);
exports["analyze-lambda-list"] = B3683}
var B3709 = B1464.reduce, B3710 = B3623("wrap", function B3715 (form__3711)
{var wrappers__3712 = $SL.call(arguments, 1);
return B3709(function B3716 (result__3713, wrapper__3714)
{return wrapper__3714(result__3713)}, form__3711, wrappers__3712)}, false)
var B3822 = $S("bind-properties"), B3823 = $S("%keys"), B3824 = $S("%object"), B3825 = $S("bind"), B3826 = $S("%native-call"), trueQ = B1464["true?"], B3719 = B1464["empty?"], B3720 = B1464.map, B3721 = B1464.concatenate, B3722 = B1464.reduce1, B3723 = B1464["instance?"], B3724 = B1464["<array>"], B3725 = B1464.not, B3726 = B3596["generate-symbol"], B3727 = B3623("wrap_restSkeys", function B3827 (body__3728, all__3729, required__3730, rest__3731, key__3732)
{var restQ__3733 = rest__3731, B3734 = rest__3731, rest__3735;
if ($T(B3734))
rest__3735 = B3734
else {var sequence__3755 = key__3732, B3756 = sequence__3755, B3757 = ((B3756 || false).length || 0), B3758 = 0, value__3759 = (B3757 === B3758), B3804 = !(trueQ(value__3759));
if ($T(B3804))
rest__3735 = B3726()
else rest__3735 = false};
return B3710(body__3728, function B3828 (body__3736)
{var sequence__3770 = key__3732, B3771 = sequence__3770, B3772 = ((B3771 || false).length || 0), B3773 = 0, B3805 = (B3772 === B3773);
if ($T(B3805))
return body__3736
else {var key_values__3738 = B3720(function B3829 (binding__3737)
{if ($T(B3723(binding__3737, B3724)))
return binding__3737
else return [binding__3737, false]}, key__3732), B3806 = B3822, B3807 = B3720(B3637, key_values__3738), B3808 = B3823, B3809 = [B3824], function__3782 = B3721, values__3783 = B3720(function B3830 (key_value__3739)
{var key__3740 = key_value__3739[0], value__3741 = key_value__3739[1];
return [B3625(key__3740), value__3741]}, key_values__3738), B3784 = values__3783, B3810 = B3784[0], B3785 = values__3783, B3811 = B3785.slice(1), B3812 = B3709(function__3782, B3810, B3811), B3813 = B3721(B3809, B3812), B3814 = [B3808, rest__3735, B3813];
return [B3806, B3807, B3814, body__3736]}}, function B3831 (body__3742)
{var B3743 = restQ__3733, B3815;
if ($T(B3743))
B3815 = B3743
else {var sequence__3797 = key__3732, B3798 = sequence__3797, B3799 = ((B3798 || false).length || 0), B3800 = 0, value__3801 = (B3799 === B3800);
B3815 = !(trueQ(value__3801))};
if ($T(B3815))
{var B3816 = B3825, B3817 = B3826, object__3803 = required__3730, B3818 = ((object__3803 || false).length || 0), B3819 = [B3817, "$SL.call", all__3729, B3818], B3820 = [rest__3735, B3819], B3821 = [B3820];
return [B3816, B3821, body__3742]}
else return body__3742})}, false)
{var B3832 = B3596["maybe-begin"];
B3624(B3674, "begin", function B3835 (____3833)
{var expressions__3834 = $SL.call(arguments, 1);
return B3832(expressions__3834)})}
{var B3837 = B1464.symbol;
B3624(B3674, "method", function B3845 (____3838, arguments__3839)
{var body__3840 = $SL.call(arguments, 2), B3841 = B3683(arguments__3839), required__3842 = B3841[0], rest__3843 = B3841[1], key__3844 = B3841[2];
return [B3653, required__3842, B3727(B3832(body__3840), B3837("%all-arguments"), required__3842, rest__3843, key__3844)]})}
{var B3846 = B1464["<symbol>"], B3847 = B1464.reverse;
B3624(B3674, "bind", function B3870 (____3848, bindings__3849)
{var body__3850 = $SL.call(arguments, 2), sequence__3863 = bindings__3849, B3864 = sequence__3863, B3865 = ((B3864 || false).length || 0), B3866 = 0, B3867 = (B3865 === B3866);
if ($T(B3867))
return B3832(body__3850)
else return B3709(function B3871 (body__3851, binding__3852)
{var B3868 = B3672, B3869;
if ($T(B3723(binding__3852, B3846)))
B3869 = [binding__3852, false]
else B3869 = binding__3852;
return [B3868, B3869, body__3851]}, B3832(body__3850), B3847(bindings__3849))})}
{var B3876 = $S("%if");
B3624(B3674, "if", function B3877 (____3872, test__3873, then__3874, else__3875)
{return [B3876, test__3873, then__3874, else__3875]})}
{var trueQ = B1464["true?"], B3878 = B1464["=="], B3879 = B3596["transform-setter-identifier"], B3880 = B1464.rest;
B3624(B3674, "set!", function B3903 (____3881, place__3882)
{var values__3883 = $SL.call(arguments, 2), B3896;
if ($T(B3723(place__3882, B3724)))
{var sequence__3886 = place__3882, B3894 = sequence__3886[0], B3895 = B3837("%get-property"), value__3887 = B3878(B3894, B3895);
B3896 = !(trueQ(value__3887))}
else B3896 = false;
if ($T(B3896))
{var sequence__3889 = place__3882, B3897 = sequence__3889[0], B3898 = B3879(B3897), B3899 = [B3898], sequence__3891 = place__3882, B3900 = sequence__3891.slice(1);
return B3721(B3899, B3900, values__3883)}
else {var B3901 = B3658, sequence__3893 = values__3883, B3902 = sequence__3893[0];
return [B3901, place__3882, B3902]}})}
{var B3924 = $S("set!"), B3925 = $S("parallel-set!");
B3624(B3674, "parallel-set!", function B3926 (____3904, var__3905, value__3906)
{var clauses__3907 = $SL.call(arguments, 3), sequence__3919 = clauses__3907, B3920 = sequence__3919, B3921 = ((B3920 || false).length || 0), B3922 = 0, B3923 = (B3921 === B3922);
if ($T(B3923))
return [B3924, var__3905, value__3906]
else {var temp__3908 = B3726();
return [B3825, [[temp__3908, value__3906]], B3721([B3925], clauses__3907), [B3924, var__3905, temp__3908]]}})}
{var B3959 = $K("else"), B3960 = $S("if"), B3961 = $S("cond"), trueQ = B1464["true?"];
B3624(B3674, "cond", function B3962 (____3928)
{var cases__3929 = $SL.call(arguments, 1), sequence__3945 = cases__3929, B3946 = sequence__3945, B3947 = ((B3946 || false).length || 0), B3948 = 0, value__3949 = (B3947 === B3948), B3954 = !(trueQ(value__3949));
if ($T(B3954))
{var sequence__3951 = cases__3929, B3930 = sequence__3951[0], test__3931 = B3930[0], then__3932 = $SL.call(B3930, 1), then__3933 = B3832(then__3932);
if ($T(B3878(test__3931, B3959)))
return then__3933
else {var B3955 = B3960, B3956 = [B3961], sequence__3953 = cases__3929, B3957 = sequence__3953.slice(1), B3958 = B3721(B3956, B3957);
return [B3955, test__3931, then__3933, B3958]}}})}
B3624(B3674, "when", function B3966 (____3963, test__3964)
{var body__3965 = $SL.call(arguments, 2);
return [B3960, test__3964, B3832(body__3965), false]})
{var B3970 = $S("not");
B3624(B3674, "unless", function B3971 (____3967, test__3968)
{var body__3969 = $SL.call(arguments, 2);
return [B3960, [B3970, test__3968], B3832(body__3969), false]})}
{var B3989 = $S("when"), B3990 = $S("and");
B3624(B3674, "and", function B3991 (____3973)
{var values__3974 = $SL.call(arguments, 1), object__3977 = values__3974, B3975 = ((object__3977 || false).length || 0);
if ($T(B3878(B3975, 0)))
return true
else if ($T(B3878(B3975, 1)))
{var sequence__3979 = values__3974;
return sequence__3979[0]}
else {var B3984 = B3989, sequence__3981 = values__3974, B3985 = sequence__3981[0], B3986 = [B3990], sequence__3983 = values__3974, B3987 = sequence__3983.slice(1), B3988 = B3721(B3986, B3987);
return [B3984, B3985, B3988]}})}
{var B4014 = $S("or");
B3624(B3674, "or", function B4015 (____3993)
{var values__3994 = $SL.call(arguments, 1), object__3998 = values__3994, B3995 = ((object__3998 || false).length || 0);
if ($T(B3878(B3995, 0)))
return false
else if ($T(B3878(B3995, 1)))
{var sequence__4000 = values__3994;
return sequence__4000[0]}
else {var value__3996 = B3726(), B4005 = B3825, sequence__4002 = values__3994, B4006 = sequence__4002[0], B4007 = [value__3996, B4006], B4008 = [B4007], B4009 = B3960, B4010 = [B4014], sequence__4004 = values__3994, B4011 = sequence__4004.slice(1), B4012 = B3721(B4010, B4011), B4013 = [B4009, value__3996, value__3996, B4012];
return [B4005, B4008, B4013]}})}
B3624(B3674, "if-bind", function B4023 (____4016, binding__4017, then__4018, else__4019)
{var var__4020 = binding__4017[0], value__4021 = binding__4017[1], temp__4022 = B3726();
return [B3825, [[temp__4022, value__4021]], [B3960, temp__4022, [B3825, [[var__4020, temp__4022]], then__4018], else__4019]]})
{var B4027 = $S("%while");
B3624(B3674, "while", function B4028 (____4024, test__4025)
{var body__4026 = $SL.call(arguments, 2);
return [B4027, test__4025, B3832(body__4026)]})}
{var B4032 = $S("while");
B3624(B3674, "until", function B4033 (____4029, test__4030)
{var body__4031 = $SL.call(arguments, 2);
return B3721([B4032, [B3970, test__4030]], body__4031)})}
{var B4052 = $S("for"), B4053 = $S("+"), B4054 = $S(">=");
B3624(B3674, "dotimes", function B4055 (____4035, binding__4036)
{var body__4037 = $SL.call(arguments, 2), temp__4038 = B3726(), var__4039 = binding__4036[0], count__4040 = binding__4036[1], result__4041 = binding__4036[2], B4043 = B3825, B4044 = [[temp__4038, count__4040]], B4045 = B4052, B4046 = [[var__4039, 0, [B4053, var__4039, 1]]], B4047 = [B4054, var__4039, temp__4038], B4042 = result__4041, B4048;
if ($T(B4042))
B4048 = B4042
else B4048 = false;
var B4049 = [B4047, B4048], B4050 = [B4045, B4046, B4049], B4051 = B3721(B4050, body__4037);
return [B4043, B4044, B4051]})}
{var B4160 = $S("method"), B4161 = $S("begin"), trueQ = B1464["true?"], B4062 = B1464["any?"], B4063 = B1464["push-last"], B4064 = B1464.slice, B4065 = B1464.third;
B3624(B3674, "for", function B4162 (____4066, clauses__4067, end__4068)
{var body__4069 = $SL.call(arguments, 3), init_clauses__4070 = [], next_clauses__4071 = [], vars__4072 = B3720(B3637, clauses__4067), B4073 = clauses__4067, B4074, B4075, B4076 = [B4073];
while ($T(true))
{var B4077 = B4074, value__4082;
if ($T(B4077))
value__4082 = B4077
else value__4082 = B4062(B3719, B4076);
var B4146 = !(trueQ(value__4082));
if ($T(B4146))
{var sequence__4084 = B4073, clause__4078 = sequence__4084[0];
(function B4163 (clause__4079)
{var array__4093 = init_clauses__4070, array__4090 = clause__4079, start__4091 = 0, end__4092 = 2, value__4094 = array__4090.slice(start__4091, end__4092);
array__4093.push(value__4094);
array__4093;
var array__4099 = next_clauses__4071, sequence__4098 = clause__4079, value__4100 = sequence__4098[0];
array__4099.push(value__4100);
array__4099;
var array__4105 = next_clauses__4071, sequence__4104 = clause__4079, value__4106 = sequence__4104[2];
array__4105.push(value__4106);
return array__4105})(clause__4078);
var sequence__4108 = B4073, B4145 = sequence__4108.slice(1);
B4073 = B4145;
B4076 = [B4073]}
else break};
B4075;
var B4147 = B3825, B4148 = B4032, sequence__4119 = end__4068, B4120 = sequence__4119, B4121 = ((B4120 || false).length || 0), B4122 = 0, B4080 = (B4121 === B4122), B4151;
if ($T(B4080))
B4151 = B4080
else {var B4149 = B3970, sequence__4124 = end__4068, B4150 = sequence__4124[0];
B4151 = [B4149, B4150]};
var B4152 = B3721([B3721([B4160, vars__4072], body__4069)], vars__4072), B4153 = B3721([B3925], next_clauses__4071), B4154 = [B4148, B4151, B4152, B4153], B4155 = B3721(B4154), sequence__4137 = end__4068, sequence__4138 = sequence__4137.slice(1), B4139 = sequence__4138, B4140 = ((B4139 || false).length || 0), B4141 = 0, value__4142 = (B4140 === B4141), B4156 = !(trueQ(value__4142)), B4159;
if ($T(B4156))
{var B4157 = [B4161], sequence__4144 = end__4068, B4158 = sequence__4144.slice(1);
B4159 = B3721(B4157, B4158)}
else B4159 = false;
return [B4147, init_clauses__4070, B4155, B4159]})}
{var B4239 = $S("rest"), B4240 = $S("%array"), B4241 = $S("until"), B4242 = $S("any?"), B4243 = $S("empty?"), B4244 = $S("first"), B4165 = B1464.second;
B3624(B3674, "for-each", function B4245 (____4166, clauses__4167, end__4168)
{var body__4169 = $SL.call(arguments, 3), clauses__4171 = B3720(function B4246 (clause__4170)
{return B3721([B3726()], clause__4170)}, clauses__4167), endQ__4172 = B3726(), values__4173 = B3726(), result__4174 = B3726(), B4211 = B4161, vars__4175 = B3720(B4165, clauses__4171), B4212 = B3721([B3721([B4160, vars__4175], body__4169)], vars__4175), B4213 = [B4211, B4212], B4219 = B3720(function B4247 (clause__4176)
{var B4214 = B3924, sequence__4190 = clause__4176, B4215 = sequence__4190[0], B4216 = B4239, sequence__4192 = clause__4176, B4217 = sequence__4192[0], B4218 = [B4216, B4217];
return [B4214, B4215, B4218]}, clauses__4171), B4220 = [[B3924, values__4173, B3721([B4240], B3720(B3637, clauses__4171))]], body__4177 = B3721(B4213, B4219, B4220), B4221 = B3825, B4222 = B3721(B3720(function B4248 (clause__4178)
{var temp__4179 = clause__4178[0], var__4180 = clause__4178[1], values__4181 = clause__4178[2];
return [temp__4179, values__4181]}, clauses__4171), [[endQ__4172, false], [result__4174, false], [values__4173, B3721([B4240], B3720(B3637, clauses__4171))]]), B4223 = B4241, B4224 = [B4014, endQ__4172, [B4242, B4243, values__4173]], B4225 = B3825, B4226 = B3720(function B4249 (clause__4182)
{var temp__4183 = clause__4182[0], var__4184 = clause__4182[1], values__4185 = clause__4182[2];
return [var__4184, [B4244, temp__4183]]}, clauses__4171), sequence__4194 = end__4168, B4186 = sequence__4194[0], B4236;
if ($T(B4186))
{var end_test__4187 = B4186, B4227 = B3960, B4228 = B4161, B4229 = B3924, sequence__4196 = end__4168, results__4188 = sequence__4196.slice(1), sequence__4207 = results__4188, B4208 = sequence__4207, B4209 = ((B4208 || false).length || 0), B4210 = 0, B4230 = (B4209 === B4210), B4231;
if ($T(B4230))
B4231 = [false]
else B4231 = results__4188;
var B4232 = B3832(B4231), B4233 = [B4229, result__4174, B4232], B4234 = [B3924, endQ__4172, true], B4235 = [B4228, B4233, B4234];
B4236 = [B4227, end_test__4187, B4235, body__4177]}
else B4236 = body__4177;
var B4237 = [B4225, B4226, B4236], B4238 = [B4223, B4224, B4237];
return [B4221, B4222, B4238, result__4174]})}
{var B4256 = $S("%get-property");
B3624(B3674, "bind-properties", function B4257 (____4250, properties__4251, object__4252)
{var body__4253 = $SL.call(arguments, 3), objectT__4254 = B3726();
return B3721([B3825, B3721([[objectT__4254, object__4252]], B3720(function B4258 (property__4255)
{return [property__4255, [B4256, objectT__4254, B3625(property__4255)]]}, properties__4251))], body__4253)})}
B3624(B3674, "select", function B4275 (____4259, value__4260, test__4261)
{var cases__4262 = $SL.call(arguments, 3), valueT__4263 = B3726(), testT__4264;
if ($T(B3723(test__4261, B3846)))
testT__4264 = test__4261
else testT__4264 = B3726();
var test_expression__4265 = function B4276 (test_value__4266)
{return [testT__4264, valueT__4263, test_value__4266]}, B4270 = B3825, B4271 = [[valueT__4263, value__4260]], B4272;
if ($T(B3723(test__4261, B3846)))
B4272 = []
else B4272 = [[testT__4264, test__4261]];
var B4273 = B3721(B4271, B4272), B4274 = B3721([B3961], B3720(function B4277 (case__4267)
{var tests__4268 = case__4267[0], then__4269 = $SL.call(case__4267, 1);
if ($T(B3878(tests__4268, B3959)))
return case__4267
else return B3721([B3721([B4014], B3720(test_expression__4265, tests__4268))], then__4269)}, cases__4262));
return [B4270, B4273, B4274]})
var B4279 = B3623("destructure", function B4293 (bindings__4280, values__4281, body__4282)
{if ($T(B3723(values__4281, B3846)))
{var B4283 = B3683(bindings__4280), required__4284 = B4283[0], rest__4285 = B4283[1], key__4286 = B4283[2], object__4292 = required__4284, i__4287 = ((object__4292 || false).length || 0);
return B3709(function B4294 (body__4288, binding__4289)
{i__4287 = (i__4287 - 1);
if ($T(B3723(binding__4289, B3846)))
return [B3825, [[binding__4289, [B4256, values__4281, i__4287]]], body__4288]
else return B4279(binding__4289, [B4256, values__4281, i__4287], body__4288)}, B3727(body__4282, values__4281, required__4284, rest__4285, key__4286), B3847(required__4284))}
else {var var__4290 = B3726();
return [B3825, [[var__4290, values__4281]], B4279(bindings__4280, var__4290, body__4282)]}}, false)
B3624(B3674, "destructuring-bind", function B4299 (____4295, bindings__4296, values__4297)
{var body__4298 = $SL.call(arguments, 3);
return B4279(bindings__4296, values__4297, B3721([B4161], body__4298))})
B3624(B3674, "bind-methods", function B4307 (____4300, bindings__4301)
{var body__4302 = $SL.call(arguments, 2);
return B3721([B3825, B3720(B3637, bindings__4301)], B3720(function B4308 (binding__4303)
{var identifier__4304 = binding__4303[0], arguments__4305 = binding__4303[1], body__4306 = $SL.call(binding__4303, 2);
return [B3924, identifier__4304, B3721([B4160, arguments__4305], body__4306)]}, bindings__4301), body__4302)})
B3624(B3674, "inc!", function B4318 (____4310, object__4311, value__4312)
{var B4314 = B3924, B4315 = B4053, B4313 = value__4312, B4316;
if ($T(B4313))
B4316 = B4313
else B4316 = 1;
var B4317 = [B4315, object__4311, B4316];
return [B4314, object__4311, B4317]})
{var B4328 = $S("-");
B3624(B3674, "dec!", function B4329 (____4320, object__4321, value__4322)
{var B4324 = B3924, B4325 = B4328, B4323 = value__4322, B4326;
if ($T(B4323))
B4326 = B4323
else B4326 = 1;
var B4327 = [B4325, object__4321, B4326];
return [B4324, object__4321, B4327]})}
{var B4347 = $S("%plus");
B3624(B3674, "+", function B4348 (____4330)
{var values__4331 = $SL.call(arguments, 1), sequence__4342 = values__4331, B4343 = sequence__4342, B4344 = ((B4343 || false).length || 0), B4345 = 0, B4346 = (B4344 === B4345);
if ($T(B4346))
return 0
else return B3721([B4347], values__4331)})}
{var B4367 = $S("%minus");
B3624(B3674, "-", function B4368 (____4349, minuend__4350)
{var subtrahends__4351 = $SL.call(arguments, 2), sequence__4362 = subtrahends__4351, B4363 = sequence__4362, B4364 = ((B4363 || false).length || 0), B4365 = 0, B4366 = (B4364 === B4365);
if ($T(B4366))
return [B3826, "-", minuend__4350]
else return B3721([B4367, minuend__4350], subtrahends__4351)})}
{var B4386 = $S("%times");
B3624(B3674, "*", function B4387 (____4369)
{var values__4370 = $SL.call(arguments, 1), sequence__4381 = values__4370, B4382 = sequence__4381, B4383 = ((B4382 || false).length || 0), B4384 = 0, B4385 = (B4383 === B4384);
if ($T(B4385))
return 1
else return B3721([B4386], values__4370)})}
{var B4406 = $S("%divide");
B3624(B3674, "/", function B4407 (____4388, numerator__4389)
{var denominators__4390 = $SL.call(arguments, 2), sequence__4401 = denominators__4390, B4402 = sequence__4401, B4403 = ((B4402 || false).length || 0), B4404 = 0, B4405 = (B4403 === B4404);
if ($T(B4405))
return [B4406, 1, numerator__4389]
else return B3721([B4406, numerator__4389], denominators__4390)})}
{var B4409 = $S("next-method"), B4410 = $S("%native");
B3624(B3674, "call-next-method", function B4411 (____4408)
{return [[B4256, B4409, "apply"], [B4410, "null"], B3613]})}
var B4438 = $S("%symbol"), trueQ = B1464["true?"], B4412 = B3623("transform_quoted", function B4439 (form__4413)
{if ($T(B3723(form__4413, B3724)))
{var sequence__4425 = form__4413, B4426 = sequence__4425, B4427 = ((B4426 || false).length || 0), B4428 = 0, value__4429 = (B4427 === B4428), B4434 = !(trueQ(value__4429)), B4437;
if ($T(B4434))
{var sequence__4431 = form__4413, B4435 = sequence__4431[0], B4436 = B3625(B4435);
B4437 = B3878(B4436, "%comma")}
else B4437 = false;
if ($T(B4437))
{var sequence__4433 = form__4413;
return sequence__4433[1]}
else return B3721([B4240], B3720(B4412, form__4413))}
else if ($T(B3723(form__4413, B3846)))
return [B4438, B3625(form__4413)]
else return form__4413}, false)
B3624(B3674, "%backquote", function B4442 (____4440, exp__4441)
{return B4412(exp__4441)})
{var B4450 = $K("message"), B4443 = B1464.signal, B4444 = B1464.make, B4445 = B1464["<error>"];
B3624(B3674, "%comma", function B4451 (____4446, value__4447)
{var error__4449 = B4444(B4445, B4450, "comma not inside backquote");
throw(error__4449);
return false})}
var B4452 = B4444(B4445, B4450, "unsupported name for call in dot")
{var B4454 = B1464["<string>"];
B3624(B3674, ".", function B4469 (____4455, value__4456)
{var calls__4457 = $SL.call(arguments, 2);
return B3709(function B4470 (value__4458, call__4459)
{var property__4460 = call__4459[0], arguments__4461 = $SL.call(call__4459, 1), B4465 = B4256, B4462 = property__4460, B4466;
if ($T(B3723(B4462, B4454)))
B4466 = property__4460
else if ($T(B3723(B4462, B3846)))
B4466 = B3625(property__4460)
else {var error__4464 = B4452;
throw(error__4464);
B4466 = false};
var B4467 = [B4465, value__4458, B4466], B4468 = [B4467];
return B3721(B4468, arguments__4461)}, value__4456, calls__4457)})}
var B4472 = B3623("simplify_arguments", function B4484 (arguments__4473)
{var B4474 = B3683(arguments__4473), required__4475 = B4474[0], rest__4476 = B4474[1], key__4477 = B4474[2], required__4479 = B3720(function B4485 (argument__4478)
{if ($T(B3723(argument__4478, B3724)))
{var sequence__4481 = argument__4478;
return sequence__4481[0]}
else return argument__4478}, required__4475), B4482;
if ($T(rest__4476))
B4482 = B3721([B3703], rest__4476)
else B4482 = [];
var B4483;
if ($T(key__4477))
B4483 = B3721([B3704], key__4477)
else B4483 = [];
return B3721(required__4479, B4482, B4483)}, false)
var B4550 = $S("%native-name"), trueQ = B1464["true?"], B4490 = B1464[">"], B4491 = B3596["setter-identifier?"], B4492 = B1464["%keys"], B4493 = B3623("make_function_definer", function B4551 (macro_name__4494, definer_name__4495)
{var B4496 = $SL.call(arguments, 2), B4497 = B4492(B4496, {"type/existing?":false,
"record?":false}), typeSexistingQ__4498 = B4497["type/existing?"], recordQ__4499 = B4497["record?"];
return function B4552 (env__4500, identifier__4501, arguments__4502)
{var body__4503 = $SL.call(arguments, 3), B4504;
if ($T(B4491(identifier__4501)))
{var sequence__4512 = identifier__4501, B4539 = sequence__4512[1], B4540 = B3879(B4539);
B4504 = [true, B4540]}
else B4504 = [false, identifier__4501];
var setterQ__4505 = B4504[0], identifier__4506 = B4504[1], B4507 = B3723(identifier__4506, B3846), value__4514;
if ($T(B4507))
value__4514 = B4507
else value__4514 = setterQ__4505;
var B4541 = !(trueQ(value__4514));
if ($T(B4541))
{var error__4516 = B4444(B4445, B4450, B3721(macro_name__4494, ": ", "name not <var> or (setter <var>)"));
throw(error__4516);
false};
var B4542;
if ($T(typeSexistingQ__4498))
{var sequence__4527 = arguments__4502, B4528 = sequence__4527, B4529 = ((B4528 || false).length || 0), B4530 = 0;
B4542 = (B4529 === B4530)}
else B4542 = false;
if ($T(B4542))
{var error__4532 = B4444(B4445, B4450, B3721(macro_name__4494, ": ", "method has no arguments"));
throw(error__4532);
false};
var simplified_arguments__4508 = B4472(arguments__4502), method_definition__4509 = B3648(B3721([B4160, simplified_arguments__4508], body__4503), env__4500);
if ($T(recordQ__4499))
B3624(env__4500, "module", "functions", B3625(identifier__4506), method_definition__4509);
var B4543 = B3663, B4544 = [B3837(definer_name__4495), [B4550, B3625(identifier__4506)], method_definition__4509, setterQ__4505], B4548;
if ($T(typeSexistingQ__4498))
{var sequence__4534 = arguments__4502, head__4510 = sequence__4534[0], B4546;
if ($T(B3723(head__4510, B3724)))
{var object__4536 = head__4510, B4545 = ((object__4536 || false).length || 0);
B4546 = B4490(B4545, 1)}
else B4546 = false;
var B4547;
if ($T(B4546))
{var sequence__4538 = head__4510;
B4547 = sequence__4538[1]}
else B4547 = B3837("<object>");
B4548 = [B4547, identifier__4506]}
else B4548 = [];
var B4549 = B3721(B4544, B4548);
return [B4543, identifier__4506, B4549]}}, false)
{var B4578 = $K("type/existing?"), B4579 = $K("record?"), trueQ = B1464["true?"], B4558 = B1464.apply, B4559 = [["define-function", "%make-function", B4578, false, B4579, true], ["define-method", "%make-method", B4578, true]], B4560, B4561, B4562 = [B4559];
while ($T(true))
{var B4563 = B4560, value__4567;
if ($T(B4563))
value__4567 = B4563
else value__4567 = B4062(B3719, B4562);
var B4577 = !(trueQ(value__4567));
if ($T(B4577))
{var sequence__4569 = B4559, arguments__4564 = sequence__4569[0];
(function B4580 (arguments__4565)
{var sequence__4571 = arguments__4565, B4574 = sequence__4571[0], B4575 = B4558(B4493, arguments__4565);
return B3624(B3674, B4574, B4575)})(arguments__4564);
var sequence__4573 = B4559, B4576 = sequence__4573.slice(1);
B4559 = B4576;
B4562 = [B4559]}
else break};
B4561}
{var B4584 = $S("%make-generic");
B3624(B3674, "define-generic", function B4585 (____4581, identifier__4582, arguments__4583)
{return [B3663, identifier__4582, [B4584, [B4550, B3625(identifier__4582)]]]})}
{var B4658 = $S("%make-class"), trueQ = B1464["true?"];
B3624(B3674, "define-class", function B4659 (____4591, identifier__4592, superclass__4593)
{var properties__4594 = $SL.call(arguments, 3), object__4595 = [B3824], B4596 = properties__4594, B4597, B4598, B4599 = [B4596];
while ($T(true))
{var B4600 = B4597, value__4604;
if ($T(B4600))
value__4604 = B4600
else value__4604 = B4062(B3719, B4599);
var B4652 = !(trueQ(value__4604));
if ($T(B4652))
{var sequence__4606 = B4596, property__4601 = sequence__4606[0];
(function B4660 (property__4602)
{if ($T(B3723(property__4602, B3724)))
{var array__4611 = object__4595, sequence__4610 = property__4602, B4647 = sequence__4610[0], value__4612 = B3625(B4647);
array__4611.push(value__4612);
array__4611;
var array__4617 = object__4595, B4648 = B4160, B4649 = [], sequence__4616 = property__4602, B4650 = sequence__4616[1], value__4618 = [B4648, B4649, B4650];
array__4617.push(value__4618);
return array__4617}
else {var array__4621 = object__4595, value__4622 = B3625(property__4602);
array__4621.push(value__4622);
array__4621;
var array__4625 = object__4595, value__4626 = undefined;
array__4625.push(value__4626);
return array__4625}})(property__4601);
var sequence__4628 = B4596, B4651 = sequence__4628.slice(1);
B4596 = B4651;
B4599 = [B4596]}
else break};
B4598;
var B4653 = B3663, B4654 = B4658, sequence__4640 = superclass__4593, B4641 = sequence__4640, B4642 = ((B4641 || false).length || 0), B4643 = 0, value__4644 = (B4642 === B4643), B4655 = !(trueQ(value__4644)), B4656;
if ($T(B4655))
{var sequence__4646 = superclass__4593;
B4656 = sequence__4646[0]}
else B4656 = false;
var B4657 = [B4654, B4656, object__4595];
return [B4653, identifier__4592, B4657]})}
var B4661 = B3623("get_import_module_nameSoptions", function B4670 (import__4662)
{var B4667;
if ($T(B3723(import__4662, B3724)))
{var sequence__4664 = import__4662;
B4667 = sequence__4664[0]}
else B4667 = import__4662;
var B4668 = B3625(B4667), B4669;
if ($T(B3723(import__4662, B3724)))
{var sequence__4666 = import__4662;
B4669 = sequence__4666.slice(1)}
else B4669 = [];
return [B4668, B4669]}, false)
{var B4675 = B3596["identifier-name"], B4676, B4677, B4678;
B3624(B3674, "define-module", function B4695 (env__4679, ____4680)
{var B4681 = $SL.call(arguments, 2), B4682 = B4492(B4681, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), import__4683 = B4682["import"], export__4684 = B4682["export"], compile_time_import__4685 = B4682["compile-time-import"], inline__4686 = B4682.inline;
B3624(env__4679, "module", "exports", B3720(B4675, export__4684));
B3646(function B4696 (import__4687)
{var B4688 = B4661(import__4687), module_name__4689 = B4688[0], options__4690 = B4688[1];
return B4558(B4676, env__4679, module_name__4689, options__4690)}, compile_time_import__4685);
B3624(env__4679, "module", "inline", B3720(B4675, inline__4686));
return B3832(B3720(function B4697 (import__4691)
{var B4692 = B4661(import__4691), module_name__4693 = B4692[0], options__4694 = B4692[1];
B4558(B4677, B3636(env__4679, "module"), module_name__4693, options__4694);
return B4678(module_name__4693, env__4679)}, import__4683))})}
B4678 = B3623("make_import_definition", function B4701 (module_name__4698, env__4699)
{var identifier__4700 = B3726();
B3624(env__4699, "import-identifiers", module_name__4698, identifier__4700);
return [B3663, identifier__4700, [[B4410, "require"], module_name__4698]]}, false)
{var B4706 = $S("define-function");
B3624(B3674, "define-macro", function B4707 (env__4702, identifier__4703, arguments__4704)
{var body__4705 = $SL.call(arguments, 3);
return [B4161, B3721([B4706, identifier__4703, B3721([B3726()], arguments__4704)], body__4705), [B3924, [B4256, identifier__4703, "%macro?"], true]]})}
B3624(B3674, "define-symbol-macro", function B4712 (env__4708, identifier__4709, arguments__4710)
{var body__4711 = $SL.call(arguments, 3);
return [B4161, B3721([B4706, identifier__4709, []], body__4711), [B3924, [B4256, identifier__4709, "%symbol-macro?"], true]]})
{var B4729 = $S("%try"), B4730 = $S("instance?");
B3624(B3674, "handler-case", function B4731 (____4716, body__4717)
{var cases__4718 = $SL.call(arguments, 2), condition_var__4719 = B3726();
return [B4729, body__4717, condition_var__4719, B3721([B3961], B3720(function B4732 (case__4720)
{var B4721 = case__4720[0], type__4722 = B4721[0], B4723 = $SL.call(B4721, 1), B4724 = B4492(B4723, {condition:false}), condition__4725 = B4724.condition, body__4726 = $SL.call(case__4720, 1), B4727 = [[B4730, condition_var__4719, type__4722]], B4728;
if ($T(condition__4725))
B4728 = [B3721([B3825, [[condition__4725, condition_var__4719]]], body__4726)]
else B4728 = body__4726;
return B3721(B4727, B4728)}, cases__4718))]})}
{var B4733 = B3603();
exports["*core-symbol-macros*"] = B4733}
{var B4735 = $S("%next-method");
B3624(B4733, "next-method", function B4736 (____4734)
{return [B4735, B3614]})}
var trueQ = B1464["true?"], B4738 = B3623("find_macro_definition", function B4770 (form__4739, env__4740)
{var B4741 = form__4739;
if ($T(B3723(B4741, B3724)))
{var sequence__4754 = form__4739, B4755 = sequence__4754, B4756 = ((B4755 || false).length || 0), B4757 = 0, B4766 = (B4756 === B4757);
if ($T(B4766))
{var error__4759 = "Empty form";
throw(error__4759);
false};
var sequence__4761 = form__4739, B4767 = sequence__4761[0], name__4742 = B3625(B4767), value__4763 = B3636(env__4740, "bound?", name__4742), B4768 = !(trueQ(value__4763));
if ($T(B4768))
return env__4740.macros[name__4742]}
else if ($T(B3723(B4741, B3846)))
{var name__4743 = B3625(form__4739), value__4765 = B3636(env__4740, "bound?", name__4743), B4769 = !(trueQ(value__4765));
if ($T(B4769))
return env__4740["symbol-macros"][name__4743]}}, false)
{var B4772 = B3623("macroexpand_1", function B4780 (form__4773, env__4774)
{var B4775 = B4738(form__4773, env__4774);
if ($T(B4775))
{var macro__4776 = B4775, B4779;
if ($T(B3723(form__4773, B3724)))
{var sequence__4778 = form__4773;
B4779 = sequence__4778.slice(1)}
else B4779 = form__4773;
return B4558(macro__4776, env__4774, B4779)}
else return form__4773}, false);
exports["macroexpand-1"] = B4772}
{var trueQ = B1464["true?"], B4781 = B3623("macroexpand", function B4789 (form__4782, env__4783)
{var doneQ__4784;
while ($T(true))
{var value__4787 = doneQ__4784, B4788 = !(trueQ(value__4787));
if ($T(B4788))
{var expanded__4785 = B4772(form__4782, env__4783);
doneQ__4784 = B3878(expanded__4785, form__4782);
form__4782 = expanded__4785}
else break};
return form__4782}, false);
exports.macroexpand = B4781}
{var B4792 = B1464.rcurry;
B3648 = B3623("macroexpand_all", function B4801 (form__4793, env__4794)
{var B4795 = form__4793;
if ($T(B3723(B4795, B3724)))
if ($T(B4738(form__4793, env__4794)))
return B3648(B4781(form__4793, env__4794), env__4794)
else {var B4796 = B3638(form__4793, env__4794);
if ($T(B4796))
{var expander__4797 = B4796, sequence__4799 = form__4793, B4800 = sequence__4799.slice(1);
return B4558(expander__4797, env__4794, B4800)}
else return B3720(B4792(B3648, env__4794), form__4793)}
else if ($T(B3723(B4795, B3846)))
if ($T(B4738(form__4793, env__4794)))
return B3648(B4781(form__4793, env__4794), env__4794)
else return form__4793
else return form__4793}, false);
exports["macroexpand-all"] = B3648}
var B4803 = B3623("find_moduleSimport_name", function B4813 (definition_name__4804, env__4805)
{return B4062(function B4814 (import__4806)
{var module__4807 = import__4806[0], names__4808 = import__4806[1];
return B4062(function B4815 (name__4809)
{var B4810;
if ($T(B3723(name__4809, B3724)))
B4810 = name__4809
else B4810 = [name__4809, name__4809];
var import_name__4811 = B4810[0], new_name__4812 = B4810[1];
if ($T(B3878(definition_name__4804, new_name__4812)))
return [module__4807, import_name__4811]}, names__4808)}, B3636(env__4805, "module", "imports"))}, false)
var B4816 = B3623("find_import_identifier", function B4819 (module__4817, env__4818)
{return B3636(env__4818, "import-identifiers", B3636(module__4817, "name"))}, false)
{var B4852 = $S("%begin"), B4853 = $S("%define"), B4820 = B1464["set-subtract!"], B4821, B4822 = B1464["as-set"], B4823 = B1464["object-properties"], B4824 = B3623("define_free_variables", function B4854 (exp__4825, env__4826)
{var variables__4827 = B4820(B4820(B4821(exp__4825), B4822(B3720(B3837, B4823(B3636(env__4826, "defined?"))))), B3612), sequence__4844 = variables__4827, B4845 = sequence__4844, B4846 = ((B4845 || false).length || 0), B4847 = 0, B4848 = (B4846 === B4847);
if ($T(B4848))
return exp__4825
else return B3721([B4852], B3720(function B4855 (variable__4828)
{var name__4829 = B3625(variable__4828);
B3624(env__4826, "defined?", name__4829, true);
var B4849 = [[B4853, variable__4828]], moduleSimport_name__4830 = B4803(name__4829, env__4826), B4850;
if ($T(moduleSimport_name__4830))
{var module__4831 = moduleSimport_name__4830[0], import_name__4832 = moduleSimport_name__4830[1], import_identifier__4833 = B4816(module__4831, env__4826);
B4850 = [[B3658, variable__4828, [B4256, import_identifier__4833, import_name__4832]]]}
else B4850 = [];
var B4851 = B3721(B4849, B4850);
return B3832(B4851)}, variables__4827), [exp__4825])}, false);
exports["define-free-variables"] = B4824}
var trueQ = B1464["true?"], B4856 = B1464.choose, B4857 = B1464["has?"], B4858 = B3623("define_free_variables2", function B4895 (exp__4859, env__4860)
{var free__4861 = B4820(B4821(exp__4859), B3612), variables__4863 = B4856(function B4896 (variable__4862)
{var object__4874 = B3636(env__4860, "definition-names"), property__4875 = B3625(variable__4862), value__4876 = $HP.call(object__4874,property__4875);
return !(trueQ(value__4876))}, free__4861), sequence__4887 = variables__4863, B4888 = sequence__4887, B4889 = ((B4888 || false).length || 0), B4890 = 0, B4891 = (B4889 === B4890);
if ($T(B4891))
return exp__4859
else return B3721([B4852], B3720(function B4897 (variable__4864)
{var name__4865 = B3625(variable__4864);
B3624(env__4860, "defined?", name__4865, true);
var B4892 = [[B4853, variable__4864]], moduleSimport_name__4866 = B4803(name__4865, env__4860), B4893;
if ($T(moduleSimport_name__4866))
{var module__4867 = moduleSimport_name__4866[0], import_name__4868 = moduleSimport_name__4866[1], old_import_identifier__4869 = B4816(module__4867, env__4860), import_identifier__4870 = B3636(env__4860, "new-identifiers", B3625(old_import_identifier__4869));
B4893 = [[B3658, variable__4864, [B4256, import_identifier__4870, import_name__4868]]]}
else B4893 = [];
var B4894 = B3721(B4892, B4893);
return B3832(B4894)}, variables__4863), [exp__4859])}, false)
{var trueQ = B1464["true?"], B4914 = B1464["set-union!"];
B4821 = B3623("find_free_variables", function B5009 (exp__4915)
{var B4990;
if ($T(B3723(exp__4915, B3724)))
{var sequence__4959 = exp__4915, B4960 = sequence__4959, B4961 = ((B4960 || false).length || 0), B4962 = 0, value__4963 = (B4961 === B4962);
B4990 = !(trueQ(value__4963))}
else B4990 = false;
if ($T(B4990))
{var sequence__4965 = exp__4915, head__4916 = sequence__4965[0], name__4917;
if ($T(B3723(head__4916, B3846)))
name__4917 = B3625(head__4916)
else name__4917 = false;
var B4918 = name__4917;
if ($T(B3878(B4918, "%method")))
{var ____4919 = exp__4915[0], arguments__4920 = exp__4915[1], body__4921 = exp__4915[2];
return B4820(B4821(body__4921), B4822(arguments__4920))}
else if ($T(B3878(B4918, "%bind")))
{var ____4922 = exp__4915[0], B4923 = exp__4915[1], var__4924 = B4923[0], value__4925 = B4923[1], body__4926 = exp__4915[2];
return B4914(B4820(B4821(body__4926), B4822([var__4924])), B4821(value__4925))}
else if ($T(B3878(B4918, "%begin")))
{var definitions__4927 = [], B4995 = function B5010 (result__4928, e__4929)
{var B4993;
if ($T(B3635(e__4929)))
{var sequence__4967 = e__4929, B4991 = sequence__4967[0], B4992 = B3837("%define");
B4993 = B3878(B4991, B4992)}
else B4993 = false;
var B4994;
if ($T(B4993))
{var array__4972 = definitions__4927, sequence__4971 = e__4929, value__4973 = sequence__4971[1];
array__4972.push(value__4973);
array__4972;
B4994 = []}
else B4994 = B4821(e__4929);
return B3721(result__4928, B4994)}, B4996 = [], sequence__4975 = exp__4915, B4997 = sequence__4975.slice(1), B4998 = B3709(B4995, B4996, B4997), B4999 = B4822(B4998), B5000 = B4822(definitions__4927);
return B4820(B4999, B5000)}
else if ($T(B3878(B4918, "%try")))
{var ____4930 = exp__4915[0], e1__4931 = exp__4915[1], v__4932 = exp__4915[2], e2__4933 = exp__4915[3];
return B4820(B4914(B4822(B4821(e1__4931)), B4822(B4821(e2__4933))), B4822([v__4932]))}
else {var B4934 = B3878(B4918, "%set"), B5001;
if ($T(B4934))
B5001 = B4934
else {var B4935 = B3878(B4918, "%if");
if ($T(B4935))
B5001 = B4935
else {var B4936 = B3878(B4918, "%while");
if ($T(B4936))
B5001 = B4936
else {var B4937 = B3878(B4918, "%array");
if ($T(B4937))
B5001 = B4937
else {var B4938 = B3878(B4918, "%object");
if ($T(B4938))
B5001 = B4938
else {var B4939 = B3878(B4918, "%infix");
if ($T(B4939))
B5001 = B4939
else {var B4940 = B3878(B4918, "%get-property");
if ($T(B4940))
B5001 = B4940
else {var B4941 = B3878(B4918, "%native-call");
if ($T(B4941))
B5001 = B4941
else {var B4942 = B3878(B4918, "%plus");
if ($T(B4942))
B5001 = B4942
else {var B4943 = B3878(B4918, "%minus");
if ($T(B4943))
B5001 = B4943
else {var B4944 = B3878(B4918, "%times");
if ($T(B4944))
B5001 = B4944
else B5001 = B3878(B4918, "%divide")}}}}}}}}}};
if ($T(B5001))
{var B5002 = [], sequence__4977 = exp__4915, B5003 = sequence__4977.slice(1), B5004 = B3720(B4821, B5003), B5005 = B3709(B3721, B5002, B5004);
return B4822(B5005)}
else {var B4945 = B3878(B4918, "%native"), B5006;
if ($T(B4945))
B5006 = B4945
else {var B4946 = B3878(B4918, "%native-name");
if ($T(B4946))
B5006 = B4946
else {var B4947 = B3878(B4918, "%define");
if ($T(B4947))
B5006 = B4947
else B5006 = B3878(B4918, "%symbol")}};
if ($T(B5006))
return B4822([])
else {var function__4986 = B4914, values__4987 = B3720(B4821, exp__4915), B4988 = values__4987, B5007 = B4988[0], B4989 = values__4987, B5008 = B4989.slice(1);
return B3709(function__4986, B5007, B5008)}}}}
else if ($T(B3723(exp__4915, B3846)))
return B4822([exp__4915])
else return B4822([])}, false)}
var trueQ = B1464["true?"], dec = B1464.dec, B5029 = B1464["last-setter"], B5030 = B1464.last, B5031 = B1464["second-setter"], B5032, B5033, B5034 = B3623("inline", function B5145 (form__5035, env__5036)
{var B5128;
if ($T(B3723(form__5035, B3724)))
{var sequence__5079 = form__5035, B5080 = sequence__5079, B5081 = ((B5080 || false).length || 0), B5082 = 0, value__5083 = (B5081 === B5082);
B5128 = !(trueQ(value__5083))}
else B5128 = false;
if ($T(B5128))
{var sequence__5085 = form__5035, B5129 = sequence__5085[0], B5130 = B3723(B5129, B3846);
if ($T(B5130))
{var sequence__5087 = form__5035, B5131 = sequence__5087[0], B5037 = B3625(B5131), B5038 = B3878(B5037, "%method"), B5132;
if ($T(B5038))
B5132 = B5038
else B5132 = B3878(B5037, "%set");
if ($T(B5132))
{var array__5100 = form__5035, array__5097 = form__5035, B5098 = array__5097, B5099 = ((B5098 || false).length || 0), B5133 = (B5099 - 1), B5134 = array__5097[B5133], value__5101 = B5034(B5134, env__5036);
array__5100[dec(B3680(array__5100), 1)] = value__5101;
return form__5035}
else if ($T(B3878(B5037, "%bind")))
{var ____5039 = form__5035[0], binding__5040 = form__5035[1], body__5041 = form__5035[2], array__5106 = binding__5040, sequence__5105 = binding__5040, B5135 = sequence__5105[1], value__5107 = B5034(B5135, env__5036);
array__5106[1] = value__5107;
var array__5110 = form__5035, value__5111 = B5034(body__5041, env__5036);
array__5110[dec(B3680(array__5110), 1)] = value__5111;
return form__5035}
else if ($T(B3878(B5037, "%try")))
{var ____5042 = form__5035[0], body__5043 = form__5035[1], var__5044 = form__5035[2], catch__5045 = form__5035[3], array__5114 = form__5035, value__5115 = B5034(body__5043, env__5036);
array__5114[1] = value__5115;
var array__5118 = form__5035, value__5119 = B5034(catch__5045, env__5036);
array__5118[dec(B3680(array__5118), 1)] = value__5119;
return form__5035}
else {var B5046 = B3878(B5037, "%begin"), B5136;
if ($T(B5046))
B5136 = B5046
else {var B5047 = B3878(B5037, "%if");
if ($T(B5047))
B5136 = B5047
else {var B5048 = B3878(B5037, "%while");
if ($T(B5048))
B5136 = B5048
else {var B5049 = B3878(B5037, "%array");
if ($T(B5049))
B5136 = B5049
else {var B5050 = B3878(B5037, "%object");
if ($T(B5050))
B5136 = B5050
else {var B5051 = B3878(B5037, "%get-property");
if ($T(B5051))
B5136 = B5051
else {var B5052 = B3878(B5037, "%native-call");
if ($T(B5052))
B5136 = B5052
else {var B5053 = B3878(B5037, "%infix");
if ($T(B5053))
B5136 = B5053
else {var B5054 = B3878(B5037, "%plus");
if ($T(B5054))
B5136 = B5054
else {var B5055 = B3878(B5037, "%minus");
if ($T(B5055))
B5136 = B5055
else {var B5056 = B3878(B5037, "%times");
if ($T(B5056))
B5136 = B5056
else B5136 = B3878(B5037, "%divide")}}}}}}}}}};
if ($T(B5136))
{var sequence__5121 = form__5035, B5137 = sequence__5121[0], B5138 = [B5137], B5139 = B4792(B5034, env__5036), sequence__5123 = form__5035, B5140 = sequence__5123.slice(1), B5141 = B3720(B5139, B5140);
return B3721(B5138, B5141)}
else {var B5057 = B3878(B5037, "%native"), B5142;
if ($T(B5057))
B5142 = B5057
else {var B5058 = B3878(B5037, "%native-name");
if ($T(B5058))
B5142 = B5058
else B5142 = B3878(B5037, "%define")};
if ($T(B5142))
return form__5035
else {var sequence__5125 = form__5035, B5143 = sequence__5125[0], name__5059 = B3625(B5143), B5060 = B3636(env__5036, "definition-names", name__5059), definition_name__5061;
if ($T(B5060))
definition_name__5061 = B5060
else definition_name__5061 = name__5059;
var B5062;
if ($T(B5033(B3636(env__5036, "module"), definition_name__5061)))
B5062 = B3636(env__5036, "module", "functions", definition_name__5061)
else B5062 = false;
var definition__5067;
if ($T(B5062))
definition__5067 = B5062
else {var B5063 = B4803(definition_name__5061, env__5036);
if ($T(B5063))
{var moduleSimport_name__5064 = B5063, module__5065 = moduleSimport_name__5064[0], import_name__5066 = moduleSimport_name__5064[1];
if ($T(B5033(module__5065, import_name__5066)))
definition__5067 = B3636(module__5065, "functions", import_name__5066)
else definition__5067 = false}
else definition__5067 = false};
if ($T(definition__5067))
{var sequence__5127 = form__5035, B5144 = sequence__5127.slice(1);
return B5032(definition__5067, B5144, env__5036)}
else return B3720(B4792(B5034, env__5036), form__5035)}}}}
else return B3720(B4792(B5034, env__5036), form__5035)}
else return form__5035}, false)
B5033 = B3623("inlineQ", function B5148 (module__5146, name__5147)
{return B4062(B3647(B3878, name__5147), B3636(module__5146, "inline"))}, false)
{var trueQ = B1464["true?"], B5151 = B1464[">="], B5152 = B3597["ensure-naming-structure"], B5153 = B1464.push, B5154 = B3596["get-module-name/name"], B5155 = B3597["restore-identifiers"], B5156 = B3597["alpha-convert"];
B5032 = B3623("inline_definition", function B5186 (definition__5157, values__5158, env__5159)
{var ____5160 = definition__5157[0], arguments__5161 = definition__5157[1], body__5162 = definition__5157[2], body__5165 = B3709(function B5187 (body__5163, argument__5164)
{return [B3672, [argument__5164, argument__5164], body__5163]}, body__5162, B3847(arguments__5161)), inlined__5166 = B5034(body__5165, env__5159), prepared__5167 = B5156(inlined__5166, env__5159), object__5178 = arguments__5161, B5168 = ((object__5178 || false).length || 0), i__5169 = 0;
while ($T(true))
{var value__5180 = B5151(i__5169, B5168), B5185 = !(trueQ(value__5180));
if ($T(B5185))
{(function B5188 (i__5170)
{var argument__5171 = B3681(arguments__5161, i__5170), value__5172 = B3681(values__5158, i__5170), B5173 = B5154(argument__5171), module_name__5174 = B5173[0], name__5175 = B5173[1];
B5152(env__5159, module_name__5174, name__5175);
var array__5183 = B3636(env__5159, "identifiers", module_name__5174, name__5175), value__5184;
if ($T(value__5172))
value__5184 = B5034(value__5172, env__5159)
else value__5184 = [B4410, "undefined"];
array__5183.unshift(value__5184);
return array__5183})(i__5169);
i__5169 = (i__5169 + 1)}
else break};
false;
var result__5176 = B5156(body__5165, env__5159);
B5155(arguments__5161, env__5159);
return result__5176}, false)}
{var B5189, B5190 = B1464.identity, B5191 = B3623("lift_symbols", function B5194 (exp__5192, env__5193)
{return B5189(exp__5192, env__5193, B5190)}, false);
exports["lift-symbols"] = B5191}
{var trueQ = B1464["true?"], B5201, B5202, B5203, B5204 = B1464["<keyword>"], B5205 = B1464["<hash-symbol>"];
B5189 = B3623("lift_symbol", function B5264 (exp__5206, env__5207, k__5208)
{var B5260;
if ($T(B3723(exp__5206, B3724)))
{var sequence__5253 = exp__5206, B5254 = sequence__5253, B5255 = ((B5254 || false).length || 0), B5256 = 0, value__5257 = (B5255 === B5256);
B5260 = !(trueQ(value__5257))}
else B5260 = false;
if ($T(B5260))
{var sequence__5259 = exp__5206, B5261 = sequence__5259[0], B5209 = B3625(B5261);
if ($T(B3878(B5209, "%bind")))
{var ____5210 = exp__5206[0], B5211 = exp__5206[1], var__5212 = B5211[0], value__5213 = B5211[1], body__5214 = exp__5206[2];
return B5189(value__5213, env__5207, function B5265 (lvalue__5215, env__5216)
{return B5189(body__5214, env__5216, function B5266 (lbody__5217, env__5218)
{return k__5208([B3672, [var__5212, lvalue__5215], lbody__5217], env__5218)})})}
else {var B5219 = B3878(B5209, "%method"), B5262;
if ($T(B5219))
B5262 = B5219
else B5262 = B3878(B5209, "%set");
if ($T(B5262))
{var m__5220 = exp__5206[0], e1__5221 = exp__5206[1], e2__5222 = exp__5206[2];
return B5189(e2__5222, env__5207, function B5267 (le2__5223, env__5224)
{return k__5208([m__5220, e1__5221, le2__5223], env__5224)})}
else {var B5225 = B3878(B5209, "%begin"), B5263;
if ($T(B5225))
B5263 = B5225
else {var B5226 = B3878(B5209, "%if");
if ($T(B5226))
B5263 = B5226
else B5263 = B3878(B5209, "%while")};
if ($T(B5263))
{var m__5227 = exp__5206[0], eT__5228 = $SL.call(exp__5206, 1);
return B5201(eT__5228, env__5207, function B5268 (leT__5229, env__5230)
{return k__5208(B3721([m__5227], leT__5229), env__5230)})}
else if ($T(B3878(B5209, "%try")))
{var ____5231 = exp__5206[0], e1__5232 = exp__5206[1], v__5233 = exp__5206[2], e2__5234 = exp__5206[3];
return B5201([e1__5232, e2__5234], env__5207, function B5269 (leT__5235, env__5236)
{var le1__5237 = leT__5235[0], le2__5238 = leT__5235[1];
return k__5208([B4729, le1__5237, v__5233, le2__5238], env__5236)})}
else if ($T(B3878(B5209, "%symbol")))
{var ____5239 = exp__5206[0], name__5240 = exp__5206[1];
return B5202(name__5240, exp__5206, "symbol", env__5207, k__5208)}
else return B5203(exp__5206, env__5207, k__5208)}}}
else {var B5241 = exp__5206;
if ($T(B3723(B5241, B5204)))
return B5202(B3625(exp__5206), exp__5206, "keyword", env__5207, k__5208)
else if ($T(B3723(B5241, B5205)))
return B5202(B3625(exp__5206), exp__5206, "hash", env__5207, k__5208)
else return k__5208(exp__5206, env__5207)}}, false)}
B5202 = B3623("lift_value", function B5279 (name__5271, value__5272, type__5273, env__5274, k__5275)
{var B5276 = B3636(env__5274, "lifted", type__5273, name__5271);
if ($T(B5276))
{var t__5277 = B5276;
return k__5275(t__5277, env__5274)}
else {var t__5278 = B3624(env__5274, "lifted", type__5273, name__5271, B3726());
return [B3672, [t__5278, value__5272], k__5275(t__5278, env__5274)]}}, false)
B5201 = B3623("lift_symbolT", function B5298 (expT__5280, env__5281, k__5282)
{var sequence__5293 = expT__5280, B5294 = sequence__5293, B5295 = ((B5294 || false).length || 0), B5296 = 0, B5297 = (B5295 === B5296);
if ($T(B5297))
return k__5282([], env__5281)
else return B5203(expT__5280, env__5281, k__5282)}, false)
B5203 = B3623("lift_symbolTT", function B5314 (exp__5299, env__5300, k__5301)
{var sequence__5307 = exp__5299, B5310 = sequence__5307[0], B5313 = function B5315 (t__5302, env__5303)
{var sequence__5309 = exp__5299, B5311 = sequence__5309.slice(1), B5312 = function B5316 (tT__5304, env__5305)
{return k__5301(B3721([t__5302], tT__5304), env__5305)};
return B5201(B5311, env__5303, B5312)};
return B5189(B5310, env__5300, B5313)}, false)
var B5321 = $K("string"), B5317 = B3594.read, B5318 = B3592["<string-stream>"], B5319 = B3623("read_program", function B5322 (source__5320)
{return B5317(B4444(B5318, B5321, B3721("(", source__5320, "\n)")))}, false)
{var B5323 = B3598["lift-defines"], B5324 = B3599["normalize-term"], B5325 = B3600["transform-statements!"], B5326 = B3601["flatten-statements!"], B5327 = B3602["compile-js"], B5328 = B3623("compile_expression", function B5336 (exp__5329, env__5330)
{return B3709(function B5337 (result__5331, nameSfn__5332)
{var name__5333 = nameSfn__5332[0], fn__5334 = nameSfn__5332[1], result__5335 = fn__5334(result__5331);
return result__5335}, exp__5329, [["source", B5190], ["macroexpanded", B4792(B3648, env__5330)], ["lifted defines", B4792(B5323, env__5330)], ["defined free variables", B4792(B4824, env__5330)], ["alpha-converted", B4792(B5156, env__5330)], ["inline", B4792(B5034, env__5330)], ["defined free variables after inline", B4792(B4858, env__5330)], ["ANF", B5324], ["lifted symbols", B4792(B5191, env__5330)], ["statements", B4792(B5325, env__5330)], ["flattened", B5326], ["compiled", B4792(B5327, env__5330)]])}, false);
exports["compile-expression"] = B5328}
var B5338 = B3595["resolve-path"], B5339 = B3623("executable_path", function B5341 (module_name__5340)
{return B5338("build", B3721(module_name__5340, ".js"))}, false)
var B5342 = B3623("module_path", function B5345 (base_path__5343, module_name__5344)
{return B5338(base_path__5343, B3721(module_name__5344, ".rm"))}, false)
var B5346 = B3623("source_path", function B5348 (module_name__5347)
{return B5338("src", B3721(module_name__5347, ".ralph"))}, false)
var trueQ = B1464["true?"], B5350 = B1464["<"], B5351 = B3595["file-properties"], B5352 = B3595["file-exists?"], B5353 = B3623("recompileQ", function B5363 (module_name__5354)
{var value__5359 = B3636(B3604, module_name__5354, "native?"), B5362 = !(trueQ(value__5359));
if ($T(B5362))
{var path__5355 = B5339(module_name__5354), value__5361 = B5352(path__5355), B5356 = !(trueQ(value__5361));
if ($T(B5356))
return B5356
else {var path2__5357 = B5346(module_name__5354);
return B5350(B3636(B5351(path__5355), "modification-date"), B3636(B5351(path2__5357), "modification-date"))}}}, false)
{var B5367 = B1464["chain-object"], B5368, B5369;
B4676 = B3623("compile_time_import_module", function B5383 (env__5370, module_name__5371)
{var B5372 = $SL.call(arguments, 2), B5373 = B4492(B5372, {options:false}), options__5374 = B5373.options, B5380;
if ($T(B3878(module_name__5371, "ralph/core")))
B5380 = [B3674, B4733]
else {B5368(module_name__5371);
var definitions__5375 = require(module_name__5371), macros__5376 = B3615(), symbol_macros__5377 = B3615();
B3646(function B5384 (name__5378)
{var definition__5379 = B3636(definitions__5375, name__5378);
if ($T(B3636(definition__5379, "%macro?")))
return B3624(macros__5376, name__5378, definition__5379)
else if ($T(B3636(definition__5379, "%symbol-macro?")))
return B3624(symbol_macros__5377, name__5378, definition__5379)}, B4558(B5369, B4823(definitions__5375), options__5374));
B5380 = [macros__5376, symbol_macros__5377]};
var macros__5381 = B5380[0], symbol_macros__5382 = B5380[1];
B5367(B3636(env__5370, "macros"), macros__5381);
return B5367(B3636(env__5370, "symbol-macros"), symbol_macros__5382)}, false)}
{var B5389 = B1464["remove!"], B5390 = B1464["as-object"];
B5369 = B3623("process_names", function B5409 (all__5391)
{var B5392 = $SL.call(arguments, 1), B5393 = B4492(B5392, {only:false,
exclude:false,
prefix:false,
rename:false}), only__5394 = B5393.only, exclude__5395 = B5393.exclude, prefix__5396 = B5393.prefix, rename__5397 = B5393.rename, resolve__5398 = function B5410 (exp__5399)
{if ($T(B3723(exp__5399, B4454)))
return exp__5399
else return B4675(exp__5399)}, B5406;
if ($T(B3723(only__5394, B3724)))
B5406 = B3720(resolve__5398, only__5394)
else B5406 = all__5391;
var names__5400 = B4822(B5406), B5401 = rename__5397, B5407;
if ($T(B5401))
B5407 = B5401
else B5407 = [];
var B5408 = B3720(resolve__5398, B5407), renamings__5402 = B5390(B5408);
B3646(B3647(B5389, names__5400), B3720(resolve__5398, exclude__5395));
B4914(names__5400, B4823(renamings__5402));
return B3720(function B5411 (name__5403)
{var B5404 = B3636(renamings__5402, name__5403);
if ($T(B5404))
{var renaming__5405 = B5404;
return [name__5403, renaming__5405]}
else if ($T(B3723(prefix__5396, B4454)))
return [name__5403, B3721(prefix__5396, name__5403)]
else return name__5403}, names__5400)}, false)}
{var B5413;
B4677 = B3623("import_module", function B5429 (module__5414, module_name__5415)
{var options__5416 = $SL.call(arguments, 2), B5417 = B5413(module_name__5415);
if ($T(B5417))
{var other_module__5418 = B5417, array__5421 = B3636(module__5414, "imports"), value__5422 = [other_module__5418, B4558(B5369, B3636(other_module__5418, "exports"), options__5416)];
array__5421.unshift(value__5422);
array__5421;
var array__5425 = B3636(module__5414, "dependencies"), value__5426 = module_name__5415;
array__5425.unshift(value__5426);
array__5425;
return other_module__5418}
else {var error__5428 = B3721("unable to import module '", module_name__5415, "'");
throw(error__5428);
return false}}, false)}
{var B5433;
B5413 = B3623("find_module", function B5438 (module_name__5434)
{var B5435 = B5368(module_name__5434);
if ($T(B5435))
return B5435
else {var B5436 = B3636(B3604, module_name__5434);
if ($T(B5436))
return B5436
else {var B5437 = B5433("build", module_name__5434);
if ($T(B5437))
return B5437
else return B5433("src", module_name__5434)}}}, false)}
{var B5443 = $K("name"), B5439 = B3595["read-file"];
B5433 = B3623("read_module", function B5444 (base_path__5440, module_name__5441)
{var path__5442 = B5342(base_path__5440, module_name__5441);
if ($T(B5352(path__5442)))
return B4558(B3647(B4444, B3607, B5443), B5317(B4444(B5318, B5321, B5439(path__5442))))}, false)}
{var B5477 = $K("module"), B5478 = $K("exports"), B5479 = $K("inline"), B5480 = $K("dependencies"), trueQ = B1464["true?"], B5446 = B3595["write-file"], B5447 = B1464.description;
B5368 = B3623("compile_module", function B5481 (module_name__5448)
{var object__5461 = B3604, property__5462 = module_name__5448, value__5463 = $HP.call(object__5461,property__5462), B5474 = !(trueQ(value__5463));
if ($T(B5474))
{var B5449 = B5433("src", module_name__5448);
if ($T(B5449))
{var module__5450 = B5449;
B3624(B3604, module_name__5448, module__5450)}};
if ($T(B5353(module_name__5448)))
{var value__5465 = B5352(B5346(module_name__5448)), B5475 = !(trueQ(value__5465));
if ($T(B5475))
{var error__5467 = B3721("unable to compile module '", module_name__5448, "'");
throw(error__5467);
false};
var module__5451 = B4444(B3607, B5443, module_name__5448), env__5452 = B4444(B3616, B5477, module__5451), source__5453 = B5439(B5346(module_name__5448)), program__5454 = B5319(source__5453), result__5455 = "";
B3624(B3604, module_name__5448, module__5451);
B4676(env__5452, "ralph/core");
var value__5469 = B3878(module_name__5448, "ralph/core"), B5476 = !(trueQ(value__5469));
if ($T(B5476))
{B4677(module__5451, "ralph/core");
var array__5472 = program__5454, value__5473 = B4678("ralph/core", env__5452);
array__5472.unshift(value__5473);
array__5472};
B3646(function B5482 (expression__5456)
{var code__5457 = B5328(expression__5456, env__5452);
return result__5455 = B3721(result__5455, code__5457, "\n")}, program__5454);
B5446(B5339(module_name__5448), result__5455);
B5446(B5342("build", module_name__5448), B5447([module_name__5448, B5478, B3636(module__5451, "exports"), B5479, B3636(module__5451, "inline"), B5480, B3636(module__5451, "dependencies")]));
return module__5451}}, false);
exports["compile-module"] = B5368}
{var B5485 = B1464["member?"], B5486 = B3623("analyze_dependencies", function B5501 (module_name__5487)
{var B5488 = B5413(module_name__5487);
if ($T(B5488))
{var module__5489 = B5488;
B3624(B3604, module_name__5487, module__5489);
var B5490 = module__5489, dependencies__5491 = B5490.dependencies, result__5492 = B3679(dependencies__5491);
B3646(function B5502 (dependency__5493)
{return B3646(function B5503 (sub_dependency__5494)
{if ($T(B5485(sub_dependency__5494, result__5492)))
B5389(result__5492, sub_dependency__5494);
var array__5497 = result__5492, value__5498 = sub_dependency__5494;
array__5497.unshift(value__5498);
return array__5497}, B5486(dependency__5493))}, dependencies__5491);
return result__5492}
else {var error__5500 = B3721("unable to find-module '", module_name__5487, "'");
throw(error__5500);
return false}}, false);
exports["analyze-dependencies"] = B5486}
