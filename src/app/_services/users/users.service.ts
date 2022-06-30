import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { User, UserIri } from 'src/app/_interfaces/user';
import { GroupeAffectationIri } from 'src/app/_interfaces/groupe-affectation';
import { environment } from 'src/environments/environment';
import { ProgramsService } from '../programs/programs.service';
import { RequestService } from '../request.service';
import { RoleService } from './role.service';
import { SericesService } from './serices.service';
import { UniteService } from './unite.service';
import { UsineService } from './usine.service';
import { Observable } from 'rxjs';

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
    private requestService: RequestService,
    private roleService: RoleService,
    private serviceService: SericesService,
    private programService: ProgramsService,
    private uniteService: UniteService,
    private usineService: UsineService
  ) {
    console.log('construct userService');
  }



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
  getUsers(filters?: string): Observable<User[]> {
    return this.requestService.createGetRequest(environment.usineApi + `users`);
  }


  /**
   *
   *
   * @param userObj un objet User
   * @return retourne une Promise<User>
   * @memberof UsersService
   */
  registerUser(userObj: UserIri) {
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

  getGroups(): Observable<GroupeAffectation[]> {
    return this.requestService.createGetRequest(`${environment.usineApi}groupe_affectations`);
  }

  createGroup(groupObj: GroupeAffectation): Observable<GroupeAffectation> {
    return this.requestService.createPostRequest(`${environment.usineApi}groupe_affectations`, groupObj);
  }

  updateUser(user: User) {
    const userToUpdate: UserIri = {
      matricule: user.matricule,
      nom: user.nom,
      prenom: user.prenom,
      poste: this.roleService.getIri(user.poste),
      service: this.serviceService.getIri(user.service),
      programmeAvion: user.programmeAvion.map((progAvion: ProgrammeAvion) => this.programService.getIri(progAvion)),
      unite: this.uniteService.getIri(user.unite),
      site: this.usineService.getIri(user.site),
      tel: user.tel
    };
    return this.requestService.createPatchRequest(`${environment.usineApi}users/${user.id}`, userToUpdate);
  }

  addUserToGroup(user: User) {
    return new Promise<User>(async (resolve, reject) => {
      for (const group of user.groupeAffectations) {
        const groupAffectationIri: GroupeAffectationIri = {
          libelle: group.libelle,
          population: group.population.map(userGroup => this.getIri(userGroup))
        };
        groupAffectationIri.population.push(this.getIri(user));
        await this.requestService.createPatchRequest(
          `${environment.usineApi}groupe_affectations/$${group.id}/addUsers`,
          { population: groupAffectationIri.population }
        )
          .subscribe((responseGroup) => {
            user.groupeAffectations = responseGroup;
          });
      }
      resolve(user);
    });

  }

  getUsersByService(serviceId: string): Observable<User[]> {
    return this.requestService.createGetRequest(`${environment.usineApi}services/${serviceId}`);
  }

  deleteUser(userId: number) {
    return this.requestService.createDeleteRequest(`${environment.usineApi}users/${userId}`);
  }

  confirmUser(userId: number, status: boolean): Observable<User> {
    return this.requestService.createPatchRequest(`${environment.usineApi}users/${userId}`, { isActive: status });
  }

}
