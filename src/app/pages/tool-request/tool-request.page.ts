import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
@Component({
  selector: 'app-tool-request',
  templateUrl: './tool-request.page.html',
  styleUrls: ['./tool-request.page.scss'],
})
export class ToolRequestPage implements OnInit {
  @ViewChild('menu') menu: IonMenu;
  public page: any = {
    pageTitle: 'Module Outillage',
    menuTitle: 'Menu outillage',
    contentId: 'tooling-content'
  };
  constructor(
    public router: Router,
    public navCtrl: NavController
  ) {
  }

  ionViewWillEnter() {
    this.page = {
      pageTitle: 'Module Outillage',
      menuTitle: 'Menu outillage',
      contentId: 'tooling-content'
    };
    this.menu.open();
  }


  ngOnInit() {
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
