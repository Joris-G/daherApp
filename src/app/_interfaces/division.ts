import { User } from './user';

export interface IDivision {
  id?: number;
  nom: string;
  entreprise?: string;
  users: User[];

}

export interface DivisionIri {
  id?: number;
  nom: string;
  entreprise?: string;
  users: string[];

}
