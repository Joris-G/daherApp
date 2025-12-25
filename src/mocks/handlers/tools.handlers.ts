import { http, HttpResponse } from "msw";
import { mockTools } from "../mockData/mockTools.mock";
import { Tool, ToolCreation } from "src/app/features/tooling/models/tool.model";

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
  http.get('/api/tools', ({ request }) => {
    const url = new URL(request.url);
    const searchTerms = url.searchParams.getAll('search').map(s => s.toLowerCase());

    const page = parseInt(url.searchParams.get('page') || '1', 10);
    const limit = parseInt(url.searchParams.get('limit') || '10', 10);
    const startIndex = (page - 1) * limit;


    if (searchTerms.length === 0) {
      return HttpResponse.json(mockTools, { status: 200 });
    }


    const filteredTools = mockTools.filter(tool => {
      return searchTerms.every(term => {
        return (
          tool.sapToolNumber?.toLowerCase().includes(term) ||
          tool.identification?.toLowerCase().includes(term) ||
          tool.designation?.toLowerCase().includes(term)
        );
      });
    });
    const paginatedResults = filteredTools.slice(startIndex, startIndex + limit);

    if (filteredTools) return HttpResponse.json(paginatedResults, { status: 200, headers: { 'X-Total-Count': filteredTools.length.toString() } });

    return HttpResponse.error();

  }),
]