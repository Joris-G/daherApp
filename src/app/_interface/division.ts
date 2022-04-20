import { User } from './user';

export interface Division {
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
