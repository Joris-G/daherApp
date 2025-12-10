import { http, HttpResponse } from "msw";
import { mockTools } from "../mockData/mockTools.mock";
import { Tool, ToolCreation } from "src/app/tooling/tool";

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
]