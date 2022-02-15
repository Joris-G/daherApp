import { Injectable } from '@angular/core';
import { User } from 'src/app/_interface/user';

const JORIS: User = {
  idUser: 1,
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

  constructor() { }

  getUserById(idUser: number) {
    return new Promise<User>((resolve, reject) => {
      if (idUser === 2) {
        resolve(JORIS);
      } else {
        reject(JORIS);
      }
    });
  }
}
