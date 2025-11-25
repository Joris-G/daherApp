import { RequestStatus, RequestType, ToolRequest } from "src/app/_interfaces/tooling/tool-request-types";
import { mockUsers } from "./mockUser.mock";
import { mockTools } from "./mockTools.mock";
import { mockSpecSBO } from "./mockSBO.mock";
import { mockSpecCtrl } from "./mockSpecCtrl.mock";

export const mockToolRequests: ToolRequest[] = [
  {
    id: 1,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    tool: mockTools[0],
    statut: RequestStatus.SUBMITTED,
    typeData: mockSpecSBO[0],
    dateBesoin:new Date(),
    groupeAffectation:null
  },
  {
    id: 2,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[1],
    tool: mockTools[2],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[1],
    dateBesoin: new Date()
  },
  {
    id: 3,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[2],
    tool: mockTools[2],
    statut: RequestStatus.DRAFT,
    typeData: mockSpecSBO[2],
    dateBesoin: new Date()
  },
  {
    id: 4,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[3],
    tool: mockTools[0],
    statut: RequestStatus.COMPLETED,
    typeData: mockSpecSBO[3],
    dateBesoin: new Date()
  },
  {
    id: 5,
    bloquantProd: true,
    type: RequestType.CONTROLE,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    tool: mockTools[1],
    statut: RequestStatus.IN_PROGRESS,
    dateBesoin: new Date(),
    typeData: mockSpecCtrl[1],
  },
  {
    id: 6,
    bloquantProd: true,
    type: RequestType.CONTROLE,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    tool: mockTools[5],
    statut: RequestStatus.RETURNED,
    dateBesoin: new Date(),
    typeData: mockSpecCtrl[0],
  },
  // {
  //   id: 7,
  //   bloquantProd: false,
  //   type: RequestType.MAINTENANCE,
  //   createdAt: new Date(),
  //   demandeur: mockUsers[1],
  //   tool: mockTools[4],
  //   statut: RequestStatus.IN_PROGRESS,
  //   dateBesoin:new Date()
  // },
  {
    id: 8,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[1],
    tool: mockTools[3],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[4],
    dateBesoin: new Date()
  },
  {
    id: 9,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    tool: mockTools[2],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[5],
    dateBesoin: new Date()
  },
  {
    id: 10,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[3],
    tool: mockTools[1],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[6],
    dateBesoin: new Date()
  },
  {
    id: 11,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[3],
    tool: mockTools[0],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[7],
    dateBesoin: new Date()
  },
  {
    id: 12,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[3],
    tool: mockTools[1],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[8],
    dateBesoin: new Date()
  },
  {
    id: 13,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[2],
    tool: mockTools[2],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[9],
    dateBesoin: new Date()
  },
  {
    id: 14,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[2],
    tool: mockTools[3],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[10],
    dateBesoin: new Date()
  },
  {
    id: 15,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[1],
    tool: mockTools[4],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[11],
    dateBesoin: new Date()
  },
  {
    id: 16,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[2],
    tool: mockTools[5],
    statut: RequestStatus.IN_PROGRESS,
    typeData: mockSpecSBO[12],
    dateBesoin: new Date()
  },
]