import { Component, effect, inject, OnInit } from '@angular/core';
import packageJson from 'package.json';
import { NoticeService } from 'src/app/shared/services/notice/notice.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { LoginNoticeComponent } from './login-notice/login-notice.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { IonContent, IonFab, IonFabButton, IonIcon, IonToolbar, IonFooter } from "@ionic/angular/standalone";
import { UsersStore } from 'src/app/shared/services/users/users.store';
import { User } from 'src/app/_interfaces/user';
import { AuthStore } from 'src/app/shared/services/users/auth.store';
import { Credentials } from 'src/app/shared/services/users/credentials.interface';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    IonFooter,
    IonToolbar,
    IonIcon,
    IonFabButton,
    IonFab,
    IonContent,
    LoginFormComponent
  ],
})
export class LoginPage implements OnInit {
  private readonly usersStore = inject(UsersStore);
  private readonly authStore = inject(AuthStore);
  private readonly router = inject(Router);
  public version: string = packageJson.version;
  private readonly noticeService: NoticeService = inject(NoticeService);
  private readonly titleService: TitleService = inject(TitleService);
  private readonly loadingService: LoadingService = inject(LoadingService);
  private readonly alertService: AlertService = inject(AlertService);

  constructor(){
    effect(()=>{
      const isLogged: boolean = this.authStore.isAuthenticated();
      if (isLogged) {
        //TODO ReRoute user
        this.router.navigate(['/home']);
        // TODO this.updateService.showUpdates();
      }

      const isLoading: boolean = this.authStore.loading();
      if (isLoading) {
        this.loadingService.startLoading("Connexion en cours ... ");
      } else {
        this.loadingService.stopLoading();
      }

      const error: string = this.authStore.error();
      if (error) {
        this.loadingService.stopLoading();
        this.alertService.presentToast(error, 'danger');
      }
    })
  }

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

  connection(userCredentials: Credentials){
    this.authStore.login(userCredentials);
  }

}
