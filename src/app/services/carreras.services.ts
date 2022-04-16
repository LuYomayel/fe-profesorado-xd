import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders , HttpRequest  } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Carrera } from "../models/carrera";
import { global } from "./global";
import { Observable } from "rxjs";

@Injectable()

export class CarrerasService{
    public url:string;

    constructor(
        public _http:HttpClient
    ){
        this.url = global.url;
    }
    addCarrera(carrera:Carrera){
        let json = JSON.stringify(carrera);
        
        //return params;
        
        return this._http.post(this.url+'carreras', json, {headers: {"Content-type":"application/json"}})
        .toPromise()
        .then((response) => response as any)
        .catch((err) => console.log(err));
    }
}