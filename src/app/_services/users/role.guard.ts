import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertService } from '../divers/alert.service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    private auth: AuthService,
    private router: Router,
    private alerteService: AlertService,

  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const expectedRole = route.data.expectedRole;
    const isRole = this.isRole(expectedRole);
    if (!isRole) {
      console.error('Impossible d\'accéder à la page');
      this.alerteService.simpleAlert(
        'Alerte de l\'application',
        'Autorisation',
        'Vous n\'avez pas accès à cette page'
      );
    }
    return (
      this.auth.isAuth && isRole && this.auth.authUser.isActive
    );
  }

  isRole(expectedRoles: string[]): boolean {
    // console.log(expectedRoles);
    return expectedRoles.some((expectedRole => this.auth.authUser.roles.includes(expectedRole)));
  }

}
