var B2251 = require("ralph/core")
{
var B2254,
B2255;
B2254 = require("path");
B2255 = require("fs")}
{
var B2256 = B2254.resolve,
B2257 = B2256;
exports["resolve-path"] = B2257}
{
var B2258 = B2255.existsSync,
B2259 = B2258;
exports["file-exists?"] = B2259}
{
var B2260 = B2251["%make-function"],
B2261 = B2251.concatenate,
B2262 = B2254.dirname,
B2263 = B2251["binary=="],
B2264 = B2251.last,
B2265 = B2260("path_directory", function path_directory__2266 (path__2267)
{
var array__2277 = path__2267,
B2278 = array__2277,
B2279 = ((B2278 || false).length || 0),
B2282 = (B2279 - 1),
object1__2280 = array__2277[B2282],
object2__2281 = "/",
B2283 = (object1__2280 === object2__2281),
B2284;
if ($T(B2283))
B2284 = B2261(path__2267, "/")
else
B2284 = path__2267;
var B2285 = B2262(B2284);
return B2261(B2285, "/")}, false);
exports["path-directory"] = B2265}
var B2286 = B2251["but-last"],
B2287 = B2260("strip_trailing_slashes", function strip_trailing_slashes__2288 (path__2289)
{
while (true)
{
var array__2299 = path__2289,
B2300 = array__2299,
B2301 = ((B2300 || false).length || 0),
B2309 = (B2301 - 1),
object1__2302 = array__2299[B2309],
object2__2303 = "/",
B2310 = (object1__2302 === object2__2303);
if ($T(B2310))
{
var array__2306 = path__2289,
n__2307 = undefined,
B2308 = array__2306.slice(0, ((n__2307 || 1) * -1));
path__2289 = B2308}
else
break};
return path__2289}, false)
{
var B2311 = B2260("path_parent_directory", function path_parent_directory__2312 (path__2313)
{
var pathT__2314 = B2287(B2265(path__2313));
return B2261(B2262(pathT__2314), "/")}, false);
exports["path-parent-directory"] = B2311}
{
var trueQ = B2251["true?"],
ensure_directories_exist__2318,
B2315 = B2251.not,
B2316 = B2255.mkdirSync,
B2317 = B2260("ensure_directories_exist", function ensure_directories_exist__2318 (path__2319)
{
var directory__2320 = B2265(path__2319),
parent__2321 = B2311(directory__2320),
value__2323 = B2259(parent__2321),
B2326 = !(trueQ(value__2323));
if ($T(B2326))
ensure_directories_exist__2318(parent__2321);
var value__2325 = B2259(directory__2320),
B2327 = !(trueQ(value__2325));
if ($T(B2327))
B2316(directory__2320);
return path__2319}, false);
exports["ensure-directories-exist"] = B2317}
var B2328 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]
{
var trueQ = B2251["true?"],
B2335 = B2251["any?"],
B2336 = B2251["empty?"],
B2337 = B2251.get,
B2338 = B2251.rest,
B2339 = B2251.first,
B2340 = B2251["make-object"],
B2341 = B2255.statSync,
B2342 = B2260("file_properties", function file_properties__2343 (path__2344)
{if ($T(B2259(path__2344)))
{
var stats__2345 = B2341(path__2344),
result__2346 = B2340(),
B2347 = B2328,
B2348,
B2349,
B2350 = [B2347];
while (true)
{
var B2351 = B2348,
value__2358;
if ($T(B2351))
value__2358 = B2351
else
value__2358 = B2335(B2336, B2350);
var B2364 = !(trueQ(value__2358));
if ($T(B2364))
{
var sequence__2360 = B2347,
mapping__2352 = sequence__2360[0];
(function B2353 (mapping__2354)
{
var setter__2355 = mapping__2354[0],
getter__2356 = mapping__2354[1];
return result__2346[setter__2355] = B2337(stats__2345, getter__2356)})(mapping__2352);
var sequence__2362 = B2347,
B2363 = sequence__2362.slice(1);
B2347 = B2363;
B2350 = [B2347]}
else
break};
B2349;
return result__2346}}, false);
exports["file-properties"] = B2342}
{
var B2365 = B2255.lstatSync,
B2366 = B2260("file_type", function file_type__2367 (path__2368)
{if ($T(B2259(path__2368)))
{
var stat__2369 = B2365(path__2368);
if ($T(stat__2369.isFile()))
return "file"
else
if ($T(stat__2369.isDirectory()))
return "directory"
else
if ($T(stat__2369.isSymbolicLink()))
return "link"
else
if ($T(stat__2369.isBlockDevice()))
return "block-device"
else
if ($T(stat__2369.isCharacterDevice()))
return "character-device"
else
if ($T(stat__2369.isFIFO()))
return "fifo"
else
if ($T(stat__2369.isSocket()))
return "socket"}}, false);
exports["file-type"] = B2366}
{
var B2370 = B2251["as-string"],
B2371 = B2255.readFileSync,
B2372 = B2260("read_file", function read_file__2373 (path__2374)
{if ($T(B2259(path__2374)))
return B2370(B2371(path__2374))}, false);
exports["read-file"] = B2372}
{
var B2375 = B2255.writeFileSync,
B2376 = B2260("write_file", function write_file__2377 (path__2378, content__2379)
{
B2317(path__2378);
return B2375(path__2378, content__2379)}, false);
exports["write-file"] = B2376}
