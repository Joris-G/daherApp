import { Component, inject, OnInit, signal } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonFooter, IonInput, IonItem, IonText, IonToolbar, IonLabel } from '@ionic/angular/standalone';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { RequestType, SpecSBOCreation } from 'src/app/tooling/tool-request-types';
import { Tool } from 'src/app/tooling/tool';
import { Router } from '@angular/router';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';
import { SboComponent } from '../sbo/sbo.component';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';
import { CreateToolComponent } from '../create-tool/create-tool.component';
import { ToolRequestStore } from '../../stores/tool-request.store';
import { take } from 'rxjs';

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
  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================

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
  // LIFECYCLE
  // ============================================================================

  /**
   * Initialisation du composant.
   */
  ngOnInit(): void {
    this.initializeForms();
    this.loadPrograms();
    this.editor = new Editor();
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
 * Créer une demande d'outillage complète
 */
  onCreateToolRequest() {
    const createdTool: Tool = this.store.createdTool();
    // Validation
    if (!createdTool) {
      console.error('Aucun outil créé');
      return;
    }

    if (this.specSboForm.invalid) {
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
