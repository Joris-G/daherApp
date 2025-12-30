import { Component, OnInit } from '@angular/core';

import { IonicModule } from '@ionic/angular';
import { RouterLink } from '@angular/router';
export interface IMenuItem {
  title: string;
  path: string;
  type: string;
}
@Component({
    selector: 'app-menu-home',
    templateUrl: './menu-home.component.html',
    styleUrls: ['./menu-home.component.scss'],
    imports: [
    IonicModule,
    RouterLink
]
})
export class MenuHomeComponent {
  menuItems: IMenuItem[] = [
    {
      title: 'Moulage',
      path: '/molding',
      type: 'button',
    },
    {
      title: 'Outillage',
      path: '/tooling',
      type: 'button',
    }
  ];
}
