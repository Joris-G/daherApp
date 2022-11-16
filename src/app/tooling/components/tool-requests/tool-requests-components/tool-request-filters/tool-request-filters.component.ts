import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IonSelect } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { RequestDataSource } from '../../tool-requests-data/request-data-source';
import { ToolRequestTableDataSourceService } from '../../tool-request-table-data-source.service';

@Component({
  selector: 'app-tool-request-filters',
  templateUrl: './tool-request-filters.component.html',
  styleUrls: ['./tool-request-filters.component.scss'],
})
export class ToolRequestFiltersComponent implements OnInit {
  public filterSelectObjects = this.toolDataService.filterSelectObjects;
  public dataSource: RequestDataSource;
  // public toolRequests$ = this.toolRequestService.getToolRequests();
  public toolRequestsDataSource$: Observable<MatTableDataSource<ToolRequest>> = this.toolDataService.toolRequestsDataSource$;

  private filterValues = {};
  private activeFilters = [];

  constructor(
    private toolDataService: ToolRequestTableDataSourceService,

  ) { }

  ngOnInit() {
    this.toolRequestsDataSource$.subscribe(dataSource => {
      // this.toolRequestsDataSource.data = requests;

    });
  }

  resetFiltersClick() {
    this.filterValues = {};
    this.activeFilters.forEach((filter: IonSelect) => {
      filter.value = '';
    });
    this.toolDataService.resetFilters();
  }

  /**
    * Called on Filter change
    *
    * @param filter
    * @param event
    * @memberof ToolRequestsPage
    */
  filterChange(filter: any, event: any) {
    this.activeFilters.push(event.target);
    this.filterValues[filter.columnProp] = event.target.value.trim();
    this.toolDataService.setFilter(this.filterValues);
  }





}

  // filterRequestTypeChanged(typeEvent: any) {
  //   const filterValue = (typeEvent.target as HTMLInputElement).value;
  //   this.tableRequestsDataSource.filter = filterValue.trim().toLowerCase();
  //   console.log(typeEvent);
  // }

  // filterRequestStatusChanged(typeEvent: any) {
  //   const filterValue = (typeEvent.target as HTMLInputElement).value;
  //   this.tableRequestsDataSource.filter = filterValue.trim().toLowerCase();
  //   console.log(typeEvent);
  // }
