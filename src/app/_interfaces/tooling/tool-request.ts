/* eslint-disable @typescript-eslint/naming-convention */
import { RequestStatus } from 'src/app/_enums/request-status';
import { RequestType } from 'src/app/_enums/request-type';
import { GroupeAffectation } from 'src/app/_interfaces/groupe-affectation';
import { SpecCtrl } from 'src/app/_interfaces/tooling/spec-ctrl';
import { SpecMaintRep } from 'src/app/_interfaces/tooling/spec-maint-rep';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { User } from 'src/app/_interfaces/user';

export interface ToolRequest {
  id?: number;
  demandeur: User | string;
  createdAt: Date;
  dateBesoin: Date;
  toolSAP: Tool | string;
  groupeAffectation?: GroupeAffectation;
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
