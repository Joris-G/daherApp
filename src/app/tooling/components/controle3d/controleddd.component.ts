import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IonRadioGroup, IonicModule } from '@ionic/angular';
import { ToolRequest, MoyenMesure, TypeRapport } from 'src/app/features/tooling/models/sbo.model';
import { NgFor, DatePipe, KeyValuePipe } from '@angular/common';

@Component({
  standalone: true,
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
