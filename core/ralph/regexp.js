require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1725(name__1726, value__1727) {
            var B1729 = (exports);
            return(B1729[name__1726] = value__1727);
        };
        {
            ($module)['%eval'] = function B1728() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1730 = require('ralph/core');
false;
{
    ($module)['<regexp>'] = (RegExp);
    ($module)['%export']('<regexp>', ($module)['<regexp>']);
}
($module)['initialize'] = B1730['%make-method']('initialize', function B1737(regexp__1738) {
    var B1739 = $SL.call(arguments, 1);
    {
        var B1740 = B1730['%keys'](B1739, {
                'pattern': false,
                'global?': false,
                'ignore-case?': false,
                'multiline?': false
            });
        {
            var pattern__1741 = B1740['pattern'];
            {
                var globalQ__1742 = B1740['global?'];
                {
                    var ignore_caseQ__1743 = B1740['ignore-case?'];
                    {
                        var multilineQ__1744 = B1740['multiline?'];
                        if (($T)(pattern__1741)) {
                            var B1749 = B1730['concatenate'];
                            {
                                var B1750 = false;
                                if (($T)(globalQ__1742))
                                    B1750 = 'g';
                                else
                                    B1750 = '';
                                {
                                    var B1751 = false;
                                    if (($T)(ignore_caseQ__1743))
                                        B1751 = 'i';
                                    else
                                        B1751 = '';
                                    {
                                        var B1752 = false;
                                        if (($T)(multilineQ__1744))
                                            B1752 = 'm';
                                        else
                                            B1752 = '';
                                        {
                                            var flags__1745 = B1749(B1750, B1751, B1752);
                                            {
                                                var B1746 = regexp__1738;
                                                {
                                                    var B1747 = pattern__1741;
                                                    {
                                                        var B1748 = flags__1745;
                                                        return(B1746['compile'](B1747, B1748));
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
    ($module)['find'] = function B1756(regexp__1757, string__1758) {
        var B1759 = string__1758;
        {
            var B1760 = regexp__1757;
            {
                var position__1761 = B1759['search'](B1760);
                if (($T)(B1730['>'](position__1761, -1)))
                    return(position__1761);
                else
                    return(false);
            }
        }
    };
    B1730['%annotate-function'](($module)['find'], 'find', false);
}
{
    {
        ($module)['match'] = function B1765(regexp__1766, string__1767) {
            var B1768 = string__1767;
            {
                var B1769 = regexp__1766;
                return(B1768['match'](B1769));
            }
        };
        ($module)['%export']('match', ($module)['match']);
    }
    B1730['%annotate-function'](($module)['match'], 'match', false);
}
