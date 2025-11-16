import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { LoginRedirectionService } from 'src/app/core/pages/login/services/login-redirection.service';
import { User } from 'src/app/_interfaces/user';
import { environment } from 'src/environments/environment';
import { AlertService } from '../divers/alert.service';
import { LoadingService } from '../divers/loading.service';
import { Credentials } from './credentials.interface';
import { tap, map, Observable, catchError, of } from 'rxjs';
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

  //TODO Demander à ia de faire une revue pour trouver une autre astuce pour le demo mode. Peut être un mock api avec le même entry point pour moker si démo.
  login(credentials: Credentials): Observable<AuthUser> {
    return this.http.post<AuthUser | any>(
        `${environment.usineApi}login`,
      { matricule: credentials.userName, password: credentials.password }
    )
      .pipe(
        catchError((resp) =>
          isDevMode ? of({ token: 'string', user: User.getFakeUser() }) : resp)
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
    return this.http.post(`${environment.usineApi}logout`, {})
    // .pipe(
    //   map(() => {
    //     this.isAuth = false;
    //     this.authUser = null;
    //     this.authToken = '';
    //   })
    // );
  }

  getAuthUser() {
    return this.http.get<User>(`${environment.usineApi}me`)
  }
}