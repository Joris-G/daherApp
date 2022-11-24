import { Component, OnInit } from '@angular/core';
import { NoticeService } from 'src/app/core/services/notice/notice.service';

@Component({
  selector: 'app-login-notice',
  templateUrl: './login-notice.component.html',
  styleUrls: ['./login-notice.component.scss'],
})
export class LoginNoticeComponent implements OnInit {

  constructor(private noticeService: NoticeService) { }

  ngOnInit() { }
  backClick() {
    this.noticeService.closeModal();
  }
}
