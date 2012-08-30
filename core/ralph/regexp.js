{
var B1132;
false;
B1132 = require("ralph/core")}
false
{
var LregexpG__1133;
false;
LregexpG__1133 = RegExp;
exports["<regexp>"] = LregexpG__1133}
{
var Mmake_method__1137 = B1132["%make-method"],
concatenate__1138 = B1132.concatenate,
Mkeys__1139 = B1132["%keys"],
initialize__1140;
false;
initialize__1140 = Mmake_method__1137("initialize", function B1141 (regexp__1142)
{
var B1143 = $SL.call(arguments, 1),
B1144 = Mkeys__1139(B1143, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}),
pattern__1145 = B1144.pattern,
globalQ__1146 = B1144["global?"],
ignore_caseQ__1147 = B1144["ignore-case?"],
multilineQ__1148 = B1144["multiline?"];
if ($T(pattern__1145))
{
var B1150;
if ($T(globalQ__1146))
{B1150 = "g"}
else
B1150 = "";
var B1151;
if ($T(ignore_caseQ__1147))
{B1151 = "i"}
else
B1151 = "";
var B1152;
if ($T(multilineQ__1148))
{B1152 = "m"}
else
B1152 = "";
var flags__1149 = concatenate__1138(B1150, B1151, B1152);
return regexp__1142.compile(pattern__1145)}}, false, LregexpG__1133, initialize__1140)}
{
var Mmake_function__1153 = B1132["%make-function"],
G__1154 = B1132[">"],
find__1155;
false;
find__1155 = Mmake_function__1153("find", function find__1156 (regexp__1157, string__1158)
{
var position__1159 = string__1158.search(regexp__1157);
if ($T(G__1154(position__1159, -1)))
{return position__1159}}, false)}
{
var match__1160;
false;
match__1160 = Mmake_function__1153("match", function match__1161 (regexp__1162, string__1163)
{return string__1163.match(regexp__1162)}, false);
exports.match = match__1160}
