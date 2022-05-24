import { Injectable } from '@angular/core';
import { SpecCtrl, SpecCtrlIri } from 'src/app/_interfaces/tooling/spec-ctrl';
import { MaintenanceItem, SpecMaintRep, SpecMaintRepIri } from 'src/app/_interfaces/tooling/spec-maint-rep';
import { ToolRequest, ToolRequestIri } from 'src/app/_interfaces/tooling/tool-request';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/_services/request.service';
import { ToolService } from 'src/app/_services/tooling/tools/tool.service';
import { AuthService } from 'src/app/_services/users/auth.service';
import { UsersService } from 'src/app/_services/users/users.service';
import { Observable } from 'rxjs';

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
    return this.requestService.createPostRequest(`${environment.toolApi}demandes`, toolRequestToCreate);
  }

  createControlRequest(toolRequestToCreate: SpecCtrl) {
    const toolRequestToCreateIri: SpecCtrlIri = {
      id: toolRequestToCreate.id ?? null,
      outillage: toolRequestToCreate.OT ? this.toolService.getIri(toolRequestToCreate.OT) : '',
      dateBesoin: toolRequestToCreate.dateBesoin,
      userCreat: this.userService.getIri(this.authService.authUser),
      refPlan: toolRequestToCreate.refPlan,
      indPlan: toolRequestToCreate.indPlan,
      cheminCAO: toolRequestToCreate.cheminCAO,
      description: toolRequestToCreate.description,
      detailsControle: toolRequestToCreate.detailsControle,
      tolerances: toolRequestToCreate.tolerances,
      dispoOut: toolRequestToCreate.dispoOut,
      ligneBudgetaire: toolRequestToCreate.ligneBudgetaire,
      typeRapport: toolRequestToCreate.typeRapport,
    };
    return this.requestService.createPostRequest(`${environment.toolApi}controles`, toolRequestToCreateIri);
  }

  createAllMaintenaceItems(toolRequestToCreate: SpecMaintRep) {
    const maintenanceItemIri: string[] = [];
    return new Promise<string[]>((resolve, reject) => {
      toolRequestToCreate.itemActionCorrective.forEach((itemAction: MaintenanceItem) => {
        this.requestService.createPostRequest(`${environment.toolApi}maintenance_items`, itemAction)
          .subscribe((response: MaintenanceItem) => {
            maintenanceItemIri.push(`/api/maintenance_items/${response.id}`);
            console.log(maintenanceItemIri.length, toolRequestToCreate.itemActionCorrective.length);
            if (maintenanceItemIri.length === toolRequestToCreate.itemActionCorrective.length) {
              resolve(maintenanceItemIri);
            }
          });
      });

    });
  }

  createMaintenanceRequest(toolRequestToCreate: SpecMaintRep) {
    return new Promise<any>((resolve, reject) => {
      this.createAllMaintenaceItems(toolRequestToCreate)
        .then((maintenanceItemIri: string[]) => {
          console.log(maintenanceItemIri);
          const toolRequestToCreateIri: SpecMaintRepIri = {
            id: toolRequestToCreate.id ?? null,
            outillage: toolRequestToCreate.OT ? this.toolService.getIri(toolRequestToCreate.OT) : '',
            dateBesoin: toolRequestToCreate.dateBesoin,
            userCreat: this.userService.getIri(this.authService.authUser),
            rep: toolRequestToCreate.rep,
            itemActionCorrective: maintenanceItemIri,
            // ligneBudgetaire: toolRequestToCreate.ligneBudgetaire,

          };
          console.log(toolRequestToCreateIri);
          this.requestService.createPostRequest(`${environment.toolApi}maintenances`, toolRequestToCreateIri)
            .subscribe((res) => {
              resolve(res);
            });

        });
    });

  }

  updateRequest(toolRequestToUpdate: ToolRequest) {
    const toolRequestToUpdateIri: ToolRequestIri = {
      statut: toolRequestToUpdate.statut,
      createdAt: toolRequestToUpdate.createdAt,
      id: toolRequestToUpdate.id
    };
    return this.requestService.createPutRequest(`${environment.toolApi}demandes/${toolRequestToUpdateIri.id}`, toolRequestToUpdateIri);
  }

  updateControlRequest(toolRequestToUpdate: ToolRequest) {
    const toolRequestToCreateIri: SpecCtrlIri = {
      id: toolRequestToUpdate.controle.id ?? null,
      outillage: toolRequestToUpdate.controle.OT ? this.toolService.getIri(toolRequestToUpdate.controle.OT) : '',
      dateBesoin: toolRequestToUpdate.dateBesoin,
      userCreat: this.userService.getIri(toolRequestToUpdate.controle.demandeur),
      refPlan: toolRequestToUpdate.controle.refPlan,
      indPlan: toolRequestToUpdate.controle.indPlan,
      cheminCAO: toolRequestToUpdate.controle.cheminCAO,
      description: toolRequestToUpdate.controle.description,
      detailsControle: toolRequestToUpdate.controle.detailsControle,
      tolerances: toolRequestToUpdate.controle.tolerances,
      dispoOut: toolRequestToUpdate.controle.dispoOut,
      ligneBudgetaire: toolRequestToUpdate.controle.ligneBudgetaire,
      interventionDate: toolRequestToUpdate.controle.interventionDate,
      moyenMesure: toolRequestToUpdate.controle.moyenMesure,
      infosComplementaire: toolRequestToUpdate.controle.infosComplementaire,
      visaControleur: toolRequestToUpdate.controle.visaControleur,
      typeRapport: toolRequestToUpdate.controle.typeRapport,
    };
    console.log(toolRequestToCreateIri);
    return this.requestService.createPutRequest(`${environment.toolApi}controles/${toolRequestToCreateIri.id}`, toolRequestToCreateIri);
  }

  async updateMaintenanceItems(maintenanceItemsToUpdate: MaintenanceItem[]) {
    const arrProm = maintenanceItemsToUpdate.map(item => {
      if (item.id) {
        return this.requestService.createPutRequest(`${environment.toolApi}maintenance_items/${item.id}`, item);
      } else {
        return this.requestService.createPostRequest(`${environment.toolApi}maintenance_items`, item);
      }
    });
    return Promise.all(arrProm);
  }

  updateMainteanceRequest(toolRequestToUpdate: ToolRequest) {
    return new Promise((resolve, reject) => {
      this.updateMaintenanceItems(toolRequestToUpdate.maintenance.itemActionCorrective)
        .then((responseMaintenanceItems) => {
          responseMaintenanceItems.map((maintenanceItem$) => {
            maintenanceItem$.subscribe((maintenanceItem) => {
              toolRequestToUpdate.maintenance.itemActionCorrective = maintenanceItem;
              console.log(toolRequestToUpdate.maintenance.itemActionCorrective);
            });
          });
          console.log(toolRequestToUpdate.maintenance.itemActionCorrective);
          const maintenanceItemIri = toolRequestToUpdate.maintenance.itemActionCorrective
            .map((item => '/api/maintenance_items/' + item.id));
          const toolRequestToCreateIri: SpecMaintRepIri = {
            id: toolRequestToUpdate.maintenance.id ?? null,
            outillage: toolRequestToUpdate.maintenance.OT ? this.toolService.getIri(toolRequestToUpdate.maintenance.OT) : '',
            dateBesoin: toolRequestToUpdate.dateBesoin,
            userCreat: this.userService.getIri(toolRequestToUpdate.maintenance.userCreat),
            itemActionCorrective: maintenanceItemIri
          };
          console.log(toolRequestToCreateIri);
          resolve(this.requestService.createPutRequest(
            environment.toolApi + 'maintenances/' + toolRequestToCreateIri.id,
            toolRequestToCreateIri));
        });
    });

  }

  getToolRequest(id): Observable<ToolRequest | undefined> {
    return this.requestService.createGetRequest(`${environment.toolApi}demandes/${id}`);
  }

  getToolRequests() {
    return this.requestService.createGetRequest(environment.toolApi + 'demandes');
  }


  getControl(id: number): Observable<SpecCtrl | undefined> {
    return this.requestService.createGetRequest(`${environment.toolApi}controles/${id}`);
  }


  getMaintenance(id: number): Observable<SpecMaintRep | undefined> {
    return this.requestService.createGetRequest(`${environment.toolApi}maintenances/${id}`);
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
