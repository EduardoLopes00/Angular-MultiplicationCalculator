import { Component, Input, OnInit } from '@angular/core';
import { Operacoes } from './modulo-multi.service'

@Component({
  selector: 'app-modulo-multi',
  templateUrl: './modulo-multi.component.html',
  styleUrls: ['./modulo-multi.component.scss'],
  providers: [Operacoes]
})
export class ModuloMultiComponent implements OnInit {

  historico = this.operacoes.historico;
  constructor(private operacoes: Operacoes) { 
    operacoes = new Operacoes();
  }
   
  @Input() campo1: any = 0;
  @Input() campo2: any = 0;

  Resultado : number = 0
  
  alteraValorC1(event){
    this.campo1 = ((<HTMLInputElement>event.target).value);
    this.executaMultiplicao()
  }

  alteraValorC2(event){
    this.campo2 = ((<HTMLInputElement>event.target).value);
    this.executaMultiplicao()
  }
  
  executaMultiplicao(){
    
    this.operacoes.Multiplica(this.campo1, this.campo2);
    this.Resultado = this.operacoes.resultado
  }
  
   mostraHistorico(){
   alert(this.operacoes.historico.join(""));
  }
  
  async ngOnInit(): Promise<void> {
   //await alert(this.operacoes.Multiplica(2, 3))
   //console.log(this.operacoes.historico)
  }
}
