var B1746 = require("ralph/core")
{var B1750, B1751, B1752;
B1750 = require("ralph/stream");
B1751 = require("ralph/format");
B1752 = require("ralph/regexp")}
var B1758 = $K("ignore-case?"), B1759 = $K("pattern"), B1753 = B1746.map, B1754 = B1746.curry, B1755 = B1746.make, B1756 = B1752["<regexp>"], B1757 = B1753(B1754(B1755, B1756, B1758, true, B1759), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var B1760 = B1755(B1756, B1759, "(.*)[\n\r]?")
var B1761 = "\t\n\r\v\f\u00a0\ufeff "
var B1762 = B1746.concatenate, B1763 = B1755(B1756, B1759, B1762("[", B1761, "]*"))
var B1764 = B1755(B1756, B1759, B1762("[^\\[\\]();`,", B1761, "]+"))
var B1766 = B1746["%make-function"], B1767 = B1750["stream-read"], B1768 = B1746.size, B1769 = B1746.first, B1770 = B1752.match, B1771 = B1750["stream-remaining-contents"], B1772 = B1766("match_stream", function B1786 (regexp__1773, stream__1774)
{var regexp__1779 = regexp__1773, string__1780 = B1771(stream__1774), B1775 = string__1780.match(regexp__1779);
if ($T(B1775))
{var result__1776 = B1775, sequence__1783 = result__1776, object__1784 = sequence__1783[0], B1785 = ((object__1784 || false).length || 0);
B1767(stream__1774, B1785);
return result__1776}}, false)
var B1787 = B1766("read_line", function B1789 (stream__1788)
{return B1772(B1760, stream__1788)}, false)
var B1790 = B1766("read_whitespace", function B1792 (stream__1791)
{return B1772(B1763, stream__1791)}, false)
var B1829 = $KEY, B1830 = $REST, B1795 = B1746["=="], B1796 = B1746["as-number"], B1797 = B1746.last, B1798 = B1746.keyword, B1799 = B1746["but-last"], B1800 = B1746.symbol, B1801 = B1746["any?"], B1802 = B1746.rcurry, B1803 = B1766("make_atom", function B1831 (value__1804)
{var B1805 = value__1804;
if ($T(B1795(B1805, "#t")))
return true
else if ($T(B1795(B1805, "#f")))
return false
else if ($T(B1795(B1805, "#key")))
return B1829
else if ($T(B1795(B1805, "#rest")))
return B1830
else {var B1806 = B1801(B1802(B1770, value__1804), B1757);
if ($T(B1806))
{var number__1807 = B1806, sequence__1809 = number__1807, B1824 = sequence__1809[0];
return B1796(B1824)}
else {var array__1817 = value__1804, B1818 = array__1817, B1819 = ((B1818 || false).length || 0), B1825 = (B1819 - 1), B1826 = array__1817[B1825], B1827 = B1795(B1826, ":");
if ($T(B1827))
{var array__1822 = value__1804, n__1823 = undefined, B1828 = array__1822.slice(0, ((n__1823 || 1) * -1));
return B1798(B1828)}
else return B1800(value__1804)}}}, false)
var B1855 = $K("radix"), trueQ = B1746["true?"], B1833 = B1746.not, B1834 = B1750["stream-at-end?"], B1835 = B1746.signal, B1836 = B1750["stream-write"], B1837 = B1746["code-char"], B1838 = B1746["parse-integer"], B1839 = B1750["stream-read-element"], B1840 = B1750["stream-contents"], B1841 = B1750["<string-stream>"], B1842 = B1766("read_string", function B1856 (stream__1843)
{var result__1844 = B1755(B1841), char__1845 = B1839(stream__1843);
while ($T(true))
{var value__1848 = B1795(char__1845, "\""), B1854 = !(trueQ(value__1848));
if ($T(B1854))
{if ($T(B1834(stream__1843)))
{var error__1850 = "missing end of string";
throw(error__1850);
false};
var B1853;
if ($T(B1795(char__1845, "\\")))
{var B1846 = B1839(stream__1843);
if ($T(B1795(B1846, "\"")))
B1853 = "\""
else if ($T(B1795(B1846, "\\")))
B1853 = "\\"
else if ($T(B1795(B1846, "b")))
B1853 = "\b"
else if ($T(B1795(B1846, "f")))
B1853 = "\f"
else if ($T(B1795(B1846, "n")))
B1853 = "\n"
else if ($T(B1795(B1846, "r")))
B1853 = "\r"
else if ($T(B1795(B1846, "t")))
B1853 = "\t"
else if ($T(B1795(B1846, "v")))
B1853 = "\v"
else if ($T(B1795(B1846, "u")))
B1853 = B1837(B1838(B1767(stream__1843, 4), B1855, 16))
else {var error__1852 = "bad escape sequence";
throw(error__1852);
B1853 = false}}
else B1853 = char__1845;
B1836(result__1844, B1853);
char__1845 = B1839(stream__1843)}
else break};
return B1840(result__1844)}, false)
var B1857 = ["%backquote", "%comma"]
{var trueQ = B1746["true?"], B1863 = B1746["push-last"], B1864 = B1746["member?"], B1865 = B1746["symbol-name"], B1866 = B1746["pop-last"], B1867 = B1751["format-to-string"], B1868 = B1750["stream-unread-element"], B1869 = B1746["empty?"], B1870 = B1746["%keys"], B1871 = B1766("read", function B2002 (stream__1872)
{var B1873 = $SL.call(arguments, 1), B1874 = B1870(B1873, {"eof-error?":true,
"eof-value":false}), eof_errorQ__1875 = B1874["eof-error?"], eof_value__1876 = B1874["eof-value"], stack__1877 = [[]], ends__1878 = [], add_to_stackN__1879, add_lastN__1880;
add_to_stackN__1879 = function B2003 (value__1881)
{var array__1897 = stack__1877, B1898 = array__1897, B1899 = ((B1898 || false).length || 0), B1988 = (B1899 - 1), array__1900 = array__1897[B1988], value__1901 = value__1881;
array__1900.push(value__1901);
array__1900;
var array__1910 = stack__1877, B1911 = array__1910, B1912 = ((B1911 || false).length || 0), B1989 = (B1912 - 1), sequence__1913 = array__1910[B1989], B1990 = sequence__1913[0], B1991 = B1865(B1990), B1992 = B1864(B1991, B1857);
if ($T(B1992))
return add_lastN__1880()};
add_lastN__1880 = function B2004 ()
{var array__1915 = stack__1877, value__1882 = array__1915.pop();
return add_to_stackN__1879(value__1882)};
while ($T(true))
{var value__1917 = B1834(stream__1872), B1999 = !(trueQ(value__1917));
if ($T(B1999))
{B1790(stream__1872);
var char__1883 = B1839(stream__1872), B1884 = char__1883;
if ($T(B1795(B1884, ";")))
B1787(stream__1872)
else if ($T(B1795(B1884, "`")))
{var array__1920 = stack__1877, value__1921 = [B1800("%backquote", "ralph/core")];
array__1920.push(value__1921);
array__1920}
else if ($T(B1795(B1884, ",")))
{var array__1924 = stack__1877, value__1925 = [B1800("%comma", "ralph/core")];
array__1924.push(value__1925);
array__1924}
else if ($T(B1795(B1884, "(")))
{var array__1928 = ends__1878, value__1929 = ")";
array__1928.push(value__1929);
array__1928;
var array__1932 = stack__1877, value__1933 = [];
array__1932.push(value__1933);
array__1932}
else if ($T(B1795(B1884, "[")))
{var array__1936 = ends__1878, value__1937 = "]";
array__1936.push(value__1937);
array__1936;
var array__1940 = stack__1877, value__1941 = [B1800("%array")];
array__1940.push(value__1941);
array__1940}
else {var array__1949 = ends__1878, B1950 = array__1949, B1951 = ((B1950 || false).length || 0), B1993 = (B1951 - 1), B1994 = array__1949[B1993], B1995 = B1795(B1884, B1994);
if ($T(B1995))
{var array__1953 = ends__1878;
array__1953.pop();
add_lastN__1880()}
else {var B1885 = B1795(B1884, ")"), B1996;
if ($T(B1885))
B1996 = B1885
else B1996 = B1795(B1884, "]");
if ($T(B1996))
{var error__1955 = B1867("too many closings: %=", char__1883);
throw(error__1955);
false}
else if ($T(B1795(B1884, "\"")))
add_to_stackN__1879(B1842(stream__1872))
else {B1868(stream__1872);
var sequence__1957 = B1772(B1764, stream__1872), B1997 = sequence__1957[0], B1998 = B1803(B1997);
add_to_stackN__1879(B1998)}}};
B1790(stream__1872)}
else break};
var sequence__1968 = ends__1878, B1969 = sequence__1968, B1970 = ((B1969 || false).length || 0), B1971 = 0, B2000 = (B1970 === B1971);
if ($T(B2000))
{var array__1980 = stack__1877, B1981 = array__1980, B1982 = ((B1981 || false).length || 0), B2001 = (B1982 - 1), sequence__1983 = array__1980[B2001], value__1886 = sequence__1983[0], B1887 = value__1886;
if ($T(B1887))
return B1887
else if ($T(eof_errorQ__1875))
{var error__1985 = "no object";
throw(error__1985);
return false}
else return eof_value__1876}
else {var error__1987 = B1867("missing closings: %=", ends__1878);
throw(error__1987);
return false}}, false);
exports.read = B1871}
