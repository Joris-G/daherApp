import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IonRadioGroup, IonicModule } from '@ionic/angular';
import { ToolRequest, MoyenMesure, TypeRapport } from 'src/app/_interfaces/tooling/tool-request-types';
import { NgFor, DatePipe, KeyValuePipe } from '@angular/common';

@Component({
    selector: 'app-controleddd',
    templateUrl: './controleddd.component.html',
    styleUrls: ['./controleddd.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgFor,
        DatePipe,
        KeyValuePipe,
    ],
})
export class ControledddComponent {
  @Input() toolRequest: ToolRequest;
  // @ViewChild('groupTest') groupTest: IonRadioGroup;
  moyenMesure = MoyenMesure;
  typeRapport = TypeRapport;

}
