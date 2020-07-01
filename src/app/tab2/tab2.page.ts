import { Component } from '@angular/core';
import { evaluate } from 'mathjs';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public calculo = ''; //variavel que exibe o cáculo na tela
  public resultado: string; //exibe o resultado na tela 

  private ponto = false;

  private operacoes = ['+', '-', '*', '/'];

  constructor(public alertController: AlertController) {}
 //adiciona o numero na tela 
  public adicionarNumero(valor: string){ //numero que o foi digitado e transformado em texto
    if(this.resultado){
      this.apagarTudo(); //limpa
    }
    
    this.calculo = this.calculo + valor;
 }
// verifica se tem algu ponto, para que não seja possivel colocar mais pontos 
 public adicionarPonto(){
  if (this.ponto){
    return; // para a execução e retorna vazio 
  }
  // só executado quando n é inserido nenhum ponto pelo usuário 
  this.calculo += ".";
  this.ponto = true;
 }
// adiciona os cálculos seguidos um do outro 
 public adicionarOperacao(operador: string) {
   //usa o resultado do calculo efetuado como continuação para a próxima operação
if(this.resultado){
  this.calculo = this.resultado.toString();
  this.resultado = null;
}

  const ultimo = this.calculo.slice(-1);
  if(this.operacoes.indexOf(ultimo) > -1){
    return;
  }

  this.calculo += operador;
  this.ponto = false;
 }
//zera totalmente a calculadora 
 public apagarTudo(){
this.calculo = ''; //vazia
this.resultado = null; //limpa tudo que esta no resultado
this.ponto = false; //limpa a calculadora permitindo inserir um ponto 
 }
// zera só a ultima variavel inserida
 public apagarUltimo(){
  const ultimo = this.calculo.slice(-1); // o slice apaga tudo que esta dentro da variável calculo
  if(ultimo == '-'){
    this.ponto = false;
  }
  

  this.calculo = this.calculo.slice(0, -1);
}
//calcula o resultado 
public calcularResultado(){
try{ //tenta executar o código para exibir o resultado e se der erro, o catch exibe uma mensagem de erro
  this.resultado = evaluate(this.calculo);
}catch(e) {
  this.resultado = '';
  this.presentAlert('ERRO', "calculo inválido, verifique");
}
}
// exibe uma mensagem para o usuário 
async presentAlert(titulo: string, mensagem: string){
  const alert = await this.alertController.create({
    header: 'titulo',
    message: mensagem,
    buttons: ['OK']
  });

await alert.present();

}

}
