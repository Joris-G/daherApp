import { inject, Injectable, isDevMode } from '@angular/core';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { User, UserIri } from 'src/app/_interfaces/user';
import { environment } from 'src/environments/environment';
import { ProgramsService } from '../programs/programs.service';
import { RequestService } from '../request.service';
import { RoleService } from './role.service';
import { SericesService } from './serices.service';
import { UniteService } from './unite.service';
import { UsineService } from './usine.service';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, finalize, map } from 'rxjs/operators';
import { LoadingService } from '../divers/loading.service';
import { HttpClient } from '@angular/common/http';

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
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly http: HttpClient = inject(HttpClient);
  private readonly roleService: RoleService = inject(RoleService);
  private readonly serviceService: SericesService = inject(SericesService);
  private readonly programService: ProgramsService = inject(ProgramsService);
  private readonly uniteService: UniteService = inject(UniteService);
  private readonly usineService: UsineService = inject(UsineService);
  private readonly loadingService: LoadingService = inject(LoadingService);




  /**
   *
   *
   * @param idUser c'est l'id de l'utilisateur en base de donnée
   * @return retourne une Promise<User>
   * @memberof UsersService
   */
  getUserById(idUser: string): Observable<User> { return this.http.get<User>(environment.usineApi + `users/${idUser}`) }


  /**
   *
   *
   * @param  [filters] ajoute des filtres pour la recherche d'utilisateurs
   * @return retourne une Promise<User[]>
   * @memberof UsersService
   */
  getUsers(filters?: any): Observable<User[]> { return this.http.get<User[]>(`${environment.usineApi}users`, { params: filters }) }


  /**
   *
   *
   * @param userObj un objet User
   * @return retourne un Observable<User>
   * @memberof UsersService
   */
  registerUser(userObj: UserIri): Observable<User> {
    this.loadingService.startLoading(`Patienter pendant la création de l'utilisateur`);
    return this.http.post<User>(environment.usineApi + 'users', userObj)
      .pipe(
        finalize(() => this.loadingService.stopLoading())
      );
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
    return this.http.get<GroupeAffectation[]>(`${environment.usineApi}groupe_affectations`);
  }

  createGroup(groupObj: GroupeAffectation): Observable<GroupeAffectation> {
    return this.http.post<GroupeAffectation>(`${environment.usineApi}groupe_affectations`, groupObj);
  }

  updateUser(user: User): Observable<User> {
    const userToUpdate: UserIri = {
      password: user.password,
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
    return this.http.patch<User>(`${environment.usineApi}users/${user.id}`, userToUpdate);
  }
  addUserToGroup(user: User) {
    // Crée un tableau d'observables pour toutes les requêtes
    const groupRequests = user.groupeAffected.map(group =>
      this.http.patch<GroupeAffectation>(
        `${environment.usineApi}groupe_affectations/${group.id}/addUsers`,
        { population: group.population }
    ).pipe(
      catchError(error => {
        console.error(`Erreur avec le groupe ${group.id}:`, error);
        // Retourne le groupe original en cas d'erreur
        return of(group);
      })
    )
  );

    // Exécute toutes les requêtes en parallèle
    return forkJoin(groupRequests).pipe(
      map(updatedGroups => ({
        ...user,
        groupeAffected: updatedGroups
      }))
    );
  }

  getUsersByService(serviceId: string): Observable<User[]> {
    if (isDevMode()) {
      return of();
    }
    return this.http.get<User[]>(`${environment.usineApi}services/${serviceId}`);
  }

  deleteUser(userId: number) {
    return this.http.delete(`${environment.usineApi}users/${userId}`);
  }

  confirmUser(userId: number, status: boolean): Observable<User> {
    return this.http.patch<User>(`${environment.usineApi}users/${userId}`, { isActive: status });
  }

}
