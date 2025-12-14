

// ============================================================================
// SPÉCIFICATIONS CONTRÔLE

import { MoyenMesure } from "./moyen-mesure.model";
import { ToolRequestBase } from "./tool-request.model";
import { TypeRapport } from "./type-rapport.model";

// ============================================================================
export interface SpecCtrlRequest extends ToolRequestBase {
  type: "CONTROLE";
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