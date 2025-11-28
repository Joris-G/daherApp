import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable, of } from 'rxjs';
import { concatMap, finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { SpecCtrl, ToolRequest } from 'src/app/tooling/tool-request-types';
import { environment } from 'src/environments/environment';
import { ToolRequestService } from './tool-request.service';
import { ToolService } from './tool.service';

@Injectable({ providedIn: "root" })
export class ControlToolRequestService {
    ////////////////////////////////////////////////////
    //INJECTION DEPENDANCES
    ////////////////////////////////////////////////////
    private readonly loaderService: LoadingService = inject(LoadingService);
    private readonly requestService: RequestService = inject(RequestService);
    private readonly toolReqService: ToolRequestService = inject(ToolRequestService);
    private readonly toolService: ToolService = inject(ToolService);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    ctrlToolRequest$: Observable<[ToolRequest, SpecCtrl]>;
    constructor(

    ) {

    }

    initCtrlToolRequest(): void {
        console.log("hello init ctrl tool request");
        this.loaderService.startLoading('Patienter pendant le chargement du controle test');
        const id = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.ctrlToolRequest$ = this.getControlData(id);
    }


    getControlData(idDemande: string | null) {
        console.log("hello get control data");
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
