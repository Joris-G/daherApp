import { Component, effect, inject, OnInit, signal } from '@angular/core';
import packageJson from 'package.json';
import { NoticeService } from 'src/app/shared/services/notice/notice.service';
import { TitleService } from 'src/app/shared/services/title.service';
import { LoginNoticeComponent } from './login-notice/login-notice.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { User } from 'src/app/_interfaces/user';
import { AuthStore } from 'src/app/shared/services/users/auth.store';
import { Credentials } from 'src/app/shared/services/users/credentials.interface';
import { LoadingService } from 'src/app/shared/services/divers/loading.service';
import { AlertService } from 'src/app/shared/services/divers/alert.service';
import { LoginRedirectionService } from './services/login-redirection.service';
import { ButtonModule } from 'primeng/button'

@Component({
  standalone: true,
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
  imports: [
    LoginFormComponent, ButtonModule

    ]
})
export class LoginPage implements OnInit {
  private readonly titleService: TitleService = inject(TitleService);
  private readonly authStore = inject(AuthStore);
  private readonly noticeService: NoticeService = inject(NoticeService);
  private readonly loadingService: LoadingService = inject(LoadingService);
  private readonly alertService: AlertService = inject(AlertService);
  private readonly loginRedirectionService: LoginRedirectionService = inject(LoginRedirectionService);

  /** @description Version de l'application issue du store ou de la config */
  public readonly version = signal(`${packageJson.version}`);

  constructor(){

    /**
     * @description Effect responsable de la redirection post-connexion.
     * Déclenché lorsque l'état d'authentification ou l'utilisateur change.
     */
    effect(() => {
      const isLogged: boolean = this.authStore.isAuthenticated();
      const curUser: User | null = this.authStore.user(); // Utiliser User | null pour la sécurité

      // La redirection est un effet secondaire
      if (isLogged && curUser) {
        this.loginRedirectionService.reRouteUser(curUser);
        // TODO this.updateService.showUpdates();
      }
    });

    /**
     * @description Effect responsable de l'affichage du loader.
     * Déclenché lorsque l'état de loading du Store change.
     */
    effect(() => {
      const isLoading: boolean = this.authStore.loading();

      // La manipulation du service de loading est un effet secondaire
      if (isLoading) {
        this.loadingService.startLoading("Connexion en cours ... ");
      } else {
        this.loadingService.stopLoading();
      }
    });

    /**
     * @description Effect responsable de l'affichage des erreurs.
     * Déclenché lorsque le signal d'erreur du Store change.
     */
    effect(() => {
      const error: string | null = this.authStore.error(); // Utiliser string | null

    // L'affichage de l'erreur est un effet secondaire
      if (error) {
        this.loadingService.stopLoading(); // S'assurer que le loader est stoppé en cas d'erreur
        this.alertService.presentToast(error, 'danger');
      }
    });
  }

  /**
   * @description Affiche la notice d'information.
   */
  showNotice() {
    this.noticeService.presentModal(LoginNoticeComponent);
  }

  ngOnInit() {
    this.titleService.setTitle('Connexion');
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

  /**
   * @description Gère la soumission des identifiants utilisateur.
   * 
   * @param {Credentials} userCredentials - Les identifiants de l'utilisateur.
   */
  connection(userCredentials: Credentials) {
    this.authStore.login(userCredentials);
  }

}
