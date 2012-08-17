var B1605 = require("ralph/core")
var B1607 = require("ralph/stream")
var B1608 = B1605["%make-function"], B1609 = B1605["as-string"], B1610 = B1608("format_integer", function B1612 (number__1611)
{return B1609(number__1611)}, false)
{var B1695 = $K("message"), trueQ = B1605["true?"], B1616 = B1605["=="], B1617 = B1605.description, B1618 = B1605.signal, B1619 = B1605.make, B1620 = B1605["<error>"], B1621 = B1605.concatenate, B1622 = B1605["as-lowercase"], B1623 = B1605.not, B1624 = B1605["empty?"], B1625 = B1605[">"], B1626 = B1607["stream-write"], B1627 = B1605.slice, B1628 = B1605.second, B1629 = B1605.element, B1630 = B1605.position, B1631 = B1608("format", function B1696 (stream__1632, control_string__1633)
{var args__1634 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1635 = function B1697 (char__1636, arg__1637)
{var string__1647 = char__1636, B1638 = string__1647.toLowerCase(), B1639 = B1616(B1638, "s"), B1688;
if ($T(B1639))
B1688 = B1639
else B1688 = B1616(B1638, "c");
if ($T(B1688))
return arg__1637
else if ($T(B1616(B1638, "=")))
{var B1640 = B1617(arg__1637);
if ($T(B1640))
return B1640
else return ""}
else if ($T(B1616(B1638, "b")))
return B1610(arg__1637, 2)
else if ($T(B1616(B1638, "o")))
return B1610(arg__1637, 8)
else if ($T(B1616(B1638, "d")))
return B1610(arg__1637, 10)
else if ($T(B1616(B1638, "x")))
return B1610(arg__1637, 16)
else if ($T(B1616(B1638, "m")))
{arg__1637(stream__1632);
return ""}
else {var error__1649 = B1619(B1620, B1695, B1621("Unknown format dispatch character ", char__1636));
throw(error__1649);
return false}}, index__1641 = 0;
while ($T(true))
{var sequence__1661 = control_string__1633, B1662 = sequence__1661, B1663 = ((B1662 || false).length || 0), B1664 = 0, value__1665 = (B1663 === B1664), B1694 = !(trueQ(value__1665));
if ($T(B1694))
{var next_dispatch__1642 = B1630(control_string__1633, "%");
if ($T(B1625(next_dispatch__1642, 0)))
{var array__1669 = control_string__1633, start__1670 = 0, end__1671 = next_dispatch__1642, B1689 = array__1669.slice(start__1670, end__1671);
B1626(stream__1632, B1689);
var array__1675 = control_string__1633, start__1676 = next_dispatch__1642, end__1677 = undefined, B1690 = array__1675.slice(start__1676, end__1677);
control_string__1633 = B1690}
else if ($T(next_dispatch__1642))
{var arg__1643 = B1629(args__1634, index__1641), sequence__1679 = control_string__1633, char__1644 = sequence__1679[1], percent__1645 = B1616(char__1644, "%"), B1691;
if ($T(percent__1645))
B1691 = "%"
else B1691 = dispatch__1635(char__1644, arg__1643);
B1626(stream__1632, B1691);
var array__1683 = control_string__1633, start__1684 = 2, end__1685 = undefined, B1692 = array__1683.slice(start__1684, end__1685);
control_string__1633 = B1692;
var value__1687 = percent__1645, B1693 = !(trueQ(value__1687));
if ($T(B1693))
index__1641 = (index__1641 + 1)}
else {B1626(stream__1632, control_string__1633);
control_string__1633 = ""}}
else break};
return false}, false);
exports.format = B1631}
{var B1698 = B1605.apply, B1699 = B1607["*standard-out*"], B1700 = B1608("format_out", function B1703 (control_string__1701)
{var args__1702 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return B1698(B1631, B1699, control_string__1701, args__1702)}, false);
exports["format-out"] = B1700}
{var B1704 = B1607["stream-contents"], B1705 = B1607["<string-stream>"], B1706 = B1608("format_to_string", function B1710 (control_string__1707)
{var args__1708 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1709 = B1619(B1705);
B1698(B1631, stream__1709, control_string__1707, args__1708);
return B1704(stream__1709)}, false);
exports["format-to-string"] = B1706}
