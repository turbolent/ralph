require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1493(name__1494, value__1495) {
            var B1497 = (exports);
            return(B1497[name__1494] = value__1495);
        };
        {
            ($module)['%eval'] = function B1496() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1498 = require('ralph/core');
var B1499 = require('ralph/format');
($module)['$special-symbol-names'] = [
    '%all-arguments',
    '%this-method'
];
{
    {
        ($module)['special-symbol?'] = function B1501(symbol__1502) {
            return(B1498['member?'](B1498['symbol-name'](symbol__1502), ($module)['$special-symbol-names']));
        };
        ($module)['%export']('special-symbol?', ($module)['special-symbol?']);
    }
    B1498['%annotate-function'](($module)['special-symbol?'], 'special-symbol?', false);
}
{
    {
        ($module)['check-type'] = function B1504(value__1505, type__1506, format_string__1507) {
            if (($T)(B1498['not'](B1498['instance?'](value__1505, type__1506))))
                return(B1498['signal'](B1499['format-to-string'](format_string__1507, value__1505)));
            else
                return(false);
        };
        ($module)['%export']('check-type', ($module)['check-type']);
    }
    B1498['%annotate-function'](($module)['check-type'], 'check-type', false);
}
{
    {
        ($module)['check-identifier'] = function B1511(identifier__1512, env__1513, format_string__1514) {
            var B1517 = B1498['not'];
            {
                var B1515 = B1498['not'](B1498['get'](identifier__1512, 'module'));
                {
                    var B1518 = false;
                    if (($T)(B1515))
                        B1518 = B1515;
                    else
                        B1518 = B1498['=='](B1498['get'](identifier__1512, 'module'), B1498['get'](env__1513, 'module', 'name'));
                    {
                        var B1519 = B1517(B1518);
                        if (($T)(B1519)) {
                            var B1520 = B1498['signal'];
                            {
                                var B1521 = B1499['format-to-string'];
                                {
                                    var B1516 = format_string__1514;
                                    {
                                        var B1522 = false;
                                        if (($T)(B1516))
                                            B1522 = B1516;
                                        else
                                            B1522 = 'External identifier: %=';
                                        {
                                            var B1523 = B1521(B1522, identifier__1512);
                                            return(B1520(B1523));
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
    B1498['%annotate-function'](($module)['check-identifier'], 'check-identifier', false);
}
{
    var B1528 = $REST;
    {
        var B1529 = $KEY;
        {
            var B1530 = $K('end');
            {
                var B1531 = $K('start');
                {
                    {
                        ($module)['destructure-parameter-list'] = function B1532(list__1533) {
                            var position__1534 = false;
                            {
                                position__1534 = function B1535(symbol__1536) {
                                    return(B1498['find-key'](list__1533, B1498['curry'](B1498['='], symbol__1536)));
                                };
                                {
                                    var rest__1537 = position__1534(B1528);
                                    {
                                        var key__1538 = position__1534(B1529);
                                        {
                                            var B1541 = B1498['copy-sequence'];
                                            {
                                                var B1539 = rest__1537;
                                                {
                                                    var B1542 = false;
                                                    if (($T)(B1539))
                                                        B1542 = B1539;
                                                    else {
                                                        var B1540 = key__1538;
                                                        if (($T)(B1540))
                                                            B1542 = B1540;
                                                        else
                                                            B1542 = B1498['size'](list__1533);
                                                    }
                                                    {
                                                        var B1543 = B1541(list__1533, B1530, B1542);
                                                        {
                                                            var B1544 = false;
                                                            if (($T)(rest__1537))
                                                                B1544 = B1498['element'](list__1533, B1498['inc'](rest__1537));
                                                            else
                                                                B1544 = false;
                                                            {
                                                                var B1545 = false;
                                                                if (($T)(key__1538))
                                                                    B1545 = B1498['copy-sequence'](list__1533, B1531, B1498['inc'](key__1538));
                                                                else
                                                                    B1545 = false;
                                                                return([
                                                                    B1543,
                                                                    B1544,
                                                                    B1545
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
                    B1498['%annotate-function'](($module)['destructure-parameter-list'], 'destructure-parameter-list', false);
                }
            }
        }
    }
}
{
    {
        ($module)['op?'] = function B1547(op__1548, exp__1549) {
            if (($T)(B1498['expression?'](exp__1549)))
                return(B1498['=='](B1498['symbol-name'](B1498['first'](exp__1549)), op__1548));
            else
                return(false);
        };
        ($module)['%export']('op?', ($module)['op?']);
    }
    B1498['%annotate-function'](($module)['op?'], 'op?', false);
}
{
    {
        ($module)['process-import-names'] = function B1557(all__1558) {
            var B1559 = $SL.call(arguments, 1);
            {
                var B1560 = B1498['%keys'](B1559, {
                        'only': false,
                        'exclude': false,
                        'prefix': false,
                        'rename': false
                    });
                {
                    var only__1561 = B1560['only'];
                    {
                        var exclude__1562 = B1560['exclude'];
                        {
                            var prefix__1563 = B1560['prefix'];
                            {
                                var rename__1564 = B1560['rename'];
                                {
                                    var resolve__1565 = false;
                                    {
                                        resolve__1565 = function B1566(exp__1567) {
                                            if (($T)(B1498['instance?'](exp__1567, B1498['<string>'])))
                                                return(exp__1567);
                                            else
                                                return(($module)['identifier-name'](exp__1567));
                                        };
                                        {
                                            var B1575 = B1498['as-set'];
                                            {
                                                var B1576 = false;
                                                if (($T)(B1498['instance?'](only__1561, B1498['<array>'])))
                                                    B1576 = B1498['map'](resolve__1565, only__1561);
                                                else
                                                    B1576 = all__1558;
                                                {
                                                    var names__1568 = B1575(B1576);
                                                    {
                                                        var B1577 = B1498['as-object'];
                                                        {
                                                            var B1578 = B1498['map'];
                                                            {
                                                                var B1569 = rename__1564;
                                                                {
                                                                    var B1579 = false;
                                                                    if (($T)(B1569))
                                                                        B1579 = B1569;
                                                                    else
                                                                        B1579 = [];
                                                                    {
                                                                        var B1580 = B1578(resolve__1565, B1579);
                                                                        {
                                                                            var renamings__1570 = B1577(B1580);
                                                                            {
                                                                                B1498['do'](B1498['curry'](B1498['remove!'], names__1568), B1498['map'](resolve__1565, exclude__1562));
                                                                                {
                                                                                    B1498['set-union!'](names__1568, B1498['object-properties'](renamings__1570));
                                                                                    return(B1498['map'](function B1571(name__1572) {
                                                                                        var B1573 = B1498['get'](renamings__1570, name__1572);
                                                                                        if (($T)(B1573)) {
                                                                                            var renaming__1574 = B1573;
                                                                                            return([
                                                                                                name__1572,
                                                                                                renaming__1574
                                                                                            ]);
                                                                                        } else if (($T)(B1498['instance?'](prefix__1563, B1498['<string>'])))
                                                                                            return([
                                                                                                name__1572,
                                                                                                B1498['concatenate'](prefix__1563, name__1572)
                                                                                            ]);
                                                                                        else
                                                                                            return(name__1572);
                                                                                    }, names__1568));
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
    B1498['%annotate-function'](($module)['process-import-names'], 'process-import-names', false);
}
{
    {
        ($module)['transform-setter-identifier'] = function B1582(identifier__1583) {
            return(B1498['symbol'](B1498['concatenate'](B1498['symbol-name'](identifier__1583), '-setter')));
        };
        ($module)['%export']('transform-setter-identifier', ($module)['transform-setter-identifier']);
    }
    B1498['%annotate-function'](($module)['transform-setter-identifier'], 'transform-setter-identifier', false);
}
{
    {
        ($module)['setter-identifier?'] = function B1585(form__1586) {
            if (($T)(B1498['instance?'](form__1586, B1498['<array>'])))
                if (($T)(B1498['=='](B1498['size'](form__1586), 2)))
                    if (($T)(B1498['every?'](B1498['rcurry'](B1498['instance?'], B1498['<symbol>']), form__1586)))
                        return(B1498['=='](B1498['symbol-name'](B1498['first'](form__1586)), 'setter'));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
        ($module)['%export']('setter-identifier?', ($module)['setter-identifier?']);
    }
    B1498['%annotate-function'](($module)['setter-identifier?'], 'setter-identifier?', false);
}
{
    {
        ($module)['identifier-name'] = function B1588(identifier__1589) {
            var B1590 = B1498['symbol-name'];
            {
                var B1591 = false;
                if (($T)(($module)['setter-identifier?'](identifier__1589)))
                    B1591 = ($module)['transform-setter-identifier'](B1498['second'](identifier__1589));
                else
                    B1591 = identifier__1589;
                return(B1590(B1591));
            }
        };
        ($module)['%export']('identifier-name', ($module)['identifier-name']);
    }
    B1498['%annotate-function'](($module)['identifier-name'], 'identifier-name', false);
}
