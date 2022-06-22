import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, FormControl, FormControlName, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { ToolService } from 'src/app/_services/tooling/tools/tool.service';

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
export class ToolInputComponent implements OnInit, ControlValueAccessor {
  // @Output() evOnToolChange: EventEmitter<Tool> = new EventEmitter<Tool>();
  @ViewChild('toolNumber') toolNumber: IonInput;
  public toolIsLoading = false;
  disabled = false;
  public tool: Tool;

  constructor(
    private toolService: ToolService,
  ) {
  }
  public onChange = (tool: Tool) => { };
  public onTouched = () => { };
  ngOnInit() { }


  toolOnChange(inputOTValue: string) {
    this.toolIsLoading = true;
    this.toolService.getToolByInput(inputOTValue)
      .then((responseTool: Tool) => {
        this.onChange(responseTool);
        this.tool = responseTool;
        // this.evOnToolChange.emit(this.tool);
        this.toolIsLoading = false;
      },
        () => {
          console.log('tool egal null');
          this.onChange(null);
          this.tool = null;
          this.toolNumber.value = '';
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
