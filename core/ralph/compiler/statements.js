var B3622 = require("ralph/core")
var B3624 = require("ralph/compiler/utilities")
var B3735 = $S("%begin"),
dec = B3622.dec,
size = B3622.size,
wrap_valueN__3641,
B3627 = B3622["%make-function"],
B3628 = B3622["instance?"],
B3629 = B3622["<array>"],
B3630 = B3622["binary=="],
B3631 = B3622["last-setter"],
B3632 = B3622.last,
B3633 = B3622["third-setter"],
B3634 = B3622.third,
B3635 = B3622["second-setter"],
B3636 = B3622.second,
B3637 = B3622.concatenate,
B3638 = B3622["symbol-name"],
B3639 = B3622.first,
B3640 = B3627("wrap_valueN", function wrap_valueN__3641 (exp__3642, wrapper__3643)
{if ($T(B3628(exp__3642, B3629)))
{
var sequence__3647 = exp__3642,
B3722 = sequence__3647[0],
B3644 = B3638(B3722),
object1__3650 = B3644,
object2__3651 = "%begin",
B3645 = (object1__3650 === object2__3651),
B3723;
if ($T(B3645))
B3723 = B3645
else
{
var object1__3654 = B3644,
object2__3655 = "%bind";
B3723 = (object1__3654 === object2__3655)};
if ($T(B3723))
{
var array__3668 = exp__3642,
array__3665 = exp__3642,
B3666 = array__3665,
B3667 = ((B3666 || false).length || 0),
B3724 = (B3667 - 1),
B3725 = array__3665[B3724],
value__3669 = wrap_valueN__3641(B3725, wrapper__3643);
array__3668[dec(size(array__3668), 1)] = value__3669;
return exp__3642}
else
{
var object1__3672 = B3644,
object2__3673 = "%if",
B3726 = (object1__3672 === object2__3673);
if ($T(B3726))
{
var array__3678 = exp__3642,
sequence__3677 = exp__3642,
B3727 = sequence__3677[2],
value__3679 = wrap_valueN__3641(B3727, wrapper__3643);
array__3678[2] = value__3679;
var array__3692 = exp__3642,
array__3689 = exp__3642,
B3690 = array__3689,
B3691 = ((B3690 || false).length || 0),
B3728 = (B3691 - 1),
B3729 = array__3689[B3728],
value__3693 = wrap_valueN__3641(B3729, wrapper__3643);
array__3692[dec(size(array__3692), 1)] = value__3693;
return exp__3642}
else
{
var object1__3696 = B3644,
object2__3697 = "%while",
B3730 = (object1__3696 === object2__3697);
if ($T(B3730))
return [B3735, exp__3642, wrap_valueN__3641(false, wrapper__3643)]
else
{
var object1__3700 = B3644,
object2__3701 = "%try",
B3731 = (object1__3700 === object2__3701);
if ($T(B3731))
{
var array__3706 = exp__3642,
sequence__3705 = exp__3642,
B3732 = sequence__3705[1],
value__3707 = wrap_valueN__3641(B3732, wrapper__3643);
array__3706[1] = value__3707;
var array__3720 = exp__3642,
array__3717 = exp__3642,
B3718 = array__3717,
B3719 = ((B3718 || false).length || 0),
B3733 = (B3719 - 1),
B3734 = array__3717[B3733],
value__3721 = wrap_valueN__3641(B3734, wrapper__3643);
array__3720[dec(size(array__3720), 1)] = value__3721;
return exp__3642}
else
return B3637(wrapper__3643, [exp__3642])}}}}
else
return B3637(wrapper__3643, [exp__3642])}, false)
var B3739 = $S("%return"),
B3736 = B3627("add_explicit_return", function add_explicit_return__3737 (exp__3738)
{return B3640(exp__3738, [B3739])}, false)
var B3767 = $S("%if"),
B3768 = $S("%while"),
B3769 = $S("%bind"),
B3770 = $S("%try"),
trueQ = B3622["true?"],
B3740 = B3622.not,
B3741 = B3622["empty?"],
B3742 = B3622["member?"],
B3743 = B3627("statementQ", function statementQ__3744 (exp__3745)
{if ($T(B3628(exp__3745, B3629)))
{
var sequence__3757 = exp__3745,
B3758 = sequence__3757,
B3759 = ((B3758 || false).length || 0),
B3760 = 0,
value__3761 = (B3759 === B3760),
B3764 = !(trueQ(value__3761));
if ($T(B3764))
{
var sequence__3763 = exp__3745,
B3765 = sequence__3763[0],
B3766 = [B3767, B3768, B3735, B3769, B3770];
return B3742(B3765, B3766)}}}, false)
var B3775 = $S("%native"),
trueQ = B3622["true?"],
B3771 = B3622["<boolean>"],
B3772 = B3627("add_explicit_true", function add_explicit_true__3773 (exp__3774)
{if ($T(B3628(exp__3774, B3771)))
return trueQ(exp__3774)
else
return [[B3775, "$T"], exp__3774]}, false)
{
var B3932 = $S("%set"),
B3933 = $S("%get-property"),
B3934 = $S("%var"),
dec = B3622.dec,
size = B3622.size,
transform_statementsN__3784,
B3778 = B3624["maybe-begin"],
B3779 = B3622.map,
B3780 = B3622.rcurry,
B3781 = B3622.get,
B3782 = B3622["first-setter"],
B3783 = B3627("transform_statementsN", function transform_statementsN__3784 (exp__3785, env__3786)
{if ($T(B3628(exp__3785, B3629)))
{
var sequence__3805 = exp__3785,
B3910 = sequence__3805[0],
B3787 = B3638(B3910),
object1__3808 = B3787,
object2__3809 = "%method",
B3911 = (object1__3808 === object2__3809);
if ($T(B3911))
{
var array__3822 = exp__3785,
array__3819 = exp__3785,
B3820 = array__3819,
B3821 = ((B3820 || false).length || 0),
B3912 = (B3821 - 1),
B3913 = array__3819[B3912],
B3914 = transform_statementsN__3784(B3913, env__3786),
value__3823 = B3736(B3914);
array__3822[dec(size(array__3822), 1)] = value__3823;
return exp__3785}
else
{
var object1__3826 = B3787,
object2__3827 = "%begin",
B3915 = (object1__3826 === object2__3827);
if ($T(B3915))
{
var ____3788 = exp__3785[0],
exps__3789 = $SL.call(exp__3785, 1);
return B3778(B3779(B3780(transform_statementsN__3784, env__3786), exps__3789))}
else
{
var object1__3830 = B3787,
object2__3831 = "%bind",
B3916 = (object1__3830 === object2__3831);
if ($T(B3916))
{
var ____3790 = exp__3785[0],
B3791 = exp__3785[1],
var__3792 = B3791[0],
value__3793 = B3791[1],
body__3794 = exp__3785[2];
if ($T(B3743(value__3793)))
return [B3769, [var__3792, false], [B3735, B3640(transform_statementsN__3784(value__3793, env__3786), [B3932, var__3792]), transform_statementsN__3784(body__3794, env__3786)]]
else
return [B3769, [var__3792, transform_statementsN__3784(value__3793, env__3786)], transform_statementsN__3784(body__3794, env__3786)]}
else
{
var object1__3834 = B3787,
object2__3835 = "%if",
B3917 = (object1__3834 === object2__3835);
if ($T(B3917))
{
var ____3795 = exp__3785[0],
test__3796 = exp__3785[1],
then__3797 = exp__3785[2],
else__3798 = exp__3785[3];
return [B3767, B3772(test__3796), transform_statementsN__3784(then__3797, env__3786), transform_statementsN__3784(else__3798, env__3786)]}
else
{
var object1__3838 = B3787,
object2__3839 = "%while",
B3918 = (object1__3838 === object2__3839);
if ($T(B3918))
{
var array__3844 = exp__3785,
sequence__3843 = exp__3785,
B3919 = sequence__3843[1],
value__3845 = B3772(B3919);
array__3844[1] = value__3845;
var array__3850 = exp__3785,
sequence__3849 = exp__3785,
B3920 = sequence__3849[2],
value__3851 = transform_statementsN__3784(B3920, env__3786);
array__3850[2] = value__3851;
return exp__3785}
else
{
var object1__3854 = B3787,
object2__3855 = "%try",
B3921 = (object1__3854 === object2__3855);
if ($T(B3921))
{
var array__3860 = exp__3785,
sequence__3859 = exp__3785,
B3922 = sequence__3859[1],
value__3861 = transform_statementsN__3784(B3922, exp__3785);
array__3860[1] = value__3861;
var array__3874 = exp__3785,
array__3871 = exp__3785,
B3872 = array__3871,
B3873 = ((B3872 || false).length || 0),
B3923 = (B3873 - 1),
B3924 = array__3871[B3923],
value__3875 = transform_statementsN__3784(B3924, env__3786);
array__3874[dec(size(array__3874), 1)] = value__3875;
return exp__3785}
else
{
var object1__3878 = B3787,
object2__3879 = "%set",
B3925 = (object1__3878 === object2__3879);
if ($T(B3925))
{
var ____3799 = exp__3785[0],
identifier__3800 = exp__3785[1],
value__3801 = exp__3785[2],
valueT__3802 = transform_statementsN__3784(value__3801, env__3786),
definition_name__3803 = B3781(env__3786, "definition-names", B3638(identifier__3800)),
B3926;
if ($T(definition_name__3803))
B3926 = B3742(definition_name__3803, B3781(env__3786, "module", "exports"))
else
B3926 = false;
if ($T(B3926))
{
var array__3882 = exp__3785,
value__3883 = B3735;
array__3882[0] = value__3883;
var array__3886 = exp__3785,
value__3887 = [B3932, identifier__3800, valueT__3802];
array__3886[1] = value__3887;
var array__3890 = exp__3785,
value__3891 = [B3932, [B3933, [B3775, "exports"], definition_name__3803], identifier__3800];
array__3890[2] = value__3891}
else
{
var array__3894 = exp__3785,
value__3895 = valueT__3802;
array__3894[2] = value__3895};
return exp__3785}
else
{
var object1__3898 = B3787,
object2__3899 = "%define",
B3927 = (object1__3898 === object2__3899);
if ($T(B3927))
{
var B3928 = B3934,
array__3907 = exp__3785,
B3908 = array__3907,
B3909 = ((B3908 || false).length || 0),
B3929 = (B3909 - 1),
B3930 = array__3907[B3929],
B3931 = [B3930, false];
return [B3928, B3931]}
else
return B3779(B3780(transform_statementsN__3784, env__3786), exp__3785)}}}}}}}}
else
return exp__3785}, false);
exports["transform-statements!"] = B3783}
