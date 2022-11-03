import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MoldingListService } from 'src/app/molding/services/molding-list.service';
import { Molding } from 'src/app/_interfaces/molding/molding';
import { Tool } from 'src/app/_interfaces/tooling/tool';

export class FiltersMolding {
  tools: string[] = [];
  userCreat: string[] = [];
}

@Component({
  selector: 'app-moldings-filters',
  templateUrl: './moldings-filters.component.html',
  styleUrls: ['./moldings-filters.component.scss'],
})
export class MoldingsFiltersComponent implements OnInit {
  // public filteredMoldings: Molding[] = [];
  public uniqueTools: Observable<Tool[]>;
  // public filteredMoldings$: Observable<Molding[]>;

  constructor(private moldingListService: MoldingListService) {
    this.uniqueTools = this.moldingListService.uniqueTools$.asObservable();
  }

  ngOnInit() {
    // this.filteredMoldings$ = this.moldingListService.filteredMoldings$.asObservable();
    // this.filteredMoldings$.subscribe({
    //   next: (moldings) => {
    //     // console.log(moldings);
    //     this.filteredMoldings = moldings;

    //   }
    // });
  }

  filterToolNameChange(ev) {
    console.log(ev.value);
    this.moldingListService.applyToolFilter(ev.value);
  }
  filterToolChange(ev) {
    const tools: Tool[] = ev.detail.value;
    const forFilter = tools.map(tool => tool.sapToolNumber.toString());
    this.moldingListService.applyToolFilter(forFilter);
  }
  filterCreateByChange(ev: string | number) {
    const username = ev.toString();
    console.log(username);
    this.moldingListService.applyUserFilter(username);
  }
  resetFiltersClick() {

    this.moldingListService.resetFilters();
  }
}
