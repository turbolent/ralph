var B3616 = require("ralph/core")
var B3618 = require("ralph/compiler/utilities")
var B3729 = $S("%begin"),
dec = B3616.dec,
size = B3616.size,
wrap_valueN__3635,
B3621 = B3616["%make-function"],
B3622 = B3616["instance?"],
B3623 = B3616["<array>"],
B3624 = B3616["binary=="],
B3625 = B3616["last-setter"],
B3626 = B3616.last,
B3627 = B3616["third-setter"],
B3628 = B3616.third,
B3629 = B3616["second-setter"],
B3630 = B3616.second,
B3631 = B3616.concatenate,
B3632 = B3616["symbol-name"],
B3633 = B3616.first,
B3634 = B3621("wrap_valueN", function wrap_valueN__3635 (exp__3636, wrapper__3637)
{if ($T(B3622(exp__3636, B3623)))
{
var sequence__3641 = exp__3636,
B3716 = sequence__3641[0],
B3638 = B3632(B3716),
object1__3644 = B3638,
object2__3645 = "%begin",
B3639 = (object1__3644 === object2__3645),
B3717;
if ($T(B3639))
B3717 = B3639
else
{
var object1__3648 = B3638,
object2__3649 = "%bind";
B3717 = (object1__3648 === object2__3649)};
if ($T(B3717))
{
var array__3662 = exp__3636,
array__3659 = exp__3636,
B3660 = array__3659,
B3661 = ((B3660 || false).length || 0),
B3718 = (B3661 - 1),
B3719 = array__3659[B3718],
value__3663 = wrap_valueN__3635(B3719, wrapper__3637);
array__3662[dec(size(array__3662), 1)] = value__3663;
return exp__3636}
else
{
var object1__3666 = B3638,
object2__3667 = "%if",
B3720 = (object1__3666 === object2__3667);
if ($T(B3720))
{
var array__3672 = exp__3636,
sequence__3671 = exp__3636,
B3721 = sequence__3671[2],
value__3673 = wrap_valueN__3635(B3721, wrapper__3637);
array__3672[2] = value__3673;
var array__3686 = exp__3636,
array__3683 = exp__3636,
B3684 = array__3683,
B3685 = ((B3684 || false).length || 0),
B3722 = (B3685 - 1),
B3723 = array__3683[B3722],
value__3687 = wrap_valueN__3635(B3723, wrapper__3637);
array__3686[dec(size(array__3686), 1)] = value__3687;
return exp__3636}
else
{
var object1__3690 = B3638,
object2__3691 = "%while",
B3724 = (object1__3690 === object2__3691);
if ($T(B3724))
return [B3729, exp__3636, wrap_valueN__3635(false, wrapper__3637)]
else
{
var object1__3694 = B3638,
object2__3695 = "%try",
B3725 = (object1__3694 === object2__3695);
if ($T(B3725))
{
var array__3700 = exp__3636,
sequence__3699 = exp__3636,
B3726 = sequence__3699[1],
value__3701 = wrap_valueN__3635(B3726, wrapper__3637);
array__3700[1] = value__3701;
var array__3714 = exp__3636,
array__3711 = exp__3636,
B3712 = array__3711,
B3713 = ((B3712 || false).length || 0),
B3727 = (B3713 - 1),
B3728 = array__3711[B3727],
value__3715 = wrap_valueN__3635(B3728, wrapper__3637);
array__3714[dec(size(array__3714), 1)] = value__3715;
return exp__3636}
else
return B3631(wrapper__3637, [exp__3636])}}}}
else
return B3631(wrapper__3637, [exp__3636])}, false)
var B3733 = $S("%return"),
B3730 = B3621("add_explicit_return", function add_explicit_return__3731 (exp__3732)
{return B3634(exp__3732, [B3733])}, false)
var B3761 = $S("%if"),
B3762 = $S("%while"),
B3763 = $S("%bind"),
B3764 = $S("%try"),
trueQ = B3616["true?"],
B3734 = B3616.not,
B3735 = B3616["empty?"],
B3736 = B3616["member?"],
B3737 = B3621("statementQ", function statementQ__3738 (exp__3739)
{if ($T(B3622(exp__3739, B3623)))
{
var sequence__3751 = exp__3739,
B3752 = sequence__3751,
B3753 = ((B3752 || false).length || 0),
B3754 = 0,
value__3755 = (B3753 === B3754),
B3758 = !(trueQ(value__3755));
if ($T(B3758))
{
var sequence__3757 = exp__3739,
B3759 = sequence__3757[0],
B3760 = [B3761, B3762, B3729, B3763, B3764];
return B3736(B3759, B3760)}}}, false)
var B3769 = $S("%native"),
trueQ = B3616["true?"],
B3765 = B3616["<boolean>"],
B3766 = B3621("add_explicit_true", function add_explicit_true__3767 (exp__3768)
{if ($T(B3622(exp__3768, B3765)))
return trueQ(exp__3768)
else
return [[B3769, "$T"], exp__3768]}, false)
{
var B3926 = $S("%set"),
B3927 = $S("%get-property"),
B3928 = $S("%var"),
dec = B3616.dec,
size = B3616.size,
transform_statementsN__3778,
B3772 = B3618["maybe-begin"],
B3773 = B3616.map,
B3774 = B3616.rcurry,
B3775 = B3616.get,
B3776 = B3616["first-setter"],
B3777 = B3621("transform_statementsN", function transform_statementsN__3778 (exp__3779, env__3780)
{if ($T(B3622(exp__3779, B3623)))
{
var sequence__3799 = exp__3779,
B3904 = sequence__3799[0],
B3781 = B3632(B3904),
object1__3802 = B3781,
object2__3803 = "%method",
B3905 = (object1__3802 === object2__3803);
if ($T(B3905))
{
var array__3816 = exp__3779,
array__3813 = exp__3779,
B3814 = array__3813,
B3815 = ((B3814 || false).length || 0),
B3906 = (B3815 - 1),
B3907 = array__3813[B3906],
B3908 = transform_statementsN__3778(B3907, env__3780),
value__3817 = B3730(B3908);
array__3816[dec(size(array__3816), 1)] = value__3817;
return exp__3779}
else
{
var object1__3820 = B3781,
object2__3821 = "%begin",
B3909 = (object1__3820 === object2__3821);
if ($T(B3909))
{
var ____3782 = exp__3779[0],
exps__3783 = $SL.call(exp__3779, 1);
return B3772(B3773(B3774(transform_statementsN__3778, env__3780), exps__3783))}
else
{
var object1__3824 = B3781,
object2__3825 = "%bind",
B3910 = (object1__3824 === object2__3825);
if ($T(B3910))
{
var ____3784 = exp__3779[0],
B3785 = exp__3779[1],
var__3786 = B3785[0],
value__3787 = B3785[1],
body__3788 = exp__3779[2];
if ($T(B3737(value__3787)))
return [B3763, [var__3786, false], [B3729, B3634(transform_statementsN__3778(value__3787, env__3780), [B3926, var__3786]), transform_statementsN__3778(body__3788, env__3780)]]
else
return [B3763, [var__3786, transform_statementsN__3778(value__3787, env__3780)], transform_statementsN__3778(body__3788, env__3780)]}
else
{
var object1__3828 = B3781,
object2__3829 = "%if",
B3911 = (object1__3828 === object2__3829);
if ($T(B3911))
{
var ____3789 = exp__3779[0],
test__3790 = exp__3779[1],
then__3791 = exp__3779[2],
else__3792 = exp__3779[3];
return [B3761, B3766(test__3790), transform_statementsN__3778(then__3791, env__3780), transform_statementsN__3778(else__3792, env__3780)]}
else
{
var object1__3832 = B3781,
object2__3833 = "%while",
B3912 = (object1__3832 === object2__3833);
if ($T(B3912))
{
var array__3838 = exp__3779,
sequence__3837 = exp__3779,
B3913 = sequence__3837[1],
value__3839 = B3766(B3913);
array__3838[1] = value__3839;
var array__3844 = exp__3779,
sequence__3843 = exp__3779,
B3914 = sequence__3843[2],
value__3845 = transform_statementsN__3778(B3914, env__3780);
array__3844[2] = value__3845;
return exp__3779}
else
{
var object1__3848 = B3781,
object2__3849 = "%try",
B3915 = (object1__3848 === object2__3849);
if ($T(B3915))
{
var array__3854 = exp__3779,
sequence__3853 = exp__3779,
B3916 = sequence__3853[1],
value__3855 = transform_statementsN__3778(B3916, exp__3779);
array__3854[1] = value__3855;
var array__3868 = exp__3779,
array__3865 = exp__3779,
B3866 = array__3865,
B3867 = ((B3866 || false).length || 0),
B3917 = (B3867 - 1),
B3918 = array__3865[B3917],
value__3869 = transform_statementsN__3778(B3918, env__3780);
array__3868[dec(size(array__3868), 1)] = value__3869;
return exp__3779}
else
{
var object1__3872 = B3781,
object2__3873 = "%set",
B3919 = (object1__3872 === object2__3873);
if ($T(B3919))
{
var ____3793 = exp__3779[0],
identifier__3794 = exp__3779[1],
value__3795 = exp__3779[2],
valueT__3796 = transform_statementsN__3778(value__3795, env__3780),
definition_name__3797 = B3775(env__3780, "definition-names", B3632(identifier__3794)),
B3920;
if ($T(definition_name__3797))
B3920 = B3736(definition_name__3797, B3775(env__3780, "module", "exports"))
else
B3920 = false;
if ($T(B3920))
{
var array__3876 = exp__3779,
value__3877 = B3729;
array__3876[0] = value__3877;
var array__3880 = exp__3779,
value__3881 = [B3926, identifier__3794, valueT__3796];
array__3880[1] = value__3881;
var array__3884 = exp__3779,
value__3885 = [B3926, [B3927, [B3769, "exports"], definition_name__3797], identifier__3794];
array__3884[2] = value__3885}
else
{
var array__3888 = exp__3779,
value__3889 = valueT__3796;
array__3888[2] = value__3889};
return exp__3779}
else
{
var object1__3892 = B3781,
object2__3893 = "%define",
B3921 = (object1__3892 === object2__3893);
if ($T(B3921))
{
var B3922 = B3928,
array__3901 = exp__3779,
B3902 = array__3901,
B3903 = ((B3902 || false).length || 0),
B3923 = (B3903 - 1),
B3924 = array__3901[B3923],
B3925 = [B3924, false];
return [B3922, B3925]}
else
return B3773(B3774(transform_statementsN__3778, env__3780), exp__3779)}}}}}}}}
else
return exp__3779}, false);
exports["transform-statements!"] = B3777}
