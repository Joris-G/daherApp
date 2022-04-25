import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  @ViewChild('menuAdmin') menuAdmin: IonMenu;
  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menuAdmin.open();
  }
  navigate(url: string) {
    this.navCtrl.navigateRoot(url)
      .then(() => {

      })
      .catch((err) => {
        console.error(err);

      });
    // this.router.navigateByUrl(url);
  }
}
