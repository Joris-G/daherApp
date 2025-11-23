import { http, HttpResponse } from 'msw';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { Tool, ToolCreation } from 'src/app/_interfaces/tooling/tool';
import { RequestType, SpecSBO, SpecSBOCreation, ToolRequest, ToolRequestCreation } from 'src/app/_interfaces/tooling/tool-request-types';
import { User } from 'src/app/_interfaces/user';
import { mockToolRequests } from './mockData/mockToolRequest.mock';
import { mockTools } from './mockData/mockTools.mock';
import { mockUsers } from './mockData/mockUser.mock';


// Données mockées
const mockProgrammesAvion: ProgrammeAvion[] = [
 {client:'AIRBUS', designation:'MLGD-900',id:1},
  {client:'AIRBUS', designation:'MLGD-1000',id:2},
  {client:'AIRBUS', designation:'A330',id:3},
  {client:'GULFSTREAM', designation:'G600 ELEVATOR',id:4},
];

const mockSBO: SpecSBO[] = [
  {
    id: 1,
    title: 'Titre Test',
    description: 'Description Test',
    aircraftProgram: '1',
    dateBesoin: new Date()
  }
]

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
    const newToolRequest = await request.json() as ToolRequestCreation;
    const toolRequest: ToolRequest = {
      id: mockToolRequests.length + 1,
      ...newToolRequest
    };
    mockToolRequests.push(toolRequest);
    console.log(mockToolRequests,RequestType.SBO    );
    
    switch (toolRequest.type) {
      case RequestType.SBO:
        const newSpecSBO = newToolRequest.typeData as SpecSBOCreation;
        const newSBO: SpecSBO = {
          id: mockSBO.length + 1,
          ...newSpecSBO
        };
        mockSBO.push(newSBO);
        break;
    
      default:
        break;
    }
    console.log(mockSBO);
    return HttpResponse.json(toolRequest, { status: 201 });
  }),
  http.get('/api/tools/request', async ({ request }) => {
    return HttpResponse.json(mockToolRequests, { status: 201 });
  }),
  http.get('/api/tools/request/:id', async ({ request, params }) => {
    const { id } = params;
    return HttpResponse.json(mockToolRequests[+id - 1], { status: 201 });
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