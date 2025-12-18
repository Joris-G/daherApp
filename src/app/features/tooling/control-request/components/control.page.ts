import { Component, effect, inject, signal } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { ToolRequestManager } from '../../../../tooling/services/tool-request-manager.service';
import { Control3DFormComponent } from './control3-dform/control3-dform.component';
import { ToolRequestFooterComponent } from '../../components/tool-request-footer/tool-request-footer.component';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter } from '@ionic/angular/standalone';
import { ToolRequestService } from '../../../../tooling/services/tool-request.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';
import { FormGroup } from '@angular/forms';
import { filter, take } from 'rxjs';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { ToolFormComponent } from '../../../../tooling/components/create-tool/tool-form.component';
import { SpecCtrlRequest, SpecCtrlCreation, SpecCtrlUpdate } from '../models/controle-3d-request.model';
import { ControlRequestFormBuilder } from '../services/control-request.form-builder';
import { ControlRequestStore } from 'src/app/tooling/stores/controlRequest.store';
import { ToolInputComponent } from "../../components/tool-input/tool-input.component";


// TODO message d'erreurs en snack
@Component({
    selector: 'app-control',
    templateUrl: './control.page.html',
    styleUrls: ['./control.page.scss'],
    standalone: true,
  imports: [
    CardComponent,
    ToolFormComponent,
    Control3DFormComponent,
    ToolRequestFooterComponent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonFooter,
    ToolInputComponent
],
})
export class Control3DPage {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly formBuilderService = inject(ControlRequestFormBuilder);
  private readonly programService = inject(ProgramsService);
  private readonly router = inject(Router);
  protected readonly store = inject(ControlRequestStore);
  private readonly toolRequestService = inject(ToolRequestService);
  private readonly toolRequestManager: ToolRequestManager = inject(ToolRequestManager);
  private readonly loaderService: LoadingService = inject(LoadingService);
  private readonly alertService: AlertService = inject(AlertService);
  private readonly navCtrl: NavController = inject(NavController);
  private readonly activatedRoute = inject(ActivatedRoute);
  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================
  /** ID de la demande en cours de modification (null en mode création). */
  private requestId: string | null = null;

  /** Indique si la page est en mode édition. */
  protected isEditMode = signal<boolean>(false);

  /** Formulaire pour les spécifications controle outillage. */
  protected controlForm: FormGroup;

  /** Liste des programmes avion */
  // programs = signal<ProgrammeAvion[]>([]);

/** Configuration de la page */
  public page = {
    pageTitle: 'Création d\'une demande de controle 3D',
    menuTitle: 'Menu outillage',
    // menuItems: MENU_ITEMS,
    contentId: 'tooling-content'
  };

  // ============================================================================
  // SIGNALS (État réactif)
  // ============================================================================
  protected readonly canManage = this.store.canManage;
  protected readonly canUpdate = this.store.canUpdate;

  // protected readonly toolRequest = signal<ToolRequest | null>(null);
  // // protected readonly controlRequest = signal<ControlRequest | null>(null);
  // protected readonly requestState = signal<RequestState>(new RequestState());
  // protected readonly pageTitle = signal('Nouvelle demande de contrôle 3D');

  // readonly toolRequestId: string;

  // ============================================================================
  // LIFECYCLE HOOKS
  // ============================================================================
  constructor() {
    effect(() => {
      const toolRequest = this.store.currentControlRequest() as SpecCtrlRequest;
      // On vérifie le mode édition pour ne pas remplir le formulaire en mode création
      if (toolRequest && this.isEditMode()) {
        this.fillForm(toolRequest);
      }
    });
  }

  /**
     * Initialisation du composant.
     */
  ngOnInit(): void {
    this.initializeForms();
    // this.loadPrograms();


    // 1. Lire les paramètres de la route
    this.activatedRoute.params.pipe(
      filter(params => !!params['id']), // S'assurer que l'ID existe
      take(1)
    ).subscribe(params => {
      this.requestId = params['id'];
      console.log(this.requestId);
      if (this.requestId) {
        this.isEditMode.set(true);
        // this.page.pageTitle = `Modification de la demande ${this.requestId}`;
        this.loadToolRequestForEdit(this.requestId);
      }
    });

  }


  // ============================================================================
  // INITIALISATION DES FORMULAIRES
  // ============================================================================

  /**
   * Initialise les FormGroup nécessaires à la page.
   */
  private initializeForms(): void {
    this.controlForm = this.formBuilderService.createSpecCtrlForm();
  }

  // ============================================================================
  // CHARGEMENT DES DONNÉES
  // ============================================================================

  /**
   * Charge la liste des programmes avion.
   */
  private loadPrograms(): void {
    // this.programService.getPrograms().pipe(take(1)).subscribe({
    //   next: (programList) => {
    //     this.programs.set(programList);
    //   },
    //   error: (error) => {
    //     console.error('Erreur lors du chargement des programmes:', error);
    //     //TODO Vous pouvez ajouter un toast d'erreur ici
    //   }
    // });
  }

  // ionViewCanEnter() {

  //   this.toolRequestService.getToolRequest(this.requestId)
  //     .pipe(
  //       takeUntilDestroyed()
  //     )
  //     .subscribe({
  //       next: (toolRequest) => {
  //         this.toolRequest.set(toolRequest);
  //         this.requestState.set(
  //           this.toolRequestManager.getStatus(toolRequest.statut)
  //         );
  //       },
  //       error: (error) => this.handleError('Chargement de la demande', error)
  //     });
  // }


  // ============================================================================
  // HANDLERS D'ÉVÉNEMENTS
  // ============================================================================
  protected onSubmit() {
    if (this.controlForm.invalid) {
      this.controlForm.markAllAsTouched();
      return;
    }
    if (this.isEditMode()) {
      this.onUpdateToolRequest();
    } else {
      this.onCreateControlRequest();
    }
  }
  /**
 * Créer une demande d'outillage complète
 */
  private onCreateControlRequest() {
    // const toolData: ToolCreation = this.toolForm.value;
    const controlRequest: SpecCtrlCreation = {
      ...this.controlForm.value,
      type:'CONTROLE',
    };
    this.store.createControlRequest(controlRequest);
  }


  /**
     * Met à jour une demande d'outillage complète
     */
  private onUpdateToolRequest(): void {
    const currentRequest = this.store.currentControlRequest();
    if (!currentRequest || this.controlForm.invalid) {
      this.controlForm.markAllAsTouched();
      return;
    }

    // L'ID de la requête et l'ID de l'outil sont nécessaires pour la mise à jour
    const requestToUpdate: SpecCtrlUpdate = {
      id: currentRequest.id,
      // Assumer que l'outil ne change pas pour une SBO, ou qu'il est géré par la logique enfant
      toolId: currentRequest.tool.id,
      // Les valeurs du formulaire
      ...this.controlForm.value,
      // L'API attend peut-être un type
      type: 'SBO',

      // La logique de votre API pour l'UPDATE pourrait nécessiter plus de champs
    };

    this.store.updateToolRequest(requestToUpdate);

    // Redirection après succès (simplifié, devrait être géré par effect)
    this.router.navigate(['/tool-requests']);
  }


  // ============================================================================
  // MÉTHODES PRIVÉES
  // ============================================================================
  private handleError(operation: string, error: any) {
    console.error(`[Control3DPage] ${operation}:`, error);
    this.alertService.simpleAlert(
      'Erreur',
      operation,
      'Une erreur est survenue. Veuillez vérifier les données et réessayer.'
    );
    this.loaderService.stopLoading();
  }






  // ============================================================================
  // CHARGEMENT DES DONNÉES EN MODE ÉDITION
  // ============================================================================

  /**
   * Charge la demande existante via le Store et déclenche le préremplissage.
   * @param id - L'ID de la demande à charger.
   */
  private loadToolRequestForEdit(id: string): void {
    console.log("load ToolRequest for Edit");
    this.store.loadControlRequest(id);
  }
  /**
     * Préremplit le formulaire avec les données de la demande.
     * @param request - La demande d'outillage.
     */
  private fillForm(request: SpecCtrlRequest): void {
    const formattedDateBesoin = request.dateBesoin.toString().split('T')[0];
    this.controlForm.patchValue({
      description: request.description,
      dateBesoin: formattedDateBesoin,
      type: request.type,
      toolingNote: request.toolingNote,
      tool: request.tool,
    });
    // this.toolForm.patchValue({
    //   sapToolNumber: request.tool.sapToolNumber,
    //   identification: request.tool.identification,
    //   designation: request.tool.designation
    // })
    // L'outil est mis à jour dans le store: store.createdTool est initialisé
  }

}

