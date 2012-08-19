var B1466 = require("ralph/core")
false
{var B1475 = $S("set!"), B1476 = $S("get"), B1477 = $S("*special-forms*"), B1478 = $S("method"), B1468 = B1466["%make-function"], B1469 = B1466["symbol-name"], B1470 = B1466.concatenate, B1471 = B1468("define_special_form", function B1479 (B1472, identifier__1473)
{var definition__1474 = $SL.call(arguments, 2);
return [B1475, [B1476, B1477, B1469(identifier__1473)], B1470([B1478], definition__1474)]}, false);
exports["define-special-form"] = B1471;
B1471["%macro?"] = true}
{var B1485 = $S("*core-macros*"), B1481 = B1468("define_core_macro", function B1486 (B1482, identifier__1483)
{var definition__1484 = $SL.call(arguments, 2);
return [B1475, [B1476, B1485, B1469(identifier__1483)], B1470([B1478], definition__1484)]}, false);
exports["define-core-macro"] = B1481;
B1481["%macro?"] = true}
{var B1492 = $S("*core-symbol-macros*"), B1488 = B1468("define_core_symbol_macro", function B1493 (B1489, identifier__1490)
{var definition__1491 = $SL.call(arguments, 2);
return [B1475, [B1476, B1492, B1469(identifier__1490)], B1470([B1478], definition__1491)]}, false);
exports["define-core-symbol-macro"] = B1488;
B1488["%macro?"] = true}
