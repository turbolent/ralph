var B3521 = require('ralph/core');
var B3523 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B3521['%var'], ralphScoreCCMmake_function = B3521['%make-function'], ralphScoreCCreduce1 = B3521['reduce1'], ralphScoreCCconcatenate = B3521['concatenate'], ralphScoreCCmap = B3521['map'], ralphScompilerSutilitiesCCopQ = B3523['op?'], ralphScoreCCrest = B3521['rest'], flatten_begins__3532 = ralphScoreCCMmake_function('flatten_begins', function B3526(exps__3527) {
        return(ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B3528(exp__3529) {
            var flattened__3531 = flatten_statementsN__3530(exp__3529);
            if (($T)(ralphScompilerSutilitiesCCopQ('%begin', flattened__3531)))
                return(ralphScoreCCrest(flattened__3531));
            else
                return([flattened__3531]);
        }, exps__3527)));
    }, false);
var ralphScoreCCreduce = B3521['reduce'], ralphScoreCCnot = B3521['not'], ralphScoreCCemptyQ = B3521['empty?'], ralphScoreCClast = B3521['last'], ralphScoreCCdo = B3521['do'], ralphScoreCCpush_last = B3521['push-last'], ralphScoreCCsecond = B3521['second'], ralphScoreCCEE = B3521['=='], ralphScoreCCfirst = B3521['first'], ralphScoreCCsecond_setter = B3521['second-setter'], ralphScoreCCthird = B3521['third'], flatten_varsN__3548 = ralphScoreCCMmake_function('flatten_varsN', function B3536(exps__3537) {
        return(ralphScoreCCreduce(function B3538(result__3539, exp__3540) {
            var previous__3541 = false;
            if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(result__3539))))
                previous__3541 = ralphScoreCClast(result__3539);
            else
                previous__3541 = false;
            var previous_varQ__3542 = false;
            if (($T)(previous__3541))
                previous_varQ__3542 = ralphScompilerSutilitiesCCopQ('%var', previous__3541);
            else
                previous_varQ__3542 = false;
            var B3549 = false;
            if (($T)(previous_varQ__3542))
                B3549 = ralphScompilerSutilitiesCCopQ('%var', exp__3540);
            else
                B3549 = false;
            if (($T)(B3549)) {
                ralphScoreCCdo(function B3543(binding__3544) {
                    return(ralphScoreCCpush_last(ralphScoreCClast(result__3539), binding__3544));
                }, ralphScoreCCrest(exp__3540));
                return(result__3539);
            } else {
                var mergeQ__3545 = false;
                if (($T)(previous_varQ__3542))
                    mergeQ__3545 = ralphScompilerSutilitiesCCopQ('%set', exp__3540);
                else
                    mergeQ__3545 = false;
                var binding__3546 = false;
                if (($T)(mergeQ__3545))
                    binding__3546 = ralphScoreCClast(ralphScoreCClast(result__3539));
                else
                    binding__3546 = false;
                var identifier__3547 = false;
                if (($T)(mergeQ__3545))
                    identifier__3547 = ralphScoreCCsecond(exp__3540);
                else
                    identifier__3547 = false;
                if (($T)(ralphScoreCCEE(ralphScoreCCfirst(binding__3546), identifier__3547))) {
                    ralphScoreCCsecond_setter(binding__3546, ralphScoreCCthird(exp__3540));
                    return(result__3539);
                } else
                    return(ralphScoreCCconcatenate(result__3539, [exp__3540]));
            }
        }, [], exps__3537));
    }, false);
{
    var ralphScoreCCinstanceQ = B3521['instance?'], ralphScoreCCLarrayG = B3521['<array>'], ralphScoreCCsymbol_name = B3521['symbol-name'], ralphScoreCCMconcat = B3521['%concat'], ralphScoreCClast_setter = B3521['last-setter'], ralphScoreCCthird_setter = B3521['third-setter'], ralphScoreCCL = B3521['<'], ralphScoreCCsize = B3521['size'], B3557 = $S('%begin', 'ralph/core'), B3558 = $S('%var', 'ralph/core'), flatten_statementsN__3530 = ralphScoreCCMmake_function('flatten_statementsN', function B3559(exp__3560) {
            if (($T)(ralphScoreCCinstanceQ(exp__3560, ralphScoreCCLarrayG))) {
                var B3561 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3560)), B3562 = ralphScoreCCEE(B3561, '%quote'), B3571 = false;
                if (($T)(B3562))
                    B3571 = B3562;
                else
                    B3571 = ralphScoreCCEE(B3561, '%native-name');
                if (($T)(B3571))
                    return(exp__3560);
                else if (($T)(ralphScoreCCEE(B3561, '%bind'))) {
                    var ____3563 = exp__3560[0], binding__3564 = exp__3560[1], body__3565 = exp__3560[2];
                    return(flatten_statementsN__3530([
                        B3557,
                        ralphScoreCCMconcat([B3558], binding__3564),
                        body__3565
                    ]));
                } else {
                    var B3566 = ralphScoreCCEE(B3561, '%method'), B3572 = false;
                    if (($T)(B3566))
                        B3572 = B3566;
                    else {
                        var B3567 = ralphScoreCCEE(B3561, '%set');
                        if (($T)(B3567))
                            B3572 = B3567;
                        else
                            B3572 = ralphScoreCCEE(B3561, '%while');
                    }
                    if (($T)(B3572)) {
                        ralphScoreCClast_setter(exp__3560, flatten_statementsN__3530(ralphScoreCClast(exp__3560)));
                        return(exp__3560);
                    } else if (($T)(ralphScoreCCEE(B3561, '%if'))) {
                        ralphScoreCCthird_setter(exp__3560, flatten_statementsN__3530(ralphScoreCCthird(exp__3560)));
                        ralphScoreCClast_setter(exp__3560, flatten_statementsN__3530(ralphScoreCClast(exp__3560)));
                        return(exp__3560);
                    } else if (($T)(ralphScoreCCEE(B3561, '%begin'))) {
                        var ____3568 = exp__3560[0], forms__3569 = $SL.call(exp__3560, 1), formsT__3570 = flatten_varsN__3548(flatten_begins__3532(forms__3569));
                        if (($T)(ralphScoreCCL(ralphScoreCCsize(formsT__3570), 2)))
                            return(ralphScoreCCfirst(formsT__3570));
                        else
                            return(ralphScoreCCMconcat([B3557], formsT__3570));
                    } else if (($T)(ralphScoreCCEE(B3561, '%try'))) {
                        ralphScoreCCsecond_setter(exp__3560, flatten_statementsN__3530(ralphScoreCCsecond(exp__3560)));
                        ralphScoreCClast_setter(exp__3560, flatten_statementsN__3530(ralphScoreCClast(exp__3560)));
                        return(exp__3560);
                    } else
                        return(ralphScoreCCmap(flatten_statementsN__3530, exp__3560));
                }
            } else
                return(exp__3560);
        }, false);
    (exports)['flatten-statements!'] = flatten_statementsN__3530;
}
