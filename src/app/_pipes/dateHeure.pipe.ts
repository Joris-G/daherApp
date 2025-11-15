import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DateHeure'
})
export class DateHeurePipe implements PipeTransform {

  transform(date: Date): string {
    if (date) {
      return formatDate(date, 'dd/MM/yyyy à HH:mm', 'FR');
    }
  }

}
