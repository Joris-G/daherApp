import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginNoticeComponent } from 'src/app/composants/notices/login-notice/login-notice.component';

@Injectable({
  providedIn: 'root'
})
export class NoticeService {
  private modal: HTMLIonModalElement;

  constructor(private modalController: ModalController) { }
  async presentModal() {
    this.modal = await this.modalController.create({
      component: LoginNoticeComponent,
      cssClass: 'fullscreen'
    });
    await this.modal.present();
  }

  async closeModal() {
    await this.modal.dismiss();
  }
}
