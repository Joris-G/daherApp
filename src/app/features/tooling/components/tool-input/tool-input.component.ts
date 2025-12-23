import { ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, signal, SimpleChanges } from '@angular/core';
import { AsyncValidatorFn, ControlValueAccessor, FormControl, FormControlOptions, NG_VALUE_ACCESSOR, NgModel, ValidationErrors, ValidatorFn } from '@angular/forms';
import { Tool } from 'src/app/tooling/tool';
import { ToolInputService } from './tool-input.service';
import { ToolInputDirective } from './tool-input.directive';
import { IonIcon, IonInput, IonItem } from '@ionic/angular/standalone';
import { Observable } from 'rxjs';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ToolInputDirective, IonItem, IonInput, IonIcon]
})
export class ToolInputComponent implements ControlValueAccessor, OnInit {

  ////////////////////////////////////////////////////
  //INJECTION DEPENDANCES
  ////////////////////////////////////////////////////
  private readonly toolInputService = inject(ToolInputService);
  readonly value = signal<Tool>(null);
  readonly disabled = signal<boolean>(false);

  // public tool: Tool;

  ngOnInit(): void {
    this.toolInputService.inputTool$
      .subscribe((tool) => {
        this.value.set(tool);
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
    this.value.set(tool);
  }

  registerOnChange(onChange: any): void {
    this.onChange = onChange;
  }
  registerOnTouched(onTouched: any): void {
    this.onTouched = onTouched;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }


}
