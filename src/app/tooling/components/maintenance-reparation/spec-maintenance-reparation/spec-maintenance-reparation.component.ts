import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonRadioGroup, IonicModule } from '@ionic/angular';
import { ToolRequest } from 'src/app/tooling/tool-request-types';
import { NgFor, DatePipe } from '@angular/common';

@Component({
    selector: 'app-spec-maintenance-reparation',
    templateUrl: './spec-maintenance-reparation.component.html',
    styleUrls: ['./spec-maintenance-reparation.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgFor,
        DatePipe,
    ],
})
export class SpecMaintenanceReparationComponent implements OnInit {
  @Input() toolRequest: ToolRequest;
  @ViewChild('groupTest') groupTest: IonRadioGroup;

  constructor() { }

  ngOnInit() { }

}
