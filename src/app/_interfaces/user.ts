import { IDivision } from './division';
import { GroupeAffectation } from './groupe-affectation';
import { ProgrammeAvion } from './programme-avion';
import { IService } from './service';
import { IUsine } from './usine';

export interface User {
  id?: number;
  username?: string;
  nom: string;
  prenom: string;
  matricule: number;
  isActive?: boolean;
  lastCon?: Date;
  mail?: string;
  roles?: string[];
  poste?: string;
  service?: IService;
  password?: string;
  programmeAvion?: ProgrammeAvion[];
  createdAt?: Date;
  tel?: string[];
  unite?: IDivision;
  site?: IUsine;
  groupeAffected?: GroupeAffectation[];
  isUpdated?: boolean;
  apiToken?: string;
}

export interface UserIri {
  id?: number;
  username?: string;
  nom: string;
  prenom: string;
  matricule: number;
  isActive?: boolean;
  lastCon?: Date;
  mail?: string;
  roles?: string[];
  poste?: string;
  service?: string;
  password?: string;
  programmeAvion?: string[];
  createdAt?: Date;
  tel?: string[];
  unite?: string;
  site?: string;
  groupeAffectations?: string[];
  apiToken?: string;
}
