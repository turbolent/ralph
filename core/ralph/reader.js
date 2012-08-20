var B1753 = require("ralph/core")
{var B1789, B1790, B1791;
B1789 = require("ralph/stream");
B1790 = require("ralph/format");
B1791 = require("ralph/regexp")}
var B1797 = $K("ignore-case?"), B1798 = $K("pattern"), B1792 = B1753.map, B1793 = B1753.curry, B1794 = B1753.make, B1795 = B1791["<regexp>"], B1796 = B1792(B1793(B1794, B1795, B1797, true, B1798), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var B1799 = B1794(B1795, B1798, "(.*)[\n\r]?")
var B1800 = "\t\n\r\v\f\u00a0\ufeff "
var B1801 = B1753.concatenate, B1802 = B1794(B1795, B1798, B1801("[", B1800, "]*"))
var B1803 = B1794(B1795, B1798, B1801("[^\\[\\]();`,", B1800, "]+"))
var B1805 = B1753["%make-function"], B1806 = B1789["stream-read"], B1807 = B1753.size, B1808 = B1753.first, B1809 = B1791.match, B1810 = B1789["stream-remaining-contents"], B1811 = B1805("match_stream", function B1825 (regexp__1812, stream__1813)
{var regexp__1818 = regexp__1812, string__1819 = B1810(stream__1813), B1814 = string__1819.match(regexp__1818);
if ($T(B1814))
{var result__1815 = B1814, sequence__1822 = result__1815, object__1823 = sequence__1822[0], B1824 = ((object__1823 || false).length || 0);
B1806(stream__1813, B1824);
return result__1815}}, false)
var B1826 = B1805("read_line", function B1828 (stream__1827)
{return B1811(B1799, stream__1827)}, false)
var B1829 = B1805("read_whitespace", function B1831 (stream__1830)
{return B1811(B1802, stream__1830)}, false)
var B1868 = $KEY, B1869 = $REST, B1834 = B1753["=="], B1835 = B1753["as-number"], B1836 = B1753.last, B1837 = B1753.keyword, B1838 = B1753["but-last"], B1839 = B1753.symbol, B1840 = B1753["any?"], B1841 = B1753.rcurry, B1842 = B1805("make_atom", function B1870 (value__1843)
{var B1844 = value__1843;
if ($T(B1834(B1844, "#t")))
return true
else if ($T(B1834(B1844, "#f")))
return false
else if ($T(B1834(B1844, "#key")))
return B1868
else if ($T(B1834(B1844, "#rest")))
return B1869
else {var B1845 = B1840(B1841(B1809, value__1843), B1796);
if ($T(B1845))
{var number__1846 = B1845, sequence__1848 = number__1846, B1863 = sequence__1848[0];
return B1835(B1863)}
else {var array__1856 = value__1843, B1857 = array__1856, B1858 = ((B1857 || false).length || 0), B1864 = (B1858 - 1), B1865 = array__1856[B1864], B1866 = B1834(B1865, ":");
if ($T(B1866))
{var array__1861 = value__1843, n__1862 = undefined, B1867 = array__1861.slice(0, ((n__1862 || 1) * -1));
return B1837(B1867)}
else return B1839(value__1843)}}}, false)
var B1894 = $K("radix"), trueQ = B1753["true?"], B1872 = B1753.not, B1873 = B1789["stream-at-end?"], B1874 = B1753.signal, B1875 = B1789["stream-write"], B1876 = B1753["code-char"], B1877 = B1753["parse-integer"], B1878 = B1789["stream-read-element"], B1879 = B1789["stream-contents"], B1880 = B1789["<string-stream>"], B1881 = B1805("read_string", function B1895 (stream__1882)
{var result__1883 = B1794(B1880), char__1884 = B1878(stream__1882);
while ($T(true))
{var value__1887 = B1834(char__1884, "\""), B1893 = !(trueQ(value__1887));
if ($T(B1893))
{if ($T(B1873(stream__1882)))
{var error__1889 = "missing end of string";
throw(error__1889);
false};
var B1892;
if ($T(B1834(char__1884, "\\")))
{var B1885 = B1878(stream__1882);
if ($T(B1834(B1885, "\"")))
B1892 = "\""
else if ($T(B1834(B1885, "\\")))
B1892 = "\\"
else if ($T(B1834(B1885, "b")))
B1892 = "\b"
else if ($T(B1834(B1885, "f")))
B1892 = "\f"
else if ($T(B1834(B1885, "n")))
B1892 = "\n"
else if ($T(B1834(B1885, "r")))
B1892 = "\r"
else if ($T(B1834(B1885, "t")))
B1892 = "\t"
else if ($T(B1834(B1885, "v")))
B1892 = "\v"
else if ($T(B1834(B1885, "u")))
B1892 = B1876(B1877(B1806(stream__1882, 4), B1894, 16))
else {var error__1891 = "bad escape sequence";
throw(error__1891);
B1892 = false}}
else B1892 = char__1884;
B1875(result__1883, B1892);
char__1884 = B1878(stream__1882)}
else break};
return B1879(result__1883)}, false)
var B1896 = ["%backquote", "%comma"]
{var B2041 = $S("%backquote"), B2042 = $S("%comma"), B2043 = $S("%array"), trueQ = B1753["true?"], B1902 = B1753["push-last"], B1903 = B1753["member?"], B1904 = B1753["symbol-name"], B1905 = B1753["pop-last"], B1906 = B1790["format-to-string"], B1907 = B1789["stream-unread-element"], B1908 = B1753["empty?"], B1909 = B1753["%keys"], B1910 = B1805("read", function B2044 (stream__1911)
{var B1912 = $SL.call(arguments, 1), B1913 = B1909(B1912, {"eof-error?":true,
"eof-value":false}), eof_errorQ__1914 = B1913["eof-error?"], eof_value__1915 = B1913["eof-value"], stack__1916 = [[]], ends__1917 = [], add_to_stackN__1918, add_lastN__1919;
add_to_stackN__1918 = function B2045 (value__1920)
{var array__1936 = stack__1916, B1937 = array__1936, B1938 = ((B1937 || false).length || 0), B2027 = (B1938 - 1), array__1939 = array__1936[B2027], value__1940 = value__1920;
array__1939.push(value__1940);
array__1939;
var array__1949 = stack__1916, B1950 = array__1949, B1951 = ((B1950 || false).length || 0), B2028 = (B1951 - 1), sequence__1952 = array__1949[B2028], B2029 = sequence__1952[0], B2030 = B1904(B2029), B2031 = B1903(B2030, B1896);
if ($T(B2031))
return add_lastN__1919()};
add_lastN__1919 = function B2046 ()
{var array__1954 = stack__1916, value__1921 = array__1954.pop();
return add_to_stackN__1918(value__1921)};
while ($T(true))
{var value__1956 = B1873(stream__1911), B2038 = !(trueQ(value__1956));
if ($T(B2038))
{B1829(stream__1911);
var char__1922 = B1878(stream__1911), B1923 = char__1922;
if ($T(B1834(B1923, ";")))
B1826(stream__1911)
else if ($T(B1834(B1923, "`")))
{var array__1959 = stack__1916, value__1960 = [B2041];
array__1959.push(value__1960);
array__1959}
else if ($T(B1834(B1923, ",")))
{var array__1963 = stack__1916, value__1964 = [B2042];
array__1963.push(value__1964);
array__1963}
else if ($T(B1834(B1923, "(")))
{var array__1967 = ends__1917, value__1968 = ")";
array__1967.push(value__1968);
array__1967;
var array__1971 = stack__1916, value__1972 = [];
array__1971.push(value__1972);
array__1971}
else if ($T(B1834(B1923, "[")))
{var array__1975 = ends__1917, value__1976 = "]";
array__1975.push(value__1976);
array__1975;
var array__1979 = stack__1916, value__1980 = [B2043];
array__1979.push(value__1980);
array__1979}
else {var array__1988 = ends__1917, B1989 = array__1988, B1990 = ((B1989 || false).length || 0), B2032 = (B1990 - 1), B2033 = array__1988[B2032], B2034 = B1834(B1923, B2033);
if ($T(B2034))
{var array__1992 = ends__1917;
array__1992.pop();
add_lastN__1919()}
else {var B1924 = B1834(B1923, ")"), B2035;
if ($T(B1924))
B2035 = B1924
else B2035 = B1834(B1923, "]");
if ($T(B2035))
{var error__1994 = B1906("too many closings: %=", char__1922);
throw(error__1994);
false}
else if ($T(B1834(B1923, "\"")))
add_to_stackN__1918(B1881(stream__1911))
else {B1907(stream__1911);
var sequence__1996 = B1811(B1803, stream__1911), B2036 = sequence__1996[0], B2037 = B1842(B2036);
add_to_stackN__1918(B2037)}}};
B1829(stream__1911)}
else break};
var sequence__2007 = ends__1917, B2008 = sequence__2007, B2009 = ((B2008 || false).length || 0), B2010 = 0, B2039 = (B2009 === B2010);
if ($T(B2039))
{var array__2019 = stack__1916, B2020 = array__2019, B2021 = ((B2020 || false).length || 0), B2040 = (B2021 - 1), sequence__2022 = array__2019[B2040], value__1925 = sequence__2022[0], B1926 = value__1925;
if ($T(B1926))
return B1926
else if ($T(eof_errorQ__1914))
{var error__2024 = "no object";
throw(error__2024);
return false}
else return eof_value__1915}
else {var error__2026 = B1906("missing closings: %=", ends__1917);
throw(error__2026);
return false}}, false);
exports.read = B1910}
