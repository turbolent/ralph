var core = require('ralph/core');
var evaluator = require('ralph/repl/evaluator');
var browserEvaluator = require('ralph/repl/browser-evaluator');
var theEvaluator = core.make(browserEvaluator['<browser-evaluator>']);
evaluator['start-evaluator'](theEvaluator, "ws://localhost:2342/");



