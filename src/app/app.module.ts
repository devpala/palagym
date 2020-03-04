import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RutinasComponent } from './rutinas/rutinas.component';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component';

@NgModule({
  declarations: [
    AppComponent,
    RutinasComponent,
    EntrenamientoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
