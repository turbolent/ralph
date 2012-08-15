var $g1746 = require("ralph/core")
{var $g1750, $g1751, $g1752;
$g1750 = require("ralph/stream");
$g1751 = require("ralph/format");
$g1752 = require("ralph/regexp")}
var $g1758 = $K("ignore-case?"), $g1759 = $K("pattern"), $g1753 = $g1746.map, $g1754 = $g1746.curry, $g1755 = $g1746.make, $g1756 = $g1752["<regexp>"], $g1757 = $g1753($g1754($g1755, $g1756, $g1758, true, $g1759), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var $g1760 = $g1755($g1756, $g1759, "(.*)[\n\r]?")
var $g1761 = "\t\n\r\v\f\u00a0\ufeff "
var $g1762 = $g1746.concatenate, $g1763 = $g1755($g1756, $g1759, $g1762("[", $g1761, "]*"))
var $g1764 = $g1755($g1756, $g1759, $g1762("[^\\[\\]();`,", $g1761, "]+"))
var $g1766 = $g1746["%make-function"], $g1767 = $g1750["stream-read"], $g1768 = $g1746.size, $g1769 = $g1746.first, $g1770 = $g1752.match, $g1771 = $g1750["stream-remaining-contents"], $g1772 = $g1766("match_stream", function $g1786 ($regexp1773, $stream1774)
{var $regexp1779 = $regexp1773, $rstring1780 = $g1771($stream1774), $g1775 = $rstring1780.match($regexp1779);
if ($T($g1775))
{var $result1776 = $g1775, $sequence1783 = $result1776, $robject1784 = $sequence1783[0], $g1785 = (($robject1784 || false).length || 0);
$g1767($stream1774, $g1785);
return $result1776}}, false)
var $g1787 = $g1766("read_line", function $g1789 ($stream1788)
{return $g1772($g1760, $stream1788)}, false)
var $g1790 = $g1766("read_whitespace", function $g1792 ($stream1791)
{return $g1772($g1763, $stream1791)}, false)
var $g1829 = $KEY, $g1830 = $REST, $g1795 = $g1746["=="], $g1796 = $g1746["as-number"], $g1797 = $g1746.last, $g1798 = $g1746.keyword, $g1799 = $g1746["but-last"], $g1800 = $g1746.symbol, $g1801 = $g1746["any?"], $g1802 = $g1746.rcurry, $g1803 = $g1766("make_atom", function $g1831 ($value1804)
{var $g1805 = $value1804;
if ($T($g1795($g1805, "#t")))
return true
else if ($T($g1795($g1805, "#f")))
return false
else if ($T($g1795($g1805, "#key")))
return $g1829
else if ($T($g1795($g1805, "#rest")))
return $g1830
else {var $g1806 = $g1801($g1802($g1770, $value1804), $g1757);
if ($T($g1806))
{var $rnumber1807 = $g1806, $sequence1809 = $rnumber1807, $g1824 = $sequence1809[0];
return $g1796($g1824)}
else {var $rarray1817 = $value1804, $g1818 = $rarray1817, $g1819 = (($g1818 || false).length || 0), $g1825 = ($g1819 - 1), $g1826 = $rarray1817[$g1825], $g1827 = $g1795($g1826, ":");
if ($T($g1827))
{var $rarray1822 = $value1804, $n1823 = undefined, $g1828 = $rarray1822.slice(0, (($n1823 || 1) * -1));
return $g1798($g1828)}
else return $g1800($value1804)}}}, false)
var $g1855 = $K("radix"), trueQ = $g1746["true?"], $g1833 = $g1746.not, $g1834 = $g1750["stream-at-end?"], $g1835 = $g1746.signal, $g1836 = $g1750["stream-write"], $g1837 = $g1746["code-char"], $g1838 = $g1746["parse-integer"], $g1839 = $g1750["stream-read-element"], $g1840 = $g1750["stream-contents"], $g1841 = $g1750["<string-stream>"], $g1842 = $g1766("read_string", function $g1856 ($stream1843)
{var $result1844 = $g1755($g1841), $rchar1845 = $g1839($stream1843);
while ($T(true))
{var $value1848 = $g1795($rchar1845, "\""), $g1854 = !(trueQ($value1848));
if ($T($g1854))
{if ($T($g1834($stream1843)))
{var $error1850 = "missing end of string";
throw($error1850);
false};
var $g1853;
if ($T($g1795($rchar1845, "\\")))
{var $g1846 = $g1839($stream1843);
if ($T($g1795($g1846, "\"")))
$g1853 = "\""
else if ($T($g1795($g1846, "\\")))
$g1853 = "\\"
else if ($T($g1795($g1846, "b")))
$g1853 = "\b"
else if ($T($g1795($g1846, "f")))
$g1853 = "\f"
else if ($T($g1795($g1846, "n")))
$g1853 = "\n"
else if ($T($g1795($g1846, "r")))
$g1853 = "\r"
else if ($T($g1795($g1846, "t")))
$g1853 = "\t"
else if ($T($g1795($g1846, "v")))
$g1853 = "\v"
else if ($T($g1795($g1846, "u")))
$g1853 = $g1837($g1838($g1767($stream1843, 4), $g1855, 16))
else {var $error1852 = "bad escape sequence";
throw($error1852);
$g1853 = false}}
else $g1853 = $rchar1845;
$g1836($result1844, $g1853);
$rchar1845 = $g1839($stream1843)}
else break};
return $g1840($result1844)}, false)
var $g1857 = ["%backquote", "%comma"]
{var trueQ = $g1746["true?"], $g1863 = $g1746["push-last"], $g1864 = $g1746["member?"], $g1865 = $g1746["symbol-name"], $g1866 = $g1746["pop-last"], $g1867 = $g1751["format-to-string"], $g1868 = $g1750["stream-unread-element"], $g1869 = $g1746["empty?"], $g1870 = $g1746["%keys"], $g1871 = $g1766("read", function $g2002 ($stream1872)
{var $g1873 = $SL.call(arguments, 1), $g1874 = $g1870($g1873, {"eof-error?":true,
"eof-value":false}), $eof_errorq1875 = $g1874["eof-error?"], $eof_value1876 = $g1874["eof-value"], $stack1877 = [[]], $ends1878 = [], $add_to_stackn1879, $add_lastn1880;
$add_to_stackn1879 = function $g2003 ($value1881)
{var $rarray1897 = $stack1877, $g1898 = $rarray1897, $g1899 = (($g1898 || false).length || 0), $g1988 = ($g1899 - 1), $rarray1900 = $rarray1897[$g1988], $value1901 = $value1881;
$rarray1900.push($value1901);
$rarray1900;
var $rarray1910 = $stack1877, $g1911 = $rarray1910, $g1912 = (($g1911 || false).length || 0), $g1989 = ($g1912 - 1), $sequence1913 = $rarray1910[$g1989], $g1990 = $sequence1913[0], $g1991 = $g1865($g1990), $g1992 = $g1864($g1991, $g1857);
if ($T($g1992))
return $add_lastn1880()};
$add_lastn1880 = function $g2004 ()
{var $rarray1915 = $stack1877, $value1882 = $rarray1915.pop();
return $add_to_stackn1879($value1882)};
while ($T(true))
{var $value1917 = $g1834($stream1872), $g1999 = !(trueQ($value1917));
if ($T($g1999))
{$g1790($stream1872);
var $rchar1883 = $g1839($stream1872), $g1884 = $rchar1883;
if ($T($g1795($g1884, ";")))
$g1787($stream1872)
else if ($T($g1795($g1884, "`")))
{var $rarray1920 = $stack1877, $value1921 = [$g1800("%backquote", "ralph/core")];
$rarray1920.push($value1921);
$rarray1920}
else if ($T($g1795($g1884, ",")))
{var $rarray1924 = $stack1877, $value1925 = [$g1800("%comma", "ralph/core")];
$rarray1924.push($value1925);
$rarray1924}
else if ($T($g1795($g1884, "(")))
{var $rarray1928 = $ends1878, $value1929 = ")";
$rarray1928.push($value1929);
$rarray1928;
var $rarray1932 = $stack1877, $value1933 = [];
$rarray1932.push($value1933);
$rarray1932}
else if ($T($g1795($g1884, "[")))
{var $rarray1936 = $ends1878, $value1937 = "]";
$rarray1936.push($value1937);
$rarray1936;
var $rarray1940 = $stack1877, $value1941 = [$g1800("%array")];
$rarray1940.push($value1941);
$rarray1940}
else {var $rarray1949 = $ends1878, $g1950 = $rarray1949, $g1951 = (($g1950 || false).length || 0), $g1993 = ($g1951 - 1), $g1994 = $rarray1949[$g1993], $g1995 = $g1795($g1884, $g1994);
if ($T($g1995))
{var $rarray1953 = $ends1878;
$rarray1953.pop();
$add_lastn1880()}
else {var $g1885 = $g1795($g1884, ")"), $g1996;
if ($T($g1885))
$g1996 = $g1885
else $g1996 = $g1795($g1884, "]");
if ($T($g1996))
{var $error1955 = $g1867("too many closings: %=", $rchar1883);
throw($error1955);
false}
else if ($T($g1795($g1884, "\"")))
$add_to_stackn1879($g1842($stream1872))
else {$g1868($stream1872);
var $sequence1957 = $g1772($g1764, $stream1872), $g1997 = $sequence1957[0], $g1998 = $g1803($g1997);
$add_to_stackn1879($g1998)}}};
$g1790($stream1872)}
else break};
var $sequence1968 = $ends1878, $g1969 = $sequence1968, $g1970 = (($g1969 || false).length || 0), $g1971 = 0, $g2000 = ($g1970 === $g1971);
if ($T($g2000))
{var $rarray1980 = $stack1877, $g1981 = $rarray1980, $g1982 = (($g1981 || false).length || 0), $g2001 = ($g1982 - 1), $sequence1983 = $rarray1980[$g2001], $value1886 = $sequence1983[0], $g1887 = $value1886;
if ($T($g1887))
return $g1887
else if ($T($eof_errorq1875))
{var $error1985 = "no object";
throw($error1985);
return false}
else return $eof_value1876}
else {var $error1987 = $g1867("missing closings: %=", $ends1878);
throw($error1987);
return false}}, false);
exports.read = $g1871}
