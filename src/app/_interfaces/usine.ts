import { IDivision } from './division';

export interface IUsine {
  id?: number;
  nom: string;
  divisions: IDivision[];
}

