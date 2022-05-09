import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Core } from 'src/app/_interfaces/molding/core';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  getCoreByBatchNumber(batchNumber: string): Observable<Core | undefined> {
    let returnBatchNumber: any = batchNumber.substring(5,).split('~');
    returnBatchNumber = {
      partNumber: returnBatchNumber[0],
      batch1: returnBatchNumber[1],
      batch2: returnBatchNumber[2],
    };
    const core: Core = {
      idCore: 1,
      batchNumber: returnBatchNumber
    };
    return of(core);
  }
}