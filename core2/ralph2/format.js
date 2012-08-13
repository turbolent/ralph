var $g1605 = require("ralph2/core")
var $g1607 = require("ralph2/stream")
var $g1608 = $g1605["%make-function"], $g1609 = $g1605["as-string"], $g1610 = $g1608("format_integer", function $g1612 ($rnumber1611)
{return $g1609($rnumber1611)}, false)
{var $g1697 = $K("message"), trueQ = $g1605["true?"], $g1617 = $g1605.description, $g1618 = $g1605.signal, $g1619 = $g1605.make, $g1620 = $g1605["<error>"], $g1621 = $g1605.concatenate, $g1622 = $g1605["=="], $g1623 = $g1605["as-lowercase"], $g1624 = $g1605.not, $g1625 = $g1605["empty?"], $g1626 = $g1605[">"], $g1627 = $g1607["stream-write"], $g1628 = $g1605.slice, $g1629 = $g1605.second, $g1630 = $g1605.element, $g1631 = $g1605.position, $g1632 = $g1608("format", function $g1698 ($stream1633, $control_string1634)
{var $args1635 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var $dispatch1636 = function $g1699 ($rchar1637, $arg1638)
{var $rstring1649 = $rchar1637, $g1639 = $rstring1649.toLowerCase(), $g1640 = $g1622, $g1641 = $g1640($g1639, "s"), $g1690;
if ($T($g1641))
$g1690 = $g1641
else $g1690 = $g1640($g1639, "c");
if ($T($g1690))
return $arg1638
else if ($T($g1640($g1639, "=")))
{var $g1642 = $g1617($arg1638);
if ($T($g1642))
return $g1642
else return ""}
else if ($T($g1640($g1639, "b")))
return $g1610($arg1638, 2)
else if ($T($g1640($g1639, "o")))
return $g1610($arg1638, 8)
else if ($T($g1640($g1639, "d")))
return $g1610($arg1638, 10)
else if ($T($g1640($g1639, "x")))
return $g1610($arg1638, 16)
else if ($T($g1640($g1639, "m")))
{$arg1638($stream1633);
return ""}
else {var $error1651 = $g1619($g1620, $g1697, $g1621("Unknown format dispatch character ", $rchar1637));
throw($error1651);
return false}}, $index1643 = 0;
while ($T(true))
{var $sequence1663 = $control_string1634, $g1664 = $sequence1663, $g1665 = (($g1664 || false).length || 0), $g1666 = 0, $value1667 = ($g1665 === $g1666), $g1696 = !(trueQ($value1667));
if ($T($g1696))
{var $next_dispatch1644 = $g1631($control_string1634, "%");
if ($T($g1626($next_dispatch1644, 0)))
{var $rarray1671 = $control_string1634, $start1672 = 0, $end1673 = $next_dispatch1644, $g1691 = $rarray1671.slice($start1672, $end1673);
$g1627($stream1633, $g1691);
var $rarray1677 = $control_string1634, $start1678 = $next_dispatch1644, $end1679 = undefined, $g1692 = $rarray1677.slice($start1678, $end1679);
$control_string1634 = $g1692}
else if ($T($next_dispatch1644))
{var $arg1645 = $g1630($args1635, $index1643), $sequence1681 = $control_string1634, $rchar1646 = $sequence1681[1], $percent1647 = $g1622($rchar1646, "%"), $g1693;
if ($T($percent1647))
$g1693 = "%"
else $g1693 = $dispatch1636($rchar1646, $arg1645);
$g1627($stream1633, $g1693);
var $rarray1685 = $control_string1634, $start1686 = 2, $end1687 = undefined, $g1694 = $rarray1685.slice($start1686, $end1687);
$control_string1634 = $g1694;
var $value1689 = $percent1647, $g1695 = !(trueQ($value1689));
if ($T($g1695))
$index1643 = ($index1643 + 1)}
else {$g1627($stream1633, $control_string1634);
$control_string1634 = ""}}
else break};
return false}, false);
exports.format = $g1632}
{var $g1700 = $g1605.apply, $g1701 = $g1607["*standard-out*"], $g1702 = $g1608("format_out", function $g1705 ($control_string1703)
{var $args1704 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return $g1700($g1632, $g1701, $control_string1703, $args1704)}, false);
exports["format-out"] = $g1702}
{var $g1706 = $g1607["stream-contents"], $g1707 = $g1607["<string-stream>"], $g1708 = $g1608("format_to_string", function $g1712 ($control_string1709)
{var $args1710 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var $stream1711 = $g1619($g1707);
$g1700($g1632, $stream1711, $control_string1709, $args1710);
return $g1706($stream1711)}, false);
exports["format-to-string"] = $g1708}
