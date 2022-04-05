import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/_interface/user';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';

const JORIS: User = {
  id: 1,
  username: 'j.grangier',
  mail: 'j.grangier@daher.com',
  matricule: 204292,
  nom: 'GRANGIER',
  prenom: 'JORIS',
  roles: ['COMPAGNON']
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private http: HttpClient,
    private requestService: RequestService) { }

  getUserById(idUser: string) {
    return new Promise<User>((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
        .set('content-type', 'application/json');
      this.requestService.createGetRequest(environment.usineApi + `users/${idUser}`)
        .then((returnsData: any) => {
          console.log(returnsData);
          if (returnsData.length !== 0) {
            resolve(returnsData);
          } else {
            reject();
          }
        },
          (error) => {
            console.log(error);
            reject();
          });
    });
  }

  getUsers() {
    return new Promise<User[]>((resolve, reject) => {
      this.requestService.createGetRequest(environment.usineApi + `users`)
        .then((returnsData: any) => {
          console.log(returnsData);
          if (returnsData.length !== 0) {
            resolve(returnsData);
          } else {
            reject();
          }
        },
          (error) => {
            console.log(error);
            reject();
          });
    });
  }

  registerUser(userObj: User) {
    return this.requestService.createPostRequest(environment.usineApi + 'users', userObj);
  }

  getIri(user: User): string {
    return `/api/users/${user.id}`;
  }
}
