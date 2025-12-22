import { Directive, HostBinding, HostListener } from '@angular/core';
import { Tool } from 'src/app/tooling/tool';
import { ToolService } from '../../../../tooling/services/tool.service';
import { ToolInputService } from './tool-input.service';

@Directive({
    selector: '[toolInput]',
    standalone: true
})
export class ToolInputDirective {
    @HostListener('change', ['$event.target'])
    onChangeToolInput(eventTarget: any) {
        this.inputToolAction(eventTarget.value);
    }

    // @HostBinding('value')
    // toolInputValue: Tool;

    constructor(
        private toolService: ToolService,
        private toolInputService: ToolInputService,
    ) { }




    private inputToolAction(toolInput: string) {
        console.log(toolInput);
        this.toolService.getToolByInput(toolInput)
            .subscribe((responseTool: Tool) => {
                console.log(responseTool);
                this.toolInputService.emitTool(responseTool);
            });
    }
}