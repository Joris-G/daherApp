import { Injectable } from '@angular/core';
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
    return this.requestService.createGetRequest('postes');
  }
}
