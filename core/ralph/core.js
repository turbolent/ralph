false
{var $g1 = Object;
exports["<object>"] = $g1}
{var $g2 = String;
exports["<string>"] = $g2}
{var $g3 = Number;
exports["<number>"] = $g3}
{var $g4 = Array;
exports["<array>"] = $g4}
{var $g5 = Boolean;
exports["<boolean>"] = $g5}
{var $g6 = Function;
exports["<function>"] = $g6}
{var $g7 = Error;
exports["<error>"] = $g7}
{var $g8 = function $g12 ($name9, $rfunction10, $setterq11)
{$rfunction10["%name"] = $name9;
$rfunction10["%setter?"] = $setterq11;
return $rfunction10};
exports["%make-function"] = $g8}
{var $g13 = $g8("trueQ", function $g15 ($value14)
{return (($value14 != null) && ($value14 !== false))}, false);
exports["true?"] = $g13}
$T = $g13
{var $g16 = $g8("not", function $g18 ($value17)
{return !($g13($value17))}, false);
exports.not = $g16}
{var $g19 = $g8("size", function $g21 ($robject20)
{return (($robject20 || false).length || 0)}, false);
exports.size = $g19}
$SL = [].slice
{var $g22 = $g8("inc", function $g24 ($rnumber23)
{return ($rnumber23 + 1)}, false);
exports.inc = $g22}
{var $g25 = $g8("dec", function $g27 ($rnumber26)
{return ($rnumber26 - 1)}, false);
exports.dec = $g25}
{var $g28 = $g8("binaryEE", function $g31 ($object129, $object230)
{return ($object129 === $object230)}, false);
exports["binary=="] = $g28}
{var $g32 = $g8("Minherit", function $g35 ($rclass33, $superclass34)
{$rclass33.prototype.__proto__ = $superclass34.prototype;
$rclass33.prototype.__super__ = $superclass34;
return $rclass33}, false);
exports["%inherit"] = $g32}
{var $g36 = $g8("Mmake_class", function $g40 ($superclass37, $properties38)
{var $rclass39 = function $g41 ()
{return false};
$rclass39["%properties"] = $properties38;
if ($T($superclass37))
{$g32($rclass39, $superclass37);
$properties38.__proto__ = $superclass37["%properties"]};
return $rclass39}, false);
exports["%make-class"] = $g36}
{var $g42 = {};
exports["%keywords"] = $g42}
{var $g43 = $g36($g1, {name:false});
exports["<keyword>"] = $g43}
{var $g45 = $g8("keyword", function $g50 ($name46)
{var $namet47 = $name46.toLowerCase(), $g48 = $g42[$namet47];
if ($T($g48))
return $g48
else {var $keyword49 = new($g43);
$keyword49.name = $name46;
$g42[$name46] = $keyword49;
return $keyword49}}, false);
exports.keyword = $g45}
$K = $g45
{var $g51 = $g8("Mconcat", function $g54 ($array152, $array253)
{return $array152.concat($array253)}, false);
exports["%concat"] = $g51}
{var $g55 = String;
exports["as-string"] = $g55}
{var $g56 = Number;
exports["as-number"] = $g56}
{var $g57 = $g8("as_array", function $g60 ($rarguments58, $skip59)
{return $SL.call($rarguments58, ($skip59 || 0))}, false);
exports["as-array"] = $g57}
{var $g61 = parseFloat;
exports["parse-number"] = $g61}
{var $g62 = $g8("char_code", function $g64 ($rchar63)
{return $rchar63.charCodeAt(0)}, false);
exports["char-code"] = $g62}
{var $g65 = String.fromCharCode;
exports["code-char"] = $g65}
{var $g66 = $g8("emptyQ", function $g74 ($sequence67)
{var $robject71 = $sequence67, $object172 = (($robject71 || false).length || 0), $object273 = 0;
return ($object172 === $object273)}, false);
exports["empty?"] = $g66}
{var $g75 = $g8("rest", function $g77 ($sequence76)
{return $sequence76.slice(1)}, false);
exports.rest = $g75}
{var $g78 = $g8("last", function $g85 ($rarray79)
{var $robject82 = $rarray79, $rnumber83 = (($robject82 || false).length || 0), $g84 = ($rnumber83 - 1);
return $rarray79[$g84]}, false);
exports.last = $g78}
{var $g86 = $g8("last_setter", function $g89 ($rarray87, $value88)
{return $rarray87[$g25($g19($rarray87), 1)] = $value88}, true);
exports["last-setter"] = $g86}
{var $g90 = $g8("first", function $g92 ($sequence91)
{return $sequence91[0]}, false);
exports.first = $g90}
{var $g93 = $g8("first_setter", function $g96 ($rarray94, $value95)
{return $rarray94[0] = $value95}, true);
exports["first-setter"] = $g93}
{var $g97 = $g8("second", function $g99 ($sequence98)
{return $sequence98[1]}, false);
exports.second = $g97}
{var $g100 = $g8("second_setter", function $g103 ($rarray101, $value102)
{return $rarray101[1] = $value102}, true);
exports["second-setter"] = $g100}
{var $g104 = $g8("third", function $g106 ($sequence105)
{return $sequence105[2]}, false);
exports.third = $g104}
{var $g107 = $g8("third_setter", function $g110 ($rarray108, $value109)
{return $rarray108[2] = $value109}, true);
exports["third-setter"] = $g107}
{var $g111 = $g8("make_array", function $g113 ()
{var $elements112 = $SL.call(arguments, 0);
return $elements112}, false);
exports["make-array"] = $g111}
{var $g114 = $g8("push", function $g117 ($rarray115, $value116)
{$rarray115.unshift($value116);
return $rarray115}, false);
exports.push = $g114}
{var $g118 = $g8("push_last", function $g121 ($rarray119, $value120)
{$rarray119.push($value120);
return $rarray119}, false);
exports["push-last"] = $g118}
{var $g122 = $g8("pop", function $g124 ($rarray123)
{return $rarray123.shift()}, false);
exports.pop = $g122}
{var $g125 = $g8("pop_last", function $g127 ($rarray126)
{return $rarray126.pop()}, false);
exports["pop-last"] = $g125}
{var $g128 = $g8("but_last", function $g131 ($rarray129, $n130)
{return $rarray129.slice(0, (($n130 || 1) * -1))}, false);
exports["but-last"] = $g128}
{var $g132 = $g8("slice", function $g136 ($rarray133, $start134, $end135)
{return $rarray133.slice($start134, $end135)}, false);
exports.slice = $g132}
{var $g137, $g138 = $g8("reduce1", function $g147 ($rfunction139, $values140)
{var $sequence142 = $values140, $g145 = $sequence142[0], $sequence144 = $values140, $g146 = $sequence144.slice(1);
return $g137($rfunction139, $g145, $g146)}, false);
exports.reduce1 = $g138}
{var $g149;
$g137 = $g8("reduce", function $g162 ($rfunction150, $initial_value151, $values152)
{var $value153 = $initial_value151, $robject158 = $values152, $g154 = (($robject158 || false).length || 0), $i155 = 0;
while ($T(true))
{var $value160 = $g149($i155, $g154), $g161 = !($g13($value160));
if ($T($g161))
{(function $g163 ($i156)
{return $value153 = $rfunction150($value153, $values152[$i156])})($i155);
$i155 = ($i155 + 1)}
else break};
false;
return $value153}, false);
exports.reduce = $g137}
{var $g164 = $g8("reverseN", function $g166 ($rarray165)
{return $rarray165.reverse()}, false);
exports["reverse!"] = $g164}
{var $g167 = $g8("reverse", function $g177 ($rarray168)
{var $rarray173 = $rarray168, $start174 = undefined, $end175 = undefined, $rarray176 = $rarray173.slice($start174, $end175);
return $rarray176.reverse()}, false);
exports.reverse = $g167}
{var $g180, $g181, $g182, $g183 = $g8("sortN", function $g191 ($rarray184)
{var $g185 = $SL.call(arguments, 1), $g186 = $g180($g185, {test:$g181,
key:$g182}), $test187 = $g186.test, $key188 = $g186.key;
return $rarray184.sort(function $g192 ($a189, $b190)
{if ($T($test187($key188($a189), $key188($b190))))
return -1
else return 1})}, false);
exports["sort!"] = $g183}
{var $g208 = $K("test"), $g209 = $K("key"), $g195 = $g8("sort", function $g210 ($rarray196)
{var $g197 = $SL.call(arguments, 1), $g198 = $g180($g197, {test:$g181,
key:$g182}), $test199 = $g198.test, $key200 = $g198.key, $rarray204 = $rarray196, $start205 = undefined, $end206 = undefined, $g207 = $rarray204.slice($start205, $end206);
return $g183($g207, $g208, $test199, $g209, $key200)}, false);
exports.sort = $g195}
{var $g211 = $g8("apply", function $g229 ($rfunction212)
{var $actual213 = $SL.call(arguments, 1, -1), $robject217 = arguments, $g226 = (($robject217 || false).length || 0), $g227 = ($g226 - 1), $last214 = arguments[$g227], $object1220 = $last214, $object2221 = $rfunction212, $g228 = ($object1220 === $object2221), $rarguments215;
if ($T($g228))
$rarguments215 = $actual213
else {var $array1224 = $actual213, $array2225 = $last214;
$rarguments215 = $array1224.concat($array2225)};
return $rfunction212.apply(null, $rarguments215)}, false);
exports.apply = $g211}
{var $g230 = $g8("curry", function $g239 ($rfunction231)
{var $curried_args232 = $SL.call(arguments, 1);
return function $g240 ()
{var $args233 = $SL.call(arguments, 0), $array1236 = $curried_args232, $array2237 = $args233, $g238 = $array1236.concat($array2237);
return $g211($rfunction231, $g238)}}, false);
exports.curry = $g230}
{var $g241 = $g8("rcurry", function $g250 ($rfunction242)
{var $curried_args243 = $SL.call(arguments, 1);
return function $g251 ()
{var $args244 = $SL.call(arguments, 0), $array1247 = $args244, $array2248 = $curried_args243, $g249 = $array1247.concat($array2248);
return $g211($rfunction242, $g249)}}, false);
exports.rcurry = $g241}
{var $g252 = $g8("always", function $g254 ($value253)
{return function $g255 ()
{return $value253}}, false);
exports.always = $g252}
{var $g257 = $g8("repeatedly", function $g271 ($rfunction258, $count259)
{var $result260 = [], $g261 = $count259, $i262 = 0;
while ($T(true))
{var $value265 = $g149($i262, $g261), $g270 = !($g13($value265));
if ($T($g270))
{(function $g272 ($i263)
{var $rarray268 = $result260, $value269 = $rfunction258();
$rarray268.push($value269);
return $rarray268})($i262);
$i262 = ($i262 + 1)}
else break};
return $result260}, false);
exports.repeatedly = $g257}
{$g182 = $g8("identity", function $g274 ($value273)
{return $value273}, false);
exports.identity = $g182}
{var $g275 = $g8("complement", function $g280 ($rfunction276)
{return function $g281 ()
{var $rarguments277 = $SL.call(arguments, 0), $value279 = $g211($rfunction276, $rarguments277);
return !($g13($value279))}}, false);
exports.complement = $g275}
{var $g321 = $K("from-end?"), $g282 = $g8("compose", function $g322 ()
{var $functions283 = $SL.call(arguments, 0), $sequence297 = $functions283, $g298 = $sequence297, $g299 = (($g298 || false).length || 0), $g300 = 0, $g315 = ($g299 === $g300);
if ($T($g315))
return $g182
else return function $g323 ()
{var $rarguments284 = $SL.call(arguments, 0), $g316 = function $g324 ($value285, $rfunction286)
{return $rfunction286($value285)}, $rarray308 = $functions283, $g309 = $rarray308, $g310 = (($g309 || false).length || 0), $g317 = ($g310 - 1), $g318 = $rarray308[$g317], $g319 = $g211($g318, $rarguments284), $rarray313 = $functions283, $n314 = undefined, $g320 = $rarray313.slice(0, (($n314 || 1) * -1));
return $g137($g316, $g319, $g320, $g321, true)}}, false);
exports.compose = $g282}
var $g325 = $g8("binaryP", function $g328 ($number1326, $number2327)
{return ($number1326 + $number2327)}, false)
{var $g329 = $g8("P", function $g360 ()
{var $numbers330 = $SL.call(arguments, 0), $sequence341 = $numbers330, $g342 = $sequence341, $g343 = (($g342 || false).length || 0), $g344 = 0, $g357 = ($g343 === $g344);
if ($T($g357))
return 0
else {var $rfunction353 = $g325, $values354 = $numbers330, $g355 = $values354, $g358 = $g355[0], $g356 = $values354, $g359 = $g356.slice(1);
return $g137($rfunction353, $g358, $g359)}}, false);
exports["+"] = $g329}
var $g361 = $g8("binary_", function $g364 ($number1362, $number2363)
{return ($number1362 - $number2363)}, false)
{var $g365 = $g8("_", function $g383 ($minuend366)
{var $subtrahends367 = $SL.call(arguments, 1), $sequence378 = $subtrahends367, $g379 = $sequence378, $g380 = (($g379 || false).length || 0), $g381 = 0, $g382 = ($g380 === $g381);
if ($T($g382))
return -($minuend366)
else return $g137($g361, $minuend366, $subtrahends367)}, false);
exports["-"] = $g365}
var $g384 = $g8("binaryT", function $g387 ($number1385, $number2386)
{return ($number1385 * $number2386)}, false)
{var $g388 = $g8("T", function $g419 ()
{var $numbers389 = $SL.call(arguments, 0), $sequence400 = $numbers389, $g401 = $sequence400, $g402 = (($g401 || false).length || 0), $g403 = 0, $g416 = ($g402 === $g403);
if ($T($g416))
return 1
else {var $rfunction412 = $g384, $values413 = $numbers389, $g414 = $values413, $g417 = $g414[0], $g415 = $values413, $g418 = $g415.slice(1);
return $g137($rfunction412, $g417, $g418)}}, false);
exports["*"] = $g388}
var $g420 = $g8("binaryS", function $g423 ($number1421, $number2422)
{return ($number1421 / $number2422)}, false)
{var $g424 = $g8("S", function $g442 ($numerator425)
{var $denominators426 = $SL.call(arguments, 1), $sequence437 = $denominators426, $g438 = $sequence437, $g439 = (($g438 || false).length || 0), $g440 = 0, $g441 = ($g439 === $g440);
if ($T($g441))
return (1 / $numerator425)
else return $g137($g420, $numerator425, $denominators426)}, false);
exports["/"] = $g424}
{var $g443 = $g8("type", function $g445 ($robject444)
{if ($T($robject444))
return $robject444.constructor
else return $g5}, false);
exports.type = $g443}
{var $g447 = $g8("instanceQ", function $g460 ($robject448, $type449)
{if ($T($robject448))
{var $ctor450 = $robject448.constructor, $object1454 = $ctor450, $object2455 = $type449, $g451 = ($object1454 === $object2455);
if ($T($g451))
return $g451
else return ($robject448 instanceof $type449)}
else {var $object1458 = $type449, $object2459 = $g5;
return ($object1458 === $object2459)}}, false);
exports["instance?"] = $g447}
$HP = Object.hasOwnProperty
{var $g461 = $g8("hasQ", function $g464 ($robject462, $property463)
{return $HP.call($robject462,$property463)}, false);
exports["has?"] = $g461}
{var $g465, $g466 = $g8("Mmake_method", function $g485 ($name467, $rfunction468, $setterq469, $type470, $existing471)
{var $prototype472 = $type470.prototype, $robject477 = $prototype472, $property478 = $name467, $g483 = $HP.call($robject477,$property478), $existing_method473;
if ($T($g483))
$existing_method473 = $prototype472[$name467]
else $existing_method473 = false;
var $genericq474;
if ($T($existing471))
{var $robject481 = $existing471, $property482 = "%generic?", $g484 = $HP.call($robject481,$property482);
if ($T($g484))
$genericq474 = $existing471["%generic?"]
else $genericq474 = false}
else $genericq474 = false;
$rfunction468["%name"] = $name467;
$rfunction468["%setter?"] = $setterq469;
$rfunction468["%type"] = $type470;
$prototype472[$name467] = $rfunction468;
if ($T($genericq474))
return $existing471
else return $g465($name467)}, false);
exports["%make-method"] = $g466}
{$g465 = $g8("Mmake_generic", function $g490 ($name486)
{var $dispatcher489 = function $g491 ($robject487)
{var $rfunction488 = (($robject487 !== null) && ($robject487 !== undefined) && $robject487[$name486]);
return ($rfunction488 && $rfunction488.apply($robject487, arguments))};
$dispatcher489["%generic?"] = true;
$dispatcher489["%name"] = $name486;
return $dispatcher489}, false);
exports["%make-generic"] = $g465}
{var $g492 = $g8("Mnext_method", function $g496 ($rfunction493)
{var $name494 = $rfunction493["%name"], $proto495 = $rfunction493["%type"].prototype.__proto__;
return $proto495[$name494]}, false);
exports["%next-method"] = $g492}
{var $g497 = $g8("concatenate", function $g501 ($robject498)
{var $rest499 = $SL.call(arguments, 1), $g500;
if ($T($g447($robject498, $g4)))
$g500 = $g51
else $g500 = $g325;
return $g137($g500, $robject498, $rest499)}, false);
exports.concatenate = $g497}
{var $g503 = $g8("compare", function $g537 ($rfunction504, $robject505, $objects506)
{var $failedq507;
while ($T(true))
{var $g508 = $failedq507, $value525;
if ($T($g508))
$value525 = $g508
else {var $sequence521 = $objects506, $g522 = $sequence521, $g523 = (($g522 || false).length || 0), $g524 = 0;
$value525 = ($g523 === $g524)};
var $g536 = !($g13($value525));
if ($T($g536))
{var $sequence527 = $objects506, $other509 = $sequence527[0], $value529 = $rfunction504($robject505, $other509), $g534 = !($g13($value529));
$failedq507 = $g534;
var $sequence531 = $objects506, $g535 = $sequence531.slice(1);
$objects506 = $g535;
$robject505 = $other509}
else break};
var $value533 = $failedq507;
return !($g13($value533))}, false);
exports.compare = $g503}
{var $g538 = $g8("EE", function $g541 ($robject539)
{var $objects540 = $SL.call(arguments, 1);
return $g503($g28, $robject539, $objects540)}, false);
exports["=="] = $g538}
{var $g542 = $g465("binaryE");
exports["binary="] = $g542}
{var $g543 = $g465("binaryL");
exports["binary<"] = $g543}
{$g542 = $g466("binaryE", function $g555 ($object1544, $object2545)
{var $object1548 = $g443($object1544), $object2549 = $g443($object2545), $g554 = ($object1548 === $object2549);
if ($T($g554))
{var $object1552 = $object1544, $object2553 = $object2545;
return ($object1552 === $object2553)}}, false, $g1, $g542);
exports["binary="] = $g542}
{var $g562;
$g542 = $g466("binaryE", function $g602 ($array1563, $array2564)
{var $robject578 = $array1563, $object1581 = (($robject578 || false).length || 0), $robject580 = $array2564, $object2582 = (($robject580 || false).length || 0), $g597 = ($object1581 === $object2582);
if ($T($g597))
{var $g565 = $array1563, $g566 = $array2564, $g567, $g568, $g569 = [$g565, $g566];
while ($T(true))
{var $g570 = $g567, $value585;
if ($T($g570))
$value585 = $g570
else $value585 = $g562($g66, $g569);
var $g601 = !($g13($value585));
if ($T($g601))
{var $sequence587 = $g565, $item1571 = $sequence587[0], $sequence589 = $g566, $item2572 = $sequence589[0], $value591 = $g542($item1571, $item2572), $g598 = !($g13($value591));
if ($T($g598))
{$g568 = true;
$g567 = true}
else {(function $g603 ($item1573, $item2574)
{return false})($item1571, $item2572);
var $sequence593 = $g565, $g599 = $sequence593.slice(1);
$g565 = $g599;
var $sequence595 = $g566, $g600 = $sequence595.slice(1);
$g566 = $g600;
$g569 = [$g565, $g566]}}
else break};
var $value596 = $g568;
return !($g13($value596))}}, false, $g4, $g542);
exports["binary="] = $g542}
var $g604 = $g542
{$g542 = $g8("binaryE", function $g614 ($object1606, $object2607)
{var $value610 = $object1606, $g613 = !($g13($value610)), $g608;
if ($T($g613))
{var $value612 = $object2607;
$g608 = !($g13($value612))}
else $g608 = false;
if ($T($g608))
return $g608
else return $g604($object1606, $object2607)}, false);
exports["binary="] = $g542}
{var $g615 = $g8("E", function $g618 ($robject616)
{var $objects617 = $SL.call(arguments, 1);
return $g503($g542, $robject616, $objects617)}, false);
exports["="] = $g615}
{$g543 = $g466("binaryL", function $g626 ($object1619, $object2620)
{var $object1623 = $g443($object1619), $object2624 = $g443($object2620), $g625 = ($object1623 === $object2624);
if ($T($g625))
return ($object1619 < $object2620)}, false, $g1, $g543);
exports["binary<"] = $g543}
{$g181 = $g8("L", function $g629 ($robject627)
{var $objects628 = $SL.call(arguments, 1);
return $g503($g543, $robject627, $objects628)}, false);
exports["<"] = $g181}
{var $g631 = $g8("binaryLE", function $g635 ($object1632, $object2633)
{if ($T($object1632))
if ($T($object2633))
{var $g634 = $g543($object1632, $object2633);
if ($T($g634))
return $g634
else return $g542($object1632, $object2633)}}, false);
exports["binary<="] = $g631}
{var $g636 = $g8("LE", function $g639 ($robject637)
{var $objects638 = $SL.call(arguments, 1);
return $g503($g631, $robject637, $objects638)}, false);
exports["<="] = $g636}
{var $g640 = $g8("binaryG", function $g648 ($object1641, $object2642)
{if ($T($object1641))
if ($T($object2642))
{var $value644 = $g543($object1641, $object2642), $g647 = !($g13($value644));
if ($T($g647))
{var $value646 = $g542($object1641, $object2642);
return !($g13($value646))}}}, false);
exports["binary>"] = $g640}
{var $g649 = $g8("G", function $g652 ($robject650)
{var $objects651 = $SL.call(arguments, 1);
return $g503($g640, $robject650, $objects651)}, false);
exports[">"] = $g649}
{var $g654 = $g8("binaryGE", function $g660 ($object1655, $object2656)
{var $value659 = $g543($object1655, $object2656), $g657 = !($g13($value659));
if ($T($g657))
return $g657
else return $g542($object1655, $object2656)}, false);
exports["binary>="] = $g654}
{$g149 = $g8("GE", function $g663 ($robject661)
{var $objects662 = $SL.call(arguments, 1);
return $g503($g654, $robject661, $objects662)}, false);
exports[">="] = $g149}
{var $g664 = $g8("as_object", function $g685 ($property_list665)
{var $rarray673 = $property_list665, $start674 = undefined, $end675 = undefined, $list666 = $rarray673.slice($start674, $end675), $result667 = {};
while ($T(true))
{var $robject677 = $list666, $g683 = (($robject677 || false).length || 0), $g684 = $g649($g683, 0);
if ($T($g684))
{var $rarray679 = $list666, $key668 = $rarray679.shift(), $rarray681 = $list666, $value669 = $rarray681.shift(), $g682;
if ($T($g447($key668, $g43)))
$g682 = $key668.name
else $g682 = $g55($key668);
$key668 = $g682;
$result667[$key668] = $value669}
else break};
return $result667}, false);
exports["as-object"] = $g664}
{var $g686 = $g8("position", function $g690 ($rarray687, $element688)
{var $position689 = $rarray687.indexOf($element688);
if ($T($g649($position689, -1)))
return $position689}, false);
exports.position = $g686}
{var $g691 = $g8("last_position", function $g695 ($rarray692, $element693)
{var $position694 = $rarray692.lastIndexOf($element693);
if ($T($g649($position694, -1)))
return $position694}, false);
exports["last-position"] = $g691}
{var $g696 = $g8("as_uppercase", function $g698 ($rstring697)
{return $rstring697.toUpperCase()}, false);
exports["as-uppercase"] = $g696}
{var $g699 = $g8("as_lowercase", function $g701 ($rstring700)
{return $rstring700.toLowerCase()}, false);
exports["as-lowercase"] = $g699}
{var $g702 = $g8("join", function $g705 ($rarray703, $rstring704)
{return $rarray703.join($rstring704)}, false);
exports.join = $g702}
{var $g706 = $g8("trim", function $g708 ($rstring707)
{return $rstring707.trim()}, false);
exports.trim = $g706}
{var $g709 = $g8("replace", function $g713 ($rstring710, $pattern711, $replacement712)
{return $rstring710.replace($pattern711, $replacement712)}, false);
exports.replace = $g709}
{var $g714 = $g8("make_object", function $g716 ()
{var $key_values715 = $SL.call(arguments, 0);
return $g664($key_values715)}, false);
exports["make-object"] = $g714}
{var $g717 = $g36($g1, {name:false,
module:false});
exports["<symbol>"] = $g717}
var $g718 = {}
{var $g735 = $K("name"), $g736 = $K("module"), $g721, $g722, $g723, $g724 = $g8("symbol", function $g737 ($name725, $module726)
{var $rstring732 = $name725, $name727 = $rstring732.toLowerCase(), $g728 = $module726, $rstring734;
if ($T($g728))
$rstring734 = $g728
else $rstring734 = "";
var $modulet729 = $rstring734.toLowerCase(), $g730 = $g723($g718, $modulet729, $name727);
if ($T($g730))
return $g730
else return $g721($g718, $modulet729, $name727, $g722($g717, $g735, $name727, $g736, $module726))}, false);
exports.symbol = $g724}
$S = $g724
{var $g738 = $g8("symbol_name", function $g740 ($symbol739)
{return $g723($symbol739, "name")}, false);
exports["symbol-name"] = $g738}
{$g180 = $g8("Mkeys", function $g759 ($key_values741, $defaults742)
{var $i743 = 0;
while ($T(true))
{var $robject749 = $key_values741, $g757 = (($robject749 || false).length || 0), $value750 = ($i743 >= $g757), $g758 = !($g13($value750));
if ($T($g758))
{(function $g760 ($i744)
{var $key745 = $key_values741[$i744], $rnumber752 = $i744, $g755 = ($rnumber752 + 1), $value746 = $key_values741[$g755];
if ($T($g447($key745, $g43)))
return $defaults742[$key745.name] = $value746})($i743);
var $rnumber754 = $i743, $g756 = ($rnumber754 + 1);
$i743 = $g756}
else break};
false;
return $defaults742}, false);
exports["%keys"] = $g180}
{var $g764, $g765, $g766, $g767 = $g8("find_key", function $g781 ($rarray768, $predicate769)
{var $g770 = $SL.call(arguments, 2), $g771 = $g180($g770, {skip:0,
failure:false,
"from-end?":false}), $skip772 = $g771.skip, $failure773 = $g771.failure, $from_endq774 = $g771["from-end?"], $keys775 = $g766($rarray768), $g779 = function $g782 ($index776)
{return $predicate769($g764($rarray768, $index776))}, $g780;
if ($T($from_endq774))
$g780 = $g167($keys775)
else $g780 = $keys775;
var $satisfying_keys777 = $g765($g779, $g780), $g778 = $g764($satisfying_keys777, $skip772);
if ($T($g778))
return $g778
else return $failure773}, false);
exports["find-key"] = $g767}
{var $g785 = $g8("parse_integer", function $g790 ($value786)
{var $g787 = $SL.call(arguments, 1), $g788 = $g180($g787, {radix:10}), $radix789 = $g788.radix;
return parseInt($value786, $radix789)}, false);
exports["parse-integer"] = $g785}
{$g764 = $g8("element", function $g800 ($rarray794, $index795)
{var $g796 = $SL.call(arguments, 2), $g797 = $g180($g796, {"default":false}), $rdefault798 = $g797["default"], $g799 = $rarray794[$index795];
if ($T($g799))
return $g799
else return $rdefault798}, false);
exports.element = $g764}
{var $g801 = $g8("element_setter", function $g805 ($rarray802, $key803, $value804)
{return $rarray802[$key803] = $value804}, true);
exports["element-setter"] = $g801}
{var $g808 = $g8("replace_subsequence", function $g833 ($target_array809, $insert_array810)
{var $g811 = $SL.call(arguments, 2), $robject816 = $target_array809, $g829 = (($robject816 || false).length || 0), $g830 = {start:0,
end:$g829}, $g812 = $g180($g811, $g830), $start813 = $g812.start, $end814 = $g812.end, $rarray820 = $target_array809, $start821 = 0, $end822 = $start813, $g831 = $rarray820.slice($start821, $end822), $rarray826 = $target_array809, $start827 = $end814, $end828 = undefined, $g832 = $rarray826.slice($start827, $end828);
return $g497($g831, $insert_array810, $g832)}, false);
exports["replace-subsequence"] = $g808}
{var $g836 = $g8("replace_subsequenceN", function $g852 ($target_array837, $insert_array838)
{var $g839 = $SL.call(arguments, 2), $robject845 = $target_array837, $g850 = (($robject845 || false).length || 0), $g851 = {start:0,
end:$g850}, $g840 = $g180($g839, $g851), $start841 = $g840.start, $end842 = $g840.end, $array1848 = [$start841, $g365($end842, $start841)], $array2849 = $insert_array838, $rest843 = $array1848.concat($array2849);
[].splice.apply($target_array837, $rest843);
return $target_array837}, false);
exports["replace-subsequence!"] = $g836}
{var $g856 = $g8("removeN", function $g864 ($rarray857, $value858)
{var $g859 = $SL.call(arguments, 2), $g860 = $g180($g859, {test:$g538}), $test861 = $g860.test, $g862 = $g767($rarray857, $g230($test861, $value858));
if ($T($g862))
{var $key863 = $g862;
$rarray857.splice($key863, 1)};
return $rarray857}, false);
exports["remove!"] = $g856}
{var $g867 = $g8("remove", function $g880 ($rarray868, $value869)
{var $g870 = $SL.call(arguments, 2), $g871 = $g180($g870, {test:$g538}), $test872 = $g871.test, $rarray876 = $rarray868, $start877 = undefined, $end878 = undefined, $g879 = $rarray876.slice($start877, $end878);
return $g856($g879, $value869, $g208, $test872)}, false);
exports.remove = $g867}
{var $g881 = $g8("interpose", function $g900 ($separator882, $rarray883)
{var $rfunction894 = function $g901 ($a884, $b885)
{return $g497([$a884, $separator882], $b885)}, $values895 = $rarray883, $g896 = $values895, $g898 = $g896[0], $g897 = $values895, $g899 = $g897.slice(1);
return $g137($rfunction894, $g898, $g899)}, false);
exports.interpose = $g881}
{$g562 = $g8("anyQ", function $g918 ($rfunction903, $values904)
{var $value905, $robject911 = $values904, $n906 = (($robject911 || false).length || 0), $i907 = 0;
while ($T(true))
{var $g908 = $value905, $value913;
if ($T($g908))
$value913 = $g908
else $value913 = $g149($i907, $n906);
var $g917 = !($g13($value913));
if ($T($g917))
{(function $g919 ($i909)
{return $value905 = $rfunction903($values904[$i909])})($i907);
var $rnumber915 = $i907, $g916 = ($rnumber915 + 1);
$i907 = $g916}
else break};
return $value905}, false);
exports["any?"] = $g562}
{var $g922 = $g8("memberQ", function $g929 ($value923, $rarray924)
{var $g925 = $SL.call(arguments, 2), $g926 = $g180($g925, {test:$g538}), $test927 = $g926.test;
return $g562(function $g930 ($other_value928)
{return $test927($value923, $other_value928)}, $rarray924)}, false);
exports["member?"] = $g922}
{var $g931 = $g8("everyQ", function $g939 ($rfunction932, $rarray933)
{var $value938 = $g562(function $g940 ($value934)
{var $value937 = $rfunction932($value934);
return !($g13($value937))}, $rarray933);
return !($g13($value938))}, false);
exports["every?"] = $g931}
{var $g946 = $g8("map", function $g995 ($rfunction947)
{var $arrays948 = $SL.call(arguments, 1), $result949 = [], $sequence968 = $arrays948, $sequence969 = $sequence968.slice(1), $g970 = $sequence969, $g971 = (($g970 || false).length || 0), $g972 = 0, $g991 = ($g971 === $g972);
if ($T($g991))
{var $sequence974 = $arrays948, $g950 = $sequence974[0], $g951, $g952, $g953 = [$g950];
while ($T(true))
{var $g954 = $g951, $value976;
if ($T($g954))
$value976 = $g954
else $value976 = $g562($g66, $g953);
var $g993 = !($g13($value976));
if ($T($g993))
{var $sequence978 = $g950, $item955 = $sequence978[0];
(function $g996 ($item956)
{var $rarray981 = $result949, $value982 = $rfunction947($item956);
$rarray981.push($value982);
return $rarray981})($item955);
var $sequence984 = $g950, $g992 = $sequence984.slice(1);
$g950 = $g992;
$g953 = [$g950]}
else break};
$g952}
else while ($T(true))
{var $value986 = $g562($g66, $arrays948), $g994 = !($g13($value986));
if ($T($g994))
{var $rarray989 = $result949, $value990 = $g211($rfunction947, $g946($g90, $arrays948));
$rarray989.push($value990);
$rarray989;
$arrays948 = $g946($g75, $arrays948)}
else break};
return $result949}, false);
exports.map = $g946}
{var $g1002 = $g8("Rdo", function $g1042 ($rfunction1003)
{var $arrays1004 = $SL.call(arguments, 1), $sequence1023 = $arrays1004, $sequence1024 = $sequence1023.slice(1), $g1025 = $sequence1024, $g1026 = (($g1025 || false).length || 0), $g1027 = 0, $g1038 = ($g1026 === $g1027);
if ($T($g1038))
{var $sequence1029 = $arrays1004, $g1005 = $sequence1029[0], $g1006, $g1007, $g1008 = [$g1005];
while ($T(true))
{var $g1009 = $g1006, $value1031;
if ($T($g1009))
$value1031 = $g1009
else $value1031 = $g562($g66, $g1008);
var $g1040 = !($g13($value1031));
if ($T($g1040))
{var $sequence1033 = $g1005, $item1010 = $sequence1033[0];
(function $g1043 ($item1011)
{return $rfunction1003($item1011)})($item1010);
var $sequence1035 = $g1005, $g1039 = $sequence1035.slice(1);
$g1005 = $g1039;
$g1008 = [$g1005]}
else break};
$g1007}
else while ($T(true))
{var $value1037 = $g562($g66, $arrays1004), $g1041 = !($g13($value1037));
if ($T($g1041))
{$g211($rfunction1003, $g946($g90, $arrays1004));
$arrays1004 = $g946($g75, $arrays1004)}
else break};
return false}, false);
exports["do"] = $g1002}
{$g765 = $g8("choose", function $g1071 ($rfunction1049, $rarray1050)
{var $result1051 = [], $g1052 = $rarray1050, $g1053, $g1054, $g1055 = [$g1052];
while ($T(true))
{var $g1056 = $g1053, $value1060;
if ($T($g1056))
$value1060 = $g1056
else $value1060 = $g562($g66, $g1055);
var $g1070 = !($g13($value1060));
if ($T($g1070))
{var $sequence1062 = $g1052, $element1057 = $sequence1062[0];
(function $g1072 ($element1058)
{if ($T($rfunction1049($element1058)))
{var $rarray1065 = $result1051, $value1066 = $element1058;
$rarray1065.push($value1066);
return $rarray1065}})($element1057);
var $sequence1068 = $g1052, $g1069 = $sequence1068.slice(1);
$g1052 = $g1069;
$g1055 = [$g1052]}
else break};
$g1054;
return $result1051}, false);
exports.choose = $g765}
{var $g1076 = $g8("copy_sequence", function $g1090 ($rarray1077)
{var $g1078 = $SL.call(arguments, 1), $g1079 = $g180($g1078, {start:0,
end:false}), $start1080 = $g1079.start, $end1081 = $g1079.end, $g1082 = $end1081, $end1083;
if ($T($g1082))
$end1083 = $g1082
else $end1083 = undefined;
var $rarray1087 = $rarray1077, $start1088 = $start1080, $end1089 = $end1083;
return $rarray1087.slice($start1088, $end1089)}, false);
exports["copy-sequence"] = $g1076}
{var $g1091;
$g722 = $g8("make", function $g1095 ($type1092)
{var $rarguments1093 = $SL.call(arguments, 1), $robject1094 = new($type1092);
$g211($g1091, $robject1094, $rarguments1093);
return $robject1094}, false);
exports.make = $g722}
{$g766 = $g8("object_properties", function $g1117 ($robject1099)
{var $g1100 = $SL.call(arguments, 1), $g1101 = $g180($g1100, {"inherited?":false}), $inheritedq1102 = $g1101["inherited?"], $result1103 = [];
if ($T($g447($robject1099, $g4)))
{var $robject1109 = $robject1099, $g1104 = (($robject1109 || false).length || 0), $i1105 = 0;
while ($T(true))
{var $value1111 = $g149($i1105, $g1104), $g1116 = !($g13($value1111));
if ($T($g1116))
{(function $g1118 ($i1106)
{var $rarray1114 = $result1103, $value1115 = $i1106;
$rarray1114.push($value1115);
return $rarray1114})($i1105);
$i1105 = $g329($i1105, 1)}
else break};
false}
else {var $i1107;
for ($i1107 in $robject1099) ($inheritedq1102||$HP.call($robject1099, $i1107)) &&$result1103.push($i1107)};
return $result1103}, false);
exports["object-properties"] = $g766}
{var $g1119 = $g8("object_values", function $g1121 ($robject1120)
{return $g946($g230($g723, $robject1120), $g766($robject1120))}, false);
exports["object-values"] = $g1119}
{$g1091 = $g465("initialize");
exports.initialize = $g1091}
{var $g1146 = $K("inherited?");
$g1091 = $g466("initialize", function $g1147 ($robject1125)
{var $rest1126 = $SL.call(arguments, 1), $rarguments1127 = $g664($rest1126), $g1128 = $g443($robject1125)["%properties"];
if ($T($g1128))
{var $properties1129 = $g1128;
$g1002(function $g1148 ($key1130)
{var $robject1138 = $g1.prototype, $property1139 = $key1130, $g1131 = $HP.call($robject1138,$property1139), $value1144;
if ($T($g1131))
$value1144 = $g1131
else {var $robject1142 = $robject1125, $property1143 = $key1130;
$value1144 = $HP.call($robject1142,$property1143)};
var $g1145 = !($g13($value1144));
if ($T($g1145))
{var $g1132 = $rarguments1127[$key1130], $value1134;
if ($T($g1132))
$value1134 = $g1132
else {var $value1133 = $properties1129[$key1130];
if ($T($value1133))
$value1134 = $value1133()
else $value1134 = false};
return $robject1125[$key1130] = $value1134}}, $g766($properties1129, $g1146, true))};
return $robject1125}, false, $g1, $g1091);
exports.initialize = $g1091}
{var $g1149 = $g36($g1, {name:false});
exports["<hash-symbol>"] = $g1149}
{var $key1150 = $g722($g1149, $g735, "key");
$KEY = $key1150}
{var $rest1151 = $g722($g1149, $g735, "rest");
$REST = $rest1151}
{$g723 = $g8("get", function $g1182 ($robject1157)
{var $properties1158 = $SL.call(arguments, 1), $result1159, $g1160 = $properties1158, $g1161, $g1162, $g1163 = [$g1160];
while ($T(true))
{var $g1164 = $g1161, $value1168;
if ($T($g1164))
$value1168 = $g1164
else $value1168 = $g562($g66, $g1163);
var $g1181 = !($g13($value1168));
if ($T($g1181))
{var $sequence1170 = $g1160, $property1165 = $sequence1170[0], $robject1174 = $robject1157, $property1175 = $property1165, $value1176 = $HP.call($robject1174,$property1175), $g1179 = !($g13($value1176));
if ($T($g1179))
{$g1162 = $result1159 = false;
$g1161 = true}
else {(function $g1183 ($property1166)
{$result1159 = $robject1157[$property1166];
return $robject1157 = $result1159})($property1165);
var $sequence1178 = $g1160, $g1180 = $sequence1178.slice(1);
$g1160 = $g1180;
$g1163 = [$g1160]}}
else break};
$g1162;
return $result1159}, false);
exports.get = $g723}
{$g721 = $g8("get_setter", function $g1205 ($robject1184)
{var $propertiessvalue1185 = $SL.call(arguments, 1), $robject1189 = $propertiessvalue1185, $g1200 = (($robject1189 || false).length || 0), $g1201 = $g636($g1200, 2);
if ($T($g1201))
{var $sequence1191 = $propertiessvalue1185, $g1202 = $sequence1191[1];
return $robject1184[$g90($propertiessvalue1185)] = $g1202}
else {var $sequence1193 = $propertiessvalue1185, $property1186 = $sequence1193[0], $robject1196 = $robject1184, $property1197 = $property1186, $g1203 = $HP.call($robject1196,$property1197), $object21187;
if ($T($g1203))
$object21187 = $robject1184[$property1186]
else $object21187 = $robject1184[$property1186] = $g714();
var $sequence1199 = $propertiessvalue1185, $g1204 = $sequence1199.slice(1);
return $g211($g1205, $object21187, $g1204)}}, true);
exports["get-setter"] = $g721}
{var $g1206 = $g8("split_with", function $g1216 ($rfunction1207, $rarray1208)
{var $a1209 = [], $b1210 = [];
$g1002(function $g1217 ($item1211)
{var $rarray1214;
if ($T($rfunction1207($item1211)))
$rarray1214 = $a1209
else $rarray1214 = $b1210;
var $value1215 = $item1211;
$rarray1214.push($value1215);
return $rarray1214}, $rarray1208);
return [$a1209, $b1210]}, false);
exports["split-with"] = $g1206}
{var $g1218 = $g8("as_hex_string", function $g1220 ($rnumber1219)
{return $rnumber1219.toString(16)}, false);
exports["as-hex-string"] = $g1218}
{var $g1221 = $g465("description");
exports.description = $g1221}
{$g1221 = $g466("description", function $g1223 ($rnumber1222)
{return ("" + $rnumber1222)}, false, $g3, $g1221);
exports.description = $g1221}
{$g1221 = $g466("description", function $g1226 ($rstring1224)
{var $escaped1225 = $rstring1224.replace("\"", "\\\"", "g");
return ("\"" + $escaped1225 + "\"")}, false, $g2, $g1221);
exports.description = $g1221}
{$g1221 = $g466("description", function $g1228 ($rarray1227)
{return ("(" + $g702($g946($g1221, $rarray1227), " ") + ")")}, false, $g4, $g1221);
exports.description = $g1221}
{$g1221 = $g466("description", function $g1230 ($value1229)
{if ($T($value1229))
return "#t"
else return "#f"}, false, $g5, $g1221);
exports.description = $g1221}
{$g1221 = $g466("description", function $g1237 ($symbol1232)
{var $g1233 = $g723($symbol1232, "module"), $g1235;
if ($T($g1233))
{var $module1234 = $g1233;
$g1235 = $g497($module1234, "::")}
else $g1235 = "";
var $g1236 = $g738($symbol1232);
return ($g1235 + $g1236)}, false, $g717, $g1221);
exports.description = $g1221}
{$g1221 = $g466("description", function $g1239 ($keyword1238)
{return ($g738($keyword1238) + ":")}, false, $g43, $g1221);
exports.description = $g1221}
{$g1221 = $g466("description", function $g1241 ($symbol1240)
{return ("#" + $g738($symbol1240))}, false, $g1149, $g1221);
exports.description = $g1221}
{var $g1242 = Math.min;
exports.min = $g1242}
{var $g1243 = Math.max;
exports.max = $g1243}
{var $g1244 = Math.abs;
exports.abs = $g1244}
{var $g1245 = Math.round;
exports.round = $g1245}
{var $g1246 = Math.floor;
exports.floor = $g1246}
{var $g1247 = Math.ceil;
exports.ceil = $g1247}
{var $g1248 = Math.sin;
exports.sin = $g1248}
{var $g1249 = Math.cos;
exports.cos = $g1249}
{var $g1250 = Math.atan2;
exports.atan2 = $g1250}
{var $g1251 = Math.pow;
exports.expt = $g1251}
{var $g1252 = Math.sqrt;
exports.sqrt = $g1252}
{var $g1253 = $g8("mod", function $g1256 ($number11254, $number21255)
{return ($number11254 % $number21255)}, false);
exports.mod = $g1253}
{var $g1257 = Math.PI;
exports["*pi*"] = $g1257}
var $g1258 = ($g1257 / 180)
{var $g1259 = $g8("as_radiant", function $g1261 ($rnumber1260)
{return ($rnumber1260 * $g1258)}, false);
exports["as-radiant"] = $g1259}
{var $g1262 = $g8("signal", function $g1264 ($error1263)
{throw($error1263);
return false}, false);
exports.signal = $g1262}
{var $g1270 = $g8("extendN", function $g1288 ($object11271, $object21272)
{var $g1273 = $g766($object21272), $g1274, $g1275, $g1276 = [$g1273];
while ($T(true))
{var $g1277 = $g1274, $value1281;
if ($T($g1277))
$value1281 = $g1277
else $value1281 = $g562($g66, $g1276);
var $g1287 = !($g13($value1281));
if ($T($g1287))
{var $sequence1283 = $g1273, $key1278 = $sequence1283[0];
(function $g1289 ($key1279)
{return $g721($object11271, $key1279, $g723($object21272, $key1279))})($key1278);
var $sequence1285 = $g1273, $g1286 = $sequence1285.slice(1);
$g1273 = $g1286;
$g1276 = [$g1273]}
else break};
$g1275;
return $object11271}, false);
exports["extend!"] = $g1270}
{var $g1297 = $g8("as_property_list", function $g1326 ($robject1298)
{var $g1299 = $SL.call(arguments, 1), $g1300 = $g180($g1299, {"keywords?":false}), $keywordsq1301 = $g1300["keywords?"], $result1302 = [], $g1303 = $g766($robject1298), $g1304, $g1305, $g1306 = [$g1303];
while ($T(true))
{var $g1307 = $g1304, $value1311;
if ($T($g1307))
$value1311 = $g1307
else $value1311 = $g562($g66, $g1306);
var $g1325 = !($g13($value1311));
if ($T($g1325))
{var $sequence1313 = $g1303, $key1308 = $sequence1313[0];
(function $g1327 ($key1309)
{var $rarray1316 = $result1302, $value1317;
if ($T($keywordsq1301))
$value1317 = $g45($g55($key1309))
else $value1317 = $key1309;
$rarray1316.push($value1317);
$rarray1316;
var $rarray1320 = $result1302, $value1321 = $g723($robject1298, $key1309);
$rarray1320.push($value1321);
return $rarray1320})($key1308);
var $sequence1323 = $g1303, $g1324 = $sequence1323.slice(1);
$g1303 = $g1324;
$g1306 = [$g1303]}
else break};
$g1305;
return $result1302}, false);
exports["as-property-list"] = $g1297}
{var $g1335 = $g8("as_association_list", function $g1362 ($robject1336)
{var $g1337 = $SL.call(arguments, 1), $g1338 = $g180($g1337, {"keywords?":false}), $keywordsq1339 = $g1338["keywords?"], $result1340 = [], $g1341 = $g766($robject1336), $g1342, $g1343, $g1344 = [$g1341];
while ($T(true))
{var $g1345 = $g1342, $value1349;
if ($T($g1345))
$value1349 = $g1345
else $value1349 = $g562($g66, $g1344);
var $g1361 = !($g13($value1349));
if ($T($g1361))
{var $sequence1351 = $g1341, $key1346 = $sequence1351[0];
(function $g1363 ($key1347)
{var $rarray1354 = $result1340, $g1358;
if ($T($keywordsq1339))
$g1358 = $g45($g55($key1347))
else $g1358 = $key1347;
var $g1359 = $g723($robject1336, $key1347), $value1355 = [$g1358, $g1359];
$rarray1354.push($value1355);
return $rarray1354})($key1346);
var $sequence1357 = $g1341, $g1360 = $sequence1357.slice(1);
$g1341 = $g1360;
$g1344 = [$g1341]}
else break};
$g1343;
return $result1340}, false);
exports["as-association-list"] = $g1335}
{var $g1364 = $g8("starts_withQ", function $g1371 ($rstring1365, $prefix1366)
{var $object11369 = $rstring1365.indexOf($prefix1366), $object21370 = 0;
return ($object11369 === $object21370)}, false);
exports["starts-with?"] = $g1364}
{var $g1372 = $g8("evenQ", function $g1378 ($rnumber1373)
{var $object11376 = ($rnumber1373 % 2), $object21377 = 0;
return ($object11376 === $object21377)}, false);
exports["even?"] = $g1372}
{var $g1379 = $g8("oddQ", function $g1385 ($rnumber1380)
{var $object11383 = ($rnumber1380 % 2), $object21384 = 1;
return ($object11383 === $object21384)}, false);
exports["odd?"] = $g1379}
{var $g1386 = $g8("group_by", function $g1401 ($predicate1387, $items1388)
{return $g137(function $g1402 ($result1389, $item1390)
{var $key1391 = $predicate1387($item1390), $robject1394 = $result1389, $property1395 = $key1391, $g1400 = $HP.call($robject1394,$property1395);
if ($T($g1400))
{var $rarray1398 = $g723($result1389, $key1391), $value1399 = $item1390;
$rarray1398.push($value1399);
$rarray1398}
else $g721($result1389, $key1391, [$item1390]);
return $result1389}, $g714(), $items1388)}, false);
exports["group-by"] = $g1386}
var $g1403 = $g8("wrap_object", function $g1407 ($robject1404)
{var $rest1405 = $SL.call(arguments, 1), $result1406 = Object.create($robject1404);
$g1270($result1406, $g664($rest1405));
return $result1406}, false)
var $g1408 = $g8("unwrap_object", function $g1410 ($robject1409)
{return $robject1409.__proto__}, false)
{var $g1411 = $g8("update_with", function $g1424 ($fn1412, $obj1413)
{var $objs1414 = $SL.call(arguments, 2);
return $g1002(function $g1425 ($obj21415)
{return $g1002(function $g1426 ($property1416)
{var $value1417 = $g723($obj21415, $property1416), $robject1420 = $obj1413, $property1421 = $property1416, $g1422 = $HP.call($robject1420,$property1421), $g1423;
if ($T($g1422))
$g1423 = $fn1412($g723($obj1413, $property1416), $value1417)
else $g1423 = $value1417;
return $g721($obj1413, $property1416, $g1423)}, $g766($obj21415))}, $objs1414)}, false);
exports["update-with"] = $g1411}
{var $g1427, $g1428 = $g8("as_set", function $g1431 ($values1429)
{var $set1430 = [];
return $g1427($set1430, $values1429)}, false);
exports["as-set"] = $g1428}
{var $g1432 = $g8("set_addN", function $g1442 ($set1433, $robject1434)
{var $value1436 = $g922($robject1434, $set1433), $g1441 = !($g13($value1436));
if ($T($g1441))
{var $rarray1439 = $set1433, $value1440 = $robject1434;
$rarray1439.push($value1440);
return $rarray1439}}, false);
exports["set-add!"] = $g1432}
{var $g1443 = $g856;
exports["set-remove!"] = $g1443}
{$g1427 = $g8("set_unionN", function $g1446 ($set11444, $set21445)
{$g1002($g230($g1432, $set11444), $set21445);
return $set11444}, false);
exports["set-union!"] = $g1427}
{var $g1447 = $g8("set_subtractN", function $g1450 ($set11448, $set21449)
{$g1002($g230($g1443, $set11448), $set21449);
return $set11448}, false);
exports["set-subtract!"] = $g1447}
{var $g1451 = $g8("chain_object", function $g1454 ($object11452, $object21453)
{$object21453.__proto__ = $object11452.__proto__;
$object11452.__proto__ = $object21453;
return $object11452}, false);
exports["chain-object"] = $g1451}
{var $g1455 = $g8("unchain_object", function $g1458 ($robject1456)
{var $g1457;
if ($T($robject1456.__proto__))
$g1457 = $robject1456.__proto__.__proto__
else $g1457 = false;
$robject1456.__proto__ = $g1457;
return $robject1456}, false);
exports["unchain-object"] = $g1455}
{$g1218 = $g8("as_hex_string", function $g1460 ($rnumber1459)
{return $rnumber1459.toString(16)}, false);
exports["as-hex-string"] = $g1218}
{var $g1461 = $g8("make_plain_object", function $g1462 ()
{return Object.create(null)}, false);
exports["make-plain-object"] = $g1461}
