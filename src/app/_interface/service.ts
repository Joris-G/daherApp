import { User } from './user';

export interface Service {
  id?: number;
  nom: string;
  users: User[];
}

export interface ServiceIri {
  id?: number;
  nom: string;
  users: string[];
}
