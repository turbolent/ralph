var B1269 = require('ralph/core');
var B1386 = require('ralph/stream');
var ralphScoreCCMvar = B1269['%var'], ralphScoreCCMmake_function = B1269['%make-function'], ralphScoreCCas_string = B1269['as-string'], format_integer__1390 = ralphScoreCCMmake_function('format_integer', function B1388(number__1389) {
        return(ralphScoreCCas_string(number__1389));
    }, false);
{
    var ralphScoreCCas_lowercase = B1269['as-lowercase'], ralphScoreCCEE = B1269['=='], ralphScoreCCdescription = B1269['description'], ralphScoreCCsignal = B1269['signal'], ralphScoreCCmake = B1269['make'], ralphScoreCCLerrorG = B1269['<error>'], ralphScoreCCconcatenate = B1269['concatenate'], ralphScoreCCnot = B1269['not'], ralphScoreCCemptyQ = B1269['empty?'], ralphScoreCCposition = B1269['position'], ralphScoreCCG = B1269['>'], ralphSstreamCCstream_write = B1386['stream-write'], ralphScoreCCslice = B1269['slice'], ralphScoreCCelement = B1269['element'], ralphScoreCCsecond = B1269['second'], ralphScoreCCP = B1269['+'], B1397 = $K('message'), format__1414 = ralphScoreCCMmake_function('format', function B1398(stream__1399, control_string__1400) {
            var args__1401 = $SL.call(arguments, 2), dispatch__1402 = false;
            dispatch__1402 = function B1403(char__1404, arg__1405) {
                var B1406 = ralphScoreCCas_lowercase(char__1404), B1407 = ralphScoreCCEE(B1406, 's'), B1415 = false;
                if (($T)(B1407))
                    B1415 = B1407;
                else
                    B1415 = ralphScoreCCEE(B1406, 'c');
                if (($T)(B1415))
                    return(arg__1405);
                else if (($T)(ralphScoreCCEE(B1406, '='))) {
                    var B1408 = ralphScoreCCdescription(arg__1405);
                    if (($T)(B1408))
                        return(B1408);
                    else
                        return('');
                } else if (($T)(ralphScoreCCEE(B1406, 'b')))
                    return(format_integer__1390(arg__1405, 2));
                else if (($T)(ralphScoreCCEE(B1406, 'o')))
                    return(format_integer__1390(arg__1405, 8));
                else if (($T)(ralphScoreCCEE(B1406, 'd')))
                    return(format_integer__1390(arg__1405, 10));
                else if (($T)(ralphScoreCCEE(B1406, 'x')))
                    return(format_integer__1390(arg__1405, 16));
                else if (($T)(ralphScoreCCEE(B1406, 'm'))) {
                    arg__1405(stream__1399);
                    return('');
                } else
                    return(ralphScoreCCsignal(ralphScoreCCmake(ralphScoreCCLerrorG, B1397, ralphScoreCCconcatenate('Unknown format dispatch character ', char__1404))));
            };
            var index__1409 = 0;
            while (($T)(ralphScoreCCnot(ralphScoreCCemptyQ(control_string__1400)))) {
                var next_dispatch__1410 = ralphScoreCCposition(control_string__1400, '%');
                if (($T)(ralphScoreCCG(next_dispatch__1410, 0))) {
                    ralphSstreamCCstream_write(stream__1399, ralphScoreCCslice(control_string__1400, 0, next_dispatch__1410));
                    control_string__1400 = ralphScoreCCslice(control_string__1400, next_dispatch__1410);
                } else if (($T)(next_dispatch__1410)) {
                    var arg__1411 = ralphScoreCCelement(args__1401, index__1409), char__1412 = ralphScoreCCsecond(control_string__1400), percent__1413 = ralphScoreCCEE(char__1412, '%'), B1416 = false;
                    if (($T)(percent__1413))
                        B1416 = '%';
                    else
                        B1416 = dispatch__1402(char__1412, arg__1411);
                    ralphSstreamCCstream_write(stream__1399, B1416);
                    control_string__1400 = ralphScoreCCslice(control_string__1400, 2);
                    if (($T)(ralphScoreCCnot(percent__1413)))
                        index__1409 = ralphScoreCCP(index__1409, 1);
                } else {
                    ralphSstreamCCstream_write(stream__1399, control_string__1400);
                    control_string__1400 = '';
                }
            }
            return(false);
        }, false);
    (exports)['format'] = format__1414;
}
{
    var ralphScoreCCapply = B1269['apply'], ralphSstreamCCTstandard_outputT = B1386['*standard-output*'], format_out__1421 = ralphScoreCCMmake_function('format_out', function B1418(control_string__1419) {
            var args__1420 = $SL.call(arguments, 1);
            return(ralphScoreCCapply(format__1414, ralphSstreamCCTstandard_outputT, control_string__1419, args__1420));
        }, false);
    (exports)['format-out'] = format_out__1421;
}
{
    var ralphSstreamCCLstring_streamG = B1386['<string-stream>'], ralphSstreamCCstream_contents = B1386['stream-contents'], format_to_string__1427 = ralphScoreCCMmake_function('format_to_string', function B1423(control_string__1424) {
            var args__1425 = $SL.call(arguments, 1), stream__1426 = ralphScoreCCmake(ralphSstreamCCLstring_streamG);
            ralphScoreCCapply(format__1414, stream__1426, control_string__1424, args__1425);
            return(ralphSstreamCCstream_contents(stream__1426));
        }, false);
    (exports)['format-to-string'] = format_to_string__1427;
}
