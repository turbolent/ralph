var $g5099 = require("ralph/core")
var $g5101 = require("ralph/format")
var $g5102 = true
var $g5103 = $g5099["%make-function"], $g5104 = $g5101["format-out"], $g5105 = $g5103("report_success", function $g5109 ($description5106, $explanation5107)
{var $g5108;
if ($T($g5102))
$g5108 = "."
else $g5108 = " \u001b[32m\u2713\u001b[0m %s: %s\n";
return $g5104($g5108, $description5106, $explanation5107)}, false)
var $g5110 = $g5103("report_failure", function $g5114 ($description5111, $explanation5112)
{var $g5113;
if ($T($g5102))
$g5113 = "\n"
else $g5113 = "";
return $g5104("%s \u001b[31m\u2718\u001b[0m %s: %s\n", $g5113, $description5111, $explanation5112)}, false)
{var $g5115 = $g5099["="], $g5116 = $g5101["format-to-string"], $g5117 = $g5103("check_equal", function $g5121 ($description5118, $expected_value5119, $test_value5120)
{if ($T($g5115($expected_value5119, $test_value5120)))
return $g5105($description5118, $g5116("Values are equal: %=, %=", $expected_value5119, $test_value5120))
else return $g5110($description5118, $g5116("Values should be equal: %=, %=", $expected_value5119, $test_value5120))}, false);
exports["check-equal"] = $g5117}
var trueQ = $g5099["true?"], $g5122 = $g5099.not, $g5123 = $g5103("check_unequal", function $g5130 ($description5124, $expected_value5125, $test_value5126)
{var $value5128 = $g5115($expected_value5125, $test_value5126), $g5129 = !(trueQ($value5128));
if ($T($g5129))
return $g5105($description5124, $g5116("Values aren't equal: %=, %=", $expected_value5125, $test_value5126))
else return $g5110($description5124, $g5116("Values shouldn't be equal: %=, %=", $expected_value5125, $test_value5126))}, false)
{var $g5131 = $g5103("check_true", function $g5134 ($description5132, $expression5133)
{if ($T($expression5133))
return $g5105($description5132, $g5116("Expression is true: %=", $expression5133))
else return $g5110($description5132, $g5116("Expression should be true: %=", $expression5133))}, false);
exports["check-true"] = $g5131}
{var trueQ = $g5099["true?"], $g5135 = $g5103("check_false", function $g5141 ($description5136, $expression5137)
{var $value5139 = $expression5137, $g5140 = !(trueQ($value5139));
if ($T($g5140))
return $g5105($description5136, $g5116("Expression is false: %=", $expression5137))
else return $g5110($description5136, $g5116("Expression should be false: %=", $expression5137))}, false);
exports["check-false"] = $g5135}
{var $g5143 = $g5099["instance?"], $g5144 = $g5103("check_condition", function $g5149 ($description5145, $condition_class5146, $rfunction5147)
{try {{$rfunction5147();
return $g5110($description5145, $g5116("Condition %= should have been signaled.", $condition_class5146))}}
catch ($g5148)
{if ($T($g5143($g5148, $condition_class5146)))
return $g5105($description5145, $g5116("Condition %= was signaled.", $condition_class5146))}}, false);
exports["check-condition"] = $g5144}
{var $g5151 = $g5099["<error>"], $g5152 = $g5103("check_no_error", function $g5157 ($description5153, $rfunction5154)
{try {{$rfunction5154();
return $g5105($description5153, "No error was signaled.")}}
catch ($g5155)
{if ($T($g5143($g5155, $g5151)))
{var $condition5156 = $g5155;
return $g5110($description5153, $g5116("Condition %= shouldn't have been signaled.", $condition5156))}}}, false);
exports["check-no-error"] = $g5152}
{var $g5158 = $g5103("check_instanceQ", function $g5162 ($description5159, $value_type5160, $value5161)
{if ($T($g5143($value5161, $value_type5160)))
return $g5105($description5159, $g5116("Value is of instance %=: %=", $value_type5160, $value5161))
else return $g5110($description5159, $g5116("Value should be of instance %=: %=", $value_type5160, $value5161))}, false);
exports["check-instance?"] = $g5158}
