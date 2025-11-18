import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { concatMap, finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { SpecCtrl, ToolRequest } from 'src/app/_interfaces/tooling/tool-request-types';
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
        this.ctrlToolRequest$ = this.getControlData(id);
    }


    getControlData(idDemande: string | null) {
        return this.toolReqService.getToolRequest(idDemande)
            .pipe(
                concatMap((responseToolRequest) => {
                    const id = responseToolRequest.typeData?.id;
                    return forkJoin([of(responseToolRequest), this.getControl(id)])
                }),
                finalize(() => this.loaderService.stopLoading())
            );
    }


    //TODO modifer le type de retour ==> pas de any
    public createControlRequest(specCtrlToCreate: SpecCtrl): Observable<any> {
        this.loaderService.startLoading('Envoi de la demande en cours');
        return this.requestService.createPostRequest(`${environment.toolApi}controles`, specCtrlToCreate)
            .pipe(
                finalize(() => this.loaderService.stopLoading())
            );
    }




    updateControlRequest(ctrlToolRequestToUpdate: SpecCtrl, toolRequestToUpdate: ToolRequest): Observable<any> {
        this.loaderService.startLoading('Envoi de la demande en cours');
        this.toolReqService.updateToolRequest(toolRequestToUpdate);
        console.log(ctrlToolRequestToUpdate);
        return this.requestService.createPatchRequest(
            `${environment.toolApi}controles/${ctrlToolRequestToUpdate.id}`,
            ctrlToolRequestToUpdate)
            .pipe(
                finalize(() => this.loaderService.stopLoading())
            );
    }


    private getControl(id: number): Observable<SpecCtrl> {
        if (!id) { return of(new SpecCtrl()); }
        return this.requestService.createGetRequest(`${environment.toolApi}controles/${id}`) as Observable<SpecCtrl>;
    }
}
