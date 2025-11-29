import { computed, inject, Injectable, signal } from '@angular/core';
import { finalize, take } from 'rxjs/operators';
import { ToolRequestService } from '../services/tool-request.service';
import { ToolRequest } from '../tool-request-types';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';

/**
 * Interface d'état pour le ToolRequestListStore.
 * @interface ToolRequestListState
 */
export interface ToolRequestListState {
  toolRequestList: ToolRequest[];
  isLoadingList: boolean;
  error: string | null;
}

@Injectable({
  providedIn: 'root',
})
/**
 * Store pour la gestion de l'état (liste, chargement, erreur) des demandes d'outillage.
 */
export class ToolRequestListStore {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  private readonly toolRequestService = inject(ToolRequestService);
  private readonly loaderService = inject(LoadingService); // Injecter le loader ici, car il est lié à l'API

  // ============================================================================
  // ÉTAT INTERNE (Signals Privés Modifiables)
  // ============================================================================
  private readonly state = signal<ToolRequestListState>({
    toolRequestList: [],
    isLoadingList: false,
    error: null,
  });

  // ============================================================================
  // SÉLECTEURS (Signals en Lecture Seule)
  // ============================================================================

  /** Liste complète des demandes d'outillage. */
  public readonly toolRequestList = computed(() => this.state().toolRequestList);

  /** Indique si la liste est en cours de chargement. */
  public readonly isLoadingList = computed(() => this.state().isLoadingList);

  /** Message d'erreur lié au chargement de la liste. */
  public readonly error = computed(() => this.state().error);

  // ============================================================================
  // LIFECYCLE / INITIALISATION
  // ============================================================================

  constructor() {
    console.log("ToolRequestListStore initialized");
    // Initialisation automatique au démarrage du Store
    // this.loadToolRequests();
  }

  // ============================================================================
  // MUTATIONS (Méthodes Publiques d'Action)
  // ============================================================================

  /**
   * Charge la liste complète des demandes d'outillage depuis l'API.
   * Met à jour l'état du Store.
   */
  public loadToolRequests(): void {
    // 1. Mise à jour de l'état de chargement
    this.updateState({ isLoadingList: true, error: null });
    this.loaderService.startLoading('Chargement des demandes');

    // 2. Appel au service API
    this.toolRequestService.getToolRequests().pipe(
      // take(1),
      finalize(() => {
        this.updateState({ isLoadingList: false });
        this.loaderService.stopLoading();
      })
    ).subscribe({
      next: (requests) => {
        // 3. Mise à jour de l'état avec les données reçues
        this.updateState({ toolRequestList: requests });
      },
      error: (error) => {
        console.error('Erreur lors du chargement des demandes:', error);
        // 4. Mise à jour de l'état en cas d'erreur
        this.updateState({ 
          toolRequestList: [], 
          error: 'Erreur lors du chargement des demandes.' 
        });
      },
    });
  }

  // ============================================================================
  // MÉTHODE INTERNE DE GESTION D'ÉTAT
  // ============================================================================

  /**
   * Met à jour une partie de l'état interne de manière immuable.
   * @param newState - Le sous-ensemble des propriétés de l'état à mettre à jour.
   */
  private updateState(newState: Partial<ToolRequestListState>): void {
    this.state.update(current => ({
      ...current,
      ...newState
    }));
  }
}