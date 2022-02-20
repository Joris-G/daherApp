import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.authService.isAuth) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
    //  this.userService.getUserById(1)
    //   .then((user) => {
    //     console.log(user);
    //     return true;
    //   },
    //     (error) => {
    //       this.router.navigate(['/login']);
    //       return false;
    //     }
    //   );
  }

}
