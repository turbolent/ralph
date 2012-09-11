{
var B1188;
false;
B1188 = require("ralph/core")}
false
{
var Mmake_class__1189 = B1188["%make-class"],
LobjectG__1190 = B1188["<object>"],
LstreamG__1191;
false;
LstreamG__1191 = Mmake_class__1189(LobjectG__1190, {});
exports["<stream>"] = LstreamG__1191}
{
var Mmake_generic__1192 = B1188["%make-generic"],
stream_close__1193;
false;
stream_close__1193 = Mmake_generic__1192("stream_close");
exports["stream-close"] = stream_close__1193}
{
var stream_openQ__1194;
false;
stream_openQ__1194 = Mmake_generic__1192("stream_openQ");
exports["stream-open?"] = stream_openQ__1194}
{
var stream_at_endQ__1195;
false;
stream_at_endQ__1195 = Mmake_generic__1192("stream_at_endQ");
exports["stream-at-end?"] = stream_at_endQ__1195}
{
var stream_peek__1196;
false;
stream_peek__1196 = Mmake_generic__1192("stream_peek");
exports["stream-peek"] = stream_peek__1196}
{
var stream_read__1197;
false;
stream_read__1197 = Mmake_generic__1192("stream_read");
exports["stream-read"] = stream_read__1197}
{
var stream_read_element__1198;
false;
stream_read_element__1198 = Mmake_generic__1192("stream_read_element");
exports["stream-read-element"] = stream_read_element__1198}
{
var stream_read_to_end__1199;
false;
stream_read_to_end__1199 = Mmake_generic__1192("stream_read_to_end");
exports["stream-read-to-end"] = stream_read_to_end__1199}
{
var stream_read_through__1200;
false;
stream_read_through__1200 = Mmake_generic__1192("stream_read_through");
exports["stream-read-through"] = stream_read_through__1200}
{
var stream_unread_element__1201;
false;
stream_unread_element__1201 = Mmake_generic__1192("stream_unread_element");
exports["stream-unread-element"] = stream_unread_element__1201}
{
var stream_write__1202;
false;
stream_write__1202 = Mmake_generic__1192("stream_write");
exports["stream-write"] = stream_write__1202}
{
var stream_contents__1203;
false;
stream_contents__1203 = Mmake_generic__1192("stream_contents");
exports["stream-contents"] = stream_contents__1203}
{
var stream_remaining_contents__1204;
false;
stream_remaining_contents__1204 = Mmake_generic__1192("stream_remaining_contents");
exports["stream-remaining-contents"] = stream_remaining_contents__1204}
{
var Lstring_streamG__1208;
false;
Lstring_streamG__1208 = Mmake_class__1189(LstreamG__1191, {"string":function B1205__1209 ()
{return ""},
index:function B1206__1210 ()
{return 0},
length:function B1207__1211 ()
{return 0}});
exports["<string-stream>"] = Lstring_streamG__1208}
{
var Mmake_method__1213 = B1188["%make-method"],
apply__1214 = B1188.apply,
Mnext_method__1215 = B1188["%next-method"],
size__1216 = B1188.size,
get__1217 = B1188.get,
initialize__1218;
false;
initialize__1218 = Mmake_method__1213("initialize", function B1212__1219 (stream__1220)
{
var rest__1221 = $SL.call(arguments, 1);
apply__1214(Mnext_method__1215(B1212__1219), stream__1220, rest__1221);
var object__1222 = get__1217(stream__1220, "string"),
B1223 = ((object__1222 || false).length || 0);
return stream__1220.length = B1223}, false, Lstring_streamG__1208, initialize__1218)}
{
var binaryEE__1225 = B1188["binary=="];
false;
stream_at_endQ__1195 = Mmake_method__1213("stream_at_endQ", function B1224__1226 (stream__1227)
{
var object2__1229 = get__1217(stream__1227, "length"),
object1__1228 = get__1217(stream__1227, "index");
return (object1__1228 === object2__1229)}, false, Lstring_streamG__1208, stream_at_endQ__1195);
exports["stream-at-end?"] = stream_at_endQ__1195}
{
var element__1231 = B1188.element;
false;
stream_peek__1196 = Mmake_method__1213("stream_peek", function B1230__1232 (stream__1233)
{return element__1231(get__1217(stream__1233, "string"), get__1217(stream__1233, "index"))}, false, Lstring_streamG__1208, stream_peek__1196);
exports["stream-peek"] = stream_peek__1196}
{
var ralphScoreCCtrueQ = B1188["true?"],
not__1235 = B1188.not;
false;
stream_read_element__1198 = Mmake_method__1213("stream_read_element", function B1234__1236 (stream__1237)
{
var value__1239 = stream_at_endQ__1195(stream__1237),
B1240 = !(ralphScoreCCtrueQ(value__1239));
if ($T(B1240))
{
var element__1238 = stream_peek__1196(stream__1237);
stream__1237.index = (get__1217(stream__1237, "index") + 1);
return element__1238}}, false, Lstring_streamG__1208, stream_read_element__1198);
exports["stream-read-element"] = stream_read_element__1198}
{
var GE__1244 = B1188[">="],
concatenate__1245 = B1188.concatenate,
inc__1246 = B1188.inc;
false;
stream_read__1197 = Mmake_method__1213("stream_read", function B1241__1247 (stream__1248, n__1249)
{
var result__1250 = "",
i__1251 = 0;
while (true)
{
var B1242__1252 = stream_at_endQ__1195(stream__1248),
value__1255;
if ($T(B1242__1252))
{value__1255 = B1242__1252}
else
value__1255 = GE__1244(i__1251, n__1249);
var B1258 = !(ralphScoreCCtrueQ(value__1255));
if ($T(B1258))
{
(function B1243__1253 (i__1254)
{return result__1250 = concatenate__1245(result__1250, stream_read_element__1198(stream__1248))})(i__1251);
var number__1256 = i__1251,
B1257 = (number__1256 + 1);
i__1251 = B1257}
else
break};
return result__1250}, false, Lstring_streamG__1208, stream_read__1197);
exports["stream-read"] = stream_read__1197}
{
false;
stream_read_through__1200 = Mmake_method__1213("stream_read_through", function B1259__1261 (stream__1262, element__1263)
{
var foundQ__1264;
while (true)
{
var B1260__1265 = stream_at_endQ__1195(stream__1262),
value__1266;
if ($T(B1260__1265))
{value__1266 = B1260__1265}
else
value__1266 = foundQ__1264;
var B1270 = !(ralphScoreCCtrueQ(value__1266));
if ($T(B1270))
{
var object2__1268 = element__1263,
object1__1267 = stream_read_element__1198(stream__1262),
B1269 = (object1__1267 === object2__1268);
foundQ__1264 = B1269}
else
break};
return false}, false, Lstring_streamG__1208, stream_read_through__1200);
exports["stream-read-through"] = stream_read_through__1200}
{
var max__1272 = B1188.max,
dec__1273 = B1188.dec;
false;
stream_unread_element__1201 = Mmake_method__1213("stream_unread_element", function B1271__1274 (stream__1275)
{
var number__1276 = get__1217(stream__1275, "index"),
B1277 = (number__1276 - 1),
B1278 = max__1272(0, B1277);
return stream__1275.index = B1278}, false, Lstring_streamG__1208, stream_unread_element__1201);
exports["stream-unread-element"] = stream_unread_element__1201}
{
var B1290 = $K("start"),
B1291 = $K("end"),
replace_subsequence__1281 = B1188["replace-subsequence"];
false;
stream_write__1202 = Mmake_method__1213("stream_write", function B1279__1282 (stream__1283, string__1284)
{
var B1280__1285 = stream__1283,
index__1286 = B1280__1285.index,
object__1289 = string__1284,
length__1287 = ((object__1289 || false).length || 0),
end__1288 = (index__1286 + length__1287);
stream__1283["string"] = replace_subsequence__1281(get__1217(stream__1283, "string"), string__1284, B1290, index__1286, B1291, end__1288);
stream__1283.index = end__1288;
stream__1283.length = max__1272(end__1288, get__1217(stream__1283, "length"));
return string__1284}, false, Lstring_streamG__1208, stream_write__1202);
exports["stream-write"] = stream_write__1202}
{
false;
stream_contents__1203 = Mmake_method__1213("stream_contents", function B1292__1293 (stream__1294)
{return get__1217(stream__1294, "string")}, false, Lstring_streamG__1208, stream_contents__1203);
exports["stream-contents"] = stream_contents__1203}
{
var slice__1296 = B1188.slice;
false;
stream_remaining_contents__1204 = Mmake_method__1213("stream_remaining_contents", function B1295__1297 (stream__1298)
{
var end__1301,
start__1300 = get__1217(stream__1298, "index"),
array__1299 = get__1217(stream__1298, "string");
return array__1299.slice(start__1300, end__1301)}, false, Lstring_streamG__1208, stream_remaining_contents__1204);
exports["stream-remaining-contents"] = stream_remaining_contents__1204}
{
var Lfile_streamG__1302;
false;
Lfile_streamG__1302 = Mmake_class__1189(LstreamG__1191, {file:false});
exports["<file-stream>"] = Lfile_streamG__1302}
{
false;
stream_write__1202 = Mmake_method__1213("stream_write", function B1303__1304 (stream__1305, string__1306)
{return stream__1305.file.write(string__1306)}, false, Lfile_streamG__1302, stream_write__1202);
exports["stream-write"] = stream_write__1202}
{
var B1309 = $K("file"),
make__1307 = B1188.make,
Tstandard_outT__1308;
false;
Tstandard_outT__1308 = make__1307(Lfile_streamG__1302, B1309, process.stdout);
exports["*standard-out*"] = Tstandard_outT__1308}
