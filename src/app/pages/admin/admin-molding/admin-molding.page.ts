import { AfterViewChecked, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { MoldingService } from 'src/app/_services/molding/moldings/molding.service';

@Component({
  selector: 'app-admin-molding',
  templateUrl: './admin-molding.page.html',
  styleUrls: ['./admin-molding.page.scss'],
})
export class AdminMoldingPage implements OnInit, OnDestroy, AfterViewChecked {
  // public properties
  public moldingListLoading: boolean;
  public moldings: Molding[];
  public dataSource: MatTableDataSource<Molding>;
  public displayedMoldingColumns: string[] = ['status', 'id', 'moldingDay', 'createdBy', 'outillage', 'commands'];
  // private properties
  private refreshData;
  constructor(
    private moldingService: MoldingService
  ) { }
  ngAfterViewChecked(): void {
    // indicators to be reloaded with interval

  }
  ngOnDestroy(): void {
  }

  ionViewDidEnter() {
    this.getMoldings();
  }

  ngOnInit() {
    // this.getMoldings();
    // indicators to be reloaded with interval
    // this.refreshData = setInterval(() => {
    //   this.getMoldings();
    // }, this.refreshTime);

  }

  getMoldings() {
    this.moldingListLoading = true;
    this.moldingService.getMoldings()
      .subscribe((moldings: Molding[]) => {
        this.moldings = moldings;
        this.moldingListLoading = false;
        this.moldings.forEach((molding: Molding) => {
          molding.status = false;
        });
        this.dataSource = new MatTableDataSource(this.moldings);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
