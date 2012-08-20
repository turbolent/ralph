var B1804 = require("ralph/core")
{var B1840, B1841, B1842;
B1840 = require("ralph/stream");
B1841 = require("ralph/format");
B1842 = require("ralph/regexp")}
var B1848 = $K("ignore-case?"), B1849 = $K("pattern"), B1843 = B1804.map, B1844 = B1804.curry, B1845 = B1804.make, B1846 = B1842["<regexp>"], B1847 = B1843(B1844(B1845, B1846, B1848, true, B1849), ["^[+-]?0x[0-9a-f]+", "^[+-]?0[0-7]+", "^[+-]?\\d+\\.?\\d*(?:e-?\\d*(?:\\d\\.?|\\.?\\d)\\d*)?"])
var B1850 = B1845(B1846, B1849, "(.*)[\n\r]?")
var B1851 = "\t\n\r\v\f\u00a0\ufeff "
var B1852 = B1804.concatenate, B1853 = B1845(B1846, B1849, B1852("[", B1851, "]*"))
var B1854 = B1845(B1846, B1849, B1852("[^\\[\\]();`,", B1851, "]+"))
var B1856 = B1804["%make-function"], B1857 = B1840["stream-read"], B1858 = B1804.size, B1859 = B1804.first, B1860 = B1842.match, B1861 = B1840["stream-remaining-contents"], B1862 = B1856("match_stream", function B1876 (regexp__1863, stream__1864)
{var regexp__1869 = regexp__1863, string__1870 = B1861(stream__1864), B1865 = string__1870.match(regexp__1869);
if ($T(B1865))
{var result__1866 = B1865, sequence__1873 = result__1866, object__1874 = sequence__1873[0], B1875 = ((object__1874 || false).length || 0);
B1857(stream__1864, B1875);
return result__1866}}, false)
var B1877 = B1856("read_line", function B1879 (stream__1878)
{return B1862(B1850, stream__1878)}, false)
var B1880 = B1856("read_whitespace", function B1882 (stream__1881)
{return B1862(B1853, stream__1881)}, false)
var B1942 = $KEY, B1943 = $REST, B1885 = B1804["binary=="], B1886 = B1804["as-number"], B1887 = B1804.last, B1888 = B1804.keyword, B1889 = B1804["but-last"], B1890 = B1804.symbol, B1891 = B1804["any?"], B1892 = B1804.rcurry, B1893 = B1856("make_atom", function B1944 (value__1894)
{var B1895 = value__1894, object1__1900 = B1895, object2__1901 = "#t", B1934 = (object1__1900 === object2__1901);
if ($T(B1934))
return true
else {var object1__1904 = B1895, object2__1905 = "#f", B1935 = (object1__1904 === object2__1905);
if ($T(B1935))
return false
else {var object1__1908 = B1895, object2__1909 = "#key", B1936 = (object1__1908 === object2__1909);
if ($T(B1936))
return B1942
else {var object1__1912 = B1895, object2__1913 = "#rest", B1937 = (object1__1912 === object2__1913);
if ($T(B1937))
return B1943
else {var B1896 = B1891(B1892(B1860, value__1894), B1847);
if ($T(B1896))
{var number__1897 = B1896, sequence__1915 = number__1897, B1938 = sequence__1915[0];
return B1886(B1938)}
else {var array__1925 = value__1894, B1926 = array__1925, B1927 = ((B1926 || false).length || 0), B1939 = (B1927 - 1), object1__1928 = array__1925[B1939], object2__1929 = ":", B1940 = (object1__1928 === object2__1929);
if ($T(B1940))
{var array__1932 = value__1894, n__1933 = undefined, B1941 = array__1932.slice(0, ((n__1933 || 1) * -1));
return B1888(B1941)}
else return B1890(value__1894)}}}}}}, false)
var B2022 = $K("radix"), trueQ = B1804["true?"], B1946 = B1804.not, B1947 = B1840["stream-at-end?"], B1948 = B1804.signal, B1949 = B1840["stream-write"], B1950 = B1804["code-char"], B1951 = B1804["parse-integer"], B1952 = B1840["stream-read-element"], B1953 = B1840["stream-contents"], B1954 = B1840["<string-stream>"], B1955 = B1856("read_string", function B2023 (stream__1956)
{var result__1957 = B1845(B1954), char__1958 = B1952(stream__1956);
while (true)
{var object1__1963 = char__1958, object2__1964 = "\"", value__1965 = (object1__1963 === object2__1964), B2021 = !(trueQ(value__1965));
if ($T(B2021))
{if ($T(B1947(stream__1956)))
{var error__1967 = "missing end of string";
throw(error__1967);
false};
var object1__1970 = char__1958, object2__1971 = "\\", B2010 = (object1__1970 === object2__1971), B2020;
if ($T(B2010))
{var B1959 = B1952(stream__1956), object1__1974 = B1959, object2__1975 = "\"", B2011 = (object1__1974 === object2__1975);
if ($T(B2011))
B2020 = "\""
else {var object1__1978 = B1959, object2__1979 = "\\", B2012 = (object1__1978 === object2__1979);
if ($T(B2012))
B2020 = "\\"
else {var object1__1982 = B1959, object2__1983 = "b", B2013 = (object1__1982 === object2__1983);
if ($T(B2013))
B2020 = "\b"
else {var object1__1986 = B1959, object2__1987 = "f", B2014 = (object1__1986 === object2__1987);
if ($T(B2014))
B2020 = "\f"
else {var object1__1990 = B1959, object2__1991 = "n", B2015 = (object1__1990 === object2__1991);
if ($T(B2015))
B2020 = "\n"
else {var object1__1994 = B1959, object2__1995 = "r", B2016 = (object1__1994 === object2__1995);
if ($T(B2016))
B2020 = "\r"
else {var object1__1998 = B1959, object2__1999 = "t", B2017 = (object1__1998 === object2__1999);
if ($T(B2017))
B2020 = "\t"
else {var object1__2002 = B1959, object2__2003 = "v", B2018 = (object1__2002 === object2__2003);
if ($T(B2018))
B2020 = "\v"
else {var object1__2006 = B1959, object2__2007 = "u", B2019 = (object1__2006 === object2__2007);
if ($T(B2019))
B2020 = B1950(B1951(B1857(stream__1956, 4), B2022, 16))
else {var error__2009 = "bad escape sequence";
throw(error__2009);
B2020 = false}}}}}}}}}}
else B2020 = char__1958;
B1949(result__1957, B2020);
char__1958 = B1952(stream__1956)}
else break};
return B1953(result__1957)}, false)
var B2024 = ["%backquote", "%comma"]
{var B2210 = $S("%backquote"), B2211 = $S("%comma"), B2212 = $S("%array"), trueQ = B1804["true?"], B2030 = B1804["push-last"], B2031 = B1804["member?"], B2032 = B1804["symbol-name"], B2033 = B1804["pop-last"], B2034 = B1841["format-to-string"], B2035 = B1840["stream-unread-element"], B2036 = B1804["empty?"], B2037 = B1804["%keys"], B2038 = B1856("read", function B2213 (stream__2039)
{var B2040 = $SL.call(arguments, 1), B2041 = B2037(B2040, {"eof-error?":true,
"eof-value":false}), eof_errorQ__2042 = B2041["eof-error?"], eof_value__2043 = B2041["eof-value"], stack__2044 = [[]], ends__2045 = [], add_to_stackN__2046, add_lastN__2047;
add_to_stackN__2046 = function B2214 (value__2048)
{var array__2064 = stack__2044, B2065 = array__2064, B2066 = ((B2065 || false).length || 0), B2191 = (B2066 - 1), array__2067 = array__2064[B2191], value__2068 = value__2048;
array__2067.push(value__2068);
array__2067;
var array__2077 = stack__2044, B2078 = array__2077, B2079 = ((B2078 || false).length || 0), B2192 = (B2079 - 1), sequence__2080 = array__2077[B2192], B2193 = sequence__2080[0], B2194 = B2032(B2193), B2195 = B2031(B2194, B2024);
if ($T(B2195))
return add_lastN__2047()};
add_lastN__2047 = function B2215 ()
{var array__2082 = stack__2044, value__2049 = array__2082.pop();
return add_to_stackN__2046(value__2049)};
while (true)
{var value__2084 = B1947(stream__2039), B2207 = !(trueQ(value__2084));
if ($T(B2207))
{B1880(stream__2039);
var char__2050 = B1952(stream__2039), B2051 = char__2050, object1__2087 = B2051, object2__2088 = ";", B2196 = (object1__2087 === object2__2088);
if ($T(B2196))
B1877(stream__2039)
else {var object1__2091 = B2051, object2__2092 = "`", B2197 = (object1__2091 === object2__2092);
if ($T(B2197))
{var array__2095 = stack__2044, value__2096 = [B2210];
array__2095.push(value__2096);
array__2095}
else {var object1__2099 = B2051, object2__2100 = ",", B2198 = (object1__2099 === object2__2100);
if ($T(B2198))
{var array__2103 = stack__2044, value__2104 = [B2211];
array__2103.push(value__2104);
array__2103}
else {var object1__2107 = B2051, object2__2108 = "(", B2199 = (object1__2107 === object2__2108);
if ($T(B2199))
{var array__2111 = ends__2045, value__2112 = ")";
array__2111.push(value__2112);
array__2111;
var array__2115 = stack__2044, value__2116 = [];
array__2115.push(value__2116);
array__2115}
else {var object1__2119 = B2051, object2__2120 = "[", B2200 = (object1__2119 === object2__2120);
if ($T(B2200))
{var array__2123 = ends__2045, value__2124 = "]";
array__2123.push(value__2124);
array__2123;
var array__2127 = stack__2044, value__2128 = [B2212];
array__2127.push(value__2128);
array__2127}
else {var object1__2141 = B2051, array__2138 = ends__2045, B2139 = array__2138, B2140 = ((B2139 || false).length || 0), B2201 = (B2140 - 1), object2__2142 = array__2138[B2201], B2202 = (object1__2141 === object2__2142);
if ($T(B2202))
{var array__2144 = ends__2045;
array__2144.pop();
add_lastN__2047()}
else {var object1__2147 = B2051, object2__2148 = ")", B2052 = (object1__2147 === object2__2148), B2203;
if ($T(B2052))
B2203 = B2052
else {var object1__2151 = B2051, object2__2152 = "]";
B2203 = (object1__2151 === object2__2152)};
if ($T(B2203))
{var error__2154 = B2034("too many closings: %=", char__2050);
throw(error__2154);
false}
else {var object1__2157 = B2051, object2__2158 = "\"", B2204 = (object1__2157 === object2__2158);
if ($T(B2204))
add_to_stackN__2046(B1955(stream__2039))
else {B2035(stream__2039);
var sequence__2160 = B1862(B1854, stream__2039), B2205 = sequence__2160[0], B2206 = B1893(B2205);
add_to_stackN__2046(B2206)}}}}}}}};
B1880(stream__2039)}
else break};
var sequence__2171 = ends__2045, B2172 = sequence__2171, B2173 = ((B2172 || false).length || 0), B2174 = 0, B2208 = (B2173 === B2174);
if ($T(B2208))
{var array__2183 = stack__2044, B2184 = array__2183, B2185 = ((B2184 || false).length || 0), B2209 = (B2185 - 1), sequence__2186 = array__2183[B2209], value__2053 = sequence__2186[0], B2054 = value__2053;
if ($T(B2054))
return B2054
else if ($T(eof_errorQ__2042))
{var error__2188 = "no object";
throw(error__2188);
return false}
else return eof_value__2043}
else {var error__2190 = B2034("missing closings: %=", ends__2045);
throw(error__2190);
return false}}, false);
exports.read = B2038}
