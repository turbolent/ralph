var B1826 = require("ralph/core")
{
var B1863,
B1864,
B1865;
B1863 = require("ralph/stream");
B1864 = require("ralph/format");
B1865 = require("ralph/regexp")}
var B1871 = $K("ignore-case?"),
B1872 = $K("pattern"),
B1866 = B1826.map,
B1867 = B1826.curry,
B1868 = B1826.make,
B1869 = B1865["<regexp>"],
B1870 = B1866(B1867(B1868, B1869, B1871, true, B1872), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var B1873 = B1868(B1869, B1872, "(.*)[\n\r]?")
var B1874 = "\t\n\r\v\f\u00a0\ufeff "
var B1875 = B1826.concatenate,
B1876 = B1868(B1869, B1872, B1875("[", B1874, "]*"))
var B1877 = B1868(B1869, B1872, B1875("[^\\[\\]();`,", B1874, "]+"))
var B1879 = B1826["%make-function"],
B1880 = B1863["stream-read"],
B1881 = B1826.size,
B1882 = B1826.first,
B1883 = B1865.match,
B1884 = B1863["stream-remaining-contents"],
B1885 = B1879("match_stream", function match_stream__1886 (regexp__1887, stream__1888)
{
var regexp__1893 = regexp__1887,
string__1894 = B1884(stream__1888),
B1889 = string__1894.match(regexp__1893);
if ($T(B1889))
{
var result__1890 = B1889,
sequence__1897 = result__1890,
object__1898 = sequence__1897[0],
B1899 = ((object__1898 || false).length || 0);
B1880(stream__1888, B1899);
return result__1890}}, false)
var B1900 = B1879("read_line", function read_line__1901 (stream__1902)
{return B1885(B1873, stream__1902)}, false)
var B1903 = B1879("read_whitespace", function read_whitespace__1904 (stream__1905)
{return B1885(B1876, stream__1905)}, false)
var B1966 = $KEY,
B1967 = $REST,
B1908 = B1826["binary=="],
B1909 = B1826["as-number"],
B1910 = B1826.last,
B1911 = B1826.keyword,
B1912 = B1826["but-last"],
B1913 = B1826.symbol,
B1914 = B1826["any?"],
B1915 = B1826.rcurry,
B1916 = B1879("make_atom", function make_atom__1917 (value__1918)
{
var B1919 = value__1918,
object1__1924 = B1919,
object2__1925 = "#t",
B1958 = (object1__1924 === object2__1925);
if ($T(B1958))
return true
else
{
var object1__1928 = B1919,
object2__1929 = "#f",
B1959 = (object1__1928 === object2__1929);
if ($T(B1959))
return false
else
{
var object1__1932 = B1919,
object2__1933 = "#key",
B1960 = (object1__1932 === object2__1933);
if ($T(B1960))
return B1966
else
{
var object1__1936 = B1919,
object2__1937 = "#rest",
B1961 = (object1__1936 === object2__1937);
if ($T(B1961))
return B1967
else
{
var B1920 = B1914(B1915(B1883, value__1918), B1870);
if ($T(B1920))
{
var number__1921 = B1920,
sequence__1939 = number__1921,
B1962 = sequence__1939[0];
return B1909(B1962)}
else
{
var array__1949 = value__1918,
B1950 = array__1949,
B1951 = ((B1950 || false).length || 0),
B1963 = (B1951 - 1),
object1__1952 = array__1949[B1963],
object2__1953 = ":",
B1964 = (object1__1952 === object2__1953);
if ($T(B1964))
{
var array__1956 = value__1918,
n__1957 = undefined,
B1965 = array__1956.slice(0, ((n__1957 || 1) * -1));
return B1911(B1965)}
else
return B1913(value__1918, false)}}}}}}, false)
var B2046 = $K("radix"),
trueQ = B1826["true?"],
B1969 = B1826.not,
B1970 = B1863["stream-at-end?"],
B1971 = B1826.signal,
B1972 = B1863["stream-write"],
B1973 = B1826["code-char"],
B1974 = B1826["parse-integer"],
B1975 = B1863["stream-read-element"],
B1976 = B1863["stream-contents"],
B1977 = B1863["<string-stream>"],
B1978 = B1879("read_string", function read_string__1979 (stream__1980)
{
var result__1981 = B1868(B1977),
char__1982 = B1975(stream__1980);
while (true)
{
var object1__1987 = char__1982,
object2__1988 = "\"",
value__1989 = (object1__1987 === object2__1988),
B2045 = !(trueQ(value__1989));
if ($T(B2045))
{
if ($T(B1970(stream__1980)))
{
var error__1991 = "missing end of string";
throw(error__1991);
false};
var object1__1994 = char__1982,
object2__1995 = "\\",
B2034 = (object1__1994 === object2__1995),
B2044;
if ($T(B2034))
{
var B1983 = B1975(stream__1980),
object1__1998 = B1983,
object2__1999 = "\"",
B2035 = (object1__1998 === object2__1999);
if ($T(B2035))
B2044 = "\""
else
{
var object1__2002 = B1983,
object2__2003 = "\\",
B2036 = (object1__2002 === object2__2003);
if ($T(B2036))
B2044 = "\\"
else
{
var object1__2006 = B1983,
object2__2007 = "b",
B2037 = (object1__2006 === object2__2007);
if ($T(B2037))
B2044 = "\b"
else
{
var object1__2010 = B1983,
object2__2011 = "f",
B2038 = (object1__2010 === object2__2011);
if ($T(B2038))
B2044 = "\f"
else
{
var object1__2014 = B1983,
object2__2015 = "n",
B2039 = (object1__2014 === object2__2015);
if ($T(B2039))
B2044 = "\n"
else
{
var object1__2018 = B1983,
object2__2019 = "r",
B2040 = (object1__2018 === object2__2019);
if ($T(B2040))
B2044 = "\r"
else
{
var object1__2022 = B1983,
object2__2023 = "t",
B2041 = (object1__2022 === object2__2023);
if ($T(B2041))
B2044 = "\t"
else
{
var object1__2026 = B1983,
object2__2027 = "v",
B2042 = (object1__2026 === object2__2027);
if ($T(B2042))
B2044 = "\v"
else
{
var object1__2030 = B1983,
object2__2031 = "u",
B2043 = (object1__2030 === object2__2031);
if ($T(B2043))
B2044 = B1973(B1974(B1880(stream__1980, 4), B2046, 16))
else
{
var error__2033 = "bad escape sequence";
throw(error__2033);
B2044 = false}}}}}}}}}}
else
B2044 = char__1982;
B1972(result__1981, B2044);
char__1982 = B1975(stream__1980)}
else
break};
return B1976(result__1981)}, false)
var B2047 = ["quote", "%backquote", "%comma"]
{
var B2245 = $S("quote", "ralph/core"),
B2246 = $S("%backquote", "ralph/core"),
B2247 = $S("%comma", "ralph/core"),
B2248 = $S("%array"),
trueQ = B1826["true?"],
B2053 = B1826["push-last"],
B2054 = B1826["member?"],
B2055 = B1826["symbol-name"],
B2056 = B1826["pop-last"],
B2057 = B1864["format-to-string"],
B2058 = B1863["stream-unread-element"],
B2059 = B1826["empty?"],
B2060 = B1826["%keys"],
B2061 = B1879("read", function read__2062 (stream__2063)
{
var B2064 = $SL.call(arguments, 1),
B2065 = B2060(B2064, {"eof-error?":true,
"eof-value":false}),
eof_errorQ__2066 = B2065["eof-error?"],
eof_value__2067 = B2065["eof-value"],
stack__2068 = [[]],
ends__2069 = [],
add_to_stackN__2070,
add_lastN__2071;
add_to_stackN__2070 = function add_to_stackN__2072 (value__2073)
{
var array__2090 = stack__2068,
B2091 = array__2090,
B2092 = ((B2091 || false).length || 0),
B2225 = (B2092 - 1),
array__2093 = array__2090[B2225],
value__2094 = value__2073;
array__2093.push(value__2094);
array__2093;
var array__2103 = stack__2068,
B2104 = array__2103,
B2105 = ((B2104 || false).length || 0),
B2226 = (B2105 - 1),
sequence__2106 = array__2103[B2226],
B2227 = sequence__2106[0],
B2228 = B2055(B2227),
B2229 = B2054(B2228, B2047);
if ($T(B2229))
return add_lastN__2071()};
add_lastN__2071 = function add_lastN__2074 ()
{
var array__2108 = stack__2068,
value__2075 = array__2108.pop();
return add_to_stackN__2070(value__2075)};
while (true)
{
var value__2110 = B1970(stream__2063),
B2242 = !(trueQ(value__2110));
if ($T(B2242))
{
B1903(stream__2063);
var char__2076 = B1975(stream__2063),
B2077 = char__2076,
object1__2113 = B2077,
object2__2114 = ";",
B2230 = (object1__2113 === object2__2114);
if ($T(B2230))
B1900(stream__2063)
else
{
var object1__2117 = B2077,
object2__2118 = "'",
B2231 = (object1__2117 === object2__2118);
if ($T(B2231))
{
var array__2121 = stack__2068,
value__2122 = [B2245];
array__2121.push(value__2122);
array__2121}
else
{
var object1__2125 = B2077,
object2__2126 = "`",
B2232 = (object1__2125 === object2__2126);
if ($T(B2232))
{
var array__2129 = stack__2068,
value__2130 = [B2246];
array__2129.push(value__2130);
array__2129}
else
{
var object1__2133 = B2077,
object2__2134 = ",",
B2233 = (object1__2133 === object2__2134);
if ($T(B2233))
{
var array__2137 = stack__2068,
value__2138 = [B2247];
array__2137.push(value__2138);
array__2137}
else
{
var object1__2141 = B2077,
object2__2142 = "(",
B2234 = (object1__2141 === object2__2142);
if ($T(B2234))
{
var array__2145 = ends__2069,
value__2146 = ")";
array__2145.push(value__2146);
array__2145;
var array__2149 = stack__2068,
value__2150 = [];
array__2149.push(value__2150);
array__2149}
else
{
var object1__2153 = B2077,
object2__2154 = "[",
B2235 = (object1__2153 === object2__2154);
if ($T(B2235))
{
var array__2157 = ends__2069,
value__2158 = "]";
array__2157.push(value__2158);
array__2157;
var array__2161 = stack__2068,
value__2162 = [B2248];
array__2161.push(value__2162);
array__2161}
else
{
var object1__2175 = B2077,
array__2172 = ends__2069,
B2173 = array__2172,
B2174 = ((B2173 || false).length || 0),
B2236 = (B2174 - 1),
object2__2176 = array__2172[B2236],
B2237 = (object1__2175 === object2__2176);
if ($T(B2237))
{
var array__2178 = ends__2069;
array__2178.pop();
add_lastN__2071()}
else
{
var object1__2181 = B2077,
object2__2182 = ")",
B2078 = (object1__2181 === object2__2182),
B2238;
if ($T(B2078))
B2238 = B2078
else
{
var object1__2185 = B2077,
object2__2186 = "]";
B2238 = (object1__2185 === object2__2186)};
if ($T(B2238))
{
var error__2188 = B2057("too many closings: %=", char__2076);
throw(error__2188);
false}
else
{
var object1__2191 = B2077,
object2__2192 = "\"",
B2239 = (object1__2191 === object2__2192);
if ($T(B2239))
add_to_stackN__2070(B1978(stream__2063))
else
{
B2058(stream__2063);
var sequence__2194 = B1885(B1877, stream__2063),
B2240 = sequence__2194[0],
B2241 = B1916(B2240);
add_to_stackN__2070(B2241)}}}}}}}}};
B1903(stream__2063)}
else
break};
var sequence__2205 = ends__2069,
B2206 = sequence__2205,
B2207 = ((B2206 || false).length || 0),
B2208 = 0,
B2243 = (B2207 === B2208);
if ($T(B2243))
{
var array__2217 = stack__2068,
B2218 = array__2217,
B2219 = ((B2218 || false).length || 0),
B2244 = (B2219 - 1),
sequence__2220 = array__2217[B2244],
value__2079 = sequence__2220[0],
B2080 = value__2079;
if ($T(B2080))
return B2080
else
if ($T(eof_errorQ__2066))
{
var error__2222 = "no object";
throw(error__2222);
return false}
else
return eof_value__2067}
else
{
var error__2224 = B2057("missing closings: %=", ends__2069);
throw(error__2224);
return false}}, false);
exports.read = B2061}
