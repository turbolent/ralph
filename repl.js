var core = require('ralph/core');

var interactor = require('ralph/repl/interactor');
var theInteractor = core.make(interactor['<interactor>']);
interactor['start-interactor'](theInteractor, $K('port'), 2342);

if (process.argv[2] !== '--remote') {
  var evaluator = require('ralph/repl/evaluator');
  var nodeEvaluator = require('ralph/repl/node-evaluator');
  var theEvaluator = core.make(nodeEvaluator['<node-evaluator>']);
  evaluator['start-evaluator'](theEvaluator, "ws://localhost:2342/");
}
