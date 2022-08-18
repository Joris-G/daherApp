import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/core/services/notice/notice.service';

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
    private noticeService: NoticeService,
  ) {
  }

  ngOnInit(): void {
    this.menuItems = MENU_ITEMS;
  }

  showNotice() {
    this.noticeService.presentModal();
  }
}
