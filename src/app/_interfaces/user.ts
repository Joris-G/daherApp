import { IDivision } from './division';
import { GroupeAffectation } from './groupe-affectation';
import { Poste } from './poste';
import { ProgrammeAvion } from './programme-avion';
import { RoleList } from './roles';
import { IService } from './service';
import { IUsine } from './usine';

export class User {
  id: number;
  username: string;
  nom: string;
  prenom: string;
  matricule: number;
  lastCon: Date;
  mail: string;
  roles: RoleList;
  poste: Poste;
  service: IService;
  password: string;
  programmeAvion: ProgrammeAvion[];
  createdAt: Date;
  tel: string[];
  unite: IDivision;
  site: IUsine;
  groupeAffected: GroupeAffectation[];
  apiToken: string;

  // static getFakeUser(nom: string = "Gr", prenom: string = "Joris"): User {
  //   return {
  //     matricule: 123456,
  //     nom,
  //     prenom,
  //     roles: ['ADMIN']
  //   }
  // }
}

export interface UserState {
  isActive: boolean;
  isUpdated: boolean;
}

export type UserCreate =
  Omit<User,
    'id' |
    'username' |
    'lastCon' |
    'programmeAvion' |
    'createdAt' |
    'groupeAffectations' |
    'apiToken'>

export type UserUpdate = Partial<UserCreate>

export interface UsersState{
       isCreatingUser: boolean,
        error: string | null,
        loggedUser: User | null,
        selectedUser:User | null,
        isLoadingUser: boolean,
        isUpdatingUser: boolean,
}