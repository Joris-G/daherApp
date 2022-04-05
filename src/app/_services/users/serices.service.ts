import { Injectable } from '@angular/core';
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
}
