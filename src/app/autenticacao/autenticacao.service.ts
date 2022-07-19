import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {

  constructor(
    private httpclient: HttpClient
  ) { }

    autenticar(usuario: string, senha:string):Observable<any>{
      return this.httpclient.post('http://localhost:3000/user/login', {
        userName: usuario,
        password: senha,
      })
    }

}
