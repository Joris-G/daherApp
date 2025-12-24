import { Component, input, output } from '@angular/core';
import { ToolRequestFilter } from 'src/app/tooling/tool-request-filters';
import { IonButton, IonButtons, IonContent, IonFooter, IonHeader, IonIcon, IonItem, IonList, IonSelect, IonSelectOption, IonTitle, IonToolbar } from '@ionic/angular/standalone';
// TODO transformer ce composant de filtres en formulaire pour profiter des reset patch ... signaux
@Component({
    selector: 'app-tool-request-filters',
    templateUrl: './tool-request-filters.component.html',
    styleUrls: ['./tool-request-filters.component.scss'],
    standalone: true,
  imports: [IonHeader, IonContent, IonToolbar, IonTitle, IonIcon, IonList, IonItem, IonSelectOption, IonButtons, IonButton, IonFooter, IonSelect],
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
  private activeFilters: IonSelect[] = [];

  resetFiltersClick() {
    this.activeFilters.forEach((filter: IonSelect) => {
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
