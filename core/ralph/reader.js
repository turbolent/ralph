{
var B1416;
false;
B1416 = require("ralph/core")}
{
var B1453,
B1454,
B1455;
false;
B1453 = require("ralph/stream");
false;
B1454 = require("ralph/format");
false;
B1455 = require("ralph/regexp")}
{
var B1461 = $K("ignore-case?"),
B1462 = $K("pattern"),
map__1456 = B1416.map,
curry__1457 = B1416.curry,
make__1458 = B1416.make,
LregexpG__1459 = B1455["<regexp>"],
Tnumber_patternsT__1460;
false;
Tnumber_patternsT__1460 = map__1456(curry__1457(make__1458, LregexpG__1459, B1461, true, B1462), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])}
{
var Tline_patternT__1463;
false;
Tline_patternT__1463 = make__1458(LregexpG__1459, B1462, "(.*)[\n\r]?")}
{
var Twhitespace_subpatternT__1464;
false;
Twhitespace_subpatternT__1464 = "\t\n\r\v\f\u00a0\ufeff "}
{
var concatenate__1465 = B1416.concatenate,
Twhitespace_patternT__1466;
false;
Twhitespace_patternT__1466 = make__1458(LregexpG__1459, B1462, concatenate__1465("[", Twhitespace_subpatternT__1464, "]*"))}
{
var Tatom_patternT__1467;
false;
Tatom_patternT__1467 = make__1458(LregexpG__1459, B1462, concatenate__1465("[^\\[\\]();`,", Twhitespace_subpatternT__1464, "]+"))}
{
var Mmake_function__1469 = B1416["%make-function"],
stream_read__1470 = B1453["stream-read"],
size__1471 = B1416.size,
first__1472 = B1416.first,
match__1473 = B1455.match,
stream_remaining_contents__1474 = B1453["stream-remaining-contents"],
match_stream__1475;
false;
match_stream__1475 = Mmake_function__1469("match_stream", function match_stream__1476 (regexp__1477, stream__1478)
{
var string__1482 = stream_remaining_contents__1474(stream__1478),
regexp__1481 = regexp__1477,
B1468__1479 = string__1482.match(regexp__1481);
if ($T(B1468__1479))
{
var result__1480 = B1468__1479,
object__1483 = first__1472(result__1480),
B1484 = ((object__1483 || false).length || 0);
stream_read__1470(stream__1478, B1484);
return result__1480}}, false)}
{
var read_line__1485;
false;
read_line__1485 = Mmake_function__1469("read_line", function read_line__1486 (stream__1487)
{return match_stream__1475(Tline_patternT__1463, stream__1487)}, false)}
{
var read_whitespace__1488;
false;
read_whitespace__1488 = Mmake_function__1469("read_whitespace", function read_whitespace__1489 (stream__1490)
{return match_stream__1475(Twhitespace_patternT__1466, stream__1490)}, false)}
{
var B1527 = $KEY,
B1528 = $REST,
binaryEE__1493 = B1416["binary=="],
as_number__1494 = B1416["as-number"],
last__1495 = B1416.last,
keyword__1496 = B1416.keyword,
but_last__1497 = B1416["but-last"],
symbol__1498 = B1416.symbol,
anyQ__1499 = B1416["any?"],
rcurry__1500 = B1416.rcurry,
make_atom__1501;
false;
make_atom__1501 = Mmake_function__1469("make_atom", function make_atom__1502 (value__1503)
{
var B1491__1504 = value__1503,
object2__1508 = "#t",
object1__1507 = B1491__1504,
B1520 = (object1__1507 === object2__1508);
if ($T(B1520))
{return true}
else
{
var object2__1510 = "#f",
object1__1509 = B1491__1504,
B1521 = (object1__1509 === object2__1510);
if ($T(B1521))
{return false}
else
{
var object2__1512 = "#key",
object1__1511 = B1491__1504,
B1522 = (object1__1511 === object2__1512);
if ($T(B1522))
{return B1527}
else
{
var object2__1514 = "#rest",
object1__1513 = B1491__1504,
B1523 = (object1__1513 === object2__1514);
if ($T(B1523))
{return B1528}
else
{
var B1492__1505 = anyQ__1499(rcurry__1500(match__1473, value__1503), Tnumber_patternsT__1460);
if ($T(B1492__1505))
{
var number__1506 = B1492__1505,
sequence__1515 = number__1506,
B1524 = sequence__1515[0];
return as_number__1494(B1524)}
else
{
var object2__1517 = ":",
object1__1516 = last__1495(value__1503),
B1525 = (object1__1516 === object2__1517);
if ($T(B1525))
{
var n__1519,
array__1518 = value__1503,
B1526 = array__1518.slice(0, ((n__1519 || 1) * -1));
return keyword__1496(B1526)}
else
return symbol__1498(value__1503, false)}}}}}}, false)}
{
var B1580 = $K("radix"),
ralphScoreCCtrueQ = B1416["true?"],
not__1530 = B1416.not,
stream_at_endQ__1531 = B1453["stream-at-end?"],
signal__1532 = B1416.signal,
stream_write__1533 = B1453["stream-write"],
code_char__1534 = B1416["code-char"],
parse_integer__1535 = B1416["parse-integer"],
stream_read_element__1536 = B1453["stream-read-element"],
stream_contents__1537 = B1453["stream-contents"],
Lstring_streamG__1538 = B1453["<string-stream>"],
read_string__1539;
false;
read_string__1539 = Mmake_function__1469("read_string", function read_string__1540 (stream__1541)
{
var result__1542 = make__1458(Lstring_streamG__1538),
char__1543 = stream_read_element__1536(stream__1541);
while (true)
{
var value__1545 = binaryEE__1493(char__1543, "\""),
B1579 = !(ralphScoreCCtrueQ(value__1545));
if ($T(B1579))
{
if ($T(stream_at_endQ__1531(stream__1541)))
{
var error__1546 = "missing end of string";
throw(error__1546);
false};
var object2__1548 = "\\",
object1__1547 = char__1543,
B1568 = (object1__1547 === object2__1548),
B1578;
if ($T(B1568))
{
var B1529__1544 = stream_read_element__1536(stream__1541),
object2__1550 = "\"",
object1__1549 = B1529__1544,
B1569 = (object1__1549 === object2__1550);
if ($T(B1569))
{B1578 = "\""}
else
{
var object2__1552 = "\\",
object1__1551 = B1529__1544,
B1570 = (object1__1551 === object2__1552);
if ($T(B1570))
{B1578 = "\\"}
else
{
var object2__1554 = "b",
object1__1553 = B1529__1544,
B1571 = (object1__1553 === object2__1554);
if ($T(B1571))
{B1578 = "\b"}
else
{
var object2__1556 = "f",
object1__1555 = B1529__1544,
B1572 = (object1__1555 === object2__1556);
if ($T(B1572))
{B1578 = "\f"}
else
{
var object2__1558 = "n",
object1__1557 = B1529__1544,
B1573 = (object1__1557 === object2__1558);
if ($T(B1573))
{B1578 = "\n"}
else
{
var object2__1560 = "r",
object1__1559 = B1529__1544,
B1574 = (object1__1559 === object2__1560);
if ($T(B1574))
{B1578 = "\r"}
else
{
var object2__1562 = "t",
object1__1561 = B1529__1544,
B1575 = (object1__1561 === object2__1562);
if ($T(B1575))
{B1578 = "\t"}
else
{
var object2__1564 = "v",
object1__1563 = B1529__1544,
B1576 = (object1__1563 === object2__1564);
if ($T(B1576))
{B1578 = "\v"}
else
{
var object2__1566 = "u",
object1__1565 = B1529__1544,
B1577 = (object1__1565 === object2__1566);
if ($T(B1577))
{B1578 = code_char__1534(parse_integer__1535(stream_read__1470(stream__1541, 4), B1580, 16))}
else
{
var error__1567 = "bad escape sequence";
throw(error__1567);
B1578 = false}}}}}}}}}}
else
B1578 = char__1543;
stream_write__1533(result__1542, B1578);
char__1543 = stream_read_element__1536(stream__1541)}
else
break};
return stream_contents__1537(result__1542)}, false)}
{
var Twrapper_symbolsT__1581;
false;
Twrapper_symbolsT__1581 = ["quote", "%backquote", "%comma"]}
{
var B1677 = $S("quote", "ralph/core"),
B1678 = $S("%backquote", "ralph/core"),
B1679 = $S("%comma", "ralph/core"),
B1680 = $S("%array", "ralph/core"),
push_last__1587 = B1416["push-last"],
memberQ__1588 = B1416["member?"],
symbol_name__1589 = B1416["symbol-name"],
pop_last__1590 = B1416["pop-last"],
format_to_string__1591 = B1454["format-to-string"],
stream_unread_element__1592 = B1453["stream-unread-element"],
emptyQ__1593 = B1416["empty?"],
Mkeys__1594 = B1416["%keys"],
read__1595;
false;
read__1595 = Mmake_function__1469("read", function read__1596 (stream__1597)
{
var B1582__1598 = $SL.call(arguments, 1),
B1583__1599 = Mkeys__1594(B1582__1598, {"eof-error?":true,
"eof-value":false}),
eof_errorQ__1600 = B1583__1599["eof-error?"],
eof_value__1601 = B1583__1599["eof-value"],
stack__1602 = [[]],
ends__1603 = [],
add_to_stackN__1604,
add_lastN__1605;
add_to_stackN__1604 = function add_to_stackN__1606 (value__1607)
{
var value__1616 = value__1607,
array__1615 = last__1495(stack__1602);
array__1615.push(value__1616);
array__1615;
var sequence__1617 = last__1495(stack__1602),
B1661 = sequence__1617[0],
B1662 = symbol_name__1589(B1661),
B1663 = memberQ__1588(B1662, Twrapper_symbolsT__1581);
if ($T(B1663))
{return add_lastN__1605()}};
add_lastN__1605 = function add_lastN__1608 ()
{
var array__1618 = stack__1602,
value__1609 = array__1618.pop();
return add_to_stackN__1604(value__1609)};
while (true)
{
var value__1619 = stream_at_endQ__1531(stream__1597),
B1675 = !(ralphScoreCCtrueQ(value__1619));
if ($T(B1675))
{
read_whitespace__1488(stream__1597);
var char__1610 = stream_read_element__1536(stream__1597),
B1584__1611 = char__1610,
object2__1621 = ";",
object1__1620 = B1584__1611,
B1664 = (object1__1620 === object2__1621);
if ($T(B1664))
{read_line__1485(stream__1597)}
else
{
var object2__1623 = "'",
object1__1622 = B1584__1611,
B1665 = (object1__1622 === object2__1623);
if ($T(B1665))
{
var value__1625 = [B1677],
array__1624 = stack__1602;
array__1624.push(value__1625);
array__1624}
else
{
var object2__1627 = "`",
object1__1626 = B1584__1611,
B1666 = (object1__1626 === object2__1627);
if ($T(B1666))
{
var value__1629 = [B1678],
array__1628 = stack__1602;
array__1628.push(value__1629);
array__1628}
else
{
var object2__1631 = ",",
object1__1630 = B1584__1611,
B1667 = (object1__1630 === object2__1631);
if ($T(B1667))
{
var value__1633 = [B1679],
array__1632 = stack__1602;
array__1632.push(value__1633);
array__1632}
else
{
var object2__1635 = "(",
object1__1634 = B1584__1611,
B1668 = (object1__1634 === object2__1635);
if ($T(B1668))
{
var value__1637 = ")",
array__1636 = ends__1603;
array__1636.push(value__1637);
array__1636;
var value__1639 = [],
array__1638 = stack__1602;
array__1638.push(value__1639);
array__1638}
else
{
var object2__1641 = "[",
object1__1640 = B1584__1611,
B1669 = (object1__1640 === object2__1641);
if ($T(B1669))
{
var value__1643 = "]",
array__1642 = ends__1603;
array__1642.push(value__1643);
array__1642;
var value__1645 = [B1680],
array__1644 = stack__1602;
array__1644.push(value__1645);
array__1644}
else
{
var object2__1647 = last__1495(ends__1603),
object1__1646 = B1584__1611,
B1670 = (object1__1646 === object2__1647);
if ($T(B1670))
{
var array__1648 = ends__1603;
array__1648.pop();
add_lastN__1605()}
else
{
var object2__1650 = ")",
object1__1649 = B1584__1611,
B1585__1612 = (object1__1649 === object2__1650),
B1671;
if ($T(B1585__1612))
{B1671 = B1585__1612}
else
{
var object2__1652 = "]",
object1__1651 = B1584__1611;
B1671 = (object1__1651 === object2__1652)};
if ($T(B1671))
{
var error__1653 = format_to_string__1591("too many closings: %=", char__1610);
throw(error__1653);
false}
else
{
var object2__1655 = "\"",
object1__1654 = B1584__1611,
B1672 = (object1__1654 === object2__1655);
if ($T(B1672))
{add_to_stackN__1604(read_string__1539(stream__1597))}
else
{
stream_unread_element__1592(stream__1597);
var sequence__1656 = match_stream__1475(Tatom_patternT__1467, stream__1597),
B1673 = sequence__1656[0],
B1674 = make_atom__1501(B1673);
add_to_stackN__1604(B1674)}}}}}}}}};
read_whitespace__1488(stream__1597)}
else
break};
var sequence__1657 = ends__1603,
B1676 = binaryEE__1493(size__1471(sequence__1657), 0);
if ($T(B1676))
{
var sequence__1658 = last__1495(stack__1602),
value__1613 = sequence__1658[0],
B1586__1614 = value__1613;
if ($T(B1586__1614))
{return B1586__1614}
else
if ($T(eof_errorQ__1600))
{
var error__1659 = "no object";
throw(error__1659);
return false}
else
return eof_value__1601}
else
{
var error__1660 = format_to_string__1591("missing closings: %=", ends__1603);
throw(error__1660);
return false}}, false);
exports.read = read__1595}
