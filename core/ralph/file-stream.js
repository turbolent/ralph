require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1311(name__1312, value__1313) {
            var B1315 = (exports);
            return(B1315[name__1312] = value__1313);
        };
        {
            ($module)['%eval'] = function B1314() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1316 = require('ralph/core');
{
    var B1317 = require('ralph/stream');
    {
        var B1412 = require('ralph/file-system');
        var B1413 = require('fs');
    }
}
{
    ($module)['<file-stream>'] = B1316['%make-class'](B1317['<stream>'], { 'file': false }, function Lfile_streamG__1414() {
        var B1415 = (this);
        return(B1415['file'] = (undefined));
    });
    ($module)['%export']('<file-stream>', ($module)['<file-stream>']);
}
($module)['initialize'] = B1316['%make-method']('initialize', function B1418(stream__1419) {
    var rest__1420 = $SL.call(arguments, 1);
    {
        var B1421 = B1316['%keys'](rest__1420, {
                'path': false,
                'file': false
            });
        {
            var path__1422 = B1421['path'];
            {
                var file__1423 = B1421['file'];
                {
                    B1316['apply'](B1316['%next-method'](B1418), stream__1419, rest__1420);
                    {
                        var B1424 = false;
                        if (($T)(B1316['not'](file__1423)))
                            B1424 = path__1422;
                        else
                            B1424 = false;
                        if (($T)(B1424))
                            return(B1316['get-setter'](stream__1419, 'file', B1413['createWriteStream'](path__1422)));
                        else
                            return(false);
                    }
                }
            }
        }
    }
}, false, ($module)['<file-stream>'], ($module)['initialize']);
($module)['stream-write'] = B1316['%make-method']('stream-write', function B1428(stream__1429, string__1430) {
    var B1431 = B1316['get'](stream__1429, 'file');
    {
        var B1432 = string__1430;
        return(B1431['write'](B1432));
    }
}, false, ($module)['<file-stream>'], ($module)['stream-write']);
($module)['stream-close'] = B1316['%make-method']('stream-close', function B1435(stream__1436) {
    var B1437 = B1316['get'](stream__1436, 'file');
    return(B1437['end']());
}, false, ($module)['<file-stream>'], ($module)['stream-close']);
{
    var B1438 = $K('file');
    {
        ($module)['*standard-output*'] = B1316['make'](($module)['<file-stream>'], B1438, (process)['stdout']);
        ($module)['%export']('*standard-output*', ($module)['*standard-output*']);
    }
}
{
    ($module)['*standard-error*'] = B1316['make'](($module)['<file-stream>'], B1438, (process)['stderr']);
    ($module)['%export']('*standard-error*', ($module)['*standard-error*']);
}
