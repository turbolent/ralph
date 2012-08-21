var B4459 = require("ralph/core")
{
var B4462,
B4463;
B4462 = require("ralph/regexp");
B4463 = require("ralph/compiler/utilities")}
var B4464 = B4459["make-object"],
B4465 = B4464("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var B4466 = B4459["%make-function"],
B4467 = B4459.concatenate,
B4468 = B4459.slice,
B4469 = B4459.size,
B4470 = B4466("fill_zeros", function fill_zeros__4471 (string__4472)
{
var array__4478 = "0000",
start__4479 = 0,
object__4477 = string__4472,
B4481 = ((object__4477 || false).length || 0),
end__4480 = (4 - B4481),
B4482 = array__4478.slice(start__4479, end__4480);
return B4467(B4482, string__4472)}, false)
var B4485 = B4459.join,
B4486 = B4459.map,
B4487 = B4459["<"],
B4488 = B4459["as-hex-string"],
B4489 = B4459["char-code"],
B4490 = B4459.get,
B4491 = B4459["as-array"],
B4492 = B4466("escape_string", function escape_string__4493 (string__4494)
{
var B4510 = function B4495 (char__4496)
{
var B4497 = B4490(B4465, char__4496);
if ($T(B4497))
{
var escaped__4498 = B4497;
return B4467("\\", escaped__4498)}
else
{
var char__4501 = char__4496,
code__4499 = char__4501.charCodeAt(0);
if ($T(B4487(31, code__4499, 127)))
return char__4496
else
{
var number__4503 = code__4499,
B4508 = number__4503.toString(16),
B4509 = B4470(B4508);
return B4467("\\u", B4509)}}},
arguments__4506 = string__4494,
skip__4507 = undefined,
B4511 = $SL.call(arguments__4506, (skip__4507 || 0)),
B4512 = B4486(B4510, B4511);
return B4485(B4512, "")}, false)
var B4513 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var B4514 = B4464("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
var B4516 = B4459["member?"],
B4517 = B4459["has?"],
B4518 = B4462.match,
B4519 = B4459["as-string"],
B4520 = B4466("escape_name", function escape_name__4521 (name__4522)
{if ($T(B4516(name__4522, B4513)))
return B4467("R", name__4522)
else
{
var B4544 = function B4523 (char__4524)
{
var object__4528 = B4514,
property__4529 = char__4524,
B4540 = $HP.call(object__4528,property__4529);
if ($T(B4540))
return B4490(B4514, char__4524)
else
{
var regexp__4532 = "\\w",
string__4533 = char__4524,
B4541 = string__4533.match(regexp__4532);
if ($T(B4541))
return char__4524
else
{
var char__4535 = char__4524,
B4542 = char__4535.charCodeAt(0),
B4543 = B4519(B4542);
return B4467("Z", B4543)}}},
arguments__4538 = name__4522,
skip__4539 = undefined,
B4545 = $SL.call(arguments__4538, (skip__4539 || 0)),
chars__4525 = B4486(B4544, B4545);
return B4485(chars__4525, "")}}, false)
var trueQ = B4459["true?"],
B4546 = B4459.not,
B4547 = B4466("valid_js_nameQ", function valid_js_nameQ__4548 (identifier__4549)
{
var value__4551 = B4516(identifier__4549, B4513),
B4556 = !(trueQ(value__4551));
if ($T(B4556))
{
var regexp__4554 = "^\\w+$",
string__4555 = identifier__4549;
return string__4555.match(regexp__4554)}}, false)
{
var B4612 = $K("message"),
B4613 = $S("%this-method"),
B4614 = $S("%all-arguments"),
compile_js__4577,
B4559 = B4459["instance?"],
B4560 = B4459["<array>"],
B4561 = B4459["empty?"],
B4562 = B4459.signal,
B4563 = B4459.make,
B4564 = B4459["<error>"],
B4565,
B4566 = B4459["<number>"],
B4567 = B4459["<boolean>"],
B4568 = B4459["<string>"],
B4569 = B4459["<hash-symbol>"],
B4570 = B4459["as-uppercase"],
B4571 = B4459["symbol-name"],
B4572 = B4459["<keyword>"],
B4573 = B4459["<symbol>"],
B4574 = B4459["binary=="],
B4575 = B4459.description,
B4576 = B4466("compile_js", function compile_js__4577 (exp__4578, env__4579)
{
var B4580 = exp__4578;
if ($T(B4559(B4580, B4560)))
{
var sequence__4592 = exp__4578,
B4593 = sequence__4592,
B4594 = ((B4593 || false).length || 0),
B4595 = 0,
B4608 = (B4594 === B4595);
if ($T(B4608))
{
var error__4597 = B4563(B4564, B4612, "empty expression");
throw(error__4597);
return false}
else
return B4565(exp__4578, env__4579)}
else
if ($T(B4559(B4580, B4566)))
return B4519(exp__4578)
else
if ($T(B4559(B4580, B4567)))
if ($T(exp__4578))
return "true"
else
return "false"
else
if ($T(B4559(B4580, B4568)))
return B4467("\"", B4492(exp__4578), "\"")
else
if ($T(B4559(B4580, B4569)))
{
var string__4599 = B4571(exp__4578),
B4609 = string__4599.toUpperCase();
return B4467("$", B4609)}
else
if ($T(B4559(B4580, B4572)))
return B4467("$K(\"", B4571(exp__4578), "\")")
else
if ($T(B4559(B4580, B4573)))
{
var B4581 = exp__4578,
object1__4602 = B4581,
object2__4603 = B4613,
B4610 = (object1__4602 === object2__4603);
if ($T(B4610))
return compile_js__4577(B4490(env__4579, "current-method"), env__4579)
else
{
var object1__4606 = B4581,
object2__4607 = B4614,
B4611 = (object1__4606 === object2__4607);
if ($T(B4611))
return "arguments"
else
return B4520(B4571(exp__4578))}}
else
return B4575(exp__4578)}, false);
exports["compile-js"] = B4576}
{
var B4907 = $S("%infix"),
B4908 = $S("%return"),
B4909 = $S("%begin"),
compile_js_exp__4641,
trueQ = B4459["true?"],
B4628,
B4629 = B4459.rcurry,
B4630 = B4459.rest,
B4631 = B4459[">="],
B4632 = B4459["push-last"],
B4633 = B4459.element,
B4634 = B4459["="],
B4635 = B4459.second,
B4636 = B4463["expression?"],
B4637 = B4459.first,
B4638 = B4459.reduce1,
B4639 = B4459.reduce,
B4640 = B4463["method?"];
B4565 = B4466("compile_js_exp", function compile_js_exp__4641 (exp__4642, env__4643)
{B4910:while(true){
var sequence__4706 = exp__4642,
B4845 = sequence__4706[0],
name__4644 = B4571(B4845),
B4645 = name__4644,
object1__4709 = B4645,
object2__4710 = "%native-call",
B4846 = (object1__4709 === object2__4710);
if ($T(B4846))
{
var ____4646 = exp__4642[0],
operator__4647 = exp__4642[1],
values__4648 = $SL.call(exp__4642, 2);
return B4467(operator__4647, B4628(values__4648, env__4643))}
else
{
var object1__4713 = B4645,
object2__4714 = "%infix",
B4847 = (object1__4713 === object2__4714);
if ($T(B4847))
{
var ____4649 = exp__4642[0],
operator__4650 = exp__4642[1],
values__4651 = $SL.call(exp__4642, 2);
return B4467("(", B4485(B4486(B4629(B4576, env__4643), values__4651), B4467(" ", operator__4650, " ")), ")")}
else
{
var object1__4717 = B4645,
object2__4718 = "%plus",
B4652 = (object1__4717 === object2__4718),
B4848;
if ($T(B4652))
B4848 = B4652
else
{
var object1__4721 = B4645,
object2__4722 = "%minus",
B4653 = (object1__4721 === object2__4722);
if ($T(B4653))
B4848 = B4653
else
{
var object1__4725 = B4645,
object2__4726 = "%times",
B4654 = (object1__4725 === object2__4726);
if ($T(B4654))
B4848 = B4654
else
{
var object1__4729 = B4645,
object2__4730 = "%divide";
B4848 = (object1__4729 === object2__4730)}}};
if ($T(B4848))
{
var B4849 = B4907,
B4655 = name__4644,
object1__4733 = B4655,
object2__4734 = "%plus",
B4850 = (object1__4733 === object2__4734),
B4854;
if ($T(B4850))
B4854 = "+"
else
{
var object1__4737 = B4655,
object2__4738 = "%minus",
B4851 = (object1__4737 === object2__4738);
if ($T(B4851))
B4854 = "-"
else
{
var object1__4741 = B4655,
object2__4742 = "%times",
B4852 = (object1__4741 === object2__4742);
if ($T(B4852))
B4854 = "*"
else
{
var object1__4745 = B4655,
object2__4746 = "%divide",
B4853 = (object1__4745 === object2__4746);
if ($T(B4853))
B4854 = "/"
else
B4854 = false}}};
var B4855 = [B4849, B4854],
sequence__4748 = exp__4642,
B4856 = sequence__4748.slice(1),
B4857 = B4467(B4855, B4856);
arguments = [B4857, env__4643];
exp__4642 = arguments[0];
env__4643 = arguments[1];
continue B4910}
else
{
var object1__4751 = B4645,
object2__4752 = "%array",
B4858 = (object1__4751 === object2__4752);
if ($T(B4858))
{
var ____4656 = exp__4642[0],
elements__4657 = $SL.call(exp__4642, 1);
return B4467("[", B4485(B4486(B4629(B4576, env__4643), elements__4657), ", "), "]")}
else
{
var object1__4755 = B4645,
object2__4756 = "%object",
B4859 = (object1__4755 === object2__4756);
if ($T(B4859))
{
var sequence__4758 = exp__4642,
key_values__4658 = sequence__4758.slice(1),
entries__4659 = [],
object__4760 = key_values__4658,
B4860 = ((object__4760 || false).length || 0),
B4660 = (B4860 / 2),
i__4661 = 0;
while (true)
{
var value__4762 = B4631(i__4661, B4660),
B4863 = !(trueQ(value__4762));
if ($T(B4863))
{
(function B4662 (i__4663)
{
var array__4765 = entries__4659,
name__4664 = B4633(key_values__4658, (i__4663 * 2)),
B4861;
if ($T(B4547(name__4664)))
B4861 = name__4664
else
B4861 = B4576(name__4664, env__4643);
var B4862 = B4576(B4633(key_values__4658, ((i__4663 * 2) + 1)), env__4643),
value__4766 = B4467(B4861, ":", B4862);
array__4765.push(value__4766);
return array__4765})(i__4661);
i__4661 = (i__4661 + 1)}
else
break};
false;
return B4467("{", B4485(entries__4659, ",\n"), "}")}
else
{
var object1__4769 = B4645,
object2__4770 = "%if",
B4864 = (object1__4769 === object2__4770);
if ($T(B4864))
{
var ____4665 = exp__4642[0],
test__4666 = exp__4642[1],
then__4667 = exp__4642[2],
else__4668 = exp__4642[3],
B4865 = B4576(test__4666, env__4643),
B4866 = B4576(then__4667, env__4643),
B4867;
if ($T(else__4668))
{
var value__4772 = B4634(else__4668, [B4908, false]);
B4867 = !(trueQ(value__4772))}
else
B4867 = false;
var B4868;
if ($T(B4867))
B4868 = B4467("\nelse\n", B4576(else__4668, env__4643))
else
B4868 = "";
return B4467("if (", B4865, ")\n", B4866, B4868)}
else
{
var object1__4775 = B4645,
object2__4776 = "%while",
B4869 = (object1__4775 === object2__4776);
if ($T(B4869))
{
var ____4669 = exp__4642[0],
test__4670 = exp__4642[1],
body__4671 = exp__4642[2];
return B4467("while (", B4576(test__4670, env__4643), ")\n", B4576(body__4671, env__4643))}
else
{
var object1__4779 = B4645,
object2__4780 = "%try",
B4870 = (object1__4779 === object2__4780);
if ($T(B4870))
{
var ____4672 = exp__4642[0],
body__4673 = exp__4642[1],
var__4674 = exp__4642[2],
catch__4675 = exp__4642[3];
return B4467("try {", B4576(body__4673, env__4643), "}\n", "catch (", B4576(var__4674, env__4643), ")\n", "{", B4576(catch__4675, env__4643), "}")}
else
{
var object1__4783 = B4645,
object2__4784 = "%return",
B4871 = (object1__4783 === object2__4784);
if ($T(B4871))
{
var sequence__4786 = exp__4642,
B4872 = sequence__4786[1],
B4873 = B4576(B4872, env__4643);
return B4467("return ", B4873)}
else
{
var object1__4789 = B4645,
object2__4790 = "%begin",
B4874 = (object1__4789 === object2__4790);
if ($T(B4874))
{
var B4875 = B4629(B4576, env__4643),
sequence__4792 = exp__4642,
B4876 = sequence__4792.slice(1),
B4877 = B4486(B4875, B4876),
B4878 = B4485(B4877, ";\n");
return B4467("{\n", B4878, "}")}
else
{
var object1__4795 = B4645,
object2__4796 = "%set",
B4879 = (object1__4795 === object2__4796);
if ($T(B4879))
{
var ____4676 = exp__4642[0],
var__4677 = exp__4642[1],
value__4678 = exp__4642[2];
return B4467(B4576(var__4677, env__4643), " = ", B4576(value__4678, env__4643))}
else
{
var object1__4799 = B4645,
object2__4800 = "%method",
B4880 = (object1__4799 === object2__4800);
if ($T(B4880))
{
var ____4679 = exp__4642[0],
name__4680 = exp__4642[1],
arguments__4681 = exp__4642[2],
body__4682 = exp__4642[3],
previous_method__4683 = B4490(env__4643, "current-method"),
B4881 = B4576(name__4680, env__4643),
B4882 = B4485(B4486(B4629(B4576, env__4643), arguments__4681), ", ");
env__4643["current-method"] = name__4680;
var bodyT__4684 = B4576(body__4682, env__4643);
env__4643["current-method"] = previous_method__4683;
var B4883;
if ($T(B4636(body__4682)))
{
var sequence__4804 = body__4682,
object1__4805 = sequence__4804[0],
object2__4806 = B4909;
B4883 = (object1__4805 === object2__4806)}
else
B4883 = false;
var B4884;
if ($T(B4883))
B4884 = bodyT__4684
else
B4884 = B4467("{", bodyT__4684, "}");
return B4467("function ", B4881, " (", B4882, ")\n", B4884)}
else
{
var object1__4809 = B4645,
object2__4810 = "%var",
B4885 = (object1__4809 === object2__4810);
if ($T(B4885))
{
var ____4685 = exp__4642[0],
bindings__4686 = $SL.call(exp__4642, 1);
return B4467("var ", B4485(B4486(function B4687 (binding__4688)
{
var B4689;
if ($T(B4559(binding__4688, B4560)))
B4689 = binding__4688
else
B4689 = [binding__4688, false];
var var__4690 = B4689[0],
value__4691 = B4689[1],
B4886 = B4576(var__4690, env__4643),
B4887;
if ($T(value__4691))
B4887 = B4467(" = ", B4576(value__4691, env__4643))
else
B4887 = "";
return B4467(B4886, B4887)}, bindings__4686), ",\n"))}
else
{
var object1__4813 = B4645,
object2__4814 = "%native",
B4888 = (object1__4813 === object2__4814);
if ($T(B4888))
{
var function__4825 = B4467,
B4890 = function B4692 (e__4693)
{
var B4694 = e__4693,
B4695 = B4559(B4694, B4573),
B4889;
if ($T(B4695))
B4889 = B4695
else
B4889 = B4559(B4694, B4560);
if ($T(B4889))
return B4576(e__4693, env__4643)
else
return B4519(e__4693)},
sequence__4824 = exp__4642,
B4891 = sequence__4824.slice(1),
values__4826 = B4486(B4890, B4891),
B4827 = values__4826,
B4892 = B4827[0],
B4828 = values__4826,
B4893 = B4828.slice(1);
return B4639(function__4825, B4892, B4893)}
else
{
var object1__4831 = B4645,
object2__4832 = "%native-name",
B4894 = (object1__4831 === object2__4832);
if ($T(B4894))
{
var sequence__4834 = exp__4642,
B4895 = sequence__4834[1],
B4896 = B4520(B4895);
return B4467("\"", B4896, "\"")}
else
{
var object1__4837 = B4645,
object2__4838 = "%get-property",
B4897 = (object1__4837 === object2__4838);
if ($T(B4897))
{
var ____4696 = exp__4642[0],
object__4697 = exp__4642[1],
properties__4698 = $SL.call(exp__4642, 2),
B4898;
if ($T(B4559(object__4697, B4566)))
B4898 = B4467("(", B4576(object__4697, env__4643), ")")
else
B4898 = B4576(object__4697, env__4643);
var B4901 = B4639(function B4699 (result__4700, property__4701)
{
var B4899;
if ($T(B4559(property__4701, B4568)))
B4899 = B4547(property__4701)
else
B4899 = false;
var B4900;
if ($T(B4899))
B4900 = B4467(".", property__4701)
else
B4900 = B4467("[", B4576(property__4701, env__4643), "]");
return B4467(result__4700, B4900)}, "", properties__4698);
return B4467(B4898, B4901)}
else
{
var object1__4841 = B4645,
object2__4842 = "%symbol",
B4902 = (object1__4841 === object2__4842);
if ($T(B4902))
{
var sequence__4844 = exp__4642,
B4903 = sequence__4844.slice(1),
B4904 = B4628(B4903, env__4643);
return B4467("$S", B4904)}
else
{
var function__4702 = exp__4642[0],
values__4703 = $SL.call(exp__4642, 1),
functionT__4704 = B4576(function__4702, env__4643),
B4905;
if ($T(B4640(function__4702)))
B4905 = B4467("(", functionT__4704, ")")
else
B4905 = functionT__4704;
var B4906 = B4628(values__4703, env__4643);
return B4467(B4905, B4906)}}}}}}}}}}}}}}}}};
break}}, false)}
B4628 = B4466("compile_js_call", function compile_js_call__4911 (values__4912, env__4913)
{return B4467("(", B4485(B4486(B4629(B4576, env__4913), values__4912), ", "), ")")}, false)
