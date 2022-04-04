import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Alumno } from "src/app/models/alumno";
// import { AlumnosService } from "../services/alumnos.services";
import { AlumnosService } from "src/app/services/alumnos.services";
import { global } from "src/app/services/global";

@Component ({
    selector: 'edit-alumnos', // => Esto es para seleccionar esta plantilla
    templateUrl: './edit-alumnos.component.html', //direccion donde esta la plantilla
    providers: [
        AlumnosService
    ]
}
)
export class EditAlumnoComponent{
    public titulo:string; //variable que puede utilizarse en las distintas plantillas
    public alumno: any;
    public colores: any;
    public id:Number;
    public alu:Alumno;
    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _alumnosService:AlumnosService,
        
    ){
        this.titulo='Editar alumno';
        this.colores = global.colores;
        this.id = 0;
        this.alu = new Alumno(0,0,'','','','',new Date(),0,0);
    }
    ngOnInit(){
        
        console.log('Se ha cargado el component edit-alumnos');
        
        this._route.params.forEach( (params:Params) => {
            let idAlumno = params['idAlumno'];
            
            if(idAlumno > 0){
                this.id = idAlumno;
                this._alumnosService.getAlumno(idAlumno).subscribe(
                    response=>{
                        
                        this.alumno = response;
                        let fecha = new Date(this.alumno[0].fechaNacAlumno);
                        
                        this.alumno[0].fechaNacAlumno = fecha.toLocaleDateString("fr-CA");
                    },
                    error =>{
                        this._router.navigate(['/alumnos']);
                        console.log(error)
                    }
                    )
                }
            else{
                this.id = 0;
            }
            });
        
        
    }

    editar(idAlumno:Number){
        this._alumnosService.editAlumno(this.alumno)
            .then( response => {
                
                this._router.navigate(['/alumnos']);
            }).
            catch(error => console.log(error))  
    }
    agregar(){
        this._alumnosService.addAlumno(this.alu)
            .then( response => {
                this._router.navigate(['/alumnos']);
            })
            .catch(error => console.log(error))
        console.log(this.alu);
    }
}
