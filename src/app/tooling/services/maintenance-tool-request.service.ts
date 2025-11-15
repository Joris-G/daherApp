import { Injectable } from '@angular/core';
import { forkJoin, Observable, of } from 'rxjs';
import { RequestService } from 'src/app/shared/services/request.service';
import { MaintenanceItem, SpecMaintRep, SpecMaintRepIri, ToolRequest } from 'src/app/_interfaces/tooling/tool-request-types';
import { environment } from 'src/environments/environment';
import { concatMap, finalize, map } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { ToolRequestService } from './tool-request.service';
import { ActivatedRoute } from '@angular/router';
@Injectable()
export class MaintenanceToolRequestService {
    constructor(
        private requestService: RequestService,
        private loaderService: LoadingService,
        private toolReqService: ToolRequestService,
    ) { }


    // private updateMaintenanceItems(maintenanceItemsToUpdate: MaintenanceItem[]): Observable<any[]> {
    //     return of(maintenanceItemsToUpdate)
    //         .pipe(
    //             mergeMap(
    //                 (items) =>
    //                     forkJoin(items.map(
    //                         (item) => {
    //                             if (item.id) {
    //                                 return this.requestService.createPutRequest(`${environment.toolApi}maintenance_items/${item.id}`, item);
    //                             } else {
    //                                 return this.requestService.createPostRequest(`${environment.toolApi}maintenance_items`, item);
    //                             }
    //                         }))
    //             ));
    // }

    updateMainteanceRequest(toolRequestToUpdate: SpecMaintRep): Observable<void> {
        return of();
        //     return this.updateMaintenanceItems(toolRequestToUpdate.itemActionCorrective)
        //         .pipe(
        //             switchMap(
        //                 (responseMaintenanceItems) => {
        //                     toolRequestToUpdate.itemActionCorrective = responseMaintenanceItems;
        //                     const maintenanceItemIri = toolRequestToUpdate.itemActionCorrective
        //                         .map((item => '/api/maintenance_items/' + item.id));
        //                     const toolRequestToCreateIri: SpecMaintRepIri = {
        //                         id: toolRequestToUpdate.id ?? null,
        //                         // outillage: toolRequestToUpdate.outillage ? this.toolService.getIri(toolRequestToUpdate.outillage) : '',
        //                         // dateBesoin: toolRequestToUpdate.dateBesoin,
        //                         userCreat: this.userService.getIri(toolRequestToUpdate.userCreat),
        //                         itemActionCorrective: maintenanceItemIri
        //                     };
        //                     return this.requestService.createPutRequest(
        //                         environment.toolApi + 'maintenances/' + toolRequestToCreateIri.id,
        //                         toolRequestToCreateIri);
        //                 }
        //             )
        //         );
    }

    createMaintenanceRequest(toolRequestToCreate: SpecMaintRep) {
        return new Promise<any>((resolve, reject) => {
            this.createAllMaintenaceItems(toolRequestToCreate)
                .then((maintenanceItemIri: string[]) => {
                    const toolRequestToCreateIri: SpecMaintRepIri = {
                        id: toolRequestToCreate.id ?? null,
                        // outillage: toolRequestToCreate.outillage ? this.toolService.getIri(toolRequestToCreate.outillage) : '',
                        // dateBesoin: toolRequestToCreate.dateBesoin,
                        // userCreat: this.userService.getIri(this.authService.authUser),
                        rep: toolRequestToCreate.rep,
                        itemActionCorrective: maintenanceItemIri,
                        // ligneBudgetaire: toolRequestToCreate.ligneBudgetaire,

                    };
                    this.requestService.createPostRequest(`${environment.toolApi}maintenances`, toolRequestToCreateIri)
                        .subscribe((res) => {
                            resolve(res);
                        });

                });
        });

    }
    getMaintenanceData(idDemande: string | null) {
        this.loaderService.startLoading('Patienter pendant le chargement du controle');
        return this.toolReqService.getToolRequest(idDemande)
            .pipe(
                concatMap((responseToolRequest) => {
                    const id = responseToolRequest.maintenance?.id;
                    return forkJoin([of(responseToolRequest), this.getMaintenance(id)]);
                }),
                finalize(() => this.loaderService.stopLoading())
            );
    }


    loadMaintenanceData(id: string | null) {
        this.loaderService.startLoading('Patienter pendant le chargement');
        return this.toolReqService.getToolRequest(id)
            .pipe(
                concatMap(
                    request => this.getMaintenance(request.maintenance.id)
                        .pipe(
                            map(specMaint => ({ request, specMaint }))
                        )
                ),
                finalize(() => this.loaderService.stopLoading())
            );
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

    private getMaintenance(id: number): Observable<SpecMaintRep | undefined> {
        if (!id) { return of(new SpecMaintRep()); }
        return this.requestService.createGetRequest(`${environment.toolApi}maintenances/${id}`);
    }

}
