{
    var B12 = require('ralph/core');
}
false;
{
    {
        var LregexpG__13 = (RegExp);
    }
    (exports)['<regexp>'] = LregexpG__13;
}
{
    var ralphScoreCCMvar = B12['%var'];
    var ralphScoreCCMmake_method = B12['%make-method'];
    var ralphScoreCCMkeys = B12['%keys'];
    var ralphScoreCCconcatenate = B12['concatenate'];
    var ralphScoreCCinitialize = B12['initialize'];
    var initialize__32 = ralphScoreCCMmake_method('initialize', function B20(regexp__21) {
            {
                var B22 = $SL.call(arguments, 1);
                var B23 = ralphScoreCCMkeys(B22, {
                        'pattern': false,
                        'global?': false,
                        'ignore-case?': false,
                        'multiline?': false
                    });
                var pattern__24 = B23['pattern'];
                var globalQ__25 = B23['global?'];
                var ignore_caseQ__26 = B23['ignore-case?'];
                var multilineQ__27 = B23['multiline?'];
            }
            if (($T)(pattern__24)) {
                {
                    var B33 = false;
                }
                if (($T)(globalQ__25))
                    B33 = 'g';
                else
                    B33 = '';
                {
                    var B34 = false;
                }
                if (($T)(ignore_caseQ__26))
                    B34 = 'i';
                else
                    B34 = '';
                {
                    var B35 = false;
                }
                if (($T)(multilineQ__27))
                    B35 = 'm';
                else
                    B35 = '';
                {
                    var flags__28 = ralphScoreCCconcatenate(B33, B34, B35);
                    var B29 = regexp__21;
                    var B30 = pattern__24;
                    var B31 = flags__28;
                }
                return(B29['compile'](B30, B31));
            } else
                return(false);
        }, false, LregexpG__13, ralphScoreCCinitialize);
}
{
    {
        var ralphScoreCCG = B12['>'];
        var ralphScoreCCMannotate_function = B12['%annotate-function'];
        var find__45 = function B39(regexp__40, string__41) {
            {
                var B42 = string__41;
                var B43 = regexp__40;
                var position__44 = B42['search'](B43);
            }
            if (($T)(ralphScoreCCG(position__44, -1)))
                return(position__44);
            else
                return(false);
        };
    }
    ralphScoreCCMannotate_function(find__45, 'find', false);
}
{
    {
        var match__54 = function B49(regexp__50, string__51) {
            {
                var B52 = string__51;
                var B53 = regexp__50;
            }
            return(B52['match'](B53));
        };
    }
    (exports)['match'] = match__54;
    ralphScoreCCMannotate_function(match__54, 'match', false);
}
