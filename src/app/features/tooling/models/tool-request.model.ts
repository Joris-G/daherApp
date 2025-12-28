
// ============================================================================
// TOOL REQUEST (Demande principale)

import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { User } from 'src/app/_interfaces/user';
import { Tool } from './tool.model';
import { SpecMaintRepRequest } from './maintenance-and-repair.model';
import { SpecSBOCreation, SpecSBORequest, SpecSBOUpdate } from './sbo.model';
import { FormControl } from '@angular/forms';
import { SpecCtrlCreation, SpecCtrlRequest, SpecCtrlUpdate } from './controle-3d-request.model';

// ============================================================================
export interface ToolRequestBase {
  id: number;
  // TODO voir si on fait un controlForm pour ce champ pour simplifier la vue de création en une seule page
  type: RequestType;
  bloquantProd: boolean; //TODO Retirer si master revision OK
  dateBesoin: Date; //TODO Retirer si master revision OK
  tool: Tool;
  createdAt: Date; //TODO Retirer si master revision OK
  demandeur: User; //TODO Retirer si master revision OK
  statut: RequestStatus; //TODO Retirer si master revision OK
  //TODO Outillage NO REF
  // tool: Tool | OutillNoRefSAP;
  groupeAffectation?: GroupeAffectation; //TODO Retirer si master revision OK
  affectation?: string[]; //TODO Retirer si master revision OK
  dateAffectation?: Date; //TODO Retirer si master revision OK
  datePlanif?: Date; //TODO Retirer si master revision OK
  dateReal?: Date; //TODO Retirer si master revision OK
  userReal?: User; //TODO Retirer si master revision OK
  toolingNote?: string; //TODO Retirer si master revision OK
}

export type ToolRequestRevision = {
  indice: string;
  bloquantProd: boolean;
  dateBesoin: Date;
  statut: RequestStatus;
  createdAt: Date;
  demandeur: User;
  groupeAffectation?: GroupeAffectation;
  affectation?: string[];
  dateAffectation?: Date;
  datePlanif?: Date;
  dateReal?: Date;
  userReal?: User;
  toolingNote?: string;
};

export type ToolRequestBaseForm = {
  bloquantProd: FormControl<boolean>;
  dateBesoin: FormControl<Date>;
  tool: FormControl<Tool>;
};

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

//TODO Créer les type maintenance
export type ToolRequestCreation = SpecCtrlCreation | SpecSBOCreation | SpecMaintRepRequest;
export type ToolRequest = SpecCtrlRequest | SpecMaintRepRequest | SpecSBORequest;
export type ToolRequestUpdate = SpecCtrlUpdate | SpecSBOUpdate | SpecMaintRepRequest;

/**
 * @type RequestType
 * @description Union de littéraux de chaînes représentant les types de requête possibles.
 */
export type RequestType =
  | 'SBO'
  | 'MAINTENANCE'
  | 'CONTROLE';

/**
 * @constant REQUEST_TYPES
 * @description Liste des valeurs de RequestType à utiliser dans les templates.
 */
export const REQUEST_TYPES: readonly RequestType[] = [
  'SBO',
  'MAINTENANCE',
  'CONTROLE',
] as const;




/**
 * @type RequestStatus
 * @description Union de littéraux de chaînes représentant les statuts possibles d'une requête.
 */
export type RequestStatus =
  | 'Brouillon'
  | 'Nouvelle'
  | 'En cours'
  | 'Finalisée'
  | 'Retournée'
  | 'Annulée'
  | 'En attente';

/**
 * @constant REQUEST_STATUSES
 * @description Liste des valeurs de RequestStatus à utiliser dans les templates.
 */
export const REQUEST_STATUSES: readonly RequestStatus[] = [
  'Brouillon',
  'Nouvelle',
  'En cours',
  'Finalisée',
  'Retournée',
  'Annulée',
  'En attente',
] as const;

/**
 * Interface d'état pour le ToolRequestStore.
 * Représente l'état interne du Store.
 * @interface ToolRequestState
 */
export interface ToolRequestState {
  isCreatingTool: boolean;
  isCreatingRequest: boolean;
  selectedTool: Tool | null;
  error: string | null;
  currentToolRequest: ToolRequest | null;
  isLoadingRequest: boolean;
  isUpdatingRequest: boolean;
  isCreatingSuccess: boolean;
  isUpdateSuccess: boolean;
  canManage: boolean;
  canUpdate: boolean;
  canEdit: boolean;
}