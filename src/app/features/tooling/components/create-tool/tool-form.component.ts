import { Component, input, output, } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { FloatLabelModule } from 'primeng/floatlabel'
import { InputTextModule } from 'primeng/inputtext';
@Component({
  standalone: true,
    selector: 'app-tool-form',
    templateUrl: './tool-form.component.html',
    styleUrls: ['./tool-form.component.scss'],
    imports: [
        ReactiveFormsModule,
      FloatLabelModule,
      InputTextModule,
      ButtonModule
    ]
})
/**
 * Composant responsable de la saisie des informations pour la création d'un nouvel outil.
 * Déclenche l'action de création via le ToolRequestStore.
 */
export class ToolFormComponent {
  // ***********************************************************
  // INPUTS
  // ***********************************************************
  /** Le FormGroup du formulaire d'outil passé par le parent. */
  public toolForm = input.required<FormGroup>();
  public onValidateTool = output<null>();
  /** Indique si la page est en mode édition. */
  isEditMode = input<boolean>(true);
}
