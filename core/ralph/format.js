{
var B1067;
false;
B1067 = require("ralph/core")}
{
var B1069;
false;
B1069 = require("ralph/stream")}
{
var Mmake_function__1070 = B1067["%make-function"],
as_string__1071 = B1067["as-string"],
format_integer__1072;
false;
format_integer__1072 = Mmake_function__1070("format_integer", function format_integer__1073 (number__1074)
{return as_string__1071(number__1074)}, false)}
{
var binaryEE__1078 = B1067["binary=="],
description__1079 = B1067.description,
signal__1080 = B1067.signal,
make__1081 = B1067.make,
LerrorG__1082 = B1067["<error>"],
concatenate__1083 = B1067.concatenate,
as_lowercase__1084 = B1067["as-lowercase"],
not__1085 = B1067.not,
emptyQ__1086 = B1067["empty?"],
G__1087 = B1067[">"],
stream_write__1088 = B1069["stream-write"],
slice__1089 = B1067.slice,
not__1090 = not__1085,
second__1091 = B1067.second,
element__1092 = B1067.element,
position__1093 = B1067.position,
format__1094;
false;
format__1094 = Mmake_function__1070("format", function format__1095 (stream__1096, control_string__1097)
{
var args__1098 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1099 = function dispatch__1100 (char__1101, arg__1102)
{
var B1103 = as_lowercase__1084(char__1101),
B1104 = binaryEE__1078(B1103, "s"),
B1111;
if ($T(B1104))
{B1111 = B1104}
else
B1111 = binaryEE__1078(B1103, "c");
if ($T(B1111))
{return arg__1102}
else
if ($T(binaryEE__1078(B1103, "=")))
{
var B1105 = description__1079(arg__1102);
if ($T(B1105))
{return B1105}
else
return ""}
else
if ($T(binaryEE__1078(B1103, "b")))
{return format_integer__1072(arg__1102, 2)}
else
if ($T(binaryEE__1078(B1103, "o")))
{return format_integer__1072(arg__1102, 8)}
else
if ($T(binaryEE__1078(B1103, "d")))
{return format_integer__1072(arg__1102, 10)}
else
if ($T(binaryEE__1078(B1103, "x")))
{return format_integer__1072(arg__1102, 16)}
else
if ($T(binaryEE__1078(B1103, "m")))
{
arg__1102(stream__1096);
return ""}
else
return signal__1080(make__1081(LerrorG__1082, $K("message"), concatenate__1083("Unknown format dispatch character ", char__1101)))},
index__1106 = 0;
while ($T(not__1085(emptyQ__1086(control_string__1097))))
{
var next_dispatch__1107 = position__1093(control_string__1097, "%");
if ($T(G__1087(next_dispatch__1107, 0)))
{
stream_write__1088(stream__1096, slice__1089(control_string__1097, 0, next_dispatch__1107));
control_string__1097 = slice__1089(control_string__1097, next_dispatch__1107)}
else
if ($T(next_dispatch__1107))
{
var arg__1108 = element__1092(args__1098, index__1106),
char__1109 = second__1091(control_string__1097),
percent__1110 = binaryEE__1078(char__1109, "%"),
B1112;
if ($T(percent__1110))
{B1112 = "%"}
else
B1112 = dispatch__1099(char__1109, arg__1108);
stream_write__1088(stream__1096, B1112);
control_string__1097 = slice__1089(control_string__1097, 2);
if ($T(not__1090(percent__1110)))
{index__1106 = (index__1106 + 1)}}
else
{
stream_write__1088(stream__1096, control_string__1097);
control_string__1097 = ""}};
return false}, false);
exports.format = format__1094}
{
var apply__1113 = B1067.apply,
Tstandard_outT__1114 = B1069["*standard-out*"],
format_out__1115;
false;
format_out__1115 = Mmake_function__1070("format_out", function format_out__1116 (control_string__1117)
{
var args__1118 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return apply__1113(format__1094, Tstandard_outT__1114, control_string__1117, args__1118)}, false);
exports["format-out"] = format_out__1115}
{
var stream_contents__1119 = B1069["stream-contents"],
Lstring_streamG__1120 = B1069["<string-stream>"],
format_to_string__1121;
false;
format_to_string__1121 = Mmake_function__1070("format_to_string", function format_to_string__1122 (control_string__1123)
{
var args__1124 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1125 = make__1081(Lstring_streamG__1120);
apply__1113(format__1094, stream__1125, control_string__1123, args__1124);
return stream_contents__1119(stream__1125)}, false);
exports["format-to-string"] = format_to_string__1121}
