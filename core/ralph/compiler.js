var B1507 = require("ralph/core")
{
var B4915,
B4916,
B4917,
B4918,
B4919,
B4920,
B4921,
B4922,
B4923,
B4924,
B4925,
B4926,
B4927;
B4915 = require("ralph/stream");
B4916 = require("ralph/format");
B4917 = require("ralph/reader");
B4918 = require("ralph/file-system");
B4919 = require("ralph/compiler/utilities");
B4920 = require("ralph/compiler/alpha");
B4921 = require("ralph/compiler/define-lifting");
B4922 = require("ralph/compiler/free-variables");
B4923 = require("ralph/compiler/anf");
B4924 = require("ralph/compiler/statements");
B4925 = require("ralph/compiler/tco");
B4926 = require("ralph/compiler/flattening");
B4927 = require("ralph/compiler/javascript")}
var B4928 = B1507["make-object"],
B4929 = B4928()
{
var B4934 = B1507["%make-class"],
B4935 = B1507["<object>"],
B4936 = B4934(B4935, {name:false,
"native?":false,
exports:function B4937 ()
{return []},
imports:function B4938 ()
{return []},
dependencies:function B4939 ()
{return []},
inline:function B4940 ()
{return []}});
exports["<module>"] = B4936}
{
var B4947 = B1507["make-plain-object"],
B4948 = B4934(B4935, {module:false,
macros:function B4949 ()
{return B4947()},
"symbol-macros":function B4950 ()
{return B4947()},
identifiers:function B4951 ()
{return B4928()},
"defined?":function B4952 ()
{return B4928()},
lifted:function B4953 ()
{return B4928()},
"import-identifiers":function B4954 ()
{return B4947()}});
exports["<environment>"] = B4948}
var B4955 = B1507["%make-function"],
B4956 = B1507["get-setter"],
B4957 = B1507["symbol-name"],
B4958 = B4955("bindN", function bindN__4959 (env__4960, identifier__4961)
{return B4956(env__4960, "bound?", B4957(identifier__4961), true)}, false)
var B4962 = B4955("unbindN", function unbindN__4963 (env__4964, identifier__4965)
{return B4956(env__4964, "bound?", B4957(identifier__4965), false)}, false)
var B4966 = B4928()
var B4967 = B4919["expression?"],
B4968 = B1507.get,
B4969 = B1507.first,
B4970 = B4955("find_special_form", function find_special_form__4971 (form__4972, env__4973)
{if ($T(B4967(form__4972)))
{
var sequence__4975 = form__4972,
B4976 = sequence__4975[0],
B4977 = B4957(B4976);
return B4968(B4966, B4977)}}, false)
{
var B4988 = $S("%method"),
B4979 = B1507["do"],
B4980 = B1507.curry,
B4981;
B4966["%method"] = function B4982 (env__4983, name__4984, arguments__4985, body__4986)
{
B4979(B4980(B4958, env__4983), arguments__4985);
var expanded_body__4987 = B4981(body__4986, env__4983);
B4979(B4980(B4962, env__4983), arguments__4985);
return [B4988, name__4984, arguments__4985, expanded_body__4987]}}
{
var B4994 = $S("%set");
B4966["%set"] = function B4990 (env__4991, identifier__4992, value__4993)
{return [B4994, identifier__4992, B4981(value__4993, env__4991)]}}
{
var B5000 = $S("define");
B4966.define = function B4996 (env__4997, identifier__4998, value__4999)
{
B4958(env__4997, identifier__4998);
return [B5000, identifier__4998, B4981(value__4999, env__4997)]}}
{
var B5010 = $S("%bind");
B4966["%bind"] = function B5002 (env__5003, binding__5004, body__5005)
{
var var__5006 = binding__5004[0],
value__5007 = binding__5004[1],
expanded_value__5008 = B4981(value__5007, env__5003);
B4958(env__5003, var__5006);
var result__5009 = [B5010, [var__5006, expanded_value__5008], B4981(body__5005, env__5003)];
B4962(env__5003, var__5006);
return result__5009}}
{
var B5011 = B4928();
exports["*core-macros*"] = B5011}
{
var B5043 = $REST,
B5044 = $KEY,
B5045 = $K("end"),
B5046 = $K("start"),
B5015 = B1507["find-key"],
B5016 = B1507["="],
B5017 = B1507["copy-sequence"],
B5018 = B1507.size,
B5019 = B1507.element,
B5020 = B1507.inc,
B5021 = B4955("analyze_lambda_list", function analyze_lambda_list__5022 (list__5023)
{
var position__5024 = function B5025 (symbol__5026)
{return B5015(list__5023, B4980(B5016, symbol__5026))},
rest__5027 = position__5024(B5043),
key__5028 = position__5024(B5044),
B5029 = rest__5027,
B5037;
if ($T(B5029))
B5037 = B5029
else
{
var B5030 = key__5028;
if ($T(B5030))
B5037 = B5030
else
{
var object__5032 = list__5023;
B5037 = ((object__5032 || false).length || 0)}};
var B5038 = B5017(list__5023, B5045, B5037),
B5040;
if ($T(rest__5027))
{
var number__5034 = rest__5027,
B5039 = (number__5034 + 1);
B5040 = B5019(list__5023, B5039)}
else
B5040 = false;
var B5042;
if ($T(key__5028))
{
var number__5036 = key__5028,
B5041 = (number__5036 + 1);
B5042 = B5017(list__5023, B5046, B5041)}
else
B5042 = false;
return [B5038, B5040, B5042]}, false);
exports["analyze-lambda-list"] = B5021}
var B5048 = B1507.reduce,
B5049 = B4955("wrap", function wrap__5050 (form__5051)
{
var wrappers__5052 = $SL.call(arguments, 1);
return B5048(function B5053 (result__5054, wrapper__5055)
{return wrapper__5055(result__5054)}, form__5051, wrappers__5052)}, false)
var B5170 = $S("bind-properties"),
B5171 = $S("%keys"),
B5172 = $S("%object"),
B5173 = $S("bind"),
B5174 = $S("%native-call"),
trueQ = B1507["true?"],
B5062 = B1507["empty?"],
B5063 = B1507.map,
B5064 = B1507.concatenate,
B5065 = B1507.reduce1,
B5066 = B1507["instance?"],
B5067 = B1507["<array>"],
B5068 = B1507.not,
B5069 = B4919["generate-symbol"],
B5070 = B4955("wrap_restSkeys", function wrap_restSkeys__5071 (body__5072, all__5073, required__5074, rest__5075, key__5076)
{
var restQ__5077 = rest__5075,
B5078 = rest__5075,
rest__5079;
if ($T(B5078))
rest__5079 = B5078
else
{
var sequence__5103 = key__5076,
B5104 = sequence__5103,
B5105 = ((B5104 || false).length || 0),
B5106 = 0,
value__5107 = (B5105 === B5106),
B5152 = !(trueQ(value__5107));
if ($T(B5152))
rest__5079 = B5069()
else
rest__5079 = false};
return B5049(body__5072, function B5080 (body__5081)
{
var sequence__5118 = key__5076,
B5119 = sequence__5118,
B5120 = ((B5119 || false).length || 0),
B5121 = 0,
B5153 = (B5120 === B5121);
if ($T(B5153))
return body__5081
else
{
var key_values__5084 = B5063(function B5082 (binding__5083)
{if ($T(B5066(binding__5083, B5067)))
return binding__5083
else
return [binding__5083, false]}, key__5076),
B5154 = B5170,
B5155 = B5063(B4969, key_values__5084),
B5156 = B5171,
B5157 = [B5172],
function__5130 = B5064,
values__5131 = B5063(function B5085 (key_value__5086)
{
var key__5087 = key_value__5086[0],
value__5088 = key_value__5086[1];
return [B4957(key__5087), value__5088]}, key_values__5084),
B5132 = values__5131,
B5158 = B5132[0],
B5133 = values__5131,
B5159 = B5133.slice(1),
B5160 = B5048(function__5130, B5158, B5159),
B5161 = B5064(B5157, B5160),
B5162 = [B5156, rest__5079, B5161];
return [B5154, B5155, B5162, body__5081]}}, function B5089 (body__5090)
{
var B5091 = restQ__5077,
B5163;
if ($T(B5091))
B5163 = B5091
else
{
var sequence__5145 = key__5076,
B5146 = sequence__5145,
B5147 = ((B5146 || false).length || 0),
B5148 = 0,
value__5149 = (B5147 === B5148);
B5163 = !(trueQ(value__5149))};
if ($T(B5163))
{
var B5164 = B5173,
B5165 = B5174,
object__5151 = required__5074,
B5166 = ((object__5151 || false).length || 0),
B5167 = [B5165, "$SL.call", all__5073, B5166],
B5168 = [rest__5079, B5167],
B5169 = [B5168];
return [B5164, B5169, body__5090]}
else
return body__5090})}, false)
{
var B5176 = B4919["maybe-begin"];
B5011.begin = function B5177 (____5178)
{
var expressions__5179 = $SL.call(arguments, 1);
return B5176(expressions__5179)}}
var B5190 = $S("%all-arguments"),
B5181 = B4955("named_method", function named_method__5182 (name__5183, arguments__5184, body__5185)
{
var B5186 = B5021(arguments__5184),
required__5187 = B5186[0],
rest__5188 = B5186[1],
key__5189 = B5186[2];
return [B4988, name__5183, required__5187, B5070(body__5185, B5190, required__5187, rest__5188, key__5189)]}, false)
B5011.method = function B5192 (____5193, arguments__5194)
{
var body__5195 = $SL.call(arguments, 2);
return B5181(B5069(), arguments__5194, B5176(body__5195))}
{
var B5198 = B1507["<symbol>"],
B5199 = B1507.reverse;
B5011.bind = function B5200 (____5201, bindings__5202)
{
var body__5203 = $SL.call(arguments, 2),
sequence__5217 = bindings__5202,
B5218 = sequence__5217,
B5219 = ((B5218 || false).length || 0),
B5220 = 0,
B5221 = (B5219 === B5220);
if ($T(B5221))
return B5176(body__5203)
else
return B5048(function B5204 (body__5205, binding__5206)
{
var B5222 = B5010,
B5223;
if ($T(B5066(binding__5206, B5198)))
B5223 = [binding__5206, false]
else
B5223 = binding__5206;
return [B5222, B5223, body__5205]}, B5176(body__5203), B5199(bindings__5202))}}
{
var B5230 = $S("%if");
B5011["if"] = function B5225 (____5226, test__5227, then__5228, else__5229)
{return [B5230, test__5227, then__5228, else__5229]}}
{
var B5260 = $S("%get-property"),
trueQ = B1507["true?"],
B5232 = B1507["binary=="],
B5233 = B4919["transform-setter-identifier"],
B5234 = B1507.rest;
B5011["set!"] = function B5235 (____5236, place__5237)
{
var values__5238 = $SL.call(arguments, 2),
B5253;
if ($T(B5066(place__5237, B5067)))
{
var sequence__5243 = place__5237,
object1__5244 = sequence__5243[0],
object2__5245 = B5260,
value__5246 = (object1__5244 === object2__5245);
B5253 = !(trueQ(value__5246))}
else
B5253 = false;
if ($T(B5253))
{
var sequence__5248 = place__5237,
B5254 = sequence__5248[0],
B5255 = B5233(B5254),
B5256 = [B5255],
sequence__5250 = place__5237,
B5257 = sequence__5250.slice(1);
return B5064(B5256, B5257, values__5238)}
else
{
var B5258 = B4994,
sequence__5252 = values__5238,
B5259 = sequence__5252[0];
return [B5258, place__5237, B5259]}}}
{
var B5283 = $S("set!"),
B5284 = $S("parallel-set!");
B5011["parallel-set!"] = function B5262 (____5263, var__5264, value__5265)
{
var clauses__5266 = $SL.call(arguments, 3),
sequence__5278 = clauses__5266,
B5279 = sequence__5278,
B5280 = ((B5279 || false).length || 0),
B5281 = 0,
B5282 = (B5280 === B5281);
if ($T(B5282))
return [B5283, var__5264, value__5265]
else
{
var temp__5267 = B5069();
return [B5173, [[temp__5267, value__5265]], B5064([B5284], clauses__5266), [B5283, var__5264, temp__5267]]}}}
{
var B5324 = $K("else"),
B5325 = $S("if"),
B5326 = $S("cond"),
trueQ = B1507["true?"];
B5011.cond = function B5287 (____5288)
{
var cases__5289 = $SL.call(arguments, 1),
sequence__5305 = cases__5289,
B5306 = sequence__5305,
B5307 = ((B5306 || false).length || 0),
B5308 = 0,
value__5309 = (B5307 === B5308),
B5318 = !(trueQ(value__5309));
if ($T(B5318))
{
var sequence__5311 = cases__5289,
B5290 = sequence__5311[0],
test__5291 = B5290[0],
then__5292 = $SL.call(B5290, 1),
then__5293 = B5176(then__5292),
object1__5314 = test__5291,
object2__5315 = B5324,
B5319 = (object1__5314 === object2__5315);
if ($T(B5319))
return then__5293
else
{
var B5320 = B5325,
B5321 = [B5326],
sequence__5317 = cases__5289,
B5322 = sequence__5317.slice(1),
B5323 = B5064(B5321, B5322);
return [B5320, test__5291, then__5293, B5323]}}}}
B5011.when = function B5328 (____5329, test__5330)
{
var body__5331 = $SL.call(arguments, 2);
return [B5325, test__5330, B5176(body__5331), false]}
{
var B5337 = $S("not");
B5011.unless = function B5333 (____5334, test__5335)
{
var body__5336 = $SL.call(arguments, 2);
return [B5325, [B5337, test__5335], B5176(body__5336), false]}}
{
var B5367 = $S("when"),
B5368 = $S("and");
B5011.and = function B5340 (____5341)
{
var values__5342 = $SL.call(arguments, 1),
object__5345 = values__5342,
B5343 = ((object__5345 || false).length || 0),
object1__5348 = B5343,
object2__5349 = 0,
B5360 = (object1__5348 === object2__5349);
if ($T(B5360))
return true
else
{
var object1__5352 = B5343,
object2__5353 = 1,
B5361 = (object1__5352 === object2__5353);
if ($T(B5361))
{
var sequence__5355 = values__5342;
return sequence__5355[0]}
else
{
var B5362 = B5367,
sequence__5357 = values__5342,
B5363 = sequence__5357[0],
B5364 = [B5368],
sequence__5359 = values__5342,
B5365 = sequence__5359.slice(1),
B5366 = B5064(B5364, B5365);
return [B5362, B5363, B5366]}}}}
{
var B5403 = $S("or");
B5011.or = function B5371 (____5372)
{
var values__5373 = $SL.call(arguments, 1),
object__5377 = values__5373,
B5374 = ((object__5377 || false).length || 0),
object1__5380 = B5374,
object2__5381 = 0,
B5392 = (object1__5380 === object2__5381);
if ($T(B5392))
return false
else
{
var object1__5384 = B5374,
object2__5385 = 1,
B5393 = (object1__5384 === object2__5385);
if ($T(B5393))
{
var sequence__5387 = values__5373;
return sequence__5387[0]}
else
{
var value__5375 = B5069(),
B5394 = B5173,
sequence__5389 = values__5373,
B5395 = sequence__5389[0],
B5396 = [value__5375, B5395],
B5397 = [B5396],
B5398 = B5325,
B5399 = [B5403],
sequence__5391 = values__5373,
B5400 = sequence__5391.slice(1),
B5401 = B5064(B5399, B5400),
B5402 = [B5398, value__5375, value__5375, B5401];
return [B5394, B5397, B5402]}}}}
B5011["if-bind"] = function B5405 (____5406, binding__5407, then__5408, else__5409)
{
var var__5410 = binding__5407[0],
value__5411 = binding__5407[1],
temp__5412 = B5069();
return [B5173, [[temp__5412, value__5411]], [B5325, temp__5412, [B5173, [[var__5410, temp__5412]], then__5408], else__5409]]}
{
var B5418 = $S("%while");
B5011["while"] = function B5414 (____5415, test__5416)
{
var body__5417 = $SL.call(arguments, 2);
return [B5418, test__5416, B5176(body__5417)]}}
{
var B5424 = $S("while");
B5011.until = function B5420 (____5421, test__5422)
{
var body__5423 = $SL.call(arguments, 2);
return B5064([B5424, [B5337, test__5422]], body__5423)}}
{
var B5445 = $S("for"),
B5446 = $S("+"),
B5447 = $S(">=");
B5011.dotimes = function B5427 (____5428, binding__5429)
{
var body__5430 = $SL.call(arguments, 2),
temp__5431 = B5069(),
var__5432 = binding__5429[0],
count__5433 = binding__5429[1],
result__5434 = binding__5429[2],
B5436 = B5173,
B5437 = [[temp__5431, count__5433]],
B5438 = B5445,
B5439 = [[var__5432, 0, [B5446, var__5432, 1]]],
B5440 = [B5447, var__5432, temp__5431],
B5435 = result__5434,
B5441;
if ($T(B5435))
B5441 = B5435
else
B5441 = false;
var B5442 = [B5440, B5441],
B5443 = [B5438, B5439, B5442],
B5444 = B5064(B5443, body__5430);
return [B5436, B5437, B5444]}}
{
var B5556 = $S("method"),
B5557 = $S("begin"),
trueQ = B1507["true?"],
B5456 = B1507["any?"],
B5457 = B1507["push-last"],
B5458 = B1507.slice,
B5459 = B1507.third;
B5011["for"] = function B5460 (____5461, clauses__5462, end__5463)
{
var body__5464 = $SL.call(arguments, 3),
init_clauses__5465 = [],
next_clauses__5466 = [],
vars__5467 = B5063(B4969, clauses__5462),
B5468 = clauses__5462,
B5469,
B5470,
B5471 = [B5468];
while (true)
{
var B5472 = B5469,
value__5478;
if ($T(B5472))
value__5478 = B5472
else
value__5478 = B5456(B5062, B5471);
var B5542 = !(trueQ(value__5478));
if ($T(B5542))
{
var sequence__5480 = B5468,
clause__5473 = sequence__5480[0];
(function B5474 (clause__5475)
{
var array__5489 = init_clauses__5465,
array__5486 = clause__5475,
start__5487 = 0,
end__5488 = 2,
value__5490 = array__5486.slice(start__5487, end__5488);
array__5489.push(value__5490);
array__5489;
var array__5495 = next_clauses__5466,
sequence__5494 = clause__5475,
value__5496 = sequence__5494[0];
array__5495.push(value__5496);
array__5495;
var array__5501 = next_clauses__5466,
sequence__5500 = clause__5475,
value__5502 = sequence__5500[2];
array__5501.push(value__5502);
return array__5501})(clause__5473);
var sequence__5504 = B5468,
B5541 = sequence__5504.slice(1);
B5468 = B5541;
B5471 = [B5468]}
else
break};
B5470;
var B5543 = B5173,
B5544 = B5424,
sequence__5515 = end__5463,
B5516 = sequence__5515,
B5517 = ((B5516 || false).length || 0),
B5518 = 0,
B5476 = (B5517 === B5518),
B5547;
if ($T(B5476))
B5547 = B5476
else
{
var B5545 = B5337,
sequence__5520 = end__5463,
B5546 = sequence__5520[0];
B5547 = [B5545, B5546]};
var B5548 = B5064([B5064([B5556, vars__5467], body__5464)], vars__5467),
B5549 = B5064([B5284], next_clauses__5466),
B5550 = [B5544, B5547, B5548, B5549],
B5551 = B5064(B5550),
sequence__5533 = end__5463,
sequence__5534 = sequence__5533.slice(1),
B5535 = sequence__5534,
B5536 = ((B5535 || false).length || 0),
B5537 = 0,
value__5538 = (B5536 === B5537),
B5552 = !(trueQ(value__5538)),
B5555;
if ($T(B5552))
{
var B5553 = [B5557],
sequence__5540 = end__5463,
B5554 = sequence__5540.slice(1);
B5555 = B5064(B5553, B5554)}
else
B5555 = false;
return [B5543, init_clauses__5465, B5551, B5555]}}
{
var B5643 = $S("rest"),
B5644 = $S("%array"),
B5645 = $S("until"),
B5646 = $S("any?"),
B5647 = $S("empty?"),
B5648 = $S("first"),
B5564 = B1507.second;
B5011["for-each"] = function B5565 (____5566, clauses__5567, end__5568)
{
var body__5569 = $SL.call(arguments, 3),
clauses__5572 = B5063(function B5570 (clause__5571)
{return B5064([B5069()], clause__5571)}, clauses__5567),
endQ__5573 = B5069(),
values__5574 = B5069(),
result__5575 = B5069(),
B5615 = B5557,
vars__5576 = B5063(B5564, clauses__5572),
B5616 = B5064([B5064([B5556, vars__5576], body__5569)], vars__5576),
B5617 = [B5615, B5616],
B5623 = B5063(function B5577 (clause__5578)
{
var B5618 = B5283,
sequence__5594 = clause__5578,
B5619 = sequence__5594[0],
B5620 = B5643,
sequence__5596 = clause__5578,
B5621 = sequence__5596[0],
B5622 = [B5620, B5621];
return [B5618, B5619, B5622]}, clauses__5572),
B5624 = [[B5283, values__5574, B5064([B5644], B5063(B4969, clauses__5572))]],
body__5579 = B5064(B5617, B5623, B5624),
B5625 = B5173,
B5626 = B5064(B5063(function B5580 (clause__5581)
{
var temp__5582 = clause__5581[0],
var__5583 = clause__5581[1],
values__5584 = clause__5581[2];
return [temp__5582, values__5584]}, clauses__5572), [[endQ__5573, false], [result__5575, false], [values__5574, B5064([B5644], B5063(B4969, clauses__5572))]]),
B5627 = B5645,
B5628 = [B5403, endQ__5573, [B5646, B5647, values__5574]],
B5629 = B5173,
B5630 = B5063(function B5585 (clause__5586)
{
var temp__5587 = clause__5586[0],
var__5588 = clause__5586[1],
values__5589 = clause__5586[2];
return [var__5588, [B5648, temp__5587]]}, clauses__5572),
sequence__5598 = end__5568,
B5590 = sequence__5598[0],
B5640;
if ($T(B5590))
{
var end_test__5591 = B5590,
B5631 = B5325,
B5632 = B5557,
B5633 = B5283,
sequence__5600 = end__5568,
results__5592 = sequence__5600.slice(1),
sequence__5611 = results__5592,
B5612 = sequence__5611,
B5613 = ((B5612 || false).length || 0),
B5614 = 0,
B5634 = (B5613 === B5614),
B5635;
if ($T(B5634))
B5635 = [false]
else
B5635 = results__5592;
var B5636 = B5176(B5635),
B5637 = [B5633, result__5575, B5636],
B5638 = [B5283, endQ__5573, true],
B5639 = [B5632, B5637, B5638];
B5640 = [B5631, end_test__5591, B5639, body__5579]}
else
B5640 = body__5579;
var B5641 = [B5629, B5630, B5640],
B5642 = [B5627, B5628, B5641];
return [B5625, B5626, B5642, result__5575]}}
B5011["bind-properties"] = function B5651 (____5652, properties__5653, object__5654)
{
var body__5655 = $SL.call(arguments, 3),
objectT__5656 = B5069();
return B5064([B5173, B5064([[objectT__5656, object__5654]], B5063(function B5657 (property__5658)
{return [property__5658, [B5260, objectT__5656, B4957(property__5658)]]}, properties__5653))], body__5655)}
B5011.select = function B5662 (____5663, value__5664, test__5665)
{
var cases__5666 = $SL.call(arguments, 3),
valueT__5667 = B5069(),
testT__5668;
if ($T(B5066(test__5665, B5198)))
testT__5668 = test__5665
else
testT__5668 = B5069();
var test_expression__5669 = function B5670 (test_value__5671)
{return [testT__5668, valueT__5667, test_value__5671]},
B5680 = B5173,
B5681 = [[valueT__5667, value__5664]],
B5682;
if ($T(B5066(test__5665, B5198)))
B5682 = []
else
B5682 = [[testT__5668, test__5665]];
var B5683 = B5064(B5681, B5682),
B5685 = B5064([B5326], B5063(function B5672 (case__5673)
{
var tests__5674 = case__5673[0],
then__5675 = $SL.call(case__5673, 1),
object1__5678 = tests__5674,
object2__5679 = B5324,
B5684 = (object1__5678 === object2__5679);
if ($T(B5684))
return case__5673
else
return B5064([B5064([B5403], B5063(test_expression__5669, tests__5674))], then__5675)}, cases__5666));
return [B5680, B5683, B5685]}
var destructure__5689,
B5688 = B4955("destructure", function destructure__5689 (bindings__5690, values__5691, body__5692)
{if ($T(B5066(values__5691, B5198)))
{
var B5693 = B5021(bindings__5690),
required__5694 = B5693[0],
rest__5695 = B5693[1],
key__5696 = B5693[2],
object__5703 = required__5694,
i__5697 = ((object__5703 || false).length || 0);
return B5048(function B5698 (body__5699, binding__5700)
{
i__5697 = (i__5697 - 1);
if ($T(B5066(binding__5700, B5198)))
return [B5173, [[binding__5700, [B5260, values__5691, i__5697]]], body__5699]
else
return destructure__5689(binding__5700, [B5260, values__5691, i__5697], body__5699)}, B5070(body__5692, values__5691, required__5694, rest__5695, key__5696), B5199(required__5694))}
else
{
var var__5701 = B5069();
return [B5173, [[var__5701, values__5691]], destructure__5689(bindings__5690, var__5701, body__5692)]}}, false)
B5011["destructuring-bind"] = function B5705 (____5706, bindings__5707, values__5708)
{
var body__5709 = $SL.call(arguments, 3);
return B5688(bindings__5707, values__5708, B5064([B5557], body__5709))}
B5011["bind-methods"] = function B5712 (____5713, bindings__5714)
{
var body__5715 = $SL.call(arguments, 2);
return B5064([B5173, B5063(B4969, bindings__5714)], B5063(function B5716 (binding__5717)
{
var identifier__5718 = binding__5717[0],
arguments__5719 = binding__5717[1],
body__5720 = $SL.call(binding__5717, 2);
return [B5283, identifier__5718, B5064([B5556, arguments__5719], body__5720)]}, bindings__5714), body__5715)}
B5011["inc!"] = function B5723 (____5724, object__5725, value__5726)
{
var B5728 = B5283,
B5729 = B5446,
B5727 = value__5726,
B5730;
if ($T(B5727))
B5730 = B5727
else
B5730 = 1;
var B5731 = [B5729, object__5725, B5730];
return [B5728, object__5725, B5731]}
{
var B5743 = $S("-");
B5011["dec!"] = function B5734 (____5735, object__5736, value__5737)
{
var B5739 = B5283,
B5740 = B5743,
B5738 = value__5737,
B5741;
if ($T(B5738))
B5741 = B5738
else
B5741 = 1;
var B5742 = [B5740, object__5736, B5741];
return [B5739, object__5736, B5742]}}
{
var B5763 = $S("%plus");
B5011["+"] = function B5745 (____5746)
{
var values__5747 = $SL.call(arguments, 1),
sequence__5758 = values__5747,
B5759 = sequence__5758,
B5760 = ((B5759 || false).length || 0),
B5761 = 0,
B5762 = (B5760 === B5761);
if ($T(B5762))
return 0
else
return B5064([B5763], values__5747)}}
{
var B5784 = $S("%minus");
B5011["-"] = function B5765 (____5766, minuend__5767)
{
var subtrahends__5768 = $SL.call(arguments, 2),
sequence__5779 = subtrahends__5768,
B5780 = sequence__5779,
B5781 = ((B5780 || false).length || 0),
B5782 = 0,
B5783 = (B5781 === B5782);
if ($T(B5783))
return [B5174, "-", minuend__5767]
else
return B5064([B5784, minuend__5767], subtrahends__5768)}}
{
var B5804 = $S("%times");
B5011["*"] = function B5786 (____5787)
{
var values__5788 = $SL.call(arguments, 1),
sequence__5799 = values__5788,
B5800 = sequence__5799,
B5801 = ((B5800 || false).length || 0),
B5802 = 0,
B5803 = (B5801 === B5802);
if ($T(B5803))
return 1
else
return B5064([B5804], values__5788)}}
{
var B5825 = $S("%divide");
B5011["/"] = function B5806 (____5807, numerator__5808)
{
var denominators__5809 = $SL.call(arguments, 2),
sequence__5820 = denominators__5809,
B5821 = sequence__5820,
B5822 = ((B5821 || false).length || 0),
B5823 = 0,
B5824 = (B5822 === B5823);
if ($T(B5824))
return [B5825, 1, numerator__5808]
else
return B5064([B5825, numerator__5808], denominators__5809)}}
{
var B5829 = $S("next-method"),
B5830 = $S("%native");
B5011["call-next-method"] = function B5827 (____5828)
{return [[B5260, B5829, "apply"], [B5830, "null"], B5190]}}
var B5861 = $S("%symbol"),
trueQ = B1507["true?"],
transform_quoted__5832,
B5831 = B4955("transform_quoted", function transform_quoted__5832 (form__5833)
{if ($T(B5066(form__5833, B5067)))
{
var sequence__5845 = form__5833,
B5846 = sequence__5845,
B5847 = ((B5846 || false).length || 0),
B5848 = 0,
value__5849 = (B5847 === B5848),
B5858 = !(trueQ(value__5849)),
B5860;
if ($T(B5858))
{
var sequence__5853 = form__5833,
B5859 = sequence__5853[0],
object1__5854 = B4957(B5859),
object2__5855 = "%comma";
B5860 = (object1__5854 === object2__5855)}
else
B5860 = false;
if ($T(B5860))
{
var sequence__5857 = form__5833;
return sequence__5857[1]}
else
return B5064([B5644], B5063(transform_quoted__5832, form__5833))}
else
if ($T(B5066(form__5833, B5198)))
return [B5861, B4957(form__5833)]
else
return form__5833}, false)
B5011["%backquote"] = function B5863 (____5864, exp__5865)
{return B5831(exp__5865)}
{
var B5875 = $K("message"),
B5867 = B1507.signal,
B5868 = B1507.make,
B5869 = B1507["<error>"];
B5011["%comma"] = function B5870 (____5871, value__5872)
{
var error__5874 = B5868(B5869, B5875, "comma not inside backquote");
throw(error__5874);
return false}}
var B5876 = B5868(B5869, B5875, "unsupported name for call in dot")
{
var B5880 = B1507["<string>"];
B5011["."] = function B5881 (____5882, value__5883)
{
var calls__5884 = $SL.call(arguments, 2);
return B5048(function B5885 (value__5886, call__5887)
{
var property__5888 = call__5887[0],
arguments__5889 = $SL.call(call__5887, 1),
B5893 = B5260,
B5890 = property__5888,
B5894;
if ($T(B5066(B5890, B5880)))
B5894 = property__5888
else
if ($T(B5066(B5890, B5198)))
B5894 = B4957(property__5888)
else
{
var error__5892 = B5876;
throw(error__5892);
B5894 = false};
var B5895 = [B5893, value__5886, B5894],
B5896 = [B5895];
return B5064(B5896, arguments__5889)}, value__5883, calls__5884)}}
var B5899 = B4955("simplify_arguments", function simplify_arguments__5900 (arguments__5901)
{
var B5902 = B5021(arguments__5901),
required__5903 = B5902[0],
rest__5904 = B5902[1],
key__5905 = B5902[2],
required__5908 = B5063(function B5906 (argument__5907)
{if ($T(B5066(argument__5907, B5067)))
{
var sequence__5910 = argument__5907;
return sequence__5910[0]}
else
return argument__5907}, required__5903),
B5911;
if ($T(rest__5904))
B5911 = B5064([B5043], rest__5904)
else
B5911 = [];
var B5912;
if ($T(key__5905))
B5912 = B5064([B5044], key__5905)
else
B5912 = [];
return B5064(required__5908, B5911, B5912)}, false)
var B5985 = $S("%native-name"),
B5986 = $S("<object>"),
trueQ = B1507["true?"],
B5918 = B1507.symbol,
B5919 = B1507[">"],
B5920 = B4919["setter-identifier?"],
B5921 = B1507["%keys"],
B5922 = B4955("make_function_definer", function make_function_definer__5923 (macro_name__5924, definer_name__5925)
{
var B5926 = $SL.call(arguments, 2),
B5927 = B5921(B5926, {"name?":false,
"type/existing?":false,
"record?":false}),
nameQ__5928 = B5927["name?"],
typeSexistingQ__5929 = B5927["type/existing?"],
recordQ__5930 = B5927["record?"];
return function B5931 (env__5932, identifier__5933, arguments__5934)
{
var body__5935 = $SL.call(arguments, 3),
B5936;
if ($T(B5920(identifier__5933)))
{
var sequence__5944 = identifier__5933,
B5971 = sequence__5944[1],
B5972 = B5233(B5971);
B5936 = [true, B5972]}
else
B5936 = [false, identifier__5933];
var setterQ__5937 = B5936[0],
identifier__5938 = B5936[1],
B5939 = B5066(identifier__5938, B5198),
value__5946;
if ($T(B5939))
value__5946 = B5939
else
value__5946 = setterQ__5937;
var B5973 = !(trueQ(value__5946));
if ($T(B5973))
{
var error__5948 = B5868(B5869, B5875, B5064(macro_name__5924, ": ", "name not <var> or (setter <var>)"));
throw(error__5948);
false};
var B5974;
if ($T(typeSexistingQ__5929))
{
var sequence__5959 = arguments__5934,
B5960 = sequence__5959,
B5961 = ((B5960 || false).length || 0),
B5962 = 0;
B5974 = (B5961 === B5962)}
else
B5974 = false;
if ($T(B5974))
{
var error__5964 = B5868(B5869, B5875, B5064(macro_name__5924, ": ", "method has no arguments"));
throw(error__5964);
false};
var simplified_arguments__5940 = B5899(arguments__5934),
B5975;
if ($T(nameQ__5928))
B5975 = identifier__5938
else
B5975 = B5069();
var B5976 = B5176(body__5935),
B5977 = B5181(B5975, simplified_arguments__5940, B5976),
method_definition__5941 = B4981(B5977, env__5932);
if ($T(recordQ__5930))
B4956(env__5932, "module", "functions", B4957(identifier__5938), method_definition__5941);
var B5978 = B5000,
B5979 = [B5918(definer_name__5925), [B5985, B4957(identifier__5938)], method_definition__5941, setterQ__5937],
B5983;
if ($T(typeSexistingQ__5929))
{
var sequence__5966 = arguments__5934,
head__5942 = sequence__5966[0],
B5981;
if ($T(B5066(head__5942, B5067)))
{
var object__5968 = head__5942,
B5980 = ((object__5968 || false).length || 0);
B5981 = B5919(B5980, 1)}
else
B5981 = false;
var B5982;
if ($T(B5981))
{
var sequence__5970 = head__5942;
B5982 = sequence__5970[1]}
else
B5982 = B5986;
B5983 = [B5982, identifier__5938]}
else
B5983 = [];
var B5984 = B5064(B5979, B5983);
return [B5978, identifier__5938, B5984]}}, false)
{
var B6010 = $K("record?"),
B6011 = $K("name?"),
B6012 = $K("type/existing?"),
trueQ = B1507["true?"],
B5993 = B1507.apply,
B5994 = [["define-function", "%make-function", B6010, true, B6011, true], ["define-method", "%make-method", B6012, true]],
B5995,
B5996,
B5997 = [B5994];
while (true)
{
var B5998 = B5995,
value__6003;
if ($T(B5998))
value__6003 = B5998
else
value__6003 = B5456(B5062, B5997);
var B6009 = !(trueQ(value__6003));
if ($T(B6009))
{
var sequence__6005 = B5994,
arguments__5999 = sequence__6005[0];
(function B6000 (arguments__6001)
{return B5011[B4969(arguments__6001)] = B5993(B5922, arguments__6001)})(arguments__5999);
var sequence__6007 = B5994,
B6008 = sequence__6007.slice(1);
B5994 = B6008;
B5997 = [B5994]}
else
break};
B5996}
{
var B6018 = $S("%make-generic");
B5011["define-generic"] = function B6014 (____6015, identifier__6016, arguments__6017)
{return [B5000, identifier__6016, [B6018, [B5985, B4957(identifier__6016)]]]}}
{
var B6095 = $S("%make-class"),
trueQ = B1507["true?"];
B5011["define-class"] = function B6026 (____6027, identifier__6028, superclass__6029)
{
var properties__6030 = $SL.call(arguments, 3),
object__6031 = [B5172],
B6032 = properties__6030,
B6033,
B6034,
B6035 = [B6032];
while (true)
{
var B6036 = B6033,
value__6041;
if ($T(B6036))
value__6041 = B6036
else
value__6041 = B5456(B5062, B6035);
var B6089 = !(trueQ(value__6041));
if ($T(B6089))
{
var sequence__6043 = B6032,
property__6037 = sequence__6043[0];
(function B6038 (property__6039)
{if ($T(B5066(property__6039, B5067)))
{
var array__6048 = object__6031,
sequence__6047 = property__6039,
B6084 = sequence__6047[0],
value__6049 = B4957(B6084);
array__6048.push(value__6049);
array__6048;
var array__6054 = object__6031,
B6085 = B5556,
B6086 = [],
sequence__6053 = property__6039,
B6087 = sequence__6053[1],
value__6055 = [B6085, B6086, B6087];
array__6054.push(value__6055);
return array__6054}
else
{
var array__6058 = object__6031,
value__6059 = B4957(property__6039);
array__6058.push(value__6059);
array__6058;
var array__6062 = object__6031,
value__6063 = undefined;
array__6062.push(value__6063);
return array__6062}})(property__6037);
var sequence__6065 = B6032,
B6088 = sequence__6065.slice(1);
B6032 = B6088;
B6035 = [B6032]}
else
break};
B6034;
var B6090 = B5000,
B6091 = B6095,
sequence__6077 = superclass__6029,
B6078 = sequence__6077,
B6079 = ((B6078 || false).length || 0),
B6080 = 0,
value__6081 = (B6079 === B6080),
B6092 = !(trueQ(value__6081)),
B6093;
if ($T(B6092))
{
var sequence__6083 = superclass__6029;
B6093 = sequence__6083[0]}
else
B6093 = false;
var B6094 = [B6091, B6093, object__6031];
return [B6090, identifier__6028, B6094]}}
var B6096 = B4955("get_import_module_nameSoptions", function get_import_module_nameSoptions__6097 (import__6098)
{
var B6103;
if ($T(B5066(import__6098, B5067)))
{
var sequence__6100 = import__6098;
B6103 = sequence__6100[0]}
else
B6103 = import__6098;
var B6104 = B4957(B6103),
B6105;
if ($T(B5066(import__6098, B5067)))
{
var sequence__6102 = import__6098;
B6105 = sequence__6102.slice(1)}
else
B6105 = [];
return [B6104, B6105]}, false)
{
var B6113 = B4919["identifier-name"],
B6114,
B6115,
B6116;
B5011["define-module"] = function B6117 (env__6118, ____6119)
{
var B6120 = $SL.call(arguments, 2),
B6121 = B5921(B6120, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}),
import__6122 = B6121["import"],
export__6123 = B6121["export"],
compile_time_import__6124 = B6121["compile-time-import"],
inline__6125 = B6121.inline;
B4956(env__6118, "module", "exports", B5063(B6113, export__6123));
B4979(function B6126 (import__6127)
{
var B6128 = B6096(import__6127),
module_name__6129 = B6128[0],
options__6130 = B6128[1];
return B5993(B6114, env__6118, module_name__6129, options__6130)}, compile_time_import__6124);
B4956(env__6118, "module", "inline", B5063(B6113, inline__6125));
return B5176(B5063(function B6131 (import__6132)
{
var B6133 = B6096(import__6132),
module_name__6134 = B6133[0],
options__6135 = B6133[1];
B5993(B6115, B4968(env__6118, "module"), module_name__6134, options__6135);
return B6116(module_name__6134, env__6118)}, import__6122))}}
B6116 = B4955("make_import_definition", function make_import_definition__6136 (module_name__6137, env__6138)
{
var identifier__6139 = B5069();
B4956(env__6138, "import-identifiers", module_name__6137, identifier__6139);
return [B5000, identifier__6139, [[B5830, "require"], module_name__6137]]}, false)
{
var B6146 = $S("define-function");
B5011["define-macro"] = function B6141 (env__6142, identifier__6143, arguments__6144)
{
var body__6145 = $SL.call(arguments, 3);
return [B5557, B5064([B6146, identifier__6143, B5064([B5069()], arguments__6144)], body__6145), [B5283, [B5260, identifier__6143, "%macro?"], true]]}}
B5011["define-symbol-macro"] = function B6148 (env__6149, identifier__6150, arguments__6151)
{
var body__6152 = $SL.call(arguments, 3);
return [B5557, B5064([B6146, identifier__6150, []], body__6152), [B5283, [B5260, identifier__6150, "%symbol-macro?"], true]]}
{
var B6173 = $S("%try"),
B6174 = $S("instance?");
B5011["handler-case"] = function B6158 (____6159, body__6160)
{
var cases__6161 = $SL.call(arguments, 2),
condition_var__6162 = B5069();
return [B6173, body__6160, condition_var__6162, B5064([B5326], B5063(function B6163 (case__6164)
{
var B6165 = case__6164[0],
type__6166 = B6165[0],
B6167 = $SL.call(B6165, 1),
B6168 = B5921(B6167, {condition:false}),
condition__6169 = B6168.condition,
body__6170 = $SL.call(case__6164, 1),
B6171 = [[B6174, condition_var__6162, type__6166]],
B6172;
if ($T(condition__6169))
B6172 = [B5064([B5173, [[condition__6169, condition_var__6162]]], body__6170)]
else
B6172 = body__6170;
return B5064(B6171, B6172)}, cases__6161))]}}
{
var B6193 = $S("%call"),
B6194 = $S("get-setter");
B5011["get-setter"] = function B6176 (____6177, object__6178, property__6179)
{
var propertiesSvalue__6180 = $SL.call(arguments, 3),
object__6184 = propertiesSvalue__6180,
object1__6185 = ((object__6184 || false).length || 0),
object2__6186 = 1,
B6189 = (object1__6185 === object2__6186);
if ($T(B6189))
{
var B6190 = B4994,
B6191 = [B5260, object__6178, property__6179],
sequence__6188 = propertiesSvalue__6180,
B6192 = sequence__6188[0];
return [B6190, B6191, B6192]}
else
return B5064([B6193, B6194, object__6178, property__6179], propertiesSvalue__6180)}}
{
var B6199 = $S("symbol");
B5011.symbol = function B6196 (____6197, name__6198)
{if ($T(B5066(name__6198, B5880)))
return [B5861, name__6198]
else
return [B6193, B6199, name__6198]}}
{
var B6222 = $S("binary=="),
B6223 = $S("=="),
B6201;
B5011["=="] = function B6202 (____6203, object1__6204, object2__6205)
{
var objects__6206 = $SL.call(arguments, 3),
sequence__6217 = B6201,
B6218 = sequence__6217,
B6219 = ((B6218 || false).length || 0),
B6220 = 0,
B6221 = (B6219 === B6220);
if ($T(B6221))
return [B6222, object1__6204, object2__6205]
else
return B5064([B6193, B6223, object1__6204, object2__6205], objects__6206)}}
{
var B6224 = B4928();
exports["*core-symbol-macros*"] = B6224}
{
var B6228 = $S("%next-method"),
B6229 = $S("%this-method");
B6224["next-method"] = function B6226 (____6227)
{return [B6228, B6229]}}
var trueQ = B1507["true?"],
B6231 = B4955("find_macro_definition", function find_macro_definition__6232 (form__6233, env__6234)
{
var B6235 = form__6233;
if ($T(B5066(B6235, B5067)))
{
var sequence__6248 = form__6233,
B6249 = sequence__6248,
B6250 = ((B6249 || false).length || 0),
B6251 = 0,
B6260 = (B6250 === B6251);
if ($T(B6260))
{
var error__6253 = "Empty form";
throw(error__6253);
false};
var sequence__6255 = form__6233,
B6261 = sequence__6255[0],
name__6236 = B4957(B6261),
value__6257 = B4968(env__6234, "bound?", name__6236),
B6262 = !(trueQ(value__6257));
if ($T(B6262))
return env__6234.macros[name__6236]}
else
if ($T(B5066(B6235, B5198)))
{
var name__6237 = B4957(form__6233),
value__6259 = B4968(env__6234, "bound?", name__6237),
B6263 = !(trueQ(value__6259));
if ($T(B6263))
return env__6234["symbol-macros"][name__6237]}}, false)
{
var B6265 = B4955("macroexpand_1", function macroexpand_1__6266 (form__6267, env__6268)
{
var B6269 = B6231(form__6267, env__6268);
if ($T(B6269))
{
var macro__6270 = B6269,
B6273;
if ($T(B5066(form__6267, B5067)))
{
var sequence__6272 = form__6267;
B6273 = sequence__6272.slice(1)}
else
B6273 = form__6267;
return B5993(macro__6270, env__6268, B6273)}
else
return form__6267}, false);
exports["macroexpand-1"] = B6265}
{
var trueQ = B1507["true?"],
B6274 = B4955("macroexpand", function macroexpand__6275 (form__6276, env__6277)
{
var doneQ__6278;
while (true)
{
var value__6281 = doneQ__6278,
B6287 = !(trueQ(value__6281));
if ($T(B6287))
{
var expanded__6279 = B6265(form__6276, env__6277),
object1__6284 = expanded__6279,
object2__6285 = form__6276,
B6286 = (object1__6284 === object2__6285);
doneQ__6278 = B6286;
form__6276 = expanded__6279}
else
break};
return form__6276}, false);
exports.macroexpand = B6274}
{
var macroexpand_all__6292,
B6290,
B6291 = B1507.rcurry;
B4981 = B4955("macroexpand_all", function macroexpand_all__6292 (form__6293, env__6294)
{
var B6295 = form__6293;
if ($T(B5066(B6295, B5067)))
if ($T(B6231(form__6293, env__6294)))
return B6290(macroexpand_all__6292(B6274(form__6293, env__6294), env__6294))
else
{
var B6296 = B4970(form__6293, env__6294);
if ($T(B6296))
{
var expander__6297 = B6296,
sequence__6299 = form__6293,
B6300 = sequence__6299.slice(1);
return B5993(expander__6297, env__6294, B6300)}
else
return B5063(B6291(macroexpand_all__6292, env__6294), form__6293)}
else
if ($T(B5066(B6295, B5198)))
if ($T(B6231(form__6293, env__6294)))
return macroexpand_all__6292(B6274(form__6293, env__6294), env__6294)
else
return form__6293
else
return form__6293}, false);
exports["macroexpand-all"] = B4981}
B6290 = B4955("maybe_call", function maybe_call__6301 (exp__6302)
{
var B6311;
if ($T(B4967(exp__6302, B5067)))
{
var sequence__6306 = exp__6302,
object1__6307 = sequence__6306[0],
object2__6308 = B6193;
B6311 = (object1__6307 === object2__6308)}
else
B6311 = false;
if ($T(B6311))
{
var sequence__6310 = exp__6302;
return sequence__6310.slice(1)}
else
return exp__6302}, false)
var B6315 = B4955("find_moduleSimport_name", function find_moduleSimport_name__6316 (definition_name__6317, env__6318)
{return B5456(function B6319 (import__6320)
{
var module__6321 = import__6320[0],
names__6322 = import__6320[1];
return B5456(function B6323 (name__6324)
{
var B6325;
if ($T(B5066(name__6324, B5067)))
B6325 = name__6324
else
B6325 = [name__6324, name__6324];
var import_name__6326 = B6325[0],
new_name__6327 = B6325[1],
object1__6330 = definition_name__6317,
object2__6331 = new_name__6327,
B6332 = (object1__6330 === object2__6331);
if ($T(B6332))
return [module__6321, import_name__6326]}, names__6322)}, B4968(env__6318, "module", "imports"))}, false)
var B6333 = B4955("find_import_identifier", function find_import_identifier__6334 (module__6335, env__6336)
{return B4968(env__6336, "import-identifiers", B4968(module__6335, "name"))}, false)
{
var B6372 = $S("%begin"),
B6373 = $S("%define"),
B6338 = B1507["set-subtract!"],
B6339 = B4922["find-free-variables"],
B6340 = B4919["environment-definitions"],
B6341 = B4919["*defined*"],
B6342 = B4955("define_free_variables", function define_free_variables__6343 (exp__6344, env__6345)
{
var variables__6346 = B5048(B6338, B6339(exp__6344), [B6340(env__6345), B6341]),
sequence__6364 = variables__6346,
B6365 = sequence__6364,
B6366 = ((B6365 || false).length || 0),
B6367 = 0,
B6368 = (B6366 === B6367);
if ($T(B6368))
return exp__6344
else
return B5064([B6372], B5063(function B6347 (variable__6348)
{
var name__6349 = B4957(variable__6348);
B4956(env__6345, "defined?", name__6349, true);
var B6369 = [[B6373, variable__6348]],
moduleSimport_name__6350 = B6315(name__6349, env__6345),
B6370;
if ($T(moduleSimport_name__6350))
{
var module__6351 = moduleSimport_name__6350[0],
import_name__6352 = moduleSimport_name__6350[1],
import_identifier__6353 = B6333(module__6351, env__6345);
B6370 = [[B4994, variable__6348, [B5260, import_identifier__6353, import_name__6352]]]}
else
B6370 = [];
var B6371 = B5064(B6369, B6370);
return B5176(B6371)}, variables__6346), [exp__6344])}, false);
exports["define-free-variables"] = B6342}
var trueQ = B1507["true?"],
B6376 = B1507.choose,
B6377 = B1507["has?"],
B6378 = B4955("define_free_variables2", function define_free_variables2__6379 (exp__6380, env__6381)
{
var free__6382 = B6338(B6339(exp__6380), B6341),
variables__6385 = B6376(function B6383 (variable__6384)
{
var object__6397 = B4968(env__6381, "definition-names"),
property__6398 = B4957(variable__6384),
value__6399 = $HP.call(object__6397,property__6398);
return !(trueQ(value__6399))}, free__6382),
sequence__6410 = variables__6385,
B6411 = sequence__6410,
B6412 = ((B6411 || false).length || 0),
B6413 = 0,
B6414 = (B6412 === B6413);
if ($T(B6414))
return exp__6380
else
return B5064([B6372], B5063(function B6386 (variable__6387)
{
var name__6388 = B4957(variable__6387);
B4956(env__6381, "defined?", name__6388, true);
var B6415 = [[B6373, variable__6387]],
moduleSimport_name__6389 = B6315(name__6388, env__6381),
B6416;
if ($T(moduleSimport_name__6389))
{
var module__6390 = moduleSimport_name__6389[0],
import_name__6391 = moduleSimport_name__6389[1],
old_import_identifier__6392 = B6333(module__6390, env__6381),
import_identifier__6393 = B4968(env__6381, "new-identifiers", B4957(old_import_identifier__6392));
B6416 = [[B4994, variable__6387, [B5260, import_identifier__6393, import_name__6391]]]}
else
B6416 = [];
var B6417 = B5064(B6415, B6416);
return B5176(B6417)}, variables__6385), [exp__6380])}, false)
var trueQ = B1507["true?"],
dec = B1507.dec,
inline__6442,
B6436 = B1507["last-setter"],
B6437 = B1507.last,
B6438 = B1507["second-setter"],
B6439,
B6440,
B6441 = B4955("inline", function inline__6442 (form__6443, env__6444)
{
var B6612;
if ($T(B5066(form__6443, B5067)))
{
var sequence__6487 = form__6443,
B6488 = sequence__6487,
B6489 = ((B6488 || false).length || 0),
B6490 = 0,
value__6491 = (B6489 === B6490);
B6612 = !(trueQ(value__6491))}
else
B6612 = false;
if ($T(B6612))
{
var sequence__6493 = form__6443,
B6613 = sequence__6493[0],
B6614 = B5066(B6613, B5198);
if ($T(B6614))
{
var sequence__6495 = form__6443,
B6615 = sequence__6495[0],
B6445 = B4957(B6615),
object1__6498 = B6445,
object2__6499 = "%method",
B6446 = (object1__6498 === object2__6499),
B6616;
if ($T(B6446))
B6616 = B6446
else
{
var object1__6502 = B6445,
object2__6503 = "%set";
B6616 = (object1__6502 === object2__6503)};
if ($T(B6616))
{
var array__6516 = form__6443,
array__6513 = form__6443,
B6514 = array__6513,
B6515 = ((B6514 || false).length || 0),
B6617 = (B6515 - 1),
B6618 = array__6513[B6617],
value__6517 = inline__6442(B6618, env__6444);
array__6516[dec(B5018(array__6516), 1)] = value__6517;
return form__6443}
else
{
var object1__6520 = B6445,
object2__6521 = "%bind",
B6619 = (object1__6520 === object2__6521);
if ($T(B6619))
{
var ____6447 = form__6443[0],
binding__6448 = form__6443[1],
body__6449 = form__6443[2],
array__6526 = binding__6448,
sequence__6525 = binding__6448,
B6620 = sequence__6525[1],
value__6527 = inline__6442(B6620, env__6444);
array__6526[1] = value__6527;
var array__6530 = form__6443,
value__6531 = inline__6442(body__6449, env__6444);
array__6530[dec(B5018(array__6530), 1)] = value__6531;
return form__6443}
else
{
var object1__6534 = B6445,
object2__6535 = "%try",
B6621 = (object1__6534 === object2__6535);
if ($T(B6621))
{
var ____6450 = form__6443[0],
body__6451 = form__6443[1],
var__6452 = form__6443[2],
catch__6453 = form__6443[3],
array__6538 = form__6443,
value__6539 = inline__6442(body__6451, env__6444);
array__6538[1] = value__6539;
var array__6542 = form__6443,
value__6543 = inline__6442(catch__6453, env__6444);
array__6542[dec(B5018(array__6542), 1)] = value__6543;
return form__6443}
else
{
var object1__6546 = B6445,
object2__6547 = "%begin",
B6454 = (object1__6546 === object2__6547),
B6622;
if ($T(B6454))
B6622 = B6454
else
{
var object1__6550 = B6445,
object2__6551 = "%if",
B6455 = (object1__6550 === object2__6551);
if ($T(B6455))
B6622 = B6455
else
{
var object1__6554 = B6445,
object2__6555 = "%while",
B6456 = (object1__6554 === object2__6555);
if ($T(B6456))
B6622 = B6456
else
{
var object1__6558 = B6445,
object2__6559 = "%array",
B6457 = (object1__6558 === object2__6559);
if ($T(B6457))
B6622 = B6457
else
{
var object1__6562 = B6445,
object2__6563 = "%object",
B6458 = (object1__6562 === object2__6563);
if ($T(B6458))
B6622 = B6458
else
{
var object1__6566 = B6445,
object2__6567 = "%get-property",
B6459 = (object1__6566 === object2__6567);
if ($T(B6459))
B6622 = B6459
else
{
var object1__6570 = B6445,
object2__6571 = "%native-call",
B6460 = (object1__6570 === object2__6571);
if ($T(B6460))
B6622 = B6460
else
{
var object1__6574 = B6445,
object2__6575 = "%infix",
B6461 = (object1__6574 === object2__6575);
if ($T(B6461))
B6622 = B6461
else
{
var object1__6578 = B6445,
object2__6579 = "%plus",
B6462 = (object1__6578 === object2__6579);
if ($T(B6462))
B6622 = B6462
else
{
var object1__6582 = B6445,
object2__6583 = "%minus",
B6463 = (object1__6582 === object2__6583);
if ($T(B6463))
B6622 = B6463
else
{
var object1__6586 = B6445,
object2__6587 = "%times",
B6464 = (object1__6586 === object2__6587);
if ($T(B6464))
B6622 = B6464
else
{
var object1__6590 = B6445,
object2__6591 = "%divide";
B6622 = (object1__6590 === object2__6591)}}}}}}}}}}};
if ($T(B6622))
{
var sequence__6593 = form__6443,
B6623 = sequence__6593[0],
B6624 = [B6623],
B6625 = B6291(inline__6442, env__6444),
sequence__6595 = form__6443,
B6626 = sequence__6595.slice(1),
B6627 = B5063(B6625, B6626);
return B5064(B6624, B6627)}
else
{
var object1__6598 = B6445,
object2__6599 = "%native",
B6465 = (object1__6598 === object2__6599),
B6628;
if ($T(B6465))
B6628 = B6465
else
{
var object1__6602 = B6445,
object2__6603 = "%native-name",
B6466 = (object1__6602 === object2__6603);
if ($T(B6466))
B6628 = B6466
else
{
var object1__6606 = B6445,
object2__6607 = "%define";
B6628 = (object1__6606 === object2__6607)}};
if ($T(B6628))
return form__6443
else
{
var sequence__6609 = form__6443,
B6629 = sequence__6609[0],
name__6467 = B4957(B6629),
B6468 = B4968(env__6444, "definition-names", name__6467),
definition_name__6469;
if ($T(B6468))
definition_name__6469 = B6468
else
definition_name__6469 = name__6467;
var B6470;
if ($T(B6440(B4968(env__6444, "module"), definition_name__6469)))
B6470 = B4968(env__6444, "module", "functions", definition_name__6469)
else
B6470 = false;
var definition__6475;
if ($T(B6470))
definition__6475 = B6470
else
{
var B6471 = B6315(definition_name__6469, env__6444);
if ($T(B6471))
{
var moduleSimport_name__6472 = B6471,
module__6473 = moduleSimport_name__6472[0],
import_name__6474 = moduleSimport_name__6472[1];
if ($T(B6440(module__6473, import_name__6474)))
definition__6475 = B4968(module__6473, "functions", import_name__6474)
else
definition__6475 = false}
else
definition__6475 = false};
if ($T(definition__6475))
{
var sequence__6611 = form__6443,
B6630 = sequence__6611.slice(1);
return B6439(definition__6475, B6630, env__6444)}
else
return B5063(B6291(inline__6442, env__6444), form__6443)}}}}}}
else
return B5063(B6291(inline__6442, env__6444), form__6443)}
else
return form__6443}, false)
{
var B6631 = B1507["=="];
B6440 = B4955("inlineQ", function inlineQ__6632 (module__6633, name__6634)
{return B5456(B4980(B6631, name__6634), B4968(module__6633, "inline"))}, false)}
{
var trueQ = B1507["true?"],
B6639 = B1507[">="],
B6640 = B4920["ensure-naming-structure"],
B6641 = B1507.push,
B6642 = B4919["get-module-name/name"],
B6643 = B4920["restore-identifiers"],
B6644 = B4920["alpha-convert"];
B6439 = B4955("inline_definition", function inline_definition__6645 (definition__6646, values__6647, env__6648)
{
var ____6649 = definition__6646[0],
name__6650 = definition__6646[1],
arguments__6651 = definition__6646[2],
body__6652 = definition__6646[3],
body__6656 = B5048(function B6653 (body__6654, argument__6655)
{return [B5010, [argument__6655, argument__6655], body__6654]}, body__6652, B5199(arguments__6651)),
inlined__6657 = B6441(body__6656, env__6648),
prepared__6658 = B6644(inlined__6657, env__6648),
object__6670 = arguments__6651,
B6659 = ((object__6670 || false).length || 0),
i__6660 = 0;
while (true)
{
var value__6672 = B6639(i__6660, B6659),
B6677 = !(trueQ(value__6672));
if ($T(B6677))
{
(function B6661 (i__6662)
{
var argument__6663 = B5019(arguments__6651, i__6662),
value__6664 = B5019(values__6647, i__6662),
B6665 = B6642(argument__6663),
module_name__6666 = B6665[0],
name__6667 = B6665[1];
B6640(env__6648, module_name__6666, name__6667);
var array__6675 = B4968(env__6648, "identifiers", module_name__6666, name__6667),
value__6676;
if ($T(value__6664))
value__6676 = B6441(value__6664, env__6648)
else
value__6676 = [B5830, "undefined"];
array__6675.unshift(value__6676);
return array__6675})(i__6660);
i__6660 = (i__6660 + 1)}
else
break};
false;
var result__6668 = B6644(body__6656, env__6648);
B6643(arguments__6651, env__6648);
return result__6668}, false)}
{
var B6678,
B6679 = B1507.identity,
B6680 = B4955("lift_symbols", function lift_symbols__6681 (exp__6682, env__6683)
{return B6678(exp__6682, env__6683, B6679)}, false);
exports["lift-symbols"] = B6680}
{
var trueQ = B1507["true?"],
lift_symbol__6711,
B6706,
B6707,
B6708,
B6709 = B1507["<keyword>"],
B6710 = B1507["<hash-symbol>"];
B6678 = B4955("lift_symbol", function lift_symbol__6711 (exp__6712, env__6713, k__6714)
{B6872:while(true){
var B6864;
if ($T(B5066(exp__6712, B5067)))
{
var sequence__6781 = exp__6712,
B6782 = sequence__6781,
B6783 = ((B6782 || false).length || 0),
B6784 = 0,
value__6785 = (B6783 === B6784);
B6864 = !(trueQ(value__6785))}
else
B6864 = false;
if ($T(B6864))
{
var sequence__6787 = exp__6712,
B6865 = sequence__6787[0],
B6715 = B4957(B6865),
object1__6790 = B6715,
object2__6791 = "%bind",
B6866 = (object1__6790 === object2__6791);
if ($T(B6866))
{
var ____6716 = exp__6712[0],
B6717 = exp__6712[1],
var__6718 = B6717[0],
value__6719 = B6717[1],
body__6720 = exp__6712[2];
arguments = [value__6719, env__6713, (function B6873 (body__6720, k__6714, B5010, var__6718)
{return function B6721 (lvalue__6722, env__6723)
{return lift_symbol__6711(body__6720, env__6723, function B6724 (lbody__6725, env__6726)
{return k__6714([B5010, [var__6718, lvalue__6722], lbody__6725], env__6726)})}})(body__6720, k__6714, B5010, var__6718)];
exp__6712 = arguments[0];
env__6713 = arguments[1];
k__6714 = arguments[2];
continue B6872}
else
{
var object1__6794 = B6715,
object2__6795 = "%set",
B6867 = (object1__6794 === object2__6795);
if ($T(B6867))
{
var ____6727 = exp__6712[0],
e1__6728 = exp__6712[1],
e2__6729 = exp__6712[2];
arguments = [e2__6729, env__6713, (function B6874 (k__6714, B4994, e1__6728)
{return function B6730 (le2__6731, env__6732)
{return k__6714([B4994, e1__6728, le2__6731], env__6732)}})(k__6714, B4994, e1__6728)];
exp__6712 = arguments[0];
env__6713 = arguments[1];
k__6714 = arguments[2];
continue B6872}
else
{
var object1__6798 = B6715,
object2__6799 = "%method",
B6868 = (object1__6798 === object2__6799);
if ($T(B6868))
{
var ____6733 = exp__6712[0],
name__6734 = exp__6712[1],
arguments__6735 = exp__6712[2],
body__6736 = exp__6712[3];
arguments = [body__6736, env__6713, (function B6875 (k__6714, B4988, name__6734, arguments__6735)
{return function B6737 (lbody__6738, env__6739)
{return k__6714([B4988, name__6734, arguments__6735, lbody__6738], env__6739)}})(k__6714, B4988, name__6734, arguments__6735)];
exp__6712 = arguments[0];
env__6713 = arguments[1];
k__6714 = arguments[2];
continue B6872}
else
{
var object1__6802 = B6715,
object2__6803 = "%begin",
B6740 = (object1__6802 === object2__6803),
B6869;
if ($T(B6740))
B6869 = B6740
else
{
var object1__6806 = B6715,
object2__6807 = "%if",
B6741 = (object1__6806 === object2__6807);
if ($T(B6741))
B6869 = B6741
else
{
var object1__6810 = B6715,
object2__6811 = "%while",
B6742 = (object1__6810 === object2__6811);
if ($T(B6742))
B6869 = B6742
else
{
var object1__6814 = B6715,
object2__6815 = "%array",
B6743 = (object1__6814 === object2__6815);
if ($T(B6743))
B6869 = B6743
else
{
var object1__6818 = B6715,
object2__6819 = "%object",
B6744 = (object1__6818 === object2__6819);
if ($T(B6744))
B6869 = B6744
else
{
var object1__6822 = B6715,
object2__6823 = "%get-property",
B6745 = (object1__6822 === object2__6823);
if ($T(B6745))
B6869 = B6745
else
{
var object1__6826 = B6715,
object2__6827 = "%infix",
B6746 = (object1__6826 === object2__6827);
if ($T(B6746))
B6869 = B6746
else
{
var object1__6830 = B6715,
object2__6831 = "%native",
B6747 = (object1__6830 === object2__6831);
if ($T(B6747))
B6869 = B6747
else
{
var object1__6834 = B6715,
object2__6835 = "%native-name",
B6748 = (object1__6834 === object2__6835);
if ($T(B6748))
B6869 = B6748
else
{
var object1__6838 = B6715,
object2__6839 = "%native-call",
B6749 = (object1__6838 === object2__6839);
if ($T(B6749))
B6869 = B6749
else
{
var object1__6842 = B6715,
object2__6843 = "%plus",
B6750 = (object1__6842 === object2__6843);
if ($T(B6750))
B6869 = B6750
else
{
var object1__6846 = B6715,
object2__6847 = "%minus",
B6751 = (object1__6846 === object2__6847);
if ($T(B6751))
B6869 = B6751
else
{
var object1__6850 = B6715,
object2__6851 = "%times",
B6752 = (object1__6850 === object2__6851);
if ($T(B6752))
B6869 = B6752
else
{
var object1__6854 = B6715,
object2__6855 = "%divide";
B6869 = (object1__6854 === object2__6855)}}}}}}}}}}}}};
if ($T(B6869))
{
var m__6753 = exp__6712[0],
eT__6754 = $SL.call(exp__6712, 1);
return B6706(eT__6754, env__6713, function B6755 (leT__6756, env__6757)
{return k__6714(B5064([m__6753], leT__6756), env__6757)})}
else
{
var object1__6858 = B6715,
object2__6859 = "%try",
B6870 = (object1__6858 === object2__6859);
if ($T(B6870))
{
var ____6758 = exp__6712[0],
e1__6759 = exp__6712[1],
v__6760 = exp__6712[2],
e2__6761 = exp__6712[3];
return B6706([e1__6759, e2__6761], env__6713, function B6762 (leT__6763, env__6764)
{
var le1__6765 = leT__6763[0],
le2__6766 = leT__6763[1];
return k__6714([B6173, le1__6765, v__6760, le2__6766], env__6764)})}
else
{
var object1__6862 = B6715,
object2__6863 = "%symbol",
B6871 = (object1__6862 === object2__6863);
if ($T(B6871))
{
var ____6767 = exp__6712[0],
name__6768 = exp__6712[1];
return B6707(name__6768, exp__6712, "symbol", env__6713, k__6714)}
else
return B6708(exp__6712, env__6713, k__6714)}}}}}}
else
{
var B6769 = exp__6712;
if ($T(B5066(B6769, B6709)))
return B6707(B4957(exp__6712), exp__6712, "keyword", env__6713, k__6714)
else
if ($T(B5066(B6769, B6710)))
return B6707(B4957(exp__6712), exp__6712, "hash", env__6713, k__6714)
else
return k__6714(exp__6712, env__6713)};
break}}, false)}
B6707 = B4955("lift_value", function lift_value__6877 (name__6878, value__6879, type__6880, env__6881, k__6882)
{
var B6883 = B4968(env__6881, "lifted", type__6880, name__6878);
if ($T(B6883))
{
var t__6884 = B6883;
return k__6882(t__6884, env__6881)}
else
{
var t__6885 = B4956(env__6881, "lifted", type__6880, name__6878, B5069());
return [B5010, [t__6885, value__6879], k__6882(t__6885, env__6881)]}}, false)
B6706 = B4955("lift_symbolT", function lift_symbolT__6886 (expT__6887, env__6888, k__6889)
{
var sequence__6900 = expT__6887,
B6901 = sequence__6900,
B6902 = ((B6901 || false).length || 0),
B6903 = 0,
B6904 = (B6902 === B6903);
if ($T(B6904))
return k__6889([], env__6888)
else
return B6708(expT__6887, env__6888, k__6889)}, false)
B6708 = B4955("lift_symbolTT", function lift_symbolTT__6907 (exp__6908, env__6909, k__6910)
{
var sequence__6918 = exp__6908,
B6921 = sequence__6918[0],
B6924 = function B6911 (t__6912, env__6913)
{
var sequence__6920 = exp__6908,
B6922 = sequence__6920.slice(1),
B6923 = function B6914 (tT__6915, env__6916)
{return k__6910(B5064([t__6912], tT__6915), env__6916)};
return B6706(B6922, env__6913, B6923)};
return B6678(B6921, env__6909, B6924)}, false)
var B6930 = $K("string"),
B6925 = B4917.read,
B6926 = B4915["<string-stream>"],
B6927 = B4955("read_program", function read_program__6928 (source__6929)
{return B6925(B5868(B6926, B6930, B5064("(", source__6929, "\n)")))}, false)
{
var B6933 = B4921["lift-defines"],
B6934 = B4923["normalize-term"],
B6935 = B4924["transform-statements!"],
B6936 = B4925["optimize-tail-calls!"],
B6937 = B4926["flatten-statements!"],
B6938 = B4927["compile-js"],
B6939 = B4955("compile_expression", function compile_expression__6940 (exp__6941, env__6942)
{return B5048(function B6943 (result__6944, nameSfn__6945)
{
var name__6946 = nameSfn__6945[0],
fn__6947 = nameSfn__6945[1],
result__6948 = fn__6947(result__6944);
return result__6948}, exp__6941, [["source", B6679], ["macroexpanded", B6291(B4981, env__6942)], ["lifted defines", B6291(B6933, env__6942)], ["defined free variables", B6291(B6342, env__6942)], ["alpha-converted", B6291(B6644, env__6942)], ["inline", B6291(B6441, env__6942)], ["defined free variables after inline", B6291(B6378, env__6942)], ["ANF", B6934], ["lifted symbols", B6291(B6680, env__6942)], ["statements", B6291(B6935, env__6942)], ["TCO", function B6949 (exp__6950)
{return B6936(exp__6950, env__6942)}], ["flattened", B6937], ["compiled", B6291(B6938, env__6942)]])}, false);
exports["compile-expression"] = B6939}
var B6951 = B4918["resolve-path"],
B6952 = B4955("executable_path", function executable_path__6953 (module_name__6954)
{return B6951("build", B5064(module_name__6954, ".js"))}, false)
var B6955 = B4955("module_path", function module_path__6956 (base_path__6957, module_name__6958)
{return B6951(base_path__6957, B5064(module_name__6958, ".rm"))}, false)
var B6959 = B4955("source_path", function source_path__6960 (module_name__6961)
{return B6951("src", B5064(module_name__6961, ".ralph"))}, false)
var trueQ = B1507["true?"],
B6963 = B1507["<"],
B6964 = B4918["file-properties"],
B6965 = B4918["file-exists?"],
B6966 = B4955("recompileQ", function recompileQ__6967 (module_name__6968)
{
var value__6973 = B4968(B4929, module_name__6968, "native?"),
B6976 = !(trueQ(value__6973));
if ($T(B6976))
{
var path__6969 = B6952(module_name__6968),
value__6975 = B6965(path__6969),
B6970 = !(trueQ(value__6975));
if ($T(B6970))
return B6970
else
{
var path2__6971 = B6959(module_name__6968);
return B6963(B4968(B6964(path__6969), "modification-date"), B4968(B6964(path2__6971), "modification-date"))}}}, false)
{
var B6981 = B1507["chain-object"],
B6982,
B6983,
B6984 = B1507["object-properties"];
B6114 = B4955("compile_time_import_module", function compile_time_import_module__6985 (env__6986, module_name__6987)
{
var B6988 = $SL.call(arguments, 2),
B6989 = B5921(B6988, {options:false}),
options__6990 = B6989.options,
object1__7002 = module_name__6987,
object2__7003 = "ralph/core",
B7004 = (object1__7002 === object2__7003),
B6997;
if ($T(B7004))
B6997 = [B5011, B6224]
else
{
B6982(module_name__6987);
var definitions__6991 = require(module_name__6987),
macros__6992 = B4947(),
symbol_macros__6993 = B4947();
B4979(function B6994 (name__6995)
{
var definition__6996 = B4968(definitions__6991, name__6995);
if ($T(B4968(definition__6996, "%macro?")))
return macros__6992[name__6995] = definition__6996
else
if ($T(B4968(definition__6996, "%symbol-macro?")))
return symbol_macros__6993[name__6995] = definition__6996}, B5993(B6983, B6984(definitions__6991), options__6990));
B6997 = [macros__6992, symbol_macros__6993]};
var macros__6998 = B6997[0],
symbol_macros__6999 = B6997[1];
B6981(B4968(env__6986, "macros"), macros__6998);
return B6981(B4968(env__6986, "symbol-macros"), symbol_macros__6999)}, false)}
{
var B7011 = B1507["remove!"],
B7012 = B1507["set-union!"],
B7013 = B1507["as-object"],
B7014 = B1507["as-set"];
B6983 = B4955("process_names", function process_names__7015 (all__7016)
{
var B7017 = $SL.call(arguments, 1),
B7018 = B5921(B7017, {only:false,
exclude:false,
prefix:false,
rename:false}),
only__7019 = B7018.only,
exclude__7020 = B7018.exclude,
prefix__7021 = B7018.prefix,
rename__7022 = B7018.rename,
resolve__7023 = function B7024 (exp__7025)
{if ($T(B5066(exp__7025, B5880)))
return exp__7025
else
return B6113(exp__7025)},
B7033;
if ($T(B5066(only__7019, B5067)))
B7033 = B5063(resolve__7023, only__7019)
else
B7033 = all__7016;
var names__7026 = B7014(B7033),
B7027 = rename__7022,
B7034;
if ($T(B7027))
B7034 = B7027
else
B7034 = [];
var B7035 = B5063(resolve__7023, B7034),
renamings__7028 = B7013(B7035);
B4979(B4980(B7011, names__7026), B5063(resolve__7023, exclude__7020));
B7012(names__7026, B6984(renamings__7028));
return B5063(function B7029 (name__7030)
{
var B7031 = B4968(renamings__7028, name__7030);
if ($T(B7031))
{
var renaming__7032 = B7031;
return [name__7030, renaming__7032]}
else
if ($T(B5066(prefix__7021, B5880)))
return [name__7030, B5064(prefix__7021, name__7030)]
else
return name__7030}, names__7026)}, false)}
{
var B7037;
B6115 = B4955("import_module", function import_module__7038 (module__7039, module_name__7040)
{
var options__7041 = $SL.call(arguments, 2),
B7042 = B7037(module_name__7040);
if ($T(B7042))
{
var other_module__7043 = B7042,
array__7046 = B4968(module__7039, "imports"),
value__7047 = [other_module__7043, B5993(B6983, B4968(other_module__7043, "exports"), options__7041)];
array__7046.unshift(value__7047);
array__7046;
var array__7050 = B4968(module__7039, "dependencies"),
value__7051 = module_name__7040;
array__7050.unshift(value__7051);
array__7050;
return other_module__7043}
else
{
var error__7053 = B5064("unable to import module '", module_name__7040, "'");
throw(error__7053);
return false}}, false)}
{
var B7057;
B7037 = B4955("find_module", function find_module__7058 (module_name__7059)
{
var B7060 = B6982(module_name__7059);
if ($T(B7060))
return B7060
else
{
var B7061 = B4968(B4929, module_name__7059);
if ($T(B7061))
return B7061
else
{
var B7062 = B7057("build", module_name__7059);
if ($T(B7062))
return B7062
else
return B7057("src", module_name__7059)}}}, false)}
{
var B7068 = $K("name"),
B7063 = B4918["read-file"];
B7057 = B4955("read_module", function read_module__7064 (base_path__7065, module_name__7066)
{
var path__7067 = B6955(base_path__7065, module_name__7066);
if ($T(B6965(path__7067)))
return B5993(B4980(B5868, B4936, B7068), B6925(B5868(B6926, B6930, B7063(path__7067))))}, false)}
{
var B7108 = $K("module"),
B7109 = $K("exports"),
B7110 = $K("inline"),
B7111 = $K("dependencies"),
trueQ = B1507["true?"],
B7071 = B4918["write-file"],
B7072 = B1507.description;
B6982 = B4955("compile_module", function compile_module__7073 (module_name__7074)
{
var object__7088 = B4929,
property__7089 = module_name__7074,
value__7090 = $HP.call(object__7088,property__7089),
B7105 = !(trueQ(value__7090));
if ($T(B7105))
{
var B7075 = B7057("src", module_name__7074);
if ($T(B7075))
{
var module__7076 = B7075;
B4929[module_name__7074] = module__7076}};
if ($T(B6966(module_name__7074)))
{
var value__7092 = B6965(B6959(module_name__7074)),
B7106 = !(trueQ(value__7092));
if ($T(B7106))
{
var error__7094 = B5064("unable to compile module '", module_name__7074, "'");
throw(error__7094);
false};
var module__7077 = B5868(B4936, B7068, module_name__7074),
env__7078 = B5868(B4948, B7108, module__7077),
source__7079 = B7063(B6959(module_name__7074)),
program__7080 = B6927(source__7079),
result__7081 = "";
B4929[module_name__7074] = module__7077;
B6114(env__7078, "ralph/core");
var object1__7098 = module_name__7074,
object2__7099 = "ralph/core",
value__7100 = (object1__7098 === object2__7099),
B7107 = !(trueQ(value__7100));
if ($T(B7107))
{
B6115(module__7077, "ralph/core");
var array__7103 = program__7080,
value__7104 = B6116("ralph/core", env__7078);
array__7103.unshift(value__7104);
array__7103};
B4979(function B7082 (expression__7083)
{
var code__7084 = B6939(expression__7083, env__7078);
return result__7081 = B5064(result__7081, code__7084, "\n")}, program__7080);
B7071(B6952(module_name__7074), result__7081);
B7071(B6955("build", module_name__7074), B7072([module_name__7074, B7109, B4968(module__7077, "exports"), B7110, B4968(module__7077, "inline"), B7111, B4968(module__7077, "dependencies")]));
return module__7077}}, false);
exports["compile-module"] = B6982}
{
var analyze_dependencies__7118,
B7116 = B1507["member?"],
B7117 = B4955("analyze_dependencies", function analyze_dependencies__7118 (module_name__7119)
{
var B7120 = B7037(module_name__7119);
if ($T(B7120))
{
var module__7121 = B7120;
B4929[module_name__7119] = module__7121;
var B7122 = module__7121,
dependencies__7123 = B7122.dependencies,
result__7124 = B5017(dependencies__7123);
B4979(function B7125 (dependency__7126)
{return B4979(function B7127 (sub_dependency__7128)
{
if ($T(B7116(sub_dependency__7128, result__7124)))
B7011(result__7124, sub_dependency__7128);
var array__7131 = result__7124,
value__7132 = sub_dependency__7128;
array__7131.unshift(value__7132);
return array__7131}, analyze_dependencies__7118(dependency__7126))}, dependencies__7123);
return result__7124}
else
{
var error__7134 = B5064("unable to find-module '", module_name__7119, "'");
throw(error__7134);
return false}}, false);
exports["analyze-dependencies"] = B7117}
