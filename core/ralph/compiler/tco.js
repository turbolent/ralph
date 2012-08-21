var B3931 = require("ralph/core")
{
var B3934,
B3935;
B3934 = require("ralph/compiler/utilities");
B3935 = require("ralph/compiler/free-variables")}
{
var B4143 = $S("%if"),
B4144 = $S("%native"),
B4145 = $S("%begin"),
B4146 = $S("%set"),
B4147 = $S("%get-property"),
B4148 = $S("%all-arguments"),
B4149 = $S("%array"),
dec = B3931.dec,
optimize_tail_callsN__3972,
trueQ = B3931["true?"],
B3946 = B3931["%make-function"],
B3947 = B3931["instance?"],
B3948 = B3931["<array>"],
B3949 = B3931["binary=="],
B3950 = B3931["last-setter"],
B3951 = B3931.identity,
B3952 = B3931.get,
B3953 = B3931["symbol-name"],
B3954 = B3931.second,
B3955 = B3931.last,
B3956 = B3931["second-setter"],
B3957 = B3934["expression?"],
B3958 = B3931.first,
B3959 = B3931.not,
B3960 = B3931["get-setter"],
B3961 = B3931[">="],
B3962 = B3931["push-last"],
B3963 = B3931.element,
B3964 = B3931.size,
B3965 = B3931.concatenate,
B3966,
B3967 = B3931.rest,
B3968 = B3934["generate-symbol"],
B3969 = B3931.map,
B3970 = B3931.rcurry,
B3971 = B3946("optimize_tail_callsN", function optimize_tail_callsN__3972 (exp__3973, env__3974)
{if ($T(B3947(exp__3973, B3948)))
{
var sequence__4007 = exp__3973,
B4124 = sequence__4007[0],
B3975 = B3953(B4124),
object1__4010 = B3975,
object2__4011 = "%method",
B4125 = (object1__4010 === object2__4011);
if ($T(B4125))
{
var last_method__3976 = B3952(env__3974, "current-method");
env__3974["current-method"] = exp__3973;
var array__4019 = exp__3973,
B4020 = array__4019,
B4021 = ((B4020 || false).length || 0),
B4126 = (B4021 - 1),
B4127 = array__4019[B4126],
result__3977 = optimize_tail_callsN__3972(B4127, env__3974),
sequence__4023 = exp__3973,
B4128 = sequence__4023[1],
name__3978 = B3953(B4128),
B3979 = B3952(env__3974, "tco-wrappers", name__3978),
wrapper__3980;
if ($T(B3979))
wrapper__3980 = B3979
else
wrapper__3980 = B3951;
var array__4026 = exp__3973,
value__4027 = wrapper__3980(result__3977);
array__4026[dec(B3964(array__4026), 1)] = value__4027;
env__3974["current-method"] = last_method__3976;
return exp__3973}
else
{
var object1__4030 = B3975,
object2__4031 = "%begin",
B3981 = (object1__4030 === object2__4031),
B4129;
if ($T(B3981))
B4129 = B3981
else
{
var object1__4034 = B3975,
object2__4035 = "%bind",
B3982 = (object1__4034 === object2__4035);
if ($T(B3982))
B4129 = B3982
else
{
var object1__4038 = B3975,
object2__4039 = "%while",
B3983 = (object1__4038 === object2__4039);
if ($T(B3983))
B4129 = B3983
else
{
var object1__4042 = B3975,
object2__4043 = "%set";
B4129 = (object1__4042 === object2__4043)}}};
if ($T(B4129))
{
var array__4056 = exp__3973,
array__4053 = exp__3973,
B4054 = array__4053,
B4055 = ((B4054 || false).length || 0),
B4130 = (B4055 - 1),
B4131 = array__4053[B4130],
value__4057 = optimize_tail_callsN__3972(B4131, env__3974);
array__4056[dec(B3964(array__4056), 1)] = value__4057;
return exp__3973}
else
{
var object1__4060 = B3975,
object2__4061 = "%if",
B4132 = (object1__4060 === object2__4061);
if ($T(B4132))
{
var ____3984 = exp__3973[0],
test__3985 = exp__3973[1],
then__3986 = exp__3973[2],
else__3987 = exp__3973[3];
return [B4143, test__3985, optimize_tail_callsN__3972(then__3986, env__3974), optimize_tail_callsN__3972(else__3987, env__3974)]}
else
{
var object1__4064 = B3975,
object2__4065 = "%try",
B4133 = (object1__4064 === object2__4065);
if ($T(B4133))
{
var array__4070 = exp__3973,
sequence__4069 = exp__3973,
B4134 = sequence__4069[1],
value__4071 = optimize_tail_callsN__3972(B4134, exp__3973);
array__4070[1] = value__4071;
var array__4084 = exp__3973,
array__4081 = exp__3973,
B4082 = array__4081,
B4083 = ((B4082 || false).length || 0),
B4135 = (B4083 - 1),
B4136 = array__4081[B4135],
value__4085 = optimize_tail_callsN__3972(B4136, env__3974);
array__4084[dec(B3964(array__4084), 1)] = value__4085;
return exp__3973}
else
{
var object1__4088 = B3975,
object2__4089 = "%return",
B4137 = (object1__4088 === object2__4089);
if ($T(B4137))
{
var B3988 = env__3974,
current_method__3989 = B3988["current-method"],
____3990 = current_method__3989[0],
method_name__3991 = current_method__3989[1],
arguments__3992 = current_method__3989[2],
body__3993 = current_method__3989[3],
sequence__4091 = exp__3973,
value__3994 = sequence__4091[1],
name__3995 = B3953(method_name__3991),
B4138;
if ($T(B3957(value__3994)))
{
var sequence__4095 = value__3994,
object1__4096 = sequence__4095[0],
object2__4097 = method_name__3991;
B4138 = (object1__4096 === object2__4097)}
else
B4138 = false;
if ($T(B4138))
{
var B3996 = B3952(env__3974, "tco-labels", name__3995),
label__3997;
if ($T(B3996))
label__3997 = B3996
else
label__3997 = B3960(env__3974, "tco-labels", name__3995, B3968());
var sequence__4099 = value__3994,
new_values__3998 = sequence__4099.slice(1),
value__4101 = B3952(env__3974, "tco-wrappers", name__3995),
B4139 = !(trueQ(value__4101));
if ($T(B4139))
B3960(env__3974, "tco-wrappers", name__3995, function B3999 (exp__4000)
{return [B4144, label__3997, ":while(true)", [B4145, exp__4000, [B4144, "break"]]]});
var assignments__4001 = [],
object__4103 = arguments__3992,
B4002 = ((object__4103 || false).length || 0),
i__4003 = 0;
while (true)
{
var value__4105 = B3961(i__4003, B4002),
B4140 = !(trueQ(value__4105));
if ($T(B4140))
{
(function B4004 (i__4005)
{
var array__4108 = assignments__4001,
value__4109 = [B4146, B3963(arguments__3992, i__4005), [B4147, B4148, i__4005]];
array__4108.push(value__4109);
return array__4108})(i__4003);
i__4003 = (i__4003 + 1)}
else
break};
false;
return B3965([B4145, [B4146, B4148, B3966(B3965([B4149], new_values__3998), env__3974)]], assignments__4001, [[B4144, "continue ", label__3997]])}
else
{
var array__4122 = exp__3973,
array__4119 = exp__3973,
B4120 = array__4119,
B4121 = ((B4120 || false).length || 0),
B4141 = (B4121 - 1),
B4142 = array__4119[B4141],
value__4123 = optimize_tail_callsN__3972(B4142, env__3974);
array__4122[dec(B3964(array__4122), 1)] = value__4123;
return exp__3973}}
else
return B3969(B3970(optimize_tail_callsN__3972, env__3974), exp__3973)}}}}}
else
return exp__3973}, false);
exports["optimize-tail-calls!"] = B3971}
{
var B4166 = $S("%method"),
B4167 = $S("%return"),
close_free_variables__4155,
B4150 = B3931.reduce,
B4151 = B3931["set-subtract!"],
B4152 = B3935["find-free-variables"],
B4153 = B3934["environment-definitions"],
B4154 = B3934["*defined*"];
B3966 = B3946("close_free_variables", function close_free_variables__4155 (exp__4156, env__4157)
{if ($T(B3947(exp__4156, B3948)))
{
var B4165;
if ($T(B3957(exp__4156)))
{
var sequence__4162 = exp__4156,
object1__4163 = sequence__4162[0],
object2__4164 = B4166;
B4165 = (object1__4163 === object2__4164)}
else
B4165 = false;
if ($T(B4165))
{
var variables__4158 = B4150(B4151, B4152(exp__4156), [B4153(env__4157), B4154]);
return B3965([[B4166, B3968(), variables__4158, [B4167, exp__4156]]], variables__4158)}
else
return B3969(B3970(close_free_variables__4155, env__4157), exp__4156)}
else
return exp__4156}, false)}
