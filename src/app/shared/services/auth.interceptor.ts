import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './users/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    if (req.method === 'GET') { return next.handle(req); }
    const authToken = this.authService.authToken;
    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers: req.headers.set('x-auth-token', authToken)
      });

      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
