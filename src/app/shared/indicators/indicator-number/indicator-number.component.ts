import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-number',
  templateUrl: './indicator-number.component.html',
  styleUrls: ['./indicator-number.component.scss'],
})
export class IndicatorNumberComponent implements OnInit {
  @Input() indicator: any;

  constructor() { }

  ngOnInit() { }

}
