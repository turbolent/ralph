var B4 = require("ralph/core")
false
{
var B14 = $S("set!"),
B15 = $S("get"),
B16 = $S("*special-forms*"),
B17 = $S("method"),
B6 = B4["%make-function"],
B7 = B4["symbol-name"],
B8 = B4.concatenate,
B9 = B6("define_special_form", function define_special_form__10 (B11, identifier__12)
{
var definition__13 = $SL.call(arguments, 2);
return [B14, [B15, B16, B7(identifier__12)], B8([B17], definition__13)]}, false);
exports["define-special-form"] = B9;
B9["%macro?"] = true}
{
var B24 = $S("*core-macros*"),
B19 = B6("define_core_macro", function define_core_macro__20 (B21, identifier__22)
{
var definition__23 = $SL.call(arguments, 2);
return [B14, [B15, B24, B7(identifier__22)], B8([B17], definition__23)]}, false);
exports["define-core-macro"] = B19;
B19["%macro?"] = true}
{
var B31 = $S("*core-symbol-macros*"),
B26 = B6("define_core_symbol_macro", function define_core_symbol_macro__27 (B28, identifier__29)
{
var definition__30 = $SL.call(arguments, 2);
return [B14, [B15, B31, B7(identifier__29)], B8([B17], definition__30)]}, false);
exports["define-core-symbol-macro"] = B26;
B26["%macro?"] = true}
