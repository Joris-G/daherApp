import { inject, Injectable, signal } from '@angular/core';
import { RequestType, ToolRequest, ToolRequestCreation }
  from 'src/app/_interfaces/tooling/tool-request-types';
import { environment } from 'src/environments/environment';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { Observable, of } from 'rxjs';
import { catchError, finalize, share, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users/users.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ToolRequestService {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly http: HttpClient = inject(HttpClient);
  private readonly loaderService: LoadingService = inject(LoadingService);
  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  public readonly toolRequestList = signal<ToolRequest[]>([])


  constructor(
    // private toolService: ToolService,
    // private userService: UsersService,

    // private router: Router,
  ) {
    console.log("hello toolRequestService");
    this.initializeToolRequests();
    // this.getToolRequests();
  }

  /**
     * Initialise les toolRequests au chargement du service
     */
  private initializeToolRequests(): void {
    this.getToolRequests().subscribe({
      next: (requests) => {
        this.toolRequestList.set(requests);
        console.log('ToolRequests initialisées:', requests);
      },
      error: (error) => {
        console.error('Erreur lors de l\'initialisation des toolRequests:', error);
        this.toolRequestList.set([]);
      }
    });
  }

  /**
    * Méthode publique pour recharger les toolRequests si nécessaire
    */
  public refreshToolRequests(): void {
    this.initializeToolRequests();
  }

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




  updateToolRequest(toolRequestToUpdate: Partial<ToolRequest>) {

    return this.http.patch(`${environment.toolApi}demandes/${toolRequestToUpdate.id}`, toolRequestToUpdate)
      .pipe(
        tap(() => {
          // Rafraîchir la liste après mise à jour
          this.refreshToolRequests();
        })
      );
  }

  getType(request: ToolRequest | string): string {
    if (typeof (request) === 'string') { return request; }
    if (request.type === RequestType.CONTROLE) {
      return 'controle';
    } else if (request.type === RequestType.MAINTENANCE) {
      return 'maintenance';
    }
  }

  createToolRequest(toolRequestToCreate: ToolRequestCreation): Observable<ToolRequest> {
    return this.http.post<ToolRequest>(`api/tools/request`, toolRequestToCreate);
  }







  getToolRequest(id: string): Observable<ToolRequest | undefined> {
    console.log("get ToolRequest ", id);
    return (!id) ? of(new ToolRequest()) : this.http.get<ToolRequest>(`api/tools/request/${id}`);
  }

  private getToolRequests(): Observable<ToolRequest[]> {
    this.loaderService.startLoading('Chargement des demandes');
    return this.http.get<ToolRequest[]>(`api/tools/request`)
      .pipe(
        share(),
        catchError((error) => {
          console.error('Erreur lors du chargement des demandes:', error);
          return of([]);
        }),
        finalize(() => this.loaderService.stopLoading())
      );
  }





  removeRequest(request: ToolRequest): Observable<any> {
    return this.http.delete(`demandes/${request.id}`)
      .pipe(
        tap(() => {
          // Rafraîchir la liste après suppression
          this.refreshToolRequests();
        })
      );
  }




  // private getToolRequestType() {
  //   return this.router.url.split('/').pop();
  // }

}
