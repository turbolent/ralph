var B1757 = require("ralph/core")
false
{var B1758 = RegExp;
exports["<regexp>"] = B1758}
var B1761 = B1757["%make-method"], B1762 = B1757.concatenate, B1763 = B1757["%keys"], B1764 = B1761("initialize", function B1776 (regexp__1765)
{var B1766 = $SL.call(arguments, 1), B1767 = B1763(B1766, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}), pattern__1768 = B1767.pattern, globalQ__1769 = B1767["global?"], ignore_caseQ__1770 = B1767["ignore-case?"], multilineQ__1771 = B1767["multiline?"];
if ($T(pattern__1768))
{var B1773;
if ($T(globalQ__1769))
B1773 = "g"
else B1773 = "";
var B1774;
if ($T(ignore_caseQ__1770))
B1774 = "i"
else B1774 = "";
var B1775;
if ($T(multilineQ__1771))
B1775 = "m"
else B1775 = "";
var flags__1772 = B1762(B1773, B1774, B1775);
return regexp__1765.compile(pattern__1768)}}, false, B1758, B1764)
var B1777 = B1757["%make-function"], B1778 = B1757[">"], B1779 = B1777("find", function B1783 (regexp__1780, string__1781)
{var position__1782 = string__1781.search(regexp__1780);
if ($T(B1778(position__1782, -1)))
return position__1782}, false)
{var B1784 = B1777("match", function B1787 (regexp__1785, string__1786)
{return string__1786.match(regexp__1785)}, false);
exports.match = B1784}
