import { Injectable, signal, computed, inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { ToolRequestService } from '../services/tool-request.service';
import { SpecSBOCreation, SpecSBOUpdate, ToolRequest } from '../tool-request-types';
import { Tool, ToolCreation } from '../tool';
import { ToolService } from '../services/tool.service';

/**
 * Interface d'état pour le ToolRequestStore.
 * Représente l'état interne du Store.
 * @interface ToolRequestState
 */
export interface ToolRequestState {
  isCreatingTool: boolean;
  isCreatingRequest: boolean;
  createdTool: Tool | null;
  error: string | null;
  currentToolRequest: ToolRequest | null; // 👈 Demande en cours de modification
  isLoadingRequest: boolean; // 👈 Chargement de la demande existante
  isUpdatingRequest: boolean; // 👈 Mise à jour de la demande
}

@Injectable({
  providedIn: 'root',
})
/**
 * Store pour la gestion de l'état et des actions liées à la création et à la modification 
 * de demandes d'outillage (SBO).
 */
export class ToolRequestStore {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  private readonly toolService = inject(ToolService);
  private readonly toolRequestService = inject(ToolRequestService);

  // ============================================================================
  // ÉTAT INTERNE (Signals Privés Modifiables)
  // ============================================================================
  private readonly state = signal<ToolRequestState>({
    isCreatingTool: false,
    isCreatingRequest: false,
    createdTool: null,
    error: null,
    currentToolRequest: null,
    isLoadingRequest: false,
    isUpdatingRequest: false,
  });

  // ============================================================================
  // SÉLECTEURS (Signals en Lecture Seule)
  // ============================================================================

  /** Indique si un outil est en cours de création. */
  public readonly isCreatingTool = computed(() => this.state().isCreatingTool);

  /** Indique si la demande est en cours de soumission. */
  public readonly isCreatingRequest = computed(() => this.state().isCreatingRequest);

  /** L'outil qui a été créé et est lié à la demande. */
  public readonly createdTool = computed(() => this.state().createdTool);

  /** Message d'erreur s'il y a eu un problème dans une des étapes. */
  public readonly error = computed(() => this.state().error);

  /** La demande en cours d'édition. */
  public readonly currentToolRequest = computed(() => this.state().currentToolRequest); // 👈 Nouveau

  /** Indique si une demande existante est en cours de chargement (pour l'édition). */
  public readonly isLoadingRequest = computed(() => this.state().isLoadingRequest); // 👈 Nouveau

  /** Indique si la demande est en cours de mise à jour. */
  public readonly isUpdatingRequest = computed(() => this.state().isUpdatingRequest); // 👈 Nouveau

  // ============================================================================
  // MUTATIONS (Méthodes Publiques d'Action)
  // ============================================================================

  /**
   * Crée un nouvel outil en base de données.
   * Met à jour l'état `createdTool` en cas de succès.
   * @param toolData - Les données de création de l'outil.
   */
  public createTool(toolData: ToolCreation): void {
    this.updateState({ isCreatingTool: true, error: null });

    this.toolService.createTool(toolData).pipe(
      tap((tool) => {
        this.updateState({ createdTool: tool });
      }),
      finalize(() => this.updateState({ isCreatingTool: false }))
    ).subscribe({
      error: (error) => {
        console.error('Erreur lors de la création de l\'outil:', error);
        this.updateState({ error: 'Erreur lors de la création de l\'outil.' });
      },
    });
  }

  /**
   * Soumet la demande d'outillage SBO.
   * @param toolRequest - Les données de la demande d'outillage.
   */
  public createToolRequest(toolRequest: SpecSBOCreation): void {
    this.updateState({ isCreatingRequest: true, error: null });

    this.toolRequestService.createToolRequest(toolRequest).pipe(
      finalize(() => this.updateState({ isCreatingRequest: false }))
    ).subscribe({
      next: () => {
        console.log('Demande créée avec succès');
        // Réinitialiser l'état après succès
        this.resetCreationState();
      },
      error: (error) => {
        console.error('Erreur lors de la création de la demande:', error);
        this.updateState({ error: 'Erreur lors de la création de la demande.' });
      },
    });
  }
  
  /**
     * Charge une demande existante par son ID pour l'édition.
     * @param requestId - L'ID de la demande.
     */
  public loadToolRequest(requestId: string): void {
    this.updateState({ isLoadingRequest: true, error: null, currentToolRequest: null });

    this.toolRequestService.getToolRequest(requestId).pipe(
      finalize(() => this.updateState({ isLoadingRequest: false }))
    ).subscribe({
      next: (request) => {
        if (request) {
          this.updateState({ currentToolRequest: request, createdTool: request.tool });
        } else {
          this.updateState({ error: `Demande avec ID ${requestId} non trouvée.` });
        }
      },
      error: (error) => {
        console.error('Erreur lors du chargement de la demande:', error);
        this.updateState({ error: 'Erreur lors du chargement de la demande.' });
      },
    });
  }
  /**
     * Met à jour une demande d'outillage SBO existante.
     * @param requestToUpdate - Les données de mise à jour.
     */
  public updateToolRequest(requestToUpdate: SpecSBOUpdate): void {
    const currentId = this.currentToolRequest()?.id;
    if (!currentId) {
      this.updateState({ error: 'ID de demande manquant pour la mise à jour.' });
      return;
    }

    this.updateState({ isUpdatingRequest: true, error: null });

    this.toolRequestService.updateToolRequest(requestToUpdate).pipe(
      finalize(() => this.updateState({ isUpdatingRequest: false }))
    ).subscribe({
      next: () => {
        console.log(`Demande ${currentId} mise à jour avec succès`);
        this.resetCreationState();
        // Optionnel: Recharger la liste des demandes ici via ToolRequestListStore si vous l'avez
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour de la demande:', error);
        this.updateState({ error: 'Erreur lors de la mise à jour de la demande.' });
      },
    });
  }

  /**
   * Définit l'outil créé manuellement (utilisé par le composant si nécessaire).
   * @param tool - L'outil créé ou null.
   */
  public setCreatedTool(tool: Tool | null): void {
      this.updateState({ createdTool: tool });
  }

  /**
   * Réinitialise l'état de création de l'outil et de la requête.
   */
  public resetCreationState(): void {
    this.updateState({
      createdTool: null,
      isCreatingTool: false,
      isCreatingRequest: false,
      currentToolRequest: null,
      isUpdatingRequest: false,
      error: null
    });
  }

  // ============================================================================
  // MÉTHODE INTERNE DE GESTION D'ÉTAT (Simule patchState)
  // ============================================================================

  /**
   * Met à jour une partie de l'état interne de manière immuable.
   * @param newState - Le sous-ensemble des propriétés de l'état à mettre à jour.
   */
  private updateState(newState: Partial<ToolRequestState>): void {
    this.state.update(current => ({
      ...current,
      ...newState
    }));
  }
}