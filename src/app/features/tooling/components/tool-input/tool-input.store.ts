import { computed, inject, Injectable, signal } from '@angular/core';
import { catchError, debounceTime, distinctUntilChanged, of, Subject, switchMap, take, tap } from 'rxjs';
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

  setTool(tool: Tool) {
    this.tool.set(tool);
    this.searchToolList.set(null);
  }
  // TODO faire le this.tool.set après le selct dans la liste

    loadTool(input: string) {
        const value = input?.trim();
        if (!value) {return this.clear();}
       this.searchAction.next(value);

        // this.loading.set(true);
        // this.error.set(null);

        // this.toolService.getToolByInput(value)
        //     .pipe(
        //         take(1)
        //     )
        //     .subscribe({
        //         next: tool => this.tool.set(tool),
        //         error: () => {
        //             this.tool.set(null);
        //             this.error.set('Outillage introuvable');
        //         },
        //         complete: () => this.loading.set(false)
        //     });
    }

    clear() {
        this.tool.set(null);
        this.error.set(null);
        this.loading.set(false);
    }
}
