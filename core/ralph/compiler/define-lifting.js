{
var B2145;
false;
B2145 = require("ralph/core")}
{
var B2147;
false;
B2147 = require("ralph/compiler/utilities")}
{
var Mmake_function__2148 = B2145["%make-function"],
lift_define__2149,
identity__2150 = B2145.identity,
lift_defines__2151;
false;
lift_defines__2151 = Mmake_function__2148("lift_defines", function lift_defines__2152 (exp__2153, env__2154)
{return lift_define__2149(exp__2153, env__2154, identity__2150)}, false);
exports["lift-defines"] = lift_defines__2151}
{
var B2298 = $S("%bind", "ralph/core"),
B2299 = $S("%set", "ralph/core"),
B2300 = $S("%method", "ralph/core"),
B2301 = $S("%begin", "ralph/core"),
B2302 = $S("%define", "ralph/core"),
expressionQ__2177 = B2147["expression?"],
binaryEE__2178 = B2145["binary=="],
lift_defineT__2179,
concatenate__2180 = B2145.concatenate,
get__2181 = B2145.get,
get_setter__2182 = B2145["get-setter"],
module_nameSname__2183 = B2147["module-name/name"],
second__2184 = B2145.second,
lift_defineTT__2185,
symbol_name__2186 = B2145["symbol-name"],
first__2187 = B2145.first;
false;
lift_define__2149 = Mmake_function__2148("lift_define", function lift_define__2188 (exp__2189, env__2190, k__2191)
{B2303:while(true){
if ($T(expressionQ__2177(exp__2189)))
{
var sequence__2248 = exp__2189,
B2290 = sequence__2248[0],
B2155__2192 = symbol_name__2186(B2290),
object2__2250 = "%bind",
object1__2249 = B2155__2192,
B2291 = (object1__2249 === object2__2250);
if ($T(B2291))
{
var ____2193 = exp__2189[0],
B2156__2194 = exp__2189[1],
var__2195 = B2156__2194[0],
value__2196 = B2156__2194[1],
body__2197 = exp__2189[2];
arguments = [value__2196, env__2190, (function B2304 (lift_define__2188, body__2197, k__2191, B2298, var__2195)
{return function B2157__2198 (lvalue__2199, env__2200)
{return lift_define__2188(body__2197, env__2200, function B2158__2201 (lbody__2202, env__2203)
{return k__2191([B2298, [var__2195, lvalue__2199], lbody__2202], env__2203)})}})(lift_define__2188, body__2197, k__2191, B2298, var__2195)];
exp__2189 = arguments[0];
env__2190 = arguments[1];
k__2191 = arguments[2];
continue B2303}
else
{
var object2__2252 = "%try",
object1__2251 = B2155__2192,
B2292 = (object1__2251 === object2__2252);
if ($T(B2292))
{
var m__2204 = exp__2189[0],
e1__2205 = exp__2189[1],
v__2206 = exp__2189[2],
e2__2207 = exp__2189[3];
return lift_defineT__2179([e1__2205, e2__2207], env__2190, function B2159__2208 (leT__2209, env__2210)
{
var le1__2211 = leT__2209[0],
le2__2212 = leT__2209[1];
return k__2191([m__2204, le1__2211, v__2206, le2__2212], env__2210)})}
else
{
var object2__2254 = "%set",
object1__2253 = B2155__2192,
B2293 = (object1__2253 === object2__2254);
if ($T(B2293))
{
var ____2213 = exp__2189[0],
e1__2214 = exp__2189[1],
e2__2215 = exp__2189[2];
arguments = [e2__2215, env__2190, (function B2305 (k__2191, B2299, e1__2214)
{return function B2160__2216 (le2__2217, env__2218)
{return k__2191([B2299, e1__2214, le2__2217], env__2218)}})(k__2191, B2299, e1__2214)];
exp__2189 = arguments[0];
env__2190 = arguments[1];
k__2191 = arguments[2];
continue B2303}
else
{
var object2__2256 = "%method",
object1__2255 = B2155__2192,
B2294 = (object1__2255 === object2__2256);
if ($T(B2294))
{
var ____2219 = exp__2189[0],
name__2220 = exp__2189[1],
arguments__2221 = exp__2189[2],
body__2222 = exp__2189[3];
arguments = [body__2222, env__2190, (function B2306 (k__2191, B2300, name__2220, arguments__2221)
{return function B2161__2223 (lbody__2224, env__2225)
{return k__2191([B2300, name__2220, arguments__2221, lbody__2224], env__2225)}})(k__2191, B2300, name__2220, arguments__2221)];
exp__2189 = arguments[0];
env__2190 = arguments[1];
k__2191 = arguments[2];
continue B2303}
else
{
var object2__2258 = "%begin",
object1__2257 = B2155__2192,
B2162__2226 = (object1__2257 === object2__2258),
B2295;
if ($T(B2162__2226))
{B2295 = B2162__2226}
else
{
var object2__2260 = "%if",
object1__2259 = B2155__2192,
B2163__2227 = (object1__2259 === object2__2260);
if ($T(B2163__2227))
{B2295 = B2163__2227}
else
{
var object2__2262 = "%while",
object1__2261 = B2155__2192,
B2164__2228 = (object1__2261 === object2__2262);
if ($T(B2164__2228))
{B2295 = B2164__2228}
else
{
var object2__2264 = "%array",
object1__2263 = B2155__2192,
B2165__2229 = (object1__2263 === object2__2264);
if ($T(B2165__2229))
{B2295 = B2165__2229}
else
{
var object2__2266 = "%object",
object1__2265 = B2155__2192,
B2166__2230 = (object1__2265 === object2__2266);
if ($T(B2166__2230))
{B2295 = B2166__2230}
else
{
var object2__2268 = "%get-property",
object1__2267 = B2155__2192,
B2167__2231 = (object1__2267 === object2__2268);
if ($T(B2167__2231))
{B2295 = B2167__2231}
else
{
var object2__2270 = "%infix",
object1__2269 = B2155__2192,
B2168__2232 = (object1__2269 === object2__2270);
if ($T(B2168__2232))
{B2295 = B2168__2232}
else
{
var object2__2272 = "%native",
object1__2271 = B2155__2192,
B2169__2233 = (object1__2271 === object2__2272);
if ($T(B2169__2233))
{B2295 = B2169__2233}
else
{
var object2__2274 = "%native-name",
object1__2273 = B2155__2192,
B2170__2234 = (object1__2273 === object2__2274);
if ($T(B2170__2234))
{B2295 = B2170__2234}
else
{
var object2__2276 = "%native-call",
object1__2275 = B2155__2192,
B2171__2235 = (object1__2275 === object2__2276);
if ($T(B2171__2235))
{B2295 = B2171__2235}
else
{
var object2__2278 = "%plus",
object1__2277 = B2155__2192,
B2172__2236 = (object1__2277 === object2__2278);
if ($T(B2172__2236))
{B2295 = B2172__2236}
else
{
var object2__2280 = "%minus",
object1__2279 = B2155__2192,
B2173__2237 = (object1__2279 === object2__2280);
if ($T(B2173__2237))
{B2295 = B2173__2237}
else
{
var object2__2282 = "%times",
object1__2281 = B2155__2192,
B2174__2238 = (object1__2281 === object2__2282);
if ($T(B2174__2238))
{B2295 = B2174__2238}
else
{
var object2__2284 = "%divide",
object1__2283 = B2155__2192;
B2295 = (object1__2283 === object2__2284)}}}}}}}}}}}}};
if ($T(B2295))
{
var m__2239 = exp__2189[0],
eT__2240 = $SL.call(exp__2189, 1);
return lift_defineT__2179(eT__2240, env__2190, function B2175__2241 (leT__2242, env__2243)
{return k__2191(concatenate__2180([m__2239], leT__2242), env__2243)})}
else
{
var object2__2286 = "%symbol",
object1__2285 = B2155__2192,
B2296 = (object1__2285 === object2__2286);
if ($T(B2296))
{return k__2191(exp__2189)}
else
{
var object2__2288 = "%define",
object1__2287 = B2155__2192,
B2297 = (object1__2287 === object2__2288);
if ($T(B2297))
{
var sequence__2289 = exp__2189,
identifier__2244 = sequence__2289[1],
B2176__2245 = module_nameSname__2183(identifier__2244),
module_name__2246 = B2176__2245[0],
name__2247 = B2176__2245[1];
if ($T(get__2181(env__2190, "defined?", module_name__2246, name__2247)))
{return k__2191(false, env__2190)}
else
{
get_setter__2182(env__2190, "defined?", module_name__2246, name__2247, true);
return [B2301, [B2302, identifier__2244], k__2191(false, env__2190)]}}
else
return lift_defineTT__2185(exp__2189, env__2190, k__2191)}}}}}}}
else
return k__2191(exp__2189, env__2190);
break}}, false)}
{
var ralphScoreCCsize = B2145.size,
emptyQ__2307 = B2145["empty?"];
false;
lift_defineT__2179 = Mmake_function__2148("lift_defineT", function lift_defineT__2308 (expT__2309, env__2310, k__2311)
{
var sequence__2312 = expT__2309,
B2313 = binaryEE__2178(ralphScoreCCsize(sequence__2312), 0);
if ($T(B2313))
{return k__2311([], env__2310)}
else
return lift_defineTT__2185(expT__2309, env__2310, k__2311)}, false)}
{
var rest__2316 = B2145.rest;
false;
lift_defineTT__2185 = Mmake_function__2148("lift_defineTT", function lift_defineTT__2317 (exp__2318, env__2319, k__2320)
{
var sequence__2327 = exp__2318,
B2329 = sequence__2327[0],
B2332 = function B2314__2321 (t__2322, env__2323)
{
var sequence__2328 = exp__2318,
B2330 = sequence__2328.slice(1),
B2331 = function B2315__2324 (tT__2325, env__2326)
{return k__2320(concatenate__2180([t__2322], tT__2325), env__2326)};
return lift_defineT__2179(B2330, env__2323, B2331)};
return lift_define__2149(B2329, env__2319, B2332)}, false)}
