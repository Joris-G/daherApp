import { inject, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpecCtrlCreation, SpecCtrlRequestControls } from '../../models/controle-3d-request.model';
import { dateAfterValidator } from 'src/app/shared/utils/forms/validators/compare-date.validator';


@Injectable({
  providedIn: 'root',
})
export class ControlRequestFormBuilder {
  private fb = inject(FormBuilder);

  public createSpecCtrlForm(initialValue?: Partial<SpecCtrlCreation>): FormGroup<SpecCtrlRequestControls> {
    return this.fb.group({
      bloquantProd: [initialValue?.bloquantProd ?? false, { nonNullable: true, validators: [Validators.required] }],
      dateBesoin: [initialValue?.dateBesoin ?? null, Validators.required],
      fichier: [initialValue?.fichier ?? null],
      image: [initialValue?.image ?? null],
      tool: [initialValue?.tool ?? null],
      // Informations plan
      refPlan: [initialValue?.refPlan ?? '', Validators.required],
      indPlan: [initialValue?.indPlan ?? '', Validators.required],
      cheminCAO: [initialValue?.cheminCAO ?? ''],

      // Description
      description: [initialValue?.description ?? '', Validators.required],
      detailsControle: [initialValue?.detailsControle ?? '', Validators.required],
      tolerances: [initialValue?.tolerances ?? '', Validators.required],

      // Dates
      dispoOut: [initialValue?.dispoOut ?? null, { validators: [Validators.required] }],

      // Type de contrôle
      typeRapport: [initialValue?.typeRapport ?? null],
      moyenMesure: [initialValue?.moyenMesure ?? null],

      // Informations complémentaires
      infosComplementaire: [initialValue?.infosComplementaire ?? ''],
      visaControleur: [initialValue?.visaControleur ?? ''],
      interventionDate: [initialValue?.interventionDate ?? null],
      // Options
      immobilisationOutillage: [initialValue?.immobilisationOutillage ?? null],
      ligneBudgetaire:[initialValue?.infosComplementaire ?? ''],
    }, {
      validators: dateAfterValidator<SpecCtrlRequestControls>('dispoOut', 'dateBesoin')
    });
  }
}
