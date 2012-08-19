var B2250 = require("ralph/core")
var B2252 = require("ralph/compiler/utilities")
{var trueQ = B2250["true?"], B2253 = B2250["%make-function"], B2254 = B2250.not, B2255 = B2250.get, B2256 = B2250["get-setter"], B2257 = B2250["make-object"], B2258 = B2253("ensure_naming_structure", function B2269 (env__2259, module_name__2260, name__2261)
{var value__2264 = B2255(env__2259, "identifiers", module_name__2260), B2267 = !(trueQ(value__2264));
if ($T(B2267))
B2256(env__2259, "identifiers", module_name__2260, B2257());
var module_renamings__2262 = B2255(env__2259, "identifiers", module_name__2260), value__2266 = B2255(module_renamings__2262, name__2261), B2268 = !(trueQ(value__2266));
if ($T(B2268))
B2256(module_renamings__2262, name__2261, []);
return env__2259}, false);
exports["ensure-naming-structure"] = B2258}
{var trueQ = B2250["true?"], B2271 = B2250.map, B2272 = B2250.push, B2273 = B2252["generate-symbol"], B2274 = B2252["get-module-name/name"], B2275 = B2253("rename_identifiers", function B2291 (identifiers__2276, env__2277)
{return B2271(function B2292 (identifier__2278)
{var B2279 = B2274(identifier__2278), module_name__2280 = B2279[0], name__2281 = B2279[1], value__2284 = B2255(identifier__2278, "generated?"), B2289 = !(trueQ(value__2284)), B2290;
if ($T(B2289))
B2290 = name__2281
else B2290 = false;
var new_identifier__2282 = B2273(B2290);
B2258(env__2277, module_name__2280, name__2281);
var array__2287 = B2255(env__2277, "identifiers", module_name__2280, name__2281), value__2288 = new_identifier__2282;
array__2287.unshift(value__2288);
array__2287;
return new_identifier__2282}, identifiers__2276)}, false);
exports["rename-identifiers"] = B2275}
{var trueQ = B2250["true?"], B2299 = B2250["any?"], B2300 = B2250["empty?"], B2301 = B2250.pop, B2302 = B2250.rest, B2303 = B2250.first, B2304 = B2253("restore_identifiers", function B2327 (identifiers__2305, env__2306)
{var B2307 = identifiers__2305, B2308, B2309, B2310 = [B2307];
while ($T(true))
{var B2311 = B2308, value__2318;
if ($T(B2311))
value__2318 = B2311
else value__2318 = B2299(B2300, B2310);
var B2326 = !(trueQ(value__2318));
if ($T(B2326))
{var sequence__2320 = B2307, identifier__2312 = sequence__2320[0];
(function B2328 (identifier__2313)
{var B2314 = B2274(identifier__2313), module_name__2315 = B2314[0], name__2316 = B2314[1], array__2322 = B2255(env__2306, "identifiers", module_name__2315, name__2316);
return array__2322.shift()})(identifier__2312);
var sequence__2324 = B2307, B2325 = sequence__2324.slice(1);
B2307 = B2325;
B2310 = [B2307]}
else break};
return B2309}, false);
exports["restore-identifiers"] = B2304}
var B2329 = B2257()
{var B2332 = B2253("find_identifier", function B2342 (identifier__2333, env__2334)
{var B2335 = B2274(identifier__2333), module_name__2336 = B2335[0], name__2337 = B2335[1], B2338 = B2255(env__2334, "identifiers", module_name__2336, name__2337);
if ($T(B2338))
{var renamings__2339 = B2338, sequence__2341 = renamings__2339;
return sequence__2341[0]}
else return B2329}, false);
exports["find-identifier"] = B2332}
{var B2435 = $S("%bind"), B2436 = $S("%try"), B2437 = $S("%define"), B2362 = B2250["instance?"], B2363 = B2250["<array>"], B2364 = B2250["=="], B2365 = B2250["push-last"], B2366 = B2250["symbol-name"], B2367 = B2250.concatenate, B2368 = B2250.rcurry, B2369 = B2250["<symbol>"], B2370 = B2253("alpha_convert", function B2438 (form__2371, env__2372)
{var B2373 = form__2371;
if ($T(B2362(B2373, B2363)))
{var sequence__2419 = form__2371, B2428 = sequence__2419[0], B2374 = B2366(B2428);
if ($T(B2364(B2374, "%method")))
{var ____2375 = form__2371[0], arguments__2376 = form__2371[1], body__2377 = form__2371[2], new_arguments__2378 = B2275(arguments__2376, env__2372), new_body__2379 = B2370(body__2377, env__2372), result__2380 = [____2375, new_arguments__2378, new_body__2379];
B2304(arguments__2376, env__2372);
return result__2380}
else if ($T(B2364(B2374, "%bind")))
{var ____2381 = form__2371[0], B2382 = form__2371[1], var__2383 = B2382[0], value__2384 = B2382[1], body__2385 = form__2371[2], new_value__2386 = B2370(value__2384, env__2372), B2387 = B2275([var__2383], env__2372), new_var__2388 = B2387[0], result__2389 = [B2435, [new_var__2388, new_value__2386], B2370(body__2385, env__2372)];
B2304([var__2383], env__2372);
return result__2389}
else if ($T(B2364(B2374, "%try")))
{var ____2390 = form__2371[0], body__2391 = form__2371[1], var__2392 = form__2371[2], catch__2393 = form__2371[3], new_body__2394 = B2370(body__2391, env__2372), B2395 = B2275([var__2392], env__2372), new_var__2396 = B2395[0], result__2397 = [B2436, new_body__2394, new_var__2396, B2370(catch__2393, env__2372)];
B2304([var__2392], env__2372);
return result__2397}
else if ($T(B2364(B2374, "%define")))
{var ____2398 = form__2371[0], identifier__2399 = form__2371[1], B2400 = B2274(identifier__2399), module_name__2401 = B2400[0], name__2402 = B2400[1], new_identifier__2403 = B2273();
B2258(env__2372, module_name__2401, name__2402);
var array__2422 = B2255(env__2372, "identifiers", module_name__2401, name__2402), value__2423 = new_identifier__2403;
array__2422.push(value__2423);
array__2422;
B2256(env__2372, "definition-names", B2366(new_identifier__2403), name__2402);
B2256(env__2372, "new-identifiers", name__2402, new_identifier__2403);
return [B2437, new_identifier__2403]}
else {var B2404 = B2364(B2374, "%if"), B2429;
if ($T(B2404))
B2429 = B2404
else {var B2405 = B2364(B2374, "%while");
if ($T(B2405))
B2429 = B2405
else {var B2406 = B2364(B2374, "%set");
if ($T(B2406))
B2429 = B2406
else {var B2407 = B2364(B2374, "%begin");
if ($T(B2407))
B2429 = B2407
else {var B2408 = B2364(B2374, "%get-property");
if ($T(B2408))
B2429 = B2408
else {var B2409 = B2364(B2374, "%object");
if ($T(B2409))
B2429 = B2409
else {var B2410 = B2364(B2374, "%array");
if ($T(B2410))
B2429 = B2410
else {var B2411 = B2364(B2374, "%native");
if ($T(B2411))
B2429 = B2411
else {var B2412 = B2364(B2374, "%native-call");
if ($T(B2412))
B2429 = B2412
else {var B2413 = B2364(B2374, "%infix");
if ($T(B2413))
B2429 = B2413
else {var B2414 = B2364(B2374, "%minus");
if ($T(B2414))
B2429 = B2414
else {var B2415 = B2364(B2374, "%plus");
if ($T(B2415))
B2429 = B2415
else {var B2416 = B2364(B2374, "%times");
if ($T(B2416))
B2429 = B2416
else B2429 = B2364(B2374, "%divide")}}}}}}}}}}}};
if ($T(B2429))
{var sequence__2425 = form__2371, B2430 = sequence__2425[0], B2431 = [B2430], B2432 = B2368(B2370, env__2372), sequence__2427 = form__2371, B2433 = sequence__2427.slice(1), B2434 = B2271(B2432, B2433);
return B2367(B2431, B2434)}
else if ($T(B2364(B2374, "%native-name")))
return form__2371
else return B2271(B2368(B2370, env__2372), form__2371)}}
else if ($T(B2362(B2373, B2369)))
{var value__2417 = B2332(form__2371, env__2372);
if ($T(B2364(value__2417, B2329)))
return form__2371
else return value__2417}
else return form__2371}, false);
exports["alpha-convert"] = B2370}
