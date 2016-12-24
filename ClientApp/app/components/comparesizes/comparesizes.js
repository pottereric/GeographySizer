// the following line is a workaround for aurelia-fetch-client requiring the type UrlSearchParams
// to exist in global scope, but that type not being declared in any public @types/* package.
/// <reference path="../../../../node_modules/aurelia-fetch-client/doc/url.d.ts" />
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_fetch_client_1 = require("aurelia-fetch-client");
var aurelia_framework_1 = require("aurelia-framework");
var CompareSizes = (function () {
    function CompareSizes(http) {
        this.sizes = [
            new SizeData("Leo", 10, 1),
            new SizeData("Huntertown", 20, 1),
            new SizeData("Fort Wayne", 40, 1),
            new SizeData("Allen County", 80, 2),
        ];
        this.types = [
            new PlaceType("City", true, 1),
            new PlaceType("County", false, 2),
            new PlaceType("State", false, 3),
        ];
    }
    return CompareSizes;
}());
CompareSizes = __decorate([
    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
    __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient])
], CompareSizes);
exports.CompareSizes = CompareSizes;
var PlaceType = (function () {
    function PlaceType(name, selected, id) {
        this.name = name;
        this.selected = selected;
        this.id = id;
    }
    return PlaceType;
}());
var SizeData = (function () {
    function SizeData(areaName, area, areaType) {
        this.areaName = areaName;
        this.area = area;
        this.areaType = areaType;
    }
    return SizeData;
}());
//# sourceMappingURL=comparesizes.js.map