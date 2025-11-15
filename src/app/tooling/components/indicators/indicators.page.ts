import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ToolRequestService } from 'src/app/tooling/services/tool-request.service';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';
import { IndicatorGraphComponent } from '../../../shared/indicators/indicator-graph/indicator-graph.component';
import { IndicatorNumberComponent } from '../../../shared/indicators/indicator-number/indicator-number.component';

@Component({
    selector: 'app-indicators',
    templateUrl: './indicators.page.html',
    styleUrls: ['./indicators.page.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgIf,
        IndicatorGraphComponent,
        IndicatorNumberComponent,
    ],
})
export class IndicatorsPage implements OnInit {
  @ViewChild('repartitionDemandesCanvas') private repartitionDemandesCanvas: ElementRef;

  public openRequestCount = 0;
  public onGoingRequestCount = 0;
  public requestTypeDistribution: any;


  constructor(
    private toolRequestService: ToolRequestService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.toolRequestService.getToolRequests()
      .subscribe((toolRequestList) => {
        const startDate = new Date().getTime();
        toolRequestList.forEach((toolRequest) => {
          console.log(toolRequest);
          if (toolRequest.statut !== 'CLOTUREE') { this.openRequestCount = this.openRequestCount + 1; }
          if (toolRequest.statut !== 'EN COURS DE REALISATION') { this.onGoingRequestCount = this.onGoingRequestCount + 1; }
        });
        this.requestTypeDistribution = {
          controle: toolRequestList.filter(toolRequest => toolRequest.type === 'Controle').length,
          maintenance: toolRequestList.filter(toolRequest => toolRequest.type === 'Maintenance').length
        };
        const endForEach = new Date().getTime();
        console.log(this.openRequestCount, this.onGoingRequestCount, `${endForEach - startDate}ms`);
        console.log(this.requestTypeDistribution);
      });

  }

}
