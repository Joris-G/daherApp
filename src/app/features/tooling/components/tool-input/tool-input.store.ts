import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, debounceTime, delay, distinctUntilChanged, of, Subject, switchMap, take, tap } from 'rxjs';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { Tool } from 'src/app/features/tooling/models/tool.model';

@Injectable()
export class ToolInputStore {
    private readonly toolService = inject(ToolService);
    private readonly searchAction = new Subject<string>();

  readonly searchToolList = signal<Tool[] | null>(null);
    readonly tool = signal<Tool | null>(null);
    readonly loading = signal(false);
    readonly error = signal<string | null>(null);

    readonly success = computed(() => !!this.tool() && !this.loading());
    readonly hasError = computed(() => !!this.error());

constructor() {
    this.setupSearchEffect();
  }

  private setupSearchEffect() {
    this.searchAction.pipe(
      // debounceTime(300),
      distinctUntilChanged(),
      tap(() => {
        this.loading.set(true);
        this.error.set(null);
        this.tool.set(null);
      }),
      switchMap(value =>
        this.toolService.searchToolsByInput(value).pipe(
          delay(700),
          catchError(() => {
            this.error.set('Outillage introuvable');
            return of(null);
          })
        )
      ),
      tap(tools => {
        this.searchToolList.set(tools);
        this.loading.set(false);
      })
    ).subscribe();
  }


  /**
   * @description
   * @author Joris GRANGIER  e-mail : joris-web-dev@gmail.com
   * @date 25/12/2025
   * @param {Tool} tool
   */
  setTool(tool: Tool) {
    this.tool.set(tool);
    this.searchToolList.set(null);
  }

  /**
   * @description 
   * @author Joris GRANGIER  e-mail : joris-web-dev@gmail.com
   * @date 25/12/2025
   * @param {string} input
   * @returns {*} 
   */
  findTool(input: string): void {
    console.log(input);
    const value = input?.trim();
    if (!value) return this.clear();
    this.searchAction.next(value);
  }

  /**
   * @description
   * @author Joris GRANGIER  e-mail : joris-web-dev@gmail.com
   * @date 25/12/2025
   */
    clear() {
        this.tool.set(null);
        this.error.set(null);
        this.loading.set(false);
    }
}
