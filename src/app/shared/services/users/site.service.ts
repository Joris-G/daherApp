import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usine } from 'src/app/_interfaces/usine';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  private readonly _http: HttpClient = inject(HttpClient);

  getSites(): Observable<Usine[]> {
    return this._http.get<Usine[]>(`api/usines`);
  }
}
