var $g1470 = require("ralph/core")
false
{var $g1471 = $g1470["%make-class"], $g1472 = $g1470["<object>"], $g1473 = $g1471($g1472, {});
exports["<stream>"] = $g1473}
{var $g1474 = $g1470["%make-generic"], $g1475 = $g1474("stream_close");
exports["stream-close"] = $g1475}
{var $g1476 = $g1474("stream_openQ");
exports["stream-open?"] = $g1476}
{var $g1477 = $g1474("stream_at_endQ");
exports["stream-at-end?"] = $g1477}
{var $g1478 = $g1474("stream_peek");
exports["stream-peek"] = $g1478}
{var $g1479 = $g1474("stream_read");
exports["stream-read"] = $g1479}
{var $g1480 = $g1474("stream_read_element");
exports["stream-read-element"] = $g1480}
{var $g1481 = $g1474("stream_read_to_end");
exports["stream-read-to-end"] = $g1481}
{var $g1482 = $g1474("stream_read_through");
exports["stream-read-through"] = $g1482}
{var $g1483 = $g1474("stream_unread_element");
exports["stream-unread-element"] = $g1483}
{var $g1484 = $g1474("stream_write");
exports["stream-write"] = $g1484}
{var $g1485 = $g1474("stream_contents");
exports["stream-contents"] = $g1485}
{var $g1486 = $g1474("stream_remaining_contents");
exports["stream-remaining-contents"] = $g1486}
{var $g1487 = $g1471($g1473, {"string":function $g1488 ()
{return ""},
index:function $g1489 ()
{return 0},
length:function $g1490 ()
{return 0}});
exports["<string-stream>"] = $g1487}
var $g1491 = $g1470["%make-method"], $g1492 = $g1470.apply, $g1493 = $g1470["%next-method"], $g1494 = $g1470["get-setter"], $g1495 = $g1470.size, $g1496 = $g1470.get, $g1497 = $g1491("initialize", function $g1503 ($stream1498)
{var $rest1499 = $SL.call(arguments, 1);
$g1492($g1493($g1503), $stream1498, $rest1499);
var $robject1501 = $g1496($stream1498, "string"), $g1502 = (($robject1501 || false).length || 0);
return $g1494($stream1498, "length", $g1502)}, false, $g1487, $g1497)
{var $g1504 = $g1470["=="];
$g1477 = $g1491("stream_at_endQ", function $g1506 ($stream1505)
{return $g1504($g1496($stream1505, "index"), $g1496($stream1505, "length"))}, false, $g1487, $g1477);
exports["stream-at-end?"] = $g1477}
{var $g1507 = $g1470.element;
$g1478 = $g1491("stream_peek", function $g1509 ($stream1508)
{return $g1507($g1496($stream1508, "string"), $g1496($stream1508, "index"))}, false, $g1487, $g1478);
exports["stream-peek"] = $g1478}
{var trueQ = $g1470["true?"], $g1510 = $g1470.not;
$g1480 = $g1491("stream_read_element", function $g1516 ($stream1511)
{var $value1514 = $g1477($stream1511), $g1515 = !(trueQ($value1514));
if ($T($g1515))
{var $element1512 = $g1478($stream1511);
$g1494($stream1511, "index", ($g1496($stream1511, "index") + 1));
return $element1512}}, false, $g1487, $g1480);
exports["stream-read-element"] = $g1480}
{var trueQ = $g1470["true?"], $g1518 = $g1470[">="], $g1519 = $g1470.concatenate, $g1520 = $g1470.inc;
$g1479 = $g1491("stream_read", function $g1533 ($stream1521, $n1522)
{var $result1523 = "", $i1524 = 0;
while ($T(true))
{var $g1525 = $g1477($stream1521), $value1528;
if ($T($g1525))
$value1528 = $g1525
else $value1528 = $g1518($i1524, $n1522);
var $g1532 = !(trueQ($value1528));
if ($T($g1532))
{(function $g1534 ($i1526)
{return $result1523 = $g1519($result1523, $g1480($stream1521))})($i1524);
var $rnumber1530 = $i1524, $g1531 = ($rnumber1530 + 1);
$i1524 = $g1531}
else break};
return $result1523}, false, $g1487, $g1479);
exports["stream-read"] = $g1479}
{var trueQ = $g1470["true?"];
$g1482 = $g1491("stream_read_through", function $g1543 ($stream1536, $element1537)
{var $foundq1538;
while ($T(true))
{var $g1539 = $g1477($stream1536), $value1541;
if ($T($g1539))
$value1541 = $g1539
else $value1541 = $foundq1538;
var $g1542 = !(trueQ($value1541));
if ($T($g1542))
$foundq1538 = $g1504($g1480($stream1536), $element1537)
else break};
return false}, false, $g1487, $g1482);
exports["stream-read-through"] = $g1482}
{var $g1544 = $g1470.max, $g1545 = $g1470.dec;
$g1483 = $g1491("stream_unread_element", function $g1551 ($stream1546)
{var $rnumber1548 = $g1496($stream1546, "index"), $g1549 = ($rnumber1548 - 1), $g1550 = $g1544(0, $g1549);
return $g1494($stream1546, "index", $g1550)}, false, $g1487, $g1483);
exports["stream-unread-element"] = $g1483}
{var $g1562 = $K("start"), $g1563 = $K("end"), $g1553 = $g1470["replace-subsequence"];
$g1484 = $g1491("stream_write", function $g1564 ($stream1554, $rstring1555)
{var $g1556 = $stream1554, $index1557 = $g1556.index, $robject1561 = $rstring1555, $length1558 = (($robject1561 || false).length || 0), $end1559 = ($index1557 + $length1558);
$g1494($stream1554, "string", $g1553($g1496($stream1554, "string"), $rstring1555, $g1562, $index1557, $g1563, $end1559));
$g1494($stream1554, "index", $end1559);
$g1494($stream1554, "length", $g1544($end1559, $g1496($stream1554, "length")));
return $rstring1555}, false, $g1487, $g1484);
exports["stream-write"] = $g1484}
{$g1485 = $g1491("stream_contents", function $g1566 ($stream1565)
{return $g1496($stream1565, "string")}, false, $g1487, $g1485);
exports["stream-contents"] = $g1485}
{var $g1567 = $g1470.slice;
$g1486 = $g1491("stream_remaining_contents", function $g1575 ($stream1568)
{var $rarray1572 = $g1496($stream1568, "string"), $start1573 = $g1496($stream1568, "index"), $end1574 = undefined;
return $rarray1572.slice($start1573, $end1574)}, false, $g1487, $g1486);
exports["stream-remaining-contents"] = $g1486}
{var $g1576 = $g1471($g1473, {file:false});
exports["<file-stream>"] = $g1576}
{$g1484 = $g1491("stream_write", function $g1579 ($stream1577, $rstring1578)
{return $stream1577.file.write($rstring1578)}, false, $g1576, $g1484);
exports["stream-write"] = $g1484}
{var $g1582 = $K("file"), $g1580 = $g1470.make, $g1581 = $g1580($g1576, $g1582, process.stdout);
exports["*standard-out*"] = $g1581}
