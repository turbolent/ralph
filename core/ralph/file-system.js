var B2252 = require("ralph/core")
{var B2255, B2256;
B2255 = require("path");
B2256 = require("fs")}
{var B2257 = B2255.resolve, B2258 = B2257;
exports["resolve-path"] = B2258}
{var B2259 = B2256.existsSync, B2260 = B2259;
exports["file-exists?"] = B2260}
{var B2261 = B2252["%make-function"], B2262 = B2252.concatenate, B2263 = B2255.dirname, B2264 = B2252["binary=="], B2265 = B2252.last, B2266 = B2261("path_directory", function B2286 (path__2267)
{var array__2277 = path__2267, B2278 = array__2277, B2279 = ((B2278 || false).length || 0), B2282 = (B2279 - 1), object1__2280 = array__2277[B2282], object2__2281 = "/", B2283 = (object1__2280 === object2__2281), B2284;
if ($T(B2283))
B2284 = B2262(path__2267, "/")
else B2284 = path__2267;
var B2285 = B2263(B2284);
return B2262(B2285, "/")}, false);
exports["path-directory"] = B2266}
var B2287 = B2252["but-last"], B2288 = B2261("strip_trailing_slashes", function B2311 (path__2289)
{while (true)
{var array__2299 = path__2289, B2300 = array__2299, B2301 = ((B2300 || false).length || 0), B2309 = (B2301 - 1), object1__2302 = array__2299[B2309], object2__2303 = "/", B2310 = (object1__2302 === object2__2303);
if ($T(B2310))
{var array__2306 = path__2289, n__2307 = undefined, B2308 = array__2306.slice(0, ((n__2307 || 1) * -1));
path__2289 = B2308}
else break};
return path__2289}, false)
{var B2312 = B2261("path_parent_directory", function B2315 (path__2313)
{var pathT__2314 = B2288(B2266(path__2313));
return B2262(B2263(pathT__2314), "/")}, false);
exports["path-parent-directory"] = B2312}
{var trueQ = B2252["true?"], B2316 = B2252.not, B2317 = B2256.mkdirSync, B2318 = B2261("ensure_directories_exist", function B2328 (path__2319)
{var directory__2320 = B2266(path__2319), parent__2321 = B2312(directory__2320), value__2323 = B2260(parent__2321), B2326 = !(trueQ(value__2323));
if ($T(B2326))
B2318(parent__2321);
var value__2325 = B2260(directory__2320), B2327 = !(trueQ(value__2325));
if ($T(B2327))
B2317(directory__2320);
return path__2319}, false);
exports["ensure-directories-exist"] = B2318}
var B2329 = [["modification-date", "mtime"], ["creation-date", "ctime"], ["access-date", "atime"]]
{var trueQ = B2252["true?"], B2335 = B2252["any?"], B2336 = B2252["empty?"], B2337 = B2252.get, B2338 = B2252.rest, B2339 = B2252.first, B2340 = B2252["make-object"], B2341 = B2256.statSync, B2342 = B2261("file_properties", function B2363 (path__2343)
{if ($T(B2260(path__2343)))
{var stats__2344 = B2341(path__2343), result__2345 = B2340(), B2346 = B2329, B2347, B2348, B2349 = [B2346];
while (true)
{var B2350 = B2347, value__2356;
if ($T(B2350))
value__2356 = B2350
else value__2356 = B2335(B2336, B2349);
var B2362 = !(trueQ(value__2356));
if ($T(B2362))
{var sequence__2358 = B2346, mapping__2351 = sequence__2358[0];
(function B2364 (mapping__2352)
{var setter__2353 = mapping__2352[0], getter__2354 = mapping__2352[1];
return result__2345[setter__2353] = B2337(stats__2344, getter__2354)})(mapping__2351);
var sequence__2360 = B2346, B2361 = sequence__2360.slice(1);
B2346 = B2361;
B2349 = [B2346]}
else break};
B2348;
return result__2345}}, false);
exports["file-properties"] = B2342}
{var B2365 = B2256.lstatSync, B2366 = B2261("file_type", function B2369 (path__2367)
{if ($T(B2260(path__2367)))
{var stat__2368 = B2365(path__2367);
if ($T(stat__2368.isFile()))
return "file"
else if ($T(stat__2368.isDirectory()))
return "directory"
else if ($T(stat__2368.isSymbolicLink()))
return "link"
else if ($T(stat__2368.isBlockDevice()))
return "block-device"
else if ($T(stat__2368.isCharacterDevice()))
return "character-device"
else if ($T(stat__2368.isFIFO()))
return "fifo"
else if ($T(stat__2368.isSocket()))
return "socket"}}, false);
exports["file-type"] = B2366}
{var B2370 = B2252["as-string"], B2371 = B2256.readFileSync, B2372 = B2261("read_file", function B2374 (path__2373)
{if ($T(B2260(path__2373)))
return B2370(B2371(path__2373))}, false);
exports["read-file"] = B2372}
{var B2375 = B2256.writeFileSync, B2376 = B2261("write_file", function B2379 (path__2377, content__2378)
{B2318(path__2377);
return B2375(path__2377, content__2378)}, false);
exports["write-file"] = B2376}
