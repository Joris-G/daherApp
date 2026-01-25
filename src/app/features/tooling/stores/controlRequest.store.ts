import { Injectable, signal, computed, inject } from '@angular/core';
import { delay, finalize,  take } from 'rxjs';
import { ToolRequestService } from '../../../tooling/services/tool-request.service';
import { SpecCtrlCreation, SpecCtrlRequest, SpecCtrlUpdate } from '../models/controle-3d-request.model';
import { cantEdit, RequestStatus, ToolRequestState } from '../models/tool-request.model';


@Injectable({
  providedIn: 'root',
})
/**
 * Store pour la gestion de l'état et des actions liées à la création et à la modification
 * de demandes d'outillage (SBO).
 */
export class ControlRequestStore {

  // ============================================================================
  // SÉLECTEURS (Signals en Lecture Seule)
  // ============================================================================


  /** Indique si la demande est en cours de soumission. */
  public readonly isCreatingRequest = computed(() => this.state().isCreatingRequest);

  /** Indique si la demande est en cours de soumission. */
  public readonly isCreatingSuccess = computed(() => this.state().isCreatingSuccess);

  /** L'outil qui a été créé et est lié à la demande. */
  public readonly selectedTool = computed(() => this.state().selectedTool);

  /** Message d'erreur s'il y a eu un problème dans une des étapes. */
  public readonly error = computed(() => this.state().error);

  /** La demande en cours d'édition. */
  public readonly currentControlRequest = computed(() => this.state().currentToolRequest); // 👈 Nouveau

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
  private readonly toolRequestService = inject(ToolRequestService);
  // ============================================================================
  // ÉTAT INTERNE (Signals Privés Modifiables)
  // ============================================================================
  private readonly state = signal<ToolRequestState<SpecCtrlRequest>>({
    isNewTool: false,
    isCreatingRequest: false,
    isLoadingRequest: false,
    isUpdatingRequest: false,
    isCreatingSuccess: false,
    selectedTool: null,
    error: null,
    currentToolRequest: null,
    canEdit: true,
    canManage: false,
    canUpdate: false,
    isCreatingTool:false,
    isUpdateSuccess:false
  });


  // ============================================================================
  // MUTATIONS (Méthodes Publiques d'Action)
  // ============================================================================

  /**
   * Soumet la demande de controle d'outillage.
   * @param {SpecCtrlCreation} controlRequest - Les données de la demande de controle.
   */
  public createControlRequest(controlRequest: SpecCtrlCreation): void {
    this.updateState({ isCreatingRequest: true, error: null });
    this.toolRequestService.createToolRequest<SpecCtrlCreation, SpecCtrlRequest>(controlRequest)
    .pipe(
        delay(300),
        take(1),
      finalize(() => {
        this.updateState({ isCreatingRequest: false });
        console.log('finalize creating');
      })
)
    .subscribe({
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
  public loadControlRequest(requestId: string): void {
    this.updateState({ isLoadingRequest: true, error: null, currentToolRequest: null });
    this.toolRequestService.getToolRequest<SpecCtrlRequest>(requestId).pipe(
      finalize(() => this.updateState({ isLoadingRequest: false }))
    ).subscribe({
      next: (request) => {
        if (request) {
          this.updateState({ currentToolRequest: request, selectedTool: request.tool , canEdit: !cantEdit(request.statut)});
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
   * Met à jour une demande d'outillage existante.
   * @param {SpecCtrlUpdate} requestToUpdate - Les données de mise à jour.
   */
  public updateToolRequest(requestToUpdate: SpecCtrlUpdate): void {
    const currentId = this.currentControlRequest()?.id;
    if (!currentId) {
      this.updateState({ error: 'ID de demande manquant pour la mise à jour.' });
      return;
    }

    this.updateState({ isUpdatingRequest: true, error: null });

    this.toolRequestService.updateToolRequest<SpecCtrlUpdate, SpecCtrlRequest>(currentId, requestToUpdate).pipe(
      finalize(() => this.updateState({ isUpdatingRequest: false }))
    ).subscribe({
      next: () => {
        console.log(`Demande ${currentId} mise à jour avec succès`);
        this.resetCreationState();
        // Optionnel: Recharger la liste des demandes ici via ToolRequestListStore si vous l'avez
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour de la demande:', error);
        this.updateState({ error: 'Erreur lors de la mise à jour de la demande.', isCreatingSuccess: false });
      },
    });
  }

  /**
   * Réinitialise l'état de création de l'outil et de la requête.
   */
  public resetCreationState(): void {
    this.updateState({
      selectedTool: null,
      isCreatingSuccess: false,
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
   * @param {Partial<ControlRequestState>} newState - Le sous-ensemble des propriétés de l'état à mettre à jour.
   */
  private updateState(newState: Partial<ToolRequestState<SpecCtrlRequest>>): void {
    this.state.update(current => ({
      ...current,
      ...newState
    }));
  }
}

