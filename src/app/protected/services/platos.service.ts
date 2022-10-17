import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BusquedaResponse } from '../interfaces/busquedaResult-interfaces';
import { NutrientesResponse } from '../interfaces/nutrientes-interfaces';
import { MenuItem, MenuItemResponse, PlatoResponse } from '../interfaces/plato-interface';

@Injectable({
  providedIn: 'root'
})
export class PlatosService {
 
  private baseUrlPlatos: string = environment.baseUrlPlato;
  private key:string = environment.key;

  private params = new HttpParams()
  .set('apiKey',this.key)
  ;

  constructor( private http: HttpClient) { }

  getPlatos(){

    const params = this.params.append('query', 'burger');
    const url = `${ this.baseUrlPlatos}/food/menuItems/search`;
    // const headers = new HttpHeaders()
    //   .set('apiKey', apikey);
    return this.http.get<MenuItemResponse>(url, { params });
  }

  getPlatoPorId( id:string ){
    const params = this.params;
    const url = `${ this.baseUrlPlatos}/food/menuItems/${id}`;
    return this.http.get<NutrientesResponse>(url, { params });
  }

  getBuscarPlato(termino:string){
    const params = this.params.append('query', termino);
    const url = `${ this.baseUrlPlatos}/food/menuItems/suggest?number=2`;
      return this.http.get<BusquedaResponse>(url, { params });
  }
}
