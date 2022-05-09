import { Injectable } from '@angular/core';
import { Usine } from 'src/app/_interfaces/usine';

@Injectable({
  providedIn: 'root'
})
export class UsineService {

  constructor() { }

  getIri(usine: Usine | string): string {
    if (typeof (usine) == 'string') {
      return usine;
    } else {
      return `/api/services/${usine.id}`;
    }
  }
}
