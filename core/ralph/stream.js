var B1490 = require("ralph/core")
false
{var B1491 = B1490["%make-class"], B1492 = B1490["<object>"], B1493 = B1491(B1492, {});
exports["<stream>"] = B1493}
{var B1494 = B1490["%make-generic"], B1495 = B1494("stream_close");
exports["stream-close"] = B1495}
{var B1496 = B1494("stream_openQ");
exports["stream-open?"] = B1496}
{var B1497 = B1494("stream_at_endQ");
exports["stream-at-end?"] = B1497}
{var B1498 = B1494("stream_peek");
exports["stream-peek"] = B1498}
{var B1499 = B1494("stream_read");
exports["stream-read"] = B1499}
{var B1500 = B1494("stream_read_element");
exports["stream-read-element"] = B1500}
{var B1501 = B1494("stream_read_to_end");
exports["stream-read-to-end"] = B1501}
{var B1502 = B1494("stream_read_through");
exports["stream-read-through"] = B1502}
{var B1503 = B1494("stream_unread_element");
exports["stream-unread-element"] = B1503}
{var B1504 = B1494("stream_write");
exports["stream-write"] = B1504}
{var B1505 = B1494("stream_contents");
exports["stream-contents"] = B1505}
{var B1506 = B1494("stream_remaining_contents");
exports["stream-remaining-contents"] = B1506}
{var B1507 = B1491(B1493, {"string":function B1508 ()
{return ""},
index:function B1509 ()
{return 0},
length:function B1510 ()
{return 0}});
exports["<string-stream>"] = B1507}
var B1511 = B1490["%make-method"], B1512 = B1490.apply, B1513 = B1490["%next-method"], B1514 = B1490["get-setter"], B1515 = B1490.size, B1516 = B1490.get, B1517 = B1511("initialize", function B1523 (stream__1518)
{var rest__1519 = $SL.call(arguments, 1);
B1512(B1513(B1523), stream__1518, rest__1519);
var object__1521 = B1516(stream__1518, "string"), B1522 = ((object__1521 || false).length || 0);
return B1514(stream__1518, "length", B1522)}, false, B1507, B1517)
{var B1524 = B1490["=="];
B1497 = B1511("stream_at_endQ", function B1526 (stream__1525)
{return B1524(B1516(stream__1525, "index"), B1516(stream__1525, "length"))}, false, B1507, B1497);
exports["stream-at-end?"] = B1497}
{var B1527 = B1490.element;
B1498 = B1511("stream_peek", function B1529 (stream__1528)
{return B1527(B1516(stream__1528, "string"), B1516(stream__1528, "index"))}, false, B1507, B1498);
exports["stream-peek"] = B1498}
{var trueQ = B1490["true?"], B1530 = B1490.not;
B1500 = B1511("stream_read_element", function B1536 (stream__1531)
{var value__1534 = B1497(stream__1531), B1535 = !(trueQ(value__1534));
if ($T(B1535))
{var element__1532 = B1498(stream__1531);
B1514(stream__1531, "index", (B1516(stream__1531, "index") + 1));
return element__1532}}, false, B1507, B1500);
exports["stream-read-element"] = B1500}
{var trueQ = B1490["true?"], B1538 = B1490[">="], B1539 = B1490.concatenate, B1540 = B1490.inc;
B1499 = B1511("stream_read", function B1553 (stream__1541, n__1542)
{var result__1543 = "", i__1544 = 0;
while ($T(true))
{var B1545 = B1497(stream__1541), value__1548;
if ($T(B1545))
value__1548 = B1545
else value__1548 = B1538(i__1544, n__1542);
var B1552 = !(trueQ(value__1548));
if ($T(B1552))
{(function B1554 (i__1546)
{return result__1543 = B1539(result__1543, B1500(stream__1541))})(i__1544);
var number__1550 = i__1544, B1551 = (number__1550 + 1);
i__1544 = B1551}
else break};
return result__1543}, false, B1507, B1499);
exports["stream-read"] = B1499}
{var trueQ = B1490["true?"];
B1502 = B1511("stream_read_through", function B1563 (stream__1556, element__1557)
{var foundQ__1558;
while ($T(true))
{var B1559 = B1497(stream__1556), value__1561;
if ($T(B1559))
value__1561 = B1559
else value__1561 = foundQ__1558;
var B1562 = !(trueQ(value__1561));
if ($T(B1562))
foundQ__1558 = B1524(B1500(stream__1556), element__1557)
else break};
return false}, false, B1507, B1502);
exports["stream-read-through"] = B1502}
{var B1564 = B1490.max, B1565 = B1490.dec;
B1503 = B1511("stream_unread_element", function B1571 (stream__1566)
{var number__1568 = B1516(stream__1566, "index"), B1569 = (number__1568 - 1), B1570 = B1564(0, B1569);
return B1514(stream__1566, "index", B1570)}, false, B1507, B1503);
exports["stream-unread-element"] = B1503}
{var B1582 = $K("start"), B1583 = $K("end"), B1573 = B1490["replace-subsequence"];
B1504 = B1511("stream_write", function B1584 (stream__1574, string__1575)
{var B1576 = stream__1574, index__1577 = B1576.index, object__1581 = string__1575, length__1578 = ((object__1581 || false).length || 0), end__1579 = (index__1577 + length__1578);
B1514(stream__1574, "string", B1573(B1516(stream__1574, "string"), string__1575, B1582, index__1577, B1583, end__1579));
B1514(stream__1574, "index", end__1579);
B1514(stream__1574, "length", B1564(end__1579, B1516(stream__1574, "length")));
return string__1575}, false, B1507, B1504);
exports["stream-write"] = B1504}
{B1505 = B1511("stream_contents", function B1586 (stream__1585)
{return B1516(stream__1585, "string")}, false, B1507, B1505);
exports["stream-contents"] = B1505}
{var B1587 = B1490.slice;
B1506 = B1511("stream_remaining_contents", function B1595 (stream__1588)
{var array__1592 = B1516(stream__1588, "string"), start__1593 = B1516(stream__1588, "index"), end__1594 = undefined;
return array__1592.slice(start__1593, end__1594)}, false, B1507, B1506);
exports["stream-remaining-contents"] = B1506}
{var B1596 = B1491(B1493, {file:false});
exports["<file-stream>"] = B1596}
{B1504 = B1511("stream_write", function B1599 (stream__1597, string__1598)
{return stream__1597.file.write(string__1598)}, false, B1596, B1504);
exports["stream-write"] = B1504}
{var B1602 = $K("file"), B1600 = B1490.make, B1601 = B1600(B1596, B1602, process.stdout);
exports["*standard-out*"] = B1601}
