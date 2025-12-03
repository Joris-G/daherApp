import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonContent, IonFooter, IonToolbar } from '@ionic/angular/standalone';
import { NgxEditorModule } from 'ngx-editor';
import { RequestType, SpecSBOCreation, SpecSBORequest, SpecSBOUpdate } from 'src/app/tooling/tool-request-types';
import { Tool, ToolCreation } from 'src/app/tooling/tool';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';
import { SboComponent } from '../sbo/sbo.component';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';
import { ToolFormComponent } from '../create-tool/tool-form.component';
import { ToolRequestStore } from '../../stores/tool-request.store';
import { filter, take } from 'rxjs';
import { SboFormComponent } from '../sbo-form/sbo-form.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';

const MENU_ITEMS = [
  {
    title: 'Nouvelle demande outillage',
    path: 'new-tool',
    type: 'button',
  },
  {
    title: 'Liste des demandes outillages',
    path: '/tool-requests',
    type: 'button',
  }
];

@Component({
  selector: 'app-new-tool',
  templateUrl: './new-tool.page.html',
  styleUrls: ['./new-tool.page.scss'],
  standalone: true,
  imports: [
    SboFormComponent,
    CardComponent,
    ReactiveFormsModule,
    NgxEditorModule,
    IonContent,
    IonFooter,
    IonToolbar,
    IonButton,
    ToolFormComponent,
    SboComponent,

  ],
})
  /**
   * Page de création d'une nouvelle demande d'outillage (SBO).
   * Elle orchestre la création de l'outil et la soumission de la demande via le ToolRequestStore.
   */
export class NewToolPage implements OnInit {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  private readonly formBuilderService = inject(ToolRequestFormBuilder);
  private readonly programService = inject(ProgramsService);
  private readonly router = inject(Router);
  protected readonly store = inject(ToolRequestStore);
  private readonly activatedRoute = inject(ActivatedRoute);
  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================
  /** ID de la demande en cours de modification (null en mode création). */
  private requestId: string | null = null; // 👈 Nouveau

  /** Indique si la page est en mode édition. */
  protected isEditMode = signal<boolean>(false); // 👈 Nouveau

  /** Formulaire pour les spécifications SBO. */
  protected specSboForm: FormGroup; // 👈 Reste ici
  /** Formulaire pour l'outil. */
  protected toolForm: FormGroup; // 👈 Reste ici (si non géré par le store)

  /** Configuration de la page */
  public page = {
    pageTitle: 'Création d\'une demande',
    menuTitle: 'Menu outillage',
    menuItems: MENU_ITEMS,
    contentId: 'tooling-content'
  };


  /** Liste des programmes avion */
  programs = signal<ProgrammeAvion[]>([]);

  /** Enum pour le template */
  readonly RequestType = RequestType;


  // ============================================================================
  // CONSTRUCTEUR
  // ============================================================================
  constructor() {
    effect(() => {
      const toolRequest = this.store.currentToolRequest() as SpecSBORequest;
      // On vérifie le mode édition pour ne pas remplir le formulaire en mode création
      if (toolRequest && this.isEditMode()) {
        this.fillForm(toolRequest);
      }
    });
    effect(() => {

    });
  }
  // ============================================================================
  // LIFECYCLE
  // ============================================================================

  /**
   * Initialisation du composant.
   */
  ngOnInit(): void {
    this.initializeForms();
    this.loadPrograms();


    // 1. Lire les paramètres de la route
    this.activatedRoute.params.pipe(
      filter(params => !!params['id']), // S'assurer que l'ID existe
      take(1)
    ).subscribe(params => {
      this.requestId = params['id'];
      console.log(this.requestId);
      if (this.requestId) {
        this.isEditMode.set(true);
        this.page.pageTitle = `Modification de la demande ${this.requestId}`;
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
    this.specSboForm = this.formBuilderService.createSpecSBOForm();
    this.toolForm = this.formBuilderService.createNewToolForm();
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
    this.store.loadToolRequest(id);
  }

  /**
   * Préremplit le formulaire avec les données de la demande.
   * @param request - La demande d'outillage.
   */
  private fillForm(request: SpecSBORequest): void {
    const formattedDateBesoin = request.dateBesoin.toString().split('T')[0];
    this.specSboForm.patchValue({
      title: request.title,
      description: request.description,
      dateBesoin: formattedDateBesoin,
      type: request.type,
      toolingNote: request.toolingNote,
      tool: request.tool
    });
    this.toolForm.patchValue({
      sapToolNumber: request.tool.sapToolNumber,
      identification: request.tool.identification,
      designation: request.tool.designation

    })
    // L'outil est mis à jour dans le store: store.createdTool est initialisé
  }

  // ============================================================================
  // CHARGEMENT DES DONNÉES
  // ============================================================================

  /**
   * Charge la liste des programmes avion.
   */
  private loadPrograms(): void {
    this.programService.getPrograms().pipe(take(1)).subscribe({
      next: (programList) => {
        this.programs.set(programList);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des programmes:', error);
        //TODO Vous pouvez ajouter un toast d'erreur ici
      }
    });
  }

  // ============================================================================
  // ACTIONS
  // ============================================================================

  /**
     * Gère la soumission du formulaire : Création ou Mise à jour.
     */
  protected onSubmit(): void {
    if (this.toolForm.invalid || this.specSboForm.invalid) {
      this.toolForm.markAllAsTouched();
      this.specSboForm.markAllAsTouched();
      return;
    }
    console.log("onSubmit in page");
    if (this.isEditMode()) {
      this.onUpdateToolRequest();
    } else {
      this.onCreateToolRequest();
    }
  }

  /**
 * Créer une demande d'outillage complète
 */
  private onCreateToolRequest() {
    console.log("onCreateToolRequest in page");
    // Validation
    // if (this.toolForm.invalid || this.specSboForm.invalid) {
    //   this.specSboForm.markAllAsTouched();
    //   this.toolForm.markAllAsTouched();
    //   return;
    // }
    const toolData: ToolCreation = this.toolForm.value;
    const toolRequest: SpecSBOCreation = {
      ...this.specSboForm.value,
      type: RequestType.SBO,
    };
    this.store.createToolRequest(toolRequest, toolData);
  }


  /**
     * Met à jour une demande d'outillage complète
     */
  private onUpdateToolRequest(): void {
    const currentRequest = this.store.currentToolRequest();
    if (!currentRequest || this.specSboForm.invalid) {
      this.specSboForm.markAllAsTouched();
      return;
    }

    // L'ID de la requête et l'ID de l'outil sont nécessaires pour la mise à jour
    const requestToUpdate: SpecSBOUpdate = {
      id: currentRequest.id,
      // Assumer que l'outil ne change pas pour une SBO, ou qu'il est géré par la logique enfant
      toolId: currentRequest.tool.id,
      // Les valeurs du formulaire
      ...this.specSboForm.value,
      // L'API attend peut-être un type
      type: RequestType.SBO,

      // La logique de votre API pour l'UPDATE pourrait nécessiter plus de champs
    };

    this.store.updateToolRequest(requestToUpdate);

    // Redirection après succès (simplifié, devrait être géré par effect)
    this.router.navigate(['/tool-requests']);
  }

  // NOTE: onCreatedTool n'est plus nécessaire car le composant enfant ne l'émet plus.
  // La page peut optionnellement utiliser store.setCreatedTool(tool) si elle gère un sélecteur d'outil existant.

  // ============================================================================
  // GETTERS POUR LE TEMPLATE (Mode déclaratif)
  // ============================================================================

  /**
   * Indique si la création de la demande est possible.
   */
  get canCreateRequest(): boolean {
    // Utilisation de l'état du Store pour vérifier l'outil et l'état de création
    return (
      this.store.selectedTool() !== null &&
      this.specSboForm.valid &&
      !this.store.isCreatingRequest()
    );
  }

  /**
     * Indique si la mise à jour de la demande est possible.
     */
  get canUpdateRequest(): boolean {
    // Vérifier si nous sommes en mode édition et que les formulaires sont valides
    return (
      this.isEditMode() &&
      this.specSboForm.valid &&
      !this.store.isUpdatingRequest()
    );
  }

    // Soumettre la demande
  //   this.toolRequestService.createToolRequest(toolRequest).subscribe({
  //     next: () => {
  //       console.log('Demande créée avec succès');
  //       this.isCreatingRequest.set(false);

  //       // Réinitialiser les formulaires
  //       this.resetForms();

  //       // Afficher un message de succès
  //       // this.toastService.showSuccess('Demande créée avec succès');

  //       // Rediriger vers la liste
  //       this.router.navigate(['/tool-requests']);
  //     },
  //     error: (error) => {
  //       console.error('Erreur lors de la création de la demande:', error);
  //       this.isCreatingRequest.set(false);

  //       // Afficher un message d'erreur
  //       // this.toastService.showError('Erreur lors de la création de la demande');
  //     }
  //   });
  // }


  /**
  * Réinitialiser tous les formulaires
  */
  private resetForms(): void {
    this.specSboForm.reset();
    // this.createdTool.set(null);
  }


}
