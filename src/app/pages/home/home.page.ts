import { Component, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonInput, NavController } from '@ionic/angular';

const MENU_ITEMS = [
  {
    title: 'Nouveau moulage',
    path: '/molding',
    type: 'button',
  },
  {
    title: 'Modifier moulage',
    path: '',
    type: 'normal',
    options: {
      qualityOnly: true,
      input: true,
    }
  }
];

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  @ViewChild('inputIdMolding') inputIdMolding: IonInput;
  public menuItems: any;
  constructor(public router: Router,
    public navCtrl: NavController) {
    this.menuItems = MENU_ITEMS;
  }

  idMoldingInputChange() {

    if (this.inputIdMolding.value !== '') {
      console.log(this.inputIdMolding.value);
      this.router.navigate([`/molding`, this.inputIdMolding.value]);
    }
  }
}
