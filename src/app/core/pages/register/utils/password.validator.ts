import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

/**
  * 
  *
  * @param {string} matchTo  name of the control to match to
  * @return {*}  {((AbstractControl) => ValidationErrors | null)}
  * @memberof RegisterFormComponent
  */
export const matchValues = (matchTo: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const parent = control.parent;
    if (!parent) return null;

    const matchControl = parent.get(matchTo);
    if (!matchControl) return null;

    const isMatching = control.value === matchControl.value;

    return isMatching ? null : { isMatching: false };
  };
};