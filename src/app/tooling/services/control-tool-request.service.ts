import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { concatMap, finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { SpecCtrl, SpecCtrlIri, ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { environment } from 'src/environments/environment';
import { ToolRequestService } from './tool-request.service';
import { ToolService } from './tool.service';
@Injectable()
export class ControlToolRequestService {
    ctrlToolRequest$: Observable<[ToolRequest, SpecCtrl]>;
    constructor(
        private loaderService: LoadingService,
        private requestService: RequestService,
        private toolReqService: ToolRequestService,
        private toolService: ToolService,
        private activatedRoute: ActivatedRoute,
    ) {

    }

    initCtrlToolRequest(): void {
        this.loaderService.startLoading('Patienter pendant le chargement du controle');
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        this.ctrlToolRequest$ = this.getControlData(id)
    }


    getControlData(idDemande: string | null) {
        return this.toolReqService.getToolRequest(idDemande)
            .pipe(
                concatMap((responseToolRequest) => {
                    const id = responseToolRequest.controle?.id;
                    return forkJoin([of(responseToolRequest), this.getControl(id)])
                }),
                finalize(() => this.loaderService.stopLoading())
            );
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
        this.loaderService.startLoading('Envoi de la demande en cours');
        return this.requestService.createPostRequest(`${environment.toolApi}controles`, toolRequestToCreateIri)
            .pipe(
                finalize(() => this.loaderService.stopLoading())
            );
    }
    updateControlRequest(ctrlToolRequestToUpdate: SpecCtrl, toolRequestToUpdate: ToolRequest) {
        this.toolReqService.updateRequest(toolRequestToUpdate)
        const toolRequestToCreateIri: SpecCtrlIri = {
            id: ctrlToolRequestToUpdate.id,
            outillage: ctrlToolRequestToUpdate.outillage ? this.toolService.getIri(ctrlToolRequestToUpdate.outillage) : '',
            dateBesoin: ctrlToolRequestToUpdate.dateBesoin,
            refPlan: ctrlToolRequestToUpdate.refPlan,
            indPlan: ctrlToolRequestToUpdate.indPlan,
            cheminCAO: ctrlToolRequestToUpdate.cheminCAO,
            description: ctrlToolRequestToUpdate.description,
            detailsControle: ctrlToolRequestToUpdate.detailsControle,
            tolerances: ctrlToolRequestToUpdate.tolerances,
            dispoOut: ctrlToolRequestToUpdate.dispoOut,
            ligneBudgetaire: ctrlToolRequestToUpdate.ligneBudgetaire,
            interventionDate: ctrlToolRequestToUpdate.interventionDate,
            moyenMesure: ctrlToolRequestToUpdate.moyenMesure,
            infosComplementaire: ctrlToolRequestToUpdate.infosComplementaire,
            visaControleur: ctrlToolRequestToUpdate.visaControleur,
            typeRapport: ctrlToolRequestToUpdate.typeRapport,
        };
        console.log(toolRequestToCreateIri);
        return this.requestService.createPatchRequest(`${environment.toolApi}controles/${toolRequestToCreateIri.id}`, toolRequestToCreateIri)
            .pipe(
                finalize(() => this.loaderService.stopLoading())
            );
    }


    private getControl(id: number): Observable<SpecCtrl> {
        if (!id) { return of(new SpecCtrl()) }
        return this.requestService.createGetRequest(`${environment.toolApi}controles/${id}`) as Observable<SpecCtrl>;
    }
}