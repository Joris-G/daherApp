import { Component } from '@angular/core';
import { IonSelect, IonicModule } from '@ionic/angular';

import { ToolRequestsService } from '../../tool-requests-data/tool-requests.service';
import { NgFor } from '@angular/common';

@Component({
    selector: 'app-tool-request-filters',
    templateUrl: './tool-request-filters.component.html',
    styleUrls: ['./tool-request-filters.component.scss'],
    standalone: true,
    imports: [IonicModule, NgFor],
})
export class ToolRequestFiltersComponent {
  private activeFilters: IonSelect[] = [];
  constructor(
    public toolRequestsService: ToolRequestsService,
  ) { }

  resetFiltersClick() {
    this.activeFilters.forEach((filter: IonSelect) => {
      filter.value = null;
    });
    this.activeFilters = [];
    this.toolRequestsService.resetFilters();
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
