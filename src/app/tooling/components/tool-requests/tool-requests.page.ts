import { Component, inject, Signal } from '@angular/core';
import { ToolRequestFiltersComponent } from './tool-requests-components/tool-request-filters/tool-request-filters.component';
import { ToolRequestTableComponent } from './tool-requests-components/tool-request-table/tool-request-table.component';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request-types';
import { AsyncPipe } from '@angular/common';
import { ToolRequestFilterService } from './tool-requests-components/tool-request-filters/tool-request-filters.service';

@Component({
    templateUrl: './tool-requests.page.html',
    styleUrls: ['./tool-requests.page.scss'],
    standalone: true,
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonButton,
    IonIcon,
    IonContent,
    IonGrid,
    IonRow, IonCol,
        ToolRequestFiltersComponent,
    ToolRequestTableComponent,
    ],
})

/* TODO créer un observable pour écouter tout mouvement de demandes
* => l'ordinateur qui affiche les datas stats ou listes des demandes seront màj automatiquement
*/
export class ToolRequestsPage {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  protected readonly toolRequestFilterService: ToolRequestFilterService = inject(ToolRequestFilterService);

  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================
  protected readonly filteredToolRequestList: Signal<ToolRequest[]> = this.toolRequestFilterService.filteredToolRequestList;
  protected readonly toolRequestFilters = this.toolRequestFilterService.filters;

  public isAdmin = false;

  constructor(
    // private tableDataService: ToolRequestTableDataSourceService,
  ) {
    console.log("hello toolRequestPage");
  }

  /**
     * Gère les changements de filtres venant du composant enfant
     */
  filterChange(event: { columnProp: string, selectedValues: string[] }) {
    if (event.columnProp === 'reset') {
      this.toolRequestFilterService.resetFilters();
    } else {
      this.toolRequestFilterService.updateFilter(
        event.columnProp as keyof ToolRequest,
        event.selectedValues
      );
    }
  }

  reloadClick() {
    // this.tableDataService.refreshDatas();
  }
  nextClick() {
    // this.toolRequestsService.getNextPage();
  }
}
