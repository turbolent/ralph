{
    var B1541 = require('ralph/core');
}
{
    var B1543 = require('ralph/format');
}
{
    {
        var ralphScoreCCMvar = B1541['%var'];
        var ralphScoreCCinstanceQ = B1541['instance?'];
        var ralphScoreCCLarrayG = B1541['<array>'];
        var ralphScoreCCfirst = B1541['first'];
        var ralphScoreCCLsymbolG = B1541['<symbol>'];
        var ralphScoreCCMannotate_function = B1541['%annotate-function'];
        var expressionQ__1547 = function B1545(form__1546) {
            if (($T)(ralphScoreCCinstanceQ(form__1546, ralphScoreCCLarrayG)))
                return(ralphScoreCCinstanceQ(ralphScoreCCfirst(form__1546), ralphScoreCCLsymbolG));
            else
                return(false);
        };
    }
    (exports)['expression?'] = expressionQ__1547;
    ralphScoreCCMannotate_function(expressionQ__1547, 'expressionQ', false);
}
{
    {
        var ralphScoreCCnot = B1541['not'];
        var ralphScoreCCsignal = B1541['signal'];
        var ralphSformatCCformat_to_string = B1543['format-to-string'];
        var check_type__1553 = function B1549(value__1550, type__1551, format_string__1552) {
            if (($T)(ralphScoreCCnot(ralphScoreCCinstanceQ(value__1550, type__1551))))
                return(ralphScoreCCsignal(ralphSformatCCformat_to_string(format_string__1552, value__1550)));
            else
                return(false);
        };
    }
    (exports)['check-type'] = check_type__1553;
    ralphScoreCCMannotate_function(check_type__1553, 'check_type', false);
}
{
    {
        var ralphScoreCCfind_key = B1541['find-key'];
        var ralphScoreCCcurry = B1541['curry'];
        var ralphScoreCCE = B1541['='];
        var ralphScoreCCcopy_sequence = B1541['copy-sequence'];
        var ralphScoreCCsize = B1541['size'];
        var ralphScoreCCelement = B1541['element'];
        var ralphScoreCCinc = B1541['inc'];
        var B1562 = $REST;
        var B1563 = $KEY;
        var B1564 = $K('end');
        var B1565 = $K('start');
        var destructure_parameter_list__1575 = function B1566(list__1567) {
            {
                var position__1568 = false;
            }
            position__1568 = function B1569(symbol__1570) {
                return(ralphScoreCCfind_key(list__1567, ralphScoreCCcurry(ralphScoreCCE, symbol__1570)));
            };
            {
                var rest__1571 = position__1568(B1562);
                var key__1572 = position__1568(B1563);
                var B1573 = rest__1571;
                var B1576 = false;
            }
            if (($T)(B1573))
                B1576 = B1573;
            else {
                {
                    var B1574 = key__1572;
                }
                if (($T)(B1574))
                    B1576 = B1574;
                else
                    B1576 = ralphScoreCCsize(list__1567);
            }
            {
                var B1577 = ralphScoreCCcopy_sequence(list__1567, B1564, B1576);
                var B1578 = false;
            }
            if (($T)(rest__1571))
                B1578 = ralphScoreCCelement(list__1567, ralphScoreCCinc(rest__1571));
            else
                B1578 = false;
            {
                var B1579 = false;
            }
            if (($T)(key__1572))
                B1579 = ralphScoreCCcopy_sequence(list__1567, B1565, ralphScoreCCinc(key__1572));
            else
                B1579 = false;
            return([
                B1577,
                B1578,
                B1579
            ]);
        };
    }
    (exports)['destructure-parameter-list'] = destructure_parameter_list__1575;
    ralphScoreCCMannotate_function(destructure_parameter_list__1575, 'destructure_parameter_list', false);
}
{
    {
        var ralphScoreCCEE = B1541['=='];
        var ralphScoreCCsymbol_name = B1541['symbol-name'];
        var opQ__1584 = function B1581(op__1582, exp__1583) {
            if (($T)(expressionQ__1547(exp__1583)))
                return(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__1583)), op__1582));
            else
                return(false);
        };
    }
    (exports)['op?'] = opQ__1584;
    ralphScoreCCMannotate_function(opQ__1584, 'opQ', false);
}
{
    {
        var ralphScoreCCMkeys = B1541['%keys'];
        var ralphScoreCCLstringG = B1541['<string>'];
        var ralphScoreCCas_set = B1541['as-set'];
        var ralphScoreCCmap = B1541['map'];
        var ralphScoreCCas_object = B1541['as-object'];
        var ralphScoreCCdo = B1541['do'];
        var ralphScoreCCremoveN = B1541['remove!'];
        var ralphScoreCCset_unionN = B1541['set-union!'];
        var ralphScoreCCobject_properties = B1541['object-properties'];
        var ralphScoreCCget = B1541['get'];
        var ralphScoreCCconcatenate = B1541['concatenate'];
        var process_import_names__1611 = function B1592(all__1593) {
            {
                var B1594 = $SL.call(arguments, 1);
                var B1595 = ralphScoreCCMkeys(B1594, {
                        'only': false,
                        'exclude': false,
                        'prefix': false,
                        'rename': false
                    });
                var only__1596 = B1595['only'];
                var exclude__1597 = B1595['exclude'];
                var prefix__1598 = B1595['prefix'];
                var rename__1599 = B1595['rename'];
                var resolve__1600 = false;
            }
            resolve__1600 = function B1601(exp__1602) {
                if (($T)(ralphScoreCCinstanceQ(exp__1602, ralphScoreCCLstringG)))
                    return(exp__1602);
                else
                    return(identifier_name__1603(exp__1602));
            };
            {
                var B1612 = false;
            }
            if (($T)(ralphScoreCCinstanceQ(only__1596, ralphScoreCCLarrayG)))
                B1612 = ralphScoreCCmap(resolve__1600, only__1596);
            else
                B1612 = all__1593;
            {
                var names__1604 = ralphScoreCCas_set(B1612);
                var B1605 = rename__1599;
                var B1613 = false;
            }
            if (($T)(B1605))
                B1613 = B1605;
            else
                B1613 = [];
            {
                var B1614 = ralphScoreCCmap(resolve__1600, B1613);
                var renamings__1606 = ralphScoreCCas_object(B1614);
            }
            ralphScoreCCdo(ralphScoreCCcurry(ralphScoreCCremoveN, names__1604), ralphScoreCCmap(resolve__1600, exclude__1597));
            ralphScoreCCset_unionN(names__1604, ralphScoreCCobject_properties(renamings__1606));
            return(ralphScoreCCmap(function B1607(name__1608) {
                {
                    var B1609 = ralphScoreCCget(renamings__1606, name__1608);
                }
                if (($T)(B1609)) {
                    {
                        var renaming__1610 = B1609;
                    }
                    return([
                        name__1608,
                        renaming__1610
                    ]);
                } else if (($T)(ralphScoreCCinstanceQ(prefix__1598, ralphScoreCCLstringG)))
                    return([
                        name__1608,
                        ralphScoreCCconcatenate(prefix__1598, name__1608)
                    ]);
                else
                    return(name__1608);
            }, names__1604));
        };
    }
    (exports)['process-import-names'] = process_import_names__1611;
    ralphScoreCCMannotate_function(process_import_names__1611, 'process_import_names', false);
}
{
    {
        var ralphScoreCCsymbol = B1541['symbol'];
        var transform_setter_identifier__1618 = function B1616(identifier__1617) {
            return(ralphScoreCCsymbol(ralphScoreCCconcatenate(ralphScoreCCsymbol_name(identifier__1617), '-setter')));
        };
    }
    (exports)['transform-setter-identifier'] = transform_setter_identifier__1618;
    ralphScoreCCMannotate_function(transform_setter_identifier__1618, 'transform_setter_identifier', false);
}
{
    {
        var ralphScoreCCeveryQ = B1541['every?'];
        var ralphScoreCCrcurry = B1541['rcurry'];
        var setter_identifierQ__1622 = function B1620(form__1621) {
            if (($T)(ralphScoreCCinstanceQ(form__1621, ralphScoreCCLarrayG)))
                if (($T)(ralphScoreCCEE(ralphScoreCCsize(form__1621), 2)))
                    if (($T)(ralphScoreCCeveryQ(ralphScoreCCrcurry(ralphScoreCCinstanceQ, ralphScoreCCLsymbolG), form__1621)))
                        return(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(form__1621)), 'setter'));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
    }
    (exports)['setter-identifier?'] = setter_identifierQ__1622;
    ralphScoreCCMannotate_function(setter_identifierQ__1622, 'setter_identifierQ', false);
}
{
    {
        var ralphScoreCCsecond = B1541['second'];
        var identifier_name__1603 = function B1624(identifier__1625) {
            {
                var B1626 = false;
            }
            if (($T)(setter_identifierQ__1622(identifier__1625)))
                B1626 = transform_setter_identifier__1618(ralphScoreCCsecond(identifier__1625));
            else
                B1626 = identifier__1625;
            return(ralphScoreCCsymbol_name(B1626));
        };
    }
    (exports)['identifier-name'] = identifier_name__1603;
    ralphScoreCCMannotate_function(identifier_name__1603, 'identifier_name', false);
}
