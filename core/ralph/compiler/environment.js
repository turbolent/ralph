{
    var B38 = require('ralph/core');
}
{
    var B40 = require('ralph/compiler/module');
}
{
    {
        var ralphScoreCCMvar = B38['%var'];
        var ralphScoreCCMmake_class = B38['%make-class'];
        var ralphScoreCCLobjectG = B38['<object>'];
        var ralphScoreCCmake_plain_object = B38['make-plain-object'];
        var LenvironmentG__52 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {
                'module': false,
                'macros': function B46() {
                    return(ralphScoreCCmake_plain_object());
                },
                'symbol-macros': function B47() {
                    return(ralphScoreCCmake_plain_object());
                },
                'special-forms': function B48() {
                    return(ralphScoreCCmake_plain_object());
                },
                'binding-count': function B49() {
                    return(ralphScoreCCmake_plain_object());
                },
                'global-bindings': function B50() {
                    return(ralphScoreCCmake_plain_object());
                }
            }, function LenvironmentG__51() {
                {
                    var B53 = (this);
                }
                B53['module'] = (undefined);
                {
                    var B54 = (this);
                }
                B54['macros'] = (undefined);
                {
                    var B55 = (this);
                }
                B55['symbol-macros'] = (undefined);
                {
                    var B56 = (this);
                }
                B56['special-forms'] = (undefined);
                {
                    var B57 = (this);
                }
                B57['binding-count'] = (undefined);
                {
                    var B58 = (this);
                }
                return(B58['global-bindings'] = (undefined));
            });
    }
    (exports)['<environment>'] = LenvironmentG__52;
}
{
    {
        var ralphScoreCCnot = B38['not'];
        var ralphScoreCCsymbol_name = B38['symbol-name'];
        var ralphScoreCCMannotate_function = B38['%annotate-function'];
        var find_expander__66 = function B60(namespace__61, check_boundQ__62, identifier__63, env__64) {
            {
                var B67 = false;
            }
            if (($T)(check_boundQ__62))
                B67 = boundQ__65(identifier__63, env__64);
            else
                B67 = false;
            {
                var B68 = ralphScoreCCnot(B67);
            }
            if (($T)(B68))
                return(env__64[namespace__61][ralphScoreCCsymbol_name(identifier__63)]);
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(find_expander__66, 'find_expander', false);
}
{
    {
        var ralphScoreCCcurry = B38['curry'];
        var find_macro__69 = ralphScoreCCcurry(find_expander__66, 'macros', true);
    }
    (exports)['find-macro'] = find_macro__69;
}
{
    {
        var find_symbol_macro__70 = ralphScoreCCcurry(find_expander__66, 'symbol-macros', true);
    }
    (exports)['find-symbol-macro'] = find_symbol_macro__70;
}
{
    {
        var find_special_form__71 = ralphScoreCCcurry(find_expander__66, 'special-forms', false);
    }
    (exports)['find-special-form'] = find_special_form__71;
}
{
    {
        var ralphScoreCCtrueQ = B38['true?'];
        var ralphScoreCCget = B38['get'];
        var special_operatorQ__76 = function B73(identifier__74, env__75) {
            return(ralphScoreCCtrueQ(ralphScoreCCget(env__75, 'special-forms')[ralphScoreCCsymbol_name(identifier__74)]));
        };
    }
    (exports)['special-operator?'] = special_operatorQ__76;
    ralphScoreCCMannotate_function(special_operatorQ__76, 'special_operatorQ', false);
}
{
    {
        var ralphScoreCCget_setter = B38['get-setter'];
        var bind_globallyN__81 = function B78(identifier__79, env__80) {
            return(ralphScoreCCget_setter(env__80, 'global-bindings', ralphScoreCCsymbol_name(identifier__79), true));
        };
    }
    (exports)['bind-globally!'] = bind_globallyN__81;
    ralphScoreCCMannotate_function(bind_globallyN__81, 'bind_globallyN', false);
}
{
    {
        var globally_boundQ__86 = function B83(identifier__84, env__85) {
            return(ralphScoreCCget(env__85, 'global-bindings', ralphScoreCCsymbol_name(identifier__84)));
        };
    }
    (exports)['globally-bound?'] = globally_boundQ__86;
    ralphScoreCCMannotate_function(globally_boundQ__86, 'globally_boundQ', false);
}
{
    {
        var ralphScoreCCP = B38['+'];
        var bindN__91 = function B88(identifier__89, env__90) {
            return(ralphScoreCCget_setter(env__90, 'binding-count', ralphScoreCCsymbol_name(identifier__89), ralphScoreCCP(ralphScoreCCget(env__90, 'binding-count', ralphScoreCCsymbol_name(identifier__89)), 1)));
        };
    }
    (exports)['bind!'] = bindN__91;
    ralphScoreCCMannotate_function(bindN__91, 'bindN', false);
}
{
    {
        var ralphScoreCCG = B38['>'];
        var boundQ__65 = function B95(identifier__96, env__97) {
            {
                var B98 = globally_boundQ__86(identifier__96, env__97);
            }
            if (($T)(B98))
                return(B98);
            else {
                {
                    var B99 = ralphScoreCCget(env__97, 'binding-count', ralphScoreCCsymbol_name(identifier__96));
                }
                if (($T)(B99)) {
                    {
                        var count__100 = B99;
                    }
                    return(ralphScoreCCG(count__100, 0));
                } else
                    return(false);
            }
        };
    }
    (exports)['bound?'] = boundQ__65;
    ralphScoreCCMannotate_function(boundQ__65, 'boundQ', false);
}
{
    {
        var ralphScoreCC_ = B38['-'];
        var unbindN__105 = function B102(identifier__103, env__104) {
            return(ralphScoreCCget_setter(env__104, 'binding-count', ralphScoreCCsymbol_name(identifier__103), ralphScoreCC_(ralphScoreCCget(env__104, 'binding-count', ralphScoreCCsymbol_name(identifier__103)), 1)));
        };
    }
    (exports)['unbind!'] = unbindN__105;
    ralphScoreCCMannotate_function(unbindN__105, 'unbindN', false);
}
{
    {
        var ralphScoreCCMkeys = B38['%keys'];
        var ralphScompilerSmoduleCCfind_moduleSimport_name = B40['find-module/import-name'];
        var ralphScoreCCMMsymbol = B38['%%symbol'];
        var resolve_symbol__123 = function B111(symbol__112, env__113) {
            {
                var B114 = $SL.call(arguments, 2);
                var B115 = ralphScoreCCMkeys(B114, { 'import-guard': false });
                var import_guard__116 = B115['import-guard'];
            }
            if (($T)(ralphScoreCCget(symbol__112, 'module')))
                return(symbol__112);
            else {
                {
                    var name__117 = ralphScoreCCsymbol_name(symbol__112);
                    var B118 = ralphScoreCCnot(import_guard__116);
                    var B124 = false;
                }
                if (($T)(B118))
                    B124 = B118;
                else
                    B124 = import_guard__116(symbol__112, env__113);
                {
                    var B119 = false;
                }
                if (($T)(B124))
                    B119 = ralphScompilerSmoduleCCfind_moduleSimport_name(name__117, ralphScoreCCget(env__113, 'module'));
                else
                    B119 = false;
                if (($T)(B119)) {
                    {
                        var moduleSimport_name__120 = B119;
                        var module__121 = moduleSimport_name__120[0];
                        var import_name__122 = moduleSimport_name__120[1];
                    }
                    return(ralphScoreCCMMsymbol(import_name__122, ralphScoreCCget(module__121, 'name')));
                } else
                    return(ralphScoreCCMMsymbol(name__117, ralphScoreCCget(env__113, 'module', 'name')));
            }
        };
    }
    (exports)['resolve-symbol'] = resolve_symbol__123;
    ralphScoreCCMannotate_function(resolve_symbol__123, 'resolve_symbol', false);
}
{
    {
        var find_import_identifier__129 = function B126(module_name__127, env__128) {
            return(ralphScoreCCget(env__128, 'import-identifiers', module_name__127));
        };
    }
    (exports)['find-import-identifier'] = find_import_identifier__129;
    ralphScoreCCMannotate_function(find_import_identifier__129, 'find_import_identifier', false);
}
{
    {
        var ralphScoreCCgenerate_symbol = B38['generate-symbol'];
        var make_import_identifier__135 = function B131(module_name__132, env__133) {
            {
                var identifier__134 = ralphScoreCCgenerate_symbol(env__133);
            }
            ralphScoreCCget_setter(env__133, 'import-identifiers', module_name__132, identifier__134);
            return(identifier__134);
        };
    }
    (exports)['make-import-identifier'] = make_import_identifier__135;
    ralphScoreCCMannotate_function(make_import_identifier__135, 'make_import_identifier', false);
}
{
    {
        var B139 = $S('%define', 'ralph/core');
        var B140 = $S('%native-call', 'ralph/core');
        var make_import_definition__144 = function B141(module_name__142, env__143) {
            return([
                B139,
                make_import_identifier__135(module_name__142, env__143),
                [
                    B140,
                    'require',
                    module_name__142
                ]
            ]);
        };
    }
    (exports)['make-import-definition'] = make_import_definition__144;
    ralphScoreCCMannotate_function(make_import_definition__144, 'make_import_definition', false);
}
