import { Injectable } from '@angular/core';
import { SpecCtrl, SpecCtrlIri } from 'src/app/_interface/spec-ctrl';
import { ToolRequest } from 'src/app/_interface/tool-request';
import { environment } from 'src/environments/environment';
import { RequestService } from '../request.service';
import { ToolService } from '../tools/tool.service';
import { AuthService } from '../users/auth.service';
import { UsersService } from '../users/users.service';

@Injectable({
  providedIn: 'root'
})
export class ToolRequestService {



  constructor(
    private requestService: RequestService,
    private toolService: ToolService,
    private userService: UsersService,
    private authService: AuthService,
  ) { }

  getType(request: ToolRequest | string): string {
    if (typeof (request) === 'string') { return request; }
    if (request.controle) {
      return 'controle';
    } else if (request.maintenance) {
      return 'maintenance';
    }
  }

  createToolRequest(toolRequestToCreate: ToolRequest) {
    return this.requestService.createPostRequest(environment.toolApi + 'demandes', toolRequestToCreate);
  }

  createControlRequest(toolRequestToCreate: SpecCtrl) {
    const toolRequestToCreateIri: SpecCtrlIri = {
      id: toolRequestToCreate.id ?? null,
      outillage: toolRequestToCreate.outillage ? this.toolService.getIri(toolRequestToCreate.outillage) : '',
      dateBesoin: toolRequestToCreate.dateBesoin,
      userCreat: this.userService.getIri(this.authService.authUser),
      refPlan: toolRequestToCreate.refPlan,
      indPlan: toolRequestToCreate.indPlan,
      cheminCAO: toolRequestToCreate.cheminCAO,
      ctrlReasons: toolRequestToCreate.ctrlReasons,
      description: toolRequestToCreate.ctrlReasons,
      detailsControle: toolRequestToCreate.detailsControle,
      tolerances: toolRequestToCreate.tolerances,
      dispoOut: toolRequestToCreate.dispoOut,
      ligneBudgetaire: toolRequestToCreate.ligneBudgetaire,
      typeRapport: toolRequestToCreate.typeRapport,
    };
    return this.requestService.createPostRequest(environment.toolApi + 'controles', toolRequestToCreateIri);
  }

  updateControlRequest(toolRequestToUpdate: SpecCtrl) {
    const toolRequestToCreateIri: SpecCtrlIri = {
      id: toolRequestToUpdate.id ?? null,
      outillage: toolRequestToUpdate.outillage ? this.toolService.getIri(toolRequestToUpdate.outillage) : '',
      dateBesoin: toolRequestToUpdate.dateBesoin,
      userCreat: this.userService.getIri(this.authService.authUser),
      refPlan: toolRequestToUpdate.refPlan,
      indPlan: toolRequestToUpdate.indPlan,
      cheminCAO: toolRequestToUpdate.cheminCAO,
      ctrlReasons: toolRequestToUpdate.ctrlReasons,
      detailsControle: toolRequestToUpdate.detailsControle,
      tolerances: toolRequestToUpdate.tolerances,
      dispoOut: toolRequestToUpdate.dispoOut,
      ligneBudgetaire: toolRequestToUpdate.ligneBudgetaire,
      statut: toolRequestToUpdate.statut,
      interventionDate: toolRequestToUpdate.interventionDate,
      moyenMesure: toolRequestToUpdate.moyenMesure,
      infosComplementaire: toolRequestToUpdate.infosComplementaire,
      visaControleur: toolRequestToUpdate.visaControleur,
      typeRapport: toolRequestToUpdate.typeRapport,
    };
    return this.requestService.createPutRequest(environment.toolApi + 'controles/' + toolRequestToCreateIri.id, toolRequestToCreateIri);
  }

  getToolRequest(idRequest) {
    return this.requestService.createGetRequest(environment.toolApi + 'demandes/' + idRequest);
  }

  getToolRequests() {
    return this.requestService.createGetRequest(environment.toolApi + 'demandes');
  }

  getControl(idControle: number) {
    return this.requestService.createGetRequest(environment.toolApi + 'controles/' + idControle);
  }
}
