import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rutinas',
  templateUrl: './rutinas.component.html',
  styleUrls: ['./rutinas.component.scss']
})
export class RutinasComponent implements OnInit {
  hora = new Observable(observer => {
    setInterval( () => { observer.next( new Date().toString() ), 1000 })
  });

  imagenes = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSOBlD0jnaOEaG5NEFJDQEYRxAnMNgBlKSR03imnZ-gnoMpRU0',
    'https://entrenar.me/blog/wp-content/uploads/2017/03/Rutina-b%C3%ADceps-frances-221x300.jpg',
    'https://66.media.tumblr.com/0f8797cccd5368f1278db9c26e78f279/tumblr_onlq1mtK8a1unpzh1o1_640.jpg',
    'https://i.blogs.es/25f375/650_1000_biceps_-1-/450_1000.jpg',
    'https://i.pinimg.com/originals/08/6e/e2/086ee2c6f1841ddcdb48d6e99e65ec71.jpg',
    'https://t2.uc.ltmcdn.com/images/1/1/8/img_rutina_de_pesas_para_biceps_44811_orig.jpg',
    'https://img-s-msn-com.akamaized.net/tenant/amp/entityid/BBfbNml.jpg',
    'http://static.flickr.com/35/71520006_4482f5091d_o.jpg',
    'https://i.pinimg.com/736x/5d/3b/be/5d3bbe821a56f8c0cf7ec87e98c35fda--fitness.jpg',
  ]

  constructor() { }

  ngOnInit() { }

  agregar(){

  }

}
