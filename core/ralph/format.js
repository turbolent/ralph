var $g1468 = require("ralph/core")
var $g1584 = require("ralph/stream")
var $g1585 = $g1468["%make-function"], $g1586 = $g1468["as-string"], $g1587 = $g1585("format_integer", function $g1589 ($rnumber1588)
{return $g1586($rnumber1588)}, false)
{var $g1672 = $K("message"), trueQ = $g1468["true?"], $g1593 = $g1468["=="], $g1594 = $g1468.description, $g1595 = $g1468.signal, $g1596 = $g1468.make, $g1597 = $g1468["<error>"], $g1598 = $g1468.concatenate, $g1599 = $g1468["as-lowercase"], $g1600 = $g1468.not, $g1601 = $g1468["empty?"], $g1602 = $g1468[">"], $g1603 = $g1584["stream-write"], $g1604 = $g1468.slice, $g1605 = $g1468.second, $g1606 = $g1468.element, $g1607 = $g1468.position, $g1608 = $g1585("format", function $g1673 ($stream1609, $control_string1610)
{var $args1611 = $SL.call(arguments, 2);
"Format a string and write it to a stream.";
var $dispatch1612 = function $g1674 ($rchar1613, $arg1614)
{var $rstring1624 = $rchar1613, $g1615 = $rstring1624.toLowerCase(), $g1616 = $g1593($g1615, "s"), $g1665;
if ($T($g1616))
$g1665 = $g1616
else $g1665 = $g1593($g1615, "c");
if ($T($g1665))
return $arg1614
else if ($T($g1593($g1615, "=")))
{var $g1617 = $g1594($arg1614);
if ($T($g1617))
return $g1617
else return ""}
else if ($T($g1593($g1615, "b")))
return $g1587($arg1614, 2)
else if ($T($g1593($g1615, "o")))
return $g1587($arg1614, 8)
else if ($T($g1593($g1615, "d")))
return $g1587($arg1614, 10)
else if ($T($g1593($g1615, "x")))
return $g1587($arg1614, 16)
else if ($T($g1593($g1615, "m")))
{$arg1614($stream1609);
return ""}
else {var $error1626 = $g1596($g1597, $g1672, $g1598("Unknown format dispatch character ", $rchar1613));
throw($error1626);
return false}}, $index1618 = 0;
while ($T(true))
{var $sequence1638 = $control_string1610, $g1639 = $sequence1638, $g1640 = (($g1639 || false).length || 0), $g1641 = 0, $value1642 = ($g1640 === $g1641), $g1671 = !(trueQ($value1642));
if ($T($g1671))
{var $next_dispatch1619 = $g1607($control_string1610, "%");
if ($T($g1602($next_dispatch1619, 0)))
{var $rarray1646 = $control_string1610, $start1647 = 0, $end1648 = $next_dispatch1619, $g1666 = $rarray1646.slice($start1647, $end1648);
$g1603($stream1609, $g1666);
var $rarray1652 = $control_string1610, $start1653 = $next_dispatch1619, $end1654 = undefined, $g1667 = $rarray1652.slice($start1653, $end1654);
$control_string1610 = $g1667}
else if ($T($next_dispatch1619))
{var $arg1620 = $g1606($args1611, $index1618), $sequence1656 = $control_string1610, $rchar1621 = $sequence1656[1], $percent1622 = $g1593($rchar1621, "%"), $g1668;
if ($T($percent1622))
$g1668 = "%"
else $g1668 = $dispatch1612($rchar1621, $arg1620);
$g1603($stream1609, $g1668);
var $rarray1660 = $control_string1610, $start1661 = 2, $end1662 = undefined, $g1669 = $rarray1660.slice($start1661, $end1662);
$control_string1610 = $g1669;
var $value1664 = $percent1622, $g1670 = !(trueQ($value1664));
if ($T($g1670))
$index1618 = ($index1618 + 1)}
else {$g1603($stream1609, $control_string1610);
$control_string1610 = ""}}
else break};
return false}, false);
exports.format = $g1608}
{var $g1675 = $g1468.apply, $g1676 = $g1584["*standard-out*"], $g1677 = $g1585("format_out", function $g1680 ($control_string1678)
{var $args1679 = $SL.call(arguments, 1);
"Formats arguments to *standard-out*.";
return $g1675($g1608, $g1676, $control_string1678, $args1679)}, false);
exports["format-out"] = $g1677}
{var $g1681 = $g1584["stream-contents"], $g1682 = $g1584["<string-stream>"], $g1683 = $g1585("format_to_string", function $g1687 ($control_string1684)
{var $args1685 = $SL.call(arguments, 1);
"Process a format string and return the result as another string.\nThis function effectively calls format and returns the result as a string.";
var $stream1686 = $g1596($g1682);
$g1675($g1608, $stream1686, $control_string1684, $args1685);
return $g1681($stream1686)}, false);
exports["format-to-string"] = $g1683}
