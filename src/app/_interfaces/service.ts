import { GroupeAffectation } from './groupe-affectation';
import { User } from './user';

export interface Service {
  id?: number;
  nom: string;
  users: User[];
  groupeAffectations: GroupeAffectation[];
}
export type ServiceCreation = Omit<Service, 'id'>;

export interface ServiceIri {
  id?: number;
  nom: string;
  users: string[];
}
