import { Component, Input, OnInit } from '@angular/core';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { IonicModule } from '@ionic/angular';
import { NgIf } from '@angular/common';
import { DateHeurePipe } from '../../../../_pipes/dateHeure.pipe';

@Component({
    selector: 'app-molding-info-toolbar',
    templateUrl: './molding-info-toolbar.component.html',
    styleUrls: ['./molding-info-toolbar.component.scss'],
    standalone: true,
    imports: [
        IonicModule,
        NgIf,
        DateHeurePipe,
    ],
})
export class MoldingInfoToolbarComponent {
  @Input() molding: Molding;
  public toolStatusColor = 'warning';
  constructor(
    private moldingService: MoldingService,
  ) {
    this.moldingService.moldingStatus$.subscribe({
      next: (status) => {
        if (status.toolStatus) {
          this.toolStatusColor = 'success';
          return;
        }
        this.toolStatusColor = 'warning';
      }
    });
  }
  noToolClick() {
    this.moldingService.molding.outillage = '';
    this.moldingService.updateMoldings();
    this.moldingService.setToolStatus(true);
  }
}
