import { Component, Input, OnInit } from '@angular/core';
import { Molding } from 'src/app/_interfaces/molding/molding';

@Component({
  selector: 'app-molding-materials-table',
  templateUrl: './molding-materials-table.component.html',
  styleUrls: ['./molding-materials-table.component.scss'],
})
export class MoldingMaterialsTableComponent implements OnInit {
  @Input() molding: Molding;
  constructor() { }

  ngOnInit() { }

}
