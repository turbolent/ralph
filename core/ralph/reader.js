var $g1746 = require("ralph/core")
{var $g1749, $g1750;
$g1749 = require("ralph/stream");
$g1750 = require("ralph/regexp")}
var $g1756 = $K("ignore-case?"), $g1757 = $K("pattern"), $g1751 = $g1746.map, $g1752 = $g1746.curry, $g1753 = $g1746.make, $g1754 = $g1750["<regexp>"], $g1755 = $g1751($g1752($g1753, $g1754, $g1756, true, $g1757), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var $g1758 = $g1753($g1754, $g1757, "(.*)[\n\r]?")
var $g1759 = "\t\n\r\v\f\u00a0\ufeff "
var $g1760 = $g1746.concatenate, $g1761 = $g1753($g1754, $g1757, $g1760("[", $g1759, "]*"))
var $g1762 = $g1753($g1754, $g1757, $g1760("[^\\[\\]();`,", $g1759, "]+"))
var $g1764 = $g1746["%make-function"], $g1765 = $g1749["stream-read"], $g1766 = $g1746.size, $g1767 = $g1746.first, $g1768 = $g1750.match, $g1769 = $g1749["stream-remaining-contents"], $g1770 = $g1764("match_stream", function $g1784 ($regexp1771, $stream1772)
{var $regexp1777 = $regexp1771, $rstring1778 = $g1769($stream1772), $g1773 = $rstring1778.match($regexp1777);
if ($T($g1773))
{var $result1774 = $g1773, $sequence1781 = $result1774, $robject1782 = $sequence1781[0], $g1783 = (($robject1782 || false).length || 0);
$g1765($stream1772, $g1783);
return $result1774}}, false)
var $g1785 = $g1764("read_line", function $g1787 ($stream1786)
{return $g1770($g1758, $stream1786)}, false)
var $g1788 = $g1764("read_whitespace", function $g1790 ($stream1789)
{return $g1770($g1761, $stream1789)}, false)
var $g1827 = $KEY, $g1828 = $REST, $g1793 = $g1746["=="], $g1794 = $g1746["as-number"], $g1795 = $g1746.last, $g1796 = $g1746.keyword, $g1797 = $g1746["but-last"], $g1798 = $g1746.symbol, $g1799 = $g1746["any?"], $g1800 = $g1746.rcurry, $g1801 = $g1764("make_atom", function $g1829 ($value1802)
{var $g1803 = $value1802;
if ($T($g1793($g1803, "#t")))
return true
else if ($T($g1793($g1803, "#f")))
return false
else if ($T($g1793($g1803, "#key")))
return $g1827
else if ($T($g1793($g1803, "#rest")))
return $g1828
else {var $g1804 = $g1799($g1800($g1768, $value1802), $g1755);
if ($T($g1804))
{var $rnumber1805 = $g1804, $sequence1807 = $rnumber1805, $g1822 = $sequence1807[0];
return $g1794($g1822)}
else {var $rarray1815 = $value1802, $g1816 = $rarray1815, $g1817 = (($g1816 || false).length || 0), $g1823 = ($g1817 - 1), $g1824 = $rarray1815[$g1823], $g1825 = $g1793($g1824, ":");
if ($T($g1825))
{var $rarray1820 = $value1802, $n1821 = undefined, $g1826 = $rarray1820.slice(0, (($n1821 || 1) * -1));
return $g1796($g1826)}
else return $g1798($value1802)}}}, false)
var $g1853 = $K("radix"), trueQ = $g1746["true?"], $g1831 = $g1746.not, $g1832 = $g1749["stream-at-end?"], $g1833 = $g1746.signal, $g1834 = $g1749["stream-write"], $g1835 = $g1746["code-char"], $g1836 = $g1746["parse-integer"], $g1837 = $g1749["stream-read-element"], $g1838 = $g1749["stream-contents"], $g1839 = $g1749["<string-stream>"], $g1840 = $g1764("read_string", function $g1854 ($stream1841)
{var $result1842 = $g1753($g1839), $rchar1843 = $g1837($stream1841);
while ($T(true))
{var $value1846 = $g1793($rchar1843, "\""), $g1852 = !(trueQ($value1846));
if ($T($g1852))
{if ($T($g1832($stream1841)))
{var $error1848 = "missing end of string";
throw($error1848);
false};
var $g1851;
if ($T($g1793($rchar1843, "\\")))
{var $g1844 = $g1837($stream1841);
if ($T($g1793($g1844, "\"")))
$g1851 = "\""
else if ($T($g1793($g1844, "\\")))
$g1851 = "\\"
else if ($T($g1793($g1844, "b")))
$g1851 = "\b"
else if ($T($g1793($g1844, "f")))
$g1851 = "\f"
else if ($T($g1793($g1844, "n")))
$g1851 = "\n"
else if ($T($g1793($g1844, "r")))
$g1851 = "\r"
else if ($T($g1793($g1844, "t")))
$g1851 = "\t"
else if ($T($g1793($g1844, "v")))
$g1851 = "\v"
else if ($T($g1793($g1844, "u")))
$g1851 = $g1835($g1836($g1765($stream1841, 4), $g1853, 16))
else {var $error1850 = "bad escape sequence";
throw($error1850);
$g1851 = false}}
else $g1851 = $rchar1843;
$g1834($result1842, $g1851);
$rchar1843 = $g1837($stream1841)}
else break};
return $g1838($result1842)}, false)
var $g1855 = ["%backquote", "%comma"]
{var trueQ = $g1746["true?"], $g1861 = $g1746["push-last"], $g1862 = $g1746["member?"], $g1863 = $g1746["symbol-name"], $g1864 = $g1746["pop-last"], $g1865, $g1866 = $g1749["stream-unread-element"], $g1867 = $g1746["empty?"], $g1868 = $g1746["%keys"], $g1869 = $g1764("read", function $g2000 ($stream1870)
{var $g1871 = $SL.call(arguments, 1), $g1872 = $g1868($g1871, {"eof-error?":true,
"eof-value":false}), $eof_errorq1873 = $g1872["eof-error?"], $eof_value1874 = $g1872["eof-value"], $stack1875 = [[]], $ends1876 = [], $add_to_stackn1877, $add_lastn1878;
$add_to_stackn1877 = function $g2001 ($value1879)
{var $rarray1895 = $stack1875, $g1896 = $rarray1895, $g1897 = (($g1896 || false).length || 0), $g1986 = ($g1897 - 1), $rarray1898 = $rarray1895[$g1986], $value1899 = $value1879;
$rarray1898.push($value1899);
$rarray1898;
var $rarray1908 = $stack1875, $g1909 = $rarray1908, $g1910 = (($g1909 || false).length || 0), $g1987 = ($g1910 - 1), $sequence1911 = $rarray1908[$g1987], $g1988 = $sequence1911[0], $g1989 = $g1863($g1988), $g1990 = $g1862($g1989, $g1855);
if ($T($g1990))
return $add_lastn1878()};
$add_lastn1878 = function $g2002 ()
{var $rarray1913 = $stack1875, $value1880 = $rarray1913.pop();
return $add_to_stackn1877($value1880)};
while ($T(true))
{var $value1915 = $g1832($stream1870), $g1997 = !(trueQ($value1915));
if ($T($g1997))
{$g1788($stream1870);
var $rchar1881 = $g1837($stream1870), $g1882 = $rchar1881;
if ($T($g1793($g1882, ";")))
$g1785($stream1870)
else if ($T($g1793($g1882, "`")))
{var $rarray1918 = $stack1875, $value1919 = [$g1798("%backquote", "ralph/core")];
$rarray1918.push($value1919);
$rarray1918}
else if ($T($g1793($g1882, ",")))
{var $rarray1922 = $stack1875, $value1923 = [$g1798("%comma", "ralph/core")];
$rarray1922.push($value1923);
$rarray1922}
else if ($T($g1793($g1882, "(")))
{var $rarray1926 = $ends1876, $value1927 = ")";
$rarray1926.push($value1927);
$rarray1926;
var $rarray1930 = $stack1875, $value1931 = [];
$rarray1930.push($value1931);
$rarray1930}
else if ($T($g1793($g1882, "[")))
{var $rarray1934 = $ends1876, $value1935 = "]";
$rarray1934.push($value1935);
$rarray1934;
var $rarray1938 = $stack1875, $value1939 = [$g1798("%array")];
$rarray1938.push($value1939);
$rarray1938}
else {var $rarray1947 = $ends1876, $g1948 = $rarray1947, $g1949 = (($g1948 || false).length || 0), $g1991 = ($g1949 - 1), $g1992 = $rarray1947[$g1991], $g1993 = $g1793($g1882, $g1992);
if ($T($g1993))
{var $rarray1951 = $ends1876;
$rarray1951.pop();
$add_lastn1878()}
else {var $g1883 = $g1793($g1882, ")"), $g1994;
if ($T($g1883))
$g1994 = $g1883
else $g1994 = $g1793($g1882, "]");
if ($T($g1994))
{var $error1953 = $g1865("too many closings: %=", $rchar1881);
throw($error1953);
false}
else if ($T($g1793($g1882, "\"")))
$add_to_stackn1877($g1840($stream1870))
else {$g1866($stream1870);
var $sequence1955 = $g1770($g1762, $stream1870), $g1995 = $sequence1955[0], $g1996 = $g1801($g1995);
$add_to_stackn1877($g1996)}}};
$g1788($stream1870)}
else break};
var $sequence1966 = $ends1876, $g1967 = $sequence1966, $g1968 = (($g1967 || false).length || 0), $g1969 = 0, $g1998 = ($g1968 === $g1969);
if ($T($g1998))
{var $rarray1978 = $stack1875, $g1979 = $rarray1978, $g1980 = (($g1979 || false).length || 0), $g1999 = ($g1980 - 1), $sequence1981 = $rarray1978[$g1999], $value1884 = $sequence1981[0], $g1885 = $value1884;
if ($T($g1885))
return $g1885
else if ($T($eof_errorq1873))
{var $error1983 = "no object";
throw($error1983);
return false}
else return $eof_value1874}
else {var $error1985 = $g1865("missing closings: %=", $ends1876);
throw($error1985);
return false}}, false);
exports.read = $g1869}
