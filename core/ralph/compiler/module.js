{
    var $module = Object.create(null);
    var Mexport = function B1736(name__1737, value__1738) {
        var B1739 = (exports);
        return(B1739[name__1737] = value__1738);
    };
}
var B1740 = require('ralph/core');
false;
{
    var LmoduleG = B1740['%make-class'](B1740['<object>'], {
            'name': false,
            'native?': false,
            'imports': function B1744() {
                return([]);
            },
            'exports': function B1745() {
                return([]);
            },
            'dependencies': function B1746() {
                return([]);
            }
        }, function LmoduleG__1747() {
            var B1748 = (this);
            {
                B1748['name'] = (undefined);
                {
                    var B1749 = (this);
                    {
                        B1749['native?'] = (undefined);
                        {
                            var B1750 = (this);
                            {
                                B1750['imports'] = (undefined);
                                {
                                    var B1751 = (this);
                                    {
                                        B1751['exports'] = (undefined);
                                        {
                                            var B1752 = (this);
                                            return(B1752['dependencies'] = (undefined));
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    Mexport('<module>', LmoduleG);
}
{
    {
        var find_moduleSimport_name = function B1757(definition_name__1758, module__1759) {
            return(B1740['any?'](function B1760(import__1761) {
                var module__1762 = import__1761[0];
                {
                    var names__1763 = import__1761[1];
                    return(B1740['any?'](function B1764(name__1765) {
                        var B1766 = false;
                        if (($T)(B1740['instance?'](name__1765, B1740['<array>'])))
                            B1766 = name__1765;
                        else
                            B1766 = [
                                name__1765,
                                name__1765
                            ];
                        {
                            var import_name__1767 = B1766[0];
                            {
                                var new_name__1768 = B1766[1];
                                if (($T)(B1740['=='](definition_name__1758, new_name__1768)))
                                    return([
                                        module__1762,
                                        import_name__1767
                                    ]);
                                else
                                    return(false);
                            }
                        }
                    }, names__1763));
                }
            }, B1740['get'](module__1759, 'imports')));
        };
        Mexport('find-module/import-name', find_moduleSimport_name);
    }
    B1740['%annotate-function'](find_moduleSimport_name, 'find-module/import-name', false);
}
