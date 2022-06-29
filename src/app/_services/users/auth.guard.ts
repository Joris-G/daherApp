import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService) { }
  canActivate() {
    if (this.authService.isAuth || environment.name === 'DEV' || environment.name === 'QUAL') {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
