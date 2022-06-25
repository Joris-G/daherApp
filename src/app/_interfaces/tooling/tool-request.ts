/* eslint-disable @typescript-eslint/naming-convention */
import { AbstractControl, FormGroup } from '@angular/forms';
import { RequestStatus } from 'src/app/_enums/request-status';
import { RequestType } from 'src/app/_enums/request-type';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { User } from 'src/app/_interfaces/user';

export interface ToolRequest {
  id?: number;
  demandeur?: User | string;
  createdAt?: Date;
  dateBesoin?: Date;
  outillage: Tool | string;
  groupeAffectation?: GroupeAffectation;
  dateAffectation?: Date;
  statut?: string;
  toolingNote?: string;
  type: RequestType | string;
  controle?: SpecCtrl;
  maintenance?: SpecMaintRep;
  // sbo?: SpecSBO;
  datePlanif?: Date;
  dateReal?: Date;
  userReal?: User;
  affectation?: string[];
}

export interface ToolRequestIri {
  id: number;
  createdAt: Date;
  requestType?: RequestType;
  requestor?: string;
  tool?: string;
  title?: string;
  description?: string;
  imgUrl?: string;
  fileUrl?: string;
  needDate?: Date;
  affectedTo?: string;
  groupeAffectation?: string;
  affectationDate?: Date;
  requestStatus?: RequestStatus;
  realizationDate?: Date;
  toolingNote?: string;
  statut: string;
}


export interface ToolRequestFormGroup extends FormGroup {
  value: ToolRequest;
  controls: {
    statut: AbstractControl;
    groupeAffectation: AbstractControl;
  };
}

export interface SpecCtrl {
  id?: number;
  outillage: Tool;
  // equipement?: Equipement;
  dateBesoin: Date;
  description: string;
  image?: string;
  fichier?: string;
  refPlan: string;
  indPlan: string;
  cheminCAO?: string;
  detailsControle?: string;
  tolerances?: string;
  dispoOut?: Date;
  typeRapport?: TypeRapport;
  moyenMesure?: MoyenMesure;
  infosComplementaire?: string;
  ligneBudgetaire: string;
  visaControleur?: string;

  userCreat?: string;
  demandeur?: User[];
  OT?: Tool;
  createdAt?: Date;
  modifiedAt?: Date;
  userModif?: User;
  interventionDate?: Date;
  statut?: string;
}

export interface SpecCtrlIri {
  id?: number;
  outillage: string;
  equipement?: string;
  dateBesoin: Date;
  description: string;
  image?: string;
  fichier?: string;
  refPlan: string;
  indPlan: string;
  cheminCAO?: string;
  detailsControle?: string;
  tolerances?: string;
  dispoOut?: Date;
  typeRapport?: TypeRapport;
  moyenMesure?: MoyenMesure;
  infosComplementaire?: string;
  ligneBudgetaire: string;
  visaControleur?: string;

  interventionDate?: Date;
  statut?: string;
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat?: string;
  userModif?: string;
}


export interface SpecCtrlFormGroup extends FormGroup {
  value: SpecCtrl;
  controls: {
    refPlan: AbstractControl;
    indPlan: AbstractControl;
    cheminCAO: AbstractControl;
    description: AbstractControl;
    detailsControle: AbstractControl;
    tolerances: AbstractControl;
    dispoOut: AbstractControl;
    dateBesoin: AbstractControl;
    typeRapport: AbstractControl;
    interventionDate: AbstractControl;
    moyenMesure: AbstractControl;
    infosComplementaire: AbstractControl;
    outillage: AbstractControl;
    ligneBudgetaire: AbstractControl;
    statut: AbstractControl;
    visaControleur: AbstractControl;
  };
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


export interface SpecMaintRep {
  id?: number;
  outillage?: string;
  OT: Tool;
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

export interface MaintFormGroup extends FormGroup {
  value: SpecMaintRep;
  controls: {
    id?: AbstractControl;
    outillage?: AbstractControl;
    equipement?: AbstractControl;
    dateBesoin: AbstractControl;
    respo: AbstractControl;
    userReal: AbstractControl;
    dateReal: AbstractControl;
    rep: AbstractControl;
    createdAt: AbstractControl;
    dispoOut: AbstractControl;
    typeRapport: AbstractControl;
    interventionDate: AbstractControl;
    moyenMesure: AbstractControl;
    infosComplementaire: AbstractControl;
    ligneBudgetaire: AbstractControl;
    statut: AbstractControl;
    visaControleur: AbstractControl;
  };
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
