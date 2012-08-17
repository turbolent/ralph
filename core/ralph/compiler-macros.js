var $g2049 = require("ralph/core")
false
{var $g2051 = $g2049["%make-function"], $g2052 = $g2049.symbol, $g2053 = $g2049["symbol-name"], $g2054 = $g2049.concatenate, $g2055 = $g2051("define_special_form", function $g2059 ($g2056, $identifier2057)
{var $definition2058 = $SL.call(arguments, 2);
return [$g2052("set!"), [$g2052("get"), $g2052("*special-forms*"), $g2053($identifier2057)], $g2054([$g2052("method")], $definition2058)]}, false);
exports["define-special-form"] = $g2055;
$g2055["%macro?"] = true}
{var $g2061 = $g2051("define_core_macro", function $g2065 ($g2062, $identifier2063)
{var $definition2064 = $SL.call(arguments, 2);
return [$g2052("set!"), [$g2052("get"), $g2052("*core-macros*"), $g2053($identifier2063)], $g2054([$g2052("method")], $definition2064)]}, false);
exports["define-core-macro"] = $g2061;
$g2061["%macro?"] = true}
{var $g2067 = $g2051("define_core_symbol_macro", function $g2071 ($g2068, $identifier2069)
{var $definition2070 = $SL.call(arguments, 2);
return [$g2052("set!"), [$g2052("get"), $g2052("*core-symbol-macros*"), $g2053($identifier2069)], $g2054([$g2052("method")], $definition2070)]}, false);
exports["define-core-symbol-macro"] = $g2067;
$g2067["%macro?"] = true}
