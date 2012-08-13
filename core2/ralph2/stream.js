var $g1490 = require("ralph2/core")
false
{var $g1491 = $g1490["%make-class"], $g1492 = $g1490["<object>"], $g1493 = $g1491($g1492, {});
exports["<stream>"] = $g1493}
{var $g1494 = $g1490["%make-generic"], $g1495 = $g1494("stream_close");
exports["stream-close"] = $g1495}
{var $g1496 = $g1494("stream_openQ");
exports["stream-open?"] = $g1496}
{var $g1497 = $g1494("stream_at_endQ");
exports["stream-at-end?"] = $g1497}
{var $g1498 = $g1494("stream_peek");
exports["stream-peek"] = $g1498}
{var $g1499 = $g1494("stream_read");
exports["stream-read"] = $g1499}
{var $g1500 = $g1494("stream_read_element");
exports["stream-read-element"] = $g1500}
{var $g1501 = $g1494("stream_read_to_end");
exports["stream-read-to-end"] = $g1501}
{var $g1502 = $g1494("stream_read_through");
exports["stream-read-through"] = $g1502}
{var $g1503 = $g1494("stream_unread_element");
exports["stream-unread-element"] = $g1503}
{var $g1504 = $g1494("stream_write");
exports["stream-write"] = $g1504}
{var $g1505 = $g1494("stream_contents");
exports["stream-contents"] = $g1505}
{var $g1506 = $g1494("stream_remaining_contents");
exports["stream-remaining-contents"] = $g1506}
{var $g1507 = $g1491($g1493, {"string":function $g1508 ()
{return ""},
index:function $g1509 ()
{return 0},
length:function $g1510 ()
{return 0}});
exports["<string-stream>"] = $g1507}
var $g1511 = $g1490["%make-method"], $g1512 = $g1490.apply, $g1513 = $g1490["%next-method"], $g1514 = $g1490["get-setter"], $g1515 = $g1490.size, $g1516 = $g1490.get, $g1517 = $g1511("initialize", function $g1523 ($stream1518)
{var $rest1519 = $SL.call(arguments, 1);
$g1512($g1513($g1523), $stream1518, $rest1519);
var $robject1521 = $g1516($stream1518, "string"), $g1522 = (($robject1521 || false).length || 0);
return $g1514($stream1518, "length", $g1522)}, false, $g1507, $g1517)
{var $g1524 = $g1490["=="];
$g1497 = $g1511("stream_at_endQ", function $g1526 ($stream1525)
{return $g1524($g1516($stream1525, "index"), $g1516($stream1525, "length"))}, false, $g1507, $g1497);
exports["stream-at-end?"] = $g1497}
{var $g1527 = $g1490.element;
$g1498 = $g1511("stream_peek", function $g1529 ($stream1528)
{return $g1527($g1516($stream1528, "string"), $g1516($stream1528, "index"))}, false, $g1507, $g1498);
exports["stream-peek"] = $g1498}
{var trueQ = $g1490["true?"], $g1530 = $g1490.not;
$g1500 = $g1511("stream_read_element", function $g1536 ($stream1531)
{var $value1534 = $g1497($stream1531), $g1535 = !(trueQ($value1534));
if ($T($g1535))
{var $element1532 = $g1498($stream1531);
$g1514($stream1531, "index", ($g1516($stream1531, "index") + 1));
return $element1532}}, false, $g1507, $g1500);
exports["stream-read-element"] = $g1500}
{var trueQ = $g1490["true?"], $g1538 = $g1490[">="], $g1539 = $g1490.concatenate, $g1540 = $g1490.inc;
$g1499 = $g1511("stream_read", function $g1553 ($stream1541, $n1542)
{var $result1543 = "", $i1544 = 0;
while ($T(true))
{var $g1545 = $g1497($stream1541), $value1548;
if ($T($g1545))
$value1548 = $g1545
else $value1548 = $g1538($i1544, $n1542);
var $g1552 = !(trueQ($value1548));
if ($T($g1552))
{(function $g1554 ($i1546)
{return $result1543 = $g1539($result1543, $g1500($stream1541))})($i1544);
var $rnumber1550 = $i1544, $g1551 = ($rnumber1550 + 1);
$i1544 = $g1551}
else break};
return $result1543}, false, $g1507, $g1499);
exports["stream-read"] = $g1499}
{var trueQ = $g1490["true?"];
$g1502 = $g1511("stream_read_through", function $g1563 ($stream1556, $element1557)
{var $foundq1558;
while ($T(true))
{var $g1559 = $g1497($stream1556), $value1561;
if ($T($g1559))
$value1561 = $g1559
else $value1561 = $foundq1558;
var $g1562 = !(trueQ($value1561));
if ($T($g1562))
$foundq1558 = $g1524($g1500($stream1556), $element1557)
else break};
return false}, false, $g1507, $g1502);
exports["stream-read-through"] = $g1502}
{var $g1564 = $g1490.max, $g1565 = $g1490.dec;
$g1503 = $g1511("stream_unread_element", function $g1571 ($stream1566)
{var $rnumber1568 = $g1516($stream1566, "index"), $g1569 = ($rnumber1568 - 1), $g1570 = $g1564(0, $g1569);
return $g1514($stream1566, "index", $g1570)}, false, $g1507, $g1503);
exports["stream-unread-element"] = $g1503}
{var $g1582 = $K("start"), $g1583 = $K("end"), $g1573 = $g1490["replace-subsequence"];
$g1504 = $g1511("stream_write", function $g1584 ($stream1574, $rstring1575)
{var $g1576 = $stream1574, $index1577 = $g1576.index, $robject1581 = $rstring1575, $length1578 = (($robject1581 || false).length || 0), $end1579 = ($index1577 + $length1578);
$g1514($stream1574, "string", $g1573($g1516($stream1574, "string"), $rstring1575, $g1582, $index1577, $g1583, $end1579));
$g1514($stream1574, "index", $end1579);
$g1514($stream1574, "length", $g1564($end1579, $g1516($stream1574, "length")));
return $rstring1575}, false, $g1507, $g1504);
exports["stream-write"] = $g1504}
{$g1505 = $g1511("stream_contents", function $g1586 ($stream1585)
{return $g1516($stream1585, "string")}, false, $g1507, $g1505);
exports["stream-contents"] = $g1505}
{var $g1587 = $g1490.slice;
$g1506 = $g1511("stream_remaining_contents", function $g1595 ($stream1588)
{var $rarray1592 = $g1516($stream1588, "string"), $start1593 = $g1516($stream1588, "index"), $end1594 = undefined;
return $rarray1592.slice($start1593, $end1594)}, false, $g1507, $g1506);
exports["stream-remaining-contents"] = $g1506}
{var $g1596 = $g1491($g1493, {file:false});
exports["<file-stream>"] = $g1596}
{$g1504 = $g1511("stream_write", function $g1599 ($stream1597, $rstring1598)
{return $stream1597.file.write($rstring1598)}, false, $g1596, $g1504);
exports["stream-write"] = $g1504}
{var $g1602 = $K("file"), $g1600 = $g1490.make, $g1601 = $g1600($g1596, $g1602, process.stdout);
exports["*standard-out*"] = $g1601}
