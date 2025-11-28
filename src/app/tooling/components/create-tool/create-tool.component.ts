import { Component, inject, OnInit, output, signal } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonButton, IonInput, IonItem, IonText, IonToolbar } from '@ionic/angular/standalone';
import { ToolRequestFormBuilder } from 'src/app/shared/services/toolRequestFormBuilder/tool-request-form-builder';
import { Tool, ToolCreation } from '../../tool';
import { ToolService } from '../../services/tool.service';

@Component({
  selector: 'app-create-tool',
  templateUrl: './create-tool.component.html',
  styleUrls: ['./create-tool.component.scss'],
  standalone:true,
  imports:[
    ReactiveFormsModule,
    IonItem,
          IonText,
          IonInput,
          IonToolbar,
                IonButton,
  ]
})
export class CreateToolComponent  implements OnInit {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly formBuilderService = inject(ToolRequestFormBuilder);
  private readonly toolService = inject(ToolService);

  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////

  // Formulaires
  protected newToolForm: FormGroup;
  
  // Etat de changement
  isCreatingTool = signal(false);

  //Output
  onCreatedTool = output<Tool | null>();
  
  ////////////////////////////////////////////////////
  //LIFECYCLE HOOKS
  ////////////////////////////////////////////////////
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
  
      this.isCreatingTool.set(true);
  
      const toolData: ToolCreation = this.newToolForm.value;
  
      this.toolService.createTool(toolData).subscribe({
        next: (tool) => {
          console.log('Outil créé:', tool);
          this.onCreatedTool.emit(tool);
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
