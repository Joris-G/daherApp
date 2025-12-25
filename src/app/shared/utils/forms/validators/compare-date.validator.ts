import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

/**
 * Validateur personnalisé pour comparer deux dates au sein d'un FormGroup.
 * @param startControlName Nom du contrôle de la date de début.
 * @param endControlName Nom du contrôle de la date de fin.
 * @returns Une fonction de validation (ValidatorFn).
 */
export function dateAfterValidator<Controls>(startControlName: keyof Controls & string, endControlName: keyof Controls & string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const startControl = control.get(startControlName);
        const endControl = control.get(endControlName);
        if (!startControl || !endControl) return null;

        const startValue = startControl.value;
        const endValue = endControl.value;
        if (!startValue || !endValue) return null;

        const isInvalid = new Date(endValue) < new Date(startValue);
        if (isInvalid) {
            startControl.setErrors({ ...startControl.errors, dateMismatch: true});
            endControl.setErrors({ ...endControl.errors, dateMismatch: true });
                            endControl.markAsTouched();
                startControl.markAsTouched();
        } else {
            if (endControl.hasError('dateMismatch')) {
                const { dateMismatch, ...remainingErrors } = endControl.errors || {};
                const hasRemaining = Object.keys(remainingErrors).length > 0;
                endControl.setErrors(hasRemaining ? remainingErrors : null);
                endControl.markAsTouched();
                startControl.markAsTouched();
            }
            if (startControl.hasError('dateMismatch')) {
                const { dateMismatch, ...remainingErrors } = startControl.errors || {};
                const hasRemaining = Object.keys(remainingErrors).length > 0;
                startControl.setErrors(hasRemaining ? remainingErrors : null);
                startControl.markAsTouched();
                endControl.markAsTouched();
            }
        }
        return isInvalid ? { dateMismatch: true } : null;
    };
}