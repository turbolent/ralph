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
    ($module)['handle-connection'] = function B96(interactor__97, connection__98) {
        var B99 = connection__98;
        {
            var B100 = 'message';
            {
                var B101 = B8['curry'](($module)['handle-message'], interactor__97);
                {
                    B99['on'](B100, B101);
                    {
                        B8['get-setter'](interactor__97, 'connection', connection__98);
                        {
                            ($module)['change-module'](interactor__97, 'ralph/core');
                            return(($module)['update-prompt!'](interactor__97));
                        }
                    }
                }
            }
        }
    };
    B8['%annotate-function'](($module)['handle-connection'], 'handle-connection', false);
}
{
    {
        ($module)['start-interactor'] = function B104(interactor__105) {
            B8['get-setter'](interactor__105, 'server', B14['createServer']({ 'port': 8080 }, B8['curry'](($module)['handle-connection'], interactor__105)));
            {
                ($module)['on-each-line'](interactor__105, function B106(line__107) {
                    if (($T)(($module)['active?'](interactor__105)))
                        return(($module)['handle-line'](interactor__105, line__107));
                    else {
                        B10['format-out']('[inactive]\n');
                        return(($module)['update-prompt!'](interactor__105));
                    }
                });
                return(($module)['update-prompt!'](interactor__105));
            }
        };
        ($module)['%export']('start-interactor', ($module)['start-interactor']);
    }
    B8['%annotate-function'](($module)['start-interactor'], 'start-interactor', false);
}
{
    ($module)['append-line!'] = function B109(interactor__110, line__111) {
        return(B8['get-setter'](interactor__110, 'current-line', B8['concatenate'](B8['get'](interactor__110, 'current-line'), '\n', line__111)));
    };
    B8['%annotate-function'](($module)['append-line!'], 'append-line!', false);
}
{
    ($module)['eval-in-module'] = function B113(interactor__114, code__115) {
        return(($module)['send-command'](interactor__114, 'eval-in-module', 'code', code__115));
    };
    B8['%annotate-function'](($module)['eval-in-module'], 'eval-in-module', false);
}
B8['get-setter'](($module)['$handlers'], 'result', function B118(interactor__119, message__120) {
    var B121 = message__120;
    {
        var result__122 = B121['result'];
        {
            B10['format-out']('%s\n', result__122);
            return(($module)['update-prompt!'](interactor__119));
        }
    }
});
B8['get-setter'](($module)['$handlers'], 'exception', function B125(interactor__126, message__127) {
    var B128 = message__127;
    {
        var stack__129 = B128['stack'];
        {
            B10['format-out']('%s\n', stack__129);
            return(($module)['update-prompt!'](interactor__126));
        }
    }
});
B8['get-setter'](($module)['$handlers'], 'change-module', function B132(interactor__133, message__134) {
    var B135 = message__134;
    {
        var name__136 = B135['name'];
        return(($module)['perform-module-change'](interactor__133, name__136));
    }
});
{
    ($module)['handle-line'] = function B140(interactor__141, line__142) {
        ($module)['append-line!'](interactor__141, line__142);
        {
            var B143 = interactor__141;
            {
                var current_line__144 = B143['current-line'];
                {
                    var current_environment__145 = B143['current-environment'];
                    try {
                        {
                            var expression__146 = ($module)['read-line'](interactor__141, current_line__144);
                            {
                                var incompleteQ__147 = B8['=='](expression__146, ($module)['$incomplete']);
                                {
                                    B8['get-setter'](interactor__141, 'incomplete?', incompleteQ__147);
                                    if (($T)(incompleteQ__147))
                                        return(($module)['update-prompt!'](interactor__141));
                                    else {
                                        var code__148 = B13['compile-to-string'](expression__146, current_environment__145);
                                        {
                                            ($module)['eval-in-module'](interactor__141, code__148);
                                            return(B8['get-setter'](interactor__141, 'current-line', ''));
                                        }
                                    }
                                }
                            }
                        }
                    } catch (B149) {
                        if (($T)(B8['instance?'](B149, B8['<error>']))) {
                            var condition__150 = B149;
                            {
                                B10['format-out']('%s\n', B8['get'](condition__150, 'stack'));
                                {
                                    current_line__144 = '';
                                    return(($module)['update-prompt!'](interactor__141));
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
    ($module)['current-module-name'] = function B153(interactor__154) {
        var B155 = B8['get'](interactor__154, 'current-environment');
        if (($T)(B155)) {
            var env__156 = B155;
            return(B8['get'](env__156, 'module', 'name'));
        } else
            return(false);
    };
    B8['%annotate-function'](($module)['current-module-name'], 'current-module-name', false);
}
{
    ($module)['set-prompt!'] = function B160(interactor__161, prompt__162) {
        var B163 = B8['get'](interactor__161, 'interface');
        {
            var B164 = prompt__162;
            return(B163['setPrompt'](B164));
        }
    };
    B8['%annotate-function'](($module)['set-prompt!'], 'set-prompt!', false);
}
{
    ($module)['prompt!'] = function B167(interactor__168) {
        var B169 = B8['get'](interactor__168, 'interface');
        return(B169['prompt']());
    };
    B8['%annotate-function'](($module)['prompt!'], 'prompt!', false);
}
{
    ($module)['update-prompt!'] = function B172(interactor__173) {
        var B174 = ($module)['current-module-name'](interactor__173);
        {
            var name__175 = false;
            if (($T)(B174))
                name__175 = B174;
            else
                name__175 = '';
            {
                var B176 = false;
                if (($T)(B8['get'](interactor__173, 'incomplete?')))
                    B176 = B8['concatenate'](B8['repeat-string'](' ', B8['-'](B8['size'](name__175), 2)), '... ');
                else
                    B176 = B8['concatenate'](name__175, '> ');
                {
                    ($module)['set-prompt!'](interactor__173, B176);
                    return(($module)['prompt!'](interactor__173));
                }
            }
        }
    };
    B8['%annotate-function'](($module)['update-prompt!'], 'update-prompt!', false);
}
