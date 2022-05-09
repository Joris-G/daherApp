import { Injectable } from '@angular/core';
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

  authenticate(userName: string, password: string) {
    return new Promise<boolean>((resolve, reject) => {
      this.requestService.createPostRequest(`${environment.usineApi}login`,
        { matricule: userName, password })
        .subscribe((returnsData: any) => {
          console.log(returnsData.user.apiToken);
          localStorage.setItem('token', returnsData.user.apiToken);
          this.requestService.apiToken = returnsData.user.apiToken;
          this.isAuth = true;
          this.authUser = returnsData.user;
          resolve(true);
        },
          (error) => {
            console.log(error);
            this.authUser = null;
            this.isAuth = false;
            reject();
          });
    });
  }

  async logout() {
    await this.requestService.createGetRequest(`${environment.usineApi}logout`);
    this.isAuth = false;
    this.authUser = null;
  }

  getAuthUser() {
    return new Promise((resolve, reject) => {
      console.log(this.authUser);
      resolve(this.authUser);
    });
  }
}
