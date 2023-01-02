import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputCustomEvent, IonInput } from '@ionic/angular';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { ToolService } from 'src/app/tooling/services/tool.service';

@Component({
  selector: 'app-tool-input',
  templateUrl: './tool-input.component.html',
  styleUrls: ['./tool-input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: false,
      useExisting: ToolInputComponent
    }
  ]
})
// export class ToolInputComponent implements ControlValueAccessor {
export class ToolInputComponent {
  // @ViewChild('toolInput')
  // toolInput: IonInput;

  @Output()
  emitTool: EventEmitter<Tool> = new EventEmitter()
  public toolIsLoading = false;
  disabled = false;
  public tool: Tool;

  constructor(
    private toolService: ToolService,
  ) { }

  // onChange = (tool: Tool) => { };
  // onTouched = () => { };

  toolOnChange(toolEvent: any) {
    console.log(toolEvent);
    // this.toolIsLoading = true;
    // this.toolService.getToolByInput((toolEvent as InputCustomEvent).detail.value)
    //   .then((responseTool: Tool) => {
    //     // console.log(responseTool);
    //     // this.onChange(responseTool);
    //     this.tool = responseTool;
    //     this.toolIsLoading = false;
    //   },
    //     () => {
    //       this.onChange(null);
    //       this.tool = null;
    //       // this.toolInput.value = '';
    //       this.toolIsLoading = false;
    //       // this.evOnToolChange.emit(null);
    //     });
  }


  // writeValue(tool: Tool): void {
  //   this.tool = tool;
  // }

  // registerOnChange(onChange: any): void {
  //   this.onChange = onChange;
  // }
  // registerOnTouched(onTouched: any): void {
  //   this.onTouched = onTouched;
  // }
  // setDisabledState?(isDisabled: boolean): void {
  //   this.disabled = isDisabled;
  // }


}
