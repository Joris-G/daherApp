import { Component } from '@angular/core';
import { NoticeService } from 'src/app/shared/services/notice/notice.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { LoginNoticeComponent } from '../login/login-notice/login-notice.component';
import { SharedUserHeaderComponent } from '../../../shared/components/shared-user-header/shared-user-header.component';
import { MenuHomeComponent } from './menu-home/menu-home.component';
import { IonIcon, IonFabButton, IonContent, IonFab } from "@ionic/angular/standalone";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    standalone: true,
  imports: [IonFab, IonContent, IonFabButton, IonIcon, SharedUserHeaderComponent, MenuHomeComponent,],
})
export class HomePage {
  public page: any;

  constructor(
    private noticeService: NoticeService,
    private titleService: TitleService
  ) { }


  showNotice() {
    this.noticeService.presentModal(LoginNoticeComponent);
  }
  ionViewWillEnter() {
    this.titleService.setTitle('ACCUEIL');
  }
}
