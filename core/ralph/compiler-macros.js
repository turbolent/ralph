var B2051 = require("ralph/core")
false
{var B2060 = $S("set!"), B2061 = $S("get"), B2062 = $S("*special-forms*"), B2063 = $S("method"), B2053 = B2051["%make-function"], B2054 = B2051["symbol-name"], B2055 = B2051.concatenate, B2056 = B2053("define_special_form", function B2064 (B2057, identifier__2058)
{var definition__2059 = $SL.call(arguments, 2);
return [B2060, [B2061, B2062, B2054(identifier__2058)], B2055([B2063], definition__2059)]}, false);
exports["define-special-form"] = B2056;
B2056["%macro?"] = true}
{var B2070 = $S("*core-macros*"), B2066 = B2053("define_core_macro", function B2071 (B2067, identifier__2068)
{var definition__2069 = $SL.call(arguments, 2);
return [B2060, [B2061, B2070, B2054(identifier__2068)], B2055([B2063], definition__2069)]}, false);
exports["define-core-macro"] = B2066;
B2066["%macro?"] = true}
{var B2077 = $S("*core-symbol-macros*"), B2073 = B2053("define_core_symbol_macro", function B2078 (B2074, identifier__2075)
{var definition__2076 = $SL.call(arguments, 2);
return [B2060, [B2061, B2077, B2054(identifier__2075)], B2055([B2063], definition__2076)]}, false);
exports["define-core-symbol-macro"] = B2073;
B2073["%macro?"] = true}
