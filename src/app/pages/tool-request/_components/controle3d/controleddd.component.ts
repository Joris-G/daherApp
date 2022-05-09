import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { IonRadioGroup } from '@ionic/angular';
import { MoyenMesure, TypeRapport } from 'src/app/_interfaces/tooling/spec-ctrl';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';

@Component({
  selector: 'app-controleddd',
  templateUrl: './controleddd.component.html',
  styleUrls: ['./controleddd.component.scss'],
})
export class ControledddComponent implements OnInit, OnChanges {
  @Input() toolRequest: ToolRequest;
  @ViewChild('groupTest') groupTest: IonRadioGroup;
  moyenMesure = MoyenMesure;
  typeRapport = TypeRapport;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  ngOnInit() {
  }
}
