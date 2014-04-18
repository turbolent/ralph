require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B11(name__12, value__13) {
            var B15 = (exports);
            return(B15[name__12] = value__13);
        };
        {
            ($module)['%eval'] = function B14() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B16 = require('ralph/core');
var B17 = require('ralph/format');
{
    ($module)['<evaluator>'] = B16['%make-class'](B16['<object>'], {}, function LevaluatorG__18() {
        return(false);
    });
    ($module)['%export']('<evaluator>', ($module)['<evaluator>']);
}
($module)['prepare-evaluator'] = B16['%make-generic']('prepare-evaluator');
($module)['connect-to-interactor'] = B16['%make-generic']('connect-to-interactor');
($module)['inject-commands!'] = B16['%make-generic']('inject-commands!');
{
    ($module)['start-evaluator'] = B16['%make-method']('start-evaluator', function B20(evaluator__21, url__22) {
        ($module)['prepare-evaluator'](evaluator__21);
        {
            ($module)['inject-commands!'](evaluator__21);
            return(($module)['connect-to-interactor'](evaluator__21, url__22));
        }
    }, false, ($module)['<evaluator>'], ($module)['start-evaluator']);
    ($module)['%export']('start-evaluator', ($module)['start-evaluator']);
}
{
    ($module)['handle-message'] = B16['%make-method']('handle-message', function B25(evaluator__26, serialized_message__27) {
        var message__28 = B16['parse-json'](serialized_message__27);
        {
            var B29 = B16['get'](($module)['$handlers'], B16['get'](message__28, 'type'));
            if (($T)(B29)) {
                var handler__30 = B29;
                return(handler__30(evaluator__26, message__28));
            } else
                return(false);
        }
    }, false, ($module)['<evaluator>'], ($module)['handle-message']);
    ($module)['%export']('handle-message', ($module)['handle-message']);
}
($module)['send-data'] = B16['%make-generic']('send-data');
($module)['send-command'] = B16['%make-method']('send-command', function B32(evaluator__33, type__34) {
    var data__35 = $SL.call(arguments, 2);
    return(($module)['send-data'](evaluator__33, B16['as-json'](B16['apply'](B16['make-object'], 'type', type__34, data__35))));
}, false, ($module)['<evaluator>'], ($module)['send-command']);
{
    ($module)['change-module'] = B16['%make-method']('change-module', function B37(evaluator__38, name__39) {
        ($module)['perform-module-change'](evaluator__38, name__39);
        return(($module)['send-command'](evaluator__38, 'change-module', 'name', name__39));
    }, false, ($module)['<evaluator>'], ($module)['change-module']);
    ($module)['%export']('change-module', ($module)['change-module']);
}
($module)['evaluate'] = B16['%make-generic']('evaluate');
($module)['perform-module-change'] = B16['%make-method']('perform-module-change', function B41(evaluator__42, name__43) {
    var eval__44 = B16['get'](evaluator__42, 'evals', name__43);
    {
        if (($T)(B16['not'](eval__44))) {
            var code__45 = B17['format-to-string']('require(\'%s\')', name__43);
            {
                var exports__46 = ($module)['evaluate'](evaluator__42, code__45);
                {
                    eval__44 = B16['get'](exports__46, '%eval');
                    B16['get-setter'](evaluator__42, 'evals', name__43, eval__44);
                }
            }
        }
        return(B16['get-setter'](evaluator__42, 'current-eval', eval__44));
    }
}, false, ($module)['<evaluator>'], ($module)['perform-module-change']);
($module)['$handlers'] = B16['make-plain-object']();
B16['get-setter'](($module)['$handlers'], 'change-module', function B49(evaluator__50, message__51) {
    var B52 = message__51;
    {
        var name__53 = B52['name'];
        return(($module)['perform-module-change'](evaluator__50, name__53));
    }
});
B16['get-setter'](($module)['$handlers'], 'eval-in-module', function B58(evaluator__59, message__60) {
    var B61 = message__60;
    {
        var code__62 = B61['code'];
        {
            var B63 = evaluator__59;
            {
                var current_eval__64 = B63['current-eval'];
                try {
                    {
                        var result__65 = current_eval__64(code__62);
                        return(($module)['send-command'](evaluator__59, 'result', 'result', B16['description'](result__65)));
                    }
                } catch (B66) {
                    if (($T)(B16['instance?'](B66, B16['<error>']))) {
                        var condition__67 = B66;
                        return(($module)['send-command'](evaluator__59, 'exception', 'stack', B16['get'](condition__67, 'stack')));
                    } else
                        return(false);
                }
            }
        }
    }
});
