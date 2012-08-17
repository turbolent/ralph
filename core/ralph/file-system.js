var $g2077 = require("ralph/core")
{var $g2080, $g2081;
$g2080 = require("path");
$g2081 = require("fs")}
{var $g2082 = $g2080.resolve, $g2083 = $g2082;
exports["resolve-path"] = $g2083}
{var $g2084 = $g2081.existsSync, $g2085 = $g2084;
exports["file-exists?"] = $g2085}
{var $g2086 = $g2077["%make-function"], $g2087 = $g2077.concatenate, $g2088 = $g2080.dirname, $g2089 = $g2077["=="], $g2090 = $g2077.last, $g2091 = $g2086("path_directory", function $g2108 ($path2092)
{var $rarray2100 = $path2092, $g2101 = $rarray2100, $g2102 = (($g2101 || false).length || 0), $g2103 = ($g2102 - 1), $g2104 = $rarray2100[$g2103], $g2105 = $g2089($g2104, "/"), $g2106;
if ($T($g2105))
$g2106 = $g2087($path2092, "/")
else $g2106 = $path2092;
var $g2107 = $g2088($g2106);
return $g2087($g2107, "/")}, false);
exports["path-directory"] = $g2091}
var $g2109 = $g2077["but-last"], $g2110 = $g2086("strip_trailing_slashes", function $g2130 ($path2111)
{while ($T(true))
{var $rarray2119 = $path2111, $g2120 = $rarray2119, $g2121 = (($g2120 || false).length || 0), $g2127 = ($g2121 - 1), $g2128 = $rarray2119[$g2127], $g2129 = $g2089($g2128, "/");
if ($T($g2129))
{var $rarray2124 = $path2111, $n2125 = undefined, $g2126 = $rarray2124.slice(0, (($n2125 || 1) * -1));
$path2111 = $g2126}
else break};
return $path2111}, false)
{var $g2131 = $g2086("path_parent_directory", function $g2134 ($path2132)
{var $patht2133 = $g2110($g2091($path2132));
return $g2087($g2088($patht2133), "/")}, false);
exports["path-parent-directory"] = $g2131}
{var trueQ = $g2077["true?"], $g2135 = $g2077.not, $g2136 = $g2081.mkdirSync, $g2137 = $g2086("ensure_directories_exist", function $g2147 ($path2138)
{var $directory2139 = $g2091($path2138), $parent2140 = $g2131($directory2139), $value2142 = $g2085($parent2140), $g2145 = !(trueQ($value2142));
if ($T($g2145))
$g2137($parent2140);
var $value2144 = $g2085($directory2139), $g2146 = !(trueQ($value2144));
if ($T($g2146))
$g2136($directory2139);
return $path2138}, false);
exports["ensure-directories-exist"] = $g2137}
var $g2148 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]
{var trueQ = $g2077["true?"], $g2154 = $g2077["any?"], $g2155 = $g2077["empty?"], $g2156 = $g2077["get-setter"], $g2157 = $g2077.get, $g2158 = $g2077.rest, $g2159 = $g2077.first, $g2160 = $g2077["make-object"], $g2161 = $g2081.statSync, $g2162 = $g2086("file_properties", function $g2183 ($path2163)
{if ($T($g2085($path2163)))
{var $stats2164 = $g2161($path2163), $result2165 = $g2160(), $g2166 = $g2148, $g2167, $g2168, $g2169 = [$g2166];
while ($T(true))
{var $g2170 = $g2167, $value2176;
if ($T($g2170))
$value2176 = $g2170
else $value2176 = $g2154($g2155, $g2169);
var $g2182 = !(trueQ($value2176));
if ($T($g2182))
{var $sequence2178 = $g2166, $mapping2171 = $sequence2178[0];
(function $g2184 ($mapping2172)
{var $setter2173 = $mapping2172[0], $getter2174 = $mapping2172[1];
return $g2156($result2165, $setter2173, $g2157($stats2164, $getter2174))})($mapping2171);
var $sequence2180 = $g2166, $g2181 = $sequence2180.slice(1);
$g2166 = $g2181;
$g2169 = [$g2166]}
else break};
$g2168;
return $result2165}}, false);
exports["file-properties"] = $g2162}
{var $g2185 = $g2081.lstatSync, $g2186 = $g2086("file_type", function $g2189 ($path2187)
{if ($T($g2085($path2187)))
{var $stat2188 = $g2185($path2187);
if ($T($stat2188.isFile()))
return "file"
else if ($T($stat2188.isDirectory()))
return "directory"
else if ($T($stat2188.isSymbolicLink()))
return "link"
else if ($T($stat2188.isBlockDevice()))
return "block-device"
else if ($T($stat2188.isCharacterDevice()))
return "character-device"
else if ($T($stat2188.isFIFO()))
return "fifo"
else if ($T($stat2188.isSocket()))
return "socket"}}, false);
exports["file-type"] = $g2186}
{var $g2190 = $g2077["as-string"], $g2191 = $g2081.readFileSync, $g2192 = $g2086("read_file", function $g2194 ($path2193)
{if ($T($g2085($path2193)))
return $g2190($g2191($path2193))}, false);
exports["read-file"] = $g2192}
{var $g2195 = $g2081.writeFileSync, $g2196 = $g2086("write_file", function $g2199 ($path2197, $content2198)
{$g2137($path2197);
return $g2195($path2197, $content2198)}, false);
exports["write-file"] = $g2196}
