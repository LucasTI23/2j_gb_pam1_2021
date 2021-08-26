import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  selecoes = [
    'brasil.png',
    'frança.jpg',
    'portugal.png',
    'argentina.jpg'
  ];
  selecao = 'inicio.jpg';

  constructor() {}

}
