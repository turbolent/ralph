{
    var $module = Object.create(null);
    var Mexport = function B1771(name__1772, value__1773) {
        var B1774 = (exports);
        return(B1774[name__1772] = value__1773);
    };
}
var B1775 = require('ralph/core');
var B1776 = require('ralph/compiler/module');
{
    var LenvironmentG = B1775['%make-class'](B1775['<object>'], {
            'module': false,
            'macros': function B1782() {
                return(B1775['make-plain-object']());
            },
            'symbol-macros': function B1783() {
                return(B1775['make-plain-object']());
            },
            'special-forms': function B1784() {
                return(B1775['make-plain-object']());
            },
            'binding-count': function B1785() {
                return(B1775['make-plain-object']());
            },
            'global-bindings': function B1786() {
                return(B1775['make-plain-object']());
            }
        }, function LenvironmentG__1787() {
            var B1788 = (this);
            {
                B1788['module'] = (undefined);
                {
                    var B1789 = (this);
                    {
                        B1789['macros'] = (undefined);
                        {
                            var B1790 = (this);
                            {
                                B1790['symbol-macros'] = (undefined);
                                {
                                    var B1791 = (this);
                                    {
                                        B1791['special-forms'] = (undefined);
                                        {
                                            var B1792 = (this);
                                            {
                                                B1792['binding-count'] = (undefined);
                                                {
                                                    var B1793 = (this);
                                                    return(B1793['global-bindings'] = (undefined));
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    Mexport('<environment>', LenvironmentG);
}
{
    var find_expander = function B1795(namespace__1796, check_boundQ__1797, identifier__1798, env__1799) {
        var B1800 = B1775['not'];
        {
            var B1801 = false;
            if (($T)(check_boundQ__1797))
                B1801 = boundQ(identifier__1798, env__1799);
            else
                B1801 = false;
            {
                var B1802 = B1800(B1801);
                if (($T)(B1802))
                    return(env__1799[namespace__1796][B1775['symbol-name'](identifier__1798)]);
                else
                    return(false);
            }
        }
    };
    B1775['%annotate-function'](find_expander, 'find-expander', false);
}
{
    var find_macro = B1775['curry'](find_expander, 'macros', true);
    Mexport('find-macro', find_macro);
}
{
    var find_symbol_macro = B1775['curry'](find_expander, 'symbol-macros', true);
    Mexport('find-symbol-macro', find_symbol_macro);
}
{
    var find_special_form = B1775['curry'](find_expander, 'special-forms', false);
    Mexport('find-special-form', find_special_form);
}
{
    {
        var special_operatorQ = function B1804(identifier__1805, env__1806) {
            return(B1775['true?'](B1775['get'](env__1806, 'special-forms')[B1775['symbol-name'](identifier__1805)]));
        };
        Mexport('special-operator?', special_operatorQ);
    }
    B1775['%annotate-function'](special_operatorQ, 'special-operator?', false);
}
{
    {
        var bind_globallyN = function B1808(identifier__1809, env__1810) {
            return(B1775['get-setter'](env__1810, 'global-bindings', B1775['symbol-name'](identifier__1809), true));
        };
        Mexport('bind-globally!', bind_globallyN);
    }
    B1775['%annotate-function'](bind_globallyN, 'bind-globally!', false);
}
{
    {
        var globally_boundQ = function B1812(identifier__1813, env__1814) {
            return(B1775['get'](env__1814, 'global-bindings', B1775['symbol-name'](identifier__1813)));
        };
        Mexport('globally-bound?', globally_boundQ);
    }
    B1775['%annotate-function'](globally_boundQ, 'globally-bound?', false);
}
{
    {
        var bind_locallyN = function B1816(identifier__1817, env__1818) {
            var name__1819 = B1775['symbol-name'](identifier__1817);
            return(B1775['get-setter'](env__1818, 'binding-count', name__1819, B1775['+'](B1775['get'](env__1818, 'binding-count', name__1819), 1)));
        };
        Mexport('bind-locally!', bind_locallyN);
    }
    B1775['%annotate-function'](bind_locallyN, 'bind-locally!', false);
}
{
    {
        var boundQ = function B1822(identifier__1823, env__1824) {
            var B1825 = globally_boundQ(identifier__1823, env__1824);
            if (($T)(B1825))
                return(B1825);
            else
                return(locally_boundQ(identifier__1823, env__1824));
        };
        Mexport('bound?', boundQ);
    }
    B1775['%annotate-function'](boundQ, 'bound?', false);
}
{
    {
        var locally_boundQ = function B1828(identifier__1829, env__1830) {
            var name__1831 = B1775['symbol-name'](identifier__1829);
            {
                var B1832 = B1775['get'](env__1830, 'binding-count', name__1831);
                if (($T)(B1832)) {
                    var count__1833 = B1832;
                    return(B1775['>'](count__1833, 0));
                } else
                    return(false);
            }
        };
        Mexport('locally-bound?', locally_boundQ);
    }
    B1775['%annotate-function'](locally_boundQ, 'locally-bound?', false);
}
{
    {
        var unbind_locallyN = function B1835(identifier__1836, env__1837) {
            var name__1838 = B1775['symbol-name'](identifier__1836);
            return(B1775['get-setter'](env__1837, 'binding-count', name__1838, B1775['-'](B1775['get'](env__1837, 'binding-count', name__1838), 1)));
        };
        Mexport('unbind-locally!', unbind_locallyN);
    }
    B1775['%annotate-function'](unbind_locallyN, 'unbind-locally!', false);
}
{
    {
        var resolve_symbol = function B1841(symbol__1842, env__1843) {
            if (($T)(B1775['get'](symbol__1842, 'module')))
                return(symbol__1842);
            else {
                var name__1844 = B1775['symbol-name'](symbol__1842);
                {
                    var B1845 = false;
                    if (($T)(B1775['not'](globally_boundQ(symbol__1842, env__1843))))
                        B1845 = B1776['find-module/import-name'](name__1844, B1775['get'](env__1843, 'module'));
                    else
                        B1845 = false;
                    if (($T)(B1845)) {
                        var moduleSimport_name__1846 = B1845;
                        {
                            var module__1847 = moduleSimport_name__1846[0];
                            {
                                var import_name__1848 = moduleSimport_name__1846[1];
                                return(B1775['%%symbol'](import_name__1848, B1775['get'](module__1847, 'name')));
                            }
                        }
                    } else
                        return(B1775['%%symbol'](name__1844, B1775['get'](env__1843, 'module', 'name')));
                }
            }
        };
        Mexport('resolve-symbol', resolve_symbol);
    }
    B1775['%annotate-function'](resolve_symbol, 'resolve-symbol', false);
}
{
    {
        var qualify_symbol = function B1850(symbol__1851, env__1852) {
            return(B1775['%%symbol'](B1775['get'](symbol__1851, 'name'), B1775['get'](env__1852, 'module', 'name')));
        };
        Mexport('qualify-symbol', qualify_symbol);
    }
    B1775['%annotate-function'](qualify_symbol, 'qualify-symbol', false);
}
{
    {
        var find_import_identifier = function B1854(module_name__1855, env__1856) {
            return(B1775['get'](env__1856, 'import-identifiers', module_name__1855));
        };
        Mexport('find-import-identifier', find_import_identifier);
    }
    B1775['%annotate-function'](find_import_identifier, 'find-import-identifier', false);
}
{
    {
        var make_import_identifier = function B1858(module_name__1859, env__1860) {
            var identifier__1861 = B1775['generate-symbol']();
            {
                B1775['get-setter'](env__1860, 'import-identifiers', module_name__1859, identifier__1861);
                return(identifier__1861);
            }
        };
        Mexport('make-import-identifier', make_import_identifier);
    }
    B1775['%annotate-function'](make_import_identifier, 'make-import-identifier', false);
}
{
    var B1863 = $S('%define', 'ralph/core');
    {
        var B1864 = $S('%native-call', 'ralph/core');
        {
            {
                var make_import_definition = function B1865(module_name__1866, env__1867) {
                    return([
                        B1863,
                        make_import_identifier(module_name__1866, env__1867),
                        [
                            B1864,
                            'require',
                            module_name__1866
                        ]
                    ]);
                };
                Mexport('make-import-definition', make_import_definition);
            }
            B1775['%annotate-function'](make_import_definition, 'make-import-definition', false);
        }
    }
}
