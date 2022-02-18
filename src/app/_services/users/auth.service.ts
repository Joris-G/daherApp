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
      // this.isAuth = true;
      // resolve(true);
      // return;
      const httpHeaders = new HttpHeaders()
        // .append('Access-Control-Allow-Origins', 'http://localhost:8100/')
        .append('Content-Type', 'application/json');
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
