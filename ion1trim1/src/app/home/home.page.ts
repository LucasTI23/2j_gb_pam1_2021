import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    imagens = [
      'inicio.jpeg',
      'etanol.jpg',
      'gasolina.jpg',
      'tantofaz.jpg'
    ];
    imagem = this.imagens[0];
    gasolina = null;
    etanol = null;

  constructor() {}

  verificar(): void{
    let resp = this.etanol / this.gasolina;

    if(resp < 0.7){
      this.imagem = this.imagens[1];
    }else if(resp > 0.7){
      this.imagem = this.imagens[2];
    }else{
      this.imagem = this.imagens[3];
    }
  }

  limpar(): void{
    this.imagem = this.imagens[0];
    this.etanol = null;
    this.gasolina = null;
  }
}
