require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1798(name__1799, value__1800) {
            var B1802 = (exports);
            return(B1802[name__1799] = value__1800);
        };
        {
            ($module)['%eval'] = function B1801() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1803 = require('ralph/core');
{
    var B1804 = require('ralph/compiler/module');
    {
        var B1805 = require('ralph/compiler/environment');
        var B1806 = require('ralph/compiler/utilities');
    }
}
{
    var B1808 = $S('unquote', 'ralph/core');
    {
        ($module)['unquoted?'] = function B1809(form__1810, env__1811) {
            if (($T)(B1803['expression?'](form__1810)))
                return(B1803['=='](B1805['resolve-symbol'](B1803['first'](form__1810), env__1811), B1808));
            else
                return(false);
        };
        B1803['%annotate-function'](($module)['unquoted?'], 'unquoted?', false);
    }
}
{
    var B1813 = $S('unquote-splicing', 'ralph/core');
    {
        ($module)['unquote-spliced?'] = function B1814(form__1815, env__1816) {
            if (($T)(B1803['expression?'](form__1815)))
                return(B1803['=='](B1805['resolve-symbol'](B1803['first'](form__1815), env__1816), B1813));
            else
                return(false);
        };
        B1803['%annotate-function'](($module)['unquote-spliced?'], 'unquote-spliced?', false);
    }
}
{
    var B1818 = $S('quote', 'ralph/core');
    {
        ($module)['syntax-quote-symbol'] = function B1819(symbol__1820, env__1821) {
            return([
                B1818,
                B1805['resolve-symbol'](symbol__1820, env__1821)
            ]);
        };
        B1803['%annotate-function'](($module)['syntax-quote-symbol'], 'syntax-quote-symbol', false);
    }
}
{
    var B1824 = $S('%array', 'ralph/core');
    {
        var B1825 = $S('%concat', 'ralph/core');
        {
            ($module)['syntax-quote-array'] = function B1826(array__1827, env__1828) {
                if (($T)(($module)['unquoted?'](array__1827, env__1828)))
                    return(B1803['second'](array__1827));
                else {
                    var part__1829 = [B1824];
                    return(B1803['reduce'](function B1830(result__1831, form__1832) {
                        if (($T)(($module)['unquote-spliced?'](form__1832, env__1828))) {
                            part__1829 = false;
                            return([
                                B1825,
                                result__1831,
                                B1803['second'](form__1832)
                            ]);
                        } else {
                            var formT__1833 = false;
                            if (($T)(($module)['unquoted?'](form__1832, env__1828)))
                                formT__1833 = B1803['second'](form__1832);
                            else
                                formT__1833 = ($module)['syntax-quote-form'](form__1832, env__1828);
                            if (($T)(part__1829)) {
                                B1803['push-last'](part__1829, formT__1833);
                                return(result__1831);
                            } else {
                                part__1829 = [
                                    B1824,
                                    formT__1833
                                ];
                                return([
                                    B1825,
                                    result__1831,
                                    part__1829
                                ]);
                            }
                        }
                    }, part__1829, array__1827));
                }
            };
            B1803['%annotate-function'](($module)['syntax-quote-array'], 'syntax-quote-array', false);
        }
    }
}
{
    {
        ($module)['syntax-quote-form'] = function B1836(form__1837, env__1838) {
            var B1839 = form__1837;
            if (($T)(B1803['instance?'](B1839, B1803['<array>'])))
                return(($module)['syntax-quote-array'](form__1837, env__1838));
            else if (($T)(B1803['instance?'](B1839, B1803['<symbol>'])))
                return(($module)['syntax-quote-symbol'](form__1837, env__1838));
            else
                return(form__1837);
        };
        ($module)['%export']('syntax-quote-form', ($module)['syntax-quote-form']);
    }
    B1803['%annotate-function'](($module)['syntax-quote-form'], 'syntax-quote-form', false);
}
