import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { switchMap, share, finalize, map } from 'rxjs/operators';
import { RequestService } from 'src/app/core/services/request.service';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request';
import { environment } from 'src/environments/environment';

@Injectable()
export class ToolRequestsService {
  public filtersList: Subject<ToolRequest[]> = new Subject();
  public allToolRequests: BehaviorSubject<ToolRequest[]> = new BehaviorSubject([]);
  public filters: BehaviorSubject<{ data: string, value: string }[]> = new BehaviorSubject([{ data: 'statut', value: 'NOUVELLE' }]);
  private toolRequestsList: ToolRequest[] = [];
  private pageCounter: BehaviorSubject<number> = new BehaviorSubject(1);
  constructor(
    private requestService: RequestService,
  ) {
    this.pageCounter.asObservable()
      .pipe(
        switchMap((pageNumber) => this.getToolRequests(pageNumber, 5)),
        switchMap((newToolRequestsElements: ToolRequest[]) => {
          this.toolRequestsList.push(...newToolRequestsElements);
          return of(this.filterData());
        })
      )
      .subscribe((filterResult: ToolRequest[]) => {
        this.filtersList.next(filterResult);
      });

    this.getAllToolRequests().subscribe((toolRequests: ToolRequest[]) => {
      this.allToolRequests.next(toolRequests);
    })

    this.filters.subscribe(() => {
      this.filtersList.next(this.filterData());
    })
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
    const filters = this.filters.getValue();
    const duplicateFilterIndex = filters.findIndex((filterToTest) => filterToTest.data === filterToAdd.data);
    if (duplicateFilterIndex !== -1) {
      filters[duplicateFilterIndex] = filterToAdd
    } else {

      filters.push(filterToAdd);
    }
    this.filters.next(filters);
  }
  filterData(): ToolRequest[] {
    const filters = this.filters.getValue();
    console.log(filters);
    if (filters.length === 0) { return this.toolRequestsList }
    return this.toolRequestsList.filter((toolRequest) => {
      return filters.every(filter => {
        return toolRequest[filter.data] === filter.value
      });
    });
  }
}
