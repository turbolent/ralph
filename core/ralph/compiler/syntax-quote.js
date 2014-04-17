require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1808(name__1809, value__1810) {
            var B1812 = (exports);
            return(B1812[name__1809] = value__1810);
        };
        {
            ($module)['%eval'] = function B1811() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1813 = require('ralph/core');
{
    var B1814 = require('ralph/compiler/module');
    {
        var B1815 = require('ralph/compiler/environment');
        var B1816 = require('ralph/compiler/utilities');
    }
}
{
    var B1818 = $S('unquote', 'ralph/core');
    {
        ($module)['unquoted?'] = function B1819(form__1820, env__1821) {
            if (($T)(B1813['expression?'](form__1820)))
                return(B1813['=='](B1815['resolve-symbol'](B1813['first'](form__1820), env__1821), B1818));
            else
                return(false);
        };
        B1813['%annotate-function'](($module)['unquoted?'], 'unquoted?', false);
    }
}
{
    var B1823 = $S('unquote-splicing', 'ralph/core');
    {
        ($module)['unquote-spliced?'] = function B1824(form__1825, env__1826) {
            if (($T)(B1813['expression?'](form__1825)))
                return(B1813['=='](B1815['resolve-symbol'](B1813['first'](form__1825), env__1826), B1823));
            else
                return(false);
        };
        B1813['%annotate-function'](($module)['unquote-spliced?'], 'unquote-spliced?', false);
    }
}
{
    var B1828 = $S('quote', 'ralph/core');
    {
        ($module)['syntax-quote-symbol'] = function B1829(symbol__1830, env__1831) {
            return([
                B1828,
                B1815['resolve-symbol'](symbol__1830, env__1831)
            ]);
        };
        B1813['%annotate-function'](($module)['syntax-quote-symbol'], 'syntax-quote-symbol', false);
    }
}
{
    var B1834 = $S('%array', 'ralph/core');
    {
        var B1835 = $S('%concat', 'ralph/core');
        {
            ($module)['syntax-quote-array'] = function B1836(array__1837, env__1838) {
                if (($T)(($module)['unquoted?'](array__1837, env__1838)))
                    return(B1813['second'](array__1837));
                else {
                    var part__1839 = [B1834];
                    return(B1813['reduce'](function B1840(result__1841, form__1842) {
                        if (($T)(($module)['unquote-spliced?'](form__1842, env__1838))) {
                            part__1839 = false;
                            return([
                                B1835,
                                result__1841,
                                B1813['second'](form__1842)
                            ]);
                        } else {
                            var formT__1843 = false;
                            if (($T)(($module)['unquoted?'](form__1842, env__1838)))
                                formT__1843 = B1813['second'](form__1842);
                            else
                                formT__1843 = ($module)['syntax-quote-form'](form__1842, env__1838);
                            if (($T)(part__1839)) {
                                B1813['push-last'](part__1839, formT__1843);
                                return(result__1841);
                            } else {
                                part__1839 = [
                                    B1834,
                                    formT__1843
                                ];
                                return([
                                    B1835,
                                    result__1841,
                                    part__1839
                                ]);
                            }
                        }
                    }, part__1839, array__1837));
                }
            };
            B1813['%annotate-function'](($module)['syntax-quote-array'], 'syntax-quote-array', false);
        }
    }
}
{
    {
        ($module)['syntax-quote-form'] = function B1846(form__1847, env__1848) {
            var B1849 = form__1847;
            if (($T)(B1813['instance?'](B1849, B1813['<array>'])))
                return(($module)['syntax-quote-array'](form__1847, env__1848));
            else if (($T)(B1813['instance?'](B1849, B1813['<symbol>'])))
                return(($module)['syntax-quote-symbol'](form__1847, env__1848));
            else
                return(form__1847);
        };
        ($module)['%export']('syntax-quote-form', ($module)['syntax-quote-form']);
    }
    B1813['%annotate-function'](($module)['syntax-quote-form'], 'syntax-quote-form', false);
}
