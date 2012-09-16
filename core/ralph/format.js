{
var B1183;
false;
B1183 = require("ralph/core")}
{
var B1185;
false;
B1185 = require("ralph/stream")}
{
var Mmake_function__1186 = B1183["%make-function"],
as_string__1187 = B1183["as-string"],
format_integer__1188;
false;
format_integer__1188 = Mmake_function__1186("format_integer", function format_integer__1189 (number__1190)
{return as_string__1187(number__1190)}, false)}
{
var B1228 = $K("message"),
binaryEE__1194 = B1183["binary=="],
description__1195 = B1183.description,
signal__1196 = B1183.signal,
make__1197 = B1183.make,
LerrorG__1198 = B1183["<error>"],
concatenate__1199 = B1183.concatenate,
as_lowercase__1200 = B1183["as-lowercase"],
not__1201 = B1183.not,
emptyQ__1202 = B1183["empty?"],
G__1203 = B1183[">"],
stream_write__1204 = B1185["stream-write"],
slice__1205 = B1183.slice,
second__1206 = B1183.second,
element__1207 = B1183.element,
position__1208 = B1183.position,
format__1209;
false;
format__1209 = Mmake_function__1186("format", function format__1210 (stream__1211, control_string__1212)
{
var args__1213 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1214 = function dispatch__1215 (char__1216, arg__1217)
{
var B1191__1218 = as_lowercase__1200(char__1216),
B1192__1219 = binaryEE__1194(B1191__1218, "s"),
B1226;
if ($T(B1192__1219))
{B1226 = B1192__1219}
else
B1226 = binaryEE__1194(B1191__1218, "c");
if ($T(B1226))
{return arg__1217}
else
if ($T(binaryEE__1194(B1191__1218, "=")))
{
var B1193__1220 = description__1195(arg__1217);
if ($T(B1193__1220))
{return B1193__1220}
else
return ""}
else
if ($T(binaryEE__1194(B1191__1218, "b")))
{return format_integer__1188(arg__1217, 2)}
else
if ($T(binaryEE__1194(B1191__1218, "o")))
{return format_integer__1188(arg__1217, 8)}
else
if ($T(binaryEE__1194(B1191__1218, "d")))
{return format_integer__1188(arg__1217, 10)}
else
if ($T(binaryEE__1194(B1191__1218, "x")))
{return format_integer__1188(arg__1217, 16)}
else
if ($T(binaryEE__1194(B1191__1218, "m")))
{
arg__1217(stream__1211);
return ""}
else
return signal__1196(make__1197(LerrorG__1198, B1228, concatenate__1199("Unknown format dispatch character ", char__1216)))},
index__1221 = 0;
while ($T(not__1201(emptyQ__1202(control_string__1212))))
{
var next_dispatch__1222 = position__1208(control_string__1212, "%");
if ($T(G__1203(next_dispatch__1222, 0)))
{
stream_write__1204(stream__1211, slice__1205(control_string__1212, 0, next_dispatch__1222));
control_string__1212 = slice__1205(control_string__1212, next_dispatch__1222)}
else
if ($T(next_dispatch__1222))
{
var arg__1223 = element__1207(args__1213, index__1221),
char__1224 = second__1206(control_string__1212),
percent__1225 = binaryEE__1194(char__1224, "%"),
B1227;
if ($T(percent__1225))
{B1227 = "%"}
else
B1227 = dispatch__1214(char__1224, arg__1223);
stream_write__1204(stream__1211, B1227);
control_string__1212 = slice__1205(control_string__1212, 2);
if ($T(not__1201(percent__1225)))
{index__1221 = (index__1221 + 1)}}
else
{
stream_write__1204(stream__1211, control_string__1212);
control_string__1212 = ""}};
return false}, false);
exports.format = format__1209}
{
var apply__1229 = B1183.apply,
Tstandard_outT__1230 = B1185["*standard-out*"],
format_out__1231;
false;
format_out__1231 = Mmake_function__1186("format_out", function format_out__1232 (control_string__1233)
{
var args__1234 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return apply__1229(format__1209, Tstandard_outT__1230, control_string__1233, args__1234)}, false);
exports["format-out"] = format_out__1231}
{
var stream_contents__1235 = B1185["stream-contents"],
Lstring_streamG__1236 = B1185["<string-stream>"],
format_to_string__1237;
false;
format_to_string__1237 = Mmake_function__1186("format_to_string", function format_to_string__1238 (control_string__1239)
{
var args__1240 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1241 = make__1197(Lstring_streamG__1236);
apply__1229(format__1209, stream__1241, control_string__1239, args__1240);
return stream_contents__1235(stream__1241)}, false);
exports["format-to-string"] = format_to_string__1237}
