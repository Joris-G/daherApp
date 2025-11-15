import { Component, Input, OnInit } from '@angular/core';
import { Kit } from 'src/app/_interfaces/molding/composite-material-types';

@Component({
  selector: 'app-kit-details',
  templateUrl: './kit-details.component.html',
  styleUrls: ['./kit-details.component.scss'],
})
export class KitDetailsComponent implements OnInit {
  @Input
    () kit: Kit;
  constructor() { }

  ngOnInit() { }

}
