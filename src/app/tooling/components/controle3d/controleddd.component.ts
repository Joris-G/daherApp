import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
import { ToolRequest, MoyenMesure, TypeRapport } from 'src/app/_interfaces/tooling/tool-request-types';

@Component({
  selector: 'app-controleddd',
  templateUrl: './controleddd.component.html',
  styleUrls: ['./controleddd.component.scss'],
})
export class ControledddComponent {
  @Input() toolRequest: ToolRequest;
  // @ViewChild('groupTest') groupTest: IonRadioGroup;
  moyenMesure = MoyenMesure;
  typeRapport = TypeRapport;

}
