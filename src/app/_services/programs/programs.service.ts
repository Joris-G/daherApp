import { Injectable } from '@angular/core';
import { ProgrammeAvion } from 'src/app/_interface/programme-avion';
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
    return this.requestService.createGetRequest(environment.usineApi + 'programme_avions');
  }

  getIri(programAvion: ProgrammeAvion | string): string {
    if (typeof (programAvion) == 'string') {
      return programAvion;
    } else {
      return `/api/programme_avions/${programAvion.id}`;
    }
  }
}
