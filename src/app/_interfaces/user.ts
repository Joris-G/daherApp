import { GroupeAffectation } from './groupe-affectation';
import { ProgrammeAvion } from './programme-avion';

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
  service?: string;
  password?: string;
  programmeAvion?: ProgrammeAvion[];
  createdAt?: Date;
  telephone?: string[];
  unite?: string;
  site?: string;
  groupeAffectations?: GroupeAffectation[];
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
  telephone?: string[];
  unite?: string;
  site?: string;
  groupeAffectations?: string[];
  apiToken?: string;
}
