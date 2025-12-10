import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Service } from 'src/app/_interfaces/service';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SericesService {
  private readonly _http: HttpClient = inject(HttpClient);

  getServices(): Observable<Service[]> {
    return this._http.get<Service[]>(`api/services`);

  }

  // getIri(service: Service | string): string {
  //   if (typeof (service) == 'string') {
  //     return service;
  //   } else {
  //     return `/api/services/${service.id}`;
  //   }
  // }
}
