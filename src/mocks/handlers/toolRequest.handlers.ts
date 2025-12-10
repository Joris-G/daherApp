import { http, HttpResponse } from "msw";
import { User } from "src/app/_interfaces/user";
import { Tool, OutillNoRefSAP } from "src/app/tooling/tool";
import { RequestStatus, RequestType, SpecCtrlCreation, SpecCtrlRequest, SpecCtrlStorage, SpecMaintRepRequest, SpecSBOCreation, SpecSBOStorage, SpecSBOUpdate, ToolRequest, ToolRequestStorage } from "src/app/tooling/tool-request-types";
import { mockSpecSBO } from "../mockData/mockSBO.mock";
import { mockSpecCtrl } from "../mockData/mockSpecCtrl.mock";
import { mockToolRequests } from "../mockData/mockToolRequest.mock";
import { mockTools } from "../mockData/mockTools.mock";
import { mockUsers } from "../mockData/mockUser.mock";

export const toolRequestHandlers = [
     // POST - Créer une request
  http.post('/api/tools/request', async ({ request }) => {
    const newToolRequestId = mockToolRequests.length + 1;
    const loggedInUserId = 1;
    const newToolRequestData = await request.json() as SpecCtrlCreation | SpecSBOCreation | SpecMaintRepRequest;
    console.log(newToolRequestData);
    const toolRef = (newToolRequestData.tool as Tool).id;

    const masterRequest: ToolRequestStorage = {
      id: newToolRequestId,
      type: newToolRequestData.type,
      demandeurId: loggedInUserId, // Remplacer par l'utilisateur connecté
      createdAt: new Date(),
      statut: RequestStatus.SUBMITTED,
      bloquantProd: newToolRequestData.bloquantProd,
      dateBesoin: newToolRequestData.dateBesoin,
      // tool: newToolRequestData.tool,
      toolId: toolRef,
    };
    mockToolRequests.push(masterRequest);

    switch (masterRequest.type) {
      case RequestType.CONTROLE:
        const newSpecCtrlId = mockSpecCtrl.length + 1
        // Créer l'objet SpecCtrl (stockage)
        const specCtrlData = newToolRequestData as SpecCtrlRequest;
        const newSpecCtrlEntry: SpecCtrlStorage = {
          id: newSpecCtrlId,
          toolRequestId: newToolRequestId,
          // On omet les champs déjà dans la table Maître
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
        };
        mockSpecCtrl.push(newSpecCtrlEntry); // Stockage de la SPEC

        break;

      case RequestType.MAINTENANCE:
        // ... Mêmes étapes pour SpecMaintRep, en gérant aussi les MaintenanceItems
        break;

      case RequestType.SBO:
        const newSpecSBOId = mockSpecSBO.length + 1
        const specSBOData = newToolRequestData as SpecSBOCreation;
        const newSpecSBOEntry: SpecSBOStorage = {
          id: newSpecSBOId,
          toolRequestId: newToolRequestId,
          title: specSBOData.title,
          description: specSBOData.description,
          // aircraftProgram: specSBOData.aircraftProgram
        };
        mockSpecSBO.push(newSpecSBOEntry);
        break;
    }

    // mockToolRequests.push(newToolRequestData);


    return HttpResponse.json(masterRequest, { status: 201 });
  }),



  http.get('/api/tools/request', async ({ request }) => {
    const allRequests: ToolRequest[] = mockToolRequests.map((request: ToolRequestStorage) => {

      const newRequest: ToolRequest = {
        ...request,
        demandeur: mockUsers[request.demandeurId - 1],
        title: "",
        description: "",
        tool: mockTools[request.toolId - 1]
      };
      return newRequest;
    })
    return HttpResponse.json(allRequests, { status: 201 });
  }),



  http.get('/api/tools/request/:id', async ({ request, params }) => {
    const { id } = params;
    const toolRequestId = Number(id);

    // 1. Récupérer l'entrée Maître
    const masterRequest: ToolRequestStorage = mockToolRequests.find(req => req.id === toolRequestId);

    if (!masterRequest) {
      return new HttpResponse(null, { status: 404 });
    }


    const demandeur: User | undefined = mockUsers.find(u => u.id === masterRequest.demandeurId);

    if (!demandeur) {
      return new HttpResponse(null, { status: 500 });
    }

    const tool: Tool | OutillNoRefSAP | undefined = mockTools.find(t => t.id === masterRequest.toolId);

    const resolvedBaseRequest = {
      ...masterRequest,
      demandeur: demandeur, // <-- L'objet User complet
      tool: tool,           // <-- L'objet Tool ou OutillNoRefSAP complet
    };
    // Supprimer les IDs qui ne font plus partie de l'objet final (ToolRequest)
    delete resolvedBaseRequest.demandeurId;
    delete resolvedBaseRequest.toolId;

    // 2. Trouver et joindre les détails
    // Note: Vous devez inclure le type SpecMaintRepStorage dans l'union `detailData`
    let detailData: SpecCtrlStorage | SpecSBOStorage | {}; // {} pour initialiser

    switch (masterRequest.type) {
      case RequestType.CONTROLE:
        detailData = mockSpecCtrl.find(s => s.toolRequestId === toolRequestId) || {};
        break;
      case RequestType.MAINTENANCE:
        // Assurez-vous que mockSpecMaintRep et SpecMaintRepStorage existent
        // detailData = mockSpecMaintRep.find(s => s.toolRequestId === toolRequestId) || {};
        break;
      case RequestType.SBO:
        detailData = mockSpecSBO.find(s => s.toolRequestId === toolRequestId) || {};
        break;
      default:
        detailData = {}; // Par défaut, pas de détails
    }

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
  }),

  http.patch('/api/tools/request/:id', async ({ request, params }) => {
    const { id } = params;
    const toolRequestId = Number(id);

    const updateDto: SpecSBOUpdate = await request.json() as SpecSBOUpdate;

    const masterRequestIndex = mockToolRequests.findIndex(req => req.id === toolRequestId);
    console.log(masterRequestIndex);
    if (masterRequestIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }

    const masterRequest = mockToolRequests[masterRequestIndex];
    const originalType = masterRequest.type;

    const updatedMasterData = {
      ...masterRequest,
      title: updateDto.title,
      description: updateDto.description,
      dateBesoin: updateDto.dateBesoin,
      // ... ajoutez d'autres champs maîtres communs si nécessaire (ex: statut, etc.)
    };

    mockToolRequests[masterRequestIndex] = updatedMasterData;

    let updatedDetailData: SpecSBOStorage | undefined;
    let detailDataIndex: number;

    switch (originalType) {
      case RequestType.SBO:
        detailDataIndex = mockSpecSBO.findIndex(s => s.toolRequestId === toolRequestId);
        if (detailDataIndex !== -1) {
          const specSboData = mockSpecSBO[detailDataIndex];
          updatedDetailData = {
            ...specSboData,
            description: updateDto.description,
            toolingNote: updateDto.toolingNote,
            // ... ajoutez d'autres champs spécifiques SBO si nécessaire
          } as SpecSBOStorage;
          mockSpecSBO[detailDataIndex] = updatedDetailData;
        }
        break;
      case RequestType.CONTROLE:
        // Logique de mise à jour pour SpecCtrl...
        break;
      // ... autres types
      default:
        break;
    }

    const demandeur: User | undefined = mockUsers.find(u => u.id === updatedMasterData.demandeurId);
    const tool: Tool | OutillNoRefSAP | undefined = mockTools.find(t => t.id === updatedMasterData.toolId);

    if (!demandeur || !tool) {
      return new HttpResponse(null, { status: 500 });
    }

    const fullUpdatedRequest: ToolRequest = {
      ...updatedMasterData,
      demandeur: demandeur,
      tool: tool,
      ...(updatedDetailData || {}) // Ajouter les détails spécifiques SBO mis à jour
    } as ToolRequest;


    delete (fullUpdatedRequest as any).demandeurId;
    delete (fullUpdatedRequest as any).toolId;

    return HttpResponse.json(fullUpdatedRequest);
  }),
]