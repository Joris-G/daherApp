import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Tool } from 'src/app/_interfaces/tooling/tool';
import { ToolService } from 'src/app/tooling/services/tool.service';
import { ToolInputService } from './tool-input.service';
import { IonicModule } from '@ionic/angular';
import { ToolInputDirective } from './tool-input.directive';
import { NgIf } from '@angular/common';

@Component({
    selector: 'app-tool-input',
    templateUrl: './tool-input.component.html',
    styleUrls: ['./tool-input.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: ToolInputComponent
        },
    ],
    standalone: true,
    imports: [IonicModule, ToolInputDirective, NgIf]
})
export class ToolInputComponent implements ControlValueAccessor, OnInit {
  disabled = false;
  public tool: Tool;

  constructor(
    private toolInputService: ToolInputService
  ) { }
  ngOnInit(): void {
    this.toolInputService.inputTool$
      .subscribe((tool) => {
        this.tool = tool;
        this.onChange(tool);
      });
  }



  // onInputChange() {
  //   const value = this.inputElementRef.nativeElement.value;
  //   this.onChange(value);
  // }

  onChange = (tool: Tool) => { };
  onTouched = () => { };

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
