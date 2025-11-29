import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonInput, IonItem, IonText, IonToolbar, IonLabel } from '@ionic/angular/standalone';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { RequestType, SpecSBOCreation, SpecSBOUpdate, ToolRequest } from 'src/app/tooling/tool-request-types';
import { Tool } from 'src/app/tooling/tool';
import { ActivatedRoute, Router } from '@angular/router';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';
import { SboComponent } from '../sbo/sbo.component';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';
import { CreateToolComponent } from '../create-tool/create-tool.component';
import { ToolRequestStore } from '../../stores/tool-request.store';
import { filter, take } from 'rxjs';

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
    IonLabel,
    ReactiveFormsModule,
    NgxEditorModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonItem,
    IonText,
    IonInput,
    IonLabel,
    IonFooter,
    IonToolbar,
    IonButton,
    NgFor,
    SboComponent,
    CreateToolComponent

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


  /** Configuration de la page */
  public page = {
    pageTitle: 'Création d\'une demande',
    menuTitle: 'Menu outillage',
    menuItems: MENU_ITEMS,
    contentId: 'tooling-content'
  };


  /** Formulaire pour les spécifications SBO. */
  protected specSboForm: FormGroup;

  /** Liste des programmes avion */
  programs = signal<ProgrammeAvion[]>([]);

  /** Enum pour le template */
  readonly RequestType = RequestType;
  /** Éditeur de texte riche */
  public editor: Editor;

  // ============================================================================
  // CONSTRUCTEUR (Nouveau Contexte pour l'Effect)
  // ============================================================================
  constructor() {
    // L'effect() doit être appelé ici, dans le constructeur,
    // car c'est un contexte d'injection valide.

    /** 2. Écouter les changements du Store pour préremplir le formulaire (Mode Édition) */
    effect(() => {
      const toolRequest = this.store.currentToolRequest();
      // On vérifie le mode édition pour ne pas remplir le formulaire en mode création
      if (toolRequest && this.isEditMode()) {
        this.fillForm(toolRequest);
      }
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
    this.editor = new Editor();

    // 1. Lire les paramètres de la route
    this.activatedRoute.params.pipe(
      filter(params => !!params['idToolRequest']), // S'assurer que l'ID existe
      take(1)
    ).subscribe(params => {
      this.requestId = params['idToolRequest'];
      if (this.requestId) {
        this.isEditMode.set(true);
        this.page.pageTitle = `Modification de la demande ${this.requestId}`;
        this.loadToolRequestForEdit(this.requestId);
      }
    });

    // // 2. Écouter les changements du Store pour préremplir le formulaire
    // effect(() => {
    //   const toolRequest = this.store.currentToolRequest()
    //   if (toolRequest && this.isEditMode()) {
    //     this.fillForm(toolRequest);
    //   }
    // });

  }

  /**
     * Destruction du composant.
     */
  ngOnDestroy(): void {
    this.editor.destroy();
  }
  // ============================================================================
  // INITIALISATION DES FORMULAIRES
  // ============================================================================

  /**
   * Initialise les FormGroup nécessaires à la page.
   */
  private initializeForms(): void {
    this.specSboForm = this.formBuilderService.createSpecSBOForm();
  }

  // ============================================================================
  // CHARGEMENT DES DONNÉES EN MODE ÉDITION
  // ============================================================================

  /**
   * Charge la demande existante via le Store et déclenche le préremplissage.
   * @param id - L'ID de la demande à charger.
   */
  private loadToolRequestForEdit(id: string): void {
    this.store.loadToolRequest(id);
  }

  /**
   * Préremplit le formulaire avec les données de la demande.
   * @param request - La demande d'outillage.
   */
  private fillForm(request: ToolRequest): void {
    // NOTE: S'assurer que le FormBuilder gère les champs de ToolRequest pour le setValue
    this.specSboForm.patchValue({
      // Les champs de SpecSBOCreation dans votre formulaire
      // program: request.,
      type: request.type,
      comment: request.toolingNote,
      // ... autres champs SBO ...
    });
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
    if (this.isEditMode()) {
      this.onUpdateToolRequest();
    } else {
      this.onCreateToolRequest();
    }
  }

  /**
 * Créer une demande d'outillage complète
 */
  onCreateToolRequest() {
    const createdTool: Tool = this.store.createdTool();
    // Validation
    if (!createdTool || this.specSboForm.invalid) {
      console.error('Aucun outil créé');
      this.specSboForm.markAllAsTouched();
      return;
    }

    // Construire l'objet ToolRequest
    const toolRequest: SpecSBOCreation = {
      ...this.specSboForm.value,
      type: RequestType.SBO,
      tool: createdTool,
    };

    // Soumettre la demande via le Store
    this.store.createToolRequest(toolRequest);

    // Après l'appel au store, on peut gérer la redirection.
    // Pour cet exemple, nous allons attendre la fin de la soumission.
    // Idéalement, on utiliserait un effect pour réagir au changement du store.
    // Si la création est réussie, le store.createdTool est remis à null.
    // On peut utiliser un simple setTimeout pour simuler la redirection post-succès pour cet exemple:
    // (Dans un cas réel, utiliser un effect ou un observable pour surveiller le succès)

    // La redirection sera gérée après succès par un mécanisme approprié, ici, on simule l'attente:
    this.specSboForm.reset();
    this.store.setCreatedTool(null); // Réinitialiser l'outil créé
    this.router.navigate(['/tool-requests']); // Redirection après succès (simplifié ici)
  }


  /**
     * Met à jour une demande d'outillage complète
     */
  onUpdateToolRequest(): void {
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
      this.store.createdTool() !== null &&
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

  // onCreatedTool(tool: Tool) {
  //   this.createdTool.set(tool);
  // }


  /**
  * Réinitialiser tous les formulaires
  */
  private resetForms(): void {
    this.specSboForm.reset();
    // this.createdTool.set(null);
  }

  // ============================================================================
  // GETTERS POUR LE TEMPLATE
  // ============================================================================

  // get canCreateTool(): boolean {
  //   return this.newToolForm.valid && !this.isCreatingTool();
  // }

  // get canCreateRequest(): boolean {
  //   return (
  //     this.createdTool() !== null &&
  //     // this.newToolRequestForm.valid &&
  //     this.specSboForm.valid &&
  //     !this.isCreatingRequest()
  //   );
  // }
}
