import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-indicator-graph',
  templateUrl: './indicator-graph.component.html',
  styleUrls: ['./indicator-graph.component.scss'],
})
export class IndicatorGraphComponent implements OnInit, AfterViewInit {

  @Input() indicator: any;

  @ViewChild('canvas') private canvas: ElementRef;

  private pieChart: any;

  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.indicator);
    this.pieChart = new Chart(this.canvas.nativeElement, {
      type: 'pie',
      data: {
        labels: Object.entries(this.indicator.repartitionObj).map(test => test[0]),
        datasets: [
          {
            label: this.indicator.name,
            backgroundColor: ['red', 'yellow'],
            borderColor: 'rgba(75,192,192,1)',
            borderJoinStyle: 'miter',
            data: Object.entries(this.indicator.repartitionObj).map(test => test[1]),
          }
        ]
      }
    });
    this.pieChart.update();
  }

  ngOnInit() {
    console.log('init', this.indicator);
  }





}
