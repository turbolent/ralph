var B4197 = require("ralph/core")
var B4199 = require("ralph/compiler/utilities")
var reduce = B4197.reduce,
B4201 = B4197["%make-function"],
B4202 = B4197.reduce1,
B4203 = B4197.concatenate,
B4204 = B4197.map,
B4205 = B4199["begin?"],
B4206 = B4197.rest,
B4207,
B4208 = B4201("flatten_begins", function flatten_begins__4209 (exps__4210)
{
var function__4224 = B4203,
values__4225 = B4204(function B4211 (exp__4212)
{
var flattened__4213 = B4207(exp__4212);
if ($T(B4205(flattened__4213)))
{
var sequence__4223 = flattened__4213;
return sequence__4223.slice(1)}
else
return [flattened__4213]}, exps__4210),
B4226 = values__4225,
B4228 = B4226[0],
B4227 = values__4225,
B4229 = B4227.slice(1);
return reduce(function__4224, B4228, B4229)}, false)
var reduce = B4197.reduce,
trueQ = B4197["true?"],
B4232 = B4199["var?"],
B4233 = B4197["do"],
B4234 = B4197["push-last"],
B4235 = B4197.last,
B4236 = B4197["binary=="],
B4237 = B4197.first,
B4238 = B4197["second-setter"],
B4239 = B4197.third,
B4240 = B4197.second,
B4241 = B4199["set?"],
B4242 = B4197.not,
B4243 = B4197["empty?"],
B4244 = B4201("flatten_varsN", function flatten_varsN__4245 (exps__4246)
{return reduce(function B4247 (result__4248, exp__4249)
{
var sequence__4268 = result__4248,
B4269 = sequence__4268,
B4270 = ((B4269 || false).length || 0),
B4271 = 0,
value__4272 = (B4270 === B4271),
B4333 = !(trueQ(value__4272)),
previous__4250;
if ($T(B4333))
{
var array__4280 = result__4248,
B4281 = array__4280,
B4282 = ((B4281 || false).length || 0),
B4334 = (B4282 - 1);
previous__4250 = array__4280[B4334]}
else
previous__4250 = false;
var previous_varQ__4251;
if ($T(previous__4250))
previous_varQ__4251 = B4232(previous__4250)
else
previous_varQ__4251 = false;
var B4335;
if ($T(previous_varQ__4251))
B4335 = B4232(exp__4249)
else
B4335 = false;
if ($T(B4335))
{
var B4337 = function B4252 (binding__4253)
{
var array__4292 = result__4248,
B4293 = array__4292,
B4294 = ((B4293 || false).length || 0),
B4336 = (B4294 - 1),
array__4295 = array__4292[B4336],
value__4296 = binding__4253;
array__4295.push(value__4296);
return array__4295},
sequence__4298 = exp__4249,
B4338 = sequence__4298.slice(1);
B4233(B4337, B4338);
return result__4248}
else
{
var mergeQ__4254;
if ($T(previous_varQ__4251))
mergeQ__4254 = B4241(exp__4249)
else
mergeQ__4254 = false;
var binding__4255;
if ($T(mergeQ__4254))
{
var array__4313 = result__4248,
B4314 = array__4313,
B4315 = ((B4314 || false).length || 0),
B4339 = (B4315 - 1),
array__4316 = array__4313[B4339],
B4317 = array__4316,
B4318 = ((B4317 || false).length || 0),
B4340 = (B4318 - 1);
binding__4255 = array__4316[B4340]}
else
binding__4255 = false;
var identifier__4256;
if ($T(mergeQ__4254))
{
var sequence__4320 = exp__4249;
identifier__4256 = sequence__4320[1]}
else
identifier__4256 = false;
var sequence__4324 = binding__4255,
object1__4325 = sequence__4324[0],
object2__4326 = identifier__4256,
B4341 = (object1__4325 === object2__4326);
if ($T(B4341))
{
var array__4331 = binding__4255,
sequence__4330 = exp__4249,
value__4332 = sequence__4330[2];
array__4331[1] = value__4332;
return result__4248}
else
return B4203(result__4248, [exp__4249])}}, [], exps__4246)}, false)
{
var B4459 = $S("%begin"),
B4460 = $S("%var"),
dec = B4197.dec,
size = B4197.size,
flatten_statementsN__4351,
B4345 = B4197["instance?"],
B4346 = B4197["<array>"],
B4347 = B4197["last-setter"],
B4348 = B4199["maybe-begin"],
B4349 = B4197["third-setter"],
B4350 = B4197["symbol-name"];
B4207 = B4201("flatten_statementsN", function flatten_statementsN__4351 (exp__4352)
{B4461:while(true){
if ($T(B4345(exp__4352, B4346)))
{
var sequence__4362 = exp__4352,
B4445 = sequence__4362[0],
B4353 = B4350(B4445),
object1__4365 = B4353,
object2__4366 = "%method",
B4354 = (object1__4365 === object2__4366),
B4446;
if ($T(B4354))
B4446 = B4354
else
{
var object1__4369 = B4353,
object2__4370 = "%while",
B4355 = (object1__4369 === object2__4370);
if ($T(B4355))
B4446 = B4355
else
{
var object1__4373 = B4353,
object2__4374 = "%set";
B4446 = (object1__4373 === object2__4374)}};
if ($T(B4446))
{
var array__4387 = exp__4352,
array__4384 = exp__4352,
B4385 = array__4384,
B4386 = ((B4385 || false).length || 0),
B4447 = (B4386 - 1),
B4448 = array__4384[B4447],
value__4388 = flatten_statementsN__4351(B4448);
array__4387[dec(size(array__4387), 1)] = value__4388;
return exp__4352}
else
{
var object1__4391 = B4353,
object2__4392 = "%begin",
B4449 = (object1__4391 === object2__4392);
if ($T(B4449))
{
var ____4356 = exp__4352[0],
exps__4357 = $SL.call(exp__4352, 1);
return B4348(B4244(B4208(exps__4357)))}
else
{
var object1__4395 = B4353,
object2__4396 = "%bind",
B4450 = (object1__4395 === object2__4396);
if ($T(B4450))
{
var ____4358 = exp__4352[0],
binding__4359 = exp__4352[1],
body__4360 = exp__4352[2];
arguments = [[B4459, [B4460, binding__4359], body__4360]];
exp__4352 = arguments[0];
continue B4461}
else
{
var object1__4399 = B4353,
object2__4400 = "%if",
B4451 = (object1__4399 === object2__4400);
if ($T(B4451))
{
var array__4405 = exp__4352,
sequence__4404 = exp__4352,
B4452 = sequence__4404[2],
value__4406 = flatten_statementsN__4351(B4452);
array__4405[2] = value__4406;
var array__4419 = exp__4352,
array__4416 = exp__4352,
B4417 = array__4416,
B4418 = ((B4417 || false).length || 0),
B4453 = (B4418 - 1),
B4454 = array__4416[B4453],
value__4420 = flatten_statementsN__4351(B4454);
array__4419[dec(size(array__4419), 1)] = value__4420;
return exp__4352}
else
{
var object1__4423 = B4353,
object2__4424 = "%try",
B4455 = (object1__4423 === object2__4424);
if ($T(B4455))
{
var array__4429 = exp__4352,
sequence__4428 = exp__4352,
B4456 = sequence__4428[1],
value__4430 = flatten_statementsN__4351(B4456);
array__4429[1] = value__4430;
var array__4443 = exp__4352,
array__4440 = exp__4352,
B4441 = array__4440,
B4442 = ((B4441 || false).length || 0),
B4457 = (B4442 - 1),
B4458 = array__4440[B4457],
value__4444 = flatten_statementsN__4351(B4458);
array__4443[dec(size(array__4443), 1)] = value__4444;
return exp__4352}
else
return B4204(flatten_statementsN__4351, exp__4352)}}}}}
else
return exp__4352;
break}}, false);
exports["flatten-statements!"] = B4207}
