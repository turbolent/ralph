require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B3(name__4, value__5) {
            var B7 = (exports);
            return(B7[name__4] = value__5);
        };
        {
            ($module)['%eval'] = function B6() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B8 = require('ralph/core');
{
    var B9 = require('ralph/format');
    {
        var B10 = require('ws');
        var B11 = require('vm');
    }
}
{
    ($module)['<evaluator>'] = B8['%make-class'](B8['<object>'], {}, function LevaluatorG__12() {
        return(false);
    });
    ($module)['%export']('<evaluator>', ($module)['<evaluator>']);
}
($module)['$handlers'] = B8['make-plain-object']();
{
    ($module)['eval-in-context'] = function B14(evaluator__15, code__16) {
        return(B11['runInContext'](code__16, B8['get'](evaluator__15, 'context')));
    };
    B8['%annotate-function'](($module)['eval-in-context'], 'eval-in-context', false);
}
B8['get-setter'](($module)['$handlers'], 'change-module', function B19(evaluator__20, message__21) {
    var B22 = message__21;
    {
        var name__23 = B22['name'];
        return(($module)['perform-module-change'](evaluator__20, name__23));
    }
});
{
    ($module)['perform-module-change'] = function B25(evaluator__26, name__27) {
        var eval__28 = B8['get'](evaluator__26, 'evals', name__27);
        {
            if (($T)(B8['not'](eval__28))) {
                var exports__29 = ($module)['eval-in-context'](evaluator__26, B9['format-to-string']('require(\'%s\')', name__27));
                {
                    eval__28 = B8['get'](exports__29, '%eval');
                    B8['get-setter'](evaluator__26, 'evals', name__27, eval__28);
                }
            }
            return(B8['get-setter'](evaluator__26, 'current-eval', eval__28));
        }
    };
    B8['%annotate-function'](($module)['perform-module-change'], 'perform-module-change', false);
}
B8['get-setter'](($module)['$handlers'], 'eval-in-module', function B34(evaluator__35, message__36) {
    var B37 = message__36;
    {
        var code__38 = B37['code'];
        {
            var B39 = evaluator__35;
            {
                var current_eval__40 = B39['current-eval'];
                try {
                    {
                        var result__41 = current_eval__40(code__38);
                        return(($module)['send-command'](evaluator__35, 'result', 'result', B8['description'](result__41)));
                    }
                } catch (B42) {
                    if (($T)(B8['instance?'](B42, B8['<error>']))) {
                        var condition__43 = B42;
                        return(($module)['send-command'](evaluator__35, 'exception', 'stack', B8['get'](condition__43, 'stack')));
                    } else
                        return(false);
                }
            }
        }
    }
});
{
    ($module)['send-command'] = function B47(evaluator__48, type__49) {
        var data__50 = $SL.call(arguments, 2);
        {
            var B51 = B8['get'](evaluator__48, 'connection');
            {
                var B52 = B8['as-json'](B8['apply'](B8['make-object'], 'type', type__49, data__50));
                return(B51['send'](B52));
            }
        }
    };
    B8['%annotate-function'](($module)['send-command'], 'send-command', false);
}
{
    ($module)['handle-message'] = function B55(evaluator__56, serialized_message__57) {
        var message__58 = B8['parse-json'](serialized_message__57);
        {
            var B59 = B8['get'](($module)['$handlers'], B8['get'](message__58, 'type'));
            if (($T)(B59)) {
                var handler__60 = B59;
                return(handler__60(evaluator__56, message__58));
            } else
                return(false);
        }
    };
    B8['%annotate-function'](($module)['handle-message'], 'handle-message', false);
}
{
    ($module)['inject-commands!'] = function B62(evaluator__63) {
        return(($module)['eval-in-context'](evaluator__63, '$moduleRoot[\'%in-module\'] = $changeModule'));
    };
    B8['%annotate-function'](($module)['inject-commands!'], 'inject-commands!', false);
}
{
    ($module)['change-module'] = function B65(evaluator__66, name__67) {
        ($module)['perform-module-change'](evaluator__66, name__67);
        return(($module)['send-command'](evaluator__66, 'change-module', 'name', name__67));
    };
    B8['%annotate-function'](($module)['change-module'], 'change-module', false);
}
{
    {
        ($module)['start-evaluator'] = function B72(evaluator__73, url__74) {
            B8['get-setter'](evaluator__73, 'context', ($module)['make-context']({ '$changeModule': B8['curry'](($module)['change-module'], evaluator__73) }));
            {
                ($module)['inject-commands!'](evaluator__73);
                {
                    var connection__75 = B10['connect'](url__74);
                    {
                        B8['get-setter'](evaluator__73, 'connection', connection__75);
                        {
                            var B76 = connection__75;
                            {
                                var B77 = 'message';
                                {
                                    var B78 = B8['curry'](($module)['handle-message'], evaluator__73);
                                    return(B76['on'](B77, B78));
                                }
                            }
                        }
                    }
                }
            }
        };
        ($module)['%export']('start-evaluator', ($module)['start-evaluator']);
    }
    B8['%annotate-function'](($module)['start-evaluator'], 'start-evaluator', false);
}
{
    ($module)['make-context'] = function B80(sandbox__81) {
        var context__82 = B11['createContext'](sandbox__81);
        {
            B8['extend!'](context__82, (global));
            {
                B8['get-setter'](context__82, 'global', context__82);
                {
                    B8['get-setter'](context__82, 'global', 'global', context__82);
                    {
                        B8['get-setter'](context__82, 'module', ($module)['module']);
                        {
                            B8['get-setter'](context__82, 'module', (module));
                            {
                                B8['get-setter'](context__82, 'require', (require));
                                {
                                    B8['get-setter'](context__82, 'exports', B8['make-plain-object']());
                                    return(context__82);
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    B8['%annotate-function'](($module)['make-context'], 'make-context', false);
}
