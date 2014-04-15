require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1483(name__1484, value__1485) {
            var B1487 = (exports);
            return(B1487[name__1484] = value__1485);
        };
        {
            ($module)['%eval'] = function B1486() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1488 = require('ralph/core');
var B1489 = require('ralph/format');
($module)['$special-symbol-names'] = [
    '%all-arguments',
    '%this-method'
];
{
    {
        ($module)['special-symbol?'] = function B1491(symbol__1492) {
            return(B1488['member?'](B1488['symbol-name'](symbol__1492), ($module)['$special-symbol-names']));
        };
        ($module)['%export']('special-symbol?', ($module)['special-symbol?']);
    }
    B1488['%annotate-function'](($module)['special-symbol?'], 'special-symbol?', false);
}
{
    {
        ($module)['check-type'] = function B1494(value__1495, type__1496, format_string__1497) {
            if (($T)(B1488['not'](B1488['instance?'](value__1495, type__1496))))
                return(B1488['signal'](B1489['format-to-string'](format_string__1497, value__1495)));
            else
                return(false);
        };
        ($module)['%export']('check-type', ($module)['check-type']);
    }
    B1488['%annotate-function'](($module)['check-type'], 'check-type', false);
}
{
    {
        ($module)['check-identifier'] = function B1501(identifier__1502, env__1503, format_string__1504) {
            var B1507 = B1488['not'];
            {
                var B1505 = B1488['not'](B1488['get'](identifier__1502, 'module'));
                {
                    var B1508 = false;
                    if (($T)(B1505))
                        B1508 = B1505;
                    else
                        B1508 = B1488['=='](B1488['get'](identifier__1502, 'module'), B1488['get'](env__1503, 'module', 'name'));
                    {
                        var B1509 = B1507(B1508);
                        if (($T)(B1509)) {
                            var B1510 = B1488['signal'];
                            {
                                var B1511 = B1489['format-to-string'];
                                {
                                    var B1506 = format_string__1504;
                                    {
                                        var B1512 = false;
                                        if (($T)(B1506))
                                            B1512 = B1506;
                                        else
                                            B1512 = 'External identifier: %=';
                                        {
                                            var B1513 = B1511(B1512, identifier__1502);
                                            return(B1510(B1513));
                                        }
                                    }
                                }
                            }
                        } else
                            return(false);
                    }
                }
            }
        };
        ($module)['%export']('check-identifier', ($module)['check-identifier']);
    }
    B1488['%annotate-function'](($module)['check-identifier'], 'check-identifier', false);
}
{
    var B1518 = $REST;
    {
        var B1519 = $KEY;
        {
            var B1520 = $K('end');
            {
                var B1521 = $K('start');
                {
                    {
                        ($module)['destructure-parameter-list'] = function B1522(list__1523) {
                            var position__1524 = false;
                            {
                                position__1524 = function B1525(symbol__1526) {
                                    return(B1488['find-key'](list__1523, B1488['curry'](B1488['='], symbol__1526)));
                                };
                                {
                                    var rest__1527 = position__1524(B1518);
                                    {
                                        var key__1528 = position__1524(B1519);
                                        {
                                            var B1531 = B1488['copy-sequence'];
                                            {
                                                var B1529 = rest__1527;
                                                {
                                                    var B1532 = false;
                                                    if (($T)(B1529))
                                                        B1532 = B1529;
                                                    else {
                                                        var B1530 = key__1528;
                                                        if (($T)(B1530))
                                                            B1532 = B1530;
                                                        else
                                                            B1532 = B1488['size'](list__1523);
                                                    }
                                                    {
                                                        var B1533 = B1531(list__1523, B1520, B1532);
                                                        {
                                                            var B1534 = false;
                                                            if (($T)(rest__1527))
                                                                B1534 = B1488['element'](list__1523, B1488['inc'](rest__1527));
                                                            else
                                                                B1534 = false;
                                                            {
                                                                var B1535 = false;
                                                                if (($T)(key__1528))
                                                                    B1535 = B1488['copy-sequence'](list__1523, B1521, B1488['inc'](key__1528));
                                                                else
                                                                    B1535 = false;
                                                                return([
                                                                    B1533,
                                                                    B1534,
                                                                    B1535
                                                                ]);
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
                        ($module)['%export']('destructure-parameter-list', ($module)['destructure-parameter-list']);
                    }
                    B1488['%annotate-function'](($module)['destructure-parameter-list'], 'destructure-parameter-list', false);
                }
            }
        }
    }
}
{
    {
        ($module)['op?'] = function B1537(op__1538, exp__1539) {
            if (($T)(B1488['expression?'](exp__1539)))
                return(B1488['=='](B1488['symbol-name'](B1488['first'](exp__1539)), op__1538));
            else
                return(false);
        };
        ($module)['%export']('op?', ($module)['op?']);
    }
    B1488['%annotate-function'](($module)['op?'], 'op?', false);
}
{
    {
        ($module)['process-import-names'] = function B1547(all__1548) {
            var B1549 = $SL.call(arguments, 1);
            {
                var B1550 = B1488['%keys'](B1549, {
                        'only': false,
                        'exclude': false,
                        'prefix': false,
                        'rename': false
                    });
                {
                    var only__1551 = B1550['only'];
                    {
                        var exclude__1552 = B1550['exclude'];
                        {
                            var prefix__1553 = B1550['prefix'];
                            {
                                var rename__1554 = B1550['rename'];
                                {
                                    var resolve__1555 = false;
                                    {
                                        resolve__1555 = function B1556(exp__1557) {
                                            if (($T)(B1488['instance?'](exp__1557, B1488['<string>'])))
                                                return(exp__1557);
                                            else
                                                return(($module)['identifier-name'](exp__1557));
                                        };
                                        {
                                            var B1565 = B1488['as-set'];
                                            {
                                                var B1566 = false;
                                                if (($T)(B1488['instance?'](only__1551, B1488['<array>'])))
                                                    B1566 = B1488['map'](resolve__1555, only__1551);
                                                else
                                                    B1566 = all__1548;
                                                {
                                                    var names__1558 = B1565(B1566);
                                                    {
                                                        var B1567 = B1488['as-object'];
                                                        {
                                                            var B1568 = B1488['map'];
                                                            {
                                                                var B1559 = rename__1554;
                                                                {
                                                                    var B1569 = false;
                                                                    if (($T)(B1559))
                                                                        B1569 = B1559;
                                                                    else
                                                                        B1569 = [];
                                                                    {
                                                                        var B1570 = B1568(resolve__1555, B1569);
                                                                        {
                                                                            var renamings__1560 = B1567(B1570);
                                                                            {
                                                                                B1488['do'](B1488['curry'](B1488['remove!'], names__1558), B1488['map'](resolve__1555, exclude__1552));
                                                                                {
                                                                                    B1488['set-union!'](names__1558, B1488['object-properties'](renamings__1560));
                                                                                    return(B1488['map'](function B1561(name__1562) {
                                                                                        var B1563 = B1488['get'](renamings__1560, name__1562);
                                                                                        if (($T)(B1563)) {
                                                                                            var renaming__1564 = B1563;
                                                                                            return([
                                                                                                name__1562,
                                                                                                renaming__1564
                                                                                            ]);
                                                                                        } else if (($T)(B1488['instance?'](prefix__1553, B1488['<string>'])))
                                                                                            return([
                                                                                                name__1562,
                                                                                                B1488['concatenate'](prefix__1553, name__1562)
                                                                                            ]);
                                                                                        else
                                                                                            return(name__1562);
                                                                                    }, names__1558));
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
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
        ($module)['%export']('process-import-names', ($module)['process-import-names']);
    }
    B1488['%annotate-function'](($module)['process-import-names'], 'process-import-names', false);
}
{
    {
        ($module)['transform-setter-identifier'] = function B1572(identifier__1573) {
            return(B1488['symbol'](B1488['concatenate'](B1488['symbol-name'](identifier__1573), '-setter')));
        };
        ($module)['%export']('transform-setter-identifier', ($module)['transform-setter-identifier']);
    }
    B1488['%annotate-function'](($module)['transform-setter-identifier'], 'transform-setter-identifier', false);
}
{
    {
        ($module)['setter-identifier?'] = function B1575(form__1576) {
            if (($T)(B1488['instance?'](form__1576, B1488['<array>'])))
                if (($T)(B1488['=='](B1488['size'](form__1576), 2)))
                    if (($T)(B1488['every?'](B1488['rcurry'](B1488['instance?'], B1488['<symbol>']), form__1576)))
                        return(B1488['=='](B1488['symbol-name'](B1488['first'](form__1576)), 'setter'));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
        ($module)['%export']('setter-identifier?', ($module)['setter-identifier?']);
    }
    B1488['%annotate-function'](($module)['setter-identifier?'], 'setter-identifier?', false);
}
{
    {
        ($module)['identifier-name'] = function B1578(identifier__1579) {
            var B1580 = B1488['symbol-name'];
            {
                var B1581 = false;
                if (($T)(($module)['setter-identifier?'](identifier__1579)))
                    B1581 = ($module)['transform-setter-identifier'](B1488['second'](identifier__1579));
                else
                    B1581 = identifier__1579;
                return(B1580(B1581));
            }
        };
        ($module)['%export']('identifier-name', ($module)['identifier-name']);
    }
    B1488['%annotate-function'](($module)['identifier-name'], 'identifier-name', false);
}
