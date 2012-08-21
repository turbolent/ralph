var B4170 = require("ralph/core")
var B4172 = require("ralph/compiler/utilities")
var B4232 = $S("%begin"),
reduce = B4170.reduce,
trueQ = B4170["true?"],
B4174 = B4170["%make-function"],
B4175 = B4170.reduce1,
B4176 = B4170.concatenate,
B4177 = B4170.map,
B4178 = B4170["instance?"],
B4179 = B4170["<array>"],
B4180 = B4170.not,
B4181 = B4170["empty?"],
B4182 = B4170["binary=="],
B4183 = B4170.first,
B4184 = B4170.rest,
B4185,
B4186 = B4174("flatten_begins", function flatten_begins__4187 (exps__4188)
{
var function__4224 = B4176,
values__4225 = B4177(function B4189 (exp__4190)
{
var flattened__4191 = B4185(exp__4190),
B4229;
if ($T(B4178(flattened__4191, B4179)))
{
var sequence__4211 = flattened__4191,
B4212 = sequence__4211,
B4213 = ((B4212 || false).length || 0),
B4214 = 0,
value__4215 = (B4213 === B4214),
B4228 = !(trueQ(value__4215));
if ($T(B4228))
{
var sequence__4219 = flattened__4191,
object1__4220 = sequence__4219[0],
object2__4221 = B4232;
B4229 = (object1__4220 === object2__4221)}
else
B4229 = false}
else
B4229 = false;
if ($T(B4229))
{
var sequence__4223 = flattened__4191;
return sequence__4223.slice(1)}
else
return [flattened__4191]}, exps__4188),
B4226 = values__4225,
B4230 = B4226[0],
B4227 = values__4225,
B4231 = B4227.slice(1);
return reduce(function__4224, B4230, B4231)}, false)
var reduce = B4170.reduce,
trueQ = B4170["true?"],
B4235 = B4172["var?"],
B4236 = B4170["do"],
B4237 = B4170["push-last"],
B4238 = B4170.last,
B4239 = B4170["second-setter"],
B4240 = B4170.third,
B4241 = B4170.second,
B4242 = B4172["set?"],
B4243 = B4174("flatten_varsN", function flatten_varsN__4244 (exps__4245)
{return reduce(function B4246 (result__4247, exp__4248)
{
var sequence__4267 = result__4247,
B4268 = sequence__4267,
B4269 = ((B4268 || false).length || 0),
B4270 = 0,
value__4271 = (B4269 === B4270),
B4332 = !(trueQ(value__4271)),
previous__4249;
if ($T(B4332))
{
var array__4279 = result__4247,
B4280 = array__4279,
B4281 = ((B4280 || false).length || 0),
B4333 = (B4281 - 1);
previous__4249 = array__4279[B4333]}
else
previous__4249 = false;
var previous_varQ__4250;
if ($T(previous__4249))
previous_varQ__4250 = B4235(previous__4249)
else
previous_varQ__4250 = false;
var B4334;
if ($T(previous_varQ__4250))
B4334 = B4235(exp__4248)
else
B4334 = false;
if ($T(B4334))
{
var B4336 = function B4251 (binding__4252)
{
var array__4291 = result__4247,
B4292 = array__4291,
B4293 = ((B4292 || false).length || 0),
B4335 = (B4293 - 1),
array__4294 = array__4291[B4335],
value__4295 = binding__4252;
array__4294.push(value__4295);
return array__4294},
sequence__4297 = exp__4248,
B4337 = sequence__4297.slice(1);
B4236(B4336, B4337);
return result__4247}
else
{
var mergeQ__4253;
if ($T(previous_varQ__4250))
mergeQ__4253 = B4242(exp__4248)
else
mergeQ__4253 = false;
var binding__4254;
if ($T(mergeQ__4253))
{
var array__4312 = result__4247,
B4313 = array__4312,
B4314 = ((B4313 || false).length || 0),
B4338 = (B4314 - 1),
array__4315 = array__4312[B4338],
B4316 = array__4315,
B4317 = ((B4316 || false).length || 0),
B4339 = (B4317 - 1);
binding__4254 = array__4315[B4339]}
else
binding__4254 = false;
var identifier__4255;
if ($T(mergeQ__4253))
{
var sequence__4319 = exp__4248;
identifier__4255 = sequence__4319[1]}
else
identifier__4255 = false;
var sequence__4323 = binding__4254,
object1__4324 = sequence__4323[0],
object2__4325 = identifier__4255,
B4340 = (object1__4324 === object2__4325);
if ($T(B4340))
{
var array__4330 = binding__4254,
sequence__4329 = exp__4248,
value__4331 = sequence__4329[2];
array__4330[1] = value__4331;
return result__4247}
else
return B4176(result__4247, [exp__4248])}}, [], exps__4245)}, false)
{
var B4456 = $S("%var"),
dec = B4170.dec,
size = B4170.size,
flatten_statementsN__4348,
B4344 = B4170["last-setter"],
B4345 = B4172["maybe-begin"],
B4346 = B4170["third-setter"],
B4347 = B4170["symbol-name"];
B4185 = B4174("flatten_statementsN", function flatten_statementsN__4348 (exp__4349)
{if ($T(B4178(exp__4349, B4179)))
{
var sequence__4359 = exp__4349,
B4442 = sequence__4359[0],
B4350 = B4347(B4442),
object1__4362 = B4350,
object2__4363 = "%method",
B4351 = (object1__4362 === object2__4363),
B4443;
if ($T(B4351))
B4443 = B4351
else
{
var object1__4366 = B4350,
object2__4367 = "%while",
B4352 = (object1__4366 === object2__4367);
if ($T(B4352))
B4443 = B4352
else
{
var object1__4370 = B4350,
object2__4371 = "%set";
B4443 = (object1__4370 === object2__4371)}};
if ($T(B4443))
{
var array__4384 = exp__4349,
array__4381 = exp__4349,
B4382 = array__4381,
B4383 = ((B4382 || false).length || 0),
B4444 = (B4383 - 1),
B4445 = array__4381[B4444],
value__4385 = flatten_statementsN__4348(B4445);
array__4384[dec(size(array__4384), 1)] = value__4385;
return exp__4349}
else
{
var object1__4388 = B4350,
object2__4389 = "%begin",
B4446 = (object1__4388 === object2__4389);
if ($T(B4446))
{
var ____4353 = exp__4349[0],
exps__4354 = $SL.call(exp__4349, 1);
return B4345(B4243(B4186(exps__4354)))}
else
{
var object1__4392 = B4350,
object2__4393 = "%bind",
B4447 = (object1__4392 === object2__4393);
if ($T(B4447))
{
var ____4355 = exp__4349[0],
binding__4356 = exp__4349[1],
body__4357 = exp__4349[2];
return flatten_statementsN__4348([B4232, [B4456, binding__4356], body__4357])}
else
{
var object1__4396 = B4350,
object2__4397 = "%if",
B4448 = (object1__4396 === object2__4397);
if ($T(B4448))
{
var array__4402 = exp__4349,
sequence__4401 = exp__4349,
B4449 = sequence__4401[2],
value__4403 = flatten_statementsN__4348(B4449);
array__4402[2] = value__4403;
var array__4416 = exp__4349,
array__4413 = exp__4349,
B4414 = array__4413,
B4415 = ((B4414 || false).length || 0),
B4450 = (B4415 - 1),
B4451 = array__4413[B4450],
value__4417 = flatten_statementsN__4348(B4451);
array__4416[dec(size(array__4416), 1)] = value__4417;
return exp__4349}
else
{
var object1__4420 = B4350,
object2__4421 = "%try",
B4452 = (object1__4420 === object2__4421);
if ($T(B4452))
{
var array__4426 = exp__4349,
sequence__4425 = exp__4349,
B4453 = sequence__4425[1],
value__4427 = flatten_statementsN__4348(B4453);
array__4426[1] = value__4427;
var array__4440 = exp__4349,
array__4437 = exp__4349,
B4438 = array__4437,
B4439 = ((B4438 || false).length || 0),
B4454 = (B4439 - 1),
B4455 = array__4437[B4454],
value__4441 = flatten_statementsN__4348(B4455);
array__4440[dec(size(array__4440), 1)] = value__4441;
return exp__4349}
else
return B4177(flatten_statementsN__4348, exp__4349)}}}}}
else
return exp__4349}, false);
exports["flatten-statements!"] = B4185}
