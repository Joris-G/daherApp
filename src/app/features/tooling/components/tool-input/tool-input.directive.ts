import { Directive, HostListener, inject } from '@angular/core';
import { ToolInputStore } from './tool-input.store';

@Directive({
    selector: '[toolInput]',
    standalone: true
})
export class ToolInputDirective {
    private readonly store = inject(ToolInputStore);

    @HostListener('ionChange', ['<CustomEvent>$event.detail.value'])
    onInput(value: string) {
        this.store.loadTool(value);
    }
}