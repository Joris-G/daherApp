import { mockUsers } from "./mockUser.mock";
import { mockTools } from "./mockTools.mock";
import { ToolRequestStorage } from "src/app/features/tooling/models/tool-request.model";

export const mockToolRequests: ToolRequestStorage[] = [
  {
    id: 1,
    bloquantProd: false,
    createdAt: new Date(2025, 10, 3),
    dateBesoin: new Date(2025, 11, 25),
    demandeurId: mockUsers[0].id,
    statut: "Nouvelle",
    toolId: mockTools[101].id,
    type: "SBO"
  },
  {
    id: 2,
    bloquantProd: false,
    createdAt: new Date(2026, 0, 5),
    dateBesoin: new Date(2026, 0, 25),
    demandeurId: mockUsers[0].id,
    statut: "Finalisée",
    toolId: mockTools[102].id,
    type: "CONTROLE"
  }
]