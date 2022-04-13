import { Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  @ViewChild('menu') menu: IonMenu;
  constructor() { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.menu.open();
  }
}
