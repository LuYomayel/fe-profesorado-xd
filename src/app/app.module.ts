import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule  }   from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AngularMaterialModule } from './angular-material.module';
import  {CUSTOM_ELEMENTS_SCHEMA}  from '@angular/core';


import { AppComponent } from './app.component';

//Componentes
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './home/home.component';
import { AlumnoComponent } from './alumnos/alumnos.component';
import { ProfesorComponent } from './profesores/profesores.component';
import { EditAlumnoComponent } from './alumnos/edit/edit-alumnos.component';
import { EditProfesorComponent } from './profesores/edit/edit-profesores.component';
import { MateriaComponent } from './materias/materias.component';
//Rutas
import { routing, appRoutingProviders } from './app.routing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AlumnoComponent,
    EditAlumnoComponent,
    ProfesorComponent,
    EditProfesorComponent,
    MateriaComponent
  ],
  imports: [
    BrowserModule,
    routing,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule 
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
