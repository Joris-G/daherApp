import { RequestStatus, RequestType, ToolRequestStorage } from "src/app/tooling/tool-request-types";
import { mockUsers } from "./mockUser.mock";
import { mockTools } from "./mockTools.mock";

export const mockToolRequests: ToolRequestStorage[] = [
  {
    id: 1,
    bloquantProd: false,
    createdAt: new Date(),
    dateBesoin: new Date(2025, 11, 25),
    demandeurId: mockUsers[0].id,
    statut: RequestStatus.SUBMITTED,
    toolId: mockTools[0].id,
    type: RequestType.SBO
  }
]