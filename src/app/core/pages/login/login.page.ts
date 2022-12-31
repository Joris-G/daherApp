import { Component, OnInit } from '@angular/core';
import packageJson from 'package.json';
import { NoticeService } from 'src/app/shared/services/notice/notice.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { LoginNoticeComponent } from './login-notice/login-notice.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public version: string = packageJson.version;


  constructor(
    private noticeService: NoticeService,
    private titleService: TitleService
  ) { }

  showNotice() {
    this.noticeService.presentModal(LoginNoticeComponent);
  }

  ionViewWillEnter(): void {
    this.titleService.setTitle('Connexion');
    // this.loginForm.reset();
    // if (isDevMode()) {
    //   this.loginForm.setValue({
    //     userName: environment.username,
    //     password: environment.password
    //   });
    // }
  }

  ngOnInit() {

    // Notification.requestPermission().then((result) => {
    //   if (!('Notification' in window)) {
    //     alert('Ce navigateur ne prend pas en charge la notification de bureau');
    //   }
    //   console.log(result);
    //   const img = 'assets/images/logoDaher.png';
    //   const text = 'Coucou ! Votre tâche "' + '" arrive maintenant à échéance.';
    //   const notification = new Notification('Liste de trucs à faire', { body: text, icon: img });
    // });

  }


}
