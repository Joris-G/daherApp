import { Injectable } from '@angular/core';
import { Service } from 'src/app/_interface/service';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class SericesService {

  constructor(private requestService: RequestService) { }

  getServices() {
    return this.requestService.createGetRequest(environment.usineApi + 'services');

  }

  getIri(service: Service | string): string {
    if (typeof (service) == 'string') {
      return service;
    } else {
      return `/api/services/${service.id}`;
    }
  }
}
