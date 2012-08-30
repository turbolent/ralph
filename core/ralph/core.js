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
Mmake_function__9 = function B10 (name__11, function__12, setterQ__13)
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
var class__43 = function B42 ()
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
B51 = Mkeywords__44[nameT__50];
if ($T(B51))
{return B51}
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
{return binaryEE__29(size__20(sequence__70), 0)}, false);
exports["empty?"] = emptyQ__68}
{
var rest__71;
false;
rest__71 = Mmake_function__9("rest", function rest__72 (sequence__73)
{return sequence__73.slice(1)}, false);
exports.rest = rest__71}
{
var last__74;
false;
last__74 = Mmake_function__9("last", function last__75 (array__76)
{return array__76[dec__26(size__20(array__76), 1)]}, false);
exports.last = last__74}
{
var last_setter__77;
false;
last_setter__77 = Mmake_function__9("last_setter", function last_setter__78 (array__79, value__80)
{return array__79[dec__26(size__20(array__79), 1)] = value__80}, true);
exports["last-setter"] = last_setter__77}
{
var first__81;
false;
first__81 = Mmake_function__9("first", function first__82 (sequence__83)
{return sequence__83[0]}, false);
exports.first = first__81}
{
var first_setter__84;
false;
first_setter__84 = Mmake_function__9("first_setter", function first_setter__85 (array__86, value__87)
{return array__86[0] = value__87}, true);
exports["first-setter"] = first_setter__84}
{
var second__88;
false;
second__88 = Mmake_function__9("second", function second__89 (sequence__90)
{return sequence__90[1]}, false);
exports.second = second__88}
{
var second_setter__91;
false;
second_setter__91 = Mmake_function__9("second_setter", function second_setter__92 (array__93, value__94)
{return array__93[1] = value__94}, true);
exports["second-setter"] = second_setter__91}
{
var third__95;
false;
third__95 = Mmake_function__9("third", function third__96 (sequence__97)
{return sequence__97[2]}, false);
exports.third = third__95}
{
var third_setter__98;
false;
third_setter__98 = Mmake_function__9("third_setter", function third_setter__99 (array__100, value__101)
{return array__100[2] = value__101}, true);
exports["third-setter"] = third_setter__98}
{
var make_array__102;
false;
make_array__102 = Mmake_function__9("make_array", function make_array__103 ()
{
var elements__104 = $SL.call(arguments, 0);
return elements__104}, false);
exports["make-array"] = make_array__102}
{
var push__105;
false;
push__105 = Mmake_function__9("push", function push__106 (array__107, value__108)
{
array__107.unshift(value__108);
return array__107}, false);
exports.push = push__105}
{
var push_last__109;
false;
push_last__109 = Mmake_function__9("push_last", function push_last__110 (array__111, value__112)
{
array__111.push(value__112);
return array__111}, false);
exports["push-last"] = push_last__109}
{
var pop__113;
false;
pop__113 = Mmake_function__9("pop", function pop__114 (array__115)
{return array__115.shift()}, false);
exports.pop = pop__113}
{
var pop_last__116;
false;
pop_last__116 = Mmake_function__9("pop_last", function pop_last__117 (array__118)
{return array__118.pop()}, false);
exports["pop-last"] = pop_last__116}
{
var but_last__119;
false;
but_last__119 = Mmake_function__9("but_last", function but_last__120 (array__121, n__122)
{return array__121.slice(0, ((n__122 || 1) * -1))}, false);
exports["but-last"] = but_last__119}
{
var slice__123;
false;
slice__123 = Mmake_function__9("slice", function slice__124 (array__125, start__126, end__127)
{return array__125.slice(start__126, end__127)}, false);
exports.slice = slice__123}
{
var reduce__128,
reduce1__129;
false;
reduce1__129 = Mmake_function__9("reduce1", function reduce1__130 (function__131, values__132)
{return reduce__128(function__131, first__81(values__132), rest__71(values__132))}, false);
exports.reduce1 = reduce1__129}
{
var GE__135;
false;
reduce__128 = Mmake_function__9("reduce", function reduce__136 (function__137, initial_value__138, values__139)
{
var value__140 = initial_value__138,
B141 = size__20(values__139),
i__142 = 0;
while ($T(not__17(GE__135(i__142, B141))))
{
(function B143 (i__144)
{return value__140 = function__137(value__140, values__139[i__144])})(i__142);
i__142 = (i__142 + 1)};
false;
return value__140}, false);
exports.reduce = reduce__128}
{
var reverseN__145;
false;
reverseN__145 = Mmake_function__9("reverseN", function reverseN__146 (array__147)
{return array__147.reverse()}, false);
exports["reverse!"] = reverseN__145}
{
var reverse__148;
false;
reverse__148 = Mmake_function__9("reverse", function reverse__149 (array__150)
{return reverseN__145(slice__123(array__150))}, false);
exports.reverse = reverse__148}
{
var Mkeys__154,
L__155,
identity__156,
sortN__157;
false;
sortN__157 = Mmake_function__9("sortN", function sortN__158 (array__159)
{
var B160 = $SL.call(arguments, 1),
B161 = Mkeys__154(B160, {test:L__155,
key:identity__156}),
test__162 = B161.test,
key__163 = B161.key;
return array__159.sort(function B164 (a__165, b__166)
{if ($T(test__162(key__163(a__165), key__163(b__166))))
{return -1}
else
return 1})}, false);
exports["sort!"] = sortN__157}
{
var sort__169;
false;
sort__169 = Mmake_function__9("sort", function sort__170 (array__171)
{
var B172 = $SL.call(arguments, 1),
B173 = Mkeys__154(B172, {test:L__155,
key:identity__156}),
test__174 = B173.test,
key__175 = B173.key;
return sortN__157(slice__123(array__171), $K("test"), test__174, $K("key"), key__175)}, false);
exports.sort = sort__169}
{
var apply__176;
false;
apply__176 = Mmake_function__9("apply", function apply__177 (function__178)
{
var actual__179 = $SL.call(arguments, 1, -1),
last__180 = arguments[(size__20(arguments) - 1)],
arguments__181;
if ($T(binaryEE__29(last__180, function__178)))
{arguments__181 = actual__179}
else
arguments__181 = Mconcat__53(actual__179, last__180);
return function__178.apply(null, arguments__181)}, false);
exports.apply = apply__176}
{
var curry__183;
false;
curry__183 = Mmake_function__9("curry", function curry__184 (function__185)
{
var curried_args__186 = $SL.call(arguments, 1);
return function B187 ()
{
var args__188 = $SL.call(arguments, 0);
return apply__176(function__185, Mconcat__53(curried_args__186, args__188))}}, false);
exports.curry = curry__183}
{
var rcurry__190;
false;
rcurry__190 = Mmake_function__9("rcurry", function rcurry__191 (function__192)
{
var curried_args__193 = $SL.call(arguments, 1);
return function B194 ()
{
var args__195 = $SL.call(arguments, 0);
return apply__176(function__192, Mconcat__53(args__195, curried_args__193))}}, false);
exports.rcurry = rcurry__190}
{
var always__197;
false;
always__197 = Mmake_function__9("always", function always__198 (value__199)
{return function B200 ()
{return value__199}}, false);
exports.always = always__197}
{
var repeatedly__203;
false;
repeatedly__203 = Mmake_function__9("repeatedly", function repeatedly__204 (function__205, count__206)
{
var result__207 = [],
B208 = count__206,
i__209 = 0;
while ($T(not__17(GE__135(i__209, B208))))
{
(function B210 (i__211)
{return push_last__109(result__207, function__205())})(i__209);
i__209 = (i__209 + 1)};
return result__207}, false);
exports.repeatedly = repeatedly__203}
{
false;
identity__156 = Mmake_function__9("identity", function identity__212 (value__213)
{return value__213}, false);
exports.identity = identity__156}
{
var complement__215;
false;
complement__215 = Mmake_function__9("complement", function complement__216 (function__217)
{return function B218 ()
{
var arguments__219 = $SL.call(arguments, 0);
return not__17(apply__176(function__217, arguments__219))}}, false);
exports.complement = complement__215}
{
var compose__222;
false;
compose__222 = Mmake_function__9("compose", function compose__223 ()
{
var functions__224 = $SL.call(arguments, 0);
if ($T(emptyQ__68(functions__224)))
{return identity__156}
else
return function B225 ()
{
var arguments__226 = $SL.call(arguments, 0);
return reduce__128(function B227 (value__228, function__229)
{return function__229(value__228)}, apply__176(last__74(functions__224), arguments__226), but_last__119(functions__224), $K("from-end?"), true)}}, false);
exports.compose = compose__222}
{
var binaryP__230;
false;
binaryP__230 = Mmake_function__9("binaryP", function binaryP__231 (number1__232, number2__233)
{return (number1__232 + number2__233)}, false)}
{
var binary___234;
false;
binary___234 = Mmake_function__9("binary_", function binary___235 (number1__236, number2__237)
{return (number1__236 - number2__237)}, false)}
{
var binaryT__238;
false;
binaryT__238 = Mmake_function__9("binaryT", function binaryT__239 (number1__240, number2__241)
{return (number1__240 * number2__241)}, false)}
{
var binaryS__242;
false;
binaryS__242 = Mmake_function__9("binaryS", function binaryS__243 (number1__244, number2__245)
{return (number1__244 / number2__245)}, false)}
{
var type__246;
false;
type__246 = Mmake_function__9("type", function type__247 (object__248)
{if ($T(object__248))
{return object__248.constructor}
else
return LbooleanG__5}, false);
exports.type = type__246}
{
var instanceQ__250;
false;
instanceQ__250 = Mmake_function__9("instanceQ", function instanceQ__251 (object__252, type__253)
{if ($T(object__252))
{
var ctor__254 = object__252.constructor,
B255 = binaryEE__29(ctor__254, type__253);
if ($T(B255))
{return B255}
else
return (object__252 instanceof type__253)}
else
return binaryEE__29(type__253, LbooleanG__5)}, false);
exports["instance?"] = instanceQ__250}
$HP = Object.hasOwnProperty
{
var hasQ__256;
false;
hasQ__256 = Mmake_function__9("hasQ", function hasQ__257 (object__258, property__259)
{return $HP.call(object__258,property__259)}, false);
exports["has?"] = hasQ__256}
{
var Mmake_generic__260,
Mmake_method__261;
false;
Mmake_method__261 = Mmake_function__9("Mmake_method", function Mmake_method__262 (name__263, function__264, setterQ__265, type__266, existing__267)
{
var prototype__268 = type__266.prototype,
existing_method__269;
if ($T(hasQ__256(prototype__268, name__263)))
{existing_method__269 = prototype__268[name__263]}
else
existing_method__269 = false;
var genericQ__270;
if ($T(existing__267))
{if ($T(hasQ__256(existing__267, "%generic?")))
{genericQ__270 = existing__267["%generic?"]}
else
genericQ__270 = false}
else
genericQ__270 = false;
function__264["%name"] = name__263;
function__264["%setter?"] = setterQ__265;
function__264["%type"] = type__266;
prototype__268[name__263] = function__264;
if ($T(genericQ__270))
{return existing__267}
else
return Mmake_generic__260(name__263)}, false);
exports["%make-method"] = Mmake_method__261}
{
false;
Mmake_generic__260 = Mmake_function__9("Mmake_generic", function Mmake_generic__272 (name__273)
{
var dispatcher__277 = function B274 (object__275)
{
var function__276 = ((object__275 !== null) && (object__275 !== undefined) && object__275[name__273]);
return (function__276 && function__276.apply(object__275, arguments))};
dispatcher__277["%generic?"] = true;
dispatcher__277["%name"] = name__273;
return dispatcher__277}, false);
exports["%make-generic"] = Mmake_generic__260}
{
var Mnext_method__278;
false;
Mnext_method__278 = Mmake_function__9("Mnext_method", function Mnext_method__279 (function__280)
{
var name__281 = function__280["%name"],
proto__282 = function__280["%type"].prototype.__proto__;
return proto__282[name__281]}, false);
exports["%next-method"] = Mnext_method__278}
{
var concatenate__283;
false;
concatenate__283 = Mmake_function__9("concatenate", function concatenate__284 (object__285)
{
var rest__286 = $SL.call(arguments, 1),
B287;
if ($T(instanceQ__250(object__285, LarrayG__4)))
{B287 = Mconcat__53}
else
B287 = binaryP__230;
return reduce__128(B287, object__285, rest__286)}, false);
exports.concatenate = concatenate__283}
{
var compare__289;
false;
compare__289 = Mmake_function__9("compare", function compare__290 (function__291, object__292, objects__293)
{
var failedQ__294;
while (true)
{
var B295 = failedQ__294,
B297;
if ($T(B295))
{B297 = B295}
else
B297 = emptyQ__68(objects__293);
var B298 = not__17(B297);
if ($T(B298))
{
var other__296 = first__81(objects__293);
failedQ__294 = not__17(function__291(object__292, other__296));
objects__293 = rest__71(objects__293);
object__292 = other__296}
else
break};
return not__17(failedQ__294)}, false);
exports.compare = compare__289}
{
var EE__299;
false;
EE__299 = Mmake_function__9("EE", function EE__300 (object__301)
{
var objects__302 = $SL.call(arguments, 1);
return compare__289(binaryEE__29, object__301, objects__302)}, false);
exports["=="] = EE__299}
{
var binaryE__303;
false;
binaryE__303 = Mmake_generic__260("binaryE");
exports["binary="] = binaryE__303}
{
var binaryL__304;
false;
binaryL__304 = Mmake_generic__260("binaryL");
exports["binary<"] = binaryL__304}
{
false;
binaryE__303 = Mmake_method__261("binaryE", function B306 (object1__307, object2__308)
{if ($T(binaryEE__29(type__246(object1__307), type__246(object2__308))))
{return binaryEE__29(object1__307, object2__308)}}, false, LobjectG__1, binaryE__303);
exports["binary="] = binaryE__303}
{
var anyQ__317;
false;
binaryE__303 = Mmake_method__261("binaryE", function B318 (array1__319, array2__320)
{if ($T(binaryEE__29(size__20(array1__319), size__20(array2__320))))
{
var B321 = array1__319,
B322 = array2__320,
B323,
B324,
B325 = [B321, B322];
while (true)
{
var B326 = B323,
B332;
if ($T(B326))
{B332 = B326}
else
B332 = anyQ__317(emptyQ__68, B325);
var B333 = not__17(B332);
if ($T(B333))
{
var item1__327 = first__81(B321),
item2__328 = first__81(B322);
if ($T(not__17(binaryE__303(item1__327, item2__328))))
{
B324 = true;
B323 = true}
else
{
(function B329 (item1__330, item2__331)
{return false})(item1__327, item2__328);
B321 = rest__71(B321);
B322 = rest__71(B322);
B325 = [B321, B322]}}
else
break};
return not__17(B324)}}, false, LarrayG__4, binaryE__303);
exports["binary="] = binaryE__303}
{
var binaryE_dispatcher__334;
false;
binaryE_dispatcher__334 = binaryE__303}
{
false;
binaryE__303 = Mmake_function__9("binaryE", function binaryE__336 (object1__337, object2__338)
{
var B339;
if ($T(not__17(object1__337)))
{B339 = not__17(object2__338)}
else
B339 = false;
if ($T(B339))
{return B339}
else
return binaryE_dispatcher__334(object1__337, object2__338)}, false);
exports["binary="] = binaryE__303}
{
var E__340;
false;
E__340 = Mmake_function__9("E", function E__341 (object__342)
{
var objects__343 = $SL.call(arguments, 1);
return compare__289(binaryE__303, object__342, objects__343)}, false);
exports["="] = E__340}
{
false;
binaryL__304 = Mmake_method__261("binaryL", function B345 (object1__346, object2__347)
{if ($T(binaryEE__29(type__246(object1__346), type__246(object2__347))))
{return (object1__346 < object2__347)}}, false, LobjectG__1, binaryL__304);
exports["binary<"] = binaryL__304}
{
false;
L__155 = Mmake_function__9("L", function L__348 (object__349)
{
var objects__350 = $SL.call(arguments, 1);
return compare__289(binaryL__304, object__349, objects__350)}, false);
exports["<"] = L__155}
{
var binaryLE__352;
false;
binaryLE__352 = Mmake_function__9("binaryLE", function binaryLE__353 (object1__354, object2__355)
{if ($T(object1__354))
{if ($T(object2__355))
{
var B356 = binaryL__304(object1__354, object2__355);
if ($T(B356))
{return B356}
else
return binaryE__303(object1__354, object2__355)}}}, false);
exports["binary<="] = binaryLE__352}
{
var LE__357;
false;
LE__357 = Mmake_function__9("LE", function LE__358 (object__359)
{
var objects__360 = $SL.call(arguments, 1);
return compare__289(binaryLE__352, object__359, objects__360)}, false);
exports["<="] = LE__357}
{
var binaryG__361;
false;
binaryG__361 = Mmake_function__9("binaryG", function binaryG__362 (object1__363, object2__364)
{if ($T(object1__363))
{if ($T(object2__364))
{if ($T(not__17(binaryL__304(object1__363, object2__364))))
{return not__17(binaryE__303(object1__363, object2__364))}}}}, false);
exports["binary>"] = binaryG__361}
{
var G__365;
false;
G__365 = Mmake_function__9("G", function G__366 (object__367)
{
var objects__368 = $SL.call(arguments, 1);
return compare__289(binaryG__361, object__367, objects__368)}, false);
exports[">"] = G__365}
{
var binaryGE__370;
false;
binaryGE__370 = Mmake_function__9("binaryGE", function binaryGE__371 (object1__372, object2__373)
{
var B374 = not__17(binaryL__304(object1__372, object2__373));
if ($T(B374))
{return B374}
else
return binaryE__303(object1__372, object2__373)}, false);
exports["binary>="] = binaryGE__370}
{
false;
GE__135 = Mmake_function__9("GE", function GE__375 (object__376)
{
var objects__377 = $SL.call(arguments, 1);
return compare__289(binaryGE__370, object__376, objects__377)}, false);
exports[">="] = GE__135}
{
var as_object__378;
false;
as_object__378 = Mmake_function__9("as_object", function as_object__379 (property_list__380)
{
var list__381 = slice__123(property_list__380),
result__382 = {};
while ($T(G__365(size__20(list__381), 0)))
{
var key__383 = pop__113(list__381),
value__384 = pop__113(list__381),
B385;
if ($T(instanceQ__250(key__383, LkeywordG__45)))
{B385 = key__383.name}
else
B385 = as_string__57(key__383);
key__383 = B385;
result__382[key__383] = value__384};
return result__382}, false);
exports["as-object"] = as_object__378}
{
var position__386;
false;
position__386 = Mmake_function__9("position", function position__387 (array__388, element__389)
{
var position__390 = array__388.indexOf(element__389);
if ($T(G__365(position__390, -1)))
{return position__390}}, false);
exports.position = position__386}
{
var last_position__391;
false;
last_position__391 = Mmake_function__9("last_position", function last_position__392 (array__393, element__394)
{
var position__395 = array__393.lastIndexOf(element__394);
if ($T(G__365(position__395, -1)))
{return position__395}}, false);
exports["last-position"] = last_position__391}
{
var as_uppercase__396;
false;
as_uppercase__396 = Mmake_function__9("as_uppercase", function as_uppercase__397 (string__398)
{return string__398.toUpperCase()}, false);
exports["as-uppercase"] = as_uppercase__396}
{
var as_lowercase__399;
false;
as_lowercase__399 = Mmake_function__9("as_lowercase", function as_lowercase__400 (string__401)
{return string__401.toLowerCase()}, false);
exports["as-lowercase"] = as_lowercase__399}
{
var join__402;
false;
join__402 = Mmake_function__9("join", function join__403 (array__404, string__405)
{return array__404.join(string__405)}, false);
exports.join = join__402}
{
var trim__406;
false;
trim__406 = Mmake_function__9("trim", function trim__407 (string__408)
{return string__408.trim()}, false);
exports.trim = trim__406}
{
var replace__409;
false;
replace__409 = Mmake_function__9("replace", function replace__410 (string__411, pattern__412, replacement__413)
{return string__411.replace(pattern__412, replacement__413)}, false);
exports.replace = replace__409}
{
var make_object__414;
false;
make_object__414 = Mmake_function__9("make_object", function make_object__415 ()
{
var key_values__416 = $SL.call(arguments, 0);
return as_object__378(key_values__416)}, false);
exports["make-object"] = make_object__414}
{
var LsymbolG__417;
false;
LsymbolG__417 = Mmake_class__38(LobjectG__1, {name:false,
module:false});
exports["<symbol>"] = LsymbolG__417}
{
var Msymbols__418;
false;
Msymbols__418 = {}}
{
var get_setter__421,
make__422,
get__423,
symbol__424;
false;
symbol__424 = Mmake_function__9("symbol", function symbol__425 (name__426, module__427)
{
var name__428 = as_lowercase__399(name__426),
B429 = module__427,
B432;
if ($T(B429))
{B432 = B429}
else
B432 = "";
var moduleT__430 = as_lowercase__399(B432),
B431 = get__423(Msymbols__418, moduleT__430, name__428);
if ($T(B431))
{return B431}
else
return get_setter__421(Msymbols__418, moduleT__430, name__428, make__422(LsymbolG__417, $K("name"), name__428, $K("module"), module__427))}, false);
exports.symbol = symbol__424}
$S = symbol__424
{
var symbol_name__433;
false;
symbol_name__433 = Mmake_function__9("symbol_name", function symbol_name__434 (symbol__435)
{return get__423(symbol__435, "name")}, false);
exports["symbol-name"] = symbol_name__433}
{
false;
Mkeys__154 = Mmake_function__9("Mkeys", function Mkeys__437 (key_values__438, defaults__439)
{
var i__440 = 0;
while ($T(not__17((i__440 >= size__20(key_values__438)))))
{
(function B441 (i__442)
{
var key__443 = key_values__438[i__442],
value__444 = key_values__438[inc__23(i__442, 1)];
if ($T(instanceQ__250(key__443, LkeywordG__45)))
{return defaults__439[key__443.name] = value__444}})(i__440);
i__440 = inc__23(i__440, 2)};
false;
return defaults__439}, false);
exports["%keys"] = Mkeys__154}
{
var element__449,
choose__450,
object_properties__451,
find_key__452;
false;
find_key__452 = Mmake_function__9("find_key", function find_key__453 (array__454, predicate__455)
{
var B456 = $SL.call(arguments, 2),
B457 = Mkeys__154(B456, {skip:0,
failure:false,
"from-end?":false}),
skip__458 = B457.skip,
failure__459 = B457.failure,
from_endQ__460 = B457["from-end?"],
keys__461 = object_properties__451(array__454),
B466 = function B462 (index__463)
{return predicate__455(element__449(array__454, index__463))},
B467;
if ($T(from_endQ__460))
{B467 = reverse__148(keys__461)}
else
B467 = keys__461;
var satisfying_keys__464 = choose__450(B466, B467),
B465 = element__449(satisfying_keys__464, skip__458);
if ($T(B465))
{return B465}
else
return failure__459}, false);
exports["find-key"] = find_key__452}
{
var parse_integer__470;
false;
parse_integer__470 = Mmake_function__9("parse_integer", function parse_integer__471 (value__472)
{
var B473 = $SL.call(arguments, 1),
B474 = Mkeys__154(B473, {radix:10}),
radix__475 = B474.radix;
return parseInt(value__472, radix__475)}, false);
exports["parse-integer"] = parse_integer__470}
{
false;
element__449 = Mmake_function__9("element", function element__479 (array__480, index__481)
{
var B482 = $SL.call(arguments, 2),
B483 = Mkeys__154(B482, {"default":false}),
default__484 = B483["default"],
B485 = array__480[index__481];
if ($T(B485))
{return B485}
else
return default__484}, false);
exports.element = element__449}
{
var element_setter__486;
false;
element_setter__486 = Mmake_function__9("element_setter", function element_setter__487 (array__488, key__489, value__490)
{return array__488[key__489] = value__490}, true);
exports["element-setter"] = element_setter__486}
{
var replace_subsequence__493;
false;
replace_subsequence__493 = Mmake_function__9("replace_subsequence", function replace_subsequence__494 (target_array__495, insert_array__496)
{
var B497 = $SL.call(arguments, 2),
B498 = Mkeys__154(B497, {start:0,
end:size__20(target_array__495)}),
start__499 = B498.start,
end__500 = B498.end;
return concatenate__283(slice__123(target_array__495, 0, start__499), insert_array__496, slice__123(target_array__495, end__500))}, false);
exports["replace-subsequence"] = replace_subsequence__493}
{
var replace_subsequenceN__503;
false;
replace_subsequenceN__503 = Mmake_function__9("replace_subsequenceN", function replace_subsequenceN__504 (target_array__505, insert_array__506)
{
var B507 = $SL.call(arguments, 2),
B508 = Mkeys__154(B507, {start:0,
end:size__20(target_array__505)}),
start__509 = B508.start,
end__510 = B508.end,
rest__511 = Mconcat__53([start__509, (end__510 - start__509)], insert_array__506);
[].splice.apply(target_array__505, rest__511);
return target_array__505}, false);
exports["replace-subsequence!"] = replace_subsequenceN__503}
{
var removeN__515;
false;
removeN__515 = Mmake_function__9("removeN", function removeN__516 (array__517, value__518)
{
var B519 = $SL.call(arguments, 2),
B520 = Mkeys__154(B519, {test:EE__299}),
test__521 = B520.test,
B522 = find_key__452(array__517, curry__183(test__521, value__518));
if ($T(B522))
{
var key__523 = B522;
array__517.splice(key__523, 1)};
return array__517}, false);
exports["remove!"] = removeN__515}
{
var remove__526;
false;
remove__526 = Mmake_function__9("remove", function remove__527 (array__528, value__529)
{
var B530 = $SL.call(arguments, 2),
B531 = Mkeys__154(B530, {test:EE__299}),
test__532 = B531.test;
return removeN__515(slice__123(array__528), value__529, $K("test"), test__532)}, false);
exports.remove = remove__526}
{
var interpose__534;
false;
interpose__534 = Mmake_function__9("interpose", function interpose__535 (separator__536, array__537)
{return reduce1__129(function B538 (a__539, b__540)
{return concatenate__283([a__539, separator__536], b__540)}, array__537)}, false);
exports.interpose = interpose__534}
{
false;
anyQ__317 = Mmake_function__9("anyQ", function anyQ__543 (function__544, values__545)
{
var value__546,
n__547 = size__20(values__545),
i__548 = 0;
while (true)
{
var B549 = value__546,
B552;
if ($T(B549))
{B552 = B549}
else
B552 = GE__135(i__548, n__547);
var B553 = not__17(B552);
if ($T(B553))
{
(function B550 (i__551)
{return value__546 = function__544(values__545[i__551])})(i__548);
i__548 = inc__23(i__548)}
else
break};
return value__546}, false);
exports["any?"] = anyQ__317}
{
var memberQ__557;
false;
memberQ__557 = Mmake_function__9("memberQ", function memberQ__558 (value__559, array__560)
{
var B561 = $SL.call(arguments, 2),
B562 = Mkeys__154(B561, {test:EE__299}),
test__563 = B562.test;
return anyQ__317(function B564 (other_value__565)
{return test__563(value__559, other_value__565)}, array__560)}, false);
exports["member?"] = memberQ__557}
{
var everyQ__567;
false;
everyQ__567 = Mmake_function__9("everyQ", function everyQ__568 (function__569, array__570)
{return not__17(anyQ__317(function B571 (value__572)
{return not__17(function__569(value__572))}, array__570))}, false);
exports["every?"] = everyQ__567}
{
var map__579;
false;
map__579 = Mmake_function__9("map", function map__580 (function__581)
{
var arrays__582 = $SL.call(arguments, 1),
result__583 = [];
if ($T(emptyQ__68(rest__71(arrays__582))))
{
var B584 = first__81(arrays__582),
B585,
B586,
B587 = [B584];
while (true)
{
var B588 = B585,
B592;
if ($T(B588))
{B592 = B588}
else
B592 = anyQ__317(emptyQ__68, B587);
var B593 = not__17(B592);
if ($T(B593))
{
var item__589 = first__81(B584);
(function B590 (item__591)
{return push_last__109(result__583, function__581(item__591))})(item__589);
B584 = rest__71(B584);
B587 = [B584]}
else
break};
B586}
else
while ($T(not__17(anyQ__317(emptyQ__68, arrays__582))))
{
push_last__109(result__583, apply__176(function__581, map__580(first__81, arrays__582)));
arrays__582 = map__580(rest__71, arrays__582)};
return result__583}, false);
exports.map = map__579}
{
var do__600;
false;
do__600 = Mmake_function__9("Rdo", function do__601 (function__602)
{
var arrays__603 = $SL.call(arguments, 1);
if ($T(emptyQ__68(rest__71(arrays__603))))
{
var B604 = first__81(arrays__603),
B605,
B606,
B607 = [B604];
while (true)
{
var B608 = B605,
B612;
if ($T(B608))
{B612 = B608}
else
B612 = anyQ__317(emptyQ__68, B607);
var B613 = not__17(B612);
if ($T(B613))
{
var item__609 = first__81(B604);
(function B610 (item__611)
{return function__602(item__611)})(item__609);
B604 = rest__71(B604);
B607 = [B604]}
else
break};
B606}
else
while ($T(not__17(anyQ__317(emptyQ__68, arrays__603))))
{
apply__176(function__602, map__579(first__81, arrays__603));
arrays__603 = map__579(rest__71, arrays__603)};
return false}, false);
exports["do"] = do__600}
{
false;
choose__450 = Mmake_function__9("choose", function choose__620 (function__621, array__622)
{
var result__623 = [],
B624 = array__622,
B625,
B626,
B627 = [B624];
while (true)
{
var B628 = B625,
B632;
if ($T(B628))
{B632 = B628}
else
B632 = anyQ__317(emptyQ__68, B627);
var B633 = not__17(B632);
if ($T(B633))
{
var element__629 = first__81(B624);
(function B630 (element__631)
{if ($T(function__621(element__631)))
{return push_last__109(result__623, element__631)}})(element__629);
B624 = rest__71(B624);
B627 = [B624]}
else
break};
B626;
return result__623}, false);
exports.choose = choose__450}
{
var copy_sequence__637;
false;
copy_sequence__637 = Mmake_function__9("copy_sequence", function copy_sequence__638 (array__639)
{
var B640 = $SL.call(arguments, 1),
B641 = Mkeys__154(B640, {start:0,
end:false}),
start__642 = B641.start,
end__643 = B641.end,
B644 = end__643,
end__645;
if ($T(B644))
{end__645 = B644}
else
end__645 = undefined;
return slice__123(array__639, start__642, end__645)}, false);
exports["copy-sequence"] = copy_sequence__637}
{
var initialize__646;
false;
make__422 = Mmake_function__9("make", function make__647 (type__648)
{
var arguments__649 = $SL.call(arguments, 1),
object__650 = new(type__648);
apply__176(initialize__646, object__650, arguments__649);
return object__650}, false);
exports.make = make__422}
{
false;
object_properties__451 = Mmake_function__9("object_properties", function object_properties__655 (object__656)
{
var B657 = $SL.call(arguments, 1),
B658 = Mkeys__154(B657, {"inherited?":false}),
inheritedQ__659 = B658["inherited?"],
result__660 = [];
if ($T(instanceQ__250(object__656, LarrayG__4)))
{
var B661 = size__20(object__656),
i__662 = 0;
while ($T(not__17(GE__135(i__662, B661))))
{
(function B663 (i__664)
{return push_last__109(result__660, i__664)})(i__662);
i__662 = (i__662 + 1)};
false}
else
{
var i__665;
for (i__665 in object__656) (inheritedQ__659||$HP.call(object__656, i__665)) &&result__660.push(i__665)};
return result__660}, false);
exports["object-properties"] = object_properties__451}
{
var object_values__666;
false;
object_values__666 = Mmake_function__9("object_values", function object_values__667 (object__668)
{return map__579(curry__183(get__423, object__668), object_properties__451(object__668))}, false);
exports["object-values"] = object_values__666}
{
false;
initialize__646 = Mmake_generic__260("initialize");
exports.initialize = initialize__646}
{
false;
initialize__646 = Mmake_method__261("initialize", function B674 (object__675)
{
var rest__676 = $SL.call(arguments, 1),
arguments__677 = as_object__378(rest__676),
B678 = type__246(object__675)["%properties"];
if ($T(B678))
{
var properties__679 = B678;
do__600(function B680 (key__681)
{
var B682 = hasQ__256(LobjectG__1.prototype, key__681),
B686;
if ($T(B682))
{B686 = B682}
else
B686 = hasQ__256(object__675, key__681);
var B687 = not__17(B686);
if ($T(B687))
{
var B683 = arguments__677[key__681],
value__685;
if ($T(B683))
{value__685 = B683}
else
{
var value__684 = properties__679[key__681];
if ($T(value__684))
{value__685 = value__684()}
else
value__685 = false};
return object__675[key__681] = value__685}}, object_properties__451(properties__679, $K("inherited?"), true))};
return object__675}, false, LobjectG__1, initialize__646);
exports.initialize = initialize__646}
{
var Lhash_symbolG__688;
false;
Lhash_symbolG__688 = Mmake_class__38(LobjectG__1, {name:false});
exports["<hash-symbol>"] = Lhash_symbolG__688}
{
var key__689 = make__422(Lhash_symbolG__688, $K("name"), "key");
$KEY = key__689}
{
var rest__690 = make__422(Lhash_symbolG__688, $K("name"), "rest");
$REST = rest__690}
{
false;
get__423 = Mmake_function__9("get", function get__697 (object__698)
{
var properties__699 = $SL.call(arguments, 1),
result__700,
B701 = properties__699,
B702,
B703,
B704 = [B701];
while (true)
{
var B705 = B702,
B709;
if ($T(B705))
{B709 = B705}
else
B709 = anyQ__317(emptyQ__68, B704);
var B710 = not__17(B709);
if ($T(B710))
{
var property__706 = first__81(B701);
if ($T(not__17(hasQ__256(object__698, property__706))))
{
B703 = result__700 = false;
B702 = true}
else
{
(function B707 (property__708)
{
result__700 = object__698[property__708];
return object__698 = result__700})(property__706);
B701 = rest__71(B701);
B704 = [B701]}}
else
break};
B703;
return result__700}, false);
exports.get = get__423}
{
false;
get_setter__421 = Mmake_function__9("get_setter", function get_setter__711 (object__712)
{
var propertiesSvalue__713 = $SL.call(arguments, 1);
if ($T(LE__357(size__20(propertiesSvalue__713), 2)))
{return object__712[first__81(propertiesSvalue__713)] = second__88(propertiesSvalue__713)}
else
{
var property__714 = first__81(propertiesSvalue__713),
object2__715;
if ($T(hasQ__256(object__712, property__714)))
{object2__715 = object__712[property__714]}
else
object2__715 = object__712[property__714] = make_object__414();
return apply__176(get_setter__711, object2__715, rest__71(propertiesSvalue__713))}}, true);
exports["get-setter"] = get_setter__421}
{
var split_with__717;
false;
split_with__717 = Mmake_function__9("split_with", function split_with__718 (function__719, array__720)
{
var a__721 = [],
b__722 = [];
do__600(function B723 (item__724)
{
var B725;
if ($T(function__719(item__724)))
{B725 = a__721}
else
B725 = b__722;
return push_last__109(B725, item__724)}, array__720);
return [a__721, b__722]}, false);
exports["split-with"] = split_with__717}
{
var as_hex_string__726;
false;
as_hex_string__726 = Mmake_function__9("as_hex_string", function as_hex_string__727 (number__728)
{return number__728.toString(16)}, false);
exports["as-hex-string"] = as_hex_string__726}
{
var description__729;
false;
description__729 = Mmake_generic__260("description");
exports.description = description__729}
{
false;
description__729 = Mmake_method__261("description", function B731 (number__732)
{return ("" + number__732)}, false, LnumberG__3, description__729);
exports.description = description__729}
{
false;
description__729 = Mmake_method__261("description", function B734 (string__735)
{
var escaped__736 = string__735.replace("\"", "\\\"", "g");
return ("\"" + escaped__736 + "\"")}, false, LstringG__2, description__729);
exports.description = description__729}
{
false;
description__729 = Mmake_method__261("description", function B738 (array__739)
{return ("(" + join__402(map__579(description__729, array__739), " ") + ")")}, false, LarrayG__4, description__729);
exports.description = description__729}
{
false;
description__729 = Mmake_method__261("description", function B741 (value__742)
{if ($T(value__742))
{return "#t"}
else
return "#f"}, false, LbooleanG__5, description__729);
exports.description = description__729}
{
false;
description__729 = Mmake_method__261("description", function B745 (symbol__746)
{
var B747 = get__423(symbol__746, "module"),
B749;
if ($T(B747))
{
var module__748 = B747;
B749 = concatenate__283(module__748, "::")}
else
B749 = "";
var B750 = symbol_name__433(symbol__746);
return (B749 + B750)}, false, LsymbolG__417, description__729);
exports.description = description__729}
{
false;
description__729 = Mmake_method__261("description", function B752 (keyword__753)
{return (symbol_name__433(keyword__753) + ":")}, false, LkeywordG__45, description__729);
exports.description = description__729}
{
false;
description__729 = Mmake_method__261("description", function B755 (symbol__756)
{return ("#" + symbol_name__433(symbol__756))}, false, Lhash_symbolG__688, description__729);
exports.description = description__729}
{
var min__757;
false;
min__757 = Math.min;
exports.min = min__757}
{
var max__758;
false;
max__758 = Math.max;
exports.max = max__758}
{
var abs__759;
false;
abs__759 = Math.abs;
exports.abs = abs__759}
{
var round__760;
false;
round__760 = Math.round;
exports.round = round__760}
{
var floor__761;
false;
floor__761 = Math.floor;
exports.floor = floor__761}
{
var ceil__762;
false;
ceil__762 = Math.ceil;
exports.ceil = ceil__762}
{
var sin__763;
false;
sin__763 = Math.sin;
exports.sin = sin__763}
{
var cos__764;
false;
cos__764 = Math.cos;
exports.cos = cos__764}
{
var atan2__765;
false;
atan2__765 = Math.atan2;
exports.atan2 = atan2__765}
{
var expt__766;
false;
expt__766 = Math.pow;
exports.expt = expt__766}
{
var sqrt__767;
false;
sqrt__767 = Math.sqrt;
exports.sqrt = sqrt__767}
{
var mod__768;
false;
mod__768 = Mmake_function__9("mod", function mod__769 (number1__770, number2__771)
{return (number1__770 % number2__771)}, false);
exports.mod = mod__768}
{
var TpiT__772;
false;
TpiT__772 = Math.PI;
exports["*pi*"] = TpiT__772}
{
var TradiantT__773;
false;
TradiantT__773 = (TpiT__772 / 180)}
{
var as_radiant__774;
false;
as_radiant__774 = Mmake_function__9("as_radiant", function as_radiant__775 (number__776)
{return (number__776 * TradiantT__773)}, false);
exports["as-radiant"] = as_radiant__774}
{
var signal__777;
false;
signal__777 = Mmake_function__9("signal", function signal__778 (error__779)
{
throw(error__779);
return false}, false);
exports.signal = signal__777}
{
var extendN__786;
false;
extendN__786 = Mmake_function__9("extendN", function extendN__787 (object1__788, object2__789)
{
var B790 = object_properties__451(object2__789),
B791,
B792,
B793 = [B790];
while (true)
{
var B794 = B791,
B798;
if ($T(B794))
{B798 = B794}
else
B798 = anyQ__317(emptyQ__68, B793);
var B799 = not__17(B798);
if ($T(B799))
{
var key__795 = first__81(B790);
(function B796 (key__797)
{return get_setter__421(object1__788, key__797, get__423(object2__789, key__797))})(key__795);
B790 = rest__71(B790);
B793 = [B790]}
else
break};
B792;
return object1__788}, false);
exports["extend!"] = extendN__786}
{
var as_property_list__808;
false;
as_property_list__808 = Mmake_function__9("as_property_list", function as_property_list__809 (object__810)
{
var B811 = $SL.call(arguments, 1),
B812 = Mkeys__154(B811, {"keywords?":false}),
keywordsQ__813 = B812["keywords?"],
result__814 = [],
B815 = object_properties__451(object__810),
B816,
B817,
B818 = [B815];
while (true)
{
var B819 = B816,
B824;
if ($T(B819))
{B824 = B819}
else
B824 = anyQ__317(emptyQ__68, B818);
var B825 = not__17(B824);
if ($T(B825))
{
var key__820 = first__81(B815);
(function B821 (key__822)
{
var B823;
if ($T(keywordsQ__813))
{B823 = keyword__47(as_string__57(key__822))}
else
B823 = key__822;
push_last__109(result__814, B823);
return push_last__109(result__814, get__423(object__810, key__822))})(key__820);
B815 = rest__71(B815);
B818 = [B815]}
else
break};
B817;
return result__814}, false);
exports["as-property-list"] = as_property_list__808}
{
var as_association_list__834;
false;
as_association_list__834 = Mmake_function__9("as_association_list", function as_association_list__835 (object__836)
{
var B837 = $SL.call(arguments, 1),
B838 = Mkeys__154(B837, {"keywords?":false}),
keywordsQ__839 = B838["keywords?"],
result__840 = [],
B841 = object_properties__451(object__836),
B842,
B843,
B844 = [B841];
while (true)
{
var B845 = B842,
B852;
if ($T(B845))
{B852 = B845}
else
B852 = anyQ__317(emptyQ__68, B844);
var B853 = not__17(B852);
if ($T(B853))
{
var key__846 = first__81(B841);
(function B847 (key__848)
{
var B849;
if ($T(keywordsQ__839))
{B849 = keyword__47(as_string__57(key__848))}
else
B849 = key__848;
var B850 = get__423(object__836, key__848),
B851 = [B849, B850];
return push_last__109(result__840, B851)})(key__846);
B841 = rest__71(B841);
B844 = [B841]}
else
break};
B843;
return result__840}, false);
exports["as-association-list"] = as_association_list__834}
{
var starts_withQ__854;
false;
starts_withQ__854 = Mmake_function__9("starts_withQ", function starts_withQ__855 (string__856, prefix__857)
{return binaryEE__29(string__856.indexOf(prefix__857), 0)}, false);
exports["starts-with?"] = starts_withQ__854}
{
var evenQ__858;
false;
evenQ__858 = Mmake_function__9("evenQ", function evenQ__859 (number__860)
{return binaryEE__29((number__860 % 2), 0)}, false);
exports["even?"] = evenQ__858}
{
var oddQ__861;
false;
oddQ__861 = Mmake_function__9("oddQ", function oddQ__862 (number__863)
{return binaryEE__29((number__863 % 2), 1)}, false);
exports["odd?"] = oddQ__861}
{
var group_by__865;
false;
group_by__865 = Mmake_function__9("group_by", function group_by__866 (predicate__867, items__868)
{return reduce__128(function B869 (result__870, item__871)
{
var key__872 = predicate__867(item__871);
if ($T(hasQ__256(result__870, key__872)))
{push_last__109(get__423(result__870, key__872), item__871)}
else
get_setter__421(result__870, key__872, [item__871]);
return result__870}, make_object__414(), items__868)}, false);
exports["group-by"] = group_by__865}
{
var wrap_object__873;
false;
wrap_object__873 = Mmake_function__9("wrap_object", function wrap_object__874 (object__875)
{
var rest__876 = $SL.call(arguments, 1),
result__877 = Object.create(object__875);
extendN__786(result__877, as_object__378(rest__876));
return result__877}, false)}
{
var unwrap_object__878;
false;
unwrap_object__878 = Mmake_function__9("unwrap_object", function unwrap_object__879 (object__880)
{return object__880.__proto__}, false)}
{
var update_with__883;
false;
update_with__883 = Mmake_function__9("update_with", function update_with__884 (fn__885, obj__886)
{
var objs__887 = $SL.call(arguments, 2);
return do__600(function B888 (obj2__889)
{return do__600(function B890 (property__891)
{
var value__892 = get__423(obj2__889, property__891),
B893;
if ($T(hasQ__256(obj__886, property__891)))
{B893 = fn__885(get__423(obj__886, property__891), value__892)}
else
B893 = value__892;
return get_setter__421(obj__886, property__891, B893)}, object_properties__451(obj2__889))}, objs__887)}, false);
exports["update-with"] = update_with__883}
{
var set_unionN__894,
as_set__895;
false;
as_set__895 = Mmake_function__9("as_set", function as_set__896 (values__897)
{
var set__898 = [];
return set_unionN__894(set__898, values__897)}, false);
exports["as-set"] = as_set__895}
{
var set_addN__899;
false;
set_addN__899 = Mmake_function__9("set_addN", function set_addN__900 (set__901, object__902)
{if ($T(not__17(memberQ__557(object__902, set__901))))
{return push_last__109(set__901, object__902)}}, false);
exports["set-add!"] = set_addN__899}
{
var set_removeN__903;
false;
set_removeN__903 = removeN__515;
exports["set-remove!"] = set_removeN__903}
{
false;
set_unionN__894 = Mmake_function__9("set_unionN", function set_unionN__904 (set1__905, set2__906)
{
do__600(curry__183(set_addN__899, set1__905), set2__906);
return set1__905}, false);
exports["set-union!"] = set_unionN__894}
{
var set_subtractN__907;
false;
set_subtractN__907 = Mmake_function__9("set_subtractN", function set_subtractN__908 (set1__909, set2__910)
{
do__600(curry__183(set_removeN__903, set1__909), set2__910);
return set1__909}, false);
exports["set-subtract!"] = set_subtractN__907}
{
var chain_object__911;
false;
chain_object__911 = Mmake_function__9("chain_object", function chain_object__912 (object1__913, object2__914)
{
object2__914.__proto__ = object1__913.__proto__;
object1__913.__proto__ = object2__914;
return object1__913}, false);
exports["chain-object"] = chain_object__911}
{
var unchain_object__915;
false;
unchain_object__915 = Mmake_function__9("unchain_object", function unchain_object__916 (object__917)
{
var B918;
if ($T(object__917.__proto__))
{B918 = object__917.__proto__.__proto__}
else
B918 = false;
object__917.__proto__ = B918;
return object__917}, false);
exports["unchain-object"] = unchain_object__915}
{
false;
as_hex_string__726 = Mmake_function__9("as_hex_string", function as_hex_string__919 (number__920)
{return number__920.toString(16)}, false);
exports["as-hex-string"] = as_hex_string__726}
{
var make_plain_object__921;
false;
make_plain_object__921 = Mmake_function__9("make_plain_object", function make_plain_object__922 ()
{return Object.create(null)}, false);
exports["make-plain-object"] = make_plain_object__921}
{
var ___923;
false;
___923 = Mmake_function__9("_", function ___924 (minuend__925)
{
var subtrahends__926 = $SL.call(arguments, 1);
if ($T(emptyQ__68(subtrahends__926)))
{return -(minuend__925)}
else
return reduce__128(binary___234, minuend__925, subtrahends__926)}, false);
exports["-"] = ___923}
{
var P__927;
false;
P__927 = Mmake_function__9("P", function P__928 ()
{
var numbers__929 = $SL.call(arguments, 0);
if ($T(emptyQ__68(numbers__929)))
{return 0}
else
return reduce1__129(binaryP__230, numbers__929)}, false);
exports["+"] = P__927}
{
var T__930;
false;
T__930 = Mmake_function__9("T", function T__931 ()
{
var numbers__932 = $SL.call(arguments, 0);
if ($T(emptyQ__68(numbers__932)))
{return 1}
else
return reduce1__129(binaryT__238, numbers__932)}, false);
exports["*"] = T__930}
{
var S__933;
false;
S__933 = Mmake_function__9("S", function S__934 (numerator__935)
{
var denominators__936 = $SL.call(arguments, 1);
if ($T(emptyQ__68(denominators__936)))
{return (1 / numerator__935)}
else
return reduce__128(binaryS__242, numerator__935, denominators__936)}, false);
exports["/"] = S__933}
