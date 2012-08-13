var $g2013 = require("ralph/core")
false
{var $g2014 = Date;
exports["<date>"] = $g2014}
var $g2015 = [["timestamp", "setTime"], ["day", "setDate"], ["month", "setMonth"], ["year", "setYear"], ["minutes", "setMinutes"], ["seconds", "setSeconds"], ["hours", "setHours"], ["milliseconds", "setMilliseconds"]]
var trueQ = $g2013["true?"], $g2022 = $g2013["%make-method"], $g2023 = $g2013.not, $g2024 = $g2013["any?"], $g2025 = $g2013["empty?"], $g2026 = $g2013.get, $g2027 = $g2013.element, $g2028 = $g2013.rest, $g2029 = $g2013.first, $g2030 = $g2013["as-object"], $g2031 = $g2022("initialize", function $g2054 ($date2032)
{var $options2033 = $SL.call(arguments, 1), $rarguments2034 = $g2030($options2033), $g2035 = $g2015, $g2036, $g2037, $g2038 = [$g2035];
while ($T(true))
{var $g2039 = $g2036, $value2047;
if ($T($g2039))
$value2047 = $g2039
else $value2047 = $g2024($g2025, $g2038);
var $g2053 = !(trueQ($value2047));
if ($T($g2053))
{var $sequence2049 = $g2035, $setter2040 = $sequence2049[0];
(function $g2055 ($setter2041)
{var $keyword2042 = $g2027($setter2041, 0), $rfunction2043 = $g2027($setter2041, 1), $g2044 = $g2026($rarguments2034, $keyword2042);
if ($T($g2044))
{var $value2045 = $g2044;
return $date2032[$rfunction2043]($value2045)}})($setter2040);
var $sequence2051 = $g2035, $g2052 = $sequence2051.slice(1);
$g2035 = $g2052;
$g2038 = [$g2035]}
else break};
return $g2037}, false, $g2014, $g2031)
{var $g2056 = $g2013["%make-function"], $g2057 = $g2056("locale_time_string", function $g2059 ($date2058)
{return $date2058.toLocaleTimeString()}, false);
exports["locale-time-string"] = $g2057}
