import { Injectable } from '@angular/core';
import { User } from 'src/app/_interface/user';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean;
  public authUser: User;
  constructor(
    private userService: UsersService
  ) { }

  authenticate(userName: string, password: string) {
    return new Promise<boolean>((resolve, reject) => {
      if (userName === 'JorisG' && password === '123') {
        this.isAuth = true;
        this.userService.getUserById(2)
          .then((user: User) => {
            this.authUser = user;
            console.log(user);
            resolve(this.isAuth);
          });
      } else {
        reject(false);
      }

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
