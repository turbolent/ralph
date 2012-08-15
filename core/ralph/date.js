var $g2007 = require("ralph/core")
false
{var $g2008 = Date;
exports["<date>"] = $g2008}
var $g2009 = [["timestamp", "setTime"], ["day", "setDate"], ["month", "setMonth"], ["year", "setYear"], ["minutes", "setMinutes"], ["seconds", "setSeconds"], ["hours", "setHours"], ["milliseconds", "setMilliseconds"]]
var trueQ = $g2007["true?"], $g2016 = $g2007["%make-method"], $g2017 = $g2007.not, $g2018 = $g2007["any?"], $g2019 = $g2007["empty?"], $g2020 = $g2007.get, $g2021 = $g2007.rest, $g2022 = $g2007.first, $g2023 = $g2007["as-object"], $g2024 = $g2016("initialize", function $g2047 ($date2025)
{var $options2026 = $SL.call(arguments, 1), $rarguments2027 = $g2023($options2026), $g2028 = $g2009, $g2029, $g2030, $g2031 = [$g2028];
while ($T(true))
{var $g2032 = $g2029, $value2040;
if ($T($g2032))
$value2040 = $g2032
else $value2040 = $g2018($g2019, $g2031);
var $g2046 = !(trueQ($value2040));
if ($T($g2046))
{var $sequence2042 = $g2028, $setter2033 = $sequence2042[0];
(function $g2048 ($setter2034)
{var $keyword2035 = $setter2034[0], $rfunction2036 = $setter2034[1], $g2037 = $g2020($rarguments2027, $keyword2035);
if ($T($g2037))
{var $value2038 = $g2037;
return $date2025[$rfunction2036]($value2038)}})($setter2033);
var $sequence2044 = $g2028, $g2045 = $sequence2044.slice(1);
$g2028 = $g2045;
$g2031 = [$g2028]}
else break};
return $g2030}, false, $g2008, $g2024)
{var $g2049 = $g2007["%make-function"], $g2050 = $g2049("locale_time_string", function $g2052 ($date2051)
{return $date2051.toLocaleTimeString()}, false);
exports["locale-time-string"] = $g2050}
