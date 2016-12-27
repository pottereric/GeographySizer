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
            new SizeData("Leo", 10, 1),
            new SizeData("Huntertown", 20, 1),
            new SizeData("Fort Wayne", 40, 1),
            new SizeData("Allen County", 80, 2),
            new SizeData("Indiana", 160, 3),
	    ];

	    this.sizes = this.allSizes;

        this.types = [
            new PlaceType("City", true, 1),
            new PlaceType("County", true, 2),
            new PlaceType("State", true, 3),
        ]
    }

    typeSelected(type: PlaceType) {
    	//alert("hit it with a change");
	}

	shouldShowSizeData(place: SizeData){
        for (let t of this.types) {
            if (t.id == place.areaType) {
                return t.selected;
            }
        }

        return false;
        
	}
}

class PlaceType {
    constructor(public name: string, public selected: boolean, public id: number) { }
}

class SizeData {
    constructor(public areaName: string, public area: number, public areaType: number){}
}

interface ISizeData {
    areaName: string;
    area: number;
    areaType: number;
}
