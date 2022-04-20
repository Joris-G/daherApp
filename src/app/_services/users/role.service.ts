import { Injectable } from '@angular/core';
import { Poste } from 'src/app/_interface/poste';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

const ROLES = [
  'ROLE_USER',
  'ROLE_ADMIN'
];

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(
    private requestService: RequestService
  ) { }

  getRoles() {
    return this.requestService.createGetRequest(environment.usineApi + 'postes');
  }

  getIri(poste: Poste | string): string {
    if (typeof (poste) == 'string') {
      return poste;
    } else {
      return `/api/postes/${poste.id}`;
    }
  }
}
