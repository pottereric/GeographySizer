import { Aurelia } from "aurelia-framework";
import { Router, RouterConfiguration } from "aurelia-router";

export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router) {
        config.title = "Aurelia";
        config.map([{
            route: [ "", "home" ],
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
    }
}
