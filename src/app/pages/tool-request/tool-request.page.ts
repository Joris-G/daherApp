import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { IonMenu } from '@ionic/angular';
import { Router } from '@angular/router';
const MENU_ITEMS = [
  {
    title: 'Nouvelle demande outillage',
    path: '/new-tool',
    type: 'button',
  },
  {
    title: 'Liste des demandes outillages',
    path: '/tool-requests',
    type: 'button',
  }
];
@Component({
  selector: 'app-tool-request',
  templateUrl: './tool-request.page.html',
  styleUrls: ['./tool-request.page.scss'],
})
export class ToolRequestPage implements OnInit, AfterViewInit {
  @ViewChild('menu') menu: IonMenu;
  public page: any = {
    pageTitle: 'Module Outillage',
    menuTitle: 'Menu outillage',
    menuItems: MENU_ITEMS,
    contentId: 'tooling-content'
  };
  constructor(
    public router: Router,
  ) {
  }
  ngAfterViewInit(): void {
    // this.menu.open();
  }

  ngOnInit() {
  }

}
