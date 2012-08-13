var $g5097 = require("ralph2/core")
{var $g5166, $g5167, $g5168;
$g5166 = require("ralph2/test");
$g5167 = require("ralph2/format");
$g5168 = require("ralph2/stream")}
var $g5169 = $g5097["%make-function"], $g5170 = $g5169("foo", function $g5172 ($rif5171)
{return 23}, false)
{var $g5173 = $g5166["check-equal"];
$g5173("macroexpansion: (if .. ) mustn't be expanded", 23, $g5170(23))}
{var $g5174 = $g5166["check-false"], $g5175 = $g5097["true?"];
$g5174("true?: null isn't true", $g5175(null))}
$g5174("true?: undefined isn't true", $g5175(undefined))
{var $g5176 = $g5166["check-true"];
$g5176("true?: 0 is true", $g5175(0))}
$g5176("true?: \"0\" is true", $g5175("0"))
$g5176("true?: \"\" is true", $g5175(""))
{var $g5177 = $g5097["="];
$g5174("equality: 0 not false", $g5177(0, false))}
$g5176("equality: 1 and 1 are equal", $g5177(1, 1, 1))
$g5174("equality: 1 and 2 are unequal", $g5177(1, 2, 1))
$g5174("equality: #f and 0 are unequal", $g5177(false, false, 0))
$g5176("equality: array with same contents", $g5177([1, 3, 4, 2], [1, 3, 4, 2]))
$g5174("equality: array with different contents", $g5177([1, 3, 4, 2], [4, 2, 1, 3]))
$g5174("equality: undefined and #t", $g5177(undefined, true))
$g5176("equality: undefined and #f", $g5177(undefined, false))
{var $g5178 = $g5097["make-object"];
$g5174("equality: object and undefined", $g5177($g5178(), undefined))}
$g5174("equality: 0 and undefined", $g5177(0, undefined))
{var $g5180 = "", $g5181;
if ($T($g5180))
$g5181 = $g5180
else $g5181 = 1;
$g5173("or: \"\" is true", "", $g5181)}
{var $g5183 = "0", $g5184;
if ($T($g5183))
$g5184 = $g5183
else $g5184 = 1;
$g5173("or: \"0\" is true", "0", $g5184)}
{var $g5186 = 0, $g5187;
if ($T($g5186))
$g5187 = $g5186
else $g5187 = 1;
$g5173("or: 0 is true", 0, $g5187)}
{var $g5188;
if ($T(false))
$g5188 = 1
else $g5188 = false;
$g5174("and: #f is false", $g5188)}
{var $g5189;
if ($T(""))
$g5189 = 1
else $g5189 = false;
$g5173("and: \"\" is true", 1, $g5189)}
{var $g5190;
if ($T("0"))
$g5190 = 1
else $g5190 = false;
$g5173("and: \"\" is true", 1, $g5190)}
{var $g5191;
if ($T(true))
$g5191 = ""
else $g5191 = false;
$g5173("and: \"\" is true", "", $g5191)}
{var $g5192;
if ($T(true))
$g5192 = "0"
else $g5192 = false;
$g5173("and: \"0\" is true", "0", $g5192)}
{var $g5193;
if ($T(true))
$g5193 = 0
else $g5193 = false;
$g5173("and: 0 is true", 0, $g5193)}
{var $g5194;
if ($T(true))
$g5194 = false
else $g5194 = false;
$g5174("and: #f is false", $g5194)}
{var $g5195;
if ($T(true))
$g5195 = true
else $g5195 = false;
$g5176("and: #t is true", $g5195)}
{var $g5196;
if ($T(0))
$g5196 = 0
else $g5196 = false;
$g5176("and: 0 and 0", $g5196)}
{var $g5197;
if ($T(""))
if ($T("0"))
$g5197 = 0
else $g5197 = false
else $g5197 = false;
var $g5198;
if ($T($g5197))
$g5198 = true
else $g5198 = false;
$g5176("when: and of \"\", \"0\" and 0 is true", $g5198)}
$g5173("#rest: #1", 1, (1))
$g5173("#rest: #2", 3, (1 + 2))
$g5173("#rest: #3", 10, (1 + 2 + 3 + 4))
{var $g5199 = $K("test");
$g5173("keywords: equality", $g5199, $g5199)}
var $g5202 = $g5097["%keys"], $g5203 = $g5169("foobar", function $g5207 ()
{var $g5204 = $SL.call(arguments, 0), $g5205 = $g5202($g5204, {test:2}), $test5206 = $g5205.test;
return $test5206}, false)
$g5173("keyword arguments: default value", 2, $g5203())
$g5173("keyword arguments: passed value", 3, $g5203($g5199, 3))
{var $x5208 = 0, $y5209 = ($x5208 + 1), $y5210 = ($y5209 + 1);
$g5173("bind: nested", 2, $y5210)}
{var $a5211 = 1, $b5212 = 2, $c5213 = 3, $a5214 = $a5211, $b5215 = $c5213, $c5216 = $a5214;
$g5173("bind: a", $a5214, 1);
$g5173("bind: b", $b5215, 3);
$g5173("bind: c", $c5216, 1)}
{var $g5218 = $g5097.inc, $i5219 = 0, $v5220 = 0, $g5221 = 1, $rnumber5223 = $i5219, $g5224 = ($rnumber5223 + 1);
$v5220 = $g5224;
$i5219 = $g5221;
$g5173("parallel-set!: i = 0 set to 1", 1, $i5219);
$g5173("parallel-set!: v = 0 set to incremented i still 1", 1, $v5220)}
{var $g5231 = $K("message"), $g5225 = $g5166["check-condition"], $g5226 = $g5097["<error>"], $g5227 = $g5097.signal, $g5228 = $g5097.make;
$g5225("signal <error>", $g5226, function $g5232 ()
{var $error5230 = $g5228($g5226, $g5231, "!");
throw($error5230);
false;
return false})}
{var $g5233 = $g5097["binary<"];
$g5176("binary<: 0 < 1", $g5233(0, 1))}
{var $g5234 = $g5097["<"];
$g5176("<: 1 < 2 < 3 < 4", $g5234(1, 2, 3, 4))}
$g5174("<: 2 > 1", $g5234(2, 1, 3, 4))
$g5174("<: 3 > 2", $g5234(3, 2, 1, 4))
$g5174("<: 4 > 3", $g5234(4, 3, 2, 1))
{var $g5235 = $g5097[">"];
$g5176(">: 1 > 0", $g5235(1, 0))}
$g5174(">: 1 = 1", $g5235(1, 1))
$g5174(">: 2 < 3", $g5235(2, 3, 4))
$g5176(">: 4 > 3", $g5235(4, 3, 2))
{var $g5236 = $g5097["<="];
$g5176("<=: 1 <= 1", $g5236(1, 1))}
$g5176("<=: 1 <= 2", $g5236(1, 2))
$g5174("<=: 2 > 1", $g5236(2, 1))
{var $g5237 = $g5097[">="];
$g5176(">=: 1 <= 1", $g5237(1, 1))}
$g5176(">=: 2 >= 1", $g5237(2, 1))
$g5174(">=: 1 < 2", $g5237(1, 2))
{var reduce = $g5097.reduce, $g5238 = $g5097.reduce1, $g5239 = $g5097["+"], $rfunction5248 = $g5239, $values5249 = [1, 2, 3, 4, 5], $g5250 = $values5249, $g5252 = $g5250[0], $g5251 = $values5249, $g5253 = $g5251.slice(1), $g5254 = reduce($rfunction5248, $g5252, $g5253);
$g5173("reduce: + on 1, 2, 3, 4, 5", 15, $g5254)}
{var reduce = $g5097.reduce;
$g5173("reduce1: + with 1 on 2, 3, 4, 5", 15, reduce($g5239, 1, [2, 3, 4, 5]))}
{var $g5255 = $g5097.apply;
$g5173("apply: + with 1 and 2, 3, 4, 5", 15, $g5255($g5239, 1, [2, 3, 4, 5]))}
$g5173("apply: + with 1, 2, 3 and 4, 5", 15, $g5255($g5239, 1, 2, 3, [4, 5]))
{var $g5256 = $g5097.complement;
$g5176("complement: binary<", $g5256($g5233)(1, 0))}
$g5174("complement: and", $g5256(function $g5259 ($a5257, $b5258)
{if ($T($a5257))
return $b5258})(true, true))
{var $g5260 = $g5097.not, $i5261 = 0;
while ($T(true))
{var $value5264 = $g5235($i5261, 10), $g5268 = !($g5175($value5264));
if ($T($g5268))
{(function $g5269 ($i5262)
{return false})($i5261);
var $rnumber5266 = $i5261, $g5267 = ($rnumber5266 + 1);
$i5261 = $g5267}
else break};
$g5173("for: increment until i = 0 > 10", 11, $i5261)}
{var $g5271 = $g5097.dec, $i5272 = 10, $v5273 = 1;
while ($T(true))
{var $value5278 = $g5236($i5272, 0), $g5281 = !($g5175($value5278));
if ($T($g5281))
{(function $g5282 ($i5274, $v5275)
{return false})($i5272, $v5273);
var $rnumber5280 = $i5272, $g5276 = ($rnumber5280 - 1);
$v5273 = ($v5273 * $i5272);
$i5272 = $g5276}
else break};
$g5173("for: 10!", 3628800, $v5273)}
{var $g5283 = $g5097.element;
$g5173("element: 1st element is 1", 1, $g5283([1, 2, 3], 0))}
$g5173("element: 2nd element is 2", 2, $g5283([1, 2, 3], 1))
{var $g5284 = $g5097.last, $g5285 = $g5097["but-last"], $rarray5295 = [1, 2, 3], $n5296 = undefined, $rarray5297 = $rarray5295.slice(0, (($n5296 || 1) * -1)), $g5298 = $rarray5297, $g5299 = (($g5298 || false).length || 0), $g5300 = ($g5299 - 1), $g5301 = $rarray5297[$g5300];
$g5173("but-last: second last element of 1, 2, 3 is 2", 2, $g5301)}
{var $rarray5311 = [1, 2, 3, 4], $n5312 = 2, $rarray5313 = $rarray5311.slice(0, (($n5312 || 1) * -1)), $g5314 = $rarray5313, $g5315 = (($g5314 || false).length || 0), $g5316 = ($g5315 - 1), $g5317 = $rarray5313[$g5316];
$g5173("but-last: third last element of 1, 2, 3, 4 is 2", 2, $g5317)}
{var $g5318 = $g5097.repeatedly, $i5319 = 0;
$g5173("repeatedly: number generation", $g5318(function $g5320 ()
{return $i5319 = ($i5319 + 1)}, 5), [1, 2, 3, 4, 5])}
{var $g5321 = $g5097.max;
$g5173("max:", $g5321(4, 2, -1, 6, 3), 6)}
{var $g5322 = $g5097.min;
$g5173("min:", $g5322(4, 2, -1, 6, 3), -1)}
{var $g5323 = $g5097["instance?"];
$g5176("instance?: \"test\" is a String", $g5323("test", String))}
$g5176("instance?: 1 is a Number", $g5323(1, Number))
{var $g5324 = $g5097["<string>"];
$g5176("instance?: \"test\" is a <string>", $g5323("test", $g5324))}
{var $g5325 = $g5097["<number>"];
$g5176("instance?: 1 is a <number>", $g5323(1, $g5325))}
{var $g5326 = $g5097["<array>"];
$g5176("instance?: [1, 2] is a <array>", $g5323([1, 2], $g5326))}
$g5176("instance?: \"test\" is a <string>", $g5255($g5323, "test", [$g5324]))
$g5176("instance?: 1 is a <number>", $g5255($g5323, 1, [$g5325]))
$g5176("instance?: [1, 2] is a <array>", $g5255($g5323, [1, 2], [$g5326]))
{var $g5328 = $K("a"), $g5327 = $g5097["<keyword>"];
$g5176("instance?: a: is a <keyword>", $g5323($g5328, $g5327))}
{var $g5329 = $g5097["<boolean>"];
$g5176("instance?: #t is a <boolean>", $g5323(true, $g5329))}
$g5176("instance?: #f is a <boolean>", $g5323(false, $g5329))
var $g5330 = $g5097["%make-class"], $g5331 = $g5097["<object>"], $g5332 = $g5330($g5331, {})
var $g5333 = $g5330($g5332, {})
var $g5334 = $g5330($g5333, {})
$g5176("instance?: <a> 1", $g5323($g5228($g5332), $g5332))
$g5176("instance?: <a> 2", $g5323($g5228($g5333), $g5332))
$g5176("instance?: <a> 3", $g5323($g5228($g5334), $g5332))
$g5174("instance?: subclass 1", $g5323($g5228($g5332), $g5333))
$g5174("instance?: subclass 2", $g5323($g5228($g5332), $g5334))
{var $g5335 = $g5097.type;
$g5173("type: null is <boolean>", $g5335(null), $g5329)}
$g5173("type: undefined is <boolean>", $g5335(undefined), $g5329)
var $g5336 = $g5169("foo_setter", function $g5339 ($robject5337, $new_value5338)
{return $robject5337.foo = $new_value5338}, true)
$g5170 = $g5169("foo", function $g5341 ($robject5340)
{return $robject5340.foo}, false)
{var $bar5342 = $g5228($g5331);
$g5336($bar5342, 1);
$g5173("function: setter before getter", 1, $g5170($bar5342))}
{var $g5343 = $g5097.rcurry;
$g5173("rcurry: (element x 1) on 0, 1, 2", 1, $g5343($g5283, 1)([0, 1, 2]))}
{var $g5344 = $g5097["any?"];
$g5176("any? and rcurry: x > 2 on 1, 2, 3, 4", $g5344($g5343($g5235, 2), [1, 2, 3, 4]))}
{var $g5345 = $g5097.identity;
$g5173("any?", 0, $g5344($g5345, [0, ""]))}
{var $g5346 = $g5097.size, $robject5348 = [1, 2, 3], $g5349 = (($robject5348 || false).length || 0);
$g5173("size: array [1 2 3]", 3, $g5349)}
{var $robject5351 = $g5178(), $g5352 = (($robject5351 || false).length || 0);
$g5173("size: object", 0, $g5352)}
{var $robject5354 = undefined, $g5355 = (($robject5354 || false).length || 0);
$g5173("size: #f", 0, $g5355)}
{var $g5356 = $g5097["push-last"], $elements5357 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], $fns5358 = [], $i5359 = 0;
while ($T(true))
{var $robject5364 = $elements5357, $g5370 = (($robject5364 || false).length || 0), $value5365 = $g5237($i5359, $g5370), $g5371 = !($g5175($value5365));
if ($T($g5371))
{(function $g5372 ($i5360)
{var $el5361 = $g5283($elements5357, $i5360), $rarray5368 = $fns5358, $value5369 = function $g5373 ()
{return $el5361};
$rarray5368.push($value5369);
return $rarray5368})($i5359);
$i5359 = ($i5359 + 1)}
else break};
false;
$g5173("scope: bind in for loop builds closures", 2, $g5283($fns5358, 2)())}
{var $numbers5375 = $g5228($g5326), $robject5387 = $numbers5375, $g5397 = (($robject5387 || false).length || 0), $g5376 = (10 - $g5397), $i5377 = 0;
while ($T(true))
{var $value5389 = $g5237($i5377, $g5376), $g5398 = !($g5175($value5389));
if ($T($g5398))
{(function $g5401 ($i5378)
{var $rarray5392 = $numbers5375, $value5393 = $i5378;
$rarray5392.push($value5393);
return $rarray5392})($i5377);
$i5377 = ($i5377 + 1)}
else break};
var $rarray5394 = $numbers5375, $g5395 = $rarray5394, $g5396 = (($g5395 || false).length || 0), $g5399 = ($g5396 - 1), $g5400 = $rarray5394[$g5399];
$g5173("dotimes: count form only evaluated at beginning", 9, $g5400)}
{var $g5404 = $K("skip"), $g5405 = $K("from-end?"), $g5402 = $g5097["find-key"], $rarray5403 = [0, 0, 0, 1, 0, 0, 1, 0, 0];
$g5173("find-key: from start: first element > 0", 3, $g5402($rarray5403, $g5343($g5235, 0)));
$g5173("find-key: from start: second element > 0", 6, $g5402($rarray5403, $g5343($g5235, 0), $g5404, 1));
$g5174("find-key: from start: no third element > 0", $g5402($rarray5403, $g5343($g5235, 0), $g5404, 2));
$g5173("find-key: from end: first element > 0", 6, $g5402($rarray5403, $g5343($g5235, 0), $g5405, true));
$g5173("find-key: from end: second element > 0", 3, $g5402($rarray5403, $g5343($g5235, 0), $g5405, true, $g5404, 1));
$g5174("find-key: from end: no third element > 0", $g5402($rarray5403, $g5343($g5235, 0), $g5405, true, $g5404, 2))}
{var $g5408 = $K("end"), $g5409 = $K("start"), $g5406 = $g5097["replace-subsequence!"], $foo5407 = ["a", "b", "c", "d", "e"];
$g5406($foo5407, ["x", "y", "z"], $g5408, 1);
$g5173("replace-subsequence!: start only", ["x", "y", "z", "b", "c", "d", "e"], $foo5407);
$g5406($foo5407, ["x", "y", "z"], $g5409, 4);
$g5173("replace-subsequence!: end only", ["x", "y", "z", "b", "x", "y", "z"], $foo5407);
$g5406($foo5407, ["a", "b", "c"], $g5409, 2, $g5408, 4);
$g5173("replace-subsequence!: start and end", ["x", "y", "a", "b", "c", "x", "y", "z"], $foo5407)}
{var $g5410 = $g5097["replace-subsequence"], $foo5411 = ["a", "b", "c", "d", "e"];
$g5173("replace-subsequence: start only", ["x", "y", "z", "b", "c", "d", "e"], $g5410($foo5411, ["x", "y", "z"], $g5408, 1));
$g5173("replace-subsequence: end only", ["a", "b", "x", "y", "z"], $g5410($foo5411, ["x", "y", "z"], $g5409, 2));
$g5173("replace-subsequence: start and end", ["a", "b", "x", "y", "z", "e"], $g5410($foo5411, ["x", "y", "z"], $g5409, 2, $g5408, 4))}
{var $g5416 = $g5097["=="], $g5417 = [1, [2, 3], 4, [[5, 6], 7]], $a5418 = $g5283($g5417, 0), $g5419 = $g5417[1], $b5420 = $g5283($g5419, 0), $c5421 = $g5283($g5419, 1), $d5422 = $g5283($g5417, 2), $g5423 = $g5417[3], $g5424 = $g5423[0], $e5425 = $g5283($g5424, 0), $f5426 = $g5283($g5424, 1), $g5427 = $g5283($g5423, 1), $g5428;
if ($T($g5416($a5418, 1)))
if ($T($g5416($b5420, 2)))
if ($T($g5416($c5421, 3)))
if ($T($g5416($d5422, 4)))
if ($T($g5416($e5425, 5)))
if ($T($g5416($f5426, 6)))
$g5428 = $g5416($g5427, 7)
else $g5428 = false
else $g5428 = false
else $g5428 = false
else $g5428 = false
else $g5428 = false
else $g5428 = false;
$g5176("destructuring-bind: nested", $g5428)}
{var $g5429 = $g5097["every?"];
$g5176("every?", $g5429(function $g5431 ($x5430)
{return $g5235($x5430, 0)}, [1, 2, 3, 4]))}
$g5176("every? true", $g5429($g5175, [true, true, true, true]))
$g5174("every? false", $g5429($g5175, [true, true, true, false]))
$g5176("any? true", $g5344($g5175, [false, true, true, false]))
$g5174("any? false", $g5344($g5175, [false, false, false, false]))
{var $test15432, $test25433;
$test15432 = function $g5436 ($a5434)
{return ($a5434 + 1)};
$test25433 = function $g5437 ($b5435)
{return ($b5435 + 2)};
$g5173("bind-methods: 1", 2, $test15432(1));
$g5173("bind-methods: 2", 3, $test25433(1))}
{var $g5438 = $g5097["get-setter"], $g5439 = $g5097.get, $x5440 = $g5228($g5331);
$g5438($x5440, "1", "2", "3", 4);
$g5173("get: '1' -> '2' -> '3' = 4", 4, $g5439($x5440, "1", "2", "3"))}
{var $g5443, $g5444 = true, $g5448;
if ($T($g5444))
{var $a5445 = $g5444;
$g5448 = $a5445}
else try {{$g5443;
$g5448 = false}}
catch ($g5446)
{if ($T($g5323($g5446, $g5226)))
{var $condition5447 = $g5446;
$g5448 = false}
else $g5448 = false};
$g5176("if-bind: test is true, shouldn't be visible in then", $g5448)}
var $g5449 = $g5097["%make-generic"], $g5450 = $g5449("test")
{var $g5451 = $g5097["%make-method"];
$g5450 = $g5451("test", function $g5453 ($rstring5452)
{return 1}, false, $g5324, $g5450)}
$g5450 = $g5451("test", function $g5455 ($rnumber5454)
{return 2}, false, $g5325, $g5450)
var $g5456 = $g5451("test_setter", function $g5459 ($robject5457, $new_value5458)
{return 4}, true, $g5331, $g5456)
$g5450 = $g5451("test", function $g5461 ($robject5460)
{return 3}, false, $g5331, $g5450)
$g5173("generic: specialized on <string>", 1, $g5450("test"))
$g5173("generic: specialized on <number>", 2, $g5450(1))
{var $x5462 = $g5228($g5331);
$g5173("generic: setter before getter, get", 3, $g5450($x5462));
$g5173("generic: setter before getter, set", 4, $g5456($x5462, 0))}
{var $x5463 = $g5228($g5331);
$g5438($x5463, "y", 0);
$g5438($x5463, "y", ($g5439($x5463, "y") + 1));
$g5173("inc!: 0 -> 1", 1, $g5439($x5463, "y"))}
{var $g5464 = $g5097.position;
$g5173("position: find 2 in (1 2 3)", 1, $g5464([1, 2, 3], 2))}
{var $g5472 = $K("string"), $g5465 = $g5168["stream-at-end?"], $g5466 = $g5168["stream-peek"], $g5467 = $g5168["stream-read-element"], $g5468 = $g5168["<string-stream>"], $stream5469 = $g5228($g5468, $g5472, "test");
$g5174("<string-stream>: not at end when starting", $g5465($stream5469));
var $g5470;
if ($T($g5416("t", $g5466($stream5469))))
$g5470 = $g5416("t", $g5466($stream5469))
else $g5470 = false;
$g5176("<string-stream>: peeking doesn't advance the stream", $g5470);
var $g5471;
if ($T($g5416("t", $g5467($stream5469))))
$g5471 = $g5416("e", $g5467($stream5469))
else $g5471 = false;
$g5176("<string-stream>: reading advances the stream", $g5471);
$g5467($stream5469);
$g5467($stream5469);
$g5176("<string-stream>: at end when done", $g5465($stream5469))}
{var $g5473 = $g5168["stream-contents"], $g5474 = $g5168["stream-write"], $g5475 = $g5168["stream-unread-element"], $g5476 = $g5168["stream-remaining-contents"], $g5477 = $g5168["stream-read-through"], $stream5478 = $g5228($g5468);
$g5173("<string-stream>: empty contents when starting", "", $g5473($stream5478));
$g5474($stream5478, "FOO");
$g5173("<string-stream>: simple write", "FOO", $g5473($stream5478));
$g5176("<string-stream>: writing advances, always at end", $g5465($stream5478));
$g5474($stream5478, "BAR");
$g5173("<string-stream>: another write, check contents", "FOOBAR", $g5473($stream5478));
$g5475($stream5478);
$g5173("<string-stream>: stream-unread-element", "R", $g5467($stream5478));
$g5475($stream5478);
$g5475($stream5478);
$g5173("<string-stream>: stream-remaining-contents", "AR", $g5476($stream5478));
$g5475($stream5478);
$g5477($stream5478, "A");
$g5173("<string-stream>: stream-read-through", "R", $g5467($stream5478))}
{var $g5479 = $g5167["format-to-string"];
$g5173("format-to-string: numbers and escaping", "1%2", $g5479("%d%%%d", 1, 2))}
$g5173("format-to-string: method", "x%test%x", $g5479("x%mx", function $g5481 ($stream5480)
{return $g5474($stream5480, "%test%")}))
$g5173("format-to-string: description of <string>", "\"TEST\"", $g5479("%=", "TEST"))
$g5170 = $g5449("foo")
$g5332 = $g5330(false, {})
$g5333 = $g5330($g5332, {})
$g5334 = $g5330($g5333, {})
var $g5482 = $g5330($g5334, {})
var $g5483 = $g5330($g5482, {})
$g5170 = $g5451("foo", function $g5485 ($robject5484)
{return 1}, false, $g5332, $g5170)
$g5170 = $g5451("foo", function $g5487 ($robject5486)
{return 2}, false, $g5333, $g5170)
$g5173("classes: <b> inherits <a>: foo on <a>", 1, $g5170($g5228($g5332)))
$g5173("classes: <b> inherits <a>: foo on <b>", 2, $g5170($g5228($g5333)))
$g5173("classes: <c> inherits <b>: foo on <c>", 2, $g5170($g5228($g5334)))
var $g5488 = $g5449("bar")
{var $g5489 = $g5097["%next-method"];
$g5488 = $g5451("bar", function $g5492 ($robject5490, $a5491)
{$g5438($robject5490, "next", $g5489($g5492));
return $g5438($robject5490, "a", $a5491)}, false, $g5332, $g5488)}
$g5488 = $g5451("bar", function $g5495 ($robject5493, $b5494)
{$g5489($g5495)($robject5493, "a");
return $g5438($robject5493, "b", $b5494)}, false, $g5333, $g5488)
$g5488 = $g5451("bar", function $g5498 ($robject5496, $d5497)
{$g5489($g5498)($robject5496, "b");
return $g5438($robject5496, "d", $d5497)}, false, $g5482, $g5488)
$g5488 = $g5451("bar", function $g5500 ($robject5499)
{return $g5489($g5500).apply(null, arguments)}, false, $g5483, $g5488)
{var $e5501 = $g5228($g5483);
$g5488($e5501, "d");
$g5174("next-method: last method shouldn't have a next", $g5439($e5501, "next"));
var $g5502;
if ($T($g5416($g5439($e5501, "d"), "d")))
if ($T($g5416($g5439($e5501, "b"), "b")))
$g5502 = $g5416($g5439($e5501, "a"), "a")
else $g5502 = false
else $g5502 = false;
$g5176("next-method: all methods visited", $g5502)}
var $g5503 = $g5451("bar_setter", function $g5506 ($a5504, $value5505)
{return $g5438($a5504, "value", $value5505)}, true, $g5332, $g5503)
$g5503 = $g5451("bar_setter", function $g5509 ($c5507, $value5508)
{return $g5489($g5509)($c5507, 1)}, true, $g5334, $g5503)
{var $d5510 = $g5228($g5482);
$g5503($d5510, 2);
$g5173("next-method: setter", 1, $g5439($d5510, "value"))}
var $g5513 = $g5169("special_foo_setter", function $g5519 ($robject5514, $value5515)
{var $g5516 = $SL.call(arguments, 2), $g5517 = $g5202($g5516, {test:false}), $test5518 = $g5517.test;
if ($T($g5416($value5515, "a")))
return $g5416($test5518, "b")}, true)
$g5176("setters: keyword arguments", $g5513(false, "a", $g5199, "b"))
{var $g5520 = $g5097["remove!"], $rarray5521 = [1, 2, 3];
$g5520($rarray5521, 2);
$g5173("remove!: 2 from (1 2 3)", [1, 3], $rarray5521)}
{var $g5522 = $g5097.remove;
$g5173("remove: 2 from (1 2 3)", [1, 3], $g5522([1, 2, 3], 2))}
var $g5523 = $g5330(false, {x:false,
a:function $g5524 ()
{return 1}})
var $g5525 = $g5330($g5523, {})
var $g5526 = $g5330($g5525, {z:false,
c:function $g5527 ()
{return 3}})
var $g5528 = $g5451("initialize", function $g5531 ($robject5529)
{var $rest5530 = $SL.call(arguments, 1);
return $g5255($g5489($g5531), $robject5529, $rest5530)}, false, $g5526, $g5528)
{var $g5534 = $K("x"), $g5535 = $K("z"), $z5532 = $g5228($g5526, $g5534, 1, $g5535, 2), $x5533 = $g5228($g5523);
$g5173("slots: keyword initializer (1)", 1, $g5439($z5532, "x"));
$g5173("slots: keyword initializer (2)", 2, $g5439($z5532, "z"));
$g5173("slots: default value (1)", 1, $g5439($x5533, "a"));
$g5173("slots: default value (2)", 3, $g5439($z5532, "c"))}
var $g5536 = $g5330($g5331, {foo:false,
bar:false,
baz:function $g5537 ()
{return 3},
blub:false})
$g5528 = $g5451("initialize", function $g5540 ($test5538)
{var $rest5539 = $SL.call(arguments, 1);
$g5255($g5489($g5540), $test5538, $rest5539);
return $g5438($test5538, "blub", 4)}, false, $g5536, $g5528)
{var $g5542 = $K("foo"), $g5543 = $K("bar"), $test5541 = $g5228($g5536, $g5542, 1, $g5543, 2);
$g5173("type: default initializer for slot 1", 1, $g5439($test5541, "foo"));
$g5173("type: default initializer for slot 2", 2, $g5439($test5541, "bar"));
$g5173("type: default initializer for slot 3", 3, $g5439($test5541, "baz"));
$g5173("type: default initializer for slot 4", 4, $g5439($test5541, "blub"))}
{var $g5552 = $K("keywords?"), $g5553 = $K("b"), $g5554 = $K("c"), $g5555 = $K("d"), $g5545 = $g5097["as-property-list"], $g5546 = $g5097["as-association-list"], $g5547 = $g5097["extend!"], $robject5548 = $g5178("a", 4, "b", 3, "c", 2, "d", 1), $g5549 = $robject5548, $a5550 = $g5549.a, $d5551 = $g5549.d;
$g5173("bind-properties: a = 4", $a5550, 4);
$g5173("bind-properties: d = 4", $d5551, 1);
$g5173("as-property-list: strings", $g5545($robject5548), ["a", 4, "b", 3, "c", 2, "d", 1]);
$g5173("as-property-list: keywords", $g5545($robject5548, $g5552, true), [$g5328, 4, $g5553, 3, $g5554, 2, $g5555, 1]);
$g5173("as-association-list: strings", $g5546($robject5548), [["a", 4], ["b", 3], ["c", 2], ["d", 1]]);
$g5173("as-association-list: keywords", $g5546($robject5548, $g5552, true), [[$g5328, 4], [$g5553, 3], [$g5554, 2], [$g5555, 1]]);
$g5173("extend!: return extended object", $robject5548, $g5547($robject5548, $g5178("b", 8, "d", 0)));
$g5173("extend!: a = 4", $g5439($robject5548, "a"), 4);
$g5173("extend!: b = 8", $g5439($robject5548, "b"), 8);
$g5173("extend!: c = 2", $g5439($robject5548, "c"), 2);
$g5173("extend!: d = 0", $g5439($robject5548, "d"), 0)}
{var $g5556 = $g5097["as-object"], $robject5557 = $g5556([$g5553, 2, $g5328, 1]);
$g5173("as-object: a = 1", $g5439($robject5557, "a"), 1);
$g5173("as-object: b = 2", $g5439($robject5557, "b"), 2)}
{var $g5558 = $g5097["starts-with?"], $rstring5559 = "this is a test", $prefix15560 = "this", $prefix25561 = "thus", $prefix35562 = "foo", $rstring5571 = $rstring5559, $prefix5572 = $prefix15560, $g5573 = $rstring5571.indexOf($prefix5572), $g5574 = 0, $g5599 = ($g5573 === $g5574);
$g5176("starts-with?: 1", $g5599);
var $rstring5583 = $rstring5559, $prefix5584 = $prefix25561, $g5585 = $rstring5583.indexOf($prefix5584), $g5586 = 0, $g5600 = ($g5585 === $g5586);
$g5174("starts-with?: 2", $g5600);
var $rstring5595 = $rstring5559, $prefix5596 = $prefix35562, $g5597 = $rstring5595.indexOf($prefix5596), $g5598 = 0, $g5601 = ($g5597 === $g5598);
$g5174("starts-with?: 3", $g5601)}
{var $g5604 = 1, $g5607 = function $g5609 ($a5605, $b5606)
{return $g5416("a", $b5606)}, $g5608;
if ($T($g5607($g5604, 1)))
$g5608 = false
else if ($T($g5607($g5604, "a")))
$g5608 = true
else $g5608 = false;
$g5176("select: test expression", $g5608)}
{var $robject5612 = $g5178(), $g5613 = $robject5612, $g5614 = $g5416, $g5615;
if ($T($g5614($g5613, $g5178())))
$g5615 = false
else if ($T($g5614($g5613, $robject5612)))
$g5615 = true
else $g5615 = false;
$g5176("select: primitive test", $g5615)}
{var $g5621 = $g5097["empty?"], $g5622 = $g5097.push, $g5623 = $g5097.rest, $g5624 = $g5097.first, $a5625 = [1, 2, 3], $b5626 = [], $g5627 = $a5625, $g5628, $g5629, $g5630 = [$g5627];
while ($T(true))
{var $g5631 = $g5628, $value5635;
if ($T($g5631))
$value5635 = $g5631
else $value5635 = $g5344($g5621, $g5630);
var $g5645 = !($g5175($value5635));
if ($T($g5645))
{var $sequence5637 = $g5627, $item5632 = $sequence5637[0];
(function $g5646 ($item5633)
{var $rarray5640 = $b5626, $value5641 = $item5633;
$rarray5640.unshift($value5641);
return $rarray5640})($item5632);
var $sequence5643 = $g5627, $g5644 = $sequence5643.slice(1);
$g5627 = $g5644;
$g5630 = [$g5627]}
else break};
$g5629;
$g5173("for-each: simple without condition", [3, 2, 1], $b5626)}
{var $g5652 = $g5097.map, $a5653 = [1, 2, 3], $b5654 = [], $g5655 = $a5653, $g5656, $g5657, $g5658 = [$g5655];
while ($T(true))
{var $g5659 = $g5656, $value5663;
if ($T($g5659))
$value5663 = $g5659
else $value5663 = $g5344($g5621, $g5658);
var $g5673 = !($g5175($value5663));
if ($T($g5673))
{var $sequence5665 = $g5655, $item5660 = $sequence5665[0];
(function $g5674 ($item5661)
{var $rarray5668 = $b5654, $value5669 = function $g5675 ()
{return $item5661};
$rarray5668.unshift($value5669);
return $rarray5668})($item5660);
var $sequence5671 = $g5655, $g5672 = $sequence5671.slice(1);
$g5655 = $g5672;
$g5658 = [$g5655]}
else break};
$g5657;
$g5173("for-each: simple without condition and closure", [3, 2, 1], $g5652($g5255, $b5654))}
{var $g5681 = $g5097["even?"], $s5682 = [5, 7, 9, 10], $uneven5683 = [], $g5684 = $s5682, $g5685, $g5686, $g5687 = [$g5684];
while ($T(true))
{var $g5688 = $g5685, $value5692;
if ($T($g5688))
$value5692 = $g5688
else $value5692 = $g5344($g5621, $g5687);
var $g5713 = !($g5175($value5692));
if ($T($g5713))
{var $sequence5694 = $g5684, $rnumber5689 = $sequence5694[0], $rnumber5702 = $rnumber5689, $g5703 = ($rnumber5702 % 2), $g5704 = 0, $g5711 = ($g5703 === $g5704);
if ($T($g5711))
{$g5686 = $rnumber5689;
$g5685 = true}
else {(function $g5714 ($rnumber5690)
{var $rarray5707 = $uneven5683, $value5708 = $rnumber5690;
$rarray5707.push($value5708);
return $rarray5707})($rnumber5689);
var $sequence5710 = $g5684, $g5712 = $sequence5710.slice(1);
$g5684 = $g5712;
$g5687 = [$g5684]}}
else break};
$g5173("for-each: find even? in [5 7 9 10]", 10, $g5686);
$g5173("for-each: uneven are [5 7 9]", [5, 7, 9], $uneven5683)}
{var $s5720 = [5, 7, 9, 10], $uneven5721 = [], $g5722 = $s5720, $g5723, $g5724, $g5725 = [$g5722];
while ($T(true))
{var $g5726 = $g5723, $value5730;
if ($T($g5726))
$value5730 = $g5726
else $value5730 = $g5344($g5621, $g5725);
var $g5751 = !($g5175($value5730));
if ($T($g5751))
{var $sequence5732 = $g5722, $rnumber5727 = $sequence5732[0], $rnumber5740 = $rnumber5727, $g5741 = ($rnumber5740 % 2), $g5742 = 0, $g5749 = ($g5741 === $g5742);
if ($T($g5749))
{$g5724 = $rnumber5727;
$g5723 = true}
else {(function $g5752 ($rnumber5728)
{var $rarray5745 = $uneven5721, $value5746 = function $g5753 ()
{return $rnumber5728};
$rarray5745.push($value5746);
return $rarray5745})($rnumber5727);
var $sequence5748 = $g5722, $g5750 = $sequence5748.slice(1);
$g5722 = $g5750;
$g5725 = [$g5722]}}
else break};
$g5173("for-each: find even? in [5 7 9 10]", 10, $g5724);
$g5173("for-each: uneven are [5 7 9]", [5, 7, 9], $g5652($g5255, $uneven5721))}
{var $robject5755 = $g5178("a", $g5178("b", 23)), $x5756 = [], $g5757;
if ($T($g5757))
$g5757
else true;
var $rarray5760 = $x5756, $value5761 = 1;
$rarray5760.push($value5761);
$rarray5760;
var $g5762 = $g5439($robject5755, "a"), $g5763 = $g5439($g5762, "b");
$g5173("inlining: temporaries", 23, $g5763)}
{var $result5770 = [], $g5771 = [1, 2, 3], $g5772 = [4, 5, 6], $g5773, $g5774, $g5775 = [$g5771, $g5772];
while ($T(true))
{var $g5776 = $g5773, $value5782;
if ($T($g5776))
$value5782 = $g5776
else $value5782 = $g5344($g5621, $g5775);
var $g5797 = !($g5175($value5782));
if ($T($g5797))
{var $sequence5784 = $g5771, $a5777 = $sequence5784[0], $sequence5786 = $g5772, $b5778 = $sequence5786[0];
(function $g5798 ($a5779, $b5780)
{var $rarray5789 = $result5770, $value5790 = ($a5779 + $b5780);
$rarray5789.push($value5790);
return $rarray5789})($a5777, $b5778);
var $sequence5792 = $g5771, $g5795 = $sequence5792.slice(1);
$g5771 = $g5795;
var $sequence5794 = $g5772, $g5796 = $sequence5794.slice(1);
$g5772 = $g5796;
$g5775 = [$g5771, $g5772]}
else break};
$g5774;
$g5173("for-each: two sequences, no end test", [5, 7, 9], $result5770)}
{var $g5802 = $K("key"), $g5799 = $g5097.sort, $g5800 = $g5097.second, $x5801 = [[$g5328, 3], [$g5553, 1], [$g5554, 4], [$g5555, 2]];
$g5173("sort: key", [[$g5553, 1], [$g5555, 2], [$g5328, 3], [$g5554, 4]], $g5799($x5801, $g5802, $g5800));
$g5173("sort: key and test", [[$g5554, 4], [$g5328, 3], [$g5555, 2], [$g5553, 1]], $g5799($x5801, $g5199, $g5235, $g5802, $g5800))}
{var $g5803 = $g5097["group-by"];
$g5173("group-by", ["1", ["a"], "2", ["as", "aa"], "3", ["asd"]], $g5545($g5803($g5346, ["a", "as", "asd", "aa"])))}
{var $g5804 = $g5097.compose;
$g5173("compose", 3, $g5804($g5346, $g5623)([1, 2, 3, 4]))}
var $g5805 = $g5169("when", function $g5806 ()
{return "WHEN"}, false)
$g5173("macroexpansion: respect bindings", "WHEN", $g5805())
{var $unless5807 = function $g5809 ()
{return 3}, $g5808 = $unless5807();
$g5173("macroexpansion: respect local bindings", 3, $g5808)}
$g5173("macroexpansion: respect local method arguments", 3, (function $g5811 ($unless5810)
{return $unless5810()})(function $g5812 ()
{return 3}))
