var B1466 = require("ralph/core")
false
{var B1468 = B1466["%make-function"], B1469 = B1466.symbol, B1470 = B1466["symbol-name"], B1471 = B1466.concatenate, B1472 = B1468("define_special_form", function B1476 (B1473, identifier__1474)
{var definition__1475 = $SL.call(arguments, 2);
return [B1469("set!"), [B1469("get"), B1469("*special-forms*"), B1470(identifier__1474)], B1471([B1469("method")], definition__1475)]}, false);
exports["define-special-form"] = B1472;
B1472["%macro?"] = true}
{var B1478 = B1468("define_core_macro", function B1482 (B1479, identifier__1480)
{var definition__1481 = $SL.call(arguments, 2);
return [B1469("set!"), [B1469("get"), B1469("*core-macros*"), B1470(identifier__1480)], B1471([B1469("method")], definition__1481)]}, false);
exports["define-core-macro"] = B1478;
B1478["%macro?"] = true}
{var B1484 = B1468("define_core_symbol_macro", function B1488 (B1485, identifier__1486)
{var definition__1487 = $SL.call(arguments, 2);
return [B1469("set!"), [B1469("get"), B1469("*core-symbol-macros*"), B1470(identifier__1486)], B1471([B1469("method")], definition__1487)]}, false);
exports["define-core-symbol-macro"] = B1484;
B1484["%macro?"] = true}
