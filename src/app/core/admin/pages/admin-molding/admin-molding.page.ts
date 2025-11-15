import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { MoldingService } from 'src/app/molding/services/molding.service';
import { MoldingListService } from 'src/app/molding/services/molding-list.service';

@Component({
  selector: 'app-admin-molding',
  templateUrl: './admin-molding.page.html',
  styleUrls: ['./admin-molding.page.scss'],
  providers: [MoldingService]
})
export class AdminMoldingPage implements OnInit {
  public moldingsError = false;
  public moldings$: Observable<Molding[]>;

  constructor(
    private moldingService: MoldingService,
    private moldingListService: MoldingListService
  ) { }

  ngOnInit() {
    this.moldings$ = this.moldingListService.getMoldings();
    // this.getMoldings();
    //TODO indicators to be reloaded with interval
    // this.refreshData = setInterval(() => {
    //   this.getMoldings();
    // }, this.refreshTime);

  }




}
