import { Injectable } from '@angular/core';
import { Core } from 'src/app/_interface/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }
  getCoreByBatchNumber(batchNumber: string) {
    return new Promise<Core>((resolve, reject) => {
      let returnBatchNumber: any = batchNumber.substring(5,).split('~');
      console.log(returnBatchNumber);
      returnBatchNumber = {
        partNumber: returnBatchNumber[0],
        batch1: returnBatchNumber[1],
        batch2: returnBatchNumber[2],
      };
      const core: Core = {
        idCore: 1,
        batchNumber: returnBatchNumber
      };
      console.log(core);
      resolve(core);
    });
  }
}
