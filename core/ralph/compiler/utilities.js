{
    var $module = Object.create(null);
    ($module)['%export'] = function B1458(name__1459, value__1460) {
        var B1461 = (exports);
        return(B1461[name__1459] = value__1460);
    };
}
var B1462 = require('ralph/core');
var B1463 = require('ralph/format');
($module)['$special-symbol-names'] = [
    '%all-arguments',
    '%this-method'
];
{
    {
        ($module)['special-symbol?'] = function B1465(symbol__1466) {
            return(B1462['member?'](B1462['symbol-name'](symbol__1466), ($module)['$special-symbol-names']));
        };
        ($module)['%export']('special-symbol?', ($module)['special-symbol?']);
    }
    B1462['%annotate-function'](($module)['special-symbol?'], 'special-symbol?', false);
}
{
    {
        ($module)['check-type'] = function B1468(value__1469, type__1470, format_string__1471) {
            if (($T)(B1462['not'](B1462['instance?'](value__1469, type__1470))))
                return(B1462['signal'](B1463['format-to-string'](format_string__1471, value__1469)));
            else
                return(false);
        };
        ($module)['%export']('check-type', ($module)['check-type']);
    }
    B1462['%annotate-function'](($module)['check-type'], 'check-type', false);
}
{
    {
        ($module)['check-identifier'] = function B1475(identifier__1476, env__1477, format_string__1478) {
            var B1481 = B1462['not'];
            {
                var B1479 = B1462['not'](B1462['get'](identifier__1476, 'module'));
                {
                    var B1482 = false;
                    if (($T)(B1479))
                        B1482 = B1479;
                    else
                        B1482 = B1462['=='](B1462['get'](identifier__1476, 'module'), B1462['get'](env__1477, 'module', 'name'));
                    {
                        var B1483 = B1481(B1482);
                        if (($T)(B1483)) {
                            var B1484 = B1462['signal'];
                            {
                                var B1485 = B1463['format-to-string'];
                                {
                                    var B1480 = format_string__1478;
                                    {
                                        var B1486 = false;
                                        if (($T)(B1480))
                                            B1486 = B1480;
                                        else
                                            B1486 = 'External identifier: %=';
                                        {
                                            var B1487 = B1485(B1486, identifier__1476);
                                            return(B1484(B1487));
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
    B1462['%annotate-function'](($module)['check-identifier'], 'check-identifier', false);
}
{
    var B1492 = $REST;
    {
        var B1493 = $KEY;
        {
            var B1494 = $K('end');
            {
                var B1495 = $K('start');
                {
                    {
                        ($module)['destructure-parameter-list'] = function B1496(list__1497) {
                            var position__1498 = false;
                            {
                                position__1498 = function B1499(symbol__1500) {
                                    return(B1462['find-key'](list__1497, B1462['curry'](B1462['='], symbol__1500)));
                                };
                                {
                                    var rest__1501 = position__1498(B1492);
                                    {
                                        var key__1502 = position__1498(B1493);
                                        {
                                            var B1505 = B1462['copy-sequence'];
                                            {
                                                var B1503 = rest__1501;
                                                {
                                                    var B1506 = false;
                                                    if (($T)(B1503))
                                                        B1506 = B1503;
                                                    else {
                                                        var B1504 = key__1502;
                                                        if (($T)(B1504))
                                                            B1506 = B1504;
                                                        else
                                                            B1506 = B1462['size'](list__1497);
                                                    }
                                                    {
                                                        var B1507 = B1505(list__1497, B1494, B1506);
                                                        {
                                                            var B1508 = false;
                                                            if (($T)(rest__1501))
                                                                B1508 = B1462['element'](list__1497, B1462['inc'](rest__1501));
                                                            else
                                                                B1508 = false;
                                                            {
                                                                var B1509 = false;
                                                                if (($T)(key__1502))
                                                                    B1509 = B1462['copy-sequence'](list__1497, B1495, B1462['inc'](key__1502));
                                                                else
                                                                    B1509 = false;
                                                                return([
                                                                    B1507,
                                                                    B1508,
                                                                    B1509
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
                    B1462['%annotate-function'](($module)['destructure-parameter-list'], 'destructure-parameter-list', false);
                }
            }
        }
    }
}
{
    {
        ($module)['op?'] = function B1511(op__1512, exp__1513) {
            if (($T)(B1462['expression?'](exp__1513)))
                return(B1462['=='](B1462['symbol-name'](B1462['first'](exp__1513)), op__1512));
            else
                return(false);
        };
        ($module)['%export']('op?', ($module)['op?']);
    }
    B1462['%annotate-function'](($module)['op?'], 'op?', false);
}
{
    {
        ($module)['process-import-names'] = function B1521(all__1522) {
            var B1523 = $SL.call(arguments, 1);
            {
                var B1524 = B1462['%keys'](B1523, {
                        'only': false,
                        'exclude': false,
                        'prefix': false,
                        'rename': false
                    });
                {
                    var only__1525 = B1524['only'];
                    {
                        var exclude__1526 = B1524['exclude'];
                        {
                            var prefix__1527 = B1524['prefix'];
                            {
                                var rename__1528 = B1524['rename'];
                                {
                                    var resolve__1529 = false;
                                    {
                                        resolve__1529 = function B1530(exp__1531) {
                                            if (($T)(B1462['instance?'](exp__1531, B1462['<string>'])))
                                                return(exp__1531);
                                            else
                                                return(($module)['identifier-name'](exp__1531));
                                        };
                                        {
                                            var B1539 = B1462['as-set'];
                                            {
                                                var B1540 = false;
                                                if (($T)(B1462['instance?'](only__1525, B1462['<array>'])))
                                                    B1540 = B1462['map'](resolve__1529, only__1525);
                                                else
                                                    B1540 = all__1522;
                                                {
                                                    var names__1532 = B1539(B1540);
                                                    {
                                                        var B1541 = B1462['as-object'];
                                                        {
                                                            var B1542 = B1462['map'];
                                                            {
                                                                var B1533 = rename__1528;
                                                                {
                                                                    var B1543 = false;
                                                                    if (($T)(B1533))
                                                                        B1543 = B1533;
                                                                    else
                                                                        B1543 = [];
                                                                    {
                                                                        var B1544 = B1542(resolve__1529, B1543);
                                                                        {
                                                                            var renamings__1534 = B1541(B1544);
                                                                            {
                                                                                B1462['do'](B1462['curry'](B1462['remove!'], names__1532), B1462['map'](resolve__1529, exclude__1526));
                                                                                {
                                                                                    B1462['set-union!'](names__1532, B1462['object-properties'](renamings__1534));
                                                                                    return(B1462['map'](function B1535(name__1536) {
                                                                                        var B1537 = B1462['get'](renamings__1534, name__1536);
                                                                                        if (($T)(B1537)) {
                                                                                            var renaming__1538 = B1537;
                                                                                            return([
                                                                                                name__1536,
                                                                                                renaming__1538
                                                                                            ]);
                                                                                        } else if (($T)(B1462['instance?'](prefix__1527, B1462['<string>'])))
                                                                                            return([
                                                                                                name__1536,
                                                                                                B1462['concatenate'](prefix__1527, name__1536)
                                                                                            ]);
                                                                                        else
                                                                                            return(name__1536);
                                                                                    }, names__1532));
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
    B1462['%annotate-function'](($module)['process-import-names'], 'process-import-names', false);
}
{
    {
        ($module)['transform-setter-identifier'] = function B1546(identifier__1547) {
            return(B1462['symbol'](B1462['concatenate'](B1462['symbol-name'](identifier__1547), '-setter')));
        };
        ($module)['%export']('transform-setter-identifier', ($module)['transform-setter-identifier']);
    }
    B1462['%annotate-function'](($module)['transform-setter-identifier'], 'transform-setter-identifier', false);
}
{
    {
        ($module)['setter-identifier?'] = function B1549(form__1550) {
            if (($T)(B1462['instance?'](form__1550, B1462['<array>'])))
                if (($T)(B1462['=='](B1462['size'](form__1550), 2)))
                    if (($T)(B1462['every?'](B1462['rcurry'](B1462['instance?'], B1462['<symbol>']), form__1550)))
                        return(B1462['=='](B1462['symbol-name'](B1462['first'](form__1550)), 'setter'));
                    else
                        return(false);
                else
                    return(false);
            else
                return(false);
        };
        ($module)['%export']('setter-identifier?', ($module)['setter-identifier?']);
    }
    B1462['%annotate-function'](($module)['setter-identifier?'], 'setter-identifier?', false);
}
{
    {
        ($module)['identifier-name'] = function B1552(identifier__1553) {
            var B1554 = B1462['symbol-name'];
            {
                var B1555 = false;
                if (($T)(($module)['setter-identifier?'](identifier__1553)))
                    B1555 = ($module)['transform-setter-identifier'](B1462['second'](identifier__1553));
                else
                    B1555 = identifier__1553;
                return(B1554(B1555));
            }
        };
        ($module)['%export']('identifier-name', ($module)['identifier-name']);
    }
    B1462['%annotate-function'](($module)['identifier-name'], 'identifier-name', false);
}
{
    ($module)['%eval'] = function B1557() {
        return(eval((arguments[0])));
    };
    {
        B1462['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
