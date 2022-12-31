import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';
import { map, finalize, catchError } from 'rxjs/operators';
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
  ) { }

  getToken(): string {
    if (this.authUser) {
      return this.authUser.apiToken;
    }
    return '';
  }


  authenticate(userName: string, password: string) {
    this.loadingService.startLoading('Patienter pendant la connexion');
    return this.requestService.createPostRequest(`${environment.usineApi}login`,
      { matricule: userName, password })
      .pipe(
        map((returnsData: any) => {
          if (returnsData) {
            console.log(returnsData.apiToken);
            this.authToken = returnsData.apiToken;
            this.isAuth = true;
            this.authUser = returnsData.user;

          } else {
            this.authUser = null;
            this.isAuth = false;
          }
        }),
        catchError((err) => {
          this.alertService.simpleAlert(
            'Erreur d\'authentification',
            '',
            'Le nom d\'utilisateur ou votre mot de passe n\'est pas correct',
          );
          return throwError(err)
        }),
        finalize(() => this.loadingService.stopLoading()));
  }

  logout() {
    return this.requestService.createGetRequest(`${environment.usineApi}logout`)
      .pipe(
        map(() => {
          // console.log(response);
          this.isAuth = false;
          this.authUser = null;
          this.authToken = "";
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
