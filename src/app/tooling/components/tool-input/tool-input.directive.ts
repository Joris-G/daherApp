import { Directive, HostBinding, HostListener } from '@angular/core';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { ToolService } from '../../services/tool.service';
import { ToolInputService } from './tool-input.service';

@Directive({
    selector: '[toolInput]'
})
export class ToolInputDirective {
    @HostListener('change', ['$event.target'])
    onChangeToolInput(eventTarget: any) {
        this.inputToolAction(eventTarget.value);
    }

    @HostBinding('value')
    toolInputValue: Tool;

    constructor(
        private toolService: ToolService,
        private toolInputService: ToolInputService,
    ) { }




    private inputToolAction(toolInput: string) {
        this.toolService.getToolByInput(toolInput)
            .then((responseTool: Tool) => {
                this.toolInputService.emitTool(responseTool);
            });
    }
}