var B1610 = require("ralph/core")
var B1612 = require("ralph/stream")
var B1613 = B1610["%make-function"], B1614 = B1610["as-string"], B1615 = B1613("format_integer", function B1617 (number__1616)
{return B1614(number__1616)}, false)
{var B1700 = $K("message"), trueQ = B1610["true?"], B1621 = B1610["=="], B1622 = B1610.description, B1623 = B1610.signal, B1624 = B1610.make, B1625 = B1610["<error>"], B1626 = B1610.concatenate, B1627 = B1610["as-lowercase"], B1628 = B1610.not, B1629 = B1610["empty?"], B1630 = B1610[">"], B1631 = B1612["stream-write"], B1632 = B1610.slice, B1633 = B1610.second, B1634 = B1610.element, B1635 = B1610.position, B1636 = B1613("format", function B1701 (stream__1637, control_string__1638)
{var args__1639 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1640 = function B1702 (char__1641, arg__1642)
{var string__1652 = char__1641, B1643 = string__1652.toLowerCase(), B1644 = B1621(B1643, "s"), B1693;
if ($T(B1644))
B1693 = B1644
else B1693 = B1621(B1643, "c");
if ($T(B1693))
return arg__1642
else if ($T(B1621(B1643, "=")))
{var B1645 = B1622(arg__1642);
if ($T(B1645))
return B1645
else return ""}
else if ($T(B1621(B1643, "b")))
return B1615(arg__1642, 2)
else if ($T(B1621(B1643, "o")))
return B1615(arg__1642, 8)
else if ($T(B1621(B1643, "d")))
return B1615(arg__1642, 10)
else if ($T(B1621(B1643, "x")))
return B1615(arg__1642, 16)
else if ($T(B1621(B1643, "m")))
{arg__1642(stream__1637);
return ""}
else {var error__1654 = B1624(B1625, B1700, B1626("Unknown format dispatch character ", char__1641));
throw(error__1654);
return false}}, index__1646 = 0;
while ($T(true))
{var sequence__1666 = control_string__1638, B1667 = sequence__1666, B1668 = ((B1667 || false).length || 0), B1669 = 0, value__1670 = (B1668 === B1669), B1699 = !(trueQ(value__1670));
if ($T(B1699))
{var next_dispatch__1647 = B1635(control_string__1638, "%");
if ($T(B1630(next_dispatch__1647, 0)))
{var array__1674 = control_string__1638, start__1675 = 0, end__1676 = next_dispatch__1647, B1694 = array__1674.slice(start__1675, end__1676);
B1631(stream__1637, B1694);
var array__1680 = control_string__1638, start__1681 = next_dispatch__1647, end__1682 = undefined, B1695 = array__1680.slice(start__1681, end__1682);
control_string__1638 = B1695}
else if ($T(next_dispatch__1647))
{var arg__1648 = B1634(args__1639, index__1646), sequence__1684 = control_string__1638, char__1649 = sequence__1684[1], percent__1650 = B1621(char__1649, "%"), B1696;
if ($T(percent__1650))
B1696 = "%"
else B1696 = dispatch__1640(char__1649, arg__1648);
B1631(stream__1637, B1696);
var array__1688 = control_string__1638, start__1689 = 2, end__1690 = undefined, B1697 = array__1688.slice(start__1689, end__1690);
control_string__1638 = B1697;
var value__1692 = percent__1650, B1698 = !(trueQ(value__1692));
if ($T(B1698))
index__1646 = (index__1646 + 1)}
else {B1631(stream__1637, control_string__1638);
control_string__1638 = ""}}
else break};
return false}, false);
exports.format = B1636}
{var B1703 = B1610.apply, B1704 = B1612["*standard-out*"], B1705 = B1613("format_out", function B1708 (control_string__1706)
{var args__1707 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return B1703(B1636, B1704, control_string__1706, args__1707)}, false);
exports["format-out"] = B1705}
{var B1709 = B1612["stream-contents"], B1710 = B1612["<string-stream>"], B1711 = B1613("format_to_string", function B1715 (control_string__1712)
{var args__1713 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1714 = B1624(B1710);
B1703(B1636, stream__1714, control_string__1712, args__1713);
return B1709(stream__1714)}, false);
exports["format-to-string"] = B1711}
