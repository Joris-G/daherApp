import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, IonMenu, NavController } from '@ionic/angular';
@Component({
  selector: 'app-molding',
  templateUrl: './molding.page.html',
  styleUrls: ['./molding.page.scss'],
})
export class MoldingPage {
  @ViewChild('inputIdMolding') inputIdMolding: IonInput;
  @ViewChild('menu') menu: IonMenu;
  public page: any = {
    pageTitle: 'MODULE MOULAGE',
    menuTitle: 'Menu Moulage',
    contentId: 'molding-content'
  };
  constructor(
    public router: Router,
    public navCtrl: NavController,
  ) { }

  ionViewWillEnter() {
    this.menu.open();
  }

  idMoldingInputChange() {
    if (this.inputIdMolding.value !== '') {
      this.menu.close();
      this.router.navigate([`molding/create-molding`, this.inputIdMolding.value]);
      this.inputIdMolding.value = '';
    }
  }
  navigate(url: string) {
    this.navCtrl.navigateForward(url);
  }

}
