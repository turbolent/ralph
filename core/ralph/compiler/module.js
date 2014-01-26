{
    var B1629 = require('ralph/core');
}
false;
{
    {
        var ralphScoreCCMvar = B1629['%var'];
        var ralphScoreCCMmake_class = B1629['%make-class'];
        var ralphScoreCCLobjectG = B1629['<object>'];
        var LmoduleG__1637 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {
                'name': false,
                'native?': false,
                'imports': function B1633() {
                    return([]);
                },
                'exports': function B1634() {
                    return([]);
                },
                'dependencies': function B1635() {
                    return([]);
                }
            }, function LmoduleG__1636() {
                {
                    var B1638 = (this);
                }
                B1638['name'] = (undefined);
                {
                    var B1639 = (this);
                }
                B1639['native?'] = (undefined);
                {
                    var B1640 = (this);
                }
                B1640['imports'] = (undefined);
                {
                    var B1641 = (this);
                }
                B1641['exports'] = (undefined);
                {
                    var B1642 = (this);
                }
                return(B1642['dependencies'] = (undefined));
            });
    }
    (exports)['<module>'] = LmoduleG__1637;
}
{
    {
        var ralphScoreCCanyQ = B1629['any?'];
        var ralphScoreCCinstanceQ = B1629['instance?'];
        var ralphScoreCCLarrayG = B1629['<array>'];
        var ralphScoreCCEE = B1629['=='];
        var ralphScoreCCget = B1629['get'];
        var ralphScoreCCMannotate_function = B1629['%annotate-function'];
        var find_moduleSimport_name__1659 = function B1647(definition_name__1648, module__1649) {
            return(ralphScoreCCanyQ(function B1650(import__1651) {
                {
                    var module__1652 = import__1651[0];
                    var names__1653 = import__1651[1];
                }
                return(ralphScoreCCanyQ(function B1654(name__1655) {
                    {
                        var B1656 = false;
                    }
                    if (($T)(ralphScoreCCinstanceQ(name__1655, ralphScoreCCLarrayG)))
                        B1656 = name__1655;
                    else
                        B1656 = [
                            name__1655,
                            name__1655
                        ];
                    {
                        var import_name__1657 = B1656[0];
                        var new_name__1658 = B1656[1];
                    }
                    if (($T)(ralphScoreCCEE(definition_name__1648, new_name__1658)))
                        return([
                            module__1652,
                            import_name__1657
                        ]);
                    else
                        return(false);
                }, names__1653));
            }, ralphScoreCCget(module__1649, 'imports')));
        };
    }
    (exports)['find-module/import-name'] = find_moduleSimport_name__1659;
    ralphScoreCCMannotate_function(find_moduleSimport_name__1659, 'find_moduleSimport_name', false);
}
