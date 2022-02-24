import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSpinner } from '@ionic/angular';
import { Molding } from 'src/app/_interface/molding';
import { MoldingService } from 'src/app/_services/moldings/molding.service';

@Component({
  selector: 'app-admin-molding',
  templateUrl: './admin-molding.page.html',
  styleUrls: ['./admin-molding.page.scss'],
})
export class AdminMoldingPage implements OnInit {
  // public properties
  public moldingListLoading: boolean;
  public moldings: Molding[];
  public displayedMoldingColumns: string[] = ['id', 'moldingDay', 'createdBy', 'outillage'];
  // private properties
  private refreshTime = 10000;
  constructor(
    private moldingService: MoldingService
  ) {

  }

  ngOnInit() {
    this.getMoldings();
    // indicators to be reloaded with interval
    setInterval(() => {
      this.getMoldings();
    }, this.refreshTime);

  }

  getMoldings() {
    this.moldingListLoading = true;
    this.moldingService.getMoldings()
      .then((moldings: Molding[]) => {
        this.moldings = moldings;
        this.moldingListLoading = false;
      });
  }
}
