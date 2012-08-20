var B2220 = require("ralph/core")
false
{var B2229 = $S("set!"), B2230 = $S("get"), B2231 = $S("*special-forms*"), B2232 = $S("method"), B2222 = B2220["%make-function"], B2223 = B2220["symbol-name"], B2224 = B2220.concatenate, B2225 = B2222("define_special_form", function B2233 (B2226, identifier__2227)
{var definition__2228 = $SL.call(arguments, 2);
return [B2229, [B2230, B2231, B2223(identifier__2227)], B2224([B2232], definition__2228)]}, false);
exports["define-special-form"] = B2225;
B2225["%macro?"] = true}
{var B2239 = $S("*core-macros*"), B2235 = B2222("define_core_macro", function B2240 (B2236, identifier__2237)
{var definition__2238 = $SL.call(arguments, 2);
return [B2229, [B2230, B2239, B2223(identifier__2237)], B2224([B2232], definition__2238)]}, false);
exports["define-core-macro"] = B2235;
B2235["%macro?"] = true}
{var B2246 = $S("*core-symbol-macros*"), B2242 = B2222("define_core_symbol_macro", function B2247 (B2243, identifier__2244)
{var definition__2245 = $SL.call(arguments, 2);
return [B2229, [B2230, B2246, B2223(identifier__2244)], B2224([B2232], definition__2245)]}, false);
exports["define-core-symbol-macro"] = B2242;
B2242["%macro?"] = true}
