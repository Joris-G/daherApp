import { Component, EventEmitter, inject, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RequestState } from 'src/app/tooling/services/tool-request-manager.service';
import { MoyenMesure, TypeRapport } from 'src/app/_interfaces/tooling/tool-request-types';

import { ToolInputService } from '../../tool-input/tool-input.service';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ToolInputComponent } from '../../tool-input/tool-input.component';
import { NgIf, NgFor, DatePipe, KeyValuePipe } from '@angular/common';
import { EditorComponent } from '@tinymce/tinymce-angular';

@Component({
    selector: 'app-control3-dform',
    templateUrl: './control3-dform.component.html',
    styleUrls: ['./control3-dform.component.scss'],
    standalone: true,
    imports: [ReactiveFormsModule, IonicModule, ToolInputComponent, NgIf, NgFor, EditorComponent, DatePipe, KeyValuePipe]
})
export class Control3DFormComponent implements OnInit, OnChanges {
  @Input()
  requestState: RequestState = { canManage: false, canUpdate: false, canEdit: false };

  @Input()
  toolRequestForm: FormGroup;
  @Output()
  toolRequestFormChange = new EventEmitter<FormGroup>;

  @Input()
  controlForm: FormGroup;
  @Output()
  controlFormChange = new EventEmitter<FormGroup>;

  private readonly toolInputService: ToolInputService = inject(ToolInputService);
  moyenMesure = MoyenMesure;
  typeRapport = TypeRapport;
  inputTool$ = this.toolInputService.inputTool$;


  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    if (changes.controlForm) { this.controlFormChange.emit(this.controlForm) }
    if (changes.toolRequestForm) { this.toolRequestFormChange.emit(this.toolRequestForm) }
  }

  ngOnInit(): void {
    // this.controlForm = this.formBuilder.group(
    //   {
    //     id: new FormControl(),
    //     refPlan: new FormControl(),
    //     indPlan: new FormControl(),
    //     cheminCAO: new FormControl(),
    //     description: new FormControl(),
    //     detailsControle: new FormControl(),
    //     tolerances: new FormControl(),
    //     dispoOut: new FormControl(),
    //     dateBesoin: new FormControl(),
    //     typeRapport: new FormControl(),
    //     outillNoRefSAP: this.outillNoRefSAPForm,
    //     //TODO  intervention
    //     interventionDate: new FormControl(),
    //     moyenMesure: new FormControl(),
    //     infosComplementaire: new FormControl(),
    //     outillage: new FormControl(),
    //     ligneBudgetaire: new FormControl(),
    //     statut: new FormControl(),
    //     visaControleur: new FormControl(),
    //     bloquantProd: new FormControl(),
    //     immobilisationOutillage: new FormControl(),
    //   }
    // ) as SpecCtrlFormGroup;

    this.inputTool$.subscribe((tool) => this.toolReceived(tool))

  }




  toolReceived(tool: Tool) {
    this.controlForm.value.outillage = tool;
  }


  dateValue(dateValue: string): Date {
    return new Date(dateValue);
  }

}
