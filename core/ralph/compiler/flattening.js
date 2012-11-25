var B3522 = require('ralph/core');
var B3524 = require('ralph/compiler/utilities');
var ralphScoreCCMvar = B3522['%var'], ralphScoreCCMmake_function = B3522['%make-function'], ralphScoreCCreduce1 = B3522['reduce1'], ralphScoreCCconcatenate = B3522['concatenate'], ralphScoreCCmap = B3522['map'], ralphScompilerSutilitiesCCopQ = B3524['op?'], ralphScoreCCrest = B3522['rest'], flatten_begins__3533 = ralphScoreCCMmake_function('flatten_begins', function B3527(exps__3528) {
        return(ralphScoreCCreduce1(ralphScoreCCconcatenate, ralphScoreCCmap(function B3529(exp__3530) {
            var flattened__3532 = flatten_statementsN__3531(exp__3530);
            if (($T)(ralphScompilerSutilitiesCCopQ('%begin', flattened__3532)))
                return(ralphScoreCCrest(flattened__3532));
            else
                return([flattened__3532]);
        }, exps__3528)));
    }, false);
var ralphScoreCCreduce = B3522['reduce'], ralphScoreCCnot = B3522['not'], ralphScoreCCemptyQ = B3522['empty?'], ralphScoreCClast = B3522['last'], ralphScoreCCdo = B3522['do'], ralphScoreCCpush_last = B3522['push-last'], ralphScoreCCsecond = B3522['second'], ralphScoreCCEE = B3522['=='], ralphScoreCCfirst = B3522['first'], ralphScoreCCsecond_setter = B3522['second-setter'], ralphScoreCCthird = B3522['third'], flatten_varsN__3549 = ralphScoreCCMmake_function('flatten_varsN', function B3537(exps__3538) {
        return(ralphScoreCCreduce(function B3539(result__3540, exp__3541) {
            var previous__3542 = false;
            if (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(result__3540))))
                previous__3542 = ralphScoreCClast(result__3540);
            else
                previous__3542 = false;
            var previous_varQ__3543 = false;
            if (($T)(previous__3542))
                previous_varQ__3543 = ralphScompilerSutilitiesCCopQ('%var', previous__3542);
            else
                previous_varQ__3543 = false;
            var B3550 = false;
            if (($T)(previous_varQ__3543))
                B3550 = ralphScompilerSutilitiesCCopQ('%var', exp__3541);
            else
                B3550 = false;
            if (($T)(B3550)) {
                ralphScoreCCdo(function B3544(binding__3545) {
                    return(ralphScoreCCpush_last(ralphScoreCClast(result__3540), binding__3545));
                }, ralphScoreCCrest(exp__3541));
                return(result__3540);
            } else {
                var mergeQ__3546 = false;
                if (($T)(previous_varQ__3543))
                    mergeQ__3546 = ralphScompilerSutilitiesCCopQ('%set', exp__3541);
                else
                    mergeQ__3546 = false;
                var binding__3547 = false;
                if (($T)(mergeQ__3546))
                    binding__3547 = ralphScoreCClast(ralphScoreCClast(result__3540));
                else
                    binding__3547 = false;
                var identifier__3548 = false;
                if (($T)(mergeQ__3546))
                    identifier__3548 = ralphScoreCCsecond(exp__3541);
                else
                    identifier__3548 = false;
                if (($T)(ralphScoreCCEE(ralphScoreCCfirst(binding__3547), identifier__3548))) {
                    ralphScoreCCsecond_setter(binding__3547, ralphScoreCCthird(exp__3541));
                    return(result__3540);
                } else
                    return(ralphScoreCCconcatenate(result__3540, [exp__3541]));
            }
        }, [], exps__3538));
    }, false);
{
    var ralphScoreCCinstanceQ = B3522['instance?'], ralphScoreCCLarrayG = B3522['<array>'], ralphScoreCCsymbol_name = B3522['symbol-name'], ralphScoreCCMconcat = B3522['%concat'], ralphScoreCClast_setter = B3522['last-setter'], ralphScoreCCthird_setter = B3522['third-setter'], ralphScoreCCL = B3522['<'], ralphScoreCCsize = B3522['size'], B3558 = $S('%begin'), B3559 = $S('%var'), flatten_statementsN__3531 = ralphScoreCCMmake_function('flatten_statementsN', function B3560(exp__3561) {
            if (($T)(ralphScoreCCinstanceQ(exp__3561, ralphScoreCCLarrayG))) {
                var B3562 = ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__3561)), B3563 = ralphScoreCCEE(B3562, '%quote'), B3572 = false;
                if (($T)(B3563))
                    B3572 = B3563;
                else
                    B3572 = ralphScoreCCEE(B3562, '%native-name');
                if (($T)(B3572))
                    return(exp__3561);
                else if (($T)(ralphScoreCCEE(B3562, '%bind'))) {
                    var ____3564 = exp__3561[0], binding__3565 = exp__3561[1], body__3566 = exp__3561[2];
                    return(flatten_statementsN__3531([
                        B3558,
                        ralphScoreCCMconcat([B3559], binding__3565),
                        body__3566
                    ]));
                } else {
                    var B3567 = ralphScoreCCEE(B3562, '%method'), B3573 = false;
                    if (($T)(B3567))
                        B3573 = B3567;
                    else {
                        var B3568 = ralphScoreCCEE(B3562, '%set');
                        if (($T)(B3568))
                            B3573 = B3568;
                        else
                            B3573 = ralphScoreCCEE(B3562, '%while');
                    }
                    if (($T)(B3573)) {
                        ralphScoreCClast_setter(exp__3561, flatten_statementsN__3531(ralphScoreCClast(exp__3561)));
                        return(exp__3561);
                    } else if (($T)(ralphScoreCCEE(B3562, '%if'))) {
                        ralphScoreCCthird_setter(exp__3561, flatten_statementsN__3531(ralphScoreCCthird(exp__3561)));
                        ralphScoreCClast_setter(exp__3561, flatten_statementsN__3531(ralphScoreCClast(exp__3561)));
                        return(exp__3561);
                    } else if (($T)(ralphScoreCCEE(B3562, '%begin'))) {
                        var ____3569 = exp__3561[0], forms__3570 = $SL.call(exp__3561, 1), formsT__3571 = flatten_varsN__3549(flatten_begins__3533(forms__3570));
                        if (($T)(ralphScoreCCL(ralphScoreCCsize(formsT__3571), 2)))
                            return(ralphScoreCCfirst(formsT__3571));
                        else
                            return(ralphScoreCCMconcat([B3558], formsT__3571));
                    } else if (($T)(ralphScoreCCEE(B3562, '%try'))) {
                        ralphScoreCCsecond_setter(exp__3561, flatten_statementsN__3531(ralphScoreCCsecond(exp__3561)));
                        ralphScoreCClast_setter(exp__3561, flatten_statementsN__3531(ralphScoreCClast(exp__3561)));
                        return(exp__3561);
                    } else
                        return(ralphScoreCCmap(flatten_statementsN__3531, exp__3561));
                }
            } else
                return(exp__3561);
        }, false);
    (exports)['flatten-statements!'] = flatten_statementsN__3531;
}
