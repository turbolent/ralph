var B3658 = require("ralph/core")
var B3660 = require("ralph/compiler/utilities")
var B3717 = $S("%begin"), reduce = B3658.reduce, trueQ = B3658["true?"], B3661 = B3658["%make-function"], B3662 = B3658.reduce1, B3663 = B3658.concatenate, B3664 = B3658.map, B3665 = B3658["instance?"], B3666 = B3658["<array>"], B3667 = B3658.not, B3668 = B3658["empty?"], B3669 = B3658["binary=="], B3670 = B3658.first, B3671 = B3658.rest, B3672, B3673 = B3661("flatten_begins", function B3718 (exps__3674)
{var function__3709 = B3663, values__3710 = B3664(function B3719 (exp__3675)
{var flattened__3676 = B3672(exp__3675), B3714;
if ($T(B3665(flattened__3676, B3666)))
{var sequence__3696 = flattened__3676, B3697 = sequence__3696, B3698 = ((B3697 || false).length || 0), B3699 = 0, value__3700 = (B3698 === B3699), B3713 = !(trueQ(value__3700));
if ($T(B3713))
{var sequence__3704 = flattened__3676, object1__3705 = sequence__3704[0], object2__3706 = B3717;
B3714 = (object1__3705 === object2__3706)}
else B3714 = false}
else B3714 = false;
if ($T(B3714))
{var sequence__3708 = flattened__3676;
return sequence__3708.slice(1)}
else return [flattened__3676]}, exps__3674), B3711 = values__3710, B3715 = B3711[0], B3712 = values__3710, B3716 = B3712.slice(1);
return reduce(function__3709, B3715, B3716)}, false)
var reduce = B3658.reduce, trueQ = B3658["true?"], B3720 = B3660["var?"], B3721 = B3658["do"], B3722 = B3658["push-last"], B3723 = B3658.last, B3724 = B3658["second-setter"], B3725 = B3658.third, B3726 = B3658.second, B3727 = B3660["set?"], B3728 = B3661("flatten_varsN", function B3823 (exps__3729)
{return reduce(function B3824 (result__3730, exp__3731)
{var sequence__3749 = result__3730, B3750 = sequence__3749, B3751 = ((B3750 || false).length || 0), B3752 = 0, value__3753 = (B3751 === B3752), B3814 = !(trueQ(value__3753)), previous__3732;
if ($T(B3814))
{var array__3761 = result__3730, B3762 = array__3761, B3763 = ((B3762 || false).length || 0), B3815 = (B3763 - 1);
previous__3732 = array__3761[B3815]}
else previous__3732 = false;
var previous_varQ__3733;
if ($T(previous__3732))
previous_varQ__3733 = B3720(previous__3732)
else previous_varQ__3733 = false;
var B3816;
if ($T(previous_varQ__3733))
B3816 = B3720(exp__3731)
else B3816 = false;
if ($T(B3816))
{var B3818 = function B3825 (binding__3734)
{var array__3773 = result__3730, B3774 = array__3773, B3775 = ((B3774 || false).length || 0), B3817 = (B3775 - 1), array__3776 = array__3773[B3817], value__3777 = binding__3734;
array__3776.push(value__3777);
return array__3776}, sequence__3779 = exp__3731, B3819 = sequence__3779.slice(1);
B3721(B3818, B3819);
return result__3730}
else {var mergeQ__3735;
if ($T(previous_varQ__3733))
mergeQ__3735 = B3727(exp__3731)
else mergeQ__3735 = false;
var binding__3736;
if ($T(mergeQ__3735))
{var array__3794 = result__3730, B3795 = array__3794, B3796 = ((B3795 || false).length || 0), B3820 = (B3796 - 1), array__3797 = array__3794[B3820], B3798 = array__3797, B3799 = ((B3798 || false).length || 0), B3821 = (B3799 - 1);
binding__3736 = array__3797[B3821]}
else binding__3736 = false;
var identifier__3737;
if ($T(mergeQ__3735))
{var sequence__3801 = exp__3731;
identifier__3737 = sequence__3801[1]}
else identifier__3737 = false;
var sequence__3805 = binding__3736, object1__3806 = sequence__3805[0], object2__3807 = identifier__3737, B3822 = (object1__3806 === object2__3807);
if ($T(B3822))
{var array__3812 = binding__3736, sequence__3811 = exp__3731, value__3813 = sequence__3811[2];
array__3812[1] = value__3813;
return result__3730}
else return B3663(result__3730, [exp__3731])}}, [], exps__3729)}, false)
{var B3940 = $S("%var"), dec = B3658.dec, size = B3658.size, B3829 = B3658["last-setter"], B3830 = B3660["maybe-begin"], B3831 = B3658["third-setter"], B3832 = B3658["symbol-name"];
B3672 = B3661("flatten_statementsN", function B3941 (exp__3833)
{if ($T(B3665(exp__3833, B3666)))
{var sequence__3843 = exp__3833, B3926 = sequence__3843[0], B3834 = B3832(B3926), object1__3846 = B3834, object2__3847 = "%method", B3835 = (object1__3846 === object2__3847), B3927;
if ($T(B3835))
B3927 = B3835
else {var object1__3850 = B3834, object2__3851 = "%while", B3836 = (object1__3850 === object2__3851);
if ($T(B3836))
B3927 = B3836
else {var object1__3854 = B3834, object2__3855 = "%set";
B3927 = (object1__3854 === object2__3855)}};
if ($T(B3927))
{var array__3868 = exp__3833, array__3865 = exp__3833, B3866 = array__3865, B3867 = ((B3866 || false).length || 0), B3928 = (B3867 - 1), B3929 = array__3865[B3928], value__3869 = B3672(B3929);
array__3868[dec(size(array__3868), 1)] = value__3869;
return exp__3833}
else {var object1__3872 = B3834, object2__3873 = "%begin", B3930 = (object1__3872 === object2__3873);
if ($T(B3930))
{var ____3837 = exp__3833[0], exps__3838 = $SL.call(exp__3833, 1);
return B3830(B3728(B3673(exps__3838)))}
else {var object1__3876 = B3834, object2__3877 = "%bind", B3931 = (object1__3876 === object2__3877);
if ($T(B3931))
{var ____3839 = exp__3833[0], binding__3840 = exp__3833[1], body__3841 = exp__3833[2];
return B3672([B3717, [B3940, binding__3840], body__3841])}
else {var object1__3880 = B3834, object2__3881 = "%if", B3932 = (object1__3880 === object2__3881);
if ($T(B3932))
{var array__3886 = exp__3833, sequence__3885 = exp__3833, B3933 = sequence__3885[2], value__3887 = B3672(B3933);
array__3886[2] = value__3887;
var array__3900 = exp__3833, array__3897 = exp__3833, B3898 = array__3897, B3899 = ((B3898 || false).length || 0), B3934 = (B3899 - 1), B3935 = array__3897[B3934], value__3901 = B3672(B3935);
array__3900[dec(size(array__3900), 1)] = value__3901;
return exp__3833}
else {var object1__3904 = B3834, object2__3905 = "%try", B3936 = (object1__3904 === object2__3905);
if ($T(B3936))
{var array__3910 = exp__3833, sequence__3909 = exp__3833, B3937 = sequence__3909[1], value__3911 = B3672(B3937);
array__3910[1] = value__3911;
var array__3924 = exp__3833, array__3921 = exp__3833, B3922 = array__3921, B3923 = ((B3922 || false).length || 0), B3938 = (B3923 - 1), B3939 = array__3921[B3938], value__3925 = B3672(B3939);
array__3924[dec(size(array__3924), 1)] = value__3925;
return exp__3833}
else return B3664(B3672, exp__3833)}}}}}
else return exp__3833}, false);
exports["flatten-statements!"] = B3672}
