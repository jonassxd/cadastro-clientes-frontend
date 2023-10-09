import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {
    //Objeto do tipo cliente
    cliente = new Cliente();

    //variavel para a visibilidade dos botões

    btnCadastrar: boolean = true;
    //variavel para visibilidad da tabela
    tabela:boolean = true;

  //json de clientes

  clientes:Cliente[] = [];

   //Construtor
   constructor(private service:ClienteService){}
  //método para selecionar clientes


  selecionar():void{
    this.service.selecionar().subscribe(retornar => this.clientes = retornar);
  }

  //método de cadastro
  cadastrar():void{
    this.service.cadastrar(this.cliente)
    .subscribe(retornar => {

      //cadastrar cliente no vetor
      this.clientes.push(retornar);
      //limpar formulário
      this.cliente = new Cliente();
      alert('Cliente cadastrado com sucesso!');
    });
  }

  //método para selecionar cliente especifico
  selecionarCliente(posicao:number):void {

    //selecionar cliente no vetor.
    this.cliente = this.clientes[posicao];
    //visibilidade dos botões
    this.btnCadastrar = false;
    //visibilidade da tabela
    this.tabela = false;
    

  }

  //método de inicialização
  ngOnInit(){
    this.selecionar();

  }
}
