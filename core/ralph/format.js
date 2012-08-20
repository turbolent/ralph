var B1468 = require("ralph/core")
var B1583 = require("ralph/stream")
var B1584 = B1468["%make-function"], B1585 = B1468["as-string"], B1586 = B1584("format_integer", function B1588 (number__1587)
{return B1585(number__1587)}, false)
{var B1671 = $K("message"), trueQ = B1468["true?"], B1592 = B1468["=="], B1593 = B1468.description, B1594 = B1468.signal, B1595 = B1468.make, B1596 = B1468["<error>"], B1597 = B1468.concatenate, B1598 = B1468["as-lowercase"], B1599 = B1468.not, B1600 = B1468["empty?"], B1601 = B1468[">"], B1602 = B1583["stream-write"], B1603 = B1468.slice, B1604 = B1468.second, B1605 = B1468.element, B1606 = B1468.position, B1607 = B1584("format", function B1672 (stream__1608, control_string__1609)
{var args__1610 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1611 = function B1673 (char__1612, arg__1613)
{var string__1623 = char__1612, B1614 = string__1623.toLowerCase(), B1615 = B1592(B1614, "s"), B1664;
if ($T(B1615))
B1664 = B1615
else B1664 = B1592(B1614, "c");
if ($T(B1664))
return arg__1613
else if ($T(B1592(B1614, "=")))
{var B1616 = B1593(arg__1613);
if ($T(B1616))
return B1616
else return ""}
else if ($T(B1592(B1614, "b")))
return B1586(arg__1613, 2)
else if ($T(B1592(B1614, "o")))
return B1586(arg__1613, 8)
else if ($T(B1592(B1614, "d")))
return B1586(arg__1613, 10)
else if ($T(B1592(B1614, "x")))
return B1586(arg__1613, 16)
else if ($T(B1592(B1614, "m")))
{arg__1613(stream__1608);
return ""}
else {var error__1625 = B1595(B1596, B1671, B1597("Unknown format dispatch character ", char__1612));
throw(error__1625);
return false}}, index__1617 = 0;
while ($T(true))
{var sequence__1637 = control_string__1609, B1638 = sequence__1637, B1639 = ((B1638 || false).length || 0), B1640 = 0, value__1641 = (B1639 === B1640), B1670 = !(trueQ(value__1641));
if ($T(B1670))
{var next_dispatch__1618 = B1606(control_string__1609, "%");
if ($T(B1601(next_dispatch__1618, 0)))
{var array__1645 = control_string__1609, start__1646 = 0, end__1647 = next_dispatch__1618, B1665 = array__1645.slice(start__1646, end__1647);
B1602(stream__1608, B1665);
var array__1651 = control_string__1609, start__1652 = next_dispatch__1618, end__1653 = undefined, B1666 = array__1651.slice(start__1652, end__1653);
control_string__1609 = B1666}
else if ($T(next_dispatch__1618))
{var arg__1619 = B1605(args__1610, index__1617), sequence__1655 = control_string__1609, char__1620 = sequence__1655[1], percent__1621 = B1592(char__1620, "%"), B1667;
if ($T(percent__1621))
B1667 = "%"
else B1667 = dispatch__1611(char__1620, arg__1619);
B1602(stream__1608, B1667);
var array__1659 = control_string__1609, start__1660 = 2, end__1661 = undefined, B1668 = array__1659.slice(start__1660, end__1661);
control_string__1609 = B1668;
var value__1663 = percent__1621, B1669 = !(trueQ(value__1663));
if ($T(B1669))
index__1617 = (index__1617 + 1)}
else {B1602(stream__1608, control_string__1609);
control_string__1609 = ""}}
else break};
return false}, false);
exports.format = B1607}
{var B1674 = B1468.apply, B1675 = B1583["*standard-out*"], B1676 = B1584("format_out", function B1679 (control_string__1677)
{var args__1678 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return B1674(B1607, B1675, control_string__1677, args__1678)}, false);
exports["format-out"] = B1676}
{var B1680 = B1583["stream-contents"], B1681 = B1583["<string-stream>"], B1682 = B1584("format_to_string", function B1686 (control_string__1683)
{var args__1684 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1685 = B1595(B1681);
B1674(B1607, stream__1685, control_string__1683, args__1684);
return B1680(stream__1685)}, false);
exports["format-to-string"] = B1682}
