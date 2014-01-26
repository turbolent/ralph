{
    var B3497 = require('ralph/core');
}
{
    var B3499 = require('ralph/compiler/utilities');
}
{
    {
        var ralphScoreCCMvar = B3497['%var'];
        var ralphScoreCCreduce1 = B3497['reduce1'];
        var ralphScoreCCconcatenate = B3497['concatenate'];
        var ralphScoreCCmap = B3497['map'];
        var ralphScompilerSutilitiesCCopQ = B3499['op?'];
        var ralphScoreCCrest = B3497['rest'];
        var ralphScoreCCMannotate_function = B3497['%annotate-function'];
        var flatten_begins__3508 = function B3502(exps__3503) {
            return(ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B3504(exp__3505) {
                {
                    var flattened__3507 = flatten_statementsN__3506(exp__3505);
                }
                if (($T)(ralphScompilerSutilitiesCCopQ('%begin', flattened__3507)))
                    return(ralphScoreCCrest(flattened__3507));
                else
                    return([flattened__3507]);
            }, exps__3503)));
        };
    }
    ralphScoreCCMannotate_function(flatten_begins__3508, 'flatten_begins', false);
}
{
    {
        var ralphScoreCCreduce = B3497['reduce'];
        var ralphScoreCCnot = B3497['not'];
        var ralphScoreCCemptyQ = B3497['empty?'];
        var ralphScoreCClast = B3497['last'];
        var ralphScoreCCdo = B3497['do'];
        var ralphScoreCCpush_last = B3497['push-last'];
        var ralphScoreCCsecond = B3497['second'];
        var ralphScoreCCEE = B3497['=='];
        var ralphScoreCCfirst = B3497['first'];
        var ralphScoreCCsecond_setter = B3497['second-setter'];
        var ralphScoreCCthird = B3497['third'];
        var flatten_varsN__3524 = function B3512(exps__3513) {
            return(ralphScoreCCreduce(function B3514(result__3515, exp__3516) {
                {
                    var previous__3517 = false;
                }
                if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(result__3515))))
                    previous__3517 = ralphScoreCClast(result__3515);
                else
                    previous__3517 = false;
                {
                    var previous_varQ__3518 = false;
                }
                if (($T)(previous__3517))
                    previous_varQ__3518 = ralphScompilerSutilitiesCCopQ('%var', previous__3517);
                else
                    previous_varQ__3518 = false;
                {
                    var B3525 = false;
                }
                if (($T)(previous_varQ__3518))
                    B3525 = ralphScompilerSutilitiesCCopQ('%var', exp__3516);
                else
                    B3525 = false;
                if (($T)(B3525)) {
                    ralphScoreCCdo(function B3519(binding__3520) {
                        return(ralphScoreCCpush_last(ralphScoreCClast(result__3515), binding__3520));
                    }, ralphScoreCCrest(exp__3516));
                    return(result__3515);
                } else {
                    {
                        var mergeQ__3521 = false;
                    }
                    if (($T)(previous_varQ__3518))
                        mergeQ__3521 = ralphScompilerSutilitiesCCopQ('%set', exp__3516);
                    else
                        mergeQ__3521 = false;
                    {
                        var binding__3522 = false;
                    }
                    if (($T)(mergeQ__3521))
                        binding__3522 = ralphScoreCClast(ralphScoreCClast(result__3515));
                    else
                        binding__3522 = false;
                    {
                        var identifier__3523 = false;
                    }
                    if (($T)(mergeQ__3521))
                        identifier__3523 = ralphScoreCCsecond(exp__3516);
                    else
                        identifier__3523 = false;
                    if (($T)(ralphScoreCCEE(ralphScoreCCfirst(binding__3522), identifier__3523))) {
                        ralphScoreCCsecond_setter(binding__3522, ralphScoreCCthird(exp__3516));
                        return(result__3515);
                    } else
                        return(ralphScoreCCconcatenate(result__3515, [exp__3516]));
                }
            }, [], exps__3513));
        };
    }
    ralphScoreCCMannotate_function(flatten_varsN__3524, 'flatten_varsN', false);
}
{
    {
        var ralphScoreCCinstanceQ = B3497['instance?'];
        var ralphScoreCCLarrayG = B3497['<array>'];
        var ralphScoreCCsymbol_name = B3497['symbol-name'];
        var ralphScoreCCMconcat = B3497['%concat'];
        var ralphScoreCClast_setter = B3497['last-setter'];
        var ralphScoreCCthird_setter = B3497['third-setter'];
        var ralphScoreCCL = B3497['<'];
        var ralphScoreCCsize = B3497['size'];
        var B3533 = $S('%begin', 'ralph/core');
        var B3534 = $S('%var', 'ralph/core');
        var flatten_statementsN__3506 = function B3535(exp__3536) {
            if (($T)(ralphScoreCCinstanceQ(exp__3536, ralphScoreCCLarrayG))) {
                {
                    var B3537 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3536));
                    var B3538 = ralphScoreCCEE(B3537, '%quote');
                    var B3547 = false;
                }
                if (($T)(B3538))
                    B3547 = B3538;
                else
                    B3547 = ralphScoreCCEE(B3537, '%native-name');
                if (($T)(B3547))
                    return(exp__3536);
                else if (($T)(ralphScoreCCEE(B3537, '%bind'))) {
                    {
                        var ____3539 = exp__3536[0];
                        var binding__3540 = exp__3536[1];
                        var body__3541 = exp__3536[2];
                    }
                    return(flatten_statementsN__3506([
                        B3533,
                        ralphScoreCCMconcat([B3534], binding__3540),
                        body__3541
                    ]));
                } else {
                    {
                        var B3542 = ralphScoreCCEE(B3537, '%method');
                        var B3548 = false;
                    }
                    if (($T)(B3542))
                        B3548 = B3542;
                    else {
                        {
                            var B3543 = ralphScoreCCEE(B3537, '%set');
                        }
                        if (($T)(B3543))
                            B3548 = B3543;
                        else
                            B3548 = ralphScoreCCEE(B3537, '%while');
                    }
                    if (($T)(B3548)) {
                        ralphScoreCClast_setter(exp__3536, flatten_statementsN__3506(ralphScoreCClast(exp__3536)));
                        return(exp__3536);
                    } else if (($T)(ralphScoreCCEE(B3537, '%if'))) {
                        ralphScoreCCthird_setter(exp__3536, flatten_statementsN__3506(ralphScoreCCthird(exp__3536)));
                        ralphScoreCClast_setter(exp__3536, flatten_statementsN__3506(ralphScoreCClast(exp__3536)));
                        return(exp__3536);
                    } else if (($T)(ralphScoreCCEE(B3537, '%begin'))) {
                        {
                            var ____3544 = exp__3536[0];
                            var forms__3545 = $SL.call(exp__3536, 1);
                            var formsT__3546 = flatten_varsN__3524(flatten_begins__3508(forms__3545));
                        }
                        if (($T)(ralphScoreCCL(ralphScoreCCsize(formsT__3546), 2)))
                            return(ralphScoreCCfirst(formsT__3546));
                        else
                            return(ralphScoreCCMconcat([B3533], formsT__3546));
                    } else if (($T)(ralphScoreCCEE(B3537, '%try'))) {
                        ralphScoreCCsecond_setter(exp__3536, flatten_statementsN__3506(ralphScoreCCsecond(exp__3536)));
                        ralphScoreCClast_setter(exp__3536, flatten_statementsN__3506(ralphScoreCClast(exp__3536)));
                        return(exp__3536);
                    } else
                        return(ralphScoreCCmap(flatten_statementsN__3506, exp__3536));
                }
            } else
                return(exp__3536);
        };
    }
    (exports)['flatten-statements!'] = flatten_statementsN__3506;
    ralphScoreCCMannotate_function(flatten_statementsN__3506, 'flatten_statementsN', false);
}
