import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { User } from 'src/app/_interfaces/user';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean;
  public authUser: User;
  constructor(
    public requestService: RequestService,
  ) { }

  authenticate(userName: number, password: string) {
    this.requestService.apiToken = '';
    return this.requestService.createPostRequest(`${environment.usineApi}login`,
      { matricule: userName, password })
      .pipe(
        map((returnsData: any) => {
          if (returnsData) {
            console.log(returnsData.user.apiToken);
            localStorage.setItem('token', returnsData.user.apiToken);
            this.requestService.apiToken = returnsData.user.apiToken;
            this.isAuth = true;
            this.authUser = returnsData.user;
          } else {
            this.authUser = null;
            this.isAuth = false;
          }
        }));
  }

  logout() {
    return this.requestService.createGetRequest(`${environment.usineApi}logout`)
      .pipe(
        map((response) => {
          console.log(response);
          this.isAuth = false;
          this.authUser = null;
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
