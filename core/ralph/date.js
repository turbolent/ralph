var $g2005 = require("ralph/core")
false
{var $g2006 = Date;
exports["<date>"] = $g2006}
var $g2007 = [["timestamp", "setTime"], ["day", "setDate"], ["month", "setMonth"], ["year", "setYear"], ["minutes", "setMinutes"], ["seconds", "setSeconds"], ["hours", "setHours"], ["milliseconds", "setMilliseconds"]]
var trueQ = $g2005["true?"], $g2014 = $g2005["%make-method"], $g2015 = $g2005.not, $g2016 = $g2005["any?"], $g2017 = $g2005["empty?"], $g2018 = $g2005.get, $g2019 = $g2005.rest, $g2020 = $g2005.first, $g2021 = $g2005["as-object"], $g2022 = $g2014("initialize", function $g2045 ($date2023)
{var $options2024 = $SL.call(arguments, 1), $rarguments2025 = $g2021($options2024), $g2026 = $g2007, $g2027, $g2028, $g2029 = [$g2026];
while ($T(true))
{var $g2030 = $g2027, $value2038;
if ($T($g2030))
$value2038 = $g2030
else $value2038 = $g2016($g2017, $g2029);
var $g2044 = !(trueQ($value2038));
if ($T($g2044))
{var $sequence2040 = $g2026, $setter2031 = $sequence2040[0];
(function $g2046 ($setter2032)
{var $keyword2033 = $setter2032[0], $rfunction2034 = $setter2032[1], $g2035 = $g2018($rarguments2025, $keyword2033);
if ($T($g2035))
{var $value2036 = $g2035;
return $date2023[$rfunction2034]($value2036)}})($setter2031);
var $sequence2042 = $g2026, $g2043 = $sequence2042.slice(1);
$g2026 = $g2043;
$g2029 = [$g2026]}
else break};
return $g2028}, false, $g2006, $g2022)
{var $g2047 = $g2005["%make-function"], $g2048 = $g2047("locale_time_string", function $g2050 ($date2049)
{return $date2049.toLocaleTimeString()}, false);
exports["locale-time-string"] = $g2048}
