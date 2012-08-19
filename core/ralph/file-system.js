var B2012 = require("ralph/core")
{var B2015, B2016;
B2015 = require("path");
B2016 = require("fs")}
{var B2017 = B2015.resolve, B2018 = B2017;
exports["resolve-path"] = B2018}
{var B2019 = B2016.existsSync, B2020 = B2019;
exports["file-exists?"] = B2020}
{var B2021 = B2012["%make-function"], B2022 = B2012.concatenate, B2023 = B2015.dirname, B2024 = B2012["=="], B2025 = B2012.last, B2026 = B2021("path_directory", function B2043 (path__2027)
{var array__2035 = path__2027, B2036 = array__2035, B2037 = ((B2036 || false).length || 0), B2038 = (B2037 - 1), B2039 = array__2035[B2038], B2040 = B2024(B2039, "/"), B2041;
if ($T(B2040))
B2041 = B2022(path__2027, "/")
else B2041 = path__2027;
var B2042 = B2023(B2041);
return B2022(B2042, "/")}, false);
exports["path-directory"] = B2026}
var B2044 = B2012["but-last"], B2045 = B2021("strip_trailing_slashes", function B2065 (path__2046)
{while ($T(true))
{var array__2054 = path__2046, B2055 = array__2054, B2056 = ((B2055 || false).length || 0), B2062 = (B2056 - 1), B2063 = array__2054[B2062], B2064 = B2024(B2063, "/");
if ($T(B2064))
{var array__2059 = path__2046, n__2060 = undefined, B2061 = array__2059.slice(0, ((n__2060 || 1) * -1));
path__2046 = B2061}
else break};
return path__2046}, false)
{var B2066 = B2021("path_parent_directory", function B2069 (path__2067)
{var pathT__2068 = B2045(B2026(path__2067));
return B2022(B2023(pathT__2068), "/")}, false);
exports["path-parent-directory"] = B2066}
{var trueQ = B2012["true?"], B2070 = B2012.not, B2071 = B2016.mkdirSync, B2072 = B2021("ensure_directories_exist", function B2082 (path__2073)
{var directory__2074 = B2026(path__2073), parent__2075 = B2066(directory__2074), value__2077 = B2020(parent__2075), B2080 = !(trueQ(value__2077));
if ($T(B2080))
B2072(parent__2075);
var value__2079 = B2020(directory__2074), B2081 = !(trueQ(value__2079));
if ($T(B2081))
B2071(directory__2074);
return path__2073}, false);
exports["ensure-directories-exist"] = B2072}
var B2083 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]
{var trueQ = B2012["true?"], B2089 = B2012["any?"], B2090 = B2012["empty?"], B2091 = B2012["get-setter"], B2092 = B2012.get, B2093 = B2012.rest, B2094 = B2012.first, B2095 = B2012["make-object"], B2096 = B2016.statSync, B2097 = B2021("file_properties", function B2118 (path__2098)
{if ($T(B2020(path__2098)))
{var stats__2099 = B2096(path__2098), result__2100 = B2095(), B2101 = B2083, B2102, B2103, B2104 = [B2101];
while ($T(true))
{var B2105 = B2102, value__2111;
if ($T(B2105))
value__2111 = B2105
else value__2111 = B2089(B2090, B2104);
var B2117 = !(trueQ(value__2111));
if ($T(B2117))
{var sequence__2113 = B2101, mapping__2106 = sequence__2113[0];
(function B2119 (mapping__2107)
{var setter__2108 = mapping__2107[0], getter__2109 = mapping__2107[1];
return B2091(result__2100, setter__2108, B2092(stats__2099, getter__2109))})(mapping__2106);
var sequence__2115 = B2101, B2116 = sequence__2115.slice(1);
B2101 = B2116;
B2104 = [B2101]}
else break};
B2103;
return result__2100}}, false);
exports["file-properties"] = B2097}
{var B2120 = B2016.lstatSync, B2121 = B2021("file_type", function B2124 (path__2122)
{if ($T(B2020(path__2122)))
{var stat__2123 = B2120(path__2122);
if ($T(stat__2123.isFile()))
return "file"
else if ($T(stat__2123.isDirectory()))
return "directory"
else if ($T(stat__2123.isSymbolicLink()))
return "link"
else if ($T(stat__2123.isBlockDevice()))
return "block-device"
else if ($T(stat__2123.isCharacterDevice()))
return "character-device"
else if ($T(stat__2123.isFIFO()))
return "fifo"
else if ($T(stat__2123.isSocket()))
return "socket"}}, false);
exports["file-type"] = B2121}
{var B2125 = B2012["as-string"], B2126 = B2016.readFileSync, B2127 = B2021("read_file", function B2129 (path__2128)
{if ($T(B2020(path__2128)))
return B2125(B2126(path__2128))}, false);
exports["read-file"] = B2127}
{var B2130 = B2016.writeFileSync, B2131 = B2021("write_file", function B2134 (path__2132, content__2133)
{B2072(path__2132);
return B2130(path__2132, content__2133)}, false);
exports["write-file"] = B2131}
