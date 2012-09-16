{
var B1290;
false;
B1290 = require("ralph/core")}
{
var B1339,
B1340,
B1341;
false;
B1339 = require("ralph/stream");
false;
B1340 = require("ralph/format");
false;
B1341 = require("ralph/regexp")}
{
var B1347 = $K("ignore-case?"),
B1348 = $K("pattern"),
map__1342 = B1290.map,
curry__1343 = B1290.curry,
make__1344 = B1290.make,
LregexpG__1345 = B1341["<regexp>"],
Tnumber_patternsT__1346;
false;
Tnumber_patternsT__1346 = map__1342(curry__1343(make__1344, LregexpG__1345, B1347, true, B1348), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])}
{
var Tline_patternT__1349;
false;
Tline_patternT__1349 = make__1344(LregexpG__1345, B1348, "(.*)[\n\r]?")}
{
var Twhitespace_subpatternT__1350;
false;
Twhitespace_subpatternT__1350 = "\t\n\r\v\f\u00a0\ufeff "}
{
var concatenate__1351 = B1290.concatenate,
Twhitespace_patternT__1352;
false;
Twhitespace_patternT__1352 = make__1344(LregexpG__1345, B1348, concatenate__1351("[", Twhitespace_subpatternT__1350, "]*"))}
{
var Tatom_patternT__1353;
false;
Tatom_patternT__1353 = make__1344(LregexpG__1345, B1348, concatenate__1351("[^\\[\\]();`,", Twhitespace_subpatternT__1350, "]+"))}
{
var Mmake_function__1355 = B1290["%make-function"],
stream_read__1356 = B1339["stream-read"],
size__1357 = B1290.size,
first__1358 = B1290.first,
match__1359 = B1341.match,
stream_remaining_contents__1360 = B1339["stream-remaining-contents"],
match_stream__1361;
false;
match_stream__1361 = Mmake_function__1355("match_stream", function match_stream__1362 (regexp__1363, stream__1364)
{
var B1354__1365 = match__1359(regexp__1363, stream_remaining_contents__1360(stream__1364));
if ($T(B1354__1365))
{
var result__1366 = B1354__1365;
stream_read__1356(stream__1364, size__1357(first__1358(result__1366)));
return result__1366}}, false)}
{
var read_line__1367;
false;
read_line__1367 = Mmake_function__1355("read_line", function read_line__1368 (stream__1369)
{return match_stream__1361(Tline_patternT__1349, stream__1369)}, false)}
{
var read_whitespace__1370;
false;
read_whitespace__1370 = Mmake_function__1355("read_whitespace", function read_whitespace__1371 (stream__1372)
{return match_stream__1361(Twhitespace_patternT__1352, stream__1372)}, false)}
{
var B1389 = $KEY,
B1390 = $REST,
binaryEE__1375 = B1290["binary=="],
as_number__1376 = B1290["as-number"],
last__1377 = B1290.last,
keyword__1378 = B1290.keyword,
but_last__1379 = B1290["but-last"],
symbol__1380 = B1290.symbol,
anyQ__1381 = B1290["any?"],
rcurry__1382 = B1290.rcurry,
make_atom__1383;
false;
make_atom__1383 = Mmake_function__1355("make_atom", function make_atom__1384 (value__1385)
{
var B1373__1386 = value__1385;
if ($T(binaryEE__1375(B1373__1386, "#t")))
{return true}
else
if ($T(binaryEE__1375(B1373__1386, "#f")))
{return false}
else
if ($T(binaryEE__1375(B1373__1386, "#key")))
{return B1389}
else
if ($T(binaryEE__1375(B1373__1386, "#rest")))
{return B1390}
else
{
var B1374__1387 = anyQ__1381(rcurry__1382(match__1359, value__1385), Tnumber_patternsT__1346);
if ($T(B1374__1387))
{
var number__1388 = B1374__1387;
return as_number__1376(first__1358(number__1388))}
else
if ($T(binaryEE__1375(last__1377(value__1385), ":")))
{return keyword__1378(but_last__1379(value__1385))}
else
return symbol__1380(value__1385, false)}}, false)}
{
var B1408 = $K("radix"),
not__1392 = B1290.not,
stream_at_endQ__1393 = B1339["stream-at-end?"],
signal__1394 = B1290.signal,
stream_write__1395 = B1339["stream-write"],
code_char__1396 = B1290["code-char"],
parse_integer__1397 = B1290["parse-integer"],
stream_read_element__1398 = B1339["stream-read-element"],
stream_contents__1399 = B1339["stream-contents"],
Lstring_streamG__1400 = B1339["<string-stream>"],
read_string__1401;
false;
read_string__1401 = Mmake_function__1355("read_string", function read_string__1402 (stream__1403)
{
var result__1404 = make__1344(Lstring_streamG__1400),
char__1405 = stream_read_element__1398(stream__1403);
while ($T(not__1392(binaryEE__1375(char__1405, "\""))))
{
if ($T(stream_at_endQ__1393(stream__1403)))
{signal__1394("missing end of string")};
var B1407;
if ($T(binaryEE__1375(char__1405, "\\")))
{
var B1391__1406 = stream_read_element__1398(stream__1403);
if ($T(binaryEE__1375(B1391__1406, "\"")))
{B1407 = "\""}
else
if ($T(binaryEE__1375(B1391__1406, "\\")))
{B1407 = "\\"}
else
if ($T(binaryEE__1375(B1391__1406, "b")))
{B1407 = "\b"}
else
if ($T(binaryEE__1375(B1391__1406, "f")))
{B1407 = "\f"}
else
if ($T(binaryEE__1375(B1391__1406, "n")))
{B1407 = "\n"}
else
if ($T(binaryEE__1375(B1391__1406, "r")))
{B1407 = "\r"}
else
if ($T(binaryEE__1375(B1391__1406, "t")))
{B1407 = "\t"}
else
if ($T(binaryEE__1375(B1391__1406, "v")))
{B1407 = "\v"}
else
if ($T(binaryEE__1375(B1391__1406, "u")))
{B1407 = code_char__1396(parse_integer__1397(stream_read__1356(stream__1403, 4), B1408, 16))}
else
B1407 = signal__1394("bad escape sequence")}
else
B1407 = char__1405;
stream_write__1395(result__1404, B1407);
char__1405 = stream_read_element__1398(stream__1403)};
return stream_contents__1399(result__1404)}, false)}
{
var B1410 = $S("%at", "ralph/core"),
B1411 = $S("quote", "ralph/core"),
B1412 = $S("%backquote", "ralph/core"),
B1413 = $S("%comma", "ralph/core"),
Twrapper_symbolsT__1409;
false;
Twrapper_symbolsT__1409 = [B1410, B1411, B1412, B1413]}
{
var B1450 = $S("%array", "ralph/core"),
push_last__1419 = B1290["push-last"],
memberQ__1420 = B1290["member?"],
pop_last__1421 = B1290["pop-last"],
stream_peek__1422 = B1339["stream-peek"],
format_to_string__1423 = B1340["format-to-string"],
stream_unread_element__1424 = B1339["stream-unread-element"],
emptyQ__1425 = B1290["empty?"],
Mkeys__1426 = B1290["%keys"],
read__1427;
false;
read__1427 = Mmake_function__1355("read", function read__1428 (stream__1429)
{
var B1414__1430 = $SL.call(arguments, 1),
B1415__1431 = Mkeys__1426(B1414__1430, {"eof-error?":true,
"eof-value":false}),
eof_errorQ__1432 = B1415__1431["eof-error?"],
eof_value__1433 = B1415__1431["eof-value"],
stack__1434 = [[]],
ends__1435 = [],
specialQ__1436,
add_to_stackN__1437,
add_lastN__1438;
add_to_stackN__1437 = function add_to_stackN__1439 (value__1440)
{
push_last__1419(stack__1434, value__1440);
return add_lastN__1438()};
add_lastN__1438 = function add_lastN__1441 ()
{
var value__1442 = pop_last__1421(stack__1434),
l__1443 = last__1377(stack__1434);
if ($T(memberQ__1420(l__1443, Twrapper_symbolsT__1409)))
{return add_to_stackN__1437([pop_last__1421(stack__1434), value__1442])}
else
return push_last__1419(l__1443, value__1442)};
while ($T(not__1392(stream_at_endQ__1393(stream__1429))))
{
read_whitespace__1370(stream__1429);
var char__1444 = stream_read_element__1398(stream__1429),
B1416__1445 = char__1444;
if ($T(binaryEE__1375(B1416__1445, ";")))
{read_line__1367(stream__1429)}
else
if ($T(binaryEE__1375(B1416__1445, "'")))
{push_last__1419(stack__1434, B1411)}
else
if ($T(binaryEE__1375(B1416__1445, "`")))
{push_last__1419(stack__1434, B1412)}
else
if ($T(binaryEE__1375(B1416__1445, ",")))
{if ($T(binaryEE__1375(stream_peek__1422(stream__1429), "@")))
{
stream_read_element__1398(stream__1429);
push_last__1419(stack__1434, B1410)}
else
push_last__1419(stack__1434, B1413)}
else
if ($T(binaryEE__1375(B1416__1445, "(")))
{
push_last__1419(ends__1435, ")");
push_last__1419(stack__1434, [])}
else
if ($T(binaryEE__1375(B1416__1445, "[")))
{
push_last__1419(ends__1435, "]");
push_last__1419(stack__1434, [B1450])}
else
if ($T(binaryEE__1375(B1416__1445, last__1377(ends__1435))))
{
pop_last__1421(ends__1435);
add_lastN__1438()}
else
{
var B1417__1446 = binaryEE__1375(B1416__1445, ")"),
B1449;
if ($T(B1417__1446))
{B1449 = B1417__1446}
else
B1449 = binaryEE__1375(B1416__1445, "]");
if ($T(B1449))
{signal__1394(format_to_string__1423("too many closings: %=", char__1444))}
else
if ($T(binaryEE__1375(B1416__1445, "\"")))
{add_to_stackN__1437(read_string__1401(stream__1429))}
else
{
stream_unread_element__1424(stream__1429);
add_to_stackN__1437(make_atom__1383(first__1358(match_stream__1361(Tatom_patternT__1353, stream__1429))))}};
read_whitespace__1370(stream__1429)};
if ($T(emptyQ__1425(ends__1435)))
{
var value__1447 = first__1358(first__1358(stack__1434)),
B1418__1448 = value__1447;
if ($T(B1418__1448))
{return B1418__1448}
else
if ($T(eof_errorQ__1432))
{return signal__1394("no object")}
else
return eof_value__1433}
else
return signal__1394(format_to_string__1423("missing closings: %=", ends__1435))}, false);
exports.read = read__1427}
