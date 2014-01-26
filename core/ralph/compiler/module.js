{
    var B5 = require('ralph/core');
}
false;
{
    {
        var ralphScoreCCMvar = B5['%var'];
        var ralphScoreCCMmake_class = B5['%make-class'];
        var ralphScoreCCLobjectG = B5['<object>'];
        var LmoduleG__13 = ralphScoreCCMmake_class(ralphScoreCCLobjectG, {
                'name': false,
                'native?': false,
                'imports': function B9() {
                    return([]);
                },
                'exports': function B10() {
                    return([]);
                },
                'dependencies': function B11() {
                    return([]);
                }
            }, function LmoduleG__12() {
                {
                    var B14 = (this);
                }
                B14['name'] = (undefined);
                {
                    var B15 = (this);
                }
                B15['native?'] = (undefined);
                {
                    var B16 = (this);
                }
                B16['imports'] = (undefined);
                {
                    var B17 = (this);
                }
                B17['exports'] = (undefined);
                {
                    var B18 = (this);
                }
                return(B18['dependencies'] = (undefined));
            });
    }
    (exports)['<module>'] = LmoduleG__13;
}
{
    {
        var ralphScoreCCanyQ = B5['any?'];
        var ralphScoreCCinstanceQ = B5['instance?'];
        var ralphScoreCCLarrayG = B5['<array>'];
        var ralphScoreCCEE = B5['=='];
        var ralphScoreCCget = B5['get'];
        var ralphScoreCCMannotate_function = B5['%annotate-function'];
        var find_moduleSimport_name__35 = function B23(definition_name__24, module__25) {
            return(ralphScoreCCanyQ(function B26(import__27) {
                {
                    var module__28 = import__27[0];
                    var names__29 = import__27[1];
                }
                return(ralphScoreCCanyQ(function B30(name__31) {
                    {
                        var B32 = false;
                    }
                    if (($T)(ralphScoreCCinstanceQ(name__31, ralphScoreCCLarrayG)))
                        B32 = name__31;
                    else
                        B32 = [
                            name__31,
                            name__31
                        ];
                    {
                        var import_name__33 = B32[0];
                        var new_name__34 = B32[1];
                    }
                    if (($T)(ralphScoreCCEE(definition_name__24, new_name__34)))
                        return([
                            module__28,
                            import_name__33
                        ]);
                    else
                        return(false);
                }, names__29));
            }, ralphScoreCCget(module__25, 'imports')));
        };
    }
    (exports)['find-module/import-name'] = find_moduleSimport_name__35;
    ralphScoreCCMannotate_function(find_moduleSimport_name__35, 'find_moduleSimport_name', false);
}
