var B1827 = require("ralph/core")
{
var B1864,
B1865,
B1866;
B1864 = require("ralph/stream");
B1865 = require("ralph/format");
B1866 = require("ralph/regexp")}
var B1872 = $K("ignore-case?"),
B1873 = $K("pattern"),
B1867 = B1827.map,
B1868 = B1827.curry,
B1869 = B1827.make,
B1870 = B1866["<regexp>"],
B1871 = B1867(B1868(B1869, B1870, B1872, true, B1873), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var B1874 = B1869(B1870, B1873, "(.*)[\n\r]?")
var B1875 = "\t\n\r\v\f\u00a0\ufeff "
var B1876 = B1827.concatenate,
B1877 = B1869(B1870, B1873, B1876("[", B1875, "]*"))
var B1878 = B1869(B1870, B1873, B1876("[^\\[\\]();`,", B1875, "]+"))
var B1880 = B1827["%make-function"],
B1881 = B1864["stream-read"],
B1882 = B1827.size,
B1883 = B1827.first,
B1884 = B1866.match,
B1885 = B1864["stream-remaining-contents"],
B1886 = B1880("match_stream", function match_stream__1887 (regexp__1888, stream__1889)
{
var regexp__1894 = regexp__1888,
string__1895 = B1885(stream__1889),
B1890 = string__1895.match(regexp__1894);
if ($T(B1890))
{
var result__1891 = B1890,
sequence__1898 = result__1891,
object__1899 = sequence__1898[0],
B1900 = ((object__1899 || false).length || 0);
B1881(stream__1889, B1900);
return result__1891}}, false)
var B1901 = B1880("read_line", function read_line__1902 (stream__1903)
{return B1886(B1874, stream__1903)}, false)
var B1904 = B1880("read_whitespace", function read_whitespace__1905 (stream__1906)
{return B1886(B1877, stream__1906)}, false)
var B1967 = $KEY,
B1968 = $REST,
B1909 = B1827["binary=="],
B1910 = B1827["as-number"],
B1911 = B1827.last,
B1912 = B1827.keyword,
B1913 = B1827["but-last"],
B1914 = B1827.symbol,
B1915 = B1827["any?"],
B1916 = B1827.rcurry,
B1917 = B1880("make_atom", function make_atom__1918 (value__1919)
{
var B1920 = value__1919,
object1__1925 = B1920,
object2__1926 = "#t",
B1959 = (object1__1925 === object2__1926);
if ($T(B1959))
return true
else
{
var object1__1929 = B1920,
object2__1930 = "#f",
B1960 = (object1__1929 === object2__1930);
if ($T(B1960))
return false
else
{
var object1__1933 = B1920,
object2__1934 = "#key",
B1961 = (object1__1933 === object2__1934);
if ($T(B1961))
return B1967
else
{
var object1__1937 = B1920,
object2__1938 = "#rest",
B1962 = (object1__1937 === object2__1938);
if ($T(B1962))
return B1968
else
{
var B1921 = B1915(B1916(B1884, value__1919), B1871);
if ($T(B1921))
{
var number__1922 = B1921,
sequence__1940 = number__1922,
B1963 = sequence__1940[0];
return B1910(B1963)}
else
{
var array__1950 = value__1919,
B1951 = array__1950,
B1952 = ((B1951 || false).length || 0),
B1964 = (B1952 - 1),
object1__1953 = array__1950[B1964],
object2__1954 = ":",
B1965 = (object1__1953 === object2__1954);
if ($T(B1965))
{
var array__1957 = value__1919,
n__1958 = undefined,
B1966 = array__1957.slice(0, ((n__1958 || 1) * -1));
return B1912(B1966)}
else
return B1914(value__1919)}}}}}}, false)
var B2047 = $K("radix"),
trueQ = B1827["true?"],
B1970 = B1827.not,
B1971 = B1864["stream-at-end?"],
B1972 = B1827.signal,
B1973 = B1864["stream-write"],
B1974 = B1827["code-char"],
B1975 = B1827["parse-integer"],
B1976 = B1864["stream-read-element"],
B1977 = B1864["stream-contents"],
B1978 = B1864["<string-stream>"],
B1979 = B1880("read_string", function read_string__1980 (stream__1981)
{
var result__1982 = B1869(B1978),
char__1983 = B1976(stream__1981);
while (true)
{
var object1__1988 = char__1983,
object2__1989 = "\"",
value__1990 = (object1__1988 === object2__1989),
B2046 = !(trueQ(value__1990));
if ($T(B2046))
{
if ($T(B1971(stream__1981)))
{
var error__1992 = "missing end of string";
throw(error__1992);
false};
var object1__1995 = char__1983,
object2__1996 = "\\",
B2035 = (object1__1995 === object2__1996),
B2045;
if ($T(B2035))
{
var B1984 = B1976(stream__1981),
object1__1999 = B1984,
object2__2000 = "\"",
B2036 = (object1__1999 === object2__2000);
if ($T(B2036))
B2045 = "\""
else
{
var object1__2003 = B1984,
object2__2004 = "\\",
B2037 = (object1__2003 === object2__2004);
if ($T(B2037))
B2045 = "\\"
else
{
var object1__2007 = B1984,
object2__2008 = "b",
B2038 = (object1__2007 === object2__2008);
if ($T(B2038))
B2045 = "\b"
else
{
var object1__2011 = B1984,
object2__2012 = "f",
B2039 = (object1__2011 === object2__2012);
if ($T(B2039))
B2045 = "\f"
else
{
var object1__2015 = B1984,
object2__2016 = "n",
B2040 = (object1__2015 === object2__2016);
if ($T(B2040))
B2045 = "\n"
else
{
var object1__2019 = B1984,
object2__2020 = "r",
B2041 = (object1__2019 === object2__2020);
if ($T(B2041))
B2045 = "\r"
else
{
var object1__2023 = B1984,
object2__2024 = "t",
B2042 = (object1__2023 === object2__2024);
if ($T(B2042))
B2045 = "\t"
else
{
var object1__2027 = B1984,
object2__2028 = "v",
B2043 = (object1__2027 === object2__2028);
if ($T(B2043))
B2045 = "\v"
else
{
var object1__2031 = B1984,
object2__2032 = "u",
B2044 = (object1__2031 === object2__2032);
if ($T(B2044))
B2045 = B1974(B1975(B1881(stream__1981, 4), B2047, 16))
else
{
var error__2034 = "bad escape sequence";
throw(error__2034);
B2045 = false}}}}}}}}}}
else
B2045 = char__1983;
B1973(result__1982, B2045);
char__1983 = B1976(stream__1981)}
else
break};
return B1977(result__1982)}, false)
var B2048 = ["%backquote", "%comma"]
{
var B2239 = $S("%backquote"),
B2240 = $S("%comma"),
B2241 = $S("%array"),
trueQ = B1827["true?"],
B2056 = B1827["push-last"],
B2057 = B1827["member?"],
B2058 = B1827["symbol-name"],
B2059 = B1827["pop-last"],
B2060 = B1865["format-to-string"],
B2061 = B1864["stream-unread-element"],
B2062 = B1827["empty?"],
B2063 = B1827["%keys"],
B2064 = B1880("read", function read__2065 (stream__2066)
{
var B2067 = $SL.call(arguments, 1),
B2068 = B2063(B2067, {"eof-error?":true,
"eof-value":false}),
eof_errorQ__2069 = B2068["eof-error?"],
eof_value__2070 = B2068["eof-value"],
stack__2071 = [[]],
ends__2072 = [],
add_to_stackN__2073,
add_lastN__2074;
add_to_stackN__2073 = function B2075 (value__2076)
{
var array__2093 = stack__2071,
B2094 = array__2093,
B2095 = ((B2094 || false).length || 0),
B2220 = (B2095 - 1),
array__2096 = array__2093[B2220],
value__2097 = value__2076;
array__2096.push(value__2097);
array__2096;
var array__2106 = stack__2071,
B2107 = array__2106,
B2108 = ((B2107 || false).length || 0),
B2221 = (B2108 - 1),
sequence__2109 = array__2106[B2221],
B2222 = sequence__2109[0],
B2223 = B2058(B2222),
B2224 = B2057(B2223, B2048);
if ($T(B2224))
return add_lastN__2074()};
add_lastN__2074 = function B2077 ()
{
var array__2111 = stack__2071,
value__2078 = array__2111.pop();
return add_to_stackN__2073(value__2078)};
while (true)
{
var value__2113 = B1971(stream__2066),
B2236 = !(trueQ(value__2113));
if ($T(B2236))
{
B1904(stream__2066);
var char__2079 = B1976(stream__2066),
B2080 = char__2079,
object1__2116 = B2080,
object2__2117 = ";",
B2225 = (object1__2116 === object2__2117);
if ($T(B2225))
B1901(stream__2066)
else
{
var object1__2120 = B2080,
object2__2121 = "`",
B2226 = (object1__2120 === object2__2121);
if ($T(B2226))
{
var array__2124 = stack__2071,
value__2125 = [B2239];
array__2124.push(value__2125);
array__2124}
else
{
var object1__2128 = B2080,
object2__2129 = ",",
B2227 = (object1__2128 === object2__2129);
if ($T(B2227))
{
var array__2132 = stack__2071,
value__2133 = [B2240];
array__2132.push(value__2133);
array__2132}
else
{
var object1__2136 = B2080,
object2__2137 = "(",
B2228 = (object1__2136 === object2__2137);
if ($T(B2228))
{
var array__2140 = ends__2072,
value__2141 = ")";
array__2140.push(value__2141);
array__2140;
var array__2144 = stack__2071,
value__2145 = [];
array__2144.push(value__2145);
array__2144}
else
{
var object1__2148 = B2080,
object2__2149 = "[",
B2229 = (object1__2148 === object2__2149);
if ($T(B2229))
{
var array__2152 = ends__2072,
value__2153 = "]";
array__2152.push(value__2153);
array__2152;
var array__2156 = stack__2071,
value__2157 = [B2241];
array__2156.push(value__2157);
array__2156}
else
{
var object1__2170 = B2080,
array__2167 = ends__2072,
B2168 = array__2167,
B2169 = ((B2168 || false).length || 0),
B2230 = (B2169 - 1),
object2__2171 = array__2167[B2230],
B2231 = (object1__2170 === object2__2171);
if ($T(B2231))
{
var array__2173 = ends__2072;
array__2173.pop();
add_lastN__2074()}
else
{
var object1__2176 = B2080,
object2__2177 = ")",
B2081 = (object1__2176 === object2__2177),
B2232;
if ($T(B2081))
B2232 = B2081
else
{
var object1__2180 = B2080,
object2__2181 = "]";
B2232 = (object1__2180 === object2__2181)};
if ($T(B2232))
{
var error__2183 = B2060("too many closings: %=", char__2079);
throw(error__2183);
false}
else
{
var object1__2186 = B2080,
object2__2187 = "\"",
B2233 = (object1__2186 === object2__2187);
if ($T(B2233))
add_to_stackN__2073(B1979(stream__2066))
else
{
B2061(stream__2066);
var sequence__2189 = B1886(B1878, stream__2066),
B2234 = sequence__2189[0],
B2235 = B1917(B2234);
add_to_stackN__2073(B2235)}}}}}}}};
B1904(stream__2066)}
else
break};
var sequence__2200 = ends__2072,
B2201 = sequence__2200,
B2202 = ((B2201 || false).length || 0),
B2203 = 0,
B2237 = (B2202 === B2203);
if ($T(B2237))
{
var array__2212 = stack__2071,
B2213 = array__2212,
B2214 = ((B2213 || false).length || 0),
B2238 = (B2214 - 1),
sequence__2215 = array__2212[B2238],
value__2082 = sequence__2215[0],
B2083 = value__2082;
if ($T(B2083))
return B2083
else
if ($T(eof_errorQ__2069))
{
var error__2217 = "no object";
throw(error__2217);
return false}
else
return eof_value__2070}
else
{
var error__2219 = B2060("missing closings: %=", ends__2072);
throw(error__2219);
return false}}, false);
exports.read = B2064}
