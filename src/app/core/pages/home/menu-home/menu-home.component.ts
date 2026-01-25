import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
export interface IMenuItem {
  title: string;
  path: string;
  type: string;
}
@Component({
  standalone: true,
    selector: 'app-menu-home',
    templateUrl: './menu-home.component.html',
    styleUrls: ['./menu-home.component.scss'],
  imports: [
    // RouterLink
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
