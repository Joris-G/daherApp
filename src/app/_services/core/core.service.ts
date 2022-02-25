import { Injectable } from '@angular/core';
import { Core } from 'src/app/_interface/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  constructor() { }
  getCoreByBatchNumber(batchNumber: string) {
    return new Promise<Core>((resolve, reject) => {
      const core: Core = {
        idCore: 1,
        batchNumber
      };
      resolve(core);
    });
  }
}
