var B669 = require("ralph/core")
var B671 = require("ralph/compiler/utilities")
{
var B672 = B669["%make-function"],
B673,
B674 = B669.identity,
B675 = B672("lift_defines", function lift_defines__676 (exp__677, env__678)
{return B673(exp__677, env__678, B674)}, false);
exports["lift-defines"] = B675}
{
var B775 = $S("%bind"),
B776 = $S("%set"),
B777 = $S("%method"),
B778 = $S("%begin"),
B779 = $S("%define"),
lift_define__711,
B701 = B671["expression?"],
B702 = B669["binary=="],
B703,
B704 = B669.concatenate,
B705 = B669["has?"],
B706 = B669.get,
B707 = B669["get-setter"],
B708 = B669["symbol-name"],
B709,
B710 = B669.first;
B673 = B672("lift_define", function lift_define__711 (exp__712, env__713, k__714)
{B780:while(true){
if ($T(B701(exp__712)))
{
var B715 = B708(B710(exp__712));
if ($T(B702(B715, "%bind")))
{
var ____716 = exp__712[0],
B717 = exp__712[1],
var__718 = B717[0],
value__719 = B717[1],
body__720 = exp__712[2];
arguments = [value__719, env__713, (function B781 (body__720, k__714, B775, var__718)
{return function B721 (lvalue__722, env__723)
{return lift_define__711(body__720, env__723, function B724 (lbody__725, env__726)
{return k__714([B775, [var__718, lvalue__722], lbody__725], env__726)})}})(body__720, k__714, B775, var__718)];
exp__712 = arguments[0];
env__713 = arguments[1];
k__714 = arguments[2];
continue B780}
else
if ($T(B702(B715, "%try")))
{
var m__727 = exp__712[0],
e1__728 = exp__712[1],
v__729 = exp__712[2],
e2__730 = exp__712[3];
return B703([e1__728, e2__730], env__713, function B731 (leT__732, env__733)
{
var le1__734 = leT__732[0],
le2__735 = leT__732[1];
return k__714([m__727, le1__734, v__729, le2__735], env__733)})}
else
if ($T(B702(B715, "%set")))
{
var ____736 = exp__712[0],
e1__737 = exp__712[1],
e2__738 = exp__712[2];
arguments = [e2__738, env__713, (function B782 (k__714, B776, e1__737)
{return function B739 (le2__740, env__741)
{return k__714([B776, e1__737, le2__740], env__741)}})(k__714, B776, e1__737)];
exp__712 = arguments[0];
env__713 = arguments[1];
k__714 = arguments[2];
continue B780}
else
if ($T(B702(B715, "%method")))
{
var ____742 = exp__712[0],
name__743 = exp__712[1],
arguments__744 = exp__712[2],
body__745 = exp__712[3];
arguments = [body__745, env__713, (function B783 (k__714, B777, name__743, arguments__744)
{return function B746 (lbody__747, env__748)
{return k__714([B777, name__743, arguments__744, lbody__747], env__748)}})(k__714, B777, name__743, arguments__744)];
exp__712 = arguments[0];
env__713 = arguments[1];
k__714 = arguments[2];
continue B780}
else
{
var B749 = B702(B715, "%begin"),
B773;
if ($T(B749))
B773 = B749
else
{
var B750 = B702(B715, "%if");
if ($T(B750))
B773 = B750
else
{
var B751 = B702(B715, "%while");
if ($T(B751))
B773 = B751
else
{
var B752 = B702(B715, "%array");
if ($T(B752))
B773 = B752
else
{
var B753 = B702(B715, "%object");
if ($T(B753))
B773 = B753
else
{
var B754 = B702(B715, "%get-property");
if ($T(B754))
B773 = B754
else
{
var B755 = B702(B715, "%infix");
if ($T(B755))
B773 = B755
else
{
var B756 = B702(B715, "%native");
if ($T(B756))
B773 = B756
else
{
var B757 = B702(B715, "%native-name");
if ($T(B757))
B773 = B757
else
{
var B758 = B702(B715, "%native-call");
if ($T(B758))
B773 = B758
else
{
var B759 = B702(B715, "%plus");
if ($T(B759))
B773 = B759
else
{
var B760 = B702(B715, "%minus");
if ($T(B760))
B773 = B760
else
{
var B761 = B702(B715, "%times");
if ($T(B761))
B773 = B761
else
B773 = B702(B715, "%divide")}}}}}}}}}}}};
if ($T(B773))
{
var m__762 = exp__712[0],
eT__763 = $SL.call(exp__712, 1);
return B703(eT__763, env__713, function B764 (leT__765, env__766)
{return k__714(B704([m__762], leT__765), env__766)})}
else
{
var B767 = B702(B715, "%define"),
B774;
if ($T(B767))
B774 = B767
else
B774 = B702(B715, "%symbol");
if ($T(B774))
return k__714(exp__712)
else
if ($T(B702(B715, "define")))
{
var ____768 = exp__712[0],
var__769 = exp__712[1],
value__770 = exp__712[2],
exportQ__771 = exp__712[3],
name__772 = B708(var__769);
if ($T(B705(B706(env__713, "defined?"), name__772)))
return k__714([B776, var__769, value__770], env__713)
else
{
B707(env__713, "defined?", name__772, true);
return [B778, [B779, var__769], k__714([B776, var__769, value__770], env__713)]}}
else
return B709(exp__712, env__713, k__714)}}}
else
return k__714(exp__712, env__713);
break}}, false)}
{
var B784 = B669["empty?"];
B703 = B672("lift_defineT", function lift_defineT__785 (expT__786, env__787, k__788)
{if ($T(B784(expT__786)))
return k__788([], env__787)
else
return B709(expT__786, env__787, k__788)}, false)}
{
var B791 = B669.rest;
B709 = B672("lift_defineTT", function lift_defineTT__792 (exp__793, env__794, k__795)
{return B673(B710(exp__793), env__794, function B796 (t__797, env__798)
{return B703(B791(exp__793), env__798, function B799 (tT__800, env__801)
{return k__795(B704([t__797], tT__800), env__801)})})}, false)}
