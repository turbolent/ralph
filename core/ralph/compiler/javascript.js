var B4464 = require("ralph/core")
{
var B4467,
B4468;
B4467 = require("ralph/regexp");
B4468 = require("ralph/compiler/utilities")}
var B4469 = B4464["make-object"],
B4470 = B4469("\"", "\"", "\\", "\\", "\b", "b", "\f", "f", "\n", "n", "\r", "r", "\v", "v", "\t", "t")
var B4471 = B4464["%make-function"],
B4472 = B4464.concatenate,
B4473 = B4464.slice,
B4474 = B4464.size,
B4475 = B4471("fill_zeros", function fill_zeros__4476 (string__4477)
{
var array__4483 = "0000",
start__4484 = 0,
object__4482 = string__4477,
B4486 = ((object__4482 || false).length || 0),
end__4485 = (4 - B4486),
B4487 = array__4483.slice(start__4484, end__4485);
return B4472(B4487, string__4477)}, false)
var B4490 = B4464.join,
B4491 = B4464.map,
B4492 = B4464["<"],
B4493 = B4464["as-hex-string"],
B4494 = B4464["char-code"],
B4495 = B4464.get,
B4496 = B4464["as-array"],
B4497 = B4471("escape_string", function escape_string__4498 (string__4499)
{
var B4515 = function B4500 (char__4501)
{
var B4502 = B4495(B4470, char__4501);
if ($T(B4502))
{
var escaped__4503 = B4502;
return B4472("\\", escaped__4503)}
else
{
var char__4506 = char__4501,
code__4504 = char__4506.charCodeAt(0);
if ($T(B4492(31, code__4504, 127)))
return char__4501
else
{
var number__4508 = code__4504,
B4513 = number__4508.toString(16),
B4514 = B4475(B4513);
return B4472("\\u", B4514)}}},
arguments__4511 = string__4499,
skip__4512 = undefined,
B4516 = $SL.call(arguments__4511, (skip__4512 || 0)),
B4517 = B4491(B4515, B4516);
return B4490(B4517, "")}, false)
var B4518 = ["break", "case", "catch", "continue", "default", "delete", "do", "else", "finally", "for", "function", "if", "in", "instanceof", "new", "return", "switch", "this", "throw", "try", "typeof", "var", "void", "while", "with", "abstract", "boolean", "byte", "char", "class", "const", "debugger", "double", "enum", "export", "extends", "final", "float", "goto", "implements", "import", "int", "interface", "long", "native", "package", "private", "protected", "public", "short", "static", "super", "synchronized", "throws", "transient", "volatile", "null", "true", "false", "arguments", "object", "number", "string", "array", "let", "yield"]
var B4519 = B4469("-", "_", "_", "__", "&", "A", "$", "B", ":", "C", ".", "D", "=", "E", "^", "F", ">", "G", "#", "H", "@", "I", "~", "J", "<", "L", "%", "M", "!", "N", "+", "P", "?", "Q", "/", "S", "*", "T")
var B4521 = B4464["member?"],
B4522 = B4464["has?"],
B4523 = B4467.match,
B4524 = B4464["as-string"],
B4525 = B4471("escape_name", function escape_name__4526 (name__4527)
{if ($T(B4521(name__4527, B4518)))
return B4472("R", name__4527)
else
{
var B4549 = function B4528 (char__4529)
{
var object__4533 = B4519,
property__4534 = char__4529,
B4545 = $HP.call(object__4533,property__4534);
if ($T(B4545))
return B4495(B4519, char__4529)
else
{
var regexp__4537 = "\\w",
string__4538 = char__4529,
B4546 = string__4538.match(regexp__4537);
if ($T(B4546))
return char__4529
else
{
var char__4540 = char__4529,
B4547 = char__4540.charCodeAt(0),
B4548 = B4524(B4547);
return B4472("Z", B4548)}}},
arguments__4543 = name__4527,
skip__4544 = undefined,
B4550 = $SL.call(arguments__4543, (skip__4544 || 0)),
chars__4530 = B4491(B4549, B4550);
return B4490(chars__4530, "")}}, false)
var trueQ = B4464["true?"],
B4551 = B4464.not,
B4552 = B4471("valid_js_nameQ", function valid_js_nameQ__4553 (identifier__4554)
{
var value__4556 = B4521(identifier__4554, B4518),
B4561 = !(trueQ(value__4556));
if ($T(B4561))
{
var regexp__4559 = "^\\w+$",
string__4560 = identifier__4554;
return string__4560.match(regexp__4559)}}, false)
{
var B4617 = $K("message"),
B4618 = $S("%this-method"),
B4619 = $S("%all-arguments"),
compile_js__4582,
B4564 = B4464["instance?"],
B4565 = B4464["<array>"],
B4566 = B4464["empty?"],
B4567 = B4464.signal,
B4568 = B4464.make,
B4569 = B4464["<error>"],
B4570,
B4571 = B4464["<number>"],
B4572 = B4464["<boolean>"],
B4573 = B4464["<string>"],
B4574 = B4464["<hash-symbol>"],
B4575 = B4464["as-uppercase"],
B4576 = B4464["symbol-name"],
B4577 = B4464["<keyword>"],
B4578 = B4464["<symbol>"],
B4579 = B4464["binary=="],
B4580 = B4464.description,
B4581 = B4471("compile_js", function compile_js__4582 (exp__4583, env__4584)
{B4620:while(true){
var B4585 = exp__4583;
if ($T(B4564(B4585, B4565)))
{
var sequence__4597 = exp__4583,
B4598 = sequence__4597,
B4599 = ((B4598 || false).length || 0),
B4600 = 0,
B4613 = (B4599 === B4600);
if ($T(B4613))
{
var error__4602 = B4568(B4569, B4617, "empty expression");
throw(error__4602);
return false}
else
return B4570(exp__4583, env__4584)}
else
if ($T(B4564(B4585, B4571)))
return B4524(exp__4583)
else
if ($T(B4564(B4585, B4572)))
if ($T(exp__4583))
return "true"
else
return "false"
else
if ($T(B4564(B4585, B4573)))
return B4472("\"", B4497(exp__4583), "\"")
else
if ($T(B4564(B4585, B4574)))
{
var string__4604 = B4576(exp__4583),
B4614 = string__4604.toUpperCase();
return B4472("$", B4614)}
else
if ($T(B4564(B4585, B4577)))
return B4472("$K(\"", B4576(exp__4583), "\")")
else
if ($T(B4564(B4585, B4578)))
{
var B4586 = exp__4583,
object1__4607 = B4586,
object2__4608 = B4618,
B4615 = (object1__4607 === object2__4608);
if ($T(B4615))
{
arguments = [B4495(env__4584, "current-method"), env__4584];
exp__4583 = arguments[0];
env__4584 = arguments[1];
continue B4620}
else
{
var object1__4611 = B4586,
object2__4612 = B4619,
B4616 = (object1__4611 === object2__4612);
if ($T(B4616))
return "arguments"
else
return B4525(B4576(exp__4583))}}
else
return B4580(exp__4583);
break}}, false);
exports["compile-js"] = B4581}
{
var B4913 = $S("%infix"),
B4914 = $S("%return"),
B4915 = $S("%begin"),
compile_js_exp__4647,
trueQ = B4464["true?"],
B4634,
B4635 = B4464.rcurry,
B4636 = B4464.rest,
B4637 = B4464[">="],
B4638 = B4464["push-last"],
B4639 = B4464.element,
B4640 = B4464["="],
B4641 = B4464.second,
B4642 = B4468["expression?"],
B4643 = B4464.first,
B4644 = B4464.reduce1,
B4645 = B4464.reduce,
B4646 = B4468["method?"];
B4570 = B4471("compile_js_exp", function compile_js_exp__4647 (exp__4648, env__4649)
{B4916:while(true){
var sequence__4712 = exp__4648,
B4851 = sequence__4712[0],
name__4650 = B4576(B4851),
B4651 = name__4650,
object1__4715 = B4651,
object2__4716 = "%native-call",
B4852 = (object1__4715 === object2__4716);
if ($T(B4852))
{
var ____4652 = exp__4648[0],
operator__4653 = exp__4648[1],
values__4654 = $SL.call(exp__4648, 2);
return B4472(operator__4653, B4634(values__4654, env__4649))}
else
{
var object1__4719 = B4651,
object2__4720 = "%infix",
B4853 = (object1__4719 === object2__4720);
if ($T(B4853))
{
var ____4655 = exp__4648[0],
operator__4656 = exp__4648[1],
values__4657 = $SL.call(exp__4648, 2);
return B4472("(", B4490(B4491(B4635(B4581, env__4649), values__4657), B4472(" ", operator__4656, " ")), ")")}
else
{
var object1__4723 = B4651,
object2__4724 = "%plus",
B4658 = (object1__4723 === object2__4724),
B4854;
if ($T(B4658))
B4854 = B4658
else
{
var object1__4727 = B4651,
object2__4728 = "%minus",
B4659 = (object1__4727 === object2__4728);
if ($T(B4659))
B4854 = B4659
else
{
var object1__4731 = B4651,
object2__4732 = "%times",
B4660 = (object1__4731 === object2__4732);
if ($T(B4660))
B4854 = B4660
else
{
var object1__4735 = B4651,
object2__4736 = "%divide";
B4854 = (object1__4735 === object2__4736)}}};
if ($T(B4854))
{
var B4855 = B4913,
B4661 = name__4650,
object1__4739 = B4661,
object2__4740 = "%plus",
B4856 = (object1__4739 === object2__4740),
B4860;
if ($T(B4856))
B4860 = "+"
else
{
var object1__4743 = B4661,
object2__4744 = "%minus",
B4857 = (object1__4743 === object2__4744);
if ($T(B4857))
B4860 = "-"
else
{
var object1__4747 = B4661,
object2__4748 = "%times",
B4858 = (object1__4747 === object2__4748);
if ($T(B4858))
B4860 = "*"
else
{
var object1__4751 = B4661,
object2__4752 = "%divide",
B4859 = (object1__4751 === object2__4752);
if ($T(B4859))
B4860 = "/"
else
B4860 = false}}};
var B4861 = [B4855, B4860],
sequence__4754 = exp__4648,
B4862 = sequence__4754.slice(1),
B4863 = B4472(B4861, B4862);
arguments = [B4863, env__4649];
exp__4648 = arguments[0];
env__4649 = arguments[1];
continue B4916}
else
{
var object1__4757 = B4651,
object2__4758 = "%array",
B4864 = (object1__4757 === object2__4758);
if ($T(B4864))
{
var ____4662 = exp__4648[0],
elements__4663 = $SL.call(exp__4648, 1);
return B4472("[", B4490(B4491(B4635(B4581, env__4649), elements__4663), ", "), "]")}
else
{
var object1__4761 = B4651,
object2__4762 = "%object",
B4865 = (object1__4761 === object2__4762);
if ($T(B4865))
{
var sequence__4764 = exp__4648,
key_values__4664 = sequence__4764.slice(1),
entries__4665 = [],
object__4766 = key_values__4664,
B4866 = ((object__4766 || false).length || 0),
B4666 = (B4866 / 2),
i__4667 = 0;
while (true)
{
var value__4768 = B4637(i__4667, B4666),
B4869 = !(trueQ(value__4768));
if ($T(B4869))
{
(function B4668 (i__4669)
{
var array__4771 = entries__4665,
name__4670 = B4639(key_values__4664, (i__4669 * 2)),
B4867;
if ($T(B4552(name__4670)))
B4867 = name__4670
else
B4867 = B4581(name__4670, env__4649);
var B4868 = B4581(B4639(key_values__4664, ((i__4669 * 2) + 1)), env__4649),
value__4772 = B4472(B4867, ":", B4868);
array__4771.push(value__4772);
return array__4771})(i__4667);
i__4667 = (i__4667 + 1)}
else
break};
false;
return B4472("{", B4490(entries__4665, ",\n"), "}")}
else
{
var object1__4775 = B4651,
object2__4776 = "%if",
B4870 = (object1__4775 === object2__4776);
if ($T(B4870))
{
var ____4671 = exp__4648[0],
test__4672 = exp__4648[1],
then__4673 = exp__4648[2],
else__4674 = exp__4648[3],
B4871 = B4581(test__4672, env__4649),
B4872 = B4581(then__4673, env__4649),
B4873;
if ($T(else__4674))
{
var value__4778 = B4640(else__4674, [B4914, false]);
B4873 = !(trueQ(value__4778))}
else
B4873 = false;
var B4874;
if ($T(B4873))
B4874 = B4472("\nelse\n", B4581(else__4674, env__4649))
else
B4874 = "";
return B4472("if (", B4871, ")\n", B4872, B4874)}
else
{
var object1__4781 = B4651,
object2__4782 = "%while",
B4875 = (object1__4781 === object2__4782);
if ($T(B4875))
{
var ____4675 = exp__4648[0],
test__4676 = exp__4648[1],
body__4677 = exp__4648[2];
return B4472("while (", B4581(test__4676, env__4649), ")\n", B4581(body__4677, env__4649))}
else
{
var object1__4785 = B4651,
object2__4786 = "%try",
B4876 = (object1__4785 === object2__4786);
if ($T(B4876))
{
var ____4678 = exp__4648[0],
body__4679 = exp__4648[1],
var__4680 = exp__4648[2],
catch__4681 = exp__4648[3];
return B4472("try {", B4581(body__4679, env__4649), "}\n", "catch (", B4581(var__4680, env__4649), ")\n", "{", B4581(catch__4681, env__4649), "}")}
else
{
var object1__4789 = B4651,
object2__4790 = "%return",
B4877 = (object1__4789 === object2__4790);
if ($T(B4877))
{
var sequence__4792 = exp__4648,
B4878 = sequence__4792[1],
B4879 = B4581(B4878, env__4649);
return B4472("return ", B4879)}
else
{
var object1__4795 = B4651,
object2__4796 = "%begin",
B4880 = (object1__4795 === object2__4796);
if ($T(B4880))
{
var B4881 = B4635(B4581, env__4649),
sequence__4798 = exp__4648,
B4882 = sequence__4798.slice(1),
B4883 = B4491(B4881, B4882),
B4884 = B4490(B4883, ";\n");
return B4472("{\n", B4884, "}")}
else
{
var object1__4801 = B4651,
object2__4802 = "%set",
B4885 = (object1__4801 === object2__4802);
if ($T(B4885))
{
var ____4682 = exp__4648[0],
var__4683 = exp__4648[1],
value__4684 = exp__4648[2];
return B4472(B4581(var__4683, env__4649), " = ", B4581(value__4684, env__4649))}
else
{
var object1__4805 = B4651,
object2__4806 = "%method",
B4886 = (object1__4805 === object2__4806);
if ($T(B4886))
{
var ____4685 = exp__4648[0],
name__4686 = exp__4648[1],
arguments__4687 = exp__4648[2],
body__4688 = exp__4648[3],
previous_method__4689 = B4495(env__4649, "current-method"),
B4887 = B4581(name__4686, env__4649),
B4888 = B4490(B4491(B4635(B4581, env__4649), arguments__4687), ", ");
env__4649["current-method"] = name__4686;
var bodyT__4690 = B4581(body__4688, env__4649);
env__4649["current-method"] = previous_method__4689;
var B4889;
if ($T(B4642(body__4688)))
{
var sequence__4810 = body__4688,
object1__4811 = sequence__4810[0],
object2__4812 = B4915;
B4889 = (object1__4811 === object2__4812)}
else
B4889 = false;
var B4890;
if ($T(B4889))
B4890 = bodyT__4690
else
B4890 = B4472("{", bodyT__4690, "}");
return B4472("function ", B4887, " (", B4888, ")\n", B4890)}
else
{
var object1__4815 = B4651,
object2__4816 = "%var",
B4891 = (object1__4815 === object2__4816);
if ($T(B4891))
{
var ____4691 = exp__4648[0],
bindings__4692 = $SL.call(exp__4648, 1);
return B4472("var ", B4490(B4491(function B4693 (binding__4694)
{
var B4695;
if ($T(B4564(binding__4694, B4565)))
B4695 = binding__4694
else
B4695 = [binding__4694, false];
var var__4696 = B4695[0],
value__4697 = B4695[1],
B4892 = B4581(var__4696, env__4649),
B4893;
if ($T(value__4697))
B4893 = B4472(" = ", B4581(value__4697, env__4649))
else
B4893 = "";
return B4472(B4892, B4893)}, bindings__4692), ",\n"))}
else
{
var object1__4819 = B4651,
object2__4820 = "%native",
B4894 = (object1__4819 === object2__4820);
if ($T(B4894))
{
var function__4831 = B4472,
B4896 = function B4698 (e__4699)
{
var B4700 = e__4699,
B4701 = B4564(B4700, B4578),
B4895;
if ($T(B4701))
B4895 = B4701
else
B4895 = B4564(B4700, B4565);
if ($T(B4895))
return B4581(e__4699, env__4649)
else
return B4524(e__4699)},
sequence__4830 = exp__4648,
B4897 = sequence__4830.slice(1),
values__4832 = B4491(B4896, B4897),
B4833 = values__4832,
B4898 = B4833[0],
B4834 = values__4832,
B4899 = B4834.slice(1);
return B4645(function__4831, B4898, B4899)}
else
{
var object1__4837 = B4651,
object2__4838 = "%native-name",
B4900 = (object1__4837 === object2__4838);
if ($T(B4900))
{
var sequence__4840 = exp__4648,
B4901 = sequence__4840[1],
B4902 = B4525(B4901);
return B4472("\"", B4902, "\"")}
else
{
var object1__4843 = B4651,
object2__4844 = "%get-property",
B4903 = (object1__4843 === object2__4844);
if ($T(B4903))
{
var ____4702 = exp__4648[0],
object__4703 = exp__4648[1],
properties__4704 = $SL.call(exp__4648, 2),
B4904;
if ($T(B4564(object__4703, B4571)))
B4904 = B4472("(", B4581(object__4703, env__4649), ")")
else
B4904 = B4581(object__4703, env__4649);
var B4907 = B4645(function B4705 (result__4706, property__4707)
{
var B4905;
if ($T(B4564(property__4707, B4573)))
B4905 = B4552(property__4707)
else
B4905 = false;
var B4906;
if ($T(B4905))
B4906 = B4472(".", property__4707)
else
B4906 = B4472("[", B4581(property__4707, env__4649), "]");
return B4472(result__4706, B4906)}, "", properties__4704);
return B4472(B4904, B4907)}
else
{
var object1__4847 = B4651,
object2__4848 = "%symbol",
B4908 = (object1__4847 === object2__4848);
if ($T(B4908))
{
var sequence__4850 = exp__4648,
B4909 = sequence__4850.slice(1),
B4910 = B4634(B4909, env__4649);
return B4472("$S", B4910)}
else
{
var function__4708 = exp__4648[0],
values__4709 = $SL.call(exp__4648, 1),
functionT__4710 = B4581(function__4708, env__4649),
B4911;
if ($T(B4646(function__4708)))
B4911 = B4472("(", functionT__4710, ")")
else
B4911 = functionT__4710;
var B4912 = B4634(values__4709, env__4649);
return B4472(B4911, B4912)}}}}}}}}}}}}}}}}};
break}}, false)}
B4634 = B4471("compile_js_call", function compile_js_call__4917 (values__4918, env__4919)
{return B4472("(", B4490(B4491(B4635(B4581, env__4919), values__4918), ", "), ")")}, false)
