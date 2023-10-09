import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../model/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  //url api
    private url:string='http://localhost:8080';
  constructor(private http:HttpClient) { }

  //método para selecioanr todos clientes

  selecionar():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.url);
      }
  //método para cadastrar clientes

  cadastrar(objeto:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.url, objeto);
  }


  //método para editar clientes

  alterar(objeto:Cliente):Observable<Cliente>{
    return this.http.put<Cliente>(this.url, objeto);

      }
    }

