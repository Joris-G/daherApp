import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/shared/services/notice/notice.service';

@Component({
  selector: 'app-login-notice',
  templateUrl: './login-notice.component.html',
  styleUrls: ['./login-notice.component.scss'],
})
export class LoginNoticeComponent {
  constructor(private noticeService: NoticeService) { }
  backClick() {
    this.noticeService.closeModal();
  }

}
