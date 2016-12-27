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
            new SizeData("Indiana", 160, 3),
            new SizeData("Allen County", 80, 2),
            new SizeData("Fort Wayne", 40, 1),
            new SizeData("Huntertown", 20, 1),
            new SizeData("Leo", 10, 1),
	    ];

	    this.sizes = this.allSizes;

        this.types = [
            new PlaceType("City", true, 1),
            new PlaceType("County", true, 2),
            new PlaceType("State", true, 3),
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
        //alert('display size ' + size.areaName);
        if (size.selected) {
            size.drawnArea = size.area;
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
