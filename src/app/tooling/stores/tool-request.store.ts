import { Injectable, signal, computed, inject } from '@angular/core';
import { finalize, tap } from 'rxjs';
import { ToolRequestService } from '../services/tool-request.service';
import { SpecSBOCreation } from '../tool-request-types';
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
}

@Injectable({
  providedIn: 'root',
})
/**
 * Store pour la gestion de l'état et des actions liées à la création de demandes d'outillage (SBO).
 * Il gère la création de l'outil associé et la soumission de la demande en utilisant les Signals natifs d'Angular.
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
    this.updateState({ createdTool: null, isCreatingTool: false, isCreatingRequest: false, error: null });
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