import { Component, inject, OnInit } from '@angular/core';
import packageJson from 'package.json';
import { NoticeService } from 'src/app/shared/services/notice/notice.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { LoginNoticeComponent } from './login-notice/login-notice.component';
import { LoginFormComponent } from './login-form/login-form.component';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    standalone: true,
  imports: [LoginFormComponent],
})
export class LoginPage implements OnInit {

  public version: string = packageJson.version;
  private readonly noticeService: NoticeService = inject(NoticeService);
  private readonly titleService: TitleService = inject(TitleService);


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
