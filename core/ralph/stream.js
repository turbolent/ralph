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
{var B1503 = B1470["binary=="];
B1477 = B1491("stream_at_endQ", function B1509 (stream__1504)
{var object1__1507 = B1495(stream__1504, "index"), object2__1508 = B1495(stream__1504, "length");
return (object1__1507 === object2__1508)}, false, B1487, B1477);
exports["stream-at-end?"] = B1477}
{var B1510 = B1470.element;
B1478 = B1491("stream_peek", function B1512 (stream__1511)
{return B1510(B1495(stream__1511, "string"), B1495(stream__1511, "index"))}, false, B1487, B1478);
exports["stream-peek"] = B1478}
{var trueQ = B1470["true?"], B1513 = B1470.not;
B1480 = B1491("stream_read_element", function B1519 (stream__1514)
{var value__1517 = B1477(stream__1514), B1518 = !(trueQ(value__1517));
if ($T(B1518))
{var element__1515 = B1478(stream__1514);
stream__1514.index = (B1495(stream__1514, "index") + 1);
return element__1515}}, false, B1487, B1480);
exports["stream-read-element"] = B1480}
{var trueQ = B1470["true?"], B1521 = B1470[">="], B1522 = B1470.concatenate, B1523 = B1470.inc;
B1479 = B1491("stream_read", function B1536 (stream__1524, n__1525)
{var result__1526 = "", i__1527 = 0;
while (true)
{var B1528 = B1477(stream__1524), value__1531;
if ($T(B1528))
value__1531 = B1528
else value__1531 = B1521(i__1527, n__1525);
var B1535 = !(trueQ(value__1531));
if ($T(B1535))
{(function B1537 (i__1529)
{return result__1526 = B1522(result__1526, B1480(stream__1524))})(i__1527);
var number__1533 = i__1527, B1534 = (number__1533 + 1);
i__1527 = B1534}
else break};
return result__1526}, false, B1487, B1479);
exports["stream-read"] = B1479}
{var trueQ = B1470["true?"];
B1482 = B1491("stream_read_through", function B1551 (stream__1539, element__1540)
{var foundQ__1541;
while (true)
{var B1542 = B1477(stream__1539), value__1544;
if ($T(B1542))
value__1544 = B1542
else value__1544 = foundQ__1541;
var B1550 = !(trueQ(value__1544));
if ($T(B1550))
{var object1__1547 = B1480(stream__1539), object2__1548 = element__1540, B1549 = (object1__1547 === object2__1548);
foundQ__1541 = B1549}
else break};
return false}, false, B1487, B1482);
exports["stream-read-through"] = B1482}
{var B1552 = B1470.max, B1553 = B1470.dec;
B1483 = B1491("stream_unread_element", function B1559 (stream__1554)
{var number__1556 = B1495(stream__1554, "index"), B1557 = (number__1556 - 1), B1558 = B1552(0, B1557);
return stream__1554.index = B1558}, false, B1487, B1483);
exports["stream-unread-element"] = B1483}
{var B1570 = $K("start"), B1571 = $K("end"), B1561 = B1470["replace-subsequence"];
B1484 = B1491("stream_write", function B1572 (stream__1562, string__1563)
{var B1564 = stream__1562, index__1565 = B1564.index, object__1569 = string__1563, length__1566 = ((object__1569 || false).length || 0), end__1567 = (index__1565 + length__1566);
stream__1562["string"] = B1561(B1495(stream__1562, "string"), string__1563, B1570, index__1565, B1571, end__1567);
stream__1562.index = end__1567;
stream__1562.length = B1552(end__1567, B1495(stream__1562, "length"));
return string__1563}, false, B1487, B1484);
exports["stream-write"] = B1484}
{B1485 = B1491("stream_contents", function B1574 (stream__1573)
{return B1495(stream__1573, "string")}, false, B1487, B1485);
exports["stream-contents"] = B1485}
{var B1575 = B1470.slice;
B1486 = B1491("stream_remaining_contents", function B1583 (stream__1576)
{var array__1580 = B1495(stream__1576, "string"), start__1581 = B1495(stream__1576, "index"), end__1582 = undefined;
return array__1580.slice(start__1581, end__1582)}, false, B1487, B1486);
exports["stream-remaining-contents"] = B1486}
{var B1584 = B1471(B1473, {file:false});
exports["<file-stream>"] = B1584}
{B1484 = B1491("stream_write", function B1587 (stream__1585, string__1586)
{return stream__1585.file.write(string__1586)}, false, B1584, B1484);
exports["stream-write"] = B1484}
{var B1590 = $K("file"), B1588 = B1470.make, B1589 = B1588(B1584, B1590, process.stdout);
exports["*standard-out*"] = B1589}
