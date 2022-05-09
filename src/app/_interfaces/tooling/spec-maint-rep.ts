import { Equipement } from 'src/app/_interfaces/tooling/equipement';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { User } from 'src/app/_interfaces/user';

export interface SpecMaintRep {
  id?: number;
  outillage?: Tool;
  equipement?: string;
  dateBesoin: Date;
  respo?: string[];
  userReal?: string[];
  dateReal?: string[];
  rep?: string[];
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
  itemActionCorrective?: MaintenanceItem[];
}

export interface SpecMaintRepIri {
  id?: number;
  outillage?: string;
  equipement?: string;
  dateBesoin: Date;
  itemActionCorrective?: string[];
  respo?: string[];
  delaiAction?: string[];
  userReal?: string[];
  dateReal?: string[];
  rep?: string[];
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
}

export interface MaintenanceItem {
  nonConformite?: string;
  actionsCorrectives?: string;
  respo?: string;
  delaiAction?: Date;
  userReal?: string;
  dateReal?: Date;
  rep: number;
  id?: number;
}

// export interface MaintenanceItemIri {
//   nonConformite?: string;
//   actionsCorrectives?: string;
//   respo?: string;
//   delaiAction?: Date;
//   userReal?: string;
//   dateReal?: Date;
//   rep: number;
// }
