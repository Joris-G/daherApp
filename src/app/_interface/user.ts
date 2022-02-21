export interface User {
  id?: number;
  username?: string;
  nom: string;
  prenom: string;
  matricule: number;
  mail?: string;
  roles?: string[];
  poste?: string;
  service?: string;
  password?: string;
  programmeAvion?: string[];
}


