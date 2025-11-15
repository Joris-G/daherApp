import { HttpClient } from '@angular/common/http';
import { Injectable, isDevMode } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { map, finalize, catchError } from 'rxjs/operators';
import { LoginRedirectionService } from 'src/app/core/pages/login/services/login-redirection.service';
import { User } from 'src/app/_interfaces/user';
import { environment } from 'src/environments/environment';
import { AlertService } from '../divers/alert.service';
import { LoadingService } from '../divers/loading.service';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean;
  public authToken: string;
  public authUser: User;
  constructor(
    public requestService: RequestService,
    private loadingService: LoadingService,
    private alertService: AlertService,
    private redirectionService: LoginRedirectionService,
    private http: HttpClient
  ) { }

  getToken(): string {
    if (this.authUser) {
      return this.authUser.apiToken;
    }
    return '';
  }


  authenticate(userName: string, password: string): void {
    let auth$: Observable<any>;
    if (isDevMode()) {
      auth$ = this.http.get('http://localhost:3000/api/users');
    } else {

      auth$ = this.requestService.createPostRequest(
        `${environment.usineApi}login`,
        { matricule: userName, password }
      );
    }
    auth$.pipe(
      finalize(() => {
        this.loadingService.stopLoading();
      })
    );
    // this.loadingService.startLoading('Patienter pendant la connexion');
    auth$.subscribe({
      error: (err) => {
        console.error(err);
        this.alertService.simpleAlert(
          'Erreur d\'authentification',
          '',
          'Le nom d\'utilisateur ou votre mot de passe n\'est pas correct',
        );
      },
      next: (data) => {
        console.log(data);
        this.authToken = data.user.apiToken;
        this.isAuth = true;
        this.authUser = data.user;
        this.redirectionService.reRouteUser(data.user);
      }
    });
  }

  logout() {
    return this.requestService.createGetRequest(`${environment.usineApi}logout`)
      .pipe(
        map(() => {
          // console.log(response);
          this.isAuth = false;
          this.authUser = null;
          this.authToken = '';
        })
      );
  }

  getAuthUser() {
    return new Promise((resolve, reject) => {
      console.log(this.authUser);
      resolve(this.authUser);
    });
  }
}

//   } else {
//     console.log('returnsData.apiToken');
//     this.authUser = null;
//     this.isAuth = false;
//   }
