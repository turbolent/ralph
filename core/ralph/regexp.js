var B1713 = require("ralph/core")
false
{var B1714 = RegExp;
exports["<regexp>"] = B1714}
var B1717 = B1713["%make-method"], B1718 = B1713.concatenate, B1719 = B1713["%keys"], B1720 = B1717("initialize", function B1732 (regexp__1721)
{var B1722 = $SL.call(arguments, 1), B1723 = B1719(B1722, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}), pattern__1724 = B1723.pattern, globalQ__1725 = B1723["global?"], ignore_caseQ__1726 = B1723["ignore-case?"], multilineQ__1727 = B1723["multiline?"];
if ($T(pattern__1724))
{var B1729;
if ($T(globalQ__1725))
B1729 = "g"
else B1729 = "";
var B1730;
if ($T(ignore_caseQ__1726))
B1730 = "i"
else B1730 = "";
var B1731;
if ($T(multilineQ__1727))
B1731 = "m"
else B1731 = "";
var flags__1728 = B1718(B1729, B1730, B1731);
return regexp__1721.compile(pattern__1724)}}, false, B1714, B1720)
var B1733 = B1713["%make-function"], B1734 = B1713[">"], B1735 = B1733("find", function B1739 (regexp__1736, string__1737)
{var position__1738 = string__1737.search(regexp__1736);
if ($T(B1734(position__1738, -1)))
return position__1738}, false)
{var B1740 = B1733("match", function B1743 (regexp__1741, string__1742)
{return string__1742.match(regexp__1741)}, false);
exports.match = B1740}
