var B1718 = require("ralph/core")
{var B1754, B1755, B1756;
B1754 = require("ralph/stream");
B1755 = require("ralph/format");
B1756 = require("ralph/regexp")}
var B1762 = $K("ignore-case?"), B1763 = $K("pattern"), B1757 = B1718.map, B1758 = B1718.curry, B1759 = B1718.make, B1760 = B1756["<regexp>"], B1761 = B1757(B1758(B1759, B1760, B1762, true, B1763), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var B1764 = B1759(B1760, B1763, "(.*)[\n\r]?")
var B1765 = "\t\n\r\v\f\u00a0\ufeff "
var B1766 = B1718.concatenate, B1767 = B1759(B1760, B1763, B1766("[", B1765, "]*"))
var B1768 = B1759(B1760, B1763, B1766("[^\\[\\]();`,", B1765, "]+"))
var B1770 = B1718["%make-function"], B1771 = B1754["stream-read"], B1772 = B1718.size, B1773 = B1718.first, B1774 = B1756.match, B1775 = B1754["stream-remaining-contents"], B1776 = B1770("match_stream", function B1790 (regexp__1777, stream__1778)
{var regexp__1783 = regexp__1777, string__1784 = B1775(stream__1778), B1779 = string__1784.match(regexp__1783);
if ($T(B1779))
{var result__1780 = B1779, sequence__1787 = result__1780, object__1788 = sequence__1787[0], B1789 = ((object__1788 || false).length || 0);
B1771(stream__1778, B1789);
return result__1780}}, false)
var B1791 = B1770("read_line", function B1793 (stream__1792)
{return B1776(B1764, stream__1792)}, false)
var B1794 = B1770("read_whitespace", function B1796 (stream__1795)
{return B1776(B1767, stream__1795)}, false)
var B1833 = $KEY, B1834 = $REST, B1799 = B1718["=="], B1800 = B1718["as-number"], B1801 = B1718.last, B1802 = B1718.keyword, B1803 = B1718["but-last"], B1804 = B1718.symbol, B1805 = B1718["any?"], B1806 = B1718.rcurry, B1807 = B1770("make_atom", function B1835 (value__1808)
{var B1809 = value__1808;
if ($T(B1799(B1809, "#t")))
return true
else if ($T(B1799(B1809, "#f")))
return false
else if ($T(B1799(B1809, "#key")))
return B1833
else if ($T(B1799(B1809, "#rest")))
return B1834
else {var B1810 = B1805(B1806(B1774, value__1808), B1761);
if ($T(B1810))
{var number__1811 = B1810, sequence__1813 = number__1811, B1828 = sequence__1813[0];
return B1800(B1828)}
else {var array__1821 = value__1808, B1822 = array__1821, B1823 = ((B1822 || false).length || 0), B1829 = (B1823 - 1), B1830 = array__1821[B1829], B1831 = B1799(B1830, ":");
if ($T(B1831))
{var array__1826 = value__1808, n__1827 = undefined, B1832 = array__1826.slice(0, ((n__1827 || 1) * -1));
return B1802(B1832)}
else return B1804(value__1808)}}}, false)
var B1859 = $K("radix"), trueQ = B1718["true?"], B1837 = B1718.not, B1838 = B1754["stream-at-end?"], B1839 = B1718.signal, B1840 = B1754["stream-write"], B1841 = B1718["code-char"], B1842 = B1718["parse-integer"], B1843 = B1754["stream-read-element"], B1844 = B1754["stream-contents"], B1845 = B1754["<string-stream>"], B1846 = B1770("read_string", function B1860 (stream__1847)
{var result__1848 = B1759(B1845), char__1849 = B1843(stream__1847);
while ($T(true))
{var value__1852 = B1799(char__1849, "\""), B1858 = !(trueQ(value__1852));
if ($T(B1858))
{if ($T(B1838(stream__1847)))
{var error__1854 = "missing end of string";
throw(error__1854);
false};
var B1857;
if ($T(B1799(char__1849, "\\")))
{var B1850 = B1843(stream__1847);
if ($T(B1799(B1850, "\"")))
B1857 = "\""
else if ($T(B1799(B1850, "\\")))
B1857 = "\\"
else if ($T(B1799(B1850, "b")))
B1857 = "\b"
else if ($T(B1799(B1850, "f")))
B1857 = "\f"
else if ($T(B1799(B1850, "n")))
B1857 = "\n"
else if ($T(B1799(B1850, "r")))
B1857 = "\r"
else if ($T(B1799(B1850, "t")))
B1857 = "\t"
else if ($T(B1799(B1850, "v")))
B1857 = "\v"
else if ($T(B1799(B1850, "u")))
B1857 = B1841(B1842(B1771(stream__1847, 4), B1859, 16))
else {var error__1856 = "bad escape sequence";
throw(error__1856);
B1857 = false}}
else B1857 = char__1849;
B1840(result__1848, B1857);
char__1849 = B1843(stream__1847)}
else break};
return B1844(result__1848)}, false)
var B1861 = ["%backquote", "%comma"]
{var B2006 = $S("%array"), trueQ = B1718["true?"], B1867 = B1718["push-last"], B1868 = B1718["member?"], B1869 = B1718["symbol-name"], B1870 = B1718["pop-last"], B1871 = B1755["format-to-string"], B1872 = B1754["stream-unread-element"], B1873 = B1718["empty?"], B1874 = B1718["%keys"], B1875 = B1770("read", function B2007 (stream__1876)
{var B1877 = $SL.call(arguments, 1), B1878 = B1874(B1877, {"eof-error?":true,
"eof-value":false}), eof_errorQ__1879 = B1878["eof-error?"], eof_value__1880 = B1878["eof-value"], stack__1881 = [[]], ends__1882 = [], add_to_stackN__1883, add_lastN__1884;
add_to_stackN__1883 = function B2008 (value__1885)
{var array__1901 = stack__1881, B1902 = array__1901, B1903 = ((B1902 || false).length || 0), B1992 = (B1903 - 1), array__1904 = array__1901[B1992], value__1905 = value__1885;
array__1904.push(value__1905);
array__1904;
var array__1914 = stack__1881, B1915 = array__1914, B1916 = ((B1915 || false).length || 0), B1993 = (B1916 - 1), sequence__1917 = array__1914[B1993], B1994 = sequence__1917[0], B1995 = B1869(B1994), B1996 = B1868(B1995, B1861);
if ($T(B1996))
return add_lastN__1884()};
add_lastN__1884 = function B2009 ()
{var array__1919 = stack__1881, value__1886 = array__1919.pop();
return add_to_stackN__1883(value__1886)};
while ($T(true))
{var value__1921 = B1838(stream__1876), B2003 = !(trueQ(value__1921));
if ($T(B2003))
{B1794(stream__1876);
var char__1887 = B1843(stream__1876), B1888 = char__1887;
if ($T(B1799(B1888, ";")))
B1791(stream__1876)
else if ($T(B1799(B1888, "`")))
{var array__1924 = stack__1881, value__1925 = [B1804("%backquote", "ralph/core")];
array__1924.push(value__1925);
array__1924}
else if ($T(B1799(B1888, ",")))
{var array__1928 = stack__1881, value__1929 = [B1804("%comma", "ralph/core")];
array__1928.push(value__1929);
array__1928}
else if ($T(B1799(B1888, "(")))
{var array__1932 = ends__1882, value__1933 = ")";
array__1932.push(value__1933);
array__1932;
var array__1936 = stack__1881, value__1937 = [];
array__1936.push(value__1937);
array__1936}
else if ($T(B1799(B1888, "[")))
{var array__1940 = ends__1882, value__1941 = "]";
array__1940.push(value__1941);
array__1940;
var array__1944 = stack__1881, value__1945 = [B2006];
array__1944.push(value__1945);
array__1944}
else {var array__1953 = ends__1882, B1954 = array__1953, B1955 = ((B1954 || false).length || 0), B1997 = (B1955 - 1), B1998 = array__1953[B1997], B1999 = B1799(B1888, B1998);
if ($T(B1999))
{var array__1957 = ends__1882;
array__1957.pop();
add_lastN__1884()}
else {var B1889 = B1799(B1888, ")"), B2000;
if ($T(B1889))
B2000 = B1889
else B2000 = B1799(B1888, "]");
if ($T(B2000))
{var error__1959 = B1871("too many closings: %=", char__1887);
throw(error__1959);
false}
else if ($T(B1799(B1888, "\"")))
add_to_stackN__1883(B1846(stream__1876))
else {B1872(stream__1876);
var sequence__1961 = B1776(B1768, stream__1876), B2001 = sequence__1961[0], B2002 = B1807(B2001);
add_to_stackN__1883(B2002)}}};
B1794(stream__1876)}
else break};
var sequence__1972 = ends__1882, B1973 = sequence__1972, B1974 = ((B1973 || false).length || 0), B1975 = 0, B2004 = (B1974 === B1975);
if ($T(B2004))
{var array__1984 = stack__1881, B1985 = array__1984, B1986 = ((B1985 || false).length || 0), B2005 = (B1986 - 1), sequence__1987 = array__1984[B2005], value__1890 = sequence__1987[0], B1891 = value__1890;
if ($T(B1891))
return B1891
else if ($T(eof_errorQ__1879))
{var error__1989 = "no object";
throw(error__1989);
return false}
else return eof_value__1880}
else {var error__1991 = B1871("missing closings: %=", ends__1882);
throw(error__1991);
return false}}, false);
exports.read = B1875}
