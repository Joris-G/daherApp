import { Component, input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel'
import { MessageModule } from 'primeng/message'
import { SpecSBOForm } from '../../models/sbo.model';
import { InputTextModule } from 'primeng/inputtext';
import { EditorModule } from 'primeng/editor';
import { DatePickerModule } from 'primeng/datepicker';

@Component({
  standalone: true,
    selector: 'app-sbo-form',
    templateUrl: './sbo-form.component.html',
    styleUrls: ['./sbo-form.component.scss'],
    imports: [
      ReactiveFormsModule,
      EditorModule,
      FloatLabelModule,
      MessageModule,
      InputTextModule,
      DatePickerModule
    ]
})
export class SboFormComponent implements OnInit {
  /** Formulaire pour les spécifications SBO. */
  public specSboForm = input.required<FormGroup<SpecSBOForm>>();

  /** Indique si la page est en mode édition. */
  isEditMode = input<boolean>(true);


  // /** Éditeur de texte riche */
  // public editor: Editor;


  // ============================================================================
  // LIFECYCLE
  // ============================================================================
  ngOnInit() {
    //   this.editor = new Editor();
  }


  /**
   * Destruction du composant.
   */
  // ngOnDestroy(): void {
  //   this.editor.destroy();
  // }


}
