import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Ingredient, IngredientesResponse } from 'src/app/protected/interfaces/ingredientes-interfaces';
import { Nutrient } from 'src/app/protected/interfaces/nutrientes-interfaces';
import { Result } from 'src/app/protected/interfaces/plato-interface';
import { PlatosService } from 'src/app/protected/services/platos.service';

@Component({
  selector: 'app-plato-detalle',
  templateUrl: './plato-detalle.component.html',
  styleUrls: ['./plato-detalle.component.css']
})
export class PlatoDetalleComponent implements OnInit {

  constructor( private activateRoute: ActivatedRoute,
               private platoService: PlatosService,
               private router: Router ) { }

  nutrientes: Nutrient[]=[];
  
  ngOnInit(): void {

    this.activateRoute.params
      .pipe(
        switchMap( 
          ({id}) => this.platoService.getPlatoPorId(id)
        )

      )
     // .subscribe(plato => console.log((plato)));
       .subscribe( nutrientes  => this.nutrientes = nutrientes.nutrition.nutrients);
  }

  regresar(){
    this.router.navigateByUrl('/dashboard/listado')
  }


}
