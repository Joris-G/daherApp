import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(
    public auth: AuthService,
    public router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    const expectedRole = route.data.expectedRole;
    return (
      this.auth.isAuth && this.isRole(expectedRole)
    );
  }

  isRole(expectedRoles: string[]): boolean {
    console.log(expectedRoles);
    return expectedRoles.some((expectedRole => this.auth.authUser.roles.includes(expectedRole)));
  }

}
