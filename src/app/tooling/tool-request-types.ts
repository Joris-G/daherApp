/* eslint-disable @typescript-eslint/naming-convention */
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { User } from 'src/app/_interfaces/user';
import { OutillNoRefSAP, Tool } from './tool';


// ============================================================================
// ENUMS
// ============================================================================

export enum RequestType {
  SBO = 'SBO',
  MAINTENANCE = 'MAINTENANCE',
  CONTROLE = 'CONTROLE'
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
export interface ToolRequestBase {
  id: number;
  type: RequestType;
  // typeData: SpecCtrl | SpecMaintRep | SpecSBO;
  demandeur: User;
  bloquantProd: boolean;
  createdAt: Date;
  dateBesoin: Date;
  //TODO Outillage NO REF
  // tool: Tool | OutillNoRefSAP;
  tool: Tool;
  groupeAffectation?: GroupeAffectation;
  affectation?: string[];
  dateAffectation?: Date;
  datePlanif?: Date;
  statut: RequestStatus;
  dateReal?: Date;
  userReal?: User;
  toolingNote?: string;
}

export interface ToolRequestStorage {
  id: number;
  type: RequestType;

  demandeurId: number;
  toolId: number;
  // toolReference: number | string;


  bloquantProd: boolean;
  createdAt: Date;
  dateBesoin: Date;
  statut: RequestStatus;


  groupeAffectationId?: number;
  affectation?: string[];
  dateAffectation?: Date;
  datePlanif?: Date;
  dateReal?: Date;
  userRealId?: number;
  toolingNote?: string;
}

// ============================================================================
// SPÉCIFICATIONS CONTRÔLE
// ============================================================================
export interface SpecCtrlRequest extends ToolRequestBase {
  type: RequestType.CONTROLE;
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

export type SpecCtrlCreation = Omit<SpecCtrlRequest,
  'id'>;

export type SpecCtrlUpdate = Omit<SpecCtrlRequest,
  'id'>;

export interface SpecCtrlStorage {
  id: number;
  toolRequestId: number; // 👈 Clé étrangère vers la ToolRequest
  description: string;
  refPlan?: string;
  image?: string;
  fichier?: string;
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

// ============================================================================
// SPÉCIFICATIONS MAINTENANCE
// ============================================================================
export interface SpecMaintRepRequest extends ToolRequestBase {
  type: RequestType.MAINTENANCE;
  outillage?: Tool;
  outillNoRefSAP: OutillNoRefSAP
  itemActionCorrective: MaintenanceItem[];
  // equipement: string;
  // equipement?: string;
  // respo?: string[];
  rep?: string[];
  userValideur?: User;
  image?: string;
  fichier?: string;
  sigle?: string;
  dateValid?: Date;
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
}


// ============================================================================
// SPÉCIFICATIONS SBO (Nouvelle demande outillage)
// ============================================================================
export interface SpecSBORequest extends ToolRequestBase {
  // idSpecSBO?: number;
  title: string;
  description: string;
  aircraftProgram?: string;
}
export type SpecSBOCreation = Omit<SpecSBORequest, "id" | "aircraftProgram">;
export type SpecSBOUpdate = Omit<SpecSBORequest, "id" | "aircraftProgram">;

export interface SpecSBOStorage {
  id: number;
  toolRequestId: number; // 👈 Clé étrangère vers la ToolRequest
  title: string;
  description: string;
  aircraftProgram?: string;
}

export type ToolRequest = SpecCtrlRequest | SpecMaintRepRequest | SpecSBORequest;