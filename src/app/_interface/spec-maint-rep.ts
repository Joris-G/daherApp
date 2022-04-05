import { Equipement } from './equipement';
import { Tool } from './tool';
import { User } from './user';

export interface SpecMaintRep {
  id?: number;
  outillage: Tool;
  equipement?: string;
  dateBesoin: Date;
  nonConformite?: string[];
  actionsCorrectives?: string[];
  respo?: string[];
  delaiAction?: string[];
  userReal?: string[];
  dateReal?: string[];
  rep?: string[];
  description: string;
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat: User;
  userModif?: User;
  userValideur?: User;
  image?: string;
  fichier?: string;
  // equipement: string;
  sigle?: string;
  causeDem?: string;
  dateValid?: Date;
  maintenanceItems?: MaintenanceItem[];
}

export interface SpecMaintRepIri {
  id?: number;
  outillage: string;
  equipement?: string;
  dateBesoin: Date;
  nonConformite?: string[];
  actionsCorrectives?: string[];
  respo?: string[];
  delaiAction?: string[];
  userReal?: string[];
  dateReal?: string[];
  rep?: string[];
  description: string;
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat: string;
  userModif?: string;
  userValideur?: string;
  image?: string;
  fichier?: string;
  // equipement: string;
  sigle?: string;
  causeDem?: string;
  dateValid?: Date;
  maintenanceItems?: string[];
}

export interface MaintenanceItem {
  nonConformite?: string;
  actionsCorrectives?: string;
  respo?: string;
  delaiAction?: Date;
  userReal?: string;
  dateReal?: Date;
  rep: number;
}
