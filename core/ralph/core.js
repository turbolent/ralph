false
{
var LobjectG__1;
false;
LobjectG__1 = Object;
exports["<object>"] = LobjectG__1}
{
var LstringG__2;
false;
LstringG__2 = String;
exports["<string>"] = LstringG__2}
{
var LnumberG__3;
false;
LnumberG__3 = Number;
exports["<number>"] = LnumberG__3}
{
var LarrayG__4;
false;
LarrayG__4 = Array;
exports["<array>"] = LarrayG__4}
{
var LbooleanG__5;
false;
LbooleanG__5 = Boolean;
exports["<boolean>"] = LbooleanG__5}
{
var LfunctionG__6;
false;
LfunctionG__6 = Function;
exports["<function>"] = LfunctionG__6}
{
var LerrorG__7;
false;
LerrorG__7 = Error;
exports["<error>"] = LerrorG__7}
LerrorG__7["%properties"] = {message:false}
{
var Mmake_function__9;
false;
Mmake_function__9 = function B8__10 (name__11, function__12, setterQ__13)
{
function__12["%name"] = name__11;
function__12["%setter?"] = setterQ__13;
return function__12};
exports["%make-function"] = Mmake_function__9}
{
var trueQ__14;
false;
trueQ__14 = Mmake_function__9("trueQ", function trueQ__15 (value__16)
{return ((value__16 != null) && (value__16 !== false))}, false);
exports["true?"] = trueQ__14}
$T = trueQ__14
{
var not__17;
false;
not__17 = Mmake_function__9("not", function not__18 (value__19)
{return !(trueQ__14(value__19))}, false);
exports.not = not__17}
{
var size__20;
false;
size__20 = Mmake_function__9("size", function size__21 (object__22)
{return ((object__22 || false).length || 0)}, false);
exports.size = size__20}
$SL = [].slice
{
var inc__23;
false;
inc__23 = Mmake_function__9("inc", function inc__24 (number__25)
{return (number__25 + 1)}, false);
exports.inc = inc__23}
{
var dec__26;
false;
dec__26 = Mmake_function__9("dec", function dec__27 (number__28)
{return (number__28 - 1)}, false);
exports.dec = dec__26}
{
var binaryEE__29;
false;
binaryEE__29 = Mmake_function__9("binaryEE", function binaryEE__30 (object1__31, object2__32)
{return (object1__31 === object2__32)}, false);
exports["binary=="] = binaryEE__29}
{
var Minherit__33;
false;
Minherit__33 = Mmake_function__9("Minherit", function Minherit__34 (class__35, superclass__36)
{
class__35.prototype.__proto__ = superclass__36.prototype;
class__35.prototype.__super__ = superclass__36;
return class__35}, false);
exports["%inherit"] = Minherit__33}
{
var Mmake_class__38;
false;
Mmake_class__38 = Mmake_function__9("Mmake_class", function Mmake_class__39 (superclass__40, properties__41)
{
var class__43 = function B37__42 ()
{return false};
class__43["%properties"] = properties__41;
if ($T(superclass__40))
{
Minherit__33(class__43, superclass__40);
properties__41.__proto__ = superclass__40["%properties"]};
return class__43}, false);
exports["%make-class"] = Mmake_class__38}
{
var Mkeywords__44;
false;
Mkeywords__44 = {};
exports["%keywords"] = Mkeywords__44}
{
var LkeywordG__45;
false;
LkeywordG__45 = Mmake_class__38(LobjectG__1, {name:false});
exports["<keyword>"] = LkeywordG__45}
{
var keyword__47;
false;
keyword__47 = Mmake_function__9("keyword", function keyword__48 (name__49)
{
var nameT__50 = name__49.toLowerCase(),
B46__51 = Mkeywords__44[nameT__50];
if ($T(B46__51))
{return B46__51}
else
{
var keyword__52 = new(LkeywordG__45);
keyword__52.name = name__49;
Mkeywords__44[name__49] = keyword__52;
return keyword__52}}, false);
exports.keyword = keyword__47}
$K = keyword__47
{
var Mconcat__53;
false;
Mconcat__53 = Mmake_function__9("Mconcat", function Mconcat__54 (array1__55, array2__56)
{return array1__55.concat(array2__56)}, false);
exports["%concat"] = Mconcat__53}
{
var as_string__57;
false;
as_string__57 = String;
exports["as-string"] = as_string__57}
{
var as_number__58;
false;
as_number__58 = Number;
exports["as-number"] = as_number__58}
{
var as_array__59;
false;
as_array__59 = Mmake_function__9("as_array", function as_array__60 (arguments__61, skip__62)
{return $SL.call(arguments__61, (skip__62 || 0))}, false);
exports["as-array"] = as_array__59}
{
var parse_number__63;
false;
parse_number__63 = parseFloat;
exports["parse-number"] = parse_number__63}
{
var char_code__64;
false;
char_code__64 = Mmake_function__9("char_code", function char_code__65 (char__66)
{return char__66.charCodeAt(0)}, false);
exports["char-code"] = char_code__64}
{
var code_char__67;
false;
code_char__67 = String.fromCharCode;
exports["code-char"] = code_char__67}
{
var emptyQ__68;
false;
emptyQ__68 = Mmake_function__9("emptyQ", function emptyQ__69 (sequence__70)
{
var object2__72 = 0,
object1__71 = size__20(sequence__70);
return (object1__71 === object2__72)}, false);
exports["empty?"] = emptyQ__68}
{
var rest__73;
false;
rest__73 = Mmake_function__9("rest", function rest__74 (sequence__75)
{return sequence__75.slice(1)}, false);
exports.rest = rest__73}
{
var last__76;
false;
last__76 = Mmake_function__9("last", function last__77 (array__78)
{
var number__79 = size__20(array__78),
B80 = (number__79 - 1);
return array__78[B80]}, false);
exports.last = last__76}
{
var last_setter__81;
false;
last_setter__81 = Mmake_function__9("last_setter", function last_setter__82 (array__83, value__84)
{return array__83[dec__26(size__20(array__83), 1)] = value__84}, true);
exports["last-setter"] = last_setter__81}
{
var first__85;
false;
first__85 = Mmake_function__9("first", function first__86 (sequence__87)
{return sequence__87[0]}, false);
exports.first = first__85}
{
var first_setter__88;
false;
first_setter__88 = Mmake_function__9("first_setter", function first_setter__89 (array__90, value__91)
{return array__90[0] = value__91}, true);
exports["first-setter"] = first_setter__88}
{
var second__92;
false;
second__92 = Mmake_function__9("second", function second__93 (sequence__94)
{return sequence__94[1]}, false);
exports.second = second__92}
{
var second_setter__95;
false;
second_setter__95 = Mmake_function__9("second_setter", function second_setter__96 (array__97, value__98)
{return array__97[1] = value__98}, true);
exports["second-setter"] = second_setter__95}
{
var third__99;
false;
third__99 = Mmake_function__9("third", function third__100 (sequence__101)
{return sequence__101[2]}, false);
exports.third = third__99}
{
var third_setter__102;
false;
third_setter__102 = Mmake_function__9("third_setter", function third_setter__103 (array__104, value__105)
{return array__104[2] = value__105}, true);
exports["third-setter"] = third_setter__102}
{
var make_array__106;
false;
make_array__106 = Mmake_function__9("make_array", function make_array__107 ()
{
var elements__108 = $SL.call(arguments, 0);
return elements__108}, false);
exports["make-array"] = make_array__106}
{
var push__109;
false;
push__109 = Mmake_function__9("push", function push__110 (array__111, value__112)
{
array__111.unshift(value__112);
return array__111}, false);
exports.push = push__109}
{
var push_last__113;
false;
push_last__113 = Mmake_function__9("push_last", function push_last__114 (array__115, value__116)
{
array__115.push(value__116);
return array__115}, false);
exports["push-last"] = push_last__113}
{
var pop__117;
false;
pop__117 = Mmake_function__9("pop", function pop__118 (array__119)
{return array__119.shift()}, false);
exports.pop = pop__117}
{
var pop_last__120;
false;
pop_last__120 = Mmake_function__9("pop_last", function pop_last__121 (array__122)
{return array__122.pop()}, false);
exports["pop-last"] = pop_last__120}
{
var but_last__123;
false;
but_last__123 = Mmake_function__9("but_last", function but_last__124 (array__125, n__126)
{return array__125.slice(0, ((n__126 || 1) * -1))}, false);
exports["but-last"] = but_last__123}
{
var slice__127;
false;
slice__127 = Mmake_function__9("slice", function slice__128 (array__129, start__130, end__131)
{return array__129.slice(start__130, end__131)}, false);
exports.slice = slice__127}
{
var reduce__132,
reduce1__133;
false;
reduce1__133 = Mmake_function__9("reduce1", function reduce1__134 (function__135, values__136)
{
var sequence__137 = values__136,
B139 = sequence__137[0],
sequence__138 = values__136,
B140 = sequence__138.slice(1);
return reduce__132(function__135, B139, B140)}, false);
exports.reduce1 = reduce1__133}
{
var GE__143;
false;
reduce__132 = Mmake_function__9("reduce", function reduce__144 (function__145, initial_value__146, values__147)
{
var value__148 = initial_value__146,
object__153 = values__147,
B141__149 = ((object__153 || false).length || 0),
i__150 = 0;
while (true)
{
var value__154 = GE__143(i__150, B141__149),
B155 = !(trueQ__14(value__154));
if ($T(B155))
{
(function B142__151 (i__152)
{return value__148 = function__145(value__148, values__147[i__152])})(i__150);
i__150 = (i__150 + 1)}
else
break};
false;
return value__148}, false);
exports.reduce = reduce__132}
{
var reverseN__156;
false;
reverseN__156 = Mmake_function__9("reverseN", function reverseN__157 (array__158)
{return array__158.reverse()}, false);
exports["reverse!"] = reverseN__156}
{
var reverse__159;
false;
reverse__159 = Mmake_function__9("reverse", function reverse__160 (array__161)
{
var array__162 = slice__127(array__161);
return array__162.reverse()}, false);
exports.reverse = reverse__159}
{
var Mkeys__166,
L__167,
identity__168,
sortN__169;
false;
sortN__169 = Mmake_function__9("sortN", function sortN__170 (array__171)
{
var B163__172 = $SL.call(arguments, 1),
B164__173 = Mkeys__166(B163__172, {test:L__167,
key:identity__168}),
test__174 = B164__173.test,
key__175 = B164__173.key;
return array__171.sort(function B165__176 (a__177, b__178)
{if ($T(test__174(key__175(a__177), key__175(b__178))))
{return -1}
else
return 1})}, false);
exports["sort!"] = sortN__169}
{
var B192 = $K("test"),
B193 = $K("key"),
sort__181;
false;
sort__181 = Mmake_function__9("sort", function sort__182 (array__183)
{
var B179__184 = $SL.call(arguments, 1),
B180__185 = Mkeys__166(B179__184, {test:L__167,
key:identity__168}),
test__186 = B180__185.test,
key__187 = B180__185.key,
end__190,
start__189,
array__188 = array__183,
B191 = array__188.slice(start__189, end__190);
return sortN__169(B191, B192, test__186, B193, key__187)}, false);
exports.sort = sort__181}
{
var apply__194;
false;
apply__194 = Mmake_function__9("apply", function apply__195 (function__196)
{
var actual__197 = $SL.call(arguments, 1, -1),
object__200 = arguments,
B205 = ((object__200 || false).length || 0),
B206 = (B205 - 1),
last__198 = arguments[B206],
object2__202 = function__196,
object1__201 = last__198,
B207 = (object1__201 === object2__202),
arguments__199;
if ($T(B207))
{arguments__199 = actual__197}
else
{
var array2__204 = last__198,
array1__203 = actual__197;
arguments__199 = array1__203.concat(array2__204)};
return function__196.apply(null, arguments__199)}, false);
exports.apply = apply__194}
{
var curry__209;
false;
curry__209 = Mmake_function__9("curry", function curry__210 (function__211)
{
var curried_args__212 = $SL.call(arguments, 1);
return function B208__213 ()
{
var args__214 = $SL.call(arguments, 0),
array2__216 = args__214,
array1__215 = curried_args__212,
B217 = array1__215.concat(array2__216);
return apply__194(function__211, B217)}}, false);
exports.curry = curry__209}
{
var rcurry__219;
false;
rcurry__219 = Mmake_function__9("rcurry", function rcurry__220 (function__221)
{
var curried_args__222 = $SL.call(arguments, 1);
return function B218__223 ()
{
var args__224 = $SL.call(arguments, 0),
array2__226 = curried_args__222,
array1__225 = args__224,
B227 = array1__225.concat(array2__226);
return apply__194(function__221, B227)}}, false);
exports.rcurry = rcurry__219}
{
var always__229;
false;
always__229 = Mmake_function__9("always", function always__230 (value__231)
{return function B228__232 ()
{return value__231}}, false);
exports.always = always__229}
{
var repeatedly__235;
false;
repeatedly__235 = Mmake_function__9("repeatedly", function repeatedly__236 (function__237, count__238)
{
var result__239 = [],
B233__240 = count__238,
i__241 = 0;
while (true)
{
var value__244 = GE__143(i__241, B233__240),
B247 = !(trueQ__14(value__244));
if ($T(B247))
{
(function B234__242 (i__243)
{
var value__246 = function__237(),
array__245 = result__239;
array__245.push(value__246);
return array__245})(i__241);
i__241 = (i__241 + 1)}
else
break};
return result__239}, false);
exports.repeatedly = repeatedly__235}
{
false;
identity__168 = Mmake_function__9("identity", function identity__248 (value__249)
{return value__249}, false);
exports.identity = identity__168}
{
var complement__251;
false;
complement__251 = Mmake_function__9("complement", function complement__252 (function__253)
{return function B250__254 ()
{
var arguments__255 = $SL.call(arguments, 0),
value__256 = apply__194(function__253, arguments__255);
return !(trueQ__14(value__256))}}, false);
exports.complement = complement__251}
{
var B276 = $K("from-end?"),
compose__259;
false;
compose__259 = Mmake_function__9("compose", function compose__260 ()
{
var functions__261 = $SL.call(arguments, 0),
sequence__267 = functions__261,
B271 = binaryEE__29(size__20(sequence__267), 0);
if ($T(B271))
{return identity__168}
else
return function B257__262 ()
{
var arguments__263 = $SL.call(arguments, 0),
B272 = function B258__264 (value__265, function__266)
{return function__266(value__265)},
array__268 = functions__261,
B273 = array__268[dec__26(size__20(array__268), 1)],
B274 = apply__194(B273, arguments__263),
n__270,
array__269 = functions__261,
B275 = array__269.slice(0, ((n__270 || 1) * -1));
return reduce__132(B272, B274, B275, B276, true)}}, false);
exports.compose = compose__259}
{
var binaryP__277;
false;
binaryP__277 = Mmake_function__9("binaryP", function binaryP__278 (number1__279, number2__280)
{return (number1__279 + number2__280)}, false)}
{
var binary___281;
false;
binary___281 = Mmake_function__9("binary_", function binary___282 (number1__283, number2__284)
{return (number1__283 - number2__284)}, false)}
{
var binaryT__285;
false;
binaryT__285 = Mmake_function__9("binaryT", function binaryT__286 (number1__287, number2__288)
{return (number1__287 * number2__288)}, false)}
{
var binaryS__289;
false;
binaryS__289 = Mmake_function__9("binaryS", function binaryS__290 (number1__291, number2__292)
{return (number1__291 / number2__292)}, false)}
{
var type__293;
false;
type__293 = Mmake_function__9("type", function type__294 (object__295)
{if ($T(object__295))
{return object__295.constructor}
else
return LbooleanG__5}, false);
exports.type = type__293}
{
var instanceQ__297;
false;
instanceQ__297 = Mmake_function__9("instanceQ", function instanceQ__298 (object__299, type__300)
{if ($T(object__299))
{
var ctor__301 = object__299.constructor,
object2__304 = type__300,
object1__303 = ctor__301,
B296__302 = (object1__303 === object2__304);
if ($T(B296__302))
{return B296__302}
else
return (object__299 instanceof type__300)}
else
{
var object2__306 = LbooleanG__5,
object1__305 = type__300;
return (object1__305 === object2__306)}}, false);
exports["instance?"] = instanceQ__297}
$HP = Object.hasOwnProperty
{
var hasQ__307;
false;
hasQ__307 = Mmake_function__9("hasQ", function hasQ__308 (object__309, property__310)
{return $HP.call(object__309,property__310)}, false);
exports["has?"] = hasQ__307}
{
var Mmake_generic__311,
Mmake_method__312;
false;
Mmake_method__312 = Mmake_function__9("Mmake_method", function Mmake_method__313 (name__314, function__315, setterQ__316, type__317, existing__318)
{
var prototype__319 = type__317.prototype,
property__323 = name__314,
object__322 = prototype__319,
B326 = $HP.call(object__322,property__323),
existing_method__320;
if ($T(B326))
{existing_method__320 = prototype__319[name__314]}
else
existing_method__320 = false;
var genericQ__321;
if ($T(existing__318))
{
var property__325 = "%generic?",
object__324 = existing__318,
B327 = $HP.call(object__324,property__325);
if ($T(B327))
{genericQ__321 = existing__318["%generic?"]}
else
genericQ__321 = false}
else
genericQ__321 = false;
function__315["%name"] = name__314;
function__315["%setter?"] = setterQ__316;
function__315["%type"] = type__317;
prototype__319[name__314] = function__315;
if ($T(genericQ__321))
{return existing__318}
else
return Mmake_generic__311(name__314)}, false);
exports["%make-method"] = Mmake_method__312}
{
false;
Mmake_generic__311 = Mmake_function__9("Mmake_generic", function Mmake_generic__329 (name__330)
{
var dispatcher__334 = function B328__331 (object__332)
{
var function__333 = ((object__332 !== null) && (object__332 !== undefined) && object__332[name__330]);
return (function__333 && function__333.apply(object__332, arguments))};
dispatcher__334["%generic?"] = true;
dispatcher__334["%name"] = name__330;
return dispatcher__334}, false);
exports["%make-generic"] = Mmake_generic__311}
{
var Mnext_method__335;
false;
Mnext_method__335 = Mmake_function__9("Mnext_method", function Mnext_method__336 (function__337)
{
var name__338 = function__337["%name"],
proto__339 = function__337["%type"].prototype.__proto__;
return proto__339[name__338]}, false);
exports["%next-method"] = Mnext_method__335}
{
var concatenate__340;
false;
concatenate__340 = Mmake_function__9("concatenate", function concatenate__341 (object__342)
{
var rest__343 = $SL.call(arguments, 1),
B344;
if ($T(instanceQ__297(object__342, LarrayG__4)))
{B344 = Mconcat__53}
else
B344 = binaryP__277;
return reduce__132(B344, object__342, rest__343)}, false);
exports.concatenate = concatenate__340}
{
var compare__346;
false;
compare__346 = Mmake_function__9("compare", function compare__347 (function__348, object__349, objects__350)
{
var failedQ__351;
while (true)
{
var B345__352 = failedQ__351,
value__354;
if ($T(B345__352))
{value__354 = B345__352}
else
value__354 = emptyQ__68(objects__350);
var B361 = !(trueQ__14(value__354));
if ($T(B361))
{
var sequence__355 = objects__350,
other__353 = sequence__355[0],
value__356 = function__348(object__349, other__353),
B359 = !(trueQ__14(value__356));
failedQ__351 = B359;
var sequence__357 = objects__350,
B360 = sequence__357.slice(1);
objects__350 = B360;
object__349 = other__353}
else
break};
var value__358 = failedQ__351;
return !(trueQ__14(value__358))}, false);
exports.compare = compare__346}
{
var EE__362;
false;
EE__362 = Mmake_function__9("EE", function EE__363 (object__364)
{
var objects__365 = $SL.call(arguments, 1);
return compare__346(binaryEE__29, object__364, objects__365)}, false);
exports["=="] = EE__362}
{
var binaryE__366;
false;
binaryE__366 = Mmake_generic__311("binaryE");
exports["binary="] = binaryE__366}
{
var binaryL__367;
false;
binaryL__367 = Mmake_generic__311("binaryL");
exports["binary<"] = binaryL__367}
{
false;
binaryE__366 = Mmake_method__312("binaryE", function B368__369 (object1__370, object2__371)
{
var object2__373 = type__293(object2__371),
object1__372 = type__293(object1__370),
B376 = (object1__372 === object2__373);
if ($T(B376))
{
var object2__375 = object2__371,
object1__374 = object1__370;
return (object1__374 === object2__375)}}, false, LobjectG__1, binaryE__366);
exports["binary="] = binaryE__366}
{
var anyQ__385;
false;
binaryE__366 = Mmake_method__312("binaryE", function B377__386 (array1__387, array2__388)
{
var object2__401 = size__20(array2__388),
object1__400 = size__20(array1__387),
B403 = (object1__400 === object2__401);
if ($T(B403))
{
var B378__389 = array1__387,
B379__390 = array2__388,
B380__391,
B382__392,
B381__393 = [B378__389, B379__390];
while (true)
{
var B383__394 = B380__391,
B404;
if ($T(B383__394))
{B404 = B383__394}
else
B404 = anyQ__385(emptyQ__68, B381__393);
var B405 = not__17(B404);
if ($T(B405))
{
var item1__395 = first__85(B378__389),
item2__396 = first__85(B379__390);
if ($T(not__17(binaryE__366(item1__395, item2__396))))
{
B382__392 = true;
B380__391 = true}
else
{
(function B384__397 (item1__398, item2__399)
{return false})(item1__395, item2__396);
B378__389 = rest__73(B378__389);
B379__390 = rest__73(B379__390);
B381__393 = [B378__389, B379__390]}}
else
break};
var value__402 = B382__392;
return !(trueQ__14(value__402))}}, false, LarrayG__4, binaryE__366);
exports["binary="] = binaryE__366}
{
var binaryE_dispatcher__406;
false;
binaryE_dispatcher__406 = binaryE__366}
{
false;
binaryE__366 = Mmake_function__9("binaryE", function binaryE__408 (object1__409, object2__410)
{
var value__412 = object1__409,
B414 = !(trueQ__14(value__412)),
B407__411;
if ($T(B414))
{
var value__413 = object2__410;
B407__411 = !(trueQ__14(value__413))}
else
B407__411 = false;
if ($T(B407__411))
{return B407__411}
else
return binaryE_dispatcher__406(object1__409, object2__410)}, false);
exports["binary="] = binaryE__366}
{
var E__415;
false;
E__415 = Mmake_function__9("E", function E__416 (object__417)
{
var objects__418 = $SL.call(arguments, 1);
return compare__346(binaryE__366, object__417, objects__418)}, false);
exports["="] = E__415}
{
false;
binaryL__367 = Mmake_method__312("binaryL", function B419__420 (object1__421, object2__422)
{
var object2__424 = type__293(object2__422),
object1__423 = type__293(object1__421),
B425 = (object1__423 === object2__424);
if ($T(B425))
{return (object1__421 < object2__422)}}, false, LobjectG__1, binaryL__367);
exports["binary<"] = binaryL__367}
{
false;
L__167 = Mmake_function__9("L", function L__426 (object__427)
{
var objects__428 = $SL.call(arguments, 1);
return compare__346(binaryL__367, object__427, objects__428)}, false);
exports["<"] = L__167}
{
var binaryLE__430;
false;
binaryLE__430 = Mmake_function__9("binaryLE", function binaryLE__431 (object1__432, object2__433)
{if ($T(object1__432))
{if ($T(object2__433))
{
var B429__434 = binaryL__367(object1__432, object2__433);
if ($T(B429__434))
{return B429__434}
else
return binaryE__366(object1__432, object2__433)}}}, false);
exports["binary<="] = binaryLE__430}
{
var LE__435;
false;
LE__435 = Mmake_function__9("LE", function LE__436 (object__437)
{
var objects__438 = $SL.call(arguments, 1);
return compare__346(binaryLE__430, object__437, objects__438)}, false);
exports["<="] = LE__435}
{
var binaryG__439;
false;
binaryG__439 = Mmake_function__9("binaryG", function binaryG__440 (object1__441, object2__442)
{if ($T(object1__441))
{if ($T(object2__442))
{
var value__443 = binaryL__367(object1__441, object2__442),
B445 = !(trueQ__14(value__443));
if ($T(B445))
{
var value__444 = binaryE__366(object1__441, object2__442);
return !(trueQ__14(value__444))}}}}, false);
exports["binary>"] = binaryG__439}
{
var G__446;
false;
G__446 = Mmake_function__9("G", function G__447 (object__448)
{
var objects__449 = $SL.call(arguments, 1);
return compare__346(binaryG__439, object__448, objects__449)}, false);
exports[">"] = G__446}
{
var binaryGE__451;
false;
binaryGE__451 = Mmake_function__9("binaryGE", function binaryGE__452 (object1__453, object2__454)
{
var value__456 = binaryL__367(object1__453, object2__454),
B450__455 = !(trueQ__14(value__456));
if ($T(B450__455))
{return B450__455}
else
return binaryE__366(object1__453, object2__454)}, false);
exports["binary>="] = binaryGE__451}
{
false;
GE__143 = Mmake_function__9("GE", function GE__457 (object__458)
{
var objects__459 = $SL.call(arguments, 1);
return compare__346(binaryGE__451, object__458, objects__459)}, false);
exports[">="] = GE__143}
{
var as_object__460;
false;
as_object__460 = Mmake_function__9("as_object", function as_object__461 (property_list__462)
{
var end__469,
start__468,
array__467 = property_list__462,
list__463 = array__467.slice(start__468, end__469),
result__464 = {};
while (true)
{
var object__470 = list__463,
B474 = ((object__470 || false).length || 0),
B475 = G__446(B474, 0);
if ($T(B475))
{
var array__471 = list__463,
key__465 = array__471.shift(),
array__472 = list__463,
value__466 = array__472.shift(),
B473;
if ($T(instanceQ__297(key__465, LkeywordG__45)))
{B473 = key__465.name}
else
B473 = as_string__57(key__465);
key__465 = B473;
result__464[key__465] = value__466}
else
break};
return result__464}, false);
exports["as-object"] = as_object__460}
{
var position__476;
false;
position__476 = Mmake_function__9("position", function position__477 (array__478, element__479)
{
var position__480 = array__478.indexOf(element__479);
if ($T(G__446(position__480, -1)))
{return position__480}}, false);
exports.position = position__476}
{
var last_position__481;
false;
last_position__481 = Mmake_function__9("last_position", function last_position__482 (array__483, element__484)
{
var position__485 = array__483.lastIndexOf(element__484);
if ($T(G__446(position__485, -1)))
{return position__485}}, false);
exports["last-position"] = last_position__481}
{
var as_uppercase__486;
false;
as_uppercase__486 = Mmake_function__9("as_uppercase", function as_uppercase__487 (string__488)
{return string__488.toUpperCase()}, false);
exports["as-uppercase"] = as_uppercase__486}
{
var as_lowercase__489;
false;
as_lowercase__489 = Mmake_function__9("as_lowercase", function as_lowercase__490 (string__491)
{return string__491.toLowerCase()}, false);
exports["as-lowercase"] = as_lowercase__489}
{
var join__492;
false;
join__492 = Mmake_function__9("join", function join__493 (array__494, string__495)
{return array__494.join(string__495)}, false);
exports.join = join__492}
{
var trim__496;
false;
trim__496 = Mmake_function__9("trim", function trim__497 (string__498)
{return string__498.trim()}, false);
exports.trim = trim__496}
{
var replace__499;
false;
replace__499 = Mmake_function__9("replace", function replace__500 (string__501, pattern__502, replacement__503)
{return string__501.replace(pattern__502, replacement__503)}, false);
exports.replace = replace__499}
{
var make_object__504;
false;
make_object__504 = Mmake_function__9("make_object", function make_object__505 ()
{
var key_values__506 = $SL.call(arguments, 0);
return as_object__460(key_values__506)}, false);
exports["make-object"] = make_object__504}
{
var LsymbolG__507;
false;
LsymbolG__507 = Mmake_class__38(LobjectG__1, {name:false,
module:false});
exports["<symbol>"] = LsymbolG__507}
{
var Msymbols__508;
false;
Msymbols__508 = {}}
{
var B524 = $K("name"),
B525 = $K("module"),
get_setter__511,
make__512,
get__513,
symbol__514;
false;
symbol__514 = Mmake_function__9("symbol", function symbol__515 (name__516, module__517)
{
var string__522 = name__516,
name__518 = string__522.toLowerCase(),
B509__519 = module__517,
string__523;
if ($T(B509__519))
{string__523 = B509__519}
else
string__523 = "";
var moduleT__520 = string__523.toLowerCase(),
B510__521 = get__513(Msymbols__508, moduleT__520, name__518);
if ($T(B510__521))
{return B510__521}
else
return get_setter__511(Msymbols__508, moduleT__520, name__518, make__512(LsymbolG__507, B524, name__518, B525, module__517))}, false);
exports.symbol = symbol__514}
$S = symbol__514
{
var symbol_name__526;
false;
symbol_name__526 = Mmake_function__9("symbol_name", function symbol_name__527 (symbol__528)
{return get__513(symbol__528, "name")}, false);
exports["symbol-name"] = symbol_name__526}
{
false;
Mkeys__166 = Mmake_function__9("Mkeys", function Mkeys__530 (key_values__531, defaults__532)
{
var i__533 = 0;
while (true)
{
var value__538 = (i__533 >= size__20(key_values__531)),
B543 = !(trueQ__14(value__538));
if ($T(B543))
{
(function B529__534 (i__535)
{
var key__536 = key_values__531[i__535],
number__539 = i__535,
B541 = (number__539 + 1),
value__537 = key_values__531[B541];
if ($T(instanceQ__297(key__536, LkeywordG__45)))
{return defaults__532[key__536.name] = value__537}})(i__533);
var number__540 = i__533,
B542 = (number__540 + 1);
i__533 = B542}
else
break};
false;
return defaults__532}, false);
exports["%keys"] = Mkeys__166}
{
var element__548,
choose__549,
object_properties__550,
find_key__551;
false;
find_key__551 = Mmake_function__9("find_key", function find_key__552 (array__553, predicate__554)
{
var B544__555 = $SL.call(arguments, 2),
B545__556 = Mkeys__166(B544__555, {skip:0,
failure:false,
"from-end?":false}),
skip__557 = B545__556.skip,
failure__558 = B545__556.failure,
from_endQ__559 = B545__556["from-end?"],
keys__560 = object_properties__550(array__553),
B565 = function B546__561 (index__562)
{return predicate__554(element__548(array__553, index__562))},
B566;
if ($T(from_endQ__559))
{B566 = reverse__159(keys__560)}
else
B566 = keys__560;
var satisfying_keys__563 = choose__549(B565, B566),
B547__564 = element__548(satisfying_keys__563, skip__557);
if ($T(B547__564))
{return B547__564}
else
return failure__558}, false);
exports["find-key"] = find_key__551}
{
var parse_integer__569;
false;
parse_integer__569 = Mmake_function__9("parse_integer", function parse_integer__570 (value__571)
{
var B567__572 = $SL.call(arguments, 1),
B568__573 = Mkeys__166(B567__572, {radix:10}),
radix__574 = B568__573.radix;
return parseInt(value__571, radix__574)}, false);
exports["parse-integer"] = parse_integer__569}
{
false;
element__548 = Mmake_function__9("element", function element__578 (array__579, index__580)
{
var B575__581 = $SL.call(arguments, 2),
B576__582 = Mkeys__166(B575__581, {"default":false}),
default__583 = B576__582["default"],
B577__584 = array__579[index__580];
if ($T(B577__584))
{return B577__584}
else
return default__583}, false);
exports.element = element__548}
{
var element_setter__585;
false;
element_setter__585 = Mmake_function__9("element_setter", function element_setter__586 (array__587, key__588, value__589)
{return array__587[key__588] = value__589}, true);
exports["element-setter"] = element_setter__585}
{
var replace_subsequence__592;
false;
replace_subsequence__592 = Mmake_function__9("replace_subsequence", function replace_subsequence__593 (target_array__594, insert_array__595)
{
var B590__596 = $SL.call(arguments, 2),
object__600 = target_array__594,
B607 = ((object__600 || false).length || 0),
B608 = {start:0,
end:B607},
B591__597 = Mkeys__166(B590__596, B608),
start__598 = B591__597.start,
end__599 = B591__597.end,
end__603 = start__598,
start__602 = 0,
array__601 = target_array__594,
B609 = array__601.slice(start__602, end__603),
end__606,
start__605 = end__599,
array__604 = target_array__594,
B610 = array__604.slice(start__605, end__606);
return concatenate__340(B609, insert_array__595, B610)}, false);
exports["replace-subsequence"] = replace_subsequence__592}
{
var replace_subsequenceN__613;
false;
replace_subsequenceN__613 = Mmake_function__9("replace_subsequenceN", function replace_subsequenceN__614 (target_array__615, insert_array__616)
{
var B611__617 = $SL.call(arguments, 2),
object__622 = target_array__615,
B625 = ((object__622 || false).length || 0),
B626 = {start:0,
end:B625},
B612__618 = Mkeys__166(B611__617, B626),
start__619 = B612__618.start,
end__620 = B612__618.end,
array2__624 = insert_array__616,
array1__623 = [start__619, (end__620 - start__619)],
rest__621 = array1__623.concat(array2__624);
[].splice.apply(target_array__615, rest__621);
return target_array__615}, false);
exports["replace-subsequence!"] = replace_subsequenceN__613}
{
var removeN__630;
false;
removeN__630 = Mmake_function__9("removeN", function removeN__631 (array__632, value__633)
{
var B627__634 = $SL.call(arguments, 2),
B628__635 = Mkeys__166(B627__634, {test:EE__362}),
test__636 = B628__635.test,
B629__637 = find_key__551(array__632, curry__209(test__636, value__633));
if ($T(B629__637))
{
var key__638 = B629__637;
array__632.splice(key__638, 1)};
return array__632}, false);
exports["remove!"] = removeN__630}
{
var remove__641;
false;
remove__641 = Mmake_function__9("remove", function remove__642 (array__643, value__644)
{
var B639__645 = $SL.call(arguments, 2),
B640__646 = Mkeys__166(B639__645, {test:EE__362}),
test__647 = B640__646.test,
end__650,
start__649,
array__648 = array__643,
B651 = array__648.slice(start__649, end__650);
return removeN__630(B651, value__644, B192, test__647)}, false);
exports.remove = remove__641}
{
var interpose__653;
false;
interpose__653 = Mmake_function__9("interpose", function interpose__654 (separator__655, array__656)
{
var values__661 = array__656,
function__660 = function B652__657 (a__658, b__659)
{return concatenate__340([a__658, separator__655], b__659)};
return reduce__132(function__660, first__85(values__661), rest__73(values__661))}, false);
exports.interpose = interpose__653}
{
false;
anyQ__385 = Mmake_function__9("anyQ", function anyQ__664 (function__665, values__666)
{
var value__667,
object__673 = values__666,
n__668 = ((object__673 || false).length || 0),
i__669 = 0;
while (true)
{
var B662__670 = value__667,
value__674;
if ($T(B662__670))
{value__674 = B662__670}
else
value__674 = GE__143(i__669, n__668);
var B677 = !(trueQ__14(value__674));
if ($T(B677))
{
(function B663__671 (i__672)
{return value__667 = function__665(values__666[i__672])})(i__669);
var number__675 = i__669,
B676 = (number__675 + 1);
i__669 = B676}
else
break};
return value__667}, false);
exports["any?"] = anyQ__385}
{
var memberQ__681;
false;
memberQ__681 = Mmake_function__9("memberQ", function memberQ__682 (value__683, array__684)
{
var B678__685 = $SL.call(arguments, 2),
B679__686 = Mkeys__166(B678__685, {test:EE__362}),
test__687 = B679__686.test;
return anyQ__385(function B680__688 (other_value__689)
{return test__687(value__683, other_value__689)}, array__684)}, false);
exports["member?"] = memberQ__681}
{
var everyQ__691;
false;
everyQ__691 = Mmake_function__9("everyQ", function everyQ__692 (function__693, array__694)
{
var value__697 = anyQ__385(function B690__695 (value__696)
{return not__17(function__693(value__696))}, array__694);
return !(trueQ__14(value__697))}, false);
exports["every?"] = everyQ__691}
{
var map__704;
false;
map__704 = Mmake_function__9("map", function map__705 (function__706)
{
var arrays__707 = $SL.call(arguments, 1),
result__708 = [],
sequence__717 = rest__73(arrays__707),
B727 = binaryEE__29(size__20(sequence__717), 0);
if ($T(B727))
{
var sequence__718 = arrays__707,
B698__709 = sequence__718[0],
B699__710,
B701__711,
B700__712 = [B698__709];
while (true)
{
var B702__713 = B699__710,
value__719;
if ($T(B702__713))
{value__719 = B702__713}
else
value__719 = anyQ__385(emptyQ__68, B700__712);
var B729 = !(trueQ__14(value__719));
if ($T(B729))
{
var sequence__720 = B698__709,
item__714 = sequence__720[0];
(function B703__715 (item__716)
{
var value__722 = function__706(item__716),
array__721 = result__708;
array__721.push(value__722);
return array__721})(item__714);
var sequence__723 = B698__709,
B728 = sequence__723.slice(1);
B698__709 = B728;
B700__712 = [B698__709]}
else
break};
B701__711}
else
while (true)
{
var value__724 = anyQ__385(emptyQ__68, arrays__707),
B730 = !(trueQ__14(value__724));
if ($T(B730))
{
var value__726 = apply__194(function__706, map__705(first__85, arrays__707)),
array__725 = result__708;
array__725.push(value__726);
array__725;
arrays__707 = map__705(rest__73, arrays__707)}
else
break};
return result__708}, false);
exports.map = map__704}
{
var do__737;
false;
do__737 = Mmake_function__9("Rdo", function do__738 (function__739)
{
var arrays__740 = $SL.call(arguments, 1),
sequence__749 = rest__73(arrays__740),
B755 = binaryEE__29(size__20(sequence__749), 0);
if ($T(B755))
{
var sequence__750 = arrays__740,
B731__741 = sequence__750[0],
B732__742,
B734__743,
B733__744 = [B731__741];
while (true)
{
var B735__745 = B732__742,
value__751;
if ($T(B735__745))
{value__751 = B735__745}
else
value__751 = anyQ__385(emptyQ__68, B733__744);
var B757 = !(trueQ__14(value__751));
if ($T(B757))
{
var sequence__752 = B731__741,
item__746 = sequence__752[0];
(function B736__747 (item__748)
{return function__739(item__748)})(item__746);
var sequence__753 = B731__741,
B756 = sequence__753.slice(1);
B731__741 = B756;
B733__744 = [B731__741]}
else
break};
B734__743}
else
while (true)
{
var value__754 = anyQ__385(emptyQ__68, arrays__740),
B758 = !(trueQ__14(value__754));
if ($T(B758))
{
apply__194(function__739, map__704(first__85, arrays__740));
arrays__740 = map__704(rest__73, arrays__740)}
else
break};
return false}, false);
exports["do"] = do__737}
{
false;
choose__549 = Mmake_function__9("choose", function choose__765 (function__766, array__767)
{
var result__768 = [],
B759__769 = array__767,
B760__770,
B762__771,
B761__772 = [B759__769];
while (true)
{
var B763__773 = B760__770,
value__777;
if ($T(B763__773))
{value__777 = B763__773}
else
value__777 = anyQ__385(emptyQ__68, B761__772);
var B783 = !(trueQ__14(value__777));
if ($T(B783))
{
var sequence__778 = B759__769,
element__774 = sequence__778[0];
(function B764__775 (element__776)
{if ($T(function__766(element__776)))
{
var value__780 = element__776,
array__779 = result__768;
array__779.push(value__780);
return array__779}})(element__774);
var sequence__781 = B759__769,
B782 = sequence__781.slice(1);
B759__769 = B782;
B761__772 = [B759__769]}
else
break};
B762__771;
return result__768}, false);
exports.choose = choose__549}
{
var copy_sequence__787;
false;
copy_sequence__787 = Mmake_function__9("copy_sequence", function copy_sequence__788 (array__789)
{
var B784__790 = $SL.call(arguments, 1),
B785__791 = Mkeys__166(B784__790, {start:0,
end:false}),
start__792 = B785__791.start,
end__793 = B785__791.end,
B786__794 = end__793,
end__795;
if ($T(B786__794))
{end__795 = B786__794}
else
end__795 = undefined;
var end__798 = end__795,
start__797 = start__792,
array__796 = array__789;
return array__796.slice(start__797, end__798)}, false);
exports["copy-sequence"] = copy_sequence__787}
{
var initialize__799;
false;
make__512 = Mmake_function__9("make", function make__800 (type__801)
{
var arguments__802 = $SL.call(arguments, 1),
object__803 = new(type__801);
apply__194(initialize__799, object__803, arguments__802);
return object__803}, false);
exports.make = make__512}
{
false;
object_properties__550 = Mmake_function__9("object_properties", function object_properties__808 (object__809)
{
var B804__810 = $SL.call(arguments, 1),
B805__811 = Mkeys__166(B804__810, {"inherited?":false}),
inheritedQ__812 = B805__811["inherited?"],
result__813 = [];
if ($T(instanceQ__297(object__809, LarrayG__4)))
{
var object__819 = object__809,
B806__814 = ((object__819 || false).length || 0),
i__815 = 0;
while (true)
{
var value__820 = GE__143(i__815, B806__814),
B823 = !(trueQ__14(value__820));
if ($T(B823))
{
(function B807__816 (i__817)
{
var value__822 = i__817,
array__821 = result__813;
array__821.push(value__822);
return array__821})(i__815);
i__815 = (i__815 + 1)}
else
break};
false}
else
{
var i__818;
for (i__818 in object__809) (inheritedQ__812||$HP.call(object__809, i__818)) &&result__813.push(i__818)};
return result__813}, false);
exports["object-properties"] = object_properties__550}
{
var object_values__824;
false;
object_values__824 = Mmake_function__9("object_values", function object_values__825 (object__826)
{return map__704(curry__209(get__513, object__826), object_properties__550(object__826))}, false);
exports["object-values"] = object_values__824}
{
false;
initialize__799 = Mmake_generic__311("initialize");
exports.initialize = initialize__799}
{
var B846 = $K("inherited?");
false;
initialize__799 = Mmake_method__312("initialize", function B827__832 (object__833)
{
var rest__834 = $SL.call(arguments, 1),
arguments__835 = as_object__460(rest__834),
B828__836 = type__293(object__833)["%properties"];
if ($T(B828__836))
{
var properties__837 = B828__836;
do__737(function B829__838 (key__839)
{
var B830__840 = hasQ__307(LobjectG__1.prototype, key__839),
value__844;
if ($T(B830__840))
{value__844 = B830__840}
else
value__844 = hasQ__307(object__833, key__839);
var B845 = !(trueQ__14(value__844));
if ($T(B845))
{
var B831__841 = arguments__835[key__839],
value__843;
if ($T(B831__841))
{value__843 = B831__841}
else
{
var value__842 = properties__837[key__839];
if ($T(value__842))
{value__843 = value__842()}
else
value__843 = false};
return object__833[key__839] = value__843}}, object_properties__550(properties__837, B846, true))};
return object__833}, false, LobjectG__1, initialize__799);
exports.initialize = initialize__799}
{
var Lhash_symbolG__847;
false;
Lhash_symbolG__847 = Mmake_class__38(LobjectG__1, {name:false});
exports["<hash-symbol>"] = Lhash_symbolG__847}
{
var key__848 = make__512(Lhash_symbolG__847, B524, "key");
$KEY = key__848}
{
var rest__849 = make__512(Lhash_symbolG__847, B524, "rest");
$REST = rest__849}
{
false;
get__513 = Mmake_function__9("get", function get__856 (object__857)
{
var properties__858 = $SL.call(arguments, 1),
result__859,
B850__860 = properties__858,
B851__861,
B853__862,
B852__863 = [B850__860];
while (true)
{
var B854__864 = B851__861,
value__868;
if ($T(B854__864))
{value__868 = B854__864}
else
value__868 = anyQ__385(emptyQ__68, B852__863);
var B874 = !(trueQ__14(value__868));
if ($T(B874))
{
var sequence__869 = B850__860,
property__865 = sequence__869[0],
value__870 = hasQ__307(object__857, property__865),
B872 = !(trueQ__14(value__870));
if ($T(B872))
{
B853__862 = result__859 = false;
B851__861 = true}
else
{
(function B855__866 (property__867)
{
result__859 = object__857[property__867];
return object__857 = result__859})(property__865);
var sequence__871 = B850__860,
B873 = sequence__871.slice(1);
B850__860 = B873;
B852__863 = [B850__860]}}
else
break};
B853__862;
return result__859}, false);
exports.get = get__513}
{
false;
get_setter__511 = Mmake_function__9("get_setter", function get_setter__875 (object__876)
{
var propertiesSvalue__877 = $SL.call(arguments, 1),
object__880 = propertiesSvalue__877,
B886 = ((object__880 || false).length || 0),
B887 = LE__435(B886, 2);
if ($T(B887))
{
var sequence__881 = propertiesSvalue__877,
B888 = sequence__881[1];
return object__876[first__85(propertiesSvalue__877)] = B888}
else
{
var sequence__882 = propertiesSvalue__877,
property__878 = sequence__882[0],
property__884 = property__878,
object__883 = object__876,
B889 = $HP.call(object__883,property__884),
object2__879;
if ($T(B889))
{object2__879 = object__876[property__878]}
else
object2__879 = object__876[property__878] = make_object__504();
var sequence__885 = propertiesSvalue__877,
B890 = sequence__885.slice(1);
return apply__194(get_setter__875, object2__879, B890)}}, true);
exports["get-setter"] = get_setter__511}
{
var split_with__892;
false;
split_with__892 = Mmake_function__9("split_with", function split_with__893 (function__894, array__895)
{
var a__896 = [],
b__897 = [];
do__737(function B891__898 (item__899)
{
var value__901 = item__899,
array__900;
if ($T(function__894(item__899)))
{array__900 = a__896}
else
array__900 = b__897;
array__900.push(value__901);
return array__900}, array__895);
return [a__896, b__897]}, false);
exports["split-with"] = split_with__892}
{
var as_hex_string__902;
false;
as_hex_string__902 = Mmake_function__9("as_hex_string", function as_hex_string__903 (number__904)
{return number__904.toString(16)}, false);
exports["as-hex-string"] = as_hex_string__902}
{
var description__905;
false;
description__905 = Mmake_generic__311("description");
exports.description = description__905}
{
false;
description__905 = Mmake_method__312("description", function B906__907 (number__908)
{return ("" + number__908)}, false, LnumberG__3, description__905);
exports.description = description__905}
{
false;
description__905 = Mmake_method__312("description", function B909__910 (string__911)
{
var escaped__912 = string__911.replace("\"", "\\\"", "g");
return ("\"" + escaped__912 + "\"")}, false, LstringG__2, description__905);
exports.description = description__905}
{
false;
description__905 = Mmake_method__312("description", function B913__914 (array__915)
{return ("(" + join__492(map__704(description__905, array__915), " ") + ")")}, false, LarrayG__4, description__905);
exports.description = description__905}
{
false;
description__905 = Mmake_method__312("description", function B916__917 (value__918)
{if ($T(value__918))
{return "#t"}
else
return "#f"}, false, LbooleanG__5, description__905);
exports.description = description__905}
{
false;
description__905 = Mmake_method__312("description", function B919__921 (symbol__922)
{
var B920__923 = get__513(symbol__922, "module"),
B925;
if ($T(B920__923))
{
var module__924 = B920__923;
B925 = concatenate__340(module__924, "::")}
else
B925 = "";
var B926 = symbol_name__526(symbol__922);
return (B925 + B926)}, false, LsymbolG__507, description__905);
exports.description = description__905}
{
false;
description__905 = Mmake_method__312("description", function B927__928 (keyword__929)
{return (symbol_name__526(keyword__929) + ":")}, false, LkeywordG__45, description__905);
exports.description = description__905}
{
false;
description__905 = Mmake_method__312("description", function B930__931 (symbol__932)
{return ("#" + symbol_name__526(symbol__932))}, false, Lhash_symbolG__847, description__905);
exports.description = description__905}
{
var min__933;
false;
min__933 = Math.min;
exports.min = min__933}
{
var max__934;
false;
max__934 = Math.max;
exports.max = max__934}
{
var abs__935;
false;
abs__935 = Math.abs;
exports.abs = abs__935}
{
var round__936;
false;
round__936 = Math.round;
exports.round = round__936}
{
var floor__937;
false;
floor__937 = Math.floor;
exports.floor = floor__937}
{
var ceil__938;
false;
ceil__938 = Math.ceil;
exports.ceil = ceil__938}
{
var sin__939;
false;
sin__939 = Math.sin;
exports.sin = sin__939}
{
var cos__940;
false;
cos__940 = Math.cos;
exports.cos = cos__940}
{
var atan2__941;
false;
atan2__941 = Math.atan2;
exports.atan2 = atan2__941}
{
var expt__942;
false;
expt__942 = Math.pow;
exports.expt = expt__942}
{
var sqrt__943;
false;
sqrt__943 = Math.sqrt;
exports.sqrt = sqrt__943}
{
var mod__944;
false;
mod__944 = Mmake_function__9("mod", function mod__945 (number1__946, number2__947)
{return (number1__946 % number2__947)}, false);
exports.mod = mod__944}
{
var TpiT__948;
false;
TpiT__948 = Math.PI;
exports["*pi*"] = TpiT__948}
{
var TradiantT__949;
false;
TradiantT__949 = (TpiT__948 / 180)}
{
var as_radiant__950;
false;
as_radiant__950 = Mmake_function__9("as_radiant", function as_radiant__951 (number__952)
{return (number__952 * TradiantT__949)}, false);
exports["as-radiant"] = as_radiant__950}
{
var signal__953;
false;
signal__953 = Mmake_function__9("signal", function signal__954 (error__955)
{
throw(error__955);
return false}, false);
exports.signal = signal__953}
{
var extendN__962;
false;
extendN__962 = Mmake_function__9("extendN", function extendN__963 (object1__964, object2__965)
{
var B956__966 = object_properties__550(object2__965),
B957__967,
B959__968,
B958__969 = [B956__966];
while (true)
{
var B960__970 = B957__967,
value__974;
if ($T(B960__970))
{value__974 = B960__970}
else
value__974 = anyQ__385(emptyQ__68, B958__969);
var B978 = !(trueQ__14(value__974));
if ($T(B978))
{
var sequence__975 = B956__966,
key__971 = sequence__975[0];
(function B961__972 (key__973)
{return get_setter__511(object1__964, key__973, get__513(object2__965, key__973))})(key__971);
var sequence__976 = B956__966,
B977 = sequence__976.slice(1);
B956__966 = B977;
B958__969 = [B956__966]}
else
break};
B959__968;
return object1__964}, false);
exports["extend!"] = extendN__962}
{
var as_property_list__987;
false;
as_property_list__987 = Mmake_function__9("as_property_list", function as_property_list__988 (object__989)
{
var B979__990 = $SL.call(arguments, 1),
B980__991 = Mkeys__166(B979__990, {"keywords?":false}),
keywordsQ__992 = B980__991["keywords?"],
result__993 = [],
B981__994 = object_properties__550(object__989),
B982__995,
B984__996,
B983__997 = [B981__994];
while (true)
{
var B985__998 = B982__995,
value__1002;
if ($T(B985__998))
{value__1002 = B985__998}
else
value__1002 = anyQ__385(emptyQ__68, B983__997);
var B1010 = !(trueQ__14(value__1002));
if ($T(B1010))
{
var sequence__1003 = B981__994,
key__999 = sequence__1003[0];
(function B986__1000 (key__1001)
{
var value__1005;
if ($T(keywordsQ__992))
{value__1005 = keyword__47(as_string__57(key__1001))}
else
value__1005 = key__1001;
var array__1004 = result__993;
array__1004.push(value__1005);
array__1004;
var value__1007 = get__513(object__989, key__1001),
array__1006 = result__993;
array__1006.push(value__1007);
return array__1006})(key__999);
var sequence__1008 = B981__994,
B1009 = sequence__1008.slice(1);
B981__994 = B1009;
B983__997 = [B981__994]}
else
break};
B984__996;
return result__993}, false);
exports["as-property-list"] = as_property_list__987}
{
var as_association_list__1019;
false;
as_association_list__1019 = Mmake_function__9("as_association_list", function as_association_list__1020 (object__1021)
{
var B1011__1022 = $SL.call(arguments, 1),
B1012__1023 = Mkeys__166(B1011__1022, {"keywords?":false}),
keywordsQ__1024 = B1012__1023["keywords?"],
result__1025 = [],
B1013__1026 = object_properties__550(object__1021),
B1014__1027,
B1016__1028,
B1015__1029 = [B1013__1026];
while (true)
{
var B1017__1030 = B1014__1027,
value__1034;
if ($T(B1017__1030))
{value__1034 = B1017__1030}
else
value__1034 = anyQ__385(emptyQ__68, B1015__1029);
var B1042 = !(trueQ__14(value__1034));
if ($T(B1042))
{
var sequence__1035 = B1013__1026,
key__1031 = sequence__1035[0];
(function B1018__1032 (key__1033)
{
var B1039;
if ($T(keywordsQ__1024))
{B1039 = keyword__47(as_string__57(key__1033))}
else
B1039 = key__1033;
var B1040 = get__513(object__1021, key__1033),
value__1037 = [B1039, B1040],
array__1036 = result__1025;
array__1036.push(value__1037);
return array__1036})(key__1031);
var sequence__1038 = B1013__1026,
B1041 = sequence__1038.slice(1);
B1013__1026 = B1041;
B1015__1029 = [B1013__1026]}
else
break};
B1016__1028;
return result__1025}, false);
exports["as-association-list"] = as_association_list__1019}
{
var starts_withQ__1043;
false;
starts_withQ__1043 = Mmake_function__9("starts_withQ", function starts_withQ__1044 (string__1045, prefix__1046)
{
var object2__1048 = 0,
object1__1047 = string__1045.indexOf(prefix__1046);
return (object1__1047 === object2__1048)}, false);
exports["starts-with?"] = starts_withQ__1043}
{
var evenQ__1049;
false;
evenQ__1049 = Mmake_function__9("evenQ", function evenQ__1050 (number__1051)
{
var object2__1053 = 0,
object1__1052 = (number__1051 % 2);
return (object1__1052 === object2__1053)}, false);
exports["even?"] = evenQ__1049}
{
var oddQ__1054;
false;
oddQ__1054 = Mmake_function__9("oddQ", function oddQ__1055 (number__1056)
{
var object2__1058 = 1,
object1__1057 = (number__1056 % 2);
return (object1__1057 === object2__1058)}, false);
exports["odd?"] = oddQ__1054}
{
var group_by__1060;
false;
group_by__1060 = Mmake_function__9("group_by", function group_by__1061 (predicate__1062, items__1063)
{return reduce__132(function B1059__1064 (result__1065, item__1066)
{
var key__1067 = predicate__1062(item__1066),
property__1069 = key__1067,
object__1068 = result__1065,
B1072 = $HP.call(object__1068,property__1069);
if ($T(B1072))
{
var value__1071 = item__1066,
array__1070 = get__513(result__1065, key__1067);
array__1070.push(value__1071);
array__1070}
else
get_setter__511(result__1065, key__1067, [item__1066]);
return result__1065}, make_object__504(), items__1063)}, false);
exports["group-by"] = group_by__1060}
{
var wrap_object__1073;
false;
wrap_object__1073 = Mmake_function__9("wrap_object", function wrap_object__1074 (object__1075)
{
var rest__1076 = $SL.call(arguments, 1),
result__1077 = Object.create(object__1075);
extendN__962(result__1077, as_object__460(rest__1076));
return result__1077}, false)}
{
var unwrap_object__1078;
false;
unwrap_object__1078 = Mmake_function__9("unwrap_object", function unwrap_object__1079 (object__1080)
{return object__1080.__proto__}, false)}
{
var update_with__1083;
false;
update_with__1083 = Mmake_function__9("update_with", function update_with__1084 (fn__1085, obj__1086)
{
var objs__1087 = $SL.call(arguments, 2);
return do__737(function B1081__1088 (obj2__1089)
{return do__737(function B1082__1090 (property__1091)
{
var value__1092 = get__513(obj2__1089, property__1091),
property__1094 = property__1091,
object__1093 = obj__1086,
B1095 = $HP.call(object__1093,property__1094),
B1096;
if ($T(B1095))
{B1096 = fn__1085(get__513(obj__1086, property__1091), value__1092)}
else
B1096 = value__1092;
return get_setter__511(obj__1086, property__1091, B1096)}, object_properties__550(obj2__1089))}, objs__1087)}, false);
exports["update-with"] = update_with__1083}
{
var set_unionN__1097,
as_set__1098;
false;
as_set__1098 = Mmake_function__9("as_set", function as_set__1099 (values__1100)
{
var set__1101 = [];
return set_unionN__1097(set__1101, values__1100)}, false);
exports["as-set"] = as_set__1098}
{
var set_addN__1102;
false;
set_addN__1102 = Mmake_function__9("set_addN", function set_addN__1103 (set__1104, object__1105)
{
var value__1106 = memberQ__681(object__1105, set__1104),
B1109 = !(trueQ__14(value__1106));
if ($T(B1109))
{
var value__1108 = object__1105,
array__1107 = set__1104;
array__1107.push(value__1108);
return array__1107}}, false);
exports["set-add!"] = set_addN__1102}
{
var set_removeN__1110;
false;
set_removeN__1110 = removeN__630;
exports["set-remove!"] = set_removeN__1110}
{
false;
set_unionN__1097 = Mmake_function__9("set_unionN", function set_unionN__1111 (set1__1112, set2__1113)
{
do__737(curry__209(set_addN__1102, set1__1112), set2__1113);
return set1__1112}, false);
exports["set-union!"] = set_unionN__1097}
{
var set_subtractN__1114;
false;
set_subtractN__1114 = Mmake_function__9("set_subtractN", function set_subtractN__1115 (set1__1116, set2__1117)
{
do__737(curry__209(set_removeN__1110, set1__1116), set2__1117);
return set1__1116}, false);
exports["set-subtract!"] = set_subtractN__1114}
{
var chain_object__1118;
false;
chain_object__1118 = Mmake_function__9("chain_object", function chain_object__1119 (object1__1120, object2__1121)
{
object2__1121.__proto__ = object1__1120.__proto__;
object1__1120.__proto__ = object2__1121;
return object1__1120}, false);
exports["chain-object"] = chain_object__1118}
{
var unchain_object__1122;
false;
unchain_object__1122 = Mmake_function__9("unchain_object", function unchain_object__1123 (object__1124)
{
var B1125;
if ($T(object__1124.__proto__))
{B1125 = object__1124.__proto__.__proto__}
else
B1125 = false;
object__1124.__proto__ = B1125;
return object__1124}, false);
exports["unchain-object"] = unchain_object__1122}
{
false;
as_hex_string__902 = Mmake_function__9("as_hex_string", function as_hex_string__1126 (number__1127)
{return number__1127.toString(16)}, false);
exports["as-hex-string"] = as_hex_string__902}
{
var make_plain_object__1128;
false;
make_plain_object__1128 = Mmake_function__9("make_plain_object", function make_plain_object__1129 ()
{return Object.create(null)}, false);
exports["make-plain-object"] = make_plain_object__1128}
{
var ___1130;
false;
___1130 = Mmake_function__9("_", function ___1131 (minuend__1132)
{
var subtrahends__1133 = $SL.call(arguments, 1),
sequence__1134 = subtrahends__1133,
B1135 = binaryEE__29(size__20(sequence__1134), 0);
if ($T(B1135))
{return -(minuend__1132)}
else
return reduce__132(binary___281, minuend__1132, subtrahends__1133)}, false);
exports["-"] = ___1130}
{
var P__1136;
false;
P__1136 = Mmake_function__9("P", function P__1137 ()
{
var numbers__1138 = $SL.call(arguments, 0),
sequence__1139 = numbers__1138,
B1142 = binaryEE__29(size__20(sequence__1139), 0);
if ($T(B1142))
{return 0}
else
{
var values__1141 = numbers__1138,
function__1140 = binaryP__277;
return reduce__132(function__1140, first__85(values__1141), rest__73(values__1141))}}, false);
exports["+"] = P__1136}
{
var T__1143;
false;
T__1143 = Mmake_function__9("T", function T__1144 ()
{
var numbers__1145 = $SL.call(arguments, 0),
sequence__1146 = numbers__1145,
B1149 = binaryEE__29(size__20(sequence__1146), 0);
if ($T(B1149))
{return 1}
else
{
var values__1148 = numbers__1145,
function__1147 = binaryT__285;
return reduce__132(function__1147, first__85(values__1148), rest__73(values__1148))}}, false);
exports["*"] = T__1143}
{
var S__1150;
false;
S__1150 = Mmake_function__9("S", function S__1151 (numerator__1152)
{
var denominators__1153 = $SL.call(arguments, 1),
sequence__1154 = denominators__1153,
B1155 = binaryEE__29(size__20(sequence__1154), 0);
if ($T(B1155))
{return (1 / numerator__1152)}
else
return reduce__132(binaryS__289, numerator__1152, denominators__1153)}, false);
exports["/"] = S__1150}
