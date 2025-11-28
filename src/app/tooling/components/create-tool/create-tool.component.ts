import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonInput, IonItem, IonText, IonToolbar } from '@ionic/angular/standalone';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';
import { ToolCreation } from '../../tool';
import { ToolRequestStore } from '../../stores/tool-request.store';

@Component({
  selector: 'app-create-tool',
  templateUrl: './create-tool.component.html',
  styleUrls: ['./create-tool.component.scss'],
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
export class CreateToolComponent implements OnInit {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly formBuilderService = inject(ToolRequestFormBuilder);
  protected readonly store = inject(ToolRequestStore);

  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////

  /** Formulaire pour la création d'un nouvel outil. */
  protected newToolForm: FormGroup;


  ////////////////////////////////////////////////////
  //LIFECYCLE HOOKS
  ////////////////////////////////////////////////////

  /**
   * Initialise le formulaire de création d'outil.
   */
  ngOnInit() {
    // Formulaire pour créer un nouvel outil
    this.newToolForm = this.formBuilderService.createNewToolForm();
  }

  ////////////////////////////////////////////////////
  //ACTIONS
  ////////////////////////////////////////////////////

  /**
     * Créer un nouvel outil en base de données
     */
  onCreateTool(): void {
    if (this.newToolForm.invalid) {
      this.newToolForm.markAllAsTouched();
      return;
    }

    // this.isCreatingTool.set(true);

    const toolData: ToolCreation = this.newToolForm.value;
    // Utilisation de la méthode du Store
    this.store.createTool(toolData);
    //TODO Afficher un message de succès
    // // this.toastService.showSuccess('Outil créé avec succès');
    //   },
    //   error: (error) => {
    //     console.error('Erreur lors de la création de l\'outil:', error);

    //     // Afficher un message d'erreur
    //     // this.toastService.showError('Erreur lors de la création de l\'outil');

  }



  ////////////////////////////////////////////////////
  //METHODES PRIVEES
  //////////////////////////////////////////////////// 
  /**
* Réinitialiser tous les formulaires
*/
  private resetForms(): void {
    this.newToolForm.reset();
  }
}
