require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1345(name__1346, value__1347) {
            var B1349 = (exports);
            return(B1349[name__1346] = value__1347);
        };
        {
            ($module)['%eval'] = function B1348() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1350 = require('ralph/core');
{
    var B1351 = require('ralph/format');
    var B1482 = require('ralph/file-stream');
}
{
    {
        ($module)['format-out'] = function B1484(control_string__1485) {
            var args__1486 = $SL.call(arguments, 1);
            return(B1350['apply'](B1351['format'], B1482['*standard-output*'], control_string__1485, args__1486));
        };
        ($module)['%export']('format-out', ($module)['format-out']);
    }
    B1350['%annotate-function'](($module)['format-out'], 'format-out', false);
}
