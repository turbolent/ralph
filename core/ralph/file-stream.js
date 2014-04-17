require('ralph/core');
{
    var $module = Object.create($moduleRoot);
    {
        ($module)['%export'] = function B1354(name__1355, value__1356) {
            var B1358 = (exports);
            return(B1358[name__1355] = value__1356);
        };
        {
            ($module)['%eval'] = function B1357() {
                return(eval((arguments[0])));
            };
            ($module)['%export']('%eval', ($module)['%eval']);
        }
    }
}
var B1359 = require('ralph/core');
{
    var B1360 = require('ralph/stream');
    {
        var B1455 = require('ralph/file-system');
        var B1456 = require('fs');
    }
}
{
    ($module)['<file-stream>'] = B1359['%make-class'](B1360['<stream>'], { 'file': false }, function Lfile_streamG__1457() {
        var B1458 = (this);
        return(B1458['file'] = (undefined));
    });
    ($module)['%export']('<file-stream>', ($module)['<file-stream>']);
}
($module)['initialize'] = B1359['%make-method']('initialize', function B1461(stream__1462) {
    var rest__1463 = $SL.call(arguments, 1);
    {
        var B1464 = B1359['%keys'](rest__1463, {
                'path': false,
                'file': false
            });
        {
            var path__1465 = B1464['path'];
            {
                var file__1466 = B1464['file'];
                {
                    B1359['apply'](B1359['%next-method'](B1461), stream__1462, rest__1463);
                    {
                        var B1467 = false;
                        if (($T)(B1359['not'](file__1466)))
                            B1467 = path__1465;
                        else
                            B1467 = false;
                        if (($T)(B1467))
                            return(B1359['get-setter'](stream__1462, 'file', B1456['createWriteStream'](path__1465)));
                        else
                            return(false);
                    }
                }
            }
        }
    }
}, false, ($module)['<file-stream>'], ($module)['initialize']);
($module)['stream-write'] = B1359['%make-method']('stream-write', function B1471(stream__1472, string__1473) {
    var B1474 = B1359['get'](stream__1472, 'file');
    {
        var B1475 = string__1473;
        return(B1474['write'](B1475));
    }
}, false, ($module)['<file-stream>'], ($module)['stream-write']);
($module)['stream-close'] = B1359['%make-method']('stream-close', function B1478(stream__1479) {
    var B1480 = B1359['get'](stream__1479, 'file');
    return(B1480['end']());
}, false, ($module)['<file-stream>'], ($module)['stream-close']);
{
    var B1481 = $K('file');
    {
        ($module)['*standard-output*'] = B1359['make'](($module)['<file-stream>'], B1481, (process)['stdout']);
        ($module)['%export']('*standard-output*', ($module)['*standard-output*']);
    }
}
{
    ($module)['*standard-error*'] = B1359['make'](($module)['<file-stream>'], B1481, (process)['stderr']);
    ($module)['%export']('*standard-error*', ($module)['*standard-error*']);
}
