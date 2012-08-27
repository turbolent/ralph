var B1676 = require("ralph/core")
var B1678 = require("ralph/stream")
var B1679 = B1676["%make-function"],
B1680 = B1676["as-string"],
B1681 = B1679("format_integer", function format_integer__1682 (number__1683)
{return B1680(number__1683)}, false)
{
var B1810 = $K("message"),
trueQ = B1676["true?"],
B1687 = B1676["binary=="],
B1688 = B1676.description,
B1689 = B1676.signal,
B1690 = B1676.make,
B1691 = B1676["<error>"],
B1692 = B1676.concatenate,
B1693 = B1676["as-lowercase"],
B1694 = B1676.not,
B1695 = B1676["empty?"],
B1696 = B1676[">"],
B1697 = B1678["stream-write"],
B1698 = B1676.slice,
B1699 = B1676.second,
B1700 = B1676.element,
B1701 = B1676.position,
B1702 = B1679("format", function format__1703 (stream__1704, control_string__1705)
{
var args__1706 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1707 = function dispatch__1708 (char__1709, arg__1710)
{
var string__1720 = char__1709,
B1711 = string__1720.toLowerCase(),
object1__1723 = B1711,
object2__1724 = "s",
B1712 = (object1__1723 === object2__1724),
B1797;
if ($T(B1712))
B1797 = B1712
else
{
var object1__1727 = B1711,
object2__1728 = "c";
B1797 = (object1__1727 === object2__1728)};
if ($T(B1797))
return arg__1710
else
{
var object1__1731 = B1711,
object2__1732 = "=",
B1798 = (object1__1731 === object2__1732);
if ($T(B1798))
{
var B1713 = B1688(arg__1710);
if ($T(B1713))
return B1713
else
return ""}
else
{
var object1__1735 = B1711,
object2__1736 = "b",
B1799 = (object1__1735 === object2__1736);
if ($T(B1799))
return B1681(arg__1710, 2)
else
{
var object1__1739 = B1711,
object2__1740 = "o",
B1800 = (object1__1739 === object2__1740);
if ($T(B1800))
return B1681(arg__1710, 8)
else
{
var object1__1743 = B1711,
object2__1744 = "d",
B1801 = (object1__1743 === object2__1744);
if ($T(B1801))
return B1681(arg__1710, 10)
else
{
var object1__1747 = B1711,
object2__1748 = "x",
B1802 = (object1__1747 === object2__1748);
if ($T(B1802))
return B1681(arg__1710, 16)
else
{
var object1__1751 = B1711,
object2__1752 = "m",
B1803 = (object1__1751 === object2__1752);
if ($T(B1803))
{
arg__1710(stream__1704);
return ""}
else
{
var error__1754 = B1690(B1691, B1810, B1692("Unknown format dispatch character ", char__1709));
throw(error__1754);
return false}}}}}}}},
index__1714 = 0;
while (true)
{
var sequence__1766 = control_string__1705,
B1767 = sequence__1766,
B1768 = ((B1767 || false).length || 0),
B1769 = 0,
value__1770 = (B1768 === B1769),
B1809 = !(trueQ(value__1770));
if ($T(B1809))
{
var next_dispatch__1715 = B1701(control_string__1705, "%");
if ($T(B1696(next_dispatch__1715, 0)))
{
var array__1774 = control_string__1705,
start__1775 = 0,
end__1776 = next_dispatch__1715,
B1804 = array__1774.slice(start__1775, end__1776);
B1697(stream__1704, B1804);
var array__1780 = control_string__1705,
start__1781 = next_dispatch__1715,
end__1782 = undefined,
B1805 = array__1780.slice(start__1781, end__1782);
control_string__1705 = B1805}
else
if ($T(next_dispatch__1715))
{
var arg__1716 = B1700(args__1706, index__1714),
sequence__1784 = control_string__1705,
char__1717 = sequence__1784[1],
object1__1787 = char__1717,
object2__1788 = "%",
percent__1718 = (object1__1787 === object2__1788),
B1806;
if ($T(percent__1718))
B1806 = "%"
else
B1806 = dispatch__1707(char__1717, arg__1716);
B1697(stream__1704, B1806);
var array__1792 = control_string__1705,
start__1793 = 2,
end__1794 = undefined,
B1807 = array__1792.slice(start__1793, end__1794);
control_string__1705 = B1807;
var value__1796 = percent__1718,
B1808 = !(trueQ(value__1796));
if ($T(B1808))
index__1714 = (index__1714 + 1)}
else
{
B1697(stream__1704, control_string__1705);
control_string__1705 = ""}}
else
break};
return false}, false);
exports.format = B1702}
{
var B1811 = B1676.apply,
B1812 = B1678["*standard-out*"],
B1813 = B1679("format_out", function format_out__1814 (control_string__1815)
{
var args__1816 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return B1811(B1702, B1812, control_string__1815, args__1816)}, false);
exports["format-out"] = B1813}
{
var B1817 = B1678["stream-contents"],
B1818 = B1678["<string-stream>"],
B1819 = B1679("format_to_string", function format_to_string__1820 (control_string__1821)
{
var args__1822 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1823 = B1690(B1818);
B1811(B1702, stream__1823, control_string__1821, args__1822);
return B1817(stream__1823)}, false);
exports["format-to-string"] = B1819}
