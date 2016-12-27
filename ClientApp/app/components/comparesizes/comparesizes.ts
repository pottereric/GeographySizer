// the following line is a workaround for aurelia-fetch-client requiring the type UrlSearchParams
// to exist in global scope, but that type not being declared in any public @types/* package.
/// <reference path="../../../../node_modules/aurelia-fetch-client/doc/url.d.ts" />

import { HttpClient } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";

@inject(HttpClient)
export class CompareSizes {
    public sizes: ISizeData[];
    public allSizes: ISizeData[];

    public types: PlaceType[];

    constructor(http: HttpClient, signaler) {
        this.allSizes = [
            new SizeData("Europe", 3837000, 5),
            new SizeData("Australia", 2968000, 5),
            new SizeData("Alaska", 571951, 3),
            new SizeData("Philippines", 300000, 4),
            new SizeData("Ecuador", 283560, 4),
            new SizeData("Burkina Faso", 274200, 4),
            new SizeData("New Zealand", 269190, 4),
            new SizeData("Gabon", 267667, 4),
            new SizeData("Texas", 261797, 3),
            new SizeData("Guinea", 245857, 4),
            new SizeData("United Kingdom",	243610, 4),
            new SizeData("Uganda", 241550, 4),
            new SizeData("Ghana", 238540, 4),
            new SizeData("Romania", 238391, 4),
            new SizeData("Laos", 236800, 4),
            new SizeData("Guyana", 214970, 4),
            new SizeData("Belarus", 207600, 4),
            new SizeData("California", 155959, 3),
            new SizeData("Montana", 145552, 3),
            new SizeData("New Mexico", 121356, 3),
            new SizeData("Arizona", 113635, 3),
            new SizeData("Nevada", 109826, 3),
            new SizeData("Colorado", 103718, 3),
        ];

	    this.sizes = this.allSizes;

        this.types = [
            //new PlaceType("City", true, 1),
            //new PlaceType("County", true, 2),
            new PlaceType("State", true, 3),
            new PlaceType("Country", true, 4),
            new PlaceType("Continent", true, 5),
        ]
    }

    typeSelected(type: PlaceType) {
        for (let size of this.sizes) {
            if (size.areaType === type.id) {
                size.shouldShow = type.selected;
            }
        }
    }

    sizeSelected(size: SizeData) {
        if (size.selected) {
            size.drawnArea = size.area / 10000;
        } else {
            size.drawnArea = 0;
        }
    }
}

class PlaceType {
    constructor(public name: string, public selected: boolean, public id: number) { }
}

class SizeData {
    constructor(public areaName: string, public area: number, public areaType: number) {
        this.shouldShow = true;
        this.selected = false;
        this.drawnArea = 0;
    }

    public shouldShow: boolean;
    public selected: boolean; 
    public drawnArea: number;
}

interface ISizeData {
    areaName: string;
    area: number;
    areaType: number;
    shouldShow: boolean;
    selected: boolean;
}
