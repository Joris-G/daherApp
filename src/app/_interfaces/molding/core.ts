export class Core {

  idCore?: number;
  batchNumber: any;

  static isCore(inputValue: any) {
    return Object.getOwnPropertyNames(inputValue).includes('idCore');
  }
}
