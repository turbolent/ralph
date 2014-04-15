require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1612(name__1613, value__1614) {
            var B1616 = (exports);
            return(B1616[name__1613] = value__1614);
        };
        {
            ($module)['%eval'] = function B1615() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1617 = require('ralph/core');
var B1618 = require('ralph/compiler/module');
{
    ($module)['<environment>'] = B1617['%make-class'](B1617['<object>'], {
        'module': false,
        'macros': function B1624() {
            return(B1617['make-plain-object']());
        },
        'symbol-macros': function B1625() {
            return(B1617['make-plain-object']());
        },
        'special-forms': function B1626() {
            return(B1617['make-plain-object']());
        },
        'binding-count': function B1627() {
            return(B1617['make-plain-object']());
        },
        'global-bindings': function B1628() {
            return(B1617['make-plain-object']());
        }
    }, function LenvironmentG__1629() {
        var B1630 = (this);
        {
            B1630['module'] = (undefined);
            {
                var B1631 = (this);
                {
                    B1631['macros'] = (undefined);
                    {
                        var B1632 = (this);
                        {
                            B1632['symbol-macros'] = (undefined);
                            {
                                var B1633 = (this);
                                {
                                    B1633['special-forms'] = (undefined);
                                    {
                                        var B1634 = (this);
                                        {
                                            B1634['binding-count'] = (undefined);
                                            {
                                                var B1635 = (this);
                                                return(B1635['global-bindings'] = (undefined));
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
    ($module)['find-expander'] = function B1637(namespace__1638, check_boundQ__1639, identifier__1640, env__1641) {
        var B1642 = B1617['not'];
        {
            var B1643 = false;
            if (($T)(check_boundQ__1639))
                B1643 = ($module)['bound?'](identifier__1640, env__1641);
            else
                B1643 = false;
            {
                var B1644 = B1642(B1643);
                if (($T)(B1644))
                    return(env__1641[namespace__1638][B1617['symbol-name'](identifier__1640)]);
                else
                    return(false);
            }
        }
    };
    B1617['%annotate-function'](($module)['find-expander'], 'find-expander', false);
}
{
    ($module)['find-macro'] = B1617['curry'](($module)['find-expander'], 'macros', true);
    ($module)['%export']('find-macro', ($module)['find-macro']);
}
{
    ($module)['find-symbol-macro'] = B1617['curry'](($module)['find-expander'], 'symbol-macros', true);
    ($module)['%export']('find-symbol-macro', ($module)['find-symbol-macro']);
}
{
    ($module)['find-special-form'] = B1617['curry'](($module)['find-expander'], 'special-forms', false);
    ($module)['%export']('find-special-form', ($module)['find-special-form']);
}
{
    {
        ($module)['special-operator?'] = function B1646(identifier__1647, env__1648) {
            return(B1617['true?'](B1617['get'](env__1648, 'special-forms')[B1617['symbol-name'](identifier__1647)]));
        };
        ($module)['%export']('special-operator?', ($module)['special-operator?']);
    }
    B1617['%annotate-function'](($module)['special-operator?'], 'special-operator?', false);
}
{
    {
        ($module)['bind-globally!'] = function B1650(identifier__1651, env__1652) {
            return(B1617['get-setter'](env__1652, 'global-bindings', B1617['symbol-name'](identifier__1651), true));
        };
        ($module)['%export']('bind-globally!', ($module)['bind-globally!']);
    }
    B1617['%annotate-function'](($module)['bind-globally!'], 'bind-globally!', false);
}
{
    {
        ($module)['globally-bound?'] = function B1654(identifier__1655, env__1656) {
            return(B1617['get'](env__1656, 'global-bindings', B1617['symbol-name'](identifier__1655)));
        };
        ($module)['%export']('globally-bound?', ($module)['globally-bound?']);
    }
    B1617['%annotate-function'](($module)['globally-bound?'], 'globally-bound?', false);
}
{
    {
        ($module)['bind-locally!'] = function B1658(identifier__1659, env__1660) {
            var name__1661 = B1617['symbol-name'](identifier__1659);
            return(B1617['get-setter'](env__1660, 'binding-count', name__1661, B1617['+'](B1617['get'](env__1660, 'binding-count', name__1661), 1)));
        };
        ($module)['%export']('bind-locally!', ($module)['bind-locally!']);
    }
    B1617['%annotate-function'](($module)['bind-locally!'], 'bind-locally!', false);
}
{
    {
        ($module)['bound?'] = function B1664(identifier__1665, env__1666) {
            var B1667 = ($module)['globally-bound?'](identifier__1665, env__1666);
            if (($T)(B1667))
                return(B1667);
            else
                return(($module)['locally-bound?'](identifier__1665, env__1666));
        };
        ($module)['%export']('bound?', ($module)['bound?']);
    }
    B1617['%annotate-function'](($module)['bound?'], 'bound?', false);
}
{
    {
        ($module)['locally-bound?'] = function B1670(identifier__1671, env__1672) {
            var name__1673 = B1617['symbol-name'](identifier__1671);
            {
                var B1674 = B1617['get'](env__1672, 'binding-count', name__1673);
                if (($T)(B1674)) {
                    var count__1675 = B1674;
                    return(B1617['>'](count__1675, 0));
                } else
                    return(false);
            }
        };
        ($module)['%export']('locally-bound?', ($module)['locally-bound?']);
    }
    B1617['%annotate-function'](($module)['locally-bound?'], 'locally-bound?', false);
}
{
    {
        ($module)['unbind-locally!'] = function B1677(identifier__1678, env__1679) {
            var name__1680 = B1617['symbol-name'](identifier__1678);
            return(B1617['get-setter'](env__1679, 'binding-count', name__1680, B1617['-'](B1617['get'](env__1679, 'binding-count', name__1680), 1)));
        };
        ($module)['%export']('unbind-locally!', ($module)['unbind-locally!']);
    }
    B1617['%annotate-function'](($module)['unbind-locally!'], 'unbind-locally!', false);
}
{
    {
        ($module)['resolve-symbol'] = function B1683(symbol__1684, env__1685) {
            if (($T)(B1617['get'](symbol__1684, 'module')))
                return(symbol__1684);
            else {
                var name__1686 = B1617['symbol-name'](symbol__1684);
                {
                    var B1687 = false;
                    if (($T)(B1617['not'](($module)['globally-bound?'](symbol__1684, env__1685))))
                        B1687 = B1618['find-module/import-name'](name__1686, B1617['get'](env__1685, 'module'));
                    else
                        B1687 = false;
                    {
                        var symbolT__1691 = false;
                        if (($T)(B1687)) {
                            var moduleSimport_name__1688 = B1687;
                            {
                                var module__1689 = moduleSimport_name__1688[0];
                                {
                                    var import_name__1690 = moduleSimport_name__1688[1];
                                    symbolT__1691 = B1617['%%symbol'](import_name__1690, B1617['get'](module__1689, 'name'));
                                }
                            }
                        } else
                            symbolT__1691 = B1617['%%symbol'](name__1686, B1617['get'](env__1685, 'module', 'name'));
                        {
                            if (($T)(B1617['get'](symbol__1684, 'generated?')))
                                B1617['get-setter'](symbolT__1691, 'generated?', true);
                            return(symbolT__1691);
                        }
                    }
                }
            }
        };
        ($module)['%export']('resolve-symbol', ($module)['resolve-symbol']);
    }
    B1617['%annotate-function'](($module)['resolve-symbol'], 'resolve-symbol', false);
}
{
    {
        ($module)['qualify-symbol'] = function B1693(symbol__1694, env__1695) {
            var symbolT__1696 = B1617['%%symbol'](B1617['get'](symbol__1694, 'name'), B1617['get'](env__1695, 'module', 'name'));
            {
                if (($T)(B1617['get'](symbol__1694, 'generated?')))
                    B1617['get-setter'](symbolT__1696, 'generated?', true);
                return(symbolT__1696);
            }
        };
        ($module)['%export']('qualify-symbol', ($module)['qualify-symbol']);
    }
    B1617['%annotate-function'](($module)['qualify-symbol'], 'qualify-symbol', false);
}
{
    {
        ($module)['find-import-identifier'] = function B1698(module_name__1699, env__1700) {
            return(B1617['get'](env__1700, 'import-identifiers', module_name__1699));
        };
        ($module)['%export']('find-import-identifier', ($module)['find-import-identifier']);
    }
    B1617['%annotate-function'](($module)['find-import-identifier'], 'find-import-identifier', false);
}
{
    {
        ($module)['make-import-identifier'] = function B1702(module_name__1703, env__1704) {
            var identifier__1705 = B1617['generate-symbol']();
            {
                B1617['get-setter'](env__1704, 'import-identifiers', module_name__1703, identifier__1705);
                return(identifier__1705);
            }
        };
        ($module)['%export']('make-import-identifier', ($module)['make-import-identifier']);
    }
    B1617['%annotate-function'](($module)['make-import-identifier'], 'make-import-identifier', false);
}
{
    var B1707 = $S('%define', 'ralph/core');
    {
        var B1708 = $S('%native-call', 'ralph/core');
        {
            {
                ($module)['make-import-definition'] = function B1709(module_name__1710, env__1711) {
                    return([
                        B1707,
                        ($module)['make-import-identifier'](module_name__1710, env__1711),
                        [
                            B1708,
                            'require',
                            module_name__1710
                        ]
                    ]);
                };
                ($module)['%export']('make-import-definition', ($module)['make-import-definition']);
            }
            B1617['%annotate-function'](($module)['make-import-definition'], 'make-import-definition', false);
        }
    }
}
