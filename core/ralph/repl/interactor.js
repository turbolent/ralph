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
    var B9 = require('ralph/stream');
    {
        var B10 = require('ralph/format-out');
        {
            var B11 = require('ralph/compiler/environment');
            {
                var B12 = require('ralph/compiler/reader');
                {
                    var B13 = require('ralph/compiler/compile');
                    {
                        var B14 = require('ws');
                        var B15 = require('readline');
                    }
                }
            }
        }
    }
}
{
    ($module)['make-interface'] = function B17() {
        return(B15['createInterface']({
            'input': (process.stdin),
            'output': (process.stdout)
        }));
    };
    B8['%annotate-function'](($module)['make-interface'], 'make-interface', false);
}
{
    ($module)['<interactor>'] = B8['%make-class'](B8['<object>'], {
        'current-line': function B19() {
            return('');
        }
    }, function LinteractorG__20() {
        var B21 = (this);
        return(B21['current-line'] = (undefined));
    });
    ($module)['%export']('<interactor>', ($module)['<interactor>']);
}
($module)['initialize'] = B8['%make-method']('initialize', function B29(interactor__30) {
    B8['%next-method'](B29)['apply']((null), arguments);
    {
        var interface__31 = ($module)['make-interface']();
        {
            B8['get-setter'](interactor__30, 'interface', interface__31);
            {
                var B32 = interface__31;
                {
                    var B33 = 'close';
                    {
                        var B37 = function B34() {
                            var B35 = (process);
                            {
                                var B36 = 0;
                                return(B35['exit'](B36));
                            }
                        };
                        return(B32['on'](B33, B37));
                    }
                }
            }
        }
    }
}, false, ($module)['<interactor>'], ($module)['initialize']);
{
    ($module)['active?'] = function B39(interactor__40) {
        return(B8['true?'](B8['get'](interactor__40, 'connection')));
    };
    B8['%annotate-function'](($module)['active?'], 'active?', false);
}
($module)['$incomplete'] = B8['make-object']();
{
    var B42 = $K('string');
    {
        var B43 = $K('eof-error?');
        {
            var B44 = $K('eof-value');
            {
                var B45 = $K('if-incomplete');
                {
                    ($module)['read-line'] = function B46(interactor__47, line__48) {
                        var input_stream__49 = B8['make'](B9['<string-stream>'], B42, line__48);
                        return(B12['read'](input_stream__49, B8['get'](interactor__47, 'current-environment'), B43, false, B44, ($module)['$incomplete'], B45, ($module)['$incomplete']));
                    };
                    B8['%annotate-function'](($module)['read-line'], 'read-line', false);
                }
            }
        }
    }
}
{
    ($module)['on-each-line'] = function B54(interactor__55, handler__56) {
        var B57 = B8['get'](interactor__55, 'interface');
        {
            var B58 = 'line';
            {
                var B59 = handler__56;
                return(B57['on'](B58, B59));
            }
        }
    };
    B8['%annotate-function'](($module)['on-each-line'], 'on-each-line', false);
}
{
    ($module)['make-environment'] = function B61(name__62) {
        var env__63 = B13['make-module-environment'](name__62);
        {
            B8['get-setter'](env__63, 'persistent?', false);
            return(env__63);
        }
    };
    B8['%annotate-function'](($module)['make-environment'], 'make-environment', false);
}
{
    ($module)['send-command'] = function B67(interactor__68, type__69) {
        var data__70 = $SL.call(arguments, 2);
        {
            var B71 = B8['get'](interactor__68, 'connection');
            {
                var B72 = B8['as-json'](B8['apply'](B8['make-object'], 'type', type__69, data__70));
                return(B71['send'](B72));
            }
        }
    };
    B8['%annotate-function'](($module)['send-command'], 'send-command', false);
}
{
    ($module)['perform-module-change'] = function B75(interactor__76, name__77) {
        var B78 = B8['get'](interactor__76, 'environments', name__77);
        {
            var env__79 = false;
            if (($T)(B78))
                env__79 = B78;
            else
                env__79 = ($module)['make-environment'](name__77);
            {
                B8['get-setter'](interactor__76, 'envrionments', name__77, env__79);
                return(B8['get-setter'](interactor__76, 'current-environment', env__79));
            }
        }
    };
    B8['%annotate-function'](($module)['perform-module-change'], 'perform-module-change', false);
}
{
    {
        ($module)['change-module'] = function B81(interactor__82, name__83) {
            ($module)['perform-module-change'](interactor__82, name__83);
            return(($module)['send-command'](interactor__82, 'change-module', 'name', name__83));
        };
        ($module)['%export']('change-module', ($module)['change-module']);
    }
    B8['%annotate-function'](($module)['change-module'], 'change-module', false);
}
($module)['$handlers'] = B8['make-plain-object']();
{
    ($module)['handle-message'] = function B86(interactor__87, serialized_message__88) {
        var message__89 = B8['parse-json'](serialized_message__88);
        {
            var B90 = B8['get'](($module)['$handlers'], B8['get'](message__89, 'type'));
            if (($T)(B90)) {
                var handler__91 = B90;
                return(handler__91(interactor__87, message__89));
            } else
                return(false);
        }
    };
    B8['%annotate-function'](($module)['handle-message'], 'handle-message', false);
}
{
    ($module)['handle-connection'] = function B99(interactor__100, connection__101) {
        var B102 = connection__101;
        {
            var B103 = 'message';
            {
                var B104 = B8['curry'](($module)['handle-message'], interactor__100);
                {
                    B102['on'](B103, B104);
                    {
                        var B105 = connection__101;
                        {
                            var B106 = 'close';
                            {
                                var B107 = B8['curry'](($module)['handle-close'], interactor__100);
                                {
                                    B105['on'](B106, B107);
                                    {
                                        B8['get-setter'](interactor__100, 'connection', connection__101);
                                        {
                                            ($module)['change-module'](interactor__100, 'ralph/core');
                                            return(($module)['update-prompt!'](interactor__100));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    };
    B8['%annotate-function'](($module)['handle-connection'], 'handle-connection', false);
}
{
    ($module)['handle-close'] = function B109(interactor__110) {
        B8['get-setter'](interactor__110, 'connection', false);
        {
            B8['get-setter'](interactor__110, 'current-environment', false);
            return(($module)['update-prompt!'](interactor__110));
        }
    };
    B8['%annotate-function'](($module)['handle-close'], 'handle-close', false);
}
{
    ($module)['start-server'] = function B112(interactor__113, port__114) {
        var server__115 = B14['createServer']({ 'port': port__114 }, B8['curry'](($module)['handle-connection'], interactor__113));
        return(B8['get-setter'](interactor__113, 'server', server__115));
    };
    B8['%annotate-function'](($module)['start-server'], 'start-server', false);
}
{
    {
        ($module)['start-interactor'] = function B120(interactor__121) {
            var B122 = $SL.call(arguments, 1);
            {
                var B123 = B8['%keys'](B122, { 'port': 2342 });
                {
                    var port__124 = B123['port'];
                    {
                        ($module)['start-server'](interactor__121, port__124);
                        {
                            ($module)['on-each-line'](interactor__121, function B125(line__126) {
                                if (($T)(($module)['active?'](interactor__121)))
                                    return(($module)['handle-line'](interactor__121, line__126));
                                else {
                                    B10['format-out']('[inactive]\n');
                                    return(($module)['update-prompt!'](interactor__121));
                                }
                            });
                            return(($module)['update-prompt!'](interactor__121));
                        }
                    }
                }
            }
        };
        ($module)['%export']('start-interactor', ($module)['start-interactor']);
    }
    B8['%annotate-function'](($module)['start-interactor'], 'start-interactor', false);
}
{
    ($module)['append-line!'] = function B128(interactor__129, line__130) {
        return(B8['get-setter'](interactor__129, 'current-line', B8['concatenate'](B8['get'](interactor__129, 'current-line'), '\n', line__130)));
    };
    B8['%annotate-function'](($module)['append-line!'], 'append-line!', false);
}
{
    ($module)['eval-in-module'] = function B132(interactor__133, code__134) {
        return(($module)['send-command'](interactor__133, 'eval-in-module', 'code', code__134));
    };
    B8['%annotate-function'](($module)['eval-in-module'], 'eval-in-module', false);
}
B8['get-setter'](($module)['$handlers'], 'result', function B137(interactor__138, message__139) {
    var B140 = message__139;
    {
        var result__141 = B140['result'];
        {
            B10['format-out']('%s\n', result__141);
            return(($module)['update-prompt!'](interactor__138));
        }
    }
});
B8['get-setter'](($module)['$handlers'], 'exception', function B144(interactor__145, message__146) {
    var B147 = message__146;
    {
        var stack__148 = B147['stack'];
        {
            B10['format-out']('%s\n', stack__148);
            return(($module)['update-prompt!'](interactor__145));
        }
    }
});
B8['get-setter'](($module)['$handlers'], 'change-module', function B151(interactor__152, message__153) {
    var B154 = message__153;
    {
        var name__155 = B154['name'];
        return(($module)['perform-module-change'](interactor__152, name__155));
    }
});
{
    ($module)['handle-line'] = function B159(interactor__160, line__161) {
        ($module)['append-line!'](interactor__160, line__161);
        {
            var B162 = interactor__160;
            {
                var current_line__163 = B162['current-line'];
                {
                    var current_environment__164 = B162['current-environment'];
                    try {
                        {
                            var expression__165 = ($module)['read-line'](interactor__160, current_line__163);
                            {
                                var incompleteQ__166 = B8['=='](expression__165, ($module)['$incomplete']);
                                {
                                    B8['get-setter'](interactor__160, 'incomplete?', incompleteQ__166);
                                    if (($T)(incompleteQ__166))
                                        return(($module)['update-prompt!'](interactor__160));
                                    else {
                                        var code__167 = B13['compile-to-string'](expression__165, current_environment__164);
                                        {
                                            ($module)['eval-in-module'](interactor__160, code__167);
                                            return(B8['get-setter'](interactor__160, 'current-line', ''));
                                        }
                                    }
                                }
                            }
                        }
                    } catch (B168) {
                        if (($T)(B8['instance?'](B168, B8['<error>']))) {
                            var condition__169 = B168;
                            {
                                B10['format-out']('%s\n', B8['get'](condition__169, 'stack'));
                                {
                                    current_line__163 = '';
                                    return(($module)['update-prompt!'](interactor__160));
                                }
                            }
                        } else
                            return(false);
                    }
                }
            }
        }
    };
    B8['%annotate-function'](($module)['handle-line'], 'handle-line', false);
}
{
    ($module)['current-module-name'] = function B172(interactor__173) {
        var B174 = B8['get'](interactor__173, 'current-environment');
        if (($T)(B174)) {
            var env__175 = B174;
            return(B8['get'](env__175, 'module', 'name'));
        } else
            return(false);
    };
    B8['%annotate-function'](($module)['current-module-name'], 'current-module-name', false);
}
{
    ($module)['set-prompt!'] = function B179(interactor__180, prompt__181) {
        var B182 = B8['get'](interactor__180, 'interface');
        {
            var B183 = prompt__181;
            return(B182['setPrompt'](B183));
        }
    };
    B8['%annotate-function'](($module)['set-prompt!'], 'set-prompt!', false);
}
{
    ($module)['prompt!'] = function B186(interactor__187) {
        var B188 = B8['get'](interactor__187, 'interface');
        return(B188['prompt']());
    };
    B8['%annotate-function'](($module)['prompt!'], 'prompt!', false);
}
{
    ($module)['update-prompt!'] = function B191(interactor__192) {
        var B193 = ($module)['current-module-name'](interactor__192);
        {
            var name__194 = false;
            if (($T)(B193))
                name__194 = B193;
            else
                name__194 = '';
            {
                var B195 = false;
                if (($T)(B8['get'](interactor__192, 'incomplete?')))
                    B195 = B8['concatenate'](B8['repeat-string'](' ', B8['-'](B8['size'](name__194), 2)), '... ');
                else
                    B195 = B8['concatenate'](name__194, '> ');
                {
                    ($module)['set-prompt!'](interactor__192, B195);
                    return(($module)['prompt!'](interactor__192));
                }
            }
        }
    };
    B8['%annotate-function'](($module)['update-prompt!'], 'update-prompt!', false);
}
