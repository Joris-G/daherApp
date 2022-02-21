import { HttpClient, HttpEvent, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/_interface/user';
import { environment } from 'src/environments/environment';
import user from 'src/assets/fakeDatas/user.json';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean;
  public authUser: User;
  constructor(
    private http: HttpClient,
    private requestService: RequestService,
  ) { }

  authenticate(userName: string, password: string) {
    console.log(userName, password);
    // return this.requestService.createPostRequest()
    return new Promise<boolean>((resolve, reject) => {
      console.log(environment);
      if (!environment.production) {
        const httpHeaders = new HttpHeaders()
          // .append('Access-Control-Allow-Origins', 'http://localhost:8100/')
          .set('Content-Type', 'application/json');
        // .set('Access-Control-Allow-Credentials', 'true');
        this.http.post(`${environment.apiServer}login`,
          { matricule: userName, password },
          { headers: httpHeaders })
          .subscribe((returnsData: any) => {
            console.log(document.cookie);
            console.log(returnsData);
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
      } else {
        this.isAuth = true;
        this.authUser = user;
        resolve(true);
      }
    });
  }

  async logout() {
    await this.requestService.createGetRequest('logout');
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
