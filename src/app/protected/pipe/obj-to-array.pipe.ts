import { Pipe, PipeTransform } from '@angular/core';
import { NutrientesResponse } from '../interfaces/nutrientes-interfaces';

@Pipe({
  name: 'objToArray'
})
export class ObjToArrayPipe implements PipeTransform {

  transform(object: NutrientesResponse): any {
    return Object.values(object);
  }

}
