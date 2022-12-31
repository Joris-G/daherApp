import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { switchMap, share } from 'rxjs/operators';
import { RequestService } from 'src/app/shared/services/request.service';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { environment } from 'src/environments/environment';

@Injectable()
export class ToolRequestsService {
  public requestsAreLoading: boolean;
  public filtersList: Subject<ToolRequest[]> = new Subject();
  public filterSelectObjects = [
    {
      name: 'Statut',
      columnProp: 'statut',
      options: []
    },
    {
      name: 'Type de demande',
      columnProp: 'type',
      options: []
    },
    {
      name: 'Demandeur',
      columnProp: 'demandeur',
      options: []
    },
    {
      name: 'Outillage',
      columnProp: 'tool',
      options: []
    },
  ];
  public allToolRequests: BehaviorSubject<ToolRequest[]> = new BehaviorSubject([]);
  private filters: BehaviorSubject<{ data: string, value: string }[]> = new BehaviorSubject([]);
  private toolRequestsList: ToolRequest[] = [];
  private pageCounter: BehaviorSubject<number> = new BehaviorSubject(1);
  constructor(
    private requestService: RequestService,
  ) {
    this.pageCounter.asObservable()
      .pipe(
        switchMap((pageNumber) => {
          this.requestsAreLoading = true;
          return this.getToolRequests(pageNumber, 3)
        }),
        switchMap((newToolRequestsElements: ToolRequest[]) => {
          this.toolRequestsList.push(...newToolRequestsElements);
          this.populateFilter();
          return of(this.filterData());
        })
      )
      .subscribe((filterResult: ToolRequest[]) => {
        this.requestsAreLoading = false;
        this.filtersList.next(filterResult);
      });

    // this.getAllToolRequests().subscribe((toolRequests: ToolRequest[]) => {
    //   this.allToolRequests.next(toolRequests);
    // });

    this.filters.subscribe(() => {
      this.filtersList.next(this.filterData());
    });
  }

  getAllToolRequests(): Observable<ToolRequest[]> {
    return this.requestService.createGetRequest(`${environment.toolApi}demandes`)
      .pipe(
        share()
      );
  }

  getToolRequests(page: number, itemsPerPage: number): Observable<ToolRequest[]> {
    return this.requestService.createGetRequest(`${environment.toolApi}demandes`, { page, itemsPerPage })
      .pipe(
        share()
      );
  }

  getNextPage() {
    let currentPage = this.pageCounter.getValue();
    this.pageCounter.next(currentPage + 1);
  }


  addFilter(filterToAdd) {
    const previousFilters = this.filters.getValue();
    const duplicateFilterIndex = previousFilters.findIndex((filterToTest) => filterToTest.data === filterToAdd.data);
    if (duplicateFilterIndex !== -1) {
      previousFilters[duplicateFilterIndex] = filterToAdd
    } else {
      previousFilters.push(filterToAdd);
    }
    this.filters.next(previousFilters);
  }

  resetFilters() {
    this.filters.next([]);
  }


  filterData(): ToolRequest[] {
    const filters = this.filters.getValue();
    if (filters.length === 0) { return this.toolRequestsList }
    return this.toolRequestsList.filter(
      (toolRequest) => filters.every(
        (filter) => {
          const val1 = this.getCompareElement(filter.data, toolRequest)
          const val2 = filter.value;
          return val1 === val2;
        }
      )
    );
  }

  private populateFilter() {
    this.filterSelectObjects.forEach((ionSelect) => {
      this.toolRequestsList.forEach((toolRequest) => {
        const compareElement = this.getCompareElement(ionSelect.columnProp, toolRequest)
        if (!ionSelect.options.find((option) => option == compareElement)) {
          ionSelect.options.push(compareElement);
        }
      });
    });
  }
  private getCompareElement(filterProp: string, toolRequest): string {
    if (filterProp === 'tool') {
      if (toolRequest.type === 'Maintenance') {
        return toolRequest.maintenance.outillage.sapToolNumber;
      } else if (toolRequest.type === 'Controle') {
        return toolRequest.controle.outillage.sapToolNumber;
      }
    }
    if (filterProp === 'demandeur') {
      if (toolRequest.type === 'Maintenance') {
        return toolRequest.maintenance.demandeur.username;
      }
      if (toolRequest.type === 'Controle') {
        return toolRequest.controle.demandeur.username;
      }
    }

    return toolRequest[filterProp];
  }
}
