var B2083 = require("ralph/core")
{var B2086, B2087;
B2086 = require("path");
B2087 = require("fs")}
{var B2088 = B2086.resolve, B2089 = B2088;
exports["resolve-path"] = B2089}
{var B2090 = B2087.existsSync, B2091 = B2090;
exports["file-exists?"] = B2091}
{var B2092 = B2083["%make-function"], B2093 = B2083.concatenate, B2094 = B2086.dirname, B2095 = B2083["=="], B2096 = B2083.last, B2097 = B2092("path_directory", function B2114 (path__2098)
{var array__2106 = path__2098, B2107 = array__2106, B2108 = ((B2107 || false).length || 0), B2109 = (B2108 - 1), B2110 = array__2106[B2109], B2111 = B2095(B2110, "/"), B2112;
if ($T(B2111))
B2112 = B2093(path__2098, "/")
else B2112 = path__2098;
var B2113 = B2094(B2112);
return B2093(B2113, "/")}, false);
exports["path-directory"] = B2097}
var B2115 = B2083["but-last"], B2116 = B2092("strip_trailing_slashes", function B2136 (path__2117)
{while ($T(true))
{var array__2125 = path__2117, B2126 = array__2125, B2127 = ((B2126 || false).length || 0), B2133 = (B2127 - 1), B2134 = array__2125[B2133], B2135 = B2095(B2134, "/");
if ($T(B2135))
{var array__2130 = path__2117, n__2131 = undefined, B2132 = array__2130.slice(0, ((n__2131 || 1) * -1));
path__2117 = B2132}
else break};
return path__2117}, false)
{var B2137 = B2092("path_parent_directory", function B2140 (path__2138)
{var pathT__2139 = B2116(B2097(path__2138));
return B2093(B2094(pathT__2139), "/")}, false);
exports["path-parent-directory"] = B2137}
{var trueQ = B2083["true?"], B2141 = B2083.not, B2142 = B2087.mkdirSync, B2143 = B2092("ensure_directories_exist", function B2153 (path__2144)
{var directory__2145 = B2097(path__2144), parent__2146 = B2137(directory__2145), value__2148 = B2091(parent__2146), B2151 = !(trueQ(value__2148));
if ($T(B2151))
B2143(parent__2146);
var value__2150 = B2091(directory__2145), B2152 = !(trueQ(value__2150));
if ($T(B2152))
B2142(directory__2145);
return path__2144}, false);
exports["ensure-directories-exist"] = B2143}
var B2154 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]
{var trueQ = B2083["true?"], B2160 = B2083["any?"], B2161 = B2083["empty?"], B2162 = B2083.get, B2163 = B2083.rest, B2164 = B2083.first, B2165 = B2083["make-object"], B2166 = B2087.statSync, B2167 = B2092("file_properties", function B2188 (path__2168)
{if ($T(B2091(path__2168)))
{var stats__2169 = B2166(path__2168), result__2170 = B2165(), B2171 = B2154, B2172, B2173, B2174 = [B2171];
while ($T(true))
{var B2175 = B2172, value__2181;
if ($T(B2175))
value__2181 = B2175
else value__2181 = B2160(B2161, B2174);
var B2187 = !(trueQ(value__2181));
if ($T(B2187))
{var sequence__2183 = B2171, mapping__2176 = sequence__2183[0];
(function B2189 (mapping__2177)
{var setter__2178 = mapping__2177[0], getter__2179 = mapping__2177[1];
return result__2170[setter__2178] = B2162(stats__2169, getter__2179)})(mapping__2176);
var sequence__2185 = B2171, B2186 = sequence__2185.slice(1);
B2171 = B2186;
B2174 = [B2171]}
else break};
B2173;
return result__2170}}, false);
exports["file-properties"] = B2167}
{var B2190 = B2087.lstatSync, B2191 = B2092("file_type", function B2194 (path__2192)
{if ($T(B2091(path__2192)))
{var stat__2193 = B2190(path__2192);
if ($T(stat__2193.isFile()))
return "file"
else if ($T(stat__2193.isDirectory()))
return "directory"
else if ($T(stat__2193.isSymbolicLink()))
return "link"
else if ($T(stat__2193.isBlockDevice()))
return "block-device"
else if ($T(stat__2193.isCharacterDevice()))
return "character-device"
else if ($T(stat__2193.isFIFO()))
return "fifo"
else if ($T(stat__2193.isSocket()))
return "socket"}}, false);
exports["file-type"] = B2191}
{var B2195 = B2083["as-string"], B2196 = B2087.readFileSync, B2197 = B2092("read_file", function B2199 (path__2198)
{if ($T(B2091(path__2198)))
return B2195(B2196(path__2198))}, false);
exports["read-file"] = B2197}
{var B2200 = B2087.writeFileSync, B2201 = B2092("write_file", function B2204 (path__2202, content__2203)
{B2143(path__2202);
return B2200(path__2202, content__2203)}, false);
exports["write-file"] = B2201}
