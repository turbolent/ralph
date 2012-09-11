{
var B1159;
false;
B1159 = require("ralph/core")}
false
{
var B1169 = $S("set!", "ralph/core"),
B1170 = $S("get", "ralph/core"),
B1171 = $S("*special-forms*"),
B1172 = $S("method", "ralph/core"),
Mmake_function__1161 = B1159["%make-function"],
symbol_name__1162 = B1159["symbol-name"],
concatenate__1163 = B1159.concatenate,
define_special_form__1164;
false;
define_special_form__1164 = Mmake_function__1161("define_special_form", function define_special_form__1165 (B1160__1166, identifier__1167)
{
var definition__1168 = $SL.call(arguments, 2);
return [B1169, [B1170, B1171, symbol_name__1162(identifier__1167)], concatenate__1163([B1172], definition__1168)]}, false);
exports["define-special-form"] = define_special_form__1164;
define_special_form__1164["%macro?"] = true}
{
var B1179 = $S("*core-macros*"),
define_core_macro__1174;
false;
define_core_macro__1174 = Mmake_function__1161("define_core_macro", function define_core_macro__1175 (B1173__1176, identifier__1177)
{
var definition__1178 = $SL.call(arguments, 2);
return [B1169, [B1170, B1179, symbol_name__1162(identifier__1177)], concatenate__1163([B1172], definition__1178)]}, false);
exports["define-core-macro"] = define_core_macro__1174;
define_core_macro__1174["%macro?"] = true}
{
var B1186 = $S("*core-symbol-macros*"),
define_core_symbol_macro__1181;
false;
define_core_symbol_macro__1181 = Mmake_function__1161("define_core_symbol_macro", function define_core_symbol_macro__1182 (B1180__1183, identifier__1184)
{
var definition__1185 = $SL.call(arguments, 2);
return [B1169, [B1170, B1186, symbol_name__1162(identifier__1184)], concatenate__1163([B1172], definition__1185)]}, false);
exports["define-core-symbol-macro"] = define_core_symbol_macro__1181;
define_core_symbol_macro__1181["%macro?"] = true}
