{
    var B1662 = require('ralph/core');
}
{
    var B1664 = require('ralph/compiler/module');
}
{
    {
        var ralphScoreCCMvar = B1662['%var'];
        var ralphScoreCCMmake_class = B1662['%make-class'];
        var ralphScoreCCLobjectG = B1662['<object>'];
        var ralphScoreCCmake_plain_object = B1662['make-plain-object'];
        var LenvironmentG__1676 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {
                'module': false,
                'macros': function B1670() {
                    return(ralphScoreCCmake_plain_object());
                },
                'symbol-macros': function B1671() {
                    return(ralphScoreCCmake_plain_object());
                },
                'special-forms': function B1672() {
                    return(ralphScoreCCmake_plain_object());
                },
                'binding-count': function B1673() {
                    return(ralphScoreCCmake_plain_object());
                },
                'global-bindings': function B1674() {
                    return(ralphScoreCCmake_plain_object());
                }
            }, function LenvironmentG__1675() {
                {
                    var B1677 = (this);
                }
                B1677['module'] = (undefined);
                {
                    var B1678 = (this);
                }
                B1678['macros'] = (undefined);
                {
                    var B1679 = (this);
                }
                B1679['symbol-macros'] = (undefined);
                {
                    var B1680 = (this);
                }
                B1680['special-forms'] = (undefined);
                {
                    var B1681 = (this);
                }
                B1681['binding-count'] = (undefined);
                {
                    var B1682 = (this);
                }
                return(B1682['global-bindings'] = (undefined));
            });
    }
    (exports)['<environment>'] = LenvironmentG__1676;
}
{
    {
        var ralphScoreCCnot = B1662['not'];
        var ralphScoreCCsymbol_name = B1662['symbol-name'];
        var ralphScoreCCMannotate_function = B1662['%annotate-function'];
        var find_expander__1690 = function B1684(namespace__1685, check_boundQ__1686, identifier__1687, env__1688) {
            {
                var B1691 = false;
            }
            if (($T)(check_boundQ__1686))
                B1691 = boundQ__1689(identifier__1687, env__1688);
            else
                B1691 = false;
            {
                var B1692 = ralphScoreCCnot(B1691);
            }
            if (($T)(B1692))
                return(env__1688[namespace__1685][ralphScoreCCsymbol_name(identifier__1687)]);
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(find_expander__1690, 'find_expander', false);
}
{
    {
        var ralphScoreCCcurry = B1662['curry'];
        var find_macro__1693 = ralphScoreCCcurry(find_expander__1690, 'macros', true);
    }
    (exports)['find-macro'] = find_macro__1693;
}
{
    {
        var find_symbol_macro__1694 = ralphScoreCCcurry(find_expander__1690, 'symbol-macros', true);
    }
    (exports)['find-symbol-macro'] = find_symbol_macro__1694;
}
{
    {
        var find_special_form__1695 = ralphScoreCCcurry(find_expander__1690, 'special-forms', false);
    }
    (exports)['find-special-form'] = find_special_form__1695;
}
{
    {
        var ralphScoreCCtrueQ = B1662['true?'];
        var ralphScoreCCget = B1662['get'];
        var special_operatorQ__1700 = function B1697(identifier__1698, env__1699) {
            return(ralphScoreCCtrueQ(ralphScoreCCget(env__1699, 'special-forms')[ralphScoreCCsymbol_name(identifier__1698)]));
        };
    }
    (exports)['special-operator?'] = special_operatorQ__1700;
    ralphScoreCCMannotate_function(special_operatorQ__1700, 'special_operatorQ', false);
}
{
    {
        var ralphScoreCCget_setter = B1662['get-setter'];
        var bind_globallyN__1705 = function B1702(identifier__1703, env__1704) {
            return(ralphScoreCCget_setter(env__1704, 'global-bindings', ralphScoreCCsymbol_name(identifier__1703), true));
        };
    }
    (exports)['bind-globally!'] = bind_globallyN__1705;
    ralphScoreCCMannotate_function(bind_globallyN__1705, 'bind_globallyN', false);
}
{
    {
        var globally_boundQ__1710 = function B1707(identifier__1708, env__1709) {
            return(ralphScoreCCget(env__1709, 'global-bindings', ralphScoreCCsymbol_name(identifier__1708)));
        };
    }
    (exports)['globally-bound?'] = globally_boundQ__1710;
    ralphScoreCCMannotate_function(globally_boundQ__1710, 'globally_boundQ', false);
}
{
    {
        var ralphScoreCCP = B1662['+'];
        var bindN__1715 = function B1712(identifier__1713, env__1714) {
            return(ralphScoreCCget_setter(env__1714, 'binding-count', ralphScoreCCsymbol_name(identifier__1713), ralphScoreCCP(ralphScoreCCget(env__1714, 'binding-count', ralphScoreCCsymbol_name(identifier__1713)), 1)));
        };
    }
    (exports)['bind!'] = bindN__1715;
    ralphScoreCCMannotate_function(bindN__1715, 'bindN', false);
}
{
    {
        var ralphScoreCCG = B1662['>'];
        var boundQ__1689 = function B1719(identifier__1720, env__1721) {
            {
                var B1722 = globally_boundQ__1710(identifier__1720, env__1721);
            }
            if (($T)(B1722))
                return(B1722);
            else {
                {
                    var B1723 = ralphScoreCCget(env__1721, 'binding-count', ralphScoreCCsymbol_name(identifier__1720));
                }
                if (($T)(B1723)) {
                    {
                        var count__1724 = B1723;
                    }
                    return(ralphScoreCCG(count__1724, 0));
                } else
                    return(false);
            }
        };
    }
    (exports)['bound?'] = boundQ__1689;
    ralphScoreCCMannotate_function(boundQ__1689, 'boundQ', false);
}
{
    {
        var ralphScoreCC_ = B1662['-'];
        var unbindN__1729 = function B1726(identifier__1727, env__1728) {
            return(ralphScoreCCget_setter(env__1728, 'binding-count', ralphScoreCCsymbol_name(identifier__1727), ralphScoreCC_(ralphScoreCCget(env__1728, 'binding-count', ralphScoreCCsymbol_name(identifier__1727)), 1)));
        };
    }
    (exports)['unbind!'] = unbindN__1729;
    ralphScoreCCMannotate_function(unbindN__1729, 'unbindN', false);
}
{
    {
        var ralphScoreCCMkeys = B1662['%keys'];
        var ralphScompilerSmoduleCCfind_moduleSimport_name = B1664['find-module/import-name'];
        var ralphScoreCCMMsymbol = B1662['%%symbol'];
        var resolve_symbol__1747 = function B1735(symbol__1736, env__1737) {
            {
                var B1738 = $SL.call(arguments, 2);
                var B1739 = ralphScoreCCMkeys(B1738, { 'import-guard': false });
                var import_guard__1740 = B1739['import-guard'];
            }
            if (($T)(ralphScoreCCget(symbol__1736, 'module')))
                return(symbol__1736);
            else {
                {
                    var name__1741 = ralphScoreCCsymbol_name(symbol__1736);
                    var B1742 = ralphScoreCCnot(import_guard__1740);
                    var B1748 = false;
                }
                if (($T)(B1742))
                    B1748 = B1742;
                else
                    B1748 = import_guard__1740(symbol__1736, env__1737);
                {
                    var B1743 = false;
                }
                if (($T)(B1748))
                    B1743 = ralphScompilerSmoduleCCfind_moduleSimport_name(name__1741, ralphScoreCCget(env__1737, 'module'));
                else
                    B1743 = false;
                if (($T)(B1743)) {
                    {
                        var moduleSimport_name__1744 = B1743;
                        var module__1745 = moduleSimport_name__1744[0];
                        var import_name__1746 = moduleSimport_name__1744[1];
                    }
                    return(ralphScoreCCMMsymbol(import_name__1746, ralphScoreCCget(module__1745, 'name')));
                } else
                    return(ralphScoreCCMMsymbol(name__1741, ralphScoreCCget(env__1737, 'module', 'name')));
            }
        };
    }
    (exports)['resolve-symbol'] = resolve_symbol__1747;
    ralphScoreCCMannotate_function(resolve_symbol__1747, 'resolve_symbol', false);
}
{
    {
        var find_import_identifier__1753 = function B1750(module_name__1751, env__1752) {
            return(ralphScoreCCget(env__1752, 'import-identifiers', module_name__1751));
        };
    }
    (exports)['find-import-identifier'] = find_import_identifier__1753;
    ralphScoreCCMannotate_function(find_import_identifier__1753, 'find_import_identifier', false);
}
{
    {
        var ralphScoreCCgenerate_symbol = B1662['generate-symbol'];
        var make_import_identifier__1759 = function B1755(module_name__1756, env__1757) {
            {
                var identifier__1758 = ralphScoreCCgenerate_symbol(env__1757);
            }
            ralphScoreCCget_setter(env__1757, 'import-identifiers', module_name__1756, identifier__1758);
            return(identifier__1758);
        };
    }
    (exports)['make-import-identifier'] = make_import_identifier__1759;
    ralphScoreCCMannotate_function(make_import_identifier__1759, 'make_import_identifier', false);
}
{
    {
        var B1763 = $S('%define', 'ralph/core');
        var B1764 = $S('%native-call', 'ralph/core');
        var make_import_definition__1768 = function B1765(module_name__1766, env__1767) {
            return([
                B1763,
                make_import_identifier__1759(module_name__1766, env__1767),
                [
                    B1764,
                    'require',
                    module_name__1766
                ]
            ]);
        };
    }
    (exports)['make-import-definition'] = make_import_definition__1768;
    ralphScoreCCMannotate_function(make_import_definition__1768, 'make_import_definition', false);
}
