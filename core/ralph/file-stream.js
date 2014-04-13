{
    var $module = Object.create(null);
    ($module)['%export'] = function B1284(name__1285, value__1286) {
        var B1287 = (exports);
        return(B1287[name__1285] = value__1286);
    };
}
var B1288 = require('ralph/core');
{
    var B1289 = require('ralph/stream');
    {
        var B1384 = require('ralph/file-system');
        var B1385 = require('fs');
    }
}
{
    ($module)['<file-stream>'] = B1288['%make-class'](B1289['<stream>'], { 'file': false }, function Lfile_streamG__1386() {
        var B1387 = (this);
        return(B1387['file'] = (undefined));
    });
    ($module)['%export']('<file-stream>', ($module)['<file-stream>']);
}
($module)['initialize'] = B1288['%make-method']('initialize', function B1390(stream__1391) {
    var rest__1392 = $SL.call(arguments, 1);
    {
        var B1393 = B1288['%keys'](rest__1392, {
                'path': false,
                'file': false
            });
        {
            var path__1394 = B1393['path'];
            {
                var file__1395 = B1393['file'];
                {
                    B1288['apply'](B1288['%next-method'](B1390), stream__1391, rest__1392);
                    {
                        var B1396 = false;
                        if (($T)(B1288['not'](file__1395)))
                            B1396 = path__1394;
                        else
                            B1396 = false;
                        if (($T)(B1396))
                            return(B1288['get-setter'](stream__1391, 'file', B1385['createWriteStream'](path__1394)));
                        else
                            return(false);
                    }
                }
            }
        }
    }
}, false, ($module)['<file-stream>'], ($module)['initialize']);
($module)['stream-write'] = B1288['%make-method']('stream-write', function B1400(stream__1401, string__1402) {
    var B1403 = B1288['get'](stream__1401, 'file');
    {
        var B1404 = string__1402;
        return(B1403['write'](B1404));
    }
}, false, ($module)['<file-stream>'], ($module)['stream-write']);
($module)['stream-close'] = B1288['%make-method']('stream-close', function B1407(stream__1408) {
    var B1409 = B1288['get'](stream__1408, 'file');
    return(B1409['end']());
}, false, ($module)['<file-stream>'], ($module)['stream-close']);
{
    var B1410 = $K('file');
    {
        ($module)['*standard-output*'] = B1288['make'](($module)['<file-stream>'], B1410, (process)['stdout']);
        ($module)['%export']('*standard-output*', ($module)['*standard-output*']);
    }
}
{
    ($module)['*standard-error*'] = B1288['make'](($module)['<file-stream>'], B1410, (process)['stderr']);
    ($module)['%export']('*standard-error*', ($module)['*standard-error*']);
}
{
    ($module)['%eval'] = function B1412() {
        return(eval((arguments[0])));
    };
    {
        B1288['%annotate-function'](($module)['%eval'], '%eval', false);
        ($module)['%export']('%eval', ($module)['%eval']);
    }
}
