import { Component, effect, inject, input, OnInit, output, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonInput, IonItem, IonText, IonToolbar } from '@ionic/angular/standalone';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';
import { Tool, ToolCreation } from '../../tool';
import { ToolRequestStore } from '../../stores/tool-request.store';
import { SpecSBORequest } from '../../tool-request-types';

@Component({
  selector: 'app-tool-form',
  templateUrl: './tool-form.component.html',
  styleUrls: ['./tool-form.component.scss'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    IonItem,
    IonText,
    IonInput,
    IonToolbar,
    IonButton,
  ]
})
/**
 * Composant responsable de la saisie des informations pour la création d'un nouvel outil.
 * Déclenche l'action de création via le ToolRequestStore.
 */
export class ToolFormComponent {
// ============================================================================
  // INPUTS
  // ============================================================================
  /** Le FormGroup du formulaire d'outil passé par le parent. */
  public toolForm = input.required<FormGroup>(); // 👈 Rendre le FormGroup obligatoire

  /** Indique si la page est en mode édition. */
  isEditMode = input<boolean>(true); // 👈 Nouveau

  ////////////////////////////////////////////////////
  //METHODES PRIVEES
  //////////////////////////////////////////////////// 

  /**
* Réinitialiser tous les formulaires
*/
  private resetForms(): void {
    this.toolForm().reset();
  }
}
