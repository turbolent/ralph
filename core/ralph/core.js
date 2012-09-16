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
var keyword__48;
false;
keyword__48 = Mmake_function__9("keyword", function keyword__49 (name__50)
{
var B46__51 = name__50,
nameT__52 = B46__51.toLowerCase(),
B47__53 = Mkeywords__44[nameT__52];
if ($T(B47__53))
{return B47__53}
else
{
var keyword__54 = new(LkeywordG__45);
keyword__54.name = name__50;
Mkeywords__44[name__50] = keyword__54;
return keyword__54}}, false);
exports.keyword = keyword__48}
$K = keyword__48
{
var Mconcat__57;
false;
Mconcat__57 = Mmake_function__9("Mconcat", function Mconcat__58 (array1__59, array2__60)
{
var B56__61 = array1__59,
B55__62 = array2__60;
return B56__61.concat(B55__62)}, false);
exports["%concat"] = Mconcat__57}
{
var cons__63;
false;
cons__63 = Mmake_function__9("cons", function cons__64 (value__65, rest__66)
{return Mconcat__57([value__65], rest__66)}, false);
exports.cons = cons__63}
{
var as_string__67;
false;
as_string__67 = String;
exports["as-string"] = as_string__67}
{
var as_number__68;
false;
as_number__68 = Number;
exports["as-number"] = as_number__68}
{
var as_array__69;
false;
as_array__69 = Mmake_function__9("as_array", function as_array__70 (arguments__71, skip__72)
{return $SL.call(arguments__71, (skip__72 || 0))}, false);
exports["as-array"] = as_array__69}
{
var as_json__75;
false;
as_json__75 = Mmake_function__9("as_json", function as_json__76 (object__77)
{
var B74__78 = JSON,
B73__79 = object__77;
return B74__78.stringify(B73__79)}, false);
exports["as-json"] = as_json__75}
{
var parse_number__80;
false;
parse_number__80 = parseFloat;
exports["parse-number"] = parse_number__80}
{
var char_code__83;
false;
char_code__83 = Mmake_function__9("char_code", function char_code__84 (char__85)
{
var B82__86 = char__85,
B81__87 = 0;
return B82__86.charCodeAt(B81__87)}, false);
exports["char-code"] = char_code__83}
{
var code_char__88;
false;
code_char__88 = String.fromCharCode;
exports["code-char"] = code_char__88}
{
var emptyQ__89;
false;
emptyQ__89 = Mmake_function__9("emptyQ", function emptyQ__90 (sequence__91)
{return binaryEE__29(size__20(sequence__91), 0)}, false);
exports["empty?"] = emptyQ__89}
{
var rest__94;
false;
rest__94 = Mmake_function__9("rest", function rest__95 (sequence__96)
{
var B93__97 = sequence__96,
B92__98 = 1;
return B93__97.slice(B92__98)}, false);
exports.rest = rest__94}
{
var last__99;
false;
last__99 = Mmake_function__9("last", function last__100 (array__101)
{return array__101[dec__26(size__20(array__101), 1)]}, false);
exports.last = last__99}
{
var last_setter__102;
false;
last_setter__102 = Mmake_function__9("last_setter", function last_setter__103 (array__104, value__105)
{return array__104[dec__26(size__20(array__104), 1)] = value__105}, true);
exports["last-setter"] = last_setter__102}
{
var first__106;
false;
first__106 = Mmake_function__9("first", function first__107 (sequence__108)
{return sequence__108[0]}, false);
exports.first = first__106}
{
var first_setter__109;
false;
first_setter__109 = Mmake_function__9("first_setter", function first_setter__110 (array__111, value__112)
{return array__111[0] = value__112}, true);
exports["first-setter"] = first_setter__109}
{
var second__113;
false;
second__113 = Mmake_function__9("second", function second__114 (sequence__115)
{return sequence__115[1]}, false);
exports.second = second__113}
{
var second_setter__116;
false;
second_setter__116 = Mmake_function__9("second_setter", function second_setter__117 (array__118, value__119)
{return array__118[1] = value__119}, true);
exports["second-setter"] = second_setter__116}
{
var third__120;
false;
third__120 = Mmake_function__9("third", function third__121 (sequence__122)
{return sequence__122[2]}, false);
exports.third = third__120}
{
var third_setter__123;
false;
third_setter__123 = Mmake_function__9("third_setter", function third_setter__124 (array__125, value__126)
{return array__125[2] = value__126}, true);
exports["third-setter"] = third_setter__123}
{
var make_array__127;
false;
make_array__127 = Mmake_function__9("make_array", function make_array__128 ()
{
var elements__129 = $SL.call(arguments, 0);
return elements__129}, false);
exports["make-array"] = make_array__127}
{
var push__130;
false;
push__130 = Mmake_function__9("push", function push__131 (array__132, value__133)
{
array__132.unshift(value__133);
return array__132}, false);
exports.push = push__130}
{
var push_last__134;
false;
push_last__134 = Mmake_function__9("push_last", function push_last__135 (array__136, value__137)
{
array__136.push(value__137);
return array__136}, false);
exports["push-last"] = push_last__134}
{
var pop__139;
false;
pop__139 = Mmake_function__9("pop", function pop__140 (array__141)
{
var B138__142 = array__141;
return B138__142.shift()}, false);
exports.pop = pop__139}
{
var pop_last__144;
false;
pop_last__144 = Mmake_function__9("pop_last", function pop_last__145 (array__146)
{
var B143__147 = array__146;
return B143__147.pop()}, false);
exports["pop-last"] = pop_last__144}
{
var but_last__151;
false;
but_last__151 = Mmake_function__9("but_last", function but_last__152 (array__153, n__154)
{
var B150__155 = array__153,
B148__156 = 0,
B149__157 = ((n__154 || 1) * -1);
return B150__155.slice(B148__156, B149__157)}, false);
exports["but-last"] = but_last__151}
{
var slice__161;
false;
slice__161 = Mmake_function__9("slice", function slice__162 (array__163, start__164, end__165)
{
var B160__166 = array__163,
B158__167 = start__164,
B159__168 = end__165;
return B160__166.slice(B158__167, B159__168)}, false);
exports.slice = slice__161}
{
var reduce__169,
reduce1__170;
false;
reduce1__170 = Mmake_function__9("reduce1", function reduce1__171 (function__172, values__173)
{return reduce__169(function__172, first__106(values__173), rest__94(values__173))}, false);
exports.reduce1 = reduce1__170}
{
var GE__176;
false;
reduce__169 = Mmake_function__9("reduce", function reduce__177 (function__178, initial_value__179, values__180)
{
var value__181 = initial_value__179,
B174__182 = size__20(values__180),
i__183 = 0;
while ($T(not__17(GE__176(i__183, B174__182))))
{
(function B175__184 (i__185)
{return value__181 = function__178(value__181, values__180[i__185])})(i__183);
i__183 = (i__183 + 1)};
false;
return value__181}, false);
exports.reduce = reduce__169}
{
var reverseN__187;
false;
reverseN__187 = Mmake_function__9("reverseN", function reverseN__188 (array__189)
{
var B186__190 = array__189;
return B186__190.reverse()}, false);
exports["reverse!"] = reverseN__187}
{
var reverse__191;
false;
reverse__191 = Mmake_function__9("reverse", function reverse__192 (array__193)
{return reverseN__187(slice__161(array__193))}, false);
exports.reverse = reverse__191}
{
var Mkeys__199,
L__200,
identity__201,
sortN__202;
false;
sortN__202 = Mmake_function__9("sortN", function sortN__203 (array__204)
{
var B194__205 = $SL.call(arguments, 1),
B195__206 = Mkeys__199(B194__205, {test:L__200,
key:identity__201}),
test__207 = B195__206.test,
key__208 = B195__206.key,
B197__209 = array__204,
B196__213 = function B198__210 (a__211, b__212)
{if ($T(test__207(key__208(a__211), key__208(b__212))))
{return -1}
else
return 1};
return B197__209.sort(B196__213)}, false);
exports["sort!"] = sortN__202}
{
var B223 = $K("test"),
B224 = $K("key"),
sort__216;
false;
sort__216 = Mmake_function__9("sort", function sort__217 (array__218)
{
var B214__219 = $SL.call(arguments, 1),
B215__220 = Mkeys__199(B214__219, {test:L__200,
key:identity__201}),
test__221 = B215__220.test,
key__222 = B215__220.key;
return sortN__202(slice__161(array__218), B223, test__221, B224, key__222)}, false);
exports.sort = sort__216}
{
var apply__225;
false;
apply__225 = Mmake_function__9("apply", function apply__226 (function__227)
{
var actual__228 = $SL.call(arguments, 1, -1),
last__229 = arguments[(size__20(arguments) - 1)],
arguments__230;
if ($T(binaryEE__29(last__229, function__227)))
{arguments__230 = actual__228}
else
arguments__230 = Mconcat__57(actual__228, last__229);
return function__227.apply(null, arguments__230)}, false);
exports.apply = apply__225}
{
var curry__232;
false;
curry__232 = Mmake_function__9("curry", function curry__233 (function__234)
{
var curried_args__235 = $SL.call(arguments, 1);
return function B231__236 ()
{
var args__237 = $SL.call(arguments, 0);
return apply__225(function__234, Mconcat__57(curried_args__235, args__237))}}, false);
exports.curry = curry__232}
{
var rcurry__239;
false;
rcurry__239 = Mmake_function__9("rcurry", function rcurry__240 (function__241)
{
var curried_args__242 = $SL.call(arguments, 1);
return function B238__243 ()
{
var args__244 = $SL.call(arguments, 0);
return apply__225(function__241, Mconcat__57(args__244, curried_args__242))}}, false);
exports.rcurry = rcurry__239}
{
var always__246;
false;
always__246 = Mmake_function__9("always", function always__247 (value__248)
{return function B245__249 ()
{return value__248}}, false);
exports.always = always__246}
{
var repeatedly__252;
false;
repeatedly__252 = Mmake_function__9("repeatedly", function repeatedly__253 (function__254, count__255)
{
var result__256 = [],
B250__257 = count__255,
i__258 = 0;
while ($T(not__17(GE__176(i__258, B250__257))))
{
(function B251__259 (i__260)
{return push_last__134(result__256, function__254())})(i__258);
i__258 = (i__258 + 1)};
return result__256}, false);
exports.repeatedly = repeatedly__252}
{
false;
identity__201 = Mmake_function__9("identity", function identity__261 (value__262)
{return value__262}, false);
exports.identity = identity__201}
{
var complement__264;
false;
complement__264 = Mmake_function__9("complement", function complement__265 (function__266)
{return function B263__267 ()
{
var arguments__268 = $SL.call(arguments, 0);
return not__17(apply__225(function__266, arguments__268))}}, false);
exports.complement = complement__264}
{
var B279 = $K("from-end?"),
compose__271;
false;
compose__271 = Mmake_function__9("compose", function compose__272 ()
{
var functions__273 = $SL.call(arguments, 0);
if ($T(emptyQ__89(functions__273)))
{return identity__201}
else
return function B269__274 ()
{
var arguments__275 = $SL.call(arguments, 0);
return reduce__169(function B270__276 (value__277, function__278)
{return function__278(value__277)}, apply__225(last__99(functions__273), arguments__275), but_last__151(functions__273), B279, true)}}, false);
exports.compose = compose__271}
{
var binaryP__280;
false;
binaryP__280 = Mmake_function__9("binaryP", function binaryP__281 (number1__282, number2__283)
{return (number1__282 + number2__283)}, false)}
{
var binary___284;
false;
binary___284 = Mmake_function__9("binary_", function binary___285 (number1__286, number2__287)
{return (number1__286 - number2__287)}, false)}
{
var binaryT__288;
false;
binaryT__288 = Mmake_function__9("binaryT", function binaryT__289 (number1__290, number2__291)
{return (number1__290 * number2__291)}, false)}
{
var binaryS__292;
false;
binaryS__292 = Mmake_function__9("binaryS", function binaryS__293 (number1__294, number2__295)
{return (number1__294 / number2__295)}, false)}
{
var type__296;
false;
type__296 = Mmake_function__9("type", function type__297 (object__298)
{if ($T(object__298))
{return object__298.constructor}
else
return LbooleanG__5}, false);
exports.type = type__296}
{
var instanceQ__300;
false;
instanceQ__300 = Mmake_function__9("instanceQ", function instanceQ__301 (object__302, type__303)
{if ($T(object__302))
{
var ctor__304 = object__302.constructor,
B299__305 = binaryEE__29(ctor__304, type__303);
if ($T(B299__305))
{return B299__305}
else
return (object__302 instanceof type__303)}
else
return binaryEE__29(type__303, LbooleanG__5)}, false);
exports["instance?"] = instanceQ__300}
$HP = Object.hasOwnProperty
{
var hasQ__306;
false;
hasQ__306 = Mmake_function__9("hasQ", function hasQ__307 (object__308, property__309)
{return $HP.call(object__308,property__309)}, false);
exports["has?"] = hasQ__306}
{
var Mmake_generic__310,
Mmake_method__311;
false;
Mmake_method__311 = Mmake_function__9("Mmake_method", function Mmake_method__312 (name__313, function__314, setterQ__315, type__316, existing__317)
{
var prototype__318 = type__316.prototype,
existing_method__319;
if ($T(hasQ__306(prototype__318, name__313)))
{existing_method__319 = prototype__318[name__313]}
else
existing_method__319 = false;
var genericQ__320;
if ($T(existing__317))
{if ($T(hasQ__306(existing__317, "%generic?")))
{genericQ__320 = existing__317["%generic?"]}
else
genericQ__320 = false}
else
genericQ__320 = false;
function__314["%name"] = name__313;
function__314["%setter?"] = setterQ__315;
function__314["%type"] = type__316;
prototype__318[name__313] = function__314;
if ($T(genericQ__320))
{return existing__317}
else
return Mmake_generic__310(name__313)}, false);
exports["%make-method"] = Mmake_method__311}
{
false;
Mmake_generic__310 = Mmake_function__9("Mmake_generic", function Mmake_generic__322 (name__323)
{
var dispatcher__327 = function B321__324 (object__325)
{
var function__326 = ((object__325 !== null) && (object__325 !== undefined) && object__325[name__323]);
return (function__326 && function__326.apply(object__325, arguments))};
dispatcher__327["%generic?"] = true;
dispatcher__327["%name"] = name__323;
return dispatcher__327}, false);
exports["%make-generic"] = Mmake_generic__310}
{
var Mnext_method__328;
false;
Mnext_method__328 = Mmake_function__9("Mnext_method", function Mnext_method__329 (function__330)
{
var name__331 = function__330["%name"],
proto__332 = function__330["%type"].prototype.__proto__;
return proto__332[name__331]}, false);
exports["%next-method"] = Mnext_method__328}
{
var concatenate__333;
false;
concatenate__333 = Mmake_function__9("concatenate", function concatenate__334 (object__335)
{
var rest__336 = $SL.call(arguments, 1),
B337;
if ($T(instanceQ__300(object__335, LarrayG__4)))
{B337 = Mconcat__57}
else
B337 = binaryP__280;
return reduce__169(B337, object__335, rest__336)}, false);
exports.concatenate = concatenate__333}
{
var compare__339;
false;
compare__339 = Mmake_function__9("compare", function compare__340 (function__341, object__342, objects__343)
{
var failedQ__344;
while (true)
{
var B338__345 = failedQ__344,
B347;
if ($T(B338__345))
{B347 = B338__345}
else
B347 = emptyQ__89(objects__343);
var B348 = not__17(B347);
if ($T(B348))
{
var other__346 = first__106(objects__343);
failedQ__344 = not__17(function__341(object__342, other__346));
objects__343 = rest__94(objects__343);
object__342 = other__346}
else
break};
return not__17(failedQ__344)}, false);
exports.compare = compare__339}
{
var EE__349;
false;
EE__349 = Mmake_function__9("EE", function EE__350 (object__351)
{
var objects__352 = $SL.call(arguments, 1);
return compare__339(binaryEE__29, object__351, objects__352)}, false);
exports["=="] = EE__349}
{
var binaryE__353;
false;
binaryE__353 = Mmake_generic__310("binaryE");
exports["binary="] = binaryE__353}
{
var binaryL__354;
false;
binaryL__354 = Mmake_generic__310("binaryL");
exports["binary<"] = binaryL__354}
{
false;
binaryE__353 = Mmake_method__311("binaryE", function B355__356 (object1__357, object2__358)
{if ($T(binaryEE__29(type__296(object1__357), type__296(object2__358))))
{return binaryEE__29(object1__357, object2__358)}}, false, LobjectG__1, binaryE__353);
exports["binary="] = binaryE__353}
{
var anyQ__367;
false;
binaryE__353 = Mmake_method__311("binaryE", function B359__368 (array1__369, array2__370)
{if ($T(binaryEE__29(size__20(array1__369), size__20(array2__370))))
{
var B360__371 = array1__369,
B361__372 = array2__370,
B362__373,
B364__374,
B363__375 = [B360__371, B361__372];
while (true)
{
var B365__376 = B362__373,
B382;
if ($T(B365__376))
{B382 = B365__376}
else
B382 = anyQ__367(emptyQ__89, B363__375);
var B383 = not__17(B382);
if ($T(B383))
{
var item1__377 = first__106(B360__371),
item2__378 = first__106(B361__372);
if ($T(not__17(binaryE__353(item1__377, item2__378))))
{
B364__374 = true;
B362__373 = true}
else
{
(function B366__379 (item1__380, item2__381)
{return false})(item1__377, item2__378);
B360__371 = rest__94(B360__371);
B361__372 = rest__94(B361__372);
B363__375 = [B360__371, B361__372]}}
else
break};
return not__17(B364__374)}}, false, LarrayG__4, binaryE__353);
exports["binary="] = binaryE__353}
{
var binaryE_dispatcher__384;
false;
binaryE_dispatcher__384 = binaryE__353}
{
false;
binaryE__353 = Mmake_function__9("binaryE", function binaryE__386 (object1__387, object2__388)
{
var B385__389;
if ($T(not__17(object1__387)))
{B385__389 = not__17(object2__388)}
else
B385__389 = false;
if ($T(B385__389))
{return B385__389}
else
return binaryE_dispatcher__384(object1__387, object2__388)}, false);
exports["binary="] = binaryE__353}
{
var E__390;
false;
E__390 = Mmake_function__9("E", function E__391 (object__392)
{
var objects__393 = $SL.call(arguments, 1);
return compare__339(binaryE__353, object__392, objects__393)}, false);
exports["="] = E__390}
{
false;
binaryL__354 = Mmake_method__311("binaryL", function B394__395 (object1__396, object2__397)
{if ($T(binaryEE__29(type__296(object1__396), type__296(object2__397))))
{return (object1__396 < object2__397)}}, false, LobjectG__1, binaryL__354);
exports["binary<"] = binaryL__354}
{
false;
L__200 = Mmake_function__9("L", function L__398 (object__399)
{
var objects__400 = $SL.call(arguments, 1);
return compare__339(binaryL__354, object__399, objects__400)}, false);
exports["<"] = L__200}
{
var binaryLE__402;
false;
binaryLE__402 = Mmake_function__9("binaryLE", function binaryLE__403 (object1__404, object2__405)
{if ($T(object1__404))
{if ($T(object2__405))
{
var B401__406 = binaryL__354(object1__404, object2__405);
if ($T(B401__406))
{return B401__406}
else
return binaryE__353(object1__404, object2__405)}}}, false);
exports["binary<="] = binaryLE__402}
{
var LE__407;
false;
LE__407 = Mmake_function__9("LE", function LE__408 (object__409)
{
var objects__410 = $SL.call(arguments, 1);
return compare__339(binaryLE__402, object__409, objects__410)}, false);
exports["<="] = LE__407}
{
var binaryG__411;
false;
binaryG__411 = Mmake_function__9("binaryG", function binaryG__412 (object1__413, object2__414)
{if ($T(object1__413))
{if ($T(object2__414))
{if ($T(not__17(binaryL__354(object1__413, object2__414))))
{return not__17(binaryE__353(object1__413, object2__414))}}}}, false);
exports["binary>"] = binaryG__411}
{
var G__415;
false;
G__415 = Mmake_function__9("G", function G__416 (object__417)
{
var objects__418 = $SL.call(arguments, 1);
return compare__339(binaryG__411, object__417, objects__418)}, false);
exports[">"] = G__415}
{
var binaryGE__420;
false;
binaryGE__420 = Mmake_function__9("binaryGE", function binaryGE__421 (object1__422, object2__423)
{
var B419__424 = not__17(binaryL__354(object1__422, object2__423));
if ($T(B419__424))
{return B419__424}
else
return binaryE__353(object1__422, object2__423)}, false);
exports["binary>="] = binaryGE__420}
{
false;
GE__176 = Mmake_function__9("GE", function GE__425 (object__426)
{
var objects__427 = $SL.call(arguments, 1);
return compare__339(binaryGE__420, object__426, objects__427)}, false);
exports[">="] = GE__176}
{
var as_object__428;
false;
as_object__428 = Mmake_function__9("as_object", function as_object__429 (property_list__430)
{
var list__431 = slice__161(property_list__430),
result__432 = {};
while ($T(G__415(size__20(list__431), 0)))
{
var key__433 = pop__139(list__431),
value__434 = pop__139(list__431),
B435;
if ($T(instanceQ__300(key__433, LkeywordG__45)))
{B435 = key__433.name}
else
B435 = as_string__67(key__433);
key__433 = B435;
result__432[key__433] = value__434};
return result__432}, false);
exports["as-object"] = as_object__428}
{
var position__438;
false;
position__438 = Mmake_function__9("position", function position__439 (array__440, element__441)
{
var B437__442 = array__440,
B436__443 = element__441,
position__444 = B437__442.indexOf(B436__443);
if ($T(G__415(position__444, -1)))
{return position__444}}, false);
exports.position = position__438}
{
var last_position__447;
false;
last_position__447 = Mmake_function__9("last_position", function last_position__448 (array__449, element__450)
{
var B446__451 = array__449,
B445__452 = element__450,
position__453 = B446__451.lastIndexOf(B445__452);
if ($T(G__415(position__453, -1)))
{return position__453}}, false);
exports["last-position"] = last_position__447}
{
var as_uppercase__455;
false;
as_uppercase__455 = Mmake_function__9("as_uppercase", function as_uppercase__456 (string__457)
{
var B454__458 = string__457;
return B454__458.toUpperCase()}, false);
exports["as-uppercase"] = as_uppercase__455}
{
var as_lowercase__460;
false;
as_lowercase__460 = Mmake_function__9("as_lowercase", function as_lowercase__461 (string__462)
{
var B459__463 = string__462;
return B459__463.toLowerCase()}, false);
exports["as-lowercase"] = as_lowercase__460}
{
var join__466;
false;
join__466 = Mmake_function__9("join", function join__467 (array__468, string__469)
{
var B465__470 = array__468,
B464__471 = string__469;
return B465__470.join(B464__471)}, false);
exports.join = join__466}
{
var trim__473;
false;
trim__473 = Mmake_function__9("trim", function trim__474 (string__475)
{
var B472__476 = string__475;
return B472__476.trim()}, false);
exports.trim = trim__473}
{
var replace__480;
false;
replace__480 = Mmake_function__9("replace", function replace__481 (string__482, pattern__483, replacement__484)
{
var B479__485 = string__482,
B477__486 = pattern__483,
B478__487 = replacement__484;
return B479__485.replace(B477__486, B478__487)}, false);
exports.replace = replace__480}
{
var make_object__488;
false;
make_object__488 = Mmake_function__9("make_object", function make_object__489 ()
{
var key_values__490 = $SL.call(arguments, 0);
return as_object__428(key_values__490)}, false);
exports["make-object"] = make_object__488}
{
var LsymbolG__491;
false;
LsymbolG__491 = Mmake_class__38(LobjectG__1, {name:false,
module:false});
exports["<symbol>"] = LsymbolG__491}
{
var Msymbols__492;
false;
Msymbols__492 = {}}
{
var MMsymbol__493,
symbol__494;
false;
symbol__494 = Mmake_function__9("symbol", function symbol__495 (name__496, module__497)
{
var B498 = as_lowercase__460(name__496),
B499;
if ($T(module__497))
{B499 = as_lowercase__460(module__497)}
else
B499 = false;
return MMsymbol__493(B498, B499)}, false);
exports.symbol = symbol__494}
{
var get__500,
symbol_name__501;
false;
symbol_name__501 = Mmake_function__9("symbol_name", function symbol_name__502 (symbol__503)
{return get__500(symbol__503, "name")}, false);
exports["symbol-name"] = symbol_name__501}
{
var B514 = $K("name"),
B515 = $K("module"),
get_setter__506,
make__507;
false;
MMsymbol__493 = Mmake_function__9("MMsymbol", function MMsymbol__508 (name__509, module__510)
{
var B504__511 = module__510,
moduleT__512;
if ($T(B504__511))
{moduleT__512 = B504__511}
else
moduleT__512 = "";
var B505__513 = get__500(Msymbols__492, moduleT__512, name__509);
if ($T(B505__513))
{return B505__513}
else
return get_setter__506(Msymbols__492, moduleT__512, name__509, make__507(LsymbolG__491, B514, name__509, B515, module__510))}, false);
exports["%%symbol"] = MMsymbol__493}
$S = MMsymbol__493
{
false;
Mkeys__199 = Mmake_function__9("Mkeys", function Mkeys__517 (key_values__518, defaults__519)
{
var i__520 = 0;
while ($T(not__17((i__520 >= size__20(key_values__518)))))
{
(function B516__521 (i__522)
{
var key__523 = key_values__518[i__522],
value__524 = key_values__518[inc__23(i__522, 1)];
if ($T(instanceQ__300(key__523, LkeywordG__45)))
{return defaults__519[key__523.name] = value__524}})(i__520);
i__520 = inc__23(i__520, 2)};
false;
return defaults__519}, false);
exports["%keys"] = Mkeys__199}
{
var element__529,
choose__530,
object_properties__531,
find_key__532;
false;
find_key__532 = Mmake_function__9("find_key", function find_key__533 (array__534, predicate__535)
{
var B525__536 = $SL.call(arguments, 2),
B526__537 = Mkeys__199(B525__536, {skip:0,
failure:false,
"from-end?":false}),
skip__538 = B526__537.skip,
failure__539 = B526__537.failure,
from_endQ__540 = B526__537["from-end?"],
keys__541 = object_properties__531(array__534),
B546 = function B527__542 (index__543)
{return predicate__535(element__529(array__534, index__543))},
B547;
if ($T(from_endQ__540))
{B547 = reverse__191(keys__541)}
else
B547 = keys__541;
var satisfying_keys__544 = choose__530(B546, B547),
B528__545 = element__529(satisfying_keys__544, skip__538);
if ($T(B528__545))
{return B528__545}
else
return failure__539}, false);
exports["find-key"] = find_key__532}
{
var parse_integer__550;
false;
parse_integer__550 = Mmake_function__9("parse_integer", function parse_integer__551 (value__552)
{
var B548__553 = $SL.call(arguments, 1),
B549__554 = Mkeys__199(B548__553, {radix:10}),
radix__555 = B549__554.radix;
return parseInt(value__552, radix__555)}, false);
exports["parse-integer"] = parse_integer__550}
{
false;
element__529 = Mmake_function__9("element", function element__559 (array__560, index__561)
{
var B556__562 = $SL.call(arguments, 2),
B557__563 = Mkeys__199(B556__562, {"default":false}),
default__564 = B557__563["default"],
B558__565 = array__560[index__561];
if ($T(B558__565))
{return B558__565}
else
return default__564}, false);
exports.element = element__529}
{
var element_setter__566;
false;
element_setter__566 = Mmake_function__9("element_setter", function element_setter__567 (array__568, key__569, value__570)
{return array__568[key__569] = value__570}, true);
exports["element-setter"] = element_setter__566}
{
var replace_subsequence__573;
false;
replace_subsequence__573 = Mmake_function__9("replace_subsequence", function replace_subsequence__574 (target_array__575, insert_array__576)
{
var B571__577 = $SL.call(arguments, 2),
B572__578 = Mkeys__199(B571__577, {start:0,
end:size__20(target_array__575)}),
start__579 = B572__578.start,
end__580 = B572__578.end;
return concatenate__333(slice__161(target_array__575, 0, start__579), insert_array__576, slice__161(target_array__575, end__580))}, false);
exports["replace-subsequence"] = replace_subsequence__573}
{
var replace_subsequenceN__583;
false;
replace_subsequenceN__583 = Mmake_function__9("replace_subsequenceN", function replace_subsequenceN__584 (target_array__585, insert_array__586)
{
var B581__587 = $SL.call(arguments, 2),
B582__588 = Mkeys__199(B581__587, {start:0,
end:size__20(target_array__585)}),
start__589 = B582__588.start,
end__590 = B582__588.end,
rest__591 = Mconcat__57([start__589, (end__590 - start__589)], insert_array__586);
[].splice.apply(target_array__585, rest__591);
return target_array__585}, false);
exports["replace-subsequence!"] = replace_subsequenceN__583}
{
var removeN__598;
false;
removeN__598 = Mmake_function__9("removeN", function removeN__599 (array__600, value__601)
{
var B592__602 = $SL.call(arguments, 2),
B593__603 = Mkeys__199(B592__602, {test:EE__349}),
test__604 = B593__603.test,
B594__605 = find_key__532(array__600, curry__232(test__604, value__601));
if ($T(B594__605))
{
var key__606 = B594__605,
B597__607 = array__600,
B595__608 = key__606,
B596__609 = 1;
B597__607.splice(B595__608, B596__609)};
return array__600}, false);
exports["remove!"] = removeN__598}
{
var remove__612;
false;
remove__612 = Mmake_function__9("remove", function remove__613 (array__614, value__615)
{
var B610__616 = $SL.call(arguments, 2),
B611__617 = Mkeys__199(B610__616, {test:EE__349}),
test__618 = B611__617.test;
return removeN__598(slice__161(array__614), value__615, B223, test__618)}, false);
exports.remove = remove__612}
{
var interpose__620;
false;
interpose__620 = Mmake_function__9("interpose", function interpose__621 (separator__622, array__623)
{return reduce1__170(function B619__624 (a__625, b__626)
{return concatenate__333([a__625, separator__622], b__626)}, array__623)}, false);
exports.interpose = interpose__620}
{
false;
anyQ__367 = Mmake_function__9("anyQ", function anyQ__629 (function__630, values__631)
{
var value__632,
n__633 = size__20(values__631),
i__634 = 0;
while (true)
{
var B627__635 = value__632,
B638;
if ($T(B627__635))
{B638 = B627__635}
else
B638 = GE__176(i__634, n__633);
var B639 = not__17(B638);
if ($T(B639))
{
(function B628__636 (i__637)
{return value__632 = function__630(values__631[i__637])})(i__634);
i__634 = inc__23(i__634)}
else
break};
return value__632}, false);
exports["any?"] = anyQ__367}
{
var memberQ__643;
false;
memberQ__643 = Mmake_function__9("memberQ", function memberQ__644 (value__645, array__646)
{
var B640__647 = $SL.call(arguments, 2),
B641__648 = Mkeys__199(B640__647, {test:EE__349}),
test__649 = B641__648.test;
return anyQ__367(function B642__650 (other_value__651)
{return test__649(value__645, other_value__651)}, array__646)}, false);
exports["member?"] = memberQ__643}
{
var everyQ__653;
false;
everyQ__653 = Mmake_function__9("everyQ", function everyQ__654 (function__655, array__656)
{return not__17(anyQ__367(function B652__657 (value__658)
{return not__17(function__655(value__658))}, array__656))}, false);
exports["every?"] = everyQ__653}
{
var map__665;
false;
map__665 = Mmake_function__9("map", function map__666 (function__667)
{
var arrays__668 = $SL.call(arguments, 1),
result__669 = [];
if ($T(emptyQ__89(rest__94(arrays__668))))
{
var B659__670 = first__106(arrays__668),
B660__671,
B662__672,
B661__673 = [B659__670];
while (true)
{
var B663__674 = B660__671,
B678;
if ($T(B663__674))
{B678 = B663__674}
else
B678 = anyQ__367(emptyQ__89, B661__673);
var B679 = not__17(B678);
if ($T(B679))
{
var item__675 = first__106(B659__670);
(function B664__676 (item__677)
{return push_last__134(result__669, function__667(item__677))})(item__675);
B659__670 = rest__94(B659__670);
B661__673 = [B659__670]}
else
break};
B662__672}
else
while ($T(not__17(anyQ__367(emptyQ__89, arrays__668))))
{
push_last__134(result__669, apply__225(function__667, map__666(first__106, arrays__668)));
arrays__668 = map__666(rest__94, arrays__668)};
return result__669}, false);
exports.map = map__665}
{
var do__686;
false;
do__686 = Mmake_function__9("Rdo", function do__687 (function__688)
{
var arrays__689 = $SL.call(arguments, 1);
if ($T(emptyQ__89(rest__94(arrays__689))))
{
var B680__690 = first__106(arrays__689),
B681__691,
B683__692,
B682__693 = [B680__690];
while (true)
{
var B684__694 = B681__691,
B698;
if ($T(B684__694))
{B698 = B684__694}
else
B698 = anyQ__367(emptyQ__89, B682__693);
var B699 = not__17(B698);
if ($T(B699))
{
var item__695 = first__106(B680__690);
(function B685__696 (item__697)
{return function__688(item__697)})(item__695);
B680__690 = rest__94(B680__690);
B682__693 = [B680__690]}
else
break};
B683__692}
else
while ($T(not__17(anyQ__367(emptyQ__89, arrays__689))))
{
apply__225(function__688, map__665(first__106, arrays__689));
arrays__689 = map__665(rest__94, arrays__689)};
return false}, false);
exports["do"] = do__686}
{
false;
choose__530 = Mmake_function__9("choose", function choose__706 (function__707, array__708)
{
var result__709 = [],
B700__710 = array__708,
B701__711,
B703__712,
B702__713 = [B700__710];
while (true)
{
var B704__714 = B701__711,
B718;
if ($T(B704__714))
{B718 = B704__714}
else
B718 = anyQ__367(emptyQ__89, B702__713);
var B719 = not__17(B718);
if ($T(B719))
{
var element__715 = first__106(B700__710);
(function B705__716 (element__717)
{if ($T(function__707(element__717)))
{return push_last__134(result__709, element__717)}})(element__715);
B700__710 = rest__94(B700__710);
B702__713 = [B700__710]}
else
break};
B703__712;
return result__709}, false);
exports.choose = choose__530}
{
var copy_sequence__723;
false;
copy_sequence__723 = Mmake_function__9("copy_sequence", function copy_sequence__724 (array__725)
{
var B720__726 = $SL.call(arguments, 1),
B721__727 = Mkeys__199(B720__726, {start:0,
end:false}),
start__728 = B721__727.start,
end__729 = B721__727.end,
B722__730 = end__729,
end__731;
if ($T(B722__730))
{end__731 = B722__730}
else
end__731 = undefined;
return slice__161(array__725, start__728, end__731)}, false);
exports["copy-sequence"] = copy_sequence__723}
{
var initialize__732;
false;
make__507 = Mmake_function__9("make", function make__733 (type__734)
{
var arguments__735 = $SL.call(arguments, 1),
object__736 = new(type__734);
apply__225(initialize__732, object__736, arguments__735);
return object__736}, false);
exports.make = make__507}
{
false;
object_properties__531 = Mmake_function__9("object_properties", function object_properties__741 (object__742)
{
var B737__743 = $SL.call(arguments, 1),
B738__744 = Mkeys__199(B737__743, {"inherited?":false}),
inheritedQ__745 = B738__744["inherited?"],
result__746 = [];
if ($T(instanceQ__300(object__742, LarrayG__4)))
{
var B739__747 = size__20(object__742),
i__748 = 0;
while ($T(not__17(GE__176(i__748, B739__747))))
{
(function B740__749 (i__750)
{return push_last__134(result__746, i__750)})(i__748);
i__748 = (i__748 + 1)};
false}
else
{
var i__751;
for (i__751 in object__742) (inheritedQ__745||$HP.call(object__742, i__751)) &&result__746.push(i__751)};
return result__746}, false);
exports["object-properties"] = object_properties__531}
{
var object_values__752;
false;
object_values__752 = Mmake_function__9("object_values", function object_values__753 (object__754)
{return map__665(curry__232(get__500, object__754), object_properties__531(object__754))}, false);
exports["object-values"] = object_values__752}
{
false;
initialize__732 = Mmake_generic__310("initialize");
exports.initialize = initialize__732}
{
var B774 = $K("inherited?");
false;
initialize__732 = Mmake_method__311("initialize", function B755__760 (object__761)
{
var rest__762 = $SL.call(arguments, 1),
arguments__763 = as_object__428(rest__762),
B756__764 = type__296(object__761)["%properties"];
if ($T(B756__764))
{
var properties__765 = B756__764;
do__686(function B757__766 (key__767)
{
var B758__768 = hasQ__306(LobjectG__1.prototype, key__767),
B772;
if ($T(B758__768))
{B772 = B758__768}
else
B772 = hasQ__306(object__761, key__767);
var B773 = not__17(B772);
if ($T(B773))
{
var B759__769 = arguments__763[key__767],
value__771;
if ($T(B759__769))
{value__771 = B759__769}
else
{
var value__770 = properties__765[key__767];
if ($T(value__770))
{value__771 = value__770()}
else
value__771 = false};
return object__761[key__767] = value__771}}, object_properties__531(properties__765, B774, true))};
return object__761}, false, LobjectG__1, initialize__732);
exports.initialize = initialize__732}
{
var Lhash_symbolG__775;
false;
Lhash_symbolG__775 = Mmake_class__38(LobjectG__1, {name:false});
exports["<hash-symbol>"] = Lhash_symbolG__775}
{
var key__776 = make__507(Lhash_symbolG__775, B514, "key");
$KEY = key__776}
{
var rest__777 = make__507(Lhash_symbolG__775, B514, "rest");
$REST = rest__777}
{
false;
get__500 = Mmake_function__9("get", function get__784 (object__785)
{
var properties__786 = $SL.call(arguments, 1),
result__787,
B778__788 = properties__786,
B779__789,
B781__790,
B780__791 = [B778__788];
while (true)
{
var B782__792 = B779__789,
B796;
if ($T(B782__792))
{B796 = B782__792}
else
B796 = anyQ__367(emptyQ__89, B780__791);
var B797 = not__17(B796);
if ($T(B797))
{
var property__793 = first__106(B778__788);
if ($T(not__17(hasQ__306(object__785, property__793))))
{
B781__790 = result__787 = false;
B779__789 = true}
else
{
(function B783__794 (property__795)
{
result__787 = object__785[property__795];
return object__785 = result__787})(property__793);
B778__788 = rest__94(B778__788);
B780__791 = [B778__788]}}
else
break};
B781__790;
return result__787}, false);
exports.get = get__500}
{
false;
get_setter__506 = Mmake_function__9("get_setter", function get_setter__798 (object__799)
{
var propertiesSvalue__800 = $SL.call(arguments, 1);
if ($T(LE__407(size__20(propertiesSvalue__800), 2)))
{return object__799[first__106(propertiesSvalue__800)] = second__113(propertiesSvalue__800)}
else
{
var property__801 = first__106(propertiesSvalue__800),
object2__802;
if ($T(hasQ__306(object__799, property__801)))
{object2__802 = object__799[property__801]}
else
object2__802 = object__799[property__801] = make_object__488();
return apply__225(get_setter__798, object2__802, rest__94(propertiesSvalue__800))}}, true);
exports["get-setter"] = get_setter__506}
{
var split_with__804;
false;
split_with__804 = Mmake_function__9("split_with", function split_with__805 (function__806, array__807)
{
var a__808 = [],
b__809 = [];
do__686(function B803__810 (item__811)
{
var B812;
if ($T(function__806(item__811)))
{B812 = a__808}
else
B812 = b__809;
return push_last__134(B812, item__811)}, array__807);
return [a__808, b__809]}, false);
exports["split-with"] = split_with__804}
{
var as_hex_string__815;
false;
as_hex_string__815 = Mmake_function__9("as_hex_string", function as_hex_string__816 (number__817)
{
var B814__818 = number__817,
B813__819 = 16;
return B814__818.toString(B813__819)}, false);
exports["as-hex-string"] = as_hex_string__815}
{
var description__820;
false;
description__820 = Mmake_generic__310("description");
exports.description = description__820}
{
false;
description__820 = Mmake_method__311("description", function B821__822 (number__823)
{return ("" + number__823)}, false, LnumberG__3, description__820);
exports.description = description__820}
{
false;
description__820 = Mmake_method__311("description", function B824__829 (string__830)
{
var B828__831 = string__830,
B825__832 = "\"",
B826__833 = "\\\"",
B827__834 = "g",
escaped__835 = B828__831.replace(B825__832, B826__833, B827__834);
return ("\"" + escaped__835 + "\"")}, false, LstringG__2, description__820);
exports.description = description__820}
{
false;
description__820 = Mmake_method__311("description", function B836__837 (array__838)
{return ("(" + join__466(map__665(description__820, array__838), " ") + ")")}, false, LarrayG__4, description__820);
exports.description = description__820}
{
false;
description__820 = Mmake_method__311("description", function B839__840 (value__841)
{if ($T(value__841))
{return "#t"}
else
return "#f"}, false, LbooleanG__5, description__820);
exports.description = description__820}
{
false;
description__820 = Mmake_method__311("description", function B842__844 (symbol__845)
{
var B843__846 = get__500(symbol__845, "module"),
B848;
if ($T(B843__846))
{
var module__847 = B843__846;
B848 = concatenate__333(module__847, "::")}
else
B848 = "";
var B849 = symbol_name__501(symbol__845);
return (B848 + B849)}, false, LsymbolG__491, description__820);
exports.description = description__820}
{
false;
description__820 = Mmake_method__311("description", function B850__851 (keyword__852)
{return (symbol_name__501(keyword__852) + ":")}, false, LkeywordG__45, description__820);
exports.description = description__820}
{
false;
description__820 = Mmake_method__311("description", function B853__854 (symbol__855)
{return ("#" + symbol_name__501(symbol__855))}, false, Lhash_symbolG__775, description__820);
exports.description = description__820}
{
var min__856;
false;
min__856 = Math.min;
exports.min = min__856}
{
var max__857;
false;
max__857 = Math.max;
exports.max = max__857}
{
var abs__858;
false;
abs__858 = Math.abs;
exports.abs = abs__858}
{
var round__859;
false;
round__859 = Math.round;
exports.round = round__859}
{
var floor__860;
false;
floor__860 = Math.floor;
exports.floor = floor__860}
{
var ceil__861;
false;
ceil__861 = Math.ceil;
exports.ceil = ceil__861}
{
var sin__862;
false;
sin__862 = Math.sin;
exports.sin = sin__862}
{
var cos__863;
false;
cos__863 = Math.cos;
exports.cos = cos__863}
{
var atan2__864;
false;
atan2__864 = Math.atan2;
exports.atan2 = atan2__864}
{
var expt__865;
false;
expt__865 = Math.pow;
exports.expt = expt__865}
{
var sqrt__866;
false;
sqrt__866 = Math.sqrt;
exports.sqrt = sqrt__866}
{
var mod__867;
false;
mod__867 = Mmake_function__9("mod", function mod__868 (number1__869, number2__870)
{return (number1__869 % number2__870)}, false);
exports.mod = mod__867}
{
var TpiT__871;
false;
TpiT__871 = Math.PI;
exports["*pi*"] = TpiT__871}
{
var TradiantT__872;
false;
TradiantT__872 = (TpiT__871 / 180)}
{
var as_radiant__873;
false;
as_radiant__873 = Mmake_function__9("as_radiant", function as_radiant__874 (number__875)
{return (number__875 * TradiantT__872)}, false);
exports["as-radiant"] = as_radiant__873}
{
var signal__876;
false;
signal__876 = Mmake_function__9("signal", function signal__877 (error__878)
{
throw(error__878);
return false}, false);
exports.signal = signal__876}
{
var extendN__885;
false;
extendN__885 = Mmake_function__9("extendN", function extendN__886 (object1__887, object2__888)
{
var B879__889 = object_properties__531(object2__888),
B880__890,
B882__891,
B881__892 = [B879__889];
while (true)
{
var B883__893 = B880__890,
B897;
if ($T(B883__893))
{B897 = B883__893}
else
B897 = anyQ__367(emptyQ__89, B881__892);
var B898 = not__17(B897);
if ($T(B898))
{
var key__894 = first__106(B879__889);
(function B884__895 (key__896)
{return get_setter__506(object1__887, key__896, get__500(object2__888, key__896))})(key__894);
B879__889 = rest__94(B879__889);
B881__892 = [B879__889]}
else
break};
B882__891;
return object1__887}, false);
exports["extend!"] = extendN__885}
{
var as_property_list__907;
false;
as_property_list__907 = Mmake_function__9("as_property_list", function as_property_list__908 (object__909)
{
var B899__910 = $SL.call(arguments, 1),
B900__911 = Mkeys__199(B899__910, {"keywords?":false}),
keywordsQ__912 = B900__911["keywords?"],
result__913 = [],
B901__914 = object_properties__531(object__909),
B902__915,
B904__916,
B903__917 = [B901__914];
while (true)
{
var B905__918 = B902__915,
B923;
if ($T(B905__918))
{B923 = B905__918}
else
B923 = anyQ__367(emptyQ__89, B903__917);
var B924 = not__17(B923);
if ($T(B924))
{
var key__919 = first__106(B901__914);
(function B906__920 (key__921)
{
var B922;
if ($T(keywordsQ__912))
{B922 = keyword__48(as_string__67(key__921))}
else
B922 = key__921;
push_last__134(result__913, B922);
return push_last__134(result__913, get__500(object__909, key__921))})(key__919);
B901__914 = rest__94(B901__914);
B903__917 = [B901__914]}
else
break};
B904__916;
return result__913}, false);
exports["as-property-list"] = as_property_list__907}
{
var as_association_list__933;
false;
as_association_list__933 = Mmake_function__9("as_association_list", function as_association_list__934 (object__935)
{
var B925__936 = $SL.call(arguments, 1),
B926__937 = Mkeys__199(B925__936, {"keywords?":false}),
keywordsQ__938 = B926__937["keywords?"],
result__939 = [],
B927__940 = object_properties__531(object__935),
B928__941,
B930__942,
B929__943 = [B927__940];
while (true)
{
var B931__944 = B928__941,
B951;
if ($T(B931__944))
{B951 = B931__944}
else
B951 = anyQ__367(emptyQ__89, B929__943);
var B952 = not__17(B951);
if ($T(B952))
{
var key__945 = first__106(B927__940);
(function B932__946 (key__947)
{
var B948;
if ($T(keywordsQ__938))
{B948 = keyword__48(as_string__67(key__947))}
else
B948 = key__947;
var B949 = get__500(object__935, key__947),
B950 = [B948, B949];
return push_last__134(result__939, B950)})(key__945);
B927__940 = rest__94(B927__940);
B929__943 = [B927__940]}
else
break};
B930__942;
return result__939}, false);
exports["as-association-list"] = as_association_list__933}
{
var starts_withQ__955;
false;
starts_withQ__955 = Mmake_function__9("starts_withQ", function starts_withQ__956 (string__957, prefix__958)
{
var B954__959 = string__957,
B953__960 = prefix__958,
B961 = B954__959.indexOf(B953__960);
return binaryEE__29(B961, 0)}, false);
exports["starts-with?"] = starts_withQ__955}
{
var evenQ__962;
false;
evenQ__962 = Mmake_function__9("evenQ", function evenQ__963 (number__964)
{return binaryEE__29((number__964 % 2), 0)}, false);
exports["even?"] = evenQ__962}
{
var oddQ__965;
false;
oddQ__965 = Mmake_function__9("oddQ", function oddQ__966 (number__967)
{return binaryEE__29((number__967 % 2), 1)}, false);
exports["odd?"] = oddQ__965}
{
var group_by__969;
false;
group_by__969 = Mmake_function__9("group_by", function group_by__970 (predicate__971, items__972)
{return reduce__169(function B968__973 (result__974, item__975)
{
var key__976 = predicate__971(item__975);
if ($T(hasQ__306(result__974, key__976)))
{push_last__134(get__500(result__974, key__976), item__975)}
else
get_setter__506(result__974, key__976, [item__975]);
return result__974}, make_object__488(), items__972)}, false);
exports["group-by"] = group_by__969}
{
var wrap_object__977;
false;
wrap_object__977 = Mmake_function__9("wrap_object", function wrap_object__978 (object__979)
{
var rest__980 = $SL.call(arguments, 1),
result__981 = Object.create(object__979);
extendN__885(result__981, as_object__428(rest__980));
return result__981}, false)}
{
var unwrap_object__982;
false;
unwrap_object__982 = Mmake_function__9("unwrap_object", function unwrap_object__983 (object__984)
{return object__984.__proto__}, false)}
{
var update_with__987;
false;
update_with__987 = Mmake_function__9("update_with", function update_with__988 (fn__989, obj__990)
{
var objs__991 = $SL.call(arguments, 2);
return do__686(function B985__992 (obj2__993)
{return do__686(function B986__994 (property__995)
{
var value__996 = get__500(obj2__993, property__995),
B997;
if ($T(hasQ__306(obj__990, property__995)))
{B997 = fn__989(get__500(obj__990, property__995), value__996)}
else
B997 = value__996;
return get_setter__506(obj__990, property__995, B997)}, object_properties__531(obj2__993))}, objs__991)}, false);
exports["update-with"] = update_with__987}
{
var set_unionN__998,
as_set__999;
false;
as_set__999 = Mmake_function__9("as_set", function as_set__1000 (values__1001)
{
var set__1002 = [];
return set_unionN__998(set__1002, values__1001)}, false);
exports["as-set"] = as_set__999}
{
var set_addN__1003;
false;
set_addN__1003 = Mmake_function__9("set_addN", function set_addN__1004 (set__1005, object__1006)
{if ($T(not__17(memberQ__643(object__1006, set__1005))))
{return push_last__134(set__1005, object__1006)}}, false);
exports["set-add!"] = set_addN__1003}
{
var set_removeN__1007;
false;
set_removeN__1007 = removeN__598;
exports["set-remove!"] = set_removeN__1007}
{
false;
set_unionN__998 = Mmake_function__9("set_unionN", function set_unionN__1008 (set1__1009, set2__1010)
{
do__686(curry__232(set_addN__1003, set1__1009), set2__1010);
return set1__1009}, false);
exports["set-union!"] = set_unionN__998}
{
var set_subtractN__1011;
false;
set_subtractN__1011 = Mmake_function__9("set_subtractN", function set_subtractN__1012 (set1__1013, set2__1014)
{
do__686(curry__232(set_removeN__1007, set1__1013), set2__1014);
return set1__1013}, false);
exports["set-subtract!"] = set_subtractN__1011}
{
var chain_object__1015;
false;
chain_object__1015 = Mmake_function__9("chain_object", function chain_object__1016 (object1__1017, object2__1018)
{
object2__1018.__proto__ = object1__1017.__proto__;
object1__1017.__proto__ = object2__1018;
return object1__1017}, false);
exports["chain-object"] = chain_object__1015}
{
var unchain_object__1019;
false;
unchain_object__1019 = Mmake_function__9("unchain_object", function unchain_object__1020 (object__1021)
{
var B1022;
if ($T(object__1021.__proto__))
{B1022 = object__1021.__proto__.__proto__}
else
B1022 = false;
object__1021.__proto__ = B1022;
return object__1021}, false);
exports["unchain-object"] = unchain_object__1019}
{
false;
as_hex_string__815 = Mmake_function__9("as_hex_string", function as_hex_string__1025 (number__1026)
{
var B1024__1027 = number__1026,
B1023__1028 = 16;
return B1024__1027.toString(B1023__1028)}, false);
exports["as-hex-string"] = as_hex_string__815}
{
var make_plain_object__1029;
false;
make_plain_object__1029 = Mmake_function__9("make_plain_object", function make_plain_object__1030 ()
{return Object.create(null)}, false);
exports["make-plain-object"] = make_plain_object__1029}
{
var ___1031;
false;
___1031 = Mmake_function__9("_", function ___1032 (minuend__1033)
{
var subtrahends__1034 = $SL.call(arguments, 1);
if ($T(emptyQ__89(subtrahends__1034)))
{return -(minuend__1033)}
else
return reduce__169(binary___284, minuend__1033, subtrahends__1034)}, false);
exports["-"] = ___1031}
{
var P__1035;
false;
P__1035 = Mmake_function__9("P", function P__1036 ()
{
var numbers__1037 = $SL.call(arguments, 0);
if ($T(emptyQ__89(numbers__1037)))
{return 0}
else
return reduce1__170(binaryP__280, numbers__1037)}, false);
exports["+"] = P__1035}
{
var T__1038;
false;
T__1038 = Mmake_function__9("T", function T__1039 ()
{
var numbers__1040 = $SL.call(arguments, 0);
if ($T(emptyQ__89(numbers__1040)))
{return 1}
else
return reduce1__170(binaryT__288, numbers__1040)}, false);
exports["*"] = T__1038}
{
var S__1041;
false;
S__1041 = Mmake_function__9("S", function S__1042 (numerator__1043)
{
var denominators__1044 = $SL.call(arguments, 1);
if ($T(emptyQ__89(denominators__1044)))
{return (1 / numerator__1043)}
else
return reduce__169(binaryS__292, numerator__1043, denominators__1044)}, false);
exports["/"] = S__1041}
