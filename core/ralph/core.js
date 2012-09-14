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
var cons__57;
false;
cons__57 = Mmake_function__9("cons", function cons__58 (value__59, rest__60)
{return Mconcat__53([value__59], rest__60)}, false);
exports.cons = cons__57}
{
var as_string__61;
false;
as_string__61 = String;
exports["as-string"] = as_string__61}
{
var as_number__62;
false;
as_number__62 = Number;
exports["as-number"] = as_number__62}
{
var as_array__63;
false;
as_array__63 = Mmake_function__9("as_array", function as_array__64 (arguments__65, skip__66)
{return $SL.call(arguments__65, (skip__66 || 0))}, false);
exports["as-array"] = as_array__63}
{
var parse_number__67;
false;
parse_number__67 = parseFloat;
exports["parse-number"] = parse_number__67}
{
var char_code__68;
false;
char_code__68 = Mmake_function__9("char_code", function char_code__69 (char__70)
{return char__70.charCodeAt(0)}, false);
exports["char-code"] = char_code__68}
{
var code_char__71;
false;
code_char__71 = String.fromCharCode;
exports["code-char"] = code_char__71}
{
var emptyQ__72;
false;
emptyQ__72 = Mmake_function__9("emptyQ", function emptyQ__73 (sequence__74)
{return binaryEE__29(size__20(sequence__74), 0)}, false);
exports["empty?"] = emptyQ__72}
{
var rest__75;
false;
rest__75 = Mmake_function__9("rest", function rest__76 (sequence__77)
{return sequence__77.slice(1)}, false);
exports.rest = rest__75}
{
var last__78;
false;
last__78 = Mmake_function__9("last", function last__79 (array__80)
{return array__80[dec__26(size__20(array__80), 1)]}, false);
exports.last = last__78}
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
{return reduce__132(function__135, first__85(values__136), rest__75(values__136))}, false);
exports.reduce1 = reduce1__133}
{
var GE__139;
false;
reduce__132 = Mmake_function__9("reduce", function reduce__140 (function__141, initial_value__142, values__143)
{
var value__144 = initial_value__142,
B137__145 = size__20(values__143),
i__146 = 0;
while ($T(not__17(GE__139(i__146, B137__145))))
{
(function B138__147 (i__148)
{return value__144 = function__141(value__144, values__143[i__148])})(i__146);
i__146 = (i__146 + 1)};
false;
return value__144}, false);
exports.reduce = reduce__132}
{
var reverseN__149;
false;
reverseN__149 = Mmake_function__9("reverseN", function reverseN__150 (array__151)
{return array__151.reverse()}, false);
exports["reverse!"] = reverseN__149}
{
var reverse__152;
false;
reverse__152 = Mmake_function__9("reverse", function reverse__153 (array__154)
{return reverseN__149(slice__127(array__154))}, false);
exports.reverse = reverse__152}
{
var Mkeys__158,
L__159,
identity__160,
sortN__161;
false;
sortN__161 = Mmake_function__9("sortN", function sortN__162 (array__163)
{
var B155__164 = $SL.call(arguments, 1),
B156__165 = Mkeys__158(B155__164, {test:L__159,
key:identity__160}),
test__166 = B156__165.test,
key__167 = B156__165.key;
return array__163.sort(function B157__168 (a__169, b__170)
{if ($T(test__166(key__167(a__169), key__167(b__170))))
{return -1}
else
return 1})}, false);
exports["sort!"] = sortN__161}
{
var B180 = $K("test"),
B181 = $K("key"),
sort__173;
false;
sort__173 = Mmake_function__9("sort", function sort__174 (array__175)
{
var B171__176 = $SL.call(arguments, 1),
B172__177 = Mkeys__158(B171__176, {test:L__159,
key:identity__160}),
test__178 = B172__177.test,
key__179 = B172__177.key;
return sortN__161(slice__127(array__175), B180, test__178, B181, key__179)}, false);
exports.sort = sort__173}
{
var apply__182;
false;
apply__182 = Mmake_function__9("apply", function apply__183 (function__184)
{
var actual__185 = $SL.call(arguments, 1, -1),
last__186 = arguments[(size__20(arguments) - 1)],
arguments__187;
if ($T(binaryEE__29(last__186, function__184)))
{arguments__187 = actual__185}
else
arguments__187 = Mconcat__53(actual__185, last__186);
return function__184.apply(null, arguments__187)}, false);
exports.apply = apply__182}
{
var curry__189;
false;
curry__189 = Mmake_function__9("curry", function curry__190 (function__191)
{
var curried_args__192 = $SL.call(arguments, 1);
return function B188__193 ()
{
var args__194 = $SL.call(arguments, 0);
return apply__182(function__191, Mconcat__53(curried_args__192, args__194))}}, false);
exports.curry = curry__189}
{
var rcurry__196;
false;
rcurry__196 = Mmake_function__9("rcurry", function rcurry__197 (function__198)
{
var curried_args__199 = $SL.call(arguments, 1);
return function B195__200 ()
{
var args__201 = $SL.call(arguments, 0);
return apply__182(function__198, Mconcat__53(args__201, curried_args__199))}}, false);
exports.rcurry = rcurry__196}
{
var always__203;
false;
always__203 = Mmake_function__9("always", function always__204 (value__205)
{return function B202__206 ()
{return value__205}}, false);
exports.always = always__203}
{
var repeatedly__209;
false;
repeatedly__209 = Mmake_function__9("repeatedly", function repeatedly__210 (function__211, count__212)
{
var result__213 = [],
B207__214 = count__212,
i__215 = 0;
while ($T(not__17(GE__139(i__215, B207__214))))
{
(function B208__216 (i__217)
{return push_last__113(result__213, function__211())})(i__215);
i__215 = (i__215 + 1)};
return result__213}, false);
exports.repeatedly = repeatedly__209}
{
false;
identity__160 = Mmake_function__9("identity", function identity__218 (value__219)
{return value__219}, false);
exports.identity = identity__160}
{
var complement__221;
false;
complement__221 = Mmake_function__9("complement", function complement__222 (function__223)
{return function B220__224 ()
{
var arguments__225 = $SL.call(arguments, 0);
return not__17(apply__182(function__223, arguments__225))}}, false);
exports.complement = complement__221}
{
var B236 = $K("from-end?"),
compose__228;
false;
compose__228 = Mmake_function__9("compose", function compose__229 ()
{
var functions__230 = $SL.call(arguments, 0);
if ($T(emptyQ__72(functions__230)))
{return identity__160}
else
return function B226__231 ()
{
var arguments__232 = $SL.call(arguments, 0);
return reduce__132(function B227__233 (value__234, function__235)
{return function__235(value__234)}, apply__182(last__78(functions__230), arguments__232), but_last__123(functions__230), B236, true)}}, false);
exports.compose = compose__228}
{
var binaryP__237;
false;
binaryP__237 = Mmake_function__9("binaryP", function binaryP__238 (number1__239, number2__240)
{return (number1__239 + number2__240)}, false)}
{
var binary___241;
false;
binary___241 = Mmake_function__9("binary_", function binary___242 (number1__243, number2__244)
{return (number1__243 - number2__244)}, false)}
{
var binaryT__245;
false;
binaryT__245 = Mmake_function__9("binaryT", function binaryT__246 (number1__247, number2__248)
{return (number1__247 * number2__248)}, false)}
{
var binaryS__249;
false;
binaryS__249 = Mmake_function__9("binaryS", function binaryS__250 (number1__251, number2__252)
{return (number1__251 / number2__252)}, false)}
{
var type__253;
false;
type__253 = Mmake_function__9("type", function type__254 (object__255)
{if ($T(object__255))
{return object__255.constructor}
else
return LbooleanG__5}, false);
exports.type = type__253}
{
var instanceQ__257;
false;
instanceQ__257 = Mmake_function__9("instanceQ", function instanceQ__258 (object__259, type__260)
{if ($T(object__259))
{
var ctor__261 = object__259.constructor,
B256__262 = binaryEE__29(ctor__261, type__260);
if ($T(B256__262))
{return B256__262}
else
return (object__259 instanceof type__260)}
else
return binaryEE__29(type__260, LbooleanG__5)}, false);
exports["instance?"] = instanceQ__257}
$HP = Object.hasOwnProperty
{
var hasQ__263;
false;
hasQ__263 = Mmake_function__9("hasQ", function hasQ__264 (object__265, property__266)
{return $HP.call(object__265,property__266)}, false);
exports["has?"] = hasQ__263}
{
var Mmake_generic__267,
Mmake_method__268;
false;
Mmake_method__268 = Mmake_function__9("Mmake_method", function Mmake_method__269 (name__270, function__271, setterQ__272, type__273, existing__274)
{
var prototype__275 = type__273.prototype,
existing_method__276;
if ($T(hasQ__263(prototype__275, name__270)))
{existing_method__276 = prototype__275[name__270]}
else
existing_method__276 = false;
var genericQ__277;
if ($T(existing__274))
{if ($T(hasQ__263(existing__274, "%generic?")))
{genericQ__277 = existing__274["%generic?"]}
else
genericQ__277 = false}
else
genericQ__277 = false;
function__271["%name"] = name__270;
function__271["%setter?"] = setterQ__272;
function__271["%type"] = type__273;
prototype__275[name__270] = function__271;
if ($T(genericQ__277))
{return existing__274}
else
return Mmake_generic__267(name__270)}, false);
exports["%make-method"] = Mmake_method__268}
{
false;
Mmake_generic__267 = Mmake_function__9("Mmake_generic", function Mmake_generic__279 (name__280)
{
var dispatcher__284 = function B278__281 (object__282)
{
var function__283 = ((object__282 !== null) && (object__282 !== undefined) && object__282[name__280]);
return (function__283 && function__283.apply(object__282, arguments))};
dispatcher__284["%generic?"] = true;
dispatcher__284["%name"] = name__280;
return dispatcher__284}, false);
exports["%make-generic"] = Mmake_generic__267}
{
var Mnext_method__285;
false;
Mnext_method__285 = Mmake_function__9("Mnext_method", function Mnext_method__286 (function__287)
{
var name__288 = function__287["%name"],
proto__289 = function__287["%type"].prototype.__proto__;
return proto__289[name__288]}, false);
exports["%next-method"] = Mnext_method__285}
{
var concatenate__290;
false;
concatenate__290 = Mmake_function__9("concatenate", function concatenate__291 (object__292)
{
var rest__293 = $SL.call(arguments, 1),
B294;
if ($T(instanceQ__257(object__292, LarrayG__4)))
{B294 = Mconcat__53}
else
B294 = binaryP__237;
return reduce__132(B294, object__292, rest__293)}, false);
exports.concatenate = concatenate__290}
{
var compare__296;
false;
compare__296 = Mmake_function__9("compare", function compare__297 (function__298, object__299, objects__300)
{
var failedQ__301;
while (true)
{
var B295__302 = failedQ__301,
B304;
if ($T(B295__302))
{B304 = B295__302}
else
B304 = emptyQ__72(objects__300);
var B305 = not__17(B304);
if ($T(B305))
{
var other__303 = first__85(objects__300);
failedQ__301 = not__17(function__298(object__299, other__303));
objects__300 = rest__75(objects__300);
object__299 = other__303}
else
break};
return not__17(failedQ__301)}, false);
exports.compare = compare__296}
{
var EE__306;
false;
EE__306 = Mmake_function__9("EE", function EE__307 (object__308)
{
var objects__309 = $SL.call(arguments, 1);
return compare__296(binaryEE__29, object__308, objects__309)}, false);
exports["=="] = EE__306}
{
var binaryE__310;
false;
binaryE__310 = Mmake_generic__267("binaryE");
exports["binary="] = binaryE__310}
{
var binaryL__311;
false;
binaryL__311 = Mmake_generic__267("binaryL");
exports["binary<"] = binaryL__311}
{
false;
binaryE__310 = Mmake_method__268("binaryE", function B312__313 (object1__314, object2__315)
{if ($T(binaryEE__29(type__253(object1__314), type__253(object2__315))))
{return binaryEE__29(object1__314, object2__315)}}, false, LobjectG__1, binaryE__310);
exports["binary="] = binaryE__310}
{
var anyQ__324;
false;
binaryE__310 = Mmake_method__268("binaryE", function B316__325 (array1__326, array2__327)
{if ($T(binaryEE__29(size__20(array1__326), size__20(array2__327))))
{
var B317__328 = array1__326,
B318__329 = array2__327,
B319__330,
B321__331,
B320__332 = [B317__328, B318__329];
while (true)
{
var B322__333 = B319__330,
B339;
if ($T(B322__333))
{B339 = B322__333}
else
B339 = anyQ__324(emptyQ__72, B320__332);
var B340 = not__17(B339);
if ($T(B340))
{
var item1__334 = first__85(B317__328),
item2__335 = first__85(B318__329);
if ($T(not__17(binaryE__310(item1__334, item2__335))))
{
B321__331 = true;
B319__330 = true}
else
{
(function B323__336 (item1__337, item2__338)
{return false})(item1__334, item2__335);
B317__328 = rest__75(B317__328);
B318__329 = rest__75(B318__329);
B320__332 = [B317__328, B318__329]}}
else
break};
return not__17(B321__331)}}, false, LarrayG__4, binaryE__310);
exports["binary="] = binaryE__310}
{
var binaryE_dispatcher__341;
false;
binaryE_dispatcher__341 = binaryE__310}
{
false;
binaryE__310 = Mmake_function__9("binaryE", function binaryE__343 (object1__344, object2__345)
{
var B342__346;
if ($T(not__17(object1__344)))
{B342__346 = not__17(object2__345)}
else
B342__346 = false;
if ($T(B342__346))
{return B342__346}
else
return binaryE_dispatcher__341(object1__344, object2__345)}, false);
exports["binary="] = binaryE__310}
{
var E__347;
false;
E__347 = Mmake_function__9("E", function E__348 (object__349)
{
var objects__350 = $SL.call(arguments, 1);
return compare__296(binaryE__310, object__349, objects__350)}, false);
exports["="] = E__347}
{
false;
binaryL__311 = Mmake_method__268("binaryL", function B351__352 (object1__353, object2__354)
{if ($T(binaryEE__29(type__253(object1__353), type__253(object2__354))))
{return (object1__353 < object2__354)}}, false, LobjectG__1, binaryL__311);
exports["binary<"] = binaryL__311}
{
false;
L__159 = Mmake_function__9("L", function L__355 (object__356)
{
var objects__357 = $SL.call(arguments, 1);
return compare__296(binaryL__311, object__356, objects__357)}, false);
exports["<"] = L__159}
{
var binaryLE__359;
false;
binaryLE__359 = Mmake_function__9("binaryLE", function binaryLE__360 (object1__361, object2__362)
{if ($T(object1__361))
{if ($T(object2__362))
{
var B358__363 = binaryL__311(object1__361, object2__362);
if ($T(B358__363))
{return B358__363}
else
return binaryE__310(object1__361, object2__362)}}}, false);
exports["binary<="] = binaryLE__359}
{
var LE__364;
false;
LE__364 = Mmake_function__9("LE", function LE__365 (object__366)
{
var objects__367 = $SL.call(arguments, 1);
return compare__296(binaryLE__359, object__366, objects__367)}, false);
exports["<="] = LE__364}
{
var binaryG__368;
false;
binaryG__368 = Mmake_function__9("binaryG", function binaryG__369 (object1__370, object2__371)
{if ($T(object1__370))
{if ($T(object2__371))
{if ($T(not__17(binaryL__311(object1__370, object2__371))))
{return not__17(binaryE__310(object1__370, object2__371))}}}}, false);
exports["binary>"] = binaryG__368}
{
var G__372;
false;
G__372 = Mmake_function__9("G", function G__373 (object__374)
{
var objects__375 = $SL.call(arguments, 1);
return compare__296(binaryG__368, object__374, objects__375)}, false);
exports[">"] = G__372}
{
var binaryGE__377;
false;
binaryGE__377 = Mmake_function__9("binaryGE", function binaryGE__378 (object1__379, object2__380)
{
var B376__381 = not__17(binaryL__311(object1__379, object2__380));
if ($T(B376__381))
{return B376__381}
else
return binaryE__310(object1__379, object2__380)}, false);
exports["binary>="] = binaryGE__377}
{
false;
GE__139 = Mmake_function__9("GE", function GE__382 (object__383)
{
var objects__384 = $SL.call(arguments, 1);
return compare__296(binaryGE__377, object__383, objects__384)}, false);
exports[">="] = GE__139}
{
var as_object__385;
false;
as_object__385 = Mmake_function__9("as_object", function as_object__386 (property_list__387)
{
var list__388 = slice__127(property_list__387),
result__389 = {};
while ($T(G__372(size__20(list__388), 0)))
{
var key__390 = pop__117(list__388),
value__391 = pop__117(list__388),
B392;
if ($T(instanceQ__257(key__390, LkeywordG__45)))
{B392 = key__390.name}
else
B392 = as_string__61(key__390);
key__390 = B392;
result__389[key__390] = value__391};
return result__389}, false);
exports["as-object"] = as_object__385}
{
var position__393;
false;
position__393 = Mmake_function__9("position", function position__394 (array__395, element__396)
{
var position__397 = array__395.indexOf(element__396);
if ($T(G__372(position__397, -1)))
{return position__397}}, false);
exports.position = position__393}
{
var last_position__398;
false;
last_position__398 = Mmake_function__9("last_position", function last_position__399 (array__400, element__401)
{
var position__402 = array__400.lastIndexOf(element__401);
if ($T(G__372(position__402, -1)))
{return position__402}}, false);
exports["last-position"] = last_position__398}
{
var as_uppercase__403;
false;
as_uppercase__403 = Mmake_function__9("as_uppercase", function as_uppercase__404 (string__405)
{return string__405.toUpperCase()}, false);
exports["as-uppercase"] = as_uppercase__403}
{
var as_lowercase__406;
false;
as_lowercase__406 = Mmake_function__9("as_lowercase", function as_lowercase__407 (string__408)
{return string__408.toLowerCase()}, false);
exports["as-lowercase"] = as_lowercase__406}
{
var join__409;
false;
join__409 = Mmake_function__9("join", function join__410 (array__411, string__412)
{return array__411.join(string__412)}, false);
exports.join = join__409}
{
var trim__413;
false;
trim__413 = Mmake_function__9("trim", function trim__414 (string__415)
{return string__415.trim()}, false);
exports.trim = trim__413}
{
var replace__416;
false;
replace__416 = Mmake_function__9("replace", function replace__417 (string__418, pattern__419, replacement__420)
{return string__418.replace(pattern__419, replacement__420)}, false);
exports.replace = replace__416}
{
var make_object__421;
false;
make_object__421 = Mmake_function__9("make_object", function make_object__422 ()
{
var key_values__423 = $SL.call(arguments, 0);
return as_object__385(key_values__423)}, false);
exports["make-object"] = make_object__421}
{
var LsymbolG__424;
false;
LsymbolG__424 = Mmake_class__38(LobjectG__1, {name:false,
module:false});
exports["<symbol>"] = LsymbolG__424}
{
var Msymbols__425;
false;
Msymbols__425 = {}}
{
var B440 = $K("name"),
B441 = $K("module"),
get_setter__428,
make__429,
get__430,
symbol__431;
false;
symbol__431 = Mmake_function__9("symbol", function symbol__432 (name__433, module__434)
{
var name__435 = as_lowercase__406(name__433),
B426__436 = module__434,
B439;
if ($T(B426__436))
{B439 = B426__436}
else
B439 = "";
var moduleT__437 = as_lowercase__406(B439),
B427__438 = get__430(Msymbols__425, moduleT__437, name__435);
if ($T(B427__438))
{return B427__438}
else
return get_setter__428(Msymbols__425, moduleT__437, name__435, make__429(LsymbolG__424, B440, name__435, B441, module__434))}, false);
exports.symbol = symbol__431}
$S = symbol__431
{
var symbol_name__442;
false;
symbol_name__442 = Mmake_function__9("symbol_name", function symbol_name__443 (symbol__444)
{return get__430(symbol__444, "name")}, false);
exports["symbol-name"] = symbol_name__442}
{
false;
Mkeys__158 = Mmake_function__9("Mkeys", function Mkeys__446 (key_values__447, defaults__448)
{
var i__449 = 0;
while ($T(not__17((i__449 >= size__20(key_values__447)))))
{
(function B445__450 (i__451)
{
var key__452 = key_values__447[i__451],
value__453 = key_values__447[inc__23(i__451, 1)];
if ($T(instanceQ__257(key__452, LkeywordG__45)))
{return defaults__448[key__452.name] = value__453}})(i__449);
i__449 = inc__23(i__449, 2)};
false;
return defaults__448}, false);
exports["%keys"] = Mkeys__158}
{
var element__458,
choose__459,
object_properties__460,
find_key__461;
false;
find_key__461 = Mmake_function__9("find_key", function find_key__462 (array__463, predicate__464)
{
var B454__465 = $SL.call(arguments, 2),
B455__466 = Mkeys__158(B454__465, {skip:0,
failure:false,
"from-end?":false}),
skip__467 = B455__466.skip,
failure__468 = B455__466.failure,
from_endQ__469 = B455__466["from-end?"],
keys__470 = object_properties__460(array__463),
B475 = function B456__471 (index__472)
{return predicate__464(element__458(array__463, index__472))},
B476;
if ($T(from_endQ__469))
{B476 = reverse__152(keys__470)}
else
B476 = keys__470;
var satisfying_keys__473 = choose__459(B475, B476),
B457__474 = element__458(satisfying_keys__473, skip__467);
if ($T(B457__474))
{return B457__474}
else
return failure__468}, false);
exports["find-key"] = find_key__461}
{
var parse_integer__479;
false;
parse_integer__479 = Mmake_function__9("parse_integer", function parse_integer__480 (value__481)
{
var B477__482 = $SL.call(arguments, 1),
B478__483 = Mkeys__158(B477__482, {radix:10}),
radix__484 = B478__483.radix;
return parseInt(value__481, radix__484)}, false);
exports["parse-integer"] = parse_integer__479}
{
false;
element__458 = Mmake_function__9("element", function element__488 (array__489, index__490)
{
var B485__491 = $SL.call(arguments, 2),
B486__492 = Mkeys__158(B485__491, {"default":false}),
default__493 = B486__492["default"],
B487__494 = array__489[index__490];
if ($T(B487__494))
{return B487__494}
else
return default__493}, false);
exports.element = element__458}
{
var element_setter__495;
false;
element_setter__495 = Mmake_function__9("element_setter", function element_setter__496 (array__497, key__498, value__499)
{return array__497[key__498] = value__499}, true);
exports["element-setter"] = element_setter__495}
{
var replace_subsequence__502;
false;
replace_subsequence__502 = Mmake_function__9("replace_subsequence", function replace_subsequence__503 (target_array__504, insert_array__505)
{
var B500__506 = $SL.call(arguments, 2),
B501__507 = Mkeys__158(B500__506, {start:0,
end:size__20(target_array__504)}),
start__508 = B501__507.start,
end__509 = B501__507.end;
return concatenate__290(slice__127(target_array__504, 0, start__508), insert_array__505, slice__127(target_array__504, end__509))}, false);
exports["replace-subsequence"] = replace_subsequence__502}
{
var replace_subsequenceN__512;
false;
replace_subsequenceN__512 = Mmake_function__9("replace_subsequenceN", function replace_subsequenceN__513 (target_array__514, insert_array__515)
{
var B510__516 = $SL.call(arguments, 2),
B511__517 = Mkeys__158(B510__516, {start:0,
end:size__20(target_array__514)}),
start__518 = B511__517.start,
end__519 = B511__517.end,
rest__520 = Mconcat__53([start__518, (end__519 - start__518)], insert_array__515);
[].splice.apply(target_array__514, rest__520);
return target_array__514}, false);
exports["replace-subsequence!"] = replace_subsequenceN__512}
{
var removeN__524;
false;
removeN__524 = Mmake_function__9("removeN", function removeN__525 (array__526, value__527)
{
var B521__528 = $SL.call(arguments, 2),
B522__529 = Mkeys__158(B521__528, {test:EE__306}),
test__530 = B522__529.test,
B523__531 = find_key__461(array__526, curry__189(test__530, value__527));
if ($T(B523__531))
{
var key__532 = B523__531;
array__526.splice(key__532, 1)};
return array__526}, false);
exports["remove!"] = removeN__524}
{
var remove__535;
false;
remove__535 = Mmake_function__9("remove", function remove__536 (array__537, value__538)
{
var B533__539 = $SL.call(arguments, 2),
B534__540 = Mkeys__158(B533__539, {test:EE__306}),
test__541 = B534__540.test;
return removeN__524(slice__127(array__537), value__538, B180, test__541)}, false);
exports.remove = remove__535}
{
var interpose__543;
false;
interpose__543 = Mmake_function__9("interpose", function interpose__544 (separator__545, array__546)
{return reduce1__133(function B542__547 (a__548, b__549)
{return concatenate__290([a__548, separator__545], b__549)}, array__546)}, false);
exports.interpose = interpose__543}
{
false;
anyQ__324 = Mmake_function__9("anyQ", function anyQ__552 (function__553, values__554)
{
var value__555,
n__556 = size__20(values__554),
i__557 = 0;
while (true)
{
var B550__558 = value__555,
B561;
if ($T(B550__558))
{B561 = B550__558}
else
B561 = GE__139(i__557, n__556);
var B562 = not__17(B561);
if ($T(B562))
{
(function B551__559 (i__560)
{return value__555 = function__553(values__554[i__560])})(i__557);
i__557 = inc__23(i__557)}
else
break};
return value__555}, false);
exports["any?"] = anyQ__324}
{
var memberQ__566;
false;
memberQ__566 = Mmake_function__9("memberQ", function memberQ__567 (value__568, array__569)
{
var B563__570 = $SL.call(arguments, 2),
B564__571 = Mkeys__158(B563__570, {test:EE__306}),
test__572 = B564__571.test;
return anyQ__324(function B565__573 (other_value__574)
{return test__572(value__568, other_value__574)}, array__569)}, false);
exports["member?"] = memberQ__566}
{
var everyQ__576;
false;
everyQ__576 = Mmake_function__9("everyQ", function everyQ__577 (function__578, array__579)
{return not__17(anyQ__324(function B575__580 (value__581)
{return not__17(function__578(value__581))}, array__579))}, false);
exports["every?"] = everyQ__576}
{
var map__588;
false;
map__588 = Mmake_function__9("map", function map__589 (function__590)
{
var arrays__591 = $SL.call(arguments, 1),
result__592 = [];
if ($T(emptyQ__72(rest__75(arrays__591))))
{
var B582__593 = first__85(arrays__591),
B583__594,
B585__595,
B584__596 = [B582__593];
while (true)
{
var B586__597 = B583__594,
B601;
if ($T(B586__597))
{B601 = B586__597}
else
B601 = anyQ__324(emptyQ__72, B584__596);
var B602 = not__17(B601);
if ($T(B602))
{
var item__598 = first__85(B582__593);
(function B587__599 (item__600)
{return push_last__113(result__592, function__590(item__600))})(item__598);
B582__593 = rest__75(B582__593);
B584__596 = [B582__593]}
else
break};
B585__595}
else
while ($T(not__17(anyQ__324(emptyQ__72, arrays__591))))
{
push_last__113(result__592, apply__182(function__590, map__589(first__85, arrays__591)));
arrays__591 = map__589(rest__75, arrays__591)};
return result__592}, false);
exports.map = map__588}
{
var do__609;
false;
do__609 = Mmake_function__9("Rdo", function do__610 (function__611)
{
var arrays__612 = $SL.call(arguments, 1);
if ($T(emptyQ__72(rest__75(arrays__612))))
{
var B603__613 = first__85(arrays__612),
B604__614,
B606__615,
B605__616 = [B603__613];
while (true)
{
var B607__617 = B604__614,
B621;
if ($T(B607__617))
{B621 = B607__617}
else
B621 = anyQ__324(emptyQ__72, B605__616);
var B622 = not__17(B621);
if ($T(B622))
{
var item__618 = first__85(B603__613);
(function B608__619 (item__620)
{return function__611(item__620)})(item__618);
B603__613 = rest__75(B603__613);
B605__616 = [B603__613]}
else
break};
B606__615}
else
while ($T(not__17(anyQ__324(emptyQ__72, arrays__612))))
{
apply__182(function__611, map__588(first__85, arrays__612));
arrays__612 = map__588(rest__75, arrays__612)};
return false}, false);
exports["do"] = do__609}
{
false;
choose__459 = Mmake_function__9("choose", function choose__629 (function__630, array__631)
{
var result__632 = [],
B623__633 = array__631,
B624__634,
B626__635,
B625__636 = [B623__633];
while (true)
{
var B627__637 = B624__634,
B641;
if ($T(B627__637))
{B641 = B627__637}
else
B641 = anyQ__324(emptyQ__72, B625__636);
var B642 = not__17(B641);
if ($T(B642))
{
var element__638 = first__85(B623__633);
(function B628__639 (element__640)
{if ($T(function__630(element__640)))
{return push_last__113(result__632, element__640)}})(element__638);
B623__633 = rest__75(B623__633);
B625__636 = [B623__633]}
else
break};
B626__635;
return result__632}, false);
exports.choose = choose__459}
{
var copy_sequence__646;
false;
copy_sequence__646 = Mmake_function__9("copy_sequence", function copy_sequence__647 (array__648)
{
var B643__649 = $SL.call(arguments, 1),
B644__650 = Mkeys__158(B643__649, {start:0,
end:false}),
start__651 = B644__650.start,
end__652 = B644__650.end,
B645__653 = end__652,
end__654;
if ($T(B645__653))
{end__654 = B645__653}
else
end__654 = undefined;
return slice__127(array__648, start__651, end__654)}, false);
exports["copy-sequence"] = copy_sequence__646}
{
var initialize__655;
false;
make__429 = Mmake_function__9("make", function make__656 (type__657)
{
var arguments__658 = $SL.call(arguments, 1),
object__659 = new(type__657);
apply__182(initialize__655, object__659, arguments__658);
return object__659}, false);
exports.make = make__429}
{
false;
object_properties__460 = Mmake_function__9("object_properties", function object_properties__664 (object__665)
{
var B660__666 = $SL.call(arguments, 1),
B661__667 = Mkeys__158(B660__666, {"inherited?":false}),
inheritedQ__668 = B661__667["inherited?"],
result__669 = [];
if ($T(instanceQ__257(object__665, LarrayG__4)))
{
var B662__670 = size__20(object__665),
i__671 = 0;
while ($T(not__17(GE__139(i__671, B662__670))))
{
(function B663__672 (i__673)
{return push_last__113(result__669, i__673)})(i__671);
i__671 = (i__671 + 1)};
false}
else
{
var i__674;
for (i__674 in object__665) (inheritedQ__668||$HP.call(object__665, i__674)) &&result__669.push(i__674)};
return result__669}, false);
exports["object-properties"] = object_properties__460}
{
var object_values__675;
false;
object_values__675 = Mmake_function__9("object_values", function object_values__676 (object__677)
{return map__588(curry__189(get__430, object__677), object_properties__460(object__677))}, false);
exports["object-values"] = object_values__675}
{
false;
initialize__655 = Mmake_generic__267("initialize");
exports.initialize = initialize__655}
{
var B697 = $K("inherited?");
false;
initialize__655 = Mmake_method__268("initialize", function B678__683 (object__684)
{
var rest__685 = $SL.call(arguments, 1),
arguments__686 = as_object__385(rest__685),
B679__687 = type__253(object__684)["%properties"];
if ($T(B679__687))
{
var properties__688 = B679__687;
do__609(function B680__689 (key__690)
{
var B681__691 = hasQ__263(LobjectG__1.prototype, key__690),
B695;
if ($T(B681__691))
{B695 = B681__691}
else
B695 = hasQ__263(object__684, key__690);
var B696 = not__17(B695);
if ($T(B696))
{
var B682__692 = arguments__686[key__690],
value__694;
if ($T(B682__692))
{value__694 = B682__692}
else
{
var value__693 = properties__688[key__690];
if ($T(value__693))
{value__694 = value__693()}
else
value__694 = false};
return object__684[key__690] = value__694}}, object_properties__460(properties__688, B697, true))};
return object__684}, false, LobjectG__1, initialize__655);
exports.initialize = initialize__655}
{
var Lhash_symbolG__698;
false;
Lhash_symbolG__698 = Mmake_class__38(LobjectG__1, {name:false});
exports["<hash-symbol>"] = Lhash_symbolG__698}
{
var key__699 = make__429(Lhash_symbolG__698, B440, "key");
$KEY = key__699}
{
var rest__700 = make__429(Lhash_symbolG__698, B440, "rest");
$REST = rest__700}
{
false;
get__430 = Mmake_function__9("get", function get__707 (object__708)
{
var properties__709 = $SL.call(arguments, 1),
result__710,
B701__711 = properties__709,
B702__712,
B704__713,
B703__714 = [B701__711];
while (true)
{
var B705__715 = B702__712,
B719;
if ($T(B705__715))
{B719 = B705__715}
else
B719 = anyQ__324(emptyQ__72, B703__714);
var B720 = not__17(B719);
if ($T(B720))
{
var property__716 = first__85(B701__711);
if ($T(not__17(hasQ__263(object__708, property__716))))
{
B704__713 = result__710 = false;
B702__712 = true}
else
{
(function B706__717 (property__718)
{
result__710 = object__708[property__718];
return object__708 = result__710})(property__716);
B701__711 = rest__75(B701__711);
B703__714 = [B701__711]}}
else
break};
B704__713;
return result__710}, false);
exports.get = get__430}
{
false;
get_setter__428 = Mmake_function__9("get_setter", function get_setter__721 (object__722)
{
var propertiesSvalue__723 = $SL.call(arguments, 1);
if ($T(LE__364(size__20(propertiesSvalue__723), 2)))
{return object__722[first__85(propertiesSvalue__723)] = second__92(propertiesSvalue__723)}
else
{
var property__724 = first__85(propertiesSvalue__723),
object2__725;
if ($T(hasQ__263(object__722, property__724)))
{object2__725 = object__722[property__724]}
else
object2__725 = object__722[property__724] = make_object__421();
return apply__182(get_setter__721, object2__725, rest__75(propertiesSvalue__723))}}, true);
exports["get-setter"] = get_setter__428}
{
var split_with__727;
false;
split_with__727 = Mmake_function__9("split_with", function split_with__728 (function__729, array__730)
{
var a__731 = [],
b__732 = [];
do__609(function B726__733 (item__734)
{
var B735;
if ($T(function__729(item__734)))
{B735 = a__731}
else
B735 = b__732;
return push_last__113(B735, item__734)}, array__730);
return [a__731, b__732]}, false);
exports["split-with"] = split_with__727}
{
var as_hex_string__736;
false;
as_hex_string__736 = Mmake_function__9("as_hex_string", function as_hex_string__737 (number__738)
{return number__738.toString(16)}, false);
exports["as-hex-string"] = as_hex_string__736}
{
var description__739;
false;
description__739 = Mmake_generic__267("description");
exports.description = description__739}
{
false;
description__739 = Mmake_method__268("description", function B740__741 (number__742)
{return ("" + number__742)}, false, LnumberG__3, description__739);
exports.description = description__739}
{
false;
description__739 = Mmake_method__268("description", function B743__744 (string__745)
{
var escaped__746 = string__745.replace("\"", "\\\"", "g");
return ("\"" + escaped__746 + "\"")}, false, LstringG__2, description__739);
exports.description = description__739}
{
false;
description__739 = Mmake_method__268("description", function B747__748 (array__749)
{return ("(" + join__409(map__588(description__739, array__749), " ") + ")")}, false, LarrayG__4, description__739);
exports.description = description__739}
{
false;
description__739 = Mmake_method__268("description", function B750__751 (value__752)
{if ($T(value__752))
{return "#t"}
else
return "#f"}, false, LbooleanG__5, description__739);
exports.description = description__739}
{
false;
description__739 = Mmake_method__268("description", function B753__755 (symbol__756)
{
var B754__757 = get__430(symbol__756, "module"),
B759;
if ($T(B754__757))
{
var module__758 = B754__757;
B759 = concatenate__290(module__758, "::")}
else
B759 = "";
var B760 = symbol_name__442(symbol__756);
return (B759 + B760)}, false, LsymbolG__424, description__739);
exports.description = description__739}
{
false;
description__739 = Mmake_method__268("description", function B761__762 (keyword__763)
{return (symbol_name__442(keyword__763) + ":")}, false, LkeywordG__45, description__739);
exports.description = description__739}
{
false;
description__739 = Mmake_method__268("description", function B764__765 (symbol__766)
{return ("#" + symbol_name__442(symbol__766))}, false, Lhash_symbolG__698, description__739);
exports.description = description__739}
{
var min__767;
false;
min__767 = Math.min;
exports.min = min__767}
{
var max__768;
false;
max__768 = Math.max;
exports.max = max__768}
{
var abs__769;
false;
abs__769 = Math.abs;
exports.abs = abs__769}
{
var round__770;
false;
round__770 = Math.round;
exports.round = round__770}
{
var floor__771;
false;
floor__771 = Math.floor;
exports.floor = floor__771}
{
var ceil__772;
false;
ceil__772 = Math.ceil;
exports.ceil = ceil__772}
{
var sin__773;
false;
sin__773 = Math.sin;
exports.sin = sin__773}
{
var cos__774;
false;
cos__774 = Math.cos;
exports.cos = cos__774}
{
var atan2__775;
false;
atan2__775 = Math.atan2;
exports.atan2 = atan2__775}
{
var expt__776;
false;
expt__776 = Math.pow;
exports.expt = expt__776}
{
var sqrt__777;
false;
sqrt__777 = Math.sqrt;
exports.sqrt = sqrt__777}
{
var mod__778;
false;
mod__778 = Mmake_function__9("mod", function mod__779 (number1__780, number2__781)
{return (number1__780 % number2__781)}, false);
exports.mod = mod__778}
{
var TpiT__782;
false;
TpiT__782 = Math.PI;
exports["*pi*"] = TpiT__782}
{
var TradiantT__783;
false;
TradiantT__783 = (TpiT__782 / 180)}
{
var as_radiant__784;
false;
as_radiant__784 = Mmake_function__9("as_radiant", function as_radiant__785 (number__786)
{return (number__786 * TradiantT__783)}, false);
exports["as-radiant"] = as_radiant__784}
{
var signal__787;
false;
signal__787 = Mmake_function__9("signal", function signal__788 (error__789)
{
throw(error__789);
return false}, false);
exports.signal = signal__787}
{
var extendN__796;
false;
extendN__796 = Mmake_function__9("extendN", function extendN__797 (object1__798, object2__799)
{
var B790__800 = object_properties__460(object2__799),
B791__801,
B793__802,
B792__803 = [B790__800];
while (true)
{
var B794__804 = B791__801,
B808;
if ($T(B794__804))
{B808 = B794__804}
else
B808 = anyQ__324(emptyQ__72, B792__803);
var B809 = not__17(B808);
if ($T(B809))
{
var key__805 = first__85(B790__800);
(function B795__806 (key__807)
{return get_setter__428(object1__798, key__807, get__430(object2__799, key__807))})(key__805);
B790__800 = rest__75(B790__800);
B792__803 = [B790__800]}
else
break};
B793__802;
return object1__798}, false);
exports["extend!"] = extendN__796}
{
var as_property_list__818;
false;
as_property_list__818 = Mmake_function__9("as_property_list", function as_property_list__819 (object__820)
{
var B810__821 = $SL.call(arguments, 1),
B811__822 = Mkeys__158(B810__821, {"keywords?":false}),
keywordsQ__823 = B811__822["keywords?"],
result__824 = [],
B812__825 = object_properties__460(object__820),
B813__826,
B815__827,
B814__828 = [B812__825];
while (true)
{
var B816__829 = B813__826,
B834;
if ($T(B816__829))
{B834 = B816__829}
else
B834 = anyQ__324(emptyQ__72, B814__828);
var B835 = not__17(B834);
if ($T(B835))
{
var key__830 = first__85(B812__825);
(function B817__831 (key__832)
{
var B833;
if ($T(keywordsQ__823))
{B833 = keyword__47(as_string__61(key__832))}
else
B833 = key__832;
push_last__113(result__824, B833);
return push_last__113(result__824, get__430(object__820, key__832))})(key__830);
B812__825 = rest__75(B812__825);
B814__828 = [B812__825]}
else
break};
B815__827;
return result__824}, false);
exports["as-property-list"] = as_property_list__818}
{
var as_association_list__844;
false;
as_association_list__844 = Mmake_function__9("as_association_list", function as_association_list__845 (object__846)
{
var B836__847 = $SL.call(arguments, 1),
B837__848 = Mkeys__158(B836__847, {"keywords?":false}),
keywordsQ__849 = B837__848["keywords?"],
result__850 = [],
B838__851 = object_properties__460(object__846),
B839__852,
B841__853,
B840__854 = [B838__851];
while (true)
{
var B842__855 = B839__852,
B862;
if ($T(B842__855))
{B862 = B842__855}
else
B862 = anyQ__324(emptyQ__72, B840__854);
var B863 = not__17(B862);
if ($T(B863))
{
var key__856 = first__85(B838__851);
(function B843__857 (key__858)
{
var B859;
if ($T(keywordsQ__849))
{B859 = keyword__47(as_string__61(key__858))}
else
B859 = key__858;
var B860 = get__430(object__846, key__858),
B861 = [B859, B860];
return push_last__113(result__850, B861)})(key__856);
B838__851 = rest__75(B838__851);
B840__854 = [B838__851]}
else
break};
B841__853;
return result__850}, false);
exports["as-association-list"] = as_association_list__844}
{
var starts_withQ__864;
false;
starts_withQ__864 = Mmake_function__9("starts_withQ", function starts_withQ__865 (string__866, prefix__867)
{return binaryEE__29(string__866.indexOf(prefix__867), 0)}, false);
exports["starts-with?"] = starts_withQ__864}
{
var evenQ__868;
false;
evenQ__868 = Mmake_function__9("evenQ", function evenQ__869 (number__870)
{return binaryEE__29((number__870 % 2), 0)}, false);
exports["even?"] = evenQ__868}
{
var oddQ__871;
false;
oddQ__871 = Mmake_function__9("oddQ", function oddQ__872 (number__873)
{return binaryEE__29((number__873 % 2), 1)}, false);
exports["odd?"] = oddQ__871}
{
var group_by__875;
false;
group_by__875 = Mmake_function__9("group_by", function group_by__876 (predicate__877, items__878)
{return reduce__132(function B874__879 (result__880, item__881)
{
var key__882 = predicate__877(item__881);
if ($T(hasQ__263(result__880, key__882)))
{push_last__113(get__430(result__880, key__882), item__881)}
else
get_setter__428(result__880, key__882, [item__881]);
return result__880}, make_object__421(), items__878)}, false);
exports["group-by"] = group_by__875}
{
var wrap_object__883;
false;
wrap_object__883 = Mmake_function__9("wrap_object", function wrap_object__884 (object__885)
{
var rest__886 = $SL.call(arguments, 1),
result__887 = Object.create(object__885);
extendN__796(result__887, as_object__385(rest__886));
return result__887}, false)}
{
var unwrap_object__888;
false;
unwrap_object__888 = Mmake_function__9("unwrap_object", function unwrap_object__889 (object__890)
{return object__890.__proto__}, false)}
{
var update_with__893;
false;
update_with__893 = Mmake_function__9("update_with", function update_with__894 (fn__895, obj__896)
{
var objs__897 = $SL.call(arguments, 2);
return do__609(function B891__898 (obj2__899)
{return do__609(function B892__900 (property__901)
{
var value__902 = get__430(obj2__899, property__901),
B903;
if ($T(hasQ__263(obj__896, property__901)))
{B903 = fn__895(get__430(obj__896, property__901), value__902)}
else
B903 = value__902;
return get_setter__428(obj__896, property__901, B903)}, object_properties__460(obj2__899))}, objs__897)}, false);
exports["update-with"] = update_with__893}
{
var set_unionN__904,
as_set__905;
false;
as_set__905 = Mmake_function__9("as_set", function as_set__906 (values__907)
{
var set__908 = [];
return set_unionN__904(set__908, values__907)}, false);
exports["as-set"] = as_set__905}
{
var set_addN__909;
false;
set_addN__909 = Mmake_function__9("set_addN", function set_addN__910 (set__911, object__912)
{if ($T(not__17(memberQ__566(object__912, set__911))))
{return push_last__113(set__911, object__912)}}, false);
exports["set-add!"] = set_addN__909}
{
var set_removeN__913;
false;
set_removeN__913 = removeN__524;
exports["set-remove!"] = set_removeN__913}
{
false;
set_unionN__904 = Mmake_function__9("set_unionN", function set_unionN__914 (set1__915, set2__916)
{
do__609(curry__189(set_addN__909, set1__915), set2__916);
return set1__915}, false);
exports["set-union!"] = set_unionN__904}
{
var set_subtractN__917;
false;
set_subtractN__917 = Mmake_function__9("set_subtractN", function set_subtractN__918 (set1__919, set2__920)
{
do__609(curry__189(set_removeN__913, set1__919), set2__920);
return set1__919}, false);
exports["set-subtract!"] = set_subtractN__917}
{
var chain_object__921;
false;
chain_object__921 = Mmake_function__9("chain_object", function chain_object__922 (object1__923, object2__924)
{
object2__924.__proto__ = object1__923.__proto__;
object1__923.__proto__ = object2__924;
return object1__923}, false);
exports["chain-object"] = chain_object__921}
{
var unchain_object__925;
false;
unchain_object__925 = Mmake_function__9("unchain_object", function unchain_object__926 (object__927)
{
var B928;
if ($T(object__927.__proto__))
{B928 = object__927.__proto__.__proto__}
else
B928 = false;
object__927.__proto__ = B928;
return object__927}, false);
exports["unchain-object"] = unchain_object__925}
{
false;
as_hex_string__736 = Mmake_function__9("as_hex_string", function as_hex_string__929 (number__930)
{return number__930.toString(16)}, false);
exports["as-hex-string"] = as_hex_string__736}
{
var make_plain_object__931;
false;
make_plain_object__931 = Mmake_function__9("make_plain_object", function make_plain_object__932 ()
{return Object.create(null)}, false);
exports["make-plain-object"] = make_plain_object__931}
{
var ___933;
false;
___933 = Mmake_function__9("_", function ___934 (minuend__935)
{
var subtrahends__936 = $SL.call(arguments, 1);
if ($T(emptyQ__72(subtrahends__936)))
{return -(minuend__935)}
else
return reduce__132(binary___241, minuend__935, subtrahends__936)}, false);
exports["-"] = ___933}
{
var P__937;
false;
P__937 = Mmake_function__9("P", function P__938 ()
{
var numbers__939 = $SL.call(arguments, 0);
if ($T(emptyQ__72(numbers__939)))
{return 0}
else
return reduce1__133(binaryP__237, numbers__939)}, false);
exports["+"] = P__937}
{
var T__940;
false;
T__940 = Mmake_function__9("T", function T__941 ()
{
var numbers__942 = $SL.call(arguments, 0);
if ($T(emptyQ__72(numbers__942)))
{return 1}
else
return reduce1__133(binaryT__245, numbers__942)}, false);
exports["*"] = T__940}
{
var S__943;
false;
S__943 = Mmake_function__9("S", function S__944 (numerator__945)
{
var denominators__946 = $SL.call(arguments, 1);
if ($T(emptyQ__72(denominators__946)))
{return (1 / numerator__945)}
else
return reduce__132(binaryS__249, numerator__945, denominators__946)}, false);
exports["/"] = S__943}
