var $g1713 = require("ralph/core")
false
{var $g1714 = RegExp;
exports["<regexp>"] = $g1714}
var $g1717 = $g1713["%make-method"], $g1718 = $g1713.concatenate, $g1719 = $g1713["%keys"], $g1720 = $g1717("initialize", function $g1732 ($regexp1721)
{var $g1722 = $SL.call(arguments, 1), $g1723 = $g1719($g1722, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}), $pattern1724 = $g1723.pattern, $globalq1725 = $g1723["global?"], $ignore_caseq1726 = $g1723["ignore-case?"], $multilineq1727 = $g1723["multiline?"];
if ($T($pattern1724))
{var $g1729;
if ($T($globalq1725))
$g1729 = "g"
else $g1729 = "";
var $g1730;
if ($T($ignore_caseq1726))
$g1730 = "i"
else $g1730 = "";
var $g1731;
if ($T($multilineq1727))
$g1731 = "m"
else $g1731 = "";
var $flags1728 = $g1718($g1729, $g1730, $g1731);
return $regexp1721.compile($pattern1724)}}, false, $g1714, $g1720)
var $g1733 = $g1713["%make-function"], $g1734 = $g1713[">"], $g1735 = $g1733("find", function $g1739 ($regexp1736, $rstring1737)
{var $position1738 = $rstring1737.search($regexp1736);
if ($T($g1734($position1738, -1)))
return $position1738}, false)
{var $g1740 = $g1733("match", function $g1743 ($regexp1741, $rstring1742)
{return $rstring1742.match($regexp1741)}, false);
exports.match = $g1740}
