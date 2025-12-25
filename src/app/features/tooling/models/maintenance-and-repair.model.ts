
// ============================================================================
// SPÉCIFICATIONS MAINTENANCE

import { User } from 'src/app/_interfaces/user';
import { ToolRequestBase } from './tool-request.model';

// ============================================================================
export type SpecMaintRepRequest = ToolRequestBase & {
  type: 'MAINTENANCE';
  // outillage?: Tool;
  // outillNoRefSAP: OutillNoRefSAP
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
};

export type MaintenanceItem = {
  id?: number;
  rep: number;
  nonConformite: string;
  actionsCorrectives: string;
  respo?: string;
  delaiAction: Date;
  userReal?: string;
  dateReal?: Date;
};

export type SpecMaintRepRequestCreation = Omit<SpecMaintRepRequest, 'id'>;
export type SpecMaintRepRequestUpdate = Partial<SpecMaintRepRequestCreation>;
