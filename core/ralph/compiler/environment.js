var B1669 = require('ralph/core');
var B1671 = require('ralph/compiler/module');
{
    var ralphScoreCCMvar = B1669['%var'], ralphScoreCCMmake_class = B1669['%make-class'], ralphScoreCCLobjectG = B1669['<object>'], ralphScoreCCmake_plain_object = B1669['make-plain-object'], LenvironmentG__1683 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {
            'module': false,
            'macros': function B1677() {
                return(ralphScoreCCmake_plain_object());
            },
            'symbol-macros': function B1678() {
                return(ralphScoreCCmake_plain_object());
            },
            'special-forms': function B1679() {
                return(ralphScoreCCmake_plain_object());
            },
            'binding-count': function B1680() {
                return(ralphScoreCCmake_plain_object());
            },
            'global-bindings': function B1681() {
                return(ralphScoreCCmake_plain_object());
            }
        }, function LenvironmentG__1682() {
            var B1684 = (this);
            B1684['module'] = (undefined);
            var B1685 = (this);
            B1685['macros'] = (undefined);
            var B1686 = (this);
            B1686['symbol-macros'] = (undefined);
            var B1687 = (this);
            B1687['special-forms'] = (undefined);
            var B1688 = (this);
            B1688['binding-count'] = (undefined);
            var B1689 = (this);
            return(B1689['global-bindings'] = (undefined));
        });
    (exports)['<environment>'] = LenvironmentG__1683;
}
var ralphScoreCCMmake_function = B1669['%make-function'], ralphScoreCCnot = B1669['not'], ralphScoreCCsymbol_name = B1669['symbol-name'], find_expander__1697 = ralphScoreCCMmake_function('find_expander', function B1691(namespace__1692, check_boundQ__1693, identifier__1694, env__1695) {
        var B1698 = false;
        if (($T)(check_boundQ__1693))
            B1698 = boundQ__1696(identifier__1694, env__1695);
        else
            B1698 = false;
        var B1699 = ralphScoreCCnot(B1698);
        if (($T)(B1699))
            return(env__1695[namespace__1692][ralphScoreCCsymbol_name(identifier__1694)]);
        else
            return(false);
    }, false);
{
    var ralphScoreCCcurry = B1669['curry'], find_macro__1700 = ralphScoreCCcurry(find_expander__1697, 'macros', true);
    (exports)['find-macro'] = find_macro__1700;
}
{
    var find_symbol_macro__1701 = ralphScoreCCcurry(find_expander__1697, 'symbol-macros', true);
    (exports)['find-symbol-macro'] = find_symbol_macro__1701;
}
{
    var find_special_form__1702 = ralphScoreCCcurry(find_expander__1697, 'special-forms', false);
    (exports)['find-special-form'] = find_special_form__1702;
}
{
    var ralphScoreCCtrueQ = B1669['true?'], ralphScoreCCget = B1669['get'], special_operatorQ__1707 = ralphScoreCCMmake_function('special_operatorQ', function B1704(identifier__1705, env__1706) {
            return(ralphScoreCCtrueQ(ralphScoreCCget(env__1706, 'special-forms')[ralphScoreCCsymbol_name(identifier__1705)]));
        }, false);
    (exports)['special-operator?'] = special_operatorQ__1707;
}
{
    var ralphScoreCCget_setter = B1669['get-setter'], bind_globallyN__1712 = ralphScoreCCMmake_function('bind_globallyN', function B1709(identifier__1710, env__1711) {
            return(ralphScoreCCget_setter(env__1711, 'global-bindings', ralphScoreCCsymbol_name(identifier__1710), true));
        }, false);
    (exports)['bind-globally!'] = bind_globallyN__1712;
}
{
    var globally_boundQ__1717 = ralphScoreCCMmake_function('globally_boundQ', function B1714(identifier__1715, env__1716) {
            return(ralphScoreCCget(env__1716, 'global-bindings', ralphScoreCCsymbol_name(identifier__1715)));
        }, false);
    (exports)['globally-bound?'] = globally_boundQ__1717;
}
{
    var ralphScoreCCP = B1669['+'], bindN__1722 = ralphScoreCCMmake_function('bindN', function B1719(identifier__1720, env__1721) {
            return(ralphScoreCCget_setter(env__1721, 'binding-count', ralphScoreCCsymbol_name(identifier__1720), ralphScoreCCP(ralphScoreCCget(env__1721, 'binding-count', ralphScoreCCsymbol_name(identifier__1720)), 1)));
        }, false);
    (exports)['bind!'] = bindN__1722;
}
{
    var ralphScoreCCG = B1669['>'], boundQ__1696 = ralphScoreCCMmake_function('boundQ', function B1726(identifier__1727, env__1728) {
            var B1729 = globally_boundQ__1717(identifier__1727, env__1728);
            if (($T)(B1729))
                return(B1729);
            else {
                var B1730 = ralphScoreCCget(env__1728, 'binding-count', ralphScoreCCsymbol_name(identifier__1727));
                if (($T)(B1730)) {
                    var count__1731 = B1730;
                    return(ralphScoreCCG(count__1731, 0));
                } else
                    return(false);
            }
        }, false);
    (exports)['bound?'] = boundQ__1696;
}
{
    var ralphScoreCC_ = B1669['-'], unbindN__1736 = ralphScoreCCMmake_function('unbindN', function B1733(identifier__1734, env__1735) {
            return(ralphScoreCCget_setter(env__1735, 'binding-count', ralphScoreCCsymbol_name(identifier__1734), ralphScoreCC_(ralphScoreCCget(env__1735, 'binding-count', ralphScoreCCsymbol_name(identifier__1734)), 1)));
        }, false);
    (exports)['unbind!'] = unbindN__1736;
}
{
    var ralphScoreCCMkeys = B1669['%keys'], ralphScompilerSmoduleCCfind_moduleSimport_name = B1671['find-module/import-name'], ralphScoreCCMMsymbol = B1669['%%symbol'], resolve_symbol__1754 = ralphScoreCCMmake_function('resolve_symbol', function B1742(symbol__1743, env__1744) {
            var B1745 = $SL.call(arguments, 2), B1746 = ralphScoreCCMkeys(B1745, { 'import-guard': false }), import_guard__1747 = B1746['import-guard'];
            if (($T)(ralphScoreCCget(symbol__1743, 'module')))
                return(symbol__1743);
            else {
                var name__1748 = ralphScoreCCsymbol_name(symbol__1743), B1749 = ralphScoreCCnot(import_guard__1747), B1755 = false;
                if (($T)(B1749))
                    B1755 = B1749;
                else
                    B1755 = import_guard__1747(symbol__1743, env__1744);
                var B1750 = false;
                if (($T)(B1755))
                    B1750 = ralphScompilerSmoduleCCfind_moduleSimport_name(name__1748, ralphScoreCCget(env__1744, 'module'));
                else
                    B1750 = false;
                if (($T)(B1750)) {
                    var moduleSimport_name__1751 = B1750, module__1752 = moduleSimport_name__1751[0], import_name__1753 = moduleSimport_name__1751[1];
                    return(ralphScoreCCMMsymbol(import_name__1753, ralphScoreCCget(module__1752, 'name')));
                } else
                    return(ralphScoreCCMMsymbol(name__1748, ralphScoreCCget(env__1744, 'module', 'name')));
            }
        }, false);
    (exports)['resolve-symbol'] = resolve_symbol__1754;
}
{
    var find_import_identifier__1760 = ralphScoreCCMmake_function('find_import_identifier', function B1757(module_name__1758, env__1759) {
            return(ralphScoreCCget(env__1759, 'import-identifiers', module_name__1758));
        }, false);
    (exports)['find-import-identifier'] = find_import_identifier__1760;
}
{
    var ralphScoreCCgenerate_symbol = B1669['generate-symbol'], make_import_identifier__1766 = ralphScoreCCMmake_function('make_import_identifier', function B1762(module_name__1763, env__1764) {
            var identifier__1765 = ralphScoreCCgenerate_symbol(env__1764);
            ralphScoreCCget_setter(env__1764, 'import-identifiers', module_name__1763, identifier__1765);
            return(identifier__1765);
        }, false);
    (exports)['make-import-identifier'] = make_import_identifier__1766;
}
{
    var B1770 = $S('%define', 'ralph/core'), B1771 = $S('%native-call', 'ralph/core'), make_import_definition__1775 = ralphScoreCCMmake_function('make_import_definition', function B1772(module_name__1773, env__1774) {
            return([
                B1770,
                make_import_identifier__1766(module_name__1773, env__1774),
                [
                    B1771,
                    'require',
                    module_name__1773
                ]
            ]);
        }, false);
    (exports)['make-import-definition'] = make_import_definition__1775;
}
