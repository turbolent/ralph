var B3944 = require("ralph/core")
{var B3947, B3948;
B3947 = require("ralph/regexp");
B3948 = require("ralph/compiler/utilities")}
var B3949 = B3944["make-object"], B3950 = B3949("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var B3951 = B3944["%make-function"], B3952 = B3944.concatenate, B3953 = B3944.slice, B3954 = B3944.size, B3955 = B3951("fill_zeros", function B3967 (string__3956)
{var array__3962 = "0000", start__3963 = 0, object__3961 = string__3956, B3965 = ((object__3961 || false).length || 0), end__3964 = (4 - B3965), B3966 = array__3962.slice(start__3963, end__3964);
return B3952(B3966, string__3956)}, false)
var B3969 = B3944.join, B3970 = B3944.map, B3971 = B3944["<"], B3972 = B3944["as-hex-string"], B3973 = B3944["char-code"], B3974 = B3944.get, B3975 = B3944["as-array"], B3976 = B3951("escape_string", function B3995 (string__3977)
{var B3992 = function B3996 (char__3978)
{var B3979 = B3974(B3950, char__3978);
if ($T(B3979))
{var escaped__3980 = B3979;
return B3952("\\", escaped__3980)}
else {var char__3983 = char__3978, code__3981 = char__3983.charCodeAt(0);
if ($T(B3971(31, code__3981, 127)))
return char__3978
else {var number__3985 = code__3981, B3990 = number__3985.toString(16), B3991 = B3955(B3990);
return B3952("\\u", B3991)}}}, arguments__3988 = string__3977, skip__3989 = undefined, B3993 = $SL.call(arguments__3988, (skip__3989 || 0)), B3994 = B3970(B3992, B3993);
return B3969(B3994, "")}, false)
var B3997 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var B3998 = B3949("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
var B3999 = B3944["member?"], B4000 = B3944["has?"], B4001 = B3947.match, B4002 = B3944["as-string"], B4003 = B3951("escape_name", function B4027 (name__4004)
{if ($T(B3999(name__4004, B3997)))
return B3952("R", name__4004)
else {var B4025 = function B4028 (char__4005)
{var object__4009 = B3998, property__4010 = char__4005, B4021 = $HP.call(object__4009,property__4010);
if ($T(B4021))
return B3974(B3998, char__4005)
else {var regexp__4013 = "\\w", string__4014 = char__4005, B4022 = string__4014.match(regexp__4013);
if ($T(B4022))
return char__4005
else {var char__4016 = char__4005, B4023 = char__4016.charCodeAt(0), B4024 = B4002(B4023);
return B3952("Z", B4024)}}}, arguments__4019 = name__4004, skip__4020 = undefined, B4026 = $SL.call(arguments__4019, (skip__4020 || 0)), chars__4006 = B3970(B4025, B4026);
return B3969(chars__4006, "")}}, false)
var trueQ = B3944["true?"], B4029 = B3944.not, B4030 = B3951("valid_js_nameQ", function B4039 (identifier__4031)
{var value__4033 = B3999(identifier__4031, B3997), B4038 = !(trueQ(value__4033));
if ($T(B4038))
{var regexp__4036 = "^\\w+$", string__4037 = identifier__4031;
return string__4037.match(regexp__4036)}}, false)
{var B4094 = $K("message"), B4095 = $S("%this-method"), B4096 = $S("%all-arguments"), B4042 = B3944["instance?"], B4043 = B3944["<array>"], B4044 = B3944["empty?"], B4045 = B3944.signal, B4046 = B3944.make, B4047 = B3944["<error>"], B4048, B4049 = B3944["<number>"], B4050 = B3944["<boolean>"], B4051 = B3944["<string>"], B4052 = B3944["<hash-symbol>"], B4053 = B3944["as-uppercase"], B4054 = B3944["symbol-name"], B4055 = B3944["<keyword>"], B4056 = B3944["<symbol>"], B4057 = B3944["binary=="], B4058 = B3944.description, B4059 = B3951("compile_js", function B4097 (exp__4060, env__4061)
{var B4062 = exp__4060;
if ($T(B4042(B4062, B4043)))
{var sequence__4074 = exp__4060, B4075 = sequence__4074, B4076 = ((B4075 || false).length || 0), B4077 = 0, B4090 = (B4076 === B4077);
if ($T(B4090))
{var error__4079 = B4046(B4047, B4094, "empty expression");
throw(error__4079);
return false}
else return B4048(exp__4060, env__4061)}
else if ($T(B4042(B4062, B4049)))
return B4002(exp__4060)
else if ($T(B4042(B4062, B4050)))
if ($T(exp__4060))
return "true"
else return "false"
else if ($T(B4042(B4062, B4051)))
return B3952("\"", B3976(exp__4060), "\"")
else if ($T(B4042(B4062, B4052)))
{var string__4081 = B4054(exp__4060), B4091 = string__4081.toUpperCase();
return B3952("$", B4091)}
else if ($T(B4042(B4062, B4055)))
return B3952("$K(\"", B4054(exp__4060), "\")")
else if ($T(B4042(B4062, B4056)))
{var B4063 = exp__4060, object1__4084 = B4063, object2__4085 = B4095, B4092 = (object1__4084 === object2__4085);
if ($T(B4092))
return B4059(B3974(env__4061, "current-method"), env__4061)
else {var object1__4088 = B4063, object2__4089 = B4096, B4093 = (object1__4088 === object2__4089);
if ($T(B4093))
return "arguments"
else return B4003(B4054(exp__4060))}}
else return B4058(exp__4060)}, false);
exports["compile-js"] = B4059}
{var B4377 = $S("%infix"), B4378 = $S("%return"), B4379 = $S("%begin"), trueQ = B3944["true?"], B4105, B4106 = B3944.rcurry, B4107 = B3944.rest, B4108 = B3944[">="], B4109 = B3944["push-last"], B4110 = B3944.element, B4111 = B3944["="], B4112 = B3944.second, B4113 = B3948["expression?"], B4114 = B3944.first, B4115 = B3948["generate-symbol"], B4116 = B3944.reduce1, B4117 = B3944.reduce, B4118 = B3948["method?"];
B4048 = B3951("compile_js_exp", function B4380 (exp__4119, env__4120)
{var sequence__4177 = exp__4119, B4316 = sequence__4177[0], name__4121 = B4054(B4316), B4122 = name__4121, object1__4180 = B4122, object2__4181 = "%native-call", B4317 = (object1__4180 === object2__4181);
if ($T(B4317))
{var ____4123 = exp__4119[0], operator__4124 = exp__4119[1], values__4125 = $SL.call(exp__4119, 2);
return B3952(operator__4124, B4105(values__4125, env__4120))}
else {var object1__4184 = B4122, object2__4185 = "%infix", B4318 = (object1__4184 === object2__4185);
if ($T(B4318))
{var ____4126 = exp__4119[0], operator__4127 = exp__4119[1], values__4128 = $SL.call(exp__4119, 2);
return B3952("(", B3969(B3970(B4106(B4059, env__4120), values__4128), B3952(" ", operator__4127, " ")), ")")}
else {var object1__4188 = B4122, object2__4189 = "%plus", B4129 = (object1__4188 === object2__4189), B4319;
if ($T(B4129))
B4319 = B4129
else {var object1__4192 = B4122, object2__4193 = "%minus", B4130 = (object1__4192 === object2__4193);
if ($T(B4130))
B4319 = B4130
else {var object1__4196 = B4122, object2__4197 = "%times", B4131 = (object1__4196 === object2__4197);
if ($T(B4131))
B4319 = B4131
else {var object1__4200 = B4122, object2__4201 = "%divide";
B4319 = (object1__4200 === object2__4201)}}};
if ($T(B4319))
{var B4320 = B4377, B4132 = name__4121, object1__4204 = B4132, object2__4205 = "%plus", B4321 = (object1__4204 === object2__4205), B4325;
if ($T(B4321))
B4325 = "+"
else {var object1__4208 = B4132, object2__4209 = "%minus", B4322 = (object1__4208 === object2__4209);
if ($T(B4322))
B4325 = "-"
else {var object1__4212 = B4132, object2__4213 = "%times", B4323 = (object1__4212 === object2__4213);
if ($T(B4323))
B4325 = "*"
else {var object1__4216 = B4132, object2__4217 = "%divide", B4324 = (object1__4216 === object2__4217);
if ($T(B4324))
B4325 = "/"
else B4325 = false}}};
var B4326 = [B4320, B4325], sequence__4219 = exp__4119, B4327 = sequence__4219.slice(1), B4328 = B3952(B4326, B4327);
return B4048(B4328, env__4120)}
else {var object1__4222 = B4122, object2__4223 = "%array", B4329 = (object1__4222 === object2__4223);
if ($T(B4329))
{var ____4133 = exp__4119[0], elements__4134 = $SL.call(exp__4119, 1);
return B3952("[", B3969(B3970(B4106(B4059, env__4120), elements__4134), ", "), "]")}
else {var object1__4226 = B4122, object2__4227 = "%object", B4330 = (object1__4226 === object2__4227);
if ($T(B4330))
{var sequence__4229 = exp__4119, key_values__4135 = sequence__4229.slice(1), entries__4136 = [], object__4231 = key_values__4135, B4331 = ((object__4231 || false).length || 0), B4137 = (B4331 / 2), i__4138 = 0;
while (true)
{var value__4233 = B4108(i__4138, B4137), B4334 = !(trueQ(value__4233));
if ($T(B4334))
{(function B4381 (i__4139)
{var array__4236 = entries__4136, name__4140 = B4110(key_values__4135, (i__4139 * 2)), B4332;
if ($T(B4030(name__4140)))
B4332 = name__4140
else B4332 = B4059(name__4140, env__4120);
var B4333 = B4059(B4110(key_values__4135, ((i__4139 * 2) + 1)), env__4120), value__4237 = B3952(B4332, ":", B4333);
array__4236.push(value__4237);
return array__4236})(i__4138);
i__4138 = (i__4138 + 1)}
else break};
false;
return B3952("{", B3969(entries__4136, ",\n"), "}")}
else {var object1__4240 = B4122, object2__4241 = "%if", B4335 = (object1__4240 === object2__4241);
if ($T(B4335))
{var ____4141 = exp__4119[0], test__4142 = exp__4119[1], then__4143 = exp__4119[2], else__4144 = exp__4119[3], B4336 = B4059(test__4142, env__4120), B4337 = B4059(then__4143, env__4120), B4338;
if ($T(else__4144))
{var value__4243 = B4111(else__4144, [B4378, false]);
B4338 = !(trueQ(value__4243))}
else B4338 = false;
var B4339;
if ($T(B4338))
B4339 = B3952("\nelse ", B4059(else__4144, env__4120))
else B4339 = "";
return B3952("if (", B4336, ")\n", B4337, B4339)}
else {var object1__4246 = B4122, object2__4247 = "%while", B4340 = (object1__4246 === object2__4247);
if ($T(B4340))
{var ____4145 = exp__4119[0], test__4146 = exp__4119[1], body__4147 = exp__4119[2];
return B3952("while (", B4059(test__4146, env__4120), ")\n", B4059(body__4147, env__4120))}
else {var object1__4250 = B4122, object2__4251 = "%try", B4341 = (object1__4250 === object2__4251);
if ($T(B4341))
{var ____4148 = exp__4119[0], body__4149 = exp__4119[1], var__4150 = exp__4119[2], catch__4151 = exp__4119[3];
return B3952("try {", B4059(body__4149, env__4120), "}\n", "catch (", B4059(var__4150, env__4120), ")\n", "{", B4059(catch__4151, env__4120), "}")}
else {var object1__4254 = B4122, object2__4255 = "%return", B4342 = (object1__4254 === object2__4255);
if ($T(B4342))
{var sequence__4257 = exp__4119, B4343 = sequence__4257[1], B4344 = B4059(B4343, env__4120);
return B3952("return ", B4344)}
else {var object1__4260 = B4122, object2__4261 = "%begin", B4345 = (object1__4260 === object2__4261);
if ($T(B4345))
{var B4346 = B4106(B4059, env__4120), sequence__4263 = exp__4119, B4347 = sequence__4263.slice(1), B4348 = B3970(B4346, B4347), B4349 = B3969(B4348, ";\n");
return B3952("{", B4349, "}")}
else {var object1__4266 = B4122, object2__4267 = "%set", B4350 = (object1__4266 === object2__4267);
if ($T(B4350))
{var ____4152 = exp__4119[0], var__4153 = exp__4119[1], value__4154 = exp__4119[2];
return B3952(B4059(var__4153, env__4120), " = ", B4059(value__4154, env__4120))}
else {var object1__4270 = B4122, object2__4271 = "%method", B4351 = (object1__4270 === object2__4271);
if ($T(B4351))
{var ____4155 = exp__4119[0], arguments__4156 = exp__4119[1], body__4157 = exp__4119[2], name__4158 = B4115(), previous_method__4159 = B3974(env__4120, "current-method"), B4352 = B4059(name__4158, env__4120), B4353 = B3969(B3970(B4106(B4059, env__4120), arguments__4156), ", ");
env__4120["current-method"] = name__4158;
var bodyT__4160 = B4059(body__4157, env__4120);
env__4120["current-method"] = previous_method__4159;
var B4354;
if ($T(B4113(body__4157)))
{var sequence__4275 = body__4157, object1__4276 = sequence__4275[0], object2__4277 = B4379;
B4354 = (object1__4276 === object2__4277)}
else B4354 = false;
var B4355;
if ($T(B4354))
B4355 = bodyT__4160
else B4355 = B3952("{", bodyT__4160, "}");
return B3952("function ", B4352, " (", B4353, ")\n", B4355)}
else {var object1__4280 = B4122, object2__4281 = "%var", B4356 = (object1__4280 === object2__4281);
if ($T(B4356))
{var ____4161 = exp__4119[0], bindings__4162 = $SL.call(exp__4119, 1);
return B3952("var ", B3969(B3970(function B4382 (binding__4163)
{var B4164;
if ($T(B4042(binding__4163, B4043)))
B4164 = binding__4163
else B4164 = [binding__4163, false];
var var__4165 = B4164[0], value__4166 = B4164[1], B4357 = B4059(var__4165, env__4120), B4358;
if ($T(value__4166))
B4358 = B3952(" = ", B4059(value__4166, env__4120))
else B4358 = "";
return B3952(B4357, B4358)}, bindings__4162), ", "))}
else {var object1__4284 = B4122, object2__4285 = "%native", B4359 = (object1__4284 === object2__4285);
if ($T(B4359))
{var function__4296 = B3952, B4360 = function B4383 (e__4167)
{if ($T(B4042(e__4167, B4056)))
return B4059(e__4167)
else return B4002(e__4167)}, sequence__4295 = exp__4119, B4361 = sequence__4295.slice(1), values__4297 = B3970(B4360, B4361), B4298 = values__4297, B4362 = B4298[0], B4299 = values__4297, B4363 = B4299.slice(1);
return B4117(function__4296, B4362, B4363)}
else {var object1__4302 = B4122, object2__4303 = "%native-name", B4364 = (object1__4302 === object2__4303);
if ($T(B4364))
{var sequence__4305 = exp__4119, B4365 = sequence__4305[1], B4366 = B4003(B4365);
return B3952("\"", B4366, "\"")}
else {var object1__4308 = B4122, object2__4309 = "%get-property", B4367 = (object1__4308 === object2__4309);
if ($T(B4367))
{var ____4168 = exp__4119[0], object__4169 = exp__4119[1], properties__4170 = $SL.call(exp__4119, 2), B4368;
if ($T(B4042(object__4169, B4049)))
B4368 = B3952("(", B4059(object__4169, env__4120), ")")
else B4368 = B4059(object__4169, env__4120);
var B4371 = B4117(function B4384 (result__4171, property__4172)
{var B4369;
if ($T(B4042(property__4172, B4051)))
B4369 = B4030(property__4172)
else B4369 = false;
var B4370;
if ($T(B4369))
B4370 = B3952(".", property__4172)
else B4370 = B3952("[", B4059(property__4172, env__4120), "]");
return B3952(result__4171, B4370)}, "", properties__4170);
return B3952(B4368, B4371)}
else {var object1__4312 = B4122, object2__4313 = "%symbol", B4372 = (object1__4312 === object2__4313);
if ($T(B4372))
{var sequence__4315 = exp__4119, B4373 = sequence__4315.slice(1), B4374 = B4105(B4373, env__4120);
return B3952("$S", B4374)}
else {var function__4173 = exp__4119[0], values__4174 = $SL.call(exp__4119, 1), functionT__4175 = B4059(function__4173, env__4120), B4375;
if ($T(B4118(function__4173)))
B4375 = B3952("(", functionT__4175, ")")
else B4375 = functionT__4175;
var B4376 = B4105(values__4174, env__4120);
return B3952(B4375, B4376)}}}}}}}}}}}}}}}}}}, false)}
B4105 = B3951("compile_js_call", function B4387 (values__4385, env__4386)
{return B3952("(", B3969(B3970(B4106(B4059, env__4386), values__4385), ", "), ")")}, false)
