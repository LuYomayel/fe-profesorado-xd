import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders , HttpRequest  } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Profesor } from "../models/profesor";
import { global } from "./global";
import { Observable } from "rxjs";

@Injectable()

export class ProfesoresService{
    public url:string;

    constructor(
        public _http:HttpClient
    ){
        this.url = global.url
    }

    getProfesores(): Observable<Profesor[]>{
        
        return this._http.get<any>(this.url+'profesores');
        //return this._http.get<any>(this.url+'productos').pipe(map(res => res));
        
    }
    editProfesor(profesor:any){
        let json = JSON.stringify(profesor[0]);
        
        //return params;
        console.log(profesor[0]);
        return this._http.put(this.url+'profesores/'+profesor[0].idProfesor, json, {headers: {"Content-type":"application/json"}})
            .toPromise()
            .then((response) => response as any)
            .catch((err) => console.log(err));
    }
    getProfesor(id:number){
        
        return this._http.get(this.url+'profesores/'+id).pipe(map(res => res));
    }
    deleteProfesor(id:Number){
        return this._http.delete(this.url+'profesores/'+id)
            .toPromise()
            .then((response) => response as any)
            .catch((err) => console.log(err));
    }
    addProfesor(profesor:Profesor){
        let json = JSON.stringify(profesor);
        console.log(json)
        let params = 'json='+json;
        let headers = new HttpHeaders('application/x-www-form-urlencoded');
        //return params;
        
        return this._http.post(this.url+'profesores', json, {headers: {"Content-type":"application/json"}})
        .toPromise()
        .then((response) => response as any)
        .catch((err) => console.log(err));
    }
    
    
    
}