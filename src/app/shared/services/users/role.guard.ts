import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { AlertService } from '../divers/alert.service';
import { AuthStore } from './auth.store';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard  {
  private readonly authStore: AuthStore = inject(AuthStore);
  private readonly alerteService: AlertService = inject(AlertService);
  private readonly router: Router = inject(Router);

  canActivate(
    route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data.expectedRole;
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
      this.authStore.isAuthenticated() && isRole && this.authStore.user().isActive
    );
  }

  isRole(expectedRoles: string[]): boolean {
    // console.log(expectedRoles);
    if (this.authStore.user()) {
      return expectedRoles.some((expectedRole => this.authStore.user().roles.includes(expectedRole)));
    }
    return false;
  }

}
