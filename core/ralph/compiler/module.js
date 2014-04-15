require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1585(name__1586, value__1587) {
            var B1589 = (exports);
            return(B1589[name__1586] = value__1587);
        };
        {
            ($module)['%eval'] = function B1588() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1590 = require('ralph/core');
false;
{
    ($module)['<module>'] = B1590['%make-class'](B1590['<object>'], {
        'name': false,
        'native?': false,
        'imports': function B1594() {
            return([]);
        },
        'exports': function B1595() {
            return([]);
        },
        'dependencies': function B1596() {
            return([]);
        }
    }, function LmoduleG__1597() {
        var B1598 = (this);
        {
            B1598['name'] = (undefined);
            {
                var B1599 = (this);
                {
                    B1599['native?'] = (undefined);
                    {
                        var B1600 = (this);
                        {
                            B1600['imports'] = (undefined);
                            {
                                var B1601 = (this);
                                {
                                    B1601['exports'] = (undefined);
                                    {
                                        var B1602 = (this);
                                        return(B1602['dependencies'] = (undefined));
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
        ($module)['find-module/import-name'] = function B1607(definition_name__1608, module__1609) {
            return(B1590['any?'](function B1610(import__1611) {
                var module__1612 = import__1611[0];
                {
                    var names__1613 = import__1611[1];
                    return(B1590['any?'](function B1614(name__1615) {
                        var B1616 = false;
                        if (($T)(B1590['instance?'](name__1615, B1590['<array>'])))
                            B1616 = name__1615;
                        else
                            B1616 = [
                                name__1615,
                                name__1615
                            ];
                        {
                            var import_name__1617 = B1616[0];
                            {
                                var new_name__1618 = B1616[1];
                                if (($T)(B1590['=='](definition_name__1608, new_name__1618)))
                                    return([
                                        module__1612,
                                        import_name__1617
                                    ]);
                                else
                                    return(false);
                            }
                        }
                    }, names__1613));
                }
            }, B1590['get'](module__1609, 'imports')));
        };
        ($module)['%export']('find-module/import-name', ($module)['find-module/import-name']);
    }
    B1590['%annotate-function'](($module)['find-module/import-name'], 'find-module/import-name', false);
}
{
    var B1619 = $S('begin', 'ralph/core');
    {
        var B1620 = $S('%native', 'ralph/core');
        {
            var B1621 = $S('%define', 'ralph/core');
            {
                var B1622 = $S('%export');
                {
                    var B1623 = $S('method', 'ralph/core');
                    {
                        var B1624 = $S('name');
                        {
                            var B1625 = $S('value');
                            {
                                var B1626 = $S('set!', 'ralph/core');
                                {
                                    var B1627 = $S('%get-property', 'ralph/core');
                                    {
                                        var B1628 = $S('define', 'ralph/core');
                                        {
                                            var B1629 = $S('%eval');
                                            {
                                                var B1630 = $S('%native-call', 'ralph/core');
                                                {
                                                    ($module)['*module-prologue*'] = [
                                                        B1619,
                                                        [
                                                            B1620,
                                                            'var $module = Object.create($moduleRoot)'
                                                        ],
                                                        [
                                                            B1621,
                                                            B1622,
                                                            [
                                                                B1623,
                                                                [
                                                                    B1624,
                                                                    B1625
                                                                ],
                                                                [
                                                                    B1626,
                                                                    [
                                                                        B1627,
                                                                        [
                                                                            B1620,
                                                                            'exports'
                                                                        ],
                                                                        B1624
                                                                    ],
                                                                    B1625
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B1628,
                                                            B1629,
                                                            [
                                                                B1623,
                                                                [],
                                                                [
                                                                    B1630,
                                                                    'eval',
                                                                    [
                                                                        B1620,
                                                                        'arguments[0]'
                                                                    ]
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B1622,
                                                            '%eval',
                                                            B1629
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
