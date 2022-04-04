import { ModuleWithProviders } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AlumnoComponent } from "./alumnos/alumnos.component";
import { EditAlumnoComponent } from "./alumnos/edit/edit-alumnos.component";

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'alumnos', component: AlumnoComponent},
    {path: 'alumnos/:idAlumno', component: EditAlumnoComponent},
    {path: '**', component: HomeComponent}
]


export const appRoutingProviders: any[] = [];
export const routing:ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
