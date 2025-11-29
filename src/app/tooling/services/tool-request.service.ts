import { inject, Injectable } from '@angular/core';
import { RequestType, SpecCtrlCreation, SpecSBOCreation, ToolRequest }
  from 'src/app/tooling/tool-request-types';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
  /**
   * Service de communication avec l'API pour les demandes d'outillage (ToolRequest).
   * Ne gère plus l'état local (listes/signals).
   */
export class ToolRequestService {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly http: HttpClient = inject(HttpClient);

  // ============================================================================
  // MÉTHODES DE COMMUNICATION API
  // ============================================================================

 /**
   * Obtient la liste des demandes d'outillage.
   * @returns Un Observable de la liste des demandes.
   */
  getToolRequests(): Observable<ToolRequest[]> {
    // NOTE: Le loader est géré par le Store qui appelle cette méthode.
    return this.http.get<ToolRequest[]>(`api/tools/request`)
      .pipe(
        // On retire take/share/finalize/catchError ici, car c'est le Store qui gère le cycle de vie de l'abonnement
        catchError((error) => {
          // Lancer l'erreur pour que le Store la capture
          console.error('Erreur lors du chargement des demandes:', error);
          throw error;
        })
      );
  }

  /**
     * Crée une nouvelle demande d'outillage.
     * @param toolRequestToCreate - Les données de la demande.
     * @returns Un Observable de la demande créée.
     */
  createToolRequest(toolRequestToCreate: SpecSBOCreation | SpecCtrlCreation): Observable<ToolRequest> {
    return this.http.post<ToolRequest>(`api/tools/request`, toolRequestToCreate);
  }


  /**
     * Met à jour une demande d'outillage.
     * @param toolRequestToUpdate - La demande à mettre à jour.
     * @returns Un Observable de la réponse de l'API.
     */
  updateToolRequest(toolRequestToUpdate: Partial<ToolRequest>) {
    return this.http.patch(`${environment.toolApi}demandes/${toolRequestToUpdate.id}`, toolRequestToUpdate)
      .pipe(
        tap(() => {
          // NOTE: Le rafraîchissement doit être déclenché par le Store appelant
        })
      );
  }

  /**
     * Supprime une demande d'outillage.
     * @param request - La demande à supprimer.
     * @returns Un Observable de la réponse de l'API.
     */
  removeRequest(request: ToolRequest): Observable<any> {
    return this.http.delete(`demandes/${request.id}`)
      .pipe(
        tap(() => {
  // NOTE: Le rafraîchissement doit être déclenché par le Store appelant
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


  getToolRequest(id: string): Observable<ToolRequest | undefined> {
    console.log("get ToolRequest ", id);
    return this.http.get<ToolRequest>(`api/tools/request/${id}`);
  }


}
