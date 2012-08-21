var B1120 = require("ralph/core")
{
var B1123,
B1124;
B1123 = require("ralph/compiler/utilities");
B1124 = require("ralph/compiler/free-variables")}
{
var B1196 = $S("%if"),
B1197 = $S("%native"),
B1198 = $S("%begin"),
B1199 = $S("%set"),
B1200 = $S("%get-property"),
B1201 = $S("%all-arguments"),
B1202 = $S("%array"),
optimize_tail_callsN__1159,
B1133 = B1120["%make-function"],
B1134 = B1120["instance?"],
B1135 = B1120["<array>"],
B1136 = B1120["binary=="],
B1137 = B1120["last-setter"],
B1138 = B1120.identity,
B1139 = B1120.get,
B1140 = B1120["symbol-name"],
B1141 = B1120.second,
B1142 = B1120.last,
B1143 = B1120["second-setter"],
B1144 = B1120.concatenate,
B1145 = B1120.first,
B1146 = B1120.map,
B1147 = B1120.rcurry,
B1148 = B1120.rest,
B1149 = B1123["expression?"],
B1150 = B1120.not,
B1151 = B1120["get-setter"],
B1152 = B1120[">="],
B1153 = B1120["push-last"],
B1154 = B1120.element,
B1155 = B1120.size,
B1156,
B1157 = B1123["generate-symbol"],
B1158 = B1133("optimize_tail_callsN", function optimize_tail_callsN__1159 (exp__1160, env__1161)
{if ($T(B1134(exp__1160, B1135)))
{
var B1162 = B1140(B1145(exp__1160));
if ($T(B1136(B1162, "%method")))
{
var last_method__1163 = B1139(env__1161, "current-method");
env__1161["current-method"] = exp__1160;
var result__1164 = optimize_tail_callsN__1159(B1142(exp__1160), env__1161),
name__1165 = B1140(B1141(exp__1160)),
B1166 = B1139(env__1161, "tco-wrappers", name__1165),
wrapper__1167;
if ($T(B1166))
wrapper__1167 = B1166
else
wrapper__1167 = B1138;
B1137(exp__1160, wrapper__1167(result__1164));
env__1161["current-method"] = last_method__1163;
return exp__1160}
else
if ($T(B1136(B1162, "%bind")))
{
var ____1168 = exp__1160[0],
binding__1169 = exp__1160[1],
body__1170 = exp__1160[2];
B1143(binding__1169, optimize_tail_callsN__1159(B1141(binding__1169), env__1161));
B1137(exp__1160, optimize_tail_callsN__1159(body__1170, env__1161));
return exp__1160}
else
{
var B1171 = B1136(B1162, "%begin"),
B1194;
if ($T(B1171))
B1194 = B1171
else
B1194 = B1136(B1162, "%while");
if ($T(B1194))
return B1144([B1145(exp__1160)], B1146(B1147(optimize_tail_callsN__1159, env__1161), B1148(exp__1160)))
else
if ($T(B1136(B1162, "%set")))
{
B1137(exp__1160, optimize_tail_callsN__1159(B1142(exp__1160), env__1161));
return exp__1160}
else
if ($T(B1136(B1162, "%if")))
{
var ____1172 = exp__1160[0],
test__1173 = exp__1160[1],
then__1174 = exp__1160[2],
else__1175 = exp__1160[3];
return [B1196, test__1173, optimize_tail_callsN__1159(then__1174, env__1161), optimize_tail_callsN__1159(else__1175, env__1161)]}
else
if ($T(B1136(B1162, "%try")))
{
B1143(exp__1160, optimize_tail_callsN__1159(B1141(exp__1160), env__1161));
B1137(exp__1160, optimize_tail_callsN__1159(B1142(exp__1160), env__1161));
return exp__1160}
else
if ($T(B1136(B1162, "%return")))
{
var B1176 = env__1161,
current_method__1177 = B1176["current-method"],
____1178 = current_method__1177[0],
method_name__1179 = current_method__1177[1],
arguments__1180 = current_method__1177[2],
body__1181 = current_method__1177[3],
value__1182 = B1141(exp__1160),
name__1183 = B1140(method_name__1179),
B1195;
if ($T(B1149(value__1182)))
B1195 = B1136(B1145(value__1182), method_name__1179)
else
B1195 = false;
if ($T(B1195))
{
var B1184 = B1139(env__1161, "tco-labels", name__1183),
label__1185;
if ($T(B1184))
label__1185 = B1184
else
label__1185 = B1151(env__1161, "tco-labels", name__1183, B1157());
var new_values__1186 = B1148(value__1182);
if ($T(B1150(B1139(env__1161, "tco-wrappers", name__1183))))
B1151(env__1161, "tco-wrappers", name__1183, function B1187 (exp__1188)
{return [B1197, label__1185, ":while(true)", [B1198, exp__1188, [B1197, "break"]]]});
var assignments__1189 = [],
B1190 = B1155(arguments__1180),
i__1191 = 0;
while ($T(B1150(B1152(i__1191, B1190))))
{
(function B1192 (i__1193)
{return B1153(assignments__1189, [B1199, B1154(arguments__1180, i__1193), [B1200, B1201, i__1193]])})(i__1191);
i__1191 = (i__1191 + 1)};
false;
return B1144([B1198, [B1199, B1201, B1156(B1144([B1202], new_values__1186), env__1161)]], assignments__1189, [[B1197, "continue ", label__1185]])}
else
{
B1137(exp__1160, optimize_tail_callsN__1159(B1142(exp__1160), env__1161));
return exp__1160}}
else
return B1146(B1147(optimize_tail_callsN__1159, env__1161), exp__1160)}}
else
return exp__1160}, false);
exports["optimize-tail-calls!"] = B1158}
{
var B1213 = $S("%method"),
B1214 = $S("%return"),
close_free_variables__1208,
B1203 = B1120.reduce,
B1204 = B1120["set-subtract!"],
B1205 = B1124["find-free-variables"],
B1206 = B1123["environment-definitions"],
B1207 = B1123["*defined*"];
B1156 = B1133("close_free_variables", function close_free_variables__1208 (exp__1209, env__1210)
{if ($T(B1134(exp__1209, B1135)))
{
var B1212;
if ($T(B1149(exp__1209)))
B1212 = B1136(B1145(exp__1209), B1213)
else
B1212 = false;
if ($T(B1212))
{
var variables__1211 = B1203(B1204, B1205(exp__1209), [B1206(env__1210), B1207]);
return B1144([[B1213, B1157(), variables__1211, [B1214, exp__1209]]], variables__1211)}
else
return B1146(B1147(close_free_variables__1208, env__1210), exp__1209)}
else
return exp__1209}, false)}
