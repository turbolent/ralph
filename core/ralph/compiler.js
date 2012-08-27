var B1507 = require("ralph/core")
{
var B4921,
B4922,
B4923,
B4924,
B4925,
B4926,
B4927,
B4928,
B4929,
B4930,
B4931,
B4932,
B4933;
B4921 = require("ralph/stream");
B4922 = require("ralph/format");
B4923 = require("ralph/reader");
B4924 = require("ralph/file-system");
B4925 = require("ralph/compiler/utilities");
B4926 = require("ralph/compiler/alpha");
B4927 = require("ralph/compiler/define-lifting");
B4928 = require("ralph/compiler/free-variables");
B4929 = require("ralph/compiler/anf");
B4930 = require("ralph/compiler/statements");
B4931 = require("ralph/compiler/tco");
B4932 = require("ralph/compiler/flattening");
B4933 = require("ralph/compiler/javascript")}
var B4934 = B1507["%make-function"],
B4935 = B1507.symbol,
B4936 = B1507.concatenate,
B4937 = B1507["symbol-name"],
B4938 = B4934("transform_setter_identifier", function transform_setter_identifier__4939 (identifier__4940)
{return B4935(B4936(B4937(identifier__4940), "-setter"), false)}, false)
var B4941 = B4925["setter-identifier?"],
B4942 = B1507.second,
B4943 = B4934("identifier_name", function identifier_name__4944 (identifier__4945)
{
var B4949;
if ($T(B4941(identifier__4945)))
{
var sequence__4947 = identifier__4945,
B4948 = sequence__4947[1];
B4949 = B4938(B4948)}
else
B4949 = identifier__4945;
return B4937(B4949)}, false)
var B4950 = B1507["make-object"],
B4951 = B4950()
{
var B4956 = B1507["%make-class"],
B4957 = B1507["<object>"],
B4958 = B4956(B4957, {name:false,
"native?":false,
exports:function B4959 ()
{return []},
imports:function B4960 ()
{return []},
dependencies:function B4961 ()
{return []},
inline:function B4962 ()
{return []}});
exports["<module>"] = B4958}
{
var B4969 = B1507["make-plain-object"],
B4970 = B4956(B4957, {module:false,
macros:function B4971 ()
{return B4969()},
"symbol-macros":function B4972 ()
{return B4969()},
identifiers:function B4973 ()
{return B4950()},
"defined?":function B4974 ()
{return B4950()},
lifted:function B4975 ()
{return B4950()},
"import-identifiers":function B4976 ()
{return B4969()}});
exports["<environment>"] = B4970}
var B4977 = B1507["get-setter"],
B4978 = B4934("bindN", function bindN__4979 (env__4980, identifier__4981)
{return B4977(env__4980, "bound?", B4937(identifier__4981), true)}, false)
var B4982 = B4934("unbindN", function unbindN__4983 (env__4984, identifier__4985)
{return B4977(env__4984, "bound?", B4937(identifier__4985), false)}, false)
var B4986 = B4950()
var B4987 = B4925["expression?"],
B4988 = B1507.get,
B4989 = B1507.first,
B4990 = B4934("find_special_form", function find_special_form__4991 (form__4992, env__4993)
{if ($T(B4987(form__4992)))
{
var sequence__4995 = form__4992,
B4996 = sequence__4995[0],
B4997 = B4937(B4996);
return B4988(B4986, B4997)}}, false)
{
var B5009 = $S("%method"),
B4999 = B1507["do"],
B5000 = B1507.curry,
B5001;
B4986["%method"] = function B5002 (env__5003, name__5004, arguments__5005, body__5006)
{
var identifiers__5007 = B4936([name__5004], arguments__5005);
B4999(B5000(B4978, env__5003), identifiers__5007);
var expanded_body__5008 = B5001(body__5006, env__5003);
B4999(B5000(B4982, env__5003), arguments__5005);
return [B5009, name__5004, arguments__5005, expanded_body__5008]}}
{
var B5015 = $S("%set");
B4986["%set"] = function B5011 (env__5012, identifier__5013, value__5014)
{return [B5015, identifier__5013, B5001(value__5014, env__5012)]}}
{
var B5021 = $S("define");
B4986.define = function B5017 (env__5018, identifier__5019, value__5020)
{
B4978(env__5018, identifier__5019);
return [B5021, identifier__5019, B5001(value__5020, env__5018)]}}
{
var B5031 = $S("%bind");
B4986["%bind"] = function B5023 (env__5024, binding__5025, body__5026)
{
var var__5027 = binding__5025[0],
value__5028 = binding__5025[1],
expanded_value__5029 = B5001(value__5028, env__5024);
B4978(env__5024, var__5027);
var result__5030 = [B5031, [var__5027, expanded_value__5029], B5001(body__5026, env__5024)];
B4982(env__5024, var__5027);
return result__5030}}
{
var B5032 = B4950();
exports["*core-macros*"] = B5032}
{
var B5063 = $REST,
B5064 = $KEY,
B5065 = $K("end"),
B5066 = $K("start"),
B5035 = B1507["find-key"],
B5036 = B1507["="],
B5037 = B1507["copy-sequence"],
B5038 = B1507.size,
B5039 = B1507.element,
B5040 = B1507.inc,
B5041 = B4934("analyze_lambda_list", function analyze_lambda_list__5042 (list__5043)
{
var position__5044 = function position__5045 (symbol__5046)
{return B5035(list__5043, B5000(B5036, symbol__5046))},
rest__5047 = position__5044(B5063),
key__5048 = position__5044(B5064),
B5049 = rest__5047,
B5057;
if ($T(B5049))
B5057 = B5049
else
{
var B5050 = key__5048;
if ($T(B5050))
B5057 = B5050
else
{
var object__5052 = list__5043;
B5057 = ((object__5052 || false).length || 0)}};
var B5058 = B5037(list__5043, B5065, B5057),
B5060;
if ($T(rest__5047))
{
var number__5054 = rest__5047,
B5059 = (number__5054 + 1);
B5060 = B5039(list__5043, B5059)}
else
B5060 = false;
var B5062;
if ($T(key__5048))
{
var number__5056 = key__5048,
B5061 = (number__5056 + 1);
B5062 = B5037(list__5043, B5066, B5061)}
else
B5062 = false;
return [B5058, B5060, B5062]}, false);
exports["analyze-lambda-list"] = B5041}
var B5068 = B1507.reduce,
B5069 = B4934("wrap", function wrap__5070 (form__5071)
{
var wrappers__5072 = $SL.call(arguments, 1);
return B5068(function B5073 (result__5074, wrapper__5075)
{return wrapper__5075(result__5074)}, form__5071, wrappers__5072)}, false)
var B5189 = $S("bind-properties"),
B5190 = $S("%keys"),
B5191 = $S("%object"),
B5192 = $S("bind"),
B5193 = $S("%native-call"),
trueQ = B1507["true?"],
B5082 = B1507["empty?"],
B5083 = B1507.map,
B5084 = B1507.reduce1,
B5085 = B1507["instance?"],
B5086 = B1507["<array>"],
B5087 = B1507.not,
B5088 = B4925["generate-symbol"],
B5089 = B4934("wrap_restSkeys", function wrap_restSkeys__5090 (body__5091, all__5092, required__5093, rest__5094, key__5095)
{
var restQ__5096 = rest__5094,
B5097 = rest__5094,
rest__5098;
if ($T(B5097))
rest__5098 = B5097
else
{
var sequence__5122 = key__5095,
B5123 = sequence__5122,
B5124 = ((B5123 || false).length || 0),
B5125 = 0,
value__5126 = (B5124 === B5125),
B5171 = !(trueQ(value__5126));
if ($T(B5171))
rest__5098 = B5088()
else
rest__5098 = false};
return B5069(body__5091, function B5099 (body__5100)
{
var sequence__5137 = key__5095,
B5138 = sequence__5137,
B5139 = ((B5138 || false).length || 0),
B5140 = 0,
B5172 = (B5139 === B5140);
if ($T(B5172))
return body__5100
else
{
var key_values__5103 = B5083(function B5101 (binding__5102)
{if ($T(B5085(binding__5102, B5086)))
return binding__5102
else
return [binding__5102, false]}, key__5095),
B5173 = B5189,
B5174 = B5083(B4989, key_values__5103),
B5175 = B5190,
B5176 = [B5191],
function__5149 = B4936,
values__5150 = B5083(function B5104 (key_value__5105)
{
var key__5106 = key_value__5105[0],
value__5107 = key_value__5105[1];
return [B4937(key__5106), value__5107]}, key_values__5103),
B5151 = values__5150,
B5177 = B5151[0],
B5152 = values__5150,
B5178 = B5152.slice(1),
B5179 = B5068(function__5149, B5177, B5178),
B5180 = B4936(B5176, B5179),
B5181 = [B5175, rest__5098, B5180];
return [B5173, B5174, B5181, body__5100]}}, function B5108 (body__5109)
{
var B5110 = restQ__5096,
B5182;
if ($T(B5110))
B5182 = B5110
else
{
var sequence__5164 = key__5095,
B5165 = sequence__5164,
B5166 = ((B5165 || false).length || 0),
B5167 = 0,
value__5168 = (B5166 === B5167);
B5182 = !(trueQ(value__5168))};
if ($T(B5182))
{
var B5183 = B5192,
B5184 = B5193,
object__5170 = required__5093,
B5185 = ((object__5170 || false).length || 0),
B5186 = [B5184, "$SL.call", all__5092, B5185],
B5187 = [rest__5098, B5186],
B5188 = [B5187];
return [B5183, B5188, body__5109]}
else
return body__5109})}, false)
{
var B5195 = B4925["maybe-begin"];
B5032.begin = function B5196 (____5197)
{
var expressions__5198 = $SL.call(arguments, 1);
return B5195(expressions__5198)}}
var B5209 = $S("%all-arguments"),
B5200 = B4934("named_method", function named_method__5201 (name__5202, arguments__5203, body__5204)
{
var B5205 = B5041(arguments__5203),
required__5206 = B5205[0],
rest__5207 = B5205[1],
key__5208 = B5205[2];
return [B5009, name__5202, required__5206, B5089(body__5204, B5209, required__5206, rest__5207, key__5208)]}, false)
B5032.method = function B5211 (____5212, arguments__5213)
{
var body__5214 = $SL.call(arguments, 2);
return B5200(B5088(), arguments__5213, B5195(body__5214))}
{
var B5217 = B1507["<symbol>"],
B5218 = B1507.reverse;
B5032.bind = function B5219 (____5220, bindings__5221)
{
var body__5222 = $SL.call(arguments, 2),
sequence__5236 = bindings__5221,
B5237 = sequence__5236,
B5238 = ((B5237 || false).length || 0),
B5239 = 0,
B5240 = (B5238 === B5239);
if ($T(B5240))
return B5195(body__5222)
else
return B5068(function B5223 (body__5224, binding__5225)
{
var B5241 = B5031,
B5242;
if ($T(B5085(binding__5225, B5217)))
B5242 = [binding__5225, false]
else
B5242 = binding__5225;
return [B5241, B5242, body__5224]}, B5195(body__5222), B5218(bindings__5221))}}
{
var B5249 = $S("%if");
B5032["if"] = function B5244 (____5245, test__5246, then__5247, else__5248)
{return [B5249, test__5246, then__5247, else__5248]}}
{
var B5278 = $S("%get-property"),
trueQ = B1507["true?"],
B5251 = B1507["binary=="],
B5252 = B1507.rest;
B5032["set!"] = function B5253 (____5254, place__5255)
{
var values__5256 = $SL.call(arguments, 2),
B5271;
if ($T(B5085(place__5255, B5086)))
{
var sequence__5261 = place__5255,
object1__5262 = sequence__5261[0],
object2__5263 = B5278,
value__5264 = (object1__5262 === object2__5263);
B5271 = !(trueQ(value__5264))}
else
B5271 = false;
if ($T(B5271))
{
var sequence__5266 = place__5255,
B5272 = sequence__5266[0],
B5273 = B4938(B5272),
B5274 = [B5273],
sequence__5268 = place__5255,
B5275 = sequence__5268.slice(1);
return B4936(B5274, B5275, values__5256)}
else
{
var B5276 = B5015,
sequence__5270 = values__5256,
B5277 = sequence__5270[0];
return [B5276, place__5255, B5277]}}}
{
var B5301 = $S("set!"),
B5302 = $S("parallel-set!");
B5032["parallel-set!"] = function B5280 (____5281, var__5282, value__5283)
{
var clauses__5284 = $SL.call(arguments, 3),
sequence__5296 = clauses__5284,
B5297 = sequence__5296,
B5298 = ((B5297 || false).length || 0),
B5299 = 0,
B5300 = (B5298 === B5299);
if ($T(B5300))
return [B5301, var__5282, value__5283]
else
{
var temp__5285 = B5088();
return [B5192, [[temp__5285, value__5283]], B4936([B5302], clauses__5284), [B5301, var__5282, temp__5285]]}}}
{
var B5342 = $K("else"),
B5343 = $S("if"),
B5344 = $S("cond"),
trueQ = B1507["true?"];
B5032.cond = function B5305 (____5306)
{
var cases__5307 = $SL.call(arguments, 1),
sequence__5323 = cases__5307,
B5324 = sequence__5323,
B5325 = ((B5324 || false).length || 0),
B5326 = 0,
value__5327 = (B5325 === B5326),
B5336 = !(trueQ(value__5327));
if ($T(B5336))
{
var sequence__5329 = cases__5307,
B5308 = sequence__5329[0],
test__5309 = B5308[0],
then__5310 = $SL.call(B5308, 1),
then__5311 = B5195(then__5310),
object1__5332 = test__5309,
object2__5333 = B5342,
B5337 = (object1__5332 === object2__5333);
if ($T(B5337))
return then__5311
else
{
var B5338 = B5343,
B5339 = [B5344],
sequence__5335 = cases__5307,
B5340 = sequence__5335.slice(1),
B5341 = B4936(B5339, B5340);
return [B5338, test__5309, then__5311, B5341]}}}}
B5032.when = function B5346 (____5347, test__5348)
{
var body__5349 = $SL.call(arguments, 2);
return [B5343, test__5348, B5195(body__5349), false]}
{
var B5355 = $S("not");
B5032.unless = function B5351 (____5352, test__5353)
{
var body__5354 = $SL.call(arguments, 2);
return [B5343, [B5355, test__5353], B5195(body__5354), false]}}
{
var B5385 = $S("when"),
B5386 = $S("and");
B5032.and = function B5358 (____5359)
{
var values__5360 = $SL.call(arguments, 1),
object__5363 = values__5360,
B5361 = ((object__5363 || false).length || 0),
object1__5366 = B5361,
object2__5367 = 0,
B5378 = (object1__5366 === object2__5367);
if ($T(B5378))
return true
else
{
var object1__5370 = B5361,
object2__5371 = 1,
B5379 = (object1__5370 === object2__5371);
if ($T(B5379))
{
var sequence__5373 = values__5360;
return sequence__5373[0]}
else
{
var B5380 = B5385,
sequence__5375 = values__5360,
B5381 = sequence__5375[0],
B5382 = [B5386],
sequence__5377 = values__5360,
B5383 = sequence__5377.slice(1),
B5384 = B4936(B5382, B5383);
return [B5380, B5381, B5384]}}}}
{
var B5421 = $S("or");
B5032.or = function B5389 (____5390)
{
var values__5391 = $SL.call(arguments, 1),
object__5395 = values__5391,
B5392 = ((object__5395 || false).length || 0),
object1__5398 = B5392,
object2__5399 = 0,
B5410 = (object1__5398 === object2__5399);
if ($T(B5410))
return false
else
{
var object1__5402 = B5392,
object2__5403 = 1,
B5411 = (object1__5402 === object2__5403);
if ($T(B5411))
{
var sequence__5405 = values__5391;
return sequence__5405[0]}
else
{
var value__5393 = B5088(),
B5412 = B5192,
sequence__5407 = values__5391,
B5413 = sequence__5407[0],
B5414 = [value__5393, B5413],
B5415 = [B5414],
B5416 = B5343,
B5417 = [B5421],
sequence__5409 = values__5391,
B5418 = sequence__5409.slice(1),
B5419 = B4936(B5417, B5418),
B5420 = [B5416, value__5393, value__5393, B5419];
return [B5412, B5415, B5420]}}}}
B5032["if-bind"] = function B5423 (____5424, binding__5425, then__5426, else__5427)
{
var var__5428 = binding__5425[0],
value__5429 = binding__5425[1],
temp__5430 = B5088();
return [B5192, [[temp__5430, value__5429]], [B5343, temp__5430, [B5192, [[var__5428, temp__5430]], then__5426], else__5427]]}
{
var B5436 = $S("%while");
B5032["while"] = function B5432 (____5433, test__5434)
{
var body__5435 = $SL.call(arguments, 2);
return [B5436, test__5434, B5195(body__5435)]}}
{
var B5442 = $S("while");
B5032.until = function B5438 (____5439, test__5440)
{
var body__5441 = $SL.call(arguments, 2);
return B4936([B5442, [B5355, test__5440]], body__5441)}}
{
var B5463 = $S("for"),
B5464 = $S("+"),
B5465 = $S(">=");
B5032.dotimes = function B5445 (____5446, binding__5447)
{
var body__5448 = $SL.call(arguments, 2),
temp__5449 = B5088(),
var__5450 = binding__5447[0],
count__5451 = binding__5447[1],
result__5452 = binding__5447[2],
B5454 = B5192,
B5455 = [[temp__5449, count__5451]],
B5456 = B5463,
B5457 = [[var__5450, 0, [B5464, var__5450, 1]]],
B5458 = [B5465, var__5450, temp__5449],
B5453 = result__5452,
B5459;
if ($T(B5453))
B5459 = B5453
else
B5459 = false;
var B5460 = [B5458, B5459],
B5461 = [B5456, B5457, B5460],
B5462 = B4936(B5461, body__5448);
return [B5454, B5455, B5462]}}
{
var B5574 = $S("method"),
B5575 = $S("begin"),
trueQ = B1507["true?"],
B5474 = B1507["any?"],
B5475 = B1507["push-last"],
B5476 = B1507.slice,
B5477 = B1507.third;
B5032["for"] = function B5478 (____5479, clauses__5480, end__5481)
{
var body__5482 = $SL.call(arguments, 3),
init_clauses__5483 = [],
next_clauses__5484 = [],
vars__5485 = B5083(B4989, clauses__5480),
B5486 = clauses__5480,
B5487,
B5488,
B5489 = [B5486];
while (true)
{
var B5490 = B5487,
value__5496;
if ($T(B5490))
value__5496 = B5490
else
value__5496 = B5474(B5082, B5489);
var B5560 = !(trueQ(value__5496));
if ($T(B5560))
{
var sequence__5498 = B5486,
clause__5491 = sequence__5498[0];
(function B5492 (clause__5493)
{
var array__5507 = init_clauses__5483,
array__5504 = clause__5493,
start__5505 = 0,
end__5506 = 2,
value__5508 = array__5504.slice(start__5505, end__5506);
array__5507.push(value__5508);
array__5507;
var array__5513 = next_clauses__5484,
sequence__5512 = clause__5493,
value__5514 = sequence__5512[0];
array__5513.push(value__5514);
array__5513;
var array__5519 = next_clauses__5484,
sequence__5518 = clause__5493,
value__5520 = sequence__5518[2];
array__5519.push(value__5520);
return array__5519})(clause__5491);
var sequence__5522 = B5486,
B5559 = sequence__5522.slice(1);
B5486 = B5559;
B5489 = [B5486]}
else
break};
B5488;
var B5561 = B5192,
B5562 = B5442,
sequence__5533 = end__5481,
B5534 = sequence__5533,
B5535 = ((B5534 || false).length || 0),
B5536 = 0,
B5494 = (B5535 === B5536),
B5565;
if ($T(B5494))
B5565 = B5494
else
{
var B5563 = B5355,
sequence__5538 = end__5481,
B5564 = sequence__5538[0];
B5565 = [B5563, B5564]};
var B5566 = B4936([B4936([B5574, vars__5485], body__5482)], vars__5485),
B5567 = B4936([B5302], next_clauses__5484),
B5568 = [B5562, B5565, B5566, B5567],
B5569 = B4936(B5568),
sequence__5551 = end__5481,
sequence__5552 = sequence__5551.slice(1),
B5553 = sequence__5552,
B5554 = ((B5553 || false).length || 0),
B5555 = 0,
value__5556 = (B5554 === B5555),
B5570 = !(trueQ(value__5556)),
B5573;
if ($T(B5570))
{
var B5571 = [B5575],
sequence__5558 = end__5481,
B5572 = sequence__5558.slice(1);
B5573 = B4936(B5571, B5572)}
else
B5573 = false;
return [B5561, init_clauses__5483, B5569, B5573]}}
{
var B5660 = $S("rest"),
B5661 = $S("%array"),
B5662 = $S("until"),
B5663 = $S("any?"),
B5664 = $S("empty?"),
B5665 = $S("first");
B5032["for-each"] = function B5582 (____5583, clauses__5584, end__5585)
{
var body__5586 = $SL.call(arguments, 3),
clauses__5589 = B5083(function B5587 (clause__5588)
{return B4936([B5088()], clause__5588)}, clauses__5584),
endQ__5590 = B5088(),
values__5591 = B5088(),
result__5592 = B5088(),
B5632 = B5575,
vars__5593 = B5083(B4942, clauses__5589),
B5633 = B4936([B4936([B5574, vars__5593], body__5586)], vars__5593),
B5634 = [B5632, B5633],
B5640 = B5083(function B5594 (clause__5595)
{
var B5635 = B5301,
sequence__5611 = clause__5595,
B5636 = sequence__5611[0],
B5637 = B5660,
sequence__5613 = clause__5595,
B5638 = sequence__5613[0],
B5639 = [B5637, B5638];
return [B5635, B5636, B5639]}, clauses__5589),
B5641 = [[B5301, values__5591, B4936([B5661], B5083(B4989, clauses__5589))]],
body__5596 = B4936(B5634, B5640, B5641),
B5642 = B5192,
B5643 = B4936(B5083(function B5597 (clause__5598)
{
var temp__5599 = clause__5598[0],
var__5600 = clause__5598[1],
values__5601 = clause__5598[2];
return [temp__5599, values__5601]}, clauses__5589), [[endQ__5590, false], [result__5592, false], [values__5591, B4936([B5661], B5083(B4989, clauses__5589))]]),
B5644 = B5662,
B5645 = [B5421, endQ__5590, [B5663, B5664, values__5591]],
B5646 = B5192,
B5647 = B5083(function B5602 (clause__5603)
{
var temp__5604 = clause__5603[0],
var__5605 = clause__5603[1],
values__5606 = clause__5603[2];
return [var__5605, [B5665, temp__5604]]}, clauses__5589),
sequence__5615 = end__5585,
B5607 = sequence__5615[0],
B5657;
if ($T(B5607))
{
var end_test__5608 = B5607,
B5648 = B5343,
B5649 = B5575,
B5650 = B5301,
sequence__5617 = end__5585,
results__5609 = sequence__5617.slice(1),
sequence__5628 = results__5609,
B5629 = sequence__5628,
B5630 = ((B5629 || false).length || 0),
B5631 = 0,
B5651 = (B5630 === B5631),
B5652;
if ($T(B5651))
B5652 = [false]
else
B5652 = results__5609;
var B5653 = B5195(B5652),
B5654 = [B5650, result__5592, B5653],
B5655 = [B5301, endQ__5590, true],
B5656 = [B5649, B5654, B5655];
B5657 = [B5648, end_test__5608, B5656, body__5596]}
else
B5657 = body__5596;
var B5658 = [B5646, B5647, B5657],
B5659 = [B5644, B5645, B5658];
return [B5642, B5643, B5659, result__5592]}}
B5032["bind-properties"] = function B5668 (____5669, properties__5670, object__5671)
{
var body__5672 = $SL.call(arguments, 3),
objectT__5673 = B5088();
return B4936([B5192, B4936([[objectT__5673, object__5671]], B5083(function B5674 (property__5675)
{return [property__5675, [B5278, objectT__5673, B4937(property__5675)]]}, properties__5670))], body__5672)}
B5032.select = function B5678 (____5679, value__5680, test__5681)
{
var cases__5682 = $SL.call(arguments, 3),
valueT__5683 = B5088(),
testT__5684;
if ($T(B5085(test__5681, B5217)))
testT__5684 = test__5681
else
testT__5684 = B5088();
var test_expression__5685 = function test_expression__5686 (test_value__5687)
{return [testT__5684, valueT__5683, test_value__5687]},
B5696 = B5192,
B5697 = [[valueT__5683, value__5680]],
B5698;
if ($T(B5085(test__5681, B5217)))
B5698 = []
else
B5698 = [[testT__5684, test__5681]];
var B5699 = B4936(B5697, B5698),
B5701 = B4936([B5344], B5083(function B5688 (case__5689)
{
var tests__5690 = case__5689[0],
then__5691 = $SL.call(case__5689, 1),
object1__5694 = tests__5690,
object2__5695 = B5342,
B5700 = (object1__5694 === object2__5695);
if ($T(B5700))
return case__5689
else
return B4936([B4936([B5421], B5083(test_expression__5685, tests__5690))], then__5691)}, cases__5682));
return [B5696, B5699, B5701]}
var destructure__5705,
B5704 = B4934("destructure", function destructure__5705 (bindings__5706, values__5707, body__5708)
{if ($T(B5085(values__5707, B5217)))
{
var B5709 = B5041(bindings__5706),
required__5710 = B5709[0],
rest__5711 = B5709[1],
key__5712 = B5709[2],
object__5719 = required__5710,
i__5713 = ((object__5719 || false).length || 0);
return B5068(function B5714 (body__5715, binding__5716)
{
i__5713 = (i__5713 - 1);
if ($T(B5085(binding__5716, B5217)))
return [B5192, [[binding__5716, [B5278, values__5707, i__5713]]], body__5715]
else
return destructure__5705(binding__5716, [B5278, values__5707, i__5713], body__5715)}, B5089(body__5708, values__5707, required__5710, rest__5711, key__5712), B5218(required__5710))}
else
{
var var__5717 = B5088();
return [B5192, [[var__5717, values__5707]], destructure__5705(bindings__5706, var__5717, body__5708)]}}, false)
B5032["destructuring-bind"] = function B5721 (____5722, bindings__5723, values__5724)
{
var body__5725 = $SL.call(arguments, 3);
return B5704(bindings__5723, values__5724, B4936([B5575], body__5725))}
B5032["bind-methods"] = function B5728 (____5729, bindings__5730)
{
var body__5731 = $SL.call(arguments, 2);
return B4936([B5192, B5083(B4989, bindings__5730)], B5083(function B5732 (binding__5733)
{
var identifier__5734 = binding__5733[0],
arguments__5735 = binding__5733[1],
body__5736 = $SL.call(binding__5733, 2);
return [B5301, identifier__5734, B5200(identifier__5734, arguments__5735, B5195(body__5736))]}, bindings__5730), body__5731)}
B5032["inc!"] = function B5739 (____5740, object__5741, value__5742)
{
var B5744 = B5301,
B5745 = B5464,
B5743 = value__5742,
B5746;
if ($T(B5743))
B5746 = B5743
else
B5746 = 1;
var B5747 = [B5745, object__5741, B5746];
return [B5744, object__5741, B5747]}
{
var B5759 = $S("-");
B5032["dec!"] = function B5750 (____5751, object__5752, value__5753)
{
var B5755 = B5301,
B5756 = B5759,
B5754 = value__5753,
B5757;
if ($T(B5754))
B5757 = B5754
else
B5757 = 1;
var B5758 = [B5756, object__5752, B5757];
return [B5755, object__5752, B5758]}}
{
var B5779 = $S("%plus");
B5032["+"] = function B5761 (____5762)
{
var values__5763 = $SL.call(arguments, 1),
sequence__5774 = values__5763,
B5775 = sequence__5774,
B5776 = ((B5775 || false).length || 0),
B5777 = 0,
B5778 = (B5776 === B5777);
if ($T(B5778))
return 0
else
return B4936([B5779], values__5763)}}
{
var B5800 = $S("%minus");
B5032["-"] = function B5781 (____5782, minuend__5783)
{
var subtrahends__5784 = $SL.call(arguments, 2),
sequence__5795 = subtrahends__5784,
B5796 = sequence__5795,
B5797 = ((B5796 || false).length || 0),
B5798 = 0,
B5799 = (B5797 === B5798);
if ($T(B5799))
return [B5193, "-", minuend__5783]
else
return B4936([B5800, minuend__5783], subtrahends__5784)}}
{
var B5820 = $S("%times");
B5032["*"] = function B5802 (____5803)
{
var values__5804 = $SL.call(arguments, 1),
sequence__5815 = values__5804,
B5816 = sequence__5815,
B5817 = ((B5816 || false).length || 0),
B5818 = 0,
B5819 = (B5817 === B5818);
if ($T(B5819))
return 1
else
return B4936([B5820], values__5804)}}
{
var B5841 = $S("%divide");
B5032["/"] = function B5822 (____5823, numerator__5824)
{
var denominators__5825 = $SL.call(arguments, 2),
sequence__5836 = denominators__5825,
B5837 = sequence__5836,
B5838 = ((B5837 || false).length || 0),
B5839 = 0,
B5840 = (B5838 === B5839);
if ($T(B5840))
return [B5841, 1, numerator__5824]
else
return B4936([B5841, numerator__5824], denominators__5825)}}
{
var B5845 = $S("next-method"),
B5846 = $S("%native");
B5032["call-next-method"] = function B5843 (____5844)
{return [[B5278, B5845, "apply"], [B5846, "null"], B5209]}}
var B5850 = $S("%symbol"),
transform_quoted__5848,
B5847 = B4934("transform_quoted", function transform_quoted__5848 (form__5849)
{if ($T(B5085(form__5849, B5086)))
return B4936([B5661], B5083(transform_quoted__5848, form__5849))
else
if ($T(B5085(form__5849, B5217)))
return [B5850, B4937(form__5849)]
else
return form__5849}, false)
B5032.quote = function B5852 (____5853, exp__5854)
{return B5847(exp__5854)}
var trueQ = B1507["true?"],
transform_backquoted__5857,
B5855 = B1507.rcurry,
B5856 = B4934("transform_backquoted", function transform_backquoted__5857 (form__5858, env__5859)
{if ($T(B5085(form__5858, B5086)))
{
var sequence__5871 = form__5858,
B5872 = sequence__5871,
B5873 = ((B5872 || false).length || 0),
B5874 = 0,
value__5875 = (B5873 === B5874),
B5884 = !(trueQ(value__5875)),
B5886;
if ($T(B5884))
{
var sequence__5879 = form__5858,
B5885 = sequence__5879[0],
object1__5880 = B4937(B5885),
object2__5881 = "%comma";
B5886 = (object1__5880 === object2__5881)}
else
B5886 = false;
if ($T(B5886))
{
var sequence__5883 = form__5858;
return sequence__5883[1]}
else
return B4936([B5661], B5083(B5855(transform_backquoted__5857, env__5859), form__5858))}
else
if ($T(B5085(form__5858, B5217)))
return [B5850, B4937(form__5858)]
else
return form__5858}, false)
B5032["%backquote"] = function B5888 (env__5889, exp__5890)
{return B5856(exp__5890, env__5889)}
{
var B5900 = $K("message"),
B5892 = B1507.signal,
B5893 = B1507.make,
B5894 = B1507["<error>"];
B5032["%comma"] = function B5895 (____5896, value__5897)
{
var error__5899 = B5893(B5894, B5900, "comma not inside backquote");
throw(error__5899);
return false}}
var B5901 = B5893(B5894, B5900, "unsupported name for call in dot")
{
var B5905 = B1507["<string>"];
B5032["."] = function B5906 (____5907, value__5908)
{
var calls__5909 = $SL.call(arguments, 2);
return B5068(function B5910 (value__5911, call__5912)
{
var property__5913 = call__5912[0],
arguments__5914 = $SL.call(call__5912, 1),
B5918 = B5278,
B5915 = property__5913,
B5919;
if ($T(B5085(B5915, B5905)))
B5919 = property__5913
else
if ($T(B5085(B5915, B5217)))
B5919 = B4937(property__5913)
else
{
var error__5917 = B5901;
throw(error__5917);
B5919 = false};
var B5920 = [B5918, value__5911, B5919],
B5921 = [B5920];
return B4936(B5921, arguments__5914)}, value__5908, calls__5909)}}
var B5924 = B4934("simplify_arguments", function simplify_arguments__5925 (arguments__5926)
{
var B5927 = B5041(arguments__5926),
required__5928 = B5927[0],
rest__5929 = B5927[1],
key__5930 = B5927[2],
required__5933 = B5083(function B5931 (argument__5932)
{if ($T(B5085(argument__5932, B5086)))
{
var sequence__5935 = argument__5932;
return sequence__5935[0]}
else
return argument__5932}, required__5928),
B5936;
if ($T(rest__5929))
B5936 = B4936([B5063], rest__5929)
else
B5936 = [];
var B5937;
if ($T(key__5930))
B5937 = B4936([B5064], key__5930)
else
B5937 = [];
return B4936(required__5933, B5936, B5937)}, false)
var B6008 = $S("%native-name"),
B6009 = $S("<object>"),
trueQ = B1507["true?"],
B5943 = B1507[">"],
B5944 = B1507["%keys"],
B5945 = B4934("make_function_definer", function make_function_definer__5946 (macro_name__5947, definer_name__5948)
{
var B5949 = $SL.call(arguments, 2),
B5950 = B5944(B5949, {"name?":false,
"type/existing?":false,
"record?":false}),
nameQ__5951 = B5950["name?"],
typeSexistingQ__5952 = B5950["type/existing?"],
recordQ__5953 = B5950["record?"];
return function B5954 (env__5955, identifier__5956, arguments__5957)
{
var body__5958 = $SL.call(arguments, 3),
B5959;
if ($T(B4941(identifier__5956)))
{
var sequence__5967 = identifier__5956,
B5994 = sequence__5967[1],
B5995 = B4938(B5994);
B5959 = [true, B5995]}
else
B5959 = [false, identifier__5956];
var setterQ__5960 = B5959[0],
identifier__5961 = B5959[1],
B5962 = B5085(identifier__5961, B5217),
value__5969;
if ($T(B5962))
value__5969 = B5962
else
value__5969 = setterQ__5960;
var B5996 = !(trueQ(value__5969));
if ($T(B5996))
{
var error__5971 = B5893(B5894, B5900, B4936(macro_name__5947, ": ", "name not <var> or (setter <var>)"));
throw(error__5971);
false};
var B5997;
if ($T(typeSexistingQ__5952))
{
var sequence__5982 = arguments__5957,
B5983 = sequence__5982,
B5984 = ((B5983 || false).length || 0),
B5985 = 0;
B5997 = (B5984 === B5985)}
else
B5997 = false;
if ($T(B5997))
{
var error__5987 = B5893(B5894, B5900, B4936(macro_name__5947, ": ", "method has no arguments"));
throw(error__5987);
false};
var simplified_arguments__5963 = B5924(arguments__5957),
B5998;
if ($T(nameQ__5951))
B5998 = identifier__5961
else
B5998 = B5088();
var B5999 = B5195(body__5958),
B6000 = B5200(B5998, simplified_arguments__5963, B5999),
method_definition__5964 = B5001(B6000, env__5955);
if ($T(recordQ__5953))
B4977(env__5955, "module", "functions", B4937(identifier__5961), method_definition__5964);
var B6001 = B5021,
B6002 = [B4935(definer_name__5948, false), [B6008, B4937(identifier__5961)], method_definition__5964, setterQ__5960],
B6006;
if ($T(typeSexistingQ__5952))
{
var sequence__5989 = arguments__5957,
head__5965 = sequence__5989[0],
B6004;
if ($T(B5085(head__5965, B5086)))
{
var object__5991 = head__5965,
B6003 = ((object__5991 || false).length || 0);
B6004 = B5943(B6003, 1)}
else
B6004 = false;
var B6005;
if ($T(B6004))
{
var sequence__5993 = head__5965;
B6005 = sequence__5993[1]}
else
B6005 = B6009;
B6006 = [B6005, identifier__5961]}
else
B6006 = [];
var B6007 = B4936(B6002, B6006);
return [B6001, identifier__5961, B6007]}}, false)
{
var B6033 = $K("record?"),
B6034 = $K("name?"),
B6035 = $K("type/existing?"),
trueQ = B1507["true?"],
B6016 = B1507.apply,
B6017 = [["define-function", "%make-function", B6033, true, B6034, true], ["define-method", "%make-method", B6035, true]],
B6018,
B6019,
B6020 = [B6017];
while (true)
{
var B6021 = B6018,
value__6026;
if ($T(B6021))
value__6026 = B6021
else
value__6026 = B5474(B5082, B6020);
var B6032 = !(trueQ(value__6026));
if ($T(B6032))
{
var sequence__6028 = B6017,
arguments__6022 = sequence__6028[0];
(function B6023 (arguments__6024)
{return B5032[B4989(arguments__6024)] = B6016(B5945, arguments__6024)})(arguments__6022);
var sequence__6030 = B6017,
B6031 = sequence__6030.slice(1);
B6017 = B6031;
B6020 = [B6017]}
else
break};
B6019}
{
var B6041 = $S("%make-generic");
B5032["define-generic"] = function B6037 (____6038, identifier__6039, arguments__6040)
{return [B5021, identifier__6039, [B6041, [B6008, B4937(identifier__6039)]]]}}
{
var B6118 = $S("%make-class"),
trueQ = B1507["true?"];
B5032["define-class"] = function B6049 (____6050, identifier__6051, superclass__6052)
{
var properties__6053 = $SL.call(arguments, 3),
object__6054 = [B5191],
B6055 = properties__6053,
B6056,
B6057,
B6058 = [B6055];
while (true)
{
var B6059 = B6056,
value__6064;
if ($T(B6059))
value__6064 = B6059
else
value__6064 = B5474(B5082, B6058);
var B6112 = !(trueQ(value__6064));
if ($T(B6112))
{
var sequence__6066 = B6055,
property__6060 = sequence__6066[0];
(function B6061 (property__6062)
{if ($T(B5085(property__6062, B5086)))
{
var array__6071 = object__6054,
sequence__6070 = property__6062,
B6107 = sequence__6070[0],
value__6072 = B4937(B6107);
array__6071.push(value__6072);
array__6071;
var array__6077 = object__6054,
B6108 = B5574,
B6109 = [],
sequence__6076 = property__6062,
B6110 = sequence__6076[1],
value__6078 = [B6108, B6109, B6110];
array__6077.push(value__6078);
return array__6077}
else
{
var array__6081 = object__6054,
value__6082 = B4937(property__6062);
array__6081.push(value__6082);
array__6081;
var array__6085 = object__6054,
value__6086 = undefined;
array__6085.push(value__6086);
return array__6085}})(property__6060);
var sequence__6088 = B6055,
B6111 = sequence__6088.slice(1);
B6055 = B6111;
B6058 = [B6055]}
else
break};
B6057;
var B6113 = B5021,
B6114 = B6118,
sequence__6100 = superclass__6052,
B6101 = sequence__6100,
B6102 = ((B6101 || false).length || 0),
B6103 = 0,
value__6104 = (B6102 === B6103),
B6115 = !(trueQ(value__6104)),
B6116;
if ($T(B6115))
{
var sequence__6106 = superclass__6052;
B6116 = sequence__6106[0]}
else
B6116 = false;
var B6117 = [B6114, B6116, object__6054];
return [B6113, identifier__6051, B6117]}}
var B6119 = B4934("get_import_module_nameSoptions", function get_import_module_nameSoptions__6120 (import__6121)
{
var B6126;
if ($T(B5085(import__6121, B5086)))
{
var sequence__6123 = import__6121;
B6126 = sequence__6123[0]}
else
B6126 = import__6121;
var B6127 = B4937(B6126),
B6128;
if ($T(B5085(import__6121, B5086)))
{
var sequence__6125 = import__6121;
B6128 = sequence__6125.slice(1)}
else
B6128 = [];
return [B6127, B6128]}, false)
{
var B6136,
B6137,
B6138;
B5032["define-module"] = function B6139 (env__6140, ____6141)
{
var B6142 = $SL.call(arguments, 2),
B6143 = B5944(B6142, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}),
import__6144 = B6143["import"],
export__6145 = B6143["export"],
compile_time_import__6146 = B6143["compile-time-import"],
inline__6147 = B6143.inline;
B4977(env__6140, "module", "exports", B5083(B4943, export__6145));
B4999(function B6148 (import__6149)
{
var B6150 = B6119(import__6149),
module_name__6151 = B6150[0],
options__6152 = B6150[1];
return B6016(B6136, env__6140, module_name__6151, options__6152)}, compile_time_import__6146);
B4977(env__6140, "module", "inline", B5083(B4943, inline__6147));
return B5195(B5083(function B6153 (import__6154)
{
var B6155 = B6119(import__6154),
module_name__6156 = B6155[0],
options__6157 = B6155[1];
B6016(B6137, B4988(env__6140, "module"), module_name__6156, options__6157);
return B6138(module_name__6156, env__6140)}, import__6144))}}
B6138 = B4934("make_import_definition", function make_import_definition__6158 (module_name__6159, env__6160)
{
var identifier__6161 = B5088();
B4977(env__6160, "import-identifiers", module_name__6159, identifier__6161);
return [B5021, identifier__6161, [[B5846, "require"], module_name__6159]]}, false)
{
var B6168 = $S("define-function");
B5032["define-macro"] = function B6163 (env__6164, identifier__6165, arguments__6166)
{
var body__6167 = $SL.call(arguments, 3);
return [B5575, B4936([B6168, identifier__6165, B4936([B5088()], arguments__6166)], body__6167), [B5301, [B5278, identifier__6165, "%macro?"], true]]}}
B5032["define-symbol-macro"] = function B6170 (env__6171, identifier__6172, arguments__6173)
{
var body__6174 = $SL.call(arguments, 3);
return [B5575, B4936([B6168, identifier__6172, []], body__6174), [B5301, [B5278, identifier__6172, "%symbol-macro?"], true]]}
{
var B6195 = $S("%try"),
B6196 = $S("instance?");
B5032["handler-case"] = function B6180 (____6181, body__6182)
{
var cases__6183 = $SL.call(arguments, 2),
condition_var__6184 = B5088();
return [B6195, body__6182, condition_var__6184, B4936([B5344], B5083(function B6185 (case__6186)
{
var B6187 = case__6186[0],
type__6188 = B6187[0],
B6189 = $SL.call(B6187, 1),
B6190 = B5944(B6189, {condition:false}),
condition__6191 = B6190.condition,
body__6192 = $SL.call(case__6186, 1),
B6193 = [[B6196, condition_var__6184, type__6188]],
B6194;
if ($T(condition__6191))
B6194 = [B4936([B5192, [[condition__6191, condition_var__6184]]], body__6192)]
else
B6194 = body__6192;
return B4936(B6193, B6194)}, cases__6183))]}}
{
var B6215 = $S("%call"),
B6216 = $S("get-setter");
B5032["get-setter"] = function B6198 (____6199, object__6200, property__6201)
{
var propertiesSvalue__6202 = $SL.call(arguments, 3),
object__6206 = propertiesSvalue__6202,
object1__6207 = ((object__6206 || false).length || 0),
object2__6208 = 1,
B6211 = (object1__6207 === object2__6208);
if ($T(B6211))
{
var B6212 = B5015,
B6213 = [B5278, object__6200, property__6201],
sequence__6210 = propertiesSvalue__6202,
B6214 = sequence__6210[0];
return [B6212, B6213, B6214]}
else
return B4936([B6215, B6216, object__6200, property__6201], propertiesSvalue__6202)}}
{
var B6222 = $S("symbol");
B5032.symbol = function B6218 (____6219, name__6220, module__6221)
{if ($T(B5085(name__6220, B5905)))
if ($T(B5085(module__6221, B5905)))
return [B5850, name__6220, module__6221]
else
return [B5850, name__6220]
else
return [B6215, B6222, name__6220, module__6221]}}
{
var B6245 = $S("binary=="),
B6246 = $S("=="),
B6224;
B5032["=="] = function B6225 (____6226, object1__6227, object2__6228)
{
var objects__6229 = $SL.call(arguments, 3),
sequence__6240 = B6224,
B6241 = sequence__6240,
B6242 = ((B6241 || false).length || 0),
B6243 = 0,
B6244 = (B6242 === B6243);
if ($T(B6244))
return [B6245, object1__6227, object2__6228]
else
return B4936([B6215, B6246, object1__6227, object2__6228], objects__6229)}}
{
var B6247 = B4950();
exports["*core-symbol-macros*"] = B6247}
{
var B6251 = $S("%next-method"),
B6252 = $S("%this-method");
B6247["next-method"] = function B6249 (____6250)
{return [B6251, B6252]}}
var trueQ = B1507["true?"],
B6254 = B4934("find_macro_definition", function find_macro_definition__6255 (form__6256, env__6257)
{
var B6258 = form__6256;
if ($T(B5085(B6258, B5086)))
{
var sequence__6271 = form__6256,
B6272 = sequence__6271,
B6273 = ((B6272 || false).length || 0),
B6274 = 0,
B6283 = (B6273 === B6274);
if ($T(B6283))
{
var error__6276 = "Empty form";
throw(error__6276);
false};
var sequence__6278 = form__6256,
B6284 = sequence__6278[0],
name__6259 = B4937(B6284),
value__6280 = B4988(env__6257, "bound?", name__6259),
B6285 = !(trueQ(value__6280));
if ($T(B6285))
return env__6257.macros[name__6259]}
else
if ($T(B5085(B6258, B5217)))
{
var name__6260 = B4937(form__6256),
value__6282 = B4988(env__6257, "bound?", name__6260),
B6286 = !(trueQ(value__6282));
if ($T(B6286))
return env__6257["symbol-macros"][name__6260]}}, false)
{
var B6288 = B4934("macroexpand_1", function macroexpand_1__6289 (form__6290, env__6291)
{
var B6292 = B6254(form__6290, env__6291);
if ($T(B6292))
{
var macro__6293 = B6292,
B6296;
if ($T(B5085(form__6290, B5086)))
{
var sequence__6295 = form__6290;
B6296 = sequence__6295.slice(1)}
else
B6296 = form__6290;
return B6016(macro__6293, env__6291, B6296)}
else
return form__6290}, false);
exports["macroexpand-1"] = B6288}
{
var trueQ = B1507["true?"],
B6297 = B4934("macroexpand", function macroexpand__6298 (form__6299, env__6300)
{
var doneQ__6301;
while (true)
{
var value__6304 = doneQ__6301,
B6310 = !(trueQ(value__6304));
if ($T(B6310))
{
var expanded__6302 = B6288(form__6299, env__6300),
object1__6307 = expanded__6302,
object2__6308 = form__6299,
B6309 = (object1__6307 === object2__6308);
doneQ__6301 = B6309;
form__6299 = expanded__6302}
else
break};
return form__6299}, false);
exports.macroexpand = B6297}
{
var macroexpand_all__6314,
B6313;
B5001 = B4934("macroexpand_all", function macroexpand_all__6314 (form__6315, env__6316)
{B6323:while(true){
var B6317 = form__6315;
if ($T(B5085(B6317, B5086)))
if ($T(B6254(form__6315, env__6316)))
return B6313(macroexpand_all__6314(B6297(form__6315, env__6316), env__6316))
else
{
var B6318 = B4990(form__6315, env__6316);
if ($T(B6318))
{
var expander__6319 = B6318,
sequence__6321 = form__6315,
B6322 = sequence__6321.slice(1);
return B6016(expander__6319, env__6316, B6322)}
else
return B5083(B5855(macroexpand_all__6314, env__6316), form__6315)}
else
if ($T(B5085(B6317, B5217)))
if ($T(B6254(form__6315, env__6316)))
{
arguments = [B6297(form__6315, env__6316), env__6316];
form__6315 = arguments[0];
env__6316 = arguments[1];
continue B6323}
else
return form__6315
else
return form__6315;
break}}, false);
exports["macroexpand-all"] = B5001}
B6313 = B4934("maybe_call", function maybe_call__6324 (exp__6325)
{
var B6334;
if ($T(B4987(exp__6325, B5086)))
{
var sequence__6329 = exp__6325,
object1__6330 = sequence__6329[0],
object2__6331 = B6215;
B6334 = (object1__6330 === object2__6331)}
else
B6334 = false;
if ($T(B6334))
{
var sequence__6333 = exp__6325;
return sequence__6333.slice(1)}
else
return exp__6325}, false)
var B6338 = B4934("find_moduleSimport_name", function find_moduleSimport_name__6339 (definition_name__6340, env__6341)
{return B5474(function B6342 (import__6343)
{
var module__6344 = import__6343[0],
names__6345 = import__6343[1];
return B5474(function B6346 (name__6347)
{
var B6348;
if ($T(B5085(name__6347, B5086)))
B6348 = name__6347
else
B6348 = [name__6347, name__6347];
var import_name__6349 = B6348[0],
new_name__6350 = B6348[1],
object1__6353 = definition_name__6340,
object2__6354 = new_name__6350,
B6355 = (object1__6353 === object2__6354);
if ($T(B6355))
return [module__6344, import_name__6349]}, names__6345)}, B4988(env__6341, "module", "imports"))}, false)
var B6356 = B4934("find_import_identifier", function find_import_identifier__6357 (module__6358, env__6359)
{return B4988(env__6359, "import-identifiers", B4988(module__6358, "name"))}, false)
{
var B6395 = $S("%begin"),
B6396 = $S("%define"),
B6361 = B1507["set-subtract!"],
B6362 = B4928["find-free-variables"],
B6363 = B4925["environment-definitions"],
B6364 = B4925["*defined*"],
B6365 = B4934("define_free_variables", function define_free_variables__6366 (exp__6367, env__6368)
{
var variables__6369 = B5068(B6361, B6362(exp__6367), [B6363(env__6368), B6364]),
sequence__6387 = variables__6369,
B6388 = sequence__6387,
B6389 = ((B6388 || false).length || 0),
B6390 = 0,
B6391 = (B6389 === B6390);
if ($T(B6391))
return exp__6367
else
return B4936([B6395], B5083(function B6370 (variable__6371)
{
var name__6372 = B4937(variable__6371);
B4977(env__6368, "defined?", name__6372, true);
var B6392 = [[B6396, variable__6371]],
moduleSimport_name__6373 = B6338(name__6372, env__6368),
B6393;
if ($T(moduleSimport_name__6373))
{
var module__6374 = moduleSimport_name__6373[0],
import_name__6375 = moduleSimport_name__6373[1],
import_identifier__6376 = B6356(module__6374, env__6368);
B6393 = [[B5015, variable__6371, [B5278, import_identifier__6376, import_name__6375]]]}
else
B6393 = [];
var B6394 = B4936(B6392, B6393);
return B5195(B6394)}, variables__6369), [exp__6367])}, false);
exports["define-free-variables"] = B6365}
var trueQ = B1507["true?"],
B6399 = B1507.choose,
B6400 = B1507["has?"],
B6401 = B4934("define_free_variables2", function define_free_variables2__6402 (exp__6403, env__6404)
{
var free__6405 = B6361(B6362(exp__6403), B6364),
variables__6408 = B6399(function B6406 (variable__6407)
{
var object__6420 = B4988(env__6404, "definition-names"),
property__6421 = B4937(variable__6407),
value__6422 = $HP.call(object__6420,property__6421);
return !(trueQ(value__6422))}, free__6405),
sequence__6433 = variables__6408,
B6434 = sequence__6433,
B6435 = ((B6434 || false).length || 0),
B6436 = 0,
B6437 = (B6435 === B6436);
if ($T(B6437))
return exp__6403
else
return B4936([B6395], B5083(function B6409 (variable__6410)
{
var name__6411 = B4937(variable__6410);
B4977(env__6404, "defined?", name__6411, true);
var B6438 = [[B6396, variable__6410]],
moduleSimport_name__6412 = B6338(name__6411, env__6404),
B6439;
if ($T(moduleSimport_name__6412))
{
var module__6413 = moduleSimport_name__6412[0],
import_name__6414 = moduleSimport_name__6412[1],
old_import_identifier__6415 = B6356(module__6413, env__6404),
import_identifier__6416 = B4988(env__6404, "new-identifiers", B4937(old_import_identifier__6415));
B6439 = [[B5015, variable__6410, [B5278, import_identifier__6416, import_name__6414]]]}
else
B6439 = [];
var B6440 = B4936(B6438, B6439);
return B5195(B6440)}, variables__6408), [exp__6403])}, false)
var trueQ = B1507["true?"],
dec = B1507.dec,
inline__6465,
B6459 = B1507["last-setter"],
B6460 = B1507.last,
B6461 = B1507["second-setter"],
B6462,
B6463,
B6464 = B4934("inline", function inline__6465 (form__6466, env__6467)
{
var B6635;
if ($T(B5085(form__6466, B5086)))
{
var sequence__6510 = form__6466,
B6511 = sequence__6510,
B6512 = ((B6511 || false).length || 0),
B6513 = 0,
value__6514 = (B6512 === B6513);
B6635 = !(trueQ(value__6514))}
else
B6635 = false;
if ($T(B6635))
{
var sequence__6516 = form__6466,
B6636 = sequence__6516[0],
B6637 = B5085(B6636, B5217);
if ($T(B6637))
{
var sequence__6518 = form__6466,
B6638 = sequence__6518[0],
B6468 = B4937(B6638),
object1__6521 = B6468,
object2__6522 = "%method",
B6469 = (object1__6521 === object2__6522),
B6639;
if ($T(B6469))
B6639 = B6469
else
{
var object1__6525 = B6468,
object2__6526 = "%set";
B6639 = (object1__6525 === object2__6526)};
if ($T(B6639))
{
var array__6539 = form__6466,
array__6536 = form__6466,
B6537 = array__6536,
B6538 = ((B6537 || false).length || 0),
B6640 = (B6538 - 1),
B6641 = array__6536[B6640],
value__6540 = inline__6465(B6641, env__6467);
array__6539[dec(B5038(array__6539), 1)] = value__6540;
return form__6466}
else
{
var object1__6543 = B6468,
object2__6544 = "%bind",
B6642 = (object1__6543 === object2__6544);
if ($T(B6642))
{
var ____6470 = form__6466[0],
binding__6471 = form__6466[1],
body__6472 = form__6466[2],
array__6549 = binding__6471,
sequence__6548 = binding__6471,
B6643 = sequence__6548[1],
value__6550 = inline__6465(B6643, env__6467);
array__6549[1] = value__6550;
var array__6553 = form__6466,
value__6554 = inline__6465(body__6472, env__6467);
array__6553[dec(B5038(array__6553), 1)] = value__6554;
return form__6466}
else
{
var object1__6557 = B6468,
object2__6558 = "%try",
B6644 = (object1__6557 === object2__6558);
if ($T(B6644))
{
var ____6473 = form__6466[0],
body__6474 = form__6466[1],
var__6475 = form__6466[2],
catch__6476 = form__6466[3],
array__6561 = form__6466,
value__6562 = inline__6465(body__6474, env__6467);
array__6561[1] = value__6562;
var array__6565 = form__6466,
value__6566 = inline__6465(catch__6476, env__6467);
array__6565[dec(B5038(array__6565), 1)] = value__6566;
return form__6466}
else
{
var object1__6569 = B6468,
object2__6570 = "%begin",
B6477 = (object1__6569 === object2__6570),
B6645;
if ($T(B6477))
B6645 = B6477
else
{
var object1__6573 = B6468,
object2__6574 = "%if",
B6478 = (object1__6573 === object2__6574);
if ($T(B6478))
B6645 = B6478
else
{
var object1__6577 = B6468,
object2__6578 = "%while",
B6479 = (object1__6577 === object2__6578);
if ($T(B6479))
B6645 = B6479
else
{
var object1__6581 = B6468,
object2__6582 = "%array",
B6480 = (object1__6581 === object2__6582);
if ($T(B6480))
B6645 = B6480
else
{
var object1__6585 = B6468,
object2__6586 = "%object",
B6481 = (object1__6585 === object2__6586);
if ($T(B6481))
B6645 = B6481
else
{
var object1__6589 = B6468,
object2__6590 = "%get-property",
B6482 = (object1__6589 === object2__6590);
if ($T(B6482))
B6645 = B6482
else
{
var object1__6593 = B6468,
object2__6594 = "%native-call",
B6483 = (object1__6593 === object2__6594);
if ($T(B6483))
B6645 = B6483
else
{
var object1__6597 = B6468,
object2__6598 = "%infix",
B6484 = (object1__6597 === object2__6598);
if ($T(B6484))
B6645 = B6484
else
{
var object1__6601 = B6468,
object2__6602 = "%plus",
B6485 = (object1__6601 === object2__6602);
if ($T(B6485))
B6645 = B6485
else
{
var object1__6605 = B6468,
object2__6606 = "%minus",
B6486 = (object1__6605 === object2__6606);
if ($T(B6486))
B6645 = B6486
else
{
var object1__6609 = B6468,
object2__6610 = "%times",
B6487 = (object1__6609 === object2__6610);
if ($T(B6487))
B6645 = B6487
else
{
var object1__6613 = B6468,
object2__6614 = "%divide";
B6645 = (object1__6613 === object2__6614)}}}}}}}}}}};
if ($T(B6645))
{
var sequence__6616 = form__6466,
B6646 = sequence__6616[0],
B6647 = [B6646],
B6648 = B5855(inline__6465, env__6467),
sequence__6618 = form__6466,
B6649 = sequence__6618.slice(1),
B6650 = B5083(B6648, B6649);
return B4936(B6647, B6650)}
else
{
var object1__6621 = B6468,
object2__6622 = "%native",
B6488 = (object1__6621 === object2__6622),
B6651;
if ($T(B6488))
B6651 = B6488
else
{
var object1__6625 = B6468,
object2__6626 = "%native-name",
B6489 = (object1__6625 === object2__6626);
if ($T(B6489))
B6651 = B6489
else
{
var object1__6629 = B6468,
object2__6630 = "%define";
B6651 = (object1__6629 === object2__6630)}};
if ($T(B6651))
return form__6466
else
{
var sequence__6632 = form__6466,
B6652 = sequence__6632[0],
name__6490 = B4937(B6652),
B6491 = B4988(env__6467, "definition-names", name__6490),
definition_name__6492;
if ($T(B6491))
definition_name__6492 = B6491
else
definition_name__6492 = name__6490;
var B6493;
if ($T(B6463(B4988(env__6467, "module"), definition_name__6492)))
B6493 = B4988(env__6467, "module", "functions", definition_name__6492)
else
B6493 = false;
var definition__6498;
if ($T(B6493))
definition__6498 = B6493
else
{
var B6494 = B6338(definition_name__6492, env__6467);
if ($T(B6494))
{
var moduleSimport_name__6495 = B6494,
module__6496 = moduleSimport_name__6495[0],
import_name__6497 = moduleSimport_name__6495[1];
if ($T(B6463(module__6496, import_name__6497)))
definition__6498 = B4988(module__6496, "functions", import_name__6497)
else
definition__6498 = false}
else
definition__6498 = false};
if ($T(definition__6498))
{
var sequence__6634 = form__6466,
B6653 = sequence__6634.slice(1);
return B6462(definition__6498, B6653, env__6467)}
else
return B5083(B5855(inline__6465, env__6467), form__6466)}}}}}}
else
return B5083(B5855(inline__6465, env__6467), form__6466)}
else
return form__6466}, false)
{
var B6654 = B1507["=="];
B6463 = B4934("inlineQ", function inlineQ__6655 (module__6656, name__6657)
{return B5474(B5000(B6654, name__6657), B4988(module__6656, "inline"))}, false)}
{
var trueQ = B1507["true?"],
B6662 = B1507[">="],
B6663 = B4926["ensure-naming-structure"],
B6664 = B1507.push,
B6665 = B4925["get-module-name/name"],
B6666 = B4926["restore-identifiers"],
B6667 = B4926["alpha-convert"];
B6462 = B4934("inline_definition", function inline_definition__6668 (definition__6669, values__6670, env__6671)
{
var ____6672 = definition__6669[0],
name__6673 = definition__6669[1],
arguments__6674 = definition__6669[2],
body__6675 = definition__6669[3],
body__6679 = B5068(function B6676 (body__6677, argument__6678)
{return [B5031, [argument__6678, argument__6678], body__6677]}, body__6675, B5218(arguments__6674)),
inlined__6680 = B6464(body__6679, env__6671),
prepared__6681 = B6667(inlined__6680, env__6671),
object__6693 = arguments__6674,
B6682 = ((object__6693 || false).length || 0),
i__6683 = 0;
while (true)
{
var value__6695 = B6662(i__6683, B6682),
B6700 = !(trueQ(value__6695));
if ($T(B6700))
{
(function B6684 (i__6685)
{
var argument__6686 = B5039(arguments__6674, i__6685),
value__6687 = B5039(values__6670, i__6685),
B6688 = B6665(argument__6686),
module_name__6689 = B6688[0],
name__6690 = B6688[1];
B6663(env__6671, module_name__6689, name__6690);
var array__6698 = B4988(env__6671, "identifiers", module_name__6689, name__6690),
value__6699;
if ($T(value__6687))
value__6699 = B6464(value__6687, env__6671)
else
value__6699 = [B5846, "undefined"];
array__6698.unshift(value__6699);
return array__6698})(i__6683);
i__6683 = (i__6683 + 1)}
else
break};
false;
var result__6691 = B6667(body__6679, env__6671);
B6666(arguments__6674, env__6671);
return result__6691}, false)}
{
var B6701,
B6702 = B1507.identity,
B6703 = B4934("lift_symbols", function lift_symbols__6704 (exp__6705, env__6706)
{return B6701(exp__6705, env__6706, B6702)}, false);
exports["lift-symbols"] = B6703}
{
var B6896 = $K("module"),
trueQ = B1507["true?"],
lift_symbol__6734,
B6729,
B6730,
B6731,
B6732 = B1507["<keyword>"],
B6733 = B1507["<hash-symbol>"];
B6701 = B4934("lift_symbol", function lift_symbol__6734 (exp__6735, env__6736, k__6737)
{B6897:while(true){
var B6888;
if ($T(B5085(exp__6735, B5086)))
{
var sequence__6805 = exp__6735,
B6806 = sequence__6805,
B6807 = ((B6806 || false).length || 0),
B6808 = 0,
value__6809 = (B6807 === B6808);
B6888 = !(trueQ(value__6809))}
else
B6888 = false;
if ($T(B6888))
{
var sequence__6811 = exp__6735,
B6889 = sequence__6811[0],
B6738 = B4937(B6889),
object1__6814 = B6738,
object2__6815 = "%bind",
B6890 = (object1__6814 === object2__6815);
if ($T(B6890))
{
var ____6739 = exp__6735[0],
B6740 = exp__6735[1],
var__6741 = B6740[0],
value__6742 = B6740[1],
body__6743 = exp__6735[2];
arguments = [value__6742, env__6736, (function B6898 (body__6743, k__6737, B5031, var__6741)
{return function B6744 (lvalue__6745, env__6746)
{return lift_symbol__6734(body__6743, env__6746, function B6747 (lbody__6748, env__6749)
{return k__6737([B5031, [var__6741, lvalue__6745], lbody__6748], env__6749)})}})(body__6743, k__6737, B5031, var__6741)];
exp__6735 = arguments[0];
env__6736 = arguments[1];
k__6737 = arguments[2];
continue B6897}
else
{
var object1__6818 = B6738,
object2__6819 = "%set",
B6891 = (object1__6818 === object2__6819);
if ($T(B6891))
{
var ____6750 = exp__6735[0],
e1__6751 = exp__6735[1],
e2__6752 = exp__6735[2];
arguments = [e2__6752, env__6736, (function B6899 (k__6737, B5015, e1__6751)
{return function B6753 (le2__6754, env__6755)
{return k__6737([B5015, e1__6751, le2__6754], env__6755)}})(k__6737, B5015, e1__6751)];
exp__6735 = arguments[0];
env__6736 = arguments[1];
k__6737 = arguments[2];
continue B6897}
else
{
var object1__6822 = B6738,
object2__6823 = "%method",
B6892 = (object1__6822 === object2__6823);
if ($T(B6892))
{
var ____6756 = exp__6735[0],
name__6757 = exp__6735[1],
arguments__6758 = exp__6735[2],
body__6759 = exp__6735[3];
arguments = [body__6759, env__6736, (function B6900 (k__6737, B5009, name__6757, arguments__6758)
{return function B6760 (lbody__6761, env__6762)
{return k__6737([B5009, name__6757, arguments__6758, lbody__6761], env__6762)}})(k__6737, B5009, name__6757, arguments__6758)];
exp__6735 = arguments[0];
env__6736 = arguments[1];
k__6737 = arguments[2];
continue B6897}
else
{
var object1__6826 = B6738,
object2__6827 = "%begin",
B6763 = (object1__6826 === object2__6827),
B6893;
if ($T(B6763))
B6893 = B6763
else
{
var object1__6830 = B6738,
object2__6831 = "%if",
B6764 = (object1__6830 === object2__6831);
if ($T(B6764))
B6893 = B6764
else
{
var object1__6834 = B6738,
object2__6835 = "%while",
B6765 = (object1__6834 === object2__6835);
if ($T(B6765))
B6893 = B6765
else
{
var object1__6838 = B6738,
object2__6839 = "%array",
B6766 = (object1__6838 === object2__6839);
if ($T(B6766))
B6893 = B6766
else
{
var object1__6842 = B6738,
object2__6843 = "%object",
B6767 = (object1__6842 === object2__6843);
if ($T(B6767))
B6893 = B6767
else
{
var object1__6846 = B6738,
object2__6847 = "%get-property",
B6768 = (object1__6846 === object2__6847);
if ($T(B6768))
B6893 = B6768
else
{
var object1__6850 = B6738,
object2__6851 = "%infix",
B6769 = (object1__6850 === object2__6851);
if ($T(B6769))
B6893 = B6769
else
{
var object1__6854 = B6738,
object2__6855 = "%native",
B6770 = (object1__6854 === object2__6855);
if ($T(B6770))
B6893 = B6770
else
{
var object1__6858 = B6738,
object2__6859 = "%native-name",
B6771 = (object1__6858 === object2__6859);
if ($T(B6771))
B6893 = B6771
else
{
var object1__6862 = B6738,
object2__6863 = "%native-call",
B6772 = (object1__6862 === object2__6863);
if ($T(B6772))
B6893 = B6772
else
{
var object1__6866 = B6738,
object2__6867 = "%plus",
B6773 = (object1__6866 === object2__6867);
if ($T(B6773))
B6893 = B6773
else
{
var object1__6870 = B6738,
object2__6871 = "%minus",
B6774 = (object1__6870 === object2__6871);
if ($T(B6774))
B6893 = B6774
else
{
var object1__6874 = B6738,
object2__6875 = "%times",
B6775 = (object1__6874 === object2__6875);
if ($T(B6775))
B6893 = B6775
else
{
var object1__6878 = B6738,
object2__6879 = "%divide";
B6893 = (object1__6878 === object2__6879)}}}}}}}}}}}}};
if ($T(B6893))
{
var m__6776 = exp__6735[0],
eT__6777 = $SL.call(exp__6735, 1);
return B6729(eT__6777, env__6736, function B6778 (leT__6779, env__6780)
{return k__6737(B4936([m__6776], leT__6779), env__6780)})}
else
{
var object1__6882 = B6738,
object2__6883 = "%try",
B6894 = (object1__6882 === object2__6883);
if ($T(B6894))
{
var ____6781 = exp__6735[0],
e1__6782 = exp__6735[1],
v__6783 = exp__6735[2],
e2__6784 = exp__6735[3];
return B6729([e1__6782, e2__6784], env__6736, function B6785 (leT__6786, env__6787)
{
var le1__6788 = leT__6786[0],
le2__6789 = leT__6786[1];
return k__6737([B6195, le1__6788, v__6783, le2__6789], env__6787)})}
else
{
var object1__6886 = B6738,
object2__6887 = "%symbol",
B6895 = (object1__6886 === object2__6887);
if ($T(B6895))
{
var ____6790 = exp__6735[0],
name__6791 = exp__6735[1],
module__6792 = exp__6735[2];
return B6730(name__6791, exp__6735, "symbol", env__6736, k__6737, B6896, module__6792)}
else
return B6731(exp__6735, env__6736, k__6737)}}}}}}
else
{
var B6793 = exp__6735;
if ($T(B5085(B6793, B6732)))
return B6730(B4937(exp__6735), exp__6735, "keyword", env__6736, k__6737)
else
if ($T(B5085(B6793, B6733)))
return B6730(B4937(exp__6735), exp__6735, "hash", env__6736, k__6737)
else
return k__6737(exp__6735, env__6736)};
break}}, false)}
B6730 = B4934("lift_value", function lift_value__6904 (name__6905, value__6906, type__6907, env__6908, k__6909)
{
var B6910 = $SL.call(arguments, 5),
B6911 = B5944(B6910, {module:""}),
module__6912 = B6911.module,
B6913 = B4988(env__6908, "lifted", type__6907, module__6912, name__6905);
if ($T(B6913))
{
var t__6914 = B6913;
return k__6909(t__6914, env__6908)}
else
{
var t__6915 = B4977(env__6908, "lifted", type__6907, module__6912, name__6905, B5088());
return [B5031, [t__6915, value__6906], k__6909(t__6915, env__6908)]}}, false)
B6729 = B4934("lift_symbolT", function lift_symbolT__6916 (expT__6917, env__6918, k__6919)
{
var sequence__6930 = expT__6917,
B6931 = sequence__6930,
B6932 = ((B6931 || false).length || 0),
B6933 = 0,
B6934 = (B6932 === B6933);
if ($T(B6934))
return k__6919([], env__6918)
else
return B6731(expT__6917, env__6918, k__6919)}, false)
B6731 = B4934("lift_symbolTT", function lift_symbolTT__6937 (exp__6938, env__6939, k__6940)
{
var sequence__6948 = exp__6938,
B6951 = sequence__6948[0],
B6954 = function B6941 (t__6942, env__6943)
{
var sequence__6950 = exp__6938,
B6952 = sequence__6950.slice(1),
B6953 = function B6944 (tT__6945, env__6946)
{return k__6940(B4936([t__6942], tT__6945), env__6946)};
return B6729(B6952, env__6943, B6953)};
return B6701(B6951, env__6939, B6954)}, false)
var B6960 = $K("string"),
B6955 = B4923.read,
B6956 = B4921["<string-stream>"],
B6957 = B4934("read_program", function read_program__6958 (source__6959)
{return B6955(B5893(B6956, B6960, B4936("(", source__6959, "\n)")))}, false)
{
var B6963 = B4927["lift-defines"],
B6964 = B4929["normalize-term"],
B6965 = B4930["transform-statements!"],
B6966 = B4931["optimize-tail-calls!"],
B6967 = B4932["flatten-statements!"],
B6968 = B4933["compile-js"],
B6969 = B4934("compile_expression", function compile_expression__6970 (exp__6971, env__6972)
{return B5068(function B6973 (result__6974, nameSfn__6975)
{
var name__6976 = nameSfn__6975[0],
fn__6977 = nameSfn__6975[1],
result__6978 = fn__6977(result__6974);
return result__6978}, exp__6971, [["source", B6702], ["macroexpanded", B5855(B5001, env__6972)], ["lifted defines", B5855(B6963, env__6972)], ["defined free variables", B5855(B6365, env__6972)], ["alpha-converted", B5855(B6667, env__6972)], ["inline", B5855(B6464, env__6972)], ["defined free variables after inline", B5855(B6401, env__6972)], ["ANF", B6964], ["lifted symbols", B5855(B6703, env__6972)], ["statements", B5855(B6965, env__6972)], ["TCO", function B6979 (exp__6980)
{return B6966(exp__6980, env__6972)}], ["flattened", B6967], ["compiled", B5855(B6968, env__6972)]])}, false);
exports["compile-expression"] = B6969}
var B6981 = B4924["resolve-path"],
B6982 = B4934("executable_path", function executable_path__6983 (module_name__6984)
{return B6981("build", B4936(module_name__6984, ".js"))}, false)
var B6985 = B4934("module_path", function module_path__6986 (base_path__6987, module_name__6988)
{return B6981(base_path__6987, B4936(module_name__6988, ".rm"))}, false)
var B6989 = B4934("source_path", function source_path__6990 (module_name__6991)
{return B6981("src", B4936(module_name__6991, ".ralph"))}, false)
var trueQ = B1507["true?"],
B6993 = B1507["<"],
B6994 = B4924["file-properties"],
B6995 = B4924["file-exists?"],
B6996 = B4934("recompileQ", function recompileQ__6997 (module_name__6998)
{
var value__7003 = B4988(B4951, module_name__6998, "native?"),
B7006 = !(trueQ(value__7003));
if ($T(B7006))
{
var path__6999 = B6982(module_name__6998),
value__7005 = B6995(path__6999),
B7000 = !(trueQ(value__7005));
if ($T(B7000))
return B7000
else
{
var path2__7001 = B6989(module_name__6998);
return B6993(B4988(B6994(path__6999), "modification-date"), B4988(B6994(path2__7001), "modification-date"))}}}, false)
{
var B7011 = B1507["chain-object"],
B7012,
B7013,
B7014 = B1507["object-properties"];
B6136 = B4934("compile_time_import_module", function compile_time_import_module__7015 (env__7016, module_name__7017)
{
var B7018 = $SL.call(arguments, 2),
B7019 = B5944(B7018, {options:false}),
options__7020 = B7019.options,
object1__7032 = module_name__7017,
object2__7033 = "ralph/core",
B7034 = (object1__7032 === object2__7033),
B7027;
if ($T(B7034))
B7027 = [B5032, B6247]
else
{
B7012(module_name__7017);
var definitions__7021 = require(module_name__7017),
macros__7022 = B4969(),
symbol_macros__7023 = B4969();
B4999(function B7024 (name__7025)
{
var definition__7026 = B4988(definitions__7021, name__7025);
if ($T(B4988(definition__7026, "%macro?")))
return macros__7022[name__7025] = definition__7026
else
if ($T(B4988(definition__7026, "%symbol-macro?")))
return symbol_macros__7023[name__7025] = definition__7026}, B6016(B7013, B7014(definitions__7021), options__7020));
B7027 = [macros__7022, symbol_macros__7023]};
var macros__7028 = B7027[0],
symbol_macros__7029 = B7027[1];
B7011(B4988(env__7016, "macros"), macros__7028);
return B7011(B4988(env__7016, "symbol-macros"), symbol_macros__7029)}, false)}
{
var B7040 = B1507["remove!"],
B7041 = B1507["set-union!"],
B7042 = B1507["as-object"],
B7043 = B1507["as-set"];
B7013 = B4934("process_names", function process_names__7044 (all__7045)
{
var B7046 = $SL.call(arguments, 1),
B7047 = B5944(B7046, {only:false,
exclude:false,
prefix:false,
rename:false}),
only__7048 = B7047.only,
exclude__7049 = B7047.exclude,
prefix__7050 = B7047.prefix,
rename__7051 = B7047.rename,
resolve__7052 = function resolve__7053 (exp__7054)
{if ($T(B5085(exp__7054, B5905)))
return exp__7054
else
return B4943(exp__7054)},
B7062;
if ($T(B5085(only__7048, B5086)))
B7062 = B5083(resolve__7052, only__7048)
else
B7062 = all__7045;
var names__7055 = B7043(B7062),
B7056 = rename__7051,
B7063;
if ($T(B7056))
B7063 = B7056
else
B7063 = [];
var B7064 = B5083(resolve__7052, B7063),
renamings__7057 = B7042(B7064);
B4999(B5000(B7040, names__7055), B5083(resolve__7052, exclude__7049));
B7041(names__7055, B7014(renamings__7057));
return B5083(function B7058 (name__7059)
{
var B7060 = B4988(renamings__7057, name__7059);
if ($T(B7060))
{
var renaming__7061 = B7060;
return [name__7059, renaming__7061]}
else
if ($T(B5085(prefix__7050, B5905)))
return [name__7059, B4936(prefix__7050, name__7059)]
else
return name__7059}, names__7055)}, false)}
{
var B7066;
B6137 = B4934("import_module", function import_module__7067 (module__7068, module_name__7069)
{
var options__7070 = $SL.call(arguments, 2),
B7071 = B7066(module_name__7069);
if ($T(B7071))
{
var other_module__7072 = B7071,
array__7075 = B4988(module__7068, "imports"),
value__7076 = [other_module__7072, B6016(B7013, B4988(other_module__7072, "exports"), options__7070)];
array__7075.unshift(value__7076);
array__7075;
var array__7079 = B4988(module__7068, "dependencies"),
value__7080 = module_name__7069;
array__7079.unshift(value__7080);
array__7079;
return other_module__7072}
else
{
var error__7082 = B4936("unable to import module '", module_name__7069, "'");
throw(error__7082);
return false}}, false)}
{
var B7086;
B7066 = B4934("find_module", function find_module__7087 (module_name__7088)
{
var B7089 = B7012(module_name__7088);
if ($T(B7089))
return B7089
else
{
var B7090 = B4988(B4951, module_name__7088);
if ($T(B7090))
return B7090
else
{
var B7091 = B7086("build", module_name__7088);
if ($T(B7091))
return B7091
else
return B7086("src", module_name__7088)}}}, false)}
{
var B7097 = $K("name"),
B7092 = B4924["read-file"];
B7086 = B4934("read_module", function read_module__7093 (base_path__7094, module_name__7095)
{
var path__7096 = B6985(base_path__7094, module_name__7095);
if ($T(B6995(path__7096)))
return B6016(B5000(B5893, B4958, B7097), B6955(B5893(B6956, B6960, B7092(path__7096))))}, false)}
{
var B7137 = $K("exports"),
B7138 = $K("inline"),
B7139 = $K("dependencies"),
trueQ = B1507["true?"],
B7100 = B4924["write-file"],
B7101 = B1507.description;
B7012 = B4934("compile_module", function compile_module__7102 (module_name__7103)
{
var object__7117 = B4951,
property__7118 = module_name__7103,
value__7119 = $HP.call(object__7117,property__7118),
B7134 = !(trueQ(value__7119));
if ($T(B7134))
{
var B7104 = B7086("src", module_name__7103);
if ($T(B7104))
{
var module__7105 = B7104;
B4951[module_name__7103] = module__7105}};
if ($T(B6996(module_name__7103)))
{
var value__7121 = B6995(B6989(module_name__7103)),
B7135 = !(trueQ(value__7121));
if ($T(B7135))
{
var error__7123 = B4936("unable to compile module '", module_name__7103, "'");
throw(error__7123);
false};
var module__7106 = B5893(B4958, B7097, module_name__7103),
env__7107 = B5893(B4970, B6896, module__7106),
source__7108 = B7092(B6989(module_name__7103)),
program__7109 = B6957(source__7108),
result__7110 = "";
B4951[module_name__7103] = module__7106;
B6136(env__7107, "ralph/core");
var object1__7127 = module_name__7103,
object2__7128 = "ralph/core",
value__7129 = (object1__7127 === object2__7128),
B7136 = !(trueQ(value__7129));
if ($T(B7136))
{
B6137(module__7106, "ralph/core");
var array__7132 = program__7109,
value__7133 = B6138("ralph/core", env__7107);
array__7132.unshift(value__7133);
array__7132};
B4999(function B7111 (expression__7112)
{
var code__7113 = B6969(expression__7112, env__7107);
return result__7110 = B4936(result__7110, code__7113, "\n")}, program__7109);
B7100(B6982(module_name__7103), result__7110);
B7100(B6985("build", module_name__7103), B7101([module_name__7103, B7137, B4988(module__7106, "exports"), B7138, B4988(module__7106, "inline"), B7139, B4988(module__7106, "dependencies")]));
return module__7106}}, false);
exports["compile-module"] = B7012}
{
var analyze_dependencies__7146,
B7144 = B1507["member?"],
B7145 = B4934("analyze_dependencies", function analyze_dependencies__7146 (module_name__7147)
{
var B7148 = B7066(module_name__7147);
if ($T(B7148))
{
var module__7149 = B7148;
B4951[module_name__7147] = module__7149;
var B7150 = module__7149,
dependencies__7151 = B7150.dependencies,
result__7152 = B5037(dependencies__7151);
B4999(function B7153 (dependency__7154)
{return B4999(function B7155 (sub_dependency__7156)
{
if ($T(B7144(sub_dependency__7156, result__7152)))
B7040(result__7152, sub_dependency__7156);
var array__7159 = result__7152,
value__7160 = sub_dependency__7156;
array__7159.unshift(value__7160);
return array__7159}, analyze_dependencies__7146(dependency__7154))}, dependencies__7151);
return result__7152}
else
{
var error__7162 = B4936("unable to find-module '", module_name__7147, "'");
throw(error__7162);
return false}}, false);
exports["analyze-dependencies"] = B7145}
