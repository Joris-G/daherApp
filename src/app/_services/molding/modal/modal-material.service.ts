import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subject } from 'rxjs';
import { NonExpiredMaterialInputComponent } from
  'src/app/pages/molding/_components/non-expired-material-input/non-expired-material-input.component';

@Injectable({
  providedIn: 'root'
})
export class ModalMaterialService {
  public materialObject: Subject<any>;
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
