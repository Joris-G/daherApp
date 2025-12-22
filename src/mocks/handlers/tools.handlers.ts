import { http, HttpResponse } from "msw";
import { mockTools } from "../mockData/mockTools.mock";
import { Tool, ToolCreation } from "src/app/tooling/tool";
import { HttpErrorResponse } from "@angular/common/http";

export const toolsHandlers = [
      // POST - Créer un outillage
  http.post('/api/tools', async ({ request }) => {
    const newToolId = mockTools.length + 1;
    const newTool = await request.json() as ToolCreation;
    const tool: Tool = {
      id: newToolId,
      ...newTool
    };
    mockTools.push(tool);

    return HttpResponse.json(tool, { status: 201 });
  }),
  // GET - Trouver un outillage
  http.get('/api/tools', ({ request, params }) => {
    const url = new URL(request.url);
    const sapToolNumber = url.searchParams.get('sapToolNumber');
    console.log(sapToolNumber);
    if (!sapToolNumber) {
      return HttpResponse.json(mockTools, { status: 200 });
    }
    //TODO il cherche le chiffre alors que les sapToolNumber c'est OT ...
    const responseTool = mockTools.find(mockTool => mockTool.sapToolNumber === sapToolNumber);
    console.log(responseTool);
    if (responseTool) {

      return HttpResponse.json(responseTool, { status: 200 });
    }

    return HttpResponse.error();

  }),
]