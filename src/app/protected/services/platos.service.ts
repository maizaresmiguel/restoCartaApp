import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BusquedaResponse } from '../interfaces/busqueda-result-interfaces';
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

  public getPlatos(){
    const params = this.params.append('query', 'burger');
    const url = `${ this.baseUrlPlatos}/food/menuItems/search`;
    return this.http.get<MenuItemResponse>(url, { params });
  }

  public getPlatoPorId( id:string ){
    const params = this.params;
    const url = `${ this.baseUrlPlatos}/food/menuItems/${id}`;
    return this.http.get<NutrientesResponse>(url, { params });
  }

  public getBuscarPlato(termino:string){
    const params = this.params.append('query', termino);
    const url = `${ this.baseUrlPlatos}/food/menuItems/suggest?number=2`;
      return this.http.get<BusquedaResponse>(url, { params });
  }
}
