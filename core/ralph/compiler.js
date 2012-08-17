var $g2 = require("ralph/core")
{var $g8, $g9, $g10, $g11, $g12;
$g8 = require("ralph/stream");
$g9 = require("ralph/format");
$g10 = require("ralph/regexp");
$g11 = require("ralph/reader");
$g12 = require("ralph/file-system")}
var $g13 = $g2["make-object"], $g14 = $g13()
{var $g15 = $g2["%make-class"], $g16 = $g2["<object>"], $g17 = $g15($g16, {name:false,
"native?":false,
exports:function $g18 ()
{return []},
imports:function $g19 ()
{return []},
dependencies:function $g20 ()
{return []},
inline:function $g21 ()
{return []}});
exports["<module>"] = $g17}
var $g22 = $g2.symbol, $g23 = [$g22("%all-arguments"), $g22("%this-method")]
{var $g24 = $g2["make-plain-object"], $g25 = $g15($g16, {module:false,
macros:function $g26 ()
{return $g24()},
"symbol-macros":function $g27 ()
{return $g24()},
identifiers:function $g28 ()
{return $g13()},
"defined?":function $g29 ()
{return $g13()},
lifted:function $g30 ()
{return $g13()},
"import-identifiers":function $g31 ()
{return $g24()}});
exports["<environment>"] = $g25}
var $g32 = $g2["%make-function"], $g33 = $g2["instance?"], $g34 = $g2["<array>"], $g35 = $g2.not, $g36 = $g2["empty?"], $g37 = $g2.first, $g38 = $g2["<symbol>"], $g39 = $g32("expressionQ", function $g41 ($form40)
{if ($T($g33($form40, $g34)))
if ($T($g35($g36($form40))))
return $g33($g37($form40), $g38)}, false)
var $g42 = $g2.concatenate, $g43 = $g2["symbol-name"], $g44 = $g32("transform_setter_identifier", function $g46 ($identifier45)
{return $g22($g42($g43($identifier45), "-setter"))}, false)
var $g47 = $g2["=="], $g48 = $g2.size, $g49 = $g2["every?"], $g50 = $g2.rcurry, $g51 = $g32("setter_identifierQ", function $g53 ($form52)
{if ($T($g33($form52, $g34)))
if ($T($g47($g48($form52), 2)))
if ($T($g49($g50($g33, $g38), $form52)))
return $g47($g43($g37($form52)), "setter")}, false)
var $g54 = $g2.second, $g55 = $g32("identifier_name", function $g58 ($identifier56)
{var $g57;
if ($T($g51($identifier56)))
$g57 = $g44($g54($identifier56))
else $g57 = $identifier56;
return $g43($g57)}, false)
var $g59 = 0
{var $g60 = $g32("reset_symbol_counterN", function $g61 ()
{return $g59 = 0}, false);
exports["reset-symbol-counter!"] = $g60}
var $g62 = $g2["get-setter"], $g63, $g64 = $g2["as-string"], $g65 = $g32("generate_symbol", function $g71 ($prefix66)
{var $g69;
if ($T($prefix66))
$g69 = $g63($prefix66)
else $g69 = "g";
var $g70 = $g64($g59 = ($g59 + 1)), $name67 = $g42($g69, $g70), $result68 = $g22($name67);
$g62($result68, "generated?", true);
return $result68}, false)
var $g72 = $g32("bindN", function $g75 ($env73, $identifier74)
{return $g62($env73, "bound?", $g43($identifier74), true)}, false)
var $g76 = $g32("unbindN", function $g79 ($env77, $identifier78)
{return $g62($env77, "bound?", $g43($identifier78), false)}, false)
var $g80 = $g13()
var $g81 = $g2.get, $g82 = $g32("find_special_form", function $g85 ($form83, $env84)
{if ($T($g39($form83)))
return $g81($g80, $g43($g37($form83)))}, false)
{var $g86 = $g2["do"], $g87 = $g2.curry, $g88;
$g62($g80, "%method", function $g93 ($env89, $rarguments90, $body91)
{$g86($g87($g72, $env89), $rarguments90);
var $expanded_body92 = $g88($body91, $env89);
$g86($g87($g76, $env89), $rarguments90);
return [$g22("%method"), $rarguments90, $expanded_body92]})}
$g62($g80, "%set", function $g97 ($env94, $identifier95, $value96)
{return [$g22("%set"), $identifier95, $g88($value96, $env94)]})
$g62($g80, "define", function $g101 ($env98, $identifier99, $value100)
{$g72($env98, $identifier99);
return [$g22("define"), $identifier99, $g88($value100, $env98)]})
$g62($g80, "%bind", function $g109 ($env102, $binding103, $body104)
{var $rvar105 = $binding103[0], $value106 = $binding103[1], $expanded_value107 = $g88($value106, $env102);
$g72($env102, $rvar105);
var $result108 = [$g22("%bind"), [$rvar105, $expanded_value107], $g88($body104, $env102)];
$g76($env102, $rvar105);
return $result108})
{var $g110 = $g13();
exports["*core-macros*"] = $g110}
var $g112 = $g32("maybe_begin", function $g115 ($expressions113)
{var $g114 = $g48($expressions113);
if ($T($g47($g114, 0)))
return false
else if ($T($g47($g114, 1)))
return $g37($expressions113)
else return $g42([$g22("%begin")], $expressions113)}, false)
{var $g135 = $REST, $g136 = $KEY, $g137 = $K("end"), $g138 = $K("start"), $g118 = $g2["find-key"], $g119 = $g2["="], $g120 = $g2["copy-sequence"], $g121 = $g2.element, $g122 = $g2.inc, $g123 = $g32("analyze_lambda_list", function $g139 ($list124)
{var $position125 = function $g140 ($symbol126)
{return $g118($list124, $g87($g119, $symbol126))}, $rest127 = $position125($g135), $key128 = $position125($g136), $g129 = $rest127, $g131;
if ($T($g129))
$g131 = $g129
else {var $g130 = $key128;
if ($T($g130))
$g131 = $g130
else $g131 = $g48($list124)};
var $g132 = $g120($list124, $g137, $g131), $g133;
if ($T($rest127))
$g133 = $g121($list124, $g122($rest127))
else $g133 = false;
var $g134;
if ($T($key128))
$g134 = $g120($list124, $g138, $g122($key128))
else $g134 = false;
return [$g132, $g133, $g134]}, false);
exports["analyze-lambda-list"] = $g123}
var $g141 = $g2.reduce, $g142 = $g32("wrap", function $g147 ($form143)
{var $wrappers144 = $SL.call(arguments, 1);
return $g141(function $g148 ($result145, $wrapper146)
{return $wrapper146($result145)}, $form143, $wrappers144)}, false)
var $g151 = $g2.map, $g152 = $g2.reduce1, $g153 = $g32("wrap_restSkeys", function $g171 ($body154, $all155, $required156, $rest157, $key158)
{var $restq159 = $rest157, $g160 = $rest157, $rest161;
if ($T($g160))
$rest161 = $g160
else if ($T($g35($g36($key158))))
$rest161 = $g65()
else $rest161 = false;
return $g142($body154, function $g172 ($body162)
{if ($T($g36($key158)))
return $body162
else {var $key_values164 = $g151(function $g173 ($binding163)
{if ($T($g33($binding163, $g34)))
return $binding163
else return [$binding163, false]}, $key158);
return [$g22("bind-properties"), $g151($g37, $key_values164), [$g22("%keys"), $rest161, $g42([$g22("%object")], $g152($g42, $g151(function $g174 ($key_value165)
{var $key166 = $key_value165[0], $value167 = $key_value165[1];
return [$g43($key166), $value167]}, $key_values164)))], $body162]}}, function $g175 ($body168)
{var $g169 = $restq159, $g170;
if ($T($g169))
$g170 = $g169
else $g170 = $g35($g36($key158));
if ($T($g170))
return [$g22("bind"), [[$rest161, [$g22("%native-call"), "$SL.call", $all155, $g48($required156)]]], $body168]
else return $body168})}, false)
$g62($g110, "begin", function $g178 ($__176)
{var $expressions177 = $SL.call(arguments, 1);
return $g112($expressions177)})
$g62($g110, "method", function $g187 ($__180, $rarguments181)
{var $body182 = $SL.call(arguments, 2), $g183 = $g123($rarguments181), $required184 = $g183[0], $rest185 = $g183[1], $key186 = $g183[2];
return [$g22("%method"), $required184, $g153($g112($body182), $g22("%all-arguments"), $required184, $rest185, $key186)]})
{var $g188 = $g2.reverse;
$g62($g110, "bind", function $g196 ($__189, $bindings190)
{var $body191 = $SL.call(arguments, 2);
if ($T($g36($bindings190)))
return $g112($body191)
else return $g141(function $g197 ($body192, $binding193)
{var $g194 = $g22("%bind"), $g195;
if ($T($g33($binding193, $g38)))
$g195 = [$binding193, false]
else $g195 = $binding193;
return [$g194, $g195, $body192]}, $g112($body191), $g188($bindings190))})}
$g62($g110, "if", function $g202 ($__198, $test199, $then200, $relse201)
{return [$g22("%if"), $test199, $then200, $relse201]})
{var $g203 = $g2.rest;
$g62($g110, "set!", function $g208 ($__204, $place205)
{var $values206 = $SL.call(arguments, 2), $g207;
if ($T($g33($place205, $g34)))
$g207 = $g35($g47($g37($place205), $g22("%get-property")))
else $g207 = false;
if ($T($g207))
return $g42([$g44($g37($place205))], $g203($place205), $values206)
else return [$g22("%set"), $place205, $g37($values206)]})}
$g62($g110, "parallel-set!", function $g214 ($__209, $rvar210, $value211)
{var $clauses212 = $SL.call(arguments, 3);
if ($T($g36($clauses212)))
return [$g22("set!"), $rvar210, $value211]
else {var $temp213 = $g65();
return [$g22("bind"), [[$temp213, $value211]], $g42([$g22("parallel-set!")], $clauses212), [$g22("set!"), $rvar210, $temp213]]}})
{var $g222 = $K("else");
$g62($g110, "cond", function $g223 ($__216)
{var $cases217 = $SL.call(arguments, 1);
if ($T($g35($g36($cases217))))
{var $g218 = $g37($cases217), $test219 = $g218[0], $then220 = $SL.call($g218, 1), $then221 = $g112($then220);
if ($T($g47($test219, $g222)))
return $then221
else return [$g22("if"), $test219, $then221, $g42([$g22("cond")], $g203($cases217))]}})}
$g62($g110, "when", function $g227 ($__224, $test225)
{var $body226 = $SL.call(arguments, 2);
return [$g22("if"), $test225, $g112($body226), false]})
$g62($g110, "unless", function $g231 ($__228, $test229)
{var $body230 = $SL.call(arguments, 2);
return [$g22("if"), [$g22("not"), $test229], $g112($body230), false]})
$g62($g110, "and", function $g236 ($__233)
{var $values234 = $SL.call(arguments, 1), $g235 = $g48($values234);
if ($T($g47($g235, 0)))
return true
else if ($T($g47($g235, 1)))
return $g37($values234)
else return [$g22("when"), $g37($values234), $g42([$g22("and")], $g203($values234))]})
$g62($g110, "or", function $g242 ($__238)
{var $values239 = $SL.call(arguments, 1), $g240 = $g48($values239);
if ($T($g47($g240, 0)))
return false
else if ($T($g47($g240, 1)))
return $g37($values239)
else {var $value241 = $g65();
return [$g22("bind"), [[$value241, $g37($values239)]], [$g22("if"), $value241, $value241, $g42([$g22("or")], $g203($values239))]]}})
$g62($g110, "if-bind", function $g250 ($__243, $binding244, $then245, $relse246)
{var $rvar247 = $binding244[0], $value248 = $binding244[1], $temp249 = $g65();
return [$g22("bind"), [[$temp249, $value248]], [$g22("if"), $temp249, [$g22("bind"), [[$rvar247, $temp249]], $then245], $relse246]]})
$g62($g110, "while", function $g254 ($__251, $test252)
{var $body253 = $SL.call(arguments, 2);
return [$g22("%while"), $test252, $g112($body253)]})
$g62($g110, "until", function $g258 ($__255, $test256)
{var $body257 = $SL.call(arguments, 2);
return $g42([$g22("while"), [$g22("not"), $test256]], $body257)})
$g62($g110, "dotimes", function $g277 ($__260, $binding261)
{var $body262 = $SL.call(arguments, 2), $temp263 = $g65(), $rvar264 = $binding261[0], $count265 = $binding261[1], $result266 = $binding261[2], $g268 = $g22("bind"), $g269 = [[$temp263, $count265]], $g270 = $g22("for"), $g271 = [[$rvar264, 0, [$g22("+"), $rvar264, 1]]], $g272 = [$g22(">="), $rvar264, $temp263], $g267 = $result266, $g273;
if ($T($g267))
$g273 = $g267
else $g273 = false;
var $g274 = [$g272, $g273], $g275 = [$g270, $g271, $g274], $g276 = $g42($g275, $body262);
return [$g268, $g269, $g276]})
{var $g284 = $g2["any?"], $g285 = $g2["push-last"], $g286 = $g2.slice, $g287 = $g2.third;
$g62($g110, "for", function $g313 ($__288, $clauses289, $end290)
{var $body291 = $SL.call(arguments, 3), $init_clauses292 = [], $next_clauses293 = [], $vars294 = $g151($g37, $clauses289), $g295 = $clauses289, $g296, $g297, $g298 = [$g295];
while ($T(true))
{var $g299 = $g296, $g303;
if ($T($g299))
$g303 = $g299
else $g303 = $g284($g36, $g298);
var $g304 = $g35($g303);
if ($T($g304))
{var $clause300 = $g37($g295);
(function $g314 ($clause301)
{$g285($init_clauses292, $g286($clause301, 0, 2));
$g285($next_clauses293, $g37($clause301));
return $g285($next_clauses293, $g287($clause301))})($clause300);
$g295 = $g203($g295);
$g298 = [$g295]}
else break};
$g297;
var $g305 = $g22("bind"), $g306 = $g22("while"), $g302 = $g36($end290), $g307;
if ($T($g302))
$g307 = $g302
else $g307 = [$g22("not"), $g37($end290)];
var $g308 = $g42([$g42([$g22("method"), $vars294], $body291)], $vars294), $g309 = $g42([$g22("parallel-set!")], $next_clauses293), $g310 = [$g306, $g307, $g308, $g309], $g311 = $g42($g310), $g312;
if ($T($g35($g36($g203($end290)))))
$g312 = $g42([$g22("begin")], $g203($end290))
else $g312 = false;
return [$g305, $init_clauses292, $g311, $g312]})}
$g62($g110, "for-each", function $g361 ($__316, $clauses317, $end318)
{var $body319 = $SL.call(arguments, 3), $clauses321 = $g151(function $g362 ($clause320)
{return $g42([$g65()], $clause320)}, $clauses317), $endq322 = $g65(), $values323 = $g65(), $result324 = $g65(), $g339 = $g22("begin"), $vars325 = $g151($g54, $clauses321), $g340 = $g42([$g42([$g22("method"), $vars325], $body319)], $vars325), $g341 = [$g339, $g340], $g342 = $g151(function $g363 ($clause326)
{return [$g22("set!"), $g37($clause326), [$g22("rest"), $g37($clause326)]]}, $clauses321), $g343 = [[$g22("set!"), $values323, $g42([$g22("%array")], $g151($g37, $clauses321))]], $body327 = $g42($g341, $g342, $g343), $g344 = $g22("bind"), $g345 = $g42($g151(function $g364 ($clause328)
{var $temp329 = $clause328[0], $rvar330 = $clause328[1], $values331 = $clause328[2];
return [$temp329, $values331]}, $clauses321), [[$endq322, false], [$result324, false], [$values323, $g42([$g22("%array")], $g151($g37, $clauses321))]]), $g346 = $g22("until"), $g347 = [$g22("or"), $endq322, [$g22("any?"), $g22("empty?"), $values323]], $g348 = $g22("bind"), $g349 = $g151(function $g365 ($clause332)
{var $temp333 = $clause332[0], $rvar334 = $clause332[1], $values335 = $clause332[2];
return [$rvar334, [$g22("first"), $temp333]]}, $clauses321), $g336 = $g37($end318), $g358;
if ($T($g336))
{var $end_test337 = $g336, $g350 = $g22("if"), $g351 = $g22("begin"), $g352 = $g22("set!"), $results338 = $g203($end318), $g353;
if ($T($g36($results338)))
$g353 = [false]
else $g353 = $results338;
var $g354 = $g112($g353), $g355 = [$g352, $result324, $g354], $g356 = [$g22("set!"), $endq322, true], $g357 = [$g351, $g355, $g356];
$g358 = [$g350, $end_test337, $g357, $body327]}
else $g358 = $body327;
var $g359 = [$g348, $g349, $g358], $g360 = [$g346, $g347, $g359];
return [$g344, $g345, $g360, $result324]})
$g62($g110, "bind-properties", function $g372 ($__366, $properties367, $robject368)
{var $body369 = $SL.call(arguments, 3), $objectt370 = $g65();
return $g42([$g22("bind"), $g42([[$objectt370, $robject368]], $g151(function $g373 ($property371)
{return [$property371, [$g22("%get-property"), $objectt370, $g43($property371)]]}, $properties367))], $body369)})
$g62($g110, "select", function $g390 ($__374, $value375, $test376)
{var $cases377 = $SL.call(arguments, 3), $valuet378 = $g65(), $testt379;
if ($T($g33($test376, $g38)))
$testt379 = $test376
else $testt379 = $g65();
var $test_expression380 = function $g391 ($test_value381)
{return [$testt379, $valuet378, $test_value381]}, $g385 = $g22("bind"), $g386 = [[$valuet378, $value375]], $g387;
if ($T($g33($test376, $g38)))
$g387 = []
else $g387 = [[$testt379, $test376]];
var $g388 = $g42($g386, $g387), $g389 = $g42([$g22("cond")], $g151(function $g392 ($rcase382)
{var $tests383 = $rcase382[0], $then384 = $SL.call($rcase382, 1);
if ($T($g47($tests383, $g222)))
return $rcase382
else return $g42([$g42([$g22("or")], $g151($test_expression380, $tests383))], $then384)}, $cases377));
return [$g385, $g388, $g389]})
var $g394 = $g32("destructure", function $g406 ($bindings395, $values396, $body397)
{if ($T($g33($values396, $g38)))
{var $g398 = $g123($bindings395), $required399 = $g398[0], $rest400 = $g398[1], $key401 = $g398[2], $i402 = $g48($required399);
return $g141(function $g407 ($body403, $binding404)
{$i402 = ($i402 - 1);
if ($T($g33($binding404, $g38)))
return [$g22("bind"), [[$binding404, [$g22("%get-property"), $values396, $i402]]], $body403]
else return $g394($binding404, [$g22("%get-property"), $values396, $i402], $body403)}, $g153($body397, $values396, $required399, $rest400, $key401), $g188($required399))}
else {var $rvar405 = $g65();
return [$g22("bind"), [[$rvar405, $values396]], $g394($bindings395, $rvar405, $body397)]}}, false)
$g62($g110, "destructuring-bind", function $g412 ($__408, $bindings409, $values410)
{var $body411 = $SL.call(arguments, 3);
return $g394($bindings409, $values410, $g42([$g22("begin")], $body411))})
$g62($g110, "bind-methods", function $g420 ($__413, $bindings414)
{var $body415 = $SL.call(arguments, 2);
return $g42([$g22("bind"), $g151($g37, $bindings414)], $g151(function $g421 ($binding416)
{var $identifier417 = $binding416[0], $rarguments418 = $binding416[1], $body419 = $SL.call($binding416, 2);
return [$g22("set!"), $identifier417, $g42([$g22("method"), $rarguments418], $body419)]}, $bindings414), $body415)})
$g62($g110, "inc!", function $g431 ($__423, $robject424, $value425)
{var $g427 = $g22("set!"), $g428 = $g22("+"), $g426 = $value425, $g429;
if ($T($g426))
$g429 = $g426
else $g429 = 1;
var $g430 = [$g428, $robject424, $g429];
return [$g427, $robject424, $g430]})
$g62($g110, "dec!", function $g441 ($__433, $robject434, $value435)
{var $g437 = $g22("set!"), $g438 = $g22("-"), $g436 = $value435, $g439;
if ($T($g436))
$g439 = $g436
else $g439 = 1;
var $g440 = [$g438, $robject434, $g439];
return [$g437, $robject434, $g440]})
$g62($g110, "+", function $g444 ($__442)
{var $values443 = $SL.call(arguments, 1);
if ($T($g36($values443)))
return 0
else return $g42([$g22("%plus")], $values443)})
$g62($g110, "-", function $g448 ($__445, $minuend446)
{var $subtrahends447 = $SL.call(arguments, 2);
if ($T($g36($subtrahends447)))
return [$g22("%native-call"), "-", $minuend446]
else return $g42([$g22("%minus"), $minuend446], $subtrahends447)})
$g62($g110, "*", function $g451 ($__449)
{var $values450 = $SL.call(arguments, 1);
if ($T($g36($values450)))
return 1
else return $g42([$g22("%times")], $values450)})
$g62($g110, "/", function $g455 ($__452, $numerator453)
{var $denominators454 = $SL.call(arguments, 2);
if ($T($g36($denominators454)))
return [$g22("%divide"), 1, $numerator453]
else return $g42([$g22("%divide"), $numerator453], $denominators454)})
$g62($g110, "call-next-method", function $g457 ($__456)
{return [[$g22("%get-property"), $g22("next-method"), "apply"], [$g22("%native"), "null"], [$g22("%native"), "arguments"]]})
var $g458 = $g32("transform_quoted", function $g461 ($form459)
{if ($T($g33($form459, $g34)))
{var $g460;
if ($T($g35($g36($form459))))
$g460 = $g47($g43($g37($form459)), "%comma")
else $g460 = false;
if ($T($g460))
return $g54($form459)
else return $g42([$g22("%array")], $g151($g458, $form459))}
else if ($T($g33($form459, $g38)))
return [$g22("symbol"), $g43($form459)]
else return $form459}, false)
$g62($g110, "%backquote", function $g464 ($__462, $exp463)
{return $g458($exp463)})
{var $g470 = $K("message"), $g465 = $g2.signal, $g466 = $g2.make, $g467 = $g2["<error>"];
$g62($g110, "%comma", function $g471 ($__468, $value469)
{return $g465($g466($g467, $g470, "comma not inside backquote"))})}
var $g472 = $g466($g467, $g470, "unsupported name for call in dot")
{var $g474 = $g2["<string>"];
$g62($g110, ".", function $g487 ($__475, $value476)
{var $calls477 = $SL.call(arguments, 2);
return $g141(function $g488 ($value478, $call479)
{var $property480 = $call479[0], $rarguments481 = $SL.call($call479, 1), $g483 = $g22("%get-property"), $g482 = $property480, $g484;
if ($T($g33($g482, $g474)))
$g484 = $property480
else if ($T($g33($g482, $g38)))
$g484 = $g43($property480)
else $g484 = $g465($g472);
var $g485 = [$g483, $value478, $g484], $g486 = [$g485];
return $g42($g486, $rarguments481)}, $value476, $calls477)})}
var $g490 = $g32("simplify_arguments", function $g500 ($rarguments491)
{var $g492 = $g123($rarguments491), $required493 = $g492[0], $rest494 = $g492[1], $key495 = $g492[2], $required497 = $g151(function $g501 ($argument496)
{if ($T($g33($argument496, $g34)))
return $g37($argument496)
else return $argument496}, $required493), $g498;
if ($T($rest494))
$g498 = $g42([$g135], $rest494)
else $g498 = [];
var $g499;
if ($T($key495))
$g499 = $g42([$g136], $key495)
else $g499 = [];
return $g42($required497, $g498, $g499)}, false)
var $g506 = $g2[">"], $g507 = $g2["%keys"], $g508 = $g32("make_function_definer", function $g535 ($macro_name509, $definer_name510)
{var $g511 = $SL.call(arguments, 2), $g512 = $g507($g511, {"type/existing?":false,
"record?":false}), $typesexistingq513 = $g512["type/existing?"], $recordq514 = $g512["record?"];
return function $g536 ($env515, $identifier516, $rarguments517)
{var $body518 = $SL.call(arguments, 3), $g519;
if ($T($g51($identifier516)))
$g519 = [true, $g44($g54($identifier516))]
else $g519 = [false, $identifier516];
var $setterq520 = $g519[0], $identifier521 = $g519[1], $g522 = $g33($identifier521, $g38), $g526;
if ($T($g522))
$g526 = $g522
else $g526 = $setterq520;
var $g527 = $g35($g526);
if ($T($g527))
$g465($g466($g467, $g470, $g42($macro_name509, ": ", "name not <var> or (setter <var>)")));
var $g528;
if ($T($typesexistingq513))
$g528 = $g36($rarguments517)
else $g528 = false;
if ($T($g528))
$g465($g466($g467, $g470, $g42($macro_name509, ": ", "method has no arguments")));
var $simplified_arguments523 = $g490($rarguments517), $method_definition524 = $g88($g42([$g22("method"), $simplified_arguments523], $body518), $env515);
if ($T($recordq514))
$g62($env515, "module", "functions", $g43($identifier521), $method_definition524);
var $g529 = $g22("define"), $g530 = [$g22($definer_name510), [$g22("%native-name"), $g43($identifier521)], $method_definition524, $setterq520], $g533;
if ($T($typesexistingq513))
{var $head525 = $g37($rarguments517), $g531;
if ($T($g33($head525, $g34)))
$g531 = $g506($g48($head525), 1)
else $g531 = false;
var $g532;
if ($T($g531))
$g532 = $g54($head525)
else $g532 = $g22("<object>");
$g533 = [$g532, $identifier521]}
else $g533 = [];
var $g534 = $g42($g530, $g533);
return [$g529, $identifier521, $g534]}}, false)
{var $g552 = $K("type/existing?"), $g553 = $K("record?"), $g542 = $g2.apply, $g543 = [["define-function", "%make-function", $g552, false, $g553, true], ["define-method", "%make-method", $g552, true]], $g544, $g545, $g546 = [$g543];
while ($T(true))
{var $g547 = $g544, $g550;
if ($T($g547))
$g550 = $g547
else $g550 = $g284($g36, $g546);
var $g551 = $g35($g550);
if ($T($g551))
{var $rarguments548 = $g37($g543);
(function $g554 ($rarguments549)
{return $g62($g110, $g37($rarguments549), $g542($g508, $rarguments549))})($rarguments548);
$g543 = $g203($g543);
$g546 = [$g543]}
else break};
$g545}
$g62($g110, "define-generic", function $g558 ($__555, $identifier556, $rarguments557)
{return [$g22("define"), $identifier556, [$g22("%make-generic"), [$g22("%native-name"), $g43($identifier556)]]]})
$g62($g110, "define-class", function $g582 ($__564, $identifier565, $superclass566)
{var $properties567 = $SL.call(arguments, 3), $robject568 = [$g22("%object")], $g569 = $properties567, $g570, $g571, $g572 = [$g569];
while ($T(true))
{var $g573 = $g570, $g576;
if ($T($g573))
$g576 = $g573
else $g576 = $g284($g36, $g572);
var $g577 = $g35($g576);
if ($T($g577))
{var $property574 = $g37($g569);
(function $g583 ($property575)
{if ($T($g33($property575, $g34)))
{$g285($robject568, $g43($g37($property575)));
return $g285($robject568, [$g22("method"), [], $g54($property575)])}
else {$g285($robject568, $g43($property575));
return $g285($robject568, false)}})($property574);
$g569 = $g203($g569);
$g572 = [$g569]}
else break};
$g571;
var $g578 = $g22("define"), $g579 = $g22("%make-class"), $g580;
if ($T($g35($g36($superclass566))))
$g580 = $g37($superclass566)
else $g580 = false;
var $g581 = [$g579, $g580, $robject568];
return [$g578, $identifier565, $g581]})
var $g584 = $g32("get_import_module_nameSoptions", function $g589 ($rimport585)
{var $g586;
if ($T($g33($rimport585, $g34)))
$g586 = $g37($rimport585)
else $g586 = $rimport585;
var $g587 = $g43($g586), $g588;
if ($T($g33($rimport585, $g34)))
$g588 = $g203($rimport585)
else $g588 = [];
return [$g587, $g588]}, false)
{var $g594, $g595, $g596;
$g62($g110, "define-module", function $g613 ($env597, $__598)
{var $g599 = $SL.call(arguments, 2), $g600 = $g507($g599, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), $rimport601 = $g600["import"], $rexport602 = $g600["export"], $compile_time_import603 = $g600["compile-time-import"], $inline604 = $g600.inline;
$g62($env597, "module", "exports", $g151($g55, $rexport602));
$g86(function $g614 ($rimport605)
{var $g606 = $g584($rimport605), $module_name607 = $g606[0], $options608 = $g606[1];
return $g542($g594, $env597, $module_name607, $options608)}, $compile_time_import603);
$g62($env597, "module", "inline", $g151($g55, $inline604));
return $g112($g151(function $g615 ($rimport609)
{var $g610 = $g584($rimport609), $module_name611 = $g610[0], $options612 = $g610[1];
$g542($g595, $g81($env597, "module"), $module_name611, $options612);
return $g596($module_name611, $env597)}, $rimport601))})}
$g596 = $g32("make_import_definition", function $g619 ($module_name616, $env617)
{var $identifier618 = $g65();
$g62($env617, "import-identifiers", $module_name616, $identifier618);
return [$g22("define"), $identifier618, [[$g22("%native"), "require"], $module_name616]]}, false)
$g62($g110, "define-macro", function $g624 ($env620, $identifier621, $rarguments622)
{var $body623 = $SL.call(arguments, 3);
return [$g22("begin"), $g42([$g22("define-function"), $identifier621, $g42([$g65()], $rarguments622)], $body623), [$g22("set!"), [$g22("%get-property"), $identifier621, "%macro?"], true]]})
$g62($g110, "define-symbol-macro", function $g629 ($env625, $identifier626, $rarguments627)
{var $body628 = $SL.call(arguments, 3);
return [$g22("begin"), $g42([$g22("define-function"), $identifier626, []], $body628), [$g22("set!"), [$g22("%get-property"), $identifier626, "%symbol-macro?"], true]]})
$g62($g110, "handler-case", function $g646 ($__633, $body634)
{var $cases635 = $SL.call(arguments, 2), $condition_var636 = $g65();
return [$g22("%try"), $body634, $condition_var636, $g42([$g22("cond")], $g151(function $g647 ($rcase637)
{var $g638 = $rcase637[0], $type639 = $g638[0], $g640 = $SL.call($g638, 1), $g641 = $g507($g640, {condition:false}), $condition642 = $g641.condition, $body643 = $SL.call($rcase637, 1), $g644 = [[$g22("instance?"), $condition_var636, $type639]], $g645;
if ($T($condition642))
$g645 = [$g42([$g22("bind"), [[$condition642, $condition_var636]]], $body643)]
else $g645 = $body643;
return $g42($g644, $g645)}, $cases635))]})
{var $g648, $g649 = $g2.identity, $g650 = $g32("lift_defines", function $g653 ($exp651, $env652)
{return $g648($exp651, $env652, $g649)}, false);
exports["lift-defines"] = $g650}
{var $g659, $g660 = $g2["has?"], $g661;
$g648 = $g32("lift_define", function $g702 ($exp662, $env663, $k664)
{if ($T($g39($exp662)))
{var $g665 = $g43($g37($exp662));
if ($T($g47($g665, "%bind")))
{var $__666 = $exp662[0], $g667 = $exp662[1], $rvar668 = $g667[0], $value669 = $g667[1], $body670 = $exp662[2];
return $g648($value669, $env663, function $g703 ($lvalue671, $env672)
{return $g648($body670, $env672, function $g704 ($lbody673, $env674)
{return $k664([$g22("%bind"), [$rvar668, $lvalue671], $lbody673], $env674)})})}
else if ($T($g47($g665, "%try")))
{var $m675 = $exp662[0], $e1676 = $exp662[1], $v677 = $exp662[2], $e2678 = $exp662[3];
return $g659([$e1676, $e2678], $env663, function $g705 ($let679, $env680)
{var $le1681 = $let679[0], $le2682 = $let679[1];
return $k664([$m675, $le1681, $v677, $le2682], $env680)})}
else {var $g683 = $g47($g665, "%method"), $g700;
if ($T($g683))
$g700 = $g683
else $g700 = $g47($g665, "%set");
if ($T($g700))
{var $m684 = $exp662[0], $e1685 = $exp662[1], $e2686 = $exp662[2];
return $g648($e2686, $env663, function $g706 ($le2687, $env688)
{return $k664([$m684, $e1685, $le2687], $env688)})}
else {var $g689 = $g47($g665, "%begin"), $g701;
if ($T($g689))
$g701 = $g689
else {var $g690 = $g47($g665, "%if");
if ($T($g690))
$g701 = $g690
else $g701 = $g47($g665, "%while")};
if ($T($g701))
{var $m691 = $exp662[0], $et692 = $SL.call($exp662, 1);
return $g659($et692, $env663, function $g707 ($let693, $env694)
{return $k664($g42([$m691], $let693), $env694)})}
else if ($T($g47($g665, "define")))
{var $__695 = $exp662[0], $rvar696 = $exp662[1], $value697 = $exp662[2], $exportq698 = $exp662[3], $name699 = $g43($rvar696);
if ($T($g660($g81($env663, "defined?"), $name699)))
return $k664([$g22("%set"), $rvar696, $value697], $env663)
else {$g62($env663, "defined?", $name699, true);
return [$g22("%begin"), [$g22("%define"), $rvar696], $k664([$g22("%set"), $rvar696, $value697], $env663)]}}
else return $g661($exp662, $env663, $k664)}}}
else return $k664($exp662, $env663)}, false)}
$g659 = $g32("lift_defineT", function $g711 ($expt708, $env709, $k710)
{if ($T($g36($expt708)))
return $k710([], $env709)
else return $g661($expt708, $env709, $k710)}, false)
$g661 = $g32("lift_defineTT", function $g719 ($exp712, $env713, $k714)
{return $g648($g37($exp712), $env713, function $g720 ($t715, $env716)
{return $g659($g203($exp712), $env716, function $g721 ($tt717, $env718)
{return $k714($g42([$t715], $tt717), $env718)})})}, false)
{var $g722 = $g13();
exports["*core-symbol-macros*"] = $g722}
$g62($g722, "next-method", function $g724 ($__723)
{return [$g22("%next-method"), $g22("%this-method")]})
var $g726 = $g32("find_macro_definition", function $g732 ($form727, $env728)
{var $g729 = $form727;
if ($T($g33($g729, $g34)))
{if ($T($g36($form727)))
$g465("Empty form");
var $name730 = $g43($g37($form727));
if ($T($g35($g81($env728, "bound?", $name730))))
return $env728.macros[$name730]}
else if ($T($g33($g729, $g38)))
{var $name731 = $g43($form727);
if ($T($g35($g81($env728, "bound?", $name731))))
return $env728["symbol-macros"][$name731]}}, false)
{var $g734 = $g32("macroexpand_1", function $g740 ($form735, $env736)
{var $g737 = $g726($form735, $env736);
if ($T($g737))
{var $macro738 = $g737, $g739;
if ($T($g33($form735, $g34)))
$g739 = $g203($form735)
else $g739 = $form735;
return $g542($macro738, $env736, $g739)}
else return $form735}, false);
exports["macroexpand-1"] = $g734}
{var $g741 = $g32("macroexpand", function $g746 ($form742, $env743)
{var $doneq744;
while ($T($g35($doneq744)))
{var $expanded745 = $g734($form742, $env743);
$doneq744 = $g47($expanded745, $form742);
$form742 = $expanded745};
return $form742}, false);
exports.macroexpand = $g741}
{$g88 = $g32("macroexpand_all", function $g754 ($form749, $env750)
{var $g751 = $form749;
if ($T($g33($g751, $g34)))
if ($T($g726($form749, $env750)))
return $g88($g741($form749, $env750), $env750)
else {var $g752 = $g82($form749, $env750);
if ($T($g752))
{var $expander753 = $g752;
return $g542($expander753, $env750, $g203($form749))}
else return $g151($g50($g88, $env750), $form749)}
else if ($T($g33($g751, $g38)))
if ($T($g726($form749, $env750)))
return $g88($g741($form749, $env750), $env750)
else return $form749
else return $form749}, false);
exports["macroexpand-all"] = $g88}
var $g756 = $g32("find_moduleSimport_name", function $g766 ($definition_name757, $env758)
{return $g284(function $g767 ($rimport759)
{var $module760 = $rimport759[0], $names761 = $rimport759[1];
return $g284(function $g768 ($name762)
{var $g763;
if ($T($g33($name762, $g34)))
$g763 = $name762
else $g763 = [$name762, $name762];
var $import_name764 = $g763[0], $new_name765 = $g763[1];
if ($T($g47($definition_name757, $new_name765)))
return [$module760, $import_name764]}, $names761)}, $g81($env758, "module", "imports"))}, false)
var $g769 = $g32("find_import_identifier", function $g772 ($module770, $env771)
{return $g81($env771, "import-identifiers", $g81($module770, "name"))}, false)
{var $g773 = $g2["set-subtract!"], $g774, $g775 = $g2["as-set"], $g776 = $g2["object-properties"], $g777 = $g32("define_free_variables", function $g790 ($exp778, $env779)
{var $variables780 = $g773($g773($g774($exp778), $g775($g151($g22, $g776($g81($env779, "defined?"))))), $g23);
if ($T($g36($variables780)))
return $exp778
else return $g42([$g22("%begin")], $g151(function $g791 ($variable781)
{var $name782 = $g43($variable781);
$g62($env779, "defined?", $name782, true);
var $g787 = [[$g22("%define"), $variable781]], $modulesimport_name783 = $g756($name782, $env779), $g788;
if ($T($modulesimport_name783))
{var $module784 = $modulesimport_name783[0], $import_name785 = $modulesimport_name783[1], $import_identifier786 = $g769($module784, $env779);
$g788 = [[$g22("%set"), $variable781, [$g22("%get-property"), $import_identifier786, $import_name785]]]}
else $g788 = [];
var $g789 = $g42($g787, $g788);
return $g112($g789)}, $variables780), [$exp778])}, false);
exports["define-free-variables"] = $g777}
var $g792 = $g2.choose, $g793 = $g32("define_free_variables2", function $g809 ($exp794, $env795)
{var $free796 = $g773($g774($exp794), $g23), $variables798 = $g792(function $g810 ($variable797)
{return $g35($g660($g81($env795, "definition-names"), $g43($variable797)))}, $free796);
if ($T($g36($variables798)))
return $exp794
else return $g42([$g22("%begin")], $g151(function $g811 ($variable799)
{var $name800 = $g43($variable799);
$g62($env795, "defined?", $name800, true);
var $g806 = [[$g22("%define"), $variable799]], $modulesimport_name801 = $g756($name800, $env795), $g807;
if ($T($modulesimport_name801))
{var $module802 = $modulesimport_name801[0], $import_name803 = $modulesimport_name801[1], $old_import_identifier804 = $g769($module802, $env795), $import_identifier805 = $g81($env795, "new-identifiers", $g43($old_import_identifier804));
$g807 = [[$g22("%set"), $variable799, [$g22("%get-property"), $import_identifier805, $import_name803]]]}
else $g807 = [];
var $g808 = $g42($g806, $g807);
return $g112($g808)}, $variables798), [$exp794])}, false)
{var $g827 = $g2["set-union!"];
$g774 = $g32("find_free_variables", function $g865 ($exp828)
{var $g860;
if ($T($g33($exp828, $g34)))
$g860 = $g35($g36($exp828))
else $g860 = false;
if ($T($g860))
{var $head829 = $g37($exp828), $name830;
if ($T($g33($head829, $g38)))
$name830 = $g43($head829)
else $name830 = false;
var $g831 = $name830;
if ($T($g47($g831, "%method")))
{var $__832 = $exp828[0], $rarguments833 = $exp828[1], $body834 = $exp828[2];
return $g773($g774($body834), $g775($rarguments833))}
else if ($T($g47($g831, "%bind")))
{var $__835 = $exp828[0], $g836 = $exp828[1], $rvar837 = $g836[0], $value838 = $g836[1], $body839 = $exp828[2];
return $g827($g773($g774($body839), $g775([$rvar837])), $g774($value838))}
else if ($T($g47($g831, "%begin")))
{var $definitions840 = [];
return $g773($g775($g141(function $g866 ($result841, $e842)
{var $g861;
if ($T($g39($e842)))
$g861 = $g47($g37($e842), $g22("%define"))
else $g861 = false;
var $g862;
if ($T($g861))
{$g285($definitions840, $g54($e842));
$g862 = []}
else $g862 = $g774($e842);
return $g42($result841, $g862)}, [], $g203($exp828))), $g775($definitions840))}
else if ($T($g47($g831, "%try")))
{var $__843 = $exp828[0], $e1844 = $exp828[1], $v845 = $exp828[2], $e2846 = $exp828[3];
return $g773($g827($g775($g774($e1844)), $g775($g774($e2846))), $g775([$v845]))}
else {var $g847 = $g47($g831, "%set"), $g863;
if ($T($g847))
$g863 = $g847
else {var $g848 = $g47($g831, "%if");
if ($T($g848))
$g863 = $g848
else {var $g849 = $g47($g831, "%while");
if ($T($g849))
$g863 = $g849
else {var $g850 = $g47($g831, "%array");
if ($T($g850))
$g863 = $g850
else {var $g851 = $g47($g831, "%object");
if ($T($g851))
$g863 = $g851
else {var $g852 = $g47($g831, "%infix");
if ($T($g852))
$g863 = $g852
else {var $g853 = $g47($g831, "%get-property");
if ($T($g853))
$g863 = $g853
else {var $g854 = $g47($g831, "%native-call");
if ($T($g854))
$g863 = $g854
else {var $g855 = $g47($g831, "%plus");
if ($T($g855))
$g863 = $g855
else {var $g856 = $g47($g831, "%minus");
if ($T($g856))
$g863 = $g856
else {var $g857 = $g47($g831, "%times");
if ($T($g857))
$g863 = $g857
else $g863 = $g47($g831, "%divide")}}}}}}}}}};
if ($T($g863))
return $g775($g141($g42, [], $g151($g774, $g203($exp828))))
else {var $g858 = $g47($g831, "%native"), $g864;
if ($T($g858))
$g864 = $g858
else {var $g859 = $g47($g831, "%native-name");
if ($T($g859))
$g864 = $g859
else $g864 = $g47($g831, "%define")};
if ($T($g864))
return $g775([])
else return $g152($g827, $g151($g774, $exp828))}}}
else if ($T($g33($exp828, $g38)))
return $g775([$exp828])
else return $g775([])}, false)}
var $g867 = $g32("ensure_naming_structure", function $g872 ($env868, $module_name869, $name870)
{if ($T($g35($g81($env868, "identifiers", $module_name869))))
$g62($env868, "identifiers", $module_name869, $g13());
var $module_renamings871 = $g81($env868, "identifiers", $module_name869);
if ($T($g35($g81($module_renamings871, $name870))))
$g62($module_renamings871, $name870, []);
return $env868}, false)
var $g874 = $g32("get_module_nameSname", function $g879 ($identifier875)
{var $g876 = $g81($identifier875, "module"), $g877;
if ($T($g876))
$g877 = $g876
else $g877 = "";
var $g878 = $g43($identifier875);
return [$g877, $g878]}, false)
var $g881 = $g2.push, $g882 = $g32("rename_identifiers", function $g891 ($identifiers883, $env884)
{return $g151(function $g892 ($identifier885)
{var $g886 = $g874($identifier885), $module_name887 = $g886[0], $name888 = $g886[1], $g890;
if ($T($g35($g81($identifier885, "generated?"))))
$g890 = $name888
else $g890 = false;
var $new_identifier889 = $g65($g890);
$g867($env884, $module_name887, $name888);
$g881($g81($env884, "identifiers", $module_name887, $name888), $new_identifier889);
return $new_identifier889}, $identifiers883)}, false)
var $g899 = $g2.pop, $g900 = $g32("restore_identifiers", function $g915 ($identifiers901, $env902)
{var $g903 = $identifiers901, $g904, $g905, $g906 = [$g903];
while ($T(true))
{var $g907 = $g904, $g913;
if ($T($g907))
$g913 = $g907
else $g913 = $g284($g36, $g906);
var $g914 = $g35($g913);
if ($T($g914))
{var $identifier908 = $g37($g903);
(function $g916 ($identifier909)
{var $g910 = $g874($identifier909), $module_name911 = $g910[0], $name912 = $g910[1];
return $g899($g81($env902, "identifiers", $module_name911, $name912))})($identifier908);
$g903 = $g203($g903);
$g906 = [$g903]}
else break};
return $g905}, false)
var $g917 = $g13()
var $g920 = $g32("find_identifier", function $g928 ($identifier921, $env922)
{var $g923 = $g874($identifier921), $module_name924 = $g923[0], $name925 = $g923[1], $g926 = $g81($env922, "identifiers", $module_name924, $name925);
if ($T($g926))
{var $renamings927 = $g926;
return $g37($renamings927)}
else return $g917}, false)
{var $g935 = $g2["second-setter"], $g936 = $g32("alpha_convert", function $g971 ($form937, $env938)
{var $g939 = $form937;
if ($T($g33($g939, $g34)))
{var $g940 = $g43($g37($form937));
if ($T($g47($g940, "%method")))
{var $__941 = $form937[0], $rarguments942 = $form937[1], $body943 = $form937[2], $new_arguments944 = $g882($rarguments942, $env938), $new_body945 = $g936($body943, $env938), $result946 = [$__941, $new_arguments944, $new_body945];
$g900($rarguments942, $env938);
return $result946}
else if ($T($g47($g940, "%bind")))
{var $__947 = $form937[0], $g948 = $form937[1], $rvar949 = $g948[0], $value950 = $g948[1], $body951 = $form937[2], $new_value952 = $g936($value950, $env938), $g953 = $g882([$rvar949], $env938), $new_var954 = $g953[0], $result955 = [$g22("%bind"), [$new_var954, $new_value952], $g936($body951, $env938)];
$g900([$rvar949], $env938);
return $result955}
else if ($T($g47($g940, "%try")))
{var $__956 = $form937[0], $body957 = $form937[1], $rvar958 = $form937[2], $rcatch959 = $form937[3], $new_body960 = $g936($body957, $env938), $g961 = $g882([$rvar958], $env938), $new_var962 = $g961[0], $result963 = [$g22("%try"), $new_body960, $new_var962, $g936($rcatch959, $env938)];
$g900([$rvar958], $env938);
return $result963}
else if ($T($g47($g940, "%define")))
{var $__964 = $form937[0], $identifier965 = $form937[1], $g966 = $g874($identifier965), $module_name967 = $g966[0], $name968 = $g966[1], $new_identifier969 = $g65();
$g867($env938, $module_name967, $name968);
$g285($g81($env938, "identifiers", $module_name967, $name968), $new_identifier969);
$g62($env938, "definition-names", $g43($new_identifier969), $name968);
$g62($env938, "new-identifiers", $name968, $new_identifier969);
$g935($form937, $new_identifier969);
return $form937}
else return $g151($g50($g936, $env938), $form937)}
else if ($T($g33($g939, $g38)))
{var $value970 = $g920($form937, $env938);
if ($T($g47($value970, $g917)))
return $form937
else return $value970}
else return $form937}, false);
exports["alpha-convert"] = $g936}
var $g990 = $g2["last-setter"], $g991 = $g2.last, $g992, $g993, $g994 = $g32("inline", function $g1032 ($form995, $env996)
{var $g1028;
if ($T($g33($form995, $g34)))
$g1028 = $g35($g36($form995))
else $g1028 = false;
if ($T($g1028))
if ($T($g33($g37($form995), $g38)))
{var $g997 = $g43($g37($form995)), $g998 = $g47($g997, "%method"), $g1029;
if ($T($g998))
$g1029 = $g998
else $g1029 = $g47($g997, "%set");
if ($T($g1029))
{$g990($form995, $g994($g991($form995), $env996));
return $form995}
else if ($T($g47($g997, "%bind")))
{var $__999 = $form995[0], $binding1000 = $form995[1], $body1001 = $form995[2];
$g935($binding1000, $g994($g54($binding1000), $env996));
$g990($form995, $g994($body1001, $env996));
return $form995}
else if ($T($g47($g997, "%try")))
{var $__1002 = $form995[0], $body1003 = $form995[1], $rvar1004 = $form995[2], $rcatch1005 = $form995[3];
$g935($form995, $g994($body1003, $env996));
$g990($form995, $g994($rcatch1005, $env996));
return $form995}
else {var $g1006 = $g47($g997, "%begin"), $g1030;
if ($T($g1006))
$g1030 = $g1006
else {var $g1007 = $g47($g997, "%if");
if ($T($g1007))
$g1030 = $g1007
else {var $g1008 = $g47($g997, "%while");
if ($T($g1008))
$g1030 = $g1008
else {var $g1009 = $g47($g997, "%array");
if ($T($g1009))
$g1030 = $g1009
else {var $g1010 = $g47($g997, "%object");
if ($T($g1010))
$g1030 = $g1010
else {var $g1011 = $g47($g997, "%get-property");
if ($T($g1011))
$g1030 = $g1011
else {var $g1012 = $g47($g997, "%native-call");
if ($T($g1012))
$g1030 = $g1012
else {var $g1013 = $g47($g997, "%infix");
if ($T($g1013))
$g1030 = $g1013
else {var $g1014 = $g47($g997, "%plus");
if ($T($g1014))
$g1030 = $g1014
else {var $g1015 = $g47($g997, "%minus");
if ($T($g1015))
$g1030 = $g1015
else {var $g1016 = $g47($g997, "%times");
if ($T($g1016))
$g1030 = $g1016
else $g1030 = $g47($g997, "%divide")}}}}}}}}}};
if ($T($g1030))
return $g42([$g37($form995)], $g151($g50($g994, $env996), $g203($form995)))
else {var $g1017 = $g47($g997, "%native"), $g1031;
if ($T($g1017))
$g1031 = $g1017
else {var $g1018 = $g47($g997, "%native-name");
if ($T($g1018))
$g1031 = $g1018
else $g1031 = $g47($g997, "%define")};
if ($T($g1031))
return $form995
else {var $name1019 = $g43($g37($form995)), $g1020 = $g81($env996, "definition-names", $name1019), $definition_name1021;
if ($T($g1020))
$definition_name1021 = $g1020
else $definition_name1021 = $name1019;
var $g1022;
if ($T($g993($g81($env996, "module"), $definition_name1021)))
$g1022 = $g81($env996, "module", "functions", $definition_name1021)
else $g1022 = false;
var $definition1027;
if ($T($g1022))
$definition1027 = $g1022
else {var $g1023 = $g756($definition_name1021, $env996);
if ($T($g1023))
{var $modulesimport_name1024 = $g1023, $module1025 = $modulesimport_name1024[0], $import_name1026 = $modulesimport_name1024[1];
if ($T($g993($module1025, $import_name1026)))
$definition1027 = $g81($module1025, "functions", $import_name1026)
else $definition1027 = false}
else $definition1027 = false};
if ($T($definition1027))
return $g992($definition1027, $g203($form995), $env996)
else return $g151($g50($g994, $env996), $form995)}}}}
else return $g151($g50($g994, $env996), $form995)
else return $form995}, false)
$g993 = $g32("inlineQ", function $g1035 ($module1033, $name1034)
{return $g284($g87($g47, $name1034), $g81($module1033, "inline"))}, false)
{var $g1038 = $g2[">="];
$g992 = $g32("inline_definition", function $g1061 ($definition1039, $values1040, $env1041)
{var $__1042 = $definition1039[0], $rarguments1043 = $definition1039[1], $body1044 = $definition1039[2], $body1047 = $g141(function $g1062 ($body1045, $argument1046)
{return [$g22("%bind"), [$argument1046, $argument1046], $body1045]}, $body1044, $g188($rarguments1043)), $inlined1048 = $g994($body1047, $env1041), $prepared1049 = $g936($inlined1048, $env1041), $g1050 = $g48($rarguments1043), $i1051 = 0;
while ($T($g35($g1038($i1051, $g1050))))
{(function $g1063 ($i1052)
{var $argument1053 = $g121($rarguments1043, $i1052), $value1054 = $g121($values1040, $i1052), $g1055 = $g874($argument1053), $module_name1056 = $g1055[0], $name1057 = $g1055[1];
$g867($env1041, $module_name1056, $name1057);
var $g1059 = $g81($env1041, "identifiers", $module_name1056, $name1057), $g1060;
if ($T($value1054))
$g1060 = $g994($value1054, $env1041)
else $g1060 = [$g22("%native"), "undefined"];
return $g881($g1059, $g1060)})($i1051);
$i1051 = ($i1051 + 1)};
false;
var $result1058 = $g936($body1047, $env1041);
$g900($rarguments1043, $env1041);
return $result1058}, false)}
{var $g1064 = $g2["<number>"], $g1065 = $g2["<boolean>"], $g1066 = $g2["<keyword>"], $g1067 = $g32("atomicQ", function $g1069 ($expression1068)
{return $g284($g87($g33, $expression1068), [$g1064, $g1065, $g474, $g38, $g1066])}, false);
exports["atomic?"] = $g1067}
{var $g1070, $g1071 = $g32("normalize_term", function $g1073 ($expression1072)
{return $g1070($expression1072, $g649)}, false);
exports["normalize-term"] = $g1071}
{var $g1076, $g1077, $g1078;
$g1070 = $g32("normalize", function $g1113 ($exp1079, $k1080)
{var $g1111;
if ($T($g33($exp1079, $g34)))
$g1111 = $g35($g36($exp1079))
else $g1111 = false;
if ($T($g1111))
{var $g1081 = $g43($g37($exp1079));
if ($T($g47($g1081, "%method")))
{var $__1082 = $exp1079[0], $rarguments1083 = $exp1079[1], $body1084 = $exp1079[2];
return $k1080([$g22("%method"), $rarguments1083, $g1071($body1084)])}
else if ($T($g47($g1081, "%begin")))
{var $__1085 = $exp1079[0], $exp11086 = $exp1079[1], $et1087 = $SL.call($exp1079, 2);
if ($T($g36($et1087)))
return $g1070($exp11086, $k1080)
else return $g1070($exp11086, function $g1114 ($aexp11088)
{return [$g22("%begin"), $aexp11088, $g1070($g42([$g22("%begin")], $et1087), $k1080)]})}
else if ($T($g47($g1081, "%bind")))
{var $__1089 = $exp1079[0], $g1090 = $exp1079[1], $rvar1091 = $g1090[0], $value1092 = $g1090[1], $body1093 = $exp1079[2];
return $g1070($value1092, function $g1115 ($avalue1094)
{return [$g22("%bind"), [$rvar1091, $avalue1094], $g1070($body1093, $k1080)]})}
else if ($T($g47($g1081, "%if")))
{var $__1095 = $exp1079[0], $test1096 = $exp1079[1], $then1097 = $exp1079[2], $relse1098 = $exp1079[3];
return $g1076($test1096, function $g1116 ($atest1099)
{return $k1080([$g22("%if"), $atest1099, $g1071($then1097), $g1071($relse1098)])})}
else if ($T($g47($g1081, "%while")))
{var $__1100 = $exp1079[0], $test1101 = $exp1079[1], $body1102 = $exp1079[2], $g1112;
if ($T($g1077($test1101)))
$g1112 = [$g22("%while"), true, [$g22("%begin"), $g1071([$g22("%if"), $test1101, $g1071($body1102), [$g22("%native"), "break"], false])]]
else $g1112 = [$g22("%while"), $g1071($test1101), $g1071($body1102)];
return $k1080($g1112)}
else if ($T($g47($g1081, "%try")))
{var $__1103 = $exp1079[0], $body1104 = $exp1079[1], $rvar1105 = $exp1079[2], $rcatch1106 = $exp1079[3];
return $k1080([$g22("%try"), $g1071($body1104), $rvar1105, $g1071($rcatch1106)])}
else if ($T($g47($g1081, "%set")))
{var $__1107 = $exp1079[0], $rvar1108 = $exp1079[1], $value1109 = $exp1079[2];
return $g1076($value1109, function $g1117 ($avalue1110)
{return $k1080([$g22("%set"), $rvar1108, $avalue1110])})}
else if ($T($g1077($exp1079)))
return $g1078($exp1079, $k1080)
else return $k1080($g151($g1071, $exp1079))}
else return $k1080($exp1079)}, false)}
{var $g1118;
$g1076 = $g32("normalize_value", function $g1122 ($exp1119, $k1120)
{if ($T($g1077($exp1119)))
return $g1118($exp1119, $k1120)
else {var $g1121;
if ($T($g33($exp1119, $g34)))
$g1121 = $g151($g1071, $exp1119)
else $g1121 = $exp1119;
return $k1120($g1121)}}, false)}
$g1077 = $g32("contains_statementsQ", function $g1136 ($exp1128)
{var $g1134;
if ($T($g33($exp1128, $g34)))
$g1134 = $g35($g36($exp1128))
else $g1134 = false;
if ($T($g1134))
{var $g1129 = $g43($g37($exp1128)), $g1130 = $g47($g1129, "%begin"), $g1135;
if ($T($g1130))
$g1135 = $g1130
else {var $g1131 = $g47($g1129, "%if");
if ($T($g1131))
$g1135 = $g1131
else {var $g1132 = $g47($g1129, "%while");
if ($T($g1132))
$g1135 = $g1132
else {var $g1133 = $g47($g1129, "%bind");
if ($T($g1133))
$g1135 = $g1133
else $g1135 = $g47($g1129, "%try")}}};
if ($T($g1135))
return true
else if ($T($g47($g1129, "%set")))
return $g1077($g991($exp1128))
else if ($T($g47($g1129, "%method")))
return false
else return $g284($g1077, $exp1128)}}, false)
$g1118 = $g32("normalizeT", function $g1141 ($exp1137, $k1138)
{return $g1070($exp1137, function $g1142 ($aexp1139)
{if ($T($g1067($aexp1139)))
return $k1138($aexp1139)
else {var $t1140 = $g65();
return [$g22("%bind"), [$t1140, $aexp1139], $k1138($t1140)]}})}, false)
var $g1143 = $g32("normalizeTT", function $g1146 ($expt1144, $k1145)
{if ($T($g36($expt1144)))
return $k1145([])
else return $g1078($expt1144, $k1145)}, false)
$g1078 = $g32("normalize_all", function $g1151 ($exp1147, $k1148)
{return $g1118($g37($exp1147), function $g1152 ($t1149)
{return $g1143($g203($exp1147), function $g1153 ($tt1150)
{return $k1148($g42([$t1149], $tt1150))})})}, false)
var $g1156 = $g2["third-setter"], $g1157 = $g32("wrap_value", function $g1163 ($exp1158, $wrapper1159)
{if ($T($g33($exp1158, $g34)))
{var $g1160 = $g43($g37($exp1158)), $g1161 = $g47($g1160, "%begin"), $g1162;
if ($T($g1161))
$g1162 = $g1161
else $g1162 = $g47($g1160, "%bind");
if ($T($g1162))
{$g990($exp1158, $g1157($g991($exp1158), $wrapper1159));
return $exp1158}
else if ($T($g47($g1160, "%if")))
{$g1156($exp1158, $g1157($g287($exp1158), $wrapper1159));
$g990($exp1158, $g1157($g991($exp1158), $wrapper1159));
return $exp1158}
else if ($T($g47($g1160, "%while")))
return [$g22("%begin"), $exp1158, $g1157(false, $wrapper1159)]
else if ($T($g47($g1160, "%try")))
{$g935($exp1158, $g1157($g54($exp1158), $wrapper1159));
$g990($exp1158, $g1157($g991($exp1158), $wrapper1159));
return $exp1158}
else return $g42($wrapper1159, [$exp1158])}
else return $g42($wrapper1159, [$exp1158])}, false)
var $g1164 = $g32("add_explicit_return", function $g1166 ($exp1165)
{return $g1157($exp1165, [$g22("%return")])}, false)
var $g1167 = $g2["member?"], $g1168 = $g32("statementQ", function $g1170 ($exp1169)
{if ($T($g33($exp1169, $g34)))
if ($T($g35($g36($exp1169))))
return $g1167($g37($exp1169), [$g22("%if"), $g22("%while"), $g22("%begin"), $g22("%bind"), $g22("%try")])}, false)
var $g1171 = $g32("add_explicit_true", function $g1173 ($exp1172)
{return [[$g22("%native"), "$T"], $exp1172]}, false)
{var $g1176 = $g2["first-setter"], $g1177 = $g32("transform_statements", function $g1198 ($exp1178, $env1179)
{if ($T($g33($exp1178, $g34)))
{var $g1180 = $g43($g37($exp1178));
if ($T($g47($g1180, "%method")))
{$g990($exp1178, $g1164($g1177($g991($exp1178), $env1179)));
return $exp1178}
else if ($T($g47($g1180, "%begin")))
{var $__1181 = $exp1178[0], $exps1182 = $SL.call($exp1178, 1);
return $g112($g151($g50($g1177, $env1179), $exps1182))}
else if ($T($g47($g1180, "%bind")))
{var $__1183 = $exp1178[0], $g1184 = $exp1178[1], $rvar1185 = $g1184[0], $value1186 = $g1184[1], $body1187 = $exp1178[2];
if ($T($g1168($value1186)))
return [$g22("%bind"), [$rvar1185, false], [$g22("%begin"), $g1157($g1177($value1186, $env1179), [$g22("%set"), $rvar1185]), $g1177($body1187, $env1179)]]
else return [$g22("%bind"), [$rvar1185, $g1177($value1186, $env1179)], $g1177($body1187, $env1179)]}
else if ($T($g47($g1180, "%if")))
{var $__1188 = $exp1178[0], $test1189 = $exp1178[1], $then1190 = $exp1178[2], $relse1191 = $exp1178[3];
return [$g22("%if"), $g1171($test1189), $g1177($then1190, $env1179), $g1177($relse1191, $env1179)]}
else if ($T($g47($g1180, "%while")))
{$g935($exp1178, $g1171($g54($exp1178)));
$g1156($exp1178, $g1177($g287($exp1178), $env1179));
return $exp1178}
else if ($T($g47($g1180, "%try")))
{$g935($exp1178, $g1177($g54($exp1178), $exp1178));
$g990($exp1178, $g1177($g991($exp1178), $env1179));
return $exp1178}
else if ($T($g47($g1180, "%set")))
{var $__1192 = $exp1178[0], $identifier1193 = $exp1178[1], $value1194 = $exp1178[2], $valuet1195 = $g1177($value1194, $env1179), $definition_name1196 = $g81($env1179, "definition-names", $g43($identifier1193)), $g1197;
if ($T($definition_name1196))
$g1197 = $g1167($definition_name1196, $g81($env1179, "module", "exports"))
else $g1197 = false;
if ($T($g1197))
{$g1176($exp1178, $g22("%begin"));
$g935($exp1178, [$g22("%set"), $identifier1193, $valuet1195]);
$g1156($exp1178, [$g22("%set"), [$g22("%get-property"), [$g22("%native"), "exports"], $definition_name1196], $identifier1193])}
else $g1156($exp1178, $valuet1195);
return $exp1178}
else if ($T($g47($g1180, "%define")))
return [$g22("%var"), [$g991($exp1178), false]]
else return $g151($g50($g1177, $env1179), $exp1178)}
else return $exp1178}, false);
exports["transform-statements"] = $g1177}
{var $g1199, $g1200 = $g32("lift_symbols", function $g1203 ($exp1201, $env1202)
{return $g1199($exp1201, $env1202, $g649)}, false);
exports["lift-symbols"] = $g1200}
{var $g1210, $g1211, $g1212, $g1213 = $g2["<hash-symbol>"];
$g1199 = $g32("lift_symbol", function $g1253 ($exp1214, $env1215, $k1216)
{var $g1250;
if ($T($g33($exp1214, $g34)))
$g1250 = $g35($g36($exp1214))
else $g1250 = false;
if ($T($g1250))
{var $g1217 = $g43($g37($exp1214));
if ($T($g47($g1217, "%bind")))
{var $__1218 = $exp1214[0], $g1219 = $exp1214[1], $rvar1220 = $g1219[0], $value1221 = $g1219[1], $body1222 = $exp1214[2];
return $g1199($value1221, $env1215, function $g1254 ($lvalue1223, $env1224)
{return $g1199($body1222, $env1224, function $g1255 ($lbody1225, $env1226)
{return $k1216([$g22("%bind"), [$rvar1220, $lvalue1223], $lbody1225], $env1226)})})}
else {var $g1227 = $g47($g1217, "%method"), $g1251;
if ($T($g1227))
$g1251 = $g1227
else $g1251 = $g47($g1217, "%set");
if ($T($g1251))
{var $m1228 = $exp1214[0], $e11229 = $exp1214[1], $e21230 = $exp1214[2];
return $g1199($e21230, $env1215, function $g1256 ($le21231, $env1232)
{return $k1216([$m1228, $e11229, $le21231], $env1232)})}
else {var $g1233 = $g47($g1217, "%begin"), $g1252;
if ($T($g1233))
$g1252 = $g1233
else {var $g1234 = $g47($g1217, "%if");
if ($T($g1234))
$g1252 = $g1234
else $g1252 = $g47($g1217, "%while")};
if ($T($g1252))
{var $m1235 = $exp1214[0], $et1236 = $SL.call($exp1214, 1);
return $g1210($et1236, $env1215, function $g1257 ($let1237, $env1238)
{return $k1216($g42([$m1235], $let1237), $env1238)})}
else if ($T($g47($g1217, "%try")))
{var $__1239 = $exp1214[0], $e11240 = $exp1214[1], $v1241 = $exp1214[2], $e21242 = $exp1214[3];
return $g1210([$e11240, $e21242], $env1215, function $g1258 ($let1243, $env1244)
{var $le11245 = $let1243[0], $le21246 = $let1243[1];
return $k1216([$g22("%try"), $le11245, $v1241, $le21246], $env1244)})}
else if ($T($g47($g1217, "symbol")))
{var $__1247 = $exp1214[0], $name1248 = $exp1214[1];
return $g1211($name1248, $exp1214, "symbol", $env1215, $k1216)}
else return $g1212($exp1214, $env1215, $k1216)}}}
else {var $g1249 = $exp1214;
if ($T($g33($g1249, $g1066)))
return $g1211($g43($exp1214), $exp1214, "keyword", $env1215, $k1216)
else if ($T($g33($g1249, $g1213)))
return $g1211($g43($exp1214), $exp1214, "hash", $env1215, $k1216)
else return $k1216($exp1214, $env1215)}}, false)}
$g1211 = $g32("lift_value", function $g1268 ($name1260, $value1261, $type1262, $env1263, $k1264)
{var $g1265 = $g81($env1263, "lifted", $type1262, $name1260);
if ($T($g1265))
{var $t1266 = $g1265;
return $k1264($t1266, $env1263)}
else {var $t1267 = $g62($env1263, "lifted", $type1262, $name1260, $g65());
return [$g22("%bind"), [$t1267, $value1261], $k1264($t1267, $env1263)]}}, false)
$g1210 = $g32("lift_symbolT", function $g1272 ($expt1269, $env1270, $k1271)
{if ($T($g36($expt1269)))
return $k1271([], $env1270)
else return $g1212($expt1269, $env1270, $k1271)}, false)
$g1212 = $g32("lift_symbolTT", function $g1280 ($exp1273, $env1274, $k1275)
{return $g1199($g37($exp1273), $env1274, function $g1281 ($t1276, $env1277)
{return $g1210($g203($exp1273), $env1277, function $g1282 ($tt1278, $env1279)
{return $k1275($g42([$t1276], $tt1278), $env1279)})})}, false)
var $g1283, $g1284 = $g32("flatten_begins", function $g1289 ($exps1285)
{return $g152($g42, $g151(function $g1290 ($exp1286)
{var $flattened1287 = $g1283($exp1286), $g1288;
if ($T($g33($flattened1287, $g34)))
if ($T($g35($g36($flattened1287))))
$g1288 = $g47($g37($flattened1287), $g22("%begin"))
else $g1288 = false
else $g1288 = false;
if ($T($g1288))
return $g203($flattened1287)
else return [$flattened1287]}, $exps1285))}, false)
var $g1291 = $g32("varQ", function $g1293 ($exp1292)
{if ($T($g39($exp1292)))
return $g47($g37($exp1292), $g22("%var"))}, false)
var $g1294 = $g32("setQ", function $g1296 ($exp1295)
{if ($T($g39($exp1295)))
return $g47($g37($exp1295), $g22("%set"))}, false)
var $g1297 = $g32("methodQ", function $g1299 ($exp1298)
{if ($T($g39($exp1298)))
return $g47($g37($exp1298), $g22("%method"))}, false)
var $g1300 = $g32("flatten_vars", function $g1311 ($exps1301)
{return $g141(function $g1312 ($result1302, $exp1303)
{var $previous1304;
if ($T($g35($g36($result1302))))
$previous1304 = $g991($result1302)
else $previous1304 = false;
var $previous_varq1305;
if ($T($previous1304))
$previous_varq1305 = $g1291($previous1304)
else $previous_varq1305 = false;
var $g1310;
if ($T($previous_varq1305))
$g1310 = $g1291($exp1303)
else $g1310 = false;
if ($T($g1310))
{$g86(function $g1313 ($binding1306)
{return $g285($g991($result1302), $binding1306)}, $g203($exp1303));
return $result1302}
else {var $mergeq1307;
if ($T($previous_varq1305))
$mergeq1307 = $g1294($exp1303)
else $mergeq1307 = false;
var $binding1308;
if ($T($mergeq1307))
$binding1308 = $g991($g991($result1302))
else $binding1308 = false;
var $identifier1309;
if ($T($mergeq1307))
$identifier1309 = $g54($exp1303)
else $identifier1309 = false;
if ($T($g47($g37($binding1308), $identifier1309)))
{$g935($binding1308, $g287($exp1303));
return $result1302}
else return $g42($result1302, [$exp1303])}}, [], $exps1301)}, false)
{$g1283 = $g32("flatten_statements", function $g1327 ($exp1317)
{if ($T($g33($exp1317, $g34)))
{var $g1318 = $g43($g37($exp1317)), $g1319 = $g47($g1318, "%method"), $g1326;
if ($T($g1319))
$g1326 = $g1319
else {var $g1320 = $g47($g1318, "%while");
if ($T($g1320))
$g1326 = $g1320
else $g1326 = $g47($g1318, "%set")};
if ($T($g1326))
{$g990($exp1317, $g1283($g991($exp1317)));
return $exp1317}
else if ($T($g47($g1318, "%begin")))
{var $__1321 = $exp1317[0], $exps1322 = $SL.call($exp1317, 1);
return $g112($g1300($g1284($exps1322)))}
else if ($T($g47($g1318, "%bind")))
{var $__1323 = $exp1317[0], $binding1324 = $exp1317[1], $body1325 = $exp1317[2];
return $g1283([$g22("%begin"), [$g22("%var"), $binding1324], $body1325])}
else if ($T($g47($g1318, "%if")))
{$g1156($exp1317, $g1283($g287($exp1317)));
$g990($exp1317, $g1283($g991($exp1317)));
return $exp1317}
else if ($T($g47($g1318, "%try")))
{$g935($exp1317, $g1283($g54($exp1317)));
$g990($exp1317, $g1283($g991($exp1317)));
return $exp1317}
else return $g151($g1283, $exp1317)}
else return $exp1317}, false);
exports["flatten-statements"] = $g1283}
var $g1328 = $g13("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var $g1329 = $g32("fill_zeros", function $g1331 ($rstring1330)
{return $g42($g286("0000", 0, (4 - $g48($rstring1330))), $rstring1330)}, false)
var $g1333 = $g2.join, $g1334 = $g2["<"], $g1335 = $g2["as-hex-string"], $g1336 = $g2["char-code"], $g1337 = $g2["as-array"], $g1338 = $g32("escape_string", function $g1344 ($rstring1339)
{return $g1333($g151(function $g1345 ($rchar1340)
{var $g1341 = $g81($g1328, $rchar1340);
if ($T($g1341))
{var $escaped1342 = $g1341;
return $g42("\\", $escaped1342)}
else {var $code1343 = $g1336($rchar1340);
if ($T($g1334(31, $code1343, 127)))
return $rchar1340
else return $g42("\\u", $g1329($g1335($code1343)))}}, $g1337($rstring1339)), "")}, false)
var $g1346 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var $g1347 = $g13("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
{var $g1348 = $g10.match;
$g63 = $g32("escape_name", function $g1352 ($name1349)
{if ($T($g1167($name1349, $g1346)))
return $g42("R", $name1349)
else {var $chars1351 = $g151(function $g1353 ($rchar1350)
{if ($T($g660($g1347, $rchar1350)))
return $g81($g1347, $rchar1350)
else if ($T($g1348("\\w", $rchar1350)))
return $rchar1350
else return $g42("Z", $g64($g1336($rchar1350)))}, $g1337($name1349));
return $g1333($chars1351, "")}}, false)}
var $g1354 = $g32("valid_js_nameQ", function $g1356 ($identifier1355)
{if ($T($g35($g1167($identifier1355, $g1346))))
return $g1348("^\\w+$", $identifier1355)}, false)
var $g1359, $g1360 = $g2["as-uppercase"], $g1361 = $g2.description, $g1362 = $g32("compile_js", function $g1367 ($exp1363, $env1364)
{var $g1365 = $exp1363;
if ($T($g33($g1365, $g34)))
if ($T($g36($exp1363)))
return $g465($g466($g467, $g470, "empty expression"))
else return $g1359($exp1363, $env1364)
else if ($T($g33($g1365, $g1064)))
return $g64($exp1363)
else if ($T($g33($g1365, $g1065)))
if ($T($exp1363))
return "true"
else return "false"
else if ($T($g33($g1365, $g474)))
return $g42("\"", $g1338($exp1363), "\"")
else if ($T($g33($g1365, $g1213)))
return $g42("$", $g1360($g43($exp1363)))
else if ($T($g33($g1365, $g1066)))
return $g42("$K(\"", $g43($exp1363), "\")")
else if ($T($g33($g1365, $g38)))
{var $g1366 = $exp1363;
if ($T($g47($g1366, $g22("%this-method"))))
return $g1362($g81($env1364, "current-method"), $env1364)
else if ($T($g47($g1366, $g22("%all-arguments"))))
return "arguments"
else if ($T($g81($exp1363, "generated?")))
return $g42("$", $g43($exp1363))
else return $g63($g43($exp1363))}
else return $g1361($exp1363)}, false)
{var $g1375;
$g1359 = $g32("compile_js_exp", function $g1458 ($exp1376, $env1377)
{var $name1378 = $g43($g37($exp1376)), $g1379 = $name1378;
if ($T($g47($g1379, "%native-call")))
{var $__1380 = $exp1376[0], $operator1381 = $exp1376[1], $values1382 = $SL.call($exp1376, 2);
return $g42($operator1381, $g1375($values1382, $env1377))}
else if ($T($g47($g1379, "%infix")))
{var $__1383 = $exp1376[0], $operator1384 = $exp1376[1], $values1385 = $SL.call($exp1376, 2);
return $g42("(", $g1333($g151($g50($g1362, $env1377), $values1385), $g42(" ", $operator1384, " ")), ")")}
else {var $g1386 = $g47($g1379, "%plus"), $g1433;
if ($T($g1386))
$g1433 = $g1386
else {var $g1387 = $g47($g1379, "%minus");
if ($T($g1387))
$g1433 = $g1387
else {var $g1388 = $g47($g1379, "%times");
if ($T($g1388))
$g1433 = $g1388
else $g1433 = $g47($g1379, "%divide")}};
if ($T($g1433))
{var $g1434 = $g22("%infix"), $g1389 = $name1378, $g1435;
if ($T($g47($g1389, "%plus")))
$g1435 = "+"
else if ($T($g47($g1389, "%minus")))
$g1435 = "-"
else if ($T($g47($g1389, "%times")))
$g1435 = "*"
else if ($T($g47($g1389, "%divide")))
$g1435 = "/"
else $g1435 = false;
var $g1436 = [$g1434, $g1435], $g1437 = $g203($exp1376), $g1438 = $g42($g1436, $g1437);
return $g1359($g1438, $env1377)}
else if ($T($g47($g1379, "%array")))
{var $__1390 = $exp1376[0], $elements1391 = $SL.call($exp1376, 1);
return $g42("[", $g1333($g151($g50($g1362, $env1377), $elements1391), ", "), "]")}
else if ($T($g47($g1379, "%object")))
{var $key_values1392 = $g203($exp1376), $entries1393 = [], $g1394 = ($g48($key_values1392) / 2), $i1395 = 0;
while ($T($g35($g1038($i1395, $g1394))))
{(function $g1459 ($i1396)
{var $name1397 = $g121($key_values1392, ($i1396 * 2)), $g1439;
if ($T($g1354($name1397)))
$g1439 = $name1397
else $g1439 = $g1362($name1397, $env1377);
var $g1440 = $g1362($g121($key_values1392, (($i1396 * 2) + 1)), $env1377), $g1441 = $g42($g1439, ":", $g1440);
return $g285($entries1393, $g1441)})($i1395);
$i1395 = ($i1395 + 1)};
false;
return $g42("{", $g1333($entries1393, ",\n"), "}")}
else if ($T($g47($g1379, "%if")))
{var $__1398 = $exp1376[0], $test1399 = $exp1376[1], $then1400 = $exp1376[2], $relse1401 = $exp1376[3], $g1442 = $g1362($test1399, $env1377), $g1443 = $g1362($then1400, $env1377), $g1444;
if ($T($relse1401))
$g1444 = $g35($g119($relse1401, [$g22("%return"), false]))
else $g1444 = false;
var $g1445;
if ($T($g1444))
$g1445 = $g42("\nelse ", $g1362($relse1401, $env1377))
else $g1445 = "";
return $g42("if (", $g1442, ")\n", $g1443, $g1445)}
else if ($T($g47($g1379, "%while")))
{var $__1402 = $exp1376[0], $test1403 = $exp1376[1], $body1404 = $exp1376[2];
return $g42("while (", $g1362($test1403, $env1377), ")\n", $g1362($body1404, $env1377))}
else if ($T($g47($g1379, "%try")))
{var $__1405 = $exp1376[0], $body1406 = $exp1376[1], $rvar1407 = $exp1376[2], $rcatch1408 = $exp1376[3];
return $g42("try {", $g1362($body1406, $env1377), "}\n", "catch (", $g1362($rvar1407, $env1377), ")\n", "{", $g1362($rcatch1408, $env1377), "}")}
else if ($T($g47($g1379, "%return")))
return $g42("return ", $g1362($g54($exp1376), $env1377))
else if ($T($g47($g1379, "%begin")))
return $g42("{", $g1333($g151($g50($g1362, $env1377), $g203($exp1376)), ";\n"), "}")
else if ($T($g47($g1379, "%set")))
{var $__1409 = $exp1376[0], $rvar1410 = $exp1376[1], $value1411 = $exp1376[2];
return $g42($g1362($rvar1410, $env1377), " = ", $g1362($value1411, $env1377))}
else if ($T($g47($g1379, "%method")))
{var $__1412 = $exp1376[0], $rarguments1413 = $exp1376[1], $body1414 = $exp1376[2], $name1415 = $g65(), $previous_method1416 = $g81($env1377, "current-method"), $g1446 = $g1362($name1415, $env1377), $g1447 = $g1333($g151($g50($g1362, $env1377), $rarguments1413), ", ");
$g62($env1377, "current-method", $name1415);
var $bodyt1417 = $g1362($body1414, $env1377);
$g62($env1377, "current-method", $previous_method1416);
var $g1448;
if ($T($g39($body1414)))
$g1448 = $g47($g37($body1414), $g22("%begin"))
else $g1448 = false;
var $g1449;
if ($T($g1448))
$g1449 = $bodyt1417
else $g1449 = $g42("{", $bodyt1417, "}");
return $g42("function ", $g1446, " (", $g1447, ")\n", $g1449)}
else if ($T($g47($g1379, "%var")))
{var $__1418 = $exp1376[0], $bindings1419 = $SL.call($exp1376, 1);
return $g42("var ", $g1333($g151(function $g1460 ($binding1420)
{var $g1421;
if ($T($g33($binding1420, $g34)))
$g1421 = $binding1420
else $g1421 = [$binding1420, false];
var $rvar1422 = $g1421[0], $value1423 = $g1421[1], $g1450 = $g1362($rvar1422, $env1377), $g1451;
if ($T($value1423))
$g1451 = $g42(" = ", $g1362($value1423, $env1377))
else $g1451 = "";
return $g42($g1450, $g1451)}, $bindings1419), ", "))}
else if ($T($g47($g1379, "%native")))
return $g152($g42, $g151(function $g1461 ($e1424)
{if ($T($g33($e1424, $g38)))
return $g1362($e1424)
else return $g64($e1424)}, $g203($exp1376)))
else if ($T($g47($g1379, "%native-name")))
return $g42("\"", $g63($g54($exp1376)), "\"")
else if ($T($g47($g1379, "%get-property")))
{var $__1425 = $exp1376[0], $robject1426 = $exp1376[1], $properties1427 = $SL.call($exp1376, 2), $g1452;
if ($T($g33($robject1426, $g1064)))
$g1452 = $g42("(", $g1362($robject1426, $env1377), ")")
else $g1452 = $g1362($robject1426, $env1377);
var $g1455 = $g141(function $g1462 ($result1428, $property1429)
{var $g1453;
if ($T($g33($property1429, $g474)))
$g1453 = $g1354($property1429)
else $g1453 = false;
var $g1454;
if ($T($g1453))
$g1454 = $g42(".", $property1429)
else $g1454 = $g42("[", $g1362($property1429, $env1377), "]");
return $g42($result1428, $g1454)}, "", $properties1427);
return $g42($g1452, $g1455)}
else {var $rfunction1430 = $exp1376[0], $values1431 = $SL.call($exp1376, 1), $functiont1432 = $g1362($rfunction1430, $env1377), $g1456;
if ($T($g1297($rfunction1430)))
$g1456 = $g42("(", $functiont1432, ")")
else $g1456 = $functiont1432;
var $g1457 = $g1375($values1431, $env1377);
return $g42($g1456, $g1457)}}}, false)}
$g1375 = $g32("compile_js_call", function $g1465 ($values1463, $env1464)
{return $g42("(", $g1333($g151($g50($g1362, $env1464), $values1463), ", "), ")")}, false)
var $g1470 = $K("string"), $g1466 = $g11.read, $g1467 = $g8["<string-stream>"], $g1468 = $g32("read_program", function $g1471 ($source1469)
{return $g1466($g466($g1467, $g1470, $g42("(", $source1469, "\n)")))}, false)
{var $g1472 = $g32("compile_expression", function $g1480 ($exp1473, $env1474)
{return $g141(function $g1481 ($result1475, $namesfn1476)
{var $name1477 = $namesfn1476[0], $fn1478 = $namesfn1476[1], $result1479 = $fn1478($result1475);
return $result1479}, $exp1473, [["source", $g649], ["macroexpanded", $g50($g88, $env1474)], ["lifted defines", $g50($g650, $env1474)], ["defined free variables", $g50($g777, $env1474)], ["alpha-converted", $g50($g936, $env1474)], ["inline", $g50($g994, $env1474)], ["defined free variables after inline", $g50($g793, $env1474)], ["ANF", $g1071], ["lifted symbols", $g50($g1200, $env1474)], ["statements", $g50($g1177, $env1474)], ["flattened", $g1283], ["compiled", $g50($g1362, $env1474)]])}, false);
exports["compile-expression"] = $g1472}
var $g1482 = $g12["resolve-path"], $g1483 = $g32("executable_path", function $g1485 ($module_name1484)
{return $g1482("build", $g42($module_name1484, ".js"))}, false)
var $g1486 = $g32("module_path", function $g1489 ($base_path1487, $module_name1488)
{return $g1482($base_path1487, $g42($module_name1488, ".rm"))}, false)
var $g1490 = $g32("source_path", function $g1492 ($module_name1491)
{return $g1482("src", $g42($module_name1491, ".ralph"))}, false)
var $g1494 = $g12["file-properties"], $g1495 = $g12["file-exists?"], $g1496 = $g32("recompileQ", function $g1503 ($module_name1497)
{if ($T($g35($g81($g14, $module_name1497, "native?"))))
{var $path1498 = $g1483($module_name1497), $g1499 = $g35($g1495($path1498));
if ($T($g1499))
return $g1499
else {var $path21500 = $g1490($module_name1497), $date11501 = $g81($g1494($path1498), "modification-date"), $date21502 = $g81($g1494($path21500), "modification-date");
console.error(">>>", $date11501, "VS", $date21502);
return $g1334($date11501, $date21502)}}}, false)
{var $g1507 = $g2["chain-object"], $g1508, $g1509;
$g594 = $g32("compile_time_import_module", function $g1523 ($env1510, $module_name1511)
{var $g1512 = $SL.call(arguments, 2), $g1513 = $g507($g1512, {options:false}), $options1514 = $g1513.options, $g1520;
if ($T($g47($module_name1511, "ralph/core")))
$g1520 = [$g110, $g722]
else {$g1508($module_name1511);
var $definitions1515 = require($module_name1511), $macros1516 = $g24(), $symbol_macros1517 = $g24();
$g86(function $g1524 ($name1518)
{var $definition1519 = $g81($definitions1515, $name1518);
if ($T($g81($definition1519, "%macro?")))
return $g62($macros1516, $name1518, $definition1519)
else if ($T($g81($definition1519, "%symbol-macro?")))
return $g62($symbol_macros1517, $name1518, $definition1519)}, $g542($g1509, $g776($definitions1515), $options1514));
$g1520 = [$macros1516, $symbol_macros1517]};
var $macros1521 = $g1520[0], $symbol_macros1522 = $g1520[1];
$g1507($g81($env1510, "macros"), $macros1521);
return $g1507($g81($env1510, "symbol-macros"), $symbol_macros1522)}, false)}
{var $g1529 = $g2["remove!"], $g1530 = $g2["as-object"];
$g1509 = $g32("process_names", function $g1549 ($all1531)
{var $g1532 = $SL.call(arguments, 1), $g1533 = $g507($g1532, {only:false,
exclude:false,
prefix:false,
rename:false}), $only1534 = $g1533.only, $exclude1535 = $g1533.exclude, $prefix1536 = $g1533.prefix, $rename1537 = $g1533.rename, $resolve1538 = function $g1550 ($exp1539)
{if ($T($g33($exp1539, $g474)))
return $exp1539
else return $g55($exp1539)}, $g1546;
if ($T($g33($only1534, $g34)))
$g1546 = $g151($resolve1538, $only1534)
else $g1546 = $all1531;
var $names1540 = $g775($g1546), $g1541 = $rename1537, $g1547;
if ($T($g1541))
$g1547 = $g1541
else $g1547 = [];
var $g1548 = $g151($resolve1538, $g1547), $renamings1542 = $g1530($g1548);
$g86($g87($g1529, $names1540), $g151($resolve1538, $exclude1535));
$g827($names1540, $g776($renamings1542));
return $g151(function $g1551 ($name1543)
{var $g1544 = $g81($renamings1542, $name1543);
if ($T($g1544))
{var $renaming1545 = $g1544;
return [$name1543, $renaming1545]}
else if ($T($g33($prefix1536, $g474)))
return [$name1543, $g42($prefix1536, $name1543)]
else return $name1543}, $names1540)}, false)}
{var $g1553;
$g595 = $g32("import_module", function $g1559 ($module1554, $module_name1555)
{var $options1556 = $SL.call(arguments, 2), $g1557 = $g1553($module_name1555);
if ($T($g1557))
{var $other_module1558 = $g1557;
$g881($g81($module1554, "imports"), [$other_module1558, $g542($g1509, $g81($other_module1558, "exports"), $options1556)]);
$g881($g81($module1554, "dependencies"), $module_name1555);
return $other_module1558}
else return $g465($g42("unable to import module '", $module_name1555, "'"))}, false)}
{var $g1563;
$g1553 = $g32("find_module", function $g1568 ($module_name1564)
{var $g1565 = $g1508($module_name1564);
if ($T($g1565))
return $g1565
else {var $g1566 = $g81($g14, $module_name1564);
if ($T($g1566))
return $g1566
else {var $g1567 = $g1563("build", $module_name1564);
if ($T($g1567))
return $g1567
else return $g1563("src", $module_name1564)}}}, false)}
{var $g1573 = $K("name"), $g1569 = $g12["read-file"];
$g1563 = $g32("read_module", function $g1574 ($base_path1570, $module_name1571)
{var $path1572 = $g1486($base_path1570, $module_name1571);
if ($T($g1495($path1572)))
return $g542($g87($g466, $g17, $g1573), $g1466($g466($g1467, $g1470, $g1569($path1572))))}, false)}
{var $g1587 = $K("module"), $g1588 = $K("exports"), $g1589 = $K("inline"), $g1590 = $K("dependencies"), $g1576 = $g12["write-file"];
$g1508 = $g32("compile_module", function $g1591 ($module_name1577)
{if ($T($g35($g660($g14, $module_name1577))))
{var $g1578 = $g1563("src", $module_name1577);
if ($T($g1578))
{var $module1579 = $g1578;
$g62($g14, $module_name1577, $module1579)}};
if ($T($g1496($module_name1577)))
{if ($T($g35($g1495($g1490($module_name1577)))))
$g465($g42("unable to compile module '", $module_name1577, "'"));
var $module1580 = $g466($g17, $g1573, $module_name1577), $env1581 = $g466($g25, $g1587, $module1580), $source1582 = $g1569($g1490($module_name1577)), $program1583 = $g1468($source1582), $result1584 = "";
$g62($g14, $module_name1577, $module1580);
$g594($env1581, "ralph/core");
if ($T($g35($g47($module_name1577, "ralph/core"))))
{$g595($module1580, "ralph/core");
$g881($program1583, $g596("ralph/core", $env1581))};
$g86(function $g1592 ($expression1585)
{var $code1586 = $g1472($expression1585, $env1581);
return $result1584 = $g42($result1584, $code1586, "\n")}, $program1583);
$g1576($g1483($module_name1577), $result1584);
$g1576($g1486("build", $module_name1577), $g1361([$module_name1577, $g1588, $g81($module1580, "exports"), $g1589, $g81($module1580, "inline"), $g1590, $g81($module1580, "dependencies")]));
return $module1580}}, false);
exports["compile-module"] = $g1508}
{var $g1595 = $g32("analyze_dependencies", function $g1604 ($module_name1596)
{var $g1597 = $g1553($module_name1596);
if ($T($g1597))
{var $module1598 = $g1597;
$g62($g14, $module_name1596, $module1598);
var $g1599 = $module1598, $dependencies1600 = $g1599.dependencies, $result1601 = $g120($dependencies1600);
$g86(function $g1605 ($dependency1602)
{return $g86(function $g1606 ($sub_dependency1603)
{if ($T($g1167($sub_dependency1603, $result1601)))
$g1529($result1601, $sub_dependency1603);
return $g881($result1601, $sub_dependency1603)}, $g1595($dependency1602))}, $dependencies1600);
return $result1601}
else return $g465($g42("unable to find-module '", $module_name1596, "'"))}, false);
exports["analyze-dependencies"] = $g1595}
