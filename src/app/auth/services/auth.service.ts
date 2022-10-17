import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrlLogin;
  private _usuario!:string;
  private ok: boolean = true;

  constructor( private http: HttpClient) { }

  public  login(email: string, password: string){

    const url = `${ this.baseUrl}`
    const body = {email, password};
   
    return this.http.post<AuthResponse>(url, body);
  }

  public validarToken(): Observable<boolean>{
    let vartoken=  localStorage.getItem("token");
    if(vartoken !== null){
      return of(true)
    }else{
      return of(false)
    }
  }

  public logout(){
    // borrar todo del local storage
    localStorage.clear();
  }

}
