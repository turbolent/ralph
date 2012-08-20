var B2218 = require("ralph/core")
{var B4389, B4390, B4391, B4392, B4393, B4394, B4395, B4396, B4397, B4398, B4399;
B4389 = require("ralph/stream");
B4390 = require("ralph/format");
B4391 = require("ralph/reader");
B4392 = require("ralph/file-system");
B4393 = require("ralph/compiler/utilities");
B4394 = require("ralph/compiler/alpha");
B4395 = require("ralph/compiler/define-lifting");
B4396 = require("ralph/compiler/anf");
B4397 = require("ralph/compiler/statements");
B4398 = require("ralph/compiler/flattening");
B4399 = require("ralph/compiler/javascript")}
var B4400 = B2218["make-object"], B4401 = B4400()
{var B4402 = B2218["%make-class"], B4403 = B2218["<object>"], B4404 = B4402(B4403, {name:false,
"native?":false,
exports:function B4405 ()
{return []},
imports:function B4406 ()
{return []},
dependencies:function B4407 ()
{return []},
inline:function B4408 ()
{return []}});
exports["<module>"] = B4404}
var B4410 = $S("%all-arguments"), B4411 = $S("%this-method"), B4409 = [B4410, B4411]
{var B4412 = B2218["make-plain-object"], B4413 = B4402(B4403, {module:false,
macros:function B4414 ()
{return B4412()},
"symbol-macros":function B4415 ()
{return B4412()},
identifiers:function B4416 ()
{return B4400()},
"defined?":function B4417 ()
{return B4400()},
lifted:function B4418 ()
{return B4400()},
"import-identifiers":function B4419 ()
{return B4412()}});
exports["<environment>"] = B4413}
var B4420 = B2218["%make-function"], B4421 = B2218["get-setter"], B4422 = B2218["symbol-name"], B4423 = B4420("bindN", function B4426 (env__4424, identifier__4425)
{return B4421(env__4424, "bound?", B4422(identifier__4425), true)}, false)
var B4427 = B4420("unbindN", function B4430 (env__4428, identifier__4429)
{return B4421(env__4428, "bound?", B4422(identifier__4429), false)}, false)
var B4431 = B4400()
var B4432 = B4393["expression?"], B4433 = B2218.get, B4434 = B2218.first, B4435 = B4420("find_special_form", function B4442 (form__4436, env__4437)
{if ($T(B4432(form__4436)))
{var sequence__4439 = form__4436, B4440 = sequence__4439[0], B4441 = B4422(B4440);
return B4433(B4431, B4441)}}, false)
{var B4450 = $S("%method"), B4443 = B2218["do"], B4444 = B2218.curry, B4445;
B4431["%method"] = function B4451 (env__4446, arguments__4447, body__4448)
{B4443(B4444(B4423, env__4446), arguments__4447);
var expanded_body__4449 = B4445(body__4448, env__4446);
B4443(B4444(B4427, env__4446), arguments__4447);
return [B4450, arguments__4447, expanded_body__4449]}}
{var B4455 = $S("%set");
B4431["%set"] = function B4456 (env__4452, identifier__4453, value__4454)
{return [B4455, identifier__4453, B4445(value__4454, env__4452)]}}
{var B4460 = $S("define");
B4431.define = function B4461 (env__4457, identifier__4458, value__4459)
{B4423(env__4457, identifier__4458);
return [B4460, identifier__4458, B4445(value__4459, env__4457)]}}
{var B4469 = $S("%bind");
B4431["%bind"] = function B4470 (env__4462, binding__4463, body__4464)
{var var__4465 = binding__4463[0], value__4466 = binding__4463[1], expanded_value__4467 = B4445(value__4466, env__4462);
B4423(env__4462, var__4465);
var result__4468 = [B4469, [var__4465, expanded_value__4467], B4445(body__4464, env__4462)];
B4427(env__4462, var__4465);
return result__4468}}
{var B4471 = B4400();
exports["*core-macros*"] = B4471}
{var B4500 = $REST, B4501 = $KEY, B4502 = $K("end"), B4503 = $K("start"), B4474 = B2218["find-key"], B4475 = B2218["="], B4476 = B2218["copy-sequence"], B4477 = B2218.size, B4478 = B2218.element, B4479 = B2218.inc, B4480 = B4420("analyze_lambda_list", function B4504 (list__4481)
{var position__4482 = function B4505 (symbol__4483)
{return B4474(list__4481, B4444(B4475, symbol__4483))}, rest__4484 = position__4482(B4500), key__4485 = position__4482(B4501), B4486 = rest__4484, B4494;
if ($T(B4486))
B4494 = B4486
else {var B4487 = key__4485;
if ($T(B4487))
B4494 = B4487
else {var object__4489 = list__4481;
B4494 = ((object__4489 || false).length || 0)}};
var B4495 = B4476(list__4481, B4502, B4494), B4497;
if ($T(rest__4484))
{var number__4491 = rest__4484, B4496 = (number__4491 + 1);
B4497 = B4478(list__4481, B4496)}
else B4497 = false;
var B4499;
if ($T(key__4485))
{var number__4493 = key__4485, B4498 = (number__4493 + 1);
B4499 = B4476(list__4481, B4503, B4498)}
else B4499 = false;
return [B4495, B4497, B4499]}, false);
exports["analyze-lambda-list"] = B4480}
var B4506 = B2218.reduce, B4507 = B4420("wrap", function B4512 (form__4508)
{var wrappers__4509 = $SL.call(arguments, 1);
return B4506(function B4513 (result__4510, wrapper__4511)
{return wrapper__4511(result__4510)}, form__4508, wrappers__4509)}, false)
var B4619 = $S("bind-properties"), B4620 = $S("%keys"), B4621 = $S("%object"), B4622 = $S("bind"), B4623 = $S("%native-call"), trueQ = B2218["true?"], B4516 = B2218["empty?"], B4517 = B2218.map, B4518 = B2218.concatenate, B4519 = B2218.reduce1, B4520 = B2218["instance?"], B4521 = B2218["<array>"], B4522 = B2218.not, B4523 = B4393["generate-symbol"], B4524 = B4420("wrap_restSkeys", function B4624 (body__4525, all__4526, required__4527, rest__4528, key__4529)
{var restQ__4530 = rest__4528, B4531 = rest__4528, rest__4532;
if ($T(B4531))
rest__4532 = B4531
else {var sequence__4552 = key__4529, B4553 = sequence__4552, B4554 = ((B4553 || false).length || 0), B4555 = 0, value__4556 = (B4554 === B4555), B4601 = !(trueQ(value__4556));
if ($T(B4601))
rest__4532 = B4523()
else rest__4532 = false};
return B4507(body__4525, function B4625 (body__4533)
{var sequence__4567 = key__4529, B4568 = sequence__4567, B4569 = ((B4568 || false).length || 0), B4570 = 0, B4602 = (B4569 === B4570);
if ($T(B4602))
return body__4533
else {var key_values__4535 = B4517(function B4626 (binding__4534)
{if ($T(B4520(binding__4534, B4521)))
return binding__4534
else return [binding__4534, false]}, key__4529), B4603 = B4619, B4604 = B4517(B4434, key_values__4535), B4605 = B4620, B4606 = [B4621], function__4579 = B4518, values__4580 = B4517(function B4627 (key_value__4536)
{var key__4537 = key_value__4536[0], value__4538 = key_value__4536[1];
return [B4422(key__4537), value__4538]}, key_values__4535), B4581 = values__4580, B4607 = B4581[0], B4582 = values__4580, B4608 = B4582.slice(1), B4609 = B4506(function__4579, B4607, B4608), B4610 = B4518(B4606, B4609), B4611 = [B4605, rest__4532, B4610];
return [B4603, B4604, B4611, body__4533]}}, function B4628 (body__4539)
{var B4540 = restQ__4530, B4612;
if ($T(B4540))
B4612 = B4540
else {var sequence__4594 = key__4529, B4595 = sequence__4594, B4596 = ((B4595 || false).length || 0), B4597 = 0, value__4598 = (B4596 === B4597);
B4612 = !(trueQ(value__4598))};
if ($T(B4612))
{var B4613 = B4622, B4614 = B4623, object__4600 = required__4527, B4615 = ((object__4600 || false).length || 0), B4616 = [B4614, "$SL.call", all__4526, B4615], B4617 = [rest__4532, B4616], B4618 = [B4617];
return [B4613, B4618, body__4539]}
else return body__4539})}, false)
{var B4629 = B4393["maybe-begin"];
B4471.begin = function B4632 (____4630)
{var expressions__4631 = $SL.call(arguments, 1);
return B4629(expressions__4631)}}
B4471.method = function B4641 (____4634, arguments__4635)
{var body__4636 = $SL.call(arguments, 2), B4637 = B4480(arguments__4635), required__4638 = B4637[0], rest__4639 = B4637[1], key__4640 = B4637[2];
return [B4450, required__4638, B4524(B4629(body__4636), B4410, required__4638, rest__4639, key__4640)]}
{var B4642 = B2218["<symbol>"], B4643 = B2218.reverse;
B4471.bind = function B4666 (____4644, bindings__4645)
{var body__4646 = $SL.call(arguments, 2), sequence__4659 = bindings__4645, B4660 = sequence__4659, B4661 = ((B4660 || false).length || 0), B4662 = 0, B4663 = (B4661 === B4662);
if ($T(B4663))
return B4629(body__4646)
else return B4506(function B4667 (body__4647, binding__4648)
{var B4664 = B4469, B4665;
if ($T(B4520(binding__4648, B4642)))
B4665 = [binding__4648, false]
else B4665 = binding__4648;
return [B4664, B4665, body__4647]}, B4629(body__4646), B4643(bindings__4645))}}
{var B4672 = $S("%if");
B4471["if"] = function B4673 (____4668, test__4669, then__4670, else__4671)
{return [B4672, test__4669, then__4670, else__4671]}}
{var B4701 = $S("%get-property"), trueQ = B2218["true?"], B4674 = B2218["binary=="], B4675 = B4393["transform-setter-identifier"], B4676 = B2218.rest;
B4471["set!"] = function B4702 (____4677, place__4678)
{var values__4679 = $SL.call(arguments, 2), B4694;
if ($T(B4520(place__4678, B4521)))
{var sequence__4684 = place__4678, object1__4685 = sequence__4684[0], object2__4686 = B4701, value__4687 = (object1__4685 === object2__4686);
B4694 = !(trueQ(value__4687))}
else B4694 = false;
if ($T(B4694))
{var sequence__4689 = place__4678, B4695 = sequence__4689[0], B4696 = B4675(B4695), B4697 = [B4696], sequence__4691 = place__4678, B4698 = sequence__4691.slice(1);
return B4518(B4697, B4698, values__4679)}
else {var B4699 = B4455, sequence__4693 = values__4679, B4700 = sequence__4693[0];
return [B4699, place__4678, B4700]}}}
{var B4723 = $S("set!"), B4724 = $S("parallel-set!");
B4471["parallel-set!"] = function B4725 (____4703, var__4704, value__4705)
{var clauses__4706 = $SL.call(arguments, 3), sequence__4718 = clauses__4706, B4719 = sequence__4718, B4720 = ((B4719 || false).length || 0), B4721 = 0, B4722 = (B4720 === B4721);
if ($T(B4722))
return [B4723, var__4704, value__4705]
else {var temp__4707 = B4523();
return [B4622, [[temp__4707, value__4705]], B4518([B4724], clauses__4706), [B4723, var__4704, temp__4707]]}}}
{var B4763 = $K("else"), B4764 = $S("if"), B4765 = $S("cond"), trueQ = B2218["true?"];
B4471.cond = function B4766 (____4727)
{var cases__4728 = $SL.call(arguments, 1), sequence__4744 = cases__4728, B4745 = sequence__4744, B4746 = ((B4745 || false).length || 0), B4747 = 0, value__4748 = (B4746 === B4747), B4757 = !(trueQ(value__4748));
if ($T(B4757))
{var sequence__4750 = cases__4728, B4729 = sequence__4750[0], test__4730 = B4729[0], then__4731 = $SL.call(B4729, 1), then__4732 = B4629(then__4731), object1__4753 = test__4730, object2__4754 = B4763, B4758 = (object1__4753 === object2__4754);
if ($T(B4758))
return then__4732
else {var B4759 = B4764, B4760 = [B4765], sequence__4756 = cases__4728, B4761 = sequence__4756.slice(1), B4762 = B4518(B4760, B4761);
return [B4759, test__4730, then__4732, B4762]}}}}
B4471.when = function B4770 (____4767, test__4768)
{var body__4769 = $SL.call(arguments, 2);
return [B4764, test__4768, B4629(body__4769), false]}
{var B4774 = $S("not");
B4471.unless = function B4775 (____4771, test__4772)
{var body__4773 = $SL.call(arguments, 2);
return [B4764, [B4774, test__4772], B4629(body__4773), false]}}
{var B4803 = $S("when"), B4804 = $S("and");
B4471.and = function B4805 (____4777)
{var values__4778 = $SL.call(arguments, 1), object__4781 = values__4778, B4779 = ((object__4781 || false).length || 0), object1__4784 = B4779, object2__4785 = 0, B4796 = (object1__4784 === object2__4785);
if ($T(B4796))
return true
else {var object1__4788 = B4779, object2__4789 = 1, B4797 = (object1__4788 === object2__4789);
if ($T(B4797))
{var sequence__4791 = values__4778;
return sequence__4791[0]}
else {var B4798 = B4803, sequence__4793 = values__4778, B4799 = sequence__4793[0], B4800 = [B4804], sequence__4795 = values__4778, B4801 = sequence__4795.slice(1), B4802 = B4518(B4800, B4801);
return [B4798, B4799, B4802]}}}}
{var B4838 = $S("or");
B4471.or = function B4839 (____4807)
{var values__4808 = $SL.call(arguments, 1), object__4812 = values__4808, B4809 = ((object__4812 || false).length || 0), object1__4815 = B4809, object2__4816 = 0, B4827 = (object1__4815 === object2__4816);
if ($T(B4827))
return false
else {var object1__4819 = B4809, object2__4820 = 1, B4828 = (object1__4819 === object2__4820);
if ($T(B4828))
{var sequence__4822 = values__4808;
return sequence__4822[0]}
else {var value__4810 = B4523(), B4829 = B4622, sequence__4824 = values__4808, B4830 = sequence__4824[0], B4831 = [value__4810, B4830], B4832 = [B4831], B4833 = B4764, B4834 = [B4838], sequence__4826 = values__4808, B4835 = sequence__4826.slice(1), B4836 = B4518(B4834, B4835), B4837 = [B4833, value__4810, value__4810, B4836];
return [B4829, B4832, B4837]}}}}
B4471["if-bind"] = function B4847 (____4840, binding__4841, then__4842, else__4843)
{var var__4844 = binding__4841[0], value__4845 = binding__4841[1], temp__4846 = B4523();
return [B4622, [[temp__4846, value__4845]], [B4764, temp__4846, [B4622, [[var__4844, temp__4846]], then__4842], else__4843]]}
{var B4851 = $S("%while");
B4471["while"] = function B4852 (____4848, test__4849)
{var body__4850 = $SL.call(arguments, 2);
return [B4851, test__4849, B4629(body__4850)]}}
{var B4856 = $S("while");
B4471.until = function B4857 (____4853, test__4854)
{var body__4855 = $SL.call(arguments, 2);
return B4518([B4856, [B4774, test__4854]], body__4855)}}
{var B4876 = $S("for"), B4877 = $S("+"), B4878 = $S(">=");
B4471.dotimes = function B4879 (____4859, binding__4860)
{var body__4861 = $SL.call(arguments, 2), temp__4862 = B4523(), var__4863 = binding__4860[0], count__4864 = binding__4860[1], result__4865 = binding__4860[2], B4867 = B4622, B4868 = [[temp__4862, count__4864]], B4869 = B4876, B4870 = [[var__4863, 0, [B4877, var__4863, 1]]], B4871 = [B4878, var__4863, temp__4862], B4866 = result__4865, B4872;
if ($T(B4866))
B4872 = B4866
else B4872 = false;
var B4873 = [B4871, B4872], B4874 = [B4869, B4870, B4873], B4875 = B4518(B4874, body__4861);
return [B4867, B4868, B4875]}}
{var B4984 = $S("method"), B4985 = $S("begin"), trueQ = B2218["true?"], B4886 = B2218["any?"], B4887 = B2218["push-last"], B4888 = B2218.slice, B4889 = B2218.third;
B4471["for"] = function B4986 (____4890, clauses__4891, end__4892)
{var body__4893 = $SL.call(arguments, 3), init_clauses__4894 = [], next_clauses__4895 = [], vars__4896 = B4517(B4434, clauses__4891), B4897 = clauses__4891, B4898, B4899, B4900 = [B4897];
while (true)
{var B4901 = B4898, value__4906;
if ($T(B4901))
value__4906 = B4901
else value__4906 = B4886(B4516, B4900);
var B4970 = !(trueQ(value__4906));
if ($T(B4970))
{var sequence__4908 = B4897, clause__4902 = sequence__4908[0];
(function B4987 (clause__4903)
{var array__4917 = init_clauses__4894, array__4914 = clause__4903, start__4915 = 0, end__4916 = 2, value__4918 = array__4914.slice(start__4915, end__4916);
array__4917.push(value__4918);
array__4917;
var array__4923 = next_clauses__4895, sequence__4922 = clause__4903, value__4924 = sequence__4922[0];
array__4923.push(value__4924);
array__4923;
var array__4929 = next_clauses__4895, sequence__4928 = clause__4903, value__4930 = sequence__4928[2];
array__4929.push(value__4930);
return array__4929})(clause__4902);
var sequence__4932 = B4897, B4969 = sequence__4932.slice(1);
B4897 = B4969;
B4900 = [B4897]}
else break};
B4899;
var B4971 = B4622, B4972 = B4856, sequence__4943 = end__4892, B4944 = sequence__4943, B4945 = ((B4944 || false).length || 0), B4946 = 0, B4904 = (B4945 === B4946), B4975;
if ($T(B4904))
B4975 = B4904
else {var B4973 = B4774, sequence__4948 = end__4892, B4974 = sequence__4948[0];
B4975 = [B4973, B4974]};
var B4976 = B4518([B4518([B4984, vars__4896], body__4893)], vars__4896), B4977 = B4518([B4724], next_clauses__4895), B4978 = [B4972, B4975, B4976, B4977], B4979 = B4518(B4978), sequence__4961 = end__4892, sequence__4962 = sequence__4961.slice(1), B4963 = sequence__4962, B4964 = ((B4963 || false).length || 0), B4965 = 0, value__4966 = (B4964 === B4965), B4980 = !(trueQ(value__4966)), B4983;
if ($T(B4980))
{var B4981 = [B4985], sequence__4968 = end__4892, B4982 = sequence__4968.slice(1);
B4983 = B4518(B4981, B4982)}
else B4983 = false;
return [B4971, init_clauses__4894, B4979, B4983]}}
{var B5063 = $S("rest"), B5064 = $S("%array"), B5065 = $S("until"), B5066 = $S("any?"), B5067 = $S("empty?"), B5068 = $S("first"), B4989 = B2218.second;
B4471["for-each"] = function B5069 (____4990, clauses__4991, end__4992)
{var body__4993 = $SL.call(arguments, 3), clauses__4995 = B4517(function B5070 (clause__4994)
{return B4518([B4523()], clause__4994)}, clauses__4991), endQ__4996 = B4523(), values__4997 = B4523(), result__4998 = B4523(), B5035 = B4985, vars__4999 = B4517(B4989, clauses__4995), B5036 = B4518([B4518([B4984, vars__4999], body__4993)], vars__4999), B5037 = [B5035, B5036], B5043 = B4517(function B5071 (clause__5000)
{var B5038 = B4723, sequence__5014 = clause__5000, B5039 = sequence__5014[0], B5040 = B5063, sequence__5016 = clause__5000, B5041 = sequence__5016[0], B5042 = [B5040, B5041];
return [B5038, B5039, B5042]}, clauses__4995), B5044 = [[B4723, values__4997, B4518([B5064], B4517(B4434, clauses__4995))]], body__5001 = B4518(B5037, B5043, B5044), B5045 = B4622, B5046 = B4518(B4517(function B5072 (clause__5002)
{var temp__5003 = clause__5002[0], var__5004 = clause__5002[1], values__5005 = clause__5002[2];
return [temp__5003, values__5005]}, clauses__4995), [[endQ__4996, false], [result__4998, false], [values__4997, B4518([B5064], B4517(B4434, clauses__4995))]]), B5047 = B5065, B5048 = [B4838, endQ__4996, [B5066, B5067, values__4997]], B5049 = B4622, B5050 = B4517(function B5073 (clause__5006)
{var temp__5007 = clause__5006[0], var__5008 = clause__5006[1], values__5009 = clause__5006[2];
return [var__5008, [B5068, temp__5007]]}, clauses__4995), sequence__5018 = end__4992, B5010 = sequence__5018[0], B5060;
if ($T(B5010))
{var end_test__5011 = B5010, B5051 = B4764, B5052 = B4985, B5053 = B4723, sequence__5020 = end__4992, results__5012 = sequence__5020.slice(1), sequence__5031 = results__5012, B5032 = sequence__5031, B5033 = ((B5032 || false).length || 0), B5034 = 0, B5054 = (B5033 === B5034), B5055;
if ($T(B5054))
B5055 = [false]
else B5055 = results__5012;
var B5056 = B4629(B5055), B5057 = [B5053, result__4998, B5056], B5058 = [B4723, endQ__4996, true], B5059 = [B5052, B5057, B5058];
B5060 = [B5051, end_test__5011, B5059, body__5001]}
else B5060 = body__5001;
var B5061 = [B5049, B5050, B5060], B5062 = [B5047, B5048, B5061];
return [B5045, B5046, B5062, result__4998]}}
B4471["bind-properties"] = function B5080 (____5074, properties__5075, object__5076)
{var body__5077 = $SL.call(arguments, 3), objectT__5078 = B4523();
return B4518([B4622, B4518([[objectT__5078, object__5076]], B4517(function B5081 (property__5079)
{return [property__5079, [B4701, objectT__5078, B4422(property__5079)]]}, properties__5075))], body__5077)}
B4471.select = function B5103 (____5082, value__5083, test__5084)
{var cases__5085 = $SL.call(arguments, 3), valueT__5086 = B4523(), testT__5087;
if ($T(B4520(test__5084, B4642)))
testT__5087 = test__5084
else testT__5087 = B4523();
var test_expression__5088 = function B5104 (test_value__5089)
{return [testT__5087, valueT__5086, test_value__5089]}, B5097 = B4622, B5098 = [[valueT__5086, value__5083]], B5099;
if ($T(B4520(test__5084, B4642)))
B5099 = []
else B5099 = [[testT__5087, test__5084]];
var B5100 = B4518(B5098, B5099), B5102 = B4518([B4765], B4517(function B5105 (case__5090)
{var tests__5091 = case__5090[0], then__5092 = $SL.call(case__5090, 1), object1__5095 = tests__5091, object2__5096 = B4763, B5101 = (object1__5095 === object2__5096);
if ($T(B5101))
return case__5090
else return B4518([B4518([B4838], B4517(test_expression__5088, tests__5091))], then__5092)}, cases__5085));
return [B5097, B5100, B5102]}
var B5107 = B4420("destructure", function B5121 (bindings__5108, values__5109, body__5110)
{if ($T(B4520(values__5109, B4642)))
{var B5111 = B4480(bindings__5108), required__5112 = B5111[0], rest__5113 = B5111[1], key__5114 = B5111[2], object__5120 = required__5112, i__5115 = ((object__5120 || false).length || 0);
return B4506(function B5122 (body__5116, binding__5117)
{i__5115 = (i__5115 - 1);
if ($T(B4520(binding__5117, B4642)))
return [B4622, [[binding__5117, [B4701, values__5109, i__5115]]], body__5116]
else return B5107(binding__5117, [B4701, values__5109, i__5115], body__5116)}, B4524(body__5110, values__5109, required__5112, rest__5113, key__5114), B4643(required__5112))}
else {var var__5118 = B4523();
return [B4622, [[var__5118, values__5109]], B5107(bindings__5108, var__5118, body__5110)]}}, false)
B4471["destructuring-bind"] = function B5127 (____5123, bindings__5124, values__5125)
{var body__5126 = $SL.call(arguments, 3);
return B5107(bindings__5124, values__5125, B4518([B4985], body__5126))}
B4471["bind-methods"] = function B5135 (____5128, bindings__5129)
{var body__5130 = $SL.call(arguments, 2);
return B4518([B4622, B4517(B4434, bindings__5129)], B4517(function B5136 (binding__5131)
{var identifier__5132 = binding__5131[0], arguments__5133 = binding__5131[1], body__5134 = $SL.call(binding__5131, 2);
return [B4723, identifier__5132, B4518([B4984, arguments__5133], body__5134)]}, bindings__5129), body__5130)}
B4471["inc!"] = function B5146 (____5138, object__5139, value__5140)
{var B5142 = B4723, B5143 = B4877, B5141 = value__5140, B5144;
if ($T(B5141))
B5144 = B5141
else B5144 = 1;
var B5145 = [B5143, object__5139, B5144];
return [B5142, object__5139, B5145]}
{var B5156 = $S("-");
B4471["dec!"] = function B5157 (____5148, object__5149, value__5150)
{var B5152 = B4723, B5153 = B5156, B5151 = value__5150, B5154;
if ($T(B5151))
B5154 = B5151
else B5154 = 1;
var B5155 = [B5153, object__5149, B5154];
return [B5152, object__5149, B5155]}}
{var B5175 = $S("%plus");
B4471["+"] = function B5176 (____5158)
{var values__5159 = $SL.call(arguments, 1), sequence__5170 = values__5159, B5171 = sequence__5170, B5172 = ((B5171 || false).length || 0), B5173 = 0, B5174 = (B5172 === B5173);
if ($T(B5174))
return 0
else return B4518([B5175], values__5159)}}
{var B5195 = $S("%minus");
B4471["-"] = function B5196 (____5177, minuend__5178)
{var subtrahends__5179 = $SL.call(arguments, 2), sequence__5190 = subtrahends__5179, B5191 = sequence__5190, B5192 = ((B5191 || false).length || 0), B5193 = 0, B5194 = (B5192 === B5193);
if ($T(B5194))
return [B4623, "-", minuend__5178]
else return B4518([B5195, minuend__5178], subtrahends__5179)}}
{var B5214 = $S("%times");
B4471["*"] = function B5215 (____5197)
{var values__5198 = $SL.call(arguments, 1), sequence__5209 = values__5198, B5210 = sequence__5209, B5211 = ((B5210 || false).length || 0), B5212 = 0, B5213 = (B5211 === B5212);
if ($T(B5213))
return 1
else return B4518([B5214], values__5198)}}
{var B5234 = $S("%divide");
B4471["/"] = function B5235 (____5216, numerator__5217)
{var denominators__5218 = $SL.call(arguments, 2), sequence__5229 = denominators__5218, B5230 = sequence__5229, B5231 = ((B5230 || false).length || 0), B5232 = 0, B5233 = (B5231 === B5232);
if ($T(B5233))
return [B5234, 1, numerator__5217]
else return B4518([B5234, numerator__5217], denominators__5218)}}
{var B5237 = $S("next-method"), B5238 = $S("%native");
B4471["call-next-method"] = function B5239 (____5236)
{return [[B4701, B5237, "apply"], [B5238, "null"], B4410]}}
var B5269 = $S("%symbol"), trueQ = B2218["true?"], B5240 = B4420("transform_quoted", function B5270 (form__5241)
{if ($T(B4520(form__5241, B4521)))
{var sequence__5253 = form__5241, B5254 = sequence__5253, B5255 = ((B5254 || false).length || 0), B5256 = 0, value__5257 = (B5255 === B5256), B5266 = !(trueQ(value__5257)), B5268;
if ($T(B5266))
{var sequence__5261 = form__5241, B5267 = sequence__5261[0], object1__5262 = B4422(B5267), object2__5263 = "%comma";
B5268 = (object1__5262 === object2__5263)}
else B5268 = false;
if ($T(B5268))
{var sequence__5265 = form__5241;
return sequence__5265[1]}
else return B4518([B5064], B4517(B5240, form__5241))}
else if ($T(B4520(form__5241, B4642)))
return [B5269, B4422(form__5241)]
else return form__5241}, false)
B4471["%backquote"] = function B5273 (____5271, exp__5272)
{return B5240(exp__5272)}
{var B5281 = $K("message"), B5274 = B2218.signal, B5275 = B2218.make, B5276 = B2218["<error>"];
B4471["%comma"] = function B5282 (____5277, value__5278)
{var error__5280 = B5275(B5276, B5281, "comma not inside backquote");
throw(error__5280);
return false}}
var B5283 = B5275(B5276, B5281, "unsupported name for call in dot")
{var B5285 = B2218["<string>"];
B4471["."] = function B5300 (____5286, value__5287)
{var calls__5288 = $SL.call(arguments, 2);
return B4506(function B5301 (value__5289, call__5290)
{var property__5291 = call__5290[0], arguments__5292 = $SL.call(call__5290, 1), B5296 = B4701, B5293 = property__5291, B5297;
if ($T(B4520(B5293, B5285)))
B5297 = property__5291
else if ($T(B4520(B5293, B4642)))
B5297 = B4422(property__5291)
else {var error__5295 = B5283;
throw(error__5295);
B5297 = false};
var B5298 = [B5296, value__5289, B5297], B5299 = [B5298];
return B4518(B5299, arguments__5292)}, value__5287, calls__5288)}}
var B5303 = B4420("simplify_arguments", function B5315 (arguments__5304)
{var B5305 = B4480(arguments__5304), required__5306 = B5305[0], rest__5307 = B5305[1], key__5308 = B5305[2], required__5310 = B4517(function B5316 (argument__5309)
{if ($T(B4520(argument__5309, B4521)))
{var sequence__5312 = argument__5309;
return sequence__5312[0]}
else return argument__5309}, required__5306), B5313;
if ($T(rest__5307))
B5313 = B4518([B4500], rest__5307)
else B5313 = [];
var B5314;
if ($T(key__5308))
B5314 = B4518([B4501], key__5308)
else B5314 = [];
return B4518(required__5310, B5313, B5314)}, false)
var B5382 = $S("%native-name"), B5383 = $S("<object>"), trueQ = B2218["true?"], B5321 = B2218.symbol, B5322 = B2218[">"], B5323 = B4393["setter-identifier?"], B5324 = B2218["%keys"], B5325 = B4420("make_function_definer", function B5384 (macro_name__5326, definer_name__5327)
{var B5328 = $SL.call(arguments, 2), B5329 = B5324(B5328, {"type/existing?":false,
"record?":false}), typeSexistingQ__5330 = B5329["type/existing?"], recordQ__5331 = B5329["record?"];
return function B5385 (env__5332, identifier__5333, arguments__5334)
{var body__5335 = $SL.call(arguments, 3), B5336;
if ($T(B5323(identifier__5333)))
{var sequence__5344 = identifier__5333, B5371 = sequence__5344[1], B5372 = B4675(B5371);
B5336 = [true, B5372]}
else B5336 = [false, identifier__5333];
var setterQ__5337 = B5336[0], identifier__5338 = B5336[1], B5339 = B4520(identifier__5338, B4642), value__5346;
if ($T(B5339))
value__5346 = B5339
else value__5346 = setterQ__5337;
var B5373 = !(trueQ(value__5346));
if ($T(B5373))
{var error__5348 = B5275(B5276, B5281, B4518(macro_name__5326, ": ", "name not <var> or (setter <var>)"));
throw(error__5348);
false};
var B5374;
if ($T(typeSexistingQ__5330))
{var sequence__5359 = arguments__5334, B5360 = sequence__5359, B5361 = ((B5360 || false).length || 0), B5362 = 0;
B5374 = (B5361 === B5362)}
else B5374 = false;
if ($T(B5374))
{var error__5364 = B5275(B5276, B5281, B4518(macro_name__5326, ": ", "method has no arguments"));
throw(error__5364);
false};
var simplified_arguments__5340 = B5303(arguments__5334), method_definition__5341 = B4445(B4518([B4984, simplified_arguments__5340], body__5335), env__5332);
if ($T(recordQ__5331))
B4421(env__5332, "module", "functions", B4422(identifier__5338), method_definition__5341);
var B5375 = B4460, B5376 = [B5321(definer_name__5327), [B5382, B4422(identifier__5338)], method_definition__5341, setterQ__5337], B5380;
if ($T(typeSexistingQ__5330))
{var sequence__5366 = arguments__5334, head__5342 = sequence__5366[0], B5378;
if ($T(B4520(head__5342, B4521)))
{var object__5368 = head__5342, B5377 = ((object__5368 || false).length || 0);
B5378 = B5322(B5377, 1)}
else B5378 = false;
var B5379;
if ($T(B5378))
{var sequence__5370 = head__5342;
B5379 = sequence__5370[1]}
else B5379 = B5383;
B5380 = [B5379, identifier__5338]}
else B5380 = [];
var B5381 = B4518(B5376, B5380);
return [B5375, identifier__5338, B5381]}}, false)
{var B5407 = $K("type/existing?"), B5408 = $K("record?"), trueQ = B2218["true?"], B5391 = B2218.apply, B5392 = [["define-function", "%make-function", B5407, false, B5408, true], ["define-method", "%make-method", B5407, true]], B5393, B5394, B5395 = [B5392];
while (true)
{var B5396 = B5393, value__5400;
if ($T(B5396))
value__5400 = B5396
else value__5400 = B4886(B4516, B5395);
var B5406 = !(trueQ(value__5400));
if ($T(B5406))
{var sequence__5402 = B5392, arguments__5397 = sequence__5402[0];
(function B5409 (arguments__5398)
{return B4471[B4434(arguments__5398)] = B5391(B5325, arguments__5398)})(arguments__5397);
var sequence__5404 = B5392, B5405 = sequence__5404.slice(1);
B5392 = B5405;
B5395 = [B5392]}
else break};
B5394}
{var B5413 = $S("%make-generic");
B4471["define-generic"] = function B5414 (____5410, identifier__5411, arguments__5412)
{return [B4460, identifier__5411, [B5413, [B5382, B4422(identifier__5411)]]]}}
{var B5487 = $S("%make-class"), trueQ = B2218["true?"];
B4471["define-class"] = function B5488 (____5420, identifier__5421, superclass__5422)
{var properties__5423 = $SL.call(arguments, 3), object__5424 = [B4621], B5425 = properties__5423, B5426, B5427, B5428 = [B5425];
while (true)
{var B5429 = B5426, value__5433;
if ($T(B5429))
value__5433 = B5429
else value__5433 = B4886(B4516, B5428);
var B5481 = !(trueQ(value__5433));
if ($T(B5481))
{var sequence__5435 = B5425, property__5430 = sequence__5435[0];
(function B5489 (property__5431)
{if ($T(B4520(property__5431, B4521)))
{var array__5440 = object__5424, sequence__5439 = property__5431, B5476 = sequence__5439[0], value__5441 = B4422(B5476);
array__5440.push(value__5441);
array__5440;
var array__5446 = object__5424, B5477 = B4984, B5478 = [], sequence__5445 = property__5431, B5479 = sequence__5445[1], value__5447 = [B5477, B5478, B5479];
array__5446.push(value__5447);
return array__5446}
else {var array__5450 = object__5424, value__5451 = B4422(property__5431);
array__5450.push(value__5451);
array__5450;
var array__5454 = object__5424, value__5455 = undefined;
array__5454.push(value__5455);
return array__5454}})(property__5430);
var sequence__5457 = B5425, B5480 = sequence__5457.slice(1);
B5425 = B5480;
B5428 = [B5425]}
else break};
B5427;
var B5482 = B4460, B5483 = B5487, sequence__5469 = superclass__5422, B5470 = sequence__5469, B5471 = ((B5470 || false).length || 0), B5472 = 0, value__5473 = (B5471 === B5472), B5484 = !(trueQ(value__5473)), B5485;
if ($T(B5484))
{var sequence__5475 = superclass__5422;
B5485 = sequence__5475[0]}
else B5485 = false;
var B5486 = [B5483, B5485, object__5424];
return [B5482, identifier__5421, B5486]}}
var B5490 = B4420("get_import_module_nameSoptions", function B5499 (import__5491)
{var B5496;
if ($T(B4520(import__5491, B4521)))
{var sequence__5493 = import__5491;
B5496 = sequence__5493[0]}
else B5496 = import__5491;
var B5497 = B4422(B5496), B5498;
if ($T(B4520(import__5491, B4521)))
{var sequence__5495 = import__5491;
B5498 = sequence__5495.slice(1)}
else B5498 = [];
return [B5497, B5498]}, false)
{var B5504 = B4393["identifier-name"], B5505, B5506, B5507;
B4471["define-module"] = function B5524 (env__5508, ____5509)
{var B5510 = $SL.call(arguments, 2), B5511 = B5324(B5510, {"import":[],
"export":[],
"compile-time-import":[],
inline:[]}), import__5512 = B5511["import"], export__5513 = B5511["export"], compile_time_import__5514 = B5511["compile-time-import"], inline__5515 = B5511.inline;
B4421(env__5508, "module", "exports", B4517(B5504, export__5513));
B4443(function B5525 (import__5516)
{var B5517 = B5490(import__5516), module_name__5518 = B5517[0], options__5519 = B5517[1];
return B5391(B5505, env__5508, module_name__5518, options__5519)}, compile_time_import__5514);
B4421(env__5508, "module", "inline", B4517(B5504, inline__5515));
return B4629(B4517(function B5526 (import__5520)
{var B5521 = B5490(import__5520), module_name__5522 = B5521[0], options__5523 = B5521[1];
B5391(B5506, B4433(env__5508, "module"), module_name__5522, options__5523);
return B5507(module_name__5522, env__5508)}, import__5512))}}
B5507 = B4420("make_import_definition", function B5530 (module_name__5527, env__5528)
{var identifier__5529 = B4523();
B4421(env__5528, "import-identifiers", module_name__5527, identifier__5529);
return [B4460, identifier__5529, [[B5238, "require"], module_name__5527]]}, false)
{var B5535 = $S("define-function");
B4471["define-macro"] = function B5536 (env__5531, identifier__5532, arguments__5533)
{var body__5534 = $SL.call(arguments, 3);
return [B4985, B4518([B5535, identifier__5532, B4518([B4523()], arguments__5533)], body__5534), [B4723, [B4701, identifier__5532, "%macro?"], true]]}}
B4471["define-symbol-macro"] = function B5541 (env__5537, identifier__5538, arguments__5539)
{var body__5540 = $SL.call(arguments, 3);
return [B4985, B4518([B5535, identifier__5538, []], body__5540), [B4723, [B4701, identifier__5538, "%symbol-macro?"], true]]}
{var B5558 = $S("%try"), B5559 = $S("instance?");
B4471["handler-case"] = function B5560 (____5545, body__5546)
{var cases__5547 = $SL.call(arguments, 2), condition_var__5548 = B4523();
return [B5558, body__5546, condition_var__5548, B4518([B4765], B4517(function B5561 (case__5549)
{var B5550 = case__5549[0], type__5551 = B5550[0], B5552 = $SL.call(B5550, 1), B5553 = B5324(B5552, {condition:false}), condition__5554 = B5553.condition, body__5555 = $SL.call(case__5549, 1), B5556 = [[B5559, condition_var__5548, type__5551]], B5557;
if ($T(condition__5554))
B5557 = [B4518([B4622, [[condition__5554, condition_var__5548]]], body__5555)]
else B5557 = body__5555;
return B4518(B5556, B5557)}, cases__5547))]}}
{var B5578 = $S("%call"), B5579 = $S("get-setter");
B4471["get-setter"] = function B5580 (____5562, object__5563, property__5564)
{var propertiesSvalue__5565 = $SL.call(arguments, 3), object__5569 = propertiesSvalue__5565, object1__5570 = ((object__5569 || false).length || 0), object2__5571 = 1, B5574 = (object1__5570 === object2__5571);
if ($T(B5574))
{var B5575 = B4455, B5576 = [B4701, object__5563, property__5564], sequence__5573 = propertiesSvalue__5565, B5577 = sequence__5573[0];
return [B5575, B5576, B5577]}
else return B4518([B5578, B5579, object__5563, property__5564], propertiesSvalue__5565)}}
{var B5583 = $S("symbol");
B4471.symbol = function B5584 (____5581, name__5582)
{if ($T(B4520(name__5582, B5285)))
return [B5269, name__5582]
else return [B5578, B5583, name__5582]}}
{var B5605 = $S("binary=="), B5606 = $S("=="), B5585;
B4471["=="] = function B5607 (____5586, object1__5587, object2__5588)
{var objects__5589 = $SL.call(arguments, 3), sequence__5600 = B5585, B5601 = sequence__5600, B5602 = ((B5601 || false).length || 0), B5603 = 0, B5604 = (B5602 === B5603);
if ($T(B5604))
return [B5605, object1__5587, object2__5588]
else return B4518([B5578, B5606, object1__5587, object2__5588], objects__5589)}}
{var B5608 = B4400();
exports["*core-symbol-macros*"] = B5608}
{var B5610 = $S("%next-method");
B5608["next-method"] = function B5611 (____5609)
{return [B5610, B4411]}}
var trueQ = B2218["true?"], B5613 = B4420("find_macro_definition", function B5645 (form__5614, env__5615)
{var B5616 = form__5614;
if ($T(B4520(B5616, B4521)))
{var sequence__5629 = form__5614, B5630 = sequence__5629, B5631 = ((B5630 || false).length || 0), B5632 = 0, B5641 = (B5631 === B5632);
if ($T(B5641))
{var error__5634 = "Empty form";
throw(error__5634);
false};
var sequence__5636 = form__5614, B5642 = sequence__5636[0], name__5617 = B4422(B5642), value__5638 = B4433(env__5615, "bound?", name__5617), B5643 = !(trueQ(value__5638));
if ($T(B5643))
return env__5615.macros[name__5617]}
else if ($T(B4520(B5616, B4642)))
{var name__5618 = B4422(form__5614), value__5640 = B4433(env__5615, "bound?", name__5618), B5644 = !(trueQ(value__5640));
if ($T(B5644))
return env__5615["symbol-macros"][name__5618]}}, false)
{var B5647 = B4420("macroexpand_1", function B5655 (form__5648, env__5649)
{var B5650 = B5613(form__5648, env__5649);
if ($T(B5650))
{var macro__5651 = B5650, B5654;
if ($T(B4520(form__5648, B4521)))
{var sequence__5653 = form__5648;
B5654 = sequence__5653.slice(1)}
else B5654 = form__5648;
return B5391(macro__5651, env__5649, B5654)}
else return form__5648}, false);
exports["macroexpand-1"] = B5647}
{var trueQ = B2218["true?"], B5656 = B4420("macroexpand", function B5669 (form__5657, env__5658)
{var doneQ__5659;
while (true)
{var value__5662 = doneQ__5659, B5668 = !(trueQ(value__5662));
if ($T(B5668))
{var expanded__5660 = B5647(form__5657, env__5658), object1__5665 = expanded__5660, object2__5666 = form__5657, B5667 = (object1__5665 === object2__5666);
doneQ__5659 = B5667;
form__5657 = expanded__5660}
else break};
return form__5657}, false);
exports.macroexpand = B5656}
{var B5672, B5673 = B2218.rcurry;
B4445 = B4420("macroexpand_all", function B5682 (form__5674, env__5675)
{var B5676 = form__5674;
if ($T(B4520(B5676, B4521)))
if ($T(B5613(form__5674, env__5675)))
return B5672(B4445(B5656(form__5674, env__5675), env__5675))
else {var B5677 = B4435(form__5674, env__5675);
if ($T(B5677))
{var expander__5678 = B5677, sequence__5680 = form__5674, B5681 = sequence__5680.slice(1);
return B5391(expander__5678, env__5675, B5681)}
else return B4517(B5673(B4445, env__5675), form__5674)}
else if ($T(B4520(B5676, B4642)))
if ($T(B5613(form__5674, env__5675)))
return B4445(B5656(form__5674, env__5675), env__5675)
else return form__5674
else return form__5674}, false);
exports["macroexpand-all"] = B4445}
B5672 = B4420("maybe_call", function B5693 (exp__5683)
{var B5692;
if ($T(B4432(exp__5683, B4521)))
{var sequence__5687 = exp__5683, object1__5688 = sequence__5687[0], object2__5689 = B5578;
B5692 = (object1__5688 === object2__5689)}
else B5692 = false;
if ($T(B5692))
{var sequence__5691 = exp__5683;
return sequence__5691.slice(1)}
else return exp__5683}, false)
var B5695 = B4420("find_moduleSimport_name", function B5710 (definition_name__5696, env__5697)
{return B4886(function B5711 (import__5698)
{var module__5699 = import__5698[0], names__5700 = import__5698[1];
return B4886(function B5712 (name__5701)
{var B5702;
if ($T(B4520(name__5701, B4521)))
B5702 = name__5701
else B5702 = [name__5701, name__5701];
var import_name__5703 = B5702[0], new_name__5704 = B5702[1], object1__5707 = definition_name__5696, object2__5708 = new_name__5704, B5709 = (object1__5707 === object2__5708);
if ($T(B5709))
return [module__5699, import_name__5703]}, names__5700)}, B4433(env__5697, "module", "imports"))}, false)
var B5713 = B4420("find_import_identifier", function B5716 (module__5714, env__5715)
{return B4433(env__5715, "import-identifiers", B4433(module__5714, "name"))}, false)
{var B5749 = $S("%begin"), B5750 = $S("%define"), B5717 = B2218["set-subtract!"], B5718, B5719 = B2218["as-set"], B5720 = B2218["object-properties"], B5721 = B4420("define_free_variables", function B5751 (exp__5722, env__5723)
{var variables__5724 = B5717(B5717(B5718(exp__5722), B5719(B4517(B5321, B5720(B4433(env__5723, "defined?"))))), B4409), sequence__5741 = variables__5724, B5742 = sequence__5741, B5743 = ((B5742 || false).length || 0), B5744 = 0, B5745 = (B5743 === B5744);
if ($T(B5745))
return exp__5722
else return B4518([B5749], B4517(function B5752 (variable__5725)
{var name__5726 = B4422(variable__5725);
B4421(env__5723, "defined?", name__5726, true);
var B5746 = [[B5750, variable__5725]], moduleSimport_name__5727 = B5695(name__5726, env__5723), B5747;
if ($T(moduleSimport_name__5727))
{var module__5728 = moduleSimport_name__5727[0], import_name__5729 = moduleSimport_name__5727[1], import_identifier__5730 = B5713(module__5728, env__5723);
B5747 = [[B4455, variable__5725, [B4701, import_identifier__5730, import_name__5729]]]}
else B5747 = [];
var B5748 = B4518(B5746, B5747);
return B4629(B5748)}, variables__5724), [exp__5722])}, false);
exports["define-free-variables"] = B5721}
var trueQ = B2218["true?"], B5753 = B2218.choose, B5754 = B2218["has?"], B5755 = B4420("define_free_variables2", function B5792 (exp__5756, env__5757)
{var free__5758 = B5717(B5718(exp__5756), B4409), variables__5760 = B5753(function B5793 (variable__5759)
{var object__5771 = B4433(env__5757, "definition-names"), property__5772 = B4422(variable__5759), value__5773 = $HP.call(object__5771,property__5772);
return !(trueQ(value__5773))}, free__5758), sequence__5784 = variables__5760, B5785 = sequence__5784, B5786 = ((B5785 || false).length || 0), B5787 = 0, B5788 = (B5786 === B5787);
if ($T(B5788))
return exp__5756
else return B4518([B5749], B4517(function B5794 (variable__5761)
{var name__5762 = B4422(variable__5761);
B4421(env__5757, "defined?", name__5762, true);
var B5789 = [[B5750, variable__5761]], moduleSimport_name__5763 = B5695(name__5762, env__5757), B5790;
if ($T(moduleSimport_name__5763))
{var module__5764 = moduleSimport_name__5763[0], import_name__5765 = moduleSimport_name__5763[1], old_import_identifier__5766 = B5713(module__5764, env__5757), import_identifier__5767 = B4433(env__5757, "new-identifiers", B4422(old_import_identifier__5766));
B5790 = [[B4455, variable__5761, [B4701, import_identifier__5767, import_name__5765]]]}
else B5790 = [];
var B5791 = B4518(B5789, B5790);
return B4629(B5791)}, variables__5760), [exp__5756])}, false)
{var trueQ = B2218["true?"], B5811 = B2218["set-union!"];
B5718 = B4420("find_free_variables", function B5992 (exp__5812)
{var B5971;
if ($T(B4520(exp__5812, B4521)))
{var sequence__5856 = exp__5812, B5857 = sequence__5856, B5858 = ((B5857 || false).length || 0), B5859 = 0, value__5860 = (B5858 === B5859);
B5971 = !(trueQ(value__5860))}
else B5971 = false;
if ($T(B5971))
{var sequence__5862 = exp__5812, head__5813 = sequence__5862[0], name__5814;
if ($T(B4520(head__5813, B4642)))
name__5814 = B4422(head__5813)
else name__5814 = false;
var B5815 = name__5814, object1__5865 = B5815, object2__5866 = "%method", B5972 = (object1__5865 === object2__5866);
if ($T(B5972))
{var ____5816 = exp__5812[0], arguments__5817 = exp__5812[1], body__5818 = exp__5812[2];
return B5717(B5718(body__5818), B5719(arguments__5817))}
else {var object1__5869 = B5815, object2__5870 = "%bind", B5973 = (object1__5869 === object2__5870);
if ($T(B5973))
{var ____5819 = exp__5812[0], B5820 = exp__5812[1], var__5821 = B5820[0], value__5822 = B5820[1], body__5823 = exp__5812[2];
return B5811(B5717(B5718(body__5823), B5719([var__5821])), B5718(value__5822))}
else {var object1__5873 = B5815, object2__5874 = "%begin", B5974 = (object1__5873 === object2__5874);
if ($T(B5974))
{var definitions__5824 = [], B5977 = function B5993 (result__5825, e__5826)
{var B5975;
if ($T(B4432(e__5826)))
{var sequence__5878 = e__5826, object1__5879 = sequence__5878[0], object2__5880 = B5750;
B5975 = (object1__5879 === object2__5880)}
else B5975 = false;
var B5976;
if ($T(B5975))
{var array__5885 = definitions__5824, sequence__5884 = e__5826, value__5886 = sequence__5884[1];
array__5885.push(value__5886);
array__5885;
B5976 = []}
else B5976 = B5718(e__5826);
return B4518(result__5825, B5976)}, B5978 = [], sequence__5888 = exp__5812, B5979 = sequence__5888.slice(1), B5980 = B4506(B5977, B5978, B5979), B5981 = B5719(B5980), B5982 = B5719(definitions__5824);
return B5717(B5981, B5982)}
else {var object1__5891 = B5815, object2__5892 = "%try", B5983 = (object1__5891 === object2__5892);
if ($T(B5983))
{var ____5827 = exp__5812[0], e1__5828 = exp__5812[1], v__5829 = exp__5812[2], e2__5830 = exp__5812[3];
return B5717(B5811(B5719(B5718(e1__5828)), B5719(B5718(e2__5830))), B5719([v__5829]))}
else {var object1__5895 = B5815, object2__5896 = "%set", B5831 = (object1__5895 === object2__5896), B5984;
if ($T(B5831))
B5984 = B5831
else {var object1__5899 = B5815, object2__5900 = "%if", B5832 = (object1__5899 === object2__5900);
if ($T(B5832))
B5984 = B5832
else {var object1__5903 = B5815, object2__5904 = "%while", B5833 = (object1__5903 === object2__5904);
if ($T(B5833))
B5984 = B5833
else {var object1__5907 = B5815, object2__5908 = "%array", B5834 = (object1__5907 === object2__5908);
if ($T(B5834))
B5984 = B5834
else {var object1__5911 = B5815, object2__5912 = "%object", B5835 = (object1__5911 === object2__5912);
if ($T(B5835))
B5984 = B5835
else {var object1__5915 = B5815, object2__5916 = "%infix", B5836 = (object1__5915 === object2__5916);
if ($T(B5836))
B5984 = B5836
else {var object1__5919 = B5815, object2__5920 = "%get-property", B5837 = (object1__5919 === object2__5920);
if ($T(B5837))
B5984 = B5837
else {var object1__5923 = B5815, object2__5924 = "%native-call", B5838 = (object1__5923 === object2__5924);
if ($T(B5838))
B5984 = B5838
else {var object1__5927 = B5815, object2__5928 = "%plus", B5839 = (object1__5927 === object2__5928);
if ($T(B5839))
B5984 = B5839
else {var object1__5931 = B5815, object2__5932 = "%minus", B5840 = (object1__5931 === object2__5932);
if ($T(B5840))
B5984 = B5840
else {var object1__5935 = B5815, object2__5936 = "%times", B5841 = (object1__5935 === object2__5936);
if ($T(B5841))
B5984 = B5841
else {var object1__5939 = B5815, object2__5940 = "%divide";
B5984 = (object1__5939 === object2__5940)}}}}}}}}}}};
if ($T(B5984))
{var B5985 = [], sequence__5942 = exp__5812, B5986 = sequence__5942.slice(1), B5987 = B4517(B5718, B5986), B5988 = B4506(B4518, B5985, B5987);
return B5719(B5988)}
else {var object1__5945 = B5815, object2__5946 = "%native", B5842 = (object1__5945 === object2__5946), B5989;
if ($T(B5842))
B5989 = B5842
else {var object1__5949 = B5815, object2__5950 = "%native-name", B5843 = (object1__5949 === object2__5950);
if ($T(B5843))
B5989 = B5843
else {var object1__5953 = B5815, object2__5954 = "%define", B5844 = (object1__5953 === object2__5954);
if ($T(B5844))
B5989 = B5844
else {var object1__5957 = B5815, object2__5958 = "%symbol";
B5989 = (object1__5957 === object2__5958)}}};
if ($T(B5989))
return B5719([])
else {var function__5967 = B5811, values__5968 = B4517(B5718, exp__5812), B5969 = values__5968, B5990 = B5969[0], B5970 = values__5968, B5991 = B5970.slice(1);
return B4506(function__5967, B5990, B5991)}}}}}}}
else if ($T(B4520(exp__5812, B4642)))
return B5719([exp__5812])
else return B5719([])}, false)}
var trueQ = B2218["true?"], dec = B2218.dec, B6012 = B2218["last-setter"], B6013 = B2218.last, B6014 = B2218["second-setter"], B6015, B6016, B6017 = B4420("inline", function B6206 (form__6018, env__6019)
{var B6187;
if ($T(B4520(form__6018, B4521)))
{var sequence__6062 = form__6018, B6063 = sequence__6062, B6064 = ((B6063 || false).length || 0), B6065 = 0, value__6066 = (B6064 === B6065);
B6187 = !(trueQ(value__6066))}
else B6187 = false;
if ($T(B6187))
{var sequence__6068 = form__6018, B6188 = sequence__6068[0], B6189 = B4520(B6188, B4642);
if ($T(B6189))
{var sequence__6070 = form__6018, B6190 = sequence__6070[0], B6020 = B4422(B6190), object1__6073 = B6020, object2__6074 = "%method", B6021 = (object1__6073 === object2__6074), B6191;
if ($T(B6021))
B6191 = B6021
else {var object1__6077 = B6020, object2__6078 = "%set";
B6191 = (object1__6077 === object2__6078)};
if ($T(B6191))
{var array__6091 = form__6018, array__6088 = form__6018, B6089 = array__6088, B6090 = ((B6089 || false).length || 0), B6192 = (B6090 - 1), B6193 = array__6088[B6192], value__6092 = B6017(B6193, env__6019);
array__6091[dec(B4477(array__6091), 1)] = value__6092;
return form__6018}
else {var object1__6095 = B6020, object2__6096 = "%bind", B6194 = (object1__6095 === object2__6096);
if ($T(B6194))
{var ____6022 = form__6018[0], binding__6023 = form__6018[1], body__6024 = form__6018[2], array__6101 = binding__6023, sequence__6100 = binding__6023, B6195 = sequence__6100[1], value__6102 = B6017(B6195, env__6019);
array__6101[1] = value__6102;
var array__6105 = form__6018, value__6106 = B6017(body__6024, env__6019);
array__6105[dec(B4477(array__6105), 1)] = value__6106;
return form__6018}
else {var object1__6109 = B6020, object2__6110 = "%try", B6196 = (object1__6109 === object2__6110);
if ($T(B6196))
{var ____6025 = form__6018[0], body__6026 = form__6018[1], var__6027 = form__6018[2], catch__6028 = form__6018[3], array__6113 = form__6018, value__6114 = B6017(body__6026, env__6019);
array__6113[1] = value__6114;
var array__6117 = form__6018, value__6118 = B6017(catch__6028, env__6019);
array__6117[dec(B4477(array__6117), 1)] = value__6118;
return form__6018}
else {var object1__6121 = B6020, object2__6122 = "%begin", B6029 = (object1__6121 === object2__6122), B6197;
if ($T(B6029))
B6197 = B6029
else {var object1__6125 = B6020, object2__6126 = "%if", B6030 = (object1__6125 === object2__6126);
if ($T(B6030))
B6197 = B6030
else {var object1__6129 = B6020, object2__6130 = "%while", B6031 = (object1__6129 === object2__6130);
if ($T(B6031))
B6197 = B6031
else {var object1__6133 = B6020, object2__6134 = "%array", B6032 = (object1__6133 === object2__6134);
if ($T(B6032))
B6197 = B6032
else {var object1__6137 = B6020, object2__6138 = "%object", B6033 = (object1__6137 === object2__6138);
if ($T(B6033))
B6197 = B6033
else {var object1__6141 = B6020, object2__6142 = "%get-property", B6034 = (object1__6141 === object2__6142);
if ($T(B6034))
B6197 = B6034
else {var object1__6145 = B6020, object2__6146 = "%native-call", B6035 = (object1__6145 === object2__6146);
if ($T(B6035))
B6197 = B6035
else {var object1__6149 = B6020, object2__6150 = "%infix", B6036 = (object1__6149 === object2__6150);
if ($T(B6036))
B6197 = B6036
else {var object1__6153 = B6020, object2__6154 = "%plus", B6037 = (object1__6153 === object2__6154);
if ($T(B6037))
B6197 = B6037
else {var object1__6157 = B6020, object2__6158 = "%minus", B6038 = (object1__6157 === object2__6158);
if ($T(B6038))
B6197 = B6038
else {var object1__6161 = B6020, object2__6162 = "%times", B6039 = (object1__6161 === object2__6162);
if ($T(B6039))
B6197 = B6039
else {var object1__6165 = B6020, object2__6166 = "%divide";
B6197 = (object1__6165 === object2__6166)}}}}}}}}}}};
if ($T(B6197))
{var sequence__6168 = form__6018, B6198 = sequence__6168[0], B6199 = [B6198], B6200 = B5673(B6017, env__6019), sequence__6170 = form__6018, B6201 = sequence__6170.slice(1), B6202 = B4517(B6200, B6201);
return B4518(B6199, B6202)}
else {var object1__6173 = B6020, object2__6174 = "%native", B6040 = (object1__6173 === object2__6174), B6203;
if ($T(B6040))
B6203 = B6040
else {var object1__6177 = B6020, object2__6178 = "%native-name", B6041 = (object1__6177 === object2__6178);
if ($T(B6041))
B6203 = B6041
else {var object1__6181 = B6020, object2__6182 = "%define";
B6203 = (object1__6181 === object2__6182)}};
if ($T(B6203))
return form__6018
else {var sequence__6184 = form__6018, B6204 = sequence__6184[0], name__6042 = B4422(B6204), B6043 = B4433(env__6019, "definition-names", name__6042), definition_name__6044;
if ($T(B6043))
definition_name__6044 = B6043
else definition_name__6044 = name__6042;
var B6045;
if ($T(B6016(B4433(env__6019, "module"), definition_name__6044)))
B6045 = B4433(env__6019, "module", "functions", definition_name__6044)
else B6045 = false;
var definition__6050;
if ($T(B6045))
definition__6050 = B6045
else {var B6046 = B5695(definition_name__6044, env__6019);
if ($T(B6046))
{var moduleSimport_name__6047 = B6046, module__6048 = moduleSimport_name__6047[0], import_name__6049 = moduleSimport_name__6047[1];
if ($T(B6016(module__6048, import_name__6049)))
definition__6050 = B4433(module__6048, "functions", import_name__6049)
else definition__6050 = false}
else definition__6050 = false};
if ($T(definition__6050))
{var sequence__6186 = form__6018, B6205 = sequence__6186.slice(1);
return B6015(definition__6050, B6205, env__6019)}
else return B4517(B5673(B6017, env__6019), form__6018)}}}}}}
else return B4517(B5673(B6017, env__6019), form__6018)}
else return form__6018}, false)
{var B6207 = B2218["=="];
B6016 = B4420("inlineQ", function B6210 (module__6208, name__6209)
{return B4886(B4444(B6207, name__6209), B4433(module__6208, "inline"))}, false)}
{var trueQ = B2218["true?"], B6213 = B2218[">="], B6214 = B4394["ensure-naming-structure"], B6215 = B2218.push, B6216 = B4393["get-module-name/name"], B6217 = B4394["restore-identifiers"], B6218 = B4394["alpha-convert"];
B6015 = B4420("inline_definition", function B6248 (definition__6219, values__6220, env__6221)
{var ____6222 = definition__6219[0], arguments__6223 = definition__6219[1], body__6224 = definition__6219[2], body__6227 = B4506(function B6249 (body__6225, argument__6226)
{return [B4469, [argument__6226, argument__6226], body__6225]}, body__6224, B4643(arguments__6223)), inlined__6228 = B6017(body__6227, env__6221), prepared__6229 = B6218(inlined__6228, env__6221), object__6240 = arguments__6223, B6230 = ((object__6240 || false).length || 0), i__6231 = 0;
while (true)
{var value__6242 = B6213(i__6231, B6230), B6247 = !(trueQ(value__6242));
if ($T(B6247))
{(function B6250 (i__6232)
{var argument__6233 = B4478(arguments__6223, i__6232), value__6234 = B4478(values__6220, i__6232), B6235 = B6216(argument__6233), module_name__6236 = B6235[0], name__6237 = B6235[1];
B6214(env__6221, module_name__6236, name__6237);
var array__6245 = B4433(env__6221, "identifiers", module_name__6236, name__6237), value__6246;
if ($T(value__6234))
value__6246 = B6017(value__6234, env__6221)
else value__6246 = [B5238, "undefined"];
array__6245.unshift(value__6246);
return array__6245})(i__6231);
i__6231 = (i__6231 + 1)}
else break};
false;
var result__6238 = B6218(body__6227, env__6221);
B6217(arguments__6223, env__6221);
return result__6238}, false)}
{var B6251, B6252 = B2218.identity, B6253 = B4420("lift_symbols", function B6256 (exp__6254, env__6255)
{return B6251(exp__6254, env__6255, B6252)}, false);
exports["lift-symbols"] = B6253}
{var trueQ = B2218["true?"], B6274, B6275, B6276, B6277 = B2218["<keyword>"], B6278 = B2218["<hash-symbol>"];
B6251 = B4420("lift_symbol", function B6427 (exp__6279, env__6280, k__6281)
{var B6420;
if ($T(B4520(exp__6279, B4521)))
{var sequence__6337 = exp__6279, B6338 = sequence__6337, B6339 = ((B6338 || false).length || 0), B6340 = 0, value__6341 = (B6339 === B6340);
B6420 = !(trueQ(value__6341))}
else B6420 = false;
if ($T(B6420))
{var sequence__6343 = exp__6279, B6421 = sequence__6343[0], B6282 = B4422(B6421), object1__6346 = B6282, object2__6347 = "%bind", B6422 = (object1__6346 === object2__6347);
if ($T(B6422))
{var ____6283 = exp__6279[0], B6284 = exp__6279[1], var__6285 = B6284[0], value__6286 = B6284[1], body__6287 = exp__6279[2];
return B6251(value__6286, env__6280, function B6428 (lvalue__6288, env__6289)
{return B6251(body__6287, env__6289, function B6429 (lbody__6290, env__6291)
{return k__6281([B4469, [var__6285, lvalue__6288], lbody__6290], env__6291)})})}
else {var object1__6350 = B6282, object2__6351 = "%method", B6292 = (object1__6350 === object2__6351), B6423;
if ($T(B6292))
B6423 = B6292
else {var object1__6354 = B6282, object2__6355 = "%set";
B6423 = (object1__6354 === object2__6355)};
if ($T(B6423))
{var m__6293 = exp__6279[0], e1__6294 = exp__6279[1], e2__6295 = exp__6279[2];
return B6251(e2__6295, env__6280, function B6430 (le2__6296, env__6297)
{return k__6281([m__6293, e1__6294, le2__6296], env__6297)})}
else {var object1__6358 = B6282, object2__6359 = "%begin", B6298 = (object1__6358 === object2__6359), B6424;
if ($T(B6298))
B6424 = B6298
else {var object1__6362 = B6282, object2__6363 = "%if", B6299 = (object1__6362 === object2__6363);
if ($T(B6299))
B6424 = B6299
else {var object1__6366 = B6282, object2__6367 = "%while", B6300 = (object1__6366 === object2__6367);
if ($T(B6300))
B6424 = B6300
else {var object1__6370 = B6282, object2__6371 = "%array", B6301 = (object1__6370 === object2__6371);
if ($T(B6301))
B6424 = B6301
else {var object1__6374 = B6282, object2__6375 = "%object", B6302 = (object1__6374 === object2__6375);
if ($T(B6302))
B6424 = B6302
else {var object1__6378 = B6282, object2__6379 = "%get-property", B6303 = (object1__6378 === object2__6379);
if ($T(B6303))
B6424 = B6303
else {var object1__6382 = B6282, object2__6383 = "%infix", B6304 = (object1__6382 === object2__6383);
if ($T(B6304))
B6424 = B6304
else {var object1__6386 = B6282, object2__6387 = "%native", B6305 = (object1__6386 === object2__6387);
if ($T(B6305))
B6424 = B6305
else {var object1__6390 = B6282, object2__6391 = "%native-name", B6306 = (object1__6390 === object2__6391);
if ($T(B6306))
B6424 = B6306
else {var object1__6394 = B6282, object2__6395 = "%native-call", B6307 = (object1__6394 === object2__6395);
if ($T(B6307))
B6424 = B6307
else {var object1__6398 = B6282, object2__6399 = "%plus", B6308 = (object1__6398 === object2__6399);
if ($T(B6308))
B6424 = B6308
else {var object1__6402 = B6282, object2__6403 = "%minus", B6309 = (object1__6402 === object2__6403);
if ($T(B6309))
B6424 = B6309
else {var object1__6406 = B6282, object2__6407 = "%times", B6310 = (object1__6406 === object2__6407);
if ($T(B6310))
B6424 = B6310
else {var object1__6410 = B6282, object2__6411 = "%divide";
B6424 = (object1__6410 === object2__6411)}}}}}}}}}}}}};
if ($T(B6424))
{var m__6311 = exp__6279[0], eT__6312 = $SL.call(exp__6279, 1);
return B6274(eT__6312, env__6280, function B6431 (leT__6313, env__6314)
{return k__6281(B4518([m__6311], leT__6313), env__6314)})}
else {var object1__6414 = B6282, object2__6415 = "%try", B6425 = (object1__6414 === object2__6415);
if ($T(B6425))
{var ____6315 = exp__6279[0], e1__6316 = exp__6279[1], v__6317 = exp__6279[2], e2__6318 = exp__6279[3];
return B6274([e1__6316, e2__6318], env__6280, function B6432 (leT__6319, env__6320)
{var le1__6321 = leT__6319[0], le2__6322 = leT__6319[1];
return k__6281([B5558, le1__6321, v__6317, le2__6322], env__6320)})}
else {var object1__6418 = B6282, object2__6419 = "%symbol", B6426 = (object1__6418 === object2__6419);
if ($T(B6426))
{var ____6323 = exp__6279[0], name__6324 = exp__6279[1];
return B6275(name__6324, exp__6279, "symbol", env__6280, k__6281)}
else return B6276(exp__6279, env__6280, k__6281)}}}}}
else {var B6325 = exp__6279;
if ($T(B4520(B6325, B6277)))
return B6275(B4422(exp__6279), exp__6279, "keyword", env__6280, k__6281)
else if ($T(B4520(B6325, B6278)))
return B6275(B4422(exp__6279), exp__6279, "hash", env__6280, k__6281)
else return k__6281(exp__6279, env__6280)}}, false)}
B6275 = B4420("lift_value", function B6442 (name__6434, value__6435, type__6436, env__6437, k__6438)
{var B6439 = B4433(env__6437, "lifted", type__6436, name__6434);
if ($T(B6439))
{var t__6440 = B6439;
return k__6438(t__6440, env__6437)}
else {var t__6441 = B4421(env__6437, "lifted", type__6436, name__6434, B4523());
return [B4469, [t__6441, value__6435], k__6438(t__6441, env__6437)]}}, false)
B6274 = B4420("lift_symbolT", function B6461 (expT__6443, env__6444, k__6445)
{var sequence__6456 = expT__6443, B6457 = sequence__6456, B6458 = ((B6457 || false).length || 0), B6459 = 0, B6460 = (B6458 === B6459);
if ($T(B6460))
return k__6445([], env__6444)
else return B6276(expT__6443, env__6444, k__6445)}, false)
B6276 = B4420("lift_symbolTT", function B6477 (exp__6462, env__6463, k__6464)
{var sequence__6470 = exp__6462, B6473 = sequence__6470[0], B6476 = function B6478 (t__6465, env__6466)
{var sequence__6472 = exp__6462, B6474 = sequence__6472.slice(1), B6475 = function B6479 (tT__6467, env__6468)
{return k__6464(B4518([t__6465], tT__6467), env__6468)};
return B6274(B6474, env__6466, B6475)};
return B6251(B6473, env__6463, B6476)}, false)
var B6484 = $K("string"), B6480 = B4391.read, B6481 = B4389["<string-stream>"], B6482 = B4420("read_program", function B6485 (source__6483)
{return B6480(B5275(B6481, B6484, B4518("(", source__6483, "\n)")))}, false)
{var B6486 = B4395["lift-defines"], B6487 = B4396["normalize-term"], B6488 = B4397["transform-statements!"], B6489 = B4398["flatten-statements!"], B6490 = B4399["compile-js"], B6491 = B4420("compile_expression", function B6499 (exp__6492, env__6493)
{return B4506(function B6500 (result__6494, nameSfn__6495)
{var name__6496 = nameSfn__6495[0], fn__6497 = nameSfn__6495[1], result__6498 = fn__6497(result__6494);
return result__6498}, exp__6492, [["source", B6252], ["macroexpanded", B5673(B4445, env__6493)], ["lifted defines", B5673(B6486, env__6493)], ["defined free variables", B5673(B5721, env__6493)], ["alpha-converted", B5673(B6218, env__6493)], ["inline", B5673(B6017, env__6493)], ["defined free variables after inline", B5673(B5755, env__6493)], ["ANF", B6487], ["lifted symbols", B5673(B6253, env__6493)], ["statements", B5673(B6488, env__6493)], ["flattened", B6489], ["compiled", B5673(B6490, env__6493)]])}, false);
exports["compile-expression"] = B6491}
var B6501 = B4392["resolve-path"], B6502 = B4420("executable_path", function B6504 (module_name__6503)
{return B6501("build", B4518(module_name__6503, ".js"))}, false)
var B6505 = B4420("module_path", function B6508 (base_path__6506, module_name__6507)
{return B6501(base_path__6506, B4518(module_name__6507, ".rm"))}, false)
var B6509 = B4420("source_path", function B6511 (module_name__6510)
{return B6501("src", B4518(module_name__6510, ".ralph"))}, false)
var trueQ = B2218["true?"], B6513 = B2218["<"], B6514 = B4392["file-properties"], B6515 = B4392["file-exists?"], B6516 = B4420("recompileQ", function B6526 (module_name__6517)
{var value__6522 = B4433(B4401, module_name__6517, "native?"), B6525 = !(trueQ(value__6522));
if ($T(B6525))
{var path__6518 = B6502(module_name__6517), value__6524 = B6515(path__6518), B6519 = !(trueQ(value__6524));
if ($T(B6519))
return B6519
else {var path2__6520 = B6509(module_name__6517);
return B6513(B4433(B6514(path__6518), "modification-date"), B4433(B6514(path2__6520), "modification-date"))}}}, false)
{var B6530 = B2218["chain-object"], B6531, B6532;
B5505 = B4420("compile_time_import_module", function B6551 (env__6533, module_name__6534)
{var B6535 = $SL.call(arguments, 2), B6536 = B5324(B6535, {options:false}), options__6537 = B6536.options, object1__6548 = module_name__6534, object2__6549 = "ralph/core", B6550 = (object1__6548 === object2__6549), B6543;
if ($T(B6550))
B6543 = [B4471, B5608]
else {B6531(module_name__6534);
var definitions__6538 = require(module_name__6534), macros__6539 = B4412(), symbol_macros__6540 = B4412();
B4443(function B6552 (name__6541)
{var definition__6542 = B4433(definitions__6538, name__6541);
if ($T(B4433(definition__6542, "%macro?")))
return macros__6539[name__6541] = definition__6542
else if ($T(B4433(definition__6542, "%symbol-macro?")))
return symbol_macros__6540[name__6541] = definition__6542}, B5391(B6532, B5720(definitions__6538), options__6537));
B6543 = [macros__6539, symbol_macros__6540]};
var macros__6544 = B6543[0], symbol_macros__6545 = B6543[1];
B6530(B4433(env__6533, "macros"), macros__6544);
return B6530(B4433(env__6533, "symbol-macros"), symbol_macros__6545)}, false)}
{var B6557 = B2218["remove!"], B6558 = B2218["as-object"];
B6532 = B4420("process_names", function B6577 (all__6559)
{var B6560 = $SL.call(arguments, 1), B6561 = B5324(B6560, {only:false,
exclude:false,
prefix:false,
rename:false}), only__6562 = B6561.only, exclude__6563 = B6561.exclude, prefix__6564 = B6561.prefix, rename__6565 = B6561.rename, resolve__6566 = function B6578 (exp__6567)
{if ($T(B4520(exp__6567, B5285)))
return exp__6567
else return B5504(exp__6567)}, B6574;
if ($T(B4520(only__6562, B4521)))
B6574 = B4517(resolve__6566, only__6562)
else B6574 = all__6559;
var names__6568 = B5719(B6574), B6569 = rename__6565, B6575;
if ($T(B6569))
B6575 = B6569
else B6575 = [];
var B6576 = B4517(resolve__6566, B6575), renamings__6570 = B6558(B6576);
B4443(B4444(B6557, names__6568), B4517(resolve__6566, exclude__6563));
B5811(names__6568, B5720(renamings__6570));
return B4517(function B6579 (name__6571)
{var B6572 = B4433(renamings__6570, name__6571);
if ($T(B6572))
{var renaming__6573 = B6572;
return [name__6571, renaming__6573]}
else if ($T(B4520(prefix__6564, B5285)))
return [name__6571, B4518(prefix__6564, name__6571)]
else return name__6571}, names__6568)}, false)}
{var B6581;
B5506 = B4420("import_module", function B6597 (module__6582, module_name__6583)
{var options__6584 = $SL.call(arguments, 2), B6585 = B6581(module_name__6583);
if ($T(B6585))
{var other_module__6586 = B6585, array__6589 = B4433(module__6582, "imports"), value__6590 = [other_module__6586, B5391(B6532, B4433(other_module__6586, "exports"), options__6584)];
array__6589.unshift(value__6590);
array__6589;
var array__6593 = B4433(module__6582, "dependencies"), value__6594 = module_name__6583;
array__6593.unshift(value__6594);
array__6593;
return other_module__6586}
else {var error__6596 = B4518("unable to import module '", module_name__6583, "'");
throw(error__6596);
return false}}, false)}
{var B6601;
B6581 = B4420("find_module", function B6606 (module_name__6602)
{var B6603 = B6531(module_name__6602);
if ($T(B6603))
return B6603
else {var B6604 = B4433(B4401, module_name__6602);
if ($T(B6604))
return B6604
else {var B6605 = B6601("build", module_name__6602);
if ($T(B6605))
return B6605
else return B6601("src", module_name__6602)}}}, false)}
{var B6611 = $K("name"), B6607 = B4392["read-file"];
B6601 = B4420("read_module", function B6612 (base_path__6608, module_name__6609)
{var path__6610 = B6505(base_path__6608, module_name__6609);
if ($T(B6515(path__6610)))
return B5391(B4444(B5275, B4404, B6611), B6480(B5275(B6481, B6484, B6607(path__6610))))}, false)}
{var B6649 = $K("module"), B6650 = $K("exports"), B6651 = $K("inline"), B6652 = $K("dependencies"), trueQ = B2218["true?"], B6614 = B4392["write-file"], B6615 = B2218.description;
B6531 = B4420("compile_module", function B6653 (module_name__6616)
{var object__6629 = B4401, property__6630 = module_name__6616, value__6631 = $HP.call(object__6629,property__6630), B6646 = !(trueQ(value__6631));
if ($T(B6646))
{var B6617 = B6601("src", module_name__6616);
if ($T(B6617))
{var module__6618 = B6617;
B4401[module_name__6616] = module__6618}};
if ($T(B6516(module_name__6616)))
{var value__6633 = B6515(B6509(module_name__6616)), B6647 = !(trueQ(value__6633));
if ($T(B6647))
{var error__6635 = B4518("unable to compile module '", module_name__6616, "'");
throw(error__6635);
false};
var module__6619 = B5275(B4404, B6611, module_name__6616), env__6620 = B5275(B4413, B6649, module__6619), source__6621 = B6607(B6509(module_name__6616)), program__6622 = B6482(source__6621), result__6623 = "";
B4401[module_name__6616] = module__6619;
B5505(env__6620, "ralph/core");
var object1__6639 = module_name__6616, object2__6640 = "ralph/core", value__6641 = (object1__6639 === object2__6640), B6648 = !(trueQ(value__6641));
if ($T(B6648))
{B5506(module__6619, "ralph/core");
var array__6644 = program__6622, value__6645 = B5507("ralph/core", env__6620);
array__6644.unshift(value__6645);
array__6644};
B4443(function B6654 (expression__6624)
{var code__6625 = B6491(expression__6624, env__6620);
return result__6623 = B4518(result__6623, code__6625, "\n")}, program__6622);
B6614(B6502(module_name__6616), result__6623);
B6614(B6505("build", module_name__6616), B6615([module_name__6616, B6650, B4433(module__6619, "exports"), B6651, B4433(module__6619, "inline"), B6652, B4433(module__6619, "dependencies")]));
return module__6619}}, false);
exports["compile-module"] = B6531}
{var B6657 = B2218["member?"], B6658 = B4420("analyze_dependencies", function B6673 (module_name__6659)
{var B6660 = B6581(module_name__6659);
if ($T(B6660))
{var module__6661 = B6660;
B4401[module_name__6659] = module__6661;
var B6662 = module__6661, dependencies__6663 = B6662.dependencies, result__6664 = B4476(dependencies__6663);
B4443(function B6674 (dependency__6665)
{return B4443(function B6675 (sub_dependency__6666)
{if ($T(B6657(sub_dependency__6666, result__6664)))
B6557(result__6664, sub_dependency__6666);
var array__6669 = result__6664, value__6670 = sub_dependency__6666;
array__6669.unshift(value__6670);
return array__6669}, B6658(dependency__6665))}, dependencies__6663);
return result__6664}
else {var error__6672 = B4518("unable to find-module '", module_name__6659, "'");
throw(error__6672);
return false}}, false);
exports["analyze-dependencies"] = B6658}
