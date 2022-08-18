import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';

@Component({
  selector: 'app-spec-maintenance-reparation',
  templateUrl: './spec-maintenance-reparation.component.html',
  styleUrls: ['./spec-maintenance-reparation.component.scss'],
})
export class SpecMaintenanceReparationComponent implements OnInit {
  @Input() toolRequest: ToolRequest;
  @ViewChild('groupTest') groupTest: IonRadioGroup;

  constructor() { }

  ngOnInit() { }

}
