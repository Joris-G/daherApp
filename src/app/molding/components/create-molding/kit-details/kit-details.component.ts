import { Component, Input, OnInit } from '@angular/core';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';

@Component({
  standalone: true,
    selector: 'app-kit-details',
    templateUrl: './kit-details.component.html',
    styleUrls: ['./kit-details.component.scss'],
  imports: []
})
export class KitDetailsComponent {
  @Input
    () kit: Kit;
}
