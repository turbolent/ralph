var B3937 = require("ralph/core")
{
var B3940,
B3941;
B3940 = require("ralph/compiler/utilities");
B3941 = require("ralph/compiler/free-variables")}
{
var B4170 = $S("%if"),
B4171 = $S("%native"),
B4172 = $S("%begin"),
B4173 = $S("%set"),
B4174 = $S("%get-property"),
B4175 = $S("%all-arguments"),
B4176 = $S("%array"),
dec = B3937.dec,
optimize_tail_callsN__3976,
trueQ = B3937["true?"],
B3950 = B3937["%make-function"],
B3951 = B3937["instance?"],
B3952 = B3937["<array>"],
B3953 = B3937["binary=="],
B3954 = B3937["last-setter"],
B3955 = B3937.identity,
B3956 = B3937.get,
B3957 = B3937["symbol-name"],
B3958 = B3937.second,
B3959 = B3937.last,
B3960 = B3937["second-setter"],
B3961 = B3937.concatenate,
B3962 = B3937.first,
B3963 = B3937.map,
B3964 = B3937.rcurry,
B3965 = B3937.rest,
B3966 = B3940["expression?"],
B3967 = B3937.not,
B3968 = B3937["get-setter"],
B3969 = B3937[">="],
B3970 = B3937["push-last"],
B3971 = B3937.element,
B3972 = B3937.size,
B3973,
B3974 = B3940["generate-symbol"],
B3975 = B3950("optimize_tail_callsN", function optimize_tail_callsN__3976 (exp__3977, env__3978)
{if ($T(B3951(exp__3977, B3952)))
{
var sequence__4012 = exp__3977,
B4143 = sequence__4012[0],
B3979 = B3957(B4143),
object1__4015 = B3979,
object2__4016 = "%method",
B4144 = (object1__4015 === object2__4016);
if ($T(B4144))
{
var last_method__3980 = B3956(env__3978, "current-method");
env__3978["current-method"] = exp__3977;
var array__4024 = exp__3977,
B4025 = array__4024,
B4026 = ((B4025 || false).length || 0),
B4145 = (B4026 - 1),
B4146 = array__4024[B4145],
result__3981 = optimize_tail_callsN__3976(B4146, env__3978),
sequence__4028 = exp__3977,
B4147 = sequence__4028[1],
name__3982 = B3957(B4147),
B3983 = B3956(env__3978, "tco-wrappers", name__3982),
wrapper__3984;
if ($T(B3983))
wrapper__3984 = B3983
else
wrapper__3984 = B3955;
var array__4031 = exp__3977,
value__4032 = wrapper__3984(result__3981);
array__4031[dec(B3972(array__4031), 1)] = value__4032;
env__3978["current-method"] = last_method__3980;
return exp__3977}
else
{
var object1__4035 = B3979,
object2__4036 = "%bind",
B4148 = (object1__4035 === object2__4036);
if ($T(B4148))
{
var ____3985 = exp__3977[0],
binding__3986 = exp__3977[1],
body__3987 = exp__3977[2],
array__4041 = binding__3986,
sequence__4040 = binding__3986,
B4149 = sequence__4040[1],
value__4042 = optimize_tail_callsN__3976(B4149, env__3978);
array__4041[1] = value__4042;
var array__4045 = exp__3977,
value__4046 = optimize_tail_callsN__3976(body__3987, env__3978);
array__4045[dec(B3972(array__4045), 1)] = value__4046;
return exp__3977}
else
{
var object1__4049 = B3979,
object2__4050 = "%begin",
B3988 = (object1__4049 === object2__4050),
B4150;
if ($T(B3988))
B4150 = B3988
else
{
var object1__4053 = B3979,
object2__4054 = "%while";
B4150 = (object1__4053 === object2__4054)};
if ($T(B4150))
{
var sequence__4056 = exp__3977,
B4151 = sequence__4056[0],
B4152 = [B4151],
B4153 = B3964(optimize_tail_callsN__3976, env__3978),
sequence__4058 = exp__3977,
B4154 = sequence__4058.slice(1),
B4155 = B3963(B4153, B4154);
return B3961(B4152, B4155)}
else
{
var object1__4061 = B3979,
object2__4062 = "%set",
B4156 = (object1__4061 === object2__4062);
if ($T(B4156))
{
var array__4075 = exp__3977,
array__4072 = exp__3977,
B4073 = array__4072,
B4074 = ((B4073 || false).length || 0),
B4157 = (B4074 - 1),
B4158 = array__4072[B4157],
value__4076 = optimize_tail_callsN__3976(B4158, env__3978);
array__4075[dec(B3972(array__4075), 1)] = value__4076;
return exp__3977}
else
{
var object1__4079 = B3979,
object2__4080 = "%if",
B4159 = (object1__4079 === object2__4080);
if ($T(B4159))
{
var ____3989 = exp__3977[0],
test__3990 = exp__3977[1],
then__3991 = exp__3977[2],
else__3992 = exp__3977[3];
return [B4170, test__3990, optimize_tail_callsN__3976(then__3991, env__3978), optimize_tail_callsN__3976(else__3992, env__3978)]}
else
{
var object1__4083 = B3979,
object2__4084 = "%try",
B4160 = (object1__4083 === object2__4084);
if ($T(B4160))
{
var array__4089 = exp__3977,
sequence__4088 = exp__3977,
B4161 = sequence__4088[1],
value__4090 = optimize_tail_callsN__3976(B4161, env__3978);
array__4089[1] = value__4090;
var array__4103 = exp__3977,
array__4100 = exp__3977,
B4101 = array__4100,
B4102 = ((B4101 || false).length || 0),
B4162 = (B4102 - 1),
B4163 = array__4100[B4162],
value__4104 = optimize_tail_callsN__3976(B4163, env__3978);
array__4103[dec(B3972(array__4103), 1)] = value__4104;
return exp__3977}
else
{
var object1__4107 = B3979,
object2__4108 = "%return",
B4164 = (object1__4107 === object2__4108);
if ($T(B4164))
{
var B3993 = env__3978,
current_method__3994 = B3993["current-method"],
____3995 = current_method__3994[0],
method_name__3996 = current_method__3994[1],
arguments__3997 = current_method__3994[2],
body__3998 = current_method__3994[3],
sequence__4110 = exp__3977,
value__3999 = sequence__4110[1],
name__4000 = B3957(method_name__3996),
B4165;
if ($T(B3966(value__3999)))
{
var sequence__4114 = value__3999,
object1__4115 = sequence__4114[0],
object2__4116 = method_name__3996;
B4165 = (object1__4115 === object2__4116)}
else
B4165 = false;
if ($T(B4165))
{
var B4001 = B3956(env__3978, "tco-labels", name__4000),
label__4002;
if ($T(B4001))
label__4002 = B4001
else
label__4002 = B3968(env__3978, "tco-labels", name__4000, B3974());
var sequence__4118 = value__3999,
new_values__4003 = sequence__4118.slice(1),
value__4120 = B3956(env__3978, "tco-wrappers", name__4000),
B4166 = !(trueQ(value__4120));
if ($T(B4166))
B3968(env__3978, "tco-wrappers", name__4000, function B4004 (exp__4005)
{return [B4171, label__4002, ":while(true)", [B4172, exp__4005, [B4171, "break"]]]});
var assignments__4006 = [],
object__4122 = arguments__3997,
B4007 = ((object__4122 || false).length || 0),
i__4008 = 0;
while (true)
{
var value__4124 = B3969(i__4008, B4007),
B4167 = !(trueQ(value__4124));
if ($T(B4167))
{
(function B4009 (i__4010)
{
var array__4127 = assignments__4006,
value__4128 = [B4173, B3971(arguments__3997, i__4010), [B4174, B4175, i__4010]];
array__4127.push(value__4128);
return array__4127})(i__4008);
i__4008 = (i__4008 + 1)}
else
break};
false;
return B3961([B4172, [B4173, B4175, B3973(B3961([B4176], new_values__4003), env__3978)]], assignments__4006, [[B4171, "continue ", label__4002]])}
else
{
var array__4141 = exp__3977,
array__4138 = exp__3977,
B4139 = array__4138,
B4140 = ((B4139 || false).length || 0),
B4168 = (B4140 - 1),
B4169 = array__4138[B4168],
value__4142 = optimize_tail_callsN__3976(B4169, env__3978);
array__4141[dec(B3972(array__4141), 1)] = value__4142;
return exp__3977}}
else
return B3963(B3964(optimize_tail_callsN__3976, env__3978), exp__3977)}}}}}}}
else
return exp__3977}, false);
exports["optimize-tail-calls!"] = B3975}
{
var B4193 = $S("%method"),
B4194 = $S("%return"),
close_free_variables__4182,
B4177 = B3937.reduce,
B4178 = B3937["set-subtract!"],
B4179 = B3941["find-free-variables"],
B4180 = B3940["environment-definitions"],
B4181 = B3940["*defined*"];
B3973 = B3950("close_free_variables", function close_free_variables__4182 (exp__4183, env__4184)
{if ($T(B3951(exp__4183, B3952)))
{
var B4192;
if ($T(B3966(exp__4183)))
{
var sequence__4189 = exp__4183,
object1__4190 = sequence__4189[0],
object2__4191 = B4193;
B4192 = (object1__4190 === object2__4191)}
else
B4192 = false;
if ($T(B4192))
{
var variables__4185 = B4177(B4178, B4179(exp__4183), [B4180(env__4184), B4181]);
return B3961([[B4193, B3974(), variables__4185, [B4194, exp__4183]]], variables__4185)}
else
return B3963(B3964(close_free_variables__4182, env__4184), exp__4183)}
else
return exp__4183}, false)}
