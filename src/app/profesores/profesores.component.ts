import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Profesor } from "../models/profesor";
import { ProfesoresService } from "../services/profesores.service";
import { global } from "../services/global";
@Component ({
    selector: 'profesores', // => Esto es para seleccionar esta plantilla
    templateUrl: './profesores.component.html', //direccion donde esta la plantilla
    providers: [
        ProfesoresService
    ]
}
)
export class ProfesorComponent{
    public titulo:string; //variable que puede utilizarse en las distintas plantillas
    public profesores: Profesor[] = [];
    public colores: any;
    public mensaje:string;
    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _profesoresService:ProfesoresService
        
    ){
        this.titulo='Listado de profesores';
        this.colores = global.colores;
        this.mensaje = '';
    }
    ngOnInit(){
        
        console.log('Se ha cargado el component profesores');
        this.getProfesores();
        
    }

    getProfesores(){
        this._profesoresService.getProfesores().subscribe(
            result => {
                this.profesores = result;
                
            },
            error => {
                console.log(error);
            }
        );
    }

    edit(profesor:Profesor){
        console.log(profesor)
    }

    view(){
        console.log('xd')
    }
    delete(idProfesor:Number){
        this._profesoresService.deleteProfesor(idProfesor).then(
            result => {
                this.getProfesores();
                this.mensaje = 'Eliminado con éxito!';
            },
            error => {
                console.log(error);
            }
        );
        setTimeout( () =>{
            this.mensaje = '';
        },3000);
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