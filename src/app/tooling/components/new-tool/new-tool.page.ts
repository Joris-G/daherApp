import { Component, computed, effect, inject, input, OnInit, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonContent, IonFooter, IonToolbar, IonTitle, IonHeader, NavController } from '@ionic/angular/standalone';
import { NgxEditorModule } from 'ngx-editor';
import { SpecSBOCreation, SpecSBORequest, SpecSBOUpdate } from 'src/app/tooling/models/sbo.model';
import { ToolCreation } from 'src/app/tooling/tool';
import { ActivatedRoute } from '@angular/router';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';
import { SboComponent } from '../sbo/sbo.component';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';
import { ToolFormComponent } from '../create-tool/tool-form.component';
import { ToolRequestStore } from '../../stores/tool-request.store';
import { take } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { SboFormComponent } from '../sbo-form/sbo-form.component';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { AlertService } from 'src/app/shared/services/divers/alert.service';

// const MENU_ITEMS = [
//   {
//     title: 'Nouvelle demande outillage',
//     path: 'new-tool',
//     type: 'button',
//   },
//   {
//     title: 'Liste des demandes outillages',
//     path: '/tool-requests',
//     type: 'button',
//   }
// ];

@Component({
  selector: 'app-new-tool',
  templateUrl: './new-tool.page.html',
  styleUrls: ['./new-tool.page.scss'],
  standalone: true,
  imports: [IonHeader, IonTitle,
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
  private readonly navCtrl = inject(NavController);
  protected readonly store = inject(ToolRequestStore);
  private readonly alertService = inject(AlertService);
  private readonly activatedRoute = inject(ActivatedRoute);
  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================
  private readonly routeParams = toSignal(this.activatedRoute.params);
  private readonly requestId = computed<string | null>(() => {
    const params = this.routeParams();
    return params && params['id'] ? params['id'] : null;
  });

  /** * @description Indique si la page est en mode édition. 
  *
       */
  protected readonly isEditMode = computed<boolean>(() => !!this.requestId());

  /** Formulaire pour les spécifications SBO. */
  protected specSboForm: FormGroup;
  /** Formulaire pour l'outil. */
  protected toolForm: FormGroup;

  /** Configuration de la page */
  public page = {
    pageTitle: 'Création d\'une demande',
    menuTitle: 'Menu outillage',
    // menuItems: MENU_ITEMS,
    contentId: 'tooling-content'
  };


  /** Liste des programmes avion */
  programs = signal<ProgrammeAvion[]>([]);




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

    effect(async () => {
      const isCreatingSuccess = this.store.isCreatingSuccess();
      if (isCreatingSuccess) {
        await this.alertService.presentToast('Demande créée avec succès', 'success');
        this.navCtrl.navigateForward(['tooling/requests']);
      } else {

      }
    });

    effect(async () => {
      const error = this.store.error();
      if (error) await this.alertService.presentToast(error, 'danger');
    })

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
    this.store.resetCreationState();

    const id = this.requestId();
    if (this.isEditMode() && id) {
      this.store.loadToolRequest(id);
      this.page.pageTitle = `Modification de la demande ${id}`;
    }
  }
  // ============================================================================
  // INITIALISATION DES FORMULAIRES
  // ============================================================================

  /**
   * Initialise les FormGroup nécessaires à la page.
   */
  private initializeForms(): void {
    this.specSboForm = this.formBuilderService.createSpecSBOForm({ dateBesoin: new Date(2026, 0, 1), description: 'fdezfdfgsd', title: 'edfsdffsdgfg' });
    this.toolForm = this.formBuilderService.createNewToolForm({ designation: 'dsffsdfsd', identification: 'sdgfdwd', sapToolNumber: '099330' });
  }

  // ============================================================================
  // CHARGEMENT DES DONNÉES EN MODE ÉDITION
  // ============================================================================

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
      tool: request.tool.sapToolNumber
    });
    this.toolForm.patchValue({
      sapToolNumber: request.tool.sapToolNumber,
      identification: request.tool.identification,
      designation: request.tool.designation
    });
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
    // Validation
    // if (this.toolForm.invalid || this.specSboForm.invalid) {
    //   this.specSboForm.markAllAsTouched();
    //   this.toolForm.markAllAsTouched();
    //   return;
    // }
    const toolData: ToolCreation = this.toolForm.value;
    const toolRequest: SpecSBOCreation = {
      ...this.specSboForm.value,
      type: 'SBO',
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
      type: 'SBO',

      // La logique de votre API pour l'UPDATE pourrait nécessiter plus de champs
    };

    this.store.updateToolRequest(requestToUpdate);

    // Redirection après succès (simplifié, devrait être géré par effect)
    this.navCtrl.navigateForward(['/tool-requests']);
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
