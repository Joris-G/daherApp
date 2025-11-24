import { inject, Injectable } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OutillNoRefSAP } from 'src/app/_interfaces/tooling/tool';
import { MaintenanceItem, RequestType, SpecCtrlFormValue, SpecMaintenanceFormValue, SpecSBOFormValue, ToolRequestFormValue } from 'src/app/_interfaces/tooling/tool-request-types';

// ============================================================================
// TYPES POUR TYPED FORMS
// ============================================================================

// Type helper pour créer des FormGroups typés
type TypedFormGroup<T> = FormGroup<{
  [K in keyof T]: FormControl<T[K]>;
}>;
@Injectable({
  providedIn: 'root',
})
export class ToolRequestFormBuilder {
  private fb = inject(FormBuilder);

  
  // ==========================================================================
  // TOOL REQUEST PRINCIPAL
  // ==========================================================================

  createToolRequestForm(initialValue?: ToolRequestFormValue): FormGroup {
    return this.fb.group({
      type: [initialValue?.type ?? RequestType.SBO, Validators.required],
      bloquantProd: [initialValue?.bloquantProd ?? false, Validators.required],
      dateBesoin: [initialValue?.dateBesoin ?? null, Validators.required],
      groupeAffectation: [initialValue?.groupeAffectation ?? null],
      toolingNote: [initialValue?.toolingNote ?? ''],
      typeData: initialValue?.typeData ?? null,

    });
  }

  // ==========================================================================
  // OUTILLAGE SANS REF SAP
  // ==========================================================================

  createOutillNoRefSAPForm(initialValue?: Partial<OutillNoRefSAP>): FormGroup {
    return this.fb.group({
      identification: [initialValue?.identification ?? '', Validators.required],
      description: [initialValue?.description ?? '', Validators.required],
      localisation: [initialValue?.localisation ?? '', Validators.required]
    });
  }

  // ==========================================================================
  // SPÉCIFICATIONS CONTRÔLE
  // ==========================================================================

  createSpecCtrlForm(initialValue?: Partial<SpecCtrlFormValue>): FormGroup {
    return this.fb.group({
      // Informations plan
      refPlan: [initialValue?.refPlan ?? '', Validators.required],
      indPlan: [initialValue?.indPlan ?? '', Validators.required],
      cheminCAO: [initialValue?.cheminCAO ?? ''],

      // Description
      description: [initialValue?.description ?? '', Validators.required],
      detailsControle: [initialValue?.detailsControle ?? ''],
      tolerances: [initialValue?.tolerances ?? ''],

      // Dates
      dateBesoin: [initialValue?.dateBesoin ?? null, Validators.required],
      dispoOut: [initialValue?.dispoOut ?? null],

      // Type de contrôle
      typeRapport: [initialValue?.typeRapport ?? null],
      moyenMesure: [initialValue?.moyenMesure ?? null],

      // Informations complémentaires
      infosComplementaire: [initialValue?.infosComplementaire ?? ''],
      ligneBudgetaire: [initialValue?.ligneBudgetaire ?? '', Validators.required],
      visaControleur: [initialValue?.visaControleur ?? ''],

      // Outillage
      outillage: [initialValue?.outillage ?? null],
      outillNoRefSAP: this.createOutillNoRefSAPForm(initialValue?.outillNoRefSAP),

      // Options
      bloquantProd: [initialValue?.bloquantProd ?? false],
      immobilisationOutillage: [initialValue?.immobilisationOutillage ?? false]
    });
  }

  // ==========================================================================
  // MAINTENANCE ITEM (ligne d'action corrective)
  // ==========================================================================

  createMaintenanceItemForm(rep: number, initialValue?: Partial<MaintenanceItem>): FormGroup {
    return this.fb.group({
      rep: [{ value: rep, disabled: true }],
      nonConformite: [initialValue?.nonConformite ?? '', Validators.required],
      actionsCorrectives: [initialValue?.actionsCorrectives ?? '', Validators.required],
      respo: [initialValue?.respo ?? ''],
      delaiAction: [initialValue?.delaiAction ?? null, Validators.required],
      userReal: [initialValue?.userReal ?? ''],
      dateReal: [initialValue?.dateReal ?? null]
    });
  }

  // ==========================================================================
  // SPÉCIFICATIONS MAINTENANCE (avec FormArray)
  // ==========================================================================

  createSpecMaintenanceForm(initialValue?: Partial<SpecMaintenanceFormValue>): FormGroup {
    const itemsArray = this.fb.array(
      initialValue?.itemActionCorrective?.length
        ? initialValue.itemActionCorrective.map((item, index) => 
            this.createMaintenanceItemForm(index + 1, item)
          )
        : [this.createMaintenanceItemForm(1)]
    );

    return this.fb.group({
      outillage: [initialValue?.outillage ?? null],
      outillNoRefSAP: this.createOutillNoRefSAPForm(initialValue?.outillNoRefSAP),
      dateBesoin: [initialValue?.dateBesoin ?? null],
      image: [initialValue?.image ?? ''],
      fichier: [initialValue?.fichier ?? ''],
      sigle: [initialValue?.sigle ?? ''],
      userValideur: [initialValue?.userValideur ?? null],
      dateValid: [initialValue?.dateValid ?? null],
      itemActionCorrective: itemsArray
    });
  }

  // Ajouter un item de maintenance
  addMaintenanceItem(form: FormGroup): void {
    const itemsArray = form.get('itemActionCorrective') as FormArray;
    const newRep = itemsArray.length + 1;
    itemsArray.push(this.createMaintenanceItemForm(newRep));
  }

  // Supprimer un item de maintenance
  removeMaintenanceItem(form: FormGroup, index: number): void {
    const itemsArray = form.get('itemActionCorrective') as FormArray;
    if (itemsArray.length > 1) {
      itemsArray.removeAt(index);
      // Renuméroter les items restants
      itemsArray.controls.forEach((control, idx) => {
        control.get('rep')?.setValue(idx + 1);
      });
    }
  }

  // ==========================================================================
  // SPÉCIFICATIONS SBO (Nouvelle demande outillage)
  // ==========================================================================

  createSpecSBOForm(initialValue?: Partial<SpecSBOFormValue>): FormGroup {
    return this.fb.group({
      title: [initialValue?.title ?? '', Validators.required],
      description: [initialValue?.description ?? '', Validators.required],
      dateBesoin: [initialValue?.dateBesoin ?? null, Validators.required],
      // aircraftProgram: [initialValue?.aircraftProgram ?? '', Validators.required]
    });
  }

  // ==========================================================================
  // NOUVEAU TOOL (création d'outillage)
  // ==========================================================================

  createNewToolForm(initialValue?: { sapToolNumber?: string; identification?: string; designation?: string }): FormGroup {
    return this.fb.group({
      sapToolNumber: [initialValue?.sapToolNumber ?? '', Validators.required],
      identification: [initialValue?.identification ?? '', Validators.required],
      designation: [initialValue?.designation ?? '', Validators.required]
    });
  }

  // ==========================================================================
  // FORMULAIRE COMPLET NEW TOOL REQUEST (combiné)
  // ==========================================================================

  createNewToolRequestForm(): FormGroup {
    return this.fb.group({
      tool: this.createNewToolForm(),
      toolRequest: this.createToolRequestForm(),
      specSbo: this.createSpecSBOForm()
    });
  }
}

// ============================================================================
// HELPERS POUR ACCÉDER AUX FORM ARRAYS
// ============================================================================

export function getMaintenanceItems(form: FormGroup): FormArray {
  return form.get('itemActionCorrective') as FormArray;
}

export function getMaintenanceItemAt(form: FormGroup, index: number): FormGroup {
  return getMaintenanceItems(form).at(index) as FormGroup;
}
