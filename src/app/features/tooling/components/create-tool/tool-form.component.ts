import { Component, input, } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonInput, IonItem, IonText, } from '@ionic/angular/standalone';

// TODO Gérer les outillage existant. Proposer la mise à jour de la SBO pour une modification outillage.
// TODO Introduire donc la notion de révision de SBO.
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
