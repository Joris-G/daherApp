import { Injectable } from '@angular/core';
import { ToolRequest, ToolRequestIri, MaintenanceItem, SpecMaintRep, SpecMaintRepIri, SpecCtrl, SpecCtrlIri }
  from 'src/app/_interfaces/tooling/tool-request';
import { environment } from 'src/environments/environment';
import { RequestService } from 'src/app/core/services/request.service';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { AuthService } from 'src/app/core/services/users/auth.service';
import { UsersService } from 'src/app/core/services/users/users.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, concat, concatMap, debounceTime, finalize, map, mergeMap, share, takeUntil } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ToolRequestService {
  public loading$: Observable<boolean>;
  private loadingSubject = new BehaviorSubject<boolean>(false);
  constructor(
    private requestService: RequestService,
    private toolService: ToolService,
    private userService: UsersService,
    private authService: AuthService,
  ) {
    this.loading$ = this.loadingSubject.asObservable();
  }

  loadMaintenanceData(id: string) {
    return this.getToolRequest(id)
      .pipe(
        concatMap(
          request => this.getMaintenance(request.maintenance.id)
            .pipe(
              map(specMaint => ({ request, specMaint }))
            )
        )
      );
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

  createControlRequest(toolRequestToCreate: SpecCtrl) {
    const toolRequestToCreateIri: SpecCtrlIri = {
      id: toolRequestToCreate.id ?? null,
      outillage: toolRequestToCreate.outillage ? this.toolService.getIri(toolRequestToCreate.outillage) : '',
      dateBesoin: toolRequestToCreate.dateBesoin,
      description: toolRequestToCreate.description,
      image: '',
      fichier: '',
      refPlan: toolRequestToCreate.refPlan,
      indPlan: toolRequestToCreate.indPlan,
      cheminCAO: toolRequestToCreate.cheminCAO,
      detailsControle: toolRequestToCreate.detailsControle,
      tolerances: toolRequestToCreate.tolerances,
      dispoOut: toolRequestToCreate.dispoOut,
      typeRapport: toolRequestToCreate.typeRapport,
      ligneBudgetaire: toolRequestToCreate.ligneBudgetaire,
      // userCreat: this.userService.getIri(this.authService.authUser),
    };
    return this.requestService.createPostRequest(`${environment.toolApi}controles`, toolRequestToCreateIri);
  }


  createMaintenanceRequest(toolRequestToCreate: SpecMaintRep) {
    return new Promise<any>((resolve, reject) => {
      this.createAllMaintenaceItems(toolRequestToCreate)
        .then((maintenanceItemIri: string[]) => {
          console.log(maintenanceItemIri);
          const toolRequestToCreateIri: SpecMaintRepIri = {
            id: toolRequestToCreate.id ?? null,
            outillage: toolRequestToCreate.outillage ? this.toolService.getIri(toolRequestToCreate.outillage) : '',
            dateBesoin: toolRequestToCreate.dateBesoin,
            // userCreat: this.userService.getIri(this.authService.authUser),
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
    return this.requestService.createPatchRequest(`${environment.toolApi}demandes/${toolRequestToUpdateIri.id}`, toolRequestToUpdateIri);
  }

  updateControlRequest(toolRequestToUpdate: SpecCtrl) {
    const toolRequestToCreateIri: SpecCtrlIri = {
      id: toolRequestToUpdate.id,
      outillage: toolRequestToUpdate.outillage ? this.toolService.getIri(toolRequestToUpdate.outillage) : '',
      dateBesoin: toolRequestToUpdate.dateBesoin,
      refPlan: toolRequestToUpdate.refPlan,
      indPlan: toolRequestToUpdate.indPlan,
      cheminCAO: toolRequestToUpdate.cheminCAO,
      description: toolRequestToUpdate.description,
      detailsControle: toolRequestToUpdate.detailsControle,
      tolerances: toolRequestToUpdate.tolerances,
      dispoOut: toolRequestToUpdate.dispoOut,
      ligneBudgetaire: toolRequestToUpdate.ligneBudgetaire,
      interventionDate: toolRequestToUpdate.interventionDate,
      moyenMesure: toolRequestToUpdate.moyenMesure,
      infosComplementaire: toolRequestToUpdate.infosComplementaire,
      visaControleur: toolRequestToUpdate.visaControleur,
      typeRapport: toolRequestToUpdate.typeRapport,
    };
    console.log(toolRequestToCreateIri);
    return this.requestService.createPatchRequest(`${environment.toolApi}controles/${toolRequestToCreateIri.id}`, toolRequestToCreateIri);
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

  updateMainteanceRequest(toolRequestToUpdate: SpecMaintRep) {
    return new Promise((resolve, reject) => {
      this.updateMaintenanceItems(toolRequestToUpdate.itemActionCorrective)
        .then((responseMaintenanceItems) => {
          responseMaintenanceItems.map((maintenanceItem$) => {
            maintenanceItem$.subscribe((maintenanceItem) => {
              toolRequestToUpdate.itemActionCorrective = maintenanceItem;
              console.log(toolRequestToUpdate.itemActionCorrective);
            });
          });
          console.log(toolRequestToUpdate.itemActionCorrective);
          const maintenanceItemIri = toolRequestToUpdate.itemActionCorrective
            .map((item => '/api/maintenance_items/' + item.id));
          const toolRequestToCreateIri: SpecMaintRepIri = {
            id: toolRequestToUpdate.id ?? null,
            outillage: toolRequestToUpdate.outillage ? this.toolService.getIri(toolRequestToUpdate.outillage) : '',
            dateBesoin: toolRequestToUpdate.dateBesoin,
            userCreat: this.userService.getIri(toolRequestToUpdate.userCreat),
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

  getToolRequests(): Observable<any> {
    this.loadingSubject.next(true);
    return this.requestService.createGetRequest(`${environment.toolApi}demandes`)
      .pipe(
        share(),
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      );
    // .subscribe(requests => this.requestsSubject.next(requests));
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
  private createAllMaintenaceItems(toolRequestToCreate: SpecMaintRep) {
    const maintenanceItemIri: string[] = [];
    return new Promise<string[]>((resolve, reject) => {
      toolRequestToCreate.itemActionCorrective.forEach((itemAction: MaintenanceItem) => {
        console.log(itemAction);
        this.requestService.createPostRequest(`${environment.toolApi}maintenance_items`, itemAction)
          .subscribe((response: MaintenanceItem) => {
            maintenanceItemIri.push(`/api/maintenance_items/${response.id}`);
            console.log(maintenanceItemIri.length, toolRequestToCreate.itemActionCorrective.length);
            if (maintenanceItemIri.length === toolRequestToCreate.itemActionCorrective.length) {
              resolve(maintenanceItemIri);
            }
          },
            (err) => {
              reject();
            });
      });

    });
  }
}
