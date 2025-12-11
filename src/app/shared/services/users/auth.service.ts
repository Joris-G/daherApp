import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRedirectionService } from 'src/app/core/pages/login/services/login-redirection.service';
import { User } from 'src/app/_interfaces/user';
import { AlertService } from '../divers/alert.service';
import { LoadingService } from '../divers/loading.service';
import { Credentials } from './credentials.interface';
import { delay, Observable } from 'rxjs';
import { AuthUser } from './auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private loadingService: LoadingService,
    private alertService: AlertService,
    private redirectionService: LoginRedirectionService,
    private http: HttpClient
  ) { }

  // getToken(): string {
  //   if (this.authUser) {
  //     return this.authUser.apiToken;
  //   }
  //   return '';
  // }

  login(credentials: Credentials): Observable<AuthUser> {
    return this.http.post<AuthUser | any>(`api/login`, credentials)
      .pipe(
        delay(2000)
    );
    // }
    // this.loadingService.stopLoading();
    // auth$.subscribe({
    //   error: (err) => {
    //     console.error(err);
    //     this.alertService.simpleAlert(
    //       'Erreur d\'authentification',
    //       '',
    //       'Le nom d\'utilisateur ou votre mot de passe n\'est pas correct',
    //     );
    //   },
    //   next: (data) => {
    //     console.log(data);
    //     this.authToken = data.user.apiToken;
    //     this.isAuth = true;
    //     this.authUser = data.user;
    //     this.redirectionService.reRouteUser(data.user);
    //   }
    // });
  }

  logout() {
    return this.http.post(`api/usineApi/logout`, {})
    // .pipe(
    //   map(() => {
    //     this.isAuth = false;
    //     this.authUser = null;
    //     this.authToken = '';
    //   })
    // );
  }

  getAuthUser() {
    return this.http.get<User>(`api/usineApi/me`)
  }
}