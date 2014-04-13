{
    var $module = Object.create(null);
    ($module)['%export'] = function B1560(name__1561, value__1562) {
        var B1563 = (exports);
        return(B1563[name__1561] = value__1562);
    };
}
var B1564 = require('ralph/core');
false;
{
    ($module)['<module>'] = B1564['%make-class'](B1564['<object>'], {
        'name': false,
        'native?': false,
        'imports': function B1568() {
            return([]);
        },
        'exports': function B1569() {
            return([]);
        },
        'dependencies': function B1570() {
            return([]);
        }
    }, function LmoduleG__1571() {
        var B1572 = (this);
        {
            B1572['name'] = (undefined);
            {
                var B1573 = (this);
                {
                    B1573['native?'] = (undefined);
                    {
                        var B1574 = (this);
                        {
                            B1574['imports'] = (undefined);
                            {
                                var B1575 = (this);
                                {
                                    B1575['exports'] = (undefined);
                                    {
                                        var B1576 = (this);
                                        return(B1576['dependencies'] = (undefined));
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
        ($module)['find-module/import-name'] = function B1581(definition_name__1582, module__1583) {
            return(B1564['any?'](function B1584(import__1585) {
                var module__1586 = import__1585[0];
                {
                    var names__1587 = import__1585[1];
                    return(B1564['any?'](function B1588(name__1589) {
                        var B1590 = false;
                        if (($T)(B1564['instance?'](name__1589, B1564['<array>'])))
                            B1590 = name__1589;
                        else
                            B1590 = [
                                name__1589,
                                name__1589
                            ];
                        {
                            var import_name__1591 = B1590[0];
                            {
                                var new_name__1592 = B1590[1];
                                if (($T)(B1564['=='](definition_name__1582, new_name__1592)))
                                    return([
                                        module__1586,
                                        import_name__1591
                                    ]);
                                else
                                    return(false);
                            }
                        }
                    }, names__1587));
                }
            }, B1564['get'](module__1583, 'imports')));
        };
        ($module)['%export']('find-module/import-name', ($module)['find-module/import-name']);
    }
    B1564['%annotate-function'](($module)['find-module/import-name'], 'find-module/import-name', false);
}
{
    ($module)['%eval'] = function B1594() {
        return(eval((arguments[0])));
    };
    {
        B1564['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
