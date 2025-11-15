import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AlertService } from '../divers/alert.service';
import { AuthService } from './auth.service';

export const canActivateAuth: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot,) => {
  return inject(AuthGuard).canActivate(route)
};





@Injectable({
  providedIn: 'root'
})
class AuthGuard {
  constructor(
    private router: Router,
    private authService: AuthService,
    private alerteService: AlertService,
  ) { }
  canActivate(route: ActivatedRouteSnapshot) {
    if (!this.authService.isAuth) { //|| environment.name === 'DEV' || environment.name === 'QUAL') {
      return this.router.parseUrl('/login');
    }

    const expectedRole = route.data.expectedRole;
    if (expectedRole) {
      const isRole = this.isRole(expectedRole);
      if (!isRole) {
        // console.error('Impossible d\'accéder à la page');
        this.alerteService.simpleAlert(
          'Alerte de l\'application',
          'Autorisation',
          'Vous n\'avez pas accès à cette page'
        );
        this.router.navigate(['home']);
      }
      return (
        this.authService.isAuth && isRole && this.authService.authUser.isActive
      );
    }


  }



  private isRole(expectedRoles: string[]): boolean {
    // console.log(expectedRoles);
    if (this.authService.authUser) {
      return expectedRoles.some((expectedRole => this.authService.authUser.roles.includes(expectedRole)));
    }
    return false;
  }


}
