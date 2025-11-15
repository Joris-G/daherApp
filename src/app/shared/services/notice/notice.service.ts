import { inject, Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular/standalone';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private modal: HTMLIonModalElement;
  private readonly modalController: ModalController = inject(ModalController);

  async presentModal(noticeComponent: any) {
    this.modal = await this.modalController.create({
      component: noticeComponent,
      cssClass: 'fullscreen'
    });
    await this.modal.present();
  }

  async closeModal() {
    await this.modal.dismiss();
  }
}
