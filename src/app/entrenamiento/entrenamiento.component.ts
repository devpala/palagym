import { Component, OnInit } from '@angular/core';
import { lista } from './lista';

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.component.html',
  styleUrls: ['./entrenamiento.component.scss']
})
export class EntrenamientoComponent implements OnInit {
lista:any[] = lista;

  constructor() { }

  ngOnInit(): void {
  }

  descartar() {

  }
}
