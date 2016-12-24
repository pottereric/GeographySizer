"use strict";
var App = (function () {
    function App() {
    }
    App.prototype.configureRouter = function (config, router) {
        config.title = "Aurelia";
        config.map([{
                route: ["", "home"],
                name: "home",
                settings: { icon: "home" },
                moduleId: "../home/home",
                nav: true,
                title: "Home"
            }, {
                route: "fetch-data",
                name: "fetchdata",
                settings: { icon: "th-list" },
                moduleId: "../fetchdata/fetchdata",
                nav: true,
                title: "Fetch data"
            }, {
                route: "compare-sizes",
                name: "comparesizes",
                settings: { icon: "th-list" },
                moduleId: "../comparesizes/comparesizes",
                nav: true,
                title: "Compare Sizes"
            }]);
        this.router = router;
    };
    return App;
}());
exports.App = App;
//# sourceMappingURL=app.js.map