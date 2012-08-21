var B1676 = require("ralph/core")
var B1678 = require("ralph/stream")
var B1679 = B1676["%make-function"],
B1680 = B1676["as-string"],
B1681 = B1679("format_integer", function format_integer__1682 (number__1683)
{return B1680(number__1683)}, false)
{
var B1811 = $K("message"),
trueQ = B1676["true?"],
B1688 = B1676["binary=="],
B1689 = B1676.description,
B1690 = B1676.signal,
B1691 = B1676.make,
B1692 = B1676["<error>"],
B1693 = B1676.concatenate,
B1694 = B1676["as-lowercase"],
B1695 = B1676.not,
B1696 = B1676["empty?"],
B1697 = B1676[">"],
B1698 = B1678["stream-write"],
B1699 = B1676.slice,
B1700 = B1676.second,
B1701 = B1676.element,
B1702 = B1676.position,
B1703 = B1679("format", function format__1704 (stream__1705, control_string__1706)
{
var args__1707 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var dispatch__1708 = function B1709 (char__1710, arg__1711)
{
var string__1721 = char__1710,
B1712 = string__1721.toLowerCase(),
object1__1724 = B1712,
object2__1725 = "s",
B1713 = (object1__1724 === object2__1725),
B1798;
if ($T(B1713))
B1798 = B1713
else
{
var object1__1728 = B1712,
object2__1729 = "c";
B1798 = (object1__1728 === object2__1729)};
if ($T(B1798))
return arg__1711
else
{
var object1__1732 = B1712,
object2__1733 = "=",
B1799 = (object1__1732 === object2__1733);
if ($T(B1799))
{
var B1714 = B1689(arg__1711);
if ($T(B1714))
return B1714
else
return ""}
else
{
var object1__1736 = B1712,
object2__1737 = "b",
B1800 = (object1__1736 === object2__1737);
if ($T(B1800))
return B1681(arg__1711, 2)
else
{
var object1__1740 = B1712,
object2__1741 = "o",
B1801 = (object1__1740 === object2__1741);
if ($T(B1801))
return B1681(arg__1711, 8)
else
{
var object1__1744 = B1712,
object2__1745 = "d",
B1802 = (object1__1744 === object2__1745);
if ($T(B1802))
return B1681(arg__1711, 10)
else
{
var object1__1748 = B1712,
object2__1749 = "x",
B1803 = (object1__1748 === object2__1749);
if ($T(B1803))
return B1681(arg__1711, 16)
else
{
var object1__1752 = B1712,
object2__1753 = "m",
B1804 = (object1__1752 === object2__1753);
if ($T(B1804))
{
arg__1711(stream__1705);
return ""}
else
{
var error__1755 = B1691(B1692, B1811, B1693("Unknown format dispatch character ", char__1710));
throw(error__1755);
return false}}}}}}}},
index__1715 = 0;
while (true)
{
var sequence__1767 = control_string__1706,
B1768 = sequence__1767,
B1769 = ((B1768 || false).length || 0),
B1770 = 0,
value__1771 = (B1769 === B1770),
B1810 = !(trueQ(value__1771));
if ($T(B1810))
{
var next_dispatch__1716 = B1702(control_string__1706, "%");
if ($T(B1697(next_dispatch__1716, 0)))
{
var array__1775 = control_string__1706,
start__1776 = 0,
end__1777 = next_dispatch__1716,
B1805 = array__1775.slice(start__1776, end__1777);
B1698(stream__1705, B1805);
var array__1781 = control_string__1706,
start__1782 = next_dispatch__1716,
end__1783 = undefined,
B1806 = array__1781.slice(start__1782, end__1783);
control_string__1706 = B1806}
else
if ($T(next_dispatch__1716))
{
var arg__1717 = B1701(args__1707, index__1715),
sequence__1785 = control_string__1706,
char__1718 = sequence__1785[1],
object1__1788 = char__1718,
object2__1789 = "%",
percent__1719 = (object1__1788 === object2__1789),
B1807;
if ($T(percent__1719))
B1807 = "%"
else
B1807 = dispatch__1708(char__1718, arg__1717);
B1698(stream__1705, B1807);
var array__1793 = control_string__1706,
start__1794 = 2,
end__1795 = undefined,
B1808 = array__1793.slice(start__1794, end__1795);
control_string__1706 = B1808;
var value__1797 = percent__1719,
B1809 = !(trueQ(value__1797));
if ($T(B1809))
index__1715 = (index__1715 + 1)}
else
{
B1698(stream__1705, control_string__1706);
control_string__1706 = ""}}
else
break};
return false}, false);
exports.format = B1703}
{
var B1812 = B1676.apply,
B1813 = B1678["*standard-out*"],
B1814 = B1679("format_out", function format_out__1815 (control_string__1816)
{
var args__1817 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return B1812(B1703, B1813, control_string__1816, args__1817)}, false);
exports["format-out"] = B1814}
{
var B1818 = B1678["stream-contents"],
B1819 = B1678["<string-stream>"],
B1820 = B1679("format_to_string", function format_to_string__1821 (control_string__1822)
{
var args__1823 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var stream__1824 = B1691(B1819);
B1812(B1703, stream__1824, control_string__1822, args__1823);
return B1818(stream__1824)}, false);
exports["format-to-string"] = B1820}
