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

  //método para alterar clientes

  alterar():void{
    this.service.alterar(this.cliente)
    .subscribe(retornar => {

      //obter posição do cliente no vetor
      let posicao = this.clientes.findIndex(objeto => {
        return objeto.id == retornar.id;
      });
      //alterar os dados do cliente no vetor
      this.clientes[posicao] = retornar;
      //limpar formulário
      this.cliente = new Cliente();

      //visibilidade dos botoes
      this.btnCadastrar = true;

      //visibilidade da tabela
      this.tabela = true;

      //mensagem
      alert('O cliente foi alterado com sucesso!');


    });
    }

    // Método para remover clientes
    deletar():void{

      this.service.deletar(this.cliente.id)
      .subscribe(retornar => {

        // Obter posiçao do vetor onde está o cliente
        let posicao = this.clientes.findIndex(objeto => {
          return objeto.id == this.cliente.id;
        });

        // Remover cliente do vetor
        this.clientes.splice(posicao, 1);

        // Limpar formulário
        this.cliente = new Cliente();

        // Visibilidade dos botões
        this.btnCadastrar = true;

        // Visibilidade da tabela
        this.tabela = true;

        // Mensagem
        alert('Cliente deletado com sucesso!');

      });

    }

    //método para cancelar
    cancelar():void{
      //Limpar formulário
      this.cliente = new Cliente();
      //visibilidade dos botoes
      this.btnCadastrar = true;
      //visibilidade da tabela
      this.tabela = true;
    }

    //método de inicialização
  ngOnInit(){
    this.selecionar();

  }



}
