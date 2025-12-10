import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Division } from 'src/app/_interfaces/division';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UniteService {
  private readonly _http: HttpClient = inject(HttpClient);

  getUnites(): Observable<Division[]> {
    return this._http.get<Division[]>(`api/divisions`);
  }

  // getIri(unite: Division | string): string {
  //   if (typeof (unite) == 'string') {
  //     return unite;
  //   } else {
  //     return `/api/divisions/${unite.id}`;
  //   }
  // }
}
