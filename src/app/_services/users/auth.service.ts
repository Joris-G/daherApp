import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HeaderService } from 'src/app/composants/shared-user-header/header.service';
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
    private headerService: HeaderService,
  ) { }

  authenticate(userName: string, password: string) {
    this.requestService.apiToken = '';
    return this.requestService.createPostRequest(`${environment.usineApi}login`,
      { matricule: userName, password })
      .pipe(
        map((returnsData: any) => {
          if (returnsData) {
            console.log(returnsData.apiToken);
            localStorage.setItem('token', returnsData.apiToken);
            this.requestService.apiToken = returnsData.apiToken;
            this.isAuth = true;
            this.authUser = returnsData.user;
            this.headerService.updateUser(this.authUser);
          } else {
            this.authUser = null;
            this.isAuth = false;
          }
        }));
  }

  logout() {
    return this.requestService.createGetRequest(`${environment.usineApi}logout`)
      .pipe(
        map(() => {
          // console.log(response);
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
