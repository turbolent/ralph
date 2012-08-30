{
var B1128;
false;
B1128 = require("ralph/core")}
{
var B1165,
B1166,
B1167;
false;
B1165 = require("ralph/stream");
false;
B1166 = require("ralph/format");
false;
B1167 = require("ralph/regexp")}
{
var map__1168 = B1128.map,
curry__1169 = B1128.curry,
make__1170 = B1128.make,
LregexpG__1171 = B1167["<regexp>"],
Tnumber_patternsT__1172;
false;
Tnumber_patternsT__1172 = map__1168(curry__1169(make__1170, LregexpG__1171, $K("ignore-case?"), true, $K("pattern")), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])}
{
var Tline_patternT__1173;
false;
Tline_patternT__1173 = make__1170(LregexpG__1171, $K("pattern"), "(.*)[\n\r]?")}
{
var Twhitespace_subpatternT__1174;
false;
Twhitespace_subpatternT__1174 = "\t\n\r\v\f\u00a0\ufeff "}
{
var concatenate__1175 = B1128.concatenate,
Twhitespace_patternT__1176;
false;
Twhitespace_patternT__1176 = make__1170(LregexpG__1171, $K("pattern"), concatenate__1175("[", Twhitespace_subpatternT__1174, "]*"))}
{
var Tatom_patternT__1177;
false;
Tatom_patternT__1177 = make__1170(LregexpG__1171, $K("pattern"), concatenate__1175("[^\\[\\]();`,", Twhitespace_subpatternT__1174, "]+"))}
{
var Mmake_function__1179 = B1128["%make-function"],
stream_read__1180 = B1165["stream-read"],
size__1181 = B1128.size,
first__1182 = B1128.first,
match__1183 = B1167.match,
stream_remaining_contents__1184 = B1165["stream-remaining-contents"],
match_stream__1185;
false;
match_stream__1185 = Mmake_function__1179("match_stream", function match_stream__1186 (regexp__1187, stream__1188)
{
var B1189 = match__1183(regexp__1187, stream_remaining_contents__1184(stream__1188));
if ($T(B1189))
{
var result__1190 = B1189;
stream_read__1180(stream__1188, size__1181(first__1182(result__1190)));
return result__1190}}, false)}
{
var read_line__1191;
false;
read_line__1191 = Mmake_function__1179("read_line", function read_line__1192 (stream__1193)
{return match_stream__1185(Tline_patternT__1173, stream__1193)}, false)}
{
var read_whitespace__1194;
false;
read_whitespace__1194 = Mmake_function__1179("read_whitespace", function read_whitespace__1195 (stream__1196)
{return match_stream__1185(Twhitespace_patternT__1176, stream__1196)}, false)}
{
var binaryEE__1199 = B1128["binary=="],
as_number__1200 = B1128["as-number"],
last__1201 = B1128.last,
keyword__1202 = B1128.keyword,
but_last__1203 = B1128["but-last"],
symbol__1204 = B1128.symbol,
anyQ__1205 = B1128["any?"],
rcurry__1206 = B1128.rcurry,
make_atom__1207;
false;
make_atom__1207 = Mmake_function__1179("make_atom", function make_atom__1208 (value__1209)
{
var B1210 = value__1209;
if ($T(binaryEE__1199(B1210, "#t")))
{return true}
else
if ($T(binaryEE__1199(B1210, "#f")))
{return false}
else
if ($T(binaryEE__1199(B1210, "#key")))
{return $KEY}
else
if ($T(binaryEE__1199(B1210, "#rest")))
{return $REST}
else
{
var B1211 = anyQ__1205(rcurry__1206(match__1183, value__1209), Tnumber_patternsT__1172);
if ($T(B1211))
{
var number__1212 = B1211;
return as_number__1200(first__1182(number__1212))}
else
if ($T(binaryEE__1199(last__1201(value__1209), ":")))
{return keyword__1202(but_last__1203(value__1209))}
else
return symbol__1204(value__1209, false)}}, false)}
{
var not__1214 = B1128.not,
stream_at_endQ__1215 = B1165["stream-at-end?"],
signal__1216 = B1128.signal,
stream_write__1217 = B1165["stream-write"],
code_char__1218 = B1128["code-char"],
parse_integer__1219 = B1128["parse-integer"],
stream_read_element__1220 = B1165["stream-read-element"],
stream_contents__1221 = B1165["stream-contents"],
Lstring_streamG__1222 = B1165["<string-stream>"],
read_string__1223;
false;
read_string__1223 = Mmake_function__1179("read_string", function read_string__1224 (stream__1225)
{
var result__1226 = make__1170(Lstring_streamG__1222),
char__1227 = stream_read_element__1220(stream__1225);
while ($T(not__1214(binaryEE__1199(char__1227, "\""))))
{
if ($T(stream_at_endQ__1215(stream__1225)))
{signal__1216("missing end of string")};
var B1229;
if ($T(binaryEE__1199(char__1227, "\\")))
{
var B1228 = stream_read_element__1220(stream__1225);
if ($T(binaryEE__1199(B1228, "\"")))
{B1229 = "\""}
else
if ($T(binaryEE__1199(B1228, "\\")))
{B1229 = "\\"}
else
if ($T(binaryEE__1199(B1228, "b")))
{B1229 = "\b"}
else
if ($T(binaryEE__1199(B1228, "f")))
{B1229 = "\f"}
else
if ($T(binaryEE__1199(B1228, "n")))
{B1229 = "\n"}
else
if ($T(binaryEE__1199(B1228, "r")))
{B1229 = "\r"}
else
if ($T(binaryEE__1199(B1228, "t")))
{B1229 = "\t"}
else
if ($T(binaryEE__1199(B1228, "v")))
{B1229 = "\v"}
else
if ($T(binaryEE__1199(B1228, "u")))
{B1229 = code_char__1218(parse_integer__1219(stream_read__1180(stream__1225, 4), $K("radix"), 16))}
else
B1229 = signal__1216("bad escape sequence")}
else
B1229 = char__1227;
stream_write__1217(result__1226, B1229);
char__1227 = stream_read_element__1220(stream__1225)};
return stream_contents__1221(result__1226)}, false)}
{
var Twrapper_symbolsT__1230;
false;
Twrapper_symbolsT__1230 = ["quote", "%backquote", "%comma"]}
{
var push_last__1236 = B1128["push-last"],
memberQ__1237 = B1128["member?"],
symbol_name__1238 = B1128["symbol-name"],
pop_last__1239 = B1128["pop-last"],
format_to_string__1240 = B1166["format-to-string"],
stream_unread_element__1241 = B1165["stream-unread-element"],
emptyQ__1242 = B1128["empty?"],
Mkeys__1243 = B1128["%keys"],
read__1244;
false;
read__1244 = Mmake_function__1179("read", function read__1245 (stream__1246)
{
var B1247 = $SL.call(arguments, 1),
B1248 = Mkeys__1243(B1247, {"eof-error?":true,
"eof-value":false}),
eof_errorQ__1249 = B1248["eof-error?"],
eof_value__1250 = B1248["eof-value"],
stack__1251 = [[]],
ends__1252 = [],
add_to_stackN__1253,
add_lastN__1254;
add_to_stackN__1253 = function add_to_stackN__1255 (value__1256)
{
push_last__1236(last__1201(stack__1251), value__1256);
if ($T(memberQ__1237(symbol_name__1238(first__1182(last__1201(stack__1251))), Twrapper_symbolsT__1230)))
{return add_lastN__1254()}};
add_lastN__1254 = function add_lastN__1257 ()
{
var value__1258 = pop_last__1239(stack__1251);
return add_to_stackN__1253(value__1258)};
while ($T(not__1214(stream_at_endQ__1215(stream__1246))))
{
read_whitespace__1194(stream__1246);
var char__1259 = stream_read_element__1220(stream__1246),
B1260 = char__1259;
if ($T(binaryEE__1199(B1260, ";")))
{read_line__1191(stream__1246)}
else
if ($T(binaryEE__1199(B1260, "'")))
{push_last__1236(stack__1251, [$S("quote", "ralph/core")])}
else
if ($T(binaryEE__1199(B1260, "`")))
{push_last__1236(stack__1251, [$S("%backquote", "ralph/core")])}
else
if ($T(binaryEE__1199(B1260, ",")))
{push_last__1236(stack__1251, [$S("%comma", "ralph/core")])}
else
if ($T(binaryEE__1199(B1260, "(")))
{
push_last__1236(ends__1252, ")");
push_last__1236(stack__1251, [])}
else
if ($T(binaryEE__1199(B1260, "[")))
{
push_last__1236(ends__1252, "]");
push_last__1236(stack__1251, [$S("%array", "ralph/core")])}
else
if ($T(binaryEE__1199(B1260, last__1201(ends__1252))))
{
pop_last__1239(ends__1252);
add_lastN__1254()}
else
{
var B1261 = binaryEE__1199(B1260, ")"),
B1264;
if ($T(B1261))
{B1264 = B1261}
else
B1264 = binaryEE__1199(B1260, "]");
if ($T(B1264))
{signal__1216(format_to_string__1240("too many closings: %=", char__1259))}
else
if ($T(binaryEE__1199(B1260, "\"")))
{add_to_stackN__1253(read_string__1223(stream__1246))}
else
{
stream_unread_element__1241(stream__1246);
add_to_stackN__1253(make_atom__1207(first__1182(match_stream__1185(Tatom_patternT__1177, stream__1246))))}};
read_whitespace__1194(stream__1246)};
if ($T(emptyQ__1242(ends__1252)))
{
var value__1262 = first__1182(last__1201(stack__1251)),
B1263 = value__1262;
if ($T(B1263))
{return B1263}
else
if ($T(eof_errorQ__1249))
{return signal__1216("no object")}
else
return eof_value__1250}
else
return signal__1216(format_to_string__1240("missing closings: %=", ends__1252))}, false);
exports.read = read__1244}
