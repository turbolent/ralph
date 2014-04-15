require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1563(name__1564, value__1565) {
            var B1567 = (exports);
            return(B1567[name__1564] = value__1565);
        };
        {
            ($module)['%eval'] = function B1566() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1568 = require('ralph/core');
false;
{
    ($module)['<module>'] = B1568['%make-class'](B1568['<object>'], {
        'name': false,
        'native?': false,
        'imports': function B1572() {
            return([]);
        },
        'exports': function B1573() {
            return([]);
        },
        'dependencies': function B1574() {
            return([]);
        }
    }, function LmoduleG__1575() {
        var B1576 = (this);
        {
            B1576['name'] = (undefined);
            {
                var B1577 = (this);
                {
                    B1577['native?'] = (undefined);
                    {
                        var B1578 = (this);
                        {
                            B1578['imports'] = (undefined);
                            {
                                var B1579 = (this);
                                {
                                    B1579['exports'] = (undefined);
                                    {
                                        var B1580 = (this);
                                        return(B1580['dependencies'] = (undefined));
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    });
    ($module)['%export']('<module>', ($module)['<module>']);
}
{
    {
        ($module)['find-module/import-name'] = function B1585(definition_name__1586, module__1587) {
            return(B1568['any?'](function B1588(import__1589) {
                var module__1590 = import__1589[0];
                {
                    var names__1591 = import__1589[1];
                    return(B1568['any?'](function B1592(name__1593) {
                        var B1594 = false;
                        if (($T)(B1568['instance?'](name__1593, B1568['<array>'])))
                            B1594 = name__1593;
                        else
                            B1594 = [
                                name__1593,
                                name__1593
                            ];
                        {
                            var import_name__1595 = B1594[0];
                            {
                                var new_name__1596 = B1594[1];
                                if (($T)(B1568['=='](definition_name__1586, new_name__1596)))
                                    return([
                                        module__1590,
                                        import_name__1595
                                    ]);
                                else
                                    return(false);
                            }
                        }
                    }, names__1591));
                }
            }, B1568['get'](module__1587, 'imports')));
        };
        ($module)['%export']('find-module/import-name', ($module)['find-module/import-name']);
    }
    B1568['%annotate-function'](($module)['find-module/import-name'], 'find-module/import-name', false);
}
{
    var B1597 = $S('begin', 'ralph/core');
    {
        var B1598 = $S('%native', 'ralph/core');
        {
            var B1599 = $S('%define', 'ralph/core');
            {
                var B1600 = $S('%export');
                {
                    var B1601 = $S('method', 'ralph/core');
                    {
                        var B1602 = $S('name');
                        {
                            var B1603 = $S('value');
                            {
                                var B1604 = $S('set!', 'ralph/core');
                                {
                                    var B1605 = $S('%get-property', 'ralph/core');
                                    {
                                        var B1606 = $S('define', 'ralph/core');
                                        {
                                            var B1607 = $S('%eval');
                                            {
                                                var B1608 = $S('%native-call', 'ralph/core');
                                                {
                                                    ($module)['*module-prologue*'] = [
                                                        B1597,
                                                        [
                                                            B1598,
                                                            'var $module = Object.create($moduleRoot)'
                                                        ],
                                                        [
                                                            B1599,
                                                            B1600,
                                                            [
                                                                B1601,
                                                                [
                                                                    B1602,
                                                                    B1603
                                                                ],
                                                                [
                                                                    B1604,
                                                                    [
                                                                        B1605,
                                                                        [
                                                                            B1598,
                                                                            'exports'
                                                                        ],
                                                                        B1602
                                                                    ],
                                                                    B1603
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B1606,
                                                            B1607,
                                                            [
                                                                B1601,
                                                                [],
                                                                [
                                                                    B1608,
                                                                    'eval',
                                                                    [
                                                                        B1598,
                                                                        'arguments[0]'
                                                                    ]
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B1600,
                                                            '%eval',
                                                            B1607
                                                        ]
                                                    ];
                                                    ($module)['%export']('*module-prologue*', ($module)['*module-prologue*']);
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
