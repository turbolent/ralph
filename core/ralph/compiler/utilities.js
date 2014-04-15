{
    var $module = Object.create(null);
    {
        ($module)['%export'] = function B1461(name__1462, value__1463) {
            var B1465 = (exports);
            return(B1465[name__1462] = value__1463);
        };
        {
            ($module)['%eval'] = function B1464() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1466 = require('ralph/core');
var B1467 = require('ralph/format');
($module)['$special-symbol-names'] = [
    '%all-arguments',
    '%this-method'
];
{
    {
        ($module)['special-symbol?'] = function B1469(symbol__1470) {
            return(B1466['member?'](B1466['symbol-name'](symbol__1470), ($module)['$special-symbol-names']));
        };
        ($module)['%export']('special-symbol?', ($module)['special-symbol?']);
    }
    B1466['%annotate-function'](($module)['special-symbol?'], 'special-symbol?', false);
}
{
    {
        ($module)['check-type'] = function B1472(value__1473, type__1474, format_string__1475) {
            if (($T)(B1466['not'](B1466['instance?'](value__1473, type__1474))))
                return(B1466['signal'](B1467['format-to-string'](format_string__1475, value__1473)));
            else
                return(false);
        };
        ($module)['%export']('check-type', ($module)['check-type']);
    }
    B1466['%annotate-function'](($module)['check-type'], 'check-type', false);
}
{
    {
        ($module)['check-identifier'] = function B1479(identifier__1480, env__1481, format_string__1482) {
            var B1485 = B1466['not'];
            {
                var B1483 = B1466['not'](B1466['get'](identifier__1480, 'module'));
                {
                    var B1486 = false;
                    if (($T)(B1483))
                        B1486 = B1483;
                    else
                        B1486 = B1466['=='](B1466['get'](identifier__1480, 'module'), B1466['get'](env__1481, 'module', 'name'));
                    {
                        var B1487 = B1485(B1486);
                        if (($T)(B1487)) {
                            var B1488 = B1466['signal'];
                            {
                                var B1489 = B1467['format-to-string'];
                                {
                                    var B1484 = format_string__1482;
                                    {
                                        var B1490 = false;
                                        if (($T)(B1484))
                                            B1490 = B1484;
                                        else
                                            B1490 = 'External identifier: %=';
                                        {
                                            var B1491 = B1489(B1490, identifier__1480);
                                            return(B1488(B1491));
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
    B1466['%annotate-function'](($module)['check-identifier'], 'check-identifier', false);
}
{
    var B1496 = $REST;
    {
        var B1497 = $KEY;
        {
            var B1498 = $K('end');
            {
                var B1499 = $K('start');
                {
                    {
                        ($module)['destructure-parameter-list'] = function B1500(list__1501) {
                            var position__1502 = false;
                            {
                                position__1502 = function B1503(symbol__1504) {
                                    return(B1466['find-key'](list__1501, B1466['curry'](B1466['='], symbol__1504)));
                                };
                                {
                                    var rest__1505 = position__1502(B1496);
                                    {
                                        var key__1506 = position__1502(B1497);
                                        {
                                            var B1509 = B1466['copy-sequence'];
                                            {
                                                var B1507 = rest__1505;
                                                {
                                                    var B1510 = false;
                                                    if (($T)(B1507))
                                                        B1510 = B1507;
                                                    else {
                                                        var B1508 = key__1506;
                                                        if (($T)(B1508))
                                                            B1510 = B1508;
                                                        else
                                                            B1510 = B1466['size'](list__1501);
                                                    }
                                                    {
                                                        var B1511 = B1509(list__1501, B1498, B1510);
                                                        {
                                                            var B1512 = false;
                                                            if (($T)(rest__1505))
                                                                B1512 = B1466['element'](list__1501, B1466['inc'](rest__1505));
                                                            else
                                                                B1512 = false;
                                                            {
                                                                var B1513 = false;
                                                                if (($T)(key__1506))
                                                                    B1513 = B1466['copy-sequence'](list__1501, B1499, B1466['inc'](key__1506));
                                                                else
                                                                    B1513 = false;
                                                                return([
                                                                    B1511,
                                                                    B1512,
                                                                    B1513
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
                    B1466['%annotate-function'](($module)['destructure-parameter-list'], 'destructure-parameter-list', false);
                }
            }
        }
    }
}
{
    {
        ($module)['op?'] = function B1515(op__1516, exp__1517) {
            if (($T)(B1466['expression?'](exp__1517)))
                return(B1466['=='](B1466['symbol-name'](B1466['first'](exp__1517)), op__1516));
            else
                return(false);
        };
        ($module)['%export']('op?', ($module)['op?']);
    }
    B1466['%annotate-function'](($module)['op?'], 'op?', false);
}
{
    {
        ($module)['process-import-names'] = function B1525(all__1526) {
            var B1527 = $SL.call(arguments, 1);
            {
                var B1528 = B1466['%keys'](B1527, {
                        'only': false,
                        'exclude': false,
                        'prefix': false,
                        'rename': false
                    });
                {
                    var only__1529 = B1528['only'];
                    {
                        var exclude__1530 = B1528['exclude'];
                        {
                            var prefix__1531 = B1528['prefix'];
                            {
                                var rename__1532 = B1528['rename'];
                                {
                                    var resolve__1533 = false;
                                    {
                                        resolve__1533 = function B1534(exp__1535) {
                                            if (($T)(B1466['instance?'](exp__1535, B1466['<string>'])))
                                                return(exp__1535);
                                            else
                                                return(($module)['identifier-name'](exp__1535));
                                        };
                                        {
                                            var B1543 = B1466['as-set'];
                                            {
                                                var B1544 = false;
                                                if (($T)(B1466['instance?'](only__1529, B1466['<array>'])))
                                                    B1544 = B1466['map'](resolve__1533, only__1529);
                                                else
                                                    B1544 = all__1526;
                                                {
                                                    var names__1536 = B1543(B1544);
                                                    {
                                                        var B1545 = B1466['as-object'];
                                                        {
                                                            var B1546 = B1466['map'];
                                                            {
                                                                var B1537 = rename__1532;
                                                                {
                                                                    var B1547 = false;
                                                                    if (($T)(B1537))
                                                                        B1547 = B1537;
                                                                    else
                                                                        B1547 = [];
                                                                    {
                                                                        var B1548 = B1546(resolve__1533, B1547);
                                                                        {
                                                                            var renamings__1538 = B1545(B1548);
                                                                            {
                                                                                B1466['do'](B1466['curry'](B1466['remove!'], names__1536), B1466['map'](resolve__1533, exclude__1530));
                                                                                {
                                                                                    B1466['set-union!'](names__1536, B1466['object-properties'](renamings__1538));
                                                                                    return(B1466['map'](function B1539(name__1540) {
                                                                                        var B1541 = B1466['get'](renamings__1538, name__1540);
                                                                                        if (($T)(B1541)) {
                                                                                            var renaming__1542 = B1541;
                                                                                            return([
                                                                                                name__1540,
                                                                                                renaming__1542
                                                                                            ]);
                                                                                        } else if (($T)(B1466['instance?'](prefix__1531, B1466['<string>'])))
                                                                                            return([
                                                                                                name__1540,
                                                                                                B1466['concatenate'](prefix__1531, name__1540)
                                                                                            ]);
                                                                                        else
                                                                                            return(name__1540);
                                                                                    }, names__1536));
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
    B1466['%annotate-function'](($module)['process-import-names'], 'process-import-names', false);
}
{
    {
        ($module)['transform-setter-identifier'] = function B1550(identifier__1551) {
            return(B1466['symbol'](B1466['concatenate'](B1466['symbol-name'](identifier__1551), '-setter')));
        };
        ($module)['%export']('transform-setter-identifier', ($module)['transform-setter-identifier']);
    }
    B1466['%annotate-function'](($module)['transform-setter-identifier'], 'transform-setter-identifier', false);
}
{
    {
        ($module)['setter-identifier?'] = function B1553(form__1554) {
            if (($T)(B1466['instance?'](form__1554, B1466['<array>'])))
                if (($T)(B1466['=='](B1466['size'](form__1554), 2)))
                    if (($T)(B1466['every?'](B1466['rcurry'](B1466['instance?'], B1466['<symbol>']), form__1554)))
                        return(B1466['=='](B1466['symbol-name'](B1466['first'](form__1554)), 'setter'));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
        ($module)['%export']('setter-identifier?', ($module)['setter-identifier?']);
    }
    B1466['%annotate-function'](($module)['setter-identifier?'], 'setter-identifier?', false);
}
{
    {
        ($module)['identifier-name'] = function B1556(identifier__1557) {
            var B1558 = B1466['symbol-name'];
            {
                var B1559 = false;
                if (($T)(($module)['setter-identifier?'](identifier__1557)))
                    B1559 = ($module)['transform-setter-identifier'](B1466['second'](identifier__1557));
                else
                    B1559 = identifier__1557;
                return(B1558(B1559));
            }
        };
        ($module)['%export']('identifier-name', ($module)['identifier-name']);
    }
    B1466['%annotate-function'](($module)['identifier-name'], 'identifier-name', false);
}
