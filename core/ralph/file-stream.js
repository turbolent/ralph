require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1289(name__1290, value__1291) {
            var B1293 = (exports);
            return(B1293[name__1290] = value__1291);
        };
        {
            ($module)['%eval'] = function B1292() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1294 = require('ralph/core');
{
    var B1295 = require('ralph/stream');
    {
        var B1390 = require('ralph/file-system');
        var B1391 = require('fs');
    }
}
{
    ($module)['<file-stream>'] = B1294['%make-class'](B1295['<stream>'], { 'file': false }, function Lfile_streamG__1392() {
        var B1393 = (this);
        return(B1393['file'] = (undefined));
    });
    ($module)['%export']('<file-stream>', ($module)['<file-stream>']);
}
($module)['initialize'] = B1294['%make-method']('initialize', function B1396(stream__1397) {
    var rest__1398 = $SL.call(arguments, 1);
    {
        var B1399 = B1294['%keys'](rest__1398, {
                'path': false,
                'file': false
            });
        {
            var path__1400 = B1399['path'];
            {
                var file__1401 = B1399['file'];
                {
                    B1294['apply'](B1294['%next-method'](B1396), stream__1397, rest__1398);
                    {
                        var B1402 = false;
                        if (($T)(B1294['not'](file__1401)))
                            B1402 = path__1400;
                        else
                            B1402 = false;
                        if (($T)(B1402))
                            return(B1294['get-setter'](stream__1397, 'file', B1391['createWriteStream'](path__1400)));
                        else
                            return(false);
                    }
                }
            }
        }
    }
}, false, ($module)['<file-stream>'], ($module)['initialize']);
($module)['stream-write'] = B1294['%make-method']('stream-write', function B1406(stream__1407, string__1408) {
    var B1409 = B1294['get'](stream__1407, 'file');
    {
        var B1410 = string__1408;
        return(B1409['write'](B1410));
    }
}, false, ($module)['<file-stream>'], ($module)['stream-write']);
($module)['stream-close'] = B1294['%make-method']('stream-close', function B1413(stream__1414) {
    var B1415 = B1294['get'](stream__1414, 'file');
    return(B1415['end']());
}, false, ($module)['<file-stream>'], ($module)['stream-close']);
{
    var B1416 = $K('file');
    {
        ($module)['*standard-output*'] = B1294['make'](($module)['<file-stream>'], B1416, (process)['stdout']);
        ($module)['%export']('*standard-output*', ($module)['*standard-output*']);
    }
}
{
    ($module)['*standard-error*'] = B1294['make'](($module)['<file-stream>'], B1416, (process)['stderr']);
    ($module)['%export']('*standard-error*', ($module)['*standard-error*']);
}
