{
    var B1775 = require('ralph/core');
}
false;
{
    {
        var LregexpG__1776 = (RegExp);
    }
    (exports)['<regexp>'] = LregexpG__1776;
}
{
    var ralphScoreCCMvar = B1775['%var'];
    var ralphScoreCCMmake_method = B1775['%make-method'];
    var ralphScoreCCMkeys = B1775['%keys'];
    var ralphScoreCCconcatenate = B1775['concatenate'];
    var ralphScoreCCinitialize = B1775['initialize'];
    var initialize__1795 = ralphScoreCCMmake_method('initialize', function B1783(regexp__1784) {
            {
                var B1785 = $SL.call(arguments, 1);
                var B1786 = ralphScoreCCMkeys(B1785, {
                        'pattern': false,
                        'global?': false,
                        'ignore-case?': false,
                        'multiline?': false
                    });
                var pattern__1787 = B1786['pattern'];
                var globalQ__1788 = B1786['global?'];
                var ignore_caseQ__1789 = B1786['ignore-case?'];
                var multilineQ__1790 = B1786['multiline?'];
            }
            if (($T)(pattern__1787)) {
                {
                    var B1796 = false;
                }
                if (($T)(globalQ__1788))
                    B1796 = 'g';
                else
                    B1796 = '';
                {
                    var B1797 = false;
                }
                if (($T)(ignore_caseQ__1789))
                    B1797 = 'i';
                else
                    B1797 = '';
                {
                    var B1798 = false;
                }
                if (($T)(multilineQ__1790))
                    B1798 = 'm';
                else
                    B1798 = '';
                {
                    var flags__1791 = ralphScoreCCconcatenate(B1796, B1797, B1798);
                    var B1792 = regexp__1784;
                    var B1793 = pattern__1787;
                    var B1794 = flags__1791;
                }
                return(B1792['compile'](B1793, B1794));
            } else
                return(false);
        }, false, LregexpG__1776, ralphScoreCCinitialize);
}
{
    {
        var ralphScoreCCG = B1775['>'];
        var ralphScoreCCMannotate_function = B1775['%annotate-function'];
        var find__1808 = function B1802(regexp__1803, string__1804) {
            {
                var B1805 = string__1804;
                var B1806 = regexp__1803;
                var position__1807 = B1805['search'](B1806);
            }
            if (($T)(ralphScoreCCG(position__1807, -1)))
                return(position__1807);
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(find__1808, 'find', false);
}
{
    {
        var match__1817 = function B1812(regexp__1813, string__1814) {
            {
                var B1815 = string__1814;
                var B1816 = regexp__1813;
            }
            return(B1815['match'](B1816));
        };
    }
    (exports)['match'] = match__1817;
    ralphScoreCCMannotate_function(match__1817, 'match', false);
}
