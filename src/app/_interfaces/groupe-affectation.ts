import { User } from './user';

export interface GroupeAffectation {
  id?: number;
  libelle: string;
  proprietaire?: User;
  createdAt?: Date;
  population?: User[];
}


export interface GroupeAffectationIri {
  id?: number;
  libelle: string;
  proprietaire?: string;
  createdAt?: Date;
  population?: string[];
}


