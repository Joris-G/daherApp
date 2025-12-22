import { http, HttpResponse, JsonBodyType } from "msw";
import { User } from "src/app/_interfaces/user";
import { Tool, OutillNoRefSAP } from "src/app/tooling/tool";
import { SpecSBOCreation, SpecSBOStorage, SpecSBOUpdate, } from "src/app/features/tooling/sbo-request/models/sbo.model";
import { mockSpecSBO } from "../mockData/mockSBO.mock";
import { mockSpecCtrl } from "../mockData/mockSpecCtrl.mock";
import { mockToolRequests } from "../mockData/mockToolRequest.mock";
import { mockTools } from "../mockData/mockTools.mock";
import { mockUsers } from "../mockData/mockUser.mock";
import { SpecCtrlRequest, SpecCtrlStorage } from "src/app/features/tooling/control-request/models/controle-3d-request.model";
import { ToolRequestStorage, ToolRequest, ToolRequestCreation } from "src/app/tooling/models/tool-request.model";

export const toolRequestHandlers = [
     // POST - Créer une request
  http.post('/api/tools/request', async ({ request }) => {
    const newToolRequestId = mockToolRequests.length + 1;
    const loggedInUserId = 1;
    const requestData = await request.json() as ToolRequestCreation;
    const newToolRequestData = {
      demandeur: mockUsers[loggedInUserId - 1],
      createdAt: new Date(),
      ...requestData
    } as ToolRequestCreation;
    const toolRef = (newToolRequestData.tool as Tool).id;

    const masterRequest: ToolRequestStorage = {
      id: newToolRequestId,
      type: newToolRequestData.type,
      demandeurId: loggedInUserId, // Remplacer par l'utilisateur connecté
      createdAt: new Date(),
      statut: "Nouvelle",
      bloquantProd: newToolRequestData.bloquantProd,
      dateBesoin: new Date(newToolRequestData.dateBesoin),
      // tool: newToolRequestData.tool,
      toolId: toolRef,
    };
    mockToolRequests.push(masterRequest);

    switch (masterRequest.type) {
      case "CONTROLE":
        const newSpecCtrlId = mockSpecCtrl.length + 1
        const specCtrlData = newToolRequestData as SpecCtrlRequest;
        const newSpecCtrlEntry: SpecCtrlStorage = {
          id: newSpecCtrlId,
          toolRequestId: newToolRequestId,
          description: specCtrlData.description,
          refPlan: specCtrlData.refPlan,
          image: specCtrlData.image,
          fichier: specCtrlData.fichier,
          indPlan: specCtrlData.indPlan,
          cheminCAO: specCtrlData.cheminCAO,
          detailsControle: specCtrlData.detailsControle,
          tolerances: specCtrlData.tolerances,
          dispoOut: specCtrlData.dispoOut,
          typeRapport: specCtrlData.typeRapport,
          moyenMesure: specCtrlData.moyenMesure,
          infosComplementaire: specCtrlData.infosComplementaire,
          visaControleur: specCtrlData.visaControleur,
          interventionDate: specCtrlData.interventionDate,
          ligneBudgetaire: specCtrlData.ligneBudgetaire
        };
        console.log(newSpecCtrlEntry);
        mockSpecCtrl.push(newSpecCtrlEntry);
        break;
      case "MAINTENANCE":
        // ... Mêmes étapes pour SpecMaintRep, en gérant aussi les MaintenanceItems
        break;
      case "SBO":
        const newSpecSBOId = mockSpecSBO.length + 1
        const specSBOData = newToolRequestData as SpecSBOCreation;
        const newSpecSBOEntry: SpecSBOStorage = {
          id: newSpecSBOId,
          toolRequestId: newToolRequestId,
          title: specSBOData.title,
          description: specSBOData.description,
        };
        mockSpecSBO.push(newSpecSBOEntry);
        break;
    }
    const responseRequest = getToolRequestById(masterRequest.id);
    return HttpResponse.json(responseRequest, { status: 201 });
  }),



  http.get('/api/tools/request', async () => {
    // const allRequests: ToolRequest[] = mockToolRequests.map((request: ToolRequestStorage) => {
    //   const requestSBO = request.type === "SBO" ? mockSpecSBO.find((sbo) => sbo.toolRequestId === request.id) : null
    //   const newRequest: ToolRequest = {
    //     ...request,
    //     ...requestSBO,
    //     demandeur: mockUsers[request.demandeurId - 1],
    //     tool: mockTools[request.toolId - 1]
    //   };
    //   return newRequest;
    // })
    // return HttpResponse.json(allRequests, { status: 201 });
    const allRequests = mockToolRequests.map(req => findToolRequestData(req.id));
    return HttpResponse.json<ToolRequest[]>(allRequests, { status: 200 });
  }),



  http.get('/api/tools/request/:id', async ({ params }) => {
    // const { id } = params;
    // const toolRequestId = Number(id);
    // return getToolRequestById(toolRequestId);
    const data = findToolRequestData(Number(params.id));
    if (!data) return new HttpResponse(null, { status: 404 });
    return HttpResponse.json<ToolRequest>(data);
  }),

  http.patch('/api/tools/request/:id', async ({ request, params }) => {
    // const { id } = params;
    // const toolRequestId = Number(id);

    // const updateDto: SpecSBOUpdate = await request.json() as SpecSBOUpdate;

    // const masterRequestIndex = mockToolRequests.findIndex(req => req.id === toolRequestId);
    // console.log(masterRequestIndex);
    // if (masterRequestIndex === -1) {
    //   return new HttpResponse(null, { status: 404 });
    // }

    // const masterRequest = mockToolRequests[masterRequestIndex];
    // const originalType = masterRequest.type;

    // const updatedMasterData = {
    //   ...masterRequest,
    //   title: updateDto.title,
    //   description: updateDto.description,
    //   dateBesoin: updateDto.dateBesoin,
    //   // ... ajoutez d'autres champs maîtres communs si nécessaire (ex: statut, etc.)
    // };

    // mockToolRequests[masterRequestIndex] = updatedMasterData;

    // let updatedDetailData: SpecSBOStorage | undefined;
    // let detailDataIndex: number;

    // switch (originalType) {
    //   case "SBO":
    //     detailDataIndex = mockSpecSBO.findIndex(s => s.toolRequestId === toolRequestId);
    //     if (detailDataIndex !== -1) {
    //       const specSboData = mockSpecSBO[detailDataIndex];
    //       updatedDetailData = {
    //         ...specSboData,
    //         description: updateDto.description,
    //         toolingNote: updateDto.toolingNote,
    //         // ... ajoutez d'autres champs spécifiques SBO si nécessaire
    //       } as SpecSBOStorage;
    //       mockSpecSBO[detailDataIndex] = updatedDetailData;
    //     }
    //     break;
    //   case "CONTROLE":
    //     // Logique de mise à jour pour SpecCtrl...
    //     break;
    //   // ... autres types
    //   default:
    //     break;
    // }

    // const demandeur: User | undefined = mockUsers.find(u => u.id === updatedMasterData.demandeurId);
    // const tool: Tool | OutillNoRefSAP | undefined = mockTools.find(t => t.id === updatedMasterData.toolId);

    // if (!demandeur || !tool) {
    //   return new HttpResponse(null, { status: 500 });
    // }

    // const fullUpdatedRequest: ToolRequest = {
    //   ...updatedMasterData,
    //   demandeur: demandeur,
    //   tool: tool,
    //   ...(updatedDetailData || {}) // Ajouter les détails spécifiques SBO mis à jour
    // } as ToolRequest;


    // delete (fullUpdatedRequest as any).demandeurId;
    // delete (fullUpdatedRequest as any).toolId;

    // return HttpResponse.json(fullUpdatedRequest);
    const id = Number(params.id);
    const updateDto = await request.json() as SpecSBOUpdate;

    const index = mockToolRequests.findIndex(req => req.id === id);
    if (index === -1) return new HttpResponse(null, { status: 404 });

    // Mise à jour partielle (Declarative approach)
    mockToolRequests[index] = { ...mockToolRequests[index], ...updateDto };

    if (mockToolRequests[index].type === 'SBO') {
      const sboIdx = mockSpecSBO.findIndex(s => s.toolRequestId === id);
      if (sboIdx !== -1) mockSpecSBO[sboIdx] = { ...mockSpecSBO[sboIdx], ...updateDto };
    }

    return HttpResponse.json(findToolRequestData(id));
  }),
];

const getToolRequestById = (toolRequestId: number) => {

  // 1. Récupérer l'entrée Maître
  const masterRequest: ToolRequestStorage = mockToolRequests.find(req => req.id === toolRequestId);

  if (!masterRequest) {
    return new HttpResponse(null, { status: 404 });
  }
  console.log(masterRequest);

  const demandeur: User | undefined = mockUsers.find(u => u.id === masterRequest.demandeurId);

  if (!demandeur) {
    return new HttpResponse(null, { status: 500 });
  }

  const tool: Tool | OutillNoRefSAP | undefined = mockTools.find(t => t.id === masterRequest.toolId);

  const resolvedBaseRequest = {
    ...masterRequest,
    demandeur: demandeur, // <-- L'objet User complet
    tool           // <-- L'objet Tool ou OutillNoRefSAP complet
  };
  // Supprimer les IDs qui ne font plus partie de l'objet final (ToolRequest)
  delete resolvedBaseRequest.demandeurId;
  delete resolvedBaseRequest.toolId;

  // 2. Trouver et joindre les détails
  // Note: Vous devez inclure le type SpecMaintRepStorage dans l'union `detailData`
  let detailData: SpecCtrlStorage | SpecSBOStorage | {}; // {} pour initialiser

  switch (masterRequest.type) {
    case "CONTROLE":
      detailData = mockSpecCtrl.find(s => s.toolRequestId === toolRequestId) || {};
      break;
    case "MAINTENANCE":
      // Assurez-vous que mockSpecMaintRep et SpecMaintRepStorage existent
      // detailData = mockSpecMaintRep.find(s => s.toolRequestId === toolRequestId) || {};
      break;
    case "SBO":
      const sboEntry = mockSpecSBO.find(s => s.toolRequestId === toolRequestId);
      detailData = sboEntry ? { ...sboEntry } : {};
      break;
    default:
      detailData = {}; // Par défaut, pas de détails
  }
  console.log(detailData);
  // Si detailData a été trouvé, il contient la clé 'toolRequestId' que nous devons supprimer
  if (detailData && 'toolRequestId' in detailData) {
    delete (detailData as any).toolRequestId;
  }

  // 3. Reconstruire l'objet final (fusionner le Maître RESOLU et les Détails)
  const fullRequest: ToolRequest = {
    ...resolvedBaseRequest, // Contient demandeur: User, tool: Tool
    ...(detailData as any)  // Contient les champs spécifiques (ex: description, refPlan)
  } as ToolRequest; // Le cast est maintenant valide car l'objet correspond aux propriétés attendues
  return HttpResponse.json(fullRequest);
}

/**
 * Récupère et agrège les données d'une requête sans emballage HTTP.
 * @param toolRequestId ID de la requête
 * @returns ToolRequest ou null si non trouvé
 */
const findToolRequestData = (toolRequestId: number): ToolRequest | null => {
  const master = mockToolRequests.find(req => req.id === toolRequestId);
  if (!master) return null;

  const demandeur = mockUsers.find(u => u.id === master.demandeurId);
  const tool = mockTools.find(t => t.id === master.toolId);

  let detailData: SpecCtrlStorage | SpecSBOStorage;
  switch (master.type) {
    case "SBO":
      detailData = mockSpecSBO.find(s => s.toolRequestId === toolRequestId);
      break;
    case "CONTROLE":
      detailData = mockSpecCtrl.find(s => s.toolRequestId === toolRequestId);
      break;
  }

  // Construction de l'objet selon le principe de transformation de données
  const result = {
    ...master,
    ...detailData,
    demandeur,
    tool
  };

  // Nettoyage des propriétés de stockage
  delete (result as any).demandeurId;
  delete (result as any).toolId;
  delete (result as any).toolRequestId;

  return result as ToolRequest;
};
