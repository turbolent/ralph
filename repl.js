var core = require('ralph/core');

var interactor = require('ralph/repl/interactor');
var theInteractor = core.make(interactor['<interactor>']);
interactor['start-interactor'](theInteractor);

var nodeEvaluator = require('ralph/repl/node-evaluator');
var theEvaluator = core.make(nodeEvaluator['<evaluator>']);
nodeEvaluator['start-evaluator'](theEvaluator, "ws://localhost:8080/");
