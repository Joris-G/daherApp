import { Injectable } from '@angular/core';
import { Kit } from 'src/app/_interface/kit';
import { KitService } from '../kits/kit.service';


@Injectable({
  providedIn: 'root'
})
export class ScanService {

  public scanState: boolean;
  constructor(private kitService: KitService) {
  }

  getScanInput(scanInputValue: string) {
    return new Promise((resolve, reject) => {
      this.kitService.getKitById(scanInputValue)
        .then((kit: Kit) => {
          resolve(kit);
        },
          () => {
            reject();
          }
        );
    });
  }
}
