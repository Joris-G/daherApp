import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { MoldingService } from 'src/app/_services/molding/moldings/molding.service';

@Component({
  selector: 'app-admin-molding',
  templateUrl: './admin-molding.page.html',
  styleUrls: ['./admin-molding.page.scss'],
})
export class AdminMoldingPage implements OnInit, OnDestroy {
  public moldingsError = false;
  public moldings: Molding[];
  private moldings$: Observable<Molding[]>;
  // private properties
  private refreshData;
  constructor(
    private moldingService: MoldingService
  ) { }

  ngOnDestroy(): void {

  }

  ionViewDidEnter() {
    // this.moldings$ = this.moldingService.getMoldings();
  }

  ngOnInit() {
    this.moldings$ = this.moldingService.getMoldings();
    this.moldings$.subscribe((moldings: Molding[]) => {
      this.moldings = moldings;
    });
    // this.getMoldings();
    //TODO indicators to be reloaded with interval
    // this.refreshData = setInterval(() => {
    //   this.getMoldings();
    // }, this.refreshTime);

  }




}
