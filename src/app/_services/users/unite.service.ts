import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class UniteService {

  constructor(
    private requestService: RequestService
  ) { }

  getUnites() {
    return this.requestService.createGetRequest(environment.usineApi + 'divisions');
  }
}
