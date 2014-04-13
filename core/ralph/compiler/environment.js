{
    var $module = Object.create(null);
    ($module)['%export'] = function B1597(name__1598, value__1599) {
        var B1600 = (exports);
        return(B1600[name__1598] = value__1599);
    };
}
var B1601 = require('ralph/core');
var B1602 = require('ralph/compiler/module');
{
    ($module)['<environment>'] = B1601['%make-class'](B1601['<object>'], {
        'module': false,
        'macros': function B1608() {
            return(B1601['make-plain-object']());
        },
        'symbol-macros': function B1609() {
            return(B1601['make-plain-object']());
        },
        'special-forms': function B1610() {
            return(B1601['make-plain-object']());
        },
        'binding-count': function B1611() {
            return(B1601['make-plain-object']());
        },
        'global-bindings': function B1612() {
            return(B1601['make-plain-object']());
        }
    }, function LenvironmentG__1613() {
        var B1614 = (this);
        {
            B1614['module'] = (undefined);
            {
                var B1615 = (this);
                {
                    B1615['macros'] = (undefined);
                    {
                        var B1616 = (this);
                        {
                            B1616['symbol-macros'] = (undefined);
                            {
                                var B1617 = (this);
                                {
                                    B1617['special-forms'] = (undefined);
                                    {
                                        var B1618 = (this);
                                        {
                                            B1618['binding-count'] = (undefined);
                                            {
                                                var B1619 = (this);
                                                return(B1619['global-bindings'] = (undefined));
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
    ($module)['find-expander'] = function B1621(namespace__1622, check_boundQ__1623, identifier__1624, env__1625) {
        var B1626 = B1601['not'];
        {
            var B1627 = false;
            if (($T)(check_boundQ__1623))
                B1627 = ($module)['bound?'](identifier__1624, env__1625);
            else
                B1627 = false;
            {
                var B1628 = B1626(B1627);
                if (($T)(B1628))
                    return(env__1625[namespace__1622][B1601['symbol-name'](identifier__1624)]);
                else
                    return(false);
            }
        }
    };
    B1601['%annotate-function'](($module)['find-expander'], 'find-expander', false);
}
{
    ($module)['find-macro'] = B1601['curry'](($module)['find-expander'], 'macros', true);
    ($module)['%export']('find-macro', ($module)['find-macro']);
}
{
    ($module)['find-symbol-macro'] = B1601['curry'](($module)['find-expander'], 'symbol-macros', true);
    ($module)['%export']('find-symbol-macro', ($module)['find-symbol-macro']);
}
{
    ($module)['find-special-form'] = B1601['curry'](($module)['find-expander'], 'special-forms', false);
    ($module)['%export']('find-special-form', ($module)['find-special-form']);
}
{
    {
        ($module)['special-operator?'] = function B1630(identifier__1631, env__1632) {
            return(B1601['true?'](B1601['get'](env__1632, 'special-forms')[B1601['symbol-name'](identifier__1631)]));
        };
        ($module)['%export']('special-operator?', ($module)['special-operator?']);
    }
    B1601['%annotate-function'](($module)['special-operator?'], 'special-operator?', false);
}
{
    {
        ($module)['bind-globally!'] = function B1634(identifier__1635, env__1636) {
            return(B1601['get-setter'](env__1636, 'global-bindings', B1601['symbol-name'](identifier__1635), true));
        };
        ($module)['%export']('bind-globally!', ($module)['bind-globally!']);
    }
    B1601['%annotate-function'](($module)['bind-globally!'], 'bind-globally!', false);
}
{
    {
        ($module)['globally-bound?'] = function B1638(identifier__1639, env__1640) {
            return(B1601['get'](env__1640, 'global-bindings', B1601['symbol-name'](identifier__1639)));
        };
        ($module)['%export']('globally-bound?', ($module)['globally-bound?']);
    }
    B1601['%annotate-function'](($module)['globally-bound?'], 'globally-bound?', false);
}
{
    {
        ($module)['bind-locally!'] = function B1642(identifier__1643, env__1644) {
            var name__1645 = B1601['symbol-name'](identifier__1643);
            return(B1601['get-setter'](env__1644, 'binding-count', name__1645, B1601['+'](B1601['get'](env__1644, 'binding-count', name__1645), 1)));
        };
        ($module)['%export']('bind-locally!', ($module)['bind-locally!']);
    }
    B1601['%annotate-function'](($module)['bind-locally!'], 'bind-locally!', false);
}
{
    {
        ($module)['bound?'] = function B1648(identifier__1649, env__1650) {
            var B1651 = ($module)['globally-bound?'](identifier__1649, env__1650);
            if (($T)(B1651))
                return(B1651);
            else
                return(($module)['locally-bound?'](identifier__1649, env__1650));
        };
        ($module)['%export']('bound?', ($module)['bound?']);
    }
    B1601['%annotate-function'](($module)['bound?'], 'bound?', false);
}
{
    {
        ($module)['locally-bound?'] = function B1654(identifier__1655, env__1656) {
            var name__1657 = B1601['symbol-name'](identifier__1655);
            {
                var B1658 = B1601['get'](env__1656, 'binding-count', name__1657);
                if (($T)(B1658)) {
                    var count__1659 = B1658;
                    return(B1601['>'](count__1659, 0));
                } else
                    return(false);
            }
        };
        ($module)['%export']('locally-bound?', ($module)['locally-bound?']);
    }
    B1601['%annotate-function'](($module)['locally-bound?'], 'locally-bound?', false);
}
{
    {
        ($module)['unbind-locally!'] = function B1661(identifier__1662, env__1663) {
            var name__1664 = B1601['symbol-name'](identifier__1662);
            return(B1601['get-setter'](env__1663, 'binding-count', name__1664, B1601['-'](B1601['get'](env__1663, 'binding-count', name__1664), 1)));
        };
        ($module)['%export']('unbind-locally!', ($module)['unbind-locally!']);
    }
    B1601['%annotate-function'](($module)['unbind-locally!'], 'unbind-locally!', false);
}
{
    {
        ($module)['resolve-symbol'] = function B1667(symbol__1668, env__1669) {
            if (($T)(B1601['get'](symbol__1668, 'module')))
                return(symbol__1668);
            else {
                var name__1670 = B1601['symbol-name'](symbol__1668);
                {
                    var B1671 = false;
                    if (($T)(B1601['not'](($module)['globally-bound?'](symbol__1668, env__1669))))
                        B1671 = B1602['find-module/import-name'](name__1670, B1601['get'](env__1669, 'module'));
                    else
                        B1671 = false;
                    {
                        var symbolT__1675 = false;
                        if (($T)(B1671)) {
                            var moduleSimport_name__1672 = B1671;
                            {
                                var module__1673 = moduleSimport_name__1672[0];
                                {
                                    var import_name__1674 = moduleSimport_name__1672[1];
                                    symbolT__1675 = B1601['%%symbol'](import_name__1674, B1601['get'](module__1673, 'name'));
                                }
                            }
                        } else
                            symbolT__1675 = B1601['%%symbol'](name__1670, B1601['get'](env__1669, 'module', 'name'));
                        {
                            if (($T)(B1601['get'](symbol__1668, 'generated?')))
                                B1601['get-setter'](symbolT__1675, 'generated?', true);
                            return(symbolT__1675);
                        }
                    }
                }
            }
        };
        ($module)['%export']('resolve-symbol', ($module)['resolve-symbol']);
    }
    B1601['%annotate-function'](($module)['resolve-symbol'], 'resolve-symbol', false);
}
{
    {
        ($module)['qualify-symbol'] = function B1677(symbol__1678, env__1679) {
            var symbolT__1680 = B1601['%%symbol'](B1601['get'](symbol__1678, 'name'), B1601['get'](env__1679, 'module', 'name'));
            {
                if (($T)(B1601['get'](symbol__1678, 'generated?')))
                    B1601['get-setter'](symbolT__1680, 'generated?', true);
                return(symbolT__1680);
            }
        };
        ($module)['%export']('qualify-symbol', ($module)['qualify-symbol']);
    }
    B1601['%annotate-function'](($module)['qualify-symbol'], 'qualify-symbol', false);
}
{
    {
        ($module)['find-import-identifier'] = function B1682(module_name__1683, env__1684) {
            return(B1601['get'](env__1684, 'import-identifiers', module_name__1683));
        };
        ($module)['%export']('find-import-identifier', ($module)['find-import-identifier']);
    }
    B1601['%annotate-function'](($module)['find-import-identifier'], 'find-import-identifier', false);
}
{
    {
        ($module)['make-import-identifier'] = function B1686(module_name__1687, env__1688) {
            var identifier__1689 = B1601['generate-symbol']();
            {
                B1601['get-setter'](env__1688, 'import-identifiers', module_name__1687, identifier__1689);
                return(identifier__1689);
            }
        };
        ($module)['%export']('make-import-identifier', ($module)['make-import-identifier']);
    }
    B1601['%annotate-function'](($module)['make-import-identifier'], 'make-import-identifier', false);
}
{
    var B1691 = $S('%define', 'ralph/core');
    {
        var B1692 = $S('%native-call', 'ralph/core');
        {
            {
                ($module)['make-import-definition'] = function B1693(module_name__1694, env__1695) {
                    return([
                        B1691,
                        ($module)['make-import-identifier'](module_name__1694, env__1695),
                        [
                            B1692,
                            'require',
                            module_name__1694
                        ]
                    ]);
                };
                ($module)['%export']('make-import-definition', ($module)['make-import-definition']);
            }
            B1601['%annotate-function'](($module)['make-import-definition'], 'make-import-definition', false);
        }
    }
}
{
    ($module)['%eval'] = function B1697() {
        return(eval((arguments[0])));
    };
    {
        B1601['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
