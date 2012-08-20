var B2049 = require("ralph/core")
{var B3717, B3718, B3719, B3720, B3721, B3722, B3723, B3724, B3725, B3726, B3727;
B3717 = require("ralph/stream");
B3718 = require("ralph/format");
B3719 = require("ralph/reader");
B3720 = require("ralph/file-system");
B3721 = require("ralph/compiler/utilities");
B3722 = require("ralph/compiler/alpha");
B3723 = require("ralph/compiler/define-lifting");
B3724 = require("ralph/compiler/anf");
B3725 = require("ralph/compiler/statements");
B3726 = require("ralph/compiler/flattening");
B3727 = require("ralph/compiler/javascript")}
var B3728 = B2049["make-object"], B3729 = B3728()
{var B3730 = B2049["%make-class"], B3731 = B2049["<object>"], B3732 = B3730(B3731, {name:false,
"native?":false,
exports:function B3733 ()
{return []},
imports:function B3734 ()
{return []},
dependencies:function B3735 ()
{return []},
inline:function B3736 ()
{return []}});
exports["<module>"] = B3732}
var B3738 = $S("%all-arguments"), B3739 = $S("%this-method"), B3737 = [B3738, B3739]
{var B3740 = B2049["make-plain-object"], B3741 = B3730(B3731, {module:false,
macros:function B3742 ()
{return B3740()},
"symbol-macros":function B3743 ()
{return B3740()},
identifiers:function B3744 ()
{return B3728()},
"defined?":function B3745 ()
{return B3728()},
lifted:function B3746 ()
{return B3728()},
"import-identifiers":function B3747 ()
{return B3740()}});
exports["<environment>"] = B3741}
var B3748 = B2049["%make-function"], B3749 = B2049["get-setter"], B3750 = B2049["symbol-name"], B3751 = B3748("bindN", function B3754 (env__3752, identifier__3753)
{return B3749(env__3752, "bound?", B3750(identifier__3753), true)}, false)
var B3755 = B3748("unbindN", function B3758 (env__3756, identifier__3757)
{return B3749(env__3756, "bound?", B3750(identifier__3757), false)}, false)
var B3759 = B3728()
var B3760 = B3721["expression?"], B3761 = B2049.get, B3762 = B2049.first, B3763 = B3748("find_special_form", function B3770 (form__3764, env__3765)
{if ($T(B3760(form__3764)))
{var sequence__3767 = form__3764, B3768 = sequence__3767[0], B3769 = B3750(B3768);
return B3761(B3759, B3769)}}, false)
{var B3778 = $S("%method"), B3771 = B2049["do"], B3772 = B2049.curry, B3773;
B3759["%method"] = function B3779 (env__3774, arguments__3775, body__3776)
{B3771(B3772(B3751, env__3774), arguments__3775);
var expanded_body__3777 = B3773(body__3776, env__3774);
B3771(B3772(B3755, env__3774), arguments__3775);
return [B3778, arguments__3775, expanded_body__3777]}}
{var B3783 = $S("%set");
B3759["%set"] = function B3784 (env__3780, identifier__3781, value__3782)
{return [B3783, identifier__3781, B3773(value__3782, env__3780)]}}
{var B3788 = $S("define");
B3759.define = function B3789 (env__3785, identifier__3786, value__3787)
{B3751(env__3785, identifier__3786);
return [B3788, identifier__3786, B3773(value__3787, env__3785)]}}
{var B3797 = $S("%bind");
B3759["%bind"] = function B3798 (env__3790, binding__3791, body__3792)
{var var__3793 = binding__3791[0], value__3794 = binding__3791[1], expanded_value__3795 = B3773(value__3794, env__3790);
B3751(env__3790, var__3793);
var result__3796 = [B3797, [var__3793, expanded_value__3795], B3773(body__3792, env__3790)];
B3755(env__3790, var__3793);
return result__3796}}
{var B3799 = B3728();
exports["*core-macros*"] = B3799}
{var B3828 = $REST, B3829 = $KEY, B3830 = $K("end"), B3831 = $K("start"), B3802 = B2049["find-key"], B3803 = B2049["="], B3804 = B2049["copy-sequence"], B3805 = B2049.size, B3806 = B2049.element, B3807 = B2049.inc, B3808 = B3748("analyze_lambda_list", function B3832 (list__3809)
{var position__3810 = function B3833 (symbol__3811)
{return B3802(list__3809, B3772(B3803, symbol__3811))}, rest__3812 = position__3810(B3828), key__3813 = position__3810(B3829), B3814 = rest__3812, B3822;
if ($T(B3814))
B3822 = B3814
else {var B3815 = key__3813;
if ($T(B3815))
B3822 = B3815
else {var object__3817 = list__3809;
B3822 = ((object__3817 || false).length || 0)}};
var B3823 = B3804(list__3809, B3830, B3822), B3825;
if ($T(rest__3812))
{var number__3819 = rest__3812, B3824 = (number__3819 + 1);
B3825 = B3806(list__3809, B3824)}
else B3825 = false;
var B3827;
if ($T(key__3813))
{var number__3821 = key__3813, B3826 = (number__3821 + 1);
B3827 = B3804(list__3809, B3831, B3826)}
else B3827 = false;
return [B3823, B3825, B3827]}, false);
exports["analyze-lambda-list"] = B3808}
var B3834 = B2049.reduce, B3835 = B3748("wrap", function B3840 (form__3836)
{var wrappers__3837 = $SL.call(arguments, 1);
return B3834(function B3841 (result__3838, wrapper__3839)
{return wrapper__3839(result__3838)}, form__3836, wrappers__3837)}, false)
var B3947 = $S("bind-properties"), B3948 = $S("%keys"), B3949 = $S("%object"), B3950 = $S("bind"), B3951 = $S("%native-call"), trueQ = B2049["true?"], B3844 = B2049["empty?"], B3845 = B2049.map, B3846 = B2049.concatenate, B3847 = B2049.reduce1, B3848 = B2049["instance?"], B3849 = B2049["<array>"], B3850 = B2049.not, B3851 = B3721["generate-symbol"], B3852 = B3748("wrap_restSkeys", function B3952 (body__3853, all__3854, required__3855, rest__3856, key__3857)
{var restQ__3858 = rest__3856, B3859 = rest__3856, rest__3860;
if ($T(B3859))
rest__3860 = B3859
else {var sequence__3880 = key__3857, B3881 = sequence__3880, B3882 = ((B3881 || false).length || 0), B3883 = 0, value__3884 = (B3882 === B3883), B3929 = !(trueQ(value__3884));
if ($T(B3929))
rest__3860 = B3851()
else rest__3860 = false};
return B3835(body__3853, function B3953 (body__3861)
{var sequence__3895 = key__3857, B3896 = sequence__3895, B3897 = ((B3896 || false).length || 0), B3898 = 0, B3930 = (B3897 === B3898);
if ($T(B3930))
return body__3861
else {var key_values__3863 = B3845(function B3954 (binding__3862)
{if ($T(B3848(binding__3862, B3849)))
return binding__3862
else return [binding__3862, false]}, key__3857), B3931 = B3947, B3932 = B3845(B3762, key_values__3863), B3933 = B3948, B3934 = [B3949], function__3907 = B3846, values__3908 = B3845(function B3955 (key_value__3864)
{var key__3865 = key_value__3864[0], value__3866 = key_value__3864[1];
return [B3750(key__3865), value__3866]}, key_values__3863), B3909 = values__3908, B3935 = B3909[0], B3910 = values__3908, B3936 = B3910.slice(1), B3937 = B3834(function__3907, B3935, B3936), B3938 = B3846(B3934, B3937), B3939 = [B3933, rest__3860, B3938];
return [B3931, B3932, B3939, body__3861]}}, function B3956 (body__3867)
{var B3868 = restQ__3858, B3940;
if ($T(B3868))
B3940 = B3868
else {var sequence__3922 = key__3857, B3923 = sequence__3922, B3924 = ((B3923 || false).length || 0), B3925 = 0, value__3926 = (B3924 === B3925);
B3940 = !(trueQ(value__3926))};
if ($T(B3940))
{var B3941 = B3950, B3942 = B3951, object__3928 = required__3855, B3943 = ((object__3928 || false).length || 0), B3944 = [B3942, "$SL.call", all__3854, B3943], B3945 = [rest__3860, B3944], B3946 = [B3945];
return [B3941, B3946, body__3867]}
else return body__3867})}, false)
{var B3957 = B3721["maybe-begin"];
B3799.begin = function B3960 (____3958)
{var expressions__3959 = $SL.call(arguments, 1);
return B3957(expressions__3959)}}
B3799.method = function B3969 (____3962, arguments__3963)
{var body__3964 = $SL.call(arguments, 2), B3965 = B3808(arguments__3963), required__3966 = B3965[0], rest__3967 = B3965[1], key__3968 = B3965[2];
return [B3778, required__3966, B3852(B3957(body__3964), B3738, required__3966, rest__3967, key__3968)]}
{var B3970 = B2049["<symbol>"], B3971 = B2049.reverse;
B3799.bind = function B3994 (____3972, bindings__3973)
{var body__3974 = $SL.call(arguments, 2), sequence__3987 = bindings__3973, B3988 = sequence__3987, B3989 = ((B3988 || false).length || 0), B3990 = 0, B3991 = (B3989 === B3990);
if ($T(B3991))
return B3957(body__3974)
else return B3834(function B3995 (body__3975, binding__3976)
{var B3992 = B3797, B3993;
if ($T(B3848(binding__3976, B3970)))
B3993 = [binding__3976, false]
else B3993 = binding__3976;
return [B3992, B3993, body__3975]}, B3957(body__3974), B3971(bindings__3973))}}
{var B4000 = $S("%if");
B3799["if"] = function B4001 (____3996, test__3997, then__3998, else__3999)
{return [B4000, test__3997, then__3998, else__3999]}}
{var B4027 = $S("%get-property"), trueQ = B2049["true?"], B4002 = B2049["=="], B4003 = B3721["transform-setter-identifier"], B4004 = B2049.rest;
B3799["set!"] = function B4028 (____4005, place__4006)
{var values__4007 = $SL.call(arguments, 2), B4020;
if ($T(B3848(place__4006, B3849)))
{var sequence__4010 = place__4006, B4018 = sequence__4010[0], B4019 = B4027, value__4011 = B4002(B4018, B4019);
B4020 = !(trueQ(value__4011))}
else B4020 = false;
if ($T(B4020))
{var sequence__4013 = place__4006, B4021 = sequence__4013[0], B4022 = B4003(B4021), B4023 = [B4022], sequence__4015 = place__4006, B4024 = sequence__4015.slice(1);
return B3846(B4023, B4024, values__4007)}
else {var B4025 = B3783, sequence__4017 = values__4007, B4026 = sequence__4017[0];
return [B4025, place__4006, B4026]}}}
{var B4049 = $S("set!"), B4050 = $S("parallel-set!");
B3799["parallel-set!"] = function B4051 (____4029, var__4030, value__4031)
{var clauses__4032 = $SL.call(arguments, 3), sequence__4044 = clauses__4032, B4045 = sequence__4044, B4046 = ((B4045 || false).length || 0), B4047 = 0, B4048 = (B4046 === B4047);
if ($T(B4048))
return [B4049, var__4030, value__4031]
else {var temp__4033 = B3851();
return [B3950, [[temp__4033, value__4031]], B3846([B4050], clauses__4032), [B4049, var__4030, temp__4033]]}}}
{var B4084 = $K("else"), B4085 = $S("if"), B4086 = $S("cond"), trueQ = B2049["true?"];
B3799.cond = function B4087 (____4053)
{var cases__4054 = $SL.call(arguments, 1), sequence__4070 = cases__4054, B4071 = sequence__4070, B4072 = ((B4071 || false).length || 0), B4073 = 0, value__4074 = (B4072 === B4073), B4079 = !(trueQ(value__4074));
if ($T(B4079))
{var sequence__4076 = cases__4054, B4055 = sequence__4076[0], test__4056 = B4055[0], then__4057 = $SL.call(B4055, 1), then__4058 = B3957(then__4057);
if ($T(B4002(test__4056, B4084)))
return then__4058
else {var B4080 = B4085, B4081 = [B4086], sequence__4078 = cases__4054, B4082 = sequence__4078.slice(1), B4083 = B3846(B4081, B4082);
return [B4080, test__4056, then__4058, B4083]}}}}
B3799.when = function B4091 (____4088, test__4089)
{var body__4090 = $SL.call(arguments, 2);
return [B4085, test__4089, B3957(body__4090), false]}
{var B4095 = $S("not");
B3799.unless = function B4096 (____4092, test__4093)
{var body__4094 = $SL.call(arguments, 2);
return [B4085, [B4095, test__4093], B3957(body__4094), false]}}
{var B4114 = $S("when"), B4115 = $S("and");
B3799.and = function B4116 (____4098)
{var values__4099 = $SL.call(arguments, 1), object__4102 = values__4099, B4100 = ((object__4102 || false).length || 0);
if ($T(B4002(B4100, 0)))
return true
else if ($T(B4002(B4100, 1)))
{var sequence__4104 = values__4099;
return sequence__4104[0]}
else {var B4109 = B4114, sequence__4106 = values__4099, B4110 = sequence__4106[0], B4111 = [B4115], sequence__4108 = values__4099, B4112 = sequence__4108.slice(1), B4113 = B3846(B4111, B4112);
return [B4109, B4110, B4113]}}}
{var B4139 = $S("or");
B3799.or = function B4140 (____4118)
{var values__4119 = $SL.call(arguments, 1), object__4123 = values__4119, B4120 = ((object__4123 || false).length || 0);
if ($T(B4002(B4120, 0)))
return false
else if ($T(B4002(B4120, 1)))
{var sequence__4125 = values__4119;
return sequence__4125[0]}
else {var value__4121 = B3851(), B4130 = B3950, sequence__4127 = values__4119, B4131 = sequence__4127[0], B4132 = [value__4121, B4131], B4133 = [B4132], B4134 = B4085, B4135 = [B4139], sequence__4129 = values__4119, B4136 = sequence__4129.slice(1), B4137 = B3846(B4135, B4136), B4138 = [B4134, value__4121, value__4121, B4137];
return [B4130, B4133, B4138]}}}
B3799["if-bind"] = function B4148 (____4141, binding__4142, then__4143, else__4144)
{var var__4145 = binding__4142[0], value__4146 = binding__4142[1], temp__4147 = B3851();
return [B3950, [[temp__4147, value__4146]], [B4085, temp__4147, [B3950, [[var__4145, temp__4147]], then__4143], else__4144]]}
{var B4152 = $S("%while");
B3799["while"] = function B4153 (____4149, test__4150)
{var body__4151 = $SL.call(arguments, 2);
return [B4152, test__4150, B3957(body__4151)]}}
{var B4157 = $S("while");
B3799.until = function B4158 (____4154, test__4155)
{var body__4156 = $SL.call(arguments, 2);
return B3846([B4157, [B4095, test__4155]], body__4156)}}
{var B4177 = $S("for"), B4178 = $S("+"), B4179 = $S(">=");
B3799.dotimes = function B4180 (____4160, binding__4161)
{var body__4162 = $SL.call(arguments, 2), temp__4163 = B3851(), var__4164 = binding__4161[0], count__4165 = binding__4161[1], result__4166 = binding__4161[2], B4168 = B3950, B4169 = [[temp__4163, count__4165]], B4170 = B4177, B4171 = [[var__4164, 0, [B4178, var__4164, 1]]], B4172 = [B4179, var__4164, temp__4163], B4167 = result__4166, B4173;
if ($T(B4167))
B4173 = B4167
else B4173 = false;
var B4174 = [B4172, B4173], B4175 = [B4170, B4171, B4174], B4176 = B3846(B4175, body__4162);
return [B4168, B4169, B4176]}}
{var B4285 = $S("method"), B4286 = $S("begin"), trueQ = B2049["true?"], B4187 = B2049["any?"], B4188 = B2049["push-last"], B4189 = B2049.slice, B4190 = B2049.third;
B3799["for"] = function B4287 (____4191, clauses__4192, end__4193)
{var body__4194 = $SL.call(arguments, 3), init_clauses__4195 = [], next_clauses__4196 = [], vars__4197 = B3845(B3762, clauses__4192), B4198 = clauses__4192, B4199, B4200, B4201 = [B4198];
while ($T(true))
{var B4202 = B4199, value__4207;
if ($T(B4202))
value__4207 = B4202
else value__4207 = B4187(B3844, B4201);
var B4271 = !(trueQ(value__4207));
if ($T(B4271))
{var sequence__4209 = B4198, clause__4203 = sequence__4209[0];
(function B4288 (clause__4204)
{var array__4218 = init_clauses__4195, array__4215 = clause__4204, start__4216 = 0, end__4217 = 2, value__4219 = array__4215.slice(start__4216, end__4217);
array__4218.push(value__4219);
array__4218;
var array__4224 = next_clauses__4196, sequence__4223 = clause__4204, value__4225 = sequence__4223[0];
array__4224.push(value__4225);
array__4224;
var array__4230 = next_clauses__4196, sequence__4229 = clause__4204, value__4231 = sequence__4229[2];
array__4230.push(value__4231);
return array__4230})(clause__4203);
var sequence__4233 = B4198, B4270 = sequence__4233.slice(1);
B4198 = B4270;
B4201 = [B4198]}
else break};
B4200;
var B4272 = B3950, B4273 = B4157, sequence__4244 = end__4193, B4245 = sequence__4244, B4246 = ((B4245 || false).length || 0), B4247 = 0, B4205 = (B4246 === B4247), B4276;
if ($T(B4205))
B4276 = B4205
else {var B4274 = B4095, sequence__4249 = end__4193, B4275 = sequence__4249[0];
B4276 = [B4274, B4275]};
var B4277 = B3846([B3846([B4285, vars__4197], body__4194)], vars__4197), B4278 = B3846([B4050], next_clauses__4196), B4279 = [B4273, B4276, B4277, B4278], B4280 = B3846(B4279), sequence__4262 = end__4193, sequence__4263 = sequence__4262.slice(1), B4264 = sequence__4263, B4265 = ((B4264 || false).length || 0), B4266 = 0, value__4267 = (B4265 === B4266), B4281 = !(trueQ(value__4267)), B4284;
if ($T(B4281))
{var B4282 = [B4286], sequence__4269 = end__4193, B4283 = sequence__4269.slice(1);
B4284 = B3846(B4282, B4283)}
else B4284 = false;
return [B4272, init_clauses__4195, B4280, B4284]}}
{var B4364 = $S("rest"), B4365 = $S("%array"), B4366 = $S("until"), B4367 = $S("any?"), B4368 = $S("empty?"), B4369 = $S("first"), B4290 = B2049.second;
B3799["for-each"] = function B4370 (____4291, clauses__4292, end__4293)
{var body__4294 = $SL.call(arguments, 3), clauses__4296 = B3845(function B4371 (clause__4295)
{return B3846([B3851()], clause__4295)}, clauses__4292), endQ__4297 = B3851(), values__4298 = B3851(), result__4299 = B3851(), B4336 = B4286, vars__4300 = B3845(B4290, clauses__4296), B4337 = B3846([B3846([B4285, vars__4300], body__4294)], vars__4300), B4338 = [B4336, B4337], B4344 = B3845(function B4372 (clause__4301)
{var B4339 = B4049, sequence__4315 = clause__4301, B4340 = sequence__4315[0], B4341 = B4364, sequence__4317 = clause__4301, B4342 = sequence__4317[0], B4343 = [B4341, B4342];
return [B4339, B4340, B4343]}, clauses__4296), B4345 = [[B4049, values__4298, B3846([B4365], B3845(B3762, clauses__4296))]], body__4302 = B3846(B4338, B4344, B4345), B4346 = B3950, B4347 = B3846(B3845(function B4373 (clause__4303)
{var temp__4304 = clause__4303[0], var__4305 = clause__4303[1], values__4306 = clause__4303[2];
return [temp__4304, values__4306]}, clauses__4296), [[endQ__4297, false], [result__4299, false], [values__4298, B3846([B4365], B3845(B3762, clauses__4296))]]), B4348 = B4366, B4349 = [B4139, endQ__4297, [B4367, B4368, values__4298]], B4350 = B3950, B4351 = B3845(function B4374 (clause__4307)
{var temp__4308 = clause__4307[0], var__4309 = clause__4307[1], values__4310 = clause__4307[2];
return [var__4309, [B4369, temp__4308]]}, clauses__4296), sequence__4319 = end__4293, B4311 = sequence__4319[0], B4361;
if ($T(B4311))
{var end_test__4312 = B4311, B4352 = B4085, B4353 = B4286, B4354 = B4049, sequence__4321 = end__4293, results__4313 = sequence__4321.slice(1), sequence__4332 = results__4313, B4333 = sequence__4332, B4334 = ((B4333 || false).length || 0), B4335 = 0, B4355 = (B4334 === B4335), B4356;
if ($T(B4355))
B4356 = [false]
else B4356 = results__4313;
var B4357 = B3957(B4356), B4358 = [B4354, result__4299, B4357], B4359 = [B4049, endQ__4297, true], B4360 = [B4353, B4358, B4359];
B4361 = [B4352, end_test__4312, B4360, body__4302]}
else B4361 = body__4302;
var B4362 = [B4350, B4351, B4361], B4363 = [B4348, B4349, B4362];
return [B4346, B4347, B4363, result__4299]}}
B3799["bind-properties"] = function B4381 (____4375, properties__4376, object__4377)
{var body__4378 = $SL.call(arguments, 3), objectT__4379 = B3851();
return B3846([B3950, B3846([[objectT__4379, object__4377]], B3845(function B4382 (property__4380)
{return [property__4380, [B4027, objectT__4379, B3750(property__4380)]]}, properties__4376))], body__4378)}
B3799.select = function B4399 (____4383, value__4384, test__4385)
{var cases__4386 = $SL.call(arguments, 3), valueT__4387 = B3851(), testT__4388;
if ($T(B3848(test__4385, B3970)))
testT__4388 = test__4385
else testT__4388 = B3851();
var test_expression__4389 = function B4400 (test_value__4390)
{return [testT__4388, valueT__4387, test_value__4390]}, B4394 = B3950, B4395 = [[valueT__4387, value__4384]], B4396;
if ($T(B3848(test__4385, B3970)))
B4396 = []
else B4396 = [[testT__4388, test__4385]];
var B4397 = B3846(B4395, B4396), B4398 = B3846([B4086], B3845(function B4401 (case__4391)
{var tests__4392 = case__4391[0], then__4393 = $SL.call(case__4391, 1);
if ($T(B4002(tests__4392, B4084)))
return case__4391
else return B3846([B3846([B4139], B3845(test_expression__4389, tests__4392))], then__4393)}, cases__4386));
return [B4394, B4397, B4398]}
var B4403 = B3748("destructure", function B4417 (bindings__4404, values__4405, body__4406)
{if ($T(B3848(values__4405, B3970)))
{var B4407 = B3808(bindings__4404), required__4408 = B4407[0], rest__4409 = B4407[1], key__4410 = B4407[2], object__4416 = required__4408, i__4411 = ((object__4416 || false).length || 0);
return B3834(function B4418 (body__4412, binding__4413)
{i__4411 = (i__4411 - 1);
if ($T(B3848(binding__4413, B3970)))
return [B3950, [[binding__4413, [B4027, values__4405, i__4411]]], body__4412]
else return B4403(binding__4413, [B4027, values__4405, i__4411], body__4412)}, B3852(body__4406, values__4405, required__4408, rest__4409, key__4410), B3971(required__4408))}
else {var var__4414 = B3851();
return [B3950, [[var__4414, values__4405]], B4403(bindings__4404, var__4414, body__4406)]}}, false)
B3799["destructuring-bind"] = function B4423 (____4419, bindings__4420, values__4421)
{var body__4422 = $SL.call(arguments, 3);
return B4403(bindings__4420, values__4421, B3846([B4286], body__4422))}
B3799["bind-methods"] = function B4431 (____4424, bindings__4425)
{var body__4426 = $SL.call(arguments, 2);
return B3846([B3950, B3845(B3762, bindings__4425)], B3845(function B4432 (binding__4427)
{var identifier__4428 = binding__4427[0], arguments__4429 = binding__4427[1], body__4430 = $SL.call(binding__4427, 2);
return [B4049, identifier__4428, B3846([B4285, arguments__4429], body__4430)]}, bindings__4425), body__4426)}
B3799["inc!"] = function B4442 (____4434, object__4435, value__4436)
{var B4438 = B4049, B4439 = B4178, B4437 = value__4436, B4440;
if ($T(B4437))
B4440 = B4437
else B4440 = 1;
var B4441 = [B4439, object__4435, B4440];
return [B4438, object__4435, B4441]}
{var B4452 = $S("-");
B3799["dec!"] = function B4453 (____4444, object__4445, value__4446)
{var B4448 = B4049, B4449 = B4452, B4447 = value__4446, B4450;
if ($T(B4447))
B4450 = B4447
else B4450 = 1;
var B4451 = [B4449, object__4445, B4450];
return [B4448, object__4445, B4451]}}
{var B4471 = $S("%plus");
B3799["+"] = function B4472 (____4454)
{var values__4455 = $SL.call(arguments, 1), sequence__4466 = values__4455, B4467 = sequence__4466, B4468 = ((B4467 || false).length || 0), B4469 = 0, B4470 = (B4468 === B4469);
if ($T(B4470))
return 0
else return B3846([B4471], values__4455)}}
{var B4491 = $S("%minus");
B3799["-"] = function B4492 (____4473, minuend__4474)
{var subtrahends__4475 = $SL.call(arguments, 2), sequence__4486 = subtrahends__4475, B4487 = sequence__4486, B4488 = ((B4487 || false).length || 0), B4489 = 0, B4490 = (B4488 === B4489);
if ($T(B4490))
return [B3951, "-", minuend__4474]
else return B3846([B4491, minuend__4474], subtrahends__4475)}}
{var B4510 = $S("%times");
B3799["*"] = function B4511 (____4493)
{var values__4494 = $SL.call(arguments, 1), sequence__4505 = values__4494, B4506 = sequence__4505, B4507 = ((B4506 || false).length || 0), B4508 = 0, B4509 = (B4507 === B4508);
if ($T(B4509))
return 1
else return B3846([B4510], values__4494)}}
{var B4530 = $S("%divide");
B3799["/"] = function B4531 (____4512, numerator__4513)
{var denominators__4514 = $SL.call(arguments, 2), sequence__4525 = denominators__4514, B4526 = sequence__4525, B4527 = ((B4526 || false).length || 0), B4528 = 0, B4529 = (B4527 === B4528);
if ($T(B4529))
return [B4530, 1, numerator__4513]
else return B3846([B4530, numerator__4513], denominators__4514)}}
{var B4533 = $S("next-method"), B4534 = $S("%native");
B3799["call-next-method"] = function B4535 (____4532)
{return [[B4027, B4533, "apply"], [B4534, "null"], B3738]}}
var B4562 = $S("%symbol"), trueQ = B2049["true?"], B4536 = B3748("transform_quoted", function B4563 (form__4537)
{if ($T(B3848(form__4537, B3849)))
{var sequence__4549 = form__4537, B4550 = sequence__4549, B4551 = ((B4550 || false).length || 0), B4552 = 0, value__4553 = (B4551 === B4552), B4558 = !(trueQ(value__4553)), B4561;
if ($T(B4558))
{var sequence__4555 = form__4537, B4559 = sequence__4555[0], B4560 = B3750(B4559);
B4561 = B4002(B4560, "%comma")}
else B4561 = false;
if ($T(B4561))
{var sequence__4557 = form__4537;
return sequence__4557[1]}
else return B3846([B4365], B3845(B4536, form__4537))}
else if ($T(B3848(form__4537, B3970)))
return [B4562, B3750(form__4537)]
else return form__4537}, false)
B3799["%backquote"] = function B4566 (____4564, exp__4565)
{return B4536(exp__4565)}
{var B4574 = $K("message"), B4567 = B2049.signal, B4568 = B2049.make, B4569 = B2049["<error>"];
B3799["%comma"] = function B4575 (____4570, value__4571)
{var error__4573 = B4568(B4569, B4574, "comma not inside backquote");
throw(error__4573);
return false}}
var B4576 = B4568(B4569, B4574, "unsupported name for call in dot")
{var B4578 = B2049["<string>"];
B3799["."] = function B4593 (____4579, value__4580)
{var calls__4581 = $SL.call(arguments, 2);
return B3834(function B4594 (value__4582, call__4583)
{var property__4584 = call__4583[0], arguments__4585 = $SL.call(call__4583, 1), B4589 = B4027, B4586 = property__4584, B4590;
if ($T(B3848(B4586, B4578)))
B4590 = property__4584
else if ($T(B3848(B4586, B3970)))
B4590 = B3750(property__4584)
else {var error__4588 = B4576;
throw(error__4588);
B4590 = false};
var B4591 = [B4589, value__4582, B4590], B4592 = [B4591];
return B3846(B4592, arguments__4585)}, value__4580, calls__4581)}}
var B4596 = B3748("simplify_arguments", function B4608 (arguments__4597)
{var B4598 = B3808(arguments__4597), required__4599 = B4598[0], rest__4600 = B4598[1], key__4601 = B4598[2], required__4603 = B3845(function B4609 (argument__4602)
{if ($T(B3848(argument__4602, B3849)))
{var sequence__4605 = argument__4602;
return sequence__4605[0]}
else return argument__4602}, required__4599), B4606;
if ($T(rest__4600))
B4606 = B3846([B3828], rest__4600)
else B4606 = [];
var B4607;
if ($T(key__4601))
B4607 = B3846([B3829], key__4601)
else B4607 = [];
return B3846(required__4603, B4606, B4607)}, false)
var B4675 = $S("%native-name"), B4676 = $S("<object>"), trueQ = B2049["true?"], B4614 = B2049.symbol, B4615 = B2049[">"], B4616 = B3721["setter-identifier?"], B4617 = B2049["%keys"], B4618 = B3748("make_function_definer", function B4677 (macro_name__4619, definer_name__4620)
{var B4621 = $SL.call(arguments, 2), B4622 = B4617(B4621, {"type/existing?":false,
"record?":false}), typeSexistingQ__4623 = B4622["type/existing?"], recordQ__4624 = B4622["record?"];
return function B4678 (env__4625, identifier__4626, arguments__4627)
{var body__4628 = $SL.call(arguments, 3), B4629;
if ($T(B4616(identifier__4626)))
{var sequence__4637 = identifier__4626, B4664 = sequence__4637[1], B4665 = B4003(B4664);
B4629 = [true, B4665]}
else B4629 = [false, identifier__4626];
var setterQ__4630 = B4629[0], identifier__4631 = B4629[1], B4632 = B3848(identifier__4631, B3970), value__4639;
if ($T(B4632))
value__4639 = B4632
else value__4639 = setterQ__4630;
var B4666 = !(trueQ(value__4639));
if ($T(B4666))
{var error__4641 = B4568(B4569, B4574, B3846(macro_name__4619, ": ", "name not <var> or (setter <var>)"));
throw(error__4641);
false};
var B4667;
if ($T(typeSexistingQ__4623))
{var sequence__4652 = arguments__4627, B4653 = sequence__4652, B4654 = ((B4653 || false).length || 0), B4655 = 0;
B4667 = (B4654 === B4655)}
else B4667 = false;
if ($T(B4667))
{var error__4657 = B4568(B4569, B4574, B3846(macro_name__4619, ": ", "method has no arguments"));
throw(error__4657);
false};
var simplified_arguments__4633 = B4596(arguments__4627), method_definition__4634 = B3773(B3846([B4285, simplified_arguments__4633], body__4628), env__4625);
if ($T(recordQ__4624))
B3749(env__4625, "module", "functions", B3750(identifier__4631), method_definition__4634);
var B4668 = B3788, B4669 = [B4614(definer_name__4620), [B4675, B3750(identifier__4631)], method_definition__4634, setterQ__4630], B4673;
if ($T(typeSexistingQ__4623))
{var sequence__4659 = arguments__4627, head__4635 = sequence__4659[0], B4671;
if ($T(B3848(head__4635, B3849)))
{var object__4661 = head__4635, B4670 = ((object__4661 || false).length || 0);
B4671 = B4615(B4670, 1)}
else B4671 = false;
var B4672;
if ($T(B4671))
{var sequence__4663 = head__4635;
B4672 = sequence__4663[1]}
else B4672 = B4676;
B4673 = [B4672, identifier__4631]}
else B4673 = [];
var B4674 = B3846(B4669, B4673);
return [B4668, identifier__4631, B4674]}}, false)
{var B4700 = $K("type/existing?"), B4701 = $K("record?"), trueQ = B2049["true?"], B4684 = B2049.apply, B4685 = [["define-function", "%make-function", B4700, false, B4701, true], ["define-method", "%make-method", B4700, true]], B4686, B4687, B4688 = [B4685];
while ($T(true))
{var B4689 = B4686, value__4693;
if ($T(B4689))
value__4693 = B4689
else value__4693 = B4187(B3844, B4688);
var B4699 = !(trueQ(value__4693));
if ($T(B4699))
{var sequence__4695 = B4685, arguments__4690 = sequence__4695[0];
(function B4702 (arguments__4691)
{return B3799[B3762(arguments__4691)] = B4684(B4618, arguments__4691)})(arguments__4690);
var sequence__4697 = B4685, B4698 = sequence__4697.slice(1);
B4685 = B4698;
B4688 = [B4685]}
else break};
B4687}
{var B4706 = $S("%make-generic");
B3799["define-generic"] = function B4707 (____4703, identifier__4704, arguments__4705)
{return [B3788, identifier__4704, [B4706, [B4675, B3750(identifier__4704)]]]}}
{var B4780 = $S("%make-class"), trueQ = B2049["true?"];
B3799["define-class"] = function B4781 (____4713, identifier__4714, superclass__4715)
{var properties__4716 = $SL.call(arguments, 3), object__4717 = [B3949], B4718 = properties__4716, B4719, B4720, B4721 = [B4718];
while ($T(true))
{var B4722 = B4719, value__4726;
if ($T(B4722))
value__4726 = B4722
else value__4726 = B4187(B3844, B4721);
var B4774 = !(trueQ(value__4726));
if ($T(B4774))
{var sequence__4728 = B4718, property__4723 = sequence__4728[0];
(function B4782 (property__4724)
{if ($T(B3848(property__4724, B3849)))
{var array__4733 = object__4717, sequence__4732 = property__4724, B4769 = sequence__4732[0], value__4734 = B3750(B4769);
array__4733.push(value__4734);
array__4733;
var array__4739 = object__4717, B4770 = B4285, B4771 = [], sequence__4738 = property__4724, B4772 = sequence__4738[1], value__4740 = [B4770, B4771, B4772];
array__4739.push(value__4740);
return array__4739}
else {var array__4743 = object__4717, value__4744 = B3750(property__4724);
array__4743.push(value__4744);
array__4743;
var array__4747 = object__4717, value__4748 = undefined;
array__4747.push(value__4748);
return array__4747}})(property__4723);
var sequence__4750 = B4718, B4773 = sequence__4750.slice(1);
B4718 = B4773;
B4721 = [B4718]}
else break};
B4720;
var B4775 = B3788, B4776 = B4780, sequence__4762 = superclass__4715, B4763 = sequence__4762, B4764 = ((B4763 || false).length || 0), B4765 = 0, value__4766 = (B4764 === B4765), B4777 = !(trueQ(value__4766)), B4778;
if ($T(B4777))
{var sequence__4768 = superclass__4715;
B4778 = sequence__4768[0]}
else B4778 = false;
var B4779 = [B4776, B4778, object__4717];
return [B4775, identifier__4714, B4779]}}
var B4783 = B3748("get_import_module_nameSoptions", function B4792 (import__4784)
{var B4789;
if ($T(B3848(import__4784, B3849)))
{var sequence__4786 = import__4784;
B4789 = sequence__4786[0]}
else B4789 = import__4784;
var B4790 = B3750(B4789), B4791;
if ($T(B3848(import__4784, B3849)))
{var sequence__4788 = import__4784;
B4791 = sequence__4788.slice(1)}
else B4791 = [];
return [B4790, B4791]}, false)
{var B4797 = B3721["identifier-name"], B4798, B4799, B4800;
B3799["define-module"] = function B4817 (env__4801, ____4802)
{var B4803 = $SL.call(arguments, 2), B4804 = B4617(B4803, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), import__4805 = B4804["import"], export__4806 = B4804["export"], compile_time_import__4807 = B4804["compile-time-import"], inline__4808 = B4804.inline;
B3749(env__4801, "module", "exports", B3845(B4797, export__4806));
B3771(function B4818 (import__4809)
{var B4810 = B4783(import__4809), module_name__4811 = B4810[0], options__4812 = B4810[1];
return B4684(B4798, env__4801, module_name__4811, options__4812)}, compile_time_import__4807);
B3749(env__4801, "module", "inline", B3845(B4797, inline__4808));
return B3957(B3845(function B4819 (import__4813)
{var B4814 = B4783(import__4813), module_name__4815 = B4814[0], options__4816 = B4814[1];
B4684(B4799, B3761(env__4801, "module"), module_name__4815, options__4816);
return B4800(module_name__4815, env__4801)}, import__4805))}}
B4800 = B3748("make_import_definition", function B4823 (module_name__4820, env__4821)
{var identifier__4822 = B3851();
B3749(env__4821, "import-identifiers", module_name__4820, identifier__4822);
return [B3788, identifier__4822, [[B4534, "require"], module_name__4820]]}, false)
{var B4828 = $S("define-function");
B3799["define-macro"] = function B4829 (env__4824, identifier__4825, arguments__4826)
{var body__4827 = $SL.call(arguments, 3);
return [B4286, B3846([B4828, identifier__4825, B3846([B3851()], arguments__4826)], body__4827), [B4049, [B4027, identifier__4825, "%macro?"], true]]}}
B3799["define-symbol-macro"] = function B4834 (env__4830, identifier__4831, arguments__4832)
{var body__4833 = $SL.call(arguments, 3);
return [B4286, B3846([B4828, identifier__4831, []], body__4833), [B4049, [B4027, identifier__4831, "%symbol-macro?"], true]]}
{var B4851 = $S("%try"), B4852 = $S("instance?");
B3799["handler-case"] = function B4853 (____4838, body__4839)
{var cases__4840 = $SL.call(arguments, 2), condition_var__4841 = B3851();
return [B4851, body__4839, condition_var__4841, B3846([B4086], B3845(function B4854 (case__4842)
{var B4843 = case__4842[0], type__4844 = B4843[0], B4845 = $SL.call(B4843, 1), B4846 = B4617(B4845, {condition:false}), condition__4847 = B4846.condition, body__4848 = $SL.call(case__4842, 1), B4849 = [[B4852, condition_var__4841, type__4844]], B4850;
if ($T(condition__4847))
B4850 = [B3846([B3950, [[condition__4847, condition_var__4841]]], body__4848)]
else B4850 = body__4848;
return B3846(B4849, B4850)}, cases__4840))]}}
{var B4868 = $S("%call"), B4869 = $S("get-setter");
B3799["get-setter"] = function B4870 (____4855, object__4856, property__4857)
{var propertiesSvalue__4858 = $SL.call(arguments, 3), object__4860 = propertiesSvalue__4858, B4863 = ((object__4860 || false).length || 0), B4864 = B4002(B4863, 1);
if ($T(B4864))
{var B4865 = B3783, B4866 = [B4027, object__4856, property__4857], sequence__4862 = propertiesSvalue__4858, B4867 = sequence__4862[0];
return [B4865, B4866, B4867]}
else return B3846([B4868, B4869, object__4856, property__4857], propertiesSvalue__4858)}}
{var B4873 = $S("symbol");
B3799.symbol = function B4874 (____4871, name__4872)
{if ($T(B3848(name__4872, B4578)))
return [B4562, name__4872]
else return [B4868, B4873, name__4872]}}
{var B4875 = B3728();
exports["*core-symbol-macros*"] = B4875}
{var B4877 = $S("%next-method");
B4875["next-method"] = function B4878 (____4876)
{return [B4877, B3739]}}
var trueQ = B2049["true?"], B4880 = B3748("find_macro_definition", function B4912 (form__4881, env__4882)
{var B4883 = form__4881;
if ($T(B3848(B4883, B3849)))
{var sequence__4896 = form__4881, B4897 = sequence__4896, B4898 = ((B4897 || false).length || 0), B4899 = 0, B4908 = (B4898 === B4899);
if ($T(B4908))
{var error__4901 = "Empty form";
throw(error__4901);
false};
var sequence__4903 = form__4881, B4909 = sequence__4903[0], name__4884 = B3750(B4909), value__4905 = B3761(env__4882, "bound?", name__4884), B4910 = !(trueQ(value__4905));
if ($T(B4910))
return env__4882.macros[name__4884]}
else if ($T(B3848(B4883, B3970)))
{var name__4885 = B3750(form__4881), value__4907 = B3761(env__4882, "bound?", name__4885), B4911 = !(trueQ(value__4907));
if ($T(B4911))
return env__4882["symbol-macros"][name__4885]}}, false)
{var B4914 = B3748("macroexpand_1", function B4922 (form__4915, env__4916)
{var B4917 = B4880(form__4915, env__4916);
if ($T(B4917))
{var macro__4918 = B4917, B4921;
if ($T(B3848(form__4915, B3849)))
{var sequence__4920 = form__4915;
B4921 = sequence__4920.slice(1)}
else B4921 = form__4915;
return B4684(macro__4918, env__4916, B4921)}
else return form__4915}, false);
exports["macroexpand-1"] = B4914}
{var trueQ = B2049["true?"], B4923 = B3748("macroexpand", function B4931 (form__4924, env__4925)
{var doneQ__4926;
while ($T(true))
{var value__4929 = doneQ__4926, B4930 = !(trueQ(value__4929));
if ($T(B4930))
{var expanded__4927 = B4914(form__4924, env__4925);
doneQ__4926 = B4002(expanded__4927, form__4924);
form__4924 = expanded__4927}
else break};
return form__4924}, false);
exports.macroexpand = B4923}
{var B4934, B4935 = B2049.rcurry;
B3773 = B3748("macroexpand_all", function B4944 (form__4936, env__4937)
{var B4938 = form__4936;
if ($T(B3848(B4938, B3849)))
if ($T(B4880(form__4936, env__4937)))
return B4934(B3773(B4923(form__4936, env__4937), env__4937))
else {var B4939 = B3763(form__4936, env__4937);
if ($T(B4939))
{var expander__4940 = B4939, sequence__4942 = form__4936, B4943 = sequence__4942.slice(1);
return B4684(expander__4940, env__4937, B4943)}
else return B3845(B4935(B3773, env__4937), form__4936)}
else if ($T(B3848(B4938, B3970)))
if ($T(B4880(form__4936, env__4937)))
return B3773(B4923(form__4936, env__4937), env__4937)
else return form__4936
else return form__4936}, false);
exports["macroexpand-all"] = B3773}
B4934 = B3748("maybe_call", function B4953 (exp__4945)
{var B4952;
if ($T(B3760(exp__4945, B3849)))
{var sequence__4947 = exp__4945, B4950 = sequence__4947[0], B4951 = B4868;
B4952 = B4002(B4950, B4951)}
else B4952 = false;
if ($T(B4952))
{var sequence__4949 = exp__4945;
return sequence__4949.slice(1)}
else return exp__4945}, false)
var B4955 = B3748("find_moduleSimport_name", function B4965 (definition_name__4956, env__4957)
{return B4187(function B4966 (import__4958)
{var module__4959 = import__4958[0], names__4960 = import__4958[1];
return B4187(function B4967 (name__4961)
{var B4962;
if ($T(B3848(name__4961, B3849)))
B4962 = name__4961
else B4962 = [name__4961, name__4961];
var import_name__4963 = B4962[0], new_name__4964 = B4962[1];
if ($T(B4002(definition_name__4956, new_name__4964)))
return [module__4959, import_name__4963]}, names__4960)}, B3761(env__4957, "module", "imports"))}, false)
var B4968 = B3748("find_import_identifier", function B4971 (module__4969, env__4970)
{return B3761(env__4970, "import-identifiers", B3761(module__4969, "name"))}, false)
{var B5004 = $S("%begin"), B5005 = $S("%define"), B4972 = B2049["set-subtract!"], B4973, B4974 = B2049["as-set"], B4975 = B2049["object-properties"], B4976 = B3748("define_free_variables", function B5006 (exp__4977, env__4978)
{var variables__4979 = B4972(B4972(B4973(exp__4977), B4974(B3845(B4614, B4975(B3761(env__4978, "defined?"))))), B3737), sequence__4996 = variables__4979, B4997 = sequence__4996, B4998 = ((B4997 || false).length || 0), B4999 = 0, B5000 = (B4998 === B4999);
if ($T(B5000))
return exp__4977
else return B3846([B5004], B3845(function B5007 (variable__4980)
{var name__4981 = B3750(variable__4980);
B3749(env__4978, "defined?", name__4981, true);
var B5001 = [[B5005, variable__4980]], moduleSimport_name__4982 = B4955(name__4981, env__4978), B5002;
if ($T(moduleSimport_name__4982))
{var module__4983 = moduleSimport_name__4982[0], import_name__4984 = moduleSimport_name__4982[1], import_identifier__4985 = B4968(module__4983, env__4978);
B5002 = [[B3783, variable__4980, [B4027, import_identifier__4985, import_name__4984]]]}
else B5002 = [];
var B5003 = B3846(B5001, B5002);
return B3957(B5003)}, variables__4979), [exp__4977])}, false);
exports["define-free-variables"] = B4976}
var trueQ = B2049["true?"], B5008 = B2049.choose, B5009 = B2049["has?"], B5010 = B3748("define_free_variables2", function B5047 (exp__5011, env__5012)
{var free__5013 = B4972(B4973(exp__5011), B3737), variables__5015 = B5008(function B5048 (variable__5014)
{var object__5026 = B3761(env__5012, "definition-names"), property__5027 = B3750(variable__5014), value__5028 = $HP.call(object__5026,property__5027);
return !(trueQ(value__5028))}, free__5013), sequence__5039 = variables__5015, B5040 = sequence__5039, B5041 = ((B5040 || false).length || 0), B5042 = 0, B5043 = (B5041 === B5042);
if ($T(B5043))
return exp__5011
else return B3846([B5004], B3845(function B5049 (variable__5016)
{var name__5017 = B3750(variable__5016);
B3749(env__5012, "defined?", name__5017, true);
var B5044 = [[B5005, variable__5016]], moduleSimport_name__5018 = B4955(name__5017, env__5012), B5045;
if ($T(moduleSimport_name__5018))
{var module__5019 = moduleSimport_name__5018[0], import_name__5020 = moduleSimport_name__5018[1], old_import_identifier__5021 = B4968(module__5019, env__5012), import_identifier__5022 = B3761(env__5012, "new-identifiers", B3750(old_import_identifier__5021));
B5045 = [[B3783, variable__5016, [B4027, import_identifier__5022, import_name__5020]]]}
else B5045 = [];
var B5046 = B3846(B5044, B5045);
return B3957(B5046)}, variables__5015), [exp__5011])}, false)
{var trueQ = B2049["true?"], B5066 = B2049["set-union!"];
B4973 = B3748("find_free_variables", function B5161 (exp__5067)
{var B5142;
if ($T(B3848(exp__5067, B3849)))
{var sequence__5111 = exp__5067, B5112 = sequence__5111, B5113 = ((B5112 || false).length || 0), B5114 = 0, value__5115 = (B5113 === B5114);
B5142 = !(trueQ(value__5115))}
else B5142 = false;
if ($T(B5142))
{var sequence__5117 = exp__5067, head__5068 = sequence__5117[0], name__5069;
if ($T(B3848(head__5068, B3970)))
name__5069 = B3750(head__5068)
else name__5069 = false;
var B5070 = name__5069;
if ($T(B4002(B5070, "%method")))
{var ____5071 = exp__5067[0], arguments__5072 = exp__5067[1], body__5073 = exp__5067[2];
return B4972(B4973(body__5073), B4974(arguments__5072))}
else if ($T(B4002(B5070, "%bind")))
{var ____5074 = exp__5067[0], B5075 = exp__5067[1], var__5076 = B5075[0], value__5077 = B5075[1], body__5078 = exp__5067[2];
return B5066(B4972(B4973(body__5078), B4974([var__5076])), B4973(value__5077))}
else if ($T(B4002(B5070, "%begin")))
{var definitions__5079 = [], B5147 = function B5162 (result__5080, e__5081)
{var B5145;
if ($T(B3760(e__5081)))
{var sequence__5119 = e__5081, B5143 = sequence__5119[0], B5144 = B5005;
B5145 = B4002(B5143, B5144)}
else B5145 = false;
var B5146;
if ($T(B5145))
{var array__5124 = definitions__5079, sequence__5123 = e__5081, value__5125 = sequence__5123[1];
array__5124.push(value__5125);
array__5124;
B5146 = []}
else B5146 = B4973(e__5081);
return B3846(result__5080, B5146)}, B5148 = [], sequence__5127 = exp__5067, B5149 = sequence__5127.slice(1), B5150 = B3834(B5147, B5148, B5149), B5151 = B4974(B5150), B5152 = B4974(definitions__5079);
return B4972(B5151, B5152)}
else if ($T(B4002(B5070, "%try")))
{var ____5082 = exp__5067[0], e1__5083 = exp__5067[1], v__5084 = exp__5067[2], e2__5085 = exp__5067[3];
return B4972(B5066(B4974(B4973(e1__5083)), B4974(B4973(e2__5085))), B4974([v__5084]))}
else {var B5086 = B4002(B5070, "%set"), B5153;
if ($T(B5086))
B5153 = B5086
else {var B5087 = B4002(B5070, "%if");
if ($T(B5087))
B5153 = B5087
else {var B5088 = B4002(B5070, "%while");
if ($T(B5088))
B5153 = B5088
else {var B5089 = B4002(B5070, "%array");
if ($T(B5089))
B5153 = B5089
else {var B5090 = B4002(B5070, "%object");
if ($T(B5090))
B5153 = B5090
else {var B5091 = B4002(B5070, "%infix");
if ($T(B5091))
B5153 = B5091
else {var B5092 = B4002(B5070, "%get-property");
if ($T(B5092))
B5153 = B5092
else {var B5093 = B4002(B5070, "%native-call");
if ($T(B5093))
B5153 = B5093
else {var B5094 = B4002(B5070, "%plus");
if ($T(B5094))
B5153 = B5094
else {var B5095 = B4002(B5070, "%minus");
if ($T(B5095))
B5153 = B5095
else {var B5096 = B4002(B5070, "%times");
if ($T(B5096))
B5153 = B5096
else B5153 = B4002(B5070, "%divide")}}}}}}}}}};
if ($T(B5153))
{var B5154 = [], sequence__5129 = exp__5067, B5155 = sequence__5129.slice(1), B5156 = B3845(B4973, B5155), B5157 = B3834(B3846, B5154, B5156);
return B4974(B5157)}
else {var B5097 = B4002(B5070, "%native"), B5158;
if ($T(B5097))
B5158 = B5097
else {var B5098 = B4002(B5070, "%native-name");
if ($T(B5098))
B5158 = B5098
else {var B5099 = B4002(B5070, "%define");
if ($T(B5099))
B5158 = B5099
else B5158 = B4002(B5070, "%symbol")}};
if ($T(B5158))
return B4974([])
else {var function__5138 = B5066, values__5139 = B3845(B4973, exp__5067), B5140 = values__5139, B5159 = B5140[0], B5141 = values__5139, B5160 = B5141.slice(1);
return B3834(function__5138, B5159, B5160)}}}}
else if ($T(B3848(exp__5067, B3970)))
return B4974([exp__5067])
else return B4974([])}, false)}
var trueQ = B2049["true?"], dec = B2049.dec, B5181 = B2049["last-setter"], B5182 = B2049.last, B5183 = B2049["second-setter"], B5184, B5185, B5186 = B3748("inline", function B5297 (form__5187, env__5188)
{var B5280;
if ($T(B3848(form__5187, B3849)))
{var sequence__5231 = form__5187, B5232 = sequence__5231, B5233 = ((B5232 || false).length || 0), B5234 = 0, value__5235 = (B5233 === B5234);
B5280 = !(trueQ(value__5235))}
else B5280 = false;
if ($T(B5280))
{var sequence__5237 = form__5187, B5281 = sequence__5237[0], B5282 = B3848(B5281, B3970);
if ($T(B5282))
{var sequence__5239 = form__5187, B5283 = sequence__5239[0], B5189 = B3750(B5283), B5190 = B4002(B5189, "%method"), B5284;
if ($T(B5190))
B5284 = B5190
else B5284 = B4002(B5189, "%set");
if ($T(B5284))
{var array__5252 = form__5187, array__5249 = form__5187, B5250 = array__5249, B5251 = ((B5250 || false).length || 0), B5285 = (B5251 - 1), B5286 = array__5249[B5285], value__5253 = B5186(B5286, env__5188);
array__5252[dec(B3805(array__5252), 1)] = value__5253;
return form__5187}
else if ($T(B4002(B5189, "%bind")))
{var ____5191 = form__5187[0], binding__5192 = form__5187[1], body__5193 = form__5187[2], array__5258 = binding__5192, sequence__5257 = binding__5192, B5287 = sequence__5257[1], value__5259 = B5186(B5287, env__5188);
array__5258[1] = value__5259;
var array__5262 = form__5187, value__5263 = B5186(body__5193, env__5188);
array__5262[dec(B3805(array__5262), 1)] = value__5263;
return form__5187}
else if ($T(B4002(B5189, "%try")))
{var ____5194 = form__5187[0], body__5195 = form__5187[1], var__5196 = form__5187[2], catch__5197 = form__5187[3], array__5266 = form__5187, value__5267 = B5186(body__5195, env__5188);
array__5266[1] = value__5267;
var array__5270 = form__5187, value__5271 = B5186(catch__5197, env__5188);
array__5270[dec(B3805(array__5270), 1)] = value__5271;
return form__5187}
else {var B5198 = B4002(B5189, "%begin"), B5288;
if ($T(B5198))
B5288 = B5198
else {var B5199 = B4002(B5189, "%if");
if ($T(B5199))
B5288 = B5199
else {var B5200 = B4002(B5189, "%while");
if ($T(B5200))
B5288 = B5200
else {var B5201 = B4002(B5189, "%array");
if ($T(B5201))
B5288 = B5201
else {var B5202 = B4002(B5189, "%object");
if ($T(B5202))
B5288 = B5202
else {var B5203 = B4002(B5189, "%get-property");
if ($T(B5203))
B5288 = B5203
else {var B5204 = B4002(B5189, "%native-call");
if ($T(B5204))
B5288 = B5204
else {var B5205 = B4002(B5189, "%infix");
if ($T(B5205))
B5288 = B5205
else {var B5206 = B4002(B5189, "%plus");
if ($T(B5206))
B5288 = B5206
else {var B5207 = B4002(B5189, "%minus");
if ($T(B5207))
B5288 = B5207
else {var B5208 = B4002(B5189, "%times");
if ($T(B5208))
B5288 = B5208
else B5288 = B4002(B5189, "%divide")}}}}}}}}}};
if ($T(B5288))
{var sequence__5273 = form__5187, B5289 = sequence__5273[0], B5290 = [B5289], B5291 = B4935(B5186, env__5188), sequence__5275 = form__5187, B5292 = sequence__5275.slice(1), B5293 = B3845(B5291, B5292);
return B3846(B5290, B5293)}
else {var B5209 = B4002(B5189, "%native"), B5294;
if ($T(B5209))
B5294 = B5209
else {var B5210 = B4002(B5189, "%native-name");
if ($T(B5210))
B5294 = B5210
else B5294 = B4002(B5189, "%define")};
if ($T(B5294))
return form__5187
else {var sequence__5277 = form__5187, B5295 = sequence__5277[0], name__5211 = B3750(B5295), B5212 = B3761(env__5188, "definition-names", name__5211), definition_name__5213;
if ($T(B5212))
definition_name__5213 = B5212
else definition_name__5213 = name__5211;
var B5214;
if ($T(B5185(B3761(env__5188, "module"), definition_name__5213)))
B5214 = B3761(env__5188, "module", "functions", definition_name__5213)
else B5214 = false;
var definition__5219;
if ($T(B5214))
definition__5219 = B5214
else {var B5215 = B4955(definition_name__5213, env__5188);
if ($T(B5215))
{var moduleSimport_name__5216 = B5215, module__5217 = moduleSimport_name__5216[0], import_name__5218 = moduleSimport_name__5216[1];
if ($T(B5185(module__5217, import_name__5218)))
definition__5219 = B3761(module__5217, "functions", import_name__5218)
else definition__5219 = false}
else definition__5219 = false};
if ($T(definition__5219))
{var sequence__5279 = form__5187, B5296 = sequence__5279.slice(1);
return B5184(definition__5219, B5296, env__5188)}
else return B3845(B4935(B5186, env__5188), form__5187)}}}}
else return B3845(B4935(B5186, env__5188), form__5187)}
else return form__5187}, false)
B5185 = B3748("inlineQ", function B5300 (module__5298, name__5299)
{return B4187(B3772(B4002, name__5299), B3761(module__5298, "inline"))}, false)
{var trueQ = B2049["true?"], B5303 = B2049[">="], B5304 = B3722["ensure-naming-structure"], B5305 = B2049.push, B5306 = B3721["get-module-name/name"], B5307 = B3722["restore-identifiers"], B5308 = B3722["alpha-convert"];
B5184 = B3748("inline_definition", function B5338 (definition__5309, values__5310, env__5311)
{var ____5312 = definition__5309[0], arguments__5313 = definition__5309[1], body__5314 = definition__5309[2], body__5317 = B3834(function B5339 (body__5315, argument__5316)
{return [B3797, [argument__5316, argument__5316], body__5315]}, body__5314, B3971(arguments__5313)), inlined__5318 = B5186(body__5317, env__5311), prepared__5319 = B5308(inlined__5318, env__5311), object__5330 = arguments__5313, B5320 = ((object__5330 || false).length || 0), i__5321 = 0;
while ($T(true))
{var value__5332 = B5303(i__5321, B5320), B5337 = !(trueQ(value__5332));
if ($T(B5337))
{(function B5340 (i__5322)
{var argument__5323 = B3806(arguments__5313, i__5322), value__5324 = B3806(values__5310, i__5322), B5325 = B5306(argument__5323), module_name__5326 = B5325[0], name__5327 = B5325[1];
B5304(env__5311, module_name__5326, name__5327);
var array__5335 = B3761(env__5311, "identifiers", module_name__5326, name__5327), value__5336;
if ($T(value__5324))
value__5336 = B5186(value__5324, env__5311)
else value__5336 = [B4534, "undefined"];
array__5335.unshift(value__5336);
return array__5335})(i__5321);
i__5321 = (i__5321 + 1)}
else break};
false;
var result__5328 = B5308(body__5317, env__5311);
B5307(arguments__5313, env__5311);
return result__5328}, false)}
{var B5341, B5342 = B2049.identity, B5343 = B3748("lift_symbols", function B5346 (exp__5344, env__5345)
{return B5341(exp__5344, env__5345, B5342)}, false);
exports["lift-symbols"] = B5343}
{var trueQ = B2049["true?"], B5364, B5365, B5366, B5367 = B2049["<keyword>"], B5368 = B2049["<hash-symbol>"];
B5341 = B3748("lift_symbol", function B5438 (exp__5369, env__5370, k__5371)
{var B5434;
if ($T(B3848(exp__5369, B3849)))
{var sequence__5427 = exp__5369, B5428 = sequence__5427, B5429 = ((B5428 || false).length || 0), B5430 = 0, value__5431 = (B5429 === B5430);
B5434 = !(trueQ(value__5431))}
else B5434 = false;
if ($T(B5434))
{var sequence__5433 = exp__5369, B5435 = sequence__5433[0], B5372 = B3750(B5435);
if ($T(B4002(B5372, "%bind")))
{var ____5373 = exp__5369[0], B5374 = exp__5369[1], var__5375 = B5374[0], value__5376 = B5374[1], body__5377 = exp__5369[2];
return B5341(value__5376, env__5370, function B5439 (lvalue__5378, env__5379)
{return B5341(body__5377, env__5379, function B5440 (lbody__5380, env__5381)
{return k__5371([B3797, [var__5375, lvalue__5378], lbody__5380], env__5381)})})}
else {var B5382 = B4002(B5372, "%method"), B5436;
if ($T(B5382))
B5436 = B5382
else B5436 = B4002(B5372, "%set");
if ($T(B5436))
{var m__5383 = exp__5369[0], e1__5384 = exp__5369[1], e2__5385 = exp__5369[2];
return B5341(e2__5385, env__5370, function B5441 (le2__5386, env__5387)
{return k__5371([m__5383, e1__5384, le2__5386], env__5387)})}
else {var B5388 = B4002(B5372, "%begin"), B5437;
if ($T(B5388))
B5437 = B5388
else {var B5389 = B4002(B5372, "%if");
if ($T(B5389))
B5437 = B5389
else {var B5390 = B4002(B5372, "%while");
if ($T(B5390))
B5437 = B5390
else {var B5391 = B4002(B5372, "%array");
if ($T(B5391))
B5437 = B5391
else {var B5392 = B4002(B5372, "%object");
if ($T(B5392))
B5437 = B5392
else {var B5393 = B4002(B5372, "%get-property");
if ($T(B5393))
B5437 = B5393
else {var B5394 = B4002(B5372, "%infix");
if ($T(B5394))
B5437 = B5394
else {var B5395 = B4002(B5372, "%native");
if ($T(B5395))
B5437 = B5395
else {var B5396 = B4002(B5372, "%native-name");
if ($T(B5396))
B5437 = B5396
else {var B5397 = B4002(B5372, "%native-call");
if ($T(B5397))
B5437 = B5397
else {var B5398 = B4002(B5372, "%plus");
if ($T(B5398))
B5437 = B5398
else {var B5399 = B4002(B5372, "%minus");
if ($T(B5399))
B5437 = B5399
else {var B5400 = B4002(B5372, "%times");
if ($T(B5400))
B5437 = B5400
else B5437 = B4002(B5372, "%divide")}}}}}}}}}}}};
if ($T(B5437))
{var m__5401 = exp__5369[0], eT__5402 = $SL.call(exp__5369, 1);
return B5364(eT__5402, env__5370, function B5442 (leT__5403, env__5404)
{return k__5371(B3846([m__5401], leT__5403), env__5404)})}
else if ($T(B4002(B5372, "%try")))
{var ____5405 = exp__5369[0], e1__5406 = exp__5369[1], v__5407 = exp__5369[2], e2__5408 = exp__5369[3];
return B5364([e1__5406, e2__5408], env__5370, function B5443 (leT__5409, env__5410)
{var le1__5411 = leT__5409[0], le2__5412 = leT__5409[1];
return k__5371([B4851, le1__5411, v__5407, le2__5412], env__5410)})}
else if ($T(B4002(B5372, "%symbol")))
{var ____5413 = exp__5369[0], name__5414 = exp__5369[1];
return B5365(name__5414, exp__5369, "symbol", env__5370, k__5371)}
else return B5366(exp__5369, env__5370, k__5371)}}}
else {var B5415 = exp__5369;
if ($T(B3848(B5415, B5367)))
return B5365(B3750(exp__5369), exp__5369, "keyword", env__5370, k__5371)
else if ($T(B3848(B5415, B5368)))
return B5365(B3750(exp__5369), exp__5369, "hash", env__5370, k__5371)
else return k__5371(exp__5369, env__5370)}}, false)}
B5365 = B3748("lift_value", function B5453 (name__5445, value__5446, type__5447, env__5448, k__5449)
{var B5450 = B3761(env__5448, "lifted", type__5447, name__5445);
if ($T(B5450))
{var t__5451 = B5450;
return k__5449(t__5451, env__5448)}
else {var t__5452 = B3749(env__5448, "lifted", type__5447, name__5445, B3851());
return [B3797, [t__5452, value__5446], k__5449(t__5452, env__5448)]}}, false)
B5364 = B3748("lift_symbolT", function B5472 (expT__5454, env__5455, k__5456)
{var sequence__5467 = expT__5454, B5468 = sequence__5467, B5469 = ((B5468 || false).length || 0), B5470 = 0, B5471 = (B5469 === B5470);
if ($T(B5471))
return k__5456([], env__5455)
else return B5366(expT__5454, env__5455, k__5456)}, false)
B5366 = B3748("lift_symbolTT", function B5488 (exp__5473, env__5474, k__5475)
{var sequence__5481 = exp__5473, B5484 = sequence__5481[0], B5487 = function B5489 (t__5476, env__5477)
{var sequence__5483 = exp__5473, B5485 = sequence__5483.slice(1), B5486 = function B5490 (tT__5478, env__5479)
{return k__5475(B3846([t__5476], tT__5478), env__5479)};
return B5364(B5485, env__5477, B5486)};
return B5341(B5484, env__5474, B5487)}, false)
var B5495 = $K("string"), B5491 = B3719.read, B5492 = B3717["<string-stream>"], B5493 = B3748("read_program", function B5496 (source__5494)
{return B5491(B4568(B5492, B5495, B3846("(", source__5494, "\n)")))}, false)
{var B5497 = B3723["lift-defines"], B5498 = B3724["normalize-term"], B5499 = B3725["transform-statements!"], B5500 = B3726["flatten-statements!"], B5501 = B3727["compile-js"], B5502 = B3748("compile_expression", function B5510 (exp__5503, env__5504)
{return B3834(function B5511 (result__5505, nameSfn__5506)
{var name__5507 = nameSfn__5506[0], fn__5508 = nameSfn__5506[1], result__5509 = fn__5508(result__5505);
return result__5509}, exp__5503, [["source", B5342], ["macroexpanded", B4935(B3773, env__5504)], ["lifted defines", B4935(B5497, env__5504)], ["defined free variables", B4935(B4976, env__5504)], ["alpha-converted", B4935(B5308, env__5504)], ["inline", B4935(B5186, env__5504)], ["defined free variables after inline", B4935(B5010, env__5504)], ["ANF", B5498], ["lifted symbols", B4935(B5343, env__5504)], ["statements", B4935(B5499, env__5504)], ["flattened", B5500], ["compiled", B4935(B5501, env__5504)]])}, false);
exports["compile-expression"] = B5502}
var B5512 = B3720["resolve-path"], B5513 = B3748("executable_path", function B5515 (module_name__5514)
{return B5512("build", B3846(module_name__5514, ".js"))}, false)
var B5516 = B3748("module_path", function B5519 (base_path__5517, module_name__5518)
{return B5512(base_path__5517, B3846(module_name__5518, ".rm"))}, false)
var B5520 = B3748("source_path", function B5522 (module_name__5521)
{return B5512("src", B3846(module_name__5521, ".ralph"))}, false)
var trueQ = B2049["true?"], B5524 = B2049["<"], B5525 = B3720["file-properties"], B5526 = B3720["file-exists?"], B5527 = B3748("recompileQ", function B5537 (module_name__5528)
{var value__5533 = B3761(B3729, module_name__5528, "native?"), B5536 = !(trueQ(value__5533));
if ($T(B5536))
{var path__5529 = B5513(module_name__5528), value__5535 = B5526(path__5529), B5530 = !(trueQ(value__5535));
if ($T(B5530))
return B5530
else {var path2__5531 = B5520(module_name__5528);
return B5524(B3761(B5525(path__5529), "modification-date"), B3761(B5525(path2__5531), "modification-date"))}}}, false)
{var B5541 = B2049["chain-object"], B5542, B5543;
B4798 = B3748("compile_time_import_module", function B5557 (env__5544, module_name__5545)
{var B5546 = $SL.call(arguments, 2), B5547 = B4617(B5546, {options:false}), options__5548 = B5547.options, B5554;
if ($T(B4002(module_name__5545, "ralph/core")))
B5554 = [B3799, B4875]
else {B5542(module_name__5545);
var definitions__5549 = require(module_name__5545), macros__5550 = B3740(), symbol_macros__5551 = B3740();
B3771(function B5558 (name__5552)
{var definition__5553 = B3761(definitions__5549, name__5552);
if ($T(B3761(definition__5553, "%macro?")))
return macros__5550[name__5552] = definition__5553
else if ($T(B3761(definition__5553, "%symbol-macro?")))
return symbol_macros__5551[name__5552] = definition__5553}, B4684(B5543, B4975(definitions__5549), options__5548));
B5554 = [macros__5550, symbol_macros__5551]};
var macros__5555 = B5554[0], symbol_macros__5556 = B5554[1];
B5541(B3761(env__5544, "macros"), macros__5555);
return B5541(B3761(env__5544, "symbol-macros"), symbol_macros__5556)}, false)}
{var B5563 = B2049["remove!"], B5564 = B2049["as-object"];
B5543 = B3748("process_names", function B5583 (all__5565)
{var B5566 = $SL.call(arguments, 1), B5567 = B4617(B5566, {only:false,
exclude:false,
prefix:false,
rename:false}), only__5568 = B5567.only, exclude__5569 = B5567.exclude, prefix__5570 = B5567.prefix, rename__5571 = B5567.rename, resolve__5572 = function B5584 (exp__5573)
{if ($T(B3848(exp__5573, B4578)))
return exp__5573
else return B4797(exp__5573)}, B5580;
if ($T(B3848(only__5568, B3849)))
B5580 = B3845(resolve__5572, only__5568)
else B5580 = all__5565;
var names__5574 = B4974(B5580), B5575 = rename__5571, B5581;
if ($T(B5575))
B5581 = B5575
else B5581 = [];
var B5582 = B3845(resolve__5572, B5581), renamings__5576 = B5564(B5582);
B3771(B3772(B5563, names__5574), B3845(resolve__5572, exclude__5569));
B5066(names__5574, B4975(renamings__5576));
return B3845(function B5585 (name__5577)
{var B5578 = B3761(renamings__5576, name__5577);
if ($T(B5578))
{var renaming__5579 = B5578;
return [name__5577, renaming__5579]}
else if ($T(B3848(prefix__5570, B4578)))
return [name__5577, B3846(prefix__5570, name__5577)]
else return name__5577}, names__5574)}, false)}
{var B5587;
B4799 = B3748("import_module", function B5603 (module__5588, module_name__5589)
{var options__5590 = $SL.call(arguments, 2), B5591 = B5587(module_name__5589);
if ($T(B5591))
{var other_module__5592 = B5591, array__5595 = B3761(module__5588, "imports"), value__5596 = [other_module__5592, B4684(B5543, B3761(other_module__5592, "exports"), options__5590)];
array__5595.unshift(value__5596);
array__5595;
var array__5599 = B3761(module__5588, "dependencies"), value__5600 = module_name__5589;
array__5599.unshift(value__5600);
array__5599;
return other_module__5592}
else {var error__5602 = B3846("unable to import module '", module_name__5589, "'");
throw(error__5602);
return false}}, false)}
{var B5607;
B5587 = B3748("find_module", function B5612 (module_name__5608)
{var B5609 = B5542(module_name__5608);
if ($T(B5609))
return B5609
else {var B5610 = B3761(B3729, module_name__5608);
if ($T(B5610))
return B5610
else {var B5611 = B5607("build", module_name__5608);
if ($T(B5611))
return B5611
else return B5607("src", module_name__5608)}}}, false)}
{var B5617 = $K("name"), B5613 = B3720["read-file"];
B5607 = B3748("read_module", function B5618 (base_path__5614, module_name__5615)
{var path__5616 = B5516(base_path__5614, module_name__5615);
if ($T(B5526(path__5616)))
return B4684(B3772(B4568, B3732, B5617), B5491(B4568(B5492, B5495, B5613(path__5616))))}, false)}
{var B5651 = $K("module"), B5652 = $K("exports"), B5653 = $K("inline"), B5654 = $K("dependencies"), trueQ = B2049["true?"], B5620 = B3720["write-file"], B5621 = B2049.description;
B5542 = B3748("compile_module", function B5655 (module_name__5622)
{var object__5635 = B3729, property__5636 = module_name__5622, value__5637 = $HP.call(object__5635,property__5636), B5648 = !(trueQ(value__5637));
if ($T(B5648))
{var B5623 = B5607("src", module_name__5622);
if ($T(B5623))
{var module__5624 = B5623;
B3729[module_name__5622] = module__5624}};
if ($T(B5527(module_name__5622)))
{var value__5639 = B5526(B5520(module_name__5622)), B5649 = !(trueQ(value__5639));
if ($T(B5649))
{var error__5641 = B3846("unable to compile module '", module_name__5622, "'");
throw(error__5641);
false};
var module__5625 = B4568(B3732, B5617, module_name__5622), env__5626 = B4568(B3741, B5651, module__5625), source__5627 = B5613(B5520(module_name__5622)), program__5628 = B5493(source__5627), result__5629 = "";
B3729[module_name__5622] = module__5625;
B4798(env__5626, "ralph/core");
var value__5643 = B4002(module_name__5622, "ralph/core"), B5650 = !(trueQ(value__5643));
if ($T(B5650))
{B4799(module__5625, "ralph/core");
var array__5646 = program__5628, value__5647 = B4800("ralph/core", env__5626);
array__5646.unshift(value__5647);
array__5646};
B3771(function B5656 (expression__5630)
{var code__5631 = B5502(expression__5630, env__5626);
return result__5629 = B3846(result__5629, code__5631, "\n")}, program__5628);
B5620(B5513(module_name__5622), result__5629);
B5620(B5516("build", module_name__5622), B5621([module_name__5622, B5652, B3761(module__5625, "exports"), B5653, B3761(module__5625, "inline"), B5654, B3761(module__5625, "dependencies")]));
return module__5625}}, false);
exports["compile-module"] = B5542}
{var B5659 = B2049["member?"], B5660 = B3748("analyze_dependencies", function B5675 (module_name__5661)
{var B5662 = B5587(module_name__5661);
if ($T(B5662))
{var module__5663 = B5662;
B3729[module_name__5661] = module__5663;
var B5664 = module__5663, dependencies__5665 = B5664.dependencies, result__5666 = B3804(dependencies__5665);
B3771(function B5676 (dependency__5667)
{return B3771(function B5677 (sub_dependency__5668)
{if ($T(B5659(sub_dependency__5668, result__5666)))
B5563(result__5666, sub_dependency__5668);
var array__5671 = result__5666, value__5672 = sub_dependency__5668;
array__5671.unshift(value__5672);
return array__5671}, B5660(dependency__5667))}, dependencies__5665);
return result__5666}
else {var error__5674 = B3846("unable to find-module '", module_name__5661, "'");
throw(error__5674);
return false}}, false);
exports["analyze-dependencies"] = B5660}
