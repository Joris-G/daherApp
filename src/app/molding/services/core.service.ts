import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AdditionalMaterial, Core } from 'src/app/_interfaces/molding/composite-material-types';

@Injectable({
  providedIn: 'root'
})
export class CoreService {

  getCoreByBatchNumber(batchNumber: string): Observable<Core | undefined> {
    let returnBatchNumber: any = batchNumber.substring(5,).split('~');
    returnBatchNumber = {
      partNumber: returnBatchNumber[0],
      batch1: returnBatchNumber[1],
      //TODO retirer les deux premiers caractères
      batch2: returnBatchNumber[2],
      // TODO batch3: trois derniers caractères de batch2
    };
    const core: Core = {
      idCore: 1,
      batchNumber: returnBatchNumber
    };
    return of(core);
  }
  getIri(obj: AdditionalMaterial){
    return `/api/additional_materials/${obj.id}`;
  }
}
