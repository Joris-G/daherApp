import { inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { RequestService } from 'src/app/shared/services/request.service';
import { environment } from 'src/environments/environment';
import { ToolRequestService } from './tool-request.service';
import { ToolRequest } from '../models/tool-request.model';
import { SpecCtrlCreation, SpecCtrlRequest, SpecCtrlUpdate } from 'src/app/features/tooling/control-request/models/controle-3d-request.model';

@Injectable({ providedIn: "root" })
export class ControlToolRequestService {
    ////////////////////////////////////////////////////
    //INJECTION DEPENDANCES
    ////////////////////////////////////////////////////
    private readonly loaderService: LoadingService = inject(LoadingService);
    // private readonly requestService: RequestService = inject(RequestService);
    private readonly toolRequestService: ToolRequestService = inject(ToolRequestService);
    private readonly activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    ctrlToolRequest$: Observable<ToolRequest>;
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


    getControlData(idDemande: string | null): Observable<SpecCtrlRequest> {
        console.log("hello get control data");
        return this.toolRequestService.getToolRequest<SpecCtrlRequest>(idDemande)
            .pipe(
                finalize(() => this.loaderService.stopLoading())
            );
    }


    //TODO modifer le type de retour ==> pas de any
    createControlRequest(specCtrlToCreate: SpecCtrlCreation): Observable<SpecCtrlRequest> {
        this.loaderService.startLoading('Envoi de la demande en cours');
        return this.toolRequestService.createToolRequest<SpecCtrlCreation, SpecCtrlRequest>(specCtrlToCreate)
            .pipe(
                finalize(() => this.loaderService.stopLoading())
            );
    }




    updateControlRequest(specCtrlId: number, ctrlToolRequestToUpdate: SpecCtrlUpdate): Observable<SpecCtrlRequest> {
        this.loaderService.startLoading('Envoi de la demande en cours');
        return this.toolRequestService.updateToolRequest<SpecCtrlUpdate, SpecCtrlRequest>(specCtrlId, ctrlToolRequestToUpdate)
            .pipe(
                finalize(() => this.loaderService.stopLoading())
            );
    }


    // private getControl(id: number): Observable<SpecCtrlRequest> {
    //     return this.toolRequestService.getToolRequest(`${environment.toolApi}controles/${id}`);
    // }
}
