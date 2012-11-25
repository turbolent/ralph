var B1782 = require('ralph/core');
false;
{
    var LregexpG__1783 = (RegExp);
    (exports)['<regexp>'] = LregexpG__1783;
}
var ralphScoreCCMvar = B1782['%var'], ralphScoreCCMmake_method = B1782['%make-method'], ralphScoreCCMkeys = B1782['%keys'], ralphScoreCCconcatenate = B1782['concatenate'], ralphScoreCCinitialize = B1782['initialize'], initialize__1802 = ralphScoreCCMmake_method('initialize', function B1790(regexp__1791) {
        var B1792 = $SL.call(arguments, 1), B1793 = ralphScoreCCMkeys(B1792, {
                'pattern': false,
                'global?': false,
                'ignore-case?': false,
                'multiline?': false
            }), pattern__1794 = B1793['pattern'], globalQ__1795 = B1793['global?'], ignore_caseQ__1796 = B1793['ignore-case?'], multilineQ__1797 = B1793['multiline?'];
        if (($T)(pattern__1794)) {
            var B1803 = false;
            if (($T)(globalQ__1795))
                B1803 = 'g';
            else
                B1803 = '';
            var B1804 = false;
            if (($T)(ignore_caseQ__1796))
                B1804 = 'i';
            else
                B1804 = '';
            var B1805 = false;
            if (($T)(multilineQ__1797))
                B1805 = 'm';
            else
                B1805 = '';
            var flags__1798 = ralphScoreCCconcatenate(B1803, B1804, B1805), B1799 = regexp__1791, B1800 = pattern__1794, B1801 = flags__1798;
            return(B1799['compile'](B1800, B1801));
        } else
            return(false);
    }, false, LregexpG__1783, ralphScoreCCinitialize);
var ralphScoreCCMmake_function = B1782['%make-function'], ralphScoreCCG = B1782['>'], find__1815 = ralphScoreCCMmake_function('find', function B1809(regexp__1810, string__1811) {
        var B1812 = string__1811, B1813 = regexp__1810, position__1814 = B1812['search'](B1813);
        if (($T)(ralphScoreCCG(position__1814, -1)))
            return(position__1814);
        else
            return(false);
    }, false);
{
    var match__1824 = ralphScoreCCMmake_function('match', function B1819(regexp__1820, string__1821) {
            var B1822 = string__1821, B1823 = regexp__1820;
            return(B1822['match'](B1823));
        }, false);
    (exports)['match'] = match__1824;
}
