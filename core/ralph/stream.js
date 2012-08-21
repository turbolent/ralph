var B1538 = require("ralph/core")
false
{
var B1539 = B1538["%make-class"],
B1540 = B1538["<object>"],
B1541 = B1539(B1540, {});
exports["<stream>"] = B1541}
{
var B1542 = B1538["%make-generic"],
B1543 = B1542("stream_close");
exports["stream-close"] = B1543}
{
var B1544 = B1542("stream_openQ");
exports["stream-open?"] = B1544}
{
var B1545 = B1542("stream_at_endQ");
exports["stream-at-end?"] = B1545}
{
var B1546 = B1542("stream_peek");
exports["stream-peek"] = B1546}
{
var B1547 = B1542("stream_read");
exports["stream-read"] = B1547}
{
var B1548 = B1542("stream_read_element");
exports["stream-read-element"] = B1548}
{
var B1549 = B1542("stream_read_to_end");
exports["stream-read-to-end"] = B1549}
{
var B1550 = B1542("stream_read_through");
exports["stream-read-through"] = B1550}
{
var B1551 = B1542("stream_unread_element");
exports["stream-unread-element"] = B1551}
{
var B1552 = B1542("stream_write");
exports["stream-write"] = B1552}
{
var B1553 = B1542("stream_contents");
exports["stream-contents"] = B1553}
{
var B1554 = B1542("stream_remaining_contents");
exports["stream-remaining-contents"] = B1554}
{
var B1558 = B1539(B1541, {"string":function B1559 ()
{return ""},
index:function B1560 ()
{return 0},
length:function B1561 ()
{return 0}});
exports["<string-stream>"] = B1558}
var B1563 = B1538["%make-method"],
B1564 = B1538.apply,
B1565 = B1538["%next-method"],
B1566 = B1538.size,
B1567 = B1538.get,
B1568 = B1563("initialize", function B1569 (stream__1570)
{
var rest__1571 = $SL.call(arguments, 1);
B1564(B1565(B1569), stream__1570, rest__1571);
var object__1573 = B1567(stream__1570, "string"),
B1574 = ((object__1573 || false).length || 0);
return stream__1570.length = B1574}, false, B1558, B1568)
{
var B1576 = B1538["binary=="];
B1545 = B1563("stream_at_endQ", function B1577 (stream__1578)
{
var object1__1581 = B1567(stream__1578, "index"),
object2__1582 = B1567(stream__1578, "length");
return (object1__1581 === object2__1582)}, false, B1558, B1545);
exports["stream-at-end?"] = B1545}
{
var B1584 = B1538.element;
B1546 = B1563("stream_peek", function B1585 (stream__1586)
{return B1584(B1567(stream__1586, "string"), B1567(stream__1586, "index"))}, false, B1558, B1546);
exports["stream-peek"] = B1546}
{
var trueQ = B1538["true?"],
B1588 = B1538.not;
B1548 = B1563("stream_read_element", function B1589 (stream__1590)
{
var value__1593 = B1545(stream__1590),
B1594 = !(trueQ(value__1593));
if ($T(B1594))
{
var element__1591 = B1546(stream__1590);
stream__1590.index = (B1567(stream__1590, "index") + 1);
return element__1591}}, false, B1558, B1548);
exports["stream-read-element"] = B1548}
{
var trueQ = B1538["true?"],
B1598 = B1538[">="],
B1599 = B1538.concatenate,
B1600 = B1538.inc;
B1547 = B1563("stream_read", function B1601 (stream__1602, n__1603)
{
var result__1604 = "",
i__1605 = 0;
while (true)
{
var B1606 = B1545(stream__1602),
value__1610;
if ($T(B1606))
value__1610 = B1606
else
value__1610 = B1598(i__1605, n__1603);
var B1614 = !(trueQ(value__1610));
if ($T(B1614))
{
(function B1607 (i__1608)
{return result__1604 = B1599(result__1604, B1548(stream__1602))})(i__1605);
var number__1612 = i__1605,
B1613 = (number__1612 + 1);
i__1605 = B1613}
else
break};
return result__1604}, false, B1558, B1547);
exports["stream-read"] = B1547}
{
var trueQ = B1538["true?"];
B1550 = B1563("stream_read_through", function B1617 (stream__1618, element__1619)
{
var foundQ__1620;
while (true)
{
var B1621 = B1545(stream__1618),
value__1623;
if ($T(B1621))
value__1623 = B1621
else
value__1623 = foundQ__1620;
var B1629 = !(trueQ(value__1623));
if ($T(B1629))
{
var object1__1626 = B1548(stream__1618),
object2__1627 = element__1619,
B1628 = (object1__1626 === object2__1627);
foundQ__1620 = B1628}
else
break};
return false}, false, B1558, B1550);
exports["stream-read-through"] = B1550}
{
var B1631 = B1538.max,
B1632 = B1538.dec;
B1551 = B1563("stream_unread_element", function B1633 (stream__1634)
{
var number__1636 = B1567(stream__1634, "index"),
B1637 = (number__1636 - 1),
B1638 = B1631(0, B1637);
return stream__1634.index = B1638}, false, B1558, B1551);
exports["stream-unread-element"] = B1551}
{
var B1651 = $K("start"),
B1652 = $K("end"),
B1641 = B1538["replace-subsequence"];
B1552 = B1563("stream_write", function B1642 (stream__1643, string__1644)
{
var B1645 = stream__1643,
index__1646 = B1645.index,
object__1650 = string__1644,
length__1647 = ((object__1650 || false).length || 0),
end__1648 = (index__1646 + length__1647);
stream__1643["string"] = B1641(B1567(stream__1643, "string"), string__1644, B1651, index__1646, B1652, end__1648);
stream__1643.index = end__1648;
stream__1643.length = B1631(end__1648, B1567(stream__1643, "length"));
return string__1644}, false, B1558, B1552);
exports["stream-write"] = B1552}
{
B1553 = B1563("stream_contents", function B1654 (stream__1655)
{return B1567(stream__1655, "string")}, false, B1558, B1553);
exports["stream-contents"] = B1553}
{
var B1657 = B1538.slice;
B1554 = B1563("stream_remaining_contents", function B1658 (stream__1659)
{
var array__1663 = B1567(stream__1659, "string"),
start__1664 = B1567(stream__1659, "index"),
end__1665 = undefined;
return array__1663.slice(start__1664, end__1665)}, false, B1558, B1554);
exports["stream-remaining-contents"] = B1554}
{
var B1666 = B1539(B1541, {file:false});
exports["<file-stream>"] = B1666}
{
B1552 = B1563("stream_write", function B1668 (stream__1669, string__1670)
{return stream__1669.file.write(string__1670)}, false, B1666, B1552);
exports["stream-write"] = B1552}
{
var B1673 = $K("file"),
B1671 = B1538.make,
B1672 = B1671(B1666, B1673, process.stdout);
exports["*standard-out*"] = B1672}
