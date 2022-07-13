import { Component, OnInit } from '@angular/core';
import { HeaderService } from 'src/app/composants/shared-user-header/header.service';
import { PageParams } from 'src/app/composants/shared-user-header/page-params';
import { NoticeService } from 'src/app/_services/notice/notice.service';
export interface IMenuItem {
  title: string;
  path: string;
  type: string;
}
const MENU_ITEMS: IMenuItem[] = [
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

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public page: any;
  public menuItems: IMenuItem[];
  constructor(
    private headerService: HeaderService,
    private noticeService: NoticeService,
  ) {
  }

  ngOnInit(): void {
    console.log('home init');
    this.menuItems = MENU_ITEMS;
    const pageParams: PageParams = { title: 'ACCUEIL', visible: true };
    this.headerService.changePageParams(pageParams, 'home');
  }

  ionViewDidEnter() {
    console.log('did enter');

  }

  showNotice() {
    this.noticeService.presentModal();
  }
}
