import { Component, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { IonInput } from '@ionic/angular';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { ToolService } from 'src/app/tooling/services/tool.service';

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
  @ViewChild('toolNumber') toolNumber: IonInput;
  public toolIsLoading = false;
  disabled = false;
  public tool: Tool;

  constructor(
    private toolService: ToolService,
  ) { }


  onChange = (tool: Tool) => { };
  onTouched = () => { };

  ngOnInit() { }


  toolOnChange(inputOTValue: string) {
    this.toolIsLoading = true;
    this.toolService.getToolByInput(inputOTValue)
      .then((responseTool: Tool) => {
        console.log(responseTool);
        this.onChange(responseTool);
        this.tool = responseTool;
        this.toolIsLoading = false;
      },
        () => {
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
