// ============================================================================
// SPÉCIFICATIONS CONTRÔLE
// ============================================================================
import { FormControl } from "@angular/forms";
import { ToolRequestBase, ToolRequestBaseForm } from "./tool-request.model";
import { MoyenMesure } from "./moyen-mesure.model";
import { TypeRapport } from "./type-rapport.model";

// ============================================================================
export type SpecCtrlRequest = ToolRequestBase & {
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
  immobilisationOutillage?: number;
  ligneBudgetaire?:string;
}

export type SpecCtrlRequestControls =ToolRequestBaseForm & {
  description: FormControl<string>;
  image: FormControl<string>;
  fichier: FormControl<string>;
  refPlan: FormControl<string>;
  indPlan: FormControl<string>;
  cheminCAO: FormControl<string>;
  detailsControle: FormControl<string>;
  tolerances: FormControl<string>;
  dispoOut: FormControl<Date>;
  typeRapport: FormControl<TypeRapport>;
  moyenMesure: FormControl<MoyenMesure>;
  infosComplementaire: FormControl<string>;
  visaControleur: FormControl<string>;
  interventionDate: FormControl<Date>;
  immobilisationOutillage: FormControl<number>;
  ligneBudgetaire:FormControl<string>;
}

// export type SpecCtrlRequestForm = FormGroup<SpecCtrlRequestControls>;


export type SpecCtrlCreation = Omit<SpecCtrlRequest, 'id' | 'createdAt' | 'demandeur' | 'statut'>;

export type SpecCtrlUpdate = Partial<SpecCtrlCreation>;

export interface SpecCtrlStorage {
  id: number;
  toolRequestId: number;
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
  immobilisationOutillage?: number;
  ligneBudgetaire?:string;
}