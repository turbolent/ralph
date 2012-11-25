var B1636 = require('ralph/core');
false;
{
    var ralphScoreCCMvar = B1636['%var'], ralphScoreCCMmake_class = B1636['%make-class'], ralphScoreCCLobjectG = B1636['<object>'], LmoduleG__1644 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {
            'name': false,
            'native?': false,
            'imports': function B1640() {
                return([]);
            },
            'exports': function B1641() {
                return([]);
            },
            'dependencies': function B1642() {
                return([]);
            }
        }, function LmoduleG__1643() {
            var B1645 = (this);
            B1645['name'] = (undefined);
            var B1646 = (this);
            B1646['native?'] = (undefined);
            var B1647 = (this);
            B1647['imports'] = (undefined);
            var B1648 = (this);
            B1648['exports'] = (undefined);
            var B1649 = (this);
            return(B1649['dependencies'] = (undefined));
        });
    (exports)['<module>'] = LmoduleG__1644;
}
{
    var ralphScoreCCMmake_function = B1636['%make-function'], ralphScoreCCanyQ = B1636['any?'], ralphScoreCCinstanceQ = B1636['instance?'], ralphScoreCCLarrayG = B1636['<array>'], ralphScoreCCEE = B1636['=='], ralphScoreCCget = B1636['get'], find_moduleSimport_name__1666 = ralphScoreCCMmake_function('find_moduleSimport_name', function B1654(definition_name__1655, module__1656) {
            return(ralphScoreCCanyQ(function B1657(import__1658) {
                var module__1659 = import__1658[0], names__1660 = import__1658[1];
                return(ralphScoreCCanyQ(function B1661(name__1662) {
                    var B1663 = false;
                    if (($T)(ralphScoreCCinstanceQ(name__1662, ralphScoreCCLarrayG)))
                        B1663 = name__1662;
                    else
                        B1663 = [
                            name__1662,
                            name__1662
                        ];
                    var import_name__1664 = B1663[0], new_name__1665 = B1663[1];
                    if (($T)(ralphScoreCCEE(definition_name__1655, new_name__1665)))
                        return([
                            module__1659,
                            import_name__1664
                        ]);
                    else
                        return(false);
                }, names__1660));
            }, ralphScoreCCget(module__1656, 'imports')));
        }, false);
    (exports)['find-module/import-name'] = find_moduleSimport_name__1666;
}
