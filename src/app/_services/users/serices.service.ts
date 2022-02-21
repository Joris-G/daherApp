import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class SericesService {

  constructor(private requestService: RequestService) { }

  getServices() {
    return this.requestService.createGetRequest('services');

  }
}
