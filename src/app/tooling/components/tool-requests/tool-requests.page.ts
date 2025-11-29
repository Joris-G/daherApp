import { Component, inject, Signal } from '@angular/core';
import { ToolRequestFiltersComponent } from './tool-requests-components/tool-request-filters/tool-request-filters.component';
import { ToolRequestTableComponent } from './tool-requests-components/tool-request-table/tool-request-table.component';
import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonRow, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ToolRequest } from 'src/app/tooling/tool-request-types';
import { ToolRequestFilterService } from './tool-requests-components/tool-request-filters/tool-request-filters.service';
import { ToolRequestService } from '../../services/tool-request.service';
import { ToolRequestListStore } from '../../stores/tool-request-list.store';

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
  /**
   * Page d'affichage et de filtrage de la liste des demandes d'outillage.
   * Utilise ToolRequestListStore pour la gestion des données de la liste.
   */
export class ToolRequestsPage {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  protected readonly toolRequestFilterService: ToolRequestFilterService = inject(ToolRequestFilterService);
  private readonly toolRequestListStore: ToolRequestListStore = inject(ToolRequestListStore);
  // ============================================================================
  // PROPRIÉTÉS
  // ============================================================================
  /** Liste des demandes filtrées affichées dans le tableau. */
  protected readonly filteredToolRequestList: Signal<ToolRequest[]> = this.toolRequestFilterService.filteredToolRequestList;
  /** Liste des filtres disponibles. */
  protected readonly toolRequestFilters = this.toolRequestFilterService.filters;
  /** État de chargement de la liste. */
  protected readonly isLoadingList = this.toolRequestListStore.isLoadingList; // Utilisation du Store

  public isAdmin = false;

  ionViewWillEnter() {
    this.reloadRequestList();
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

  reloadRequestList() {
    this.toolRequestListStore.loadToolRequests();
  }
  nextClick() {
    // this.toolRequestsService.getNextPage();
  }
}
