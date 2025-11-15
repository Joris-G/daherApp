import { Injectable } from '@angular/core';
import { IUsine } from 'src/app/_interfaces/usine';

@Injectable({
  providedIn: 'root'
})
export class UsineService {

  constructor() { }

  getIri(usine: IUsine | string): string {
    if (typeof (usine) == 'string') {
      return usine;
    } else {
      return `/api/usines/${usine.id}`;
    }
  }
}
