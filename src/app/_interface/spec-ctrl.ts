import { Tool } from './tool';
import { User } from './user';

export interface SpecCtrl {
  id?: number;
  outillage: Tool;
  // equipement?: Equipement;
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat: User | string;
  userModif?: User;
  image?: string;
  fichier?: string;
  refPlan: string;
  indPlan: string;
  cheminCAO: string;
  description?: string;
  ctrlReasons: string;

  detailsControle: string;
  tolerances: string;
  dispoOut: Date;
  dateBesoin: Date;
  typeRapport: TypeRapport;
  interventionDate: Date;
  moyenMesure: MoyenMesure;
  infosComplementaire: string;
  ligneBudgetaire: string;
  visaControleur: string;
  statut?: string;
}

export interface SpecCtrlIri {
  id: number;
  outillage: string;
  equipement?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat: string;
  userModif?: string;
  image?: string;
  fichier?: string;
  refPlan: string;
  indPlan: string;
  cheminCAO: string;
  description?: string;
  ctrlReasons?: string;

  detailsControle: string;
  tolerances: string;
  dispoOut: Date;
  dateBesoin: Date;
  typeRapport?: TypeRapport;
  interventionDate?: Date;
  moyenMesure?: MoyenMesure;
  infosComplementaire?: string;
  ligneBudgetaire: string;
  visaControleur?: string;
  statut?: string;
}

export enum TypeRapport {
  mail = 'Mail',
  dqrc = 'DQRC',
  pvIndentificationOrControl = 'PV d’identification ou de contrôle'
}

export enum MoyenMesure {
  bras = 'Bras',
  laser = 'Laser',
  laserAndTProbe = 'laser + TProbe'
}
