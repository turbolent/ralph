{
var B1048;
false;
B1048 = require("ralph/core")}
false
{
var B1058 = $S("set!", "ralph/core"),
B1059 = $S("get", "ralph/core"),
B1060 = $S("*special-forms*", false),
B1061 = $S("method", "ralph/core"),
Mmake_function__1050 = B1048["%make-function"],
symbol_name__1051 = B1048["symbol-name"],
concatenate__1052 = B1048.concatenate,
define_special_form__1053;
false;
define_special_form__1053 = Mmake_function__1050("define_special_form", function define_special_form__1054 (B1049__1055, identifier__1056)
{
var definition__1057 = $SL.call(arguments, 2);
return [B1058, [B1059, B1060, symbol_name__1051(identifier__1056)], concatenate__1052([B1061], definition__1057)]}, false);
exports["define-special-form"] = define_special_form__1053;
define_special_form__1053["%macro?"] = true}
{
var B1068 = $S("*core-macros*", false),
define_core_macro__1063;
false;
define_core_macro__1063 = Mmake_function__1050("define_core_macro", function define_core_macro__1064 (B1062__1065, identifier__1066)
{
var definition__1067 = $SL.call(arguments, 2);
return [B1058, [B1059, B1068, symbol_name__1051(identifier__1066)], concatenate__1052([B1061], definition__1067)]}, false);
exports["define-core-macro"] = define_core_macro__1063;
define_core_macro__1063["%macro?"] = true}
{
var B1075 = $S("*core-symbol-macros*", false),
define_core_symbol_macro__1070;
false;
define_core_symbol_macro__1070 = Mmake_function__1050("define_core_symbol_macro", function define_core_symbol_macro__1071 (B1069__1072, identifier__1073)
{
var definition__1074 = $SL.call(arguments, 2);
return [B1058, [B1059, B1075, symbol_name__1051(identifier__1073)], concatenate__1052([B1061], definition__1074)]}, false);
exports["define-core-symbol-macro"] = define_core_symbol_macro__1070;
define_core_symbol_macro__1070["%macro?"] = true}
