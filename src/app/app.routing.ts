import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AlumnoComponent } from "./alumnos/alumnos.component";
import { EditAlumnoComponent } from "./alumnos/edit/edit-alumnos.component";
import { ProfesorComponent } from "./profesores/profesores.component";
import { EditProfesorComponent } from "./profesores/edit/edit-profesores.component";
const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'alumnos', component: AlumnoComponent},
    {path: 'profesores', component: ProfesorComponent},
    {path: 'alumnos/:idAlumno', component: EditAlumnoComponent},
    {path: 'profesores/:idProfesor', component: EditProfesorComponent},
    {path: '**', component: HomeComponent}
]


export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
