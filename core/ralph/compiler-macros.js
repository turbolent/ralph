{
var B940;
false;
B940 = require("ralph/core")}
false
{
var Mmake_function__942 = B940["%make-function"],
symbol_name__943 = B940["symbol-name"],
concatenate__944 = B940.concatenate,
define_special_form__945;
false;
define_special_form__945 = Mmake_function__942("define_special_form", function define_special_form__946 (B947, identifier__948)
{
var definition__949 = $SL.call(arguments, 2);
return [$S("set!", "ralph/core"), [$S("get", "ralph/core"), $S("*special-forms*"), symbol_name__943(identifier__948)], concatenate__944([$S("method", "ralph/core")], definition__949)]}, false);
exports["define-special-form"] = define_special_form__945;
define_special_form__945["%macro?"] = true}
{
var define_core_macro__951;
false;
define_core_macro__951 = Mmake_function__942("define_core_macro", function define_core_macro__952 (B953, identifier__954)
{
var definition__955 = $SL.call(arguments, 2);
return [$S("set!", "ralph/core"), [$S("get", "ralph/core"), $S("*core-macros*"), symbol_name__943(identifier__954)], concatenate__944([$S("method", "ralph/core")], definition__955)]}, false);
exports["define-core-macro"] = define_core_macro__951;
define_core_macro__951["%macro?"] = true}
{
var define_core_symbol_macro__957;
false;
define_core_symbol_macro__957 = Mmake_function__942("define_core_symbol_macro", function define_core_symbol_macro__958 (B959, identifier__960)
{
var definition__961 = $SL.call(arguments, 2);
return [$S("set!", "ralph/core"), [$S("get", "ralph/core"), $S("*core-symbol-macros*"), symbol_name__943(identifier__960)], concatenate__944([$S("method", "ralph/core")], definition__961)]}, false);
exports["define-core-symbol-macro"] = define_core_symbol_macro__957;
define_core_symbol_macro__957["%macro?"] = true}
