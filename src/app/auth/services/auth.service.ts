import { HttpClient } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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

  login(email: string, password: string){

    const url = `${ this.baseUrl}`
    const body = {email, password};
   // const token: string = null;
    return this.http.post<AuthResponse>(url, body)
      // .pipe(
      //   map( resp => resp,
      //   catchError( err => err)
      //   )
      // )
      ;
  }

  validarToken(): Observable<boolean>{
    let vartoken=  localStorage.getItem("token");
    if(vartoken !== null){
      return of(true)

    }else{
      return of(false)
    }
  }

  logout(){
    // borrar todo del local storage
    localStorage.clear();
  }

}
