import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Component, input, } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { EditorComponent } from '@tinymce/tinymce-angular';
import { RequestState } from 'src/app/tooling/services/tool-request-manager.service';
import { Editor } from 'ngx-editor';
import { RAPPORT_TYPES } from 'src/app/features/tooling/models/type-rapport.model';
import { MOYENS_MESURE } from 'src/app/features/tooling/models/moyen-mesure.model';
import { CardComponent } from 'src/app/shared/components/card/card.component';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { SelectModule } from 'primeng/select';
import { MessageModule } from 'primeng/message';

@Component({
  standalone: true,
  selector: 'app-control3-dform',
  templateUrl: './control3-dform.component.html',
  styleUrls: ['./control3-dform.component.scss'],
  imports: [
    ReactiveFormsModule,
    EditorComponent,
    DatePickerModule,
    InputTextModule,
    InputNumberModule,
    SelectModule,
    InputGroupModule,
    InputGroupAddonModule,
    KeyValuePipe,
    FloatLabel,
    MessageModule,
  ]
})
export class Control3DFormComponent {
  /** Formulaire pour les spécifications SBO. */
  public specCtrlForm = input.required<FormGroup>();
  /** Indique si la page est en mode édition. */
  isEditMode = input<boolean>(true);

  /** Éditeur de texte riche */
  public editor: Editor;

  // ============================================================================
  // LIFECYCLE
  // ============================================================================
  ngOnInit() {
    this.editor = new Editor();
  }
  /**
   * Destruction du composant.
   */
  ngOnDestroy(): void {
    this.editor.destroy();
  }

  // // ============================================================================
  // // INJECTION DEPENDANCES
  // // ============================================================================
  // private readonly fb = inject(FormBuilder);
  // // ============================================================================
  // // INPUTS (Signals modernes)
  // // ============================================================================
  // readonly toolRequest = input<ToolRequest | null>(null);
  readonly requestState = input<RequestState>({
    canManage: false,
    canUpdate: false,
    canEdit: false
  });

  // // ============================================================================
  // // OUTPUTS (Signals modernes)
  // // ============================================================================
  // readonly submit = output<SpecCtrlCreation>();
  // readonly update = output<Partial<ToolRequest>>();
  // readonly statusChange = output<RequestStatus>();

  // // ============================================================================
  // // PROPRIETES
  // // ============================================================================
  protected readonly moyenMesure = MOYENS_MESURE;
  protected readonly typeRapport = RAPPORT_TYPES;

  // // Formulaires
  // protected readonly toolRequestForm: FormGroup;
  // protected readonly controlForm: FormGroup;
  // protected readonly outillNoRefSAPForm: FormGroup;

  // // État du formulaire
  // protected readonly formValid = signal(false);

  // // Configuration TinyMCE
  // protected readonly editorConfig = {
  //   plugins: 'lists link image table wordcount',
  //   toolbar: 'bold italic underline strikethrough forecolor fontsize styles | alignleft aligncenter alignright alignjustify | bullist numlist | h1 h2 h3',
  //   menubar: false,
  //   statusbar: false,
  //   object_resizing: true,
  //   height: 150,
  //   inline: false
  // };

  // // ============================================================================
  // // CONSTRUCTOR
  // // ============================================================================
  // constructor() {
  //   // Initialisation des formulaires
  //   this.outillNoRefSAPForm = this.fb.group({
  //     identification: [''],
  //     description: [''],
  //     localisation: ['']
  //   });

  //   this.toolRequestForm = this.fb.group({
  //     id: [null],
  //     statut: [''],
  //     // Ajouter les autres champs nécessaires
  //   });


  //   // Synchroniser les données d'entrée avec les formulaires
  //   effect(() => {
  //     console.log("hello from effect ctrl3D");
  //     const toolReq = this.toolRequest();

  //     if (toolReq) {
  //       this.toolRequestForm.patchValue(toolReq, { emitEvent: false });
  //       this.controlForm.patchValue(toolReq, { emitEvent: false });
  //     }

  //   });

  //   // Surveiller la validité du formulaire
  //   effect(() => {
  //     this.formValid.set(
  //       this.controlForm.valid && this.toolRequestForm.valid
  //     );
  //   });
  // }

  // // ============================================================================
  // // MÉTHODES PUBLIQUES
  // // ============================================================================
  // protected onToolSelected(tool: any) {
  //   this.controlForm.patchValue({ outillage: tool });
  // }

  // protected formatDate(dateValue: string): Date {
  //   return new Date(dateValue);
  // }

  // protected handleSubmit() {
  //   if (this.controlForm.valid) {
  //     const data: SpecCtrlCreation = {
  //       ...this.toolRequestForm.value,
  //       typeData: this.controlForm.value
  //     };

  //     if (this.isEditMode()) {
  //       this.update.emit(data);
  //     } else {
  //       this.submit.emit(data);
  //     }
  //   }
  // }

  // protected handleStatusChange(newStatus: RequestStatus) {
  //   this.statusChange.emit(newStatus);
  //   this.toolRequestForm.patchValue({ statut: newStatus });
  // }

}
