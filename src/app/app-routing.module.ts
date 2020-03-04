import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutinasComponent } from './rutinas/rutinas.component';
import { EntrenamientoComponent } from './entrenamiento/entrenamiento.component'

const routes: Routes = [
  { path:'', component:RutinasComponent },
  { path:'entrenamiento', component: EntrenamientoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
