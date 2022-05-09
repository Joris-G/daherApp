import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from 'src/app/_interfaces/division';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class UniteService {

  constructor(
    private requestService: RequestService
  ) { }

  getUnites(): Observable<Division[]> {
    return this.requestService.createGetRequest(`${environment.usineApi}divisions`);
  }

  getIri(unite: Division | string): string {
    if (typeof (unite) == 'string') {
      return unite;
    } else {
      return `/api/services/${unite.id}`;
    }
  }
}
