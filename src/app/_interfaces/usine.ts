import { Division } from './division';

export interface Usine {
  id: number;
  nom: string;
  divisions: Division[];
}

export interface UsineStorage {
  id: number;
  nom: string;
}

export type UsineCreation = Omit<Usine, 'id'> & {
  divisionIds?: number[];
};;
