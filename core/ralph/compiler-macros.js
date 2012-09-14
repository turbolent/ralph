{
var B950;
false;
B950 = require("ralph/core")}
false
{
var B960 = $S("set!", "ralph/core"),
B961 = $S("get", "ralph/core"),
B962 = $S("*special-forms*"),
B963 = $S("method", "ralph/core"),
Mmake_function__952 = B950["%make-function"],
symbol_name__953 = B950["symbol-name"],
concatenate__954 = B950.concatenate,
define_special_form__955;
false;
define_special_form__955 = Mmake_function__952("define_special_form", function define_special_form__956 (B951__957, identifier__958)
{
var definition__959 = $SL.call(arguments, 2);
return [B960, [B961, B962, symbol_name__953(identifier__958)], concatenate__954([B963], definition__959)]}, false);
exports["define-special-form"] = define_special_form__955;
define_special_form__955["%macro?"] = true}
{
var B970 = $S("*core-macros*"),
define_core_macro__965;
false;
define_core_macro__965 = Mmake_function__952("define_core_macro", function define_core_macro__966 (B964__967, identifier__968)
{
var definition__969 = $SL.call(arguments, 2);
return [B960, [B961, B970, symbol_name__953(identifier__968)], concatenate__954([B963], definition__969)]}, false);
exports["define-core-macro"] = define_core_macro__965;
define_core_macro__965["%macro?"] = true}
{
var B977 = $S("*core-symbol-macros*"),
define_core_symbol_macro__972;
false;
define_core_symbol_macro__972 = Mmake_function__952("define_core_symbol_macro", function define_core_symbol_macro__973 (B971__974, identifier__975)
{
var definition__976 = $SL.call(arguments, 2);
return [B960, [B961, B977, symbol_name__953(identifier__975)], concatenate__954([B963], definition__976)]}, false);
exports["define-core-symbol-macro"] = define_core_symbol_macro__972;
define_core_symbol_macro__972["%macro?"] = true}
