import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  constructor(
    private requestService: RequestService
  ) { }

  getPrograms() {
    return this.requestService.createGetRequest(environment.moldingApi + 'programme_avions');
  }
}
