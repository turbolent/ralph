var B1722 = require("ralph/core")
false
{var B1723 = RegExp;
exports["<regexp>"] = B1723}
var B1726 = B1722["%make-method"], B1727 = B1722.concatenate, B1728 = B1722["%keys"], B1729 = B1726("initialize", function B1741 (regexp__1730)
{var B1731 = $SL.call(arguments, 1), B1732 = B1728(B1731, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}), pattern__1733 = B1732.pattern, globalQ__1734 = B1732["global?"], ignore_caseQ__1735 = B1732["ignore-case?"], multilineQ__1736 = B1732["multiline?"];
if ($T(pattern__1733))
{var B1738;
if ($T(globalQ__1734))
B1738 = "g"
else B1738 = "";
var B1739;
if ($T(ignore_caseQ__1735))
B1739 = "i"
else B1739 = "";
var B1740;
if ($T(multilineQ__1736))
B1740 = "m"
else B1740 = "";
var flags__1737 = B1727(B1738, B1739, B1740);
return regexp__1730.compile(pattern__1733)}}, false, B1723, B1729)
var B1742 = B1722["%make-function"], B1743 = B1722[">"], B1744 = B1742("find", function B1748 (regexp__1745, string__1746)
{var position__1747 = string__1746.search(regexp__1745);
if ($T(B1743(position__1747, -1)))
return position__1747}, false)
{var B1749 = B1742("match", function B1752 (regexp__1750, string__1751)
{return string__1751.match(regexp__1750)}, false);
exports.match = B1749}
