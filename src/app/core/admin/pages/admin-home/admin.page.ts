import { Component, ViewChild } from '@angular/core';
import { SharedAdminHeaderComponent } from '../../components/shared-admin-header/shared-admin-header.component';

@Component({
  standalone: true,
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    styleUrls: ['./admin.page.scss'],
  // imports: [SharedAdminHeaderComponent]
})
export class AdminPage {
  // @ViewChild('menuAdmin') menuAdmin: IonMenu;
  constructor(
    // private navCtrl: NavController,
  ) { }
  ionViewWillEnter() {
    // this.menuAdmin.open();
  }
  navigate(url: string) {
    // this.navCtrl.navigateForward(url);
  }
}
