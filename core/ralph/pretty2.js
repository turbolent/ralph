{
    var $module = Object.create(null);
    var Mexport = function B1448(name__1449, value__1450) {
        var B1451 = (exports);
        return(B1451[name__1449] = value__1450);
    };
}
var B1452 = require('ralph/core');
{
    var B1453 = require('ralph/stream');
    {
        var B1454 = require('ralph/file-stream');
        var B1455 = require('ralph/format');
    }
}
{
    var write_string = function B1457(env__1458, string__1459, column__1460) {
        B1453['stream-write'](B1452['get'](env__1458, 'stream'), string__1459);
        return(B1452['+'](column__1460, B1452['size'](string__1459)));
    };
    B1452['%annotate-function'](write_string, 'write-string', false);
}
{
    var write_description = function B1462(env__1463, object__1464, column__1465) {
        return(write_string(env__1463, B1452['description'](object__1464), column__1465));
    };
    B1452['%annotate-function'](write_description, 'write-description', false);
}
{
    var write_spaces = function B1467(env__1468, count__1469, column__1470) {
        return(write_string(env__1468, B1452['repeat-string'](' ', count__1469), column__1470));
    };
    B1452['%annotate-function'](write_spaces, 'write-spaces', false);
}
{
    var write_indent = function B1472(env__1473, to__1474, column__1475) {
        if (($T)(B1452['<'](to__1474, column__1475)))
            if (($T)(write_string(env__1473, '\n', column__1475)))
                return(write_spaces(env__1473, to__1474, 0));
            else
                return(false);
        else
            return(write_spaces(env__1473, B1452['-'](to__1474, column__1475), column__1475));
    };
    B1452['%annotate-function'](write_indent, 'write-indent', false);
}
{
    var print_list = function B1477(list__1478, env__1479, column__1480, print_item__1481) {
        var column2__1482 = write_string(env__1479, '(', column__1480);
        return(print_down(list__1478, env__1479, column2__1482, column2__1482, print_item__1481));
    };
    B1452['%annotate-function'](print_list, 'print-list', false);
}
{
    var print_call = function B1484(call__1485, env__1486, column__1487, print_item__1488) {
        var column2__1489 = write_string(env__1486, '(', column__1487);
        {
            var column3__1490 = write_description(env__1486, B1452['first'](call__1485), column2__1489);
            return(print_down(B1452['rest'](call__1485), env__1486, column3__1490, B1452['inc'](column3__1490), print_item__1488));
        }
    };
    B1452['%annotate-function'](print_call, 'print-call', false);
}
{
    var print_down = function B1498(list__1499, env__1500, column1__1501, column2__1502, print_item__1503) {
        var column__1504 = column1__1501;
        {
            var B1505 = list__1499;
            {
                var B1506 = false;
                {
                    var B1507 = false;
                    {
                        var B1508 = [B1505];
                        {
                            while (true) {
                                var B1514 = B1452['not'];
                                {
                                    var B1509 = B1506;
                                    {
                                        var B1515 = false;
                                        if (($T)(B1509))
                                            B1515 = B1509;
                                        else
                                            B1515 = B1452['any?'](B1452['empty?'], B1508);
                                        {
                                            var B1516 = B1514(B1515);
                                            if (($T)(B1516)) {
                                                var item__1510 = B1452['first'](B1505);
                                                {
                                                    (function B1511(item__1512) {
                                                        var columnT__1513 = write_indent(env__1500, column2__1502, column__1504);
                                                        return(column__1504 = print_object(item__1512, env__1500, columnT__1513, print_item__1503));
                                                    }(item__1510));
                                                    {
                                                        B1505 = B1452['rest'](B1505);
                                                        B1508 = [B1505];
                                                    }
                                                }
                                            } else
                                                break;
                                        }
                                    }
                                }
                            }
                            {
                                B1507;
                                return(write_string(env__1500, ')', column__1504));
                            }
                        }
                    }
                }
            }
        }
    };
    B1452['%annotate-function'](print_down, 'print-down', false);
}
{
    var print_object = function B1518(object__1519, env__1520, column__1521, print_item__1522) {
        if (($T)(B1452['instance?'](object__1519, B1452['<array>']))) {
            var left__1523 = B1452['-'](B1452['get'](env__1520, 'width'), column__1521);
            {
                var result__1524 = B1452['description'](object__1519);
                {
                    var width__1525 = B1452['size'](result__1524);
                    {
                        var B1526 = false;
                        if (($T)(B1452['<'](width__1525, left__1523)))
                            B1526 = B1452['<'](width__1525, B1452['get'](env__1520, 'max-array-width'));
                        else
                            B1526 = false;
                        if (($T)(B1526))
                            return(write_string(env__1520, result__1524, column__1521));
                        else
                            return(print_item__1522(object__1519, env__1520, column__1521));
                    }
                }
            }
        } else
            return(write_description(env__1520, object__1519, column__1521));
    };
    B1452['%annotate-function'](print_object, 'print-object', false);
}
{
    var print_expression = function B1529(expression__1530, env__1531, column__1532) {
        if (($T)(B1452['expression?'](expression__1530))) {
            var head__1533 = B1452['first'](expression__1530);
            {
                var B1534 = B1452['get'](env__1531, 'printers', B1452['symbol-name'](head__1533));
                if (($T)(B1534)) {
                    var printer__1535 = B1534;
                    return(printer__1535(expression__1530, env__1531, column__1532));
                } else if (($T)(B1452['>'](B1452['size'](B1452['description'](head__1533)), B1452['get'](env__1531, 'max-call-head-width'))))
                    return(print_general(expression__1530, env__1531, column__1532, false, false, false, print_expression));
                else
                    return(print_call(expression__1530, env__1531, column__1532, print_expression));
            }
        } else
            return(print_list(expression__1530, env__1531, column__1532, print_expression));
    };
    B1452['%annotate-function'](print_expression, 'print-expression', false);
}
{
    var print_general1 = function B1537(rest__1538, env__1539, column1__1540, column2__1541, column3__1542, printer1__1543, printer2__1544, printer3__1545) {
        var B1550 = false;
        if (($T)(printer1__1543))
            B1550 = B1452['not'](B1452['empty?'](rest__1538));
        else
            B1550 = false;
        if (($T)(B1550)) {
            var value__1546 = rest__1538[0];
            {
                var restT__1547 = $SL.call(rest__1538, 1);
                {
                    var column__1548 = write_indent(env__1539, column3__1542, column2__1541);
                    {
                        var column2T__1549 = print_object(value__1546, env__1539, column__1548, printer1__1543);
                        return(print_general2(restT__1547, env__1539, column1__1540, column2T__1549, column3__1542, printer2__1544, printer3__1545));
                    }
                }
            }
        } else
            return(print_general2(rest__1538, env__1539, column1__1540, column2__1541, column3__1542, printer2__1544, printer3__1545));
    };
    B1452['%annotate-function'](print_general1, 'print-general1', false);
}
{
    var print_general2 = function B1552(rest__1553, env__1554, column1__1555, column2__1556, column3__1557, printer2__1558, printer3__1559) {
        var B1564 = false;
        if (($T)(printer2__1558))
            B1564 = B1452['not'](B1452['empty?'](rest__1553));
        else
            B1564 = false;
        if (($T)(B1564)) {
            var value__1560 = rest__1553[0];
            {
                var restT__1561 = $SL.call(rest__1553, 1);
                {
                    var column__1562 = write_indent(env__1554, column3__1557, column2__1556);
                    {
                        var column2T__1563 = print_object(value__1560, env__1554, column__1562, printer2__1558);
                        return(print_general3(restT__1561, env__1554, column1__1555, column2T__1563, printer3__1559));
                    }
                }
            }
        } else
            return(print_general3(rest__1553, env__1554, column1__1555, column2__1556, printer3__1559));
    };
    B1452['%annotate-function'](print_general2, 'print-general2', false);
}
{
    var print_general3 = function B1566(rest__1567, env__1568, column1__1569, column2__1570, printer3__1571) {
        return(print_down(rest__1567, env__1568, column2__1570, column1__1569, printer3__1571));
    };
    B1452['%annotate-function'](print_general3, 'print-general3', false);
}
{
    var print_general = function B1573(expression__1574, env__1575, column__1576, namedQ__1577, printer1__1578, printer2__1579, printer3__1580) {
        var head__1581 = expression__1574[0];
        {
            var rest__1582 = $SL.call(expression__1574, 1);
            {
                var column2__1583 = write_string(env__1575, '(', column__1576);
                {
                    var column3__1584 = write_description(env__1575, head__1581, column2__1583);
                    {
                        var B1589 = false;
                        if (($T)(namedQ__1577))
                            B1589 = B1452['not'](B1452['empty?'](rest__1582));
                        else
                            B1589 = false;
                        if (($T)(B1589)) {
                            var name__1585 = rest__1582[0];
                            {
                                var restT__1586 = $SL.call(rest__1582, 1);
                                {
                                    var column4__1587 = write_string(env__1575, ' ', column3__1584);
                                    {
                                        var column5__1588 = write_description(env__1575, name__1585, column4__1587);
                                        return(print_general1(restT__1586, env__1575, B1452['+'](column__1576, B1452['get'](env__1575, 'indent-general')), column5__1588, B1452['inc'](column5__1588), printer1__1578, printer2__1579, printer3__1580));
                                    }
                                }
                            }
                        } else
                            return(print_general1(rest__1582, env__1575, B1452['+'](column__1576, B1452['get'](env__1575, 'indent-general')), column3__1584, B1452['inc'](column3__1584), printer1__1578, printer2__1579, printer3__1580));
                    }
                }
            }
        }
    };
    B1452['%annotate-function'](print_general, 'print-general', false);
}
{
    var print_expression_list = function B1591(list__1592, env__1593, column__1594) {
        return(print_list(list__1592, env__1593, column__1594, print_expression));
    };
    B1452['%annotate-function'](print_expression_list, 'print-expression-list', false);
}
{
    var print_begin = function B1596(expression__1597, env__1598, column__1599) {
        return(print_general(expression__1597, env__1598, column__1599, false, false, false, print_expression));
    };
    B1452['%annotate-function'](print_begin, 'print-begin', false);
}
{
    var print_bind = function B1601(expression__1602, env__1603, column__1604) {
        return(print_general(expression__1602, env__1603, column__1604, false, print_expression_list, false, print_expression));
    };
    B1452['%annotate-function'](print_bind, 'print-bind', false);
}
{
    var print_cond = function B1606(expression__1607, env__1608, column__1609) {
        return(print_call(expression__1607, env__1608, column__1609, print_expression_list));
    };
    B1452['%annotate-function'](print_cond, 'print-cond', false);
}
{
    var print_define_function = function B1611(expression__1612, env__1613, column__1614) {
        return(print_general(expression__1612, env__1613, column__1614, true, print_expression_list, false, print_expression));
    };
    B1452['%annotate-function'](print_define_function, 'print-define-function', false);
}
{
    var print_define = function B1616(expression__1617, env__1618, column__1619) {
        return(print_general(expression__1617, env__1618, column__1619, true, false, false, print_expression));
    };
    B1452['%annotate-function'](print_define, 'print-define', false);
}
{
    var TprintersT = B1452['make-object']('begin', print_begin, 'bind', print_bind, 'cond', print_cond, 'define', print_define, 'define-function', print_define_function);
    Mexport('*printers*', TprintersT);
}
{
    {
        var pretty_print = function B1623(object__1624) {
            var B1625 = $SL.call(arguments, 1);
            {
                var B1626 = B1452['%keys'](B1625, {
                        'stream': B1452['make'](B1453['<string-stream>']),
                        'width': 60,
                        'max-call-head-width': 10,
                        'max-array-width': 26,
                        'indent-general': 2,
                        'printers': TprintersT
                    });
                {
                    var stream__1627 = B1626['stream'];
                    {
                        var width__1628 = B1626['width'];
                        {
                            var max_call_head_width__1629 = B1626['max-call-head-width'];
                            {
                                var max_array_width__1630 = B1626['max-array-width'];
                                {
                                    var indent_general__1631 = B1626['indent-general'];
                                    {
                                        var printers__1632 = B1626['printers'];
                                        {
                                            var env__1633 = B1452['make-object']('stream', stream__1627, 'width', width__1628, 'max-call-head-width', max_call_head_width__1629, 'max-array-width', max_array_width__1630, 'indent-general', indent_general__1631, 'printers', printers__1632);
                                            {
                                                if (($T)(B1452['instance?'](object__1624, B1452['<array>'])))
                                                    print_expression(object__1624, env__1633, 0);
                                                else
                                                    print_object(object__1624, env__1633, 0, print_expression);
                                                if (($T)(B1452['instance?'](stream__1627, B1453['<string-stream>'])))
                                                    return(B1453['stream-contents'](stream__1627));
                                                else
                                                    return(false);
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
        Mexport('pretty-print', pretty_print);
    }
    B1452['%annotate-function'](pretty_print, 'pretty-print', false);
}
