import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IService } from 'src/app/_interfaces/service';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class SericesService {

  constructor(private requestService: RequestService) { }

  getServices(): Observable<IService[]> {
    return this.requestService.createGetRequest(`${environment.usineApi}services`);

  }

  getIri(service: IService | string): string {
    if (typeof (service) == 'string') {
      return service;
    } else {
      return `/api/services/${service.id}`;
    }
  }
}
