var B2207 = require("ralph/core")
false
{var trueQ = B2207["true?"], B2208 = B2207["%make-function"], B2209 = B2207["instance?"], B2210 = B2207["<array>"], B2211 = B2207.not, B2212 = B2207["empty?"], B2213 = B2207.first, B2214 = B2207["<symbol>"], B2215 = B2208("expressionQ", function B2237 (form__2216)
{if ($T(B2209(form__2216, B2210)))
{var sequence__2228 = form__2216, B2229 = sequence__2228, B2230 = ((B2229 || false).length || 0), B2231 = 0, value__2232 = (B2230 === B2231), B2235 = !(trueQ(value__2232));
if ($T(B2235))
{var sequence__2234 = form__2216, B2236 = sequence__2234[0];
return B2209(B2236, B2214)}}}, false);
exports["expression?"] = B2215}
{var B2245 = $S("%var"), B2238 = B2207["=="], B2239 = B2208("varQ", function B2246 (exp__2240)
{if ($T(B2215(exp__2240)))
{var sequence__2242 = exp__2240, B2243 = sequence__2242[0], B2244 = B2245;
return B2238(B2243, B2244)}}, false);
exports["var?"] = B2239}
{var B2253 = $S("%set"), B2247 = B2208("setQ", function B2254 (exp__2248)
{if ($T(B2215(exp__2248)))
{var sequence__2250 = exp__2248, B2251 = sequence__2250[0], B2252 = B2253;
return B2238(B2251, B2252)}}, false);
exports["set?"] = B2247}
{var B2261 = $S("%method"), B2255 = B2208("methodQ", function B2262 (exp__2256)
{if ($T(B2215(exp__2256)))
{var sequence__2258 = exp__2256, B2259 = sequence__2258[0], B2260 = B2261;
return B2238(B2259, B2260)}}, false);
exports["method?"] = B2255}
{var B2263 = B2207.symbol, B2264 = B2207.concatenate, B2265 = B2207["symbol-name"], B2266 = B2208("transform_setter_identifier", function B2268 (identifier__2267)
{return B2263(B2264(B2265(identifier__2267), "-setter"))}, false);
exports["transform-setter-identifier"] = B2266}
{var B2269 = B2207.size, B2270 = B2207["every?"], B2271 = B2207.rcurry, B2272 = B2208("setter_identifierQ", function B2282 (form__2273)
{if ($T(B2209(form__2273, B2210)))
{var object__2275 = form__2273, B2278 = ((object__2275 || false).length || 0), B2279 = B2238(B2278, 2);
if ($T(B2279))
if ($T(B2270(B2271(B2209, B2214), form__2273)))
{var sequence__2277 = form__2273, B2280 = sequence__2277[0], B2281 = B2265(B2280);
return B2238(B2281, "setter")}}}, false);
exports["setter-identifier?"] = B2272}
{var B2283 = B2207.second, B2284 = B2208("identifier_name", function B2290 (identifier__2285)
{var B2289;
if ($T(B2272(identifier__2285)))
{var sequence__2287 = identifier__2285, B2288 = sequence__2287[1];
B2289 = B2266(B2288)}
else B2289 = identifier__2285;
return B2265(B2289)}, false);
exports["identifier-name"] = B2284}
var B2291 = 0
{var B2292 = B2208("reset_symbol_counterN", function B2293 ()
{return B2291 = 0}, false);
exports["reset-symbol-counter!"] = B2292}
{var B2294 = B2207["as-string"], B2295 = B2208("generate_symbol", function B2301 (prefix__2296)
{var B2299;
if ($T(prefix__2296))
B2299 = B2264(prefix__2296, "_")
else B2299 = "$";
var B2300 = B2294(B2291 = (B2291 + 1)), name__2297 = B2264(B2299, B2300), result__2298 = B2263(name__2297);
result__2298["generated?"] = true;
return result__2298}, false);
exports["generate-symbol"] = B2295}
{var B2310 = $S("%begin"), B2303 = B2208("maybe_begin", function B2311 (expressions__2304)
{var object__2307 = expressions__2304, B2305 = ((object__2307 || false).length || 0);
if ($T(B2238(B2305, 0)))
return false
else if ($T(B2238(B2305, 1)))
{var sequence__2309 = expressions__2304;
return sequence__2309[0]}
else return B2264([B2310], expressions__2304)}, false);
exports["maybe-begin"] = B2303}
{var B2313 = B2207.get, B2314 = B2208("get_module_nameSname", function B2319 (identifier__2315)
{var B2316 = B2313(identifier__2315, "module"), B2317;
if ($T(B2316))
B2317 = B2316
else B2317 = "";
var B2318 = B2265(identifier__2315);
return [B2317, B2318]}, false);
exports["get-module-name/name"] = B2314}
