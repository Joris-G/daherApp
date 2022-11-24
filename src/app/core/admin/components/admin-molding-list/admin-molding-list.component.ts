import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
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
  public dataSource: MatTableDataSource<Molding> = new MatTableDataSource();
  public displayedMoldingColumns: string[] = ['status', 'id', 'moldingDay', 'createdBy', 'outillage', 'commands'];
  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource.data = this.moldings;
  }

  ngOnc(): void {
    this.dataSource.data = this.moldings;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
