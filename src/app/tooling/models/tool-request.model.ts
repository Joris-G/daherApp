
// ============================================================================
// TOOL REQUEST (Demande principale)

import { GroupeAffectation } from "src/app/_interfaces/groupe-affectation";
import { User } from "src/app/_interfaces/user";
import { Tool } from "../tool";
import { SpecCtrlCreation, SpecCtrlRequest } from "./controle-3d-request.model";
import { SpecMaintRepRequest } from "./maintenance-and-repair.model";
import { SpecSBOCreation, SpecSBORequest } from "./sbo.model";
import { FormControl } from "@angular/forms";

// ============================================================================
export interface ToolRequestBase {
  id: number;
  // TODO voir si on fait un controlForm pour ce champ pour simplifier la vue de création en une seule page
  type: RequestType;
  bloquantProd: boolean;
  dateBesoin: Date;
  tool: Tool;
  //TODO Outillage NO REF
  // tool: Tool | OutillNoRefSAP;
  groupeAffectation?: GroupeAffectation;
  affectation?: string[];
  dateAffectation?: Date;
  datePlanif?: Date;
  statut: RequestStatus;
  dateReal?: Date;
  userReal?: User;
  toolingNote?: string;
  createdAt: Date;
  demandeur: User;
}

export type ToolRequestBaseForm = {
  bloquantProd: FormControl<boolean>;
  dateBesoin: FormControl<Date>;
  tool:FormControl<Tool>;
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


export type ToolRequestCreation = SpecCtrlCreation | SpecSBOCreation;
export type ToolRequest = SpecCtrlRequest | SpecMaintRepRequest | SpecSBORequest;


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