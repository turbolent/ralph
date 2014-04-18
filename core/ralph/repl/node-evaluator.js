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
    var B68 = require('ralph/repl/evaluator');
    {
        var B69 = require('ws');
        var B70 = require('vm');
    }
}
{
    ($module)['<node-evaluator>'] = B8['%make-class'](B68['<evaluator>'], {}, function Lnode_evaluatorG__71() {
        return(false);
    });
    ($module)['%export']('<node-evaluator>', ($module)['<node-evaluator>']);
}
($module)['evaluate'] = B8['%make-method']('evaluate', function B74(evaluator__75, code__76) {
    var B77 = evaluator__75;
    {
        var context__78 = B77['context'];
        return(B70['runInContext'](code__76, context__78));
    }
}, false, ($module)['<node-evaluator>'], ($module)['evaluate']);
($module)['send-data'] = B8['%make-method']('send-data', function B82(evaluator__83, data__84) {
    var B85 = B8['get'](evaluator__83, 'connection');
    {
        var B86 = data__84;
        return(B85['send'](B86));
    }
}, false, ($module)['<node-evaluator>'], ($module)['send-data']);
($module)['prepare-evaluator'] = B8['%make-method']('prepare-evaluator', function B88(evaluator__89) {
    return(B8['get-setter'](evaluator__89, 'context', ($module)['make-context']({ '$changeModule': B8['curry'](B68['change-module'], evaluator__89) })));
}, false, ($module)['<node-evaluator>'], ($module)['prepare-evaluator']);
($module)['inject-commands!'] = B8['%make-method']('inject-commands!', function B91(evaluator__92) {
    return(($module)['evaluate'](evaluator__92, '$moduleRoot[\'%in-module\'] = $changeModule'));
}, false, ($module)['<node-evaluator>'], ($module)['inject-commands!']);
($module)['connect-to-interactor'] = B8['%make-method']('connect-to-interactor', function B97(evaluator__98, url__99) {
    var connection__100 = B69['connect'](url__99);
    {
        B8['get-setter'](evaluator__98, 'connection', connection__100);
        {
            var B101 = connection__100;
            {
                var B102 = 'message';
                {
                    var B103 = B8['curry'](B68['handle-message'], evaluator__98);
                    return(B101['on'](B102, B103));
                }
            }
        }
    }
}, false, ($module)['<node-evaluator>'], ($module)['connect-to-interactor']);
{
    ($module)['make-context'] = function B105(sandbox__106) {
        var context__107 = B70['createContext'](sandbox__106);
        {
            B8['extend!'](context__107, (global));
            {
                B8['get-setter'](context__107, 'global', context__107);
                {
                    B8['get-setter'](context__107, 'global', 'global', context__107);
                    {
                        B8['get-setter'](context__107, 'module', ($module)['module']);
                        {
                            B8['get-setter'](context__107, 'module', (module));
                            {
                                B8['get-setter'](context__107, 'require', (require));
                                {
                                    B8['get-setter'](context__107, 'exports', B8['make-plain-object']());
                                    return(context__107);
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
