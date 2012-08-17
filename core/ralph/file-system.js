var B2007 = require("ralph/core")
{var B2010, B2011;
B2010 = require("path");
B2011 = require("fs")}
{var B2012 = B2010.resolve, B2013 = B2012;
exports["resolve-path"] = B2013}
{var B2014 = B2011.existsSync, B2015 = B2014;
exports["file-exists?"] = B2015}
{var B2016 = B2007["%make-function"], B2017 = B2007.concatenate, B2018 = B2010.dirname, B2019 = B2007["=="], B2020 = B2007.last, B2021 = B2016("path_directory", function B2038 (path__2022)
{var array__2030 = path__2022, B2031 = array__2030, B2032 = ((B2031 || false).length || 0), B2033 = (B2032 - 1), B2034 = array__2030[B2033], B2035 = B2019(B2034, "/"), B2036;
if ($T(B2035))
B2036 = B2017(path__2022, "/")
else B2036 = path__2022;
var B2037 = B2018(B2036);
return B2017(B2037, "/")}, false);
exports["path-directory"] = B2021}
var B2039 = B2007["but-last"], B2040 = B2016("strip_trailing_slashes", function B2060 (path__2041)
{while ($T(true))
{var array__2049 = path__2041, B2050 = array__2049, B2051 = ((B2050 || false).length || 0), B2057 = (B2051 - 1), B2058 = array__2049[B2057], B2059 = B2019(B2058, "/");
if ($T(B2059))
{var array__2054 = path__2041, n__2055 = undefined, B2056 = array__2054.slice(0, ((n__2055 || 1) * -1));
path__2041 = B2056}
else break};
return path__2041}, false)
{var B2061 = B2016("path_parent_directory", function B2064 (path__2062)
{var pathT__2063 = B2040(B2021(path__2062));
return B2017(B2018(pathT__2063), "/")}, false);
exports["path-parent-directory"] = B2061}
{var trueQ = B2007["true?"], B2065 = B2007.not, B2066 = B2011.mkdirSync, B2067 = B2016("ensure_directories_exist", function B2077 (path__2068)
{var directory__2069 = B2021(path__2068), parent__2070 = B2061(directory__2069), value__2072 = B2015(parent__2070), B2075 = !(trueQ(value__2072));
if ($T(B2075))
B2067(parent__2070);
var value__2074 = B2015(directory__2069), B2076 = !(trueQ(value__2074));
if ($T(B2076))
B2066(directory__2069);
return path__2068}, false);
exports["ensure-directories-exist"] = B2067}
var B2078 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]
{var trueQ = B2007["true?"], B2084 = B2007["any?"], B2085 = B2007["empty?"], B2086 = B2007["get-setter"], B2087 = B2007.get, B2088 = B2007.rest, B2089 = B2007.first, B2090 = B2007["make-object"], B2091 = B2011.statSync, B2092 = B2016("file_properties", function B2113 (path__2093)
{if ($T(B2015(path__2093)))
{var stats__2094 = B2091(path__2093), result__2095 = B2090(), B2096 = B2078, B2097, B2098, B2099 = [B2096];
while ($T(true))
{var B2100 = B2097, value__2106;
if ($T(B2100))
value__2106 = B2100
else value__2106 = B2084(B2085, B2099);
var B2112 = !(trueQ(value__2106));
if ($T(B2112))
{var sequence__2108 = B2096, mapping__2101 = sequence__2108[0];
(function B2114 (mapping__2102)
{var setter__2103 = mapping__2102[0], getter__2104 = mapping__2102[1];
return B2086(result__2095, setter__2103, B2087(stats__2094, getter__2104))})(mapping__2101);
var sequence__2110 = B2096, B2111 = sequence__2110.slice(1);
B2096 = B2111;
B2099 = [B2096]}
else break};
B2098;
return result__2095}}, false);
exports["file-properties"] = B2092}
{var B2115 = B2011.lstatSync, B2116 = B2016("file_type", function B2119 (path__2117)
{if ($T(B2015(path__2117)))
{var stat__2118 = B2115(path__2117);
if ($T(stat__2118.isFile()))
return "file"
else if ($T(stat__2118.isDirectory()))
return "directory"
else if ($T(stat__2118.isSymbolicLink()))
return "link"
else if ($T(stat__2118.isBlockDevice()))
return "block-device"
else if ($T(stat__2118.isCharacterDevice()))
return "character-device"
else if ($T(stat__2118.isFIFO()))
return "fifo"
else if ($T(stat__2118.isSocket()))
return "socket"}}, false);
exports["file-type"] = B2116}
{var B2120 = B2007["as-string"], B2121 = B2011.readFileSync, B2122 = B2016("read_file", function B2124 (path__2123)
{if ($T(B2015(path__2123)))
return B2120(B2121(path__2123))}, false);
exports["read-file"] = B2122}
{var B2125 = B2011.writeFileSync, B2126 = B2016("write_file", function B2129 (path__2127, content__2128)
{B2067(path__2127);
return B2125(path__2127, content__2128)}, false);
exports["write-file"] = B2126}
