import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  public valor1: number;
  public valor2: number;
  public resultado: number;
  
constructor() {}

  public somar(){
    this.resultado = this.valor1 + this.valor2;
    
  }
  public multiplicar(){
    this.resultado = this.valor1 * this.valor2;
   
  }
  public subtrair(){
    this.resultado = this.valor1 - this.valor2;
   

  }
  public dividir(){
    this.resultado = this.valor1 / this.valor2;
    

  }
  public limpar(){
    this.valor1 = null;
    this.valor2 = null;
    this.resultado = null;
  }

}


