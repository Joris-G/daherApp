import { AbstractControl, FormGroup } from '@angular/forms';
import { Tool } from '../tooling/tool';

export class Core {
  idCore?: number;
  batchNumber?: string;
  reference?: string;

  constructor(idCore?: number, batchNumber?: string, reference?: string) {
    this.idCore = idCore;
    this.batchNumber = batchNumber;
    this.reference = reference;
  }



  static isCore(inputValue: any) {
    return Object.getOwnPropertyNames(inputValue).includes('idCore');
  }
}

export class Kit {

  id: number;
  idMM: string;
  referenceSAP: number;
  designationSAP: string;
  tackLife: number;
  timeOut: number;
  lotSAP: string;
  peremptionMoins18: Date;
  aDrapAv: Date;
  aCuirAv: Date;
  decongel: Date;
  updateAt?: Date;
  status: boolean;
  createdAt: Date;
  layupDate?: Date = null;

  static isKit(objTotest: any): boolean {
    return Object.getOwnPropertyNames(objTotest).includes('idMM');
  }
}


export class Densif {
  id?: number;
  batchNumber: string;
  partnumber: string;
}

export class AdditionalMaterial {
  id?: number;
  designation?: string;
  ref?: string;
  numLot: string;
  typeMaterial?: TypeMaterial;
  outillageMoulage?: Tool;
}
export class AdditionalMaterialForm extends FormGroup {
  declare value: AdditionalMaterial;
  declare controls: {
    id?: AbstractControl;
    designation?: AbstractControl;
    ref: AbstractControl;
    numLot: AbstractControl;
    typeMaterial: AbstractControl<TypeMaterial>;
    outillageMoulage?: AbstractControl;
  };
}

export class TypeMaterial {
  designation: string;
}
