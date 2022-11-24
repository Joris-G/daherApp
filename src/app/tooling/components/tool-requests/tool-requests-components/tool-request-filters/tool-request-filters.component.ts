import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IonSelect } from '@ionic/angular';
import { Observable } from 'rxjs';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { RequestDataSource } from '../../tool-requests-data/request-data-source';
import { ToolRequestTableDataSourceService } from '../../tool-request-table-data-source.service';
import { ToolRequestsService } from '../../tool-requests-data/tool-requests.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tool-request-filters',
  templateUrl: './tool-request-filters.component.html',
  styleUrls: ['./tool-request-filters.component.scss'],
})
export class ToolRequestFiltersComponent {
  public filterSelectObjects = this.toolDataService.filterSelectObjects;
  public filtersForm: FormGroup;
  constructor(
    private toolDataService: ToolRequestTableDataSourceService,
    private toolRequestsService: ToolRequestsService,
    private fb: FormBuilder
  ) {

    // this.filtersForm = this.fb.group(
    //   this.fb.array(this.filterSelectObjects)
    // );
    console.log(this.filtersForm);
  }

  resetFiltersClick() {
    this.toolRequestsService.filters.next([]);

  }

  /**
    * Called on Filter change
    *
    * @param filter
    * @param event
    * @memberof ToolRequestsPage
    */
  filterChange(filter: any, event: any) {
    this.toolRequestsService.addFilter({ data: filter.columnProp, value: event.detail.value });
    //   this.filterValues[filter.columnProp] = event.target.value.trim();
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
