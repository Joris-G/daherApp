import { Component, Input, OnInit } from '@angular/core';

@Component({
  standalone: true,
    selector: 'app-indicator-number',
    templateUrl: './indicator-number.component.html',
    styleUrls: ['./indicator-number.component.scss'],
  imports: []
})
export class IndicatorNumberComponent implements OnInit {
  @Input() indicator: any;

  constructor() { }

  ngOnInit() { }

}
