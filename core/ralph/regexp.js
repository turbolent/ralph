var $g1758 = require("ralph/core")
false
{var $g1759 = RegExp;
exports["<regexp>"] = $g1759}
var $g1762 = $g1758["%make-method"], $g1763 = $g1758.concatenate, $g1764 = $g1758["%keys"], $g1765 = $g1762("initialize", function $g1777 ($regexp1766)
{var $g1767 = $SL.call(arguments, 1), $g1768 = $g1764($g1767, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}), $pattern1769 = $g1768.pattern, $globalq1770 = $g1768["global?"], $ignore_caseq1771 = $g1768["ignore-case?"], $multilineq1772 = $g1768["multiline?"];
if ($T($pattern1769))
{var $g1774;
if ($T($globalq1770))
$g1774 = "g"
else $g1774 = "";
var $g1775;
if ($T($ignore_caseq1771))
$g1775 = "i"
else $g1775 = "";
var $g1776;
if ($T($multilineq1772))
$g1776 = "m"
else $g1776 = "";
var $flags1773 = $g1763($g1774, $g1775, $g1776);
return $regexp1766.compile($pattern1769)}}, false, $g1759, $g1765)
var $g1778 = $g1758["%make-function"], $g1779 = $g1758[">"], $g1780 = $g1778("find", function $g1784 ($regexp1781, $rstring1782)
{var $position1783 = $rstring1782.search($regexp1781);
if ($T($g1779($position1783, -1)))
return $position1783}, false)
{var $g1785 = $g1778("match", function $g1788 ($regexp1786, $rstring1787)
{return $rstring1787.match($regexp1786)}, false);
exports.match = $g1785}
