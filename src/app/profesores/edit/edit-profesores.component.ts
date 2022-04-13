import { Component } from "@angular/core";
import { Router, ActivatedRoute, Params} from '@angular/router';
import { Profesor } from "src/app/models/profesor";
import { ProfesoresService } from "src/app/services/profesores.service";
import { global } from "src/app/services/global";

@Component ({
    selector: 'edit-profesores', // => Esto es para seleccionar esta plantilla
    templateUrl: './edit-profesores.component.html', //direccion donde esta la plantilla
    providers: [
        ProfesoresService
    ]
}
)
export class EditProfesorComponent{
    public titulo:string; //variable que puede utilizarse en las distintas plantillas
    public profesor: any;
    public colores: any;
    public id:Number;
    public profe:Profesor;
    constructor(
        private _route:ActivatedRoute,
        private _router:Router,
        private _profesorService:ProfesoresService,
        
    ){
        this.titulo='Editar Profesor';
        this.colores = global.colores;
        this.id = 0;
        this.profe = new Profesor(0,0,'','','','',new Date(),0,0);
    }
    ngOnInit(){
        
        console.log('Se ha cargado el component edit-profesor');
        
        this._route.params.forEach( (params:Params) => {
            let idProfesor = params['idProfesor'];
            
            if(idProfesor > 0){
                this.id = idProfesor;
                this._profesorService.getProfesor(idProfesor).subscribe(
                    response=>{
                        
                        this.profesor = response;
                        console.log(this.profesor);
                        let fecha = new Date(this.profesor[0].fechaNacProfesor);
                        
                        this.profesor[0].fechaNacProfesor = fecha.toLocaleDateString("fr-CA");
                    },
                    error =>{
                        this._router.navigate(['/profesores']);
                        console.log('Error asd:'+error)
                    }
                    )
                }
            else{
                this.titulo = 'Agregar Profesor';
                this.id = 0;
            }
            });
        
        
    }

    editar(idProfesor:Number){
        this._profesorService.editProfesor(this.profesor)
            .then( response => {
                
                this._router.navigate(['/profesores']);
            }).
            catch(error => console.log(error))  
    }
    agregar(){
        this._profesorService.addProfesor(this.profe)
            .then( response => {
                this._router.navigate(['/profesores']);
            })
            .catch(error => console.log(error))
        console.log(this.profe);
    }
}