import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AlertService } from '../divers/alert.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private alerteService: AlertService,
    private router: Router,

  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot): boolean {

    const expectedRole = route.data.expectedRole;
    const isRole = this.isRole(expectedRole);
    if (!isRole) {
      console.error('Impossible d\'accéder à la page');
      this.alerteService.simpleAlert(
        'Alerte de l\'application',
        'Autorisation',
        'Vous n\'avez pas accès à cette page'
      );
      this.router.navigate(['home']);
    }
    return (
      this.auth.isAuth && isRole && this.auth.authUser.isActive
    );
  }

  isRole(expectedRoles: string[]): boolean {
    // console.log(expectedRoles);
    if (this.auth.authUser) {
      return expectedRoles.some((expectedRole => this.auth.authUser.roles.includes(expectedRole)));
    }
    return false;
  }

}
