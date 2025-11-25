import { Component, computed, inject, signal } from '@angular/core';
import { NavController, IonicModule } from '@ionic/angular';
import { RequestStatus, SpecMaintRep, ToolRequest }
  from 'src/app/_interfaces/tooling/tool-request-types';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { MaintenanceToolRequestService } from '../../services/maintenance-tool-request.service';
import { RequestState, ToolRequestManager } from '../../services/tool-request-manager.service';
import { EMPTY } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MaintRepairFormComponent } from './maint-repair-form/maint-repair-form.component';
import { ToolRequestFooterComponent } from '../tool-request-footer/tool-request-footer.component';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';
import { FormGroup } from '@angular/forms';

// ============================================================================
// TYPE POUR LE MODE DU COMPOSANT
// ============================================================================

type ComponentMode = 'create' | 'edit' | 'view';
@Component({
    selector: 'app-maintenance-reparation',
    templateUrl: './maintenance-reparation.page.html',
    styleUrls: ['./maintenance-reparation.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        MaintRepairFormComponent,
        ToolRequestFooterComponent,
    ],
})
export class MaintenanceReparationPage {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly navCtrl = inject(NavController);
  private readonly formBuilder = inject(ToolRequestFormBuilder);
  private readonly maintenanceService = inject(MaintenanceToolRequestService);
  private readonly toolRequestService = inject(ToolRequestService);
  private readonly alertService = inject(AlertService);
  private readonly toolRequestManager = inject(ToolRequestManager);

  // ============================================================================
  // ÉTAT DU COMPOSANT (SIGNALS)
  // ============================================================================

  // Mode du composant
  mode = signal<ComponentMode>('create');

  // Données chargées
  toolRequest = signal<ToolRequest | null>(null);
  maintenance = signal<SpecMaintRep | null>(null);
  requestState = signal<RequestState | null>(null);

  // États de chargement/soumission
  isLoading = signal(true);
  isSubmitting = signal(false);
  errorMessage = signal<string | null>(null);

  // ID de la demande (en mode édition)
  private toolRequestId: string | null = null;


  // ============================================================================
  // FORMULAIRES
  // ============================================================================

  toolRequestForm!: FormGroup;
  maintenanceForm!: FormGroup;

  // ============================================================================
  // COMPUTED PROPERTIES
  // ============================================================================

  pageTitle = computed(() => {
    const mode = this.mode();
    const id = this.toolRequest()?.id;

    if (mode === 'create') {
      return 'Nouvelle demande Maintenance et Réparation';
    }
    if (mode === 'edit') {
      return `Modification demande de maintenance : ID ${id}`;
    }
    return `Demande de maintenance : ID ${id}`;
  });

  canEdit = computed(() => {
    const state = this.requestState();
    const mode = this.mode();

    // En mode création, toujours éditable
    if (mode === 'create') return true;

    // En mode édition, vérifier le statut
    return state?.canEdit ?? false;
  });

  canManage = computed(() => {
    const state = this.requestState();
    return state?.canManage ?? false;
  });

  canSubmit = computed(() => {
    return (
      !this.isSubmitting() &&
      this.toolRequestForm?.valid &&
      this.maintenanceForm?.valid
    );
  });

  // ============================================================================
  // LIFECYCLE
  // ============================================================================

  ngOnInit(): void {
    // Récupérer l'ID depuis la route (si présent)
    this.toolRequestId = this.route.snapshot.paramMap.get('id');

    if (this.toolRequestId) {
      // Mode édition
      this.mode.set('edit');
      this.loadMaintenanceData(this.toolRequestId);
    } else {
      // Mode création
      this.mode.set('create');
      this.initializeFormsForCreation();
      this.isLoading.set(false);
    }
  }

  // ============================================================================
  // INITIALISATION DES FORMULAIRES
  // ============================================================================

  /**
   * Initialise les formulaires pour la création
   */
  private initializeFormsForCreation(): void {
    this.toolRequestForm = this.formBuilder.createToolRequestForm({
      bloquantProd: false,
    });

    this.maintenanceForm = this.formBuilder.createSpecMaintenanceForm();
  }

  /**
   * Initialise les formulaires avec des données existantes (édition)
   */
  private initializeFormsForEdition(
    toolRequest: ToolRequest,
    maintenance: SpecMaintRep
  ): void {
    // Formulaire ToolRequest
    this.toolRequestForm = this.formBuilder.createToolRequestForm({
      // type: toolRequest.type,
      bloquantProd: toolRequest.bloquantProd,
      dateBesoin: toolRequest.dateBesoin,
      // groupeAffectation: toolRequest.groupeAffectation?.id,
      toolingNote: toolRequest.toolingNote,
    });

    // Formulaire Maintenance avec les items
    this.maintenanceForm = this.formBuilder.createSpecMaintenanceForm({
      sigle: maintenance.sigle,
      dateValid: maintenance.dateValid,
      userValideur: maintenance.userValideur?.id,
      itemActionCorrective: maintenance.itemActionCorrective,
    });

    // Mettre à jour les objets en signal
    this.toolRequest.set(toolRequest);
    this.maintenance.set(maintenance);
  }

  // ============================================================================
  // CHARGEMENT DES DONNÉES
  // ============================================================================

  private loadMaintenanceData(id: string): void {
    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.maintenanceService.loadMaintenanceData(id)
      .pipe(
        tap((data) => {
          console.log('✅ Données chargées:', data);

          // Calculer l'état de la demande
          const state = this.toolRequestManager.getStatus(data.toolRequest.statut);
          this.requestState.set(state);

          // Initialiser les formulaires avec les données
          this.initializeFormsForEdition(data.toolRequest, data.specMaintenance);
        }),
        catchError((error) => {
          console.error('❌ Erreur chargement:', error);
          this.errorMessage.set('Impossible de charger la demande de maintenance');
          this.alertService.simpleAlert(
            'Erreur',
            'Chargement',
            'Impossible de charger la demande. Retour à la liste.'
          ).then(() => {
            this.navigateToList();
          });
          return EMPTY;
        })
    )
      .subscribe(() => {
        this.isLoading.set(false);
      });
  }

  // ============================================================================
  // ACTIONS - CRÉATION
  // ============================================================================

  onSubmitCreate(): void {
    if (!this.canSubmit()) {
      this.toolRequestForm.markAllAsTouched();
      this.maintenanceForm.markAllAsTouched();
      this.errorMessage.set('Veuillez remplir tous les champs obligatoires');
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    // Construire l'objet SpecMaintenance
    const maintenanceData: SpecMaintRep = this.buildMaintenanceFromForm();

    this.maintenanceService.createMaintenanceRequest(maintenanceData)
      .pipe(
        tap((response) => {
          console.log('✅ Demande créée:', response);
        }),
        catchError((error) => {
          console.error('❌ Erreur création:', error);
          this.errorMessage.set('Erreur lors de la création de la demande');
          this.isSubmitting.set(false);
          return EMPTY;
        })
      )
      .subscribe((response) => {
        this.isSubmitting.set(false);

        this.alertService.simpleAlert(
          'Succès',
          'Création d\'une demande',
          'La demande a bien été créée. Vous allez être redirigé vers la liste des demandes'
        ).then(() => {
          this.navigateToList();
        });
      });
  }

  // ============================================================================
  // ACTIONS - MISE À JOUR
  // ============================================================================

  onSubmitUpdate(): void {
    if (!this.canSubmit() || !this.toolRequestId) {
      this.toolRequestForm.markAllAsTouched();
      this.maintenanceForm.markAllAsTouched();
      this.errorMessage.set('Veuillez remplir tous les champs obligatoires');
      return;
    }

    this.isSubmitting.set(true);
    this.errorMessage.set(null);

    // 1. Mettre à jour la ToolRequest
    const toolRequestData: Partial<ToolRequest> = {
      ...this.toolRequest(),
      ...this.toolRequestForm.value,
    };

    // 2. Mettre à jour la Maintenance
    const maintenanceData: SpecMaintRep = {
      ...this.maintenance(),
      ...this.buildMaintenanceFromForm(),
    };

    this.toolRequestService.updateToolRequest(toolRequestData)
      .pipe(
        // Puis mettre à jour la maintenance
        switchMap(() =>
          this.maintenanceService.updateMaintenanceRequest(maintenanceData)
        ),
        tap((response) => {
          console.log('✅ Demande mise à jour:', response);
        }),
        catchError((error) => {
          console.error('❌ Erreur mise à jour:', error);
          this.errorMessage.set('Erreur lors de la mise à jour de la demande');
          this.isSubmitting.set(false);

          this.alertService.simpleAlert(
            'Erreur',
            'Mise à jour d\'une demande',
            'La demande n\'a pas pu être modifiée. Vérifiez les données'
          );

          return EMPTY;
        })
      )
      .subscribe(() => {
        this.isSubmitting.set(false);

        this.alertService.simpleAlert(
          'Succès',
          'Mise à jour d\'une demande',
          'La demande a bien été modifiée. Vous allez être redirigé vers la liste des demandes'
        ).then(() => {
          this.navigateToList();
        });
      });
  }

  // ============================================================================
  // GESTION DES CHANGEMENTS
  // ============================================================================

  onStatutChange(newStatut: RequestStatus): void {
    this.toolRequestForm.patchValue({ statut: newStatut });
  }

  onAffectationChange(groupeAffectationId: number): void {
    this.toolRequestForm.patchValue({ groupeAffectation: groupeAffectationId });
  }

  // ============================================================================
  // NAVIGATION
  // ============================================================================

  onCancel(): void {
    this.alertService.presentAlertConfirm(
      'Confirmation',
      'Êtes-vous sûr de vouloir annuler ? Les modifications seront perdues.'
    ).then((confirmed: boolean) => {
      if (confirmed) {
        this.navigateToList();
      }
    });
  }

  private navigateToList(): void {
    this.navCtrl.navigateForward('tooling/tool-request-list');
  }

  // ============================================================================
  // HELPERS PRIVÉS
  // ============================================================================

  /**
   * Construit l'objet SpecMaintenance depuis les formulaires
   */
  private buildMaintenanceFromForm(): SpecMaintRep {
    const maintenanceFormValue = this.maintenanceForm.getRawValue();

    return {
      outillage: maintenanceFormValue.outillage,
      outillNoRefSAP: maintenanceFormValue.outillNoRefSAP,
      itemActionCorrective: maintenanceFormValue.itemActionCorrective,
      sigle: maintenanceFormValue.sigle,
      dateValid: maintenanceFormValue.dateValid,
      userValideur: maintenanceFormValue.userValideur,
      rep: maintenanceFormValue.rep,
    };
  }

  /**
   * Formatte une date pour l'affichage
   */
  formatDate(date: Date | string | undefined): string {
    if (!date) return '-';
    const d = new Date(date);
    return d.toLocaleDateString('fr-FR');
  }
}
