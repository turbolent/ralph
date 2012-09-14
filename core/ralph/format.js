{
var B1085;
false;
B1085 = require("ralph/core")}
{
var B1087;
false;
B1087 = require("ralph/stream")}
{
var Mmake_function__1088 = B1085["%make-function"],
as_string__1089 = B1085["as-string"],
format_integer__1090;
false;
format_integer__1090 = Mmake_function__1088("format_integer", function format_integer__1091 (number__1092)
{return as_string__1089(number__1092)}, false)}
{
var B1130 = $K("message"),
binaryEE__1096 = B1085["binary=="],
description__1097 = B1085.description,
signal__1098 = B1085.signal,
make__1099 = B1085.make,
LerrorG__1100 = B1085["<error>"],
concatenate__1101 = B1085.concatenate,
as_lowercase__1102 = B1085["as-lowercase"],
not__1103 = B1085.not,
emptyQ__1104 = B1085["empty?"],
G__1105 = B1085[">"],
stream_write__1106 = B1087["stream-write"],
slice__1107 = B1085.slice;
false;
var second__1108 = B1085.second,
element__1109 = B1085.element,
position__1110 = B1085.position,
format__1111;
false;
format__1111 = Mmake_function__1088("format", function format__1112 (stream__1113, control_string__1114)
{
var args__1115 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1116 = function dispatch__1117 (char__1118, arg__1119)
{
var B1093__1120 = as_lowercase__1102(char__1118),
B1094__1121 = binaryEE__1096(B1093__1120, "s"),
B1128;
if ($T(B1094__1121))
{B1128 = B1094__1121}
else
B1128 = binaryEE__1096(B1093__1120, "c");
if ($T(B1128))
{return arg__1119}
else
if ($T(binaryEE__1096(B1093__1120, "=")))
{
var B1095__1122 = description__1097(arg__1119);
if ($T(B1095__1122))
{return B1095__1122}
else
return ""}
else
if ($T(binaryEE__1096(B1093__1120, "b")))
{return format_integer__1090(arg__1119, 2)}
else
if ($T(binaryEE__1096(B1093__1120, "o")))
{return format_integer__1090(arg__1119, 8)}
else
if ($T(binaryEE__1096(B1093__1120, "d")))
{return format_integer__1090(arg__1119, 10)}
else
if ($T(binaryEE__1096(B1093__1120, "x")))
{return format_integer__1090(arg__1119, 16)}
else
if ($T(binaryEE__1096(B1093__1120, "m")))
{
arg__1119(stream__1113);
return ""}
else
return signal__1098(make__1099(LerrorG__1100, B1130, concatenate__1101("Unknown format dispatch character ", char__1118)))},
index__1123 = 0;
while ($T(not__1103(emptyQ__1104(control_string__1114))))
{
var next_dispatch__1124 = position__1110(control_string__1114, "%");
if ($T(G__1105(next_dispatch__1124, 0)))
{
stream_write__1106(stream__1113, slice__1107(control_string__1114, 0, next_dispatch__1124));
control_string__1114 = slice__1107(control_string__1114, next_dispatch__1124)}
else
if ($T(next_dispatch__1124))
{
var arg__1125 = element__1109(args__1115, index__1123),
char__1126 = second__1108(control_string__1114),
percent__1127 = binaryEE__1096(char__1126, "%"),
B1129;
if ($T(percent__1127))
{B1129 = "%"}
else
B1129 = dispatch__1116(char__1126, arg__1125);
stream_write__1106(stream__1113, B1129);
control_string__1114 = slice__1107(control_string__1114, 2);
if ($T(not__1103(percent__1127)))
{index__1123 = (index__1123 + 1)}}
else
{
stream_write__1106(stream__1113, control_string__1114);
control_string__1114 = ""}};
return false}, false);
exports.format = format__1111}
{
var apply__1131 = B1085.apply,
Tstandard_outT__1132 = B1087["*standard-out*"],
format_out__1133;
false;
format_out__1133 = Mmake_function__1088("format_out", function format_out__1134 (control_string__1135)
{
var args__1136 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return apply__1131(format__1111, Tstandard_outT__1132, control_string__1135, args__1136)}, false);
exports["format-out"] = format_out__1133}
{
var stream_contents__1137 = B1087["stream-contents"],
Lstring_streamG__1138 = B1087["<string-stream>"],
format_to_string__1139;
false;
format_to_string__1139 = Mmake_function__1088("format_to_string", function format_to_string__1140 (control_string__1141)
{
var args__1142 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1143 = make__1099(Lstring_streamG__1138);
apply__1131(format__1111, stream__1143, control_string__1141, args__1142);
return stream_contents__1137(stream__1143)}, false);
exports["format-to-string"] = format_to_string__1139}
