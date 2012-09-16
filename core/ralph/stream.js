{
var B1077;
false;
B1077 = require("ralph/core")}
false
{
var Mmake_class__1078 = B1077["%make-class"],
LobjectG__1079 = B1077["<object>"],
LstreamG__1080;
false;
LstreamG__1080 = Mmake_class__1078(LobjectG__1079, {});
exports["<stream>"] = LstreamG__1080}
{
var Mmake_generic__1081 = B1077["%make-generic"],
stream_close__1082;
false;
stream_close__1082 = Mmake_generic__1081("stream_close");
exports["stream-close"] = stream_close__1082}
{
var stream_openQ__1083;
false;
stream_openQ__1083 = Mmake_generic__1081("stream_openQ");
exports["stream-open?"] = stream_openQ__1083}
{
var stream_at_endQ__1084;
false;
stream_at_endQ__1084 = Mmake_generic__1081("stream_at_endQ");
exports["stream-at-end?"] = stream_at_endQ__1084}
{
var stream_peek__1085;
false;
stream_peek__1085 = Mmake_generic__1081("stream_peek");
exports["stream-peek"] = stream_peek__1085}
{
var stream_read__1086;
false;
stream_read__1086 = Mmake_generic__1081("stream_read");
exports["stream-read"] = stream_read__1086}
{
var stream_read_element__1087;
false;
stream_read_element__1087 = Mmake_generic__1081("stream_read_element");
exports["stream-read-element"] = stream_read_element__1087}
{
var stream_read_to_end__1088;
false;
stream_read_to_end__1088 = Mmake_generic__1081("stream_read_to_end");
exports["stream-read-to-end"] = stream_read_to_end__1088}
{
var stream_read_through__1089;
false;
stream_read_through__1089 = Mmake_generic__1081("stream_read_through");
exports["stream-read-through"] = stream_read_through__1089}
{
var stream_unread_element__1090;
false;
stream_unread_element__1090 = Mmake_generic__1081("stream_unread_element");
exports["stream-unread-element"] = stream_unread_element__1090}
{
var stream_write__1091;
false;
stream_write__1091 = Mmake_generic__1081("stream_write");
exports["stream-write"] = stream_write__1091}
{
var stream_contents__1092;
false;
stream_contents__1092 = Mmake_generic__1081("stream_contents");
exports["stream-contents"] = stream_contents__1092}
{
var stream_remaining_contents__1093;
false;
stream_remaining_contents__1093 = Mmake_generic__1081("stream_remaining_contents");
exports["stream-remaining-contents"] = stream_remaining_contents__1093}
{
var Lstring_streamG__1097;
false;
Lstring_streamG__1097 = Mmake_class__1078(LstreamG__1080, {"string":function B1094__1098 ()
{return ""},
index:function B1095__1099 ()
{return 0},
length:function B1096__1100 ()
{return 0}});
exports["<string-stream>"] = Lstring_streamG__1097}
{
var Mmake_method__1102 = B1077["%make-method"],
apply__1103 = B1077.apply,
Mnext_method__1104 = B1077["%next-method"],
size__1105 = B1077.size,
get__1106 = B1077.get,
initialize__1107;
false;
initialize__1107 = Mmake_method__1102("initialize", function B1101__1108 (stream__1109)
{
var rest__1110 = $SL.call(arguments, 1);
apply__1103(Mnext_method__1104(B1101__1108), stream__1109, rest__1110);
return stream__1109.length = size__1105(get__1106(stream__1109, "string"))}, false, Lstring_streamG__1097, initialize__1107)}
{
var binaryEE__1112 = B1077["binary=="];
false;
stream_at_endQ__1084 = Mmake_method__1102("stream_at_endQ", function B1111__1113 (stream__1114)
{return binaryEE__1112(get__1106(stream__1114, "index"), get__1106(stream__1114, "length"))}, false, Lstring_streamG__1097, stream_at_endQ__1084);
exports["stream-at-end?"] = stream_at_endQ__1084}
{
var element__1116 = B1077.element;
false;
stream_peek__1085 = Mmake_method__1102("stream_peek", function B1115__1117 (stream__1118)
{return element__1116(get__1106(stream__1118, "string"), get__1106(stream__1118, "index"))}, false, Lstring_streamG__1097, stream_peek__1085);
exports["stream-peek"] = stream_peek__1085}
{
var not__1120 = B1077.not;
false;
stream_read_element__1087 = Mmake_method__1102("stream_read_element", function B1119__1121 (stream__1122)
{if ($T(not__1120(stream_at_endQ__1084(stream__1122))))
{
var element__1123 = stream_peek__1085(stream__1122);
stream__1122.index = (get__1106(stream__1122, "index") + 1);
return element__1123}}, false, Lstring_streamG__1097, stream_read_element__1087);
exports["stream-read-element"] = stream_read_element__1087}
{
var GE__1127 = B1077[">="],
concatenate__1128 = B1077.concatenate,
inc__1129 = B1077.inc;
false;
stream_read__1086 = Mmake_method__1102("stream_read", function B1124__1130 (stream__1131, n__1132)
{
var result__1133 = "",
i__1134 = 0;
while (true)
{
var B1125__1135 = stream_at_endQ__1084(stream__1131),
B1138;
if ($T(B1125__1135))
{B1138 = B1125__1135}
else
B1138 = GE__1127(i__1134, n__1132);
var B1139 = not__1120(B1138);
if ($T(B1139))
{
(function B1126__1136 (i__1137)
{return result__1133 = concatenate__1128(result__1133, stream_read_element__1087(stream__1131))})(i__1134);
i__1134 = inc__1129(i__1134)}
else
break};
return result__1133}, false, Lstring_streamG__1097, stream_read__1086);
exports["stream-read"] = stream_read__1086}
{
false;
stream_read_through__1089 = Mmake_method__1102("stream_read_through", function B1140__1142 (stream__1143, element__1144)
{
var foundQ__1145;
while (true)
{
var B1141__1146 = stream_at_endQ__1084(stream__1143),
B1147;
if ($T(B1141__1146))
{B1147 = B1141__1146}
else
B1147 = foundQ__1145;
var B1148 = not__1120(B1147);
if ($T(B1148))
{foundQ__1145 = binaryEE__1112(stream_read_element__1087(stream__1143), element__1144)}
else
break};
return false}, false, Lstring_streamG__1097, stream_read_through__1089);
exports["stream-read-through"] = stream_read_through__1089}
{
var max__1150 = B1077.max,
dec__1151 = B1077.dec;
false;
stream_unread_element__1090 = Mmake_method__1102("stream_unread_element", function B1149__1152 (stream__1153)
{return stream__1153.index = max__1150(0, dec__1151(get__1106(stream__1153, "index")))}, false, Lstring_streamG__1097, stream_unread_element__1090);
exports["stream-unread-element"] = stream_unread_element__1090}
{
var B1164 = $K("start"),
B1165 = $K("end"),
replace_subsequence__1156 = B1077["replace-subsequence"];
false;
stream_write__1091 = Mmake_method__1102("stream_write", function B1154__1157 (stream__1158, string__1159)
{
var B1155__1160 = stream__1158,
index__1161 = B1155__1160.index,
length__1162 = size__1105(string__1159),
end__1163 = (index__1161 + length__1162);
stream__1158["string"] = replace_subsequence__1156(get__1106(stream__1158, "string"), string__1159, B1164, index__1161, B1165, end__1163);
stream__1158.index = end__1163;
stream__1158.length = max__1150(end__1163, get__1106(stream__1158, "length"));
return string__1159}, false, Lstring_streamG__1097, stream_write__1091);
exports["stream-write"] = stream_write__1091}
{
false;
stream_contents__1092 = Mmake_method__1102("stream_contents", function B1166__1167 (stream__1168)
{return get__1106(stream__1168, "string")}, false, Lstring_streamG__1097, stream_contents__1092);
exports["stream-contents"] = stream_contents__1092}
{
var slice__1170 = B1077.slice;
false;
stream_remaining_contents__1093 = Mmake_method__1102("stream_remaining_contents", function B1169__1171 (stream__1172)
{return slice__1170(get__1106(stream__1172, "string"), get__1106(stream__1172, "index"))}, false, Lstring_streamG__1097, stream_remaining_contents__1093);
exports["stream-remaining-contents"] = stream_remaining_contents__1093}
{
var Lfile_streamG__1173;
false;
Lfile_streamG__1173 = Mmake_class__1078(LstreamG__1080, {file:false});
exports["<file-stream>"] = Lfile_streamG__1173}
{
false;
stream_write__1091 = Mmake_method__1102("stream_write", function B1174__1175 (stream__1176, string__1177)
{return stream__1176.file.write(string__1177)}, false, Lfile_streamG__1173, stream_write__1091);
exports["stream-write"] = stream_write__1091}
{
var B1180 = $K("file"),
make__1178 = B1077.make,
Tstandard_outT__1179;
false;
Tstandard_outT__1179 = make__1178(Lfile_streamG__1173, B1180, process.stdout);
exports["*standard-out*"] = Tstandard_outT__1179}
{
false;
Tstandard_outT__1179 = make__1178(Lfile_streamG__1173, B1180, process.stderr);
exports["*standard-out*"] = Tstandard_outT__1179}
