require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1760(name__1761, value__1762) {
            var B1764 = (exports);
            return(B1764[name__1761] = value__1762);
        };
        {
            ($module)['%eval'] = function B1763() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1765 = require('ralph/core');
false;
{
    ($module)['<regexp>'] = (RegExp);
    ($module)['%export']('<regexp>', ($module)['<regexp>']);
}
($module)['initialize'] = B1765['%make-method']('initialize', function B1772(regexp__1773) {
    var B1774 = $SL.call(arguments, 1);
    {
        var B1775 = B1765['%keys'](B1774, {
                'pattern': false,
                'global?': false,
                'ignore-case?': false,
                'multiline?': false
            });
        {
            var pattern__1776 = B1775['pattern'];
            {
                var globalQ__1777 = B1775['global?'];
                {
                    var ignore_caseQ__1778 = B1775['ignore-case?'];
                    {
                        var multilineQ__1779 = B1775['multiline?'];
                        if (($T)(pattern__1776)) {
                            var B1784 = B1765['concatenate'];
                            {
                                var B1785 = false;
                                if (($T)(globalQ__1777))
                                    B1785 = 'g';
                                else
                                    B1785 = '';
                                {
                                    var B1786 = false;
                                    if (($T)(ignore_caseQ__1778))
                                        B1786 = 'i';
                                    else
                                        B1786 = '';
                                    {
                                        var B1787 = false;
                                        if (($T)(multilineQ__1779))
                                            B1787 = 'm';
                                        else
                                            B1787 = '';
                                        {
                                            var flags__1780 = B1784(B1785, B1786, B1787);
                                            {
                                                var B1781 = regexp__1773;
                                                {
                                                    var B1782 = pattern__1776;
                                                    {
                                                        var B1783 = flags__1780;
                                                        return(B1781['compile'](B1782, B1783));
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        } else
                            return(false);
                    }
                }
            }
        }
    }
}, false, ($module)['<regexp>'], ($module)['initialize']);
{
    ($module)['find'] = function B1791(regexp__1792, string__1793) {
        var B1794 = string__1793;
        {
            var B1795 = regexp__1792;
            {
                var position__1796 = B1794['search'](B1795);
                if (($T)(B1765['>'](position__1796, -1)))
                    return(position__1796);
                else
                    return(false);
            }
        }
    };
    B1765['%annotate-function'](($module)['find'], 'find', false);
}
{
    {
        ($module)['match'] = function B1800(regexp__1801, string__1802) {
            var B1803 = string__1802;
            {
                var B1804 = regexp__1801;
                return(B1803['match'](B1804));
            }
        };
        ($module)['%export']('match', ($module)['match']);
    }
    B1765['%annotate-function'](($module)['match'], 'match', false);
}
