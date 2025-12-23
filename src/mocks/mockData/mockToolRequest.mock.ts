import { mockUsers } from "./mockUser.mock";
import { mockTools } from "./mockTools.mock";
import { ToolRequestStorage } from "src/app/tooling/models/tool-request.model";

export const mockToolRequests: ToolRequestStorage[] = [
  {
    id: 1,
    bloquantProd: false,
    createdAt: new Date(),
    dateBesoin: new Date(2025, 11, 25),
    demandeurId: mockUsers[0].id,
    statut: "Nouvelle",
    toolId: mockTools[0].id,
    type: "SBO"
  },
  {
    id: 2,
    bloquantProd: false,
    createdAt: new Date(),
    dateBesoin: new Date(2026, 0, 25),
    demandeurId: mockUsers[0].id,
    statut: "Nouvelle",
    toolId: mockTools[0].id,
    type: "CONTROLE"
  }
]