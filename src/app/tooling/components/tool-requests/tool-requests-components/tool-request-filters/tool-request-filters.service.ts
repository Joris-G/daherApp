import { computed, inject, Injectable, signal, Signal } from "@angular/core";
import { filterSelectObjects, ToolRequestFilter } from "src/app/tooling/tool-request-filters";
import { ToolRequest } from "src/app/tooling/tool-request-types";
import { ToolRequestService } from "src/app/tooling/services/tool-request.service";
import { ToolRequestListStore } from "src/app/tooling/stores/tool-request-list.store";

@Injectable({ providedIn: "root" })
  /**
   * Service de gestion des filtres appliqués à la liste des demandes d'outillage.
   */
export class ToolRequestFilterService {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly toolRequestListStore = inject(ToolRequestListStore);
  // private readonly toolRequestService = inject(ToolRequestService);

  ////////////////////////////////////////////////////
  //PROPRIETES
  ////////////////////////////////////////////////////
  private readonly _filters = filterSelectObjects;

  public readonly filters: Signal<ToolRequestFilter[]> = computed(() => {
    const filteredList = this.filteredToolRequestList();
    const activeFilters = this.selectedFilters();

    // const toolRequestList = this.toolRequestService.toolRequestList();
    return this._filters.map((filter) => {
      const updatedFilter: ToolRequestFilter = {
        ...filter,
        options: []
      };
      const uniqueOptions = new Set<string>();
      filteredList.forEach(toolRequest => {
        const compareElement = this.getCompareElement(filter.columnProp, toolRequest);
        if (compareElement) {
          uniqueOptions.add(compareElement);
        }
      });

      // Convertir le Set en tableau trié
      updatedFilter.options = Array.from(uniqueOptions).sort();

       const currentSelection = activeFilters[filter.columnProp];
      if (currentSelection) {
        currentSelection.forEach(selectedValue => {
          if (!uniqueOptions.has(selectedValue)) {
            uniqueOptions.add(selectedValue);
          }
        });
        // Re-tri après ajout des sélections
        updatedFilter.options = Array.from(uniqueOptions).sort();
      }
      
      return updatedFilter;
    })

  });

  public readonly filteredToolRequestList: Signal<ToolRequest[]> = computed(() => {
    const allRequests = this.toolRequestListStore.toolRequestList();
    const activeFilters = this.selectedFilters();

    if (Object.keys(activeFilters).length === 0) {
      return allRequests; // Pas de filtre = toutes les demandes
    }

    return allRequests.filter(request => {
      return Object.entries(activeFilters).every(([key, selectedValues]) => {
        if (!selectedValues || selectedValues.length === 0) return true;

        const prop = key as keyof ToolRequest;
        const compareElement = this.getCompareElement(prop, request);
        return selectedValues.includes(compareElement || '');
      });
    });
  });

  // ============================================================================
  // FILTRES APPLIQUÉS
  // ============================================================================
  private readonly selectedFilters = signal<Partial<Record<keyof ToolRequest, string[]>>>({});


  constructor() {
    console.log("hello toolRequestFilterService");
  }

  // ============================================================================
  // MÉTHODES PUBLIQUES
  // ============================================================================
  public updateFilter(columnProp: keyof ToolRequest, selectedValues: string[]) {
    const currentFilters = { ...this.selectedFilters() };

    if (selectedValues.length === 0) {
      delete currentFilters[columnProp];
    } else {
      currentFilters[columnProp] = selectedValues;
    }

    this.selectedFilters.set(currentFilters);
  }

  public resetFilters() {
    this.selectedFilters.set({});
  }

  // ============================================================================
  // MÉTHODE PRIVÉE
  // ============================================================================
  private getCompareElement(filterProp: string, toolRequest: ToolRequest): string {
    if (filterProp === 'tool') {
      return toolRequest.tool.identification;
    }
    if (filterProp === 'demandeur') {
      return toolRequest.demandeur.nom;
    }
    return toolRequest[filterProp];
  }
}