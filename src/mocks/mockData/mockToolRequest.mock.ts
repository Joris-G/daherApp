import { RequestStatus, RequestType, ToolRequest } from "src/app/_interfaces/tooling/tool-request-types";
import { mockUsers } from "./mockUser.mock";
import { mockTools } from "./mockTools.mock";

export const mockToolRequests: ToolRequest[] = [
  {
    id: 1,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.SUBMITTED
  },
  {
    id: 2,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 3,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.DRAFT
  },
  {
    id: 4,
    bloquantProd: false,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.COMPLETED
  },
  {
    id: 5,
    bloquantProd: true,
    type: RequestType.CONTROLE,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 6,
    bloquantProd: true,
    type: RequestType.CONTROLE,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.RETURNED
  },
  {
    id: 7,
    bloquantProd: false,
    type: RequestType.MAINTENANCE,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 8,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 9,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 10,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 11,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 12,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 13,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 14,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 15,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
  {
    id: 16,
    bloquantProd: true,
    type: RequestType.SBO,
    createdAt: new Date(),
    demandeur: mockUsers[0],
    outillage: mockTools[0],
    statut: RequestStatus.IN_PROGRESS
  },
]