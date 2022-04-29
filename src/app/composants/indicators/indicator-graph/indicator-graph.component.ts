import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

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
            label: `Prefix-${this.indicator.name}`,
            backgroundColor: ['#505F69', '#6EB4CD'],
            borderColor: '#E1E1D7',
            borderWidth: 1,
            borderJoinStyle: 'miter',
            data: Object.entries(this.indicator.repartitionObj).map(test => test[1]),
          }
        ]

      },
      options: {
        plugins: {
        }
      }
    });
    this.pieChart.update();
  }

  ngOnInit() {
    console.log('init', this.indicator);
  }





}
