var $g1748 = require("ralph/core")
{var $g1751, $g1752;
$g1751 = require("ralph/stream");
$g1752 = require("ralph/regexp")}
var $g1758 = $K("ignore-case?"), $g1759 = $K("pattern"), $g1753 = $g1748.map, $g1754 = $g1748.curry, $g1755 = $g1748.make, $g1756 = $g1752["<regexp>"], $g1757 = $g1753($g1754($g1755, $g1756, $g1758, true, $g1759), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var $g1760 = $g1755($g1756, $g1759, "(.*)[\n\r]?")
var $g1761 = "\t\n\r\v\f\u00a0\ufeff "
var $g1762 = $g1748.concatenate, $g1763 = $g1755($g1756, $g1759, $g1762("[", $g1761, "]*"))
var $g1764 = $g1755($g1756, $g1759, $g1762("[^\\[\\]();`,", $g1761, "]+"))
var $g1766 = $g1748["%make-function"], $g1767 = $g1751["stream-read"], $g1768 = $g1748.size, $g1769 = $g1748.first, $g1770 = $g1752.match, $g1771 = $g1751["stream-remaining-contents"], $g1772 = $g1766("match_stream", function $g1786 ($regexp1773, $stream1774)
{var $regexp1779 = $regexp1773, $rstring1780 = $g1771($stream1774), $g1775 = $rstring1780.match($regexp1779);
if ($T($g1775))
{var $result1776 = $g1775, $sequence1783 = $result1776, $robject1784 = $sequence1783[0], $g1785 = (($robject1784 || false).length || 0);
$g1767($stream1774, $g1785);
return $result1776}}, false)
var $g1787 = $g1766("read_line", function $g1789 ($stream1788)
{return $g1772($g1760, $stream1788)}, false)
var $g1790 = $g1766("read_whitespace", function $g1792 ($stream1791)
{return $g1772($g1763, $stream1791)}, false)
var $g1831 = $KEY, $g1832 = $REST, $g1796 = $g1748["as-number"], $g1797 = $g1748["=="], $g1798 = $g1748.last, $g1799 = $g1748.keyword, $g1800 = $g1748["but-last"], $g1801 = $g1748.symbol, $g1802 = $g1748["any?"], $g1803 = $g1748.rcurry, $g1804 = $g1766("make_atom", function $g1833 ($value1805)
{var $g1806 = $value1805, $g1807 = $g1797;
if ($T($g1807($g1806, "#t")))
return true
else if ($T($g1807($g1806, "#f")))
return false
else if ($T($g1807($g1806, "#key")))
return $g1831
else if ($T($g1807($g1806, "#rest")))
return $g1832
else {var $g1808 = $g1802($g1803($g1770, $value1805), $g1757);
if ($T($g1808))
{var $rnumber1809 = $g1808, $sequence1811 = $rnumber1809, $g1826 = $sequence1811[0];
return $g1796($g1826)}
else {var $rarray1819 = $value1805, $g1820 = $rarray1819, $g1821 = (($g1820 || false).length || 0), $g1827 = ($g1821 - 1), $g1828 = $rarray1819[$g1827], $g1829 = $g1797($g1828, ":");
if ($T($g1829))
{var $rarray1824 = $value1805, $n1825 = undefined, $g1830 = $rarray1824.slice(0, (($n1825 || 1) * -1));
return $g1799($g1830)}
else return $g1801($value1805)}}}, false)
var $g1859 = $K("radix"), trueQ = $g1748["true?"], $g1836 = $g1748.not, $g1837 = $g1751["stream-at-end?"], $g1838 = $g1748.signal, $g1839 = $g1751["stream-write"], $g1840 = $g1748["code-char"], $g1841 = $g1748["parse-integer"], $g1842 = $g1751["stream-read-element"], $g1843 = $g1751["stream-contents"], $g1844 = $g1751["<string-stream>"], $g1845 = $g1766("read_string", function $g1860 ($stream1846)
{var $result1847 = $g1755($g1844), $rchar1848 = $g1842($stream1846);
while ($T(true))
{var $value1852 = $g1797($rchar1848, "\""), $g1858 = !(trueQ($value1852));
if ($T($g1858))
{if ($T($g1837($stream1846)))
{var $error1854 = "missing end of string";
throw($error1854);
false};
var $g1857;
if ($T($g1797($rchar1848, "\\")))
{var $g1849 = $g1842($stream1846), $g1850 = $g1797;
if ($T($g1850($g1849, "\"")))
$g1857 = "\""
else if ($T($g1850($g1849, "\\")))
$g1857 = "\\"
else if ($T($g1850($g1849, "b")))
$g1857 = "\b"
else if ($T($g1850($g1849, "f")))
$g1857 = "\f"
else if ($T($g1850($g1849, "n")))
$g1857 = "\n"
else if ($T($g1850($g1849, "r")))
$g1857 = "\r"
else if ($T($g1850($g1849, "t")))
$g1857 = "\t"
else if ($T($g1850($g1849, "v")))
$g1857 = "\v"
else if ($T($g1850($g1849, "u")))
$g1857 = $g1840($g1841($g1767($stream1846, 4), $g1859, 16))
else {var $error1856 = "bad escape sequence";
throw($error1856);
$g1857 = false}}
else $g1857 = $rchar1848;
$g1839($result1847, $g1857);
$rchar1848 = $g1842($stream1846)}
else break};
return $g1843($result1847)}, false)
var $g1861 = ["%backquote", "%comma"]
{var trueQ = $g1748["true?"], $g1868 = $g1748["push-last"], $g1869 = $g1748["member?"], $g1870 = $g1748["symbol-name"], $g1871 = $g1748["pop-last"], $g1872, $g1873 = $g1751["stream-unread-element"], $g1874 = $g1748["empty?"], $g1875 = $g1748["%keys"], $g1876 = $g1766("read", function $g2008 ($stream1877)
{var $g1878 = $SL.call(arguments, 1), $g1879 = $g1875($g1878, {"eof-error?":true,
"eof-value":false}), $eof_errorq1880 = $g1879["eof-error?"], $eof_value1881 = $g1879["eof-value"], $stack1882 = [[]], $ends1883 = [], $add_to_stackn1884, $add_lastn1885;
$add_to_stackn1884 = function $g2009 ($value1886)
{var $rarray1903 = $stack1882, $g1904 = $rarray1903, $g1905 = (($g1904 || false).length || 0), $g1994 = ($g1905 - 1), $rarray1906 = $rarray1903[$g1994], $value1907 = $value1886;
$rarray1906.push($value1907);
$rarray1906;
var $rarray1916 = $stack1882, $g1917 = $rarray1916, $g1918 = (($g1917 || false).length || 0), $g1995 = ($g1918 - 1), $sequence1919 = $rarray1916[$g1995], $g1996 = $sequence1919[0], $g1997 = $g1870($g1996), $g1998 = $g1869($g1997, $g1861);
if ($T($g1998))
return $add_lastn1885()};
$add_lastn1885 = function $g2010 ()
{var $rarray1921 = $stack1882, $value1887 = $rarray1921.pop();
return $add_to_stackn1884($value1887)};
while ($T(true))
{var $value1923 = $g1837($stream1877), $g2005 = !(trueQ($value1923));
if ($T($g2005))
{$g1790($stream1877);
var $rchar1888 = $g1842($stream1877), $g1889 = $rchar1888, $g1890 = $g1797;
if ($T($g1890($g1889, ";")))
$g1787($stream1877)
else if ($T($g1890($g1889, "`")))
{var $rarray1926 = $stack1882, $value1927 = [$g1801("%backquote", "ralph/core")];
$rarray1926.push($value1927);
$rarray1926}
else if ($T($g1890($g1889, ",")))
{var $rarray1930 = $stack1882, $value1931 = [$g1801("%comma", "ralph/core")];
$rarray1930.push($value1931);
$rarray1930}
else if ($T($g1890($g1889, "(")))
{var $rarray1934 = $ends1883, $value1935 = ")";
$rarray1934.push($value1935);
$rarray1934;
var $rarray1938 = $stack1882, $value1939 = [];
$rarray1938.push($value1939);
$rarray1938}
else if ($T($g1890($g1889, "[")))
{var $rarray1942 = $ends1883, $value1943 = "]";
$rarray1942.push($value1943);
$rarray1942;
var $rarray1946 = $stack1882, $value1947 = [$g1801("%array")];
$rarray1946.push($value1947);
$rarray1946}
else {var $rarray1955 = $ends1883, $g1956 = $rarray1955, $g1957 = (($g1956 || false).length || 0), $g1999 = ($g1957 - 1), $g2000 = $rarray1955[$g1999], $g2001 = $g1890($g1889, $g2000);
if ($T($g2001))
{var $rarray1959 = $ends1883;
$rarray1959.pop();
$add_lastn1885()}
else {var $g1891 = $g1890($g1889, ")"), $g2002;
if ($T($g1891))
$g2002 = $g1891
else $g2002 = $g1890($g1889, "]");
if ($T($g2002))
{var $error1961 = $g1872("too many closings: %=", $rchar1888);
throw($error1961);
false}
else if ($T($g1890($g1889, "\"")))
$add_to_stackn1884($g1845($stream1877))
else {$g1873($stream1877);
var $sequence1963 = $g1772($g1764, $stream1877), $g2003 = $sequence1963[0], $g2004 = $g1804($g2003);
$add_to_stackn1884($g2004)}}};
$g1790($stream1877)}
else break};
var $sequence1974 = $ends1883, $g1975 = $sequence1974, $g1976 = (($g1975 || false).length || 0), $g1977 = 0, $g2006 = ($g1976 === $g1977);
if ($T($g2006))
{var $rarray1986 = $stack1882, $g1987 = $rarray1986, $g1988 = (($g1987 || false).length || 0), $g2007 = ($g1988 - 1), $sequence1989 = $rarray1986[$g2007], $value1892 = $sequence1989[0], $g1893 = $value1892;
if ($T($g1893))
return $g1893
else if ($T($eof_errorq1880))
{var $error1991 = "no object";
throw($error1991);
return false}
else return $eof_value1881}
else {var $error1993 = $g1872("missing closings: %=", $ends1883);
throw($error1993);
return false}}, false);
exports.read = $g1876}
