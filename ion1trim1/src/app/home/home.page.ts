import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    prjRevisao = [
      'topo.jpg',
      'crianca.jpg',
      'jovem.jpg',
      'adulto.jpg',
      'idoso.jpg',
      'erro.jpg'
    ];
    imagem = this.prjRevisao[0];
    nome = null;
    idade = null;

  constructor() {}

  verificar(): void{
    let resp = this.idade;

    if(resp >= 1 || resp <=10){
      this.imagem = this.prjRevisao[1];
    }else if(resp >= 11 || resp <=25){
      this.imagem = this.prjRevisao[2];
    }else if(resp >=26 || resp<=59){
      this.imagem = this.prjRevisao[3];
    }else if(resp >=60 || resp <=110){
      this.imagem = this.prjRevisao[4];
    }else {
      this.imagem = this.prjRevisao[5];
    }
  }

  limpar(): void{
    this.imagem = this.prjRevisao[0];
    this.idade = null;
    this.nome = null;
  }
}
