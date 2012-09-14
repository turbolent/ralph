{
var B1146;
false;
B1146 = require("ralph/core")}
false
{
var LdateG__1147;
false;
LdateG__1147 = Date;
exports["<date>"] = LdateG__1147}
{
var TsettersT__1148;
false;
TsettersT__1148 = [["timestamp", "setTime"], ["day", "setDate"], ["month", "setMonth"], ["year", "setYear"], ["minutes", "setMinutes"], ["seconds", "setSeconds"], ["hours", "setHours"], ["milliseconds", "setMilliseconds"]]}
{
var Mmake_method__1157 = B1146["%make-method"],
not__1158 = B1146.not,
anyQ__1159 = B1146["any?"],
emptyQ__1160 = B1146["empty?"],
get__1161 = B1146.get,
rest__1162 = B1146.rest,
first__1163 = B1146.first,
as_object__1164 = B1146["as-object"],
initialize__1165;
false;
initialize__1165 = Mmake_method__1157("initialize", function B1149__1166 (date__1167)
{
var options__1168 = $SL.call(arguments, 1),
arguments__1169 = as_object__1164(options__1168),
B1150__1170 = TsettersT__1148,
B1151__1171,
B1153__1172,
B1152__1173 = [B1150__1170];
while (true)
{
var B1154__1174 = B1151__1171,
B1182;
if ($T(B1154__1174))
{B1182 = B1154__1174}
else
B1182 = anyQ__1159(emptyQ__1160, B1152__1173);
var B1183 = not__1158(B1182);
if ($T(B1183))
{
var setter__1175 = first__1163(B1150__1170);
(function B1155__1176 (setter__1177)
{
var keyword__1178 = setter__1177[0],
function__1179 = setter__1177[1],
B1156__1180 = get__1161(arguments__1169, keyword__1178);
if ($T(B1156__1180))
{
var value__1181 = B1156__1180;
return date__1167[function__1179](value__1181)}})(setter__1175);
B1150__1170 = rest__1162(B1150__1170);
B1152__1173 = [B1150__1170]}
else
break};
return B1153__1172}, false, LdateG__1147, initialize__1165)}
{
var Mmake_function__1184 = B1146["%make-function"],
locale_time_string__1185;
false;
locale_time_string__1185 = Mmake_function__1184("locale_time_string", function locale_time_string__1186 (date__1187)
{return date__1187.toLocaleTimeString()}, false);
exports["locale-time-string"] = locale_time_string__1185}
