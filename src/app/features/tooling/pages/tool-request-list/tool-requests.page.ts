import { AfterViewInit, Component, effect, inject, Signal } from '@angular/core';
import { ToolRequestTableComponent } from '../../components/tool-request-table/tool-request-table.component';
import { ToolRequestFilterService } from '../../components/tool-request-filters/tool-request-filters.service';
import { ToolRequestListStore } from '../../stores/tool-request-list.store';
import { ToolRequest } from '../../models/tool-request.model';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { CardModule } from 'primeng/card';
import { ToolRequestFiltersComponent } from '../../components/tool-request-filters/tool-request-filters.component';


@Component({
  standalone: true,
    templateUrl: './tool-requests.page.html',
    styleUrls: ['./tool-requests.page.scss'],
  imports: [ToolRequestTableComponent,
    CardModule,
    ToolRequestFiltersComponent,
    ]
})
  /**
   * Page d'affichage et de filtrage de la liste des demandes d'outillage.
   * Utilise ToolRequestListStore pour la gestion des données de la liste.
   */
export class ToolRequestsPage implements AfterViewInit {
  // ============================================================================
  // INJECTION DE DÉPENDANCES
  // ============================================================================
  protected readonly toolRequestFilterService = inject(ToolRequestFilterService);
  private readonly toolRequestListStore  = inject(ToolRequestListStore);
  private readonly loaderService = inject(LoadingService);
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


constructor() {
  effect(()=>{
    const store = this.toolRequestListStore;
    if (store.isLoadingList()) {
      this.loaderService.startLoading('Chargement des demandes');
    }else{
      this.loaderService.stopLoading();
    }
  });

}
  ngAfterViewInit(): void {
    this.reloadRequestList();
  }



  /**
   * Gère les changements de filtres venant du composant enfant
   * @param event
   * @param event.columnProp
   * @param event.selectedValues
   */
  filterChange(event: { columnProp: string; selectedValues: string[] }) {
    console.log(event);
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
