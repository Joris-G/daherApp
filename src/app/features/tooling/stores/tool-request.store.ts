
import { Injectable, signal, computed, inject } from '@angular/core';
import { delay, finalize, switchMap, take, tap } from 'rxjs';
import { ToolRequestService } from '../../../tooling/services/tool-request.service';
import { SpecSBORequest,  } from '../models/sbo.model';
import { Tool, ToolCreation } from '../models/tool.model';
import { ToolService } from '../../../tooling/services/tool.service';
import { ToolRequest, ToolRequestCreation, ToolRequestState, ToolRequestUpdate } from '../models/tool-request.model';

@Injectable({
  providedIn: 'root',
})
/**
 * Store pour la gestion de l'état et des actions liées à la création et à la modification
 * de demandes d'outillage (SBO).
 */
export class ToolRequestStore {
  // ============================================================================
  // SÉLECTEURS (Signals en Lecture Seule)
  // ============================================================================

  /** Indique si un outil est en cours de création. */
  public readonly isCreatingTool = computed(() => this.state().isCreatingTool);

  /** Indique si la demande est en cours de soumission. */
  public readonly isCreatingRequest = computed(() => this.state().isCreatingRequest);

  /** Indique si la demande est soumise avec succes */
  public readonly isCreatingSuccess = computed(() => this.state().isCreatingSuccess);

  /** Indique si la demande est mise à jour avec succes */
  public readonly isUpdateSuccess = computed(() => this.state().isUpdateSuccess);

  /** L'outil qui a été créé et est lié à la demande. */
  public readonly selectedTool = computed(() => this.state().selectedTool);

  /** Message d'erreur s'il y a eu un problème dans une des étapes. */
  public readonly error = computed(() => this.state().error);

  /** La demande en cours d'édition. */
  public readonly currentToolRequest = computed(() => this.state().currentToolRequest); // 👈 Nouveau

  /** Indique si une demande existante est en cours de chargement (pour l'édition). */
  public readonly isLoadingRequest = computed(() => this.state().isLoadingRequest); // 👈 Nouveau

  /** Indique si la demande est en cours de mise à jour. */
  public readonly isUpdatingRequest = computed(() => this.state().isUpdatingRequest); // 👈 Nouveau

  public readonly canEdit = computed(() => this.state().canEdit);
  public readonly canManage = computed(() => this.state().canManage);
  public readonly canUpdate = computed(() => this.state().canUpdate);

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
    selectedTool: null,
    error: null,
    currentToolRequest: null,
    isLoadingRequest: false,
    isUpdatingRequest: false,
    isCreatingSuccess: false,
    isUpdateSuccess: false,
    canEdit: true,
    canManage: false,
    canUpdate: false,
  });

  // ============================================================================
  // MUTATIONS (Méthodes Publiques d'Action)
  // ============================================================================

  /**
   * Crée un nouvel outil en base de données.
   * Met à jour l'état `createdTool` en cas de succès.
   * @param {ToolCreation} toolData - Les données de création de l'outil.
   */
  public createTool(toolData: ToolCreation): void {
    this.updateState({ isCreatingTool: true, error: null });

    this.toolService.createTool(toolData).pipe(
      tap((tool) => {
        this.updateState({ selectedTool: tool });
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
   * @param {ToolRequestCreation} toolRequest - Les données de la demande d'outillage.
   * @param {ToolCreation} toolData - Les données de création de l'outil.
   */
  public createToolRequest(toolRequest: ToolRequestCreation, toolData: ToolCreation): void {
    this.resetCreationState();
    this.updateState({ isCreatingRequest: true, error: null });
    this.toolService.createTool(toolData)
      .pipe(
        delay(300),
      take(1),
      switchMap((createdTool: Tool) => {
        toolRequest.tool = createdTool;
        return this.toolRequestService.createToolRequest(toolRequest);
      }),
      finalize(() => this.updateState({ isCreatingRequest: false })
      )
    ).subscribe({
      next: () => this.updateState({ isCreatingSuccess: true }),
      error: (error) => {
        console.error('Erreur lors de la création de la demande:', error);
        this.updateState({ error: 'Erreur lors de la création de la demande.' });
      },
    });
  }

  /**
   * Charge une demande existante par son ID pour l'édition.
   * @param {string} requestId - L'ID de la demande.
   */
  public loadToolRequest(requestId: string): void {
    this.updateState({ isLoadingRequest: true, error: null, currentToolRequest: null });

    this.toolRequestService.getToolRequest<SpecSBORequest>(requestId).pipe(
      finalize(() => this.updateState({ isLoadingRequest: false }))
    ).subscribe({
      next: (request) => {
        if (request) {
          this.updateState({ currentToolRequest: request, selectedTool: request.tool, canEdit:this.currentToolRequest().statut ==='Nouvelle'  });
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

  // eslint-disable-next-line jsdoc/no-undefined-types
  /**
   * Met à jour une demande d'outillage existante.
   * @param requestToUpdate - Les données de mise à jour.
   */
  public updateToolRequest<
    ToolRequestUpdateType extends ToolRequestUpdate,
    ToolRequestReturnType extends ToolRequest>(requestToUpdate: ToolRequestUpdateType): void {
    const currentId = this.currentToolRequest()?.id;
    if (!currentId) {
      this.updateState({ error: 'ID de demande manquant pour la mise à jour.' });
      return;
    }

    this.updateState({ isUpdatingRequest: true, error: null });

    this.toolRequestService.updateToolRequest<ToolRequestUpdateType, ToolRequestReturnType>(currentId, requestToUpdate).pipe(
      finalize(() => this.updateState({ isUpdatingRequest: false }))
    ).subscribe({
      next: () => {
        console.log(`Demande ${currentId} mise à jour avec succès`);
        this.updateState({ isUpdateSuccess : true });
        // Optionnel: Recharger la liste des demandes ici via ToolRequestListStore si vous l'avez
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour de la demande:', error);
        this.updateState({ error: 'Erreur lors de la mise à jour de la demande.', isCreatingSuccess: false });
      },
    });
  }

  /**
   * Définit l'outil créé manuellement (utilisé par le composant si nécessaire).
   * @param {Tool | null} tool - L'outil créé ou null.
   */
  // public setCreatedTool(tool: Tool): void {
  //   this.updateState({ selectedTool: tool });
  // }

  /**
   * Réinitialise l'état de création de l'outil et de la requête.
   */
  public resetCreationState(): void {
    this.updateState({
      selectedTool: null,
      isCreatingTool: false,
      isCreatingSuccess: false,
      isCreatingRequest: false,
      currentToolRequest: null,
      isUpdatingRequest: false,
      isUpdateSuccess:false,
      isLoadingRequest:false,
      error: null
    });
  }

  // ============================================================================
  // MÉTHODE INTERNE DE GESTION D'ÉTAT (Simule patchState)
  // ============================================================================

  /**
   * Met à jour une partie de l'état interne de manière immuable.
   * @param {Partial<ToolRequestState>} newState - Le sous-ensemble des propriétés de l'état à mettre à jour.
   */
  private updateState(newState: Partial<ToolRequestState>): void {
    this.state.update(current => ({
      ...current,
      ...newState
    }));
  }
}
