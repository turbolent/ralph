require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1595(name__1596, value__1597) {
            var B1599 = (exports);
            return(B1599[name__1596] = value__1597);
        };
        {
            ($module)['%eval'] = function B1598() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1600 = require('ralph/core');
false;
{
    ($module)['<module>'] = B1600['%make-class'](B1600['<object>'], {
        'name': false,
        'native?': false,
        'imports': function B1604() {
            return([]);
        },
        'exports': function B1605() {
            return([]);
        },
        'dependencies': function B1606() {
            return([]);
        }
    }, function LmoduleG__1607() {
        var B1608 = (this);
        {
            B1608['name'] = (undefined);
            {
                var B1609 = (this);
                {
                    B1609['native?'] = (undefined);
                    {
                        var B1610 = (this);
                        {
                            B1610['imports'] = (undefined);
                            {
                                var B1611 = (this);
                                {
                                    B1611['exports'] = (undefined);
                                    {
                                        var B1612 = (this);
                                        return(B1612['dependencies'] = (undefined));
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
        ($module)['find-module/import-name'] = function B1617(definition_name__1618, module__1619) {
            return(B1600['any?'](function B1620(import__1621) {
                var module__1622 = import__1621[0];
                {
                    var names__1623 = import__1621[1];
                    return(B1600['any?'](function B1624(name__1625) {
                        var B1626 = false;
                        if (($T)(B1600['instance?'](name__1625, B1600['<array>'])))
                            B1626 = name__1625;
                        else
                            B1626 = [
                                name__1625,
                                name__1625
                            ];
                        {
                            var import_name__1627 = B1626[0];
                            {
                                var new_name__1628 = B1626[1];
                                if (($T)(B1600['=='](definition_name__1618, new_name__1628)))
                                    return([
                                        module__1622,
                                        import_name__1627
                                    ]);
                                else
                                    return(false);
                            }
                        }
                    }, names__1623));
                }
            }, B1600['get'](module__1619, 'imports')));
        };
        ($module)['%export']('find-module/import-name', ($module)['find-module/import-name']);
    }
    B1600['%annotate-function'](($module)['find-module/import-name'], 'find-module/import-name', false);
}
{
    var B1629 = $S('begin', 'ralph/core');
    {
        var B1630 = $S('%native', 'ralph/core');
        {
            var B1631 = $S('%define', 'ralph/core');
            {
                var B1632 = $S('%export');
                {
                    var B1633 = $S('method', 'ralph/core');
                    {
                        var B1634 = $S('name');
                        {
                            var B1635 = $S('value');
                            {
                                var B1636 = $S('set!', 'ralph/core');
                                {
                                    var B1637 = $S('%get-property', 'ralph/core');
                                    {
                                        var B1638 = $S('define', 'ralph/core');
                                        {
                                            var B1639 = $S('%eval');
                                            {
                                                var B1640 = $S('%native-call', 'ralph/core');
                                                {
                                                    ($module)['*module-prologue*'] = [
                                                        B1629,
                                                        [
                                                            B1630,
                                                            'var $module = Object.create($moduleRoot)'
                                                        ],
                                                        [
                                                            B1631,
                                                            B1632,
                                                            [
                                                                B1633,
                                                                [
                                                                    B1634,
                                                                    B1635
                                                                ],
                                                                [
                                                                    B1636,
                                                                    [
                                                                        B1637,
                                                                        [
                                                                            B1630,
                                                                            'exports'
                                                                        ],
                                                                        B1634
                                                                    ],
                                                                    B1635
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B1638,
                                                            B1639,
                                                            [
                                                                B1633,
                                                                [],
                                                                [
                                                                    B1640,
                                                                    'eval',
                                                                    [
                                                                        B1630,
                                                                        'arguments[0]'
                                                                    ]
                                                                ]
                                                            ]
                                                        ],
                                                        [
                                                            B1632,
                                                            '%eval',
                                                            B1639
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
