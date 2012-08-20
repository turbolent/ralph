var B1468 = require("ralph/core")
var B1592 = require("ralph/stream")
var B1593 = B1468["%make-function"], B1594 = B1468["as-string"], B1595 = B1593("format_integer", function B1597 (number__1596)
{return B1594(number__1596)}, false)
{var B1722 = $K("message"), trueQ = B1468["true?"], B1601 = B1468["binary=="], B1602 = B1468.description, B1603 = B1468.signal, B1604 = B1468.make, B1605 = B1468["<error>"], B1606 = B1468.concatenate, B1607 = B1468["as-lowercase"], B1608 = B1468.not, B1609 = B1468["empty?"], B1610 = B1468[">"], B1611 = B1592["stream-write"], B1612 = B1468.slice, B1613 = B1468.second, B1614 = B1468.element, B1615 = B1468.position, B1616 = B1593("format", function B1723 (stream__1617, control_string__1618)
{var args__1619 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1620 = function B1724 (char__1621, arg__1622)
{var string__1632 = char__1621, B1623 = string__1632.toLowerCase(), object1__1635 = B1623, object2__1636 = "s", B1624 = (object1__1635 === object2__1636), B1709;
if ($T(B1624))
B1709 = B1624
else {var object1__1639 = B1623, object2__1640 = "c";
B1709 = (object1__1639 === object2__1640)};
if ($T(B1709))
return arg__1622
else {var object1__1643 = B1623, object2__1644 = "=", B1710 = (object1__1643 === object2__1644);
if ($T(B1710))
{var B1625 = B1602(arg__1622);
if ($T(B1625))
return B1625
else return ""}
else {var object1__1647 = B1623, object2__1648 = "b", B1711 = (object1__1647 === object2__1648);
if ($T(B1711))
return B1595(arg__1622, 2)
else {var object1__1651 = B1623, object2__1652 = "o", B1712 = (object1__1651 === object2__1652);
if ($T(B1712))
return B1595(arg__1622, 8)
else {var object1__1655 = B1623, object2__1656 = "d", B1713 = (object1__1655 === object2__1656);
if ($T(B1713))
return B1595(arg__1622, 10)
else {var object1__1659 = B1623, object2__1660 = "x", B1714 = (object1__1659 === object2__1660);
if ($T(B1714))
return B1595(arg__1622, 16)
else {var object1__1663 = B1623, object2__1664 = "m", B1715 = (object1__1663 === object2__1664);
if ($T(B1715))
{arg__1622(stream__1617);
return ""}
else {var error__1666 = B1604(B1605, B1722, B1606("Unknown format dispatch character ", char__1621));
throw(error__1666);
return false}}}}}}}}, index__1626 = 0;
while (true)
{var sequence__1678 = control_string__1618, B1679 = sequence__1678, B1680 = ((B1679 || false).length || 0), B1681 = 0, value__1682 = (B1680 === B1681), B1721 = !(trueQ(value__1682));
if ($T(B1721))
{var next_dispatch__1627 = B1615(control_string__1618, "%");
if ($T(B1610(next_dispatch__1627, 0)))
{var array__1686 = control_string__1618, start__1687 = 0, end__1688 = next_dispatch__1627, B1716 = array__1686.slice(start__1687, end__1688);
B1611(stream__1617, B1716);
var array__1692 = control_string__1618, start__1693 = next_dispatch__1627, end__1694 = undefined, B1717 = array__1692.slice(start__1693, end__1694);
control_string__1618 = B1717}
else if ($T(next_dispatch__1627))
{var arg__1628 = B1614(args__1619, index__1626), sequence__1696 = control_string__1618, char__1629 = sequence__1696[1], object1__1699 = char__1629, object2__1700 = "%", percent__1630 = (object1__1699 === object2__1700), B1718;
if ($T(percent__1630))
B1718 = "%"
else B1718 = dispatch__1620(char__1629, arg__1628);
B1611(stream__1617, B1718);
var array__1704 = control_string__1618, start__1705 = 2, end__1706 = undefined, B1719 = array__1704.slice(start__1705, end__1706);
control_string__1618 = B1719;
var value__1708 = percent__1630, B1720 = !(trueQ(value__1708));
if ($T(B1720))
index__1626 = (index__1626 + 1)}
else {B1611(stream__1617, control_string__1618);
control_string__1618 = ""}}
else break};
return false}, false);
exports.format = B1616}
{var B1725 = B1468.apply, B1726 = B1592["*standard-out*"], B1727 = B1593("format_out", function B1730 (control_string__1728)
{var args__1729 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return B1725(B1616, B1726, control_string__1728, args__1729)}, false);
exports["format-out"] = B1727}
{var B1731 = B1592["stream-contents"], B1732 = B1592["<string-stream>"], B1733 = B1593("format_to_string", function B1737 (control_string__1734)
{var args__1735 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1736 = B1604(B1732);
B1725(B1616, stream__1736, control_string__1734, args__1735);
return B1731(stream__1736)}, false);
exports["format-to-string"] = B1733}
