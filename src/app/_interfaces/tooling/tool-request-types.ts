/* eslint-disable @typescript-eslint/naming-convention */
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { User } from 'src/app/_interfaces/user';
import { OutillNoRefSAP, Tool } from './tool';


// ============================================================================
// ENUMS
// ============================================================================

export enum RequestType {
  SBO = 'sbo',
  MAINTENANCE = 'maintenance',
  CONTROLE = 'controle'
}

export enum RequestStatus {
  DRAFT = 'Brouillon',
  SUBMITTED = 'Nouvelle',
  IN_PROGRESS = 'En cours',
  COMPLETED = 'Finalisée',
  RETURNED = 'Retournée',
  CANCELLED = 'Annulée',
  STANDBY = 'En attente'
}

export enum TypeRapport {
  MAIL = 'Mail',
  DQRC = 'DQRC',
  PV_IDENTIFICATION = 'PV d`identification ou de contrôle'
}

export enum MoyenMesure {
  BRAS = 'Bras',
  LASER = 'Laser',
  LASER_TPROBE = 'laser + TProbe'
}


// ============================================================================
// TOOL REQUEST (Demande principale)
// ============================================================================
export class ToolRequest {
  id: number;
  type: RequestType;
  typeData: SpecCtrl | SpecMaintRep | SpecSBO;
  demandeur: User;
  bloquantProd: boolean;
  createdAt: Date;
  dateBesoin: Date;
  tool: Tool | OutillNoRefSAP;
  groupeAffectation: GroupeAffectation;
  affectation: string[];
  dateAffectation: Date;
  datePlanif: Date;
  statut: RequestStatus;
  dateReal: Date;
  userReal: User;
  toolingNote: string;
}
export type ToolRequestCreation = Omit<ToolRequest, 
'id'|'createdAt'|'demandeur'|'groupeAffectation'| 
'affectation'|'dateAffectation'|'datePlanif'|'statut'|
 'dateReal'| 'userReal'|'toolingNote'>

// Type pour les formulaires (sans les champs auto-générés)
export interface ToolRequestFormValue {
  bloquantProd: boolean;
  dateBesoin: Date;
  tool: Tool | OutillNoRefSAP;
  groupeAffectation: GroupeAffectation;
  affectation: string[];
  dateAffectation: Date;
  datePlanif: Date;
  statut: RequestStatus;
  dateReal: Date;
  userReal: User;
  toolingNote: string;
  typeData: FormGroup;
}

// ============================================================================
// SPÉCIFICATIONS CONTRÔLE
// ============================================================================
export interface SpecCtrl {
  id: number;
  description: string;
  image?: string;
  fichier?: string;
  refPlan?: string;
  indPlan?: string;
  cheminCAO?: string;
  detailsControle?: string;
  tolerances?: string;
  dispoOut?: Date;
  typeRapport?: TypeRapport;
  moyenMesure?: MoyenMesure;
  infosComplementaire?: string;
  visaControleur?: string;
  interventionDate?: Date;
}
export type SpecCtrlCreation = Omit<SpecCtrl, 
'id'>

export interface SpecCtrlFormValue {
  refPlan: string;
  indPlan: string;
  cheminCAO: string;
  description: string;
  detailsControle: string;
  tolerances: string;
  dispoOut: Date;
  typeRapport?: TypeRapport;
  moyenMesure?: MoyenMesure;
  infosComplementaire?: string;
  visaControleur?: string;
  immobilisationOutillage: boolean;
}

// ============================================================================
// SPÉCIFICATIONS MAINTENANCE
// ============================================================================
export interface SpecMaintRep {
  id?: number;
  outillage?: Tool;
  outillNoRefSAP: OutillNoRefSAP
  itemActionCorrective: MaintenanceItem[];
  // equipement: string;
  // OT?: Tool;
  // equipement?: string;
  // dateBesoin: Date;
  // respo?: string[];
  rep?: string[];
  createdAt?: Date;
  modifiedAt?: Date;
  userCreat?: User;
  userModif?: User;
  userValideur?: User;
  image?: string;
  fichier?: string;
  sigle?: string;
  dateValid?: Date;
  demandeur?: User;

  // constructor() {
  //   this.itemActionCorrective = [new MaintenanceItem(1)];
  // }

  // addMaintenanceItem(): number {
  //   const rep = this.itemActionCorrective.length + 1;
  //   const maintenanceItem: MaintenanceItem = new MaintenanceItem(rep);
  //   return this.itemActionCorrective.push(maintenanceItem);
  // }

  // removeMaintenanceItem(rep: number) {
  //   const index = rep - 1;
  //   delete this.itemActionCorrective[index];
  // }
}

export interface MaintenanceItem {
  id?: number;
  rep: number;
  nonConformite: string;
  actionsCorrectives: string;
  respo?: string;
  delaiAction: Date;
  userReal?: string;
  dateReal?: Date;
  // constructor(rep: number) {
  //   this.rep = rep;
  //   // this.delaiAction = new Date();
  // }
}
export interface SpecMaintenanceFormValue {
  dateBesoin?: Date;
  image?: string;
  fichier?: string;
  sigle?: string;
  userValideur?: number;
  dateValid?: Date;
  itemActionCorrective: MaintenanceItem[];
}

// ============================================================================
// SPÉCIFICATIONS SBO (Nouvelle demande outillage)
// ============================================================================
export interface SpecSBO {
  id: number;
  title: string;
  description: string;
  dateBesoin: Date;
  aircraftProgram?: string;
}
export type SpecSBOCreation = Omit<SpecSBO, "id" | "aircraftProgram">

export interface SpecSBOFormValue {
  title: string;
  description: string;
  dateBesoin: Date;
  aircraftProgram: string;
}