import { Injectable } from '@angular/core';
import { ToolRequest } from 'src/app/_interface/tool-request';
import { RequestService } from '../request.service';

@Injectable({
  providedIn: 'root'
})
export class ToolRequestService {

  constructor(
    private requestService: RequestService
  ) { }

  createToolRequest(toolRequestToCreate: ToolRequest) {
    return this.requestService.createToolPostRequest('addToolRequest/', toolRequestToCreate);
  }
  getToolRequests() {
    return this.requestService.createGetToolRequest('tool-request');
  }
}
