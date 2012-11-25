var B1548 = require('ralph/core');
var B1550 = require('ralph/format');
{
    var ralphScoreCCMvar = B1548['%var'], ralphScoreCCMmake_function = B1548['%make-function'], ralphScoreCCinstanceQ = B1548['instance?'], ralphScoreCCLarrayG = B1548['<array>'], ralphScoreCCfirst = B1548['first'], ralphScoreCCLsymbolG = B1548['<symbol>'], expressionQ__1554 = ralphScoreCCMmake_function('expressionQ', function B1552(form__1553) {
            if (($T)(ralphScoreCCinstanceQ(form__1553, ralphScoreCCLarrayG)))
                return(ralphScoreCCinstanceQ(ralphScoreCCfirst(form__1553), ralphScoreCCLsymbolG));
            else
                return(false);
        }, false);
    (exports)['expression?'] = expressionQ__1554;
}
{
    var ralphScoreCCnot = B1548['not'], ralphScoreCCsignal = B1548['signal'], ralphSformatCCformat_to_string = B1550['format-to-string'], check_type__1560 = ralphScoreCCMmake_function('check_type', function B1556(value__1557, type__1558, format_string__1559) {
            if (($T)(ralphScoreCCnot(ralphScoreCCinstanceQ(value__1557, type__1558))))
                return(ralphScoreCCsignal(ralphSformatCCformat_to_string(format_string__1559, value__1557)));
            else
                return(false);
        }, false);
    (exports)['check-type'] = check_type__1560;
}
{
    var ralphScoreCCfind_key = B1548['find-key'], ralphScoreCCcurry = B1548['curry'], ralphScoreCCE = B1548['='], ralphScoreCCcopy_sequence = B1548['copy-sequence'], ralphScoreCCsize = B1548['size'], ralphScoreCCelement = B1548['element'], ralphScoreCCinc = B1548['inc'], B1569 = $REST, B1570 = $KEY, B1571 = $K('end'), B1572 = $K('start'), destructure_parameter_list__1582 = ralphScoreCCMmake_function('destructure_parameter_list', function B1573(list__1574) {
            var position__1575 = false;
            position__1575 = function B1576(symbol__1577) {
                return(ralphScoreCCfind_key(list__1574, ralphScoreCCcurry(ralphScoreCCE, symbol__1577)));
            };
            var rest__1578 = position__1575(B1569), key__1579 = position__1575(B1570), B1580 = rest__1578, B1583 = false;
            if (($T)(B1580))
                B1583 = B1580;
            else {
                var B1581 = key__1579;
                if (($T)(B1581))
                    B1583 = B1581;
                else
                    B1583 = ralphScoreCCsize(list__1574);
            }
            var B1584 = ralphScoreCCcopy_sequence(list__1574, B1571, B1583), B1585 = false;
            if (($T)(rest__1578))
                B1585 = ralphScoreCCelement(list__1574, ralphScoreCCinc(rest__1578));
            else
                B1585 = false;
            var B1586 = false;
            if (($T)(key__1579))
                B1586 = ralphScoreCCcopy_sequence(list__1574, B1572, ralphScoreCCinc(key__1579));
            else
                B1586 = false;
            return([
                B1584,
                B1585,
                B1586
            ]);
        }, false);
    (exports)['destructure-parameter-list'] = destructure_parameter_list__1582;
}
{
    var ralphScoreCCEE = B1548['=='], ralphScoreCCsymbol_name = B1548['symbol-name'], opQ__1591 = ralphScoreCCMmake_function('opQ', function B1588(op__1589, exp__1590) {
            if (($T)(expressionQ__1554(exp__1590)))
                return(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(exp__1590)), op__1589));
            else
                return(false);
        }, false);
    (exports)['op?'] = opQ__1591;
}
{
    var ralphScoreCCMkeys = B1548['%keys'], ralphScoreCCLstringG = B1548['<string>'], ralphScoreCCas_set = B1548['as-set'], ralphScoreCCmap = B1548['map'], ralphScoreCCas_object = B1548['as-object'], ralphScoreCCdo = B1548['do'], ralphScoreCCremoveN = B1548['remove!'], ralphScoreCCset_unionN = B1548['set-union!'], ralphScoreCCobject_properties = B1548['object-properties'], ralphScoreCCget = B1548['get'], ralphScoreCCconcatenate = B1548['concatenate'], process_import_names__1618 = ralphScoreCCMmake_function('process_import_names', function B1599(all__1600) {
            var B1601 = $SL.call(arguments, 1), B1602 = ralphScoreCCMkeys(B1601, {
                    'only': false,
                    'exclude': false,
                    'prefix': false,
                    'rename': false
                }), only__1603 = B1602['only'], exclude__1604 = B1602['exclude'], prefix__1605 = B1602['prefix'], rename__1606 = B1602['rename'], resolve__1607 = false;
            resolve__1607 = function B1608(exp__1609) {
                if (($T)(ralphScoreCCinstanceQ(exp__1609, ralphScoreCCLstringG)))
                    return(exp__1609);
                else
                    return(identifier_name__1610(exp__1609));
            };
            var B1619 = false;
            if (($T)(ralphScoreCCinstanceQ(only__1603, ralphScoreCCLarrayG)))
                B1619 = ralphScoreCCmap(resolve__1607, only__1603);
            else
                B1619 = all__1600;
            var names__1611 = ralphScoreCCas_set(B1619), B1612 = rename__1606, B1620 = false;
            if (($T)(B1612))
                B1620 = B1612;
            else
                B1620 = [];
            var B1621 = ralphScoreCCmap(resolve__1607, B1620), renamings__1613 = ralphScoreCCas_object(B1621);
            ralphScoreCCdo(ralphScoreCCcurry(ralphScoreCCremoveN, names__1611), ralphScoreCCmap(resolve__1607, exclude__1604));
            ralphScoreCCset_unionN(names__1611, ralphScoreCCobject_properties(renamings__1613));
            return(ralphScoreCCmap(function B1614(name__1615) {
                var B1616 = ralphScoreCCget(renamings__1613, name__1615);
                if (($T)(B1616)) {
                    var renaming__1617 = B1616;
                    return([
                        name__1615,
                        renaming__1617
                    ]);
                } else if (($T)(ralphScoreCCinstanceQ(prefix__1605, ralphScoreCCLstringG)))
                    return([
                        name__1615,
                        ralphScoreCCconcatenate(prefix__1605, name__1615)
                    ]);
                else
                    return(name__1615);
            }, names__1611));
        }, false);
    (exports)['process-import-names'] = process_import_names__1618;
}
{
    var ralphScoreCCsymbol = B1548['symbol'], transform_setter_identifier__1625 = ralphScoreCCMmake_function('transform_setter_identifier', function B1623(identifier__1624) {
            return(ralphScoreCCsymbol(ralphScoreCCconcatenate(ralphScoreCCsymbol_name(identifier__1624), '-setter')));
        }, false);
    (exports)['transform-setter-identifier'] = transform_setter_identifier__1625;
}
{
    var ralphScoreCCeveryQ = B1548['every?'], ralphScoreCCrcurry = B1548['rcurry'], setter_identifierQ__1629 = ralphScoreCCMmake_function('setter_identifierQ', function B1627(form__1628) {
            if (($T)(ralphScoreCCinstanceQ(form__1628, ralphScoreCCLarrayG)))
                if (($T)(ralphScoreCCEE(ralphScoreCCsize(form__1628), 2)))
                    if (($T)(ralphScoreCCeveryQ(ralphScoreCCrcurry(ralphScoreCCinstanceQ, ralphScoreCCLsymbolG), form__1628)))
                        return(ralphScoreCCEE(ralphScoreCCsymbol_name(ralphScoreCCfirst(form__1628)), 'setter'));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        }, false);
    (exports)['setter-identifier?'] = setter_identifierQ__1629;
}
{
    var ralphScoreCCsecond = B1548['second'], identifier_name__1610 = ralphScoreCCMmake_function('identifier_name', function B1631(identifier__1632) {
            var B1633 = false;
            if (($T)(setter_identifierQ__1629(identifier__1632)))
                B1633 = transform_setter_identifier__1625(ralphScoreCCsecond(identifier__1632));
            else
                B1633 = identifier__1632;
            return(ralphScoreCCsymbol_name(B1633));
        }, false);
    (exports)['identifier-name'] = identifier_name__1610;
}
