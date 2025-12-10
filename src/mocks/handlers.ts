import { http, HttpResponse } from 'msw';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { authHandlers } from './handlers/auth.handlers';
import { userHandlers } from './handlers/users.handlers';
import { toolsHandlers } from './handlers/tools.handlers';
import { toolRequestHandlers } from './handlers/toolRequest.handlers';
import { usinesHandlers } from './handlers/usine.handlers';
import { divisionsHandlers } from './handlers/divisions.handlers';
import { servicesHandlers } from './handlers/services.handlers';
import { rolesHandlers } from './handlers/roles.handlers';


// Données mockées
const mockProgrammesAvion: ProgrammeAvion[] = [
 {client:'AIRBUS', designation:'MLGD-900',id:1},
  {client:'AIRBUS', designation:'MLGD-1000',id:2},
  {client:'AIRBUS', designation:'A330',id:3},
  {client:'GULFSTREAM', designation:'G600 ELEVATOR',id:4},
];


// Définition des handlers
export const handlers = [
  ...authHandlers,
  ...userHandlers,
  ...toolsHandlers,
  ...toolRequestHandlers,
  ...usinesHandlers,
  ...divisionsHandlers,
  ...servicesHandlers,
  ...rolesHandlers,

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