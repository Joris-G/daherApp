import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { GroupeAffectation } from 'src/app/_interface/groupe-affectation';
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
  roles: ['COMPAGNON'],

};

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(
    private http: HttpClient,
    private requestService: RequestService) { }


  /**
   *
   *
   * @param idUser c'est l'id de l'utilisateur en base de donnée
   * @return retourne une Promise<User>
   * @memberof UsersService
   */
  getUserById(idUser: string) {
    return this.requestService.createGetRequest(environment.usineApi + `users/${idUser}`);
  }


  /**
   *
   *
   * @param  [filters] ajoute des filtres pour la recherche d'utilisateurs
   * @return retourne une Promise<User[]>
   * @memberof UsersService
   */
  getUsers(filters?: string) {
    return this.requestService.createGetRequest(environment.usineApi + `users`);
  }


  /**
   *
   *
   * @param userObj un objet User
   * @return retourne une Promise<User>
   * @memberof UsersService
   */
  registerUser(userObj: User) {
    return this.requestService.createPostRequest(environment.usineApi + 'users', userObj);
  }



  /**
   *
   *
   * @param user un object User ou l'iri d'un user
   * @return  retourne l'iri du user
   * @memberof UsersService
   */
  getIri(user: User | string): string {
    if (typeof (user) == 'string') {
      return user;
    } else {
      return `/api/users/${user.id}`;
    }
  }

  getGroups() {
    return this.requestService.createGetRequest(environment.usineApi + `groupe_affectations`);
  }

  createGroup(groupObj: GroupeAffectation) {
    return this.requestService.createPostRequest(environment.usineApi + `groupe_affectations`, groupObj);
  }


}
