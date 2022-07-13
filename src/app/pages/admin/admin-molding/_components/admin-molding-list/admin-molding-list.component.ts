import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Molding } from 'src/app/_interfaces/molding/molding';

@Component({
  selector: 'app-admin-molding-list',
  templateUrl: './admin-molding-list.component.html',
  styleUrls: ['./admin-molding-list.component.scss'],
})
export class AdminMoldingListComponent implements OnChanges {
  @Input() moldings: Molding[];
  public moldingListLoading = false;
  public dataSource: MatTableDataSource<Molding>;
  public displayedMoldingColumns: string[] = ['status', 'id', 'moldingDay', 'createdBy', 'outillage', 'commands'];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = changes.moldings.currentValue;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
