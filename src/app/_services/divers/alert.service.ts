import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
    private toastController: ToastController,
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

  async presentAlertConfirm(header: string, message: string) {
    return new Promise<boolean>((resolve, reject) => {
      this.alertController.create({
        cssClass: 'my-custom-class',
        header,
        message,
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            cssClass: ['ion-color-primary', 'ion-button'],
            id: 'cancel-button',
            handler: () => {
              console.log('Response false');
              resolve(false);
            }
          }, {
            text: 'Oui',
            id: 'confirm-button',
            cssClass: 'ion-color-danger',
            handler: () => {
              console.log('Response true');
              resolve(true);
            },
          }
        ]
      })
        .then((alert) => {
          alert.present();
        });
    });
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1000,
      position: 'bottom',
      translucent: true,
      animated: true,
    });
    toast.present();
  }
}
