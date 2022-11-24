import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { NonExpiredMaterialInputComponent } from
  'src/app/molding/components/create-molding/non-expired-material-input/non-expired-material-input.component';
import { AdditionalMaterial } from 'src/app/_interfaces/molding/composite-material-types';

@Injectable({
  providedIn: 'root'
})
export class ModalMaterialService {
  public materialObject: Subject<AdditionalMaterial>;
  constructor(private modalCtrl: ModalController) { }


  public async createModal(scanInputValue: string) {
    this.materialObject = new Subject<any>();
    const modalMaterial = await this.modalCtrl.create({
      component: NonExpiredMaterialInputComponent,
      componentProps: { materialObject: this.materialObject, batchNumber: scanInputValue },
    });
    await modalMaterial.present();
    this.materialObject.subscribe(() => {
      this.modalCtrl.dismiss();
      this.materialObject.unsubscribe();
    });
  }

}
