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
    function CompareSizes(http, signaler) {
        this.allSizes = [
            new SizeData("Europe", 3837000, 5, "#00f"),
            new SizeData("Australia", 2968000, 5, "#00f"),
            new SizeData("Alaska", 571951, 3, "#f00"),
            new SizeData("Philippines", 300000, 4, "#0f0"),
            new SizeData("Ecuador", 283560, 4, "#0f0"),
            new SizeData("Burkina Faso", 274200, 4, "#0f0"),
            new SizeData("New Zealand", 269190, 4, "#0f0"),
            new SizeData("Gabon", 267667, 4, "#0f0"),
            new SizeData("Texas", 261797, 3, "#f00"),
            new SizeData("Guinea", 245857, 4, "#0f0"),
            new SizeData("United Kingdom", 243610, 4, "#0f0"),
            new SizeData("Uganda", 241550, 4, "#0f0"),
            new SizeData("Ghana", 238540, 4, "#0f0"),
            new SizeData("Romania", 238391, 4, "#0f0"),
            new SizeData("Laos", 236800, 4, "#0f0"),
            new SizeData("Guyana", 214970, 4, "#0f0"),
            new SizeData("Belarus", 207600, 4, "#0f0"),
            new SizeData("California", 155959, 3, "#f00"),
            new SizeData("Montana", 145552, 3, "#f00"),
            new SizeData("New Mexico", 121356, 3, "#f00"),
            new SizeData("Arizona", 113635, 3, "#f00"),
            new SizeData("Nevada", 109826, 3, "#f00"),
            new SizeData("Colorado", 103718, 3, "#f00"),
        ];
        var colors = ["#f00", "#0f0", "#00f"];
        this.sizes = this.allSizes;
        this.types = [
            //new PlaceType("City", true, 1),
            //new PlaceType("County", true, 2),
            new PlaceType("State", true, 3),
            new PlaceType("Country", true, 4),
            new PlaceType("Continent", true, 5),
        ];
    }
    CompareSizes.prototype.typeSelected = function (type) {
        for (var _i = 0, _a = this.sizes; _i < _a.length; _i++) {
            var size = _a[_i];
            if (size.areaType === type.id) {
                size.shouldShow = type.selected;
            }
        }
    };
    CompareSizes.prototype.sizeSelected = function (size) {
        if (size.selected) {
            size.drawnArea = size.area / 10000;
        }
        else {
            size.drawnArea = 0;
        }
    };
    return CompareSizes;
}());
CompareSizes = __decorate([
    aurelia_framework_1.inject(aurelia_fetch_client_1.HttpClient),
    __metadata("design:paramtypes", [aurelia_fetch_client_1.HttpClient, Object])
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
    function SizeData(areaName, area, areaType, color) {
        this.areaName = areaName;
        this.area = area;
        this.areaType = areaType;
        this.color = color;
        this.shouldShow = true;
        this.selected = false;
        this.drawnArea = 0;
    }
    return SizeData;
}());
//# sourceMappingURL=comparesizes.js.map