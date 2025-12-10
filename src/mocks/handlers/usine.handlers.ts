import { http, HttpResponse } from "msw";
import { mockUsine } from "../mockData/mockUsine.mock";
import { Usine, UsineCreation } from "src/app/_interfaces/usine";

export const usinesHandlers = [
      // POST - Créer une usine
  http.post('/api/usines', async ({ request }) => {
    const newUsineId = mockUsine.length + 1;
    const newUsine = await request.json() as UsineCreation;
    const usine: Usine = {
      id: newUsineId,
      ...newUsine
    };
    mockUsine.push(usine);

    return HttpResponse.json(usine, { status: 201 });
  }),
        // GET -
  http.get('/api/usines', async ({ request }) => {
    const usineList = mockUsine;
    
    return HttpResponse.json(usineList, { status: 201 });
  }),
]