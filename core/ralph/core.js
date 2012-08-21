false
{
var B1 = Object;
exports["<object>"] = B1}
{
var B2 = String;
exports["<string>"] = B2}
{
var B3 = Number;
exports["<number>"] = B3}
{
var B4 = Array;
exports["<array>"] = B4}
{
var B5 = Boolean;
exports["<boolean>"] = B5}
{
var B6 = Function;
exports["<function>"] = B6}
{
var B7 = Error;
exports["<error>"] = B7}
{
var B9 = function B10 (name__11, function__12, setterQ__13)
{
function__12["%name"] = name__11;
function__12["%setter?"] = setterQ__13;
return function__12};
exports["%make-function"] = B9}
{
var B14 = B9("trueQ", function trueQ__15 (value__16)
{return ((value__16 != null) && (value__16 !== false))}, false);
exports["true?"] = B14}
$T = B14
{
var B17 = B9("not", function not__18 (value__19)
{return !(B14(value__19))}, false);
exports.not = B17}
{
var B20 = B9("size", function size__21 (object__22)
{return ((object__22 || false).length || 0)}, false);
exports.size = B20}
$SL = [].slice
{
var B23 = B9("inc", function inc__24 (number__25)
{return (number__25 + 1)}, false);
exports.inc = B23}
{
var B26 = B9("dec", function dec__27 (number__28)
{return (number__28 - 1)}, false);
exports.dec = B26}
{
var B29 = B9("binaryEE", function binaryEE__30 (object1__31, object2__32)
{return (object1__31 === object2__32)}, false);
exports["binary=="] = B29}
{
var B33 = B9("Minherit", function Minherit__34 (class__35, superclass__36)
{
class__35.prototype.__proto__ = superclass__36.prototype;
class__35.prototype.__super__ = superclass__36;
return class__35}, false);
exports["%inherit"] = B33}
{
var B38 = B9("Mmake_class", function Mmake_class__39 (superclass__40, properties__41)
{
var class__43 = function B42 ()
{return false};
class__43["%properties"] = properties__41;
if ($T(superclass__40))
{
B33(class__43, superclass__40);
properties__41.__proto__ = superclass__40["%properties"]};
return class__43}, false);
exports["%make-class"] = B38}
{
var B44 = {};
exports["%keywords"] = B44}
{
var B45 = B38(B1, {name:false});
exports["<keyword>"] = B45}
{
var B47 = B9("keyword", function keyword__48 (name__49)
{
var nameT__50 = name__49.toLowerCase(),
B51 = B44[nameT__50];
if ($T(B51))
return B51
else
{
var keyword__52 = new(B45);
keyword__52.name = name__49;
B44[name__49] = keyword__52;
return keyword__52}}, false);
exports.keyword = B47}
$K = B47
{
var B53 = B9("Mconcat", function Mconcat__54 (array1__55, array2__56)
{return array1__55.concat(array2__56)}, false);
exports["%concat"] = B53}
{
var B57 = String;
exports["as-string"] = B57}
{
var B58 = Number;
exports["as-number"] = B58}
{
var B59 = B9("as_array", function as_array__60 (arguments__61, skip__62)
{return $SL.call(arguments__61, (skip__62 || 0))}, false);
exports["as-array"] = B59}
{
var B63 = parseFloat;
exports["parse-number"] = B63}
{
var B64 = B9("char_code", function char_code__65 (char__66)
{return char__66.charCodeAt(0)}, false);
exports["char-code"] = B64}
{
var B67 = String.fromCharCode;
exports["code-char"] = B67}
{
var B68 = B9("emptyQ", function emptyQ__69 (sequence__70)
{
var object__74 = sequence__70,
object1__75 = ((object__74 || false).length || 0),
object2__76 = 0;
return (object1__75 === object2__76)}, false);
exports["empty?"] = B68}
{
var B77 = B9("rest", function rest__78 (sequence__79)
{return sequence__79.slice(1)}, false);
exports.rest = B77}
{
var B80 = B9("last", function last__81 (array__82)
{
var object__85 = array__82,
number__86 = ((object__85 || false).length || 0),
B87 = (number__86 - 1);
return array__82[B87]}, false);
exports.last = B80}
{
var B88 = B9("last_setter", function last_setter__89 (array__90, value__91)
{return array__90[B26(B20(array__90), 1)] = value__91}, true);
exports["last-setter"] = B88}
{
var B92 = B9("first", function first__93 (sequence__94)
{return sequence__94[0]}, false);
exports.first = B92}
{
var B95 = B9("first_setter", function first_setter__96 (array__97, value__98)
{return array__97[0] = value__98}, true);
exports["first-setter"] = B95}
{
var B99 = B9("second", function second__100 (sequence__101)
{return sequence__101[1]}, false);
exports.second = B99}
{
var B102 = B9("second_setter", function second_setter__103 (array__104, value__105)
{return array__104[1] = value__105}, true);
exports["second-setter"] = B102}
{
var B106 = B9("third", function third__107 (sequence__108)
{return sequence__108[2]}, false);
exports.third = B106}
{
var B109 = B9("third_setter", function third_setter__110 (array__111, value__112)
{return array__111[2] = value__112}, true);
exports["third-setter"] = B109}
{
var B113 = B9("make_array", function make_array__114 ()
{
var elements__115 = $SL.call(arguments, 0);
return elements__115}, false);
exports["make-array"] = B113}
{
var B116 = B9("push", function push__117 (array__118, value__119)
{
array__118.unshift(value__119);
return array__118}, false);
exports.push = B116}
{
var B120 = B9("push_last", function push_last__121 (array__122, value__123)
{
array__122.push(value__123);
return array__122}, false);
exports["push-last"] = B120}
{
var B124 = B9("pop", function pop__125 (array__126)
{return array__126.shift()}, false);
exports.pop = B124}
{
var B127 = B9("pop_last", function pop_last__128 (array__129)
{return array__129.pop()}, false);
exports["pop-last"] = B127}
{
var B130 = B9("but_last", function but_last__131 (array__132, n__133)
{return array__132.slice(0, ((n__133 || 1) * -1))}, false);
exports["but-last"] = B130}
{
var B134 = B9("slice", function slice__135 (array__136, start__137, end__138)
{return array__136.slice(start__137, end__138)}, false);
exports.slice = B134}
{
var B139,
B140 = B9("reduce1", function reduce1__141 (function__142, values__143)
{
var sequence__145 = values__143,
B148 = sequence__145[0],
sequence__147 = values__143,
B149 = sequence__147.slice(1);
return B139(function__142, B148, B149)}, false);
exports.reduce1 = B140}
{
var B152;
B139 = B9("reduce", function reduce__153 (function__154, initial_value__155, values__156)
{
var value__157 = initial_value__155,
object__163 = values__156,
B158 = ((object__163 || false).length || 0),
i__159 = 0;
while (true)
{
var value__165 = B152(i__159, B158),
B166 = !(B14(value__165));
if ($T(B166))
{
(function B160 (i__161)
{return value__157 = function__154(value__157, values__156[i__161])})(i__159);
i__159 = (i__159 + 1)}
else
break};
false;
return value__157}, false);
exports.reduce = B139}
{
var B167 = B9("reverseN", function reverseN__168 (array__169)
{return array__169.reverse()}, false);
exports["reverse!"] = B167}
{
var B170 = B9("reverse", function reverse__171 (array__172)
{
var array__177 = array__172,
start__178 = undefined,
end__179 = undefined,
array__180 = array__177.slice(start__178, end__179);
return array__180.reverse()}, false);
exports.reverse = B170}
{
var B184,
B185,
B186,
B187 = B9("sortN", function sortN__188 (array__189)
{
var B190 = $SL.call(arguments, 1),
B191 = B184(B190, {test:B185,
key:B186}),
test__192 = B191.test,
key__193 = B191.key;
return array__189.sort(function B194 (a__195, b__196)
{if ($T(test__192(key__193(a__195), key__193(b__196))))
return -1
else
return 1})}, false);
exports["sort!"] = B187}
{
var B213 = $K("test"),
B214 = $K("key"),
B199 = B9("sort", function sort__200 (array__201)
{
var B202 = $SL.call(arguments, 1),
B203 = B184(B202, {test:B185,
key:B186}),
test__204 = B203.test,
key__205 = B203.key,
array__209 = array__201,
start__210 = undefined,
end__211 = undefined,
B212 = array__209.slice(start__210, end__211);
return B187(B212, B213, test__204, B214, key__205)}, false);
exports.sort = B199}
{
var B215 = B9("apply", function apply__216 (function__217)
{
var actual__218 = $SL.call(arguments, 1, -1),
object__222 = arguments,
B231 = ((object__222 || false).length || 0),
B232 = (B231 - 1),
last__219 = arguments[B232],
object1__225 = last__219,
object2__226 = function__217,
B233 = (object1__225 === object2__226),
arguments__220;
if ($T(B233))
arguments__220 = actual__218
else
{
var array1__229 = actual__218,
array2__230 = last__219;
arguments__220 = array1__229.concat(array2__230)};
return function__217.apply(null, arguments__220)}, false);
exports.apply = B215}
{
var B235 = B9("curry", function curry__236 (function__237)
{
var curried_args__238 = $SL.call(arguments, 1);
return function B239 ()
{
var args__240 = $SL.call(arguments, 0),
array1__243 = curried_args__238,
array2__244 = args__240,
B245 = array1__243.concat(array2__244);
return B215(function__237, B245)}}, false);
exports.curry = B235}
{
var B247 = B9("rcurry", function rcurry__248 (function__249)
{
var curried_args__250 = $SL.call(arguments, 1);
return function B251 ()
{
var args__252 = $SL.call(arguments, 0),
array1__255 = args__252,
array2__256 = curried_args__250,
B257 = array1__255.concat(array2__256);
return B215(function__249, B257)}}, false);
exports.rcurry = B247}
{
var B259 = B9("always", function always__260 (value__261)
{return function B262 ()
{return value__261}}, false);
exports.always = B259}
{
var B265 = B9("repeatedly", function repeatedly__266 (function__267, count__268)
{
var result__269 = [],
B270 = count__268,
i__271 = 0;
while (true)
{
var value__275 = B152(i__271, B270),
B280 = !(B14(value__275));
if ($T(B280))
{
(function B272 (i__273)
{
var array__278 = result__269,
value__279 = function__267();
array__278.push(value__279);
return array__278})(i__271);
i__271 = (i__271 + 1)}
else
break};
return result__269}, false);
exports.repeatedly = B265}
{
B186 = B9("identity", function identity__281 (value__282)
{return value__282}, false);
exports.identity = B186}
{
var B284 = B9("complement", function complement__285 (function__286)
{return function B287 ()
{
var arguments__288 = $SL.call(arguments, 0),
value__290 = B215(function__286, arguments__288);
return !(B14(value__290))}}, false);
exports.complement = B284}
{
var B335 = $K("from-end?"),
B293 = B9("compose", function compose__294 ()
{
var functions__295 = $SL.call(arguments, 0),
sequence__311 = functions__295,
B312 = sequence__311,
B313 = ((B312 || false).length || 0),
B314 = 0,
B329 = (B313 === B314);
if ($T(B329))
return B186
else
return function B296 ()
{
var arguments__297 = $SL.call(arguments, 0),
B330 = function B298 (value__299, function__300)
{return function__300(value__299)},
array__322 = functions__295,
B323 = array__322,
B324 = ((B323 || false).length || 0),
B331 = (B324 - 1),
B332 = array__322[B331],
B333 = B215(B332, arguments__297),
array__327 = functions__295,
n__328 = undefined,
B334 = array__327.slice(0, ((n__328 || 1) * -1));
return B139(B330, B333, B334, B335, true)}}, false);
exports.compose = B293}
var B336 = B9("binaryP", function binaryP__337 (number1__338, number2__339)
{return (number1__338 + number2__339)}, false)
{
var B340 = B9("P", function P__341 ()
{
var numbers__342 = $SL.call(arguments, 0),
sequence__353 = numbers__342,
B354 = sequence__353,
B355 = ((B354 || false).length || 0),
B356 = 0,
B369 = (B355 === B356);
if ($T(B369))
return 0
else
{
var function__365 = B336,
values__366 = numbers__342,
B367 = values__366,
B370 = B367[0],
B368 = values__366,
B371 = B368.slice(1);
return B139(function__365, B370, B371)}}, false);
exports["+"] = B340}
var B372 = B9("binary_", function binary___373 (number1__374, number2__375)
{return (number1__374 - number2__375)}, false)
{
var B376 = B9("_", function ___377 (minuend__378)
{
var subtrahends__379 = $SL.call(arguments, 1),
sequence__390 = subtrahends__379,
B391 = sequence__390,
B392 = ((B391 || false).length || 0),
B393 = 0,
B394 = (B392 === B393);
if ($T(B394))
return -(minuend__378)
else
return B139(B372, minuend__378, subtrahends__379)}, false);
exports["-"] = B376}
var B395 = B9("binaryT", function binaryT__396 (number1__397, number2__398)
{return (number1__397 * number2__398)}, false)
{
var B399 = B9("T", function T__400 ()
{
var numbers__401 = $SL.call(arguments, 0),
sequence__412 = numbers__401,
B413 = sequence__412,
B414 = ((B413 || false).length || 0),
B415 = 0,
B428 = (B414 === B415);
if ($T(B428))
return 1
else
{
var function__424 = B395,
values__425 = numbers__401,
B426 = values__425,
B429 = B426[0],
B427 = values__425,
B430 = B427.slice(1);
return B139(function__424, B429, B430)}}, false);
exports["*"] = B399}
var B431 = B9("binaryS", function binaryS__432 (number1__433, number2__434)
{return (number1__433 / number2__434)}, false)
{
var B435 = B9("S", function S__436 (numerator__437)
{
var denominators__438 = $SL.call(arguments, 1),
sequence__449 = denominators__438,
B450 = sequence__449,
B451 = ((B450 || false).length || 0),
B452 = 0,
B453 = (B451 === B452);
if ($T(B453))
return (1 / numerator__437)
else
return B139(B431, numerator__437, denominators__438)}, false);
exports["/"] = B435}
{
var B454 = B9("type", function type__455 (object__456)
{if ($T(object__456))
return object__456.constructor
else
return B5}, false);
exports.type = B454}
{
var B458 = B9("instanceQ", function instanceQ__459 (object__460, type__461)
{if ($T(object__460))
{
var ctor__462 = object__460.constructor,
object1__466 = ctor__462,
object2__467 = type__461,
B463 = (object1__466 === object2__467);
if ($T(B463))
return B463
else
return (object__460 instanceof type__461)}
else
{
var object1__470 = type__461,
object2__471 = B5;
return (object1__470 === object2__471)}}, false);
exports["instance?"] = B458}
$HP = Object.hasOwnProperty
{
var B472 = B9("hasQ", function hasQ__473 (object__474, property__475)
{return $HP.call(object__474,property__475)}, false);
exports["has?"] = B472}
{
var B476,
B477 = B9("Mmake_method", function Mmake_method__478 (name__479, function__480, setterQ__481, type__482, existing__483)
{
var prototype__484 = type__482.prototype,
object__489 = prototype__484,
property__490 = name__479,
B495 = $HP.call(object__489,property__490),
existing_method__485;
if ($T(B495))
existing_method__485 = prototype__484[name__479]
else
existing_method__485 = false;
var genericQ__486;
if ($T(existing__483))
{
var object__493 = existing__483,
property__494 = "%generic?",
B496 = $HP.call(object__493,property__494);
if ($T(B496))
genericQ__486 = existing__483["%generic?"]
else
genericQ__486 = false}
else
genericQ__486 = false;
function__480["%name"] = name__479;
function__480["%setter?"] = setterQ__481;
function__480["%type"] = type__482;
prototype__484[name__479] = function__480;
if ($T(genericQ__486))
return existing__483
else
return B476(name__479)}, false);
exports["%make-method"] = B477}
{
B476 = B9("Mmake_generic", function Mmake_generic__498 (name__499)
{
var dispatcher__503 = function B500 (object__501)
{
var function__502 = ((object__501 !== null) && (object__501 !== undefined) && object__501[name__499]);
return (function__502 && function__502.apply(object__501, arguments))};
dispatcher__503["%generic?"] = true;
dispatcher__503["%name"] = name__499;
return dispatcher__503}, false);
exports["%make-generic"] = B476}
{
var B504 = B9("Mnext_method", function Mnext_method__505 (function__506)
{
var name__507 = function__506["%name"],
proto__508 = function__506["%type"].prototype.__proto__;
return proto__508[name__507]}, false);
exports["%next-method"] = B504}
{
var B509 = B9("concatenate", function concatenate__510 (object__511)
{
var rest__512 = $SL.call(arguments, 1),
B513;
if ($T(B458(object__511, B4)))
B513 = B53
else
B513 = B336;
return B139(B513, object__511, rest__512)}, false);
exports.concatenate = B509}
{
var B515 = B9("compare", function compare__516 (function__517, object__518, objects__519)
{
var failedQ__520;
while (true)
{
var B521 = failedQ__520,
value__538;
if ($T(B521))
value__538 = B521
else
{
var sequence__534 = objects__519,
B535 = sequence__534,
B536 = ((B535 || false).length || 0),
B537 = 0;
value__538 = (B536 === B537)};
var B549 = !(B14(value__538));
if ($T(B549))
{
var sequence__540 = objects__519,
other__522 = sequence__540[0],
value__542 = function__517(object__518, other__522),
B547 = !(B14(value__542));
failedQ__520 = B547;
var sequence__544 = objects__519,
B548 = sequence__544.slice(1);
objects__519 = B548;
object__518 = other__522}
else
break};
var value__546 = failedQ__520;
return !(B14(value__546))}, false);
exports.compare = B515}
{
var B550 = B9("EE", function EE__551 (object__552)
{
var objects__553 = $SL.call(arguments, 1);
return B515(B29, object__552, objects__553)}, false);
exports["=="] = B550}
{
var B554 = B476("binaryE");
exports["binary="] = B554}
{
var B555 = B476("binaryL");
exports["binary<"] = B555}
{
B554 = B477("binaryE", function B557 (object1__558, object2__559)
{
var object1__562 = B454(object1__558),
object2__563 = B454(object2__559),
B568 = (object1__562 === object2__563);
if ($T(B568))
{
var object1__566 = object1__558,
object2__567 = object2__559;
return (object1__566 === object2__567)}}, false, B1, B554);
exports["binary="] = B554}
{
var B577;
B554 = B477("binaryE", function B578 (array1__579, array2__580)
{
var object__595 = array1__579,
object1__598 = ((object__595 || false).length || 0),
object__597 = array2__580,
object2__599 = ((object__597 || false).length || 0),
B614 = (object1__598 === object2__599);
if ($T(B614))
{
var B581 = array1__579,
B582 = array2__580,
B583,
B584,
B585 = [B581, B582];
while (true)
{
var B586 = B583,
value__602;
if ($T(B586))
value__602 = B586
else
value__602 = B577(B68, B585);
var B618 = !(B14(value__602));
if ($T(B618))
{
var sequence__604 = B581,
item1__587 = sequence__604[0],
sequence__606 = B582,
item2__588 = sequence__606[0],
value__608 = B554(item1__587, item2__588),
B615 = !(B14(value__608));
if ($T(B615))
{
B584 = true;
B583 = true}
else
{
(function B589 (item1__590, item2__591)
{return false})(item1__587, item2__588);
var sequence__610 = B581,
B616 = sequence__610.slice(1);
B581 = B616;
var sequence__612 = B582,
B617 = sequence__612.slice(1);
B582 = B617;
B585 = [B581, B582]}}
else
break};
var value__613 = B584;
return !(B14(value__613))}}, false, B4, B554);
exports["binary="] = B554}
var B619 = B554
{
B554 = B9("binaryE", function binaryE__621 (object1__622, object2__623)
{
var value__626 = object1__622,
B629 = !(B14(value__626)),
B624;
if ($T(B629))
{
var value__628 = object2__623;
B624 = !(B14(value__628))}
else
B624 = false;
if ($T(B624))
return B624
else
return B619(object1__622, object2__623)}, false);
exports["binary="] = B554}
{
var B630 = B9("E", function E__631 (object__632)
{
var objects__633 = $SL.call(arguments, 1);
return B515(B554, object__632, objects__633)}, false);
exports["="] = B630}
{
B555 = B477("binaryL", function B635 (object1__636, object2__637)
{
var object1__640 = B454(object1__636),
object2__641 = B454(object2__637),
B642 = (object1__640 === object2__641);
if ($T(B642))
return (object1__636 < object2__637)}, false, B1, B555);
exports["binary<"] = B555}
{
B185 = B9("L", function L__643 (object__644)
{
var objects__645 = $SL.call(arguments, 1);
return B515(B555, object__644, objects__645)}, false);
exports["<"] = B185}
{
var B647 = B9("binaryLE", function binaryLE__648 (object1__649, object2__650)
{if ($T(object1__649))
if ($T(object2__650))
{
var B651 = B555(object1__649, object2__650);
if ($T(B651))
return B651
else
return B554(object1__649, object2__650)}}, false);
exports["binary<="] = B647}
{
var B652 = B9("LE", function LE__653 (object__654)
{
var objects__655 = $SL.call(arguments, 1);
return B515(B647, object__654, objects__655)}, false);
exports["<="] = B652}
{
var B656 = B9("binaryG", function binaryG__657 (object1__658, object2__659)
{if ($T(object1__658))
if ($T(object2__659))
{
var value__661 = B555(object1__658, object2__659),
B664 = !(B14(value__661));
if ($T(B664))
{
var value__663 = B554(object1__658, object2__659);
return !(B14(value__663))}}}, false);
exports["binary>"] = B656}
{
var B665 = B9("G", function G__666 (object__667)
{
var objects__668 = $SL.call(arguments, 1);
return B515(B656, object__667, objects__668)}, false);
exports[">"] = B665}
{
var B670 = B9("binaryGE", function binaryGE__671 (object1__672, object2__673)
{
var value__676 = B555(object1__672, object2__673),
B674 = !(B14(value__676));
if ($T(B674))
return B674
else
return B554(object1__672, object2__673)}, false);
exports["binary>="] = B670}
{
B152 = B9("GE", function GE__677 (object__678)
{
var objects__679 = $SL.call(arguments, 1);
return B515(B670, object__678, objects__679)}, false);
exports[">="] = B152}
{
var B680 = B9("as_object", function as_object__681 (property_list__682)
{
var array__690 = property_list__682,
start__691 = undefined,
end__692 = undefined,
list__683 = array__690.slice(start__691, end__692),
result__684 = {};
while (true)
{
var object__694 = list__683,
B700 = ((object__694 || false).length || 0),
B701 = B665(B700, 0);
if ($T(B701))
{
var array__696 = list__683,
key__685 = array__696.shift(),
array__698 = list__683,
value__686 = array__698.shift(),
B699;
if ($T(B458(key__685, B45)))
B699 = key__685.name
else
B699 = B57(key__685);
key__685 = B699;
result__684[key__685] = value__686}
else
break};
return result__684}, false);
exports["as-object"] = B680}
{
var B702 = B9("position", function position__703 (array__704, element__705)
{
var position__706 = array__704.indexOf(element__705);
if ($T(B665(position__706, -1)))
return position__706}, false);
exports.position = B702}
{
var B707 = B9("last_position", function last_position__708 (array__709, element__710)
{
var position__711 = array__709.lastIndexOf(element__710);
if ($T(B665(position__711, -1)))
return position__711}, false);
exports["last-position"] = B707}
{
var B712 = B9("as_uppercase", function as_uppercase__713 (string__714)
{return string__714.toUpperCase()}, false);
exports["as-uppercase"] = B712}
{
var B715 = B9("as_lowercase", function as_lowercase__716 (string__717)
{return string__717.toLowerCase()}, false);
exports["as-lowercase"] = B715}
{
var B718 = B9("join", function join__719 (array__720, string__721)
{return array__720.join(string__721)}, false);
exports.join = B718}
{
var B722 = B9("trim", function trim__723 (string__724)
{return string__724.trim()}, false);
exports.trim = B722}
{
var B725 = B9("replace", function replace__726 (string__727, pattern__728, replacement__729)
{return string__727.replace(pattern__728, replacement__729)}, false);
exports.replace = B725}
{
var B730 = B9("make_object", function make_object__731 ()
{
var key_values__732 = $SL.call(arguments, 0);
return B680(key_values__732)}, false);
exports["make-object"] = B730}
{
var B733 = B38(B1, {name:false,
module:false});
exports["<symbol>"] = B733}
var B734 = {}
{
var B752 = $K("name"),
B753 = $K("module"),
B737,
B738,
B739,
B740 = B9("symbol", function symbol__741 (name__742, module__743)
{
var string__749 = name__742,
name__744 = string__749.toLowerCase(),
B745 = module__743,
string__751;
if ($T(B745))
string__751 = B745
else
string__751 = "";
var moduleT__746 = string__751.toLowerCase(),
B747 = B739(B734, moduleT__746, name__744);
if ($T(B747))
return B747
else
return B737(B734, moduleT__746, name__744, B738(B733, B752, name__744, B753, module__743))}, false);
exports.symbol = B740}
$S = B740
{
var B754 = B9("symbol_name", function symbol_name__755 (symbol__756)
{return B739(symbol__756, "name")}, false);
exports["symbol-name"] = B754}
{
B184 = B9("Mkeys", function Mkeys__758 (key_values__759, defaults__760)
{
var i__761 = 0;
while (true)
{
var object__768 = key_values__759,
B776 = ((object__768 || false).length || 0),
value__769 = (i__761 >= B776),
B777 = !(B14(value__769));
if ($T(B777))
{
(function B762 (i__763)
{
var key__764 = key_values__759[i__763],
number__771 = i__763,
B774 = (number__771 + 1),
value__765 = key_values__759[B774];
if ($T(B458(key__764, B45)))
return defaults__760[key__764.name] = value__765})(i__761);
var number__773 = i__761,
B775 = (number__773 + 1);
i__761 = B775}
else
break};
false;
return defaults__760}, false);
exports["%keys"] = B184}
{
var B782,
B783,
B784,
B785 = B9("find_key", function find_key__786 (array__787, predicate__788)
{
var B789 = $SL.call(arguments, 2),
B790 = B184(B789, {skip:0,
failure:false,
"from-end?":false}),
skip__791 = B790.skip,
failure__792 = B790.failure,
from_endQ__793 = B790["from-end?"],
keys__794 = B784(array__787),
B799 = function B795 (index__796)
{return predicate__788(B782(array__787, index__796))},
B800;
if ($T(from_endQ__793))
B800 = B170(keys__794)
else
B800 = keys__794;
var satisfying_keys__797 = B783(B799, B800),
B798 = B782(satisfying_keys__797, skip__791);
if ($T(B798))
return B798
else
return failure__792}, false);
exports["find-key"] = B785}
{
var B803 = B9("parse_integer", function parse_integer__804 (value__805)
{
var B806 = $SL.call(arguments, 1),
B807 = B184(B806, {radix:10}),
radix__808 = B807.radix;
return parseInt(value__805, radix__808)}, false);
exports["parse-integer"] = B803}
{
B782 = B9("element", function element__812 (array__813, index__814)
{
var B815 = $SL.call(arguments, 2),
B816 = B184(B815, {"default":false}),
default__817 = B816["default"],
B818 = array__813[index__814];
if ($T(B818))
return B818
else
return default__817}, false);
exports.element = B782}
{
var B819 = B9("element_setter", function element_setter__820 (array__821, key__822, value__823)
{return array__821[key__822] = value__823}, true);
exports["element-setter"] = B819}
{
var B826 = B9("replace_subsequence", function replace_subsequence__827 (target_array__828, insert_array__829)
{
var B830 = $SL.call(arguments, 2),
object__835 = target_array__828,
B848 = ((object__835 || false).length || 0),
B849 = {start:0,
end:B848},
B831 = B184(B830, B849),
start__832 = B831.start,
end__833 = B831.end,
array__839 = target_array__828,
start__840 = 0,
end__841 = start__832,
B850 = array__839.slice(start__840, end__841),
array__845 = target_array__828,
start__846 = end__833,
end__847 = undefined,
B851 = array__845.slice(start__846, end__847);
return B509(B850, insert_array__829, B851)}, false);
exports["replace-subsequence"] = B826}
{
var B854 = B9("replace_subsequenceN", function replace_subsequenceN__855 (target_array__856, insert_array__857)
{
var B858 = $SL.call(arguments, 2),
object__864 = target_array__856,
B869 = ((object__864 || false).length || 0),
B870 = {start:0,
end:B869},
B859 = B184(B858, B870),
start__860 = B859.start,
end__861 = B859.end,
array1__867 = [start__860, B376(end__861, start__860)],
array2__868 = insert_array__857,
rest__862 = array1__867.concat(array2__868);
[].splice.apply(target_array__856, rest__862);
return target_array__856}, false);
exports["replace-subsequence!"] = B854}
{
var B874 = B9("removeN", function removeN__875 (array__876, value__877)
{
var B878 = $SL.call(arguments, 2),
B879 = B184(B878, {test:B550}),
test__880 = B879.test,
B881 = B785(array__876, B235(test__880, value__877));
if ($T(B881))
{
var key__882 = B881;
array__876.splice(key__882, 1)};
return array__876}, false);
exports["remove!"] = B874}
{
var B885 = B9("remove", function remove__886 (array__887, value__888)
{
var B889 = $SL.call(arguments, 2),
B890 = B184(B889, {test:B550}),
test__891 = B890.test,
array__895 = array__887,
start__896 = undefined,
end__897 = undefined,
B898 = array__895.slice(start__896, end__897);
return B874(B898, value__888, B213, test__891)}, false);
exports.remove = B885}
{
var B900 = B9("interpose", function interpose__901 (separator__902, array__903)
{
var function__915 = function B904 (a__905, b__906)
{return B509([a__905, separator__902], b__906)},
values__916 = array__903,
B917 = values__916,
B919 = B917[0],
B918 = values__916,
B920 = B918.slice(1);
return B139(function__915, B919, B920)}, false);
exports.interpose = B900}
{
B577 = B9("anyQ", function anyQ__923 (function__924, values__925)
{
var value__926,
object__933 = values__925,
n__927 = ((object__933 || false).length || 0),
i__928 = 0;
while (true)
{
var B929 = value__926,
value__935;
if ($T(B929))
value__935 = B929
else
value__935 = B152(i__928, n__927);
var B939 = !(B14(value__935));
if ($T(B939))
{
(function B930 (i__931)
{return value__926 = function__924(values__925[i__931])})(i__928);
var number__937 = i__928,
B938 = (number__937 + 1);
i__928 = B938}
else
break};
return value__926}, false);
exports["any?"] = B577}
{
var B943 = B9("memberQ", function memberQ__944 (value__945, array__946)
{
var B947 = $SL.call(arguments, 2),
B948 = B184(B947, {test:B550}),
test__949 = B948.test;
return B577(function B950 (other_value__951)
{return test__949(value__945, other_value__951)}, array__946)}, false);
exports["member?"] = B943}
{
var B953 = B9("everyQ", function everyQ__954 (function__955, array__956)
{
var value__962 = B577(function B957 (value__958)
{
var value__961 = function__955(value__958);
return !(B14(value__961))}, array__956);
return !(B14(value__962))}, false);
exports["every?"] = B953}
{
var map__970,
B969 = B9("map", function map__970 (function__971)
{
var arrays__972 = $SL.call(arguments, 1),
result__973 = [],
sequence__993 = arrays__972,
sequence__994 = sequence__993.slice(1),
B995 = sequence__994,
B996 = ((B995 || false).length || 0),
B997 = 0,
B1016 = (B996 === B997);
if ($T(B1016))
{
var sequence__999 = arrays__972,
B974 = sequence__999[0],
B975,
B976,
B977 = [B974];
while (true)
{
var B978 = B975,
value__1001;
if ($T(B978))
value__1001 = B978
else
value__1001 = B577(B68, B977);
var B1018 = !(B14(value__1001));
if ($T(B1018))
{
var sequence__1003 = B974,
item__979 = sequence__1003[0];
(function B980 (item__981)
{
var array__1006 = result__973,
value__1007 = function__971(item__981);
array__1006.push(value__1007);
return array__1006})(item__979);
var sequence__1009 = B974,
B1017 = sequence__1009.slice(1);
B974 = B1017;
B977 = [B974]}
else
break};
B976}
else
while (true)
{
var value__1011 = B577(B68, arrays__972),
B1019 = !(B14(value__1011));
if ($T(B1019))
{
var array__1014 = result__973,
value__1015 = B215(function__971, map__970(B92, arrays__972));
array__1014.push(value__1015);
array__1014;
arrays__972 = map__970(B77, arrays__972)}
else
break};
return result__973}, false);
exports.map = B969}
{
var B1026 = B9("Rdo", function do__1027 (function__1028)
{
var arrays__1029 = $SL.call(arguments, 1),
sequence__1049 = arrays__1029,
sequence__1050 = sequence__1049.slice(1),
B1051 = sequence__1050,
B1052 = ((B1051 || false).length || 0),
B1053 = 0,
B1064 = (B1052 === B1053);
if ($T(B1064))
{
var sequence__1055 = arrays__1029,
B1030 = sequence__1055[0],
B1031,
B1032,
B1033 = [B1030];
while (true)
{
var B1034 = B1031,
value__1057;
if ($T(B1034))
value__1057 = B1034
else
value__1057 = B577(B68, B1033);
var B1066 = !(B14(value__1057));
if ($T(B1066))
{
var sequence__1059 = B1030,
item__1035 = sequence__1059[0];
(function B1036 (item__1037)
{return function__1028(item__1037)})(item__1035);
var sequence__1061 = B1030,
B1065 = sequence__1061.slice(1);
B1030 = B1065;
B1033 = [B1030]}
else
break};
B1032}
else
while (true)
{
var value__1063 = B577(B68, arrays__1029),
B1067 = !(B14(value__1063));
if ($T(B1067))
{
B215(function__1028, B969(B92, arrays__1029));
arrays__1029 = B969(B77, arrays__1029)}
else
break};
return false}, false);
exports["do"] = B1026}
{
B783 = B9("choose", function choose__1074 (function__1075, array__1076)
{
var result__1077 = [],
B1078 = array__1076,
B1079,
B1080,
B1081 = [B1078];
while (true)
{
var B1082 = B1079,
value__1087;
if ($T(B1082))
value__1087 = B1082
else
value__1087 = B577(B68, B1081);
var B1097 = !(B14(value__1087));
if ($T(B1097))
{
var sequence__1089 = B1078,
element__1083 = sequence__1089[0];
(function B1084 (element__1085)
{if ($T(function__1075(element__1085)))
{
var array__1092 = result__1077,
value__1093 = element__1085;
array__1092.push(value__1093);
return array__1092}})(element__1083);
var sequence__1095 = B1078,
B1096 = sequence__1095.slice(1);
B1078 = B1096;
B1081 = [B1078]}
else
break};
B1080;
return result__1077}, false);
exports.choose = B783}
{
var B1101 = B9("copy_sequence", function copy_sequence__1102 (array__1103)
{
var B1104 = $SL.call(arguments, 1),
B1105 = B184(B1104, {start:0,
end:false}),
start__1106 = B1105.start,
end__1107 = B1105.end,
B1108 = end__1107,
end__1109;
if ($T(B1108))
end__1109 = B1108
else
end__1109 = undefined;
var array__1113 = array__1103,
start__1114 = start__1106,
end__1115 = end__1109;
return array__1113.slice(start__1114, end__1115)}, false);
exports["copy-sequence"] = B1101}
{
var B1116;
B738 = B9("make", function make__1117 (type__1118)
{
var arguments__1119 = $SL.call(arguments, 1),
object__1120 = new(type__1118);
B215(B1116, object__1120, arguments__1119);
return object__1120}, false);
exports.make = B738}
{
B784 = B9("object_properties", function object_properties__1125 (object__1126)
{
var B1127 = $SL.call(arguments, 1),
B1128 = B184(B1127, {"inherited?":false}),
inheritedQ__1129 = B1128["inherited?"],
result__1130 = [];
if ($T(B458(object__1126, B4)))
{
var object__1137 = object__1126,
B1131 = ((object__1137 || false).length || 0),
i__1132 = 0;
while (true)
{
var value__1139 = B152(i__1132, B1131),
B1144 = !(B14(value__1139));
if ($T(B1144))
{
(function B1133 (i__1134)
{
var array__1142 = result__1130,
value__1143 = i__1134;
array__1142.push(value__1143);
return array__1142})(i__1132);
i__1132 = B340(i__1132, 1)}
else
break};
false}
else
{
var i__1135;
for (i__1135 in object__1126) (inheritedQ__1129||$HP.call(object__1126, i__1135)) &&result__1130.push(i__1135)};
return result__1130}, false);
exports["object-properties"] = B784}
{
var B1145 = B9("object_values", function object_values__1146 (object__1147)
{return B969(B235(B739, object__1147), B784(object__1147))}, false);
exports["object-values"] = B1145}
{
B1116 = B476("initialize");
exports.initialize = B1116}
{
var B1176 = $K("inherited?");
B1116 = B477("initialize", function B1153 (object__1154)
{
var rest__1155 = $SL.call(arguments, 1),
arguments__1156 = B680(rest__1155),
B1157 = B454(object__1154)["%properties"];
if ($T(B1157))
{
var properties__1158 = B1157;
B1026(function B1159 (key__1160)
{
var object__1168 = B1.prototype,
property__1169 = key__1160,
B1161 = $HP.call(object__1168,property__1169),
value__1174;
if ($T(B1161))
value__1174 = B1161
else
{
var object__1172 = object__1154,
property__1173 = key__1160;
value__1174 = $HP.call(object__1172,property__1173)};
var B1175 = !(B14(value__1174));
if ($T(B1175))
{
var B1162 = arguments__1156[key__1160],
value__1164;
if ($T(B1162))
value__1164 = B1162
else
{
var value__1163 = properties__1158[key__1160];
if ($T(value__1163))
value__1164 = value__1163()
else
value__1164 = false};
return object__1154[key__1160] = value__1164}}, B784(properties__1158, B1176, true))};
return object__1154}, false, B1, B1116);
exports.initialize = B1116}
{
var B1177 = B38(B1, {name:false});
exports["<hash-symbol>"] = B1177}
{
var key__1178 = B738(B1177, B752, "key");
$KEY = key__1178}
{
var rest__1179 = B738(B1177, B752, "rest");
$REST = rest__1179}
{
B739 = B9("get", function get__1186 (object__1187)
{
var properties__1188 = $SL.call(arguments, 1),
result__1189,
B1190 = properties__1188,
B1191,
B1192,
B1193 = [B1190];
while (true)
{
var B1194 = B1191,
value__1199;
if ($T(B1194))
value__1199 = B1194
else
value__1199 = B577(B68, B1193);
var B1212 = !(B14(value__1199));
if ($T(B1212))
{
var sequence__1201 = B1190,
property__1195 = sequence__1201[0],
object__1205 = object__1187,
property__1206 = property__1195,
value__1207 = $HP.call(object__1205,property__1206),
B1210 = !(B14(value__1207));
if ($T(B1210))
{
B1192 = result__1189 = false;
B1191 = true}
else
{
(function B1196 (property__1197)
{
result__1189 = object__1187[property__1197];
return object__1187 = result__1189})(property__1195);
var sequence__1209 = B1190,
B1211 = sequence__1209.slice(1);
B1190 = B1211;
B1193 = [B1190]}}
else
break};
B1192;
return result__1189}, false);
exports.get = B739}
{
B737 = B9("get_setter", function get_setter__1213 (object__1214)
{
var propertiesSvalue__1215 = $SL.call(arguments, 1),
object__1219 = propertiesSvalue__1215,
B1230 = ((object__1219 || false).length || 0),
B1231 = B652(B1230, 2);
if ($T(B1231))
{
var sequence__1221 = propertiesSvalue__1215,
B1232 = sequence__1221[1];
return object__1214[B92(propertiesSvalue__1215)] = B1232}
else
{
var sequence__1223 = propertiesSvalue__1215,
property__1216 = sequence__1223[0],
object__1226 = object__1214,
property__1227 = property__1216,
B1233 = $HP.call(object__1226,property__1227),
object2__1217;
if ($T(B1233))
object2__1217 = object__1214[property__1216]
else
object2__1217 = object__1214[property__1216] = B730();
var sequence__1229 = propertiesSvalue__1215,
B1234 = sequence__1229.slice(1);
return B215(get_setter__1213, object2__1217, B1234)}}, true);
exports["get-setter"] = B737}
{
var B1236 = B9("split_with", function split_with__1237 (function__1238, array__1239)
{
var a__1240 = [],
b__1241 = [];
B1026(function B1242 (item__1243)
{
var array__1246;
if ($T(function__1238(item__1243)))
array__1246 = a__1240
else
array__1246 = b__1241;
var value__1247 = item__1243;
array__1246.push(value__1247);
return array__1246}, array__1239);
return [a__1240, b__1241]}, false);
exports["split-with"] = B1236}
{
var B1248 = B9("as_hex_string", function as_hex_string__1249 (number__1250)
{return number__1250.toString(16)}, false);
exports["as-hex-string"] = B1248}
{
var B1251 = B476("description");
exports.description = B1251}
{
B1251 = B477("description", function B1253 (number__1254)
{return ("" + number__1254)}, false, B3, B1251);
exports.description = B1251}
{
B1251 = B477("description", function B1256 (string__1257)
{
var escaped__1258 = string__1257.replace("\"", "\\\"", "g");
return ("\"" + escaped__1258 + "\"")}, false, B2, B1251);
exports.description = B1251}
{
B1251 = B477("description", function B1260 (array__1261)
{return ("(" + B718(B969(B1251, array__1261), " ") + ")")}, false, B4, B1251);
exports.description = B1251}
{
B1251 = B477("description", function B1263 (value__1264)
{if ($T(value__1264))
return "#t"
else
return "#f"}, false, B5, B1251);
exports.description = B1251}
{
B1251 = B477("description", function B1267 (symbol__1268)
{
var B1269 = B739(symbol__1268, "module"),
B1271;
if ($T(B1269))
{
var module__1270 = B1269;
B1271 = B509(module__1270, "::")}
else
B1271 = "";
var B1272 = B754(symbol__1268);
return (B1271 + B1272)}, false, B733, B1251);
exports.description = B1251}
{
B1251 = B477("description", function B1274 (keyword__1275)
{return (B754(keyword__1275) + ":")}, false, B45, B1251);
exports.description = B1251}
{
B1251 = B477("description", function B1277 (symbol__1278)
{return ("#" + B754(symbol__1278))}, false, B1177, B1251);
exports.description = B1251}
{
var B1279 = Math.min;
exports.min = B1279}
{
var B1280 = Math.max;
exports.max = B1280}
{
var B1281 = Math.abs;
exports.abs = B1281}
{
var B1282 = Math.round;
exports.round = B1282}
{
var B1283 = Math.floor;
exports.floor = B1283}
{
var B1284 = Math.ceil;
exports.ceil = B1284}
{
var B1285 = Math.sin;
exports.sin = B1285}
{
var B1286 = Math.cos;
exports.cos = B1286}
{
var B1287 = Math.atan2;
exports.atan2 = B1287}
{
var B1288 = Math.pow;
exports.expt = B1288}
{
var B1289 = Math.sqrt;
exports.sqrt = B1289}
{
var B1290 = B9("mod", function mod__1291 (number1__1292, number2__1293)
{return (number1__1292 % number2__1293)}, false);
exports.mod = B1290}
{
var B1294 = Math.PI;
exports["*pi*"] = B1294}
var B1295 = (B1294 / 180)
{
var B1296 = B9("as_radiant", function as_radiant__1297 (number__1298)
{return (number__1298 * B1295)}, false);
exports["as-radiant"] = B1296}
{
var B1299 = B9("signal", function signal__1300 (error__1301)
{
throw(error__1301);
return false}, false);
exports.signal = B1299}
{
var B1308 = B9("extendN", function extendN__1309 (object1__1310, object2__1311)
{
var B1312 = B784(object2__1311),
B1313,
B1314,
B1315 = [B1312];
while (true)
{
var B1316 = B1313,
value__1321;
if ($T(B1316))
value__1321 = B1316
else
value__1321 = B577(B68, B1315);
var B1327 = !(B14(value__1321));
if ($T(B1327))
{
var sequence__1323 = B1312,
key__1317 = sequence__1323[0];
(function B1318 (key__1319)
{return B737(object1__1310, key__1319, B739(object2__1311, key__1319))})(key__1317);
var sequence__1325 = B1312,
B1326 = sequence__1325.slice(1);
B1312 = B1326;
B1315 = [B1312]}
else
break};
B1314;
return object1__1310}, false);
exports["extend!"] = B1308}
{
var B1336 = B9("as_property_list", function as_property_list__1337 (object__1338)
{
var B1339 = $SL.call(arguments, 1),
B1340 = B184(B1339, {"keywords?":false}),
keywordsQ__1341 = B1340["keywords?"],
result__1342 = [],
B1343 = B784(object__1338),
B1344,
B1345,
B1346 = [B1343];
while (true)
{
var B1347 = B1344,
value__1352;
if ($T(B1347))
value__1352 = B1347
else
value__1352 = B577(B68, B1346);
var B1366 = !(B14(value__1352));
if ($T(B1366))
{
var sequence__1354 = B1343,
key__1348 = sequence__1354[0];
(function B1349 (key__1350)
{
var array__1357 = result__1342,
value__1358;
if ($T(keywordsQ__1341))
value__1358 = B47(B57(key__1350))
else
value__1358 = key__1350;
array__1357.push(value__1358);
array__1357;
var array__1361 = result__1342,
value__1362 = B739(object__1338, key__1350);
array__1361.push(value__1362);
return array__1361})(key__1348);
var sequence__1364 = B1343,
B1365 = sequence__1364.slice(1);
B1343 = B1365;
B1346 = [B1343]}
else
break};
B1345;
return result__1342}, false);
exports["as-property-list"] = B1336}
{
var B1375 = B9("as_association_list", function as_association_list__1376 (object__1377)
{
var B1378 = $SL.call(arguments, 1),
B1379 = B184(B1378, {"keywords?":false}),
keywordsQ__1380 = B1379["keywords?"],
result__1381 = [],
B1382 = B784(object__1377),
B1383,
B1384,
B1385 = [B1382];
while (true)
{
var B1386 = B1383,
value__1391;
if ($T(B1386))
value__1391 = B1386
else
value__1391 = B577(B68, B1385);
var B1403 = !(B14(value__1391));
if ($T(B1403))
{
var sequence__1393 = B1382,
key__1387 = sequence__1393[0];
(function B1388 (key__1389)
{
var array__1396 = result__1381,
B1400;
if ($T(keywordsQ__1380))
B1400 = B47(B57(key__1389))
else
B1400 = key__1389;
var B1401 = B739(object__1377, key__1389),
value__1397 = [B1400, B1401];
array__1396.push(value__1397);
return array__1396})(key__1387);
var sequence__1399 = B1382,
B1402 = sequence__1399.slice(1);
B1382 = B1402;
B1385 = [B1382]}
else
break};
B1384;
return result__1381}, false);
exports["as-association-list"] = B1375}
{
var B1404 = B9("starts_withQ", function starts_withQ__1405 (string__1406, prefix__1407)
{
var object1__1410 = string__1406.indexOf(prefix__1407),
object2__1411 = 0;
return (object1__1410 === object2__1411)}, false);
exports["starts-with?"] = B1404}
{
var B1412 = B9("evenQ", function evenQ__1413 (number__1414)
{
var object1__1417 = (number__1414 % 2),
object2__1418 = 0;
return (object1__1417 === object2__1418)}, false);
exports["even?"] = B1412}
{
var B1419 = B9("oddQ", function oddQ__1420 (number__1421)
{
var object1__1424 = (number__1421 % 2),
object2__1425 = 1;
return (object1__1424 === object2__1425)}, false);
exports["odd?"] = B1419}
{
var B1427 = B9("group_by", function group_by__1428 (predicate__1429, items__1430)
{return B139(function B1431 (result__1432, item__1433)
{
var key__1434 = predicate__1429(item__1433),
object__1437 = result__1432,
property__1438 = key__1434,
B1443 = $HP.call(object__1437,property__1438);
if ($T(B1443))
{
var array__1441 = B739(result__1432, key__1434),
value__1442 = item__1433;
array__1441.push(value__1442);
array__1441}
else
B737(result__1432, key__1434, [item__1433]);
return result__1432}, B730(), items__1430)}, false);
exports["group-by"] = B1427}
var B1444 = B9("wrap_object", function wrap_object__1445 (object__1446)
{
var rest__1447 = $SL.call(arguments, 1),
result__1448 = Object.create(object__1446);
B1308(result__1448, B680(rest__1447));
return result__1448}, false)
var B1449 = B9("unwrap_object", function unwrap_object__1450 (object__1451)
{return object__1451.__proto__}, false)
{
var B1454 = B9("update_with", function update_with__1455 (fn__1456, obj__1457)
{
var objs__1458 = $SL.call(arguments, 2);
return B1026(function B1459 (obj2__1460)
{return B1026(function B1461 (property__1462)
{
var value__1463 = B739(obj2__1460, property__1462),
object__1466 = obj__1457,
property__1467 = property__1462,
B1468 = $HP.call(object__1466,property__1467),
B1469;
if ($T(B1468))
B1469 = fn__1456(B739(obj__1457, property__1462), value__1463)
else
B1469 = value__1463;
return B737(obj__1457, property__1462, B1469)}, B784(obj2__1460))}, objs__1458)}, false);
exports["update-with"] = B1454}
{
var B1470,
B1471 = B9("as_set", function as_set__1472 (values__1473)
{
var set__1474 = [];
return B1470(set__1474, values__1473)}, false);
exports["as-set"] = B1471}
{
var B1475 = B9("set_addN", function set_addN__1476 (set__1477, object__1478)
{
var value__1480 = B943(object__1478, set__1477),
B1485 = !(B14(value__1480));
if ($T(B1485))
{
var array__1483 = set__1477,
value__1484 = object__1478;
array__1483.push(value__1484);
return array__1483}}, false);
exports["set-add!"] = B1475}
{
var B1486 = B874;
exports["set-remove!"] = B1486}
{
B1470 = B9("set_unionN", function set_unionN__1487 (set1__1488, set2__1489)
{
B1026(B235(B1475, set1__1488), set2__1489);
return set1__1488}, false);
exports["set-union!"] = B1470}
{
var B1490 = B9("set_subtractN", function set_subtractN__1491 (set1__1492, set2__1493)
{
B1026(B235(B1486, set1__1492), set2__1493);
return set1__1492}, false);
exports["set-subtract!"] = B1490}
{
var B1494 = B9("chain_object", function chain_object__1495 (object1__1496, object2__1497)
{
object2__1497.__proto__ = object1__1496.__proto__;
object1__1496.__proto__ = object2__1497;
return object1__1496}, false);
exports["chain-object"] = B1494}
{
var B1498 = B9("unchain_object", function unchain_object__1499 (object__1500)
{
var B1501;
if ($T(object__1500.__proto__))
B1501 = object__1500.__proto__.__proto__
else
B1501 = false;
object__1500.__proto__ = B1501;
return object__1500}, false);
exports["unchain-object"] = B1498}
{
B1248 = B9("as_hex_string", function as_hex_string__1502 (number__1503)
{return number__1503.toString(16)}, false);
exports["as-hex-string"] = B1248}
{
var B1504 = B9("make_plain_object", function make_plain_object__1505 ()
{return Object.create(null)}, false);
exports["make-plain-object"] = B1504}
