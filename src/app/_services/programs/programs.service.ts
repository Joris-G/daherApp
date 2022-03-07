import { Injectable } from '@angular/core';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(
    private requestService: RequestService
  ) { }

  getPrograms() {
    return this.requestService.createGetRequest('programme_avions');
  }
}
