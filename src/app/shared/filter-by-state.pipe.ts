import { Pipe, PipeTransform } from '@angular/core';
import {Exercice} from './program/exercice';

@Pipe({
  name: 'filterByState'
})
export class FilterByStatePipe implements PipeTransform {

  transform(value: Exercice[], selected?: string): Exercice[] {
    if (!selected) {
      return value;
    }
    return value.filter((exercice) => exercice.category === selected);
  }

}
