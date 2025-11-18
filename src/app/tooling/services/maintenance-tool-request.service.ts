import { inject, Injectable } from '@angular/core';
import { forkJoin, Observable, of, throwError } from 'rxjs';
import { MaintenanceItem, SpecMaintRep, ToolRequest } from 'src/app/_interfaces/tooling/tool-request-types';
import { environment } from 'src/environments/environment';
import { catchError, concatMap, finalize, map, switchMap, tap } from 'rxjs/operators';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { ToolRequestService } from './tool-request.service';
import { HttpClient } from '@angular/common/http';

// ============================================================================
// INTERFACES POUR LES RÉPONSES API
// ============================================================================

interface MaintenanceItemResponse extends MaintenanceItem {
    id: number;
}

interface MaintenanceResponse extends SpecMaintRep {
    id: number;
}

// interface MaintenanceRequestPayload {
//     toolRequest: ToolRequest;
//     specMaintenance: SpecMaintenance;
//     maintenanceItemsIris: string[];
// }

@Injectable()
export class MaintenanceToolRequestService {
    // ============================================================================
    // INJECTION DE DÉPENDANCES
    // ============================================================================
    private readonly http = inject(HttpClient);
    private readonly loaderService = inject(LoadingService);
    private readonly toolReqService = inject(ToolRequestService);

    // URLs API
    private readonly maintenanceUrl = `${environment.toolApi}maintenances`;
    private readonly maintenanceItemUrl = `${environment.toolApi}maintenance_items`;

    // ============================================================================
    // CRÉATION DE DEMANDE DE MAINTENANCE
    // ============================================================================

    /**
     * Crée une nouvelle demande de maintenance complète
     * 1. Crée tous les items de maintenance
     * 2. Crée la demande de maintenance avec les références des items
     */
    createMaintenanceRequest(
        maintenanceSpec: SpecMaintRep
    ): Observable<MaintenanceResponse> {
        this.loaderService.startLoading('Création de la demande de maintenance...');

        return this.createAllMaintenanceItems(maintenanceSpec.itemActionCorrective).pipe(
            switchMap((createdItems) => {
                // Construire le payload avec les IRIs des items créés
                const payload = this.buildMaintenancePayload(maintenanceSpec, createdItems);

                return this.http.post<MaintenanceResponse>(
                    this.maintenanceUrl,
                    payload
                );
            }),
            tap((response) => {
                console.log('✅ Demande de maintenance créée:', response);
            }),
            catchError((error) => {
                console.error('❌ Erreur lors de la création de la maintenance:', error);
                return throwError(() => new Error('Échec de la création de la demande de maintenance'));
            }),
            finalize(() => this.loaderService.stopLoading())
        );
    }

    // ============================================================================
    // MISE À JOUR DE DEMANDE DE MAINTENANCE
    // ============================================================================

    /**
     * Met à jour une demande de maintenance existante
     * 1. Met à jour ou crée les items de maintenance
     * 2. Met à jour la demande de maintenance
     */
    updateMaintenanceRequest(
        maintenanceSpec: SpecMaintRep
    ): Observable<MaintenanceResponse> {
        if (!maintenanceSpec.id) {
            return throwError(() => new Error('ID de maintenance manquant pour la mise à jour'));
        }

        this.loaderService.startLoading('Mise à jour de la demande de maintenance...');

        return this.updateOrCreateMaintenanceItems(maintenanceSpec.itemActionCorrective).pipe(
            switchMap((updatedItems) => {
                const payload = this.buildMaintenancePayload(maintenanceSpec, updatedItems);

                return this.http.put<MaintenanceResponse>(
                    `${this.maintenanceUrl}/${maintenanceSpec.id}`,
                    payload
                );
            }),
            tap((response) => {
                console.log('✅ Demande de maintenance mise à jour:', response);
            }),
            catchError((error) => {
                console.error('❌ Erreur lors de la mise à jour de la maintenance:', error);
                return throwError(() => new Error('Échec de la mise à jour de la demande de maintenance'));
            }),
            finalize(() => this.loaderService.stopLoading())
        );
    }

    // ============================================================================
    // CHARGEMENT DE DONNÉES DE MAINTENANCE
    // ============================================================================

    /**
     * Charge les données complètes d'une demande de maintenance
     * Retourne à la fois la ToolRequest et la SpecMaintenance
     */
    loadMaintenanceData(toolRequestId: string): Observable<{
        toolRequest: ToolRequest;
        specMaintenance: SpecMaintRep;
    }> {
        this.loaderService.startLoading('Chargement de la demande de maintenance...');

        return this.toolReqService.getToolRequest(toolRequestId).pipe(
            concatMap((toolRequest) => {
                if (!toolRequest.typeData.id) {
                    return throwError(() => new Error('Aucune maintenance associée à cette demande'));
                }

                return this.getMaintenance(toolRequest.typeData.id).pipe(
                    map((specMaintenance) => ({
                        toolRequest,
                        specMaintenance
                    }))
                );
            }),
            tap((data) => {
                console.log('✅ Données de maintenance chargées:', data);
            }),
            catchError((error) => {
                console.error('❌ Erreur lors du chargement de la maintenance:', error);
                return throwError(() => error);
            }),
            finalize(() => this.loaderService.stopLoading())
        );
    }

    /**
     * Charge uniquement les données de maintenance (sans la ToolRequest)
     */
    getMaintenance(maintenanceId: number): Observable<SpecMaintRep> {
        if (!maintenanceId) {
            return of(this.createEmptyMaintenance());
        }

        return this.http.get<MaintenanceResponse>(
            `${this.maintenanceUrl}/${maintenanceId}`
        ).pipe(
            catchError((error) => {
                console.error('❌ Erreur lors du chargement de la maintenance:', error);
                return of(this.createEmptyMaintenance());
            })
        );
    }

    // ============================================================================
    // GESTION DES ITEMS DE MAINTENANCE
    // ============================================================================

    /**
     * Crée tous les items de maintenance en parallèle
     * Utilise forkJoin pour attendre que tous soient créés
     */
    private createAllMaintenanceItems(
        items: MaintenanceItem[]
    ): Observable<MaintenanceItemResponse[]> {
        if (!items || items.length === 0) {
            return of([]);
        }

        const createRequests = items.map((item) =>
            this.http.post<MaintenanceItemResponse>(
                this.maintenanceItemUrl,
                this.cleanMaintenanceItem(item)
            ).pipe(
                tap((response) => {
                    console.log(`✅ Item de maintenance créé: #${response.id}`);
                }),
                catchError((error) => {
                    console.error('❌ Erreur création item:', error);
                    return throwError(() => error);
                })
            )
        );

        return forkJoin(createRequests);
    }

    /**
     * Met à jour les items existants ou crée les nouveaux
     */
    private updateOrCreateMaintenanceItems(
        items: MaintenanceItem[]
    ): Observable<MaintenanceItemResponse[]> {
        if (!items || items.length === 0) {
            return of([]);
    }

        const requests = items.map((item) => {
            const cleanedItem = this.cleanMaintenanceItem(item);

            if (item.id) {
                // Mise à jour d'un item existant
                return this.http.put<MaintenanceItemResponse>(
                    `${this.maintenanceItemUrl}/${item.id}`,
                    cleanedItem
                ).pipe(
                    tap((response) => {
                        console.log(`✅ Item de maintenance mis à jour: #${response.id}`);
                    })
                );
            } else {
                // Création d'un nouvel item
                return this.http.post<MaintenanceItemResponse>(
                    this.maintenanceItemUrl,
                    cleanedItem
                ).pipe(
                    tap((response) => {
                        console.log(`✅ Nouvel item de maintenance créé: #${response.id}`);
                    })
                );
            }
        });

        return forkJoin(requests).pipe(
            catchError((error) => {
                console.error('❌ Erreur lors de la gestion des items:', error);
                return throwError(() => error);
            })
        );
    }

    /**
     * Supprime un item de maintenance
     */
    deleteMaintenanceItem(itemId: number): Observable<void> {
        return this.http.delete<void>(
            `${this.maintenanceItemUrl}/${itemId}`
        ).pipe(
            tap(() => {
                console.log(`✅ Item de maintenance supprimé: #${itemId}`);
            }),
            catchError((error) => {
                console.error('❌ Erreur suppression item:', error);
                return throwError(() => error);
            })
        );
    }

    // ============================================================================
    // HELPERS PRIVÉS
    // ============================================================================

    /**
     * Construit le payload pour l'API de maintenance
     */
    private buildMaintenancePayload(
        maintenanceSpec: SpecMaintRep,
        items: MaintenanceItemResponse[]
    ): any {
        return {
            ...maintenanceSpec,
            itemActionCorrective: items.map((item) => `/api/maintenance_items/${item.id}`),
            // Convertir les références d'objets en IRIs si nécessaire
            outillage: maintenanceSpec.outillage
                ? (typeof maintenanceSpec.outillage === 'string'
                    ? maintenanceSpec.outillage
                    : `/api/tools/${maintenanceSpec.outillage.id}`)
                : null,
            userCreat: maintenanceSpec.userCreat
                ? (typeof maintenanceSpec.userCreat === 'string'
                    ? maintenanceSpec.userCreat
                    : `/api/users/${maintenanceSpec.userCreat.id}`)
                : null,
        };
    }

    /**
     * Nettoie un item de maintenance pour l'envoi à l'API
     * Supprime les propriétés calculées ou temporaires
     */
    private cleanMaintenanceItem(item: MaintenanceItem): Partial<MaintenanceItem> {
        const cleaned: any = { ...item };

        // Supprimer les propriétés qui ne doivent pas être envoyées
        delete cleaned.id; // L'ID est dans l'URL pour les PUT

        // Convertir les dates en format ISO si nécessaire
        if (cleaned.delaiAction) {
            cleaned.delaiAction = new Date(cleaned.delaiAction).toISOString();
        }
        if (cleaned.dateReal) {
            cleaned.dateReal = new Date(cleaned.dateReal).toISOString();
        }

        return cleaned;
    }

    /**
     * Crée un objet de maintenance vide
     */
    private createEmptyMaintenance(): SpecMaintRep {
        return {
            itemActionCorrective: [],
            rep: [],
            outillNoRefSAP: {
                description: '',
                identification: '',
                localisation: ''
            }
        };
    }

    /**
     * Convertit les items de maintenance en IRIs
     */
    private itemsToIris(items: MaintenanceItemResponse[]): string[] {
        return items.map((item) => `/api/maintenance_items/${item.id}`);
    }
}
