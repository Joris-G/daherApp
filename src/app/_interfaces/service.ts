import { GroupeAffectation } from './groupe-affectation';
import { User } from './user';

export interface IService {
  id?: number;
  nom: string;
  users: User[];
  groupeAffectations: GroupeAffectation[];
}

export interface ServiceIri {
  id?: number;
  nom: string;
  users: string[];
}
