import { Component } from "@angular/core";
@Component ({
    selector: 'home', // => Esto es para seleccionar esta plantilla
    templateUrl: './home.component.html' //direccion donde esta la plantilla
}
)
export class HomeComponent{
    public titulo:string; //variable que puede utilizarse en las distintas plantillas
    constructor(
        
    ){
        this.titulo='HOLA MUNDO!!' 
    }
    ngOnInit(){
        console.log('Se ha cargado el component home');
    }
}
