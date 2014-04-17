require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1644(name__1645, value__1646) {
            var B1648 = (exports);
            return(B1648[name__1645] = value__1646);
        };
        {
            ($module)['%eval'] = function B1647() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1649 = require('ralph/core');
var B1650 = require('ralph/compiler/module');
{
    ($module)['<environment>'] = B1649['%make-class'](B1649['<object>'], {
        'module': false,
        'persistent?': function B1657() {
            return(true);
        },
        'macros': function B1658() {
            return(B1649['make-plain-object']());
        },
        'symbol-macros': function B1659() {
            return(B1649['make-plain-object']());
        },
        'special-forms': function B1660() {
            return(B1649['make-plain-object']());
        },
        'binding-count': function B1661() {
            return(B1649['make-plain-object']());
        },
        'global-bindings': function B1662() {
            return(B1649['make-plain-object']());
        }
    }, function LenvironmentG__1663() {
        var B1664 = (this);
        {
            B1664['module'] = (undefined);
            {
                var B1665 = (this);
                {
                    B1665['persistent?'] = (undefined);
                    {
                        var B1666 = (this);
                        {
                            B1666['macros'] = (undefined);
                            {
                                var B1667 = (this);
                                {
                                    B1667['symbol-macros'] = (undefined);
                                    {
                                        var B1668 = (this);
                                        {
                                            B1668['special-forms'] = (undefined);
                                            {
                                                var B1669 = (this);
                                                {
                                                    B1669['binding-count'] = (undefined);
                                                    {
                                                        var B1670 = (this);
                                                        return(B1670['global-bindings'] = (undefined));
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
            }
        }
    });
    ($module)['%export']('<environment>', ($module)['<environment>']);
}
{
    ($module)['find-expander'] = function B1672(namespace__1673, check_boundQ__1674, identifier__1675, env__1676) {
        var B1677 = B1649['not'];
        {
            var B1678 = false;
            if (($T)(check_boundQ__1674))
                B1678 = ($module)['bound?'](identifier__1675, env__1676);
            else
                B1678 = false;
            {
                var B1679 = B1677(B1678);
                if (($T)(B1679))
                    return(env__1676[namespace__1673][B1649['symbol-name'](identifier__1675)]);
                else
                    return(false);
            }
        }
    };
    B1649['%annotate-function'](($module)['find-expander'], 'find-expander', false);
}
{
    ($module)['find-macro'] = B1649['curry'](($module)['find-expander'], 'macros', true);
    ($module)['%export']('find-macro', ($module)['find-macro']);
}
{
    ($module)['find-symbol-macro'] = B1649['curry'](($module)['find-expander'], 'symbol-macros', true);
    ($module)['%export']('find-symbol-macro', ($module)['find-symbol-macro']);
}
{
    ($module)['find-special-form'] = B1649['curry'](($module)['find-expander'], 'special-forms', false);
    ($module)['%export']('find-special-form', ($module)['find-special-form']);
}
{
    {
        ($module)['special-operator?'] = function B1681(identifier__1682, env__1683) {
            return(B1649['true?'](B1649['get'](env__1683, 'special-forms')[B1649['symbol-name'](identifier__1682)]));
        };
        ($module)['%export']('special-operator?', ($module)['special-operator?']);
    }
    B1649['%annotate-function'](($module)['special-operator?'], 'special-operator?', false);
}
{
    {
        ($module)['bind-globally!'] = function B1685(identifier__1686, env__1687) {
            return(B1649['get-setter'](env__1687, 'global-bindings', B1649['symbol-name'](identifier__1686), true));
        };
        ($module)['%export']('bind-globally!', ($module)['bind-globally!']);
    }
    B1649['%annotate-function'](($module)['bind-globally!'], 'bind-globally!', false);
}
{
    {
        ($module)['globally-bound?'] = function B1689(identifier__1690, env__1691) {
            return(B1649['get'](env__1691, 'global-bindings', B1649['symbol-name'](identifier__1690)));
        };
        ($module)['%export']('globally-bound?', ($module)['globally-bound?']);
    }
    B1649['%annotate-function'](($module)['globally-bound?'], 'globally-bound?', false);
}
{
    {
        ($module)['bind-locally!'] = function B1693(identifier__1694, env__1695) {
            var name__1696 = B1649['symbol-name'](identifier__1694);
            return(B1649['get-setter'](env__1695, 'binding-count', name__1696, B1649['+'](B1649['get'](env__1695, 'binding-count', name__1696), 1)));
        };
        ($module)['%export']('bind-locally!', ($module)['bind-locally!']);
    }
    B1649['%annotate-function'](($module)['bind-locally!'], 'bind-locally!', false);
}
{
    {
        ($module)['bound?'] = function B1699(identifier__1700, env__1701) {
            var B1702 = ($module)['globally-bound?'](identifier__1700, env__1701);
            if (($T)(B1702))
                return(B1702);
            else
                return(($module)['locally-bound?'](identifier__1700, env__1701));
        };
        ($module)['%export']('bound?', ($module)['bound?']);
    }
    B1649['%annotate-function'](($module)['bound?'], 'bound?', false);
}
{
    {
        ($module)['locally-bound?'] = function B1705(identifier__1706, env__1707) {
            var name__1708 = B1649['symbol-name'](identifier__1706);
            {
                var B1709 = B1649['get'](env__1707, 'binding-count', name__1708);
                if (($T)(B1709)) {
                    var count__1710 = B1709;
                    return(B1649['>'](count__1710, 0));
                } else
                    return(false);
            }
        };
        ($module)['%export']('locally-bound?', ($module)['locally-bound?']);
    }
    B1649['%annotate-function'](($module)['locally-bound?'], 'locally-bound?', false);
}
{
    {
        ($module)['unbind-locally!'] = function B1712(identifier__1713, env__1714) {
            var name__1715 = B1649['symbol-name'](identifier__1713);
            return(B1649['get-setter'](env__1714, 'binding-count', name__1715, B1649['-'](B1649['get'](env__1714, 'binding-count', name__1715), 1)));
        };
        ($module)['%export']('unbind-locally!', ($module)['unbind-locally!']);
    }
    B1649['%annotate-function'](($module)['unbind-locally!'], 'unbind-locally!', false);
}
{
    {
        ($module)['resolve-symbol'] = function B1718(symbol__1719, env__1720) {
            if (($T)(B1649['get'](symbol__1719, 'module')))
                return(symbol__1719);
            else {
                var name__1721 = B1649['symbol-name'](symbol__1719);
                {
                    var B1722 = false;
                    if (($T)(B1649['not'](($module)['globally-bound?'](symbol__1719, env__1720))))
                        B1722 = B1650['find-module/import-name'](name__1721, B1649['get'](env__1720, 'module'));
                    else
                        B1722 = false;
                    {
                        var symbolT__1726 = false;
                        if (($T)(B1722)) {
                            var moduleSimport_name__1723 = B1722;
                            {
                                var module__1724 = moduleSimport_name__1723[0];
                                {
                                    var import_name__1725 = moduleSimport_name__1723[1];
                                    symbolT__1726 = B1649['%%symbol'](import_name__1725, B1649['get'](module__1724, 'name'));
                                }
                            }
                        } else
                            symbolT__1726 = B1649['%%symbol'](name__1721, B1649['get'](env__1720, 'module', 'name'));
                        {
                            if (($T)(B1649['get'](symbol__1719, 'generated?')))
                                B1649['get-setter'](symbolT__1726, 'generated?', true);
                            return(symbolT__1726);
                        }
                    }
                }
            }
        };
        ($module)['%export']('resolve-symbol', ($module)['resolve-symbol']);
    }
    B1649['%annotate-function'](($module)['resolve-symbol'], 'resolve-symbol', false);
}
{
    {
        ($module)['qualify-symbol'] = function B1728(symbol__1729, env__1730) {
            var symbolT__1731 = B1649['%%symbol'](B1649['get'](symbol__1729, 'name'), B1649['get'](env__1730, 'module', 'name'));
            {
                if (($T)(B1649['get'](symbol__1729, 'generated?')))
                    B1649['get-setter'](symbolT__1731, 'generated?', true);
                return(symbolT__1731);
            }
        };
        ($module)['%export']('qualify-symbol', ($module)['qualify-symbol']);
    }
    B1649['%annotate-function'](($module)['qualify-symbol'], 'qualify-symbol', false);
}
{
    {
        ($module)['find-import-identifier'] = function B1733(module_name__1734, env__1735) {
            return(B1649['get'](env__1735, 'import-identifiers', module_name__1734));
        };
        ($module)['%export']('find-import-identifier', ($module)['find-import-identifier']);
    }
    B1649['%annotate-function'](($module)['find-import-identifier'], 'find-import-identifier', false);
}
{
    {
        ($module)['make-import-identifier'] = function B1737(module_name__1738, env__1739) {
            var identifier__1740 = B1649['generate-symbol']();
            {
                B1649['get-setter'](env__1739, 'import-identifiers', module_name__1738, identifier__1740);
                return(identifier__1740);
            }
        };
        ($module)['%export']('make-import-identifier', ($module)['make-import-identifier']);
    }
    B1649['%annotate-function'](($module)['make-import-identifier'], 'make-import-identifier', false);
}
{
    var B1742 = $S('%define', 'ralph/core');
    {
        var B1743 = $S('%native-call', 'ralph/core');
        {
            {
                ($module)['make-import-definition'] = function B1744(module_name__1745, env__1746) {
                    return([
                        B1742,
                        ($module)['make-import-identifier'](module_name__1745, env__1746),
                        [
                            B1743,
                            'require',
                            module_name__1745
                        ]
                    ]);
                };
                ($module)['%export']('make-import-definition', ($module)['make-import-definition']);
            }
            B1649['%annotate-function'](($module)['make-import-definition'], 'make-import-definition', false);
        }
    }
}
