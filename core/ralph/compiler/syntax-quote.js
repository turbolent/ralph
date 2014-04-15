require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1773(name__1774, value__1775) {
            var B1777 = (exports);
            return(B1777[name__1774] = value__1775);
        };
        {
            ($module)['%eval'] = function B1776() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1778 = require('ralph/core');
{
    var B1779 = require('ralph/compiler/module');
    {
        var B1780 = require('ralph/compiler/environment');
        var B1781 = require('ralph/compiler/utilities');
    }
}
{
    var B1783 = $S('unquote', 'ralph/core');
    {
        ($module)['unquoted?'] = function B1784(form__1785, env__1786) {
            if (($T)(B1778['expression?'](form__1785)))
                return(B1778['=='](B1780['resolve-symbol'](B1778['first'](form__1785), env__1786), B1783));
            else
                return(false);
        };
        B1778['%annotate-function'](($module)['unquoted?'], 'unquoted?', false);
    }
}
{
    var B1788 = $S('unquote-splicing', 'ralph/core');
    {
        ($module)['unquote-spliced?'] = function B1789(form__1790, env__1791) {
            if (($T)(B1778['expression?'](form__1790)))
                return(B1778['=='](B1780['resolve-symbol'](B1778['first'](form__1790), env__1791), B1788));
            else
                return(false);
        };
        B1778['%annotate-function'](($module)['unquote-spliced?'], 'unquote-spliced?', false);
    }
}
{
    var B1793 = $S('quote', 'ralph/core');
    {
        ($module)['syntax-quote-symbol'] = function B1794(symbol__1795, env__1796) {
            return([
                B1793,
                B1780['resolve-symbol'](symbol__1795, env__1796)
            ]);
        };
        B1778['%annotate-function'](($module)['syntax-quote-symbol'], 'syntax-quote-symbol', false);
    }
}
{
    var B1799 = $S('%array', 'ralph/core');
    {
        var B1800 = $S('%concat', 'ralph/core');
        {
            ($module)['syntax-quote-array'] = function B1801(array__1802, env__1803) {
                if (($T)(($module)['unquoted?'](array__1802, env__1803)))
                    return(B1778['second'](array__1802));
                else {
                    var part__1804 = [B1799];
                    return(B1778['reduce'](function B1805(result__1806, form__1807) {
                        if (($T)(($module)['unquote-spliced?'](form__1807, env__1803))) {
                            part__1804 = false;
                            return([
                                B1800,
                                result__1806,
                                B1778['second'](form__1807)
                            ]);
                        } else {
                            var formT__1808 = false;
                            if (($T)(($module)['unquoted?'](form__1807, env__1803)))
                                formT__1808 = B1778['second'](form__1807);
                            else
                                formT__1808 = ($module)['syntax-quote-form'](form__1807, env__1803);
                            if (($T)(part__1804)) {
                                B1778['push-last'](part__1804, formT__1808);
                                return(result__1806);
                            } else {
                                part__1804 = [
                                    B1799,
                                    formT__1808
                                ];
                                return([
                                    B1800,
                                    result__1806,
                                    part__1804
                                ]);
                            }
                        }
                    }, part__1804, array__1802));
                }
            };
            B1778['%annotate-function'](($module)['syntax-quote-array'], 'syntax-quote-array', false);
        }
    }
}
{
    {
        ($module)['syntax-quote-form'] = function B1811(form__1812, env__1813) {
            var B1814 = form__1812;
            if (($T)(B1778['instance?'](B1814, B1778['<array>'])))
                return(($module)['syntax-quote-array'](form__1812, env__1813));
            else if (($T)(B1778['instance?'](B1814, B1778['<symbol>'])))
                return(($module)['syntax-quote-symbol'](form__1812, env__1813));
            else
                return(form__1812);
        };
        ($module)['%export']('syntax-quote-form', ($module)['syntax-quote-form']);
    }
    B1778['%annotate-function'](($module)['syntax-quote-form'], 'syntax-quote-form', false);
}
