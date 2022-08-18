import { Component, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage {
  @ViewChild('menuAdmin') menuAdmin: IonMenu;
  constructor(
    private navCtrl: NavController,
  ) { }
  ionViewWillEnter() {
    this.menuAdmin.open();
  }
  navigate(url: string) {
    this.navCtrl.navigateForward(url);
  }
}
