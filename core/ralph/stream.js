{
var B979;
false;
B979 = require("ralph/core")}
false
{
var Mmake_class__980 = B979["%make-class"],
LobjectG__981 = B979["<object>"],
LstreamG__982;
false;
LstreamG__982 = Mmake_class__980(LobjectG__981, {});
exports["<stream>"] = LstreamG__982}
{
var Mmake_generic__983 = B979["%make-generic"],
stream_close__984;
false;
stream_close__984 = Mmake_generic__983("stream_close");
exports["stream-close"] = stream_close__984}
{
var stream_openQ__985;
false;
stream_openQ__985 = Mmake_generic__983("stream_openQ");
exports["stream-open?"] = stream_openQ__985}
{
var stream_at_endQ__986;
false;
stream_at_endQ__986 = Mmake_generic__983("stream_at_endQ");
exports["stream-at-end?"] = stream_at_endQ__986}
{
var stream_peek__987;
false;
stream_peek__987 = Mmake_generic__983("stream_peek");
exports["stream-peek"] = stream_peek__987}
{
var stream_read__988;
false;
stream_read__988 = Mmake_generic__983("stream_read");
exports["stream-read"] = stream_read__988}
{
var stream_read_element__989;
false;
stream_read_element__989 = Mmake_generic__983("stream_read_element");
exports["stream-read-element"] = stream_read_element__989}
{
var stream_read_to_end__990;
false;
stream_read_to_end__990 = Mmake_generic__983("stream_read_to_end");
exports["stream-read-to-end"] = stream_read_to_end__990}
{
var stream_read_through__991;
false;
stream_read_through__991 = Mmake_generic__983("stream_read_through");
exports["stream-read-through"] = stream_read_through__991}
{
var stream_unread_element__992;
false;
stream_unread_element__992 = Mmake_generic__983("stream_unread_element");
exports["stream-unread-element"] = stream_unread_element__992}
{
var stream_write__993;
false;
stream_write__993 = Mmake_generic__983("stream_write");
exports["stream-write"] = stream_write__993}
{
var stream_contents__994;
false;
stream_contents__994 = Mmake_generic__983("stream_contents");
exports["stream-contents"] = stream_contents__994}
{
var stream_remaining_contents__995;
false;
stream_remaining_contents__995 = Mmake_generic__983("stream_remaining_contents");
exports["stream-remaining-contents"] = stream_remaining_contents__995}
{
var Lstring_streamG__999;
false;
Lstring_streamG__999 = Mmake_class__980(LstreamG__982, {"string":function B996__1000 ()
{return ""},
index:function B997__1001 ()
{return 0},
length:function B998__1002 ()
{return 0}});
exports["<string-stream>"] = Lstring_streamG__999}
{
var Mmake_method__1004 = B979["%make-method"],
apply__1005 = B979.apply,
Mnext_method__1006 = B979["%next-method"],
size__1007 = B979.size,
get__1008 = B979.get,
initialize__1009;
false;
initialize__1009 = Mmake_method__1004("initialize", function B1003__1010 (stream__1011)
{
var rest__1012 = $SL.call(arguments, 1);
apply__1005(Mnext_method__1006(B1003__1010), stream__1011, rest__1012);
return stream__1011.length = size__1007(get__1008(stream__1011, "string"))}, false, Lstring_streamG__999, initialize__1009)}
{
var binaryEE__1014 = B979["binary=="];
false;
stream_at_endQ__986 = Mmake_method__1004("stream_at_endQ", function B1013__1015 (stream__1016)
{return binaryEE__1014(get__1008(stream__1016, "index"), get__1008(stream__1016, "length"))}, false, Lstring_streamG__999, stream_at_endQ__986);
exports["stream-at-end?"] = stream_at_endQ__986}
{
var element__1018 = B979.element;
false;
stream_peek__987 = Mmake_method__1004("stream_peek", function B1017__1019 (stream__1020)
{return element__1018(get__1008(stream__1020, "string"), get__1008(stream__1020, "index"))}, false, Lstring_streamG__999, stream_peek__987);
exports["stream-peek"] = stream_peek__987}
{
var not__1022 = B979.not;
false;
stream_read_element__989 = Mmake_method__1004("stream_read_element", function B1021__1023 (stream__1024)
{if ($T(not__1022(stream_at_endQ__986(stream__1024))))
{
var element__1025 = stream_peek__987(stream__1024);
stream__1024.index = (get__1008(stream__1024, "index") + 1);
return element__1025}}, false, Lstring_streamG__999, stream_read_element__989);
exports["stream-read-element"] = stream_read_element__989}
{
var GE__1029 = B979[">="],
concatenate__1030 = B979.concatenate,
inc__1031 = B979.inc;
false;
stream_read__988 = Mmake_method__1004("stream_read", function B1026__1032 (stream__1033, n__1034)
{
var result__1035 = "",
i__1036 = 0;
while (true)
{
var B1027__1037 = stream_at_endQ__986(stream__1033),
B1040;
if ($T(B1027__1037))
{B1040 = B1027__1037}
else
B1040 = GE__1029(i__1036, n__1034);
var B1041 = not__1022(B1040);
if ($T(B1041))
{
(function B1028__1038 (i__1039)
{return result__1035 = concatenate__1030(result__1035, stream_read_element__989(stream__1033))})(i__1036);
i__1036 = inc__1031(i__1036)}
else
break};
return result__1035}, false, Lstring_streamG__999, stream_read__988);
exports["stream-read"] = stream_read__988}
{
false;
stream_read_through__991 = Mmake_method__1004("stream_read_through", function B1042__1044 (stream__1045, element__1046)
{
var foundQ__1047;
while (true)
{
var B1043__1048 = stream_at_endQ__986(stream__1045),
B1049;
if ($T(B1043__1048))
{B1049 = B1043__1048}
else
B1049 = foundQ__1047;
var B1050 = not__1022(B1049);
if ($T(B1050))
{foundQ__1047 = binaryEE__1014(stream_read_element__989(stream__1045), element__1046)}
else
break};
return false}, false, Lstring_streamG__999, stream_read_through__991);
exports["stream-read-through"] = stream_read_through__991}
{
var max__1052 = B979.max,
dec__1053 = B979.dec;
false;
stream_unread_element__992 = Mmake_method__1004("stream_unread_element", function B1051__1054 (stream__1055)
{return stream__1055.index = max__1052(0, dec__1053(get__1008(stream__1055, "index")))}, false, Lstring_streamG__999, stream_unread_element__992);
exports["stream-unread-element"] = stream_unread_element__992}
{
var B1066 = $K("start"),
B1067 = $K("end"),
replace_subsequence__1058 = B979["replace-subsequence"];
false;
stream_write__993 = Mmake_method__1004("stream_write", function B1056__1059 (stream__1060, string__1061)
{
var B1057__1062 = stream__1060,
index__1063 = B1057__1062.index,
length__1064 = size__1007(string__1061),
end__1065 = (index__1063 + length__1064);
stream__1060["string"] = replace_subsequence__1058(get__1008(stream__1060, "string"), string__1061, B1066, index__1063, B1067, end__1065);
stream__1060.index = end__1065;
stream__1060.length = max__1052(end__1065, get__1008(stream__1060, "length"));
return string__1061}, false, Lstring_streamG__999, stream_write__993);
exports["stream-write"] = stream_write__993}
{
false;
stream_contents__994 = Mmake_method__1004("stream_contents", function B1068__1069 (stream__1070)
{return get__1008(stream__1070, "string")}, false, Lstring_streamG__999, stream_contents__994);
exports["stream-contents"] = stream_contents__994}
{
var slice__1072 = B979.slice;
false;
stream_remaining_contents__995 = Mmake_method__1004("stream_remaining_contents", function B1071__1073 (stream__1074)
{return slice__1072(get__1008(stream__1074, "string"), get__1008(stream__1074, "index"))}, false, Lstring_streamG__999, stream_remaining_contents__995);
exports["stream-remaining-contents"] = stream_remaining_contents__995}
{
var Lfile_streamG__1075;
false;
Lfile_streamG__1075 = Mmake_class__980(LstreamG__982, {file:false});
exports["<file-stream>"] = Lfile_streamG__1075}
{
false;
stream_write__993 = Mmake_method__1004("stream_write", function B1076__1077 (stream__1078, string__1079)
{return stream__1078.file.write(string__1079)}, false, Lfile_streamG__1075, stream_write__993);
exports["stream-write"] = stream_write__993}
{
var B1082 = $K("file"),
make__1080 = B979.make,
Tstandard_outT__1081;
false;
Tstandard_outT__1081 = make__1080(Lfile_streamG__1075, B1082, process.stdout);
exports["*standard-out*"] = Tstandard_outT__1081}
{
false;
Tstandard_outT__1081 = make__1080(Lfile_streamG__1075, B1082, process.stderr);
exports["*standard-out*"] = Tstandard_outT__1081}
