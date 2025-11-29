import { http, HttpResponse } from 'msw';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { OutillNoRefSAP, Tool, ToolCreation } from 'src/app/tooling/tool';
import { MoyenMesure, RequestStatus, RequestType, SpecCtrlCreation, SpecCtrlRequest, SpecCtrlStorage, SpecMaintRepRequest, SpecSBOCreation, SpecSBORequest, SpecSBOStorage, ToolRequest, ToolRequestStorage } from 'src/app/tooling/tool-request-types';
import { User } from 'src/app/_interfaces/user';
import { mockToolRequests } from './mockData/mockToolRequest.mock';
import { mockTools } from './mockData/mockTools.mock';
import { mockUsers } from './mockData/mockUser.mock';
import { mockSpecCtrl } from './mockData/mockSpecCtrl.mock';
import { mockSpecSBO } from './mockData/mockSBO.mock';


// Données mockées
const mockProgrammesAvion: ProgrammeAvion[] = [
 {client:'AIRBUS', designation:'MLGD-900',id:1},
  {client:'AIRBUS', designation:'MLGD-1000',id:2},
  {client:'AIRBUS', designation:'A330',id:3},
  {client:'GULFSTREAM', designation:'G600 ELEVATOR',id:4},
];


// Définition des handlers
export const handlers = [
  // GET - Liste des utilisateurs
  http.get('/api/users', () => {
    return HttpResponse.json(mockUsers);
  }),

  // GET - Utilisateur par ID
  http.get('/api/users/:id', ({ params }) => {
    const { id } = params;
    const user = mockUsers.find(u => u.id === Number(id));
    
    if (!user) {
      return new HttpResponse(null, { status: 404 });
    }
    
    return HttpResponse.json(user);
  }),

  // POST - Créer un utilisateur
  http.post('/api/users', async ({ request }) => {
    const newUser = await request.json() as Omit<User, 'id'>;
    const user: User = {
      id: mockUsers.length + 1,
      ...newUser
    };
    mockUsers.push(user);
    
    return HttpResponse.json(user, { status: 201 });
  }),

  // PUT - Mettre à jour un utilisateur
  http.put('/api/users/:id', async ({ params, request }) => {
    const { id } = params;
    const updates = await request.json() as Partial<User>;
    const userIndex = mockUsers.findIndex(u => u.id === Number(id));
    
    if (userIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }
    
    mockUsers[userIndex] = { ...mockUsers[userIndex], ...updates };
    return HttpResponse.json(mockUsers[userIndex]);
  }),

  // DELETE - Supprimer un utilisateur
  http.delete('/api/users/:id', ({ params }) => {
    const { id } = params;
    const userIndex = mockUsers.findIndex(u => u.id === Number(id));
    
    if (userIndex === -1) {
      return new HttpResponse(null, { status: 404 });
    }
    
    mockUsers.splice(userIndex, 1);
    return new HttpResponse(null, { status: 204 });
  }),

  // GET - Liste des produits avec pagination
  http.get('/usine-api-dev/public/index.php/api/programme_avions', ({ request }) => {
    const url = new URL(request.url);
    const page = Number(url.searchParams.get('page')) || 1;
    const limit = Number(url.searchParams.get('limit')) || 10;
    
    const start = (page - 1) * limit;
    const end = start + limit;
    const paginatedProducts = mockProgrammesAvion.slice(start, end);
    
    return HttpResponse.json({
      data: paginatedProducts,
      total: mockProgrammesAvion.length,
      page,
      limit
    });
  }),

  // POST - Créer un outillage
  http.post('/api/tools', async ({ request }) => {
    const newTool = await request.json() as ToolCreation;
    const tool: Tool = {
      id: mockTools.length + 1,
      ...newTool
    };
    mockTools.push(tool);

    return HttpResponse.json(tool, { status: 201 });
  }),

  // POST - Créer une request
  http.post('/api/tools/request', async ({ request }) => {
    const newToolRequestId = mockToolRequests.length + 1;
    const loggedInUserId = 1;
    const newToolRequestData = await request.json() as SpecCtrlCreation | SpecSBOCreation | SpecMaintRepRequest;
    const toolRef = (newToolRequestData.tool as Tool).id || (newToolRequestData.tool as OutillNoRefSAP).identification || 'N/A';

    const masterRequest: ToolRequestStorage = {
      id: newToolRequestId,
      type: newToolRequestData.type,
      demandeurId: loggedInUserId, // Remplacer par l'utilisateur connecté
      createdAt: new Date(),
      statut: RequestStatus.SUBMITTED,
      bloquantProd: newToolRequestData.bloquantProd,
      dateBesoin: newToolRequestData.dateBesoin,
      // tool: newToolRequestData.tool,
      toolReference: toolRef,
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
        const specSBOData = newToolRequestData as SpecSBORequest;
        const newSpecSBOEntry: SpecSBOStorage = {
          id: newSpecSBOId,
          toolRequestId: newToolRequestId,
          title: specSBOData.title,
          description: specSBOData.description,
          aircraftProgram: specSBOData.aircraftProgram
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
        tool: mockTools[0]
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

    let tool: Tool | OutillNoRefSAP | undefined;
    if (typeof masterRequest.toolReference === 'number') {
      tool = mockTools.find(t => t.id === masterRequest.toolReference);
    } else {
      // Simuler la résolution de l'objet OutillNoRefSAP (ou créer un mock basé sur la référence string)
      // tool = { designation: masterRequest.toolReference, description: `Outillage sans Ref SAP : ${masterRequest.toolReference}` };
    }
    const resolvedBaseRequest = {
      ...masterRequest,
      demandeur: demandeur, // <-- L'objet User complet
      tool: tool,           // <-- L'objet Tool ou OutillNoRefSAP complet
    };
    // Supprimer les IDs qui ne font plus partie de l'objet final (ToolRequest)
    delete resolvedBaseRequest.demandeurId;
    delete resolvedBaseRequest.toolReference;

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
  // // POST - Créer une demande outillage SBO
  // http.post('api/tools/request/SBO', async ({ request }) => {
    
  //   return HttpResponse.json(newSBO, { status: 201 });
  // }),

  // Simuler un délai réseau (optionnel)
  http.get('/api/slow-endpoint', async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return HttpResponse.json({ message: 'Réponse après 2 secondes' });
  }),

  // Simuler une erreur
  http.get('/api/error', () => {
    return HttpResponse.json(
      { error: 'Une erreur est survenue' },
      { status: 500 }
    );
  }),
];