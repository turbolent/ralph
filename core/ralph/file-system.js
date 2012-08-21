var B2244 = require("ralph/core")
{
var B2247,
B2248;
B2247 = require("path");
B2248 = require("fs")}
{
var B2249 = B2247.resolve,
B2250 = B2249;
exports["resolve-path"] = B2250}
{
var B2251 = B2248.existsSync,
B2252 = B2251;
exports["file-exists?"] = B2252}
{
var B2253 = B2244["%make-function"],
B2254 = B2244.concatenate,
B2255 = B2247.dirname,
B2256 = B2244["binary=="],
B2257 = B2244.last,
B2258 = B2253("path_directory", function path_directory__2259 (path__2260)
{
var array__2270 = path__2260,
B2271 = array__2270,
B2272 = ((B2271 || false).length || 0),
B2275 = (B2272 - 1),
object1__2273 = array__2270[B2275],
object2__2274 = "/",
B2276 = (object1__2273 === object2__2274),
B2277;
if ($T(B2276))
B2277 = B2254(path__2260, "/")
else
B2277 = path__2260;
var B2278 = B2255(B2277);
return B2254(B2278, "/")}, false);
exports["path-directory"] = B2258}
var B2279 = B2244["but-last"],
B2280 = B2253("strip_trailing_slashes", function strip_trailing_slashes__2281 (path__2282)
{
while (true)
{
var array__2292 = path__2282,
B2293 = array__2292,
B2294 = ((B2293 || false).length || 0),
B2302 = (B2294 - 1),
object1__2295 = array__2292[B2302],
object2__2296 = "/",
B2303 = (object1__2295 === object2__2296);
if ($T(B2303))
{
var array__2299 = path__2282,
n__2300 = undefined,
B2301 = array__2299.slice(0, ((n__2300 || 1) * -1));
path__2282 = B2301}
else
break};
return path__2282}, false)
{
var B2304 = B2253("path_parent_directory", function path_parent_directory__2305 (path__2306)
{
var pathT__2307 = B2280(B2258(path__2306));
return B2254(B2255(pathT__2307), "/")}, false);
exports["path-parent-directory"] = B2304}
{
var trueQ = B2244["true?"],
ensure_directories_exist__2311,
B2308 = B2244.not,
B2309 = B2248.mkdirSync,
B2310 = B2253("ensure_directories_exist", function ensure_directories_exist__2311 (path__2312)
{
var directory__2313 = B2258(path__2312),
parent__2314 = B2304(directory__2313),
value__2316 = B2252(parent__2314),
B2319 = !(trueQ(value__2316));
if ($T(B2319))
ensure_directories_exist__2311(parent__2314);
var value__2318 = B2252(directory__2313),
B2320 = !(trueQ(value__2318));
if ($T(B2320))
B2309(directory__2313);
return path__2312}, false);
exports["ensure-directories-exist"] = B2310}
var B2321 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]
{
var trueQ = B2244["true?"],
B2328 = B2244["any?"],
B2329 = B2244["empty?"],
B2330 = B2244.get,
B2331 = B2244.rest,
B2332 = B2244.first,
B2333 = B2244["make-object"],
B2334 = B2248.statSync,
B2335 = B2253("file_properties", function file_properties__2336 (path__2337)
{if ($T(B2252(path__2337)))
{
var stats__2338 = B2334(path__2337),
result__2339 = B2333(),
B2340 = B2321,
B2341,
B2342,
B2343 = [B2340];
while (true)
{
var B2344 = B2341,
value__2351;
if ($T(B2344))
value__2351 = B2344
else
value__2351 = B2328(B2329, B2343);
var B2357 = !(trueQ(value__2351));
if ($T(B2357))
{
var sequence__2353 = B2340,
mapping__2345 = sequence__2353[0];
(function B2346 (mapping__2347)
{
var setter__2348 = mapping__2347[0],
getter__2349 = mapping__2347[1];
return result__2339[setter__2348] = B2330(stats__2338, getter__2349)})(mapping__2345);
var sequence__2355 = B2340,
B2356 = sequence__2355.slice(1);
B2340 = B2356;
B2343 = [B2340]}
else
break};
B2342;
return result__2339}}, false);
exports["file-properties"] = B2335}
{
var B2358 = B2248.lstatSync,
B2359 = B2253("file_type", function file_type__2360 (path__2361)
{if ($T(B2252(path__2361)))
{
var stat__2362 = B2358(path__2361);
if ($T(stat__2362.isFile()))
return "file"
else
if ($T(stat__2362.isDirectory()))
return "directory"
else
if ($T(stat__2362.isSymbolicLink()))
return "link"
else
if ($T(stat__2362.isBlockDevice()))
return "block-device"
else
if ($T(stat__2362.isCharacterDevice()))
return "character-device"
else
if ($T(stat__2362.isFIFO()))
return "fifo"
else
if ($T(stat__2362.isSocket()))
return "socket"}}, false);
exports["file-type"] = B2359}
{
var B2363 = B2244["as-string"],
B2364 = B2248.readFileSync,
B2365 = B2253("read_file", function read_file__2366 (path__2367)
{if ($T(B2252(path__2367)))
return B2363(B2364(path__2367))}, false);
exports["read-file"] = B2365}
{
var B2368 = B2248.writeFileSync,
B2369 = B2253("write_file", function write_file__2370 (path__2371, content__2372)
{
B2310(path__2371);
return B2368(path__2371, content__2372)}, false);
exports["write-file"] = B2369}
