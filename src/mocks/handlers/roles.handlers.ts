import { http, HttpResponse } from "msw";
import { mockUsine } from "../mockData/mockUsine.mock";
import { Usine, UsineCreation } from "src/app/_interfaces/usine";
import { Role, ROLE_LABELS, RoleCreation } from "src/app/_interfaces/roles";

export const rolesHandlers = [
      // POST - Créer une usine
  http.post('/api/roles', async ({ request }) => {
    const newRole = await request.json() as RoleCreation;

    return HttpResponse.json(newRole, { status: 201 });
  }),
        // GET -
  http.get('/api/roles', async ({ request }) => {
    const roleList = Object.values(ROLE_LABELS);
    
    return HttpResponse.json(roleList, { status: 201 });
  }),
]