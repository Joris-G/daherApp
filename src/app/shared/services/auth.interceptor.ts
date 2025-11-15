import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, retry } from 'rxjs/operators';
import { AuthService } from './users/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  /**
   * @description inject le token reçu à la connexion dans le header
   * TODO récupérer le token depuis le cookie du navigateur
   * @author Joris GRANGIER  e-mail : joris-web-dev@gmail.com
   * @date 20/01/2023
   */
  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    const authToken = this.authService.authToken;
    if (authToken && req.method !== 'GET') {
      req = req.clone({
        headers: req.headers.set('x-auth-token', authToken)
      });
    }
    return next.handle(req)
    .pipe(
      retry(2));
  }
}
