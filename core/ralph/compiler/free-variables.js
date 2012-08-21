var B804 = require("ralph/core")
var B806 = require("ralph/compiler/utilities")
{
var B888 = $S("%define"),
find_free_variables__846,
B825 = B804["%make-function"],
B826 = B804["instance?"],
B827 = B804["<array>"],
B828 = B804.not,
B829 = B804["empty?"],
B830 = B804["binary=="],
B831 = B804["set-subtract!"],
B832 = B804["as-set"],
B833 = B804["set-union!"],
B834 = B804.reduce,
B835 = B804.concatenate,
B836 = B806["expression?"],
B837 = B804.first,
B838 = B804["push-last"],
B839 = B804.second,
B840 = B804.rest,
B841 = B804.map,
B842 = B804.reduce1,
B843 = B804["<symbol>"],
B844 = B804["symbol-name"],
B845 = B825("find_free_variables", function find_free_variables__846 (exp__847)
{
var B883;
if ($T(B826(exp__847, B827)))
B883 = B828(B829(exp__847))
else
B883 = false;
if ($T(B883))
{
var head__848 = B837(exp__847),
name__849;
if ($T(B826(head__848, B843)))
name__849 = B844(head__848)
else
name__849 = false;
var B850 = name__849;
if ($T(B830(B850, "%method")))
{
var ____851 = exp__847[0],
name__852 = exp__847[1],
arguments__853 = exp__847[2],
body__854 = exp__847[3];
return B831(find_free_variables__846(body__854), B832(arguments__853))}
else
if ($T(B830(B850, "%bind")))
{
var ____855 = exp__847[0],
B856 = exp__847[1],
var__857 = B856[0],
value__858 = B856[1],
body__859 = exp__847[2];
return B833(B831(find_free_variables__846(body__859), B832([var__857])), find_free_variables__846(value__858))}
else
if ($T(B830(B850, "%begin")))
{
var definitions__860 = [];
return B831(B832(B834(function B861 (result__862, e__863)
{
var B884;
if ($T(B836(e__863)))
B884 = B830(B837(e__863), B888)
else
B884 = false;
var B885;
if ($T(B884))
{
B838(definitions__860, B839(e__863));
B885 = []}
else
B885 = find_free_variables__846(e__863);
return B835(result__862, B885)}, [], B840(exp__847))), B832(definitions__860))}
else
if ($T(B830(B850, "%try")))
{
var ____864 = exp__847[0],
e1__865 = exp__847[1],
v__866 = exp__847[2],
e2__867 = exp__847[3];
return B831(B833(B832(find_free_variables__846(e1__865)), B832(find_free_variables__846(e2__867))), B832([v__866]))}
else
{
var B868 = B830(B850, "%set"),
B886;
if ($T(B868))
B886 = B868
else
{
var B869 = B830(B850, "%if");
if ($T(B869))
B886 = B869
else
{
var B870 = B830(B850, "%while");
if ($T(B870))
B886 = B870
else
{
var B871 = B830(B850, "%array");
if ($T(B871))
B886 = B871
else
{
var B872 = B830(B850, "%object");
if ($T(B872))
B886 = B872
else
{
var B873 = B830(B850, "%infix");
if ($T(B873))
B886 = B873
else
{
var B874 = B830(B850, "%get-property");
if ($T(B874))
B886 = B874
else
{
var B875 = B830(B850, "%native-call");
if ($T(B875))
B886 = B875
else
{
var B876 = B830(B850, "%return");
if ($T(B876))
B886 = B876
else
{
var B877 = B830(B850, "%plus");
if ($T(B877))
B886 = B877
else
{
var B878 = B830(B850, "%minus");
if ($T(B878))
B886 = B878
else
{
var B879 = B830(B850, "%times");
if ($T(B879))
B886 = B879
else
B886 = B830(B850, "%divide")}}}}}}}}}}};
if ($T(B886))
return B832(B834(B835, [], B841(find_free_variables__846, B840(exp__847))))
else
{
var B880 = B830(B850, "%native"),
B887;
if ($T(B880))
B887 = B880
else
{
var B881 = B830(B850, "%native-name");
if ($T(B881))
B887 = B881
else
{
var B882 = B830(B850, "%define");
if ($T(B882))
B887 = B882
else
B887 = B830(B850, "%symbol")}};
if ($T(B887))
return B832([])
else
return B842(B833, B841(find_free_variables__846, exp__847))}}}
else
if ($T(B826(exp__847, B843)))
return B832([exp__847])
else
return B832([])}, false);
exports["find-free-variables"] = B845}
