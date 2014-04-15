require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1634(name__1635, value__1636) {
            var B1638 = (exports);
            return(B1638[name__1635] = value__1636);
        };
        {
            ($module)['%eval'] = function B1637() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1639 = require('ralph/core');
var B1640 = require('ralph/compiler/module');
{
    ($module)['<environment>'] = B1639['%make-class'](B1639['<object>'], {
        'module': false,
        'persistent?': function B1647() {
            return(true);
        },
        'macros': function B1648() {
            return(B1639['make-plain-object']());
        },
        'symbol-macros': function B1649() {
            return(B1639['make-plain-object']());
        },
        'special-forms': function B1650() {
            return(B1639['make-plain-object']());
        },
        'binding-count': function B1651() {
            return(B1639['make-plain-object']());
        },
        'global-bindings': function B1652() {
            return(B1639['make-plain-object']());
        }
    }, function LenvironmentG__1653() {
        var B1654 = (this);
        {
            B1654['module'] = (undefined);
            {
                var B1655 = (this);
                {
                    B1655['persistent?'] = (undefined);
                    {
                        var B1656 = (this);
                        {
                            B1656['macros'] = (undefined);
                            {
                                var B1657 = (this);
                                {
                                    B1657['symbol-macros'] = (undefined);
                                    {
                                        var B1658 = (this);
                                        {
                                            B1658['special-forms'] = (undefined);
                                            {
                                                var B1659 = (this);
                                                {
                                                    B1659['binding-count'] = (undefined);
                                                    {
                                                        var B1660 = (this);
                                                        return(B1660['global-bindings'] = (undefined));
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
    ($module)['find-expander'] = function B1662(namespace__1663, check_boundQ__1664, identifier__1665, env__1666) {
        var B1667 = B1639['not'];
        {
            var B1668 = false;
            if (($T)(check_boundQ__1664))
                B1668 = ($module)['bound?'](identifier__1665, env__1666);
            else
                B1668 = false;
            {
                var B1669 = B1667(B1668);
                if (($T)(B1669))
                    return(env__1666[namespace__1663][B1639['symbol-name'](identifier__1665)]);
                else
                    return(false);
            }
        }
    };
    B1639['%annotate-function'](($module)['find-expander'], 'find-expander', false);
}
{
    ($module)['find-macro'] = B1639['curry'](($module)['find-expander'], 'macros', true);
    ($module)['%export']('find-macro', ($module)['find-macro']);
}
{
    ($module)['find-symbol-macro'] = B1639['curry'](($module)['find-expander'], 'symbol-macros', true);
    ($module)['%export']('find-symbol-macro', ($module)['find-symbol-macro']);
}
{
    ($module)['find-special-form'] = B1639['curry'](($module)['find-expander'], 'special-forms', false);
    ($module)['%export']('find-special-form', ($module)['find-special-form']);
}
{
    {
        ($module)['special-operator?'] = function B1671(identifier__1672, env__1673) {
            return(B1639['true?'](B1639['get'](env__1673, 'special-forms')[B1639['symbol-name'](identifier__1672)]));
        };
        ($module)['%export']('special-operator?', ($module)['special-operator?']);
    }
    B1639['%annotate-function'](($module)['special-operator?'], 'special-operator?', false);
}
{
    {
        ($module)['bind-globally!'] = function B1675(identifier__1676, env__1677) {
            return(B1639['get-setter'](env__1677, 'global-bindings', B1639['symbol-name'](identifier__1676), true));
        };
        ($module)['%export']('bind-globally!', ($module)['bind-globally!']);
    }
    B1639['%annotate-function'](($module)['bind-globally!'], 'bind-globally!', false);
}
{
    {
        ($module)['globally-bound?'] = function B1679(identifier__1680, env__1681) {
            return(B1639['get'](env__1681, 'global-bindings', B1639['symbol-name'](identifier__1680)));
        };
        ($module)['%export']('globally-bound?', ($module)['globally-bound?']);
    }
    B1639['%annotate-function'](($module)['globally-bound?'], 'globally-bound?', false);
}
{
    {
        ($module)['bind-locally!'] = function B1683(identifier__1684, env__1685) {
            var name__1686 = B1639['symbol-name'](identifier__1684);
            return(B1639['get-setter'](env__1685, 'binding-count', name__1686, B1639['+'](B1639['get'](env__1685, 'binding-count', name__1686), 1)));
        };
        ($module)['%export']('bind-locally!', ($module)['bind-locally!']);
    }
    B1639['%annotate-function'](($module)['bind-locally!'], 'bind-locally!', false);
}
{
    {
        ($module)['bound?'] = function B1689(identifier__1690, env__1691) {
            var B1692 = ($module)['globally-bound?'](identifier__1690, env__1691);
            if (($T)(B1692))
                return(B1692);
            else
                return(($module)['locally-bound?'](identifier__1690, env__1691));
        };
        ($module)['%export']('bound?', ($module)['bound?']);
    }
    B1639['%annotate-function'](($module)['bound?'], 'bound?', false);
}
{
    {
        ($module)['locally-bound?'] = function B1695(identifier__1696, env__1697) {
            var name__1698 = B1639['symbol-name'](identifier__1696);
            {
                var B1699 = B1639['get'](env__1697, 'binding-count', name__1698);
                if (($T)(B1699)) {
                    var count__1700 = B1699;
                    return(B1639['>'](count__1700, 0));
                } else
                    return(false);
            }
        };
        ($module)['%export']('locally-bound?', ($module)['locally-bound?']);
    }
    B1639['%annotate-function'](($module)['locally-bound?'], 'locally-bound?', false);
}
{
    {
        ($module)['unbind-locally!'] = function B1702(identifier__1703, env__1704) {
            var name__1705 = B1639['symbol-name'](identifier__1703);
            return(B1639['get-setter'](env__1704, 'binding-count', name__1705, B1639['-'](B1639['get'](env__1704, 'binding-count', name__1705), 1)));
        };
        ($module)['%export']('unbind-locally!', ($module)['unbind-locally!']);
    }
    B1639['%annotate-function'](($module)['unbind-locally!'], 'unbind-locally!', false);
}
{
    {
        ($module)['resolve-symbol'] = function B1708(symbol__1709, env__1710) {
            if (($T)(B1639['get'](symbol__1709, 'module')))
                return(symbol__1709);
            else {
                var name__1711 = B1639['symbol-name'](symbol__1709);
                {
                    var B1712 = false;
                    if (($T)(B1639['not'](($module)['globally-bound?'](symbol__1709, env__1710))))
                        B1712 = B1640['find-module/import-name'](name__1711, B1639['get'](env__1710, 'module'));
                    else
                        B1712 = false;
                    {
                        var symbolT__1716 = false;
                        if (($T)(B1712)) {
                            var moduleSimport_name__1713 = B1712;
                            {
                                var module__1714 = moduleSimport_name__1713[0];
                                {
                                    var import_name__1715 = moduleSimport_name__1713[1];
                                    symbolT__1716 = B1639['%%symbol'](import_name__1715, B1639['get'](module__1714, 'name'));
                                }
                            }
                        } else
                            symbolT__1716 = B1639['%%symbol'](name__1711, B1639['get'](env__1710, 'module', 'name'));
                        {
                            if (($T)(B1639['get'](symbol__1709, 'generated?')))
                                B1639['get-setter'](symbolT__1716, 'generated?', true);
                            return(symbolT__1716);
                        }
                    }
                }
            }
        };
        ($module)['%export']('resolve-symbol', ($module)['resolve-symbol']);
    }
    B1639['%annotate-function'](($module)['resolve-symbol'], 'resolve-symbol', false);
}
{
    {
        ($module)['qualify-symbol'] = function B1718(symbol__1719, env__1720) {
            var symbolT__1721 = B1639['%%symbol'](B1639['get'](symbol__1719, 'name'), B1639['get'](env__1720, 'module', 'name'));
            {
                if (($T)(B1639['get'](symbol__1719, 'generated?')))
                    B1639['get-setter'](symbolT__1721, 'generated?', true);
                return(symbolT__1721);
            }
        };
        ($module)['%export']('qualify-symbol', ($module)['qualify-symbol']);
    }
    B1639['%annotate-function'](($module)['qualify-symbol'], 'qualify-symbol', false);
}
{
    {
        ($module)['find-import-identifier'] = function B1723(module_name__1724, env__1725) {
            return(B1639['get'](env__1725, 'import-identifiers', module_name__1724));
        };
        ($module)['%export']('find-import-identifier', ($module)['find-import-identifier']);
    }
    B1639['%annotate-function'](($module)['find-import-identifier'], 'find-import-identifier', false);
}
{
    {
        ($module)['make-import-identifier'] = function B1727(module_name__1728, env__1729) {
            var identifier__1730 = B1639['generate-symbol']();
            {
                B1639['get-setter'](env__1729, 'import-identifiers', module_name__1728, identifier__1730);
                return(identifier__1730);
            }
        };
        ($module)['%export']('make-import-identifier', ($module)['make-import-identifier']);
    }
    B1639['%annotate-function'](($module)['make-import-identifier'], 'make-import-identifier', false);
}
{
    var B1732 = $S('%define', 'ralph/core');
    {
        var B1733 = $S('%native-call', 'ralph/core');
        {
            {
                ($module)['make-import-definition'] = function B1734(module_name__1735, env__1736) {
                    return([
                        B1732,
                        ($module)['make-import-identifier'](module_name__1735, env__1736),
                        [
                            B1733,
                            'require',
                            module_name__1735
                        ]
                    ]);
                };
                ($module)['%export']('make-import-definition', ($module)['make-import-definition']);
            }
            B1639['%annotate-function'](($module)['make-import-definition'], 'make-import-definition', false);
        }
    }
}
