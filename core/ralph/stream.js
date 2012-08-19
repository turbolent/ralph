var B1495 = require("ralph/core")
false
{var B1496 = B1495["%make-class"], B1497 = B1495["<object>"], B1498 = B1496(B1497, {});
exports["<stream>"] = B1498}
{var B1499 = B1495["%make-generic"], B1500 = B1499("stream_close");
exports["stream-close"] = B1500}
{var B1501 = B1499("stream_openQ");
exports["stream-open?"] = B1501}
{var B1502 = B1499("stream_at_endQ");
exports["stream-at-end?"] = B1502}
{var B1503 = B1499("stream_peek");
exports["stream-peek"] = B1503}
{var B1504 = B1499("stream_read");
exports["stream-read"] = B1504}
{var B1505 = B1499("stream_read_element");
exports["stream-read-element"] = B1505}
{var B1506 = B1499("stream_read_to_end");
exports["stream-read-to-end"] = B1506}
{var B1507 = B1499("stream_read_through");
exports["stream-read-through"] = B1507}
{var B1508 = B1499("stream_unread_element");
exports["stream-unread-element"] = B1508}
{var B1509 = B1499("stream_write");
exports["stream-write"] = B1509}
{var B1510 = B1499("stream_contents");
exports["stream-contents"] = B1510}
{var B1511 = B1499("stream_remaining_contents");
exports["stream-remaining-contents"] = B1511}
{var B1512 = B1496(B1498, {"string":function B1513 ()
{return ""},
index:function B1514 ()
{return 0},
length:function B1515 ()
{return 0}});
exports["<string-stream>"] = B1512}
var B1516 = B1495["%make-method"], B1517 = B1495.apply, B1518 = B1495["%next-method"], B1519 = B1495["get-setter"], B1520 = B1495.size, B1521 = B1495.get, B1522 = B1516("initialize", function B1528 (stream__1523)
{var rest__1524 = $SL.call(arguments, 1);
B1517(B1518(B1528), stream__1523, rest__1524);
var object__1526 = B1521(stream__1523, "string"), B1527 = ((object__1526 || false).length || 0);
return B1519(stream__1523, "length", B1527)}, false, B1512, B1522)
{var B1529 = B1495["=="];
B1502 = B1516("stream_at_endQ", function B1531 (stream__1530)
{return B1529(B1521(stream__1530, "index"), B1521(stream__1530, "length"))}, false, B1512, B1502);
exports["stream-at-end?"] = B1502}
{var B1532 = B1495.element;
B1503 = B1516("stream_peek", function B1534 (stream__1533)
{return B1532(B1521(stream__1533, "string"), B1521(stream__1533, "index"))}, false, B1512, B1503);
exports["stream-peek"] = B1503}
{var trueQ = B1495["true?"], B1535 = B1495.not;
B1505 = B1516("stream_read_element", function B1541 (stream__1536)
{var value__1539 = B1502(stream__1536), B1540 = !(trueQ(value__1539));
if ($T(B1540))
{var element__1537 = B1503(stream__1536);
B1519(stream__1536, "index", (B1521(stream__1536, "index") + 1));
return element__1537}}, false, B1512, B1505);
exports["stream-read-element"] = B1505}
{var trueQ = B1495["true?"], B1543 = B1495[">="], B1544 = B1495.concatenate, B1545 = B1495.inc;
B1504 = B1516("stream_read", function B1558 (stream__1546, n__1547)
{var result__1548 = "", i__1549 = 0;
while ($T(true))
{var B1550 = B1502(stream__1546), value__1553;
if ($T(B1550))
value__1553 = B1550
else value__1553 = B1543(i__1549, n__1547);
var B1557 = !(trueQ(value__1553));
if ($T(B1557))
{(function B1559 (i__1551)
{return result__1548 = B1544(result__1548, B1505(stream__1546))})(i__1549);
var number__1555 = i__1549, B1556 = (number__1555 + 1);
i__1549 = B1556}
else break};
return result__1548}, false, B1512, B1504);
exports["stream-read"] = B1504}
{var trueQ = B1495["true?"];
B1507 = B1516("stream_read_through", function B1568 (stream__1561, element__1562)
{var foundQ__1563;
while ($T(true))
{var B1564 = B1502(stream__1561), value__1566;
if ($T(B1564))
value__1566 = B1564
else value__1566 = foundQ__1563;
var B1567 = !(trueQ(value__1566));
if ($T(B1567))
foundQ__1563 = B1529(B1505(stream__1561), element__1562)
else break};
return false}, false, B1512, B1507);
exports["stream-read-through"] = B1507}
{var B1569 = B1495.max, B1570 = B1495.dec;
B1508 = B1516("stream_unread_element", function B1576 (stream__1571)
{var number__1573 = B1521(stream__1571, "index"), B1574 = (number__1573 - 1), B1575 = B1569(0, B1574);
return B1519(stream__1571, "index", B1575)}, false, B1512, B1508);
exports["stream-unread-element"] = B1508}
{var B1587 = $K("start"), B1588 = $K("end"), B1578 = B1495["replace-subsequence"];
B1509 = B1516("stream_write", function B1589 (stream__1579, string__1580)
{var B1581 = stream__1579, index__1582 = B1581.index, object__1586 = string__1580, length__1583 = ((object__1586 || false).length || 0), end__1584 = (index__1582 + length__1583);
B1519(stream__1579, "string", B1578(B1521(stream__1579, "string"), string__1580, B1587, index__1582, B1588, end__1584));
B1519(stream__1579, "index", end__1584);
B1519(stream__1579, "length", B1569(end__1584, B1521(stream__1579, "length")));
return string__1580}, false, B1512, B1509);
exports["stream-write"] = B1509}
{B1510 = B1516("stream_contents", function B1591 (stream__1590)
{return B1521(stream__1590, "string")}, false, B1512, B1510);
exports["stream-contents"] = B1510}
{var B1592 = B1495.slice;
B1511 = B1516("stream_remaining_contents", function B1600 (stream__1593)
{var array__1597 = B1521(stream__1593, "string"), start__1598 = B1521(stream__1593, "index"), end__1599 = undefined;
return array__1597.slice(start__1598, end__1599)}, false, B1512, B1511);
exports["stream-remaining-contents"] = B1511}
{var B1601 = B1496(B1498, {file:false});
exports["<file-stream>"] = B1601}
{B1509 = B1516("stream_write", function B1604 (stream__1602, string__1603)
{return stream__1602.file.write(string__1603)}, false, B1601, B1509);
exports["stream-write"] = B1509}
{var B1607 = $K("file"), B1605 = B1495.make, B1606 = B1605(B1601, B1607, process.stdout);
exports["*standard-out*"] = B1606}
