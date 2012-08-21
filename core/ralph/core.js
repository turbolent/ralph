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
var B399 = B9("binaryS", function binaryS__400 (number1__401, number2__402)
{return (number1__401 / number2__402)}, false)
{
var B403 = B9("S", function S__404 (numerator__405)
{
var denominators__406 = $SL.call(arguments, 1),
sequence__417 = denominators__406,
B418 = sequence__417,
B419 = ((B418 || false).length || 0),
B420 = 0,
B421 = (B419 === B420);
if ($T(B421))
return (1 / numerator__405)
else
return B139(B399, numerator__405, denominators__406)}, false);
exports["/"] = B403}
{
var B422 = B9("type", function type__423 (object__424)
{if ($T(object__424))
return object__424.constructor
else
return B5}, false);
exports.type = B422}
{
var B426 = B9("instanceQ", function instanceQ__427 (object__428, type__429)
{if ($T(object__428))
{
var ctor__430 = object__428.constructor,
object1__434 = ctor__430,
object2__435 = type__429,
B431 = (object1__434 === object2__435);
if ($T(B431))
return B431
else
return (object__428 instanceof type__429)}
else
{
var object1__438 = type__429,
object2__439 = B5;
return (object1__438 === object2__439)}}, false);
exports["instance?"] = B426}
$HP = Object.hasOwnProperty
{
var B440 = B9("hasQ", function hasQ__441 (object__442, property__443)
{return $HP.call(object__442,property__443)}, false);
exports["has?"] = B440}
{
var B444,
B445 = B9("Mmake_method", function Mmake_method__446 (name__447, function__448, setterQ__449, type__450, existing__451)
{
var prototype__452 = type__450.prototype,
object__457 = prototype__452,
property__458 = name__447,
B463 = $HP.call(object__457,property__458),
existing_method__453;
if ($T(B463))
existing_method__453 = prototype__452[name__447]
else
existing_method__453 = false;
var genericQ__454;
if ($T(existing__451))
{
var object__461 = existing__451,
property__462 = "%generic?",
B464 = $HP.call(object__461,property__462);
if ($T(B464))
genericQ__454 = existing__451["%generic?"]
else
genericQ__454 = false}
else
genericQ__454 = false;
function__448["%name"] = name__447;
function__448["%setter?"] = setterQ__449;
function__448["%type"] = type__450;
prototype__452[name__447] = function__448;
if ($T(genericQ__454))
return existing__451
else
return B444(name__447)}, false);
exports["%make-method"] = B445}
{
B444 = B9("Mmake_generic", function Mmake_generic__466 (name__467)
{
var dispatcher__471 = function B468 (object__469)
{
var function__470 = ((object__469 !== null) && (object__469 !== undefined) && object__469[name__467]);
return (function__470 && function__470.apply(object__469, arguments))};
dispatcher__471["%generic?"] = true;
dispatcher__471["%name"] = name__467;
return dispatcher__471}, false);
exports["%make-generic"] = B444}
{
var B472 = B9("Mnext_method", function Mnext_method__473 (function__474)
{
var name__475 = function__474["%name"],
proto__476 = function__474["%type"].prototype.__proto__;
return proto__476[name__475]}, false);
exports["%next-method"] = B472}
{
var B477 = B9("concatenate", function concatenate__478 (object__479)
{
var rest__480 = $SL.call(arguments, 1),
B481;
if ($T(B426(object__479, B4)))
B481 = B53
else
B481 = B336;
return B139(B481, object__479, rest__480)}, false);
exports.concatenate = B477}
{
var B483 = B9("compare", function compare__484 (function__485, object__486, objects__487)
{
var failedQ__488;
while (true)
{
var B489 = failedQ__488,
value__506;
if ($T(B489))
value__506 = B489
else
{
var sequence__502 = objects__487,
B503 = sequence__502,
B504 = ((B503 || false).length || 0),
B505 = 0;
value__506 = (B504 === B505)};
var B517 = !(B14(value__506));
if ($T(B517))
{
var sequence__508 = objects__487,
other__490 = sequence__508[0],
value__510 = function__485(object__486, other__490),
B515 = !(B14(value__510));
failedQ__488 = B515;
var sequence__512 = objects__487,
B516 = sequence__512.slice(1);
objects__487 = B516;
object__486 = other__490}
else
break};
var value__514 = failedQ__488;
return !(B14(value__514))}, false);
exports.compare = B483}
{
var B518 = B9("EE", function EE__519 (object__520)
{
var objects__521 = $SL.call(arguments, 1);
return B483(B29, object__520, objects__521)}, false);
exports["=="] = B518}
{
var B522 = B444("binaryE");
exports["binary="] = B522}
{
var B523 = B444("binaryL");
exports["binary<"] = B523}
{
B522 = B445("binaryE", function B525 (object1__526, object2__527)
{
var object1__530 = B422(object1__526),
object2__531 = B422(object2__527),
B536 = (object1__530 === object2__531);
if ($T(B536))
{
var object1__534 = object1__526,
object2__535 = object2__527;
return (object1__534 === object2__535)}}, false, B1, B522);
exports["binary="] = B522}
{
var B545;
B522 = B445("binaryE", function B546 (array1__547, array2__548)
{
var object__563 = array1__547,
object1__566 = ((object__563 || false).length || 0),
object__565 = array2__548,
object2__567 = ((object__565 || false).length || 0),
B582 = (object1__566 === object2__567);
if ($T(B582))
{
var B549 = array1__547,
B550 = array2__548,
B551,
B552,
B553 = [B549, B550];
while (true)
{
var B554 = B551,
value__570;
if ($T(B554))
value__570 = B554
else
value__570 = B545(B68, B553);
var B586 = !(B14(value__570));
if ($T(B586))
{
var sequence__572 = B549,
item1__555 = sequence__572[0],
sequence__574 = B550,
item2__556 = sequence__574[0],
value__576 = B522(item1__555, item2__556),
B583 = !(B14(value__576));
if ($T(B583))
{
B552 = true;
B551 = true}
else
{
(function B557 (item1__558, item2__559)
{return false})(item1__555, item2__556);
var sequence__578 = B549,
B584 = sequence__578.slice(1);
B549 = B584;
var sequence__580 = B550,
B585 = sequence__580.slice(1);
B550 = B585;
B553 = [B549, B550]}}
else
break};
var value__581 = B552;
return !(B14(value__581))}}, false, B4, B522);
exports["binary="] = B522}
var B587 = B522
{
B522 = B9("binaryE", function binaryE__589 (object1__590, object2__591)
{
var value__594 = object1__590,
B597 = !(B14(value__594)),
B592;
if ($T(B597))
{
var value__596 = object2__591;
B592 = !(B14(value__596))}
else
B592 = false;
if ($T(B592))
return B592
else
return B587(object1__590, object2__591)}, false);
exports["binary="] = B522}
{
var B598 = B9("E", function E__599 (object__600)
{
var objects__601 = $SL.call(arguments, 1);
return B483(B522, object__600, objects__601)}, false);
exports["="] = B598}
{
B523 = B445("binaryL", function B603 (object1__604, object2__605)
{
var object1__608 = B422(object1__604),
object2__609 = B422(object2__605),
B610 = (object1__608 === object2__609);
if ($T(B610))
return (object1__604 < object2__605)}, false, B1, B523);
exports["binary<"] = B523}
{
B185 = B9("L", function L__611 (object__612)
{
var objects__613 = $SL.call(arguments, 1);
return B483(B523, object__612, objects__613)}, false);
exports["<"] = B185}
{
var B615 = B9("binaryLE", function binaryLE__616 (object1__617, object2__618)
{if ($T(object1__617))
if ($T(object2__618))
{
var B619 = B523(object1__617, object2__618);
if ($T(B619))
return B619
else
return B522(object1__617, object2__618)}}, false);
exports["binary<="] = B615}
{
var B620 = B9("LE", function LE__621 (object__622)
{
var objects__623 = $SL.call(arguments, 1);
return B483(B615, object__622, objects__623)}, false);
exports["<="] = B620}
{
var B624 = B9("binaryG", function binaryG__625 (object1__626, object2__627)
{if ($T(object1__626))
if ($T(object2__627))
{
var value__629 = B523(object1__626, object2__627),
B632 = !(B14(value__629));
if ($T(B632))
{
var value__631 = B522(object1__626, object2__627);
return !(B14(value__631))}}}, false);
exports["binary>"] = B624}
{
var B633 = B9("G", function G__634 (object__635)
{
var objects__636 = $SL.call(arguments, 1);
return B483(B624, object__635, objects__636)}, false);
exports[">"] = B633}
{
var B638 = B9("binaryGE", function binaryGE__639 (object1__640, object2__641)
{
var value__644 = B523(object1__640, object2__641),
B642 = !(B14(value__644));
if ($T(B642))
return B642
else
return B522(object1__640, object2__641)}, false);
exports["binary>="] = B638}
{
B152 = B9("GE", function GE__645 (object__646)
{
var objects__647 = $SL.call(arguments, 1);
return B483(B638, object__646, objects__647)}, false);
exports[">="] = B152}
{
var B648 = B9("as_object", function as_object__649 (property_list__650)
{
var array__658 = property_list__650,
start__659 = undefined,
end__660 = undefined,
list__651 = array__658.slice(start__659, end__660),
result__652 = {};
while (true)
{
var object__662 = list__651,
B668 = ((object__662 || false).length || 0),
B669 = B633(B668, 0);
if ($T(B669))
{
var array__664 = list__651,
key__653 = array__664.shift(),
array__666 = list__651,
value__654 = array__666.shift(),
B667;
if ($T(B426(key__653, B45)))
B667 = key__653.name
else
B667 = B57(key__653);
key__653 = B667;
result__652[key__653] = value__654}
else
break};
return result__652}, false);
exports["as-object"] = B648}
{
var B670 = B9("position", function position__671 (array__672, element__673)
{
var position__674 = array__672.indexOf(element__673);
if ($T(B633(position__674, -1)))
return position__674}, false);
exports.position = B670}
{
var B675 = B9("last_position", function last_position__676 (array__677, element__678)
{
var position__679 = array__677.lastIndexOf(element__678);
if ($T(B633(position__679, -1)))
return position__679}, false);
exports["last-position"] = B675}
{
var B680 = B9("as_uppercase", function as_uppercase__681 (string__682)
{return string__682.toUpperCase()}, false);
exports["as-uppercase"] = B680}
{
var B683 = B9("as_lowercase", function as_lowercase__684 (string__685)
{return string__685.toLowerCase()}, false);
exports["as-lowercase"] = B683}
{
var B686 = B9("join", function join__687 (array__688, string__689)
{return array__688.join(string__689)}, false);
exports.join = B686}
{
var B690 = B9("trim", function trim__691 (string__692)
{return string__692.trim()}, false);
exports.trim = B690}
{
var B693 = B9("replace", function replace__694 (string__695, pattern__696, replacement__697)
{return string__695.replace(pattern__696, replacement__697)}, false);
exports.replace = B693}
{
var B698 = B9("make_object", function make_object__699 ()
{
var key_values__700 = $SL.call(arguments, 0);
return B648(key_values__700)}, false);
exports["make-object"] = B698}
{
var B701 = B38(B1, {name:false,
module:false});
exports["<symbol>"] = B701}
var B702 = {}
{
var B720 = $K("name"),
B721 = $K("module"),
B705,
B706,
B707,
B708 = B9("symbol", function symbol__709 (name__710, module__711)
{
var string__717 = name__710,
name__712 = string__717.toLowerCase(),
B713 = module__711,
string__719;
if ($T(B713))
string__719 = B713
else
string__719 = "";
var moduleT__714 = string__719.toLowerCase(),
B715 = B707(B702, moduleT__714, name__712);
if ($T(B715))
return B715
else
return B705(B702, moduleT__714, name__712, B706(B701, B720, name__712, B721, module__711))}, false);
exports.symbol = B708}
$S = B708
{
var B722 = B9("symbol_name", function symbol_name__723 (symbol__724)
{return B707(symbol__724, "name")}, false);
exports["symbol-name"] = B722}
{
B184 = B9("Mkeys", function Mkeys__726 (key_values__727, defaults__728)
{
var i__729 = 0;
while (true)
{
var object__736 = key_values__727,
B744 = ((object__736 || false).length || 0),
value__737 = (i__729 >= B744),
B745 = !(B14(value__737));
if ($T(B745))
{
(function B730 (i__731)
{
var key__732 = key_values__727[i__731],
number__739 = i__731,
B742 = (number__739 + 1),
value__733 = key_values__727[B742];
if ($T(B426(key__732, B45)))
return defaults__728[key__732.name] = value__733})(i__729);
var number__741 = i__729,
B743 = (number__741 + 1);
i__729 = B743}
else
break};
false;
return defaults__728}, false);
exports["%keys"] = B184}
{
var B750,
B751,
B752,
B753 = B9("find_key", function find_key__754 (array__755, predicate__756)
{
var B757 = $SL.call(arguments, 2),
B758 = B184(B757, {skip:0,
failure:false,
"from-end?":false}),
skip__759 = B758.skip,
failure__760 = B758.failure,
from_endQ__761 = B758["from-end?"],
keys__762 = B752(array__755),
B767 = function B763 (index__764)
{return predicate__756(B750(array__755, index__764))},
B768;
if ($T(from_endQ__761))
B768 = B170(keys__762)
else
B768 = keys__762;
var satisfying_keys__765 = B751(B767, B768),
B766 = B750(satisfying_keys__765, skip__759);
if ($T(B766))
return B766
else
return failure__760}, false);
exports["find-key"] = B753}
{
var B771 = B9("parse_integer", function parse_integer__772 (value__773)
{
var B774 = $SL.call(arguments, 1),
B775 = B184(B774, {radix:10}),
radix__776 = B775.radix;
return parseInt(value__773, radix__776)}, false);
exports["parse-integer"] = B771}
{
B750 = B9("element", function element__780 (array__781, index__782)
{
var B783 = $SL.call(arguments, 2),
B784 = B184(B783, {"default":false}),
default__785 = B784["default"],
B786 = array__781[index__782];
if ($T(B786))
return B786
else
return default__785}, false);
exports.element = B750}
{
var B787 = B9("element_setter", function element_setter__788 (array__789, key__790, value__791)
{return array__789[key__790] = value__791}, true);
exports["element-setter"] = B787}
{
var B794 = B9("replace_subsequence", function replace_subsequence__795 (target_array__796, insert_array__797)
{
var B798 = $SL.call(arguments, 2),
object__803 = target_array__796,
B816 = ((object__803 || false).length || 0),
B817 = {start:0,
end:B816},
B799 = B184(B798, B817),
start__800 = B799.start,
end__801 = B799.end,
array__807 = target_array__796,
start__808 = 0,
end__809 = start__800,
B818 = array__807.slice(start__808, end__809),
array__813 = target_array__796,
start__814 = end__801,
end__815 = undefined,
B819 = array__813.slice(start__814, end__815);
return B477(B818, insert_array__797, B819)}, false);
exports["replace-subsequence"] = B794}
{
var B822 = B9("replace_subsequenceN", function replace_subsequenceN__823 (target_array__824, insert_array__825)
{
var B826 = $SL.call(arguments, 2),
object__832 = target_array__824,
B837 = ((object__832 || false).length || 0),
B838 = {start:0,
end:B837},
B827 = B184(B826, B838),
start__828 = B827.start,
end__829 = B827.end,
array1__835 = [start__828, B376(end__829, start__828)],
array2__836 = insert_array__825,
rest__830 = array1__835.concat(array2__836);
[].splice.apply(target_array__824, rest__830);
return target_array__824}, false);
exports["replace-subsequence!"] = B822}
{
var B842 = B9("removeN", function removeN__843 (array__844, value__845)
{
var B846 = $SL.call(arguments, 2),
B847 = B184(B846, {test:B518}),
test__848 = B847.test,
B849 = B753(array__844, B235(test__848, value__845));
if ($T(B849))
{
var key__850 = B849;
array__844.splice(key__850, 1)};
return array__844}, false);
exports["remove!"] = B842}
{
var B853 = B9("remove", function remove__854 (array__855, value__856)
{
var B857 = $SL.call(arguments, 2),
B858 = B184(B857, {test:B518}),
test__859 = B858.test,
array__863 = array__855,
start__864 = undefined,
end__865 = undefined,
B866 = array__863.slice(start__864, end__865);
return B842(B866, value__856, B213, test__859)}, false);
exports.remove = B853}
{
var B868 = B9("interpose", function interpose__869 (separator__870, array__871)
{
var function__883 = function B872 (a__873, b__874)
{return B477([a__873, separator__870], b__874)},
values__884 = array__871,
B885 = values__884,
B887 = B885[0],
B886 = values__884,
B888 = B886.slice(1);
return B139(function__883, B887, B888)}, false);
exports.interpose = B868}
{
B545 = B9("anyQ", function anyQ__891 (function__892, values__893)
{
var value__894,
object__901 = values__893,
n__895 = ((object__901 || false).length || 0),
i__896 = 0;
while (true)
{
var B897 = value__894,
value__903;
if ($T(B897))
value__903 = B897
else
value__903 = B152(i__896, n__895);
var B907 = !(B14(value__903));
if ($T(B907))
{
(function B898 (i__899)
{return value__894 = function__892(values__893[i__899])})(i__896);
var number__905 = i__896,
B906 = (number__905 + 1);
i__896 = B906}
else
break};
return value__894}, false);
exports["any?"] = B545}
{
var B911 = B9("memberQ", function memberQ__912 (value__913, array__914)
{
var B915 = $SL.call(arguments, 2),
B916 = B184(B915, {test:B518}),
test__917 = B916.test;
return B545(function B918 (other_value__919)
{return test__917(value__913, other_value__919)}, array__914)}, false);
exports["member?"] = B911}
{
var B921 = B9("everyQ", function everyQ__922 (function__923, array__924)
{
var value__930 = B545(function B925 (value__926)
{
var value__929 = function__923(value__926);
return !(B14(value__929))}, array__924);
return !(B14(value__930))}, false);
exports["every?"] = B921}
{
var map__938,
B937 = B9("map", function map__938 (function__939)
{
var arrays__940 = $SL.call(arguments, 1),
result__941 = [],
sequence__961 = arrays__940,
sequence__962 = sequence__961.slice(1),
B963 = sequence__962,
B964 = ((B963 || false).length || 0),
B965 = 0,
B984 = (B964 === B965);
if ($T(B984))
{
var sequence__967 = arrays__940,
B942 = sequence__967[0],
B943,
B944,
B945 = [B942];
while (true)
{
var B946 = B943,
value__969;
if ($T(B946))
value__969 = B946
else
value__969 = B545(B68, B945);
var B986 = !(B14(value__969));
if ($T(B986))
{
var sequence__971 = B942,
item__947 = sequence__971[0];
(function B948 (item__949)
{
var array__974 = result__941,
value__975 = function__939(item__949);
array__974.push(value__975);
return array__974})(item__947);
var sequence__977 = B942,
B985 = sequence__977.slice(1);
B942 = B985;
B945 = [B942]}
else
break};
B944}
else
while (true)
{
var value__979 = B545(B68, arrays__940),
B987 = !(B14(value__979));
if ($T(B987))
{
var array__982 = result__941,
value__983 = B215(function__939, map__938(B92, arrays__940));
array__982.push(value__983);
array__982;
arrays__940 = map__938(B77, arrays__940)}
else
break};
return result__941}, false);
exports.map = B937}
{
var B994 = B9("Rdo", function do__995 (function__996)
{
var arrays__997 = $SL.call(arguments, 1),
sequence__1017 = arrays__997,
sequence__1018 = sequence__1017.slice(1),
B1019 = sequence__1018,
B1020 = ((B1019 || false).length || 0),
B1021 = 0,
B1032 = (B1020 === B1021);
if ($T(B1032))
{
var sequence__1023 = arrays__997,
B998 = sequence__1023[0],
B999,
B1000,
B1001 = [B998];
while (true)
{
var B1002 = B999,
value__1025;
if ($T(B1002))
value__1025 = B1002
else
value__1025 = B545(B68, B1001);
var B1034 = !(B14(value__1025));
if ($T(B1034))
{
var sequence__1027 = B998,
item__1003 = sequence__1027[0];
(function B1004 (item__1005)
{return function__996(item__1005)})(item__1003);
var sequence__1029 = B998,
B1033 = sequence__1029.slice(1);
B998 = B1033;
B1001 = [B998]}
else
break};
B1000}
else
while (true)
{
var value__1031 = B545(B68, arrays__997),
B1035 = !(B14(value__1031));
if ($T(B1035))
{
B215(function__996, B937(B92, arrays__997));
arrays__997 = B937(B77, arrays__997)}
else
break};
return false}, false);
exports["do"] = B994}
{
B751 = B9("choose", function choose__1042 (function__1043, array__1044)
{
var result__1045 = [],
B1046 = array__1044,
B1047,
B1048,
B1049 = [B1046];
while (true)
{
var B1050 = B1047,
value__1055;
if ($T(B1050))
value__1055 = B1050
else
value__1055 = B545(B68, B1049);
var B1065 = !(B14(value__1055));
if ($T(B1065))
{
var sequence__1057 = B1046,
element__1051 = sequence__1057[0];
(function B1052 (element__1053)
{if ($T(function__1043(element__1053)))
{
var array__1060 = result__1045,
value__1061 = element__1053;
array__1060.push(value__1061);
return array__1060}})(element__1051);
var sequence__1063 = B1046,
B1064 = sequence__1063.slice(1);
B1046 = B1064;
B1049 = [B1046]}
else
break};
B1048;
return result__1045}, false);
exports.choose = B751}
{
var B1069 = B9("copy_sequence", function copy_sequence__1070 (array__1071)
{
var B1072 = $SL.call(arguments, 1),
B1073 = B184(B1072, {start:0,
end:false}),
start__1074 = B1073.start,
end__1075 = B1073.end,
B1076 = end__1075,
end__1077;
if ($T(B1076))
end__1077 = B1076
else
end__1077 = undefined;
var array__1081 = array__1071,
start__1082 = start__1074,
end__1083 = end__1077;
return array__1081.slice(start__1082, end__1083)}, false);
exports["copy-sequence"] = B1069}
{
var B1084;
B706 = B9("make", function make__1085 (type__1086)
{
var arguments__1087 = $SL.call(arguments, 1),
object__1088 = new(type__1086);
B215(B1084, object__1088, arguments__1087);
return object__1088}, false);
exports.make = B706}
{
B752 = B9("object_properties", function object_properties__1093 (object__1094)
{
var B1095 = $SL.call(arguments, 1),
B1096 = B184(B1095, {"inherited?":false}),
inheritedQ__1097 = B1096["inherited?"],
result__1098 = [];
if ($T(B426(object__1094, B4)))
{
var object__1105 = object__1094,
B1099 = ((object__1105 || false).length || 0),
i__1100 = 0;
while (true)
{
var value__1107 = B152(i__1100, B1099),
B1112 = !(B14(value__1107));
if ($T(B1112))
{
(function B1101 (i__1102)
{
var array__1110 = result__1098,
value__1111 = i__1102;
array__1110.push(value__1111);
return array__1110})(i__1100);
i__1100 = B340(i__1100, 1)}
else
break};
false}
else
{
var i__1103;
for (i__1103 in object__1094) (inheritedQ__1097||$HP.call(object__1094, i__1103)) &&result__1098.push(i__1103)};
return result__1098}, false);
exports["object-properties"] = B752}
{
var B1113 = B9("object_values", function object_values__1114 (object__1115)
{return B937(B235(B707, object__1115), B752(object__1115))}, false);
exports["object-values"] = B1113}
{
B1084 = B444("initialize");
exports.initialize = B1084}
{
var B1144 = $K("inherited?");
B1084 = B445("initialize", function B1121 (object__1122)
{
var rest__1123 = $SL.call(arguments, 1),
arguments__1124 = B648(rest__1123),
B1125 = B422(object__1122)["%properties"];
if ($T(B1125))
{
var properties__1126 = B1125;
B994(function B1127 (key__1128)
{
var object__1136 = B1.prototype,
property__1137 = key__1128,
B1129 = $HP.call(object__1136,property__1137),
value__1142;
if ($T(B1129))
value__1142 = B1129
else
{
var object__1140 = object__1122,
property__1141 = key__1128;
value__1142 = $HP.call(object__1140,property__1141)};
var B1143 = !(B14(value__1142));
if ($T(B1143))
{
var B1130 = arguments__1124[key__1128],
value__1132;
if ($T(B1130))
value__1132 = B1130
else
{
var value__1131 = properties__1126[key__1128];
if ($T(value__1131))
value__1132 = value__1131()
else
value__1132 = false};
return object__1122[key__1128] = value__1132}}, B752(properties__1126, B1144, true))};
return object__1122}, false, B1, B1084);
exports.initialize = B1084}
{
var B1145 = B38(B1, {name:false});
exports["<hash-symbol>"] = B1145}
{
var key__1146 = B706(B1145, B720, "key");
$KEY = key__1146}
{
var rest__1147 = B706(B1145, B720, "rest");
$REST = rest__1147}
{
B707 = B9("get", function get__1154 (object__1155)
{
var properties__1156 = $SL.call(arguments, 1),
result__1157,
B1158 = properties__1156,
B1159,
B1160,
B1161 = [B1158];
while (true)
{
var B1162 = B1159,
value__1167;
if ($T(B1162))
value__1167 = B1162
else
value__1167 = B545(B68, B1161);
var B1180 = !(B14(value__1167));
if ($T(B1180))
{
var sequence__1169 = B1158,
property__1163 = sequence__1169[0],
object__1173 = object__1155,
property__1174 = property__1163,
value__1175 = $HP.call(object__1173,property__1174),
B1178 = !(B14(value__1175));
if ($T(B1178))
{
B1160 = result__1157 = false;
B1159 = true}
else
{
(function B1164 (property__1165)
{
result__1157 = object__1155[property__1165];
return object__1155 = result__1157})(property__1163);
var sequence__1177 = B1158,
B1179 = sequence__1177.slice(1);
B1158 = B1179;
B1161 = [B1158]}}
else
break};
B1160;
return result__1157}, false);
exports.get = B707}
{
B705 = B9("get_setter", function get_setter__1181 (object__1182)
{
var propertiesSvalue__1183 = $SL.call(arguments, 1),
object__1187 = propertiesSvalue__1183,
B1198 = ((object__1187 || false).length || 0),
B1199 = B620(B1198, 2);
if ($T(B1199))
{
var sequence__1189 = propertiesSvalue__1183,
B1200 = sequence__1189[1];
return object__1182[B92(propertiesSvalue__1183)] = B1200}
else
{
var sequence__1191 = propertiesSvalue__1183,
property__1184 = sequence__1191[0],
object__1194 = object__1182,
property__1195 = property__1184,
B1201 = $HP.call(object__1194,property__1195),
object2__1185;
if ($T(B1201))
object2__1185 = object__1182[property__1184]
else
object2__1185 = object__1182[property__1184] = B698();
var sequence__1197 = propertiesSvalue__1183,
B1202 = sequence__1197.slice(1);
return B215(get_setter__1181, object2__1185, B1202)}}, true);
exports["get-setter"] = B705}
{
var B1204 = B9("split_with", function split_with__1205 (function__1206, array__1207)
{
var a__1208 = [],
b__1209 = [];
B994(function B1210 (item__1211)
{
var array__1214;
if ($T(function__1206(item__1211)))
array__1214 = a__1208
else
array__1214 = b__1209;
var value__1215 = item__1211;
array__1214.push(value__1215);
return array__1214}, array__1207);
return [a__1208, b__1209]}, false);
exports["split-with"] = B1204}
{
var B1216 = B9("as_hex_string", function as_hex_string__1217 (number__1218)
{return number__1218.toString(16)}, false);
exports["as-hex-string"] = B1216}
{
var B1219 = B444("description");
exports.description = B1219}
{
B1219 = B445("description", function B1221 (number__1222)
{return ("" + number__1222)}, false, B3, B1219);
exports.description = B1219}
{
B1219 = B445("description", function B1224 (string__1225)
{
var escaped__1226 = string__1225.replace("\"", "\\\"", "g");
return ("\"" + escaped__1226 + "\"")}, false, B2, B1219);
exports.description = B1219}
{
B1219 = B445("description", function B1228 (array__1229)
{return ("(" + B686(B937(B1219, array__1229), " ") + ")")}, false, B4, B1219);
exports.description = B1219}
{
B1219 = B445("description", function B1231 (value__1232)
{if ($T(value__1232))
return "#t"
else
return "#f"}, false, B5, B1219);
exports.description = B1219}
{
B1219 = B445("description", function B1235 (symbol__1236)
{
var B1237 = B707(symbol__1236, "module"),
B1239;
if ($T(B1237))
{
var module__1238 = B1237;
B1239 = B477(module__1238, "::")}
else
B1239 = "";
var B1240 = B722(symbol__1236);
return (B1239 + B1240)}, false, B701, B1219);
exports.description = B1219}
{
B1219 = B445("description", function B1242 (keyword__1243)
{return (B722(keyword__1243) + ":")}, false, B45, B1219);
exports.description = B1219}
{
B1219 = B445("description", function B1245 (symbol__1246)
{return ("#" + B722(symbol__1246))}, false, B1145, B1219);
exports.description = B1219}
{
var B1247 = Math.min;
exports.min = B1247}
{
var B1248 = Math.max;
exports.max = B1248}
{
var B1249 = Math.abs;
exports.abs = B1249}
{
var B1250 = Math.round;
exports.round = B1250}
{
var B1251 = Math.floor;
exports.floor = B1251}
{
var B1252 = Math.ceil;
exports.ceil = B1252}
{
var B1253 = Math.sin;
exports.sin = B1253}
{
var B1254 = Math.cos;
exports.cos = B1254}
{
var B1255 = Math.atan2;
exports.atan2 = B1255}
{
var B1256 = Math.pow;
exports.expt = B1256}
{
var B1257 = Math.sqrt;
exports.sqrt = B1257}
{
var B1258 = B9("mod", function mod__1259 (number1__1260, number2__1261)
{return (number1__1260 % number2__1261)}, false);
exports.mod = B1258}
{
var B1262 = Math.PI;
exports["*pi*"] = B1262}
var B1263 = (B1262 / 180)
{
var B1264 = B9("as_radiant", function as_radiant__1265 (number__1266)
{return (number__1266 * B1263)}, false);
exports["as-radiant"] = B1264}
{
var B1267 = B9("signal", function signal__1268 (error__1269)
{
throw(error__1269);
return false}, false);
exports.signal = B1267}
{
var B1276 = B9("extendN", function extendN__1277 (object1__1278, object2__1279)
{
var B1280 = B752(object2__1279),
B1281,
B1282,
B1283 = [B1280];
while (true)
{
var B1284 = B1281,
value__1289;
if ($T(B1284))
value__1289 = B1284
else
value__1289 = B545(B68, B1283);
var B1295 = !(B14(value__1289));
if ($T(B1295))
{
var sequence__1291 = B1280,
key__1285 = sequence__1291[0];
(function B1286 (key__1287)
{return B705(object1__1278, key__1287, B707(object2__1279, key__1287))})(key__1285);
var sequence__1293 = B1280,
B1294 = sequence__1293.slice(1);
B1280 = B1294;
B1283 = [B1280]}
else
break};
B1282;
return object1__1278}, false);
exports["extend!"] = B1276}
{
var B1304 = B9("as_property_list", function as_property_list__1305 (object__1306)
{
var B1307 = $SL.call(arguments, 1),
B1308 = B184(B1307, {"keywords?":false}),
keywordsQ__1309 = B1308["keywords?"],
result__1310 = [],
B1311 = B752(object__1306),
B1312,
B1313,
B1314 = [B1311];
while (true)
{
var B1315 = B1312,
value__1320;
if ($T(B1315))
value__1320 = B1315
else
value__1320 = B545(B68, B1314);
var B1334 = !(B14(value__1320));
if ($T(B1334))
{
var sequence__1322 = B1311,
key__1316 = sequence__1322[0];
(function B1317 (key__1318)
{
var array__1325 = result__1310,
value__1326;
if ($T(keywordsQ__1309))
value__1326 = B47(B57(key__1318))
else
value__1326 = key__1318;
array__1325.push(value__1326);
array__1325;
var array__1329 = result__1310,
value__1330 = B707(object__1306, key__1318);
array__1329.push(value__1330);
return array__1329})(key__1316);
var sequence__1332 = B1311,
B1333 = sequence__1332.slice(1);
B1311 = B1333;
B1314 = [B1311]}
else
break};
B1313;
return result__1310}, false);
exports["as-property-list"] = B1304}
{
var B1343 = B9("as_association_list", function as_association_list__1344 (object__1345)
{
var B1346 = $SL.call(arguments, 1),
B1347 = B184(B1346, {"keywords?":false}),
keywordsQ__1348 = B1347["keywords?"],
result__1349 = [],
B1350 = B752(object__1345),
B1351,
B1352,
B1353 = [B1350];
while (true)
{
var B1354 = B1351,
value__1359;
if ($T(B1354))
value__1359 = B1354
else
value__1359 = B545(B68, B1353);
var B1371 = !(B14(value__1359));
if ($T(B1371))
{
var sequence__1361 = B1350,
key__1355 = sequence__1361[0];
(function B1356 (key__1357)
{
var array__1364 = result__1349,
B1368;
if ($T(keywordsQ__1348))
B1368 = B47(B57(key__1357))
else
B1368 = key__1357;
var B1369 = B707(object__1345, key__1357),
value__1365 = [B1368, B1369];
array__1364.push(value__1365);
return array__1364})(key__1355);
var sequence__1367 = B1350,
B1370 = sequence__1367.slice(1);
B1350 = B1370;
B1353 = [B1350]}
else
break};
B1352;
return result__1349}, false);
exports["as-association-list"] = B1343}
{
var B1372 = B9("starts_withQ", function starts_withQ__1373 (string__1374, prefix__1375)
{
var object1__1378 = string__1374.indexOf(prefix__1375),
object2__1379 = 0;
return (object1__1378 === object2__1379)}, false);
exports["starts-with?"] = B1372}
{
var B1380 = B9("evenQ", function evenQ__1381 (number__1382)
{
var object1__1385 = (number__1382 % 2),
object2__1386 = 0;
return (object1__1385 === object2__1386)}, false);
exports["even?"] = B1380}
{
var B1387 = B9("oddQ", function oddQ__1388 (number__1389)
{
var object1__1392 = (number__1389 % 2),
object2__1393 = 1;
return (object1__1392 === object2__1393)}, false);
exports["odd?"] = B1387}
{
var B1395 = B9("group_by", function group_by__1396 (predicate__1397, items__1398)
{return B139(function B1399 (result__1400, item__1401)
{
var key__1402 = predicate__1397(item__1401),
object__1405 = result__1400,
property__1406 = key__1402,
B1411 = $HP.call(object__1405,property__1406);
if ($T(B1411))
{
var array__1409 = B707(result__1400, key__1402),
value__1410 = item__1401;
array__1409.push(value__1410);
array__1409}
else
B705(result__1400, key__1402, [item__1401]);
return result__1400}, B698(), items__1398)}, false);
exports["group-by"] = B1395}
var B1412 = B9("wrap_object", function wrap_object__1413 (object__1414)
{
var rest__1415 = $SL.call(arguments, 1),
result__1416 = Object.create(object__1414);
B1276(result__1416, B648(rest__1415));
return result__1416}, false)
var B1417 = B9("unwrap_object", function unwrap_object__1418 (object__1419)
{return object__1419.__proto__}, false)
{
var B1422 = B9("update_with", function update_with__1423 (fn__1424, obj__1425)
{
var objs__1426 = $SL.call(arguments, 2);
return B994(function B1427 (obj2__1428)
{return B994(function B1429 (property__1430)
{
var value__1431 = B707(obj2__1428, property__1430),
object__1434 = obj__1425,
property__1435 = property__1430,
B1436 = $HP.call(object__1434,property__1435),
B1437;
if ($T(B1436))
B1437 = fn__1424(B707(obj__1425, property__1430), value__1431)
else
B1437 = value__1431;
return B705(obj__1425, property__1430, B1437)}, B752(obj2__1428))}, objs__1426)}, false);
exports["update-with"] = B1422}
{
var B1438,
B1439 = B9("as_set", function as_set__1440 (values__1441)
{
var set__1442 = [];
return B1438(set__1442, values__1441)}, false);
exports["as-set"] = B1439}
{
var B1443 = B9("set_addN", function set_addN__1444 (set__1445, object__1446)
{
var value__1448 = B911(object__1446, set__1445),
B1453 = !(B14(value__1448));
if ($T(B1453))
{
var array__1451 = set__1445,
value__1452 = object__1446;
array__1451.push(value__1452);
return array__1451}}, false);
exports["set-add!"] = B1443}
{
var B1454 = B842;
exports["set-remove!"] = B1454}
{
B1438 = B9("set_unionN", function set_unionN__1455 (set1__1456, set2__1457)
{
B994(B235(B1443, set1__1456), set2__1457);
return set1__1456}, false);
exports["set-union!"] = B1438}
{
var B1458 = B9("set_subtractN", function set_subtractN__1459 (set1__1460, set2__1461)
{
B994(B235(B1454, set1__1460), set2__1461);
return set1__1460}, false);
exports["set-subtract!"] = B1458}
{
var B1462 = B9("chain_object", function chain_object__1463 (object1__1464, object2__1465)
{
object2__1465.__proto__ = object1__1464.__proto__;
object1__1464.__proto__ = object2__1465;
return object1__1464}, false);
exports["chain-object"] = B1462}
{
var B1466 = B9("unchain_object", function unchain_object__1467 (object__1468)
{
var B1469;
if ($T(object__1468.__proto__))
B1469 = object__1468.__proto__.__proto__
else
B1469 = false;
object__1468.__proto__ = B1469;
return object__1468}, false);
exports["unchain-object"] = B1466}
{
B1216 = B9("as_hex_string", function as_hex_string__1470 (number__1471)
{return number__1471.toString(16)}, false);
exports["as-hex-string"] = B1216}
{
var B1472 = B9("make_plain_object", function make_plain_object__1473 ()
{return Object.create(null)}, false);
exports["make-plain-object"] = B1472}
var fact__1478,
B1474 = B9("factorial", function factorial__1475 (n__1476)
{
var fact__1477 = function fact__1478 (i__1479, acc__1480)
{B1481:while(true){
if ($T(B518(i__1479, 0)))
return acc__1480
else
{
arguments = [B376(i__1479, 1), (acc__1480 * i__1479)];
i__1479 = arguments[0];
acc__1480 = arguments[1];
continue B1481};
break}};
return fact__1477(n__1476, 1)}, false)
{
var B1482 = B9("T", function T__1483 ()
{
var numbers__1484 = $SL.call(arguments, 0),
sequence__1495 = numbers__1484,
B1496 = sequence__1495,
B1497 = ((B1496 || false).length || 0),
B1498 = 0,
B1511 = (B1497 === B1498);
if ($T(B1511))
return 1
else
{
var function__1507 = B395,
values__1508 = numbers__1484,
B1509 = values__1508,
B1512 = B1509[0],
B1510 = values__1508,
B1513 = B1510.slice(1);
return B139(function__1507, B1512, B1513)}}, false);
exports["*"] = B1482}
