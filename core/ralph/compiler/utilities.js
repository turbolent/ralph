{
    var B151 = require('ralph/core');
}
{
    var B153 = require('ralph/format');
}
{
    {
        var ralphScoreCCMvar = B151['%var'];
        var ralphScoreCCinstanceQ = B151['instance?'];
        var ralphScoreCCLarrayG = B151['<array>'];
        var ralphScoreCCfirst = B151['first'];
        var ralphScoreCCLsymbolG = B151['<symbol>'];
        var ralphScoreCCMannotate_function = B151['%annotate-function'];
        var expressionQ__157 = function B155(form__156) {
            if (($T)(ralphScoreCCinstanceQ(form__156, ralphScoreCCLarrayG)))
                return(ralphScoreCCinstanceQ(ralphScoreCCfirst(form__156), ralphScoreCCLsymbolG));
            else
                return(false);
        };
    }
    (exports)['expression?'] = expressionQ__157;
    ralphScoreCCMannotate_function(expressionQ__157, 'expressionQ', false);
}
{
    {
        var ralphScoreCCnot = B151['not'];
        var ralphScoreCCsignal = B151['signal'];
        var ralphSformatCCformat_to_string = B153['format-to-string'];
        var check_type__163 = function B159(value__160, type__161, format_string__162) {
            if (($T)(ralphScoreCCnot(ralphScoreCCinstanceQ(value__160, type__161))))
                return(ralphScoreCCsignal(ralphSformatCCformat_to_string(format_string__162, value__160)));
            else
                return(false);
        };
    }
    (exports)['check-type'] = check_type__163;
    ralphScoreCCMannotate_function(check_type__163, 'check_type', false);
}
{
    {
        var ralphScoreCCfind_key = B151['find-key'];
        var ralphScoreCCcurry = B151['curry'];
        var ralphScoreCCE = B151['='];
        var ralphScoreCCcopy_sequence = B151['copy-sequence'];
        var ralphScoreCCsize = B151['size'];
        var ralphScoreCCelement = B151['element'];
        var ralphScoreCCinc = B151['inc'];
        var B172 = $REST;
        var B173 = $KEY;
        var B174 = $K('end');
        var B175 = $K('start');
        var destructure_parameter_list__185 = function B176(list__177) {
            {
                var position__178 = false;
            }
            position__178 = function B179(symbol__180) {
                return(ralphScoreCCfind_key(list__177, ralphScoreCCcurry(ralphScoreCCE, symbol__180)));
            };
            {
                var rest__181 = position__178(B172);
                var key__182 = position__178(B173);
                var B183 = rest__181;
                var B186 = false;
            }
            if (($T)(B183))
                B186 = B183;
            else {
                {
                    var B184 = key__182;
                }
                if (($T)(B184))
                    B186 = B184;
                else
                    B186 = ralphScoreCCsize(list__177);
            }
            {
                var B187 = ralphScoreCCcopy_sequence(list__177, B174, B186);
                var B188 = false;
            }
            if (($T)(rest__181))
                B188 = ralphScoreCCelement(list__177, ralphScoreCCinc(rest__181));
            else
                B188 = false;
            {
                var B189 = false;
            }
            if (($T)(key__182))
                B189 = ralphScoreCCcopy_sequence(list__177, B175, ralphScoreCCinc(key__182));
            else
                B189 = false;
            return([
                B187,
                B188,
                B189
            ]);
        };
    }
    (exports)['destructure-parameter-list'] = destructure_parameter_list__185;
    ralphScoreCCMannotate_function(destructure_parameter_list__185, 'destructure_parameter_list', false);
}
{
    {
        var ralphScoreCCEE = B151['=='];
        var ralphScoreCCsymbol_name = B151['symbol-name'];
        var opQ__194 = function B191(op__192, exp__193) {
            if (($T)(expressionQ__157(exp__193)))
                return(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__193)), op__192));
            else
                return(false);
        };
    }
    (exports)['op?'] = opQ__194;
    ralphScoreCCMannotate_function(opQ__194, 'opQ', false);
}
{
    {
        var ralphScoreCCMkeys = B151['%keys'];
        var ralphScoreCCLstringG = B151['<string>'];
        var ralphScoreCCas_set = B151['as-set'];
        var ralphScoreCCmap = B151['map'];
        var ralphScoreCCas_object = B151['as-object'];
        var ralphScoreCCdo = B151['do'];
        var ralphScoreCCremoveN = B151['remove!'];
        var ralphScoreCCset_unionN = B151['set-union!'];
        var ralphScoreCCobject_properties = B151['object-properties'];
        var ralphScoreCCget = B151['get'];
        var ralphScoreCCconcatenate = B151['concatenate'];
        var process_import_names__221 = function B202(all__203) {
            {
                var B204 = $SL.call(arguments, 1);
                var B205 = ralphScoreCCMkeys(B204, {
                        'only': false,
                        'exclude': false,
                        'prefix': false,
                        'rename': false
                    });
                var only__206 = B205['only'];
                var exclude__207 = B205['exclude'];
                var prefix__208 = B205['prefix'];
                var rename__209 = B205['rename'];
                var resolve__210 = false;
            }
            resolve__210 = function B211(exp__212) {
                if (($T)(ralphScoreCCinstanceQ(exp__212, ralphScoreCCLstringG)))
                    return(exp__212);
                else
                    return(identifier_name__213(exp__212));
            };
            {
                var B222 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(only__206, ralphScoreCCLarrayG)))
                B222 = ralphScoreCCmap(resolve__210, only__206);
            else
                B222 = all__203;
            {
                var names__214 = ralphScoreCCas_set(B222);
                var B215 = rename__209;
                var B223 = false;
            }
            if (($T)(B215))
                B223 = B215;
            else
                B223 = [];
            {
                var B224 = ralphScoreCCmap(resolve__210, B223);
                var renamings__216 = ralphScoreCCas_object(B224);
            }
            ralphScoreCCdo(ralphScoreCCcurry(ralphScoreCCremoveN, names__214), ralphScoreCCmap(resolve__210, exclude__207));
            ralphScoreCCset_unionN(names__214, ralphScoreCCobject_properties(renamings__216));
            return(ralphScoreCCmap(function B217(name__218) {
                {
                    var B219 = ralphScoreCCget(renamings__216, name__218);
                }
                if (($T)(B219)) {
                    {
                        var renaming__220 = B219;
                    }
                    return([
                        name__218,
                        renaming__220
                    ]);
                } else if (($T)(ralphScoreCCinstanceQ(prefix__208, ralphScoreCCLstringG)))
                    return([
                        name__218,
                        ralphScoreCCconcatenate(prefix__208, name__218)
                    ]);
                else
                    return(name__218);
            }, names__214));
        };
    }
    (exports)['process-import-names'] = process_import_names__221;
    ralphScoreCCMannotate_function(process_import_names__221, 'process_import_names', false);
}
{
    {
        var ralphScoreCCsymbol = B151['symbol'];
        var transform_setter_identifier__228 = function B226(identifier__227) {
            return(ralphScoreCCsymbol(ralphScoreCCconcatenate(ralphScoreCCsymbol_name(identifier__227), '-setter')));
        };
    }
    (exports)['transform-setter-identifier'] = transform_setter_identifier__228;
    ralphScoreCCMannotate_function(transform_setter_identifier__228, 'transform_setter_identifier', false);
}
{
    {
        var ralphScoreCCeveryQ = B151['every?'];
        var ralphScoreCCrcurry = B151['rcurry'];
        var setter_identifierQ__232 = function B230(form__231) {
            if (($T)(ralphScoreCCinstanceQ(form__231, ralphScoreCCLarrayG)))
                if (($T)(ralphScoreCCEE(ralphScoreCCsize(form__231), 2)))
                    if (($T)(ralphScoreCCeveryQ(ralphScoreCCrcurry(ralphScoreCCinstanceQ, ralphScoreCCLsymbolG), form__231)))
                        return(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(form__231)), 'setter'));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
    }
    (exports)['setter-identifier?'] = setter_identifierQ__232;
    ralphScoreCCMannotate_function(setter_identifierQ__232, 'setter_identifierQ', false);
}
{
    {
        var ralphScoreCCsecond = B151['second'];
        var identifier_name__213 = function B234(identifier__235) {
            {
                var B236 = false;
            }
            if (($T)(setter_identifierQ__232(identifier__235)))
                B236 = transform_setter_identifier__228(ralphScoreCCsecond(identifier__235));
            else
                B236 = identifier__235;
            return(ralphScoreCCsymbol_name(B236));
        };
    }
    (exports)['identifier-name'] = identifier_name__213;
    ralphScoreCCMannotate_function(identifier_name__213, 'identifier_name', false);
}
