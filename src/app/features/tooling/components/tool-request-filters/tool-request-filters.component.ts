import { Component, input, output } from '@angular/core';
import { ToolRequestFilter } from 'src/app/tooling/tool-request-filters';
// TODO transformer ce composant de filtres en formulaire pour profiter des reset patch ... signaux
import { MultiSelectModule } from 'primeng/multiselect';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';

@Component({
  standalone: true,
    selector: 'app-tool-request-filters',
    templateUrl: './tool-request-filters.component.html',
    styleUrls: ['./tool-request-filters.component.scss'],
  imports: [MultiSelectModule,
    ButtonModule,
    ToolbarModule,
    TooltipModule,
  ]
})
export class ToolRequestFiltersComponent {
  ////////////////////////////////////////////////////
  //INPUTS
  ////////////////////////////////////////////////////
  public readonly toolRequestFilters = input<ToolRequestFilter[]>([]);

  ////////////////////////////////////////////////////
  //OUTPUTS
  ////////////////////////////////////////////////////
  public readonly onFilterChange = output<{ columnProp: string, selectedValues: string[] }>();

  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  private activeFilters: any[] = [];

  resetFiltersClick() {
    this.activeFilters.forEach((filter: any) => {
      filter.value = null;
    });
    this.activeFilters = [];

    this.onFilterChange.emit({ columnProp: 'reset', selectedValues: [] });
  }

  /**
    * Called on Filter change
    *
    * @param filter
    * @param event
    * @memberof ToolRequestsPage
    */
  filterChange(filter: ToolRequestFilter, event: any) {
    const selectedValues = event.detail.value;

    // Stocker la référence du select pour reset
    if (event.target && !this.activeFilters.includes(event.target)) {
      this.activeFilters.push(event.target);
    }

    // Émettre l'événement avec les données du filtre
    this.onFilterChange.emit({
      columnProp: filter.columnProp,
      selectedValues: Array.isArray(selectedValues) ? selectedValues : [selectedValues]
    });
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
