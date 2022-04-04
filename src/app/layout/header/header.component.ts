import { Component } from "@angular/core";
@Component ({
    selector: 'header', // => Esto es para seleccionar esta plantilla
    templateUrl: './header.component.html' //direccion donde esta la plantilla
}
)
export class HeaderComponent{
    public titulo:string; //variable que puede utilizarse en las distintas plantillas
    constructor(
        
    ){
        this.titulo='Profesorado' 
    }
    ngOnInit(){
        console.log('Se ha cargado el component header');
    }
}
