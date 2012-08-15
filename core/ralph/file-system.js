var $g2007 = require("ralph/core")
{var $g2010, $g2011;
$g2010 = require("path");
$g2011 = require("fs")}
{var $g2012 = $g2010.resolve, $g2013 = $g2012;
exports["resolve-path"] = $g2013}
{var $g2014 = $g2011.existsSync, $g2015 = $g2014;
exports["file-exists?"] = $g2015}
{var $g2016 = $g2007["%make-function"], $g2017 = $g2007.concatenate, $g2018 = $g2010.dirname, $g2019 = $g2007["=="], $g2020 = $g2007.last, $g2021 = $g2016("path_directory", function $g2038 ($path2022)
{var $rarray2030 = $path2022, $g2031 = $rarray2030, $g2032 = (($g2031 || false).length || 0), $g2033 = ($g2032 - 1), $g2034 = $rarray2030[$g2033], $g2035 = $g2019($g2034, "/"), $g2036;
if ($T($g2035))
$g2036 = $g2017($path2022, "/")
else $g2036 = $path2022;
var $g2037 = $g2018($g2036);
return $g2017($g2037, "/")}, false);
exports["path-directory"] = $g2021}
var $g2039 = $g2007["but-last"], $g2040 = $g2016("strip_trailing_slashes", function $g2060 ($path2041)
{while ($T(true))
{var $rarray2049 = $path2041, $g2050 = $rarray2049, $g2051 = (($g2050 || false).length || 0), $g2057 = ($g2051 - 1), $g2058 = $rarray2049[$g2057], $g2059 = $g2019($g2058, "/");
if ($T($g2059))
{var $rarray2054 = $path2041, $n2055 = undefined, $g2056 = $rarray2054.slice(0, (($n2055 || 1) * -1));
$path2041 = $g2056}
else break};
return $path2041}, false)
{var $g2061 = $g2016("path_parent_directory", function $g2064 ($path2062)
{var $patht2063 = $g2040($g2021($path2062));
return $g2017($g2018($patht2063), "/")}, false);
exports["path-parent-directory"] = $g2061}
{var trueQ = $g2007["true?"], $g2065 = $g2007.not, $g2066 = $g2011.mkdirSync, $g2067 = $g2016("ensure_directories_exist", function $g2077 ($path2068)
{var $directory2069 = $g2021($path2068), $parent2070 = $g2061($directory2069), $value2072 = $g2015($parent2070), $g2075 = !(trueQ($value2072));
if ($T($g2075))
$g2067($parent2070);
var $value2074 = $g2015($directory2069), $g2076 = !(trueQ($value2074));
if ($T($g2076))
$g2066($directory2069);
return $path2068}, false);
exports["ensure-directories-exist"] = $g2067}
var $g2078 = $g2007["make-object"], $g2079 = $g2078("modification-date", "mtime", "creation-date", "ctime", "access-date", "atime")
{var trueQ = $g2007["true?"], $g2085 = $g2007["any?"], $g2086 = $g2007["empty?"], $g2087 = $g2007["get-setter"], $g2088 = $g2007.get, $g2089 = $g2007.rest, $g2090 = $g2007.first, $g2091 = $g2011.statSync, $g2092 = $g2016("file_properties", function $g2113 ($path2093)
{if ($T($g2015($path2093)))
{var $stats2094 = $g2091($path2093), $result2095 = $g2078(), $g2096 = $g2079, $g2097, $g2098, $g2099 = [$g2096];
while ($T(true))
{var $g2100 = $g2097, $value2106;
if ($T($g2100))
$value2106 = $g2100
else $value2106 = $g2085($g2086, $g2099);
var $g2112 = !(trueQ($value2106));
if ($T($g2112))
{var $sequence2108 = $g2096, $mapping2101 = $sequence2108[0];
(function $g2114 ($mapping2102)
{var $setter2103 = $mapping2102[0], $getter2104 = $mapping2102[1];
return $g2087($result2095, $setter2103, $g2088($stats2094, $getter2104))})($mapping2101);
var $sequence2110 = $g2096, $g2111 = $sequence2110.slice(1);
$g2096 = $g2111;
$g2099 = [$g2096]}
else break};
$g2098;
return $result2095}}, false);
exports["file-properties"] = $g2092}
{var $g2115 = $g2011.lstatSync, $g2116 = $g2016("file_type", function $g2119 ($path2117)
{if ($T($g2015($path2117)))
{var $stat2118 = $g2115($path2117);
if ($T($stat2118.isFile()))
return "file"
else if ($T($stat2118.isDirectory()))
return "directory"
else if ($T($stat2118.isSymbolicLink()))
return "link"
else if ($T($stat2118.isBlockDevice()))
return "block-device"
else if ($T($stat2118.isCharacterDevice()))
return "character-device"
else if ($T($stat2118.isFIFO()))
return "fifo"
else if ($T($stat2118.isSocket()))
return "socket"}}, false);
exports["file-type"] = $g2116}
{var $g2120 = $g2007["as-string"], $g2121 = $g2011.readFileSync, $g2122 = $g2016("read_file", function $g2124 ($path2123)
{if ($T($g2015($path2123)))
return $g2120($g2121($path2123))}, false);
exports["read-file"] = $g2122}
{var $g2125 = $g2011.writeFileSync, $g2126 = $g2016("write_file", function $g2129 ($path2127, $content2128)
{$g2067($path2127);
return $g2125($path2127, $content2128)}, false);
exports["write-file"] = $g2126}
