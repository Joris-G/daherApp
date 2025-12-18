import { Component, inject, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Tool } from 'src/app/tooling/tool';
import { ToolInputService } from './tool-input.service';
import { ToolInputDirective } from './tool-input.directive';
import { IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';

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
  imports: [ToolInputDirective, IonItem, IonInput, IonIcon]
})
export class ToolInputComponent implements ControlValueAccessor, OnInit {
  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly toolInputService = inject(ToolInputService);
  disabled = false;
  public tool: Tool;

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
