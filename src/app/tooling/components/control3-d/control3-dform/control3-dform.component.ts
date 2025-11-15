import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { RequestState } from 'src/app/tooling/services/tool-request-manager.service';
import { MoyenMesure, OutillNoRefSAPFormGroup, SpecCtrlFormGroup, ToolRequestFormGroup, TypeRapport } from 'src/app/_interfaces/tooling/tool-request-types';

import { ToolInputService } from '../../tool-input/tool-input.service';
import { Tool } from 'src/app/_interfaces/tooling/tool';

@Component({
  selector: 'app-control3-dform',
  templateUrl: './control3-dform.component.html',
  styleUrls: ['./control3-dform.component.scss']
})
export class Control3DFormComponent implements OnInit, OnChanges {
  @Input()
  requestState: RequestState = { canManage: false, canUpdate: false };

  @Input()
  toolRequestForm: ToolRequestFormGroup;
  @Output()
  toolRequestFormChange = new EventEmitter<ToolRequestFormGroup>;

  @Input()
  controlForm: SpecCtrlFormGroup;
  @Output()
  controlFormChange = new EventEmitter<SpecCtrlFormGroup>;

  moyenMesure = MoyenMesure;
  typeRapport = TypeRapport;
  inputTool$ = this.toolInputService.inputTool$;


  constructor(
    private toolInputService: ToolInputService,
  ) { }

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
