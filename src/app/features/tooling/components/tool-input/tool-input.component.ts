import { ChangeDetectionStrategy, Component, effect, inject, signal, untracked, } from '@angular/core';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import { Tool } from 'src/app/features/tooling/models/tool.model';
import { IonIcon, IonInput, IonItem, IonSpinner, IonText, IonList } from '@ionic/angular/standalone';
import { ToolInputStore } from './tool-input.store';
import { ToolLabelPipe } from './tool-label-pipe';
import { InputConfigDirective } from 'src/app/shared/directives/input-config.directive';
import type { InputInputEventDetail, IonInputCustomEvent } from '@ionic/core';

const TOOL_INPUT_VALIDATOR: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => control.value ? null : { toolRequired: true };

@Component({
    selector: 'app-tool-input',
    templateUrl: './tool-input.component.html',
    styleUrls: ['./tool-input.component.scss'],
    providers: [
      ToolInputStore,
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: ToolInputComponent
        },
      {
        provide: NG_VALIDATORS,
        useValue: TOOL_INPUT_VALIDATOR,
        multi: true
      }
    ],
    standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IonList, ToolLabelPipe, IonItem, IonInput, IonIcon, IonSpinner, IonText, InputConfigDirective]
})
export class ToolInputComponent implements ControlValueAccessor, Validator {
  readonly store = inject(ToolInputStore);

  readonly disabled = signal(false);

  private onChange: (tool: Tool | null) => void = () => { };
  protected onTouched = () => { };

  protected searchToolList = this.store.searchToolList;

  // readonly tool = this.store.tool;
  // readonly loading = this.store.loading;
  // readonly error = this.store.error;
  // readonly success = this.store.success;

  // readonly statusIcon = computed(() => {
  //   if (this.loading()) return 'spinner';
  //   if (this.error()) return 'close-outline';
  //   if (this.success()) return 'checkmark';
  //   return null;
  // });

  // readonly statusColor = computed(() => {
  //   if (this.error()) return 'danger';
  //   if (this.success()) return 'success';
  //   return 'medium';
  // });


  constructor() {
    effect(() => {
      const currentTool = this.store.tool();
      untracked(() => this.onChange(currentTool));
    });
  }

  writeValue(tool: Tool | null): void {
    this.store.tool.set(tool);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }

  validate(): ValidationErrors | null {
    return this.store.tool() ? null : { toolRequired: true };
  }

  clear() {
    this.store.clear();
    this.onTouched();
  }

  /**
   * @description Gère la saisie utilisateur
   * @param {IonInputCustomEvent<InputInputEventDetail>} event CustomEvent de ionInput
   */
  handleInput(event: IonInputCustomEvent<InputInputEventDetail>): void {
    const value = event.detail.value;
    this.store.findTool(value);
  }


  onSelectedTool(tool: Tool) {
    this.store.setTool(tool);
  }
}
