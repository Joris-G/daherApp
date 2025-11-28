import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Component, computed, effect, inject, input, output, signal } from '@angular/core';
import { NgIf, NgFor, DatePipe, KeyValuePipe } from '@angular/common';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { RequestState } from 'src/app/tooling/services/tool-request-manager.service';
import { MoyenMesure, RequestStatus, SpecCtrlCreation, ToolRequest, TypeRapport } from 'src/app/tooling/tool-request-types';
import { ToolInputComponent } from '../../tool-input/tool-input.component';
import { IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonItem, IonLabel, IonList, IonListHeader, IonRow, IonCardTitle, IonText, IonIcon, IonModal, IonContent, IonSelectOption, IonNote, IonInput, IonTextarea, IonSelect, IonToggle, IonDatetime } from '@ionic/angular/standalone';

@Component({
    selector: 'app-control3-dform',
    templateUrl: './control3-dform.component.html',
    styleUrls: ['./control3-dform.component.scss'],
    standalone: true,
  imports: [
    IonCardTitle,
    ReactiveFormsModule,
    ToolInputComponent,
    NgIf, NgFor,
    EditorComponent,
    DatePipe, KeyValuePipe,
    IonGrid, IonRow, IonCol, IonInput,
    IonCard, IonCardHeader, IonCardContent, IonList,
    IonListHeader, IonLabel, IonItem, IonText, IonIcon,
    IonModal, IonContent, IonSelectOption, IonNote,
    IonSelect,
    IonSelectOption,
    IonToggle,
    IonDatetime]
})
export class Control3DFormComponent {
  // ============================================================================
  // INJECTION DEPENDANCES
  // ============================================================================
  private readonly fb = inject(FormBuilder);
  // ============================================================================
  // INPUTS (Signals modernes)
  // ============================================================================
  readonly toolRequest = input<ToolRequest | null>(null);
  readonly requestState = input<RequestState>({
    canManage: false,
    canUpdate: false,
    canEdit: false
  });

  // ============================================================================
  // OUTPUTS (Signals modernes)
  // ============================================================================
  readonly submit = output<SpecCtrlCreation>();
  readonly update = output<Partial<ToolRequest>>();
  readonly statusChange = output<RequestStatus>();

  // ============================================================================
  // PROPRIETES
  // ============================================================================
  protected readonly moyenMesure = MoyenMesure;
  protected readonly typeRapport = TypeRapport;

  // Formulaires
  protected readonly toolRequestForm: FormGroup;
  protected readonly controlForm: FormGroup;
  protected readonly outillNoRefSAPForm: FormGroup;

  // État du formulaire
  protected readonly isEditMode = computed(() => !!this.toolRequest()?.id);
  protected readonly formValid = signal(false);

  // Configuration TinyMCE
  protected readonly editorConfig = {
    plugins: 'lists link image table wordcount',
    toolbar: 'bold italic underline strikethrough forecolor fontsize styles | alignleft aligncenter alignright alignjustify | bullist numlist | h1 h2 h3',
    menubar: false,
    statusbar: false,
    object_resizing: true,
    height: 150,
    inline: false
  };

  // ============================================================================
  // CONSTRUCTOR
  // ============================================================================
  constructor() {
    // Initialisation des formulaires
    this.outillNoRefSAPForm = this.fb.group({
      identification: [''],
      description: [''],
      localisation: ['']
    });

    this.toolRequestForm = this.fb.group({
      id: [null],
      statut: [''],
      // Ajouter les autres champs nécessaires
    });

    this.controlForm = this.fb.group({
      id: [null],
      outillage: [null],
      outillNoRefSAP: [this.outillNoRefSAPForm],
      bloquantProd: [false],
      dispoOut: [null],
      refPlan: ['', Validators.required],
      indPlan: ['', Validators.required],
      cheminCAO: [''],
      dateBesoin: [null],
      ligneBudgetaire: ['', Validators.required],
      typeRapport: [''],
      description: ['', Validators.required],
      detailsControle: ['', Validators.required],
      tolerances: ['', Validators.required],
      immobilisationOutillage: [null],
      interventionDate: [null],
      infosComplementaire: [''],
      moyenMesure: [''],
      visaControleur: ['']
    });

    // Synchroniser les données d'entrée avec les formulaires
    effect(() => {
      console.log("hello from effect ctrl3D");
      const toolReq = this.toolRequest();

      if (toolReq) {
        this.toolRequestForm.patchValue(toolReq, { emitEvent: false });
        this.controlForm.patchValue(toolReq, { emitEvent: false });
      }

    });

    // Surveiller la validité du formulaire
    effect(() => {
      this.formValid.set(
        this.controlForm.valid && this.toolRequestForm.valid
      );
    });
  }

  // ============================================================================
  // MÉTHODES PUBLIQUES
  // ============================================================================
  protected onToolSelected(tool: any) {
    this.controlForm.patchValue({ outillage: tool });
  }

  protected formatDate(dateValue: string): Date {
    return new Date(dateValue);
  }

  protected handleSubmit() {
    if (this.controlForm.valid) {
      const data: SpecCtrlCreation = {
        ...this.toolRequestForm.value,
        typeData: this.controlForm.value
      };

      if (this.isEditMode()) {
        this.update.emit(data);
      } else {
        this.submit.emit(data);
      }
    }
  }

  protected handleStatusChange(newStatus: RequestStatus) {
    this.statusChange.emit(newStatus);
    this.toolRequestForm.patchValue({ statut: newStatus });
  }

}
