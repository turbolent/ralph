var B2137 = require("ralph/core")
false
{var trueQ = B2137["true?"], B2138 = B2137["%make-function"], B2139 = B2137["instance?"], B2140 = B2137["<array>"], B2141 = B2137.not, B2142 = B2137["empty?"], B2143 = B2137.first, B2144 = B2137["<symbol>"], B2145 = B2138("expressionQ", function B2167 (form__2146)
{if ($T(B2139(form__2146, B2140)))
{var sequence__2158 = form__2146, B2159 = sequence__2158, B2160 = ((B2159 || false).length || 0), B2161 = 0, value__2162 = (B2160 === B2161), B2165 = !(trueQ(value__2162));
if ($T(B2165))
{var sequence__2164 = form__2146, B2166 = sequence__2164[0];
return B2139(B2166, B2144)}}}, false);
exports["expression?"] = B2145}
{var B2168 = B2137["=="], B2169 = B2137.symbol, B2170 = B2138("varQ", function B2176 (exp__2171)
{if ($T(B2145(exp__2171)))
{var sequence__2173 = exp__2171, B2174 = sequence__2173[0], B2175 = B2169("%var");
return B2168(B2174, B2175)}}, false);
exports["var?"] = B2170}
{var B2177 = B2138("setQ", function B2183 (exp__2178)
{if ($T(B2145(exp__2178)))
{var sequence__2180 = exp__2178, B2181 = sequence__2180[0], B2182 = B2169("%set");
return B2168(B2181, B2182)}}, false);
exports["set?"] = B2177}
{var B2184 = B2138("methodQ", function B2190 (exp__2185)
{if ($T(B2145(exp__2185)))
{var sequence__2187 = exp__2185, B2188 = sequence__2187[0], B2189 = B2169("%method");
return B2168(B2188, B2189)}}, false);
exports["method?"] = B2184}
{var B2191 = B2137.concatenate, B2192 = B2137["symbol-name"], B2193 = B2138("transform_setter_identifier", function B2195 (identifier__2194)
{return B2169(B2191(B2192(identifier__2194), "-setter"))}, false);
exports["transform-setter-identifier"] = B2193}
{var B2196 = B2137.size, B2197 = B2137["every?"], B2198 = B2137.rcurry, B2199 = B2138("setter_identifierQ", function B2209 (form__2200)
{if ($T(B2139(form__2200, B2140)))
{var object__2202 = form__2200, B2205 = ((object__2202 || false).length || 0), B2206 = B2168(B2205, 2);
if ($T(B2206))
if ($T(B2197(B2198(B2139, B2144), form__2200)))
{var sequence__2204 = form__2200, B2207 = sequence__2204[0], B2208 = B2192(B2207);
return B2168(B2208, "setter")}}}, false);
exports["setter-identifier?"] = B2199}
{var B2210 = B2137.second, B2211 = B2138("identifier_name", function B2217 (identifier__2212)
{var B2216;
if ($T(B2199(identifier__2212)))
{var sequence__2214 = identifier__2212, B2215 = sequence__2214[1];
B2216 = B2193(B2215)}
else B2216 = identifier__2212;
return B2192(B2216)}, false);
exports["identifier-name"] = B2211}
var B2218 = 0
{var B2219 = B2138("reset_symbol_counterN", function B2220 ()
{return B2218 = 0}, false);
exports["reset-symbol-counter!"] = B2219}
{var B2221 = B2137["get-setter"], B2222 = B2137["as-string"], B2223 = B2138("generate_symbol", function B2229 (prefix__2224)
{var B2227;
if ($T(prefix__2224))
B2227 = B2191(prefix__2224, "_")
else B2227 = "$";
var B2228 = B2222(B2218 = (B2218 + 1)), name__2225 = B2191(B2227, B2228), result__2226 = B2169(name__2225);
B2221(result__2226, "generated?", true);
return result__2226}, false);
exports["generate-symbol"] = B2223}
{var B2238 = $S("%begin"), B2231 = B2138("maybe_begin", function B2239 (expressions__2232)
{var object__2235 = expressions__2232, B2233 = ((object__2235 || false).length || 0);
if ($T(B2168(B2233, 0)))
return false
else if ($T(B2168(B2233, 1)))
{var sequence__2237 = expressions__2232;
return sequence__2237[0]}
else return B2191([B2238], expressions__2232)}, false);
exports["maybe-begin"] = B2231}
{var B2241 = B2137.get, B2242 = B2138("get_module_nameSname", function B2247 (identifier__2243)
{var B2244 = B2241(identifier__2243, "module"), B2245;
if ($T(B2244))
B2245 = B2244
else B2245 = "";
var B2246 = B2192(identifier__2243);
return [B2245, B2246]}, false);
exports["get-module-name/name"] = B2242}
