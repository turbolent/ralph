{
var B2335;
false;
B2335 = require("ralph/core")}
{
var B2337;
false;
B2337 = require("ralph/compiler/utilities")}
{
var ralphScoreCCtrueQ = B2335["true?"],
Mmake_function__2355 = B2335["%make-function"],
instanceQ__2356 = B2335["instance?"],
LarrayG__2357 = B2335["<array>"],
not__2358 = B2335.not,
emptyQ__2359 = B2335["empty?"],
binaryEE__2360 = B2335["binary=="],
set_subtractN__2361 = B2335["set-subtract!"],
as_set__2362 = B2335["as-set"],
concatenate__2363 = B2335.concatenate,
set_unionN__2364 = B2335["set-union!"],
reduce1__2365 = B2335.reduce1,
map__2366 = B2335.map,
rcurry__2367 = B2335.rcurry,
rest__2368 = B2335.rest,
reduce__2369 = B2335.reduce,
LsymbolG__2370 = B2335["<symbol>"],
symbol_name__2371 = B2335["symbol-name"],
first__2372 = B2335.first;
false;
var get__2373 = B2335.get,
signal__2374 = B2335.signal,
description__2375 = B2335.description,
find_free_variables__2376;
false;
find_free_variables__2376 = Mmake_function__2355("find_free_variables", function find_free_variables__2377 (exp__2378, env__2379)
{
var B2462;
if ($T(instanceQ__2356(exp__2378, LarrayG__2357)))
{
var value__2411 = emptyQ__2359(exp__2378);
B2462 = !(ralphScoreCCtrueQ(value__2411))}
else
B2462 = false;
if ($T(B2462))
{
var sequence__2412 = exp__2378,
head__2380 = sequence__2412[0],
name__2381;
if ($T(instanceQ__2356(head__2380, LsymbolG__2370)))
{name__2381 = symbol_name__2371(head__2380)}
else
name__2381 = false;
var B2338__2382 = name__2381,
object2__2414 = "%method",
object1__2413 = B2338__2382,
B2463 = (object1__2413 === object2__2414);
if ($T(B2463))
{
var ____2383 = exp__2378[0],
name__2384 = exp__2378[1],
arguments__2385 = exp__2378[2],
body__2386 = exp__2378[3];
return set_subtractN__2361(find_free_variables__2377(body__2386, env__2379), as_set__2362(concatenate__2363([name__2384], arguments__2385)))}
else
{
var object2__2416 = "%bind",
object1__2415 = B2338__2382,
B2464 = (object1__2415 === object2__2416);
if ($T(B2464))
{
var ____2387 = exp__2378[0],
B2339__2388 = exp__2378[1],
var__2389 = B2339__2388[0],
value__2390 = B2339__2388[1],
body__2391 = exp__2378[2];
return set_unionN__2364(set_subtractN__2361(find_free_variables__2377(body__2391, env__2379), as_set__2362([var__2389])), find_free_variables__2377(value__2390, env__2379))}
else
{
var object2__2418 = "%begin",
object1__2417 = B2338__2382,
B2465 = (object1__2417 === object2__2418);
if ($T(B2465))
{
var values__2420 = map__2366(rcurry__2367(find_free_variables__2377, env__2379), rest__2368(exp__2378)),
function__2419 = set_unionN__2364;
return reduce__2369(function__2419, first__2372(values__2420), rest__2368(values__2420))}
else
{
var object2__2422 = "%try",
object1__2421 = B2338__2382,
B2466 = (object1__2421 === object2__2422);
if ($T(B2466))
{
var ____2392 = exp__2378[0],
e1__2393 = exp__2378[1],
v__2394 = exp__2378[2],
e2__2395 = exp__2378[3];
return set_subtractN__2361(set_unionN__2364(as_set__2362(find_free_variables__2377(e1__2393, env__2379)), as_set__2362(find_free_variables__2377(e2__2395, env__2379))), as_set__2362([v__2394]))}
else
{
var object2__2424 = "%set",
object1__2423 = B2338__2382,
B2340__2396 = (object1__2423 === object2__2424),
B2467;
if ($T(B2340__2396))
{B2467 = B2340__2396}
else
{
var object2__2426 = "%if",
object1__2425 = B2338__2382,
B2341__2397 = (object1__2425 === object2__2426);
if ($T(B2341__2397))
{B2467 = B2341__2397}
else
{
var object2__2428 = "%while",
object1__2427 = B2338__2382,
B2342__2398 = (object1__2427 === object2__2428);
if ($T(B2342__2398))
{B2467 = B2342__2398}
else
{
var object2__2430 = "%array",
object1__2429 = B2338__2382,
B2343__2399 = (object1__2429 === object2__2430);
if ($T(B2343__2399))
{B2467 = B2343__2399}
else
{
var object2__2432 = "%object",
object1__2431 = B2338__2382,
B2344__2400 = (object1__2431 === object2__2432);
if ($T(B2344__2400))
{B2467 = B2344__2400}
else
{
var object2__2434 = "%infix",
object1__2433 = B2338__2382,
B2345__2401 = (object1__2433 === object2__2434);
if ($T(B2345__2401))
{B2467 = B2345__2401}
else
{
var object2__2436 = "%get-property",
object1__2435 = B2338__2382,
B2346__2402 = (object1__2435 === object2__2436);
if ($T(B2346__2402))
{B2467 = B2346__2402}
else
{
var object2__2438 = "%native-call",
object1__2437 = B2338__2382,
B2347__2403 = (object1__2437 === object2__2438);
if ($T(B2347__2403))
{B2467 = B2347__2403}
else
{
var object2__2440 = "%return",
object1__2439 = B2338__2382,
B2348__2404 = (object1__2439 === object2__2440);
if ($T(B2348__2404))
{B2467 = B2348__2404}
else
{
var object2__2442 = "%plus",
object1__2441 = B2338__2382,
B2349__2405 = (object1__2441 === object2__2442);
if ($T(B2349__2405))
{B2467 = B2349__2405}
else
{
var object2__2444 = "%minus",
object1__2443 = B2338__2382,
B2350__2406 = (object1__2443 === object2__2444);
if ($T(B2350__2406))
{B2467 = B2350__2406}
else
{
var object2__2446 = "%times",
object1__2445 = B2338__2382,
B2351__2407 = (object1__2445 === object2__2446);
if ($T(B2351__2407))
{B2467 = B2351__2407}
else
{
var object2__2448 = "%divide",
object1__2447 = B2338__2382;
B2467 = (object1__2447 === object2__2448)}}}}}}}}}}}};
if ($T(B2467))
{
var B2468 = [],
B2469 = rcurry__2367(find_free_variables__2377, env__2379),
sequence__2449 = exp__2378,
B2470 = sequence__2449.slice(1),
B2471 = map__2366(B2469, B2470),
B2472 = reduce__2369(concatenate__2363, B2468, B2471);
return as_set__2362(B2472)}
else
{
var object2__2451 = "%native",
object1__2450 = B2338__2382,
B2352__2408 = (object1__2450 === object2__2451),
B2473;
if ($T(B2352__2408))
{B2473 = B2352__2408}
else
{
var object2__2453 = "%native-name",
object1__2452 = B2338__2382,
B2353__2409 = (object1__2452 === object2__2453);
if ($T(B2353__2409))
{B2473 = B2353__2409}
else
{
var object2__2455 = "%define",
object1__2454 = B2338__2382,
B2354__2410 = (object1__2454 === object2__2455);
if ($T(B2354__2410))
{B2473 = B2354__2410}
else
{
var object2__2457 = "%symbol",
object1__2456 = B2338__2382;
B2473 = (object1__2456 === object2__2457)}}};
if ($T(B2473))
{return as_set__2362([])}
else
{
var values__2459 = map__2366(rcurry__2367(find_free_variables__2377, env__2379), exp__2378),
function__2458 = set_unionN__2364;
return reduce__2369(function__2458, first__2372(values__2459), rest__2368(values__2459))}}}}}}}
else
if ($T(instanceQ__2356(exp__2378, LsymbolG__2370)))
{
var value__2460 = get__2373(exp__2378, "module"),
B2474 = !(ralphScoreCCtrueQ(value__2460));
if ($T(B2474))
{
var error__2461 = concatenate__2363("NOT QUALIFIED: ", description__2375(exp__2378));
throw(error__2461);
false};
return as_set__2362([exp__2378])}
else
return as_set__2362([])}, false);
exports["find-free-variables"] = find_free_variables__2376}
