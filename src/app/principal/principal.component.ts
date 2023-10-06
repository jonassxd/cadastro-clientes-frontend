import { Component } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { Cliente } from '../model/Cliente';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

    //variavel para a visibilidade dos botões

    btnCadastrar: boolean = true;


  //json de clientes

  clientes:Cliente[] =[];

   //Construtor
   constructor(private service:ClienteService){

   }
  //método para selecionar clientes

  selecionar():void{
    this.service.selecionar()
    .subscribe(retorno => this.clientes = retorno);
  }

}
