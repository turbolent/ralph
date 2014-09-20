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
var B9 = require('ralph/repl/evaluator');
{
    ($module)['<browser-evaluator>'] = B8['%make-class'](B9['<evaluator>'], {}, function Lbrowser_evaluatorG__10() {
        return(false);
    });
    ($module)['%export']('<browser-evaluator>', ($module)['<browser-evaluator>']);
}
($module)['evaluate'] = B8['%make-method']('evaluate', function B12(evaluator__13, code__14) {
    return(($module)['%eval'](code__14));
}, false, ($module)['<browser-evaluator>'], ($module)['evaluate']);
($module)['send-data'] = B8['%make-method']('send-data', function B18(evaluator__19, data__20) {
    var B21 = B8['get'](evaluator__19, 'connection');
    {
        var B22 = data__20;
        return(B21['send'](B22));
    }
}, false, ($module)['<browser-evaluator>'], ($module)['send-data']);
($module)['prepare-evaluator'] = B8['%make-method']('prepare-evaluator', function B24(evaluator__25) {
    return(false);
}, false, ($module)['<browser-evaluator>'], ($module)['prepare-evaluator']);
($module)['inject-commands!'] = B8['%make-method']('inject-commands!', function B27(evaluator__28) {
    ($changeModule) = B8['curry'](B9['change-module'], evaluator__28);
    return(($module)['%eval']('$moduleRoot[\'%in-module\'] = $changeModule'));
}, false, ($module)['<browser-evaluator>'], ($module)['inject-commands!']);
($module)['connect-to-interactor'] = B8['%make-method']('connect-to-interactor', function B31(evaluator__32, url__33) {
    var connection__34 = new WebSocket(url__33);
    {
        B8['get-setter'](evaluator__32, 'connection', connection__34);
        return(B8['get-setter'](connection__34, 'onmessage', function B35(message__36) {
            return(B9['handle-message'](evaluator__32, B8['get'](message__36, 'data')));
        }));
    }
}, false, ($module)['<browser-evaluator>'], ($module)['connect-to-interactor']);
