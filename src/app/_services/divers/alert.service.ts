import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController
  ) { }

  async simpleAlert(header: string, subHeader: string, message: string) {
    const alert = await this.alertController.create({
      cssClass: 'simple-alert',
      header,
      subHeader,
      message,
      buttons: [
        {
          text: 'Fermer',
          role: 'cancel',
          id: 'cancel-button',
        }
      ]
    });
    await alert.present();
  }
}
