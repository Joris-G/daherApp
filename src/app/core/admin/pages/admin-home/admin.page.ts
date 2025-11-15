import { Component, ViewChild } from '@angular/core';
import { IonMenu, NavController, IonicModule } from '@ionic/angular';
import { SharedAdminHeaderComponent } from '../../components/shared-admin-header/shared-admin-header.component';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    styleUrls: ['./admin.page.scss'],
    standalone: true,
    imports: [SharedAdminHeaderComponent, IonicModule],
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
