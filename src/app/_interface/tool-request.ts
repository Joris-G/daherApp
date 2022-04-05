/* eslint-disable @typescript-eslint/naming-convention */
import { RequestStatus } from '../_enums/request-status';
import { RequestType } from '../_enums/request-type';
import { SpecCtrl } from './spec-ctrl';
import { SpecMaintRep } from './spec-maint-rep';
import { Tool } from './tool';
import { User } from './user';

export interface ToolRequest {
  id?: number;
  demandeur: User | string;
  createdAt: Date;
  dateBesoin: Date;
  toolSAP: Tool | string;
  groupeAffectation?: User;
  dateAffectation?: Date;
  statut?: string;
  toolingNote?: string;

  type: RequestType | string;
  controle?: SpecCtrl;
  maintenance?: SpecMaintRep;
  // sbo?: SpecSBO;
  DatePlanif?: Date;
  DateReal?: Date;
  userReal?: User;
}
// title?: string;
// Description: string;
// imgUrl?: string;
// fileUrl?: string;



export interface ToolRequestIri {
  id?: number;
  requestDate: Date;
  requestType: RequestType;
  requestor: string;
  tool: string;
  title: string;
  description: string;
  imgUrl?: string;
  fileUrl?: string;
  needDate: Date;
  affectedTo?: string;
  affectationDate?: Date;
  requestStatus?: RequestStatus;
  realizationDate?: Date;
  toolingNote?: string;
  statut?: string;
}
