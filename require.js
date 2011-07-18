
// define('module-name', [dependeny, ...], function (exports) { ... })
// require(['module-name', ...], function (exports) { ... })

var require, define;

(function () {
    var modules = {};
    var requests = 0;
    var callbacks = {};
	var head = document.getElementsByTagName('head')[0];
	var href = document.location.href;
	var root = href.substring(0, href.lastIndexOf('/') + 1);

	function load (name, callback) {
		if (!callbacks[name]) {
			callbacks[name] = [callback];

			console.log("load", name, +new Date());
			var script = document.createElement('script');
			script.setAttribute('src', root + name + '.js');
			head.appendChild(script);
		} else
			callbacks[name].push(callback);
	};

	function ensureLoaded (dependencies, callback) {
		var result = true;
		for (var i = 0, n = dependencies.length; i < n; i++) {
			var dependency = dependencies[i];
			if (!modules.hasOwnProperty(dependency)) {
				result = false;
				load(dependency, callback);
			}
		};
		return result;
	}

	require = function (dependencies, body) {
		(function check () {
			if (ensureLoaded(dependencies, check)) {
  				body.apply(null, dependencies.map(function (name) {
					return modules[name];
				}));
			}
		})();
	};

	define = function (name, dependencies, factory) {
		(function check () {
			if (ensureLoaded(dependencies, check)) {
				var module = {};
				factory(module);
				modules[name] = module;
				callbacks[name].forEach(function (callback) {
					callback();
				});
				callbacks[name] = [];
			}
		})();
	};
})();
