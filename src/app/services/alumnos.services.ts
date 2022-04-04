import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders , HttpRequest  } from '@angular/common/http';

import {map} from 'rxjs/operators';
import { Alumno } from "../models/alumno";
import { global } from "./global";
import { Observable } from "rxjs";

@Injectable()

export class AlumnosService{
    public url:string;

    constructor(
        public _http:HttpClient
    ){
        this.url = global.url
    }

    getAlumnos(): Observable<Alumno[]>{
        
        return this._http.get<any>(this.url+'alumnos');
        //return this._http.get<any>(this.url+'productos').pipe(map(res => res));
        
    }
    editAlumno(alumno:any){
        let json = JSON.stringify(alumno[0]);
        
        //return params;
        console.log(alumno[0]);
        return this._http.put(this.url+'alumnos/'+alumno[0].idAlumno, json, {headers: {"Content-type":"application/json"}})
            .toPromise()
            .then((response) => response as any)
            .catch((err) => console.log(err));
    }
    getAlumno(id:number){
        
        return this._http.get(this.url+'alumnos/'+id).pipe(map(res => res));
    }
    deleteAlumno(id:Number){
        return this._http.delete(this.url+'alumnos/'+id)
            .toPromise()
            .then((response) => response as any)
            .catch((err) => console.log(err));
    }
    addAlumno(alumno:Alumno){
        let json = JSON.stringify(alumno);
        let params = 'json='+json;
        let headers = new HttpHeaders('application/x-www-form-urlencoded');
        //return params;
        
        return this._http.post(this.url+'alumnos', json, {headers: {"Content-type":"application/json"}})
        .toPromise()
        .then((response) => response as any)
        .catch((err) => console.log(err));
    }
    
    /*
    deleteProducto(id:Number){
        return this._http.delete(this.url+'productos/'+id)
            .toPromise()
            .then((response) => response as any)
            .catch((err) => console.log(err));
    }*/
    
}