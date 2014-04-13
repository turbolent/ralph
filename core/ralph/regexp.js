{
    var $module = Object.create(null);
    ($module)['%export'] = function B1708(name__1709, value__1710) {
        var B1711 = (exports);
        return(B1711[name__1709] = value__1710);
    };
}
var B1712 = require('ralph/core');
false;
{
    ($module)['<regexp>'] = (RegExp);
    ($module)['%export']('<regexp>', ($module)['<regexp>']);
}
($module)['initialize'] = B1712['%make-method']('initialize', function B1719(regexp__1720) {
    var B1721 = $SL.call(arguments, 1);
    {
        var B1722 = B1712['%keys'](B1721, {
                'pattern': false,
                'global?': false,
                'ignore-case?': false,
                'multiline?': false
            });
        {
            var pattern__1723 = B1722['pattern'];
            {
                var globalQ__1724 = B1722['global?'];
                {
                    var ignore_caseQ__1725 = B1722['ignore-case?'];
                    {
                        var multilineQ__1726 = B1722['multiline?'];
                        if (($T)(pattern__1723)) {
                            var B1731 = B1712['concatenate'];
                            {
                                var B1732 = false;
                                if (($T)(globalQ__1724))
                                    B1732 = 'g';
                                else
                                    B1732 = '';
                                {
                                    var B1733 = false;
                                    if (($T)(ignore_caseQ__1725))
                                        B1733 = 'i';
                                    else
                                        B1733 = '';
                                    {
                                        var B1734 = false;
                                        if (($T)(multilineQ__1726))
                                            B1734 = 'm';
                                        else
                                            B1734 = '';
                                        {
                                            var flags__1727 = B1731(B1732, B1733, B1734);
                                            {
                                                var B1728 = regexp__1720;
                                                {
                                                    var B1729 = pattern__1723;
                                                    {
                                                        var B1730 = flags__1727;
                                                        return(B1728['compile'](B1729, B1730));
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
    ($module)['find'] = function B1738(regexp__1739, string__1740) {
        var B1741 = string__1740;
        {
            var B1742 = regexp__1739;
            {
                var position__1743 = B1741['search'](B1742);
                if (($T)(B1712['>'](position__1743, -1)))
                    return(position__1743);
                else
                    return(false);
            }
        }
    };
    B1712['%annotate-function'](($module)['find'], 'find', false);
}
{
    {
        ($module)['match'] = function B1747(regexp__1748, string__1749) {
            var B1750 = string__1749;
            {
                var B1751 = regexp__1748;
                return(B1750['match'](B1751));
            }
        };
        ($module)['%export']('match', ($module)['match']);
    }
    B1712['%annotate-function'](($module)['match'], 'match', false);
}
{
    ($module)['%eval'] = function B1753() {
        return(eval((arguments[0])));
    };
    {
        B1712['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
