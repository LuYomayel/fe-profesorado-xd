import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders , HttpRequest  } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Materia } from "../models/materia";
import { global } from "./global";
import { Observable } from "rxjs";

@Injectable()

export class MateriasService{
    public url:string;

    constructor(public _http:HttpClient){
        this.url = global.url;
    }
    addMateria(materia:Materia){
        let json = JSON.stringify(materia);
        
        //return params;
        
        return this._http.post(this.url+'materias', json, {headers: {"Content-type":"application/json"}})
        .toPromise()
        .then((response) => response as any)
        .catch((err) => console.log(err));
    }
    getMaterias(){
        return this._http.get(this.url+'materias');
    }
    deleteMateria(id:Number){
        return this._http.delete(this.url+'materias/'+id)
            .toPromise()
            .then((response) => response as any)
            .catch((err) => console.log(err));
    }
}