{
var B1190;
false;
B1190 = require("ralph/core")}
{
var B1227,
B1228,
B1229;
false;
B1227 = require("ralph/stream");
false;
B1228 = require("ralph/format");
false;
B1229 = require("ralph/regexp")}
{
var B1235 = $K("ignore-case?"),
B1236 = $K("pattern"),
map__1230 = B1190.map,
curry__1231 = B1190.curry,
make__1232 = B1190.make,
LregexpG__1233 = B1229["<regexp>"],
Tnumber_patternsT__1234;
false;
Tnumber_patternsT__1234 = map__1230(curry__1231(make__1232, LregexpG__1233, B1235, true, B1236), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])}
{
var Tline_patternT__1237;
false;
Tline_patternT__1237 = make__1232(LregexpG__1233, B1236, "(.*)[\n\r]?")}
{
var Twhitespace_subpatternT__1238;
false;
Twhitespace_subpatternT__1238 = "\t\n\r\v\f\u00a0\ufeff "}
{
var concatenate__1239 = B1190.concatenate,
Twhitespace_patternT__1240;
false;
Twhitespace_patternT__1240 = make__1232(LregexpG__1233, B1236, concatenate__1239("[", Twhitespace_subpatternT__1238, "]*"))}
{
var Tatom_patternT__1241;
false;
Tatom_patternT__1241 = make__1232(LregexpG__1233, B1236, concatenate__1239("[^\\[\\]();`,", Twhitespace_subpatternT__1238, "]+"))}
{
var Mmake_function__1243 = B1190["%make-function"],
stream_read__1244 = B1227["stream-read"],
size__1245 = B1190.size,
first__1246 = B1190.first,
match__1247 = B1229.match,
stream_remaining_contents__1248 = B1227["stream-remaining-contents"],
match_stream__1249;
false;
match_stream__1249 = Mmake_function__1243("match_stream", function match_stream__1250 (regexp__1251, stream__1252)
{
var B1242__1253 = match__1247(regexp__1251, stream_remaining_contents__1248(stream__1252));
if ($T(B1242__1253))
{
var result__1254 = B1242__1253;
stream_read__1244(stream__1252, size__1245(first__1246(result__1254)));
return result__1254}}, false)}
{
var read_line__1255;
false;
read_line__1255 = Mmake_function__1243("read_line", function read_line__1256 (stream__1257)
{return match_stream__1249(Tline_patternT__1237, stream__1257)}, false)}
{
var read_whitespace__1258;
false;
read_whitespace__1258 = Mmake_function__1243("read_whitespace", function read_whitespace__1259 (stream__1260)
{return match_stream__1249(Twhitespace_patternT__1240, stream__1260)}, false)}
{
var B1277 = $KEY,
B1278 = $REST,
binaryEE__1263 = B1190["binary=="],
as_number__1264 = B1190["as-number"],
last__1265 = B1190.last,
keyword__1266 = B1190.keyword,
but_last__1267 = B1190["but-last"],
symbol__1268 = B1190.symbol,
anyQ__1269 = B1190["any?"],
rcurry__1270 = B1190.rcurry,
make_atom__1271;
false;
make_atom__1271 = Mmake_function__1243("make_atom", function make_atom__1272 (value__1273)
{
var B1261__1274 = value__1273;
if ($T(binaryEE__1263(B1261__1274, "#t")))
{return true}
else
if ($T(binaryEE__1263(B1261__1274, "#f")))
{return false}
else
if ($T(binaryEE__1263(B1261__1274, "#key")))
{return B1277}
else
if ($T(binaryEE__1263(B1261__1274, "#rest")))
{return B1278}
else
{
var B1262__1275 = anyQ__1269(rcurry__1270(match__1247, value__1273), Tnumber_patternsT__1234);
if ($T(B1262__1275))
{
var number__1276 = B1262__1275;
return as_number__1264(first__1246(number__1276))}
else
if ($T(binaryEE__1263(last__1265(value__1273), ":")))
{return keyword__1266(but_last__1267(value__1273))}
else
return symbol__1268(value__1273, false)}}, false)}
{
var B1296 = $K("radix"),
not__1280 = B1190.not,
stream_at_endQ__1281 = B1227["stream-at-end?"],
signal__1282 = B1190.signal,
stream_write__1283 = B1227["stream-write"],
code_char__1284 = B1190["code-char"],
parse_integer__1285 = B1190["parse-integer"],
stream_read_element__1286 = B1227["stream-read-element"],
stream_contents__1287 = B1227["stream-contents"],
Lstring_streamG__1288 = B1227["<string-stream>"],
read_string__1289;
false;
read_string__1289 = Mmake_function__1243("read_string", function read_string__1290 (stream__1291)
{
var result__1292 = make__1232(Lstring_streamG__1288),
char__1293 = stream_read_element__1286(stream__1291);
while ($T(not__1280(binaryEE__1263(char__1293, "\""))))
{
if ($T(stream_at_endQ__1281(stream__1291)))
{signal__1282("missing end of string")};
var B1295;
if ($T(binaryEE__1263(char__1293, "\\")))
{
var B1279__1294 = stream_read_element__1286(stream__1291);
if ($T(binaryEE__1263(B1279__1294, "\"")))
{B1295 = "\""}
else
if ($T(binaryEE__1263(B1279__1294, "\\")))
{B1295 = "\\"}
else
if ($T(binaryEE__1263(B1279__1294, "b")))
{B1295 = "\b"}
else
if ($T(binaryEE__1263(B1279__1294, "f")))
{B1295 = "\f"}
else
if ($T(binaryEE__1263(B1279__1294, "n")))
{B1295 = "\n"}
else
if ($T(binaryEE__1263(B1279__1294, "r")))
{B1295 = "\r"}
else
if ($T(binaryEE__1263(B1279__1294, "t")))
{B1295 = "\t"}
else
if ($T(binaryEE__1263(B1279__1294, "v")))
{B1295 = "\v"}
else
if ($T(binaryEE__1263(B1279__1294, "u")))
{B1295 = code_char__1284(parse_integer__1285(stream_read__1244(stream__1291, 4), B1296, 16))}
else
B1295 = signal__1282("bad escape sequence")}
else
B1295 = char__1293;
stream_write__1283(result__1292, B1295);
char__1293 = stream_read_element__1286(stream__1291)};
return stream_contents__1287(result__1292)}, false)}
{
var B1298 = $S("%at", "ralph/core"),
B1299 = $S("quote", "ralph/core"),
B1300 = $S("%backquote", "ralph/core"),
B1301 = $S("%comma", "ralph/core"),
Twrapper_symbolsT__1297;
false;
Twrapper_symbolsT__1297 = [B1298, B1299, B1300, B1301]}
{
var B1338 = $S("%array", "ralph/core"),
push_last__1307 = B1190["push-last"],
memberQ__1308 = B1190["member?"],
pop_last__1309 = B1190["pop-last"],
stream_peek__1310 = B1227["stream-peek"],
format_to_string__1311 = B1228["format-to-string"],
stream_unread_element__1312 = B1227["stream-unread-element"],
emptyQ__1313 = B1190["empty?"],
Mkeys__1314 = B1190["%keys"],
read__1315;
false;
read__1315 = Mmake_function__1243("read", function read__1316 (stream__1317)
{
var B1302__1318 = $SL.call(arguments, 1),
B1303__1319 = Mkeys__1314(B1302__1318, {"eof-error?":true,
"eof-value":false}),
eof_errorQ__1320 = B1303__1319["eof-error?"],
eof_value__1321 = B1303__1319["eof-value"],
stack__1322 = [[]],
ends__1323 = [],
specialQ__1324,
add_to_stackN__1325,
add_lastN__1326;
add_to_stackN__1325 = function add_to_stackN__1327 (value__1328)
{
push_last__1307(stack__1322, value__1328);
return add_lastN__1326()};
add_lastN__1326 = function add_lastN__1329 ()
{
var value__1330 = pop_last__1309(stack__1322),
l__1331 = last__1265(stack__1322);
if ($T(memberQ__1308(l__1331, Twrapper_symbolsT__1297)))
{return add_to_stackN__1325([pop_last__1309(stack__1322), value__1330])}
else
return push_last__1307(l__1331, value__1330)};
while ($T(not__1280(stream_at_endQ__1281(stream__1317))))
{
read_whitespace__1258(stream__1317);
var char__1332 = stream_read_element__1286(stream__1317),
B1304__1333 = char__1332;
if ($T(binaryEE__1263(B1304__1333, ";")))
{read_line__1255(stream__1317)}
else
if ($T(binaryEE__1263(B1304__1333, "'")))
{push_last__1307(stack__1322, B1299)}
else
if ($T(binaryEE__1263(B1304__1333, "`")))
{push_last__1307(stack__1322, B1300)}
else
if ($T(binaryEE__1263(B1304__1333, ",")))
{if ($T(binaryEE__1263(stream_peek__1310(stream__1317), "@")))
{
stream_read_element__1286(stream__1317);
push_last__1307(stack__1322, B1298)}
else
push_last__1307(stack__1322, B1301)}
else
if ($T(binaryEE__1263(B1304__1333, "(")))
{
push_last__1307(ends__1323, ")");
push_last__1307(stack__1322, [])}
else
if ($T(binaryEE__1263(B1304__1333, "[")))
{
push_last__1307(ends__1323, "]");
push_last__1307(stack__1322, [B1338])}
else
if ($T(binaryEE__1263(B1304__1333, last__1265(ends__1323))))
{
pop_last__1309(ends__1323);
add_lastN__1326()}
else
{
var B1305__1334 = binaryEE__1263(B1304__1333, ")"),
B1337;
if ($T(B1305__1334))
{B1337 = B1305__1334}
else
B1337 = binaryEE__1263(B1304__1333, "]");
if ($T(B1337))
{signal__1282(format_to_string__1311("too many closings: %=", char__1332))}
else
if ($T(binaryEE__1263(B1304__1333, "\"")))
{add_to_stackN__1325(read_string__1289(stream__1317))}
else
{
stream_unread_element__1312(stream__1317);
add_to_stackN__1325(make_atom__1271(first__1246(match_stream__1249(Tatom_patternT__1241, stream__1317))))}};
read_whitespace__1258(stream__1317)};
if ($T(emptyQ__1313(ends__1323)))
{
var value__1335 = first__1246(first__1246(stack__1322)),
B1306__1336 = value__1335;
if ($T(B1306__1336))
{return B1306__1336}
else
if ($T(eof_errorQ__1320))
{return signal__1282("no object")}
else
return eof_value__1321}
else
return signal__1282(format_to_string__1311("missing closings: %=", ends__1323))}, false);
exports.read = read__1315}
