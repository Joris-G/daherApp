import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class SiteService {
  constructor(
    private requestService: RequestService
  ) { }

  getSites() {
    return this.requestService.createGetRequest(environment.usineApi + 'usines');
  }
}
