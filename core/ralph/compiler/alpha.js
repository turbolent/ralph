var B510 = require("ralph/core")
var B512 = require("ralph/compiler/utilities")
{
var B513 = B510["%make-function"],
B514 = B510.not,
B515 = B510.get,
B516 = B510["get-setter"],
B517 = B510["make-object"],
B518 = B513("ensure_naming_structure", function ensure_naming_structure__519 (env__520, module_name__521, name__522)
{
if ($T(B514(B515(env__520, "identifiers", module_name__521))))
B516(env__520, "identifiers", module_name__521, B517());
var module_renamings__523 = B515(env__520, "identifiers", module_name__521);
if ($T(B514(B515(module_renamings__523, name__522))))
module_renamings__523[name__522] = [];
return env__520}, false);
exports["ensure-naming-structure"] = B518}
{
var B526 = B510.map,
B527 = B510.push,
B528 = B512["generate-symbol"],
B529 = B512["get-module-name/name"],
B530 = B513("rename_identifiers", function rename_identifiers__531 (identifiers__532, env__533)
{return B526(function B534 (identifier__535)
{
var B536 = B529(identifier__535),
module_name__537 = B536[0],
name__538 = B536[1],
B540;
if ($T(B514(B515(identifier__535, "generated?"))))
B540 = name__538
else
B540 = false;
var new_identifier__539 = B528(B540);
B518(env__533, module_name__537, name__538);
B527(B515(env__533, "identifiers", module_name__537, name__538), new_identifier__539);
return new_identifier__539}, identifiers__532)}, false);
exports["rename-identifiers"] = B530}
{
var B548 = B510["any?"],
B549 = B510["empty?"],
B550 = B510.pop,
B551 = B510.rest,
B552 = B510.first,
B553 = B513("restore_identifiers", function restore_identifiers__554 (identifiers__555, env__556)
{
var B557 = identifiers__555,
B558,
B559,
B560 = [B557];
while (true)
{
var B561 = B558,
B568;
if ($T(B561))
B568 = B561
else
B568 = B548(B549, B560);
var B569 = B514(B568);
if ($T(B569))
{
var identifier__562 = B552(B557);
(function B563 (identifier__564)
{
var B565 = B529(identifier__564),
module_name__566 = B565[0],
name__567 = B565[1];
return B550(B515(env__556, "identifiers", module_name__566, name__567))})(identifier__562);
B557 = B551(B557);
B560 = [B557]}
else
break};
return B559}, false);
exports["restore-identifiers"] = B553}
var B570 = B517()
{
var B573 = B513("find_identifier", function find_identifier__574 (identifier__575, env__576)
{
var B577 = B529(identifier__575),
module_name__578 = B577[0],
name__579 = B577[1],
B580 = B515(env__576, "identifiers", module_name__578, name__579);
if ($T(B580))
{
var renamings__581 = B580;
return B552(renamings__581)}
else
return B570}, false);
exports["find-identifier"] = B573}
{
var B663 = $S("%method"),
B664 = $S("%bind"),
B665 = $S("%try"),
B666 = $S("%define"),
alpha_convert__610,
B601 = B510["instance?"],
B602 = B510["<array>"],
B603 = B510["binary=="],
B604 = B510.concatenate,
B605 = B510["push-last"],
B606 = B510["symbol-name"],
B607 = B510.rcurry,
B608 = B510["<symbol>"],
B609 = B513("alpha_convert", function alpha_convert__610 (form__611, env__612)
{
var B613 = form__611;
if ($T(B601(B613, B602)))
{
var B614 = B606(B552(form__611));
if ($T(B603(B614, "%method")))
{
var ____615 = form__611[0],
name__616 = form__611[1],
arguments__617 = form__611[2],
body__618 = form__611[3],
identifiers__619 = B604([name__616], arguments__617),
new_identifiers__620 = B530(identifiers__619, env__612),
new_body__621 = alpha_convert__610(body__618, env__612),
new_name__622 = new_identifiers__620[0],
new_arguments__623 = $SL.call(new_identifiers__620, 1),
result__624 = [B663, new_name__622, new_arguments__623, new_body__621];
B553(identifiers__619, env__612);
return result__624}
else
if ($T(B603(B614, "%bind")))
{
var ____625 = form__611[0],
B626 = form__611[1],
var__627 = B626[0],
value__628 = B626[1],
body__629 = form__611[2],
new_value__630 = alpha_convert__610(value__628, env__612),
B631 = B530([var__627], env__612),
new_var__632 = B631[0],
result__633 = [B664, [new_var__632, new_value__630], alpha_convert__610(body__629, env__612)];
B553([var__627], env__612);
return result__633}
else
if ($T(B603(B614, "%try")))
{
var ____634 = form__611[0],
body__635 = form__611[1],
var__636 = form__611[2],
catch__637 = form__611[3],
new_body__638 = alpha_convert__610(body__635, env__612),
B639 = B530([var__636], env__612),
new_var__640 = B639[0],
result__641 = [B665, new_body__638, new_var__640, alpha_convert__610(catch__637, env__612)];
B553([var__636], env__612);
return result__641}
else
if ($T(B603(B614, "%define")))
{
var ____642 = form__611[0],
identifier__643 = form__611[1],
B644 = B529(identifier__643),
module_name__645 = B644[0],
name__646 = B644[1],
new_identifier__647 = B528();
B518(env__612, module_name__645, name__646);
B605(B515(env__612, "identifiers", module_name__645, name__646), new_identifier__647);
B516(env__612, "definition-names", B606(new_identifier__647), name__646);
B516(env__612, "new-identifiers", name__646, new_identifier__647);
return [B666, new_identifier__647]}
else
{
var B648 = B603(B614, "%if"),
B662;
if ($T(B648))
B662 = B648
else
{
var B649 = B603(B614, "%while");
if ($T(B649))
B662 = B649
else
{
var B650 = B603(B614, "%set");
if ($T(B650))
B662 = B650
else
{
var B651 = B603(B614, "%begin");
if ($T(B651))
B662 = B651
else
{
var B652 = B603(B614, "%get-property");
if ($T(B652))
B662 = B652
else
{
var B653 = B603(B614, "%object");
if ($T(B653))
B662 = B653
else
{
var B654 = B603(B614, "%array");
if ($T(B654))
B662 = B654
else
{
var B655 = B603(B614, "%native");
if ($T(B655))
B662 = B655
else
{
var B656 = B603(B614, "%native-call");
if ($T(B656))
B662 = B656
else
{
var B657 = B603(B614, "%infix");
if ($T(B657))
B662 = B657
else
{
var B658 = B603(B614, "%minus");
if ($T(B658))
B662 = B658
else
{
var B659 = B603(B614, "%plus");
if ($T(B659))
B662 = B659
else
{
var B660 = B603(B614, "%times");
if ($T(B660))
B662 = B660
else
B662 = B603(B614, "%divide")}}}}}}}}}}}};
if ($T(B662))
return B604([B552(form__611)], B526(B607(alpha_convert__610, env__612), B551(form__611)))
else
if ($T(B603(B614, "%native-name")))
return form__611
else
return B526(B607(alpha_convert__610, env__612), form__611)}}
else
if ($T(B601(B613, B608)))
{
var value__661 = B573(form__611, env__612);
if ($T(B603(value__661, B570)))
return form__611
else
return value__661}
else
return form__611}, false);
exports["alpha-convert"] = B609}
