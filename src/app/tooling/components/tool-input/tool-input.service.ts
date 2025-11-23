import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { share } from 'rxjs/operators';
import { Tool } from 'src/app/_interfaces/tooling/tool';

@Injectable({ providedIn: "root" })
export class ToolInputService implements OnInit {
    ngOnInit(): void {
        this.inputTool$
            .pipe(
                share()
            );
    }
    private toolInput: Subject<Tool> = new Subject();
    inputTool$: Observable<Tool> = this.toolInput.asObservable();

    emitTool(tool: Tool) {
        this.toolInput.next(tool);
    }
}