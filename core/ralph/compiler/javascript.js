{
var B2149;
false;
B2149 = require("ralph/core")}
{
var B2152,
B2153;
false;
B2152 = require("ralph/regexp");
false;
B2153 = require("ralph/compiler/utilities")}
{
var make_object__2154 = B2149["make-object"],
TescapedT__2155;
false;
TescapedT__2155 = make_object__2154("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")}
{
var Mmake_function__2156 = B2149["%make-function"],
concatenate__2157 = B2149.concatenate,
slice__2158 = B2149.slice,
size__2159 = B2149.size,
fill_zeros__2160;
false;
fill_zeros__2160 = Mmake_function__2156("fill_zeros", function fill_zeros__2161 (string__2162)
{return concatenate__2157(slice__2158("0000", 0, (4 - size__2159(string__2162))), string__2162)}, false)}
{
var join__2165 = B2149.join,
map__2166 = B2149.map,
L__2167 = B2149["<"],
as_hex_string__2168 = B2149["as-hex-string"],
char_code__2169 = B2149["char-code"],
get__2170 = B2149.get,
as_array__2171 = B2149["as-array"],
escape_string__2172;
false;
escape_string__2172 = Mmake_function__2156("escape_string", function escape_string__2173 (string__2174)
{return join__2165(map__2166(function B2175 (char__2176)
{
var B2177 = get__2170(TescapedT__2155, char__2176);
if ($T(B2177))
{
var escaped__2178 = B2177;
return concatenate__2157("\\", escaped__2178)}
else
{
var code__2179 = char_code__2169(char__2176);
if ($T(L__2167(31, code__2179, 127)))
{return char__2176}
else
return concatenate__2157("\\u", fill_zeros__2160(as_hex_string__2168(code__2179)))}}, as_array__2171(string__2174)), "")}, false)}
{
var TreservedT__2180;
false;
TreservedT__2180 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]}
{
var Tsymbol_escapesT__2181;
false;
Tsymbol_escapesT__2181 = make_object__2154("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")}
{
var memberQ__2183 = B2149["member?"],
hasQ__2184 = B2149["has?"],
match__2185 = B2152.match,
as_string__2186 = B2149["as-string"],
escape_name__2187;
false;
escape_name__2187 = Mmake_function__2156("escape_name", function escape_name__2188 (name__2189)
{if ($T(memberQ__2183(name__2189, TreservedT__2180)))
{return concatenate__2157("R", name__2189)}
else
{
var chars__2192 = map__2166(function B2190 (char__2191)
{if ($T(hasQ__2184(Tsymbol_escapesT__2181, char__2191)))
{return get__2170(Tsymbol_escapesT__2181, char__2191)}
else
if ($T(match__2185("\\w", char__2191)))
{return char__2191}
else
return concatenate__2157("Z", as_string__2186(char_code__2169(char__2191)))}, as_array__2171(name__2189));
return join__2165(chars__2192, "")}}, false)}
{
var not__2193 = B2149.not,
valid_js_nameQ__2194;
false;
valid_js_nameQ__2194 = Mmake_function__2156("valid_js_nameQ", function valid_js_nameQ__2195 (identifier__2196)
{if ($T(not__2193(memberQ__2183(identifier__2196, TreservedT__2180))))
{return match__2185("^\\w+$", identifier__2196)}}, false)}
{
var instanceQ__2199 = B2149["instance?"],
LarrayG__2200 = B2149["<array>"],
emptyQ__2201 = B2149["empty?"],
signal__2202 = B2149.signal,
make__2203 = B2149.make,
LerrorG__2204 = B2149["<error>"],
compile_js_exp__2205,
LnumberG__2206 = B2149["<number>"],
LbooleanG__2207 = B2149["<boolean>"],
LstringG__2208 = B2149["<string>"],
Lhash_symbolG__2209 = B2149["<hash-symbol>"],
as_uppercase__2210 = B2149["as-uppercase"],
symbol_name__2211 = B2149["symbol-name"],
LkeywordG__2212 = B2149["<keyword>"],
LsymbolG__2213 = B2149["<symbol>"],
binaryEE__2214 = B2149["binary=="],
description__2215 = B2149.description,
compile_js__2216;
false;
compile_js__2216 = Mmake_function__2156("compile_js", function compile_js__2217 (exp__2218, env__2219)
{
var B2220 = exp__2218;
if ($T(instanceQ__2199(B2220, LarrayG__2200)))
{if ($T(emptyQ__2201(exp__2218)))
{return signal__2202(make__2203(LerrorG__2204, $K("message"), "empty expression"))}
else
return compile_js_exp__2205(exp__2218, env__2219)}
else
if ($T(instanceQ__2199(B2220, LnumberG__2206)))
{return as_string__2186(exp__2218)}
else
if ($T(instanceQ__2199(B2220, LbooleanG__2207)))
{if ($T(exp__2218))
{return "true"}
else
return "false"}
else
if ($T(instanceQ__2199(B2220, LstringG__2208)))
{return concatenate__2157("\"", escape_string__2172(exp__2218), "\"")}
else
if ($T(instanceQ__2199(B2220, Lhash_symbolG__2209)))
{return concatenate__2157("$", as_uppercase__2210(symbol_name__2211(exp__2218)))}
else
if ($T(instanceQ__2199(B2220, LkeywordG__2212)))
{return concatenate__2157("$K(\"", symbol_name__2211(exp__2218), "\")")}
else
if ($T(instanceQ__2199(B2220, LsymbolG__2213)))
{
var B2221 = symbol_name__2211(exp__2218);
if ($T(binaryEE__2214(B2221, "%this-method")))
{return compile_js__2217(get__2170(env__2219, "current-method"), env__2219)}
else
if ($T(binaryEE__2214(B2221, "%all-arguments")))
{return "arguments"}
else
return escape_name__2187(symbol_name__2211(exp__2218))}
else
return description__2215(exp__2218)}, false);
exports["compile-js"] = compile_js__2216}
{
var compile_js_call__2235,
rcurry__2236 = B2149.rcurry,
rest__2237 = B2149.rest,
not__2238 = not__2193,
GE__2239 = B2149[">="],
push_last__2240 = B2149["push-last"],
element__2241 = B2149.element,
beginQ__2242 = B2153["begin?"],
E__2243 = B2149["="],
second__2244 = B2149.second,
reduce1__2245 = B2149.reduce1,
reduce__2246 = B2149.reduce,
methodQ__2247 = B2153["method?"],
first__2248 = B2149.first;
false;
compile_js_exp__2205 = Mmake_function__2156("compile_js_exp", function compile_js_exp__2249 (exp__2250, env__2251)
{
var name__2252 = symbol_name__2211(first__2248(exp__2250)),
B2253 = name__2252;
if ($T(binaryEE__2214(B2253, "%native-call")))
{
var ____2254 = exp__2250[0],
operator__2255 = exp__2250[1],
values__2256 = $SL.call(exp__2250, 2);
return concatenate__2157(operator__2255, compile_js_call__2235(values__2256, env__2251))}
else
if ($T(binaryEE__2214(B2253, "%infix")))
{
var ____2257 = exp__2250[0],
operator__2258 = exp__2250[1],
values__2259 = $SL.call(exp__2250, 2);
return concatenate__2157("(", join__2165(map__2166(rcurry__2236(compile_js__2216, env__2251), values__2259), concatenate__2157(" ", operator__2258, " ")), ")")}
else
{
var B2260 = binaryEE__2214(B2253, "%plus"),
B2314;
if ($T(B2260))
{B2314 = B2260}
else
{
var B2261 = binaryEE__2214(B2253, "%minus");
if ($T(B2261))
{B2314 = B2261}
else
{
var B2262 = binaryEE__2214(B2253, "%times");
if ($T(B2262))
{B2314 = B2262}
else
B2314 = binaryEE__2214(B2253, "%divide")}};
if ($T(B2314))
{
var B2315 = $S("%infix", "ralph/core"),
B2263 = name__2252,
B2316;
if ($T(binaryEE__2214(B2263, "%plus")))
{B2316 = "+"}
else
if ($T(binaryEE__2214(B2263, "%minus")))
{B2316 = "-"}
else
if ($T(binaryEE__2214(B2263, "%times")))
{B2316 = "*"}
else
if ($T(binaryEE__2214(B2263, "%divide")))
{B2316 = "/"}
else
B2316 = false;
var B2317 = [B2315, B2316],
B2318 = rest__2237(exp__2250),
B2319 = concatenate__2157(B2317, B2318);
return compile_js_exp__2249(B2319, env__2251)}
else
if ($T(binaryEE__2214(B2253, "%array")))
{
var ____2264 = exp__2250[0],
elements__2265 = $SL.call(exp__2250, 1);
return concatenate__2157("[", join__2165(map__2166(rcurry__2236(compile_js__2216, env__2251), elements__2265), ", "), "]")}
else
if ($T(binaryEE__2214(B2253, "%object")))
{
var key_values__2266 = rest__2237(exp__2250),
entries__2267 = [],
B2268 = (size__2159(key_values__2266) / 2),
i__2269 = 0;
while ($T(not__2238(GE__2239(i__2269, B2268))))
{
(function B2270 (i__2271)
{
var name__2272 = element__2241(key_values__2266, (i__2271 * 2)),
B2320;
if ($T(valid_js_nameQ__2194(name__2272)))
{B2320 = name__2272}
else
B2320 = compile_js__2216(name__2272, env__2251);
var B2321 = compile_js__2216(element__2241(key_values__2266, ((i__2271 * 2) + 1)), env__2251),
B2322 = concatenate__2157(B2320, ":", B2321);
return push_last__2240(entries__2267, B2322)})(i__2269);
i__2269 = (i__2269 + 1)};
false;
return concatenate__2157("{", join__2165(entries__2267, ",\n"), "}")}
else
if ($T(binaryEE__2214(B2253, "%if")))
{
var ____2273 = exp__2250[0],
test__2274 = exp__2250[1],
then__2275 = exp__2250[2],
else__2276 = exp__2250[3],
thenT__2277 = compile_js__2216(then__2275, env__2251),
B2323 = compile_js__2216(test__2274, env__2251),
B2324;
if ($T(beginQ__2242(then__2275)))
{B2324 = thenT__2277}
else
B2324 = concatenate__2157("{", thenT__2277, "}");
var B2325;
if ($T(else__2276))
{B2325 = not__2193(E__2243(else__2276, [$S("%return", "ralph/core"), false]))}
else
B2325 = false;
var B2326;
if ($T(B2325))
{B2326 = concatenate__2157("\nelse\n", compile_js__2216(else__2276, env__2251))}
else
B2326 = "";
return concatenate__2157("if (", B2323, ")\n", B2324, B2326)}
else
if ($T(binaryEE__2214(B2253, "%while")))
{
var ____2278 = exp__2250[0],
test__2279 = exp__2250[1],
body__2280 = exp__2250[2];
return concatenate__2157("while (", compile_js__2216(test__2279, env__2251), ")\n", compile_js__2216(body__2280, env__2251))}
else
if ($T(binaryEE__2214(B2253, "%try")))
{
var ____2281 = exp__2250[0],
body__2282 = exp__2250[1],
var__2283 = exp__2250[2],
catch__2284 = exp__2250[3];
return concatenate__2157("try {", compile_js__2216(body__2282, env__2251), "}\n", "catch (", compile_js__2216(var__2283, env__2251), ")\n", "{", compile_js__2216(catch__2284, env__2251), "}")}
else
if ($T(binaryEE__2214(B2253, "%return")))
{return concatenate__2157("return ", compile_js__2216(second__2244(exp__2250), env__2251))}
else
if ($T(binaryEE__2214(B2253, "%begin")))
{return concatenate__2157("{\n", join__2165(map__2166(rcurry__2236(compile_js__2216, env__2251), rest__2237(exp__2250)), ";\n"), "}")}
else
if ($T(binaryEE__2214(B2253, "%set")))
{
var ____2285 = exp__2250[0],
var__2286 = exp__2250[1],
value__2287 = exp__2250[2];
return concatenate__2157(compile_js__2216(var__2286, env__2251), " = ", compile_js__2216(value__2287, env__2251))}
else
if ($T(binaryEE__2214(B2253, "%method")))
{
var ____2288 = exp__2250[0],
name__2289 = exp__2250[1],
arguments__2290 = exp__2250[2],
body__2291 = exp__2250[3],
previous_method__2292 = get__2170(env__2251, "current-method"),
B2327 = compile_js__2216(name__2289, env__2251),
B2328 = join__2165(map__2166(rcurry__2236(compile_js__2216, env__2251), arguments__2290), ", ");
env__2251["current-method"] = name__2289;
var bodyT__2293 = compile_js__2216(body__2291, env__2251);
env__2251["current-method"] = previous_method__2292;
var B2329;
if ($T(beginQ__2242(body__2291)))
{B2329 = bodyT__2293}
else
B2329 = concatenate__2157("{", bodyT__2293, "}");
return concatenate__2157("function ", B2327, " (", B2328, ")\n", B2329)}
else
if ($T(binaryEE__2214(B2253, "%var")))
{
var ____2294 = exp__2250[0],
bindings__2295 = $SL.call(exp__2250, 1);
return concatenate__2157("var ", join__2165(map__2166(function B2296 (binding__2297)
{
var B2298;
if ($T(instanceQ__2199(binding__2297, LarrayG__2200)))
{B2298 = binding__2297}
else
B2298 = [binding__2297, false];
var var__2299 = B2298[0],
value__2300 = B2298[1],
B2330 = compile_js__2216(var__2299, env__2251),
B2331;
if ($T(value__2300))
{B2331 = concatenate__2157(" = ", compile_js__2216(value__2300, env__2251))}
else
B2331 = "";
return concatenate__2157(B2330, B2331)}, bindings__2295), ",\n"))}
else
if ($T(binaryEE__2214(B2253, "%native")))
{return reduce1__2245(concatenate__2157, map__2166(function B2301 (e__2302)
{
var B2303 = e__2302,
B2304 = instanceQ__2199(B2303, LsymbolG__2213),
B2332;
if ($T(B2304))
{B2332 = B2304}
else
B2332 = instanceQ__2199(B2303, LarrayG__2200);
if ($T(B2332))
{return compile_js__2216(e__2302, env__2251)}
else
return as_string__2186(e__2302)}, rest__2237(exp__2250)))}
else
if ($T(binaryEE__2214(B2253, "%native-name")))
{return concatenate__2157("\"", escape_name__2187(second__2244(exp__2250)), "\"")}
else
if ($T(binaryEE__2214(B2253, "%get-property")))
{
var ____2305 = exp__2250[0],
object__2306 = exp__2250[1],
properties__2307 = $SL.call(exp__2250, 2),
B2333;
if ($T(instanceQ__2199(object__2306, LnumberG__2206)))
{B2333 = concatenate__2157("(", compile_js__2216(object__2306, env__2251), ")")}
else
B2333 = compile_js__2216(object__2306, env__2251);
var B2336 = reduce__2246(function B2308 (result__2309, property__2310)
{
var B2334;
if ($T(instanceQ__2199(property__2310, LstringG__2208)))
{B2334 = valid_js_nameQ__2194(property__2310)}
else
B2334 = false;
var B2335;
if ($T(B2334))
{B2335 = concatenate__2157(".", property__2310)}
else
B2335 = concatenate__2157("[", compile_js__2216(property__2310, env__2251), "]");
return concatenate__2157(result__2309, B2335)}, "", properties__2307);
return concatenate__2157(B2333, B2336)}
else
if ($T(binaryEE__2214(B2253, "%symbol")))
{return concatenate__2157("$S", compile_js_call__2235(rest__2237(exp__2250), env__2251))}
else
{
var function__2311 = exp__2250[0],
values__2312 = $SL.call(exp__2250, 1),
functionT__2313 = compile_js__2216(function__2311, env__2251),
B2337;
if ($T(methodQ__2247(function__2311)))
{B2337 = concatenate__2157("(", functionT__2313, ")")}
else
B2337 = functionT__2313;
var B2338 = compile_js_call__2235(values__2312, env__2251);
return concatenate__2157(B2337, B2338)}}}, false)}
{
false;
compile_js_call__2235 = Mmake_function__2156("compile_js_call", function compile_js_call__2339 (values__2340, env__2341)
{return concatenate__2157("(", join__2165(map__2166(rcurry__2236(compile_js__2216, env__2341), values__2340), ", "), ")")}, false)}
