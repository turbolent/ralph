var $g1605 = require("ralph/core")
var $g1607 = require("ralph/stream")
var $g1608 = $g1605["%make-function"], $g1609 = $g1605["as-string"], $g1610 = $g1608("format_integer", function $g1612 ($rnumber1611)
{return $g1609($rnumber1611)}, false)
{var $g1695 = $K("message"), trueQ = $g1605["true?"], $g1616 = $g1605["=="], $g1617 = $g1605.description, $g1618 = $g1605.signal, $g1619 = $g1605.make, $g1620 = $g1605["<error>"], $g1621 = $g1605.concatenate, $g1622 = $g1605["as-lowercase"], $g1623 = $g1605.not, $g1624 = $g1605["empty?"], $g1625 = $g1605[">"], $g1626 = $g1607["stream-write"], $g1627 = $g1605.slice, $g1628 = $g1605.second, $g1629 = $g1605.element, $g1630 = $g1605.position, $g1631 = $g1608("format", function $g1696 ($stream1632, $control_string1633)
{var $args1634 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var $dispatch1635 = function $g1697 ($rchar1636, $arg1637)
{var $rstring1647 = $rchar1636, $g1638 = $rstring1647.toLowerCase(), $g1639 = $g1616($g1638, "s"), $g1688;
if ($T($g1639))
$g1688 = $g1639
else $g1688 = $g1616($g1638, "c");
if ($T($g1688))
return $arg1637
else if ($T($g1616($g1638, "=")))
{var $g1640 = $g1617($arg1637);
if ($T($g1640))
return $g1640
else return ""}
else if ($T($g1616($g1638, "b")))
return $g1610($arg1637, 2)
else if ($T($g1616($g1638, "o")))
return $g1610($arg1637, 8)
else if ($T($g1616($g1638, "d")))
return $g1610($arg1637, 10)
else if ($T($g1616($g1638, "x")))
return $g1610($arg1637, 16)
else if ($T($g1616($g1638, "m")))
{$arg1637($stream1632);
return ""}
else {var $error1649 = $g1619($g1620, $g1695, $g1621("Unknown format dispatch character ", $rchar1636));
throw($error1649);
return false}}, $index1641 = 0;
while ($T(true))
{var $sequence1661 = $control_string1633, $g1662 = $sequence1661, $g1663 = (($g1662 || false).length || 0), $g1664 = 0, $value1665 = ($g1663 === $g1664), $g1694 = !(trueQ($value1665));
if ($T($g1694))
{var $next_dispatch1642 = $g1630($control_string1633, "%");
if ($T($g1625($next_dispatch1642, 0)))
{var $rarray1669 = $control_string1633, $start1670 = 0, $end1671 = $next_dispatch1642, $g1689 = $rarray1669.slice($start1670, $end1671);
$g1626($stream1632, $g1689);
var $rarray1675 = $control_string1633, $start1676 = $next_dispatch1642, $end1677 = undefined, $g1690 = $rarray1675.slice($start1676, $end1677);
$control_string1633 = $g1690}
else if ($T($next_dispatch1642))
{var $arg1643 = $g1629($args1634, $index1641), $sequence1679 = $control_string1633, $rchar1644 = $sequence1679[1], $percent1645 = $g1616($rchar1644, "%"), $g1691;
if ($T($percent1645))
$g1691 = "%"
else $g1691 = $dispatch1635($rchar1644, $arg1643);
$g1626($stream1632, $g1691);
var $rarray1683 = $control_string1633, $start1684 = 2, $end1685 = undefined, $g1692 = $rarray1683.slice($start1684, $end1685);
$control_string1633 = $g1692;
var $value1687 = $percent1645, $g1693 = !(trueQ($value1687));
if ($T($g1693))
$index1641 = ($index1641 + 1)}
else {$g1626($stream1632, $control_string1633);
$control_string1633 = ""}}
else break};
return false}, false);
exports.format = $g1631}
{var $g1698 = $g1605.apply, $g1699 = $g1607["*standard-out*"], $g1700 = $g1608("format_out", function $g1703 ($control_string1701)
{var $args1702 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return $g1698($g1631, $g1699, $control_string1701, $args1702)}, false);
exports["format-out"] = $g1700}
{var $g1704 = $g1607["stream-contents"], $g1705 = $g1607["<string-stream>"], $g1706 = $g1608("format_to_string", function $g1710 ($control_string1707)
{var $args1708 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var $stream1709 = $g1619($g1705);
$g1698($g1631, $stream1709, $control_string1707, $args1708);
return $g1704($stream1709)}, false);
exports["format-to-string"] = $g1706}
