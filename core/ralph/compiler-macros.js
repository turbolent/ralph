var B1509 = require("ralph/core")
false
{
var B1519 = $S("set!"),
B1520 = $S("get"),
B1521 = $S("*special-forms*"),
B1522 = $S("method"),
B1511 = B1509["%make-function"],
B1512 = B1509["symbol-name"],
B1513 = B1509.concatenate,
B1514 = B1511("define_special_form", function define_special_form__1515 (B1516, identifier__1517)
{
var definition__1518 = $SL.call(arguments, 2);
return [B1519, [B1520, B1521, B1512(identifier__1517)], B1513([B1522], definition__1518)]}, false);
exports["define-special-form"] = B1514;
B1514["%macro?"] = true}
{
var B1529 = $S("*core-macros*"),
B1524 = B1511("define_core_macro", function define_core_macro__1525 (B1526, identifier__1527)
{
var definition__1528 = $SL.call(arguments, 2);
return [B1519, [B1520, B1529, B1512(identifier__1527)], B1513([B1522], definition__1528)]}, false);
exports["define-core-macro"] = B1524;
B1524["%macro?"] = true}
{
var B1536 = $S("*core-symbol-macros*"),
B1531 = B1511("define_core_symbol_macro", function define_core_symbol_macro__1532 (B1533, identifier__1534)
{
var definition__1535 = $SL.call(arguments, 2);
return [B1519, [B1520, B1536, B1512(identifier__1534)], B1513([B1522], definition__1535)]}, false);
exports["define-core-symbol-macro"] = B1531;
B1531["%macro?"] = true}
