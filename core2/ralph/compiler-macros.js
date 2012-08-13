var $g1466 = require("ralph/core")
false
{var $g1468 = $g1466["%make-function"], $g1469 = $g1466.symbol, $g1470 = $g1466["symbol-name"], $g1471 = $g1466.concatenate, $g1472 = $g1468("define_special_form", function $g1476 ($g1473, $identifier1474)
{var $definition1475 = $SL.call(arguments, 2);
return [$g1469("set!"), [$g1469("get"), $g1469("*special-forms*"), $g1470($identifier1474)], $g1471([$g1469("method")], $definition1475)]}, false);
exports["define-special-form"] = $g1472;
$g1472["%macro?"] = true}
{var $g1478 = $g1468("define_core_macro", function $g1482 ($g1479, $identifier1480)
{var $definition1481 = $SL.call(arguments, 2);
return [$g1469("set!"), [$g1469("get"), $g1469("*core-macros*"), $g1470($identifier1480)], $g1471([$g1469("method")], $definition1481)]}, false);
exports["define-core-macro"] = $g1478;
$g1478["%macro?"] = true}
{var $g1484 = $g1468("define_core_symbol_macro", function $g1488 ($g1485, $identifier1486)
{var $definition1487 = $SL.call(arguments, 2);
return [$g1469("set!"), [$g1469("get"), $g1469("*core-symbol-macros*"), $g1470($identifier1486)], $g1471([$g1469("method")], $definition1487)]}, false);
exports["define-core-symbol-macro"] = $g1484;
$g1484["%macro?"] = true}
