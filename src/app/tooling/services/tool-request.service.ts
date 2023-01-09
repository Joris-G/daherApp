import { Injectable } from '@angular/core';
import { ToolRequest, ToolRequestIri }
  from 'src/app/_interfaces/tooling/tool-request';
import { environment } from 'src/environments/environment';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { Observable, of } from 'rxjs';
import { catchError, finalize, share } from 'rxjs/operators';
import { RequestService } from 'src/app/shared/services/request.service';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ToolRequestService {


  constructor(
    private requestService: RequestService,
    private toolService: ToolService,
    private userService: UsersService,
    private loaderService: LoadingService,
    private router: Router,
  ) { }


  // initToolRequest(): void {
  //   const requestType: string = this.getToolRequestType();
  //   const id = this.activatedRoute.snapshot.paramMap.get('id');
  //   switch (requestType) {
  //     case "3D-tool":
  //       this.toolRequest$ = this.ctrlRequestService.getControlData(id)
  //       break;

  //     default:
  //       break;
  //   }
  // }


  //       this.page.title = 'Modification demande de contrôle 3D : ID ' + this.toolRequestForm.value.id;



  private getToolRequestType() {
    return this.router.url.split('/').pop();
  }


  getType(request: ToolRequest | string): string {
    if (typeof (request) === 'string') { return request; }
    if (request.controle) {
      return 'controle';
    } else if (request.maintenance) {
      return 'maintenance';
    }
  }

  createToolRequest(toolRequestToCreate: ToolRequest) {
    return this.requestService.createPostRequest(`${environment.toolApi}demandes`, toolRequestToCreate);
  }





  updateRequest(toolRequestToUpdate: ToolRequest) {
    const toolRequestToUpdateIri: ToolRequestIri = {
      statut: toolRequestToUpdate.statut,
      createdAt: toolRequestToUpdate.createdAt,
      id: toolRequestToUpdate.id
    };
    return this.requestService.createPatchRequest(`${environment.toolApi}demandes/${toolRequestToUpdateIri.id}`, toolRequestToUpdateIri);
  }


  getToolRequest(id: string): Observable<ToolRequest | undefined> {
    return (!id) ? of(new ToolRequest()) : this.requestService.createGetRequest(`${environment.toolApi}demandes/${id}`)
  }

  getToolRequests(): Observable<ToolRequest[]> {
    this.loaderService.startLoading('Chargement des demandes')
    return this.requestService.createGetRequest(`${environment.toolApi}demandes`)
      .pipe(
        share(),
        catchError(() => of([])),
        finalize(() => this.loaderService.stopLoading())
      );
  }





  removeRequest(request: ToolRequest) {
    return new Promise((resolve, reject) => {
      this.requestService.createDeleteRequest('demandes/' + request.id);
      // if (request.controle) {
      //   this.requestService.createDeleteRequest('controles/' + request.controle.id);
      // } else if (request.maintenance) {
      //   this.requestService.createDeleteRequest('maintenances/' + request.maintenance.id);
      // }
    });
  }

}
