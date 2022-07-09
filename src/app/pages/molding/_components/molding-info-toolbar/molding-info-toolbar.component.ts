import { Component, Input, OnInit } from '@angular/core';
import { Molding } from 'src/app/_interfaces/molding/molding';

@Component({
  selector: 'app-molding-info-toolbar',
  templateUrl: './molding-info-toolbar.component.html',
  styleUrls: ['./molding-info-toolbar.component.scss'],
})
export class MoldingInfoToolbarComponent {
  @Input() molding: Molding;

}
