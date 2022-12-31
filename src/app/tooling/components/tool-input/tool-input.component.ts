import { Component, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-tool-input',
  templateUrl: './tool-input.component.html',
  styleUrls: ['./tool-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: ToolInputComponent
    }
  ]
})
export class ToolInputComponent implements ControlValueAccessor, OnInit {
  @ViewChild('input[toolInput]')
  toolInput: HTMLInputElement;

  @Output()
  emitTool: EventEmitter<Tool>
  public toolIsLoading = false;
  disabled = false;
  public tool: Tool;

  constructor(
    private toolService: ToolService,
  ) { }
  ngOnInit(): void {
    fromEvent(this.toolInput, 'change')
      .subscribe((input) => console.log(input));
  }


  onChange = (tool: Tool) => { };
  onTouched = () => { };

  toolOnChange() {
    this.toolIsLoading = true;
    this.toolService.getToolByInput(this.toolInput.value)
      .then((responseTool: Tool) => {
        console.log(responseTool);
        this.onChange(responseTool);
        this.tool = responseTool;
        this.toolIsLoading = false;
      },
        () => {
          this.onChange(null);
          this.tool = null;
          this.toolInput.value = '';
          this.toolIsLoading = false;
          // this.evOnToolChange.emit(null);
        });
  }


  writeValue(tool: Tool): void {
    this.tool = tool;
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }


}
