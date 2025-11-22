import { Component, inject, OnInit, signal } from '@angular/core';
import { JsonPipe, NgFor } from '@angular/common';
import { FormGroup, FormControl, FormBuilder, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonButton, IonContent, IonDatetime, IonFooter, IonInput, IonItem, IonItemGroup, IonLabel, IonSelect, IonSelectOption, IonText, IonToolbar } from '@ionic/angular/standalone';
import { Editor, NgxEditorModule } from 'ngx-editor';
import { RequestType, ToolRequest } from 'src/app/_interfaces/tooling/tool-request-types';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { Tool, ToolCreation } from 'src/app/_interfaces/tooling/tool';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { Router } from '@angular/router';
import { ProgramsService } from 'src/app/shared/services/programs/programs.service';
import { SboComponent } from '../sbo/sbo.component';
import { AuthStore } from 'src/app/shared/services/users/auth.store';
import { ProgrammeAvion } from 'src/app/_interfaces/programme-avion';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';

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
      IonItem,
      IonAccordion,
      IonContent,
      IonAccordionGroup,
      IonItemGroup,
      IonLabel,
      IonText,
      IonFooter, IonToolbar, IonInput,
      IonButton,
      IonDatetime,
      IonSelect,
      IonSelectOption,
        ReactiveFormsModule,
        NgFor,
        SboComponent,
      NgxEditorModule,
      JsonPipe

    ],
})
export class NewToolPage implements OnInit {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================

  private readonly authStore: AuthStore = inject(AuthStore);
  private readonly formBuilderService = inject(ToolRequestFormBuilder);
  private readonly programService = inject(ProgramsService);
  private readonly toolService = inject(ToolService);
  private readonly toolRequestService = inject(ToolRequestService);
  private readonly router = inject(Router);

  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================

  // Configuration de la page
  public page = {
    pageTitle: 'Création d\'une demande',
    menuTitle: 'Menu outillage',
    menuItems: MENU_ITEMS,
    contentId: 'tooling-content'
  };

  // Formulaires typés
  public newToolForm: FormGroup;
  public newToolRequestForm: FormGroup;
  private specSboForm!: FormGroup;


  // Données
  programs = signal<ProgrammeAvion[]>([]);
  createdTool = signal<Tool | null>(null);

  // États de chargement
  isCreatingTool = signal(false);
  isCreatingRequest = signal(false);

  // Enum pour le template
  readonly RequestType = RequestType;

  public editor: Editor;
  // public html: '';
  // private newTool: Tool;

  // ============================================================================
  // LIFECYCLE
  // ============================================================================

  ngOnInit(): void {
    this.initializeForms();
    this.loadPrograms();
    this.editor = new Editor();
  }

  // ============================================================================
  // INITIALISATION DES FORMULAIRES
  // ============================================================================

  private initializeForms(): void {
    // Formulaire pour créer un nouvel outil
    this.newToolForm = this.formBuilderService.createNewToolForm();

    // Formulaire pour les spécifications SBO
    this.specSboForm = this.formBuilderService.createSpecSBOForm();

    // Formulaire pour la demande d'outillage
    this.newToolRequestForm = this.formBuilderService.createToolRequestForm({
      type: RequestType.SBO,
      typeData: this.specSboForm,
    });



    // Synchroniser dateBesoin entre les deux formulaires
    this.specSboForm.get('dateBesoin')?.valueChanges.subscribe(date => {
      this.newToolRequestForm.get('dateBesoin')?.setValue(date, { emitEvent: false });
    });
  }


  // ============================================================================
  // CHARGEMENT DES DONNÉES
  // ============================================================================

  private loadPrograms(): void {
    this.programService.getPrograms().subscribe({
      next: (programList) => {
        this.programs.set(programList);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des programmes:', error);
        // Vous pouvez ajouter un toast d'erreur ici
      }
    });
  }

  // ============================================================================
  // ACTIONS
  // ============================================================================

  /**
   * Créer un nouvel outil en base de données
   */
  onCreateTool(): void {
    if (this.newToolForm.invalid) {
      this.newToolForm.markAllAsTouched();
      return;
    }

    this.isCreatingTool.set(true);

    const toolData: ToolCreation = this.newToolForm.value;

    this.toolService.createTool(toolData).subscribe({
      next: (tool) => {
        console.log('Outil créé:', tool);
        this.createdTool.set(tool);
        this.isCreatingTool.set(false);

    // Afficher un message de succès
    // this.toastService.showSuccess('Outil créé avec succès');
      },
      error: (error) => {
        console.error('Erreur lors de la création de l\'outil:', error);
        this.isCreatingTool.set(false);

        // Afficher un message d'erreur
        // this.toastService.showError('Erreur lors de la création de l\'outil');
      }
    });
  }

  /**
 * Créer une demande d'outillage complète
 */
  onCreateToolRequest() {
    // Validation
    if (!this.createdTool()) {
      console.error('Aucun outil créé');
      return;
    }

    if (this.newToolRequestForm.invalid || this.specSboForm.invalid) {
      this.newToolRequestForm.markAllAsTouched();
      this.specSboForm.markAllAsTouched();
      return;
    }

    this.isCreatingRequest.set(true);

  // Construire l'objet ToolRequest
    const toolRequest: ToolRequest = {
      type: RequestType.SBO,
      createdAt: new Date(),
      bloquantProd: this.newToolRequestForm.value.bloquantProd,
      dateBesoin: this.newToolRequestForm.value.dateBesoin,
      demandeur: this.authStore.user(),
      outillage: this.createdTool(),
      toolingNote: this.newToolRequestForm.value.toolingNote,
      typeData: this.specSboForm.value
    };

    // Soumettre la demande
    this.toolRequestService.createToolRequest(toolRequest).subscribe({
      next: () => {
        console.log('Demande créée avec succès');
        this.isCreatingRequest.set(false);

        // Réinitialiser les formulaires
        this.resetForms();

        // Afficher un message de succès
        // this.toastService.showSuccess('Demande créée avec succès');

        // Rediriger vers la liste
        this.router.navigate(['/tool-requests']);
      },
      error: (error) => {
        console.error('Erreur lors de la création de la demande:', error);
        this.isCreatingRequest.set(false);

        // Afficher un message d'erreur
        // this.toastService.showError('Erreur lors de la création de la demande');
      }
    });
  }

  /**
  * Réinitialiser tous les formulaires
  */
  private resetForms(): void {
    this.newToolForm.reset();
    this.newToolRequestForm.reset({
      type: RequestType.SBO,
      bloquantProd: false
    });
    this.specSboForm.reset();
    this.createdTool.set(null);
  }

  // ============================================================================
  // GETTERS POUR LE TEMPLATE
  // ============================================================================

  get canCreateTool(): boolean {
    return this.newToolForm.valid && !this.isCreatingTool();
  }

  get canCreateRequest(): boolean {
    return (
      this.createdTool() !== null &&
      this.newToolRequestForm.valid &&
      this.specSboForm.valid &&
      !this.isCreatingRequest()
    );
  }
}
