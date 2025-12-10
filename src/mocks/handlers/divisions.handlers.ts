import { http, HttpResponse } from "msw";
import { mockDivision } from "../mockData/mockDivision.mock";
import { Division, DivisionCreation } from "src/app/_interfaces/division";

export const divisionsHandlers = [
      // POST - Créer un outillage
  http.post('/api/divisions', async ({ request }) => {
    const newDivisionId = mockDivision.length + 1;
    const newDivision = await request.json() as DivisionCreation;
    const division: Division = {
      id: newDivisionId,
      ...newDivision
    };
    mockDivision.push(division);

    return HttpResponse.json(division, { status: 201 });
  }),
          // GET -
    http.get('/api/divisions', async () => {
      const divisionList: Division[] = mockDivision;
      
      return HttpResponse.json(divisionList, { status: 201 });
    }),
]