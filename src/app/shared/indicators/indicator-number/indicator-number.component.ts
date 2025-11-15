import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
    selector: 'app-indicator-number',
    templateUrl: './indicator-number.component.html',
    styleUrls: ['./indicator-number.component.scss'],
    standalone: true,
    imports: [IonicModule],
})
export class IndicatorNumberComponent implements OnInit {
  @Input() indicator: any;

  constructor() { }

  ngOnInit() { }

}
