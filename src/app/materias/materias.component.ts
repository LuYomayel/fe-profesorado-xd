import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Materia } from "../models/materia";
// import { AlumnosService } from "../services/alumnos.services";
import { MateriasService } from "../services/materias.services";
import { global } from "../services/global";

@Component ({
    selector: 'materias', // => Esto es para seleccionar esta plantilla
    templateUrl: './materias.component.html', //direccion donde esta la plantilla
    providers: [
        MateriasService
    ]
})

export class MateriaComponent{
    public titulo:string
    public listaMaterias:any;
    public colores: any;
    public mensaje: string;
    public materia:Materia;
    public addMat:string;
    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _materiasService: MateriasService
    ){
        this.titulo = 'Listado de Materias';
        this.mensaje = '';
        this.colores = global.colores;
        this.materia = new Materia(0,'',1);
        this.addMat = '';
    }
    ngOnInit(){
        this.getMaterias();
        if(this.getMaterias === undefined)this.listaMaterias = [];
    }
    getMaterias(){
        this._materiasService.getMaterias().subscribe((materia) => this.listaMaterias = materia)
    }
    addMateria(){
        this.materia.nombreMateria = this.addMat;
        this._materiasService.addMateria(this.materia)
            .then( response => {
                this.getMaterias();
            })
            .catch(error => console.log(error))

        
    }
    view(){
        console.log('xd')
    }
    delete(idMateria:Number){
        this._materiasService.deleteMateria(idMateria).then(
            result => {
                this.getMaterias();
                this.mensaje = 'Eliminada con éxito!';
            },
            error => {
                console.log(error);
            }
        );
        
        setTimeout( () => {
            this.mensaje = '';
        }, 3000)
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