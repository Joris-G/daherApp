import { Division } from './division';
import { GroupeAffectation } from './groupe-affectation';
import { Poste } from './poste';
import { ProgrammeAvion } from './programme-avion';
import { RoleList } from './roles';
import { Service } from './service';
import { Usine } from './usine';

export interface User {
  id: number;
  nom: string;
  prenom: string;
  matricule: number;
  email: string;
  roles: RoleList;
  poste: Poste;
  service: Service;
  password: string;
  programmeAvion?: ProgrammeAvion[];
  createdAt: Date;
  tel: string[];
  unite: Division;
  site: Usine;
  lastCon?: Date;
  groupeAffected?: GroupeAffectation[];
  isActive: boolean;
}



export interface UserState {
  isActive: boolean;
  isUpdated: boolean;
}

export type UserCreate =
  Omit<User,
    'id' |
    'lastCon' |
    'programmeAvion' |
    'createdAt' |
    'groupeAffectations'>

export type UserUpdate = Partial<UserCreate>

export interface UsersState {
  isCreatingUser: boolean,
  registeredUser: User,
  error: string | null,
  loggedUser: User | null,
  selectedUser: User | null,
  isLoadingUser: boolean,
  isUpdatingUser: boolean,
  isValidationRequired: boolean,
}