import { IDivision } from './division';
import { GroupeAffectation } from './groupe-affectation';
import { Poste } from './poste';
import { ProgrammeAvion } from './programme-avion';
import { IService } from './service';
import { IUsine } from './usine';

export class User {
  id?: number;
  username?: string;
  nom: string;
  prenom: string;
  matricule: number;
  isActive?: boolean;
  lastCon?: Date;
  mail?: string;
  roles?: string[];
  poste?: Poste;
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

  static getFakeUser(nom: string = "Gr", prenom: string = "Joris"): User {
    return {
      matricule: 123456,
      nom,
      prenom,
    }
  }
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
