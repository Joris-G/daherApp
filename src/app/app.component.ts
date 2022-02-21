import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from './_services/users/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public page: string;
  constructor(
    private alertController: AlertController,
    private authService: AuthService) {
    // setInterval(() => {
    //   this.alertLogout();
    // }, 1000 * 5);
  }

  async alertLogout() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Gestion de la connexion',
      message: 'Voulez-vous rester connecter ?',
      buttons: [
        {
          text: 'Oui',
          role: 'yes',
          id: 'cancel-button',
          handler: (data) => {

          }
        },
        {
          text: 'Non',
          role: 'no',
          id: 'button',
          handler: (data) => {
            this.authService.logout();
          }
        }
      ]
    });
    setTimeout(() => {
      this.authService.logout();
      alert.dismiss();
    }, 5000);
    await alert.present();

  }
}
