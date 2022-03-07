import { RequestStatus } from '../_enums/request-status';
import { RequestType } from '../_enums/request-type';
import { MoldingTool } from './molding-tool';
import { User } from './user';

export interface ToolRequest {
  id?: number;
  requestDate: Date;
  requestType: RequestType;
  requestor: User;
  tool: MoldingTool;
  title: string;
  description: string;
  imgUrl?: string;
  fileUrl?: string;
  needDate: Date;
  affectedTo?: User;
  affectationDate?: Date;
  requestStatus?: RequestStatus;
  realizationDate?: Date;
  toolingNote?: string;
}

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
}
