import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Alumno } from "../models/alumno";
// import { AlumnosService } from "../services/alumnos.services";
import { AlumnosService } from "../services/alumnos.services";
import { global } from "../services/global";
@Component ({
    selector: 'alumnos', // => Esto es para seleccionar esta plantilla
    templateUrl: './alumnos.component.html', //direccion donde esta la plantilla
    providers: [
        AlumnosService
    ]
}
)
export class AlumnoComponent{
    public titulo:string; //variable que puede utilizarse en las distintas plantillas
    public alumnos: Alumno[] = [];
    public colores: any;
    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _alumnosService:AlumnosService
        
    ){
        this.titulo='Listado de alumnos';
        this.colores = global.colores;
        
    }
    ngOnInit(){
        
        console.log('Se ha cargado el component alumnos');
        this.getAlumnos();
        
    }

    getAlumnos(){
        this._alumnosService.getAlumnos().subscribe(
            result => {
                this.alumnos = result;
                
            },
            error => {
                console.log(error);
            }
        );
    }

    edit(alumno:Alumno){
        console.log(alumno)
    }

    view(){
        console.log('xd')
    }
    delete(idAlumno:Number){
        this._alumnosService.deleteAlumno(idAlumno).then(
            result => {
                this.getAlumnos();
            },
            error => {
                console.log(error);
            }
        );
    }
    hover(variable:string, dni:any){
        let btn = document.getElementById(variable+dni);
        if(btn != null){
            if(variable == 'edit')btn.style.color = this.colores.success_light;
            if(variable == 'delete')btn.style.color = this.colores.danger_light;
            if(variable == 'view')btn.style.color = this.colores.primary_light;
        } 
        
    }
    hoverOut(variable:string, dni:any){
        let btn = document.getElementById(variable+dni);
        if(btn != null){
            if(variable == 'edit')btn.style.color = this.colores.success;
            if(variable == 'delete')btn.style.color = this.colores.danger;
            if(variable == 'view')btn.style.color = this.colores.primary;
        } 
    }
}
