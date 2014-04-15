require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1750(name__1751, value__1752) {
            var B1754 = (exports);
            return(B1754[name__1751] = value__1752);
        };
        {
            ($module)['%eval'] = function B1753() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1755 = require('ralph/core');
false;
{
    ($module)['<regexp>'] = (RegExp);
    ($module)['%export']('<regexp>', ($module)['<regexp>']);
}
($module)['initialize'] = B1755['%make-method']('initialize', function B1762(regexp__1763) {
    var B1764 = $SL.call(arguments, 1);
    {
        var B1765 = B1755['%keys'](B1764, {
                'pattern': false,
                'global?': false,
                'ignore-case?': false,
                'multiline?': false
            });
        {
            var pattern__1766 = B1765['pattern'];
            {
                var globalQ__1767 = B1765['global?'];
                {
                    var ignore_caseQ__1768 = B1765['ignore-case?'];
                    {
                        var multilineQ__1769 = B1765['multiline?'];
                        if (($T)(pattern__1766)) {
                            var B1774 = B1755['concatenate'];
                            {
                                var B1775 = false;
                                if (($T)(globalQ__1767))
                                    B1775 = 'g';
                                else
                                    B1775 = '';
                                {
                                    var B1776 = false;
                                    if (($T)(ignore_caseQ__1768))
                                        B1776 = 'i';
                                    else
                                        B1776 = '';
                                    {
                                        var B1777 = false;
                                        if (($T)(multilineQ__1769))
                                            B1777 = 'm';
                                        else
                                            B1777 = '';
                                        {
                                            var flags__1770 = B1774(B1775, B1776, B1777);
                                            {
                                                var B1771 = regexp__1763;
                                                {
                                                    var B1772 = pattern__1766;
                                                    {
                                                        var B1773 = flags__1770;
                                                        return(B1771['compile'](B1772, B1773));
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
    ($module)['find'] = function B1781(regexp__1782, string__1783) {
        var B1784 = string__1783;
        {
            var B1785 = regexp__1782;
            {
                var position__1786 = B1784['search'](B1785);
                if (($T)(B1755['>'](position__1786, -1)))
                    return(position__1786);
                else
                    return(false);
            }
        }
    };
    B1755['%annotate-function'](($module)['find'], 'find', false);
}
{
    {
        ($module)['match'] = function B1790(regexp__1791, string__1792) {
            var B1793 = string__1792;
            {
                var B1794 = regexp__1791;
                return(B1793['match'](B1794));
            }
        };
        ($module)['%export']('match', ($module)['match']);
    }
    B1755['%annotate-function'](($module)['match'], 'match', false);
}
