{
var B1923;
false;
B1923 = require("ralph/core")}
{
var B1925;
false;
B1925 = require("ralph/compiler/utilities")}
{
var Mmake_function__1928 = B1923["%make-function"],
instanceQ__1929 = B1923["instance?"],
LarrayG__1930 = B1923["<array>"],
binaryEE__1931 = B1923["binary=="],
last_setter__1932 = B1923["last-setter"],
last__1933 = B1923.last,
third_setter__1934 = B1923["third-setter"],
third__1935 = B1923.third,
second_setter__1936 = B1923["second-setter"],
second__1937 = B1923.second,
concatenate__1938 = B1923.concatenate,
symbol_name__1939 = B1923["symbol-name"],
first__1940 = B1923.first,
wrap_valueN__1941;
false;
wrap_valueN__1941 = Mmake_function__1928("wrap_valueN", function wrap_valueN__1942 (exp__1943, wrapper__1944)
{if ($T(instanceQ__1929(exp__1943, LarrayG__1930)))
{
var B1945 = symbol_name__1939(first__1940(exp__1943)),
B1946 = binaryEE__1931(B1945, "%begin"),
B1947;
if ($T(B1946))
{B1947 = B1946}
else
B1947 = binaryEE__1931(B1945, "%bind");
if ($T(B1947))
{
last_setter__1932(exp__1943, wrap_valueN__1942(last__1933(exp__1943), wrapper__1944));
return exp__1943}
else
if ($T(binaryEE__1931(B1945, "%if")))
{
third_setter__1934(exp__1943, wrap_valueN__1942(third__1935(exp__1943), wrapper__1944));
last_setter__1932(exp__1943, wrap_valueN__1942(last__1933(exp__1943), wrapper__1944));
return exp__1943}
else
if ($T(binaryEE__1931(B1945, "%while")))
{return [$S("%begin", "ralph/core"), exp__1943, wrap_valueN__1942(false, wrapper__1944)]}
else
if ($T(binaryEE__1931(B1945, "%try")))
{
second_setter__1936(exp__1943, wrap_valueN__1942(second__1937(exp__1943), wrapper__1944));
last_setter__1932(exp__1943, wrap_valueN__1942(last__1933(exp__1943), wrapper__1944));
return exp__1943}
else
return concatenate__1938(wrapper__1944, [exp__1943])}
else
return concatenate__1938(wrapper__1944, [exp__1943])}, false)}
{
var add_explicit_return__1948;
false;
add_explicit_return__1948 = Mmake_function__1928("add_explicit_return", function add_explicit_return__1949 (exp__1950)
{return wrap_valueN__1941(exp__1950, [$S("%return", "ralph/core")])}, false)}
{
var not__1951 = B1923.not,
emptyQ__1952 = B1923["empty?"],
memberQ__1953 = B1923["member?"],
statementQ__1954;
false;
statementQ__1954 = Mmake_function__1928("statementQ", function statementQ__1955 (exp__1956)
{if ($T(instanceQ__1929(exp__1956, LarrayG__1930)))
{if ($T(not__1951(emptyQ__1952(exp__1956))))
{return memberQ__1953(first__1940(exp__1956), [$S("%if", "ralph/core"), $S("%while", "ralph/core"), $S("%begin", "ralph/core"), $S("%bind", "ralph/core"), $S("%try", "ralph/core")])}}}, false)}
{
var LbooleanG__1957 = B1923["<boolean>"],
trueQ__1958 = B1923["true?"],
add_explicit_true__1959;
false;
add_explicit_true__1959 = Mmake_function__1928("add_explicit_true", function add_explicit_true__1960 (exp__1961)
{if ($T(instanceQ__1929(exp__1961, LbooleanG__1957)))
{return trueQ__1958(exp__1961)}
else
return [[$S("%native", "ralph/core"), "$T"], exp__1961]}, false)}
{
var maybe_begin__1964 = B1925["maybe-begin"],
map__1965 = B1923.map,
rcurry__1966 = B1923.rcurry,
get__1967 = B1923.get,
first_setter__1968 = B1923["first-setter"],
transform_statementsN__1969;
false;
transform_statementsN__1969 = Mmake_function__1928("transform_statementsN", function transform_statementsN__1970 (exp__1971, env__1972)
{if ($T(instanceQ__1929(exp__1971, LarrayG__1930)))
{
var B1973 = symbol_name__1939(first__1940(exp__1971));
if ($T(binaryEE__1931(B1973, "%method")))
{
last_setter__1932(exp__1971, add_explicit_return__1948(transform_statementsN__1970(last__1933(exp__1971), env__1972)));
return exp__1971}
else
if ($T(binaryEE__1931(B1973, "%begin")))
{
var ____1974 = exp__1971[0],
exps__1975 = $SL.call(exp__1971, 1);
return maybe_begin__1964(map__1965(rcurry__1966(transform_statementsN__1970, env__1972), exps__1975))}
else
if ($T(binaryEE__1931(B1973, "%bind")))
{
var ____1976 = exp__1971[0],
B1977 = exp__1971[1],
var__1978 = B1977[0],
value__1979 = B1977[1],
body__1980 = exp__1971[2];
if ($T(statementQ__1954(value__1979)))
{return [$S("%bind", "ralph/core"), [var__1978, false], [$S("%begin", "ralph/core"), wrap_valueN__1941(transform_statementsN__1970(value__1979, env__1972), [$S("%set", "ralph/core"), var__1978]), transform_statementsN__1970(body__1980, env__1972)]]}
else
return [$S("%bind", "ralph/core"), [var__1978, transform_statementsN__1970(value__1979, env__1972)], transform_statementsN__1970(body__1980, env__1972)]}
else
if ($T(binaryEE__1931(B1973, "%if")))
{
var ____1981 = exp__1971[0],
test__1982 = exp__1971[1],
then__1983 = exp__1971[2],
else__1984 = exp__1971[3];
return [$S("%if", "ralph/core"), add_explicit_true__1959(test__1982), transform_statementsN__1970(then__1983, env__1972), transform_statementsN__1970(else__1984, env__1972)]}
else
if ($T(binaryEE__1931(B1973, "%while")))
{
second_setter__1936(exp__1971, add_explicit_true__1959(second__1937(exp__1971)));
third_setter__1934(exp__1971, transform_statementsN__1970(third__1935(exp__1971), env__1972));
return exp__1971}
else
if ($T(binaryEE__1931(B1973, "%try")))
{
second_setter__1936(exp__1971, transform_statementsN__1970(second__1937(exp__1971), exp__1971));
last_setter__1932(exp__1971, transform_statementsN__1970(last__1933(exp__1971), env__1972));
return exp__1971}
else
if ($T(binaryEE__1931(B1973, "%set")))
{
var ____1985 = exp__1971[0],
identifier__1986 = exp__1971[1],
value__1987 = exp__1971[2],
valueT__1988 = transform_statementsN__1970(value__1987, env__1972),
definition_name__1989 = get__1967(env__1972, "definition-names", symbol_name__1939(identifier__1986)),
B1990;
if ($T(definition_name__1989))
{B1990 = memberQ__1953(definition_name__1989, get__1967(env__1972, "module", "exports"))}
else
B1990 = false;
if ($T(B1990))
{
first_setter__1968(exp__1971, $S("%begin", "ralph/core"));
second_setter__1936(exp__1971, [$S("%set", "ralph/core"), identifier__1986, valueT__1988]);
third_setter__1934(exp__1971, [$S("%set", "ralph/core"), [$S("%get-property", "ralph/core"), [$S("%native", "ralph/core"), "exports"], definition_name__1989], identifier__1986])}
else
third_setter__1934(exp__1971, valueT__1988);
return exp__1971}
else
if ($T(binaryEE__1931(B1973, "%define")))
{return [$S("%var", "ralph/core"), [last__1933(exp__1971), false]]}
else
return map__1965(rcurry__1966(transform_statementsN__1970, env__1972), exp__1971)}
else
return exp__1971}, false);
exports["transform-statements!"] = transform_statementsN__1969}
