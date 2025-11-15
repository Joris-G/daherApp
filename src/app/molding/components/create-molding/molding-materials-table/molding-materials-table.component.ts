import { Component, Input, OnInit } from '@angular/core';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { IonicModule } from '@ionic/angular';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-molding-materials-table',
    templateUrl: './molding-materials-table.component.html',
    styleUrls: ['./molding-materials-table.component.scss'],
    standalone: true,
    imports: [IonicModule, NgFor],
})
export class MoldingMaterialsTableComponent implements OnInit {
  @Input() molding: Molding;
  constructor() { }

  ngOnInit() { }

}
