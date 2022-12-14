import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDivision } from 'src/app/_interfaces/division';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class UniteService {

  constructor(
    private requestService: RequestService
  ) { }

  getUnites(): Observable<IDivision[]> {
    return this.requestService.createGetRequest(`${environment.usineApi}divisions`);
  }

  getIri(unite: IDivision | string): string {
    if (typeof (unite) == 'string') {
      return unite;
    } else {
      return `/api/divisions/${unite.id}`;
    }
  }
}
