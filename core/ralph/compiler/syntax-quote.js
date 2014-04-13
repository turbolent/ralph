{
    var $module = Object.create(null);
    ($module)['%export'] = function B1756(name__1757, value__1758) {
        var B1759 = (exports);
        return(B1759[name__1757] = value__1758);
    };
}
var B1760 = require('ralph/core');
{
    var B1761 = require('ralph/compiler/module');
    {
        var B1762 = require('ralph/compiler/environment');
        var B1763 = require('ralph/compiler/utilities');
    }
}
{
    var B1765 = $S('unquote', 'ralph/core');
    {
        ($module)['unquoted?'] = function B1766(form__1767, env__1768) {
            if (($T)(B1760['expression?'](form__1767)))
                return(B1760['=='](B1762['resolve-symbol'](B1760['first'](form__1767), env__1768), B1765));
            else
                return(false);
        };
        B1760['%annotate-function'](($module)['unquoted?'], 'unquoted?', false);
    }
}
{
    var B1770 = $S('unquote-splicing', 'ralph/core');
    {
        ($module)['unquote-spliced?'] = function B1771(form__1772, env__1773) {
            if (($T)(B1760['expression?'](form__1772)))
                return(B1760['=='](B1762['resolve-symbol'](B1760['first'](form__1772), env__1773), B1770));
            else
                return(false);
        };
        B1760['%annotate-function'](($module)['unquote-spliced?'], 'unquote-spliced?', false);
    }
}
{
    var B1775 = $S('quote', 'ralph/core');
    {
        ($module)['syntax-quote-symbol'] = function B1776(symbol__1777, env__1778) {
            return([
                B1775,
                B1762['resolve-symbol'](symbol__1777, env__1778)
            ]);
        };
        B1760['%annotate-function'](($module)['syntax-quote-symbol'], 'syntax-quote-symbol', false);
    }
}
{
    var B1781 = $S('%array', 'ralph/core');
    {
        var B1782 = $S('%concat', 'ralph/core');
        {
            ($module)['syntax-quote-array'] = function B1783(array__1784, env__1785) {
                if (($T)(($module)['unquoted?'](array__1784, env__1785)))
                    return(B1760['second'](array__1784));
                else {
                    var part__1786 = [B1781];
                    return(B1760['reduce'](function B1787(result__1788, form__1789) {
                        if (($T)(($module)['unquote-spliced?'](form__1789, env__1785))) {
                            part__1786 = false;
                            return([
                                B1782,
                                result__1788,
                                B1760['second'](form__1789)
                            ]);
                        } else {
                            var formT__1790 = false;
                            if (($T)(($module)['unquoted?'](form__1789, env__1785)))
                                formT__1790 = B1760['second'](form__1789);
                            else
                                formT__1790 = ($module)['syntax-quote-form'](form__1789, env__1785);
                            if (($T)(part__1786)) {
                                B1760['push-last'](part__1786, formT__1790);
                                return(result__1788);
                            } else {
                                part__1786 = [
                                    B1781,
                                    formT__1790
                                ];
                                return([
                                    B1782,
                                    result__1788,
                                    part__1786
                                ]);
                            }
                        }
                    }, part__1786, array__1784));
                }
            };
            B1760['%annotate-function'](($module)['syntax-quote-array'], 'syntax-quote-array', false);
        }
    }
}
{
    {
        ($module)['syntax-quote-form'] = function B1793(form__1794, env__1795) {
            var B1796 = form__1794;
            if (($T)(B1760['instance?'](B1796, B1760['<array>'])))
                return(($module)['syntax-quote-array'](form__1794, env__1795));
            else if (($T)(B1760['instance?'](B1796, B1760['<symbol>'])))
                return(($module)['syntax-quote-symbol'](form__1794, env__1795));
            else
                return(form__1794);
        };
        ($module)['%export']('syntax-quote-form', ($module)['syntax-quote-form']);
    }
    B1760['%annotate-function'](($module)['syntax-quote-form'], 'syntax-quote-form', false);
}
{
    ($module)['%eval'] = function B1798() {
        return(eval((arguments[0])));
    };
    {
        B1760['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
