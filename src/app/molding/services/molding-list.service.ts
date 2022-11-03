import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { share } from 'rxjs/operators';
import { RequestService } from 'src/app/core/services/request.service';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MoldingListService {
  public filteredMoldings$: BehaviorSubject<Molding[]> = new BehaviorSubject([]);
  public page: BehaviorSubject<number> = new BehaviorSubject(1);
  public uniqueTools$: BehaviorSubject<Tool[]> = new BehaviorSubject([]);
  private moldings: Molding[] = [];
  private filteredMoldings: Molding[];
  private moldingsFilters = {
    tools: [],
    username: [],
  };

  constructor(
    private requestService: RequestService,
  ) {

    this.page.asObservable().subscribe((pageNumber) => {
      this.getMoldings(pageNumber).subscribe((moldings: Molding[]) => {
        this.moldings.push(...moldings);
        this.filteredMoldings = this.moldings;
        this.filteredMoldings$.next(this.filteredMoldings);
        this.uniqueTools$.next(this.moldings
          .filter((item, index) => {
            const firstMoldingWithSameOT = this.filteredMoldings.find(molding => molding.outillage === item.outillage);
            if (firstMoldingWithSameOT.id === item.id) { return true; }
            return false;
          })
          .map((molding => molding.OT)));
      });
    });
  }

  /**
   *
   *
   * @param [page=1]
   * @param [itemsPerPage=2]
   * @return retourne la liste complète des moulages
   * @memberof MoldingListService
   */
  getMoldings(page = 1, itemsPerPage = 5): Observable<Molding[]> {
    return this.requestService.createGetRequest(`${environment.moldingApi}moldings?page=${page}&itemsPerPage=${itemsPerPage}`)
      .pipe(
        // expand(response => response.next ? this.requestService.createGetRequest(response.next) : EMPTY),
        // reduce((acc, current) => acc.concat(current.results), []),
        share()
      );
  }

  getNextPage() {

  }
  resetFilters() {
    this.moldingsFilters = {
      tools: [],
      username: []
    };
    this.filteredMoldings$.next(this.moldings);
  }

  applyUserFilter(username: string) {
    this.moldingsFilters.username.push(username);
    this.applyFilters();
  }

  applyToolFilter(strTool: string | string[]) {

    this.moldingsFilters.tools = Array.from(strTool);
    this.applyFilters();
  }

  applyFilters() {
    const newList = this.filteredMoldings
      .filter(
        (molding, index) => {
          const toolCheck = this.isToolFilter(molding);
          const userCheck = this.isUserFilter(molding);
          return (toolCheck && userCheck);
        }
      );
    this.filteredMoldings$.next(newList);
  }

  private isToolFilter(molding: Molding): boolean {
    if (this.moldingsFilters.tools.length <= 0) { return true; }
    return this.moldingsFilters.tools.some(testTool => (molding.OT.sapToolNumber.toString().includes(testTool)));
  }

  private isUserFilter(molding: Molding): boolean {
    if (this.moldingsFilters.username.length <= 0) { return true; }
    return this.moldingsFilters.username.some(testUsername => (molding.userCreat.username.includes(testUsername)));
  }
}

