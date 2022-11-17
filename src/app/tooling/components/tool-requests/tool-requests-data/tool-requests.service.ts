import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { RequestService } from 'src/app/core/services/request.service';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ToolRequestsService {
  public filtersList: Subject<ToolRequest[]>
  private toolRequestsList$: Observable<ToolRequest[]>;
  constructor(
    private requestService: RequestService,
  ) {
    this.getToolRequests()
    this.toolRequestsList$ = this.requestService.createGetRequest(`${environment.toolApi}demandes`);
  }

  getToolRequests(page?: number, itemsPerPage?: number): Observable<ToolRequest[]> {
    return this.requestService.createGetRequest(`${environment.toolApi}demandes`);
  }
}
