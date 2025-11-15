
import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { ToolRequest } from 'src/app/_interfaces/tooling/tool-request-types';
import { ToolRequestService } from '../../../services/tool-request.service';


export class RequestDataSource extends DataSource<any> {
  public loading$: Observable<boolean>;
  private requestsSubject = new BehaviorSubject<ToolRequest[]>([]);
  private loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(
    private toolRequestService: ToolRequestService
  ) {
    super();
    this.loading$ = this.loadingSubject.asObservable();
  }
  connect(collectionViewer: CollectionViewer): Observable<ToolRequest[]> {
    return this.requestsSubject.asObservable();
  }
  disconnect(collectionViewer: CollectionViewer): void {
    console.log('complete');
    this.requestsSubject.complete();
    this.loadingSubject.complete();
  }

  loadRequests() {
    this.loadingSubject.next(true);
    this.toolRequestService.getToolRequests()
      .pipe(
        catchError(() => of([])),
        finalize(() => this.loadingSubject.next(false))
      )
      .subscribe(requests => this.requestsSubject.next(requests));
  }

  filter() {
    console.log('filter');
    this.requestsSubject.next([]);
  }

}
