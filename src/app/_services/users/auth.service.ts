import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/_interface/user';
import { environment } from 'src/environments/environment';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean;
  public authUser: User;
  constructor(
    private userService: UsersService,
    private http: HttpClient
  ) { }

  authenticate(userName: string, password: string) {
    console.log(userName, password);
    return new Promise<boolean>((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
      // .set('content-type', 'application/json');
      // .set('responseType', 'text');
      // .set('Access-Control-Allow-Origin', 'http://localhost:8100/')
      // .set('Access-Control-Allow-Credentials', 'true');
      this.http.post(`${environment.apiServer}login`, { matricule: userName, password }, { headers: httpHeaders, withCredentials: true })
        .subscribe((returnsData: any) => {
          console.log(document.cookie);
          console.log(returnsData);
          this.isAuth = true;
          this.authUser = returnsData.user;
          this.authUser.role = 'COMPAGNON';
          resolve(true);
        },
          (error) => {
            console.log(error);
            reject();
          });
      // if (userName === 'JorisG' && password === '123') {
      //   this.isAuth = true;
      //   this.userService.getUserById(5)
      //     .then((user: User) => {
      //       this.authUser = user;
      //       console.log(user);
      //       resolve(this.isAuth);
      //     });
      // } else {
      //   reject(false);
      // }

    });
  }

  logout() {
    return new Promise<boolean>((resolve, reject) => {
      this.isAuth = false;
      this.authUser = null;
      resolve(this.isAuth);
    });
  }

  getAuthUser() {
    return new Promise((resolve, reject) => {
      console.log(this.authUser);
      resolve(this.authUser);
    });
  }
}
