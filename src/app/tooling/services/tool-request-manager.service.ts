import { Injectable } from '@angular/core';
import { RoleGuard } from 'src/app/shared/services/users/role.guard';

export class RequestState {
  canUpdate: boolean = false;
  canManage: boolean = false;

}
@Injectable({
  providedIn: 'root'
})
export class ToolRequestManager {
  getStatus(statut: string): RequestState {
    const isNouvelle = statut === 'NOUVELLE';
    const isManager = this.roleGuard.isRole(['ROLE_RESP_OUTIL', 'ROLE_ADMIN']);

    return (isNouvelle) ? {
      canUpdate: true,
      canManage: isManager
    } : {
      canUpdate: isManager,
      canManage: isManager
    }

  }

  constructor(
    private roleGuard: RoleGuard,
  ) { }
}
