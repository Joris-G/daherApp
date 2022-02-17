import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/_interface/user';
import { environment } from 'src/environments/environment';

const JORIS: User = {
  id: 1,
  username: 'j.grangier',
  mail: 'j.grangier@daher.com',
  matricule: 204292,
  nom: 'GRANGIER',
  prenom: 'JORIS',
  role: 'COMPAGNON'
};

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserById(idUser: number) {
    return new Promise<User>((resolve, reject) => {
      const httpHeaders = new HttpHeaders()
        .set('content-type', 'application/json');
      this.http.get(`${environment.apiServer}users/${idUser}`, { headers: httpHeaders, withCredentials: false })
        .subscribe((returnsData: any) => {
          console.log(returnsData);
          if (returnsData.length !== 0) {
            // console.log(returnsData);
            // this.updateDates(MOLDING);
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

  getIri(user: User): string {
    return `/api/users/${user.id}`;
  }
}
