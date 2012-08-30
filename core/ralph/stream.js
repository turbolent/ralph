{
var B963;
false;
B963 = require("ralph/core")}
false
{
var Mmake_class__964 = B963["%make-class"],
LobjectG__965 = B963["<object>"],
LstreamG__966;
false;
LstreamG__966 = Mmake_class__964(LobjectG__965, {});
exports["<stream>"] = LstreamG__966}
{
var Mmake_generic__967 = B963["%make-generic"],
stream_close__968;
false;
stream_close__968 = Mmake_generic__967("stream_close");
exports["stream-close"] = stream_close__968}
{
var stream_openQ__969;
false;
stream_openQ__969 = Mmake_generic__967("stream_openQ");
exports["stream-open?"] = stream_openQ__969}
{
var stream_at_endQ__970;
false;
stream_at_endQ__970 = Mmake_generic__967("stream_at_endQ");
exports["stream-at-end?"] = stream_at_endQ__970}
{
var stream_peek__971;
false;
stream_peek__971 = Mmake_generic__967("stream_peek");
exports["stream-peek"] = stream_peek__971}
{
var stream_read__972;
false;
stream_read__972 = Mmake_generic__967("stream_read");
exports["stream-read"] = stream_read__972}
{
var stream_read_element__973;
false;
stream_read_element__973 = Mmake_generic__967("stream_read_element");
exports["stream-read-element"] = stream_read_element__973}
{
var stream_read_to_end__974;
false;
stream_read_to_end__974 = Mmake_generic__967("stream_read_to_end");
exports["stream-read-to-end"] = stream_read_to_end__974}
{
var stream_read_through__975;
false;
stream_read_through__975 = Mmake_generic__967("stream_read_through");
exports["stream-read-through"] = stream_read_through__975}
{
var stream_unread_element__976;
false;
stream_unread_element__976 = Mmake_generic__967("stream_unread_element");
exports["stream-unread-element"] = stream_unread_element__976}
{
var stream_write__977;
false;
stream_write__977 = Mmake_generic__967("stream_write");
exports["stream-write"] = stream_write__977}
{
var stream_contents__978;
false;
stream_contents__978 = Mmake_generic__967("stream_contents");
exports["stream-contents"] = stream_contents__978}
{
var stream_remaining_contents__979;
false;
stream_remaining_contents__979 = Mmake_generic__967("stream_remaining_contents");
exports["stream-remaining-contents"] = stream_remaining_contents__979}
{
var Lstring_streamG__983;
false;
Lstring_streamG__983 = Mmake_class__964(LstreamG__966, {"string":function B984 ()
{return ""},
index:function B985 ()
{return 0},
length:function B986 ()
{return 0}});
exports["<string-stream>"] = Lstring_streamG__983}
{
var Mmake_method__988 = B963["%make-method"],
apply__989 = B963.apply,
Mnext_method__990 = B963["%next-method"],
size__991 = B963.size,
get__992 = B963.get,
initialize__993;
false;
initialize__993 = Mmake_method__988("initialize", function B994 (stream__995)
{
var rest__996 = $SL.call(arguments, 1);
apply__989(Mnext_method__990(B994), stream__995, rest__996);
return stream__995.length = size__991(get__992(stream__995, "string"))}, false, Lstring_streamG__983, initialize__993)}
{
var binaryEE__998 = B963["binary=="];
false;
stream_at_endQ__970 = Mmake_method__988("stream_at_endQ", function B999 (stream__1000)
{return binaryEE__998(get__992(stream__1000, "index"), get__992(stream__1000, "length"))}, false, Lstring_streamG__983, stream_at_endQ__970);
exports["stream-at-end?"] = stream_at_endQ__970}
{
var element__1002 = B963.element;
false;
stream_peek__971 = Mmake_method__988("stream_peek", function B1003 (stream__1004)
{return element__1002(get__992(stream__1004, "string"), get__992(stream__1004, "index"))}, false, Lstring_streamG__983, stream_peek__971);
exports["stream-peek"] = stream_peek__971}
{
var not__1006 = B963.not;
false;
stream_read_element__973 = Mmake_method__988("stream_read_element", function B1007 (stream__1008)
{if ($T(not__1006(stream_at_endQ__970(stream__1008))))
{
var element__1009 = stream_peek__971(stream__1008);
stream__1008.index = (get__992(stream__1008, "index") + 1);
return element__1009}}, false, Lstring_streamG__983, stream_read_element__973);
exports["stream-read-element"] = stream_read_element__973}
{
var GE__1013 = B963[">="],
concatenate__1014 = B963.concatenate,
inc__1015 = B963.inc;
false;
stream_read__972 = Mmake_method__988("stream_read", function B1016 (stream__1017, n__1018)
{
var result__1019 = "",
i__1020 = 0;
while (true)
{
var B1021 = stream_at_endQ__970(stream__1017),
B1024;
if ($T(B1021))
{B1024 = B1021}
else
B1024 = GE__1013(i__1020, n__1018);
var B1025 = not__1006(B1024);
if ($T(B1025))
{
(function B1022 (i__1023)
{return result__1019 = concatenate__1014(result__1019, stream_read_element__973(stream__1017))})(i__1020);
i__1020 = inc__1015(i__1020)}
else
break};
return result__1019}, false, Lstring_streamG__983, stream_read__972);
exports["stream-read"] = stream_read__972}
{
var not__1028 = not__1006;
false;
stream_read_through__975 = Mmake_method__988("stream_read_through", function B1029 (stream__1030, element__1031)
{
var foundQ__1032;
while (true)
{
var B1033 = stream_at_endQ__970(stream__1030),
B1034;
if ($T(B1033))
{B1034 = B1033}
else
B1034 = foundQ__1032;
var B1035 = not__1028(B1034);
if ($T(B1035))
{foundQ__1032 = binaryEE__998(stream_read_element__973(stream__1030), element__1031)}
else
break};
return false}, false, Lstring_streamG__983, stream_read_through__975);
exports["stream-read-through"] = stream_read_through__975}
{
var max__1037 = B963.max,
dec__1038 = B963.dec;
false;
stream_unread_element__976 = Mmake_method__988("stream_unread_element", function B1039 (stream__1040)
{return stream__1040.index = max__1037(0, dec__1038(get__992(stream__1040, "index")))}, false, Lstring_streamG__983, stream_unread_element__976);
exports["stream-unread-element"] = stream_unread_element__976}
{
var replace_subsequence__1043 = B963["replace-subsequence"];
false;
stream_write__977 = Mmake_method__988("stream_write", function B1044 (stream__1045, string__1046)
{
var B1047 = stream__1045,
index__1048 = B1047.index,
length__1049 = size__991(string__1046),
end__1050 = (index__1048 + length__1049);
stream__1045["string"] = replace_subsequence__1043(get__992(stream__1045, "string"), string__1046, $K("start"), index__1048, $K("end"), end__1050);
stream__1045.index = end__1050;
stream__1045.length = max__1037(end__1050, get__992(stream__1045, "length"));
return string__1046}, false, Lstring_streamG__983, stream_write__977);
exports["stream-write"] = stream_write__977}
{
false;
stream_contents__978 = Mmake_method__988("stream_contents", function B1052 (stream__1053)
{return get__992(stream__1053, "string")}, false, Lstring_streamG__983, stream_contents__978);
exports["stream-contents"] = stream_contents__978}
{
var slice__1055 = B963.slice;
false;
stream_remaining_contents__979 = Mmake_method__988("stream_remaining_contents", function B1056 (stream__1057)
{return slice__1055(get__992(stream__1057, "string"), get__992(stream__1057, "index"))}, false, Lstring_streamG__983, stream_remaining_contents__979);
exports["stream-remaining-contents"] = stream_remaining_contents__979}
{
var Lfile_streamG__1058;
false;
Lfile_streamG__1058 = Mmake_class__964(LstreamG__966, {file:false});
exports["<file-stream>"] = Lfile_streamG__1058}
{
false;
stream_write__977 = Mmake_method__988("stream_write", function B1060 (stream__1061, string__1062)
{return stream__1061.file.write(string__1062)}, false, Lfile_streamG__1058, stream_write__977);
exports["stream-write"] = stream_write__977}
{
var make__1063 = B963.make,
Tstandard_outT__1064;
false;
Tstandard_outT__1064 = make__1063(Lfile_streamG__1058, $K("file"), process.stdout);
exports["*standard-out*"] = Tstandard_outT__1064}
