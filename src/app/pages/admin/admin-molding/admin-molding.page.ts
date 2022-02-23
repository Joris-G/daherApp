import { Component, OnInit } from '@angular/core';
import { Molding } from 'src/app/_interface/molding';
import { MoldingService } from 'src/app/_services/moldings/molding.service';

@Component({
  selector: 'app-admin-molding',
  templateUrl: './admin-molding.page.html',
  styleUrls: ['./admin-molding.page.scss'],
})
export class AdminMoldingPage implements OnInit {
  public moldings: Molding[];
  displayedMoldingColumns: string[] = ['id', 'moldingDay', 'createdBy', 'outillage'];

  constructor(
    private moldingService: MoldingService
  ) {

  }

  ngOnInit() {
    this.getMoldings();
  }

  getMoldings() {
    this.moldingService.getMoldings()
      .then((moldings: Molding[]) => {
        this.moldings = moldings;
      });
  }
}
