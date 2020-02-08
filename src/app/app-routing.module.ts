import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RutinasComponent } from './rutinas/rutinas.component';

const routes: Routes = [
  {path:'', component:RutinasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
