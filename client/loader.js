(function () {
    var remaining = [];
    var modules = Object.create(null);
    define = function (name, factory) {
        factory(modules[name] = {});
        load(remaining);
    };
    require = function (name) {
        return modules[name];
    };
    load = function (modules) {
        if (modules.length) {
            remaining = modules.slice(1);
            var script = document.createElement('script');
            script.src = (load.root || "/") + modules[0] + '.js';
            document.head.appendChild(script);
        }
    };
})();