import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { debounceTime, map } from 'rxjs/operators';
import { Result } from 'src/app/protected/interfaces/busquedaResult-interfaces';
import { NutrientesResponse } from 'src/app/protected/interfaces/nutrientes-interfaces';
import {
  MenuItem,
  MenuItemResponse,
} from 'src/app/protected/interfaces/plato-interface';
import { PlatosService } from 'src/app/protected/services/platos.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css'],
})
export class BuscarComponent implements OnInit {
  termino: string = '';
  platos: Result[] = [];
  platos2!: NutrientesResponse;
  url_img: string = '';

  miFormulario: FormGroup = this.fb.group({
    title: [''],
    price: ['0'],
    image: ['assets/images/image-no-found.png'],
    nutrition: this.fb.group({
      nutrients: [],
      caloricBreakdown: [],
      calories: [''],
      fat: [''],
      protein: [''],
      carbs: [''],
    }),
  });

  constructor(private platosService: PlatosService, private fb: FormBuilder) {}

  ngOnInit(): void {}

  buscando() {
    console.log(this.termino);
    if (this.termino.length <= 2) {
      return;
    }
    this.platosService
      .getBuscarPlato(this.termino.trim())
      .pipe(debounceTime(1000))
      .subscribe(
        //platos => console.log(platos)
        (platos) => (this.platos = platos.results)
      );
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent) {
    //cuando el input esta vacio
    if (!event.option.value) {
      
      return;
    }
    const plato: Result = event.option.value;
    this.termino = plato.title;
    this.platosService
      .getPlatoPorId(String(plato.id))
      .pipe
     
      ()
      //.subscribe(plato => this.miFormulario = plato);
      .subscribe((plato) => {
        
        this.miFormulario.controls['title'].setValue(plato.title),
          this.miFormulario.controls['price'].setValue(plato.price);
        this.miFormulario.controls['image'].setValue(plato.image),
        this.miFormulario.controls['nutrition'].setValue(plato.nutrition),
          this.url_img != plato.image;
      });
   
  }
}
