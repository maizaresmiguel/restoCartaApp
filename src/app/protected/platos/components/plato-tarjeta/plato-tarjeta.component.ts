import { Component, Input} from '@angular/core';
import { Result } from 'src/app/protected/interfaces/plato-interface';

@Component({
  selector: 'app-plato-tarjeta',
  templateUrl: './plato-tarjeta.component.html',
  styleUrls: ['./plato-tarjeta.component.css']
})
export class PlatoTarjetaComponent  {
@Input() plato!: Result;

  

}
