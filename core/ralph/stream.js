var B1470 = require("ralph/core")
false
{var B1471 = B1470["%make-class"], B1472 = B1470["<object>"], B1473 = B1471(B1472, {});
exports["<stream>"] = B1473}
{var B1474 = B1470["%make-generic"], B1475 = B1474("stream_close");
exports["stream-close"] = B1475}
{var B1476 = B1474("stream_openQ");
exports["stream-open?"] = B1476}
{var B1477 = B1474("stream_at_endQ");
exports["stream-at-end?"] = B1477}
{var B1478 = B1474("stream_peek");
exports["stream-peek"] = B1478}
{var B1479 = B1474("stream_read");
exports["stream-read"] = B1479}
{var B1480 = B1474("stream_read_element");
exports["stream-read-element"] = B1480}
{var B1481 = B1474("stream_read_to_end");
exports["stream-read-to-end"] = B1481}
{var B1482 = B1474("stream_read_through");
exports["stream-read-through"] = B1482}
{var B1483 = B1474("stream_unread_element");
exports["stream-unread-element"] = B1483}
{var B1484 = B1474("stream_write");
exports["stream-write"] = B1484}
{var B1485 = B1474("stream_contents");
exports["stream-contents"] = B1485}
{var B1486 = B1474("stream_remaining_contents");
exports["stream-remaining-contents"] = B1486}
{var B1487 = B1471(B1473, {"string":function B1488 ()
{return ""},
index:function B1489 ()
{return 0},
length:function B1490 ()
{return 0}});
exports["<string-stream>"] = B1487}
var B1491 = B1470["%make-method"], B1492 = B1470.apply, B1493 = B1470["%next-method"], B1494 = B1470.size, B1495 = B1470.get, B1496 = B1491("initialize", function B1502 (stream__1497)
{var rest__1498 = $SL.call(arguments, 1);
B1492(B1493(B1502), stream__1497, rest__1498);
var object__1500 = B1495(stream__1497, "string"), B1501 = ((object__1500 || false).length || 0);
return stream__1497.length = B1501}, false, B1487, B1496)
{var B1503 = B1470["=="];
B1477 = B1491("stream_at_endQ", function B1505 (stream__1504)
{return B1503(B1495(stream__1504, "index"), B1495(stream__1504, "length"))}, false, B1487, B1477);
exports["stream-at-end?"] = B1477}
{var B1506 = B1470.element;
B1478 = B1491("stream_peek", function B1508 (stream__1507)
{return B1506(B1495(stream__1507, "string"), B1495(stream__1507, "index"))}, false, B1487, B1478);
exports["stream-peek"] = B1478}
{var trueQ = B1470["true?"], B1509 = B1470.not;
B1480 = B1491("stream_read_element", function B1515 (stream__1510)
{var value__1513 = B1477(stream__1510), B1514 = !(trueQ(value__1513));
if ($T(B1514))
{var element__1511 = B1478(stream__1510);
stream__1510.index = (B1495(stream__1510, "index") + 1);
return element__1511}}, false, B1487, B1480);
exports["stream-read-element"] = B1480}
{var trueQ = B1470["true?"], B1517 = B1470[">="], B1518 = B1470.concatenate, B1519 = B1470.inc;
B1479 = B1491("stream_read", function B1532 (stream__1520, n__1521)
{var result__1522 = "", i__1523 = 0;
while ($T(true))
{var B1524 = B1477(stream__1520), value__1527;
if ($T(B1524))
value__1527 = B1524
else value__1527 = B1517(i__1523, n__1521);
var B1531 = !(trueQ(value__1527));
if ($T(B1531))
{(function B1533 (i__1525)
{return result__1522 = B1518(result__1522, B1480(stream__1520))})(i__1523);
var number__1529 = i__1523, B1530 = (number__1529 + 1);
i__1523 = B1530}
else break};
return result__1522}, false, B1487, B1479);
exports["stream-read"] = B1479}
{var trueQ = B1470["true?"];
B1482 = B1491("stream_read_through", function B1542 (stream__1535, element__1536)
{var foundQ__1537;
while ($T(true))
{var B1538 = B1477(stream__1535), value__1540;
if ($T(B1538))
value__1540 = B1538
else value__1540 = foundQ__1537;
var B1541 = !(trueQ(value__1540));
if ($T(B1541))
foundQ__1537 = B1503(B1480(stream__1535), element__1536)
else break};
return false}, false, B1487, B1482);
exports["stream-read-through"] = B1482}
{var B1543 = B1470.max, B1544 = B1470.dec;
B1483 = B1491("stream_unread_element", function B1550 (stream__1545)
{var number__1547 = B1495(stream__1545, "index"), B1548 = (number__1547 - 1), B1549 = B1543(0, B1548);
return stream__1545.index = B1549}, false, B1487, B1483);
exports["stream-unread-element"] = B1483}
{var B1561 = $K("start"), B1562 = $K("end"), B1552 = B1470["replace-subsequence"];
B1484 = B1491("stream_write", function B1563 (stream__1553, string__1554)
{var B1555 = stream__1553, index__1556 = B1555.index, object__1560 = string__1554, length__1557 = ((object__1560 || false).length || 0), end__1558 = (index__1556 + length__1557);
stream__1553["string"] = B1552(B1495(stream__1553, "string"), string__1554, B1561, index__1556, B1562, end__1558);
stream__1553.index = end__1558;
stream__1553.length = B1543(end__1558, B1495(stream__1553, "length"));
return string__1554}, false, B1487, B1484);
exports["stream-write"] = B1484}
{B1485 = B1491("stream_contents", function B1565 (stream__1564)
{return B1495(stream__1564, "string")}, false, B1487, B1485);
exports["stream-contents"] = B1485}
{var B1566 = B1470.slice;
B1486 = B1491("stream_remaining_contents", function B1574 (stream__1567)
{var array__1571 = B1495(stream__1567, "string"), start__1572 = B1495(stream__1567, "index"), end__1573 = undefined;
return array__1571.slice(start__1572, end__1573)}, false, B1487, B1486);
exports["stream-remaining-contents"] = B1486}
{var B1575 = B1471(B1473, {file:false});
exports["<file-stream>"] = B1575}
{B1484 = B1491("stream_write", function B1578 (stream__1576, string__1577)
{return stream__1576.file.write(string__1577)}, false, B1575, B1484);
exports["stream-write"] = B1484}
{var B1581 = $K("file"), B1579 = B1470.make, B1580 = B1579(B1575, B1581, process.stdout);
exports["*standard-out*"] = B1580}
