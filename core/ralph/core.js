false
{var B1 = Object;
exports["<object>"] = B1}
{var B2 = String;
exports["<string>"] = B2}
{var B3 = Number;
exports["<number>"] = B3}
{var B4 = Array;
exports["<array>"] = B4}
{var B5 = Boolean;
exports["<boolean>"] = B5}
{var B6 = Function;
exports["<function>"] = B6}
{var B7 = Error;
exports["<error>"] = B7}
{var B8 = function B12 (name__9, function__10, setterQ__11)
{function__10["%name"] = name__9;
function__10["%setter?"] = setterQ__11;
return function__10};
exports["%make-function"] = B8}
{var B13 = B8("trueQ", function B15 (value__14)
{return ((value__14 != null) && (value__14 !== false))}, false);
exports["true?"] = B13}
$T = B13
{var B16 = B8("not", function B18 (value__17)
{return !(B13(value__17))}, false);
exports.not = B16}
{var B19 = B8("size", function B21 (object__20)
{return ((object__20 || false).length || 0)}, false);
exports.size = B19}
$SL = [].slice
{var B22 = B8("inc", function B24 (number__23)
{return (number__23 + 1)}, false);
exports.inc = B22}
{var B25 = B8("dec", function B27 (number__26)
{return (number__26 - 1)}, false);
exports.dec = B25}
{var B28 = B8("binaryEE", function B31 (object1__29, object2__30)
{return (object1__29 === object2__30)}, false);
exports["binary=="] = B28}
{var B32 = B8("Minherit", function B35 (class__33, superclass__34)
{class__33.prototype.__proto__ = superclass__34.prototype;
class__33.prototype.__super__ = superclass__34;
return class__33}, false);
exports["%inherit"] = B32}
{var B36 = B8("Mmake_class", function B40 (superclass__37, properties__38)
{var class__39 = function B41 ()
{return false};
class__39["%properties"] = properties__38;
if ($T(superclass__37))
{B32(class__39, superclass__37);
properties__38.__proto__ = superclass__37["%properties"]};
return class__39}, false);
exports["%make-class"] = B36}
{var B42 = {};
exports["%keywords"] = B42}
{var B43 = B36(B1, {name:false});
exports["<keyword>"] = B43}
{var B45 = B8("keyword", function B50 (name__46)
{var nameT__47 = name__46.toLowerCase(), B48 = B42[nameT__47];
if ($T(B48))
return B48
else {var keyword__49 = new(B43);
keyword__49.name = name__46;
B42[name__46] = keyword__49;
return keyword__49}}, false);
exports.keyword = B45}
$K = B45
{var B51 = B8("Mconcat", function B54 (array1__52, array2__53)
{return array1__52.concat(array2__53)}, false);
exports["%concat"] = B51}
{var B55 = String;
exports["as-string"] = B55}
{var B56 = Number;
exports["as-number"] = B56}
{var B57 = B8("as_array", function B60 (arguments__58, skip__59)
{return $SL.call(arguments__58, (skip__59 || 0))}, false);
exports["as-array"] = B57}
{var B61 = parseFloat;
exports["parse-number"] = B61}
{var B62 = B8("char_code", function B64 (char__63)
{return char__63.charCodeAt(0)}, false);
exports["char-code"] = B62}
{var B65 = String.fromCharCode;
exports["code-char"] = B65}
{var B66 = B8("emptyQ", function B74 (sequence__67)
{var object__71 = sequence__67, object1__72 = ((object__71 || false).length || 0), object2__73 = 0;
return (object1__72 === object2__73)}, false);
exports["empty?"] = B66}
{var B75 = B8("rest", function B77 (sequence__76)
{return sequence__76.slice(1)}, false);
exports.rest = B75}
{var B78 = B8("last", function B85 (array__79)
{var object__82 = array__79, number__83 = ((object__82 || false).length || 0), B84 = (number__83 - 1);
return array__79[B84]}, false);
exports.last = B78}
{var B86 = B8("last_setter", function B89 (array__87, value__88)
{return array__87[B25(B19(array__87), 1)] = value__88}, true);
exports["last-setter"] = B86}
{var B90 = B8("first", function B92 (sequence__91)
{return sequence__91[0]}, false);
exports.first = B90}
{var B93 = B8("first_setter", function B96 (array__94, value__95)
{return array__94[0] = value__95}, true);
exports["first-setter"] = B93}
{var B97 = B8("second", function B99 (sequence__98)
{return sequence__98[1]}, false);
exports.second = B97}
{var B100 = B8("second_setter", function B103 (array__101, value__102)
{return array__101[1] = value__102}, true);
exports["second-setter"] = B100}
{var B104 = B8("third", function B106 (sequence__105)
{return sequence__105[2]}, false);
exports.third = B104}
{var B107 = B8("third_setter", function B110 (array__108, value__109)
{return array__108[2] = value__109}, true);
exports["third-setter"] = B107}
{var B111 = B8("make_array", function B113 ()
{var elements__112 = $SL.call(arguments, 0);
return elements__112}, false);
exports["make-array"] = B111}
{var B114 = B8("push", function B117 (array__115, value__116)
{array__115.unshift(value__116);
return array__115}, false);
exports.push = B114}
{var B118 = B8("push_last", function B121 (array__119, value__120)
{array__119.push(value__120);
return array__119}, false);
exports["push-last"] = B118}
{var B122 = B8("pop", function B124 (array__123)
{return array__123.shift()}, false);
exports.pop = B122}
{var B125 = B8("pop_last", function B127 (array__126)
{return array__126.pop()}, false);
exports["pop-last"] = B125}
{var B128 = B8("but_last", function B131 (array__129, n__130)
{return array__129.slice(0, ((n__130 || 1) * -1))}, false);
exports["but-last"] = B128}
{var B132 = B8("slice", function B136 (array__133, start__134, end__135)
{return array__133.slice(start__134, end__135)}, false);
exports.slice = B132}
{var B137, B138 = B8("reduce1", function B147 (function__139, values__140)
{var sequence__142 = values__140, B145 = sequence__142[0], sequence__144 = values__140, B146 = sequence__144.slice(1);
return B137(function__139, B145, B146)}, false);
exports.reduce1 = B138}
{var B149;
B137 = B8("reduce", function B162 (function__150, initial_value__151, values__152)
{var value__153 = initial_value__151, object__158 = values__152, B154 = ((object__158 || false).length || 0), i__155 = 0;
while ($T(true))
{var value__160 = B149(i__155, B154), B161 = !(B13(value__160));
if ($T(B161))
{(function B163 (i__156)
{return value__153 = function__150(value__153, values__152[i__156])})(i__155);
i__155 = (i__155 + 1)}
else break};
false;
return value__153}, false);
exports.reduce = B137}
{var B164 = B8("reverseN", function B166 (array__165)
{return array__165.reverse()}, false);
exports["reverse!"] = B164}
{var B167 = B8("reverse", function B177 (array__168)
{var array__173 = array__168, start__174 = undefined, end__175 = undefined, array__176 = array__173.slice(start__174, end__175);
return array__176.reverse()}, false);
exports.reverse = B167}
{var B180, B181, B182, B183 = B8("sortN", function B191 (array__184)
{var B185 = $SL.call(arguments, 1), B186 = B180(B185, {test:B181,
key:B182}), test__187 = B186.test, key__188 = B186.key;
return array__184.sort(function B192 (a__189, b__190)
{if ($T(test__187(key__188(a__189), key__188(b__190))))
return -1
else return 1})}, false);
exports["sort!"] = B183}
{var B208 = $K("test"), B209 = $K("key"), B195 = B8("sort", function B210 (array__196)
{var B197 = $SL.call(arguments, 1), B198 = B180(B197, {test:B181,
key:B182}), test__199 = B198.test, key__200 = B198.key, array__204 = array__196, start__205 = undefined, end__206 = undefined, B207 = array__204.slice(start__205, end__206);
return B183(B207, B208, test__199, B209, key__200)}, false);
exports.sort = B195}
{var B211 = B8("apply", function B229 (function__212)
{var actual__213 = $SL.call(arguments, 1, -1), object__217 = arguments, B226 = ((object__217 || false).length || 0), B227 = (B226 - 1), last__214 = arguments[B227], object1__220 = last__214, object2__221 = function__212, B228 = (object1__220 === object2__221), arguments__215;
if ($T(B228))
arguments__215 = actual__213
else {var array1__224 = actual__213, array2__225 = last__214;
arguments__215 = array1__224.concat(array2__225)};
return function__212.apply(null, arguments__215)}, false);
exports.apply = B211}
{var B230 = B8("curry", function B239 (function__231)
{var curried_args__232 = $SL.call(arguments, 1);
return function B240 ()
{var args__233 = $SL.call(arguments, 0), array1__236 = curried_args__232, array2__237 = args__233, B238 = array1__236.concat(array2__237);
return B211(function__231, B238)}}, false);
exports.curry = B230}
{var B241 = B8("rcurry", function B250 (function__242)
{var curried_args__243 = $SL.call(arguments, 1);
return function B251 ()
{var args__244 = $SL.call(arguments, 0), array1__247 = args__244, array2__248 = curried_args__243, B249 = array1__247.concat(array2__248);
return B211(function__242, B249)}}, false);
exports.rcurry = B241}
{var B252 = B8("always", function B254 (value__253)
{return function B255 ()
{return value__253}}, false);
exports.always = B252}
{var B257 = B8("repeatedly", function B271 (function__258, count__259)
{var result__260 = [], B261 = count__259, i__262 = 0;
while ($T(true))
{var value__265 = B149(i__262, B261), B270 = !(B13(value__265));
if ($T(B270))
{(function B272 (i__263)
{var array__268 = result__260, value__269 = function__258();
array__268.push(value__269);
return array__268})(i__262);
i__262 = (i__262 + 1)}
else break};
return result__260}, false);
exports.repeatedly = B257}
{B182 = B8("identity", function B274 (value__273)
{return value__273}, false);
exports.identity = B182}
{var B275 = B8("complement", function B280 (function__276)
{return function B281 ()
{var arguments__277 = $SL.call(arguments, 0), value__279 = B211(function__276, arguments__277);
return !(B13(value__279))}}, false);
exports.complement = B275}
{var B321 = $K("from-end?"), B282 = B8("compose", function B322 ()
{var functions__283 = $SL.call(arguments, 0), sequence__297 = functions__283, B298 = sequence__297, B299 = ((B298 || false).length || 0), B300 = 0, B315 = (B299 === B300);
if ($T(B315))
return B182
else return function B323 ()
{var arguments__284 = $SL.call(arguments, 0), B316 = function B324 (value__285, function__286)
{return function__286(value__285)}, array__308 = functions__283, B309 = array__308, B310 = ((B309 || false).length || 0), B317 = (B310 - 1), B318 = array__308[B317], B319 = B211(B318, arguments__284), array__313 = functions__283, n__314 = undefined, B320 = array__313.slice(0, ((n__314 || 1) * -1));
return B137(B316, B319, B320, B321, true)}}, false);
exports.compose = B282}
var B325 = B8("binaryP", function B328 (number1__326, number2__327)
{return (number1__326 + number2__327)}, false)
{var B329 = B8("P", function B360 ()
{var numbers__330 = $SL.call(arguments, 0), sequence__341 = numbers__330, B342 = sequence__341, B343 = ((B342 || false).length || 0), B344 = 0, B357 = (B343 === B344);
if ($T(B357))
return 0
else {var function__353 = B325, values__354 = numbers__330, B355 = values__354, B358 = B355[0], B356 = values__354, B359 = B356.slice(1);
return B137(function__353, B358, B359)}}, false);
exports["+"] = B329}
var B361 = B8("binary_", function B364 (number1__362, number2__363)
{return (number1__362 - number2__363)}, false)
{var B365 = B8("_", function B383 (minuend__366)
{var subtrahends__367 = $SL.call(arguments, 1), sequence__378 = subtrahends__367, B379 = sequence__378, B380 = ((B379 || false).length || 0), B381 = 0, B382 = (B380 === B381);
if ($T(B382))
return -(minuend__366)
else return B137(B361, minuend__366, subtrahends__367)}, false);
exports["-"] = B365}
var B384 = B8("binaryT", function B387 (number1__385, number2__386)
{return (number1__385 * number2__386)}, false)
{var B388 = B8("T", function B419 ()
{var numbers__389 = $SL.call(arguments, 0), sequence__400 = numbers__389, B401 = sequence__400, B402 = ((B401 || false).length || 0), B403 = 0, B416 = (B402 === B403);
if ($T(B416))
return 1
else {var function__412 = B384, values__413 = numbers__389, B414 = values__413, B417 = B414[0], B415 = values__413, B418 = B415.slice(1);
return B137(function__412, B417, B418)}}, false);
exports["*"] = B388}
var B420 = B8("binaryS", function B423 (number1__421, number2__422)
{return (number1__421 / number2__422)}, false)
{var B424 = B8("S", function B442 (numerator__425)
{var denominators__426 = $SL.call(arguments, 1), sequence__437 = denominators__426, B438 = sequence__437, B439 = ((B438 || false).length || 0), B440 = 0, B441 = (B439 === B440);
if ($T(B441))
return (1 / numerator__425)
else return B137(B420, numerator__425, denominators__426)}, false);
exports["/"] = B424}
{var B443 = B8("type", function B445 (object__444)
{if ($T(object__444))
return object__444.constructor
else return B5}, false);
exports.type = B443}
{var B447 = B8("instanceQ", function B460 (object__448, type__449)
{if ($T(object__448))
{var ctor__450 = object__448.constructor, object1__454 = ctor__450, object2__455 = type__449, B451 = (object1__454 === object2__455);
if ($T(B451))
return B451
else return (object__448 instanceof type__449)}
else {var object1__458 = type__449, object2__459 = B5;
return (object1__458 === object2__459)}}, false);
exports["instance?"] = B447}
$HP = Object.hasOwnProperty
{var B461 = B8("hasQ", function B464 (object__462, property__463)
{return $HP.call(object__462,property__463)}, false);
exports["has?"] = B461}
{var B465, B466 = B8("Mmake_method", function B485 (name__467, function__468, setterQ__469, type__470, existing__471)
{var prototype__472 = type__470.prototype, object__477 = prototype__472, property__478 = name__467, B483 = $HP.call(object__477,property__478), existing_method__473;
if ($T(B483))
existing_method__473 = prototype__472[name__467]
else existing_method__473 = false;
var genericQ__474;
if ($T(existing__471))
{var object__481 = existing__471, property__482 = "%generic?", B484 = $HP.call(object__481,property__482);
if ($T(B484))
genericQ__474 = existing__471["%generic?"]
else genericQ__474 = false}
else genericQ__474 = false;
function__468["%name"] = name__467;
function__468["%setter?"] = setterQ__469;
function__468["%type"] = type__470;
prototype__472[name__467] = function__468;
if ($T(genericQ__474))
return existing__471
else return B465(name__467)}, false);
exports["%make-method"] = B466}
{B465 = B8("Mmake_generic", function B490 (name__486)
{var dispatcher__489 = function B491 (object__487)
{var function__488 = ((object__487 !== null) && (object__487 !== undefined) && object__487[name__486]);
return (function__488 && function__488.apply(object__487, arguments))};
dispatcher__489["%generic?"] = true;
dispatcher__489["%name"] = name__486;
return dispatcher__489}, false);
exports["%make-generic"] = B465}
{var B492 = B8("Mnext_method", function B496 (function__493)
{var name__494 = function__493["%name"], proto__495 = function__493["%type"].prototype.__proto__;
return proto__495[name__494]}, false);
exports["%next-method"] = B492}
{var B497 = B8("concatenate", function B501 (object__498)
{var rest__499 = $SL.call(arguments, 1), B500;
if ($T(B447(object__498, B4)))
B500 = B51
else B500 = B325;
return B137(B500, object__498, rest__499)}, false);
exports.concatenate = B497}
{var B503 = B8("compare", function B537 (function__504, object__505, objects__506)
{var failedQ__507;
while ($T(true))
{var B508 = failedQ__507, value__525;
if ($T(B508))
value__525 = B508
else {var sequence__521 = objects__506, B522 = sequence__521, B523 = ((B522 || false).length || 0), B524 = 0;
value__525 = (B523 === B524)};
var B536 = !(B13(value__525));
if ($T(B536))
{var sequence__527 = objects__506, other__509 = sequence__527[0], value__529 = function__504(object__505, other__509), B534 = !(B13(value__529));
failedQ__507 = B534;
var sequence__531 = objects__506, B535 = sequence__531.slice(1);
objects__506 = B535;
object__505 = other__509}
else break};
var value__533 = failedQ__507;
return !(B13(value__533))}, false);
exports.compare = B503}
{var B538 = B8("EE", function B541 (object__539)
{var objects__540 = $SL.call(arguments, 1);
return B503(B28, object__539, objects__540)}, false);
exports["=="] = B538}
{var B542 = B465("binaryE");
exports["binary="] = B542}
{var B543 = B465("binaryL");
exports["binary<"] = B543}
{B542 = B466("binaryE", function B555 (object1__544, object2__545)
{var object1__548 = B443(object1__544), object2__549 = B443(object2__545), B554 = (object1__548 === object2__549);
if ($T(B554))
{var object1__552 = object1__544, object2__553 = object2__545;
return (object1__552 === object2__553)}}, false, B1, B542);
exports["binary="] = B542}
{var B562;
B542 = B466("binaryE", function B602 (array1__563, array2__564)
{var object__578 = array1__563, object1__581 = ((object__578 || false).length || 0), object__580 = array2__564, object2__582 = ((object__580 || false).length || 0), B597 = (object1__581 === object2__582);
if ($T(B597))
{var B565 = array1__563, B566 = array2__564, B567, B568, B569 = [B565, B566];
while ($T(true))
{var B570 = B567, value__585;
if ($T(B570))
value__585 = B570
else value__585 = B562(B66, B569);
var B601 = !(B13(value__585));
if ($T(B601))
{var sequence__587 = B565, item1__571 = sequence__587[0], sequence__589 = B566, item2__572 = sequence__589[0], value__591 = B542(item1__571, item2__572), B598 = !(B13(value__591));
if ($T(B598))
{B568 = true;
B567 = true}
else {(function B603 (item1__573, item2__574)
{return false})(item1__571, item2__572);
var sequence__593 = B565, B599 = sequence__593.slice(1);
B565 = B599;
var sequence__595 = B566, B600 = sequence__595.slice(1);
B566 = B600;
B569 = [B565, B566]}}
else break};
var value__596 = B568;
return !(B13(value__596))}}, false, B4, B542);
exports["binary="] = B542}
var B604 = B542
{B542 = B8("binaryE", function B614 (object1__606, object2__607)
{var value__610 = object1__606, B613 = !(B13(value__610)), B608;
if ($T(B613))
{var value__612 = object2__607;
B608 = !(B13(value__612))}
else B608 = false;
if ($T(B608))
return B608
else return B604(object1__606, object2__607)}, false);
exports["binary="] = B542}
{var B615 = B8("E", function B618 (object__616)
{var objects__617 = $SL.call(arguments, 1);
return B503(B542, object__616, objects__617)}, false);
exports["="] = B615}
{B543 = B466("binaryL", function B626 (object1__619, object2__620)
{var object1__623 = B443(object1__619), object2__624 = B443(object2__620), B625 = (object1__623 === object2__624);
if ($T(B625))
return (object1__619 < object2__620)}, false, B1, B543);
exports["binary<"] = B543}
{B181 = B8("L", function B629 (object__627)
{var objects__628 = $SL.call(arguments, 1);
return B503(B543, object__627, objects__628)}, false);
exports["<"] = B181}
{var B631 = B8("binaryLE", function B635 (object1__632, object2__633)
{if ($T(object1__632))
if ($T(object2__633))
{var B634 = B543(object1__632, object2__633);
if ($T(B634))
return B634
else return B542(object1__632, object2__633)}}, false);
exports["binary<="] = B631}
{var B636 = B8("LE", function B639 (object__637)
{var objects__638 = $SL.call(arguments, 1);
return B503(B631, object__637, objects__638)}, false);
exports["<="] = B636}
{var B640 = B8("binaryG", function B648 (object1__641, object2__642)
{if ($T(object1__641))
if ($T(object2__642))
{var value__644 = B543(object1__641, object2__642), B647 = !(B13(value__644));
if ($T(B647))
{var value__646 = B542(object1__641, object2__642);
return !(B13(value__646))}}}, false);
exports["binary>"] = B640}
{var B649 = B8("G", function B652 (object__650)
{var objects__651 = $SL.call(arguments, 1);
return B503(B640, object__650, objects__651)}, false);
exports[">"] = B649}
{var B654 = B8("binaryGE", function B660 (object1__655, object2__656)
{var value__659 = B543(object1__655, object2__656), B657 = !(B13(value__659));
if ($T(B657))
return B657
else return B542(object1__655, object2__656)}, false);
exports["binary>="] = B654}
{B149 = B8("GE", function B663 (object__661)
{var objects__662 = $SL.call(arguments, 1);
return B503(B654, object__661, objects__662)}, false);
exports[">="] = B149}
{var B664 = B8("as_object", function B685 (property_list__665)
{var array__673 = property_list__665, start__674 = undefined, end__675 = undefined, list__666 = array__673.slice(start__674, end__675), result__667 = {};
while ($T(true))
{var object__677 = list__666, B683 = ((object__677 || false).length || 0), B684 = B649(B683, 0);
if ($T(B684))
{var array__679 = list__666, key__668 = array__679.shift(), array__681 = list__666, value__669 = array__681.shift(), B682;
if ($T(B447(key__668, B43)))
B682 = key__668.name
else B682 = B55(key__668);
key__668 = B682;
result__667[key__668] = value__669}
else break};
return result__667}, false);
exports["as-object"] = B664}
{var B686 = B8("position", function B690 (array__687, element__688)
{var position__689 = array__687.indexOf(element__688);
if ($T(B649(position__689, -1)))
return position__689}, false);
exports.position = B686}
{var B691 = B8("last_position", function B695 (array__692, element__693)
{var position__694 = array__692.lastIndexOf(element__693);
if ($T(B649(position__694, -1)))
return position__694}, false);
exports["last-position"] = B691}
{var B696 = B8("as_uppercase", function B698 (string__697)
{return string__697.toUpperCase()}, false);
exports["as-uppercase"] = B696}
{var B699 = B8("as_lowercase", function B701 (string__700)
{return string__700.toLowerCase()}, false);
exports["as-lowercase"] = B699}
{var B702 = B8("join", function B705 (array__703, string__704)
{return array__703.join(string__704)}, false);
exports.join = B702}
{var B706 = B8("trim", function B708 (string__707)
{return string__707.trim()}, false);
exports.trim = B706}
{var B709 = B8("replace", function B713 (string__710, pattern__711, replacement__712)
{return string__710.replace(pattern__711, replacement__712)}, false);
exports.replace = B709}
{var B714 = B8("make_object", function B716 ()
{var key_values__715 = $SL.call(arguments, 0);
return B664(key_values__715)}, false);
exports["make-object"] = B714}
{var B717 = B36(B1, {name:false,
module:false});
exports["<symbol>"] = B717}
var B718 = {}
{var B735 = $K("name"), B736 = $K("module"), B721, B722, B723, B724 = B8("symbol", function B737 (name__725, module__726)
{var string__732 = name__725, name__727 = string__732.toLowerCase(), B728 = module__726, string__734;
if ($T(B728))
string__734 = B728
else string__734 = "";
var moduleT__729 = string__734.toLowerCase(), B730 = B723(B718, moduleT__729, name__727);
if ($T(B730))
return B730
else return B721(B718, moduleT__729, name__727, B722(B717, B735, name__727, B736, module__726))}, false);
exports.symbol = B724}
$S = B724
{var B738 = B8("symbol_name", function B740 (symbol__739)
{return B723(symbol__739, "name")}, false);
exports["symbol-name"] = B738}
{B180 = B8("Mkeys", function B759 (key_values__741, defaults__742)
{var i__743 = 0;
while ($T(true))
{var object__749 = key_values__741, B757 = ((object__749 || false).length || 0), value__750 = (i__743 >= B757), B758 = !(B13(value__750));
if ($T(B758))
{(function B760 (i__744)
{var key__745 = key_values__741[i__744], number__752 = i__744, B755 = (number__752 + 1), value__746 = key_values__741[B755];
if ($T(B447(key__745, B43)))
return defaults__742[key__745.name] = value__746})(i__743);
var number__754 = i__743, B756 = (number__754 + 1);
i__743 = B756}
else break};
false;
return defaults__742}, false);
exports["%keys"] = B180}
{var B764, B765, B766, B767 = B8("find_key", function B781 (array__768, predicate__769)
{var B770 = $SL.call(arguments, 2), B771 = B180(B770, {skip:0,
failure:false,
"from-end?":false}), skip__772 = B771.skip, failure__773 = B771.failure, from_endQ__774 = B771["from-end?"], keys__775 = B766(array__768), B779 = function B782 (index__776)
{return predicate__769(B764(array__768, index__776))}, B780;
if ($T(from_endQ__774))
B780 = B167(keys__775)
else B780 = keys__775;
var satisfying_keys__777 = B765(B779, B780), B778 = B764(satisfying_keys__777, skip__772);
if ($T(B778))
return B778
else return failure__773}, false);
exports["find-key"] = B767}
{var B785 = B8("parse_integer", function B790 (value__786)
{var B787 = $SL.call(arguments, 1), B788 = B180(B787, {radix:10}), radix__789 = B788.radix;
return parseInt(value__786, radix__789)}, false);
exports["parse-integer"] = B785}
{B764 = B8("element", function B800 (array__794, index__795)
{var B796 = $SL.call(arguments, 2), B797 = B180(B796, {"default":false}), default__798 = B797["default"], B799 = array__794[index__795];
if ($T(B799))
return B799
else return default__798}, false);
exports.element = B764}
{var B801 = B8("element_setter", function B805 (array__802, key__803, value__804)
{return array__802[key__803] = value__804}, true);
exports["element-setter"] = B801}
{var B808 = B8("replace_subsequence", function B833 (target_array__809, insert_array__810)
{var B811 = $SL.call(arguments, 2), object__816 = target_array__809, B829 = ((object__816 || false).length || 0), B830 = {start:0,
end:B829}, B812 = B180(B811, B830), start__813 = B812.start, end__814 = B812.end, array__820 = target_array__809, start__821 = 0, end__822 = start__813, B831 = array__820.slice(start__821, end__822), array__826 = target_array__809, start__827 = end__814, end__828 = undefined, B832 = array__826.slice(start__827, end__828);
return B497(B831, insert_array__810, B832)}, false);
exports["replace-subsequence"] = B808}
{var B836 = B8("replace_subsequenceN", function B852 (target_array__837, insert_array__838)
{var B839 = $SL.call(arguments, 2), object__845 = target_array__837, B850 = ((object__845 || false).length || 0), B851 = {start:0,
end:B850}, B840 = B180(B839, B851), start__841 = B840.start, end__842 = B840.end, array1__848 = [start__841, B365(end__842, start__841)], array2__849 = insert_array__838, rest__843 = array1__848.concat(array2__849);
[].splice.apply(target_array__837, rest__843);
return target_array__837}, false);
exports["replace-subsequence!"] = B836}
{var B856 = B8("removeN", function B864 (array__857, value__858)
{var B859 = $SL.call(arguments, 2), B860 = B180(B859, {test:B538}), test__861 = B860.test, B862 = B767(array__857, B230(test__861, value__858));
if ($T(B862))
{var key__863 = B862;
array__857.splice(key__863, 1)};
return array__857}, false);
exports["remove!"] = B856}
{var B867 = B8("remove", function B880 (array__868, value__869)
{var B870 = $SL.call(arguments, 2), B871 = B180(B870, {test:B538}), test__872 = B871.test, array__876 = array__868, start__877 = undefined, end__878 = undefined, B879 = array__876.slice(start__877, end__878);
return B856(B879, value__869, B208, test__872)}, false);
exports.remove = B867}
{var B881 = B8("interpose", function B900 (separator__882, array__883)
{var function__894 = function B901 (a__884, b__885)
{return B497([a__884, separator__882], b__885)}, values__895 = array__883, B896 = values__895, B898 = B896[0], B897 = values__895, B899 = B897.slice(1);
return B137(function__894, B898, B899)}, false);
exports.interpose = B881}
{B562 = B8("anyQ", function B918 (function__903, values__904)
{var value__905, object__911 = values__904, n__906 = ((object__911 || false).length || 0), i__907 = 0;
while ($T(true))
{var B908 = value__905, value__913;
if ($T(B908))
value__913 = B908
else value__913 = B149(i__907, n__906);
var B917 = !(B13(value__913));
if ($T(B917))
{(function B919 (i__909)
{return value__905 = function__903(values__904[i__909])})(i__907);
var number__915 = i__907, B916 = (number__915 + 1);
i__907 = B916}
else break};
return value__905}, false);
exports["any?"] = B562}
{var B922 = B8("memberQ", function B929 (value__923, array__924)
{var B925 = $SL.call(arguments, 2), B926 = B180(B925, {test:B538}), test__927 = B926.test;
return B562(function B930 (other_value__928)
{return test__927(value__923, other_value__928)}, array__924)}, false);
exports["member?"] = B922}
{var B931 = B8("everyQ", function B939 (function__932, array__933)
{var value__938 = B562(function B940 (value__934)
{var value__937 = function__932(value__934);
return !(B13(value__937))}, array__933);
return !(B13(value__938))}, false);
exports["every?"] = B931}
{var B946 = B8("map", function B995 (function__947)
{var arrays__948 = $SL.call(arguments, 1), result__949 = [], sequence__968 = arrays__948, sequence__969 = sequence__968.slice(1), B970 = sequence__969, B971 = ((B970 || false).length || 0), B972 = 0, B991 = (B971 === B972);
if ($T(B991))
{var sequence__974 = arrays__948, B950 = sequence__974[0], B951, B952, B953 = [B950];
while ($T(true))
{var B954 = B951, value__976;
if ($T(B954))
value__976 = B954
else value__976 = B562(B66, B953);
var B993 = !(B13(value__976));
if ($T(B993))
{var sequence__978 = B950, item__955 = sequence__978[0];
(function B996 (item__956)
{var array__981 = result__949, value__982 = function__947(item__956);
array__981.push(value__982);
return array__981})(item__955);
var sequence__984 = B950, B992 = sequence__984.slice(1);
B950 = B992;
B953 = [B950]}
else break};
B952}
else while ($T(true))
{var value__986 = B562(B66, arrays__948), B994 = !(B13(value__986));
if ($T(B994))
{var array__989 = result__949, value__990 = B211(function__947, B946(B90, arrays__948));
array__989.push(value__990);
array__989;
arrays__948 = B946(B75, arrays__948)}
else break};
return result__949}, false);
exports.map = B946}
{var B1002 = B8("Rdo", function B1042 (function__1003)
{var arrays__1004 = $SL.call(arguments, 1), sequence__1023 = arrays__1004, sequence__1024 = sequence__1023.slice(1), B1025 = sequence__1024, B1026 = ((B1025 || false).length || 0), B1027 = 0, B1038 = (B1026 === B1027);
if ($T(B1038))
{var sequence__1029 = arrays__1004, B1005 = sequence__1029[0], B1006, B1007, B1008 = [B1005];
while ($T(true))
{var B1009 = B1006, value__1031;
if ($T(B1009))
value__1031 = B1009
else value__1031 = B562(B66, B1008);
var B1040 = !(B13(value__1031));
if ($T(B1040))
{var sequence__1033 = B1005, item__1010 = sequence__1033[0];
(function B1043 (item__1011)
{return function__1003(item__1011)})(item__1010);
var sequence__1035 = B1005, B1039 = sequence__1035.slice(1);
B1005 = B1039;
B1008 = [B1005]}
else break};
B1007}
else while ($T(true))
{var value__1037 = B562(B66, arrays__1004), B1041 = !(B13(value__1037));
if ($T(B1041))
{B211(function__1003, B946(B90, arrays__1004));
arrays__1004 = B946(B75, arrays__1004)}
else break};
return false}, false);
exports["do"] = B1002}
{B765 = B8("choose", function B1071 (function__1049, array__1050)
{var result__1051 = [], B1052 = array__1050, B1053, B1054, B1055 = [B1052];
while ($T(true))
{var B1056 = B1053, value__1060;
if ($T(B1056))
value__1060 = B1056
else value__1060 = B562(B66, B1055);
var B1070 = !(B13(value__1060));
if ($T(B1070))
{var sequence__1062 = B1052, element__1057 = sequence__1062[0];
(function B1072 (element__1058)
{if ($T(function__1049(element__1058)))
{var array__1065 = result__1051, value__1066 = element__1058;
array__1065.push(value__1066);
return array__1065}})(element__1057);
var sequence__1068 = B1052, B1069 = sequence__1068.slice(1);
B1052 = B1069;
B1055 = [B1052]}
else break};
B1054;
return result__1051}, false);
exports.choose = B765}
{var B1076 = B8("copy_sequence", function B1090 (array__1077)
{var B1078 = $SL.call(arguments, 1), B1079 = B180(B1078, {start:0,
end:false}), start__1080 = B1079.start, end__1081 = B1079.end, B1082 = end__1081, end__1083;
if ($T(B1082))
end__1083 = B1082
else end__1083 = undefined;
var array__1087 = array__1077, start__1088 = start__1080, end__1089 = end__1083;
return array__1087.slice(start__1088, end__1089)}, false);
exports["copy-sequence"] = B1076}
{var B1091;
B722 = B8("make", function B1095 (type__1092)
{var arguments__1093 = $SL.call(arguments, 1), object__1094 = new(type__1092);
B211(B1091, object__1094, arguments__1093);
return object__1094}, false);
exports.make = B722}
{B766 = B8("object_properties", function B1117 (object__1099)
{var B1100 = $SL.call(arguments, 1), B1101 = B180(B1100, {"inherited?":false}), inheritedQ__1102 = B1101["inherited?"], result__1103 = [];
if ($T(B447(object__1099, B4)))
{var object__1109 = object__1099, B1104 = ((object__1109 || false).length || 0), i__1105 = 0;
while ($T(true))
{var value__1111 = B149(i__1105, B1104), B1116 = !(B13(value__1111));
if ($T(B1116))
{(function B1118 (i__1106)
{var array__1114 = result__1103, value__1115 = i__1106;
array__1114.push(value__1115);
return array__1114})(i__1105);
i__1105 = B329(i__1105, 1)}
else break};
false}
else {var i__1107;
for (i__1107 in object__1099) (inheritedQ__1102||$HP.call(object__1099, i__1107)) &&result__1103.push(i__1107)};
return result__1103}, false);
exports["object-properties"] = B766}
{var B1119 = B8("object_values", function B1121 (object__1120)
{return B946(B230(B723, object__1120), B766(object__1120))}, false);
exports["object-values"] = B1119}
{B1091 = B465("initialize");
exports.initialize = B1091}
{var B1146 = $K("inherited?");
B1091 = B466("initialize", function B1147 (object__1125)
{var rest__1126 = $SL.call(arguments, 1), arguments__1127 = B664(rest__1126), B1128 = B443(object__1125)["%properties"];
if ($T(B1128))
{var properties__1129 = B1128;
B1002(function B1148 (key__1130)
{var object__1138 = B1.prototype, property__1139 = key__1130, B1131 = $HP.call(object__1138,property__1139), value__1144;
if ($T(B1131))
value__1144 = B1131
else {var object__1142 = object__1125, property__1143 = key__1130;
value__1144 = $HP.call(object__1142,property__1143)};
var B1145 = !(B13(value__1144));
if ($T(B1145))
{var B1132 = arguments__1127[key__1130], value__1134;
if ($T(B1132))
value__1134 = B1132
else {var value__1133 = properties__1129[key__1130];
if ($T(value__1133))
value__1134 = value__1133()
else value__1134 = false};
return object__1125[key__1130] = value__1134}}, B766(properties__1129, B1146, true))};
return object__1125}, false, B1, B1091);
exports.initialize = B1091}
{var B1149 = B36(B1, {name:false});
exports["<hash-symbol>"] = B1149}
{var key__1150 = B722(B1149, B735, "key");
$KEY = key__1150}
{var rest__1151 = B722(B1149, B735, "rest");
$REST = rest__1151}
{B723 = B8("get", function B1182 (object__1157)
{var properties__1158 = $SL.call(arguments, 1), result__1159, B1160 = properties__1158, B1161, B1162, B1163 = [B1160];
while ($T(true))
{var B1164 = B1161, value__1168;
if ($T(B1164))
value__1168 = B1164
else value__1168 = B562(B66, B1163);
var B1181 = !(B13(value__1168));
if ($T(B1181))
{var sequence__1170 = B1160, property__1165 = sequence__1170[0], object__1174 = object__1157, property__1175 = property__1165, value__1176 = $HP.call(object__1174,property__1175), B1179 = !(B13(value__1176));
if ($T(B1179))
{B1162 = result__1159 = false;
B1161 = true}
else {(function B1183 (property__1166)
{result__1159 = object__1157[property__1166];
return object__1157 = result__1159})(property__1165);
var sequence__1178 = B1160, B1180 = sequence__1178.slice(1);
B1160 = B1180;
B1163 = [B1160]}}
else break};
B1162;
return result__1159}, false);
exports.get = B723}
{B721 = B8("get_setter", function B1205 (object__1184)
{var propertiesSvalue__1185 = $SL.call(arguments, 1), object__1189 = propertiesSvalue__1185, B1200 = ((object__1189 || false).length || 0), B1201 = B636(B1200, 2);
if ($T(B1201))
{var sequence__1191 = propertiesSvalue__1185, B1202 = sequence__1191[1];
return object__1184[B90(propertiesSvalue__1185)] = B1202}
else {var sequence__1193 = propertiesSvalue__1185, property__1186 = sequence__1193[0], object__1196 = object__1184, property__1197 = property__1186, B1203 = $HP.call(object__1196,property__1197), object2__1187;
if ($T(B1203))
object2__1187 = object__1184[property__1186]
else object2__1187 = object__1184[property__1186] = B714();
var sequence__1199 = propertiesSvalue__1185, B1204 = sequence__1199.slice(1);
return B211(B1205, object2__1187, B1204)}}, true);
exports["get-setter"] = B721}
{var B1206 = B8("split_with", function B1216 (function__1207, array__1208)
{var a__1209 = [], b__1210 = [];
B1002(function B1217 (item__1211)
{var array__1214;
if ($T(function__1207(item__1211)))
array__1214 = a__1209
else array__1214 = b__1210;
var value__1215 = item__1211;
array__1214.push(value__1215);
return array__1214}, array__1208);
return [a__1209, b__1210]}, false);
exports["split-with"] = B1206}
{var B1218 = B8("as_hex_string", function B1220 (number__1219)
{return number__1219.toString(16)}, false);
exports["as-hex-string"] = B1218}
{var B1221 = B465("description");
exports.description = B1221}
{B1221 = B466("description", function B1223 (number__1222)
{return ("" + number__1222)}, false, B3, B1221);
exports.description = B1221}
{B1221 = B466("description", function B1226 (string__1224)
{var escaped__1225 = string__1224.replace("\"", "\\\"", "g");
return ("\"" + escaped__1225 + "\"")}, false, B2, B1221);
exports.description = B1221}
{B1221 = B466("description", function B1228 (array__1227)
{return ("(" + B702(B946(B1221, array__1227), " ") + ")")}, false, B4, B1221);
exports.description = B1221}
{B1221 = B466("description", function B1230 (value__1229)
{if ($T(value__1229))
return "#t"
else return "#f"}, false, B5, B1221);
exports.description = B1221}
{B1221 = B466("description", function B1237 (symbol__1232)
{var B1233 = B723(symbol__1232, "module"), B1235;
if ($T(B1233))
{var module__1234 = B1233;
B1235 = B497(module__1234, "::")}
else B1235 = "";
var B1236 = B738(symbol__1232);
return (B1235 + B1236)}, false, B717, B1221);
exports.description = B1221}
{B1221 = B466("description", function B1239 (keyword__1238)
{return (B738(keyword__1238) + ":")}, false, B43, B1221);
exports.description = B1221}
{B1221 = B466("description", function B1241 (symbol__1240)
{return ("#" + B738(symbol__1240))}, false, B1149, B1221);
exports.description = B1221}
{var B1242 = Math.min;
exports.min = B1242}
{var B1243 = Math.max;
exports.max = B1243}
{var B1244 = Math.abs;
exports.abs = B1244}
{var B1245 = Math.round;
exports.round = B1245}
{var B1246 = Math.floor;
exports.floor = B1246}
{var B1247 = Math.ceil;
exports.ceil = B1247}
{var B1248 = Math.sin;
exports.sin = B1248}
{var B1249 = Math.cos;
exports.cos = B1249}
{var B1250 = Math.atan2;
exports.atan2 = B1250}
{var B1251 = Math.pow;
exports.expt = B1251}
{var B1252 = Math.sqrt;
exports.sqrt = B1252}
{var B1253 = B8("mod", function B1256 (number1__1254, number2__1255)
{return (number1__1254 % number2__1255)}, false);
exports.mod = B1253}
{var B1257 = Math.PI;
exports["*pi*"] = B1257}
var B1258 = (B1257 / 180)
{var B1259 = B8("as_radiant", function B1261 (number__1260)
{return (number__1260 * B1258)}, false);
exports["as-radiant"] = B1259}
{var B1262 = B8("signal", function B1264 (error__1263)
{throw(error__1263);
return false}, false);
exports.signal = B1262}
{var B1270 = B8("extendN", function B1288 (object1__1271, object2__1272)
{var B1273 = B766(object2__1272), B1274, B1275, B1276 = [B1273];
while ($T(true))
{var B1277 = B1274, value__1281;
if ($T(B1277))
value__1281 = B1277
else value__1281 = B562(B66, B1276);
var B1287 = !(B13(value__1281));
if ($T(B1287))
{var sequence__1283 = B1273, key__1278 = sequence__1283[0];
(function B1289 (key__1279)
{return B721(object1__1271, key__1279, B723(object2__1272, key__1279))})(key__1278);
var sequence__1285 = B1273, B1286 = sequence__1285.slice(1);
B1273 = B1286;
B1276 = [B1273]}
else break};
B1275;
return object1__1271}, false);
exports["extend!"] = B1270}
{var B1297 = B8("as_property_list", function B1326 (object__1298)
{var B1299 = $SL.call(arguments, 1), B1300 = B180(B1299, {"keywords?":false}), keywordsQ__1301 = B1300["keywords?"], result__1302 = [], B1303 = B766(object__1298), B1304, B1305, B1306 = [B1303];
while ($T(true))
{var B1307 = B1304, value__1311;
if ($T(B1307))
value__1311 = B1307
else value__1311 = B562(B66, B1306);
var B1325 = !(B13(value__1311));
if ($T(B1325))
{var sequence__1313 = B1303, key__1308 = sequence__1313[0];
(function B1327 (key__1309)
{var array__1316 = result__1302, value__1317;
if ($T(keywordsQ__1301))
value__1317 = B45(B55(key__1309))
else value__1317 = key__1309;
array__1316.push(value__1317);
array__1316;
var array__1320 = result__1302, value__1321 = B723(object__1298, key__1309);
array__1320.push(value__1321);
return array__1320})(key__1308);
var sequence__1323 = B1303, B1324 = sequence__1323.slice(1);
B1303 = B1324;
B1306 = [B1303]}
else break};
B1305;
return result__1302}, false);
exports["as-property-list"] = B1297}
{var B1335 = B8("as_association_list", function B1362 (object__1336)
{var B1337 = $SL.call(arguments, 1), B1338 = B180(B1337, {"keywords?":false}), keywordsQ__1339 = B1338["keywords?"], result__1340 = [], B1341 = B766(object__1336), B1342, B1343, B1344 = [B1341];
while ($T(true))
{var B1345 = B1342, value__1349;
if ($T(B1345))
value__1349 = B1345
else value__1349 = B562(B66, B1344);
var B1361 = !(B13(value__1349));
if ($T(B1361))
{var sequence__1351 = B1341, key__1346 = sequence__1351[0];
(function B1363 (key__1347)
{var array__1354 = result__1340, B1358;
if ($T(keywordsQ__1339))
B1358 = B45(B55(key__1347))
else B1358 = key__1347;
var B1359 = B723(object__1336, key__1347), value__1355 = [B1358, B1359];
array__1354.push(value__1355);
return array__1354})(key__1346);
var sequence__1357 = B1341, B1360 = sequence__1357.slice(1);
B1341 = B1360;
B1344 = [B1341]}
else break};
B1343;
return result__1340}, false);
exports["as-association-list"] = B1335}
{var B1364 = B8("starts_withQ", function B1371 (string__1365, prefix__1366)
{var object1__1369 = string__1365.indexOf(prefix__1366), object2__1370 = 0;
return (object1__1369 === object2__1370)}, false);
exports["starts-with?"] = B1364}
{var B1372 = B8("evenQ", function B1378 (number__1373)
{var object1__1376 = (number__1373 % 2), object2__1377 = 0;
return (object1__1376 === object2__1377)}, false);
exports["even?"] = B1372}
{var B1379 = B8("oddQ", function B1385 (number__1380)
{var object1__1383 = (number__1380 % 2), object2__1384 = 1;
return (object1__1383 === object2__1384)}, false);
exports["odd?"] = B1379}
{var B1386 = B8("group_by", function B1401 (predicate__1387, items__1388)
{return B137(function B1402 (result__1389, item__1390)
{var key__1391 = predicate__1387(item__1390), object__1394 = result__1389, property__1395 = key__1391, B1400 = $HP.call(object__1394,property__1395);
if ($T(B1400))
{var array__1398 = B723(result__1389, key__1391), value__1399 = item__1390;
array__1398.push(value__1399);
array__1398}
else B721(result__1389, key__1391, [item__1390]);
return result__1389}, B714(), items__1388)}, false);
exports["group-by"] = B1386}
var B1403 = B8("wrap_object", function B1407 (object__1404)
{var rest__1405 = $SL.call(arguments, 1), result__1406 = Object.create(object__1404);
B1270(result__1406, B664(rest__1405));
return result__1406}, false)
var B1408 = B8("unwrap_object", function B1410 (object__1409)
{return object__1409.__proto__}, false)
{var B1411 = B8("update_with", function B1424 (fn__1412, obj__1413)
{var objs__1414 = $SL.call(arguments, 2);
return B1002(function B1425 (obj2__1415)
{return B1002(function B1426 (property__1416)
{var value__1417 = B723(obj2__1415, property__1416), object__1420 = obj__1413, property__1421 = property__1416, B1422 = $HP.call(object__1420,property__1421), B1423;
if ($T(B1422))
B1423 = fn__1412(B723(obj__1413, property__1416), value__1417)
else B1423 = value__1417;
return B721(obj__1413, property__1416, B1423)}, B766(obj2__1415))}, objs__1414)}, false);
exports["update-with"] = B1411}
{var B1427, B1428 = B8("as_set", function B1431 (values__1429)
{var set__1430 = [];
return B1427(set__1430, values__1429)}, false);
exports["as-set"] = B1428}
{var B1432 = B8("set_addN", function B1442 (set__1433, object__1434)
{var value__1436 = B922(object__1434, set__1433), B1441 = !(B13(value__1436));
if ($T(B1441))
{var array__1439 = set__1433, value__1440 = object__1434;
array__1439.push(value__1440);
return array__1439}}, false);
exports["set-add!"] = B1432}
{var B1443 = B856;
exports["set-remove!"] = B1443}
{B1427 = B8("set_unionN", function B1446 (set1__1444, set2__1445)
{B1002(B230(B1432, set1__1444), set2__1445);
return set1__1444}, false);
exports["set-union!"] = B1427}
{var B1447 = B8("set_subtractN", function B1450 (set1__1448, set2__1449)
{B1002(B230(B1443, set1__1448), set2__1449);
return set1__1448}, false);
exports["set-subtract!"] = B1447}
{var B1451 = B8("chain_object", function B1454 (object1__1452, object2__1453)
{object2__1453.__proto__ = object1__1452.__proto__;
object1__1452.__proto__ = object2__1453;
return object1__1452}, false);
exports["chain-object"] = B1451}
{var B1455 = B8("unchain_object", function B1458 (object__1456)
{var B1457;
if ($T(object__1456.__proto__))
B1457 = object__1456.__proto__.__proto__
else B1457 = false;
object__1456.__proto__ = B1457;
return object__1456}, false);
exports["unchain-object"] = B1455}
{B1218 = B8("as_hex_string", function B1460 (number__1459)
{return number__1459.toString(16)}, false);
exports["as-hex-string"] = B1218}
{var B1461 = B8("make_plain_object", function B1462 ()
{return Object.create(null)}, false);
exports["make-plain-object"] = B1461}
