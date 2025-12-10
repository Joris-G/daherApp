import { http, HttpResponse } from "msw";
import { Service, ServiceCreation } from "src/app/_interfaces/service";
import { mockServices } from "../mockData/mockService.mock";

export const servicesHandlers = [
      // POST - Créer un outillage
  http.post('/api/services', async ({ request }) => {
    const newServiceId = mockServices.length + 1;
    const newService = await request.json() as ServiceCreation;
    const service: Service = {
      id: newServiceId,
      ...newService
    };
    mockServices.push(service);

    return HttpResponse.json(service, { status: 201 });
  }),
          // GET -
    http.get('/api/services', async () => {
      const serviceList: Service[] = mockServices;
      
      return HttpResponse.json(serviceList, { status: 201 });
    }),
]