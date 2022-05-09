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

  static isKit(objTotest: any): boolean {
    return Object.getOwnPropertyNames(objTotest).includes('idMM');
  }
}
