var $g1715 = require("ralph2/core")
false
{var $g1716 = RegExp;
exports["<regexp>"] = $g1716}
var $g1719 = $g1715["%make-method"], $g1720 = $g1715.concatenate, $g1721 = $g1715["%keys"], $g1722 = $g1719("initialize", function $g1734 ($regexp1723)
{var $g1724 = $SL.call(arguments, 1), $g1725 = $g1721($g1724, {pattern:false,
"global?":false,
"ignore-case?":false,
"multiline?":false}), $pattern1726 = $g1725.pattern, $globalq1727 = $g1725["global?"], $ignore_caseq1728 = $g1725["ignore-case?"], $multilineq1729 = $g1725["multiline?"];
if ($T($pattern1726))
{var $g1731;
if ($T($globalq1727))
$g1731 = "g"
else $g1731 = "";
var $g1732;
if ($T($ignore_caseq1728))
$g1732 = "i"
else $g1732 = "";
var $g1733;
if ($T($multilineq1729))
$g1733 = "m"
else $g1733 = "";
var $flags1730 = $g1720($g1731, $g1732, $g1733);
return $regexp1723.compile($pattern1726)}}, false, $g1716, $g1722)
var $g1735 = $g1715["%make-function"], $g1736 = $g1715[">"], $g1737 = $g1735("find", function $g1741 ($regexp1738, $rstring1739)
{var $position1740 = $rstring1739.search($regexp1738);
if ($T($g1736($position1740, -1)))
return $position1740}, false)
{var $g1742 = $g1735("match", function $g1745 ($regexp1743, $rstring1744)
{return $rstring1744.match($regexp1743)}, false);
exports.match = $g1742}
