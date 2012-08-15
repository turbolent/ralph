var $g2055 = require("ralph/core")
{var $g2058, $g2059;
$g2058 = require("path");
$g2059 = require("fs")}
{var $g2060 = $g2058.resolve, $g2061 = $g2060;
exports["resolve-path"] = $g2061}
{var $g2062 = $g2059.existsSync, $g2063 = $g2062;
exports["file-exists?"] = $g2063}
{var $g2064 = $g2055["%make-function"], $g2065 = $g2055.concatenate, $g2066 = $g2058.dirname, $g2067 = $g2055["=="], $g2068 = $g2055.last, $g2069 = $g2064("path_directory", function $g2086 ($path2070)
{var $rarray2078 = $path2070, $g2079 = $rarray2078, $g2080 = (($g2079 || false).length || 0), $g2081 = ($g2080 - 1), $g2082 = $rarray2078[$g2081], $g2083 = $g2067($g2082, "/"), $g2084;
if ($T($g2083))
$g2084 = $g2065($path2070, "/")
else $g2084 = $path2070;
var $g2085 = $g2066($g2084);
return $g2065($g2085, "/")}, false);
exports["path-directory"] = $g2069}
var $g2087 = $g2055["but-last"], $g2088 = $g2064("strip_trailing_slashes", function $g2108 ($path2089)
{while ($T(true))
{var $rarray2097 = $path2089, $g2098 = $rarray2097, $g2099 = (($g2098 || false).length || 0), $g2105 = ($g2099 - 1), $g2106 = $rarray2097[$g2105], $g2107 = $g2067($g2106, "/");
if ($T($g2107))
{var $rarray2102 = $path2089, $n2103 = undefined, $g2104 = $rarray2102.slice(0, (($n2103 || 1) * -1));
$path2089 = $g2104}
else break};
return $path2089}, false)
{var $g2109 = $g2064("path_parent_directory", function $g2112 ($path2110)
{var $patht2111 = $g2088($g2069($path2110));
return $g2065($g2066($patht2111), "/")}, false);
exports["path-parent-directory"] = $g2109}
{var trueQ = $g2055["true?"], $g2113 = $g2055.not, $g2114 = $g2059.mkdirSync, $g2115 = $g2064("ensure_directories_exist", function $g2125 ($path2116)
{var $directory2117 = $g2069($path2116), $parent2118 = $g2109($directory2117), $value2120 = $g2063($parent2118), $g2123 = !(trueQ($value2120));
if ($T($g2123))
$g2115($parent2118);
var $value2122 = $g2063($directory2117), $g2124 = !(trueQ($value2122));
if ($T($g2124))
$g2114($directory2117);
return $path2116}, false);
exports["ensure-directories-exist"] = $g2115}
var $g2126 = $g2055["make-object"], $g2127 = $g2126("modification-date", "mtime", "creation-date", "ctime", "access-date", "atime")
{var trueQ = $g2055["true?"], $g2133 = $g2055["any?"], $g2134 = $g2055["empty?"], $g2135 = $g2055["get-setter"], $g2136 = $g2055.get, $g2137 = $g2055.rest, $g2138 = $g2055.first, $g2139 = $g2059.statSync, $g2140 = $g2064("file_properties", function $g2161 ($path2141)
{if ($T($g2063($path2141)))
{var $stats2142 = $g2139($path2141), $result2143 = $g2126(), $g2144 = $g2127, $g2145, $g2146, $g2147 = [$g2144];
while ($T(true))
{var $g2148 = $g2145, $value2154;
if ($T($g2148))
$value2154 = $g2148
else $value2154 = $g2133($g2134, $g2147);
var $g2160 = !(trueQ($value2154));
if ($T($g2160))
{var $sequence2156 = $g2144, $mapping2149 = $sequence2156[0];
(function $g2162 ($mapping2150)
{var $setter2151 = $mapping2150[0], $getter2152 = $mapping2150[1];
return $g2135($result2143, $setter2151, $g2136($stats2142, $getter2152))})($mapping2149);
var $sequence2158 = $g2144, $g2159 = $sequence2158.slice(1);
$g2144 = $g2159;
$g2147 = [$g2144]}
else break};
$g2146;
return $result2143}}, false);
exports["file-properties"] = $g2140}
{var $g2163 = $g2059.lstatSync, $g2164 = $g2064("file_type", function $g2167 ($path2165)
{if ($T($g2063($path2165)))
{var $stat2166 = $g2163($path2165);
if ($T($stat2166.isFile()))
return "file"
else if ($T($stat2166.isDirectory()))
return "directory"
else if ($T($stat2166.isSymbolicLink()))
return "link"
else if ($T($stat2166.isBlockDevice()))
return "block-device"
else if ($T($stat2166.isCharacterDevice()))
return "character-device"
else if ($T($stat2166.isFIFO()))
return "fifo"
else if ($T($stat2166.isSocket()))
return "socket"}}, false);
exports["file-type"] = $g2164}
{var $g2168 = $g2055["as-string"], $g2169 = $g2059.readFileSync, $g2170 = $g2064("read_file", function $g2172 ($path2171)
{if ($T($g2063($path2171)))
return $g2168($g2169($path2171))}, false);
exports["read-file"] = $g2170}
{var $g2173 = $g2059.writeFileSync, $g2174 = $g2064("write_file", function $g2177 ($path2175, $content2176)
{$g2115($path2175);
return $g2173($path2175, $content2176)}, false);
exports["write-file"] = $g2174}
