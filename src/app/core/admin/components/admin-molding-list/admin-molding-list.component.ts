import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Observable } from 'rxjs';
import { MoldingListService } from 'src/app/molding/services/molding-list.service';
import { Molding } from 'src/app/_interfaces/molding/molding';

@Component({
  selector: 'app-admin-molding-list',
  templateUrl: './admin-molding-list.component.html',
  styleUrls: ['./admin-molding-list.component.scss'],
})
export class AdminMoldingListComponent implements OnChanges, OnInit {
  public filteredMoldings: Molding[] = [];
  public moldingListLoading = false;
  public filteredMoldings$: Observable<Molding[]>;
  // public dataSource: MatTableDataSource<Molding> = new MatTableDataSource();
  // public displayedMoldingColumns: string[] = ['id', 'moldingDay', 'createdBy', 'outillage', 'commands'];
  constructor(
    private moldingListService: MoldingListService,
  ) {

  }
  nextPage() {
    this.moldingListService.page.next(this.moldingListService.page.value + 1);
  }
  ngOnInit(): void {
    this.moldingListLoading = true;
    this.filteredMoldings$ = this.moldingListService.filteredMoldings$.asObservable();
    this.filteredMoldings$.subscribe((moldings) => {
      this.moldingListLoading = false;
      this.filteredMoldings = moldings;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.dataSource.data = this.moldings;
  }



  openMoldingClick(moldingIdex: number) {

  }
  toggleOptions(slidingItem: IonItemSliding) {
    slidingItem.open('end');
    setTimeout(() => {
      slidingItem.close();
    }, 3000);
  }
}
